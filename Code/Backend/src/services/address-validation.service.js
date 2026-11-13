// =============================================================================
// Optional server backstop: Google Address Validation (residential lead
// contract, 12 Nov 2026). Ported from unreleased e718601b and cut down to a
// backstop: no signed receipts, no /validate-address route (the browser never
// calls it).
//
// OFF unless GOOGLE_ADDRESS_VALIDATION_API_KEY is set. When on, createIntake
// calls check() for a residential submission that already passed the
// contract, before the RPC:
//   * Google says PO box                          -> 400 po_box
//   * a unit / subpremise without the visitor's
//     detached-single-family answer               -> 400 unit_unconfirmed
//   * not confirmed (incomplete, unconfirmed or
//     suspicious components, coarse match, DPV
//     not Y)                                      -> 400 address_unverified
//   * Google error, timeout, 429 or allowance
//     exhausted                                   -> ACCEPT (never lose a lead
//                                                    to Google downtime), logged
// The result is never written into qualification_data (a retry could get a
// different answer and change the RPC fingerprint -> 409). The request, key,
// raw address and response are never logged.
// =============================================================================

const crypto = require('crypto');

function normalizeAddress(input = {}) {
  return Object.fromEntries(['street', 'city', 'state', 'zip'].map((key) => [key,
    typeof input[key] === 'string' ? input[key].trim().replace(/\s+/g, ' ') : '',
  ]));
}

function enabled() {
  return Boolean(process.env.GOOGLE_ADDRESS_VALIDATION_API_KEY);
}

// Bounded per-process protection for this paid dependency. Also set the Google
// project's daily quota; this in-memory limit is not a distributed spending cap.
const windows = new Map();
let daily = { day: '', count: 0 };
function consumeAllowance(addressKey, now = Date.now()) {
  const day = new Date(now).toISOString().slice(0, 10);
  if (daily.day !== day) daily = { day, count: 0 };
  for (const [key, value] of windows) if (value.until <= now) windows.delete(key);
  const bucket = windows.get(addressKey) || { count: 0, until: now + 10 * 60 * 1000 };
  if (bucket.count >= 10 || daily.count >= 200 || windows.size >= 2000) {
    throw Object.assign(new Error('Address check allowance exhausted'), { statusCode: 429 });
  }
  bucket.count++; daily.count++; windows.set(addressKey, bucket);
}

/**
 * Map a Google validateAddress result to null (accept) or a contract code.
 * unitConfirmed: the visitor answered Yes to the detached-single-family question.
 */
function interpret(result, { unitConfirmed = false } = {}) {
  const a = result?.address;
  const v = result?.verdict;
  if (!a || !v) return 'address_unverified';
  if (result.metadata?.poBox || result.uspsData?.poBoxOnlyPostalCode) return 'po_box';
  const components = Array.isArray(a.addressComponents) ? a.addressComponents : [];
  const subpremise = v.possibleNextAction === 'CONFIRM_ADD_SUBPREMISES'
    || v.validationGranularity === 'SUB_PREMISE'
    || components.some((c) => c?.componentType === 'subpremise');
  if (subpremise && unitConfirmed !== true) return 'unit_unconfirmed';
  const dpv = result.uspsData?.dpvConfirmation;
  // A confirmed detached home may still carry a unit-style designator USPS
  // cannot match (DPV 'S' or 'D'); everything else must be a clean match.
  const dpvOk = dpv === 'Y' || (subpremise && unitConfirmed === true && (dpv === 'S' || dpv === 'D'));
  if (!v.addressComplete
    || !['PREMISE', 'SUB_PREMISE'].includes(v.validationGranularity)
    || (a.missingComponentTypes || []).length
    || (a.unconfirmedComponentTypes || []).length
    || (a.unresolvedTokens || []).length
    || v.hasUnconfirmedComponents
    || v.possibleNextAction === 'FIX'
    || components.some((c) => c?.confirmationLevel === 'UNCONFIRMED_AND_SUSPICIOUS')
    || !dpvOk) {
    return 'address_unverified';
  }
  return null;
}

function logUnavailable(reason) {
  try { console.info(JSON.stringify({ evt: 'crr_address_check_unavailable', reason })); } catch { /* never fail */ }
}

/**
 * { outcome: 'disabled' } without a key (no request); { outcome: 'ok' };
 * { outcome: 'rejected', code }; or { outcome: 'unavailable' } (accept).
 */
async function check(raw, { unitConfirmed = false, fetchImpl = global.fetch } = {}) {
  const key = process.env.GOOGLE_ADDRESS_VALIDATION_API_KEY;
  if (!key) return { outcome: 'disabled' };
  const input = normalizeAddress({ ...raw, state: 'CA' });
  try {
    consumeAllowance(crypto.createHash('sha256').update(JSON.stringify(input).toLowerCase()).digest('hex'));
  } catch {
    logUnavailable('allowance');
    return { outcome: 'unavailable' };
  }
  try {
    const response = await fetchImpl('https://addressvalidation.googleapis.com/v1:validateAddress', {
      method: 'POST', signal: AbortSignal.timeout(6000),
      headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key },
      body: JSON.stringify({
        address: { regionCode: 'US', addressLines: [input.street], locality: input.city, administrativeArea: 'CA', postalCode: input.zip },
        enableUspsCass: true,
      }),
    });
    if (!response.ok) {
      logUnavailable(`http_${response.status}`);
      return { outcome: 'unavailable' };
    }
    const code = interpret((await response.json())?.result, { unitConfirmed });
    return code ? { outcome: 'rejected', code } : { outcome: 'ok' };
  } catch {
    logUnavailable('error');
    return { outcome: 'unavailable' };
  }
}

module.exports = { normalizeAddress, enabled, interpret, check, consumeAllowance };
