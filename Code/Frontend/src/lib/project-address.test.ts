import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  EMPTY_PROJECT_ADDRESS, addressLeadInput, caZipStatus, cityFromComponents, placeToAddress, placesSelectionRequired,
  type AddressComponent,
} from './project-address.ts';
import { classifyStreet, residentialLeadErrors } from './lead-contract.ts';

function components(over: Record<string, [string, string?] | null> = {}): AddressComponent[] {
  const base: Record<string, [string, string?] | null> = {
    street_number: ['123'],
    route: ['Main Street', 'Main St'],
    locality: ['Temecula'],
    administrative_area_level_2: ['Riverside County'],
    administrative_area_level_1: ['California', 'CA'],
    country: ['United States', 'US'],
    postal_code: ['92591'],
    ...over,
  };
  return Object.entries(base)
    .filter(([, value]) => value)
    .map(([type, value]) => ({ types: [type], long_name: value![0], short_name: value![1] ?? value![0] }));
}

test('a plain house', () => {
  assert.deepEqual(placeToAddress('123 Main St, Temecula, CA, USA', components()), {
    street: '123 Main St', city: 'Temecula', zip: '92591', state: 'CA', unitFlag: false,
  });
});

test('a description with "Apt 4" keeps it, so the reject check refuses it', () => {
  const result = placeToAddress('123 Main St Apt 4, Temecula, CA, USA', components({ subpremise: ['4'] }));
  assert.ok(!('error' in result));
  assert.equal(result.street, '123 Main St Apt 4');
  assert.equal(classifyStreet(result.street), 'unit_word');
});

test('a subpremise sets the unit flag', () => {
  const result = placeToAddress('123 Main St #4, Temecula, CA, USA', components({ subpremise: ['4'] }));
  assert.ok(!('error' in result));
  assert.equal(result.unitFlag, true);
  assert.equal(classifyStreet(result.street), 'unit_question');
});

test('a non-California place is refused', () => {
  assert.deepEqual(
    placeToAddress('123 Main St, Reno, NV, USA', components({ administrative_area_level_1: ['Nevada', 'NV'], postal_code: ['89501'], locality: ['Reno'] })),
    { error: 'state_not_ca' },
  );
});

test('a place without a house number is refused', () => {
  assert.deepEqual(placeToAddress('Main St, Temecula, CA, USA', components({ street_number: null })), { error: 'street_format' });
});

test('a place without a 5-digit ZIP is refused', () => {
  assert.deepEqual(placeToAddress('123 Main St, Temecula, CA, USA', components({ postal_code: null })), { error: 'zip_not_ca' });
});

test('a description not starting with the number falls back to the components', () => {
  const result = placeToAddress('Old Town Plaza, Temecula, CA, USA', components({ subpremise: ['B'] }));
  assert.ok(!('error' in result));
  assert.equal(result.street, '123 Main St #B');
  assert.equal(result.unitFlag, true);
});

// Review F3: text before the house number is checked, not thrown away.
test('a "Suite 200, 123 Main St" pick is refused as a unit word, not turned into "#200"', () => {
  assert.deepEqual(
    placeToAddress('Suite 200, 123 Main St, Temecula, CA, USA', components({ subpremise: ['200'] })),
    { error: 'unit_word' },
  );
});

test('an apartment-complex premise is refused', () => {
  assert.deepEqual(
    placeToAddress('Oakwood Apartments, 123 Main St, Temecula, CA, USA', components({ premise: ['Oakwood Apartments'] })),
    { error: 'unit_word' },
  );
});

test('a mobile-home-park premise asks the detached-home question', () => {
  const result = placeToAddress('Sunrise Mobile Home Park, 123 Main St, Temecula, CA, USA', components({ premise: ['Sunrise Mobile Home Park'] }));
  assert.ok(!('error' in result));
  assert.equal(result.street, '123 Main St');
  assert.equal(result.unitFlag, true);
});

test('a PO box before the house number is refused', () => {
  assert.deepEqual(placeToAddress('PMB 12, 123 Main St, Temecula, CA, USA', components()), { error: 'po_box' });
});

test('city falls back from locality to postal town and sublocality', () => {
  assert.equal(cityFromComponents([{ types: ['sublocality_level_1'], long_name: 'Van Nuys' }]), 'Van Nuys');
  assert.equal(cityFromComponents(undefined), '');
});

test('California ZIP status from the shared table', async () => {
  assert.deepEqual(await caZipStatus('92591'), { known: true, city: 'Temecula' });
  assert.deepEqual(await caZipStatus('89501'), { known: false, city: null });
  assert.deepEqual(await caZipStatus('9259'), { known: false, city: null });
});

test('Places selection is required only while a key exists and Places has not fallen back', () => {
  for (const status of ['idle', 'loading', 'active']) assert.equal(placesSelectionRequired(status, true), true, status);
  for (const status of ['no_key', 'load_failed', 'auth_failed', 'timeout', 'manual_override']) {
    assert.equal(placesSelectionRequired(status, true), false, status);
  }
  assert.equal(placesSelectionRequired('active', false), false);
});

test('addressLeadInput feeds residentialLeadErrors', () => {
  const state = { ...EMPTY_PROJECT_ADDRESS, street: '12 Main St #4', city: 'Temecula', zip: '92591', zipKnown: true, placesStatus: 'auth_failed' };
  const base = { billChoice: '250_349', homeowner: true, name: 'A', phone: '9515550187', email: 'a@b.co', consent: true };
  assert.deepEqual(Object.keys(residentialLeadErrors({ ...base, ...addressLeadInput(state, true) })), ['unit']);
  assert.deepEqual(residentialLeadErrors({ ...base, ...addressLeadInput({ ...state, unitAnswer: 'yes' }, true) }), {});
  assert.equal(residentialLeadErrors({ ...base, ...addressLeadInput({ ...state, placesStatus: 'active' }, true) }).street?.code, 'places_not_selected');
});
