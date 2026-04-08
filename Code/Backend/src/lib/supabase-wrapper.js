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
async function withRetry(operation, opts = {}) {
  const { maxRetries = 2, baseDelay = 1000, label = "supabase" } = opts;

  for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
    try {
      const result = await operation();

      // Handle Supabase-style { data, error } responses
      if (result && result.error) {
        const errMsg = (result.error.message || "").toLowerCase();
        const isRetryable = RETRYABLE_PATTERNS.some((p) => errMsg.includes(p));

        if (isRetryable && attempt <= maxRetries) {
          const delay = baseDelay * Math.pow(2, attempt - 1);
          console.warn(
            `[${label}] Retry ${attempt}/${maxRetries} after ${delay}ms: ${result.error.message}`
          );
          await new Promise((r) => setTimeout(r, delay));
          continue;
        }
      }

      return result;
    } catch (error) {
      const errMsg = (error.message || "").toLowerCase();
      const isRetryable = RETRYABLE_PATTERNS.some((p) => errMsg.includes(p));

      if (isRetryable && attempt <= maxRetries) {
        const delay = baseDelay * Math.pow(2, attempt - 1);
        console.warn(
          `[${label}] Retry ${attempt}/${maxRetries} after ${delay}ms: ${error.message}`
        );
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }

      throw error;
    }
  }
}

module.exports = { supabaseAdmin, withRetry };
