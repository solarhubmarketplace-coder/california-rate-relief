import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateBillComparison } from './bill-comparison.ts';

test('normalizes two bills with different billing lengths', () => {
  const result = calculateBillComparison({
    currentBillingDays: 30,
    priorBillingDays: 20,
    currentKwh: 300,
    priorKwh: 200,
    currentElectricCharges: 90,
    priorElectricCharges: 50,
  });
  assert.equal(result.currentKwhPerDay, 10);
  assert.equal(result.priorKwhPerDay, 10);
  assert.equal(result.kwhPerDayDifference, 0);
  assert.equal(result.absoluteKwhPerDayDifference, 0);
  assert.equal(result.currentChargesPerDay, 3);
  assert.equal(result.priorChargesPerDay, 2.5);
  assert.equal(result.absoluteChargesPerDayDifference, 0.5);
  assert.equal(result.kwhPerDayPercentChange, 0);
  assert.equal(result.chargesPerDayPercentChange, 20);
});

test('handles zero kWh and negative net electric charges without a false rate', () => {
  const result = calculateBillComparison({
    currentBillingDays: 31,
    priorBillingDays: 30,
    currentKwh: 0,
    priorKwh: 150,
    currentElectricCharges: -15,
    priorElectricCharges: -60,
  });
  assert.equal(result.currentBlendedChargesPerKwh, null);
  assert.equal(result.priorBlendedChargesPerKwh, -0.4);
  assert.equal(result.kwhPerDayPercentChange, -100);
  assert.equal(result.chargesPerDayPercentChange, null);
});

test('rejects nonfinite, missing-equivalent, or invalid bill values', () => {
  const base = {
    currentBillingDays: 30,
    priorBillingDays: 30,
    currentKwh: 300,
    priorKwh: 300,
    currentElectricCharges: 90,
    priorElectricCharges: 90,
  };
  assert.throws(() =>
    calculateBillComparison({ ...base, currentBillingDays: 0 }),
  );
  assert.throws(() => calculateBillComparison({ ...base, priorKwh: -1 }));
  assert.throws(() =>
    calculateBillComparison({ ...base, currentElectricCharges: Number.NaN }),
  );
  assert.throws(() =>
    calculateBillComparison({ ...base, priorElectricCharges: Number.POSITIVE_INFINITY }),
  );
});
