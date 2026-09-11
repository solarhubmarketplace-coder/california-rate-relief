import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSolarScenario } from './solar-savings-engine.ts';
import { acquisition, type FirstTouch } from './attribution.ts';
test('uses quote inputs; separates solar watts from battery cost and leaves unknowns unknown', () => {
  const value = calculateSolarScenario({
    monthlyBill: 250,
    annualKwh: 10000,
    systemKw: 6,
    solarPrice: 18000,
    batteryPrice: 10000,
    annualBillAfter: 1000,
  });
  assert.equal(value.annualBill, 3000);
  assert.equal(value.solarPricePerWatt, 3);
  assert.equal(value.cashPrice, 28000);
  assert.equal(value.annualDifference, 2000);
  assert.equal(value.simplePayback, 14);
  assert.equal(
    calculateSolarScenario({ monthlyBill: 100 }).simplePayback,
    null,
  );
  assert.equal(
    calculateSolarScenario({
      monthlyBill: 100,
      solarPrice: 10000,
      annualBillAfter: 1500,
    }).simplePayback,
    null,
  );
  assert.throws(() => calculateSolarScenario({ monthlyBill: NaN }));
  assert.throws(() =>
    calculateSolarScenario({ monthlyBill: 100, systemKw: 0 }),
  );
});
test('paid and unknown traffic cannot silently become organic', () => {
  const base = { referrer: 'www.google.com' } as FirstTouch;
  assert.deepEqual(acquisition(base), { source: 'google', medium: 'organic' });
  assert.equal(acquisition({ ...base, gclid: 'paid' }).medium, 'cpc');
  for (const key of ['gbraid', 'wbraid', 'msclkid'])
    assert.equal(acquisition({ ...base, [key]: 'paid' }).medium, 'cpc');
  assert.equal(
    acquisition({ ...base, utm_source: 'facebook', utm_medium: 'organic' })
      .medium,
    'organic_other',
  );
  assert.equal(
    acquisition({ ...base, utm_medium: 'organic' }).medium,
    'unknown',
  );
  assert.equal(
    acquisition({ ...base, utm_source: 'Google', utm_medium: 'organic' })
      .medium,
    'organic',
  );
  assert.equal(
    acquisition({ ...base, utm_source: 'google' }).medium,
    'unknown',
  );
  assert.equal(
    acquisition({ ...base, utm_source: 'google', utm_medium: 'cpc' }).medium,
    'cpc',
  );
  assert.equal(
    acquisition({ ...base, referrer: 'www.google.com.evil.test' }).medium,
    'referral',
  );
  assert.equal(acquisition(null).medium, 'unknown');
});
