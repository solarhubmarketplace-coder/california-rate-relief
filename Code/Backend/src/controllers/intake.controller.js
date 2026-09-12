const intakeService = require('../services/intake.service');
const crypto = require('crypto');
const { cleanJourney, cleanPublicPath } = require('../lib/lead-journey');

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SERVICE_MARKETS = new Set(['CA', 'NJ', 'DE', 'MD', 'VA', 'DC']);

function text(value, max) {
  if (value == null) return null;
  const result = String(value).trim();
  return result ? result.slice(0, max) : null;
}

function normalizePhone(value) {
  const raw = text(value, 40);
  if (!raw) return null;
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  if (raw.startsWith('+') && digits.length >= 8 && digits.length <= 15) return `+${digits}`;
  return null;
}

function cleanObject(input, allowed, max = 255) {
  const output = {};
  if (!input || typeof input !== 'object' || Array.isArray(input)) return output;
  for (const key of allowed) {
    const value = input[key];
    if (typeof value === 'boolean' || typeof value === 'number') output[key] = value;
    else if (typeof value === 'string') {
      const cleaned = text(value, max);
      if (cleaned !== null) output[key] = cleaned;
    }
  }
  return output;
}

function normalizeUtility(value, allowOtherLabel = false) {
  const raw = text(value, 120);
  if (!raw) return null;
  const key = raw.toLowerCase().replace(/[^a-z0-9]/g, '');
  const known = {
    pge: 'PG&E', pacificgasandelectric: 'PG&E', sce: 'SCE', southerncaliforniaedison: 'SCE',
    sdge: 'SDG&E', sandiegogasandelectric: 'SDG&E', ladwp: 'LADWP',
    losangelesdepartmentofwaterandpower: 'LADWP', smud: 'SMUD', mvu: 'MVU', morenovalleyutility: 'MVU', other: 'Other',
  };
  if (known[key]) return { canonical: known[key] };
  return allowOtherLabel ? { canonical: 'Other', other: raw } : null;
}

function normalizeCredit(value) {
  const key = String(value || '').trim().toLowerCase();
  return ({ yes: 'above_650', above_650: 'above_650', no: 'below_650', below_650: 'below_650', unsure: 'unsure' })[key] || null;
}

function legacyBill(value) {
  const raw = text(value, 80);
  if (!raw) return { amount: null, range: null };
  const ranges = { '150-200': 175, '201-350': 275, '351-500': 425, '500+': 600 };
  if (ranges[raw] !== undefined) return { amount: ranges[raw], range: raw };
  const numeric = Number(String(raw).replace(/[$,]/g, ''));
  return Number.isFinite(numeric) ? { amount: numeric, range: null } : { amount: null, range: raw };
}

