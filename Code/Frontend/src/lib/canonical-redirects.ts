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
 * and `savingsCityHref()` below keeps internal links off the redirected paths
 * so the deploy introduces no internal link to a redirect and no redirect
 * chain.
 */

/** Source path -> destination path. Both are absolute, no trailing slash. */
export const CRR_CANONICAL_REDIRECTS: Readonly<Record<string, string>> = {
  // --- 24 same-city twins: /solar-savings earned 0 impressions while
  //     /solar-companies earned the figure in the comment
  //     (2026-08-12..2026-09-08 GSC window).
  '/solar-savings/los-angeles': '/solar-companies/los-angeles', // twin 3,076 impr
  '/solar-savings/fresno': '/solar-companies/fresno', // twin 1,717 impr
  '/solar-savings/monterey': '/solar-companies/monterey', // twin 1,287 impr
  '/solar-savings/san-francisco': '/solar-companies/san-francisco', // twin 1,020 impr
  '/solar-savings/corona': '/solar-companies/corona', // twin 979 impr
  '/solar-savings/bakersfield': '/solar-companies/bakersfield', // twin 964 impr
  '/solar-savings/salinas': '/solar-companies/salinas', // twin 789 impr
  '/solar-savings/san-bernardino': '/solar-companies/san-bernardino', // twin 714 impr
  '/solar-savings/temecula': '/solar-companies/temecula', // twin 688 impr
  '/solar-savings/seaside': '/solar-companies/seaside', // twin 635 impr
  '/solar-savings/roseville': '/solar-companies/roseville', // twin 571 impr
  '/solar-savings/el-cajon': '/solar-companies/el-cajon', // twin 432 impr
  '/solar-savings/san-jose': '/solar-companies/san-jose', // twin 417 impr
  '/solar-savings/chico': '/solar-companies/chico', // twin 411 impr
  '/solar-savings/marina': '/solar-companies/marina', // twin 281 impr
  '/solar-savings/pasadena': '/solar-companies/pasadena', // twin 234 impr
  '/solar-savings/fremont': '/solar-companies/fremont', // twin 231 impr
  '/solar-savings/anaheim': '/solar-companies/anaheim', // twin 223 impr
  '/solar-savings/long-beach': '/solar-companies/long-beach', // twin 185 impr
  '/solar-savings/mountain-view': '/solar-companies/mountain-view', // twin 142 impr
  '/solar-savings/encinitas': '/solar-companies/encinitas', // twin 118 impr
  '/solar-savings/lake-elsinore': '/solar-companies/lake-elsinore', // twin 102 impr
  '/solar-savings/san-jacinto': '/solar-companies/san-jacinto', // twin 100 impr
  '/solar-savings/perris': '/solar-companies/perris', // twin 58 impr

  // --- 25th pair, folded in under the one-per-intent rule, not the impression
  //     test: both Manteca pages earned zero impressions in the window.
  '/solar-savings/manteca': '/solar-companies/manteca',

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

/**
 * Where a "solar savings in <city>" link should point. For a retired city it
 * returns the surviving `/solar-companies` page, so no internal link lands on a
 * redirect.
 */
export function savingsCityHref(slug: string): string {
  return REDIRECTED_SAVINGS_CITY_SLUGS.has(slug)
    ? `/solar-companies/${slug}`
    : `/solar-savings/${slug}`;
}

/** True when the city still has its own `/solar-savings` page. */
export function hasSavingsCityPage(slug: string): boolean {
  return !REDIRECTED_SAVINGS_CITY_SLUGS.has(slug);
}
