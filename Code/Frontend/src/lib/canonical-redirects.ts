/**
 * CRR one-per-intent canonicalisation table (Phase 3 of the California
 * strategy of record, 2026-09-17).
 *
 * Why this exists
 * ---------------
 * Two layers of the site were competing for the same query. In 24 same-city
 * pairs the `/solar-savings/<city>` page earned zero impressions in the
 * 2026-08-12..2026-09-08 Search Console window while its
 * `/solar-companies/<city>` twin earned 58 to 3,076. A 25th pair (Manteca) has
 * both pages at zero and is folded in under the standing one-per-intent rule
 * rather than the impression test. Three further pages are same-section
 * duplicates of another page's entity. Each weaker URL is sent to the stronger
 * one with a permanent 301.
 *
 * Every source and destination below was read from
 * `02_Work_Management/Growth_200/gsc_baseline.json` and the 2026-09-18 crawl
 * (`scripts/out/crawl-linkgraph-2026-09-18.json`). No figure here is estimated.
 *
 * How it is applied
 * -----------------
 * `src/middleware.ts` serves these as 301s, inside the `isCRR` host branch, so
 * they can never fire on greenreviewshub.com, securehomegear.com,
 * athomebiohacking.com or glp1comparehub.com. The two other redirect mechanisms
 * in this repo were considered and not used here:
 *   - `next.config.js` `redirects()` is not host-scoped and emits 308.
 *   - a page-level `permanentRedirect()` (see
 *     `app/blog/is-solar-worth-it-california-2026/page.tsx`) also emits 308 and
 *     cannot address per-city paths served by one dynamic route.
 *
 * `app/sitemap.ts` reads the same table so a redirecting URL is never listed,
 * and `savingsCityHref()` / `companiesCityHref()` below keep internal links off
 * the redirected paths so the deploy introduces no internal link to a redirect
 * and no redirect chain.
 *
 * 2026-09-18 — second consolidation, the /solar-companies city layer
 * -----------------------------------------------------------------
 * That layer earned roughly 35,000 impressions a month against about 9 clicks
 * (0.03% CTR) because the queries behind it return a Google local pack a
 * referral service with no Google Business Profile cannot enter. Every city
 * with a published `/solar-cost/<city>` twin — 37 of the 86 live
 * `/solar-companies/<city>` routes — is sent to that twin, which answers the
 * cost question on an ordinary blue-link SERP. The other 49 city pages have no
 * twin and are left exactly as they were.
 *
 * Because 25 `/solar-savings/<city>` rows above pointed at
 * `/solar-companies/<city>`, the 12 of them whose destination became a source
 * were retargeted to `/solar-cost/<city>` in place. No destination in this
 * table is a key in it; `canonical-redirects.test.ts` asserts that.
 */

