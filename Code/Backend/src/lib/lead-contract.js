'use strict';
// =============================================================================
// Residential lead contract (Chad, 12 Nov 2026), API copy.
//
// Mirror of Code/Frontend/src/lib/lead-contract.ts. Change both together: the
// front-end parity test (lead-contract.parity.test.ts) loads this file and
// fails when a constant, message or regex drifts. Migration 014 holds the same
// rules (POSIX regexes) in the ingest RPC.
// =============================================================================

const CA_ZIPS = require('../data/ca-zip-places');

const LEAD_CONTRACT_VERSION = 'crr-lead-2026-11-12';
const CONSENT_WORDING_VERSION = 'crr-consent-2026-11-12';
const MIN_QUALIFYING_BILL = 250;

/** Band id -> dollars stored in leads.bill_amount (midpoint; $500+ kept at 600). */
const BILL_BANDS = Object.freeze({ '250_349': 300, '350_499': 425, '500_plus': 600 });
const BILL_BAND_LABELS = Object.freeze({ '250_349': '$250–$349', '350_499': '$350–$499', '500_plus': '$500+' });
const UNDER_250_ID = 'under_250';

const REJECT_WORDS = Object.freeze(['apt', 'apartment', 'bldg', 'rm', 'floor', 'suite', 'ste', 'lot', 'space', 'trailer']);
const FORM_KINDS = Object.freeze(['solar_inquiry', 'qualification_wizard', 'offer_request']);
const TRAFFIC_CHANNELS = Object.freeze(['organic_google', 'organic_bing_yahoo_ddg', 'ai_referral', 'paid', 'email', 'direct', 'referral']);
const AI_HOSTS = Object.freeze(['chatgpt.com', 'chat.openai.com', 'perplexity.ai', 'gemini.google.com', 'copilot.microsoft.com', 'claude.ai']);

const UNDER_250_MESSAGE =
  "Thanks for checking. California Rate Relief sends requests to solar providers only for homes with an average electric bill of $250 a month or more, so we can't send this one. Our guides explain how California electric rates and bills work.";
const RENTER_MESSAGE =
  "Solar referrals here are for homeowners. If you don't own the home, we can't send this request to a provider.";
const UNIT_QUESTION = 'Is this a detached single-family property where you own sole rights to the roof?';
const UNIT_DECLINED_MESSAGE =
  "We can only send requests for detached single-family homes where you own the roof, so we can't send this one.";
const CONSENT_TEXT =
  'I agree that California Rate Relief may contact me about this inquiry and share my project details with a solar provider for follow-up.';

const ERRORS = Object.freeze({
  form_outdated: 'This form has been updated. Reload the page and send your details again.',
  homeowner_required: 'Answer whether you own this home.',
  renter: RENTER_MESSAGE,
  bill_under_250: 'The minimum average monthly bill for a referral is $250.',
  bill_band_required: 'Choose your average monthly electric bill from the buttons.',
  name_required: 'Enter your name.',
  phone_invalid: 'Enter a 10-digit US phone number.',
  email_required: 'Enter your email address.',
  email_invalid: 'Enter a valid email address.',
  street_required: 'Enter the street address of the home.',
  po_box: "A PO box can't be used. Enter the street address of the home.",
  unit_word:
    "We can only send requests for detached single-family homes. Addresses with an apartment, suite, building, room, floor, lot, space or trailer number can't be used.",
  street_format: 'Enter the house number and street name, for example 123 Main St.',
  unit_unconfirmed: `Please answer the question about the property: ${UNIT_QUESTION}`,
  unit_declined: UNIT_DECLINED_MESSAGE,
  city_invalid: 'Enter the city of the home.',
  state_not_ca: 'This form is for homes in California.',
  zip_not_ca: 'Enter the 5-digit California ZIP code of the home.',
  utility_invalid: 'qualification_data.utility_provider is invalid',
  consent_required: 'Check the box to agree to be contacted about your request.',
  address_unverified: "We couldn't confirm that street address. Check the house number, street, city and ZIP.",
  legacy_route_retired: 'This endpoint has been retired. Submit leads to /api/intake.',
});

