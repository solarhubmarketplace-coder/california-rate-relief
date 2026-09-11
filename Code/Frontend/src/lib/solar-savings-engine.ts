/**
 * Selective reconciliation of _CRR_Calculator (e605685 + preserved changes).
 * Keep one pure engine and ungated output. Replace historical rate/PPA tables,
 * median sunshine and escalating 25-year promises with explicit bill/quote inputs.
 */
export interface SolarInputs {
  monthlyBill: number;
  annualKwh?: number;
  systemKw?: number;
  solarPrice?: number;
  batteryPrice?: number;
  annualBillAfter?: number;
}
export function calculateSolarScenario(input: SolarInputs) {
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined && (!Number.isFinite(value) || value < 0))
      throw new Error(`${key} must be a non-negative number`);
  }
  if (input.monthlyBill <= 0)
    throw new Error('Enter an average monthly electricity bill above zero.');
  if (input.systemKw === 0 || input.annualKwh === 0)
    throw new Error('Usage and system size must be above zero when supplied.');
  const annualBill = input.monthlyBill * 12;
  const annualDifference =
    input.annualBillAfter === undefined
      ? null
      : annualBill - input.annualBillAfter;
  const cashPrice =
    input.solarPrice === undefined
      ? null
      : input.solarPrice + (input.batteryPrice ?? 0);
  return {
    annualBill,
    blendedBillPerKwh: input.annualKwh ? annualBill / input.annualKwh : null,
    solarPricePerWatt:
      input.solarPrice !== undefined && input.systemKw
        ? input.solarPrice / (input.systemKw * 1000)
        : null,
    cashPrice,
    annualDifference,
    simplePayback:
      cashPrice !== null && annualDifference !== null && annualDifference > 0
        ? cashPrice / annualDifference
        : null,
  };
}
