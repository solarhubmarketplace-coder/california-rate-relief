jest.mock('../src/services/intake.service', () => ({ createSubmission: jest.fn(), recordEmailVisit: jest.fn(), recordRejection: jest.fn() }));
jest.mock('../src/services/address-validation.service', () => ({ enabled: jest.fn(() => false), check: jest.fn() }));
const addressValidation = require('../src/services/address-validation.service');
const service = require('../src/services/intake.service');
const controller = require('../src/controllers/intake.controller');
const contract = require('../src/lib/lead-contract');

function response() {
  return { apiResponse: jest.fn((status, message, data, error) => ({ status, message, data, error })) };
}

// A residential submission on the 12 Nov 2026 lead contract.
const residential = {
  submission_id: '123e4567-e89b-42d3-a456-426614174000', segment: 'residential',
  contact: { name: 'Test Person', phone: '(951) 555-0187', email: 'test@example.com', street: '123 Main St' },
  qualification_data: {
    lead_contract_version: 'crr-lead-2026-11-12', form_kind: 'solar_inquiry',
    homeowner: true, monthly_bill_band: '350_499', utility_provider: 'sce', credit_score: 'yes',
    city: 'Temecula', service_zip: '92591', service_market: 'CA',
    unit_flagged: false, unit_confirmed_detached: null, address_source: 'manual', places_status: 'no_key',
  },
  attribution: { landing_page: '/blog/why-is-my-sce-bill-so-high', submitted_from: '/' },
  consent: { status: 'opted_in', timestamp: '2026-11-12T20:00:00Z' },
  test: true,
};

const commercial = {
  submission_id: residential.submission_id, segment: 'commercial',
  contact: { name: 'Test Person', phone: '(951) 555-0187', email: 'test@example.com', address: '123 Main St, 92591' },
  qualification_data: { company_name: 'Acme', property_type: 'warehouse', property_control: 'owner', utility_provider: 'PG&E', project_timeline: '0_3_months' },
  attribution: { landing_page: '/commercial-solar' },
};

function withQ(q) { return { ...residential, qualification_data: { ...residential.qualification_data, ...q } }; }
function withContact(c) { return { ...residential, contact: { ...residential.contact, ...c } }; }

describe('public intake controller: email visits', () => {
  test('records a bounded privacy-safe email visit idempotently', async () => {
    service.recordEmailVisit.mockResolvedValue({ inserted: true });
    const res = response();
    await controller.recordEmailVisit({ body: {
      visit_id: residential.submission_id, landing_path: '/email/bill-review',
      campaign_key: 'owner_funnel_smoke', variant_key: 'cta', test: true,
      client_time: '2026-09-13T00:00:00Z',
    } }, res, jest.fn());
    expect(service.recordEmailVisit).toHaveBeenCalledWith(expect.objectContaining({
      visit_id: residential.submission_id, campaign_key: 'owner_funnel_smoke', is_test: true,
    }));
    expect(res.apiResponse).toHaveBeenCalledWith(201, 'Email visit recorded', { inserted: true });
  });
  test('rejects contact-shaped campaign labels on email visits', async () => {
    const res = response();
    await controller.recordEmailVisit({ body: {
      visit_id: residential.submission_id, landing_path: '/email/bill-review', campaign_key: 'person@example.com',
    } }, res, jest.fn());
    expect(res.apiResponse).toHaveBeenCalledWith(400, expect.stringMatching(/Valid email visit/));
  });
});

