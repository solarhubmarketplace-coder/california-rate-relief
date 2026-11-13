import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lookupCaZipPlace, streetCityZipAddress } from './ca-zip-city.ts';

test('finds the USPS city for California ZIPs, including the 10 Oct 2026 lead', async () => {
  assert.deepEqual(await lookupCaZipPlace('95363'), { city: 'Patterson', state: 'CA' });
  assert.deepEqual(await lookupCaZipPlace(' 92591 '), { city: 'Temecula', state: 'CA' });
  assert.deepEqual(await lookupCaZipPlace('92880'), { city: 'Corona', state: 'CA' });
});

test('returns null for malformed, out-of-state and unknown ZIPs', async () => {
  for (const zip of ['', '9536', '953630', 'abcde', '10001', '90101']) {
    assert.equal(await lookupCaZipPlace(zip), null, zip);
  }
});

test('builds a full mailing address, or street + ZIP when the city is unknown', () => {
  assert.equal(streetCityZipAddress(' 123 Main St ', '95363', { city: 'Patterson', state: 'CA' }), '123 Main St, Patterson, CA 95363');
  assert.equal(streetCityZipAddress('123 Main St', '90101', null), '123 Main St, 90101');
});
