import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSolarFinancingComparison } from './solar-financing-comparison.ts';

const base = {
  horizonMonths: 24,
  cash: { upfrontPrice: 20000 },
  loan: { upfrontCost: 500, monthlyPayment: 200, termMonths: 36 },
  lease: {
    upfrontCost: 100,
    initialMonthlyPayment: 100,
    annualEscalator: 0.1,
    termMonths: 18,
  },
  ppa: {
    annualProductionKwh: 12000,
    initialPricePerKwh: 0.2,
    annualEscalator: 0.1,
    termMonths: 18,
  },
};

test('uses entered terms and isolates payments after the comparison horizon', () => {
  const result = calculateSolarFinancingComparison(base);
  assert.equal(result.cash.knownCostThroughHorizon, 20000);
  assert.equal(result.loan.knownCostThroughHorizon, 5300);
  assert.equal(result.loan.scheduledPaymentsAfterHorizon, 2400);
  assert.equal(result.loan.termEndsBeforeHorizon, false);
});

test('applies annual escalators and prorates partial final contract years', () => {
  const result = calculateSolarFinancingComparison(base);
  assert.deepEqual(result.lease.paymentRowsThroughHorizon, [
    { contractYear: 1, months: 12, monthlyPayment: 100, total: 1200 },
    { contractYear: 2, months: 6, monthlyPayment: 110.00000000000001, total: 660.0000000000001 },
  ]);
  assert.equal(result.lease.knownCostThroughHorizon, 1960);
  assert.equal(result.lease.termEndsBeforeHorizon, true);
  assert.equal(result.lease.missingHorizonMonths, 6);
  assert.deepEqual(result.ppa.paymentRowsThroughHorizon, [
    {
      contractYear: 1,
      months: 12,
      annualProductionKwh: 12000,
      productionChargedKwh: 12000,
      pricePerKwh: 0.2,
      total: 2400,
    },
    {
      contractYear: 2,
      months: 6,
      annualProductionKwh: 12000,
      productionChargedKwh: 6000,
      pricePerKwh: 0.22000000000000003,
      total: 1320.0000000000002,
    },
  ]);
  assert.equal(result.ppa.knownCostThroughHorizon, 3720);
});

test('rejects invalid or implicit inputs instead of supplying assumptions', () => {
  assert.throws(() =>
    calculateSolarFinancingComparison({ ...base, horizonMonths: 0 }),
  );
  assert.throws(() =>
    calculateSolarFinancingComparison({
      ...base,
      loan: { ...base.loan, termMonths: 12.5 },
    }),
  );
  assert.throws(() =>
    calculateSolarFinancingComparison({
      ...base,
      ppa: { ...base.ppa, annualProductionKwh: 0 },
    }),
  );
  assert.throws(() =>
    calculateSolarFinancingComparison({
      ...base,
      lease: { ...base.lease, annualEscalator: Number.NaN },
    }),
  );
});
