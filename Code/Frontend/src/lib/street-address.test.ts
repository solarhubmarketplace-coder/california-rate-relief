import assert from 'node:assert/strict';
import { test } from 'node:test';
import { streetAddressError, STREET_ADDRESS_MESSAGE } from './street-address.ts';

test('street address: accepts a house number and street', () => {
  for (const ok of ['123 Main St', '4521 Via Montana, Temecula', '1 Elm Ave']) {
    assert.equal(streetAddressError(ok), null, ok);
  }
});

test('street address: refuses empty, city-only, ZIP-only and placeholders', () => {
  for (const bad of ['', '   ', undefined, null, 'Temecula', '92591', 'n/a', 'Main', '12 a'.slice(0, 3)]) {
    assert.equal(streetAddressError(bad as string), STREET_ADDRESS_MESSAGE, String(bad));
  }
});
