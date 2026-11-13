// =============================================================================
// Residential lead contract (Chad, 12 Nov 2026).
//
// One definition of what a residential lead must carry, shared by the three
// residential forms (SolarInquiry, QualificationWizard, OfferRequest) and the
// quick check. The API holds the same rules in
// Code/Backend/src/lib/lead-contract.js, and migration 014 holds them in the
// ingest RPC. Change all of them together: lead-contract.parity.test.ts fails
// when the two code copies drift.
//
// - The monthly bill is a button choice from BILL_BANDS, never typed. "Under
//   $250" is a button that screens the visitor out and never submits.
// - Homeowner is a mandatory Yes/No; No ends the form.
// - A full California street address: house number + street, no unit, suite,
//   lot, space, trailer or PO box; "Unit" / "#" (or a Google subpremise) needs
//   the detached-single-family answer; city; state CA; a California ZIP.
// - Name, phone, email and the consent checkbox are required.
//
// No imports from '@/...' so the node test runner can load this file.
// =============================================================================

import { usPhoneError } from './phone.ts';

export const LEAD_CONTRACT_VERSION = 'crr-lead-2026-11-12';
export const CONSENT_WORDING_VERSION = 'crr-consent-2026-11-12';
export const MIN_QUALIFYING_BILL = 250;

// The only bill answers a residential lead may carry. `amount` is what lands in
// leads.bill_amount (INTEGER): the band midpoint, $500+ kept at 600 as before.
export const BILL_BANDS = [
  { id: '250_349', label: '$250–$349', min: 250, max: 349, amount: 300 },
  { id: '350_499', label: '$350–$499', min: 350, max: 499, amount: 425 },
  { id: '500_plus', label: '$500+', min: 500, max: null, amount: 600 },
] as const;
export type BillBandId = (typeof BILL_BANDS)[number]['id'];

// A button, not a band. It never reaches the API.
export const UNDER_250_ID = 'under_250';
export const UNDER_250_LABEL = 'Under $250';
export type BillChoiceId = BillBandId | typeof UNDER_250_ID;
/** Render order of the four buttons. */
export const BILL_CHOICES: readonly { id: BillChoiceId; label: string }[] = [
  { id: UNDER_250_ID, label: UNDER_250_LABEL },
  ...BILL_BANDS.map((band) => ({ id: band.id, label: band.label })),
];

export const REJECT_WORDS = [
  'apt', 'apts', 'apartment', 'apartments', 'apto', 'depto', 'departamento', 'bldg', 'building', 'rm', 'room',
  'fl', 'flr', 'floor', 'suite', 'ste', 'lot', 'space', 'spc', 'sp', 'espacio', 'trailer', 'trlr',
] as const;

export const FORM_KINDS = ['solar_inquiry', 'qualification_wizard', 'offer_request'] as const;
export type FormKind = (typeof FORM_KINDS)[number];
export const TRAFFIC_CHANNELS = ['organic_google', 'organic_bing_yahoo_ddg', 'ai_referral', 'paid', 'email', 'direct', 'referral'] as const;
export type TrafficChannel = (typeof TRAFFIC_CHANNELS)[number];
export const AI_HOSTS = ['chatgpt.com', 'chat.openai.com', 'perplexity.ai', 'gemini.google.com', 'copilot.microsoft.com', 'claude.ai'] as const;
/** Android app referrers (android-app://<id>) of the same AI assistants and search engines. */
export const AI_APP_IDS = ['com.openai.chatgpt', 'ai.perplexity.app.android', 'com.anthropic.claude', 'com.microsoft.copilot', 'com.google.android.apps.bard'] as const;
export const BING_YAHOO_DDG_APP_IDS = ['com.duckduckgo.mobile.android', 'com.microsoft.bing', 'com.yahoo.mobile.client.android.search'] as const;
export const FIRST_TOUCH_KEY = 'crr_first_touch_v2';
export const FIRST_TOUCH_TTL_DAYS = 90;

