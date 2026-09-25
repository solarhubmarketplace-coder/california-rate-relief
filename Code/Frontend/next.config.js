// ---------------------------------------------------------------------------
// Security headers for every response on every host (plan 11.2, 2026-09-24).
// The 2026-09-24 audit (technical_site_audit.md §2.4, T-18) found none of the
// standard headers on a site whose forms collect an address and phone number.
//   - HSTS: one year, subdomains included. Every host here is HTTPS-only.
//   - nosniff and a referrer policy that sends only the origin cross-site.
//   - Permissions-Policy turns off camera, microphone and geolocation. No page
//     uses them: the voice features run on the backend (Twilio), and the
//     address field uses Places autocomplete, not the browser location API.
//   - CSP is frame-ancestors only (no framing by other sites). No script,
//     style or connect directives: those could block gtag, Maps or Next's
//     inline scripts and need their own tested rollout.
// No Cache-Control here: the GLP1 cache header is set in middleware.ts and
// is unaffected.
// ---------------------------------------------------------------------------
const SECURITY_HEADERS = [
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't advertise the framework (T-18 noted x-powered-by: Next.js).
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: SECURITY_HEADERS }];
  },
  // Lower peak build memory (slower compile, same output). The 2026-09-23
  // release build was OOM-killed at ~5.9 GB without it.
  experimental: { webpackMemoryOptimizations: true },
  // Keep local review output separate so dev and release-build checks cannot collide.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  reactStrictMode: false,
  // Always render <title>, meta description, canonical and OG tags inside
  // <head>. Since 15.2, Next streams metadata into <body> for any user agent
  // that is not on its "HTML-limited bot" list, which is every browser and
  // Lighthouse; the meta-description audit then fails and non-JS readers of
  // the HTML miss the tags. A catch-all pattern puts every request on the
  // blocking path. Every page is already rendered per request (the root layout
  // reads headers()), and generateMetadata here does no network I/O, so this
  // does not delay the first byte in any measurable way.
  // Option shape confirmed against next@15.5.25:
  // dist/server/config-shared.d.ts (htmlLimitedBots?: RegExp).
  htmlLimitedBots: /.*/,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      }
    ],
    unoptimized: false,
  },
  eslint: {
    // ESLint config not yet established — flipping to false would prompt for
    // setup at build time. Re-enable after `eslint.config.mjs` is committed.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Re-enabled 2026-06-07. TypeScript errors will fail the build.
    // The ~58 pre-existing prop-shape errors that surfaced when this flipped
    // were fixed in the same commit by extending interfaces on
    // EditorialReviewBox, VerifiedPricingBadge, StickyMobileCTA,
    // LastReviewedBadge, AffiliateCTABox, AffiliateDisclosure, BuyButton.
    // `npx tsc --noEmit` was clean as of 2026-06-07.
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      {
        source: '/blog/what-size-solar-system-do-i-need',
        destination: '/blog/how-big-of-a-solar-system-do-i-need-california',
        permanent: true,
      },
      // /blog/nem-3-california has returned 404 since at least 10 September and
      // is not in the sitemap. Nothing on the site links to it, but it is a
      // plausible hand-typed and externally-linked path for the topic.
      //
      // Retargeted 2026-09-23 (Decision 16): it first went to
      // /blog/nem-2-vs-nem-3-california, the NEM page with impressions. The
      // redirect intent audit (topicmap block 06, redirect_intent_audit.csv)
      // found the source keyword "nem 3.0" sits in SERP cluster 16 and the
      // comparison page's "nem 2 vs nem 3" in cluster 169: different SERPs, so
      // a visitor typing this path wanted the definition, not the comparison.
      // /blog/what-is-nem-3-california is the cluster-16 page. The source had
      // no Search Console impressions, so nothing ranking is moved.
      {
        source: '/blog/nem-3-california',
        destination: '/blog/what-is-nem-3-california',
        permanent: true,
      },
    ];
  },
  // ---------------------------------------------------------------------------
  // IndexNow ownership verification — serves the key at the site ROOT.
  // ---------------------------------------------------------------------------
  // IndexNow fetches https://<host>/<key>.txt to confirm we control the host,
  // and only accepts submitted URLs at or below the key file's directory — so
  // the key has to be at the root, not under /api/. This rewrite maps the root
  // path onto the handler in src/app/api/indexnow/key/route.ts, which keeps the
  // key in an env var instead of in the repo.
  //
  // The source path is baked in at BUILD time, so rotating INDEXNOW_KEY needs a
  // redeploy, not just an env-var edit. If the key is unset or malformed this
  // returns [] — no rewrite, no `/undefined.txt` route, no build failure.
  //
  // Not host-scoped: it also answers on the other four domains. That is
  // harmless (an IndexNow key is public by design — it is served to anyone who
  // asks) and it intercepts exactly one otherwise-unused path.
  //
  // Alternative, if you would rather not use an env var: drop a static
  // public/<key>.txt into the public directory (same pattern as
  // public/googlead7a7cc4d57c1697.html) and delete this rewrite. Do not run
  // both with different keys.
  // ---------------------------------------------------------------------------
  async rewrites() {
    const indexNowKey = (process.env.INDEXNOW_KEY || '').trim();
    if (!/^[a-zA-Z0-9-]{8,128}$/.test(indexNowKey)) return [];
    return [
      {
        source: `/${indexNowKey}.txt`,
        destination: '/api/indexnow/key',
      },
    ];
  },
};

module.exports = nextConfig;

