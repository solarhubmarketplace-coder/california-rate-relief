export interface SolarFinancingComparisonInput {
  horizonMonths: number;
  cash: {
    upfrontPrice: number;
  };
  loan: {
    upfrontCost: number;
    monthlyPayment: number;
    termMonths: number;
  };
  lease: {
    upfrontCost: number;
    initialMonthlyPayment: number;
    annualEscalator: number;
    termMonths: number;
  };
  ppa: {
    annualProductionKwh: number;
    initialPricePerKwh: number;
    annualEscalator: number;
    termMonths: number;
  };
}

export type EscalatedPaymentRow = {
  contractYear: number;
  months: number;
  monthlyPayment: number;
  total: number;
};

export type PpaPaymentRow = {
  contractYear: number;
  months: number;
  annualProductionKwh: number;
  productionChargedKwh: number;
  pricePerKwh: number;
  total: number;
};

type ContractSummary = {
  knownCostThroughHorizon: number;
  scheduledPaymentsAfterHorizon: number;
  termMonths: number;
  termEndsBeforeHorizon: boolean;
  missingHorizonMonths: number;
};

function finiteNonNegative(value: number, label: string) {
  if (!Number.isFinite(value) || value < 0)
    throw new Error(`${label} must be a non-negative number.`);
}

function positiveWholeMonths(value: number, label: string) {
  if (!Number.isFinite(value) || !Number.isInteger(value) || value <= 0)
    throw new Error(`${label} must be a whole number of months above zero.`);
}

function positive(value: number, label: string) {
  if (!Number.isFinite(value) || value <= 0)
    throw new Error(`${label} must be a number above zero.`);
}

function sum(rows: { total: number }[]) {
  return rows.reduce((total, row) => total + row.total, 0);
}

function escalatedMonthlyRows(
  initialMonthlyPayment: number,
  annualEscalator: number,
  startMonth: number,
  endMonth: number,
): EscalatedPaymentRow[] {
  const rows: EscalatedPaymentRow[] = [];
  let month = startMonth;
  while (month < endMonth) {
    const contractYear = Math.floor(month / 12) + 1;
    const nextYear = Math.min(endMonth, contractYear * 12);
    const months = nextYear - month;
    const monthlyPayment =
      initialMonthlyPayment * (1 + annualEscalator) ** (contractYear - 1);
    rows.push({
      contractYear,
      months,
      monthlyPayment,
      total: monthlyPayment * months,
    });
    month = nextYear;
  }
  return rows;
}

function ppaRows(
  annualProductionKwh: number,
  initialPricePerKwh: number,
  annualEscalator: number,
  startMonth: number,
  endMonth: number,
): PpaPaymentRow[] {
  const rows: PpaPaymentRow[] = [];
  let month = startMonth;
  while (month < endMonth) {
    const contractYear = Math.floor(month / 12) + 1;
    const nextYear = Math.min(endMonth, contractYear * 12);
    const months = nextYear - month;
    const pricePerKwh =
      initialPricePerKwh * (1 + annualEscalator) ** (contractYear - 1);
    const productionChargedKwh = annualProductionKwh * (months / 12);
    rows.push({
      contractYear,
      months,
      annualProductionKwh,
      productionChargedKwh,
      pricePerKwh,
      total: productionChargedKwh * pricePerKwh,
    });
    month = nextYear;
  }
  return rows;
}

function contractSummary(
  horizonMonths: number,
  termMonths: number,
  knownRecurringCost: number,
  afterHorizonRecurringCost: number,
  upfrontCost = 0,
): ContractSummary {
  return {
    knownCostThroughHorizon: upfrontCost + knownRecurringCost,
    scheduledPaymentsAfterHorizon: afterHorizonRecurringCost,
    termMonths,
    termEndsBeforeHorizon: termMonths < horizonMonths,
    missingHorizonMonths: Math.max(horizonMonths - termMonths, 0),
  };
}

/**
 * Totals only entered contract terms. It intentionally does not add assumed
 * utility bills, maintenance, resale value, tax treatment, or a recommendation.
 */
