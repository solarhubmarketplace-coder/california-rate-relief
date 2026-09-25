/**
 * Held pages: reachable (HTTP 200) but not advertised to search engines.
 *
 * A held page is left out of the sitemap (src/app/sitemap.ts) and is served
 * with `X-Robots-Tag: noindex, follow` (src/middleware.ts), so its links are
 * still followed. Nothing about the page itself changes: the city templates
 * are untouched, and releasing a page is a one-line removal here.
 *
 * Why these pages are held (2026-09-24 gold-standard audit, plan items 0.4 and
 * 0.5; evidence in out/seo_audit_20260924/page_audit.csv):
 *
 *   - 36 `/solar-cost/<city>` pages new in this release (new_in_release =
 *     True, family /solar-cost). The audit found the template does not answer
 *     its own H1 (T-56: "How much…?" then no figure). They are held until the
 *     Block 3 city data gate passes them.
 *   - 15 `/solar-companies/<city>` pages new in this release whose main text is
 *     at least 50% the same as a sibling page (max_similarity_same_family >=
 *     0.5, range 0.663-0.773). They are held until Block 3 gives each one its
 *     own local data.
 *
 * The citydata lane will supply a data gate for Block 3; the integrator wires
 * it into isHeldPath() so a city that passes is released automatically. Keep
 * isHeldPath() a plain, synchronous lookup: middleware calls it on every CRR
 * request.
 */

const HOLD_COST =
  'Held (plan 0.4): new /solar-cost city page; out of the sitemap and noindexed until it passes the Block 3 city gate.';
const HOLD_COMPANIES =
  'Held (plan 0.5): new /solar-companies city page at least 50% similar to a sibling; out of the sitemap and noindexed until Block 3 adds its local data.';

/** The 36 new /solar-cost city slugs (page_audit.csv, new_in_release = True). */
export const HELD_COST_CITY_SLUGS: readonly string[] = [
  'arcata', 'berkeley', 'chico', 'clovis', 'concord', 'cupertino',
  'elk-grove', 'fremont', 'gilroy', 'glendale', 'huntington-beach', 'irvine',
  'lakewood', 'long-beach', 'mission-viejo', 'mountain-view', 'oakland',
  'pasadena', 'pleasanton', 'redding', 'redwood-city', 'richmond', 'riverside',
  'sacramento', 'san-clemente', 'san-mateo', 'san-ramon', 'santa-ana',
  'santa-barbara', 'santa-clara', 'santa-clarita', 'saratoga', 'sunnyvale',
  'vacaville', 'victorville', 'visalia',
];

/**
 * The 15 new /solar-companies city slugs with max_similarity_same_family >= 0.5
 * (page_audit.csv), with that similarity and the sibling it matches.
 */
export const HELD_COMPANIES_CITY_SLUGS: readonly string[] = [
  'monterey', // 0.773 vs manteca
  'manteca', // 0.773 vs monterey
  'encinitas', // 0.770 vs manteca
  'beaumont', // 0.759 vs perris
  'oceanside', // 0.754 vs encinitas
  'winchester', // 0.752 vs beaumont
  'el-dorado-hills', // 0.731 vs manteca
  'salinas', // 0.721 vs manteca
  'seaside', // 0.720 vs manteca
  'watsonville', // 0.720 vs manteca
  'marina', // 0.719 vs monterey
  'aptos', // 0.702 vs manteca
  'walnut-creek', // 0.700 vs monterey
  'pacific-grove', // 0.695 vs monterey
  'rancho-cordova', // 0.663 vs lodi
];

/** Path (absolute, no trailing slash) -> why it is held. */
export const HELD_PAGES: Readonly<Record<string, string>> = Object.freeze({
  ...Object.fromEntries(HELD_COST_CITY_SLUGS.map((slug) => [`/solar-cost/${slug}`, HOLD_COST])),
  ...Object.fromEntries(HELD_COMPANIES_CITY_SLUGS.map((slug) => [`/solar-companies/${slug}`, HOLD_COMPANIES])),
});

/**
 * True when the page is held: serve it, but noindex it and keep it out of the
 * sitemap. Accepts a trailing slash so `/solar-cost/oakland/` matches too.
 */
export function isHeldPath(path: string): boolean {
  const p = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  return Object.prototype.hasOwnProperty.call(HELD_PAGES, p);
}
