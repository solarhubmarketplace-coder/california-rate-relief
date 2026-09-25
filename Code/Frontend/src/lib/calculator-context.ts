export interface CalculatorContext {
  utility: string;
  zip: string;
  monthlyBill: string;
  annualKwh?: string;
  systemKw?: string;
  solarPrice?: string;
  batteryPrice?: string;
  annualBillAfter?: string;
}
const KEY = 'crr_calculator_context_v2';
// The utility select on the CRR forms (SolarInquiry, HeroQuickCheck,
// SolarCalculator). California utilities only: the ten New Jersey, Maryland,
// Delaware, DC and Virginia utilities were removed on 2026-09-24 (decision 41,
// plan item 6.1). The codes that remain are unchanged, and the backend's
// normalizeUtility maps each of them as before (it never knew the removed
// codes and stored them as Other). If a page still passes a removed code,
// SolarInquiry shows it as the visitor's "other" text and sends the same
// utility_provider string; HeroQuickCheck leaves its select unset.
export const utilityOptions = [
  ['pge', 'PG&E'],
  ['sce', 'SCE'],
  ['sdge', 'SDG&E'],
  ['ladwp', 'LADWP'],
  ['smud', 'SMUD'],
  ['mvu', 'MVU'],
  ['other', 'Other / not sure'],
] as const;
export function saveCalculatorContext(value: CalculatorContext) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    /* Form still works if storage is blocked. */
  }
  window.dispatchEvent(
    new CustomEvent('crr-calculator-context', { detail: value }),
  );
}
export function readCalculatorContext(): CalculatorContext | null {
  try {
    const value = JSON.parse(sessionStorage.getItem(KEY) || 'null');
    if (!value || !utilityOptions.some(([key]) => key === value.utility))
      return null;
    if (
      typeof value.monthlyBill !== 'string' ||
      !Number.isFinite(Number(value.monthlyBill))
    )
      return null;
    return value;
  } catch {
    return null;
  }
}
