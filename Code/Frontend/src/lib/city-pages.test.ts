import test from 'node:test';
import assert from 'node:assert/strict';
import { allLiveCityPages, cityQuickCheckUtility, growthUtilityForForm } from './city-pages.ts';
import { growthCities } from '../data/growth-cities.ts';
import { utilityCodeFor } from './quick-start.ts';

// HeroQuickCheck on a city page pre-selects the city's utility only when the
// page data names one utility for the whole city (2026-09-23).

test('split-utility cities pre-select nothing on any of their pages', () => {
  for (const [type, slug] of [
    ['cost', 'corona'], // City of Corona electric utility or SCE by address
    ['cost', 'modesto'], // MID / TID
    ['companies', 'modesto'],
    ['savings', 'modesto'],
    ['cost', 'rancho-cucamonga'], // SCE / RCMU
    ['companies', 'rancho-cucamonga'],
    ['cost', 'vallejo'], // PG&E / City of Pittsburg
    ['companies', 'merced'], // Merced ID / PG&E ("other" in growth data)
    ['savings', 'riverside'], // RPU / SCE (confirmation required)
    ['companies', 'riverside'],
    ['cost', 'temecula'], // SCE / SDG&E in the southwest corner (added 2026-09-23)
    ['companies', 'temecula'],
  ] as const) {
    assert.equal(cityQuickCheckUtility(type, slug), '', `${type}/${slug}`);
  }
});

test('single-utility cities pre-select that utility', () => {
  assert.equal(utilityCodeFor(cityQuickCheckUtility('cost', 'fresno')), 'pge');
  assert.equal(utilityCodeFor(cityQuickCheckUtility('companies', 'fresno')), 'pge');
  // 2026-09-23: was temecula, which now carries a sourced SCE/SDG&E split on
  // its cost row (CEC territory layer) and so pre-selects nothing.
  assert.equal(utilityCodeFor(cityQuickCheckUtility('savings', 'murrieta')), 'sce');
  assert.equal(utilityCodeFor(cityQuickCheckUtility('companies', 'san-diego')), 'sdge');
});

test('every live city page yields a known utility code or nothing', () => {
  const pages = allLiveCityPages();
  assert.ok(pages.length > 150);
  for (const page of pages) {
    const value = cityQuickCheckUtility(page.type, page.slug);
    // A municipal utility the quick check does not list (Anaheim, Glendale,
    // Pasadena, Lodi, Roseville) maps to '' and is left for the visitor.
    const code = utilityCodeFor(value);
    assert.ok(code === '' || code !== 'other', `${page.path}: ${value}`);
    assert.notEqual(value, 'other', page.path);
  }
});

// The inquiry form shows any utility it does not list as the visitor's own
// "other" answer, so a city-owned utility must reach it as a name, not a
// bare code such as 'pwp' (2026-09-23).
test('growth companies pages hand the inquiry form a listed code or a utility name', () => {
  for (const [slug, city] of Object.entries(growthCities)) {
    const value = growthUtilityForForm(city.utility);
    if (!value || value === 'other') continue;
    const listed = utilityCodeFor(value) !== '';
    assert.ok(listed || /\s/.test(value), `${slug}: form would show the code '${value}'`);
  }
  assert.equal(growthUtilityForForm('pwp'), 'Pasadena Water and Power');
  assert.equal(growthUtilityForForm('pge'), 'pge');
});
