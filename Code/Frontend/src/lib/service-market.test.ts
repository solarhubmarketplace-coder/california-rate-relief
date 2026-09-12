import assert from 'node:assert/strict';
import test from 'node:test';
import { isFiveDigitZip, isServiceMarket, serviceLocationFields, serviceMarkets } from './service-market.ts';

test('six authorized markets and representative ZIPs are accepted without utility guesses', () => {
  const zips: Record<string, string> = { CA: '95814', NJ: '07102', DE: '19801', MD: '20850', VA: '23219', DC: '20001' };
  assert.equal(serviceMarkets.length, 6);
  for (const [market, zip] of Object.entries(zips)) {
    assert.equal(isServiceMarket(market), true); assert.equal(isFiveDigitZip(zip), true);
    const location = serviceLocationFields(market as 'CA' | 'NJ' | 'DE' | 'MD' | 'VA' | 'DC', zip, 'Example City', 'other');
    assert.equal(location.service_market, market); assert.equal(location.territory_resolution, 'visitor_selected_zip_validated');
    if (market !== 'CA') assert.equal(location.derived_utility, null);
  }
});
test('malformed ZIPs and out-of-market codes are rejected', () => {
  assert.equal(isFiveDigitZip('1234'), false); assert.equal(isServiceMarket('TX'), false);
});
