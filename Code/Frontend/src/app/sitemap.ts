import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';
import { statSync } from 'fs';
import { join } from 'path';
import { getAllCitySlugs } from '@/data/cities-data';
import { allPageRoutes } from '@/lib/glp1-page-routes';
import { reviews as grhReviews, TOTAL_PAGES as GRH_TOTAL_PAGES } from '@/lib/grh-reviews-data';

// =============================================================================
// LAST-MODIFIED HELPERS (Batch 4.4, 2026-04-30)
// =============================================================================
// Replaces the previous `new Date()` on every URL — which told Google that
// every page changed today on every request, training the crawler to ignore
// the field. Now reads file mtime per page.tsx; falls back to today only if
// the file isn't accessible (build-time edge cases).
// =============================================================================

function fileMtime(relPath: string, fallback: Date): Date {
  try {
    return statSync(join(process.cwd(), relPath)).mtime;
  } catch {
    return fallback;
  }
}

function reviewMtime(slug: string, fallback: Date): Date {
  return fileMtime(`src/app/reviews/${slug}/page.tsx`, fallback);
}

/**
 * Map a user-facing URL path (e.g. '/blog' or '/solar-companies/temecula')
 * to the mtime of its backing `src/app/<path>/page.tsx`. Falls back to
 * `fallback` (typically `today`) when the file isn't accessible.
 *
 * URL paths beginning with `/` are routed to `src/app/<path>/page.tsx`.
 * The bare base URL (empty string) maps to `src/app/page.tsx`.
 */
function urlMtime(urlPath: string, fallback: Date): Date {
  const cleaned = urlPath.replace(/^\/+|\/+$/g, '');
  const rel = cleaned ? `src/app/${cleaned}/page.tsx` : 'src/app/page.tsx';
  return fileMtime(rel, fallback);
}

// =============================================================================
// HOST-AWARE SITEMAP
// =============================================================================
// All four domains run from this single Next.js codebase. Without host-aware
// sitemap routing, every domain would serve the same XML pointing at CRR URLs
// — which prevents Google from discovering GRH/SHG/AHB pages programmatically.
// This file detects the request host and emits only the URLs that belong to
// that domain.
// =============================================================================

type DomainKey = 'ratereliefca' | 'greenreviewshub' | 'securehomegear' | 'athomebiohacking' | 'glp1comparehub';

const DOMAIN_BASE: Record<DomainKey, string> = {
  ratereliefca: 'https://ratereliefca.com',
  greenreviewshub: 'https://www.greenreviewshub.com', // canonical host = www (apex 307-redirects to it); sitemap must list the 200 URLs
  securehomegear: 'https://www.securehomegear.com', // canonical host = www (apex 307-redirects to it); sitemap must list the 200 URLs
  athomebiohacking: 'https://www.athomebiohacking.com', // canonical host = www (apex 307-redirects to it); sitemap must list the 200 URLs
  glp1comparehub: 'https://www.glp1comparehub.com', // canonical host = www (apex 308-redirects to it); sitemap must list the 200 URLs
};

function detectDomainKey(host: string): DomainKey {
  const h = host.toLowerCase();
  if (h.includes('greenreviewshub')) return 'greenreviewshub';
  if (h.includes('securehomegear')) return 'securehomegear';
  if (h.includes('athomebiohacking')) return 'athomebiohacking';
  if (h.includes('glp1comparehub')) return 'glp1comparehub';
  return 'ratereliefca';
}

