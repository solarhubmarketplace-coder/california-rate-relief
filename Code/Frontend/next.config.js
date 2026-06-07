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
};

module.exports = nextConfig;

