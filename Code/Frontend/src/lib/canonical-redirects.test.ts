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

test('every /solar-companies city page with a /solar-cost twin redirects there', () => {
  const companies = new Set([
    ...getAllCitySlugs(),
    ...Object.keys(growthCities),
  ]);
  const cost = new Set(getPublishableCityCostSlugs());
  const twins = [...companies].filter((slug) => cost.has(slug));
  assert.equal(twins.length, 37);
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
  assert.equal(orphans.length, 49);
  for (const slug of orphans) {
    assert.equal(canonicalRedirectFor(`/solar-companies/${slug}`), null);
    assert.equal(companiesCityHref(slug), `/solar-companies/${slug}`);
    assert.equal(hasCompaniesCityPage(slug), true);
  }
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
  assert.equal(sources.length, 65);
});