// ---------------------------------------------------------------------------
// Copy. No savings claims, no "free", no partner name. The only threshold we
// state is our own.
// ---------------------------------------------------------------------------
export const UNDER_250_MESSAGE =
  "Thanks for checking. California Rate Relief sends requests to solar providers only for homes with an average electric bill of $250 a month or more, so we can't send this one. Our guides explain how California electric rates and bills work.";
export const UNDER_250_LINK = { href: '/blog', label: 'Read the guides' } as const;
export const RENTER_MESSAGE =
  "Solar referrals here are for homeowners. If you don't own the home, we can't send this request to a provider.";
/** Shown before the commercial link so a residential renter does not read it as "use this form instead". */
export const RENTER_COMMERCIAL_HINT = 'If you control a business or commercial property, use the commercial assessment instead.';
export const RENTER_COMMERCIAL_LINK = { href: '/commercial-assessment', label: 'Open the commercial solar assessment' } as const;
/** Chad's exact words. */
export const UNIT_QUESTION = 'Is this a detached single-family property where you own sole rights to the roof?';
export const UNIT_DECLINED_MESSAGE =
  "We can only send requests for detached single-family homes where you own the roof, so we can't send this one.";
/** The live SolarInquiry / OfferRequest wording, unchanged. */
export const CONSENT_TEXT =
  'I agree that California Rate Relief may contact me about this inquiry and share my project details with a solar provider for follow-up.';

/** Browser-only wording for a well-formed ZIP that is not in California (code stays zip_not_ca). */
export const ZIP_OUTSIDE_CA_MESSAGE = "That ZIP code isn't in California. This form is for homes in California.";

/** Error code -> message. The API returns the same code in `error.code`. */
export const ERRORS = {
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
  po_box: "A PO box or private mailbox can't be used. Enter the street address of the home.",
  unit_word:
    "We can only send requests for detached single-family homes. Addresses with an apartment, suite, building, room, floor, lot, space or trailer number can't be used.",
  street_format: 'Enter the house number and street name, for example 123 Main St.',
  places_not_selected:
    'Start typing the address and pick it from the list. Can\'t find it? Choose "Enter my address by hand".',
  unit_unconfirmed: `Please answer the question about the property: ${UNIT_QUESTION}`,
  unit_declined: UNIT_DECLINED_MESSAGE,
  city_invalid: 'Enter the city of the home.',
  state_not_ca: 'This form is for homes in California.',
  zip_not_ca: 'Enter the 5-digit California ZIP code of the home.',
  utility_invalid: 'qualification_data.utility_provider is invalid',
  consent_required: 'Check the box to agree to be contacted about your request.',
  address_unverified: "We couldn't confirm that street address. Check the house number, street, city and ZIP.",
  legacy_route_retired: 'This endpoint has been retired. Submit leads to /api/intake.',
} as const;
export type LeadErrorCode = keyof typeof ERRORS;
/** Codes only the browser raises (the API never sees an unselected suggestion). */
export const FRONT_ONLY_ERRORS: readonly LeadErrorCode[] = ['places_not_selected'];