function validate(body) {
  const submissionId = typeof body?.submission_id === 'string' ? body.submission_id.trim() : null;
  const segment = text(body?.segment, 20);
  const contact = body?.contact || {};
  const phone = normalizePhone(contact.phone);
  const name = text(contact.name, 160);
  const email = text(contact.email, 254);
  if (!UUID.test(submissionId || '')) return { error: 'submission_id must be a UUID' };
  if (!['residential', 'commercial'].includes(segment)) return { error: 'segment must be residential or commercial' };
  if (!name || !phone) return { error: 'contact.name and a valid contact.phone are required' };
  if (email && !EMAIL.test(email)) return { error: 'contact.email is invalid' };

  // Location and ZIP-derived territory keys. derived_utility is stored ALONGSIDE
  // utility_provider and never replaces it: the visitor's answer and the seed
  // table's answer must both survive so a mismatch is a reviewable signal.
  const location = ['city', 'zip', 'service_zip', 'county', 'service_market', 'territory_resolution', 'derived_utility', 'derived_cca', 'derived_county', 'derived_from', 'derived_utility_matches_selection'];
  const residential = ['utility_provider', 'bill_amount', 'monthly_bill_range', 'credit_score', 'homeowner',
    'utility_provider_other',
    'calculator_version', 'calculator_monthly_bill', 'calculator_annual_kwh', 'calculator_system_kw', 'calculator_cash_price',
    'calculator_annual_bill_after', 'calculator_annual_difference', 'calculator_simple_payback',
    'calculator_solar_only_price', 'calculator_battery_price', 'inquiry_topic', 'inquiry_question', ...location];
  const commercial = ['company_name', 'property_type', 'property_control', 'location', 'utility_provider', 'utility_provider_other', 'bill_amount', 'monthly_bill_range', 'demand_indicator', 'project_timeline', ...location];
  const qualification = cleanObject(body.qualification_data, segment === 'residential' ? residential : commercial, 200);
  // `service_zip` is canonical; `zip` is accepted as an alias and folded into it.
  // Whatever the visitor typed is kept even when it is malformed or out of state
  // — a bad ZIP or a failed territory lookup must never cost us the lead. The
  // RPC decides separately which values are clean enough for leads.zip/city.
  if (qualification.zip && !qualification.service_zip) qualification.service_zip = qualification.zip;
  delete qualification.zip;
  if (qualification.service_market) {
    qualification.service_market = qualification.service_market.toUpperCase();
    if (!SERVICE_MARKETS.has(qualification.service_market)) return { error: 'qualification_data.service_market is invalid' };
    // This is the visitor-selected market, not a ZIP-derived coverage claim.
    qualification.territory_resolution = /^\d{5}$/.test(qualification.service_zip || '')
      ? 'visitor_selected_zip_validated'
      : 'visitor_selected_zip_unverified';
  }
  if (segment === 'residential' && typeof qualification.homeowner !== 'boolean') return { error: 'qualification_data.homeowner is required for residential intake' };
  for (const field of ['company_name', 'property_type', 'property_control', 'project_timeline']) {
    if (segment === 'commercial' && !qualification[field]) return { error: `qualification_data.${field} is required for commercial intake` };
  }
  // A non-California provider is stored as the explicit visitor answer under
  // Other. We do not manufacture a canonical utility from state or ZIP.
  const utility = normalizeUtility(qualification.utility_provider, true);
  if (!utility) return { error: 'qualification_data.utility_provider is invalid' };
  qualification.utility_provider = utility.canonical;
  if (utility.other) qualification.utility_provider_other = utility.other;
  if (segment === 'residential') {
    const credit = qualification.credit_score == null ? 'unsure' : normalizeCredit(qualification.credit_score);
    if (!credit) return { error: 'qualification_data.credit_score is invalid' };
    qualification.credit_score = credit;
  }
  if (qualification.bill_amount != null) {
    const bill = Number(qualification.bill_amount);
    if (!Number.isFinite(bill) || bill < 0 || bill > 10000000) return { error: 'qualification_data.bill_amount is invalid' };
    if (qualification.calculator_version === 'quote-input-v2') qualification.calculator_monthly_bill = bill;
    qualification.bill_amount = Math.round(bill);
  }
  if (qualification.calculator_version === 'quote-input-v2') {
    for (const key of ['calculator_monthly_bill','calculator_annual_kwh','calculator_system_kw','calculator_solar_only_price','calculator_battery_price','calculator_annual_bill_after']) {
      if (qualification[key] == null) continue;
      const value=Number(qualification[key]);
      if (!Number.isFinite(value) || value<0 || value>10000000 || (['calculator_monthly_bill','calculator_annual_kwh','calculator_system_kw'].includes(key) && value===0)) return {error:`qualification_data.${key} is invalid`};
      qualification[key]=value;
    }
    // Recompute simple arithmetic from the entered inputs; client output fields
    // are not authoritative. Preserve cents alongside the existing integer CRM bill.
    const cash=qualification.calculator_solar_only_price == null ? null : qualification.calculator_solar_only_price+(qualification.calculator_battery_price || 0);
    const difference=qualification.calculator_monthly_bill == null || qualification.calculator_annual_bill_after == null ? null : qualification.calculator_monthly_bill*12-qualification.calculator_annual_bill_after;
    qualification.calculator_cash_price=cash;
    qualification.calculator_annual_difference=difference;
    qualification.calculator_simple_payback=cash != null && difference != null && difference>0 ? cash/difference : null;
  }

  const attribution = cleanObject(body.attribution, [
    'source', 'gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
    'landing_page', 'landing_city_slug', 'landing_page_type', 'submitted_from', 'referrer', 'ga_client_id', 'captured_at',
    'acquisition_source', 'acquisition_medium', 'organic_landing_page', 'original_acquisition_source', 'original_acquisition_medium'
  ], 500);
  const journey = cleanJourney(body.attribution?.journey);
  if (journey) attribution.journey = journey;
  for (const key of ['landing_page', 'submitted_from', 'organic_landing_page']) {
    const path = cleanPublicPath(attribution[key]);
    if (!path) delete attribution[key];
    else attribution[key] = path;
  }
  if (attribution.referrer) {
    try {
      const raw = String(attribution.referrer);
      const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || !url.hostname.includes('.')) throw new Error('Invalid referrer');
      attribution.referrer = url.hostname.toLowerCase();
    } catch { delete attribution.referrer; }
  }
  if (!Number.isFinite(Date.parse(attribution.captured_at))) delete attribution.captured_at;
  const consentStatus = text(body.consent?.status, 20) || 'pending';
  if (!['pending', 'opted_in', 'opted_out'].includes(consentStatus)) return { error: 'consent.status is invalid' };
  const consentTimestamp = body.consent?.timestamp && Number.isFinite(Date.parse(body.consent.timestamp))
    ? new Date(body.consent.timestamp).toISOString() : null;

  return { value: {
    submission_id: submissionId, segment, name, phone, email,
    address: text(contact.address, 500), qualification_data: qualification,
    attribution, consent_status: consentStatus, consent_timestamp: consentTimestamp,
    is_test: body.test === true,
  } };
}

