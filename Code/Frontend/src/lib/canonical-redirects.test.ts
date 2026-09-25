import assert from 'node:assert/strict';
import test from 'node:test';
import {
  CRR_CANONICAL_REDIRECTS,
  canonicalRedirectFor,
  companiesCityHref,
  hasCompaniesCityPage,
  isRedirectedPath,
  savingsCityHref,
} from './canonical-redirects.ts';
import { getAllCitySlugs } from '../data/cities-data.ts';
import { growthCities } from '../data/growth-cities.ts';
import { getPublishableCityCostSlugs } from '../data/city-cost-data.ts';

const sources = Object.keys(CRR_CANONICAL_REDIRECTS);
const destinations = Object.values(CRR_CANONICAL_REDIRECTS);

/** Slugs /solar-companies/[city] pre-renders (its generateStaticParams). */
const COMPANIES_ROUTE_SLUGS = new Set([
  ...getAllCitySlugs(),
  ...Object.keys(growthCities),
]);

// ---------------------------------------------------------------------------
// Registries. Each dated change to the table registers what it did in its own
// section below, next to its own tests, and the cross-cutting checks at the
// end of the file read these. That keeps every change's edits to this file in
// one place, so its commit can be reverted without touching another's lines.
// ---------------------------------------------------------------------------
/** Rows each change added (+n) or removed (-n) after the 2026-09-22 table of 48. */
const ROW_DELTAS: number[] = [];
/** /solar-companies slugs left live on purpose although they have a /solar-cost twin. */
const REINSTATED_COMPANIES_SLUGS = new Set<string>();

test('no destination is itself a redirect source (no chains)', () => {
  const chained = destinations.filter((dest) => isRedirectedPath(dest));
  assert.deepEqual(chained, []);
});

// ---------------------------------------------------------------------------
// next.config.js redirects() — the second redirect mechanism (308, not
// host-scoped). Checked here so a rule in one mechanism can never point at a
// source in the other and form a chain.
// ---------------------------------------------------------------------------
type NextRedirect = { source: string; destination: string; permanent: boolean };
async function nextConfigRedirects(): Promise<NextRedirect[]> {
  const { createRequire } = await import('node:module');
  const config = createRequire(import.meta.url)('../../next.config.js') as {
    redirects: () => Promise<NextRedirect[]>;
  };
  return config.redirects();
}

test('no redirect chain across next.config.js and the canonical table', async () => {
  const rules = await nextConfigRedirects();
  const configSources = new Set(rules.map((r) => r.source));
  for (const r of rules) {
    assert.equal(configSources.has(r.destination), false, `${r.source} -> ${r.destination} chains inside next.config.js`);
    assert.equal(isRedirectedPath(r.destination), false, `${r.source} -> ${r.destination} lands on a canonical-table source`);
    assert.equal(isRedirectedPath(r.source), false, `${r.source} is claimed by both mechanisms`);
  }
  for (const dest of destinations) {
    assert.equal(configSources.has(dest), false, `canonical-table destination ${dest} is a next.config.js source`);
  }
});

// 2026-09-23, Decision 16: retarget in next.config.js, not in the table.
test('Decision 16: /blog/nem-3-california goes to the NEM 3.0 definition page', async () => {
  const rule = (await nextConfigRedirects()).find((r) => r.source === '/blog/nem-3-california');
  assert.ok(rule, 'next.config.js must keep the /blog/nem-3-california rule');
  assert.equal(rule.destination, '/blog/what-is-nem-3-california');
  assert.equal(rule.permanent, true);
});

