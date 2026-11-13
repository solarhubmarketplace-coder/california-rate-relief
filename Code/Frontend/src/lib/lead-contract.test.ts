import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  BILL_BANDS, BILL_CHOICES, CITY_RE, ERRORS, UNDER_250_ID, billBandAmount, billChoiceForAmount, classifyStreet,
  composeAddress, deriveTrafficChannel, fieldForErrorCode, firstLeadError, needsUnitQuestion, residentialLeadErrors,
  sanitizeReferrer, type ResidentialLeadInput,
} from './lead-contract.ts';
import { CHANNEL_VECTORS, REFERRER_VECTORS, STREET_VECTORS } from './lead-contract.fixtures.ts';

const valid: ResidentialLeadInput = {
  billChoice: '350_499', homeowner: true,
  street: '123 Main St', city: 'Temecula', zip: '92591', state: 'CA', zipKnown: true,
  addressSource: 'manual', placesActive: false, placeSelected: false, placesUnitFlag: false, unitAnswer: '',
  name: 'Test Person', phone: '(951) 555-0187', email: 'test@example.com', consent: true,
};

test('bands, labels and stored amounts', () => {
  assert.deepEqual(BILL_BANDS.map((b) => [b.id, b.label, b.amount]), [
    ['250_349', '$250–$349', 300], ['350_499', '$350–$499', 425], ['500_plus', '$500+', 600],
  ]);
  assert.deepEqual(BILL_CHOICES.map((c) => c.id), ['under_250', '250_349', '350_499', '500_plus']);
  assert.equal(BILL_CHOICES[0].label, 'Under $250');
  assert.equal(billBandAmount('500_plus'), 600);
  assert.equal(billBandAmount('under_250'), null);
  assert.equal(billBandAmount('300'), null);
});

test('billChoiceForAmount edges', () => {
  const cases: [number, string | null][] = [
    [0, null], [-5, null], [Number.NaN, null], [249.99, 'under_250'], [250, '250_349'], [349.99, '250_349'],
    [350, '350_499'], [499.99, '350_499'], [500, '500_plus'], [4000, '500_plus'],
  ];
  for (const [amount, expected] of cases) assert.equal(billChoiceForAmount(amount), expected, String(amount));
});

test('street vectors', () => {
  for (const [input, expected] of STREET_VECTORS) assert.equal(classifyStreet(input), expected, input);
});

test('unit question from the street or a Places subpremise', () => {
  assert.equal(needsUnitQuestion('12 Main St #4', false), true);
  assert.equal(needsUnitQuestion('12 Main St', true), true);
  assert.equal(needsUnitQuestion('12 Main St', false), false);
});

test('CITY_RE', () => {
  for (const city of ['La Cañada Flintridge', 'St. Helena', "Rancho Santa Margarita", 'Temecula']) assert.ok(CITY_RE.test(city), city);
  for (const city of ['92591', '', 'A', '1st City']) assert.ok(!CITY_RE.test(city), city);
});

test('a complete lead has no errors', () => {
  assert.deepEqual(residentialLeadErrors(valid), {});
});

test('gates come first: under-250 and renter both reported, bill first', () => {
  const errors = residentialLeadErrors({ ...valid, billChoice: UNDER_250_ID, homeowner: false });
  assert.equal(errors.bill?.code, 'bill_under_250');
  assert.equal(errors.homeowner?.code, 'renter');
  assert.equal(firstLeadError(errors)?.field, 'bill');
  assert.equal(residentialLeadErrors({ ...valid, billChoice: null }).bill?.code, 'bill_band_required');
  assert.equal(residentialLeadErrors({ ...valid, billChoice: '300' }).bill?.code, 'bill_band_required');
  assert.equal(residentialLeadErrors({ ...valid, homeowner: null }).homeowner?.code, 'homeowner_required');
});

test('Places active but no suggestion picked', () => {
  const errors = residentialLeadErrors({ ...valid, placesActive: true, placeSelected: false });
  assert.equal(errors.street?.code, 'places_not_selected');
  assert.equal(errors.street?.message, ERRORS.places_not_selected);
  assert.deepEqual(residentialLeadErrors({ ...valid, placesActive: true, placeSelected: true, addressSource: 'places' }), {});
  // A hard reject still wins over "pick it from the list".
  assert.equal(residentialLeadErrors({ ...valid, placesActive: true, street: '12 Main St Apt 4' }).street?.code, 'unit_word');
});

test('unit answer: blank, no, yes', () => {
  const unit = { ...valid, street: '12 Main St #4' };
  assert.equal(residentialLeadErrors({ ...unit, unitAnswer: '' }).unit?.code, 'unit_unconfirmed');
  assert.equal(residentialLeadErrors({ ...unit, unitAnswer: 'no' }).unit?.code, 'unit_declined');
  assert.deepEqual(residentialLeadErrors({ ...unit, unitAnswer: 'yes' }), {});
  assert.equal(residentialLeadErrors({ ...valid, placesUnitFlag: true }).unit?.code, 'unit_unconfirmed');
});

test('ZIP: unknown blocks, lookup unavailable does not', () => {
  assert.equal(residentialLeadErrors({ ...valid, zipKnown: false }).zip?.code, 'zip_not_ca');
  assert.equal(residentialLeadErrors({ ...valid, zipKnown: null }).zip, undefined);
  assert.equal(residentialLeadErrors({ ...valid, zip: '9259' }).zip?.code, 'zip_not_ca');
  assert.equal(residentialLeadErrors({ ...valid, state: 'NV' }).zip?.code, 'state_not_ca');
  assert.equal(residentialLeadErrors({ ...valid, city: '' }).city?.code, 'city_invalid');
});

test('name, phone, email and consent are required', () => {
  const errors = residentialLeadErrors({ ...valid, name: ' ', phone: '555', email: '', consent: false });
  assert.equal(errors.name?.code, 'name_required');
  assert.equal(errors.phone?.code, 'phone_invalid');
  assert.match(errors.phone?.message ?? '', /10 digits/);
  assert.equal(errors.email?.code, 'email_required');
  assert.equal(errors.consent?.code, 'consent_required');
  assert.equal(residentialLeadErrors({ ...valid, email: 'a@b' }).email?.code, 'email_invalid');
  assert.equal(residentialLeadErrors({ ...valid, email: 'a@b..com' }).email?.code, 'email_invalid');
});

test('error codes map to fields', () => {
  assert.equal(fieldForErrorCode('zip_not_ca'), 'zip');
  assert.equal(fieldForErrorCode('unit_unconfirmed'), 'unit');
  assert.equal(fieldForErrorCode('form_outdated'), null);
});

test('composeAddress', () => {
  assert.equal(composeAddress(' 123  Main St, ', ' Temecula ', '92591'), '123 Main St, Temecula, CA 92591');
});

test('sanitizeReferrer', () => {
  for (const [input, expected] of REFERRER_VECTORS) assert.equal(sanitizeReferrer(input), expected, String(input));
});

test('traffic channel vectors', () => {
  for (const [name, input, expected] of CHANNEL_VECTORS) assert.equal(deriveTrafficChannel(input), expected, name);
  assert.equal(deriveTrafficChannel(null), 'direct');
});
