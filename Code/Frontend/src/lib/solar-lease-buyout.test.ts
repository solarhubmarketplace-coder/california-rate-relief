import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSolarLeaseBuyout } from './solar-lease-buyout.ts';

test('a zero escalator makes the escalated and flat totals identical', () => {
  const result = calculateSolarLeaseBuyout({
    monthlyPaymentNow: 100,
    annualEscalatorPercent: 0,
    yearsElapsed: 5,
    termYears: 25,
  });
  assert.equal(result.remainingYears, 20);
  assert.equal(result.escalatedRemainingTotal, 24_000);
  assert.equal(result.flatRemainingTotal, 24_000);
  assert.equal(result.escalatorAddsOnTop, 0);
  assert.equal(result.averageAnnualCostOfStaying, 1_200);
  assert.equal(result.finalYearMonthlyPayment, 100);
  assert.equal(result.schedule.length, 20);
  assert.equal(result.schedule[0].contractYear, 6);
  assert.equal(result.schedule[19].contractYear, 25);
});

test('the escalator compounds off the payment entered for the current year', () => {
  const result = calculateSolarLeaseBuyout({
    monthlyPaymentNow: 200,
    annualEscalatorPercent: 10,
    yearsElapsed: 0,
    termYears: 3,
  });
  assert.equal(result.escalatorRate, 0.1);
  assert.equal(result.schedule[0].monthlyPayment, 200);
  assert.ok(Math.abs(result.schedule[1].monthlyPayment - 220) < 1e-9);
  assert.ok(Math.abs(result.schedule[2].monthlyPayment - 242) < 1e-9);
  // 12 * (200 + 220 + 242)
  assert.ok(Math.abs(result.escalatedRemainingTotal - 7_944) < 1e-9);
  assert.equal(result.flatRemainingTotal, 7_200);
  assert.ok(Math.abs(result.escalatorAddsOnTop - 744) < 1e-9);
  assert.ok(Math.abs(result.finalYearMonthlyPayment - 242) < 1e-9);
  assert.ok(
    Math.abs(
      result.schedule[2].cumulativeTotal - result.escalatedRemainingTotal,
    ) < 1e-9,
  );
});

test('a quoted buyout is compared against the entered remaining payments', () => {
  const result = calculateSolarLeaseBuyout({
    monthlyPaymentNow: 100,
    annualEscalatorPercent: 0,
    yearsElapsed: 20,
    termYears: 25,
    quotedBuyout: 4_000,
  });
  assert.equal(result.remainingYears, 5);
  assert.equal(result.escalatedRemainingTotal, 6_000);
  assert.equal(result.quotedBuyout, 4_000);
  assert.equal(result.buyoutVsRemainingPayments, 2_000);
  assert.ok(
    Math.abs((result.buyoutShareOfRemainingPayments ?? 0) - 2 / 3) < 1e-9,
  );
  assert.equal(result.averageAnnualCostOfBuyingOut, 800);
  assert.equal(result.averageAnnualCostOfStaying, 1_200);
});

test('no quoted buyout means no comparison fields at all', () => {
  const result = calculateSolarLeaseBuyout({
    monthlyPaymentNow: 150,
    annualEscalatorPercent: 2,
    yearsElapsed: 1,
    termYears: 20,
  });
  assert.equal(result.quotedBuyout, undefined);
  assert.equal(result.buyoutVsRemainingPayments, undefined);
  assert.equal(result.buyoutShareOfRemainingPayments, undefined);
  assert.equal(result.averageAnnualCostOfBuyingOut, undefined);
});

test('a zero remaining total omits the share rather than dividing by zero', () => {
  const result = calculateSolarLeaseBuyout({
    monthlyPaymentNow: 0,
    annualEscalatorPercent: 3,
    yearsElapsed: 0,
    termYears: 10,
    quotedBuyout: 5_000,
  });
  assert.equal(result.escalatedRemainingTotal, 0);
  assert.equal(result.buyoutShareOfRemainingPayments, undefined);
  assert.equal(result.buyoutVsRemainingPayments, -5_000);
  assert.ok(Number.isFinite(result.averageAnnualCostOfBuyingOut ?? NaN));
});

test('one year left still produces one schedule row', () => {
  const result = calculateSolarLeaseBuyout({
    monthlyPaymentNow: 180,
    annualEscalatorPercent: 3,
    yearsElapsed: 19,
    termYears: 20,
  });
  assert.equal(result.remainingYears, 1);
  assert.equal(result.schedule.length, 1);
  assert.equal(result.schedule[0].monthlyPayment, 180);
  assert.equal(result.escalatedRemainingTotal, 2_160);
  assert.equal(result.escalatorAddsOnTop, 0);
});

test('every output stays finite across the permitted input range', () => {
  const result = calculateSolarLeaseBuyout({
    monthlyPaymentNow: 100_000,
    annualEscalatorPercent: 25,
    yearsElapsed: 0,
    termYears: 50,
    quotedBuyout: 10_000_000,
  });
  for (const [key, value] of Object.entries(result)) {
    if (typeof value === 'number')
      assert.ok(Number.isFinite(value), `${key} is not finite`);
  }
  for (const row of result.schedule) {
    assert.ok(Number.isFinite(row.monthlyPayment));
    assert.ok(Number.isFinite(row.annualTotal));
    assert.ok(Number.isFinite(row.cumulativeTotal));
  }
});

test('invalid and out-of-range inputs throw rather than returning NaN', () => {
  const base = {
    monthlyPaymentNow: 150,
    annualEscalatorPercent: 3,
    yearsElapsed: 5,
    termYears: 25,
  };
  assert.throws(
    () => calculateSolarLeaseBuyout({ ...base, monthlyPaymentNow: NaN }),
    /monthly payment must be a number/,
  );
  assert.throws(
    () => calculateSolarLeaseBuyout({ ...base, monthlyPaymentNow: -1 }),
    /monthly payment must be between/,
  );
  assert.throws(
    () => calculateSolarLeaseBuyout({ ...base, annualEscalatorPercent: 40 }),
    /annual escalator must be between/,
  );
  assert.throws(
    () => calculateSolarLeaseBuyout({ ...base, termYears: 25.5 }),
    /contract term in years must be a whole number/,
  );
  assert.throws(
    () => calculateSolarLeaseBuyout({ ...base, termYears: 0 }),
    /contract term in years must be between/,
  );
  assert.throws(
    () => calculateSolarLeaseBuyout({ ...base, yearsElapsed: 25 }),
    /fewer than the contract term/,
  );
  assert.throws(
    () => calculateSolarLeaseBuyout({ ...base, quotedBuyout: NaN }),
    /quoted buyout figure must be a number/,
  );
});
