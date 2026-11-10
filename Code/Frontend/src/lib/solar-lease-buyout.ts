/**
 * Solar lease / PPA buyout arithmetic, from the homeowner's own contract terms.
 *
 * SOURCING NOTE, on the record. This module contains no market data and no
 * assumption of any kind. There is no "typical" escalator, no "typical" buyout
 * percentage and no industry average anywhere in it, because there is no such
 * figure in src/data/facts.ts to read one from and an invented one would be
 * worse than none. Every number this returns is arithmetic on a number the
 * reader typed off their own contract. If a sourced escalator or buyout
 * benchmark ever lands in facts.ts, it can be shown beside these outputs as a
 * comparison — it must never become a default input.
 *
 * It also deliberately does NOT discount future payments to a present value,
 * does not add or subtract a utility bill, does not value the equipment, and
 * does not pick a winner. Those all need an assumption, and an assumption is
 * the thing this file refuses to make.
 */

/** Input ranges. Outside these, the arithmetic stops being informative and
 *  starts being a way to render Infinity on a page. */
export const BUYOUT_LIMITS = {
  maxMonthlyPayment: 100_000,
  maxEscalatorPercent: 25,
  maxTermYears: 50,
  maxQuotedBuyout: 10_000_000,
} as const;

export interface SolarLeaseBuyoutInput {
  /** The monthly payment being made right now, in dollars. */
  monthlyPaymentNow: number;
  /** The annual escalator printed in the contract, as a percent (3 means 3%). */
  annualEscalatorPercent: number;
  /** Whole contract years already elapsed. 0 means the first year. */
  yearsElapsed: number;
  /** The full contract term in whole years. */
  termYears: number;
  /** A buyout figure the lease company has quoted, if there is one. */
  quotedBuyout?: number;
}

export type BuyoutYearRow = {
  /** 1-based year of the whole contract. */
  contractYear: number;
  /** 0 is the contract year currently running. */
  yearsFromNow: number;
  monthlyPayment: number;
  annualTotal: number;
  cumulativeTotal: number;
};

export interface SolarLeaseBuyoutResult {
  /** Contract years left to run, including the one currently running. */
  remainingYears: number;
  /** The escalator as a decimal, e.g. 0.029 for 2.9%. */
  escalatorRate: number;
  schedule: BuyoutYearRow[];
  /** Remaining payments with the entered escalator applied each year. */
  escalatedRemainingTotal: number;
  /** Remaining payments if today's payment never rose. Undiscounted. */
  flatRemainingTotal: number;
  /** What the escalator alone adds over the rest of the term. */
  escalatorAddsOnTop: number;
  /** Escalated remaining total spread evenly over the remaining years. */
  averageAnnualCostOfStaying: number;
  /** The monthly payment in the final contract year, at the entered escalator. */
  finalYearMonthlyPayment: number;
  quotedBuyout?: number;
  /** Escalated remaining payments minus the quoted buyout. Positive means the
   *  quoted figure is below the payments entered for the rest of the term. */
  buyoutVsRemainingPayments?: number;
  /** Quoted buyout as a share of the escalated remaining total, 0-1. Omitted
   *  when the remaining total is zero, because the ratio has no value then. */
  buyoutShareOfRemainingPayments?: number;
  /** Quoted buyout spread over the remaining years it buys out of. */
  averageAnnualCostOfBuyingOut?: number;
}

function wholeNumberInRange(
  value: number,
  label: string,
  minimum: number,
  maximum: number,
) {
  if (!Number.isFinite(value) || !Number.isInteger(value))
    throw new Error(`${label} must be a whole number.`);
  if (value < minimum || value > maximum)
    throw new Error(`${label} must be between ${minimum} and ${maximum}.`);
}

function amountInRange(
  value: number,
  label: string,
  minimum: number,
  maximum: number,
) {
  if (!Number.isFinite(value))
    throw new Error(`${label} must be a number.`);
  if (value < minimum || value > maximum)
    throw new Error(`${label} must be between ${minimum} and ${maximum}.`);
}

/** Every returned figure is arithmetic on an entered figure. Nothing is assumed. */
export function calculateSolarLeaseBuyout(
  input: SolarLeaseBuyoutInput,
): SolarLeaseBuyoutResult {
  amountInRange(
    input.monthlyPaymentNow,
    'The monthly payment',
    0,
    BUYOUT_LIMITS.maxMonthlyPayment,
  );
  amountInRange(
    input.annualEscalatorPercent,
    'The annual escalator',
    0,
    BUYOUT_LIMITS.maxEscalatorPercent,
  );
  wholeNumberInRange(
    input.termYears,
    'The contract term in years',
    1,
    BUYOUT_LIMITS.maxTermYears,
  );
  wholeNumberInRange(
    input.yearsElapsed,
    'The years already elapsed',
    0,
    BUYOUT_LIMITS.maxTermYears - 1,
  );
  if (input.yearsElapsed >= input.termYears)
    throw new Error(
      'The years already elapsed must be fewer than the contract term. If the term has run out there is nothing left to buy out.',
    );

  const remainingYears = input.termYears - input.yearsElapsed;
  const escalatorRate = input.annualEscalatorPercent / 100;

  const schedule: BuyoutYearRow[] = [];
  let cumulativeTotal = 0;
  for (let yearsFromNow = 0; yearsFromNow < remainingYears; yearsFromNow += 1) {
    const monthlyPayment =
      input.monthlyPaymentNow * (1 + escalatorRate) ** yearsFromNow;
    const annualTotal = monthlyPayment * 12;
    cumulativeTotal += annualTotal;
    schedule.push({
      contractYear: input.yearsElapsed + yearsFromNow + 1,
      yearsFromNow,
      monthlyPayment,
      annualTotal,
      cumulativeTotal,
    });
  }

  const escalatedRemainingTotal = cumulativeTotal;
  const flatRemainingTotal = input.monthlyPaymentNow * 12 * remainingYears;

  const result: SolarLeaseBuyoutResult = {
    remainingYears,
    escalatorRate,
    schedule,
    escalatedRemainingTotal,
    flatRemainingTotal,
    escalatorAddsOnTop: escalatedRemainingTotal - flatRemainingTotal,
    averageAnnualCostOfStaying: escalatedRemainingTotal / remainingYears,
    finalYearMonthlyPayment:
      schedule[schedule.length - 1]?.monthlyPayment ?? input.monthlyPaymentNow,
  };

  if (input.quotedBuyout !== undefined) {
    amountInRange(
      input.quotedBuyout,
      'The quoted buyout figure',
      0,
      BUYOUT_LIMITS.maxQuotedBuyout,
    );
    result.quotedBuyout = input.quotedBuyout;
    result.buyoutVsRemainingPayments =
      escalatedRemainingTotal - input.quotedBuyout;
    result.averageAnnualCostOfBuyingOut = input.quotedBuyout / remainingYears;
    // A share of zero has no meaning, and dividing by it renders Infinity.
    if (escalatedRemainingTotal > 0)
      result.buyoutShareOfRemainingPayments =
        input.quotedBuyout / escalatedRemainingTotal;
  }

  return result;
}
