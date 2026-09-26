/**
 * A lead is only usable with a street address (Chad, 2026-09-26: a lead
 * arrived with no address). Every lead form calls this before submitting,
 * and the backend applies the same rule in intake.controller.js, so a
 * submission without a street address is refused even if a form is bypassed.
 *
 * Rule: at least 5 characters, containing a house number (a digit) and a
 * street name (a letter). "123 Main St" passes; "Temecula", "92591" and
 * "n/a" do not.
 */
export const STREET_ADDRESS_MESSAGE = 'Enter the street address for the project, for example 123 Main St.';

export function streetAddressError(value: string | null | undefined): string | null {
  const v = (value ?? '').trim();
  if (v.length < 5 || !/\d/.test(v) || !/[a-z]/i.test(v)) return STREET_ADDRESS_MESSAGE;
  return null;
}