// =============================================================================
// CRR (ratereliefca.com) URLs
// =============================================================================
function crrSitemap(base: string): MetadataRoute.Sitemap {
  const today = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: urlMtime('', today), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/blog`, lastModified: urlMtime('/blog', today), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/best-solar-companies-california`, lastModified: urlMtime('/best-solar-companies-california', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/solar-panels-california`, lastModified: urlMtime('/solar-panels-california', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/panel-reviews`, lastModified: urlMtime('/panel-reviews', today), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/commercial-solar`, lastModified: urlMtime('/commercial-solar', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: urlMtime('/about', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: urlMtime('/contact', today), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/methodology`, lastModified: urlMtime('/methodology', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/author/chad-simpson`, lastModified: urlMtime('/author/chad-simpson', today), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: urlMtime('/affiliate-disclosure', today), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: urlMtime('/privacy', today), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: urlMtime('/terms', today), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogSlugs = [
    'sce-rate-increase-2026', 'pge-rate-increase-2026', 'sdge-rate-increase-2026',
    'california-24-dollar-fixed-charge-explained', 'solar-tax-credit-expired-2026-options',
    'nem-3-california-still-worth-it', 'pge-vs-sce-vs-sdge-rates-compared',
    'prepaid-ppa-california-2026', 'ppa-loan-vs-solar-lease-vs-cash-california',
    'net-billing-vs-net-metering-california', 'nem-3-california-timeline',
    'hoa-solar-rights-california', 'low-income-solar-california',
    'free-roof-replacement-with-solar-panels-california', 'nem-2-vs-nem-3-california',
    'rent-solar-panels-for-your-home-california', 'are-solar-panels-worth-it-california',
    'switch-to-solar-california', 'solar-system-quotes-california',
    'tesla-powerwall-installers-california', 'solar-panels-for-ev-charging-california',
    'what-is-nem-3-california', 'free-solar-for-seniors-california',
    'do-solar-panels-work-at-night-california', 'do-solar-panels-work-on-cloudy-days-california',
    'why-is-my-california-electric-bill-so-high', 'why-is-my-pge-bill-so-high',
    'why-is-my-sce-bill-so-high', 'why-is-my-sdge-bill-so-high',
    'why-is-my-ladwp-bill-so-high', 'how-big-of-a-solar-system-do-i-need-california',
    'can-solar-panels-power-a-whole-house-california',
    'do-solar-panels-work-during-power-outage-california',
    'is-my-roof-good-for-solar-california', 'what-happens-to-solar-panels-after-25-years',
    'solar-carport-california-guide', 'solar-pool-heating-california',
    'solar-panel-cleaning-california', 'solar-battery-backup-california',
    'solar-rebates-by-california-utility', 'what-is-demand-charge-california',
    'how-does-net-metering-work', 'string-inverter-vs-microinverter',
    'what-is-a-solar-inverter', 'what-happens-to-solar-lease-when-i-sell-california',
    'solar-during-psps-california', 'tech-clean-california-heat-pump-rebate',
    'ab-942-california-solar', 'solar-panels-tile-roof-california',
    'adu-solar-requirements-california',
  ];
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: fileMtime(`src/app/blog/${slug}/page.tsx`, today),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Solar installer reviews (21) + comparison pages (4)
  const installerSlugs = [
    'freedom-forever-review', 'sunrun-review', 'tesla-solar-review',
    'sunpower-review', 'momentum-solar-review', 'semper-solaris-review',
    'solar-optimum-review', 'sunnova-review', 'trinity-solar-review',
    'palmetto-solar-review', 'sunergy-solar-review', 'sullivan-solar-power-review',
    'sunlux-solar-review', 'powur-solar-review', 'elevation-solar-review',
    'ameco-solar-review', 'baker-electric-solar-review', 'option-one-solar-review',
    'new-day-solar-review', 'la-solar-group-review', 'empire-solar-review',
    'sunnova-vs-sunrun', 'sunrun-vs-tesla-solar', 'sunrun-vs-sunpower',
    'enphase-vs-solaredge',
  ];
  const installerPages: MetadataRoute.Sitemap = installerSlugs.map((slug) => ({
    url: `${base}/solar-installers/${slug}`,
    lastModified: fileMtime(`src/app/solar-installers/${slug}/page.tsx`, today),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Panel brand reviews
  const panelSlugs = [
    'trina-solar-panels-review', 'silfab-solar-panels-review',
    'rec-solar-panels-review', 'canadian-solar-panels-review',
  ];
  const panelPages: MetadataRoute.Sitemap = panelSlugs.map((slug) => ({
    url: `${base}/panel-reviews/${slug}`,
    lastModified: fileMtime(`src/app/panel-reviews/${slug}/page.tsx`, today),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Commercial solar (7 topics)
  const commercialSlugs = [
    'companies-california', 'financing-options', 'cost-per-watt-california',
    'title-24-requirements', 'cpace-financing-california',
    'sgip-battery-storage', 'vnem-aggregation-multi-meter',
  ];
  const commercialPages: MetadataRoute.Sitemap = commercialSlugs.map((slug) => ({
    url: `${base}/commercial-solar/${slug}`,
    lastModified: fileMtime(`src/app/commercial-solar/${slug}/page.tsx`, today),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Regional hubs
  const regionalSlugs = [
    'orange-county', 'bay-area', 'inland-empire',
    'san-diego-county', 'central-valley',
  ];
  // Regional hub pages route through src/app/solar-savings/[city]/page.tsx; use that
  // file's mtime as the stable proxy (per-slug mtime would always be the same).
  const solarSavingsRouteMtime = fileMtime('src/app/solar-savings/[city]/page.tsx', today);
  const solarCompaniesRouteMtime = fileMtime('src/app/solar-companies/[city]/page.tsx', today);

  const regionalPages: MetadataRoute.Sitemap = regionalSlugs.map((slug) => ({
    url: `${base}/solar-savings/${slug}`,
    lastModified: solarSavingsRouteMtime,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // City pages (76+ from cities-data.ts) — both /solar-savings and /solar-companies
  const citySavingsPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${base}/solar-savings/${slug}`,
    lastModified: solarSavingsRouteMtime,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));
  const cityCompaniesPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${base}/solar-companies/${slug}`,
    lastModified: solarCompaniesRouteMtime,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...staticPages, ...blogPages, ...installerPages, ...panelPages,
    ...commercialPages, ...regionalPages, ...citySavingsPages, ...cityCompaniesPages,
  ];
}

// =============================================================================
// GRH (greenreviewshub.com) URLs
// =============================================================================
function grhSitemap(base: string): MetadataRoute.Sitemap {
  const today = new Date();

  // GRH base URL routes through /reviews via middleware redirect; use the
  // reviews index page's mtime as the proxy for the homepage URL.
  const reviewsIndexMtime = urlMtime('/reviews', today);

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: reviewsIndexMtime, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/reviews`, lastModified: reviewsIndexMtime, changeFrequency: 'weekly', priority: 0.95 },
    // Trust / authority pages — E-E-A-T signals; previously omitted from the sitemap.
    { url: `${base}/methodology`, lastModified: urlMtime('/methodology', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/reviews/about`, lastModified: urlMtime('/reviews/about', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/reviews/contact`, lastModified: urlMtime('/reviews/contact', today), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/reviews/affiliate-disclosure`, lastModified: urlMtime('/reviews/affiliate-disclosure', today), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/reviews/privacy`, lastModified: urlMtime('/reviews/privacy', today), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/reviews/terms`, lastModified: urlMtime('/reviews/terms', today), changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Pagination pages /reviews/page/2..N — derived from TOTAL_PAGES so the
  // sitemap can never drift out of sync with the actual paginated routes
  // (the previous hardcoded 2..6 list missed page 7 once the catalog grew).
  // All paginated pages share the dynamic route file, so use that file's mtime.
  const reviewsPaginationMtime = fileMtime('src/app/reviews/page/[page]/page.tsx', today);
  const paginationPages: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, GRH_TOTAL_PAGES - 1) },
    (_, i) => ({
      url: `${base}/reviews/page/${i + 2}`,
      lastModified: reviewsPaginationMtime,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }),
  );

  // Review URLs derived directly from the grh-reviews-data registry — the same
  // source the index renders from. A hardcoded slug list silently orphaned
  // pages from the sitemap (e.g. best-water-filter-pitcher); deriving from the
  // registry keeps the sitemap and the live catalog permanently in sync.
  const reviewPages: MetadataRoute.Sitemap = grhReviews.map((review) => ({
    url: `${base}/reviews/${review.slug}`,
    lastModified: reviewMtime(review.slug, today),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...paginationPages, ...reviewPages];
}

// =============================================================================
// SHG (securehomegear.com) URLs
// =============================================================================
function shgSitemap(base: string): MetadataRoute.Sitemap {
  const today = new Date();

  // SHG base URL rewrites to /shg-home via middleware; use that page's mtime.
  const shgHomeMtime = urlMtime('/shg-home', today);

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: shgHomeMtime, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/cameras`, lastModified: urlMtime('/cameras', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: urlMtime('/about', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: urlMtime('/contact', today), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/methodology`, lastModified: urlMtime('/methodology', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/author/chad-simpson`, lastModified: urlMtime('/author/chad-simpson', today), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: urlMtime('/affiliate-disclosure', today), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: urlMtime('/privacy', today), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: urlMtime('/terms', today), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const cameraSlugs = [
    'arlo-base-station', 'arlo-camera', 'arlo-doorbell', 'arlo-floodlight-camera',
    'arlo-indoor-camera', 'arlo-subscription', 'battery-powered-security-camera',
    'best-no-subscription-security-camera-system',
    'best-outdoor-security-cameras-without-subscription',
    'best-wired-security-camera-system', 'blink-camera-system', 'blink-doorbell',
    'blink-subscription-plan', 'blink-sync-module', 'business-security-cameras',
    'canary', 'canary-camera', 'cellular-security-camera', 'commercial-security-cameras',
    'doorbell-camera', 'doorbell-transformer', 'eufy', 'eufy-doorbell',
    'eufy-homebase', 'eufy-s340', 'google-nest', 'lorex', 'nest-aware',
    'nest-doorbell', 'no-subscription-security-camera', 'poe-camera', 'reolink',
    'ring-protect-plan', 'ring-security-system', 'security-cameras', 'tp-link-tapo',
    'video-doorbell-without-subscription', 'wireless-outdoor-camera',
    'wireless-outdoor-security-cameras', 'wyze', 'wyze-doorbell',
  ];
  const cameraPages: MetadataRoute.Sitemap = cameraSlugs.map((slug) => ({
    url: `${base}/cameras/${slug}`,
    lastModified: fileMtime(`src/app/cameras/${slug}/page.tsx`, today),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const compareSlugs = [
    'arlo-vs-ring', 'canary-vs-ring', 'eufy-vs-arlo', 'eufy-vs-ring',
    'reolink-vs-eufy', 'ring-vs-blink', 'wyze-vs-ring',
  ];
  const comparePages: MetadataRoute.Sitemap = compareSlugs.map((slug) => ({
    url: `${base}/compare/${slug}`,
    lastModified: fileMtime(`src/app/compare/${slug}/page.tsx`, today),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const altSlugs = ['arlo', 'blink', 'google-nest', 'ring', 'wyze'];
  const altPages: MetadataRoute.Sitemap = altSlugs.map((slug) => ({
    url: `${base}/alternatives/${slug}`,
    lastModified: fileMtime(`src/app/alternatives/${slug}/page.tsx`, today),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...cameraPages, ...comparePages, ...altPages];
}

// =============================================================================
// AHB (athomebiohacking.com) URLs
// =============================================================================
function ahbSitemap(base: string): MetadataRoute.Sitemap {
  const today = new Date();

  // AHB base URL rewrites to /ahb-home via middleware; use that page's mtime.
  const ahbHomeMtime = urlMtime('/ahb-home', today);

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: ahbHomeMtime, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/cold-plunge`, lastModified: urlMtime('/cold-plunge', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/infrared-sauna`, lastModified: urlMtime('/infrared-sauna', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/pemf`, lastModified: urlMtime('/pemf', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/red-light-therapy`, lastModified: urlMtime('/red-light-therapy', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/vibration-plate`, lastModified: urlMtime('/vibration-plate', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/learn/about`, lastModified: urlMtime('/learn/about', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/learn/medical-disclaimer`, lastModified: urlMtime('/learn/medical-disclaimer', today), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/about`, lastModified: urlMtime('/about', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: urlMtime('/contact', today), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/methodology`, lastModified: urlMtime('/methodology', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/author/chad-simpson`, lastModified: urlMtime('/author/chad-simpson', today), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: urlMtime('/affiliate-disclosure', today), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: urlMtime('/privacy', today), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: urlMtime('/terms', today), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const ahbContentPages: MetadataRoute.Sitemap = [
    'cold-plunge/benefits', 'cold-plunge/benefits-of-ice-bath',
    'cold-plunge/best-cold-plunge', 'cold-plunge/diy-cold-plunge',
    'infrared-sauna/best-infrared-sauna', 'infrared-sauna/best-sauna-blanket',
    'infrared-sauna/infrared-sauna-benefits', 'infrared-sauna/infrared-vs-traditional',
    'pemf/best-pemf-mat',
    'red-light-therapy/best-red-light-therapy-device',
    'red-light-therapy/red-light-therapy-benefits',
    'vibration-plate/best-vibration-plate',
    'vibration-plate/vibration-plate-benefits',
  ].map((path) => ({
    url: `${base}/${path}`,
    lastModified: fileMtime(`src/app/${path}/page.tsx`, today),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...ahbContentPages];
}

// =============================================================================
// GLP1CompareHub (glp1comparehub.com) URLs
// =============================================================================
function glp1Sitemap(base: string): MetadataRoute.Sitemap {
  const today = new Date();

  // GLP1 base URL rewrites to /glp1-home via middleware; use that page's mtime.
  const glp1HomeMtime = urlMtime('/glp1-home', today);

  // Trust pages + key meta routes (in case they're not in the registry)
  const trustPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: glp1HomeMtime, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`,                lastModified: urlMtime('/about', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`,              lastModified: urlMtime('/contact', today), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/methodology`,          lastModified: urlMtime('/methodology', today), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/affiliate-disclosure`, lastModified: urlMtime('/affiliate-disclosure', today), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/disclaimer`,           lastModified: urlMtime('/disclaimer', today), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/privacy`,              lastModified: urlMtime('/privacy', today), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,                lastModified: urlMtime('/terms', today), changeFrequency: 'yearly',  priority: 0.3 },
  ];

  // Only LIVE pages — queued/next pages don't have page.tsx files yet and would 404.
  // Sitemap accuracy > sitemap size: a 404 URL trains Google to distrust the sitemap.
  // lastModified is derived from each route's page.tsx mtime so Google sees real
  // change signals rather than "every page modified now."
  const registryPages: MetadataRoute.Sitemap = allPageRoutes
    .filter((r) => r.status === 'live')
    .map((r) => {
      // Adjust homepage URL — registry stores /glp1-home but public URL is /
      const url = r.path === '/glp1-home' ? base : `${base}${r.path}`;
      // Tier A = 0.9, B = 0.7, C = 0.5
      const priority = r.tier === 'A' ? 0.9 : r.tier === 'B' ? 0.7 : 0.5;
      return {
        url,
        lastModified: urlMtime(r.path, today),
        changeFrequency: 'weekly' as const,
        priority,
      };
    });

  const glp1Pages = [...trustPages, ...registryPages];
  // De-duplicate by URL. The registry auto-generates /providers/* and
  // /best/telemedicine-* (from glp1Providers / glp1Medications), and a few
  // pages (homepage, peptides, oral-tirzepatide) appear in both a hand-authored
  // and an auto-generated entry -- which emitted duplicate <loc> entries.
  // Keep first occurrence so every URL is listed exactly once.
  const seen = new Set<string>();
  return glp1Pages.filter((e) => (seen.has(e.url) ? false : (seen.add(e.url), true)));
}

// =============================================================================
// MAIN ENTRY
// =============================================================================
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hdrs = await headers();
  const host = hdrs.get('x-forwarded-host') || hdrs.get('host') || 'ratereliefca.com';
  const key = detectDomainKey(host);
  const base = DOMAIN_BASE[key];

  switch (key) {
    case 'greenreviewshub':
      return grhSitemap(base);
    case 'securehomegear':
      return shgSitemap(base);
    case 'athomebiohacking':
      return ahbSitemap(base);
    case 'glp1comparehub':
      return glp1Sitemap(base);
    case 'ratereliefca':
    default:
      return crrSitemap(base);
  }
}