export function calculateSolarFinancingComparison(
  input: SolarFinancingComparisonInput,
) {
  positiveWholeMonths(input.horizonMonths, 'Comparison horizon');
  finiteNonNegative(input.cash.upfrontPrice, 'Cash upfront price');
  finiteNonNegative(input.loan.upfrontCost, 'Loan upfront cost');
  finiteNonNegative(input.loan.monthlyPayment, 'Loan monthly payment');
  positiveWholeMonths(input.loan.termMonths, 'Loan term');
  finiteNonNegative(input.lease.upfrontCost, 'Lease upfront cost');
  finiteNonNegative(input.lease.initialMonthlyPayment, 'Lease monthly payment');
  finiteNonNegative(input.lease.annualEscalator, 'Lease annual escalator');
  positiveWholeMonths(input.lease.termMonths, 'Lease term');
  positive(input.ppa.annualProductionKwh, 'PPA annual production');
  finiteNonNegative(input.ppa.initialPricePerKwh, 'PPA initial price per kWh');
  finiteNonNegative(input.ppa.annualEscalator, 'PPA annual escalator');
  positiveWholeMonths(input.ppa.termMonths, 'PPA term');

  const loanKnownMonths = Math.min(input.horizonMonths, input.loan.termMonths);
  const loanKnownRecurringCost = input.loan.monthlyPayment * loanKnownMonths;
  const loanAfterHorizonRecurringCost =
    input.loan.monthlyPayment *
    Math.max(input.loan.termMonths - input.horizonMonths, 0);

  const leaseKnownMonths = Math.min(input.horizonMonths, input.lease.termMonths);
  const leaseRowsThroughHorizon = escalatedMonthlyRows(
    input.lease.initialMonthlyPayment,
    input.lease.annualEscalator,
    0,
    leaseKnownMonths,
  );
  const leaseRowsAfterHorizon = escalatedMonthlyRows(
    input.lease.initialMonthlyPayment,
    input.lease.annualEscalator,
    input.horizonMonths,
    Math.max(input.horizonMonths, input.lease.termMonths),
  );

  const ppaKnownMonths = Math.min(input.horizonMonths, input.ppa.termMonths);
  const ppaRowsThroughHorizon = ppaRows(
    input.ppa.annualProductionKwh,
    input.ppa.initialPricePerKwh,
    input.ppa.annualEscalator,
    0,
    ppaKnownMonths,
  );
  const ppaRowsAfterHorizon = ppaRows(
    input.ppa.annualProductionKwh,
    input.ppa.initialPricePerKwh,
    input.ppa.annualEscalator,
    input.horizonMonths,
    Math.max(input.horizonMonths, input.ppa.termMonths),
  );

  return {
    horizonMonths: input.horizonMonths,
    cash: {
      upfrontPrice: input.cash.upfrontPrice,
      knownCostThroughHorizon: input.cash.upfrontPrice,
    },
    loan: contractSummary(
      input.horizonMonths,
      input.loan.termMonths,
      loanKnownRecurringCost,
      loanAfterHorizonRecurringCost,
      input.loan.upfrontCost,
    ),
    lease: {
      ...contractSummary(
        input.horizonMonths,
        input.lease.termMonths,
        sum(leaseRowsThroughHorizon),
        sum(leaseRowsAfterHorizon),
        input.lease.upfrontCost,
      ),
      paymentRowsThroughHorizon: leaseRowsThroughHorizon,
      paymentRowsAfterHorizon: leaseRowsAfterHorizon,
    },
    ppa: {
      ...contractSummary(
        input.horizonMonths,
        input.ppa.termMonths,
        sum(ppaRowsThroughHorizon),
        sum(ppaRowsAfterHorizon),
      ),
      annualProductionKwh: input.ppa.annualProductionKwh,
      paymentRowsThroughHorizon: ppaRowsThroughHorizon,
      paymentRowsAfterHorizon: ppaRowsAfterHorizon,
    },
  };
}
