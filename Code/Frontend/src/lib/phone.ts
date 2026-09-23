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

/** Shown under a phone field until there is an error to show instead. */
export const US_PHONE_HINT = '10-digit US number, area code first.';

/**
 * Inline error text, or '' when the number is complete and plausible. Every
 * message fits on one short line, so swapping the hint for an error never
 * moves the fields below it (a blur-time shift makes the next tap miss).
 */
export function usPhoneError(value: string): string {
  const digits = usPhoneDigits(value);
  if (!digits) return 'Enter your phone number.';
  if (digits.length < 10) return `Enter all 10 digits. You have ${digits.length}.`;
  if (digits.length > 10) return 'Too many digits. Use a 10-digit number.';
  if (/^[01]/.test(digits)) return "An area code can't start with 0 or 1.";
  if (/^\d{3}[01]/.test(digits)) return 'Check the 3 digits after the area code.';
  return '';
}