// 2026-09-22: the 25 orphaned growthCities slugs from CODE_INVENTORY_DELTA.md
// §3 (a growthCities key whose /solar-companies page was a redirect source,
// so its CityComparison content could never render) minus san-diego, which
// stays redirected — its page-1 floor is DR 25 per the Ahrefs pull cited in
// canonical-redirects.ts. These 24 are reinstated: no longer redirected even
// though each one has a /solar-cost twin.
const REINSTATED_GROWTH_CITY_SLUGS = new Set([
  'anaheim', 'bakersfield', 'camarillo', 'el-cajon', 'escondido', 'fresno',
  'grass-valley', 'livermore', 'los-angeles', 'modesto', 'murrieta',
  'palm-springs', 'petaluma', 'rancho-cucamonga', 'rocklin', 'roseville',
  'san-jose', 'san-luis-obispo', 'santa-cruz', 'santa-rosa', 'stockton',
  'temecula', 'thousand-oaks', 'ventura',
]);
for (const slug of REINSTATED_GROWTH_CITY_SLUGS) REINSTATED_COMPANIES_SLUGS.add(slug);

test('the 24 evidence-backed growthCities entries are reinstated (not redirected)', () => {
  assert.ok(
    REINSTATED_GROWTH_CITY_SLUGS.size === 24,
    `expected 24 reinstated slugs, found ${REINSTATED_GROWTH_CITY_SLUGS.size}`,
  );
  for (const slug of REINSTATED_GROWTH_CITY_SLUGS) {
    assert.ok(
      Object.prototype.hasOwnProperty.call(growthCities, slug),
      `${slug} must be a growthCities key`,
    );
  }
  for (const slug of REINSTATED_GROWTH_CITY_SLUGS) {
    assert.equal(
      canonicalRedirectFor(`/solar-companies/${slug}`),
      null,
      `expected /solar-companies/${slug} to be reinstated (no redirect)`,
    );
    assert.equal(companiesCityHref(slug), `/solar-companies/${slug}`);
    assert.equal(hasCompaniesCityPage(slug), true);
  }
});

// 2026-09-23, Decision 15 (own commit): san-diego was kept redirected on
// 2026-09-22 for its DR 25 SERP floor, but it passes Rule 3 on Search
// Console (hub_page_map.csv rule3_gate pass_gsc), so it is reinstated too.
REINSTATED_COMPANIES_SLUGS.add('san-diego');
ROW_DELTAS.push(-1);

test('Decision 15: san-diego is reinstated (passes Rule 3 on Search Console)', () => {
  assert.equal(canonicalRedirectFor('/solar-companies/san-diego'), null);
  assert.equal(companiesCityHref('san-diego'), '/solar-companies/san-diego');
  assert.equal(hasCompaniesCityPage('san-diego'), true);
  assert.ok(COMPANIES_ROUTE_SLUGS.has('san-diego'), 'the route must render');
  assert.equal(isRedirectedPath('/solar-cost/san-diego'), false);
});

test('a /solar-companies city page with no cost twin is left alone', () => {
  const companies = new Set([
    ...getAllCitySlugs(),
    ...Object.keys(growthCities),
  ]);
  const cost = new Set(getPublishableCityCostSlugs());
  const orphans = [...companies].filter((slug) => !cost.has(slug));
  assert.ok(orphans.length > 0, 'the retained-route check must not be vacuous');
  for (const slug of orphans) {
    assert.equal(canonicalRedirectFor(`/solar-companies/${slug}`), null);
    assert.equal(companiesCityHref(slug), `/solar-companies/${slug}`);
    assert.equal(hasCompaniesCityPage(slug), true);
  }
});

// 2026-09-23, Decision 15: the /solar-companies redirect sources whose page
// passes Rule 3 in topicmap/blocks/05_structure/hub_page_map.csv (conflict
// contains target_redirected, rule3_gate pass_gsc or pass_serp). Reinstated:
// no longer redirected even though each one has a /solar-cost twin.
const RULE3_REINSTATED_CITY_SLUGS = new Set([
  'aptos', 'beaumont', 'carlsbad', 'chula-vista', 'corona', 'el-dorado-hills',
  'encinitas', 'manteca', 'marina', 'monterey', 'oceanside', 'pacific-grove',
  'rancho-cordova', 'salinas', 'seaside', 'walnut-creek', 'watsonville',
  'winchester',
]);
for (const slug of RULE3_REINSTATED_CITY_SLUGS) REINSTATED_COMPANIES_SLUGS.add(slug);
ROW_DELTAS.push(-RULE3_REINSTATED_CITY_SLUGS.size);

