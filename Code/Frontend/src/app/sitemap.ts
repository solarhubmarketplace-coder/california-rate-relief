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
import { PAGE_MODIFIED_DATES } from '@/data/page-modified-dates';
import { cityPageDates } from '@/lib/city-pages';
import { reviews as grhReviews, TOTAL_PAGES as GRH_TOTAL_PAGES } from '@/lib/grh-reviews-data';

// =============================================================================
// LAST-MODIFIED HELPERS
// =============================================================================
// Do not inspect process.cwd() here. Runtime filesystem stat calls force Next's
// output tracer to include the entire project in the server bundle.
//
// ratereliefca.com (2026-09-24, plan 11.5): every CRR lastmod is the page's
// own dateModified, read from the same source the page uses, so the sitemap,
// the schema and the visible "Updated" date agree:
//   - hand-written pages: PAGE_MODIFIED_DATES, generated from each page file
//     by scripts/page-dates.mjs (run it after changing a page's date; its
//     --check mode fails when the file is stale);
//   - city pages: cityPageDates(); data-driven articles: reviewedAt; the cost
//     index: COST_INDEX_UPDATED; the two index hubs: the newest date among the
//     rows they list, exactly as their CollectionPage schema computes it.
// A page that declares no date gets no lastmod rather than an invented one.
// The hand-kept per-wave date sets this replaced had drifted: 67 pages
// disagreed with their own dateModified (audit T-11).
//
// The other hosts keep the single audited date they had.
// =============================================================================

const SITEMAP_LAST_AUDITED = new Date('2026-08-30T00:00:00.000Z');

function fileMtime(_relPath: string, _fallback: Date): Date {
  return SITEMAP_LAST_AUDITED;
}

function reviewMtime(slug: string, fallback: Date): Date {
  return fileMtime(`src/app/reviews/${slug}/page.tsx`, fallback);
}

/** The stable audited date for a non-CRR path (see the note above). */
function urlMtime(_urlPath: string, _fallback: Date): Date {
  return SITEMAP_LAST_AUDITED;
}

const isoDay = (day: string) => new Date(`${day}T00:00:00.000Z`);

/**
 * lastModified for a hand-written CRR page: its own dateModified, or nothing
 * when the page declares no date. Spread into the entry.
 */
function pageLastmod(path: string): { lastModified?: Date } {
  const day = PAGE_MODIFIED_DATES[path === '' ? '/' : path];
  return day ? { lastModified: isoDay(day) } : {};
}

