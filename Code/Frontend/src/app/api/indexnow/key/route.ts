import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// =============================================================================
// INDEXNOW KEY FILE — OWNERSHIP VERIFICATION
// =============================================================================
// IndexNow proves you control the host by fetching a plain-text file whose body
// is exactly the key, served from the ROOT of the site:
//
//     https://ratereliefca.com/<key>.txt   →   <key>
//
// The root location is not optional in practice. IndexNow only accepts URLs
// that live at or below the directory the key file sits in, so a key served
// only from /api/indexnow/key would limit submissions to /api/indexnow/* — i.e.
// nothing useful. /api/ is also Disallow'd in robots.ts. This handler therefore
// exists to be REWRITTEN to from the root path, never to be the keyLocation.
//
// -----------------------------------------------------------------------------
// HOW THIS IS WIRED  (option A — implemented)
// -----------------------------------------------------------------------------
// 1. Chad sets INDEXNOW_KEY in the Vercel/Railway environment (8-128 chars of
//    [a-zA-Z0-9-]; a UUID with the dashes kept is fine).
// 2. next.config.js reads that same env var at BUILD time and adds a rewrite:
//        /<INDEXNOW_KEY>.txt  →  /api/indexnow/key
//    so the key appears at the root without a secret ever being committed.
// 3. Because the rewrite source is baked in at build time, changing
//    INDEXNOW_KEY requires a REDEPLOY, not just an env-var edit. If the key
//    file 404s after a key rotation, that is the reason.
//
// -----------------------------------------------------------------------------
// ALTERNATIVE  (option B — NOT implemented, documented on purpose)
// -----------------------------------------------------------------------------
// Drop a static file into the public directory instead:
//
//     Code/Frontend/public/<key>.txt        # body = the key, nothing else
//
// public/ already carries exactly this kind of artifact
// (public/googlead7a7cc4d57c1697.html), so the pattern is established. Option B
// needs no env var, no rewrite and no redeploy-on-rotation, and it survives
// even if this route handler is deleted. Its trade-off is that the key is
// committed to the repo — acceptable, since an IndexNow key is public by
// design (it is literally served to anyone who requests it), but it means key
// rotation is a commit rather than an env change.
//
// If option B is adopted later: delete the rewrite from next.config.js and keep
// or delete this handler — it is harmless either way. Do NOT run both with
// different keys.
// =============================================================================

export async function GET() {
  const key = (process.env.INDEXNOW_KEY || '').trim();

  if (!key) {
    // 404, not 500: when no key is configured this file genuinely does not
    // exist. A 500 here would show up as a site error in monitoring.
    return new NextResponse('Not Found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  }

  return new NextResponse(key, {
    status: 200,
    headers: {
      // IndexNow requires text/plain and a body that is the key and nothing
      // else — no trailing newline, no BOM, no markup.
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex',
    },
  });
}