test('Decision 15: the Rule 3 cities are reinstated and each one renders', () => {
  const cost = new Set(getPublishableCityCostSlugs());
  assert.equal(RULE3_REINSTATED_CITY_SLUGS.size, 18);
  for (const slug of RULE3_REINSTATED_CITY_SLUGS) {
    assert.ok(
      COMPANIES_ROUTE_SLUGS.has(slug),
      `${slug} must be in the /solar-companies/[city] static params, or the reinstated URL 404s`,
    );
    assert.equal(canonicalRedirectFor(`/solar-companies/${slug}`), null, slug);
    assert.equal(companiesCityHref(slug), `/solar-companies/${slug}`);
    assert.equal(hasCompaniesCityPage(slug), true);
    // The cost twin stays live, so the city keeps one page per intent.
    assert.ok(cost.has(slug), `${slug} should keep its /solar-cost page`);
    assert.equal(isRedirectedPath(`/solar-cost/${slug}`), false);
  }
  // The seven Monterey Bay cities the intent audit rated high severity.
  for (const slug of ['monterey', 'salinas', 'seaside', 'pacific-grove', 'watsonville', 'aptos', 'marina']) {
    assert.ok(RULE3_REINSTATED_CITY_SLUGS.has(slug), slug);
  }
  // Vallejo did not pass Rule 3 here (no_serp) and kept its redirect. The
  // Tier 3 wave reinstated it later the same day once a SERP check passed it;
  // its own section below asserts that, so this test no longer pins it.
});

test('the /solar-companies hub path is not redirected', () => {
  assert.equal(canonicalRedirectFor('/solar-companies'), null);
  assert.equal(canonicalRedirectFor('/solar-companies/'), null);
});

test('city href helpers never return a redirect source', () => {
  const slugs = [...new Set([...getAllCitySlugs(), ...Object.keys(growthCities)])];
  for (const slug of slugs) {
    assert.equal(isRedirectedPath(companiesCityHref(slug)), false, slug);
    assert.equal(isRedirectedPath(savingsCityHref(slug)), false, slug);
  }
});

// 2026-09-23, Decision 14: the high-confidence merge losers only.
const DECISION_14_MERGES: Readonly<Record<string, string>> = {
  '/blog/solar-ppa-vs-lease-california': '/blog/ppa-loan-vs-solar-lease-vs-cash-california',
  '/solar-problems/free-solar-california-is-it-real': '/blog/free-solar-panels-california',
  '/blog/commercial-solar-installation-cost-california': '/commercial-solar/cost-per-watt-california',
};
ROW_DELTAS.push(Object.keys(DECISION_14_MERGES).length);

test('Decision 14: each merge loser 301s straight to a live winner', async () => {
  const { existsSync } = await import('node:fs');
  for (const [loser, winner] of Object.entries(DECISION_14_MERGES)) {
    assert.equal(canonicalRedirectFor(loser), winner, loser);
    assert.equal(canonicalRedirectFor(`${loser}/`), winner, `${loser}/`);
    assert.equal(isRedirectedPath(winner), false, `${winner} must not itself redirect`);
    assert.ok(
      existsSync(new URL(`../app${winner}/page.tsx`, import.meta.url)),
      `${winner} must have a page file`,
    );
  }
  // Nothing may still point at a loser: every rule that led to one now leads
  // to its winner in one hop.
  const losers = new Set(Object.keys(DECISION_14_MERGES));
  assert.deepEqual(destinations.filter((dest) => losers.has(dest)), []);
});

