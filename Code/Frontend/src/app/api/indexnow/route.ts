import { NextRequest, NextResponse } from 'next/server';
import { INDEXNOW_KEY_MISSING, submitToIndexNow } from '@/lib/indexnow';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// =============================================================================
// INDEXNOW SUBMISSION ENDPOINT  (POST only)
// =============================================================================
// Called after a publish to push changed URLs to IndexNow (Bing, Yandex,
// Seznam, Naver). Google does not participate — sitemap.ts still owns Google
// discovery.
//
//   curl -X POST https://ratereliefca.com/api/indexnow \
//     -H 'content-type: application/json' \
//     -H "x-indexnow-secret: $INDEXNOW_SECRET" \
//     -d '{"urls":["https://ratereliefca.com/blog/pge-time-of-use-rates-2026"]}'
//
// -----------------------------------------------------------------------------
// WHY THIS IS AUTHENTICATED, AND WHY IT FAILS CLOSED
// -----------------------------------------------------------------------------
// An unauthenticated endpoint here would let anyone submit arbitrary URLs
// bearing ratereliefca.com's IndexNow key. That is an abuse vector in two
// directions: flooding the quota until real submissions get 429'd, and
// attributing spam submissions to this host's reputation with Bing.
//
// So: a shared secret is REQUIRED in the x-indexnow-secret header, and if
// INDEXNOW_SECRET is unset the route refuses every request with a 503. It must
// never fall open — an unset env var on a fresh environment is exactly the case
// where an open endpoint would ship unnoticed.
// =============================================================================

/** Sanity ceiling on one request body. IndexNow itself batches at 10,000. */
const MAX_URLS_PER_REQUEST = 10000;

/**
 * Length-independent-ish constant-time comparison. Compares byte by byte over
 * the longer of the two strings so the loop count does not depend on where the
 * first mismatch is. Written inline rather than via node:crypto's
 * timingSafeEqual so this file carries no runtime-specific import.
 */
function safeEqual(a: string, b: string): boolean {
  const len = Math.max(a.length, b.length);
  let mismatch = a.length === b.length ? 0 : 1;
  for (let i = 0; i < len; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function POST(request: NextRequest) {
  const expectedSecret = (process.env.INDEXNOW_SECRET || '').trim();

  // Fail closed. No secret configured → the endpoint is not available at all.
  if (!expectedSecret) {
    return NextResponse.json(
      {
        ok: false,
        error: 'INDEXNOW_SECRET is not configured on this deployment; endpoint disabled.',
      },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    );
  }

  const presented = request.headers.get('x-indexnow-secret') || '';
  if (!safeEqual(presented, expectedSecret)) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized' },
      { status: 401, headers: { 'Cache-Control': 'no-store' } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Request body must be JSON.' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } }
    );
  }

  const urls = (body as { urls?: unknown })?.urls;
  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json(
      { ok: false, error: 'Expected { "urls": [ "https://…", … ] } with at least one URL.' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } }
    );
  }
  if (urls.length > MAX_URLS_PER_REQUEST) {
    return NextResponse.json(
      { ok: false, error: `Too many URLs in one request (max ${MAX_URLS_PER_REQUEST}).` },
      { status: 413, headers: { 'Cache-Control': 'no-store' } }
    );
  }
  if (!urls.every((u): u is string => typeof u === 'string')) {
    return NextResponse.json(
      { ok: false, error: 'Every entry in "urls" must be a string.' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } }
    );
  }

  const host = (body as { host?: unknown })?.host;
  const result = await submitToIndexNow(urls, typeof host === 'string' && host ? { host } : {});

  // A missing INDEXNOW_KEY is a configuration skip, not an upstream failure:
  // answer 200 so a publish pipeline does not treat it as a broken deploy.
  const status = result.ok || result.error === INDEXNOW_KEY_MISSING ? 200 : 502;

  return NextResponse.json(
    { ...result, submittedAt: new Date().toISOString() },
    { status, headers: { 'Cache-Control': 'no-store' } }
  );
}
