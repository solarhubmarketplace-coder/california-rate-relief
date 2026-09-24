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
 *
 * 2026-09-22 — third pass: 24 of the 44 /solar-companies redirects reversed
 * ---------------------------------------------------------------------------
 * The 2026-09-18 consolidation assumed the "solar companies <city>" query
 * intent was unwinnable for a referral site with no Google Business Profile
 * — a Google local pack a blue-link page can never enter. A fresh Ahrefs
 * SERP pull (exported 2026-09-21/22) shows that assumption does not hold
 * everywhere: the lowest domain rating holding a page-1 organic slot for
 * "solar companies <city>" is DR 1 Bakersfield, DR 2 Modesto, DR 2 Santa
 * Rosa, DR 2 Sacramento, DR 2 Visalia, DR 0 San Jose, DR 6 Los Angeles, DR 8
 * Oakland, DR 10 Fresno, DR 11 Riverside, DR 11 Santa Ana, DR 15 San
 * Bernardino — all beatable by this site. San Francisco (DR 23) and San
 * Diego (DR 25) are not, so San Diego's row below stays.
 *
 * Separately, CODE_INVENTORY_DELTA.md §3 found that 25 of the 38
 * `growthCities` entries in `src/data/growth-cities.ts` carry real, sourced
 * `CityComparison` content (provider names, bill/permit copy, FAQs) that can
 * never render while the matching row below fires first in middleware —
 * sourced content the redirect makes permanently unreachable.
 *
 * Decision of record for this branch: every `/solar-companies/<city>` row
 * below whose slug is a `growthCities` key is un-redirected, except
 * `san-diego` (its page-1 floor is DR 25 per the Ahrefs pull above). GSC
 * impressions cited elsewhere in this file describe the 2026-08-12..
 * 2026-09-08 window; the more recent `CITY_PAGES_GSC.csv` window
 * (2026-08-21..2026-09-17) confirms these 24 pages still draw real
 * impressions at ~0 clicks under the redirect — e.g. Los Angeles 2,118,
 * Fresno 1,601, Modesto 1,341, Santa Rosa 968, Bakersfield 680, San Jose
 * 330 — impression demand a ranking attempt can now try to convert. See the
 * removed-slugs comments inline below for exactly which 24 rows this
 * removed.
 *
 * 2026-09-23 — fourth pass (Decision 15): Rule 3 cities reinstated
 * ---------------------------------------------------------------
 * The topic map (topicmap blocks 05/06) found the redirected "solar
 * companies <city>" pages still drawing installer queries through the
 * redirect, and the /solar-cost pages they land on answer a different SERP:
 * installer and cost results for the same place share 3+ top-10 URLs in only
 * 2 of 29 keyword pairs (7%, city_pairs.pkl). For the seven Monterey Bay
 * cities the retired URLs earned 9,968 installer-query impressions in 90 days
 * at average positions 10.4-18.2 (redirect_intent_audit.csv).
 *
 * Every remaining /solar-companies row whose page passes Rule 3 in
 * hub_page_map.csv (rule3_gate pass_gsc or pass_serp) is removed, so the
 * installer page renders again and the cost page keeps the cost intent.
 * Each reinstated slug is in cities-data.ts (the page's generateStaticParams
 * source), so the route renders. San Diego, kept on 2026-09-22 for its
 * DR 25 SERP floor, also passes Rule 3 on Search Console and was removed in
 * a separate commit. Vallejo (no_serp) stays redirected. The
 * /solar-savings rows are unchanged: bill/rate queries share more of their
 * SERP with cost pages (36%) than with installer pages (0%).
 *
 * 2026-09-23 — fifth pass (Tier 3 wave, citycos lane): Vallejo reinstated
 * ----------------------------------------------------------------------
 * Vallejo was the one companies row kept above because it had no checked
 * SERP (no_serp). The Tier 3 Rank Tracker pull checked "solar panels
 * vallejo" (160/mo) and found a displaceable page-one result (DR 9), so the
 * topic now passes Rule 3 (assign_t3_citycos.csv rule3_gate_new pass_serp).
 * Its row is removed and /solar-companies/vallejo renders a sourced
 * growthCities entry again; /solar-cost/vallejo keeps the cost intent. With
 * this row gone the table holds no /solar-companies redirects at all.
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

  // --- 2026-09-23, Decision 14: high-confidence merges only (topicmap block
  //     06, MERGE_CANDIDATES.md). Each loser answers the same question as its
  //     winner and its head keyword is a SERP-verified member of a cluster the
  //     winner holds. Figures are 90-day Search Console impressions
  //     (page_inventory.csv). The medium/low-confidence merges (G05, G08,
  //     G10, G11) are held and not in this table.
  // G03: "solar ppa vs lease" is in cluster 65, held by the 3-way comparison
  // (1,649 impr at pos 8.7 vs 888 at 14.9). The loser ranks better on "solar
  // ppa price per kwh california"; carry that section into the winner.
  '/blog/solar-ppa-vs-lease-california':
    '/blog/ppa-loan-vs-solar-lease-vs-cash-california',
  // G06: same question ("Free Solar in California: Is It Real?"); its title
  // keywords are in cluster 154, held by the winner (28 impr vs 2,585).
  '/solar-problems/free-solar-california-is-it-real':
    '/blog/free-solar-panels-california',
  // G09: "commercial solar installation cost" is in cluster 120, held by the
  // cost-per-watt page (8,813 impr vs 2).
  '/blog/commercial-solar-installation-cost-california':
    '/commercial-solar/cost-per-watt-california',
  // --- 2026-09-18: the /solar-companies city layer is consolidated into
  //     /solar-cost/<city>. 37 of the 86 live /solar-companies city routes have
  //     a published /solar-cost twin (every row in src/data/city-cost-data.ts
  //     that passes unsourcedFields()); each one is sent there. The remaining 49
  //     /solar-companies city pages have no twin and are deliberately left
  //     untouched — they are not redirected, deleted or pointed at a hub.
  //     The /solar-companies hub/index path is not a key here: only city
  //     children are redirected.
  //
  //     2026-09-22 — 21 of this block's rows were reversed (see the
  //     file-level "third pass" comment above): anaheim, bakersfield,
  //     camarillo, el-cajon, escondido, fresno, grass-valley, livermore,
  //     modesto, murrieta, petaluma, rancho-cucamonga, roseville, san-jose,
  //     san-luis-obispo, santa-cruz, santa-rosa, stockton, temecula,
  //     thousand-oaks, ventura — each is a `growthCities` key whose
  //     `CityComparison` content is a sourced, ranking target again per the
  //     2026-09-22 Ahrefs SERP pull. `san-diego` is the one growthCities/
  //     redirected city kept below: its page-1 floor is DR 25.
  //
  //     2026-09-23 — Decision 15: every row here whose /solar-companies page
  //     passes Rule 3 was removed (fourth pass; see the file-level comment).
  //     Removed: aptos, carlsbad, chula-vista, corona, el-dorado-hills,
  //     manteca, marina, monterey, oceanside, pacific-grove, rancho-cordova,
  //     salinas, walnut-creek, watsonville, winchester, and from the second
  //     wave below beaumont, encinitas, seaside.
  //
  //     san-diego was kept on 2026-09-22 because the page-1 floor for "solar
  //     companies san diego" is DR 25 (Ahrefs, exported 2026-09-22). It was
  //     removed on 2026-09-23 in its own Decision 15 commit: it passes Rule 3
  //     on Search Console (hub_page_map.csv rule3_gate pass_gsc; 1,881
  //     installer-query impressions in 90 days, average position 58.0 per
  //     redirect_intent_audit.csv), which is the test Decision 15 applies.

  // --- Added 2026-09-18 (second wave). These six /solar-companies city pages
  //     had no cost twin when the layer was first retired; the re-screen pass
  //     qualified them and their /solar-cost pages now exist, so they join the
  //     same consolidation as the other 37.
  //     2026-09-22 — los-angeles and palm-springs reversed; see above.
  //     2026-09-23 — beaumont, encinitas and seaside reversed (Decision 15).
  // Kept 2026-09-23 (Decision 15): Vallejo did not pass Rule 3 then
  // (hub_page_map.csv rule3_gate = no_serp). Removed the same day in the
  // Tier 3 wave: the new SERP check passes it (see the "fifth pass" comment
  // at the top of this file).
  // Corrected 2026-09-20: Rocklin's growth-only route also has a cost twin.
  // Reversed 2026-09-22; see the file-level "third pass" comment above.
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
 * `savingsCityHref()`: for retired cities it returns the `/solar-cost/<city>`
 * destination read from the table; cities with no cost twin retain their
 * still-live `/solar-companies` page.
 */
export function companiesCityHref(slug: string): string {
  return CRR_CANONICAL_REDIRECTS[`/solar-companies/${slug}`] ?? `/solar-companies/${slug}`;
}

/** True when the city still has its own `/solar-companies` page. */
export function hasCompaniesCityPage(slug: string): boolean {
  return !REDIRECTED_COMPANIES_CITY_SLUGS.has(slug);
}
