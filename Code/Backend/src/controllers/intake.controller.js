const intakeService = require('../services/intake.service');
const crypto = require('crypto');

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    else {
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
    losangelesdepartmentofwaterandpower: 'LADWP', mvu: 'MVU', morenovalleyutility: 'MVU', other: 'Other',
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
  const submissionId = text(body?.submission_id, 36);
  const segment = text(body?.segment, 20);
  const contact = body?.contact || {};
  const phone = normalizePhone(contact.phone);
  const name = text(contact.name, 160);
  const email = text(contact.email, 254);
  if (!UUID.test(submissionId || '')) return { error: 'submission_id must be a UUID' };
  if (!['residential', 'commercial'].includes(segment)) return { error: 'segment must be residential or commercial' };
  if (!name || !phone) return { error: 'contact.name and a valid contact.phone are required' };
  if (email && !EMAIL.test(email)) return { error: 'contact.email is invalid' };

  const residential = ['utility_provider', 'bill_amount', 'monthly_bill_range', 'credit_score', 'homeowner', 'service_zip', 'county'];
  const commercial = ['company_name', 'property_type', 'property_control', 'location', 'utility_provider', 'bill_amount', 'monthly_bill_range', 'demand_indicator', 'project_timeline', 'service_zip', 'county'];
  const qualification = cleanObject(body.qualification_data, segment === 'residential' ? residential : commercial, 200);
  if (segment === 'residential' && typeof qualification.homeowner !== 'boolean') return { error: 'qualification_data.homeowner is required for residential intake' };
  for (const field of ['company_name', 'property_type', 'property_control', 'project_timeline']) {
    if (segment === 'commercial' && !qualification[field]) return { error: `qualification_data.${field} is required for commercial intake` };
  }
  const utility = normalizeUtility(qualification.utility_provider, segment === 'commercial');
  if (!utility) return { error: 'qualification_data.utility_provider is invalid' };
  qualification.utility_provider = utility.canonical;
  if (utility.other) qualification.utility_provider_other = utility.other;
  if (segment === 'residential') {
    const credit = normalizeCredit(qualification.credit_score);
    if (!credit) return { error: 'qualification_data.credit_score is invalid' };
    qualification.credit_score = credit;
  }
  if (qualification.bill_amount != null) {
    const bill = Number(qualification.bill_amount);
    if (!Number.isFinite(bill) || bill < 0 || bill > 10000000) return { error: 'qualification_data.bill_amount is invalid' };
    qualification.bill_amount = Math.round(bill);
  }

  const attribution = cleanObject(body.attribution, [
    'source', 'gclid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
    'landing_page', 'landing_city_slug', 'landing_page_type', 'submitted_from', 'referrer', 'ga_client_id', 'captured_at'
  ], 500);
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
      'source','gclid','fbclid','utm_source','utm_medium','utm_campaign','utm_content','utm_term',
      'landing_page','landing_city_slug','landing_page_type','submitted_from','referrer','ga_client_id'
    ].map(key => [key, body[key]]).filter(([, value]) => value != null)),
    consent: { status: 'pending' },
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
