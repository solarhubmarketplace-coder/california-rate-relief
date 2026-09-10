// =============================================================================
// INDEXNOW SUBMISSION HELPER
// =============================================================================
// IndexNow is the push-notification protocol shared by Bing, Yandex, Seznam and
// Naver (and read by several AI-search crawlers that ride Bing's index). Instead
// of waiting for a crawl, we POST the URLs that just changed.
//
// Protocol shape (https://www.indexnow.org/documentation):
//   POST https://api.indexnow.org/indexnow
//   Content-Type: application/json; charset=utf-8
//   { "host": "ratereliefca.com",
//     "key": "<key>",
//     "keyLocation": "https://ratereliefca.com/<key>.txt",
//     "urlList": ["https://ratereliefca.com/blog/…", …] }
//
// Hard protocol limits this file respects:
//   * urlList is capped at 10,000 URLs per request → we chunk.
//   * Every URL must be on the same host as `host` → we filter and report.
//   * The key must be retrievable at keyLocation as text/plain. When the key
//     file is NOT at the site root, IndexNow only accepts URLs beneath that
//     same directory — which is why keyLocation is always root-level here and
//     never /api/indexnow/key. See src/app/api/indexnow/key/route.ts.
//
// Google does NOT participate in IndexNow. Google discovery still comes from
// the sitemap in src/app/sitemap.ts — this helper is additive, not a
// replacement.
//
// Nothing in this file may throw on a missing/blank INDEXNOW_KEY. It is called
// from a route handler and (optionally) from publish scripts; a missing key is
// a configuration state, not a failure worth breaking a build or a request for.
// =============================================================================

/** Default host for submissions. CRR is the only site currently wired up. */
const DEFAULT_HOST = 'ratereliefca.com';

/** IndexNow protocol maximum URLs per request. */
const MAX_URLS_PER_BATCH = 10000;

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

/** Per-request timeout, ms. IndexNow answers in well under a second normally. */
const REQUEST_TIMEOUT_MS = 15000;

/**
 * Sentinel `error` value returned when INDEXNOW_KEY is absent. Callers can
 * compare against this to distinguish "not configured" (a no-op, safe to
 * ignore) from "the upstream request actually failed" (worth alerting on).
 */
export const INDEXNOW_KEY_MISSING = 'INDEXNOW_KEY is not set — submission skipped';

export interface IndexNowResult {
  /** Number of URLs actually accepted into a request body. */
  submitted: number;
  /** Number of HTTP requests made to the IndexNow endpoint. */
  batches: number;
  /** True only if every batch returned a 2xx. */
  ok: boolean;
  /** Present whenever ok is false, or when URLs were dropped. */
  error?: string;
}

export interface SubmitToIndexNowOptions {
  /** Bare hostname, no scheme, no trailing slash. Defaults to ratereliefca.com. */
  host?: string;
  /** Overrides process.env.INDEXNOW_KEY. Mostly for tests and scripts. */
  key?: string;
}

/** IndexNow accepts keys of 8–128 chars from [a-zA-Z0-9-]. */
function isValidKey(key: string): boolean {
  return /^[a-zA-Z0-9-]{8,128}$/.test(key);
}

/**
 * Keep only absolute http(s) URLs whose hostname matches `host`. IndexNow
 * rejects the whole batch with a 422 if a single URL is off-host, so filtering
 * here turns one silent total failure into a partial success plus a warning.
 *
 * www is treated as the same site for the MATCH, but the hostname of every
 * accepted URL is then rewritten to exactly `host`. IndexNow compares the
 * payload's `host` against each urlList entry literally, so submitting
 * https://www.ratereliefca.com/x under host "ratereliefca.com" would 422 the
 * whole batch. This is also what collapses www/non-www duplicates below.
 */
