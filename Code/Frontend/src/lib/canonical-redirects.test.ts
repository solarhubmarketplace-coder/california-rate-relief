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
  // Vallejo does not pass Rule 3 (no_serp) and keeps its redirect.
  assert.equal(canonicalRedirectFor('/solar-companies/vallejo'), '/solar-cost/vallejo');
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
    assert.equal(canonicalRedirectFor(held), null, held);
  }
});

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

// ---------------------------------------------------------------------------
// Cross-cutting checks. These read the registries above.
// ---------------------------------------------------------------------------
test('every /solar-companies city page with a /solar-cost twin redirects there, unless it was reinstated', () => {
  const cost = new Set(getPublishableCityCostSlugs());
  const twins = [...COMPANIES_ROUTE_SLUGS].filter(
    (slug) => cost.has(slug) && !REINSTATED_COMPANIES_SLUGS.has(slug),
  );
  assert.ok(twins.length > 0, 'the twin-route check must not be vacuous');
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