describe('residential lead contract (DESIGN section 3)', () => {
  beforeEach(() => jest.clearAllMocks());

  test('a valid submission is stored with server-set fields', () => {
    const result = controller.validate(residential);
    expect(result.error).toBeUndefined();
    const v = result.value;
    expect(v.address).toBe('123 Main St, Temecula, CA 92591');
    expect(v.phone).toBe('+19515550187');
    expect(v.consent_status).toBe('opted_in');
    expect(v.qualification_data).toEqual(expect.objectContaining({
      lead_contract_version: 'crr-lead-2026-11-12', form_kind: 'solar_inquiry', homeowner: true,
      monthly_bill_band: '350_499', bill_amount: 425, unit_flagged: false, city: 'Temecula', service_zip: '92591',
      service_market: 'CA', territory_resolution: 'visitor_selected_zip_validated', utility_provider: 'SCE',
      credit_score: 'above_650', consent_wording_version: 'crr-consent-2026-11-12',
      address_source: 'manual', places_status: 'no_key',
    }));
    expect(v.qualification_data).not.toHaveProperty('unit_confirmed_detached');
    expect(v.qualification_data).not.toHaveProperty('monthly_bill_range');
  });

  test('validation is deterministic (same body -> same stored value, so retries keep the RPC fingerprint)', () => {
    expect(controller.validate(residential)).toEqual(controller.validate(JSON.parse(JSON.stringify(residential))));
  });

  const cases = [
    ['form_outdated', withQ({ lead_contract_version: undefined })],
    ['form_outdated', withQ({ lead_contract_version: 'crr-lead-2026-11-04' })],
    ['bill_band_required', withQ({ monthly_bill_band: undefined })],
    ['bill_band_required', withQ({ monthly_bill_band: '300' })],
    ['bill_band_required', withQ({ monthly_bill_band: undefined, bill_amount: 300 })],
    ['bill_band_required', withQ({ monthly_bill_band: '200_299' })],
    ['bill_under_250', withQ({ monthly_bill_band: 'under_250' })],
    ['bill_under_250', withQ({ monthly_bill_band: '180' })],
    ['bill_under_250', withQ({ monthly_bill_band: undefined, bill_amount: 150 })],
    ['homeowner_required', withQ({ homeowner: undefined })],
    ['homeowner_required', withQ({ homeowner: 'maybe' })],
    ['renter', withQ({ homeowner: false })],
    ['name_required', withContact({ name: '  ' })],
    ['phone_invalid', withContact({ phone: '555-0187' })],
    ['phone_invalid', withContact({ phone: '(151) 555-0187' })],
    ['email_required', withContact({ email: '' })],
    ['email_invalid', withContact({ email: 'not-an-email' })],
    ['street_required', withContact({ street: '' })],
    ['po_box', withContact({ street: 'PO Box 12' })],
    ['unit_word', withContact({ street: '12 Main St Apt 4' })],
    ['unit_word', withContact({ street: '45 Space Center Blvd' })],
    ['street_format', withContact({ street: 'Main St' })],
    ['unit_unconfirmed', withContact({ street: '12 Main St #4' })],
    ['unit_declined', { ...withContact({ street: '12 Main St Unit 4' }), qualification_data: { ...residential.qualification_data, unit_confirmed_detached: false } }],
    ['unit_unconfirmed', withQ({ unit_flagged: true })],
    ['city_invalid', withQ({ city: '' })],
    ['city_invalid', withQ({ city: '92591' })],
    ['state_not_ca', withQ({ service_market: 'NJ' })],
    ['state_not_ca', withQ({ service_market: undefined })],
    ['zip_not_ca', withQ({ service_zip: '10001' })],
    ['zip_not_ca', withQ({ service_zip: '9259' })],
    ['utility_invalid', withQ({ utility_provider: '' })],
    ['consent_required', { ...residential, consent: { status: 'pending' } }],
    ['consent_required', { ...residential, consent: undefined }],
  ];

  test.each(cases)('%s', async (code, body) => {
    const result = controller.validate(body);
    expect(result.code).toBe(code);
    expect(result.error).toBe(contract.ERRORS[code]);
    const res = response();
    await controller.createIntake({ body }, res, jest.fn());
    expect(res.apiResponse).toHaveBeenCalledWith(400, contract.ERRORS[code], null, { code });
    expect(service.createSubmission).not.toHaveBeenCalled();
    expect(service.recordRejection).toHaveBeenCalledWith({
      reason: code, landing_page: '/blog/why-is-my-sce-bill-so-high', form_kind: 'solar_inquiry', layer: 'api',
    });
  });

  test('check order follows the screen: gates first', () => {
    expect(controller.validate(withQ({ lead_contract_version: 'old', homeowner: false, monthly_bill_band: 'under_250' })).code).toBe('form_outdated');
    expect(controller.validate({ ...withQ({ homeowner: false, monthly_bill_band: 'under_250' }), contact: { ...residential.contact, email: 'bad' } }).code).toBe('bill_under_250');
    expect(controller.validate({ ...withQ({ homeowner: false }), contact: { ...residential.contact, email: 'bad' } }).code).toBe('renter');
  });

  test('bill_amount comes from the band; a client bill_amount is ignored', () => {
    const v = controller.validate(withQ({ bill_amount: 999, monthly_bill_range: '150-200' })).value;
    expect(v.qualification_data.bill_amount).toBe(425);
    expect(v.qualification_data).not.toHaveProperty('monthly_bill_range');
    expect(controller.validate(withQ({ monthly_bill_band: '250_349' })).value.qualification_data.bill_amount).toBe(300);
    expect(controller.validate(withQ({ monthly_bill_band: '500_plus' })).value.qualification_data.bill_amount).toBe(600);
  });

  test('a confirmed unit is accepted and flagged', () => {
    const body = { ...withContact({ street: '12 Main St #4' }), qualification_data: { ...residential.qualification_data, unit_confirmed_detached: true } };
    const v = controller.validate(body).value;
    expect(v.qualification_data.unit_flagged).toBe(true);
    expect(v.qualification_data.unit_confirmed_detached).toBe(true);
    expect(v.address).toBe('12 Main St #4, Temecula, CA 92591');
    const places = controller.validate(withQ({ unit_flagged: true, unit_confirmed_detached: true })).value;
    expect(places.qualification_data.unit_flagged).toBe(true);
  });

  test('tricky street names are accepted', () => {
    for (const street of ['123 Stewart Ave', '88 Floorwood Dr', '300 Unity Dr', '10 Calle Peñasquitos']) {
      expect(controller.validate(withContact({ street })).error).toBeUndefined();
    }
  });

  test('a comma in the street does not break the composed address', () => {
    expect(controller.validate(withContact({ street: '123 Main St, ' })).value.address).toBe('123 Main St, Temecula, CA 92591');
  });

  test('the legacy zip alias is accepted and folded', () => {
    const v = controller.validate(withQ({ service_zip: undefined, zip: '92101', city: 'San Diego' })).value;
    expect(v.qualification_data.service_zip).toBe('92101');
    expect(v.qualification_data).not.toHaveProperty('zip');
  });

  test('unlisted keys are dropped', () => {
    const v = controller.validate(withQ({ ssn: '000-00-0000' })).value;
    expect(v.qualification_data).not.toHaveProperty('ssn');
  });

  test('traffic channel kept when valid, recomputed when missing or unknown', () => {
    const kept = controller.validate({ ...residential, attribution: { ...residential.attribution, traffic_channel: 'ai_referral' } });
    expect(kept.value.attribution.traffic_channel).toBe('ai_referral');
    const missing = controller.validate({ ...residential, attribution: { ...residential.attribution, initial_referrer: 'https://www.google.com/search?q=x' } });
    expect(missing.value.attribution.traffic_channel).toBe('organic_google');
    const unknown = controller.validate({ ...residential, attribution: { ...residential.attribution, traffic_channel: 'spam', referrer: 'www.bing.com' } });
    expect(unknown.value.attribution.traffic_channel).toBe('organic_bing_yahoo_ddg');
    const none = controller.validate(residential);
    expect(none.value.attribution.traffic_channel).toBe('direct');
  });

  test('initial_referrer: query stripped, app referrer kept, bad schemes dropped', () => {
    const stripped = controller.validate({ ...residential, attribution: { ...residential.attribution, initial_referrer: 'https://www.google.com/search?q=private' } });
    expect(stripped.value.attribution.initial_referrer).toBe('https://www.google.com/search');
    const app = controller.validate({ ...residential, attribution: { ...residential.attribution, initial_referrer: 'android-app://com.google.android.googlequicksearchbox/' } });
    expect(app.value.attribution.initial_referrer).toBe('android-app://com.google.android.googlequicksearchbox');
    expect(app.value.attribution.traffic_channel).toBe('organic_google');
    const js = controller.validate({ ...residential, attribution: { ...residential.attribution, initial_referrer: 'javascript:alert(1)' } });
    expect(js.value.attribution).not.toHaveProperty('initial_referrer');
    const version = controller.validate({ ...residential, attribution: { ...residential.attribution, first_touch_version: 2 } });
    expect(version.value.attribution.first_touch_version).toBe(2);
  });

  test('recordRejection never receives personal data', async () => {
    const res = response();
    await controller.createIntake({ body: withQ({ homeowner: false }) }, res, jest.fn());
    const args = JSON.stringify(service.recordRejection.mock.calls);
    for (const secret of ['Test Person', '555', 'test@example.com', '123 Main St']) expect(args).not.toContain(secret);
    expect(Object.keys(service.recordRejection.mock.calls[0][0]).sort()).toEqual(['form_kind', 'landing_page', 'layer', 'reason']);
  });

  test('a rejection without a clean landing page is counted as unknown', async () => {
    const res = response();
    await controller.createIntake({ body: { ...withQ({ homeowner: false, form_kind: 'bogus' }), attribution: { landing_page: '/dashboard/x' } } }, res, jest.fn());
    expect(service.recordRejection).toHaveBeenCalledWith({ reason: 'renter', landing_page: 'unknown', form_kind: 'unknown', layer: 'api' });
  });

  test('calculator figures are informational and never the stored bill', () => {
    const v = controller.validate(withQ({
      calculator_version: 'quote-input-v2', calculator_monthly_bill: 300.25, calculator_solar_only_price: 18000,
      calculator_battery_price: 0, calculator_annual_bill_after: 1200, calculator_annual_difference: 999999, calculator_system_kw: 'nope',
    })).value.qualification_data;
    expect(v.bill_amount).toBe(425);
    expect(v.calculator_monthly_bill).toBe(300.25);
    expect(v.calculator_annual_difference).toBe(2403);
    expect(v.calculator_cash_price).toBe(18000);
    expect(v).not.toHaveProperty('calculator_system_kw');
  });

  test('keeps the offer question and email attribution', () => {
    const result = controller.validate({ ...withQ({ form_kind: 'offer_request', inquiry_topic: 'quote-review', inquiry_question: 'What does the cash price include?' }),
      attribution: { source: 'email', acquisition_medium: 'email', original_acquisition_source: 'google', original_acquisition_medium: 'organic', email_visit_id: residential.submission_id } });
    expect(result.value.qualification_data.inquiry_question).toBe('What does the cash price include?');
    expect(result.value.qualification_data.form_kind).toBe('offer_request');
    expect(result.value.attribution).toEqual(expect.objectContaining({ source: 'email', email_visit_id: residential.submission_id, original_acquisition_source: 'google' }));
  });

  test('drops private paths, strips referrer secrets, and rejects UUID suffixes', () => {
    const result = controller.validate({ ...residential, attribution: { landing_page: '/dashboard/customer', organic_landing_page: '/blog/pge?email=secret@example.invalid', submitted_from: '/api/private', referrer: 'https://www.google.com/search?q=private', utm_source: { email: 'private' } } });
    expect(result.value.attribution).toEqual({ organic_landing_page: '/blog/pge', referrer: 'www.google.com', traffic_channel: 'organic_google' });
    expect(controller.validate({ ...residential, submission_id: residential.submission_id + 'suffix' })).toEqual({ error: 'submission_id must be a UUID', code: 'invalid_submission_id' });
    expect(controller.validate({ ...residential, segment: 'other' }).code).toBe('invalid_segment');
  });

  test('persists only a bounded sanitized page journey', () => {
    const result = controller.validate({ ...residential, attribution: {
      ...residential.attribution, utm_source: 'google', journey: { version: 1, scope: 'browser_tab', pages: [
        { path: '/blog/pge?email=private@example.com', viewed_at: '2026-09-09T22:00:00Z', contact: 'must not persist' },
        { path: '/dashboard/leads', viewed_at: '2026-09-09T22:01:00Z' },
        ...Array.from({ length: 35 }, () => ({ path: '/', viewed_at: '2026-09-09T22:02:00Z' })),
      ] },
    } });
    const journey = result.value.attribution.journey;
    expect(journey.pages[0]).toEqual({ path: '/blog/pge', viewed_at: '2026-09-09T22:00:00.000Z' });
    expect(journey.pages.length).toBeLessThanOrEqual(30);
    expect(journey.truncated).toBe(true);
    expect(JSON.stringify(journey)).not.toMatch(/private|dashboard|contact/);
    const bad = controller.validate({ ...residential, attribution: { journey: { version: 1, scope: 'browser_tab', pages: 'invalid' } } });
    expect(bad.error).toBeUndefined();
  });

  test('stores through the atomic service and acknowledges', async () => {
    service.createSubmission.mockResolvedValue({ submission_id: residential.submission_id, lead_id: '223e4567-e89b-42d3-a456-426614174000', segment: 'residential', replayed: false });
    const res = response();
    await controller.createIntake({ body: residential }, res, jest.fn());
    expect(service.createSubmission).toHaveBeenCalledWith(expect.objectContaining({
      phone: '+19515550187', segment: 'residential', is_test: true, address: '123 Main St, Temecula, CA 92591',
    }));
    expect(res.apiResponse).toHaveBeenCalledWith(201, 'Submission received', expect.objectContaining({ status: 'received', duplicate: false }));
    expect(service.recordRejection).not.toHaveBeenCalled();
  });

  test('returns the same minimal acknowledgment for an idempotent replay', async () => {
    service.createSubmission.mockResolvedValue({ submission_id: residential.submission_id, lead_id: '223e4567-e89b-42d3-a456-426614174000', segment: 'residential', replayed: true });
    const res = response();
    await controller.createIntake({ body: residential }, res, jest.fn());
    expect(res.apiResponse).toHaveBeenCalledWith(200, 'Submission already received', expect.objectContaining({ duplicate: true }));
  });

  test('an RPC contract refusal becomes a 400 with the same code, counted as rpc', async () => {
    service.createSubmission.mockRejectedValue({ statusCode: 400, code: 'zip_not_ca', message: 'x' });
    const res = response();
    const next = jest.fn();
    await controller.createIntake({ body: residential }, res, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.apiResponse).toHaveBeenCalledWith(400, contract.ERRORS.zip_not_ca, null, { code: 'zip_not_ca' });
    expect(service.recordRejection).toHaveBeenCalledWith(expect.objectContaining({ reason: 'zip_not_ca', layer: 'rpc' }));
  });

  test('other storage errors still go to the error handler', async () => {
    const error = { statusCode: 503, message: 'Submission could not be stored' };
    service.createSubmission.mockRejectedValue(error);
    const next = jest.fn();
    await controller.createIntake({ body: residential }, response(), next);
    expect(next).toHaveBeenCalledWith(error);
  });
});