// ---------------------------------------------------------------------------
// Regexes. Whole word, case-insensitive; the same patterns live in the backend
// and (as POSIX equivalents) in migration 014. A reject word matches only when
// the character before it is not a letter (or start) and the character after
// it is not a letter (or end). Digits count as a boundary on purpose: "Apt4"
// and "Unit4" are caught, "Stewart", "Floorwood", "Lotus", "Unity" are not.
// ---------------------------------------------------------------------------
export const PO_BOX_RE = /(?:^|[^a-z])(?:p\s*\.?\s*o\s*\.?\s*b(?:ox)?\.?|post\s+office\s+box|pmb|private\s+mail\s*box)(?![a-z])/i;
export const REJECT_WORD_RE = /(?:^|[^a-z])(?:apt|apts|apartment|apartments|apto|depto|departamento|bldg|building|rm|room|fl|flr|floor|suite|ste|lot|space|spc|sp|espacio|trailer|trlr)(?![a-z])/i;
export const UNIT_RE = /(?:^|[^a-z])unit(?![a-z])|#/i;
// House number (12, 12B, 12-B, 1234-1236), then a street name with at least two
// letters. Letters include accented ones (Peñasquitos, Cañada) so a real
// California street is never refused for its spelling.
export const STREET_RE = /^\d{1,6}(?:[a-z]|-[a-z0-9]{1,6})?\s+(?=.*\p{L}{2})[\p{L}\p{M}0-9 .'’#&\/-]{2,114}$/iu;
export const CITY_RE = /^\p{L}[\p{L} .'’-]{1,79}$/u;
export const ZIP_RE = /^\d{5}$/;
export const EMAIL_RE = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;

/** Commas become spaces (the API composes "street, City, CA ZIP" and the RPC splits on the first comma). */
export function normalizeStreet(raw: unknown): string {
  return String(raw ?? '').replace(/,/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120);
}

export type StreetVerdict = 'ok' | 'unit_question' | 'street_required' | 'po_box' | 'unit_word' | 'street_format';

/** Order matters: PO box, then reject words, then format, then the unit question. */
export function classifyStreet(raw: unknown): StreetVerdict {
  const v = normalizeStreet(raw);
  if (!v) return 'street_required';
  if (PO_BOX_RE.test(v)) return 'po_box';
  if (REJECT_WORD_RE.test(v)) return 'unit_word';
  if (!STREET_RE.test(v)) return 'street_format';
  if (UNIT_RE.test(v)) return 'unit_question';
  return 'ok';
}

/** True when the detached-single-family question must be shown. */
export function needsUnitQuestion(street: string, placesUnitFlag: boolean): boolean {
  return classifyStreet(street) === 'unit_question' || placesUnitFlag === true;
}

export function isBillBandId(value: unknown): value is BillBandId {
  return typeof value === 'string' && BILL_BANDS.some((band) => band.id === value);
}

/** Dollars stored for a band (300 / 425 / 600), or null for anything else. */
export function billBandAmount(id: string | null | undefined): number | null {
  return BILL_BANDS.find((band) => band.id === id)?.amount ?? null;
}

export function billBandLabel(id: string | null | undefined): string | null {
  return BILL_BANDS.find((band) => band.id === id)?.label ?? null;
}

/**
 * Map a bill typed elsewhere (a calculator, an old quick-check link) onto a
 * button: a band at $250 or more, 'under_250' below that, null when it is not a
 * usable positive number.
 */
export function billChoiceForAmount(amount: number): BillChoiceId | null {
  if (typeof amount !== 'number' || !Number.isFinite(amount) || amount <= 0) return null;
  if (amount < MIN_QUALIFYING_BILL) return UNDER_250_ID;
  if (amount < 350) return '250_349';
  if (amount < 500) return '350_499';
  return '500_plus';
}

/** "123 Main St, Temecula, CA 92591". The API composes the same string. */
export function composeAddress(street: string, city: string, zip: string): string {
  return `${normalizeStreet(street)}, ${String(city ?? '').trim()}, CA ${String(zip ?? '').trim()}`;
}

// ---------------------------------------------------------------------------
// Form validation
// ---------------------------------------------------------------------------
export interface ResidentialLeadInput {
  billChoice: string | null;
  homeowner: boolean | null;
  street: string;
  city: string;
  zip: string;
  /** Always 'CA' in the UI. */
  state: string;
  /** true/false from the ca-zip-city lookup; null = lookup unavailable (does not block). */
  zipKnown: boolean | null;
  addressSource: 'places' | 'manual';
  placesActive: boolean;
  placeSelected: boolean;
  /** Places returned a subpremise. */
  placesUnitFlag: boolean;
  unitAnswer: '' | 'yes' | 'no';
  name: string;
  phone: string;
  email: string;
  consent: boolean;
}

export type LeadField = 'bill' | 'homeowner' | 'street' | 'unit' | 'city' | 'zip' | 'name' | 'phone' | 'email' | 'consent';
/** On-screen order of the fields; the first error in this order gets focus. */
export const LEAD_FIELDS: readonly LeadField[] = ['bill', 'homeowner', 'street', 'unit', 'city', 'zip', 'name', 'phone', 'email', 'consent'];
export interface LeadError {
  code: LeadErrorCode;
  message: string;
}

function err(code: LeadErrorCode, message?: string): LeadError {
  return { code, message: message ?? ERRORS[code] };
}

/** Errors keyed by field, in on-screen order. Gates (bill, homeowner) first. */
export function residentialLeadErrors(i: ResidentialLeadInput): Partial<Record<LeadField, LeadError>> {
  const out: Partial<Record<LeadField, LeadError>> = {};

  if (i.billChoice === UNDER_250_ID) out.bill = err('bill_under_250');
  else if (!isBillBandId(i.billChoice)) out.bill = err('bill_band_required');

  if (i.homeowner === null || i.homeowner === undefined) out.homeowner = err('homeowner_required');
  else if (i.homeowner !== true) out.homeowner = err('renter');

  const verdict = classifyStreet(i.street);
  if (verdict === 'street_required' || verdict === 'po_box' || verdict === 'unit_word') out.street = err(verdict);
  else if (i.placesActive && !i.placeSelected) out.street = err('places_not_selected');
  else if (verdict === 'street_format') out.street = err('street_format');

  if (!out.street && needsUnitQuestion(i.street, i.placesUnitFlag)) {
    if (i.unitAnswer === 'no') out.unit = err('unit_declined');
    else if (i.unitAnswer !== 'yes') out.unit = err('unit_unconfirmed');
  }

  if (!CITY_RE.test(String(i.city ?? '').trim())) out.city = err('city_invalid');

  const zip = String(i.zip ?? '').trim();
  if (String(i.state ?? 'CA').toUpperCase() !== 'CA') out.zip = err('state_not_ca');
  else if (!ZIP_RE.test(zip)) out.zip = err('zip_not_ca');
  // Five digits, but not a California ZIP: say the real reason (same code as the API).
  else if (i.zipKnown === false) out.zip = err('zip_not_ca', ZIP_OUTSIDE_CA_MESSAGE);

  if (!String(i.name ?? '').trim()) out.name = err('name_required');

  const phoneMessage = usPhoneError(i.phone ?? '');
  if (phoneMessage) out.phone = err('phone_invalid', phoneMessage);

  const email = String(i.email ?? '').trim();
  if (!email) out.email = err('email_required');
  else if (!EMAIL_RE.test(email)) out.email = err('email_invalid');

  if (i.consent !== true) out.consent = err('consent_required');
  return out;
}

/** The first error in on-screen order, or null. */
export function firstLeadError(
  errors: Partial<Record<LeadField, LeadError>>,
): { field: LeadField; error: LeadError } | null {
  for (const field of LEAD_FIELDS) {
    const error = errors[field];
    if (error) return { field, error };
  }
  return null;
}

/** Which field an API error code belongs to (for showing a 400 inline). */
export function fieldForErrorCode(code: string | null | undefined): LeadField | null {
  switch (code) {
    case 'bill_under_250':
    case 'bill_band_required':
      return 'bill';
    case 'homeowner_required':
    case 'renter':
      return 'homeowner';
    case 'street_required':
    case 'po_box':
    case 'unit_word':
    case 'street_format':
    case 'places_not_selected':
    case 'address_unverified':
      return 'street';
    case 'unit_unconfirmed':
    case 'unit_declined':
      return 'unit';
    case 'city_invalid':
      return 'city';
    case 'state_not_ca':
    case 'zip_not_ca':
      return 'zip';
    case 'name_required':
      return 'name';
    case 'phone_invalid':
      return 'phone';
    case 'email_required':
    case 'email_invalid':
      return 'email';
    case 'consent_required':
      return 'consent';
    default:
      return null;
  }
}

/** Address codes that count as an address deflection in GA4. */
export const ADDRESS_REJECT_CODES: readonly LeadErrorCode[] = [
  'po_box', 'unit_word', 'street_format', 'state_not_ca', 'zip_not_ca', 'places_not_selected',
];

// ---------------------------------------------------------------------------
// First-touch referrer and traffic channel
// ---------------------------------------------------------------------------
/**
 * Looks like personal data (an email address or a phone-length digit run).
 * utm_* values that match are dropped, and a referrer whose path matches keeps
 * only its scheme and host. Click ids are not screened (gclid has long digit runs).
 */
export const PII_LIKE_RE = /@|%40|\d{7,}/i;
export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const OWN_HOST_RE = /(^|\.)ratereliefca\.com$/i;
const BLOCKED_SCHEMES = new Set(['javascript:', 'data:', 'file:', 'blob:', 'about:']);

/**
 * The referrer as a first-touch fact: http(s) -> scheme, host and path (query
 * and fragment dropped, 300 chars max); an app referrer such as
 * android-app://com.google.android.googlequicksearchbox -> scheme and host
 * (kept, not discarded); our own site, javascript:, data:, file: or
 * unparseable -> null.
 */
export function sanitizeReferrer(raw: string | null | undefined): string | null {
  const s = typeof raw === 'string' ? raw.trim() : '';
  if (!s) return null;
  let url: URL;
  try {
    url = new URL(s);
  } catch {
    return null;
  }
  const protocol = url.protocol.toLowerCase();
  if (protocol === 'http:' || protocol === 'https:') {
    const hostname = url.hostname.toLowerCase();
    if (!hostname || OWN_HOST_RE.test(hostname)) return null;
    const path = PII_LIKE_RE.test(url.pathname) ? '/' : url.pathname;
    return `${protocol}//${url.host.toLowerCase()}${path}`.slice(0, 300);
  }
  if (BLOCKED_SCHEMES.has(protocol) || !/^[a-z][a-z0-9+.-]*:$/.test(protocol) || !url.host) return null;
  return `${protocol}//${url.host.toLowerCase()}`.slice(0, 300);
}

export interface ChannelInput {
  /** Full referrer URL (http(s) or app scheme), preferred. */
  initial_referrer?: string | null;
  /** Host-only referrer (older first-touch records). */
  referrer?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  gclid?: string | null;
  gbraid?: string | null;
  wbraid?: string | null;
  msclkid?: string | null;
  fbclid?: string | null;
}

function present(value: unknown): boolean {
  return typeof value === 'string' && value.trim() !== '';
}

function lower(value: unknown): string {
  return typeof value === 'string' ? value.trim().toLowerCase() : '';
}

function hostIsOrUnder(host: string, domain: string): boolean {
  return host === domain || host.endsWith(`.${domain}`);
}

function parseReferrer(t: ChannelInput): { scheme: string; host: string } | null {
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

/** First match wins (DESIGN section 4.3). */
export function deriveTrafficChannel(t: ChannelInput | null | undefined): TrafficChannel {
  const input = t ?? {};
  if (['gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid'].some((key) => present(input[key as keyof ChannelInput]))) return 'paid';
  const medium = lower(input.utm_medium);
  const source = lower(input.utm_source);
  if (/^(cpc|ppc|paid([_-]?[a-z]+)?)$/.test(medium)) return 'paid';
  if (medium === 'email') return 'email';
  const ref = parseReferrer(input);
  const isAi = (host: string) => AI_HOSTS.some((domain) => hostIsOrUnder(host, domain));
  if ((ref && (ref.scheme === 'http:' || ref.scheme === 'https:') && isAi(ref.host)) || (source && isAi(source))) return 'ai_referral';
  if (ref) {
    if (ref.scheme === 'android-app:') {
      if (ref.host === 'com.google.android.googlequicksearchbox') return 'organic_google';
      if ((AI_APP_IDS as readonly string[]).includes(ref.host)) return 'ai_referral';
      if ((BING_YAHOO_DDG_APP_IDS as readonly string[]).includes(ref.host)) return 'organic_bing_yahoo_ddg';
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

export function isTrafficChannel(value: unknown): value is TrafficChannel {
  return typeof value === 'string' && (TRAFFIC_CHANNELS as readonly string[]).includes(value);
}
