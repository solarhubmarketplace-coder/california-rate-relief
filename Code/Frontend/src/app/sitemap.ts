import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';
import { getAllCitySlugs } from '@/data/cities-data';
import { ARTICLE_PAGES, articleHref, articlesInCluster } from '@/data/article-pages';
import { GLP1_INDEX_ROUTES } from '@/lib/glp1-seo-routes';
import { GROWTH_ROUTES, LOCAL_RELEASE_REVIEW_ROUTES } from '@/lib/growth-routes';
import { getPublishableCityCostRows } from '@/data/city-cost-data';
import { COST_INDEX_PATH, COST_INDEX_UPDATED } from '@/data/solar-cost-index';
import { isRedirectedPath } from '@/lib/canonical-redirects';
import { isHeldPath } from '@/data/held-pages';
import { cityPageDates } from '@/lib/city-pages';
import { reviews as grhReviews, TOTAL_PAGES as GRH_TOTAL_PAGES } from '@/lib/grh-reviews-data';

// =============================================================================
// LAST-MODIFIED HELPERS
// =============================================================================
// Do not inspect process.cwd() here. Runtime filesystem stat calls force Next's
// output tracer to include the entire project in the server bundle. A stable,
// audited date is preferable to a false "today" timestamp on every request.
// =============================================================================