test('Decision 14: the held merges (G05, G08, G10, G11) are not redirected', () => {
  for (const held of [
    '/blog/how-much-does-it-cost-to-lease-solar-panels-california', // G05
    '/commercial-solar/financing-options', // G08
    '/blog/nem-3-california-timeline', // G10
    '/blog/nem-3-california-still-worth-it', // G11
  ]) {
    // GS-MERGES 2026-09-24 applied some held merges (plan 6.3); those are
    // asserted in the GS-MERGES section instead.
    if (GS_MERGES_APPLIED_HELD.has(held)) continue;
    assert.equal(canonicalRedirectFor(held), null, held);
  }
});
/** GS-MERGES 2026-09-24: held Decision 14 merges that plan 6.3 applied. */
const GS_MERGES_APPLIED_HELD = new Set<string>([
  '/blog/nem-3-california-still-worth-it', // G11, into the worth-it winner
  '/commercial-solar/financing-options', // G08
  '/blog/how-much-does-it-cost-to-lease-solar-panels-california', // G05
]);

// 2026-09-23, topical-authority wave (cities agent): new /solar-companies
// pages built as CREATE_DEDICATED for installer-intent clusters. Each city
// already had a /solar-cost page, so it now keeps one page per intent. These
// were never redirect sources, so the table's row count does not change.
const TA_NEW_COMPANIES_SLUGS_WITH_COST_TWIN = new Set(['auburn', 'lincoln', 'san-marcos']);
for (const slug of TA_NEW_COMPANIES_SLUGS_WITH_COST_TWIN) REINSTATED_COMPANIES_SLUGS.add(slug);

test('topical-authority wave: new companies pages with a cost twin render and are not redirected', () => {
  const cost = new Set(getPublishableCityCostSlugs());
  for (const slug of TA_NEW_COMPANIES_SLUGS_WITH_COST_TWIN) {
    assert.ok(COMPANIES_ROUTE_SLUGS.has(slug), `${slug} must be in the /solar-companies/[city] static params`);
    assert.equal(canonicalRedirectFor(`/solar-companies/${slug}`), null, slug);
    assert.ok(cost.has(slug), `${slug} should keep its /solar-cost page`);
  }
});

// 2026-09-23, Tier 2 city-cost wave (citycost agent): new /solar-cost pages
// for cities whose /solar-companies page is live and stays live (Decision 15).
// The cost query for each city was landing on the companies or savings page;
// the city now keeps one page per intent. No row is added to the redirect
// table, so the table's row count does not change.
const T2_COST_PAGES_WITH_LIVE_COMPANIES_TWIN = new Set([
  'san-mateo', 'irvine', 'fremont', 'riverside', 'oakland', 'pleasanton',
  'chico', 'pasadena', 'santa-clarita', 'long-beach', 'santa-ana',
  'sacramento', 'sunnyvale', 'visalia', 'mountain-view', 'huntington-beach',
]);
for (const slug of T2_COST_PAGES_WITH_LIVE_COMPANIES_TWIN) REINSTATED_COMPANIES_SLUGS.add(slug);

test('Tier 2 city-cost wave: each new cost page renders and its companies twin stays live', () => {
  const cost = new Set(getPublishableCityCostSlugs());
  for (const slug of T2_COST_PAGES_WITH_LIVE_COMPANIES_TWIN) {
    assert.ok(cost.has(slug), `${slug} must pass the city-cost-data gate`);
    assert.equal(isRedirectedPath(`/solar-cost/${slug}`), false, `/solar-cost/${slug} must not redirect`);
    assert.ok(COMPANIES_ROUTE_SLUGS.has(slug), `${slug} must be in the /solar-companies/[city] static params`);
    assert.equal(canonicalRedirectFor(`/solar-companies/${slug}`), null, slug);
    assert.equal(companiesCityHref(slug), `/solar-companies/${slug}`);
    assert.equal(hasCompaniesCityPage(slug), true);
  }
});

