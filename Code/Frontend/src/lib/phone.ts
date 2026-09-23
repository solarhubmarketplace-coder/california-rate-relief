// =============================================================================
// US phone helpers shared by the three intake forms.
//
// The backend (Code/Backend/src/controllers/intake.controller.js, normalizePhone)
// already reduces any 10-digit or 1+10-digit input to E.164 (+1XXXXXXXXXX), so
// the forms may submit E.164 without changing what is stored. These helpers only
// decide what the visitor sees while typing and whether the number is complete.
// =============================================================================

/** Ten national digits, with a leading US country code 1 removed. */
export function usPhoneDigits(value: string): string {
  let digits = String(value ?? '').replace(/\D/g, '');
  // A NANP area code never starts with 1, so a leading 1 is the country code.
  if (digits.startsWith('1')) digits = digits.slice(1);
  return digits;
}

/**
 * Format as the visitor types: "916" -> "916", "916555" -> "(916) 555",
 * "9165550123" -> "(916) 555-0123". No trailing separator is ever added, so
 * backspace always removes a digit instead of getting stuck on a bracket.
 * Digits past the tenth are kept (unformatted) so a mistake stays visible.
 */
export function formatUsPhoneInput(value: string): string {
  const digits = usPhoneDigits(value);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  return digits;
}

/** A complete US number: 10 digits, area code and exchange starting 2-9. */
export function isValidUsPhone(value: string): boolean {
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(usPhoneDigits(value));
}

/** +1XXXXXXXXXX for a valid number, otherwise null. */
export function toE164Us(value: string): string | null {
  return isValidUsPhone(value) ? `+1${usPhoneDigits(value)}` : null;
}

/** Inline error text, or '' when the number is complete and plausible. */
export function usPhoneError(value: string): string {
  const digits = usPhoneDigits(value);
  if (!digits) return 'Enter your phone number.';
  if (digits.length < 10)
    return `Enter all 10 digits, area code first. You have ${digits.length}.`;
  if (digits.length > 10)
    return 'Enter a 10-digit US phone number, without an extension.';
  if (/^[01]/.test(digits))
    return 'A US area code starts with a digit from 2 to 9. Check the first digit.';
  if (/^\d{3}[01]/.test(digits))
    return 'The three digits after the area code start with 2 to 9. Check the number.';
  return '';
}