const SITEMAP_LAST_AUDITED = new Date('2026-08-30T00:00:00.000Z');
const CRR_REVIEWED_SEPTEMBER_11 = new Set([
  '/solar-companies/san-francisco', '/solar-companies/oakland',
  '/blog/why-is-my-ladwp-bill-so-high', '/solar-savings/los-angeles',
  '/solar-savings/los-angeles-county', '/blog/solar-rebates-by-california-utility',
]);
const CRR_UPDATED_PAGES = new Set([
  '/blog', '/blog/pge-time-of-use-rates-2026',
  '/blog/pge-vs-sce-vs-sdge-rates-compared', '/blog/why-is-my-pge-bill-so-high',
]);
// claude/ca-green-20260918 — three new sourced pages and two sourced refreshes,
// all verified 2026-09-17. Checked ahead of the GROWTH_ROUTES branch so the two
// refreshed routes are not stamped with the older 2026-09-10 growth date.
const CRR_GREEN_20260918 = new Set([
  '/blog/does-solar-increase-home-value-california',
  '/blog/do-solar-panels-increase-property-taxes-california',
  '/blog/can-you-cancel-solar-panel-contract-before-installation-california',
  '/blog/free-solar-panels-california',
  '/blog/solar-ppa-vs-lease-california',
]);
const CRR_NEW_QUESTION_20260920 = new Set([
  '/blog/adding-solar-panels-existing-system-california',
  '/blog/solar-installation-timeline-california',
]);
const LOCAL_RELEASE_REVIEW_ROUTE_SET = new Set<string>(LOCAL_RELEASE_REVIEW_ROUTES);
// claude/ta-release-20260923 — topical-authority wave: pages created or rewritten
// and source-checked on 2026-09-23 (from the agents' _ta_manifest files).
const CRR_TOPICAL_20260923 = new Set<string>([
  '/battery/add-powerwall-to-existing-solar',
  '/battery/battery-backup-vs-generator-california',
  '/battery/battery-storage-capacity-california',
  '/battery/pge-permanent-battery-storage-rebate',
  '/battery/pge-solar-battery-rebate',
  '/battery/powerwall-vs-enphase-vs-franklinwh',
  '/battery/solar-and-storage-association-california',
  '/battery/solar-battery-company',
  '/battery/tesla-powerwall-3-cost-california',
  '/best-solar-companies-california',
  '/blog/adu-solar-requirements-california',
  '/blog/are-solar-panels-a-scam',
  '/blog/average-kwh-per-day-california',
  '/blog/average-pge-bill-for-1-bedroom-apartment',
  '/blog/average-utility-bill-california',
  '/blog/california-solar-tax-credit-2026',
  '/blog/chargepoint-cost-per-kwh-california',
  '/blog/did-pge-rates-go-up',
  '/blog/direct-access-electricity-california',
  '/blog/does-solar-increase-home-value-california',
  '/blog/electricity-rates-highest-in-us-california',
  '/blog/free-roof-replacement-with-solar-panels-california',
  '/blog/free-solar-for-seniors-california',
  '/blog/free-solar-panels-california',
  '/blog/how-often-does-ladwp-bill',
  '/blog/income-qualified-bill-discount-pge',
  '/blog/inflation-reduction-act-solar-california',
  '/blog/ladwp-ev-charging-rates',
  '/blog/ladwp-rates',
  '/blog/ladwp-solar-rooftops-program',
  '/blog/nem-3-california-still-worth-it',
  '/blog/nem-3-california-timeline',
  '/blog/nem-3-export-rates-california',
  '/blog/nem-3-lawsuit',
  '/blog/nem-pge',
  '/blog/net-billing-vs-net-metering-california',
  '/blog/no-upfront-cost-solar-panels',
  '/blog/pge-solar-calculator',
  '/blog/pge-tier-rates',
  '/blog/pge-time-of-use-rates-2026',
  '/blog/ppa-loan-vs-solar-lease-vs-cash-california',
  '/blog/prepaid-lease-solar',
  '/blog/prepaid-ppa-california-2026',
  '/blog/pros-and-cons-of-solar-panels-california',
  '/blog/rent-solar-panels-for-your-home-california',
  '/blog/replacement-solar-inverter-cost',
  '/blog/roof-leak-after-solar-panel-install',
  '/blog/rooftop-solar-credits-ruling-california',
  '/blog/sce-nem-2',
  '/blog/sce-rate-increase-2026',
  '/blog/sce-rate-schedules',
  '/blog/sce-settlement-bill',
  '/blog/sdge-rate-increase-2026',
  '/blog/selling-electricity-back-to-the-grid-price-per-kwh',
  '/blog/solar-battery-backup-california',
  '/blog/solar-broker',
  '/blog/solar-carport-california-guide',
  '/blog/solar-for-renters',
  '/blog/solar-license-california',
  '/blog/solar-panel-cleaning-california',
  '/blog/solar-panel-maintenance-cost',
  '/blog/solar-panel-removal-reinstall-cost',
  '/blog/solar-panel-repair-cost',
  '/blog/solar-panels-tile-roof-california',
  '/blog/solar-payback-period-california',
  '/blog/solar-pool-heating-california',
  '/blog/solar-production-by-month-california',
  '/blog/solar-rebates-by-california-utility',
  '/blog/solar-resources',
  '/blog/what-is-3rd-party-electric-on-pge-bill',
  '/blog/what-is-nem-true-up',
  '/blog/what-percentage-of-california-power-is-solar',
  '/blog/when-does-nem-2-expire',
  '/blog/where-does-california-get-its-electricity',
  '/blog/why-are-my-nem-charges-so-high',
  '/blog/why-is-my-california-electric-bill-so-high',
  '/blog/why-is-my-sce-bill-so-high',
  '/blog/why-is-my-smud-bill-so-high',
  '/commercial-solar/car-dealerships-going-solar-california',
  '/commercial-solar/church-solar-california',
  '/commercial-solar/commercial-solar-carport-cost',
  '/commercial-solar/commercial-solar-roofing',
  '/commercial-solar/companies-california',
  '/commercial-solar/cost-per-watt-california',
  '/commercial-solar/rec-commercial-solar-panels',
  '/commercial-solar/solar-developers',
  '/panel-reviews/rec-solar-panels-review',
  '/panel-reviews/silfab-solar-panels-review',
  '/solar-companies/auburn',
  '/solar-companies/berkeley',
  '/solar-companies/camarillo',
  '/solar-companies/carlsbad',
  '/solar-companies/concord',
  '/solar-companies/el-cajon',
  '/solar-companies/fontana',
  '/solar-companies/fresno',
  '/solar-companies/glendale',
  '/solar-companies/grass-valley',
  '/solar-companies/hayward',
  '/solar-companies/huntington-beach',
  '/solar-companies/irvine',
  '/solar-companies/lakewood',
  '/solar-companies/lancaster',
  '/solar-companies/lincoln',
  '/solar-companies/livermore',
  '/solar-companies/long-beach',
  '/solar-companies/los-angeles',
  '/solar-companies/modesto',
  '/solar-companies/mountain-view',
  '/solar-companies/murrieta',
  '/solar-companies/oakland',
  '/solar-companies/oxnard',
  '/solar-companies/palm-springs',
  '/solar-companies/pasadena',
  '/solar-companies/redding',
  '/solar-companies/redlands',
  '/solar-companies/richmond',
  '/solar-companies/rocklin',
  '/solar-companies/sacramento',
  '/solar-companies/san-bernardino',
  '/solar-companies/san-diego',
  '/solar-companies/san-francisco',
  '/solar-companies/san-jose',
  '/solar-companies/san-luis-obispo',
  '/solar-companies/san-marcos',
  '/solar-companies/san-mateo',
  '/solar-companies/santa-ana',
  '/solar-companies/santa-clarita',
  '/solar-companies/sonoma',
  '/solar-companies/stockton',
  '/solar-companies/temecula',
  '/solar-companies/thousand-oaks',
  '/solar-companies/vacaville',
  '/solar-companies/ventura',
  '/solar-companies/yorba-linda',
  '/solar-installers',
  '/solar-installers/adt-solar-vs-momentum-solar',
  '/solar-installers/baker-electric-solar-review',
  '/solar-installers/elevation-solar-review',
  '/solar-installers/freedom-forever-review',
  '/solar-installers/licensed-solar-installer',
  '/solar-installers/momentum-solar-review',
  '/solar-installers/momentum-solar-vs-trinity-solar',
  '/solar-installers/pge-and-sunrun',
  '/solar-installers/sunergy-solar-review',
  '/solar-installers/sunrun-review',
  '/solar-installers/sunrun-vs-trinity-solar',
  '/solar-installers/tesla-solar-review',
  '/solar-installers/trinity-solar-review',
  '/solar-installers/vivint-review',
  '/solar-installers/worst-solar-companies-california',
  '/solar-panel-maintenance-california',
  '/solar-panels-california',
  '/solar-problems/attorney-to-sue-solar-company-california',
  '/solar-problems/solar-lawsuit-california',
  '/solar-savings/los-angeles-county',
  '/solar-savings/orange-county',
  '/solar-savings/sacramento',
  '/solar-savings/san-diego',
  '/solar-savings/san-mateo',
  '/tools/solar-panel-calculator',
  '/battery',
  '/battery/how-many-batteries-do-i-need-california',
  '/battery/sgip-battery-rebate-california',
  '/blog/10-kw-solar-system-cost',
  '/blog/average-sdge-bill-2-bedroom-apartment',
  '/blog/commercial-solar-financing-california',
  '/blog/does-pool-pump-use-a-lot-of-electricity',
  '/blog/electricity-peak-hours-california',
  '/blog/electricity-rates-by-zip-code',
  '/blog/flat-roof-solar-panels',
  '/blog/help-with-pge-bill',
  '/blog/how-does-net-metering-work',
  '/blog/how-much-does-it-cost-to-turn-on-electricity',
  '/blog/how-to-lower-pge-bill',
  '/blog/how-to-read-pge-bill',
  '/blog/how-to-read-sdge-bill',
  '/blog/is-my-roof-good-for-solar-california',
  '/blog/ladwp-net-metering',
  '/blog/ladwp-solar-program',
  '/blog/lease-roof-for-solar-panels',
  '/blog/nem-2-vs-nem-3-california',
  '/blog/pge-ev-rates',
  '/blog/pge-rate-schedules',
  '/blog/pge-solar-billing-plan',
  '/blog/pge-solar-program',
  '/blog/sce-solar-billing-plan',
  '/blog/sce-time-of-use-rates-2026',
  '/blog/sdge-and-solar',
  '/blog/sdge-net-metering',
  '/blog/sdge-time-of-use-rates-2026',
  '/blog/smud-peak-hours',
  '/blog/smud-solar-program',
  '/blog/solar-discount',
  '/blog/solar-duck-curve-california',
  '/blog/solar-leasing-company',
  '/blog/solar-panels-over-canals-california',
  '/blog/solar-ppa-companies',
  '/blog/solar-rate',
  '/blog/solar-system-quotes-california',
  '/blog/what-happens-to-solar-lease-when-i-sell-california',
  '/blog/what-is-nem-3-california',
  '/blog/why-is-my-ladwp-bill-so-high',
  '/blog/why-is-my-sdge-bill-so-high',
  '/california-utility-rate-tracker',
  '/commercial-solar',
  '/commercial-solar/[slug]',
  '/commercial-solar/average-wattage-of-a-commercial-solar-panel',
  '/commercial-solar/commercial-solar-lease-programs',
  '/commercial-solar/commercial-solar-tax-credit',
  '/commercial-solar/industrial-solar-california',
  '/commercial-solar/vnem-aggregation-multi-meter',
  '/solar-companies/aliso-viejo',
  '/solar-companies/anaheim',
  '/solar-companies/antioch',
  '/solar-companies/bakersfield',
  '/solar-companies/bay-area',
  '/solar-companies/bellflower',
  '/solar-companies/brentwood',
  '/solar-companies/burbank',
  '/solar-companies/chula-vista',
  '/solar-companies/clovis',
  '/solar-companies/coachella-valley',
  '/solar-companies/corona',
  '/solar-companies/cupertino',
  '/solar-companies/davis',
  '/solar-companies/diamond-bar',
  '/solar-companies/downey',
  '/solar-companies/elk-grove',
  '/solar-companies/fairfield',
  '/solar-companies/fallbrook',
  '/solar-companies/fullerton',
  '/solar-companies/galt',
  '/solar-companies/hesperia',
  '/solar-companies/high-desert',
  '/solar-companies/hollister',
  '/solar-companies/kern-county',
  '/solar-companies/la-habra',
  '/solar-companies/la-mesa',
  '/solar-companies/lake-elsinore',
  '/solar-companies/lake-forest',
  '/solar-companies/merced',
  '/solar-companies/mission-viejo',
  '/solar-companies/moreno-valley',
  '/solar-companies/napa',
  '/solar-companies/newport-beach',
  '/solar-companies/novato',
  '/solar-companies/ontario',
  '/solar-companies/orange-county',
  '/solar-companies/palm-desert',
  '/solar-companies/palmdale',
  '/solar-companies/palo-alto',
  '/solar-companies/petaluma',
  '/solar-companies/poway',
  '/solar-companies/riverside',
  '/solar-companies/riverside-county',
  '/solar-companies/san-mateo-county',
  '/solar-companies/san-rafael',
  '/solar-companies/san-ramon',
  '/solar-companies/santa-clara',
  '/solar-companies/santa-cruz',
  '/solar-companies/santa-monica',
  '/solar-companies/santee',
  '/solar-companies/scotts-valley',
  '/solar-companies/simi-valley',
  '/solar-companies/sunnyvale',
  '/solar-companies/tracy',
  '/solar-companies/tustin',
  '/solar-companies/vallejo',
  '/solar-companies/ventura-county',
  '/solar-companies/victorville',
  '/solar-companies/westminster',
  '/solar-companies/wildomar',
  '/solar-companies/yuba-city',
  '/solar-cost/anaheim',
  '/solar-cost/arcata',
  '/solar-cost/auburn',
  '/solar-cost/berkeley',
  '/solar-cost/camarillo',
  '/solar-cost/carlsbad',
  '/solar-cost/chico',
  '/solar-cost/chula-vista',
  '/solar-cost/clovis',
  '/solar-cost/concord',
  '/solar-cost/corona',
  '/solar-cost/cupertino',
  '/solar-cost/el-cajon',
  '/solar-cost/el-dorado-hills',
  '/solar-cost/elk-grove',
  '/solar-cost/encinitas',
  '/solar-cost/escondido',
  '/solar-cost/fremont',
  '/solar-cost/fresno',
  '/solar-cost/gilroy',
  '/solar-cost/glendale',
  '/solar-cost/grass-valley',
  '/solar-cost/hollister',
  '/solar-cost/huntington-beach',
  '/solar-cost/irvine',
  '/solar-cost/lakewood',
  '/solar-cost/livermore',
  '/solar-cost/long-beach',
  '/solar-cost/manteca',
  '/solar-cost/mission-viejo',
  '/solar-cost/modesto',
  '/solar-cost/monterey',
  '/solar-cost/mountain-view',
  '/solar-cost/murrieta',
  '/solar-cost/napa',
  '/solar-cost/oakland',
  '/solar-cost/oceanside',
  '/solar-cost/ontario',
  '/solar-cost/pasadena',
  '/solar-cost/petaluma',
  '/solar-cost/pleasanton',
  '/solar-cost/redding',
  '/solar-cost/redwood-city',
  '/solar-cost/richmond',
  '/solar-cost/riverside',
  '/solar-cost/rocklin',
  '/solar-cost/roseville',
  '/solar-cost/sacramento',
  '/solar-cost/san-clemente',
  '/solar-cost/san-jose',
  '/solar-cost/san-luis-obispo',
  '/solar-cost/san-marcos',
  '/solar-cost/san-mateo',
  '/solar-cost/san-ramon',
  '/solar-cost/santa-ana',
  '/solar-cost/santa-barbara',
  '/solar-cost/santa-clara',
  '/solar-cost/santa-clarita',
  '/solar-cost/santa-cruz',
  '/solar-cost/santa-rosa',
  '/solar-cost/saratoga',
  '/solar-cost/sunnyvale',
  '/solar-cost/temecula',
  '/solar-cost/thousand-oaks',
  '/solar-cost/tracy',
  '/solar-cost/tulare',
  '/solar-cost/vacaville',
  '/solar-cost/vallejo',
  '/solar-cost/ventura',
  '/solar-cost/victorville',
  '/solar-cost/visalia',
  '/solar-cost/walnut-creek',
  '/solar-cost/windsor',
  '/solar-cost/yuba-city',
  '/solar-cost/yucaipa',
  '/solar-installers/palmetto-solar-review',
  '/solar-installers/sunlux-solar-review',
  '/solar-installers/sunrun-lease-vs-ppa',
  '/solar-installers/sunrun-vs-sunpower',
  '/solar-installers/sunrun-vs-tesla-solar',
  '/solar-problems',
  '/solar-problems/do-i-still-get-a-utility-bill-with-solar',
  '/solar-problems/solar-cancellation-california',
  '/solar-problems/solar-dealer-fees-explained',
  '/solar-savings/altadena',
  '/solar-savings/bay-area',
  '/solar-savings/central-valley',
  '/solar-savings/inland-empire',
  '/solar-savings/irvine',
  '/solar-savings/lancaster',
  '/solar-savings/murrieta',
  '/solar-savings/newport-beach',
  '/solar-savings/oakland',
  '/solar-savings/palo-alto',
  '/solar-savings/riverside',
  '/solar-savings/sunnyvale',
]);