// 2026-09-23, Tier 2 wave (citycos agent): /solar-companies pages this lane
// created, or moved onto the sourced growth template, for installer-intent
// clusters. Decision 15 keeps each one live. Some have a /solar-cost twin
// today (ontario, corona, chula-vista) and the parallel citycost lane is
// building twins for others, so every one is registered here rather than only
// the ones with a twin on this branch. No redirect rows are added.
const T2_CITYCOS_COMPANIES_SLUGS = new Set([
  'corona', 'orange-county', 'huntington-beach', 'san-mateo-county', 'san-mateo',
  'san-francisco', 'bay-area', 'simi-valley', 'scotts-valley', 'sunnyvale',
  'cupertino', 'santa-clara', 'palo-alto', 'lake-elsinore', 'pasadena',
  'chula-vista', 'san-ramon', 'santa-monica', 'ontario', 'riverside-county',
  'temecula', 'murrieta', 'high-desert', 'kern-county', 'bakersfield', 'stockton',
  'los-angeles', 'san-bernardino', 'irvine', 'anaheim', 'santa-ana', 'santa-cruz',
  'san-jose', 'palm-desert', 'riverside', 'victorville', 'bellflower',
]);
for (const slug of T2_CITYCOS_COMPANIES_SLUGS) REINSTATED_COMPANIES_SLUGS.add(slug);

test('Tier 2 wave (citycos): its companies pages render and are not redirected', () => {
  for (const slug of T2_CITYCOS_COMPANIES_SLUGS) {
    assert.ok(COMPANIES_ROUTE_SLUGS.has(slug), `${slug} must be in the /solar-companies/[city] static params`);
    assert.ok(Object.prototype.hasOwnProperty.call(growthCities, slug), `${slug} must render from growthCities`);
    assert.equal(canonicalRedirectFor(`/solar-companies/${slug}`), null, slug);
    assert.equal(companiesCityHref(slug), `/solar-companies/${slug}`);
    assert.equal(hasCompaniesCityPage(slug), true);
  }
});

// 2026-09-23, Tier 3 wave (citycos agent): Vallejo reinstated. It was the one
// /solar-companies row Decision 15 kept (no_serp). The Tier 3 SERP check
// passes it (assign_t3_citycos.csv rule3_gate_new = pass_serp, a DR 9 result
// on page one for "solar panels vallejo"), so its row is removed and the
// sourced growthCities entry renders. The cost twin keeps the cost intent.
const T3_REINSTATED_COMPANIES_SLUGS = new Set(['vallejo']);
for (const slug of T3_REINSTATED_COMPANIES_SLUGS) REINSTATED_COMPANIES_SLUGS.add(slug);
ROW_DELTAS.push(-T3_REINSTATED_COMPANIES_SLUGS.size);

test('Tier 3 wave: vallejo is reinstated and renders from growthCities', () => {
  const cost = new Set(getPublishableCityCostSlugs());
  for (const slug of T3_REINSTATED_COMPANIES_SLUGS) {
    assert.equal(canonicalRedirectFor(`/solar-companies/${slug}`), null, slug);
    assert.equal(companiesCityHref(slug), `/solar-companies/${slug}`);
    assert.equal(hasCompaniesCityPage(slug), true);
    assert.ok(Object.prototype.hasOwnProperty.call(growthCities, slug), `${slug} must render from growthCities`);
    assert.ok(cost.has(slug), `${slug} should keep its /solar-cost page`);
    assert.equal(isRedirectedPath(`/solar-cost/${slug}`), false);
  }
  // No /solar-companies city page is redirected any more.
  assert.deepEqual(sources.filter((path) => path.startsWith('/solar-companies/')), []);
});