/** Source path -> destination path. Both are absolute, no trailing slash. */
export const CRR_CANONICAL_REDIRECTS: Readonly<Record<string, string>> = {
  // --- 24 same-city twins: /solar-savings earned 0 impressions while
  //     /solar-companies earned the figure in the comment
  //     (2026-08-12..2026-09-08 GSC window).
  '/solar-savings/los-angeles': '/solar-cost/los-angeles', // twin 3,076 impr
  '/solar-savings/fresno': '/solar-cost/fresno', // twin 1,717 impr → retargeted 2026-09-18
  '/solar-savings/monterey': '/solar-cost/monterey', // twin 1,287 impr → retargeted 2026-09-18
  '/solar-savings/san-francisco': '/solar-companies/san-francisco', // twin 1,020 impr
  '/solar-savings/corona': '/solar-cost/corona', // twin 979 impr → retargeted 2026-09-18
  '/solar-savings/bakersfield': '/solar-cost/bakersfield', // twin 964 impr → retargeted 2026-09-18
  '/solar-savings/salinas': '/solar-cost/salinas', // twin 789 impr → retargeted 2026-09-18
  '/solar-savings/san-bernardino': '/solar-companies/san-bernardino', // twin 714 impr
  '/solar-savings/temecula': '/solar-cost/temecula', // twin 688 impr → retargeted 2026-09-18
  '/solar-savings/seaside': '/solar-cost/seaside', // twin 635 impr
  '/solar-savings/roseville': '/solar-cost/roseville', // twin 571 impr → retargeted 2026-09-18
  '/solar-savings/el-cajon': '/solar-cost/el-cajon', // twin 432 impr → retargeted 2026-09-18
  '/solar-savings/san-jose': '/solar-cost/san-jose', // twin 417 impr → retargeted 2026-09-18
  '/solar-savings/chico': '/solar-companies/chico', // twin 411 impr
  '/solar-savings/marina': '/solar-cost/marina', // twin 281 impr → retargeted 2026-09-18
  '/solar-savings/pasadena': '/solar-companies/pasadena', // twin 234 impr
  '/solar-savings/fremont': '/solar-companies/fremont', // twin 231 impr
  '/solar-savings/anaheim': '/solar-cost/anaheim', // twin 223 impr → retargeted 2026-09-18
  '/solar-savings/long-beach': '/solar-companies/long-beach', // twin 185 impr
  '/solar-savings/mountain-view': '/solar-companies/mountain-view', // twin 142 impr
  '/solar-savings/encinitas': '/solar-cost/encinitas', // twin 118 impr
  '/solar-savings/lake-elsinore': '/solar-companies/lake-elsinore', // twin 102 impr
  '/solar-savings/san-jacinto': '/solar-companies/san-jacinto', // twin 100 impr
  '/solar-savings/perris': '/solar-companies/perris', // twin 58 impr

  // --- 25th pair, folded in under the one-per-intent rule, not the impression
  //     test: both Manteca pages earned zero impressions in the window.
  '/solar-savings/manteca': '/solar-cost/manteca', // → retargeted 2026-09-18

  // --- Same-section, same-entity duplicates.
  // NEM 2.0 vs NEM 3.0: the '-california' page earned 2 clicks / 370 impr and
  // holds 4 inbound content links; this one earned 0 / 0 with 2 inbound.
  '/blog/nem-2-vs-nem-3': '/blog/nem-2-vs-nem-3-california',
  // Three pages answered "charge an EV with solar in California". The survivor
  // earned 15 impressions and holds 5 inbound content links; these two earned 0
  // and held 1 and 0.
  '/blog/solar-ev-charging-california':
    '/blog/solar-panels-for-ev-charging-california',
  '/blog/solar-powered-ev-charger':
    '/blog/solar-panels-for-ev-charging-california',
  // --- 2026-09-18: the /solar-companies city layer is consolidated into
  //     /solar-cost/<city>. 37 of the 86 live /solar-companies city routes have
  //     a published /solar-cost twin (every row in src/data/city-cost-data.ts
  //     that passes unsourcedFields()); each one is sent there. The remaining 49
  //     /solar-companies city pages have no twin and are deliberately left
  //     untouched — they are not redirected, deleted or pointed at a hub.
  //     The /solar-companies hub/index path is not a key here: only city
  //     children are redirected.
  '/solar-companies/anaheim': '/solar-cost/anaheim',
  '/solar-companies/aptos': '/solar-cost/aptos',
  '/solar-companies/bakersfield': '/solar-cost/bakersfield',
  '/solar-companies/camarillo': '/solar-cost/camarillo',
  '/solar-companies/carlsbad': '/solar-cost/carlsbad',
  '/solar-companies/chula-vista': '/solar-cost/chula-vista',
  '/solar-companies/corona': '/solar-cost/corona',
  '/solar-companies/el-cajon': '/solar-cost/el-cajon',
  '/solar-companies/el-dorado-hills': '/solar-cost/el-dorado-hills',
  '/solar-companies/escondido': '/solar-cost/escondido',
  '/solar-companies/fresno': '/solar-cost/fresno',
  '/solar-companies/grass-valley': '/solar-cost/grass-valley',
  '/solar-companies/livermore': '/solar-cost/livermore',
  '/solar-companies/manteca': '/solar-cost/manteca',
  '/solar-companies/marina': '/solar-cost/marina',
  '/solar-companies/modesto': '/solar-cost/modesto',
  '/solar-companies/monterey': '/solar-cost/monterey',
  '/solar-companies/murrieta': '/solar-cost/murrieta',
  '/solar-companies/oceanside': '/solar-cost/oceanside',
  '/solar-companies/pacific-grove': '/solar-cost/pacific-grove',
  '/solar-companies/petaluma': '/solar-cost/petaluma',
  '/solar-companies/rancho-cordova': '/solar-cost/rancho-cordova',
  '/solar-companies/rancho-cucamonga': '/solar-cost/rancho-cucamonga',
  '/solar-companies/roseville': '/solar-cost/roseville',
  '/solar-companies/salinas': '/solar-cost/salinas',
  '/solar-companies/san-diego': '/solar-cost/san-diego',
  '/solar-companies/san-jose': '/solar-cost/san-jose',
  '/solar-companies/san-luis-obispo': '/solar-cost/san-luis-obispo',
  '/solar-companies/santa-cruz': '/solar-cost/santa-cruz',
  '/solar-companies/santa-rosa': '/solar-cost/santa-rosa',
  '/solar-companies/stockton': '/solar-cost/stockton',
  '/solar-companies/temecula': '/solar-cost/temecula',
  '/solar-companies/thousand-oaks': '/solar-cost/thousand-oaks',
  '/solar-companies/ventura': '/solar-cost/ventura',
  '/solar-companies/walnut-creek': '/solar-cost/walnut-creek',
  '/solar-companies/watsonville': '/solar-cost/watsonville',
  '/solar-companies/winchester': '/solar-cost/winchester',

  // --- Added 2026-09-18 (second wave). These six /solar-companies city pages
  //     had no cost twin when the layer was first retired; the re-screen pass
  //     qualified them and their /solar-cost pages now exist, so they join the
  //     same consolidation as the other 37.
  '/solar-companies/beaumont': '/solar-cost/beaumont',
  '/solar-companies/encinitas': '/solar-cost/encinitas',
  '/solar-companies/los-angeles': '/solar-cost/los-angeles',
  '/solar-companies/palm-springs': '/solar-cost/palm-springs',
  '/solar-companies/seaside': '/solar-cost/seaside',
  '/solar-companies/vallejo': '/solar-cost/vallejo',
};

