jest.mock('../src/services/staff.service', () => ({
  growthScorecard: jest.fn(),
  recordReceipt: jest.fn(),
}));
const service = require('../src/services/staff.service');
const controller = require('../src/controllers/staff.controller');
const id = '223e4567-e89b-42d3-a456-426614174000';
const staffUser = { id: 'staff-fixture' };
beforeEach(() => jest.clearAllMocks());
test.each([
  {},
  { from: 'bad', to: '2026-10-01' },
  { from: '2026-10-01', to: '2026-09-01' },
])('rejects an invalid interval: %j', async (query) => {
  const res = { apiResponse: jest.fn() };
  await controller.growthScorecard({ query }, res, jest.fn());
  expect(res.apiResponse.mock.calls[0][0]).toBe(400);
  expect(service.growthScorecard).not.toHaveBeenCalled();
});
test('passes the explicit cohort interval through and does not convert a database error to zero', async () => {
  const next = jest.fn(),
    res = { apiResponse: jest.fn() },
    query = { from: '2026-09-01T07:00:00Z', to: '2026-10-01T07:00:00Z' };
  const error = new Error('migration unavailable');
  service.growthScorecard.mockRejectedValueOnce(error);
  await controller.growthScorecard({ query }, res, next);
  expect(next).toHaveBeenCalledWith(error);
  expect(res.apiResponse).not.toHaveBeenCalled();
});
test.each([
  { evidence_reference: 'x', receipt_at: '2026-01-01' },
  { evidence_reference: 'inbox-id', receipt_at: 'bad' },
  { evidence_reference: 'inbox-id', receipt_at: '2100-01-01' },
  { evidence_reference: 'x'.repeat(301), receipt_at: '2026-01-01' },
])('rejects invalid inbox evidence: %j', async (body) => {
  const res = { apiResponse: jest.fn() };
  await controller.recordReceipt(
    { params: { id }, body, staffUser },
    res,
    jest.fn(),
  );
  expect(res.apiResponse.mock.calls[0][0]).toBe(400);
  expect(service.recordReceipt).not.toHaveBeenCalled();
});
test('binds receipt evidence to the authenticated staff identity and ignores payload destination', async () => {
  service.recordReceipt.mockResolvedValue({ id: 'evidence' });
  const res = { apiResponse: jest.fn() };
  await controller.recordReceipt(
    {
      params: { id },
      body: {
        evidence_reference: ' inbox-message ',
        receipt_at: '2026-01-01T12:00:00Z',
        destination: 'attacker@example.invalid',
        recorded_by: 'forged',
      },
      staffUser,
    },
    res,
    jest.fn(),
  );
  expect(service.recordReceipt).toHaveBeenCalledWith(
    id,
    {
      evidence_reference: 'inbox-message',
      receipt_at: '2026-01-01T12:00:00.000Z',
    },
    staffUser,
  );
  expect(res.apiResponse).toHaveBeenCalledWith(
    201,
    'Inbox receipt evidence recorded',
    { id: 'evidence' },
  );
});
