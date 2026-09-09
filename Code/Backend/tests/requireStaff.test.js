const mockGetUser = jest.fn();
const mockMaybeSingle = jest.fn();
const mockEq = jest.fn().mockReturnThis();
const mockSelect = jest.fn().mockReturnThis();
const mockFrom = jest.fn(() => ({ select: mockSelect, eq: mockEq, maybeSingle: mockMaybeSingle }));
jest.mock('../src/lib/supabase', () => ({ supabaseAdmin: { auth: { getUser: mockGetUser }, from: mockFrom } }));
const { requireStaff } = require('../src/middleware/requireStaff');

function res() { return { apiResponse: jest.fn() }; }

describe('requireStaff', () => {
  beforeEach(() => jest.clearAllMocks());
  test('rejects a missing bearer token', async () => {
    const response = res(); await requireStaff({ headers: {} }, response, jest.fn());
    expect(response.apiResponse).toHaveBeenCalledWith(401, 'Authentication required');
  });
  test('rejects a valid Supabase user absent from the private staff table', async () => {
    mockGetUser.mockResolvedValue({ data: { user: { id: 'user-1', email: 'person@example.com' } }, error: null });
    mockMaybeSingle.mockResolvedValue({ data: null, error: null });
    const response = res(); await requireStaff({ headers: { authorization: 'Bearer verified-token' } }, response, jest.fn());
    expect(response.apiResponse).toHaveBeenCalledWith(403, 'Staff access required');
  });
  test('allows a verified active staff UUID', async () => {
    mockGetUser.mockResolvedValue({ data: { user: { id: 'user-1', email: 'owner@example.com' } }, error: null });
    mockMaybeSingle.mockResolvedValue({ data: { user_id: 'user-1' }, error: null });
    const next = jest.fn(); const req = { headers: { authorization: 'Bearer verified-token' } };
    await requireStaff(req, res(), next);
    expect(next).toHaveBeenCalledTimes(1); expect(req.staffUser.id).toBe('user-1');
  });
});
