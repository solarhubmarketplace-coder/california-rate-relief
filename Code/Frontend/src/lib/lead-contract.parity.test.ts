// The residential lead contract exists twice because Railway builds
// Code/Frontend and Code/Backend as separate roots. This test keeps the two
// copies identical: constants, messages, regexes and behaviour on the vectors.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import * as front from './lead-contract.ts';
import { CHANNEL_VECTORS, REFERRER_VECTORS, STREET_VECTORS } from './lead-contract.fixtures.ts';

const back = createRequire(import.meta.url)('../../../Backend/src/lib/lead-contract.js');

test('versions, minimum bill and bands match', () => {
  assert.equal(back.LEAD_CONTRACT_VERSION, front.LEAD_CONTRACT_VERSION);
  assert.equal(back.CONSENT_WORDING_VERSION, front.CONSENT_WORDING_VERSION);
  assert.equal(back.MIN_QUALIFYING_BILL, front.MIN_QUALIFYING_BILL);
  assert.equal(back.UNDER_250_ID, front.UNDER_250_ID);
  assert.deepEqual({ ...back.BILL_BANDS }, Object.fromEntries(front.BILL_BANDS.map((b) => [b.id, b.amount])));
  assert.deepEqual({ ...back.BILL_BAND_LABELS }, Object.fromEntries(front.BILL_BANDS.map((b) => [b.id, b.label])));
});

test('lists and copy match', () => {
  assert.deepEqual([...back.REJECT_WORDS], [...front.REJECT_WORDS]);
  assert.deepEqual([...back.FORM_KINDS], [...front.FORM_KINDS]);
  assert.deepEqual([...back.TRAFFIC_CHANNELS], [...front.TRAFFIC_CHANNELS]);
  assert.deepEqual([...back.AI_HOSTS], [...front.AI_HOSTS]);
  for (const key of ['UNDER_250_MESSAGE', 'RENTER_MESSAGE', 'UNIT_QUESTION', 'UNIT_DECLINED_MESSAGE', 'CONSENT_TEXT'] as const) {
    assert.equal(back[key], front[key], key);
  }
});

test('error codes and messages match (front-only codes excepted)', () => {
  const frontErrors = Object.fromEntries(
    Object.entries(front.ERRORS).filter(([code]) => !front.FRONT_ONLY_ERRORS.includes(code as front.LeadErrorCode)),
  );
  assert.deepEqual({ ...back.ERRORS }, frontErrors);
});

test('regexes are identical', () => {
  for (const key of ['PO_BOX_RE', 'REJECT_WORD_RE', 'UNIT_RE', 'STREET_RE', 'CITY_RE', 'ZIP_RE', 'EMAIL_RE'] as const) {
    assert.equal(back[key].source, front[key].source, `${key}.source`);
    assert.equal(back[key].flags, front[key].flags, `${key}.flags`);
  }
});

test('street, referrer and channel vectors give the same answer front and back', () => {
  for (const [input, expected] of STREET_VECTORS) {
    assert.equal(front.classifyStreet(input), expected, `front ${input}`);
    assert.equal(back.classifyStreet(input), expected, `back ${input}`);
  }
  for (const [input, expected] of REFERRER_VECTORS) {
    assert.equal(back.sanitizeReferrer(input), expected, String(input));
  }
  for (const [name, input, expected] of CHANNEL_VECTORS) {
    assert.equal(back.deriveTrafficChannel(input), expected, `back ${name}`);
    assert.equal(front.deriveTrafficChannel(input), expected, `front ${name}`);
  }
  assert.equal(back.composeAddress(' 12 Main St, ', 'Temecula', '92591'), front.composeAddress(' 12 Main St, ', 'Temecula', '92591'));
});
