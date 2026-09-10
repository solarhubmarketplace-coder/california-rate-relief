/**
 * Email address validation and provider-error classification.
 *
 * WHY THIS EXISTS
 * ---------------
 * On 2026-08-23 a lead reached the wizard with a malformed email address. The
 * address was accepted, written to `leads`, and then handed to Resend four
 * separate times. Resend rejected all four with:
 *
 *   "Invalid `to` field. The email address needs to follow the
 *    `email@example.com` or `Name <email@example.com>` format."
 *
 * Nothing classified that as permanent, so the queue kept re-queuing it, and
 * the lead's `email_status` was left reading `failed` with no distinction
 * between "the provider refused this address forever" and "the network
 * blipped, try again". That homeowner never received anything.
 *
 * Two fixes live here:
 *   1. Reject a malformed address BEFORE it costs a provider call.
 *   2. Classify a provider error as PERMANENT or TRANSIENT so the queue knows
 *      whether retrying could ever succeed.
 *
 * Deliberately NOT a full RFC 5322 implementation. RFC 5322 permits addresses
 * no mail system in practice accepts, and a stricter-than-RFC check that
 * matches what Resend and the major mailbox providers actually accept is the
 * more useful thing to have here.
 */

/** Permanent = retrying can never succeed. The address or the request is wrong. */
const PERMANENT = 'permanent';
/** Transient = the request was fine; something upstream failed. Retry is sane. */
const TRANSIENT = 'transient';

/**
 * Substrings that identify a permanent Resend rejection. Matched
 * case-insensitively against the provider's message.
 *
 * Keep this list narrow. A string that appears in both permanent and transient
 * failures would silently strand retryable mail, which is worse than an extra
 * retry.
 */
const PERMANENT_MESSAGE_MARKERS = [
    'invalid `to` field',
    'invalid `from` field',
    'invalid `cc` field',
    'invalid `bcc` field',
    'invalid `reply_to` field',
    'the email address needs to follow',
    'domain is not verified',
    'not a valid email address',
    'invalid email address',
    'missing `to` field',
    'missing `from` field',
    'you can only send testing emails to your own email address',
];

/** Resend error `name` values that are permanent by definition. */
const PERMANENT_ERROR_NAMES = [
    'validation_error',
    'invalid_parameter',
    'invalid_from_address',
    'invalid_to_address',
    'missing_required_field',
    'not_found',
    'restricted_api_key',
    'invalid_api_key',
];

const MAX_LOCAL_PART = 64;
const MAX_TOTAL = 254;

/**
 * A deliberately conservative single-address pattern:
 *   - one @, non-empty local part and domain
 *   - no whitespace, no comma, no semicolon, no angle brackets
 *   - domain has at least one dot and a 2+ character alphabetic TLD
 *   - no leading, trailing or doubled dot in either part
 */
const ADDRESS_RE = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;

/**
 * Validate a single recipient address.
 *
 * @param {unknown} value
 * @returns {{ valid: boolean, normalized: string|null, reason: string|null }}
 *   `normalized` is trimmed and lower-cased on the domain only — the local part
 *   is left as given, because local parts are technically case-sensitive and
 *   lower-casing one can, on a small number of systems, change the mailbox.
 */
function validateEmailAddress(value) {
    if (typeof value !== 'string') {
        return { valid: false, normalized: null, reason: 'not a string' };
    }

    const trimmed = value.trim();

    if (trimmed.length === 0) {
        return { valid: false, normalized: null, reason: 'empty' };
    }
    if (trimmed.length > MAX_TOTAL) {
        return { valid: false, normalized: null, reason: `longer than ${MAX_TOTAL} characters` };
    }
    // A display-name form ("Name <a@b.com>") is valid to Resend but we never
    // build one, so its presence here means the field was mis-populated.
    if (trimmed.includes('<') || trimmed.includes('>')) {
        return { valid: false, normalized: null, reason: 'contains angle brackets' };
    }
    if (/[\s,;]/.test(trimmed)) {
        return { valid: false, normalized: null, reason: 'contains whitespace or a separator' };
    }

    const at = trimmed.lastIndexOf('@');
    if (at <= 0 || at === trimmed.length - 1) {
        return { valid: false, normalized: null, reason: 'not in name@domain form' };
    }

    const local = trimmed.slice(0, at);
    const domain = trimmed.slice(at + 1);

    if (local.length > MAX_LOCAL_PART) {
        return { valid: false, normalized: null, reason: `local part longer than ${MAX_LOCAL_PART} characters` };
    }
    if (local.startsWith('.') || local.endsWith('.') || local.includes('..')) {
        return { valid: false, normalized: null, reason: 'malformed local part' };
    }
    if (domain.startsWith('-') || domain.endsWith('-') || domain.includes('..') || !domain.includes('.')) {
        return { valid: false, normalized: null, reason: 'malformed domain' };
    }

    const normalized = `${local}@${domain.toLowerCase()}`;
    if (!ADDRESS_RE.test(normalized)) {
        return { valid: false, normalized: null, reason: 'does not match an accepted address shape' };
    }

    return { valid: true, normalized, reason: null };
}

/**
 * Classify a thrown provider error.
 *
 * Reads the fields email.service.js preserves off a Resend error
 * (`name`, `statusCode`, `status`, `code`) plus the message text.
 *
 * @param {unknown} error
 * @returns {{ kind: 'permanent'|'transient', reason: string }}
 */
function classifyEmailError(error) {
    if (!error) return { kind: TRANSIENT, reason: 'no error object' };

    if (error.permanent === true) {
        return { kind: PERMANENT, reason: error.permanentReason || 'flagged permanent by caller' };
    }

    const name = String(error.name || '').toLowerCase();
    if (PERMANENT_ERROR_NAMES.includes(name)) {
        return { kind: PERMANENT, reason: `provider error name: ${name}` };
    }

    const message = String(error.message || '').toLowerCase();
    const marker = PERMANENT_MESSAGE_MARKERS.find((m) => message.includes(m));
    if (marker) {
        return { kind: PERMANENT, reason: `provider message matched: ${marker}` };
    }

    // 422 is Resend's validation status. 401/403 mean the key is wrong, which
    // no amount of retrying fixes. 404 means the resource does not exist.
    const status = Number(error.statusCode || error.status || 0);
    if ([400, 401, 403, 404, 422].includes(status)) {
        return { kind: PERMANENT, reason: `provider HTTP ${status}` };
    }

    // 429 and 5xx are the retryable cases, and so is anything unrecognised —
    // defaulting to transient risks a wasted retry, defaulting to permanent
    // risks silently dropping a real lead's email. Prefer the wasted retry.
    return { kind: TRANSIENT, reason: status ? `provider HTTP ${status}` : 'unclassified' };
}

/**
 * Build an Error already marked permanent, so callers upstream do not have to
 * re-derive that from the message.
 */
function permanentEmailError(message, reason) {
    const err = new Error(message);
    err.permanent = true;
    err.permanentReason = reason || message;
    err.name = 'validation_error';
    return err;
}

module.exports = {
    PERMANENT,
    TRANSIENT,
    validateEmailAddress,
    classifyEmailError,
    permanentEmailError,
};