// 2026-09-23, Tier 3 wave (citycos agent): /solar-companies pages this lane
// created, or moved onto the sourced growth template, for installer-intent
// clusters that pass Rule 3. Several have a /solar-cost twin today (tracy,
// napa, yuba-city, hollister, petaluma, vallejo) and the parallel Tier 3
// citycost lane is building twins for others (clovis, elk-grove,
// mission-viejo), so every one is registered here, not only the ones with a
// twin on this branch. No redirect rows are added.
const T3_CITYCOS_COMPANIES_SLUGS = new Set([
  'brentwood', 'antioch', 'novato', 'san-rafael', 'napa', 'fairfield', 'vallejo',
  'tracy', 'davis', 'petaluma', 'elk-grove', 'galt', 'clovis', 'yuba-city', 'merced',
  'hollister', 'la-mesa', 'poway', 'santee', 'fallbrook', 'westminster', 'la-habra',
  'fullerton', 'newport-beach', 'aliso-viejo', 'mission-viejo', 'lake-forest', 'tustin',
  'burbank', 'diamond-bar', 'downey', 'palmdale', 'hesperia', 'moreno-valley', 'wildomar',
  'coachella-valley', 'ventura-county',
]);
for (const slug of T3_CITYCOS_COMPANIES_SLUGS) REINSTATED_COMPANIES_SLUGS.add(slug);

test('Tier 3 wave (citycos): its companies pages render and are not redirected', () => {
  for (const slug of T3_CITYCOS_COMPANIES_SLUGS) {
    assert.ok(COMPANIES_ROUTE_SLUGS.has(slug), `${slug} must be in the /solar-companies/[city] static params`);
    assert.ok(Object.prototype.hasOwnProperty.call(growthCities, slug), `${slug} must render from growthCities`);
    assert.equal(canonicalRedirectFor(`/solar-companies/${slug}`), null, slug);
    assert.equal(companiesCityHref(slug), `/solar-companies/${slug}`);
    assert.equal(hasCompaniesCityPage(slug), true);
  }
});

// 2026-09-23, Tier 3 city-cost wave (citycost agent): new /solar-cost pages
// for cities whose /solar-companies page is live on this branch and stays
// live (Decision 15). The city keeps one page per intent. New cost pages for
// cities with no companies page on this branch are registered in the next
// section. No row is added to the redirect table, so the table's row count
// does not change.
const T3_COST_PAGES_WITH_LIVE_COMPANIES_TWIN = new Set([
  'concord', 'richmond', 'berkeley', 'santa-clara', 'san-clemente',
  'lakewood', 'victorville', 'glendale', 'santa-barbara', 'vacaville',
  'san-ramon', 'redding', 'cupertino',
]);
for (const slug of T3_COST_PAGES_WITH_LIVE_COMPANIES_TWIN) REINSTATED_COMPANIES_SLUGS.add(slug);

test('Tier 3 city-cost wave: each new cost page renders and its companies twin stays live', () => {
  const cost = new Set(getPublishableCityCostSlugs());
  for (const slug of T3_COST_PAGES_WITH_LIVE_COMPANIES_TWIN) {
    assert.ok(cost.has(slug), `${slug} must pass the city-cost-data gate`);
    assert.equal(isRedirectedPath(`/solar-cost/${slug}`), false, `/solar-cost/${slug} must not redirect`);
    assert.ok(COMPANIES_ROUTE_SLUGS.has(slug), `${slug} must be in the /solar-companies/[city] static params`);
    assert.equal(canonicalRedirectFor(`/solar-companies/${slug}`), null, slug);
    assert.equal(companiesCityHref(slug), `/solar-companies/${slug}`);
    assert.equal(hasCompaniesCityPage(slug), true);
  }
});

// 2026-09-24, Tier 3 city-cost wave (citycost agent): new /solar-cost pages
// for cities with no /solar-companies page on this branch. The parallel Tier 3
// citycos lane is building companies pages for some of them (clovis,
// elk-grove, mission-viejo), and any of the others could get one later.
// Each is registered here so that, when a companies twin lands at
// integration, it stays live (Decision 15) instead of tripping the twin
// redirect check below. The full list is in _ta_manifest/t3-citycost.json.
// No row is added to the redirect table.
const T3_COST_PAGES_PENDING_COMPANIES_TWIN = new Set([
  'clovis', 'elk-grove', 'mission-viejo', 'saratoga', 'gilroy', 'redwood-city',
]);
for (const slug of T3_COST_PAGES_PENDING_COMPANIES_TWIN) REINSTATED_COMPANIES_SLUGS.add(slug);