function fileMtime(_relPath: string, _fallback: Date): Date {
  const route = _relPath.replace(/^src\/app/, '').replace(/\/page\.[tj]sx?$/, '');
  if (CRR_TOPICAL_20260923.has(route)) return new Date('2026-09-23T00:00:00.000Z');
  if (CRR_NEW_QUESTION_20260920.has(route)) return new Date('2026-09-20T00:00:00.000Z');
  if (CRR_GREEN_20260918.has(route)) return new Date('2026-09-17T00:00:00.000Z'); // claude/ca-green-20260918
  if (LOCAL_RELEASE_REVIEW_ROUTE_SET.has(route)) return new Date('2026-09-12T00:00:00.000Z');
  if (GROWTH_ROUTES.includes(route) || route === '/blog/why-is-my-pge-bill-so-high') return new Date('2026-09-10T00:00:00.000Z');
  if (CRR_UPDATED_PAGES.has(route)) return new Date('2026-09-09T00:00:00.000Z');
  return SITEMAP_LAST_AUDITED;
}

function reviewMtime(slug: string, fallback: Date): Date {
  return fileMtime(`src/app/reviews/${slug}/page.tsx`, fallback);
}

/**
 * Map a user-facing URL path to the stable date of the most recent sitemap
 * audit. The path stays explicit so route ownership remains readable without
 * runtime filesystem I/O.
 */
