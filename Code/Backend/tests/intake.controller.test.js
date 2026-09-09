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
