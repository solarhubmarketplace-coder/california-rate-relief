const mockRpc = jest.fn();
jest.mock('../src/lib/supabase', () => ({ supabaseAdmin: { rpc: mockRpc } }));
const service = require('../src/services/intake.service');

describe('atomic intake service', () => {
  beforeEach(() => jest.clearAllMocks());
  test('maps a payload-fingerprint mismatch to conflict', async () => {
    mockRpc.mockResolvedValue({ data: null, error: { code: '23505' } });
    await expect(service.createSubmission({ submission_id: 'id', segment: 'residential' }))
      .rejects.toEqual(expect.objectContaining({ statusCode: 409 }));
  });
  test('does not acknowledge a missing durable RPC result', async () => {
    mockRpc.mockResolvedValue({ data: null, error: null });
    await expect(service.createSubmission({ submission_id: 'id', segment: 'residential' }))
      .rejects.toEqual(expect.objectContaining({ statusCode: 503 }));
  });
  test('maps an RPC contract refusal (migration 014) to a 400 with its code', async () => {
    mockRpc.mockResolvedValue({ data: null, error: { code: '22023', message: 'crr_contract:zip_not_ca' } });
    await expect(service.createSubmission({ submission_id: 'id', segment: 'residential' }))
      .rejects.toEqual(expect.objectContaining({ statusCode: 400, code: 'zip_not_ca', message: 'Enter the 5-digit California ZIP code of the home.' }));
  });
  test('any other 22023 is still a 503', async () => {
    mockRpc.mockResolvedValue({ data: null, error: { code: '22023', message: 'invalid phone' } });
    await expect(service.createSubmission({ submission_id: 'id', segment: 'residential' }))
      .rejects.toEqual(expect.objectContaining({ statusCode: 503 }));
  });
  test('recordRejection logs one JSON line, calls the counter RPC and swallows its errors', async () => {
    const info = jest.spyOn(console, 'info').mockImplementation(() => {});
    mockRpc.mockRejectedValue(new Error('function record_crr_intake_rejection does not exist'));
    await expect(service.recordRejection({ reason: 'renter', landing_page: '/blog/x', form_kind: 'solar_inquiry', layer: 'api' })).resolves.toBeUndefined();
    expect(info).toHaveBeenCalledTimes(1);
    expect(JSON.parse(info.mock.calls[0][0])).toEqual({ evt: 'crr_intake_reject', reason: 'renter', form_kind: 'solar_inquiry', landing_page: '/blog/x', layer: 'api' });
    expect(mockRpc).toHaveBeenCalledWith('record_crr_intake_rejection', { p_reason: 'renter', p_landing_page: '/blog/x', p_form_kind: 'solar_inquiry', p_layer: 'api' });
    mockRpc.mockResolvedValue({ data: null, error: { code: 'PGRST202' } });
    await expect(service.recordRejection({ reason: 'Bad Reason!', landing_page: 'https://x', form_kind: null, layer: 'x' })).resolves.toBeUndefined();
    expect(JSON.parse(info.mock.calls[1][0])).toEqual({ evt: 'crr_intake_reject', reason: 'other', form_kind: 'unknown', landing_page: 'unknown', layer: 'api' });
    info.mockRestore();
  });
});