function urlMtime(_urlPath: string, _fallback: Date): Date {
  if (CRR_TOPICAL_20260923.has(_urlPath)) return new Date('2026-09-23T00:00:00.000Z');
  if (CRR_NEW_QUESTION_20260920.has(_urlPath)) return new Date('2026-09-20T00:00:00.000Z');
  if (CRR_GREEN_20260918.has(_urlPath)) return new Date('2026-09-17T00:00:00.000Z'); // claude/ca-green-20260918
  if (LOCAL_RELEASE_REVIEW_ROUTE_SET.has(_urlPath)) return new Date('2026-09-12T00:00:00.000Z');
  if (GROWTH_ROUTES.includes(_urlPath) || _urlPath === '/blog/why-is-my-pge-bill-so-high') return new Date('2026-09-10T00:00:00.000Z');
  if (CRR_UPDATED_PAGES.has(_urlPath)) return new Date('2026-09-09T00:00:00.000Z');
  return SITEMAP_LAST_AUDITED;
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
    { url: `${base}/tools/solar-panel-calculator`, lastModified: new Date('2026-09-10T00:00:00.000Z'), changeFrequency:'monthly',priority:0.8 },
    { url: base, lastModified: urlMtime('', today), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/blog`, lastModified: urlMtime('/blog', today), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/california-utility-rate-tracker`, lastModified: new Date('2026-09-18T00:00:00.000Z'), changeFrequency: 'monthly', priority: 0.8 }, // claude/ca-ratetracker-20260918
    { url: `${base}/best-solar-companies-california`, lastModified: urlMtime('/best-solar-companies-california', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/solar-panels-california`, lastModified: urlMtime('/solar-panels-california', today), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/solar-problems/solar-homeowners-insurance`, lastModified: urlMtime('/solar-problems/solar-homeowners-insurance', today), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/panel-reviews`, lastModified: urlMtime('/panel-reviews', today), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/commercial-solar`, lastModified: urlMtime('/commercial-solar', today), changeFrequency: 'weekly', priority: 0.9 },
    // claude/audit-links-20260918 — the two section indexes added to close the
    // orphan city and installer pages. Both list every child they cover.
    { url: `${base}/solar-cost`, lastModified: new Date('2026-09-18T00:00:00.000Z'), changeFrequency: 'weekly', priority: 0.9 },
    // claude/upg-index-20260922 — the linkable cost index. lastModified is the
    // index's own updated date, the one its byline and dateModified carry.
    { url: `${base}${COST_INDEX_PATH}`, lastModified: new Date(`${COST_INDEX_UPDATED}T00:00:00.000Z`), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/solar-installers`, lastModified: new Date('2026-09-18T00:00:00.000Z'), changeFrequency: 'weekly', priority: 0.9 },
    // 2026-09-24 integration — hand-written bills page (unincorporated Altadena; not in cities-data.ts).
    { url: `${base}/solar-savings/altadena`, lastModified: urlMtime('/solar-savings/altadena', today), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/about`, lastModified: urlMtime('/about', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: urlMtime('/contact', today), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/methodology`, lastModified: urlMtime('/methodology', today), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/author/chad-simpson`, lastModified: urlMtime('/author/chad-simpson', today), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: urlMtime('/affiliate-disclosure', today), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: urlMtime('/privacy', today), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: urlMtime('/terms', today), changeFrequency: 'yearly', priority: 0.3 },
    // claude/ca-design-20260922 — CRR-only trust pages (design pass 2). The
    // three new ones are drafts for Chad to confirm before release;
    // /corrections already existed but was missing from the sitemap.
    { url: `${base}/editorial-policy`, lastModified: new Date('2026-09-22T00:00:00.000Z'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/how-we-make-money`, lastModified: new Date('2026-09-22T00:00:00.000Z'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/sources-we-use`, lastModified: new Date('2026-09-22T00:00:00.000Z'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/corrections`, lastModified: urlMtime('/corrections', today), changeFrequency: 'monthly', priority: 0.3 },
    // claude/ta-release-20260923 — maintenance hub and two hand-written consumer-protection guides
    { url: `${base}/solar-panel-maintenance-california`, lastModified: new Date('2026-09-23T00:00:00.000Z'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/solar-problems/attorney-to-sue-solar-company-california`, lastModified: new Date('2026-09-23T00:00:00.000Z'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/solar-problems/solar-lawsuit-california`, lastModified: new Date('2026-09-23T00:00:00.000Z'), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const blogSlugs = [
    'best-time-to-install-solar-panels-california',
    'adding-solar-panels-existing-system-california', 'solar-installation-timeline-california',
    'what-happens-if-stop-paying-solar-lease-california',
    'is-community-solar-worth-it',
    'sce-time-of-use-rates-2026',
    'pge-time-of-use-rates-2026',
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
    'are-solar-panels-a-scam', 'california-energy-commission',
    'california-public-utilities-commission', 'california-solar-tax-credit-2026',
    'commercial-solar-financing-california',
    'free-solar-panels-california', 'how-long-do-solar-panels-last',
    'how-to-lower-electric-bill-california',
    'nem-2-vs-nem-3', 'sdge-time-of-use-rates-2026',
    'solar-ev-charging-california', 'solar-panel-bird-proofing',
    'solar-panel-inspection-california', 'solar-panel-maintenance-cost',
    'solar-panel-removal-reinstall-cost', 'solar-powered-ev-charger',
    'solar-ppa-explained-california',
    'solar-tax-credit-2026',
    // claude/ca-green-20260918
    'does-solar-increase-home-value-california',
    'do-solar-panels-increase-property-taxes-california',
    'can-you-cancel-solar-panel-contract-before-installation-california',
    // claude/ca-financing-20260918 — Tier A financing-decision cluster
    'is-it-better-to-buy-or-lease-solar-panels-california',
    'how-much-does-it-cost-to-lease-solar-panels-california',
    'zero-down-solar-california',
    // claude/ta-release-20260923 — topical-authority wave (new posts)
    'average-kwh-per-day-california',
    'average-pge-bill-for-1-bedroom-apartment',
    'average-utility-bill-california',
    'chargepoint-cost-per-kwh-california',
    'did-pge-rates-go-up',
    'direct-access-electricity-california',
    'electricity-rates-highest-in-us-california',
    'how-often-does-ladwp-bill',
    'income-qualified-bill-discount-pge',
    'inflation-reduction-act-solar-california',
    'ladwp-ev-charging-rates',
    'ladwp-rates',
    'ladwp-solar-rooftops-program',
    'nem-3-export-rates-california',
    'nem-3-lawsuit',
    'nem-pge',
    'no-upfront-cost-solar-panels',
    'pge-solar-calculator',
    'pge-tier-rates',
    'prepaid-lease-solar',
    'pros-and-cons-of-solar-panels-california',
    'replacement-solar-inverter-cost',
    'roof-leak-after-solar-panel-install',
    'rooftop-solar-credits-ruling-california',
    'sce-nem-2',
    'sce-rate-schedules',
    'sce-settlement-bill',
    'selling-electricity-back-to-the-grid-price-per-kwh',
    'solar-broker',
    'solar-for-renters',
    'solar-license-california',
    'solar-panel-repair-cost',
    'solar-payback-period-california',
    'solar-resources',
    'what-is-3rd-party-electric-on-pge-bill',
    'what-is-nem-true-up',
    'what-percentage-of-california-power-is-solar',
    'when-does-nem-2-expire',
    'where-does-california-get-its-electricity',
    'why-are-my-nem-charges-so-high',
    'why-is-my-smud-bill-so-high',
    '10-kw-solar-system-cost',
    'average-sdge-bill-2-bedroom-apartment',
    'does-pool-pump-use-a-lot-of-electricity',
    'electricity-peak-hours-california',
    'electricity-rates-by-zip-code',
    'flat-roof-solar-panels',
    'help-with-pge-bill',
    'how-much-does-it-cost-to-turn-on-electricity',
    'how-to-lower-pge-bill',
    'how-to-read-pge-bill',
    'how-to-read-sdge-bill',
    'ladwp-net-metering',
    'ladwp-solar-program',
    'lease-roof-for-solar-panels',
    'pge-ev-rates',
    'pge-rate-schedules',
    'pge-solar-billing-plan',
    'pge-solar-program',
    'sce-solar-billing-plan',
    'sdge-and-solar',
    'sdge-net-metering',
    'smud-peak-hours',
    'smud-solar-program',
    'solar-discount',
    'solar-duck-curve-california',
    'solar-leasing-company',
    'solar-panels-over-canals-california',
    'solar-ppa-companies',
    'solar-rate',
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
    // claude/ta-release-20260923
    'adt-solar-vs-momentum-solar',
    'licensed-solar-installer',
    'momentum-solar-vs-trinity-solar',
    'pge-and-sunrun',
    'sunrun-vs-trinity-solar',
    'vivint-review',
    'worst-solar-companies-california',
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
    // claude/ta-release-20260923
    'car-dealerships-going-solar-california',
    'commercial-solar-carport-cost',
    'commercial-solar-roofing',
    'rec-commercial-solar-panels',
    'solar-developers',
    'average-wattage-of-a-commercial-solar-panel',
    'commercial-solar-lease-programs',
    'commercial-solar-tax-credit',
    'industrial-solar-california',
  ];
  const commercialPages: MetadataRoute.Sitemap = commercialSlugs.map((slug) => ({
    url: `${base}/commercial-solar/${slug}`,
    lastModified: fileMtime(`src/app/commercial-solar/${slug}/page.tsx`, today),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // The out-of-state decision pages (NJ, MD, VA, DE, DC and the Pepco,
  // Delmarva and BGE utility pages) were listed here until 2026-09-24. Plan
  // item 6.1 (Decision 41) 301s each one to a California page
  // (canonical-redirects.ts, GS-ROUTING block), so they are no longer listed.

  // Regional hubs
  const regionalSlugs = [
    'orange-county', 'bay-area', 'inland-empire', 'los-angeles-county',
    'san-diego-county', 'central-valley',
  ];
  // Regional hub pages route through src/app/solar-savings/[city]/page.tsx; use that
  // file's mtime as the stable proxy (per-slug mtime would always be the same).
  const solarSavingsRouteMtime = fileMtime('src/app/solar-savings/[city]/page.tsx', today);

  const regionalPages: MetadataRoute.Sitemap = regionalSlugs.map((slug) => ({
    url: `${base}/solar-savings/${slug}`,
    lastModified: solarSavingsRouteMtime,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // City pages (76+ from cities-data.ts) — both /solar-savings and /solar-companies.
  // 2026-09-22: lastModified is the same date the page shows as "Updated" and
  // emits as dateModified (cityPageDates in src/lib/city-pages.ts), rather
  // than one audit date for every city.
  const cityDate = (type: 'companies' | 'savings', slug: string) =>
    new Date(`${cityPageDates(type, slug).modified}T00:00:00.000Z`);
  const citySavingsPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${base}/solar-savings/${slug}`,
    lastModified: cityDate('savings', slug),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));
  const cityCompaniesPages: MetadataRoute.Sitemap = [...new Set([
    ...getAllCitySlugs(),
    ...[...GROWTH_ROUTES, ...LOCAL_RELEASE_REVIEW_ROUTES]
      .filter(route => route.startsWith('/solar-companies/'))
      .map(route => route.split('/').pop()!),
  ])].map((slug) => ({
    url: `${base}/solar-companies/${slug}`,
    lastModified: cityDate('companies', slug),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Data-driven article clusters (commercial / battery / installer / problems).
  // Generated from src/data/article-pages.*.json, so new pages enter the sitemap
  // the moment their content ships rather than needing a sitemap edit.
  const articlePages: MetadataRoute.Sitemap = ARTICLE_PAGES.map((p) => ({
    url: `${base}${articleHref(p)}`,
    lastModified: new Date(p.reviewedAt),
    changeFrequency: 'monthly' as const,
    priority: p.cluster === 'commercial' ? 0.9 : 0.8,
  }));

  // Cluster hubs, listed only once they have at least one article to point at.
  const articleHubs: MetadataRoute.Sitemap = [
    { path: '/battery', has: articlesInCluster('battery').length > 0 },
    { path: '/solar-problems', has: articlesInCluster('problems').length > 0 },
  ]
    .filter((h) => h.has)
    .map((h) => ({
      url: `${base}${h.path}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));

  // claude/ca-citycost-20260918 — /solar-cost/[city]. Built from the same gate
  // the route's generateStaticParams uses, so a city with an unsourced permit
  // or utility field is not advertised here. lastModified is the page's own
  // verified date (the row's sourcesFetchedAt, or a newer template or
  // utility-split source), the same one its byline and dateModified carry.
  const cityCostPages: MetadataRoute.Sitemap = getPublishableCityCostRows().map((row) => ({
    url: `${base}/solar-cost/${row.slug}`,
    lastModified: new Date(`${cityPageDates('cost', row.slug).modified}T00:00:00.000Z`),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages, ...blogPages, ...installerPages, ...panelPages,
    ...commercialPages, ...regionalPages, ...citySavingsPages, ...cityCompaniesPages,
    ...articlePages, ...articleHubs, ...cityCostPages,
  ]
    // One-per-intent canonicalisation (Phase 3, 2026-09-17): a URL that now
    // answers with a 301 must not be advertised in the sitemap. The table is
    // src/lib/canonical-redirects.ts, so retiring a URL there removes it here
    // without a second edit.
    .filter((entry) => !isRedirectedPath(new URL(entry.url).pathname))
    // Held pages (plan 0.4 / 0.5): served with X-Robots-Tag noindex by
    // middleware and not advertised here until released. See
    // src/data/held-pages.ts.
    .filter((entry) => !isHeldPath(new URL(entry.url).pathname))
    .map((entry) => CRR_REVIEWED_SEPTEMBER_11.has(new URL(entry.url).pathname)
      ? { ...entry, lastModified: new Date('2026-09-11T00:00:00.000Z') }
      : entry);
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
  // Fail closed: the sitemap is the public index registry, not an inventory of
  // every page that happens to compile. Omit lastModified until a verifiable
  // editorial update timestamp exists; a fabricated runtime date is worse than
  // no date and trains crawlers to ignore the signal.
  return GLP1_INDEX_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? base : `${base}${path}`,
    changeFrequency,
    priority,
  }));
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