describe('optional address backstop in createIntake', () => {
  beforeEach(() => jest.clearAllMocks());
  afterEach(() => addressValidation.enabled.mockReturnValue(false));

  test('off by default: no check, the lead is stored', async () => {
    service.createSubmission.mockResolvedValue({ submission_id: residential.submission_id, lead_id: 'l', segment: 'residential', replayed: false });
    await controller.createIntake({ body: residential }, response(), jest.fn());
    expect(addressValidation.check).not.toHaveBeenCalled();
    expect(service.createSubmission).toHaveBeenCalled();
  });

  test('a rejected address is a 400 with its code and is counted', async () => {
    addressValidation.enabled.mockReturnValue(true);
    addressValidation.check.mockResolvedValue({ outcome: 'rejected', code: 'address_unverified' });
    const res = response();
    await controller.createIntake({ body: residential }, res, jest.fn());
    expect(addressValidation.check).toHaveBeenCalledWith({ street: '123 Main St', city: 'Temecula', zip: '92591' }, { unitConfirmed: false });
    expect(res.apiResponse).toHaveBeenCalledWith(400, contract.ERRORS.address_unverified, null, { code: 'address_unverified' });
    expect(service.createSubmission).not.toHaveBeenCalled();
    expect(service.recordRejection).toHaveBeenCalledWith(expect.objectContaining({ reason: 'address_unverified', layer: 'api' }));
  });

  test('Google unavailable: the lead is accepted and nothing about the check is stored', async () => {
    addressValidation.enabled.mockReturnValue(true);
    addressValidation.check.mockResolvedValue({ outcome: 'unavailable' });
    service.createSubmission.mockResolvedValue({ submission_id: residential.submission_id, lead_id: 'l', segment: 'residential', replayed: false });
    await controller.createIntake({ body: residential }, response(), jest.fn());
    const stored = service.createSubmission.mock.calls[0][0];
    expect(stored).toEqual(controller.validate(residential).value);
  });

  test('commercial submissions are never checked', async () => {
    addressValidation.enabled.mockReturnValue(true);
    service.createSubmission.mockResolvedValue({ submission_id: residential.submission_id, lead_id: 'l', segment: 'commercial', replayed: false });
    await controller.createIntake({ body: commercial }, response(), jest.fn());
    expect(addressValidation.check).not.toHaveBeenCalled();
  });
});

