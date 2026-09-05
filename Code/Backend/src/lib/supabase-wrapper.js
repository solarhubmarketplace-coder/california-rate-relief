/**
 * Supabase Wrapper with Retry Logic
 * Provides exponential backoff for transient Supabase errors
 * (ConnectTimeoutError, fetch failed, Cloudflare 500/502/503/504)
 */
const { supabaseAdmin } = require("./supabase");

const RETRYABLE_PATTERNS = [
  "connecttimeouterror",
  "econnreset",
  "etimedout",
  "enotfound",
  "fetch failed",
  "network error",
  "internal server error",
  "502",
  "503",
  "504",
];

/**
 * Execute a Supabase operation with automatic retry on transient errors
 * @param {Function} operation - Async function that performs the Supabase query
 * @param {Object} opts
 * @param {number} opts.maxRetries - Max retry attempts (default: 2)
 * @param {number} opts.baseDelay - Base delay in ms (default: 1000)
 * @param {string} opts.label - Label for logging (default: "supabase")
 * @returns {Promise<any>} - Result of the operation
 */
/**
 * CIRCUIT BREAKER
 *
 * Why this exists: on 2026-09-05 the Sun Speed Postgres instance (t4g.nano,
 * shared CPU, burstable disk IOPS) sat at 100% DISK IO with a 33.8 MB database.
 * The dashboard recorded 136,697 API-gateway requests in 24 hours, of which
 * 136,696 errored. The cause was this retry wrapper: every failing call was
 * retried up to 3x, so the moment the database slowed down the backend TRIPLED
 * the load against it, burned the remaining IOPS burst credits, and kept the
 * instance pinned so it could not recover. Outages recurred every couple of days
 * as burst credits refilled and were immediately exhausted again.
 *
 * The breaker stops that feedback loop: after CB_THRESHOLD consecutive failures
 * we stop issuing calls entirely for CB_COOLDOWN_MS, letting IOPS credits refill.
 * One probe call is allowed through at the end of each cooldown to test recovery.
 */
const CB_THRESHOLD = Number(process.env.SUPABASE_CB_THRESHOLD || 5);
const CB_COOLDOWN_MS = Number(process.env.SUPABASE_CB_COOLDOWN_MS || 60000);

const breaker = {
  consecutiveFailures: 0,
  openedAt: 0,
  isOpen() {
    if (!this.openedAt) return false;
    if (Date.now() - this.openedAt >= CB_COOLDOWN_MS) {
      // Cooldown elapsed — allow a single probe through (half-open).
      this.openedAt = 0;
      this.consecutiveFailures = CB_THRESHOLD - 1;
      console.warn("[supabase-cb] Cooldown elapsed, allowing probe request");
      return false;
    }
    return true;
  },
  recordSuccess() {
    if (this.consecutiveFailures > 0 || this.openedAt) {
      console.log("[supabase-cb] Recovered, circuit closed");
    }
    this.consecutiveFailures = 0;
    this.openedAt = 0;
  },
  recordFailure() {
    this.consecutiveFailures += 1;
    if (this.consecutiveFailures >= CB_THRESHOLD && !this.openedAt) {
      this.openedAt = Date.now();
      console.error(
        `[supabase-cb] OPEN after ${this.consecutiveFailures} consecutive failures — ` +
          `pausing Supabase calls for ${CB_COOLDOWN_MS}ms to let the instance recover`
      );
    }
  },
};

class CircuitOpenError extends Error {
  constructor() {
    super("Supabase circuit breaker is open — database is failing, calls paused");
    this.name = "CircuitOpenError";
    this.circuitOpen = true;
  }
}

function isCircuitOpen() {
  return Boolean(breaker.openedAt) && Date.now() - breaker.openedAt < CB_COOLDOWN_MS;
}

async function withRetry(operation, opts = {}) {
  const { maxRetries = 2, baseDelay = 1000, label = "supabase" } = opts;

  // Fail fast while the breaker is open rather than piling more load onto a
  // database that is already saturated.
  if (breaker.isOpen()) {
    throw new CircuitOpenError();
  }

  for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
    try {
      const result = await operation();

      // Handle Supabase-style { data, error } responses
      if (result && result.error) {
        const errMsg = (result.error.message || "").toLowerCase();
        const isRetryable = RETRYABLE_PATTERNS.some((p) => errMsg.includes(p));

        if (isRetryable) {
          breaker.recordFailure();
          // Stop retrying the moment the breaker opens — further attempts would
          // be exactly the load amplification the breaker exists to prevent.
          if (attempt <= maxRetries && !isCircuitOpen()) {
            const delay = baseDelay * Math.pow(2, attempt - 1);
            console.warn(
              `[${label}] Retry ${attempt}/${maxRetries} after ${delay}ms: ${result.error.message}`
            );
            await new Promise((r) => setTimeout(r, delay));
            continue;
          }
          return result;
        }
      }

      breaker.recordSuccess();
      return result;
    } catch (error) {
      const errMsg = (error.message || "").toLowerCase();
      const isRetryable = RETRYABLE_PATTERNS.some((p) => errMsg.includes(p));

      if (isRetryable) {
        breaker.recordFailure();
        if (attempt <= maxRetries && !isCircuitOpen()) {
          const delay = baseDelay * Math.pow(2, attempt - 1);
          console.warn(
            `[${label}] Retry ${attempt}/${maxRetries} after ${delay}ms: ${error.message}`
          );
          await new Promise((r) => setTimeout(r, delay));
          continue;
        }
      }

      throw error;
    }
  }
}

/**
 * Clear breaker state. The breaker is deliberately process-global in production
 * (one saturated database, one shared verdict), so tests must reset it between
 * cases or failures from one case will open the circuit for the next.
 */
function resetBreaker() {
  breaker.consecutiveFailures = 0;
  breaker.openedAt = 0;
}

module.exports = {
  supabaseAdmin,
  withRetry,
  isCircuitOpen,
  resetBreaker,
  CircuitOpenError,
  // Exposed for tests and for the scheduler's back-off check.
  _breaker: breaker,
};
