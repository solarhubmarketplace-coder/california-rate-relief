import test from "node:test";
import assert from "node:assert/strict";
import {
  calculateSelectedSolarFinancingComparison,
  calculateSolarFinancingComparison,
  type FinancingOption,
} from "./solar-financing-comparison.ts";

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

test("uses entered terms and isolates payments after the comparison horizon", () => {
  const result = calculateSolarFinancingComparison(base);
  assert.equal(result.cash.knownCostThroughHorizon, 20000);
  assert.equal(result.loan.knownCostThroughHorizon, 5300);
  assert.equal(result.loan.scheduledPaymentsAfterHorizon, 2400);
  assert.equal(result.loan.termEndsBeforeHorizon, false);
});

test("applies annual escalators and prorates partial final contract years", () => {
  const result = calculateSolarFinancingComparison(base);
  assert.deepEqual(result.lease.paymentRowsThroughHorizon, [
    { contractYear: 1, months: 12, monthlyPayment: 100, total: 1200 },
    {
      contractYear: 2,
      months: 6,
      monthlyPayment: 110.00000000000001,
      total: 660.0000000000001,
    },
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

test("rejects invalid or implicit inputs instead of supplying assumptions", () => {
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

test("calculates cash and loan without requiring lease or PPA inputs", () => {
  const result = calculateSelectedSolarFinancingComparison({
    horizonMonths: base.horizonMonths,
    cash: base.cash,
    loan: base.loan,
  });
  assert.deepEqual(result.selectedOptions, ["cash", "loan"]);
  assert.equal(result.cash?.knownCostThroughHorizon, 20000);
  assert.equal(result.loan?.knownCostThroughHorizon, 5300);
  assert.equal(result.lease, undefined);
  assert.equal(result.ppa, undefined);
});

test("rejects an invalid selected proposal and requires at least two", () => {
  assert.throws(
    () =>
      calculateSelectedSolarFinancingComparison({
        horizonMonths: 24,
        cash: base.cash,
        loan: { ...base.loan, termMonths: 0 },
      }),
    /Loan term/,
  );
  assert.throws(
    () =>
      calculateSelectedSolarFinancingComparison({
        horizonMonths: 24,
        cash: base.cash,
      }),
    /at least two actual proposals/,
  );
});

test("every two- and three-option subset matches the original all-four engine", () => {
  const boundaryInput = {
    ...base,
    horizonMonths: 17,
    loan: { ...base.loan, termMonths: 31 },
    lease: { ...base.lease, termMonths: 29 },
    ppa: { ...base.ppa, termMonths: 29 },
  };
  const full = calculateSolarFinancingComparison(boundaryInput);
  const options: FinancingOption[] = ["cash", "loan", "lease", "ppa"];

  for (const mask of Array.from({ length: 16 }, (_, index) => index)) {
    const selected = options.filter((_, index) => mask & (1 << index));
    if (selected.length < 2 || selected.length > 3) continue;
    const subset = calculateSelectedSolarFinancingComparison({
      horizonMonths: boundaryInput.horizonMonths,
      ...(selected.includes("cash") ? { cash: boundaryInput.cash } : {}),
      ...(selected.includes("loan") ? { loan: boundaryInput.loan } : {}),
      ...(selected.includes("lease") ? { lease: boundaryInput.lease } : {}),
      ...(selected.includes("ppa") ? { ppa: boundaryInput.ppa } : {}),
    });

    assert.deepEqual(subset.selectedOptions, selected);
    for (const option of options) {
      assert.deepEqual(
        subset[option],
        selected.includes(option) ? full[option] : undefined,
        `${selected.join("+")} projection differs for ${option}`,
      );
    }
  }
});

test("selected all-four output preserves the original all-four results", () => {
  const selected = calculateSelectedSolarFinancingComparison(base);
  const original = calculateSolarFinancingComparison(base);
  assert.deepEqual(
    {
      horizonMonths: selected.horizonMonths,
      cash: selected.cash,
      loan: selected.loan,
      lease: selected.lease,
      ppa: selected.ppa,
    },
    original,
  );
});