function normalizeUrls(urls: string[], host: string): { valid: string[]; dropped: string[] } {
  const valid: string[] = [];
  const dropped: string[] = [];
  const seen = new Set<string>();
  const wantHost = host.toLowerCase().replace(/^www\./, '');

  for (const raw of urls) {
    if (typeof raw !== 'string' || raw.trim() === '') {
      dropped.push(String(raw));
      continue;
    }
    let parsed: URL;
    try {
      parsed = new URL(raw.trim());
    } catch {
      dropped.push(raw);
      continue;
    }
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      dropped.push(raw);
      continue;
    }
    if (parsed.hostname.toLowerCase().replace(/^www\./, '') !== wantHost) {
      dropped.push(raw);
      continue;
    }
    // Force the exact submission host so the payload is self-consistent.
    parsed.hostname = host;
    const href = parsed.href;
    if (seen.has(href)) continue;
    seen.add(href);
    valid.push(href);
  }

  return { valid, dropped };
}

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

/**
 * Submit one or many URLs to IndexNow.
 *
 * Never throws. A missing key, a malformed key, an empty URL list or a network
 * failure all come back as a structured result with `ok: false`.
 *
 * @example
 *   const result = await submitToIndexNow([
 *     'https://ratereliefca.com/blog/pge-time-of-use-rates-2026',
 *   ]);
 *   if (!result.ok) console.warn('[indexnow]', result.error);
 */
export async function submitToIndexNow(
  urls: string[],
  opts: SubmitToIndexNowOptions = {}
): Promise<IndexNowResult> {
  const host = (opts.host || DEFAULT_HOST).trim().replace(/^https?:\/\//, '').replace(/\/+$/, '');
  const key = (opts.key || process.env.INDEXNOW_KEY || '').trim();

  if (!key) {
    // Deliberate no-op, not an exception: this runs during builds and requests.
    console.warn(`[indexnow] ${INDEXNOW_KEY_MISSING}`);
    return { submitted: 0, batches: 0, ok: false, error: INDEXNOW_KEY_MISSING };
  }

  if (!isValidKey(key)) {
    const error = 'INDEXNOW_KEY is malformed — expected 8-128 chars of [a-zA-Z0-9-]';
    console.warn(`[indexnow] ${error}`);
    return { submitted: 0, batches: 0, ok: false, error };
  }

  if (!Array.isArray(urls) || urls.length === 0) {
    return { submitted: 0, batches: 0, ok: false, error: 'No URLs supplied' };
  }

  const { valid, dropped } = normalizeUrls(urls, host);
  const dropNote = dropped.length > 0
    ? `${dropped.length} URL(s) dropped as off-host or malformed (first: ${dropped[0]})`
    : undefined;

  if (valid.length === 0) {
    return {
      submitted: 0,
      batches: 0,
      ok: false,
      error: dropNote || `No submittable URLs for host ${host}`,
    };
  }

  // keyLocation MUST stay at the site root. A non-root key file restricts
  // IndexNow to URLs under that directory only.
  const keyLocation = `https://${host}/${key}.txt`;
  const batches = chunk(valid, MAX_URLS_PER_BATCH);
  const failures: string[] = [];
  let submitted = 0;

  for (const [index, urlList] of batches.entries()) {
    try {
      const res = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host, key, keyLocation, urlList }),
        cache: 'no-store',
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });

      if (res.ok) {
        submitted += urlList.length;
      } else {
        // 400 bad request, 403 key not valid, 422 URLs don't match host / key
        // not found at keyLocation, 429 too many requests.
        const body = await res.text().catch(() => '');
        failures.push(`batch ${index + 1}: HTTP ${res.status}${body ? ` ${body.slice(0, 200)}` : ''}`);
      }
    } catch (err) {
      failures.push(`batch ${index + 1}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  const ok = failures.length === 0;
  const errorParts = [...failures];
  if (dropNote) errorParts.push(dropNote);

  return {
    submitted,
    batches: batches.length,
    ok,
    ...(errorParts.length > 0 ? { error: errorParts.join('; ') } : {}),
  };
}
