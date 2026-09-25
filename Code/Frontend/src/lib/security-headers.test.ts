// Run: node --experimental-strip-types --test src/lib/security-headers.test.ts
// Plan 11.2 (2026-09-24): the security headers next.config.js sends on every
// host. Reads the config the way canonical-redirects.test.ts does.
import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';

type HeaderRule = { source: string; headers: { key: string; value: string }[] };
const config = createRequire(import.meta.url)('../../next.config.js') as {
  headers: () => Promise<HeaderRule[]>;
  poweredByHeader?: boolean;
};

test('every path gets the five security headers', async () => {
  const rules = await config.headers();
  const all = rules.find((r) => r.source === '/:path*');
  assert.ok(all, 'a catch-all header rule must exist');
  const byKey = Object.fromEntries(all.headers.map((h) => [h.key, h.value]));
  assert.deepEqual(byKey, {
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Content-Security-Policy': "frame-ancestors 'self'",
  });
});

test('the CSP carries frame-ancestors only, so no script or style is blocked', async () => {
  const rules = await config.headers();
  for (const rule of rules) {
    for (const h of rule.headers) {
      if (h.key.toLowerCase() !== 'content-security-policy') continue;
      const directives = h.value.split(';').map((d) => d.trim()).filter(Boolean);
      assert.deepEqual(directives, ["frame-ancestors 'self'"]);
    }
  }
});

test('no header rule sets Cache-Control (middleware owns the GLP1 cache header)', async () => {
  const rules = await config.headers();
  for (const rule of rules) {
    assert.equal(rule.headers.some((h) => h.key.toLowerCase() === 'cache-control'), false, rule.source);
  }
});

test('the framework is not advertised', () => {
  assert.equal(config.poweredByHeader, false);
});