/** The newest ISO day in a list, or nothing (matches the hubs' own schema). */
function newestLastmod(days: (string | undefined)[]): { lastModified?: Date } {
  const newest = days.filter((d): d is string => Boolean(d)).sort().at(-1);
  return newest ? { lastModified: isoDay(newest) } : {};
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

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/tools/solar-panel-calculator`, ...pageLastmod('/tools/solar-panel-calculator'), changeFrequency:'monthly',priority:0.8 },
    { url: base, ...pageLastmod('/'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/blog`, ...pageLastmod('/blog'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/california-utility-rate-tracker`, ...pageLastmod('/california-utility-rate-tracker'), changeFrequency: 'monthly', priority: 0.8 }, // claude/ca-ratetracker-20260918
    { url: `${base}/best-solar-companies-california`, ...pageLastmod('/best-solar-companies-california'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/solar-panels-california`, ...pageLastmod('/solar-panels-california'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/solar-problems/solar-homeowners-insurance`, ...pageLastmod('/solar-problems/solar-homeowners-insurance'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/panel-reviews`, ...pageLastmod('/panel-reviews'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/commercial-solar`, ...pageLastmod('/commercial-solar'), changeFrequency: 'weekly', priority: 0.9 },
    // claude/audit-links-20260918 — the two section indexes added to close the
    // orphan city and installer pages. Both list every child they cover.
    { url: `${base}/solar-cost`, ...newestLastmod(getPublishableCityCostRows().map((row) => row.sourcesFetchedAt)), changeFrequency: 'weekly', priority: 0.9 },
    // claude/upg-index-20260922 — the linkable cost index. lastModified is the
    // index's own updated date, the one its byline and dateModified carry.
    { url: `${base}${COST_INDEX_PATH}`, lastModified: new Date(`${COST_INDEX_UPDATED}T00:00:00.000Z`), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/solar-installers`, ...pageLastmod('/solar-installers'), changeFrequency: 'weekly', priority: 0.9 },
    // 2026-09-24 integration — hand-written bills page (unincorporated Altadena; not in cities-data.ts).
    { url: `${base}/solar-savings/altadena`, ...pageLastmod('/solar-savings/altadena'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/about`, ...pageLastmod('/about'), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, ...pageLastmod('/contact'), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/methodology`, ...pageLastmod('/methodology'), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/author/chad-simpson`, ...pageLastmod('/author/chad-simpson'), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, ...pageLastmod('/affiliate-disclosure'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, ...pageLastmod('/privacy'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, ...pageLastmod('/terms'), changeFrequency: 'yearly', priority: 0.3 },
    // claude/ca-design-20260922 — CRR-only trust pages (design pass 2). The
    // three new ones are drafts for Chad to confirm before release;
    // /corrections already existed but was missing from the sitemap.
    { url: `${base}/editorial-policy`, ...pageLastmod('/editorial-policy'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/how-we-make-money`, ...pageLastmod('/how-we-make-money'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/sources-we-use`, ...pageLastmod('/sources-we-use'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/corrections`, ...pageLastmod('/corrections'), changeFrequency: 'monthly', priority: 0.3 },
    // claude/ta-release-20260923 — maintenance hub and two hand-written consumer-protection guides
    { url: `${base}/solar-panel-maintenance-california`, ...pageLastmod('/solar-panel-maintenance-california'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/solar-problems/attorney-to-sue-solar-company-california`, ...pageLastmod('/solar-problems/attorney-to-sue-solar-company-california'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/solar-problems/solar-lawsuit-california`, ...pageLastmod('/solar-problems/solar-lawsuit-california'), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const blogSlugs = [
    'best-time-to-install-solar-panels-california',
    'adding-solar-panels-existing-system-california', 'solar-installation-timeline-california',
    'what-happens-if-stop-paying-solar-lease-california',
    'is-community-solar-worth-it',
    'sce-time-of-use-rates-2026',
    'pge-time-of-use-rates-2026',
    'sce-rate-increase-2026', 'pge-rate-increase-2026', 'sdge-rate-increase-2026',
    'california-24-dollar-fixed-charge-explained',
    'pge-vs-sce-vs-sdge-rates-compared',
    'prepaid-ppa-california-2026', 'ppa-loan-vs-solar-lease-vs-cash-california',
    'net-billing-vs-net-metering-california',
    'hoa-solar-rights-california', 'low-income-solar-california',
    'free-roof-replacement-with-solar-panels-california', 'nem-2-vs-nem-3-california',
    'rent-solar-panels-for-your-home-california',
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
    // claude/ca-green-20260918
    'does-solar-increase-home-value-california',
    'do-solar-panels-increase-property-taxes-california',
    'can-you-cancel-solar-panel-contract-before-installation-california',
    // claude/ca-financing-20260918 — Tier A financing-decision cluster
    'is-it-better-to-buy-or-lease-solar-panels-california',
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
    ...pageLastmod(`/blog/${slug}`),
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
    'licensed-solar-installer',
    'pge-and-sunrun',
    'vivint-review',
    'worst-solar-companies-california',
  ];
  const installerPages: MetadataRoute.Sitemap = installerSlugs.map((slug) => ({
    url: `${base}/solar-installers/${slug}`,
    ...pageLastmod(`/solar-installers/${slug}`),
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
    ...pageLastmod(`/panel-reviews/${slug}`),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Commercial solar (7 topics)
  const commercialSlugs = [
    'companies-california', 'cost-per-watt-california',
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
    ...pageLastmod(`/commercial-solar/${slug}`),
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
  // Each regional hub is its own hand-written page (src/app/solar-savings/<region>/page.tsx).
  const regionalPages: MetadataRoute.Sitemap = regionalSlugs.map((slug) => ({
    url: `${base}/solar-savings/${slug}`,
    ...pageLastmod(`/solar-savings/${slug}`),
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
  // lastModified is the article's reviewedAt, its schema dateModified. The one
  // exception is a JSON entry shadowed by a hand-written page at the same path
  // (a static route wins over [slug]): that page's own date is used.
  const articlePages: MetadataRoute.Sitemap = ARTICLE_PAGES.map((p) => ({
    url: `${base}${articleHref(p)}`,
    ...(PAGE_MODIFIED_DATES[articleHref(p)] ? pageLastmod(articleHref(p)) : { lastModified: new Date(p.reviewedAt) }),
    changeFrequency: 'monthly' as const,
    priority: p.cluster === 'commercial' ? 0.9 : 0.8,
  }));

  // Cluster hubs, listed only once they have at least one article to point at.
  // lastModified is the newest reviewedAt among the hub's articles, the same
  // date its CollectionPage schema carries (ArticleHub in ArticleRoute.tsx).
  const articleHubs: MetadataRoute.Sitemap = ([
    { path: '/battery', cluster: 'battery' },
    { path: '/solar-problems', cluster: 'problems' },
  ] as const)
    .filter((h) => articlesInCluster(h.cluster).length > 0)
    .map((h) => ({
      url: `${base}${h.path}`,
      ...newestLastmod(articlesInCluster(h.cluster).map((p) => p.reviewedAt)),
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
    .filter((entry) => !isHeldPath(new URL(entry.url).pathname));
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