test('Tier 3 city-cost wave: each new cost page without a companies twin renders, and its companies URL is not redirected', () => {
  const cost = new Set(getPublishableCityCostSlugs());
  for (const slug of T3_COST_PAGES_PENDING_COMPANIES_TWIN) {
    assert.ok(cost.has(slug), `${slug} must pass the city-cost-data gate`);
    assert.equal(isRedirectedPath(`/solar-cost/${slug}`), false, `/solar-cost/${slug} must not redirect`);
    assert.equal(canonicalRedirectFor(`/solar-companies/${slug}`), null, slug);
    assert.ok(!T3_COST_PAGES_WITH_LIVE_COMPANIES_TWIN.has(slug), `${slug} is registered twice`);
  }
});

// ---------------------------------------------------------------------------
// GS-MERGES 2026-09-24: plan item 6.3 merges (and 6.2 out-of-market
// comparisons). Each loser 301s in one hop to a live winner that has a page
// file (or a JSON article entry); no rule in either mechanism points at a
// loser; the loser is off the sitemap lists and the hub spokes.
// ---------------------------------------------------------------------------
const GS_MERGES: Readonly<Record<string, string>> = {
  '/blog/solar-tax-credit-2026': '/blog/california-solar-tax-credit-2026',
  '/blog/solar-tax-credit-expired-2026-options': '/blog/california-solar-tax-credit-2026',
  '/blog/are-solar-panels-worth-it-california': '/solar-panels-california',
  '/blog/nem-3-california-still-worth-it': '/solar-panels-california',
  '/blog/is-solar-worth-it-california-2026': '/solar-panels-california',
  '/blog/zero-down-solar-california': '/blog/free-solar-panels-california',
  '/blog/no-upfront-cost-solar-panels': '/blog/free-solar-panels-california',
  '/blog/what-is-nem-true-up': '/solar-problems/true-up-bill-california-explained',
  '/solar-problems/solar-cancellation-california':
    '/blog/can-you-cancel-solar-panel-contract-before-installation-california',
  '/commercial-solar/financing-options': '/blog/commercial-solar-financing-california',
  '/blog/how-much-does-it-cost-to-lease-solar-panels-california':
    '/blog/rent-solar-panels-for-your-home-california',
};
ROW_DELTAS.push(Object.keys(GS_MERGES).length);

async function winnerHasPage(winner: string): Promise<boolean> {
  const { existsSync, readFileSync } = await import('node:fs');
  if (existsSync(new URL(`../app${winner}/page.tsx`, import.meta.url))) return true;
  // JSON articles render through the section's [slug] route.
  const m = /^\/(solar-problems|battery|commercial-solar|solar-installers)\/([^/]+)$/.exec(winner);
  if (!m) return false;
  const file = {
    'solar-problems': 'problems',
    battery: 'battery',
    'commercial-solar': 'commercial',
    'solar-installers': 'installer',
  }[m[1] as 'solar-problems' | 'battery' | 'commercial-solar' | 'solar-installers'];
  const pages = JSON.parse(
    readFileSync(new URL(`../data/article-pages.${file}.json`, import.meta.url), 'utf8'),
  ) as { slug: string }[];
  return pages.some((p) => p.slug === m[2]);
}

test('GS-MERGES: each loser 301s straight to a live winner', async () => {
  for (const [loser, winner] of Object.entries(GS_MERGES)) {
    assert.equal(canonicalRedirectFor(loser), winner, loser);
    assert.equal(canonicalRedirectFor(`${loser}/`), winner, `${loser}/`);
    assert.equal(isRedirectedPath(winner), false, `${winner} must not itself redirect`);
    assert.ok(await winnerHasPage(winner), `${winner} must render`);
  }
  const losers = new Set(Object.keys(GS_MERGES));
  assert.deepEqual(destinations.filter((dest) => losers.has(dest)), []);
  const rules = await nextConfigRedirects();
  for (const r of rules) assert.equal(losers.has(r.destination), false, `${r.source} -> ${r.destination}`);
});

