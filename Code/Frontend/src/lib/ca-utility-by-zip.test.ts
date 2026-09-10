import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CA_ZIP_MAX,
  CA_ZIP_MIN,
  derivedLocationFields,
  isCaliforniaZip,
  lookupUtilityByZip,
  seededZipCount,
  utilitySelectionMatchesDerived,
} from './ca-utility-by-zip.ts';

test('resolves an investor-owned territory with and without a seeded CCA', () => {
  assert.deepEqual(lookupUtilityByZip('94110'), { utility: 'PG&E', cca: 'CleanPowerSF', county: 'San Francisco' });
  assert.deepEqual(lookupUtilityByZip('93301'), { utility: 'PG&E', cca: null, county: 'Kern' });
  assert.deepEqual(lookupUtilityByZip('90501'), { utility: 'SCE', cca: null, county: 'Los Angeles' });
});

test('San Diego County resolves to SDG&E by exact entry and by range', () => {
  assert.deepEqual(lookupUtilityByZip('92101'), { utility: 'SDG&E', cca: 'San Diego Community Power', county: 'San Diego' });
  // 92065 (Ramona) is not seeded exactly; the county range answers it.
  assert.deepEqual(lookupUtilityByZip('92065'), { utility: 'SDG&E', cca: null, county: 'San Diego' });
  // Southern Orange County sits in SDG&E territory despite the 926xx prefix.
  assert.deepEqual(lookupUtilityByZip('92672'), { utility: 'SDG&E', cca: null, county: 'Orange' });
});

test('municipal and district utilities beat the surrounding territory', () => {
  assert.deepEqual(lookupUtilityByZip('90012'), { utility: 'LADWP', cca: null, county: 'Los Angeles' });
  assert.deepEqual(lookupUtilityByZip('95814'), { utility: 'SMUD', cca: null, county: 'Sacramento' });
  assert.deepEqual(lookupUtilityByZip('92801'), { utility: 'Anaheim Public Utilities', cca: null, county: 'Orange' });
  assert.deepEqual(lookupUtilityByZip('92506'), { utility: 'Riverside Public Utilities', cca: null, county: 'Riverside' });
  assert.deepEqual(lookupUtilityByZip('95050'), { utility: 'Silicon Valley Power', cca: null, county: 'Santa Clara' });
});

test('an unseeded California ZIP returns null instead of a guess', () => {
  for (const zip of ['95321', '96118', '93544', '95389']) {
    assert.equal(isCaliforniaZip(zip), true, `${zip} should be a California ZIP`);
    assert.equal(lookupUtilityByZip(zip), null, `${zip} must not be guessed`);
  }
});

test('split and unmapped territories return null even inside a covered region', () => {
  // Moreno Valley Utility serves part of the city, SCE the rest.
  assert.equal(lookupUtilityByZip('92553'), null);
  // Bear Valley Electric Service, not SCE.
  assert.equal(lookupUtilityByZip('92315'), null);
  // 94303 covers both Palo Alto (municipal) and East Palo Alto (PG&E).
  assert.equal(lookupUtilityByZip('94303'), null);
});

test('malformed input returns null and never throws', () => {
  for (const value of ['', '   ', '9321', '932011', 'abcde', '9330a', '93 301', '-9330']) {
    assert.equal(lookupUtilityByZip(value), null, `${JSON.stringify(value)} must not resolve`);
  }
  assert.equal(lookupUtilityByZip(null as unknown as string), null);
  assert.equal(lookupUtilityByZip(undefined as unknown as string), null);
  assert.equal(lookupUtilityByZip(93301 as unknown as string), null);
  // A padded but otherwise valid ZIP still resolves.
  assert.deepEqual(lookupUtilityByZip(' 93301 '), { utility: 'PG&E', cca: null, county: 'Kern' });
});

test('out-of-state ZIPs are rejected by the California range', () => {
  for (const zip of ['10001', '89101', '97201', '85001', '99501', '00501']) {
    assert.equal(isCaliforniaZip(zip), false, `${zip} is not a California ZIP`);
    assert.equal(lookupUtilityByZip(zip), null);
  }
  assert.equal(isCaliforniaZip(String(CA_ZIP_MIN)), true);
  assert.equal(isCaliforniaZip(String(CA_ZIP_MAX)), true);
  assert.equal(isCaliforniaZip(String(CA_ZIP_MIN - 1)), false);
  assert.equal(isCaliforniaZip(String(CA_ZIP_MAX + 1)), false);
});

test('the seed table is a real table and callers cannot mutate it', () => {
  assert.ok(seededZipCount() > 500, 'seed set collapsed');
  const first = lookupUtilityByZip('90012');
  first!.utility = 'tampered';
  assert.equal(lookupUtilityByZip('90012')?.utility, 'LADWP');
});

test('derived fields keep the typed ZIP and never claim a utility they cannot resolve', () => {
  const resolved = derivedLocationFields('93301', ' Bakersfield ', 'pge');
  assert.deepEqual(resolved, {
    service_zip: '93301',
    city: 'Bakersfield',
    derived_utility: 'PG&E',
    derived_cca: null,
    derived_county: 'Kern',
    derived_from: 'zip-seed-table',
    derived_utility_matches_selection: true,
  });

  // Out of state: the raw answer survives, every derivation is null.
  const outOfState = derivedLocationFields('10001', 'New York', 'pge');
  assert.equal(outOfState.service_zip, '10001');
  assert.equal(outOfState.city, 'New York');
  assert.equal(outOfState.derived_utility, null);
  assert.equal(outOfState.derived_county, null);
  assert.equal(outOfState.derived_from, 'zip-seed-table');
  assert.equal(outOfState.derived_utility_matches_selection, null);

  // Malformed ZIP and blank city: still recorded, still no derivation.
  const malformed = derivedLocationFields('9330', '  ');
  assert.equal(malformed.service_zip, '9330');
  assert.equal(malformed.city, null);
  assert.equal(malformed.derived_utility, null);
});

test('a utility mismatch is reported rather than corrected', () => {
  // Visitor says SCE, ZIP says LADWP: flagged false, and no utility is returned
  // from here, so the caller's own utility_provider stays untouched.
  const mismatch = derivedLocationFields('90012', 'Los Angeles', 'sce');
  assert.equal(mismatch.derived_utility, 'LADWP');
  assert.equal(mismatch.derived_utility_matches_selection, false);
  assert.equal('utility_provider' in mismatch, false);

  // Unknown on either side is null, not false.
  assert.equal(utilitySelectionMatchesDerived('other', 'PG&E'), null);
  assert.equal(utilitySelectionMatchesDerived('', 'PG&E'), null);
  assert.equal(utilitySelectionMatchesDerived(null, 'PG&E'), null);
  assert.equal(utilitySelectionMatchesDerived('pge', null), null);
  assert.equal(utilitySelectionMatchesDerived('PGE', 'PG&E'), true);
  assert.equal(utilitySelectionMatchesDerived('sdge', 'SDG&E'), true);
  assert.equal(utilitySelectionMatchesDerived('ladwp', 'SCE'), false);
});
