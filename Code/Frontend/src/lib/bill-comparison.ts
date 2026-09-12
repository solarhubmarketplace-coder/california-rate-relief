export interface BillComparisonInput {
  currentBillingDays: number;
  priorBillingDays: number;
  currentKwh: number;
  priorKwh: number;
  currentElectricCharges: number;
  priorElectricCharges: number;
}

function finite(value: number, label: string) {
  if (!Number.isFinite(value)) throw new Error(`${label} must be a number.`);
}

function positiveDays(value: number, label: string) {
  finite(value, label);
  if (value <= 0) throw new Error(`${label} must be above zero.`);
}

function nonNegative(value: number, label: string) {
  finite(value, label);
  if (value < 0) throw new Error(`${label} cannot be negative.`);
}

function percentChange(current: number, prior: number) {
  return prior > 0 ? ((current - prior) / prior) * 100 : null;
}

/**
 * Compares values printed on two bills. This deliberately does not infer a
 * tariff, rate-plan change, appliance load, or cause of a bill change.
 */
export function calculateBillComparison(input: BillComparisonInput) {
  positiveDays(input.currentBillingDays, 'Current billing days');
  positiveDays(input.priorBillingDays, 'Prior billing days');
  nonNegative(input.currentKwh, 'Current kWh');
  nonNegative(input.priorKwh, 'Prior kWh');
  finite(input.currentElectricCharges, 'Current electric charges');
  finite(input.priorElectricCharges, 'Prior electric charges');

  const currentKwhPerDay = input.currentKwh / input.currentBillingDays;
  const priorKwhPerDay = input.priorKwh / input.priorBillingDays;
  const currentChargesPerDay =
    input.currentElectricCharges / input.currentBillingDays;
  const priorChargesPerDay = input.priorElectricCharges / input.priorBillingDays;
  const kwhPerDayDifference = currentKwhPerDay - priorKwhPerDay;
  const chargesPerDayDifference = currentChargesPerDay - priorChargesPerDay;

  return {
    currentKwhPerDay,
    priorKwhPerDay,
    currentChargesPerDay,
    priorChargesPerDay,
    kwhPerDayDifference,
    chargesPerDayDifference,
    absoluteKwhPerDayDifference: Math.abs(kwhPerDayDifference),
    absoluteChargesPerDayDifference: Math.abs(chargesPerDayDifference),
    currentBlendedChargesPerKwh:
      input.currentKwh > 0
        ? input.currentElectricCharges / input.currentKwh
        : null,
    priorBlendedChargesPerKwh:
      input.priorKwh > 0 ? input.priorElectricCharges / input.priorKwh : null,
    kwhPerDayPercentChange: percentChange(currentKwhPerDay, priorKwhPerDay),
    chargesPerDayPercentChange: percentChange(
      currentChargesPerDay,
      priorChargesPerDay,
    ),
  };
}