test('GS-MERGES: a JSON-article loser has no entry left to render or list', async () => {
  const { readFileSync } = await import('node:fs');
  for (const loser of Object.keys(GS_MERGES)) {
    const m = /^\/(solar-problems|battery|commercial-solar|solar-installers)\/([^/]+)$/.exec(loser);
    if (!m) continue;
    const file = {
      'solar-problems': 'problems',
      battery: 'battery',
      'commercial-solar': 'commercial',
      'solar-installers': 'installer',
    }[m[1] as 'solar-problems' | 'battery' | 'commercial-solar' | 'solar-installers'];
    const pages = JSON.parse(
      readFileSync(new URL(`../data/article-pages.${file}.json`, import.meta.url), 'utf8'),
    ) as { slug: string }[];
    assert.equal(pages.some((p) => p.slug === m[2]), false, `${loser} still has a JSON entry`);
    const related = readFileSync(new URL('../data/json-article-links.ts', import.meta.url), 'utf8');
    assert.equal(related.includes(`'${loser}'`), false, `json-article-links still names ${loser}`);
  }
});

test('GS-MERGES: losers are off the sitemap lists and the hub spokes', async () => {
  const { readFileSync } = await import('node:fs');
  const read = (rel: string) => readFileSync(new URL(rel, import.meta.url), 'utf8');
  const sitemap = read('../app/sitemap.ts');
  const hubs = read('../data/topic-hubs.ts');
  const blogIndex = read('../app/blog/page.tsx');
  const growth = read('./growth-routes.ts');
  for (const loser of Object.keys(GS_MERGES)) {
    const slug = loser.split('/').pop() as string;
    assert.equal(sitemap.includes(`'${loser}'`), false, `sitemap lists ${loser}`);
    assert.equal(new RegExp(`'${slug}'`).test(sitemap) && loser.startsWith('/blog/'), false, `sitemap blogSlugs lists ${slug}`);
    assert.equal(hubs.includes(`"${loser}"`) || hubs.includes(`'${loser}'`), false, `topic-hubs lists ${loser}`);
    assert.equal(loser.startsWith('/blog/') && blogIndex.includes(`slug: '${slug}'`), false, `blog index lists ${slug}`);
    assert.equal(growth.includes(`'${loser}'`) || growth.includes(`"${loser}"`), false, `growth-routes lists ${loser}`);
  }
});
// END GS-MERGES 2026-09-24 ---------------------------------------------------

// ---------------------------------------------------------------------------
// Cross-cutting checks. These read the registries above.
// ---------------------------------------------------------------------------
test('every /solar-companies city page with a /solar-cost twin redirects there, unless it was reinstated', () => {
  const cost = new Set(getPublishableCityCostSlugs());
  const twins = [...COMPANIES_ROUTE_SLUGS].filter(
    (slug) => cost.has(slug) && !REINSTATED_COMPANIES_SLUGS.has(slug),
  );
  // Until 2026-09-23 at least one twin (Vallejo) still redirected, and this
  // asserted twins.length > 0. The Tier 3 wave reinstated Vallejo, the last
  // /solar-companies row, so the list is now empty by design: every companies
  // page with a cost twin is registered above as live on purpose. The check
  // still bites: a new twin that no section registers lands here and fails.
  assert.ok(REINSTATED_COMPANIES_SLUGS.size > 0, 'the reinstated registry must not be empty');
  for (const slug of twins) {
    assert.equal(
      canonicalRedirectFor(`/solar-companies/${slug}`),
      `/solar-cost/${slug}`,
      `expected /solar-companies/${slug} to redirect to its cost twin`,
    );
  }
});

test('the table holds the expected number of rows', () => {
  // 2026-09-22: 24 /solar-companies rows reversed (72 - 24 = 48). See the
  // dated comment block in canonical-redirects.ts. Later changes register
  // their own row delta in ROW_DELTAS.
  const expected = 48 + ROW_DELTAS.reduce((sum, n) => sum + n, 0);
  assert.equal(sources.length, expected);
});
