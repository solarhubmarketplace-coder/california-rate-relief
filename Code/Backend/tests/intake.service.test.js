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
});