const PO_BOX_RE = /(?:^|[^a-z])(?:p\s*\.?\s*o\s*\.?\s*box|post\s+office\s+box)(?![a-z])/i;
const REJECT_WORD_RE = /(?:^|[^a-z])(?:apt|apartment|bldg|rm|floor|suite|ste|lot|space|trailer)(?![a-z])/i;
const UNIT_RE = /(?:^|[^a-z])unit(?![a-z])|#/i;
const STREET_RE = /^\d{1,6}(?:[a-z]|-[a-z0-9]{1,6})?\s+(?=.*\p{L}{2})[\p{L}\p{M}0-9 .'’#&\/-]{2,114}$/iu;
const CITY_RE = /^\p{L}[\p{L} .'’-]{1,79}$/u;
const ZIP_RE = /^\d{5}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;

function normalizeStreet(raw) {
  return String(raw ?? '').replace(/,/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120);
}

/** 'ok' | 'unit_question' | 'street_required' | 'po_box' | 'unit_word' | 'street_format'. */
function classifyStreet(raw) {
  const v = normalizeStreet(raw);
  if (!v) return 'street_required';
  if (PO_BOX_RE.test(v)) return 'po_box';
  if (REJECT_WORD_RE.test(v)) return 'unit_word';
  if (!STREET_RE.test(v)) return 'street_format';
  if (UNIT_RE.test(v)) return 'unit_question';
  return 'ok';
}

function isCaZip(zip) {
  return ZIP_RE.test(zip || '') && CA_ZIPS.has(zip);
}

function composeAddress(street, city, zip) {
  return `${normalizeStreet(street)}, ${String(city ?? '').trim()}, CA ${String(zip ?? '').trim()}`;
}

const OWN_HOST_RE = /(^|\.)ratereliefca\.com$/i;
const BLOCKED_SCHEMES = new Set(['javascript:', 'data:', 'file:', 'blob:', 'about:']);

function sanitizeReferrer(raw) {
  const s = typeof raw === 'string' ? raw.trim() : '';
  if (!s) return null;
  let url;
  try {
    url = new URL(s);
  } catch {
    return null;
  }
  const protocol = url.protocol.toLowerCase();
  if (protocol === 'http:' || protocol === 'https:') {
    const hostname = url.hostname.toLowerCase();
    if (!hostname || OWN_HOST_RE.test(hostname)) return null;
    return `${protocol}//${url.host.toLowerCase()}${url.pathname}`.slice(0, 300);
  }
  if (BLOCKED_SCHEMES.has(protocol) || !/^[a-z][a-z0-9+.-]*:$/.test(protocol) || !url.host) return null;
  return `${protocol}//${url.host.toLowerCase()}`.slice(0, 300);
}

function present(value) {
  return typeof value === 'string' && value.trim() !== '';
}

function lower(value) {
  return typeof value === 'string' ? value.trim().toLowerCase() : '';
}

function hostIsOrUnder(host, domain) {
  return host === domain || host.endsWith(`.${domain}`);
}

function parseReferrer(t) {
  for (const candidate of [t.initial_referrer, t.referrer]) {
    const raw = typeof candidate === 'string' ? candidate.trim() : '';
    if (!raw) continue;
    try {
      const url = new URL(/^[a-z][a-z0-9+.-]*:/i.test(raw) ? raw : `https://${raw}`);
      const host = (url.protocol === 'http:' || url.protocol === 'https:' ? url.hostname : url.host).toLowerCase();
      if (host) return { scheme: url.protocol.toLowerCase(), host };
    } catch {
      // try the next candidate
    }
  }
  return null;
}

const GOOGLE_SEARCH_HOST_RE = /^(www\.)?google\.[a-z]{2,3}(\.[a-z]{2})?$/;

/** First match wins (DESIGN section 4.3). Same function as the front end. */
function deriveTrafficChannel(t) {
  const input = t || {};
  if (['gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid'].some((key) => present(input[key]))) return 'paid';
  const medium = lower(input.utm_medium);
  const source = lower(input.utm_source);
  if (/^(cpc|ppc|paid([_-]?[a-z]+)?)$/.test(medium)) return 'paid';
  if (medium === 'email') return 'email';
  const ref = parseReferrer(input);
  const isAi = (host) => AI_HOSTS.some((domain) => hostIsOrUnder(host, domain));
  if ((ref && (ref.scheme === 'http:' || ref.scheme === 'https:') && isAi(ref.host)) || (source && isAi(source))) return 'ai_referral';
  if (ref) {
    if (ref.scheme === 'android-app:') {
      if (ref.host === 'com.google.android.googlequicksearchbox') return 'organic_google';
      if (ref.host === 'com.duckduckgo.mobile.android') return 'organic_bing_yahoo_ddg';
      return 'referral';
    }
    if (ref.scheme !== 'http:' && ref.scheme !== 'https:') return 'referral';
    if (GOOGLE_SEARCH_HOST_RE.test(ref.host)) return 'organic_google';
    if (['bing.com', 'search.yahoo.com', 'duckduckgo.com'].some((domain) => hostIsOrUnder(ref.host, domain))) return 'organic_bing_yahoo_ddg';
    if (OWN_HOST_RE.test(ref.host)) return 'direct';
    return 'referral';
  }
  if (medium === 'organic') {
    if (source === 'google') return 'organic_google';
    if (['bing', 'yahoo', 'duckduckgo'].includes(source)) return 'organic_bing_yahoo_ddg';
  }
  if (source || medium) return 'referral';
  return 'direct';
}

module.exports = {
  LEAD_CONTRACT_VERSION, CONSENT_WORDING_VERSION, MIN_QUALIFYING_BILL,
  BILL_BANDS, BILL_BAND_LABELS, UNDER_250_ID, REJECT_WORDS, FORM_KINDS, TRAFFIC_CHANNELS, AI_HOSTS,
  UNDER_250_MESSAGE, RENTER_MESSAGE, UNIT_QUESTION, UNIT_DECLINED_MESSAGE, CONSENT_TEXT, ERRORS,
  PO_BOX_RE, REJECT_WORD_RE, UNIT_RE, STREET_RE, CITY_RE, ZIP_RE, EMAIL_RE,
  normalizeStreet, classifyStreet, isCaZip, composeAddress, sanitizeReferrer, deriveTrafficChannel,
};
