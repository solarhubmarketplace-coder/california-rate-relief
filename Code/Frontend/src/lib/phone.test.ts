import assert from 'node:assert/strict';
import test from 'node:test';
import {
  formatUsPhoneInput,
  isValidUsPhone,
  toE164Us,
  usPhoneDigits,
  usPhoneError,
} from './phone.ts';

test('formats progressively without trailing separators', () => {
  assert.equal(formatUsPhoneInput(''), '');
  assert.equal(formatUsPhoneInput('9'), '9');
  assert.equal(formatUsPhoneInput('916'), '916');
  assert.equal(formatUsPhoneInput('9165'), '(916) 5');
  assert.equal(formatUsPhoneInput('916555'), '(916) 555');
  assert.equal(formatUsPhoneInput('9165550'), '(916) 555-0');
  assert.equal(formatUsPhoneInput('9165550123'), '(916) 555-0123');
});

test('backspacing over a separator removes a digit, never traps the cursor', () => {
  // "(916) 555-0" minus its last char -> "(916) 555-" -> reformat
  assert.equal(formatUsPhoneInput('(916) 555-'), '(916) 555');
  assert.equal(formatUsPhoneInput('(916) '), '916');
  assert.equal(formatUsPhoneInput('('), '');
});

test('accepts pasted E.164, a leading 1 and punctuation', () => {
  assert.equal(formatUsPhoneInput('+1 916 555 0123'), '(916) 555-0123');
  assert.equal(formatUsPhoneInput('1-916-555-0123'), '(916) 555-0123');
  assert.equal(formatUsPhoneInput('916.555.0123'), '(916) 555-0123');
  assert.equal(usPhoneDigits('+19165550123'), '9165550123');
  // Restoring a frozen attempt shows the stored E.164 value formatted.
  assert.equal(formatUsPhoneInput('+19165550123'), '(916) 555-0123');
});

test('validates a complete 10-digit US number', () => {
  assert.ok(isValidUsPhone('(916) 555-0123'));
  assert.ok(isValidUsPhone('+1 (916) 555-0123'));
  assert.equal(isValidUsPhone('(916) 555-012'), false);
  assert.equal(isValidUsPhone('0165550123'), false);
  assert.equal(isValidUsPhone('9160550123'), false);
  assert.equal(isValidUsPhone('91655501234'), false);
});

test('E.164 output matches what the backend normalizes to', () => {
  assert.equal(toE164Us('(916) 555-0123'), '+19165550123');
  assert.equal(toE164Us('1 916 555 0123'), '+19165550123');
  assert.equal(toE164Us('555-0123'), null);
});

test('errors say what to fix', () => {
  assert.equal(usPhoneError('(916) 555-0123'), '');
  assert.match(usPhoneError(''), /Enter your phone number/);
  assert.match(usPhoneError('916555'), /all 10 digits.*You have 6/);
  assert.match(usPhoneError('91655501234'), /without an extension/);
  assert.match(usPhoneError('0165550123'), /area code/);
  assert.match(usPhoneError('9160550123'), /after the area code/);
});
