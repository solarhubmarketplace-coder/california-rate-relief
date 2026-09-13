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
export const utilityOptions = [
  ['pge', 'PG&E'],
  ['sce', 'SCE'],
  ['sdge', 'SDG&E'],
  ['ladwp', 'LADWP'],
  ['smud', 'SMUD'],
  ['mvu', 'MVU'],
  ['pseg', 'PSE&G'],
  ['jcpl', 'JCP&L'],
  ['ace', 'Atlantic City Electric'],
  ['rockland', 'Rockland Electric'],
  ['bge', 'BGE'],
  ['pepco', 'Pepco'],
  ['delmarva', 'Delmarva Power'],
  ['potomac-edison', 'Potomac Edison'],
  ['dominion', 'Dominion Energy Virginia'],
  ['appalachian-power', 'Appalachian Power'],
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
