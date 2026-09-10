jest.mock('../src/services/intake.service', () => ({ createSubmission: jest.fn() }));
const service = require('../src/services/intake.service');
const controller = require('../src/controllers/intake.controller');

function response() {
  return { apiResponse: jest.fn((status, message, data) => ({ status, message, data })) };
}

const residential = {
  submission_id: '123e4567-e89b-42d3-a456-426614174000', segment: 'residential',
  contact: { name: 'Test Person', phone: '(951) 555-0187', email: 'test@example.com' },
  qualification_data: { homeowner: true, utility_provider: 'sce', credit_score: 'yes', bill_amount: 275 },
  attribution: { landing_page: '/blog/why-is-my-sce-bill-so-high', submitted_from: '/' }, test: true,
};

describe('public intake controller', () => {
  test('persists only a bounded sanitized page journey, retaining existing attribution', () => {
    const result = controller.validate({ ...residential, attribution: {
      ...residential.attribution, utm_source: 'google', journey: { version: 1, scope: 'browser_tab', pages: [
        { path: '/blog/pge?email=private@example.com', viewed_at: '2026-09-09T22:00:00Z', contact: 'must not persist' },
        { path: '/dashboard/leads', viewed_at: '2026-09-09T22:01:00Z' },
        { path: '//external.com', viewed_at: '2026-09-09T22:01:00Z' },
        { path: '/', viewed_at: 'bad-date' },
        ...Array.from({ length: 35 }, () => ({ path: '/', viewed_at: '2026-09-09T22:02:00Z' })),
      ] },
    } });
    expect(result.value.attribution.landing_page).toBe(residential.attribution.landing_page);
    expect(result.value.attribution.utm_source).toBe('google');
    const journey = result.value.attribution.journey;
    expect(journey.pages[0]).toEqual({ path: '/blog/pge', viewed_at: '2026-09-09T22:00:00.000Z' });
    expect(journey.pages.length).toBeLessThanOrEqual(30);
    expect(journey.truncated).toBe(true);
    expect(JSON.stringify(journey)).not.toMatch(/private|external|dashboard|contact/);
  });

  test('bad optional tracking does not prevent a valid inquiry', () => {
    const result = controller.validate({ ...residential, attribution: { journey: { version: 1, scope: 'browser_tab', pages: 'invalid' } } });
    expect(result.error).toBeUndefined();
    expect(result.value.attribution.journey).toBeUndefined();
  });
  beforeEach(() => jest.clearAllMocks());

  test('normalizes and stores a residential submission through the atomic service', async () => {
    service.createSubmission.mockResolvedValue({ submission_id: residential.submission_id, lead_id: '223e4567-e89b-42d3-a456-426614174000', segment: 'residential', replayed: false });
    const res = response();
    await controller.createIntake({ body: residential }, res, jest.fn());
    expect(service.createSubmission).toHaveBeenCalledWith(expect.objectContaining({
      phone: '+19515550187', segment: 'residential', is_test: true,
      qualification_data: expect.objectContaining({ utility_provider: 'SCE', credit_score: 'above_650' }),
    }));
    expect(res.apiResponse).toHaveBeenCalledWith(201, 'Submission received', expect.objectContaining({ status: 'received', duplicate: false }));
  });

  test('returns the same minimal acknowledgment for an idempotent replay', async () => {
    service.createSubmission.mockResolvedValue({ submission_id: residential.submission_id, lead_id: '223e4567-e89b-42d3-a456-426614174000', segment: 'residential', replayed: true });
    const res = response();
    await controller.createIntake({ body: residential }, res, jest.fn());
    expect(res.apiResponse).toHaveBeenCalledWith(200, 'Submission already received', expect.objectContaining({ duplicate: true }));
  });

  test('rejects residential intake without property control', () => {
    const result = controller.validate({ ...residential, qualification_data: { utility_provider: 'sce' } });
    expect(result.error).toMatch(/homeowner/);
  });

  test('requires commercial fields and never substitutes residential screening', () => {
    const base = { ...residential, segment: 'commercial', qualification_data: { company_name: 'Acme' } };
    expect(controller.validate(base).error).toMatch(/property_type/);
    const valid = controller.validate({ ...base, qualification_data: {
      company_name: 'Acme', property_type: 'warehouse', property_control: 'owner', utility_provider: 'Community Choice Energy', project_timeline: '0-6 months', monthly_bill_range: '5000+',
    } });
    expect(valid.value.segment).toBe('commercial');
    expect(valid.value.qualification_data).toEqual(expect.objectContaining({ utility_provider: 'Other', utility_provider_other: 'Community Choice Energy' }));
    expect(valid.value.qualification_data).not.toHaveProperty('credit_score');
  });

  test('accepts the ZIP, city, and ZIP-derived territory without touching the visitor answer', () => {
    const result = controller.validate({ ...residential, qualification_data: {
      ...residential.qualification_data,
      service_zip: '90012', city: 'Los Angeles', county: 'Los Angeles',
      derived_utility: 'LADWP', derived_cca: null, derived_county: 'Los Angeles',
      derived_from: 'zip-seed-table', derived_utility_matches_selection: false,
    } });
    expect(result.error).toBeUndefined();
    // The visitor picked SCE and the ZIP says LADWP. Both survive: a mismatch is
    // a review signal, never a silent overwrite of what the homeowner answered.
    expect(result.value.qualification_data.utility_provider).toBe('SCE');
    expect(result.value.qualification_data.derived_utility).toBe('LADWP');
    expect(result.value.qualification_data.derived_utility_matches_selection).toBe(false);
    expect(result.value.qualification_data.service_zip).toBe('90012');
    expect(result.value.qualification_data.city).toBe('Los Angeles');
    expect(result.value.qualification_data.derived_from).toBe('zip-seed-table');
  });

  test('accepts location keys on commercial intake too', () => {
    const result = controller.validate({ ...residential, segment: 'commercial', qualification_data: {
      company_name: 'Acme', property_type: 'warehouse', property_control: 'owner',
      utility_provider: 'PG&E', project_timeline: '0_3_months',
      service_zip: '93301', city: 'Bakersfield', derived_utility: 'PG&E', derived_from: 'zip-seed-table',
    } });
    expect(result.error).toBeUndefined();
    expect(result.value.qualification_data).toEqual(expect.objectContaining({
      service_zip: '93301', city: 'Bakersfield', derived_utility: 'PG&E',
    }));
  });

  test('a malformed or out-of-state ZIP is recorded, not rejected', () => {
    for (const zip of ['9330', '10001', 'not-a-zip']) {
      const result = controller.validate({ ...residential, qualification_data: {
        ...residential.qualification_data, service_zip: zip, city: 'Somewhere',
      } });
      expect(result.error).toBeUndefined();
      expect(result.value.qualification_data.service_zip).toBe(zip);
    }
  });

  test('folds a legacy `zip` key into service_zip and drops unlisted keys', () => {
    const result = controller.validate({ ...residential, qualification_data: {
      ...residential.qualification_data, zip: '92101', city: 'San Diego', ssn: '000-00-0000',
    } });
    expect(result.value.qualification_data.service_zip).toBe('92101');
    expect(result.value.qualification_data).not.toHaveProperty('zip');
    expect(result.value.qualification_data).not.toHaveProperty('ssn');
    // An explicit service_zip always wins over the alias.
    const explicit = controller.validate({ ...residential, qualification_data: {
      ...residential.qualification_data, zip: '92101', service_zip: '93301',
    } });
    expect(explicit.value.qualification_data.service_zip).toBe('93301');
  });

  test('gives legacy retries a deterministic daily submission ID', () => {
    const flat = { phone: '(951) 555-0187', email: 'test@example.com', utility_provider: 'sce', bill_amount: 275, landing_page: '/blog/sce' };
    const first = controller.legacySubmissionId(flat, new Date('2026-09-09T08:00:00Z'));
    expect(controller.legacySubmissionId(flat, new Date('2026-09-09T23:59:00Z'))).toBe(first);
    expect(controller.legacySubmissionId({ ...flat, bill_amount: 425 }, new Date('2026-09-09T08:00:00Z'))).not.toBe(first);
    expect(controller.legacySubmissionId(flat, new Date('2026-09-10T08:00:00Z'))).not.toBe(first);
  });

  test('accepts legacy scalar and bracket bill formats', () => {
    expect(controller.legacyBill(275)).toEqual({ amount: 275, range: null });
    expect(controller.legacyBill('$275')).toEqual({ amount: 275, range: null });
    expect(controller.legacyBill('351-500')).toEqual({ amount: 425, range: '351-500' });
    expect(controller.legacyBill('500+')).toEqual({ amount: 600, range: '500+' });
  });

  test('routes the legacy flat form through durable intake without outreach', async () => {
    service.createSubmission.mockResolvedValue({ submission_id: residential.submission_id, lead_id: '223e4567-e89b-42d3-a456-426614174000', segment: 'residential', replayed: false });
    const res = response();
    await controller.createLegacyIntake({ body: {
      name: 'Test Person', phone: '(951) 555-0187', email: 'test@example.com',
      utility_provider: 'pge', credit_score: 'no', bill_amount: 275, landing_page: '/blog/pge',
    } }, res, jest.fn());
    expect(service.createSubmission).toHaveBeenCalledWith(expect.objectContaining({
      segment: 'residential', consent_status: 'pending',
      qualification_data: expect.objectContaining({ utility_provider: 'PG&E', credit_score: 'below_650' }),
    }));
    expect(res.apiResponse).toHaveBeenCalledWith(201, 'Submission received', expect.objectContaining({ id: expect.any(String) }));
  });
});
