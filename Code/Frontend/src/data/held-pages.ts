/**
 * Held pages: reachable (HTTP 200) but not advertised to search engines.
 *
 * A held page is left out of the sitemap (src/app/sitemap.ts) and is served
 * with `X-Robots-Tag: noindex, follow` (src/middleware.ts), so its links are
 * still followed. Nothing about the page itself changes, and releasing a page
 * is a data change here, not a template edit.
 *
 * Two sources of holds (2026-09-24 gold-standard audit, plan items 0.4, 0.5
 * and 3.5; evidence in out/seo_audit_20260924/page_audit.csv):
 *
 *   - /solar-cost/<city>: the Block 3 city gate (src/data/city-gate.ts). A
 *     page is held while it has fewer than 3 named local data points or shares
 *     50% or more of its 8-word phrases with a sibling. The committed result
 *     is src/data/city-gate-results.ts (failsCityGate); `node
 *     scripts/city-gate.mjs` fails when that snapshot is stale. Of the 36 new
 *     cost pages the release held first, 33 now pass and are released; the 3
 *     that still fail (Sacramento, Elk Grove, Rancho Cordova: SMUD cities with
 *     no CPUC interconnection data, whose pages overlap 61-68%) stay held.
 *   - /solar-companies/<city>: the 15 new pages held because their main text
 *     was at least 50% the same as a sibling's. The citycos lane rebuilt the
 *     template around each city's CPUC installer records; 14 now pass the same
 *     rule (3 local data points, sibling overlap under 50%) and are released.
 *     Rancho Cordova still fails (0.549 overlap: its table is the Sacramento
 *     County fallback it shares with Elk Grove) and stays held.
 *
 * Keep isHeldPath() a plain, synchronous lookup: middleware calls it on every
 * CRR request.
 */

import { failsCityGate } from './city-gate-results.ts';

const HOLD_COMPANIES =
  'Held (plan 0.5 / 3.5): new /solar-companies city page that still shares 50% or more of its text with a sibling; out of the sitemap and noindexed until it has its own local data.';

/**
 * The 36 new /solar-cost city slugs the release first held (page_audit.csv,
 * new_in_release = True). Kept as the record of what was held and released;
 * whether a cost page is held now comes only from the city gate.
 */
export const FIRST_HELD_COST_CITY_SLUGS: readonly string[] = [
  'arcata', 'berkeley', 'chico', 'clovis', 'concord', 'cupertino',
  'elk-grove', 'fremont', 'gilroy', 'glendale', 'huntington-beach', 'irvine',
  'lakewood', 'long-beach', 'mission-viejo', 'mountain-view', 'oakland',
  'pasadena', 'pleasanton', 'redding', 'redwood-city', 'richmond', 'riverside',
  'sacramento', 'san-clemente', 'san-mateo', 'san-ramon', 'santa-ana',
  'santa-barbara', 'santa-clara', 'santa-clarita', 'saratoga', 'sunnyvale',
  'vacaville', 'victorville', 'visalia',
];

/**
 * The 15 new /solar-companies city slugs the release first held
 * (max_similarity_same_family >= 0.5 in page_audit.csv). 14 were released on
 * 2026-09-24 after the template rebuild (citycos manifest, item 3.5).
 */
export const FIRST_HELD_COMPANIES_CITY_SLUGS: readonly string[] = [
  'monterey', 'manteca', 'encinitas', 'beaumont', 'oceanside', 'winchester',
  'el-dorado-hills', 'salinas', 'seaside', 'watsonville', 'marina', 'aptos',
  'walnut-creek', 'pacific-grove', 'rancho-cordova',
];

/** /solar-companies pages still held, with the overlap that holds them. */
export const HELD_COMPANIES_CITY_SLUGS: readonly string[] = [
  'rancho-cordova', // 0.549 vs elk-grove (shared Sacramento County fallback table)
];

/** Paths held by an explicit entry (not by the city gate) -> why. */
export const HELD_PAGES: Readonly<Record<string, string>> = Object.freeze({
  ...Object.fromEntries(HELD_COMPANIES_CITY_SLUGS.map((slug) => [`/solar-companies/${slug}`, HOLD_COMPANIES])),
});

/**
 * True when the page is held: serve it, but noindex it and keep it out of the
 * sitemap. Accepts a trailing slash so `/solar-cost/oakland/` matches too.
 */
export function isHeldPath(path: string): boolean {
  const p = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  return Object.prototype.hasOwnProperty.call(HELD_PAGES, p) || failsCityGate(p);
}