describe('commercial intake (unchanged by the residential contract)', () => {
  beforeEach(() => jest.clearAllMocks());

  test('requires commercial fields and never substitutes residential screening', () => {
    const base = { ...commercial, qualification_data: { company_name: 'Acme' } };
    expect(controller.validate(base).error).toMatch(/property_type/);
    const valid = controller.validate({ ...base, qualification_data: {
      company_name: 'Acme', property_type: 'warehouse', property_control: 'owner', utility_provider: 'Community Choice Energy', project_timeline: '0-6 months', monthly_bill_range: '5000+',
    } });
    expect(valid.value.segment).toBe('commercial');
    expect(valid.value.qualification_data).toEqual(expect.objectContaining({ utility_provider: 'Other', utility_provider_other: 'Community Choice Energy' }));
    expect(valid.value.qualification_data).not.toHaveProperty('credit_score');
    expect(valid.value.qualification_data).not.toHaveProperty('lead_contract_version');
  });

  test('accepts location keys and a malformed ZIP is recorded, not rejected', () => {
    const result = controller.validate({ ...commercial, qualification_data: { ...commercial.qualification_data, service_zip: '93301', city: 'Bakersfield', derived_utility: 'PG&E', derived_from: 'zip-seed-table' } });
    expect(result.error).toBeUndefined();
    expect(result.value.qualification_data).toEqual(expect.objectContaining({ service_zip: '93301', city: 'Bakersfield', derived_utility: 'PG&E' }));
    for (const zip of ['9330', '10001']) {
      expect(controller.validate({ ...commercial, qualification_data: { ...commercial.qualification_data, service_zip: zip } }).value.qualification_data.service_zip).toBe(zip);
    }
  });

  test('stores a visitor-selected expansion market and keeps the bill amount', () => {
    const result = controller.validate({ ...commercial, qualification_data: { ...commercial.qualification_data, service_market: 'md', service_zip: '20850', bill_amount: 4200.4 } });
    expect(result.value.qualification_data).toEqual(expect.objectContaining({ service_market: 'MD', territory_resolution: 'visitor_selected_zip_validated', bill_amount: 4200 }));
    expect(controller.validate({ ...commercial, qualification_data: { ...commercial.qualification_data, service_market: 'TX' } }).error).toMatch(/service_market/);
  });

  test('refuses a commercial lead without a street address', () => {
    for (const address of [undefined, '', 'Temecula', '92591']) {
      expect(controller.validate({ ...commercial, contact: { ...commercial.contact, address } }).error).toBe('contact.address must be a street address (house number and street)');
    }
  });

  test('commercial errors carry no contract code and are not counted', async () => {
    const res = response();
    await controller.createIntake({ body: { ...commercial, qualification_data: { company_name: 'Acme' } } }, res, jest.fn());
    expect(res.apiResponse).toHaveBeenCalledWith(400, expect.stringMatching(/property_type/));
    expect(service.recordRejection).not.toHaveBeenCalled();
  });

  test('commercial attribution whitelist is unchanged (no traffic_channel added)', () => {
    const result = controller.validate({ ...commercial, attribution: { landing_page: '/commercial-solar', traffic_channel: 'paid', initial_referrer: 'https://www.google.com/' } });
    expect(result.value.attribution).toEqual({ landing_page: '/commercial-solar' });
  });
});
