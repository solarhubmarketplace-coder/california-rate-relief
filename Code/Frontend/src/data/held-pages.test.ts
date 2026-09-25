// Run: node --experimental-strip-types --test src/data/held-pages.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  HELD_COMPANIES_CITY_SLUGS,
  HELD_COST_CITY_SLUGS,
  HELD_PAGES,
  isHeldPath,
} from './held-pages.ts';
import { getPublishableCityCostSlugs } from './city-cost-data.ts';
import { getAllCitySlugs } from './cities-data.ts';
import { growthCities } from './growth-cities.ts';
import { isRedirectedPath } from '../lib/canonical-redirects.ts';

test('the plan holds 36 cost pages and 15 companies pages, each once', () => {
  assert.equal(new Set(HELD_COST_CITY_SLUGS).size, 36);
  assert.equal(HELD_COST_CITY_SLUGS.length, 36);
  assert.equal(new Set(HELD_COMPANIES_CITY_SLUGS).size, 15);
  assert.equal(HELD_COMPANIES_CITY_SLUGS.length, 15);
  assert.equal(Object.keys(HELD_PAGES).length, 51);
  for (const reason of Object.values(HELD_PAGES)) assert.ok(reason.length > 20, reason);
});

test('isHeldPath matches every held page, with or without a trailing slash', () => {
  for (const slug of HELD_COST_CITY_SLUGS) {
    assert.equal(isHeldPath(`/solar-cost/${slug}`), true, slug);
    assert.equal(isHeldPath(`/solar-cost/${slug}/`), true, `${slug}/`);
  }
  for (const slug of HELD_COMPANIES_CITY_SLUGS) {
    assert.equal(isHeldPath(`/solar-companies/${slug}`), true, slug);
    assert.equal(isHeldPath(`/solar-companies/${slug}/`), true, `${slug}/`);
  }
});

test('isHeldPath does not match hubs, other cities, other intents or near-miss paths', () => {
  for (const path of [
    '/', '/solar-cost', '/solar-cost/', '/solar-companies', '/solar-companies/',
    '/solar-cost/fresno', '/solar-companies/los-angeles', '/solar-companies/oakland',
    '/solar-savings/oakland', '/solar-cost/oakland-hills', '/solar-cost/oak',
    '/SOLAR-COST/OAKLAND', '/blog/solar-cost/oakland', '/solar-cost/oakland/extra',
    'solar-cost/oakland', '',
  ]) {
    assert.equal(isHeldPath(path), false, path);
  }
  // A held cost city does not hold that city's companies page, and vice versa.
  assert.equal(isHeldPath('/solar-companies/berkeley'), false);
  assert.equal(isHeldPath('/solar-cost/monterey'), false);
  // Object prototype keys are not paths.
  assert.equal(isHeldPath('constructor'), false);
  assert.equal(isHeldPath('__proto__'), false);
});

test('every held page still renders: its slug is in the route params', () => {
  const cost = new Set(getPublishableCityCostSlugs());
  for (const slug of HELD_COST_CITY_SLUGS) {
    assert.ok(cost.has(slug), `/solar-cost/${slug} must pass the city-cost-data gate, or holding it means nothing`);
  }
  const companies = new Set([...getAllCitySlugs(), ...Object.keys(growthCities)]);
  for (const slug of HELD_COMPANIES_CITY_SLUGS) {
    assert.ok(companies.has(slug), `/solar-companies/${slug} must be in the route's static params`);
  }
});

test('no held page is a redirect source (held pages answer 200)', () => {
  for (const path of Object.keys(HELD_PAGES)) {
    assert.equal(isRedirectedPath(path), false, path);
  }
});