/**
 * Destination for a redirected path, or null. Accepts an optional trailing
 * slash so `/solar-savings/fresno/` resolves the same way as
 * `/solar-savings/fresno`.
 */
export function canonicalRedirectFor(pathname: string): string | null {
  const exact = CRR_CANONICAL_REDIRECTS[pathname];
  if (exact) return exact;
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return CRR_CANONICAL_REDIRECTS[pathname.slice(0, -1)] ?? null;
  }
  return null;
}

/** True when this path is retired and must not be linked or listed. */
export function isRedirectedPath(pathname: string): boolean {
  return canonicalRedirectFor(pathname) !== null;
}

/** City slugs whose `/solar-savings` page is retired. */
export const REDIRECTED_SAVINGS_CITY_SLUGS: ReadonlySet<string> = new Set(
  Object.keys(CRR_CANONICAL_REDIRECTS)
    .filter((path) => path.startsWith('/solar-savings/'))
    .map((path) => path.slice('/solar-savings/'.length)),
);

/** City slugs whose `/solar-companies` page is retired (2026-09-18). */
export const REDIRECTED_COMPANIES_CITY_SLUGS: ReadonlySet<string> = new Set(
  Object.keys(CRR_CANONICAL_REDIRECTS)
    .filter((path) => path.startsWith('/solar-companies/'))
    .map((path) => path.slice('/solar-companies/'.length)),
);

/**
 * Where a "solar savings in <city>" link should point. For a retired city it
 * returns that city's destination straight out of the table, so the link can
 * never land on a redirect and never on a redirect chain: when
 * `/solar-savings/<city>` was retired to `/solar-companies/<city>` and that
 * page was in turn retired on 2026-09-18, the table row was retargeted to
 * `/solar-cost/<city>` and this returns the final destination.
 */
export function savingsCityHref(slug: string): string {
  return CRR_CANONICAL_REDIRECTS[`/solar-savings/${slug}`] ?? `/solar-savings/${slug}`;
}

/** True when the city still has its own `/solar-savings` page. */
export function hasSavingsCityPage(slug: string): boolean {
  return !REDIRECTED_SAVINGS_CITY_SLUGS.has(slug);
}

/**
 * Where a "solar companies in <city>" link should point. Mirrors
 * `savingsCityHref()`: for one of the 37 cities retired on 2026-09-18 it
 * returns the `/solar-cost/<city>` destination read from the table; for the 49
 * cities with no cost twin it returns the still-live `/solar-companies` page.
 */
export function companiesCityHref(slug: string): string {
  return CRR_CANONICAL_REDIRECTS[`/solar-companies/${slug}`] ?? `/solar-companies/${slug}`;
}

/** True when the city still has its own `/solar-companies` page. */
export function hasCompaniesCityPage(slug: string): boolean {
  return !REDIRECTED_COMPANIES_CITY_SLUGS.has(slug);
}
