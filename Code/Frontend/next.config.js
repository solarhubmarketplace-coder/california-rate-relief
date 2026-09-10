/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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

