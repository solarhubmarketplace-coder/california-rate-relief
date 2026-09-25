// Run: node --experimental-strip-types --test src/data/held-pages.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  FIRST_HELD_COMPANIES_CITY_SLUGS,
  FIRST_HELD_COST_CITY_SLUGS,
  HELD_COMPANIES_CITY_SLUGS,
  HELD_PAGES,
  isHeldPath,
} from './held-pages.ts';
import { COST_CITY_GATE, CITY_GATE_FAILING_PATHS } from './city-gate-results.ts';
import { getPublishableCityCostSlugs } from './city-cost-data.ts';
import { getAllCitySlugs } from './cities-data.ts';
import { growthCities } from './growth-cities.ts';
import { isRedirectedPath } from '../lib/canonical-redirects.ts';

test('the record of first holds is intact: 36 cost pages and 15 companies pages, each once', () => {
  assert.equal(new Set(FIRST_HELD_COST_CITY_SLUGS).size, 36);
  assert.equal(FIRST_HELD_COST_CITY_SLUGS.length, 36);
  assert.equal(new Set(FIRST_HELD_COMPANIES_CITY_SLUGS).size, 15);
  assert.equal(FIRST_HELD_COMPANIES_CITY_SLUGS.length, 15);
  for (const slug of HELD_COMPANIES_CITY_SLUGS) assert.ok(FIRST_HELD_COMPANIES_CITY_SLUGS.includes(slug), slug);
  for (const reason of Object.values(HELD_PAGES)) assert.ok(reason.length > 20, reason);
});

test('a cost page is held exactly when it fails the city gate', () => {
  const cost = getPublishableCityCostSlugs();
  assert.ok(cost.length > 80);
  for (const slug of cost) {
    const row = COST_CITY_GATE[slug];
    assert.ok(row, `${slug} has no city-gate result: run node scripts/city-gate.mjs --write`);
    assert.equal(isHeldPath(`/solar-cost/${slug}`), !row.pass, slug);
    assert.equal(isHeldPath(`/solar-cost/${slug}/`), !row.pass, `${slug}/`);
  }
  // First-held cost pages that pass are released.
  const released = FIRST_HELD_COST_CITY_SLUGS.filter((slug) => COST_CITY_GATE[slug]?.pass);
  assert.ok(released.length >= 30, `only ${released.length} of 36 first-held cost pages pass`);
  for (const slug of released) assert.equal(isHeldPath(`/solar-cost/${slug}`), false, slug);
});

test('companies holds: the remaining entries are held, the released ones are not', () => {
  for (const slug of HELD_COMPANIES_CITY_SLUGS) {
    assert.equal(isHeldPath(`/solar-companies/${slug}`), true, slug);
    assert.equal(isHeldPath(`/solar-companies/${slug}/`), true, `${slug}/`);
  }
  for (const slug of FIRST_HELD_COMPANIES_CITY_SLUGS.filter((s) => !HELD_COMPANIES_CITY_SLUGS.includes(s))) {
    assert.equal(isHeldPath(`/solar-companies/${slug}`), false, slug);
  }
});

test('isHeldPath does not match hubs, other intents or near-miss paths', () => {
  for (const path of [
    '/', '/solar-cost', '/solar-cost/', '/solar-companies', '/solar-companies/',
    '/solar-cost/fresno', '/solar-companies/los-angeles', '/solar-companies/oakland',
    '/solar-savings/oakland', '/solar-cost/oakland-hills', '/solar-cost/oak',
    '/SOLAR-COST/SACRAMENTO', '/blog/solar-cost/sacramento', '/solar-cost/sacramento/extra',
    'solar-cost/sacramento', '', '/solar-cost/california-tax-and-permit-rules',
  ]) {
    assert.equal(isHeldPath(path), false, path);
  }
  // A held cost city does not hold that city's companies page, and vice versa.
  assert.equal(isHeldPath('/solar-companies/sacramento'), false);
  assert.equal(isHeldPath('/solar-cost/rancho-cordova'), COST_CITY_GATE['rancho-cordova']?.pass === false);
  // Object prototype keys are not paths.
  assert.equal(isHeldPath('constructor'), false);
  assert.equal(isHeldPath('__proto__'), false);
});

test('every held page still renders: its slug is in the route params', () => {
  const cost = new Set(getPublishableCityCostSlugs());
  for (const path of CITY_GATE_FAILING_PATHS) {
    assert.ok(cost.has(path.replace('/solar-cost/', '')), `${path} must be a published cost page, or holding it means nothing`);
  }
  const companies = new Set([...getAllCitySlugs(), ...Object.keys(growthCities)]);
  for (const slug of HELD_COMPANIES_CITY_SLUGS) {
    assert.ok(companies.has(slug), `/solar-companies/${slug} must be in the route's static params`);
  }
});

test('no held page is a redirect source (held pages answer 200)', () => {
  for (const path of [...Object.keys(HELD_PAGES), ...CITY_GATE_FAILING_PATHS]) {
    assert.equal(isRedirectedPath(path), false, path);
  }
});