async function createIntake(req, res, next) {
  const validated = validate(req.body);
  if (validated.error) return res.apiResponse(400, validated.error);
  try {
    const result = await intakeService.createSubmission(validated.value);
    return res.apiResponse(result.replayed ? 200 : 201, result.replayed ? 'Submission already received' : 'Submission received', {
      submission_id: result.submission_id,
      lead_id: result.lead_id,
      segment: result.segment,
      status: 'received',
      storage_status: 'stored',
      owner_notification_status: 'unknown',
      receipt_status: 'unknown',
      duplicate: result.replayed,
    });
  } catch (error) { return next(error); }
}

function legacySubmissionId(body, now = new Date()) {
  const day = now.toISOString().slice(0, 10);
  const stable = JSON.stringify({
    day, phone: normalizePhone(body?.phone), email: text(body?.email, 254),
    utility_provider: text(body?.utility_provider, 120), bill_amount: Number(body?.bill_amount) || null,
    landing_page: text(body?.landing_page, 500), submitted_from: text(body?.submitted_from, 500),
  });
  const bytes = crypto.createHash('sha256').update(stable).digest().subarray(0, 16);
  bytes[6] = (bytes[6] & 0x0f) | 0x50;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  return `${bytes.toString('hex', 0, 4)}-${bytes.toString('hex', 4, 6)}-${bytes.toString('hex', 6, 8)}-${bytes.toString('hex', 8, 10)}-${bytes.toString('hex', 10, 16)}`;
}

async function createLegacyIntake(req, res, next) {
  const body = req.body || {};
  const bill = legacyBill(body.bill_amount ?? body.monthly_bill_range);
  const translated = {
    submission_id: legacySubmissionId(body), segment: 'residential',
    contact: { name: body.name || [body.first_name, body.last_name].filter(Boolean).join(' '), phone: body.phone, email: body.email, address: body.address },
    qualification_data: {
      homeowner: true, utility_provider: body.utility_provider, bill_amount: bill.amount,
      monthly_bill_range: body.monthly_bill_range || bill.range,
      credit_score: body.credit_score,
    },
    attribution: Object.fromEntries([
      'source','gclid','gbraid','wbraid','msclkid','fbclid','utm_source','utm_medium','utm_campaign','utm_content','utm_term',
      'landing_page','landing_city_slug','landing_page_type','submitted_from','referrer','ga_client_id'
    ].map(key => [key, body[key]]).filter(([, value]) => value != null)),
    consent: { status: 'pending' },
    test: body.test === true,
  };
  const validated = validate(translated);
  if (validated.error) return res.apiResponse(400, validated.error);
  try {
    const result = await intakeService.createSubmission(validated.value);
    return res.apiResponse(result.replayed ? 200 : 201, result.replayed ? 'Submission already received' : 'Submission received', {
      id: result.lead_id, submission_id: result.submission_id, status: 'received', duplicate: result.replayed,
    });
  } catch (error) { return next(error); }
}

module.exports = { createIntake, createLegacyIntake, legacySubmissionId, legacyBill, validate, normalizePhone, normalizeUtility, normalizeCredit };
