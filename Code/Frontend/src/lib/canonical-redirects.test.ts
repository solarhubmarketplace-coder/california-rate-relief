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

test('no destination is itself a redirect source (no chains)', () => {
  const chained = destinations.filter((dest) => isRedirectedPath(dest));
  assert.deepEqual(chained, []);
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

test('every /solar-companies city page with a /solar-cost twin redirects there, unless it is a reinstated growthCities entry', () => {
  const companies = new Set([
    ...getAllCitySlugs(),
    ...Object.keys(growthCities),
  ]);
  const cost = new Set(getPublishableCityCostSlugs());
  const twins = [...companies].filter(
    (slug) => cost.has(slug) && !REINSTATED_GROWTH_CITY_SLUGS.has(slug),
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

test('the 24 evidence-backed growthCities entries are reinstated (not redirected); san-diego stays redirected', () => {
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
  assert.equal(
    canonicalRedirectFor('/solar-companies/san-diego'),
    '/solar-cost/san-diego',
    'san-diego is the one growthCities entry kept redirected (DR 25 SERP floor)',
  );
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

test('the table holds the expected number of rows', () => {
  // 2026-09-22: 24 /solar-companies rows reversed (72 - 24 = 48). See the
  // dated comment block in canonical-redirects.ts.
  assert.equal(sources.length, 48);
});
