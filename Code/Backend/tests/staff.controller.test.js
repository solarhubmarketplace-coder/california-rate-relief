jest.mock('../src/services/staff.service', () => ({ recordReferral: jest.fn(), updateReferral: jest.fn(), listSubmissions: jest.fn(), classifySubmission: jest.fn(), listEmailOfferTasks: jest.fn(), updateEmailOfferTask: jest.fn() }));
const service = require('../src/services/staff.service');
const controller = require('../src/controllers/staff.controller');

describe('manual partner outcomes', () => {
  test('keeps unknown qualification as null and records by stable IDs', async () => {
    const body = { lead_id: '123e4567-e89b-42d3-a456-426614174000', submission_id: '223e4567-e89b-42d3-a456-426614174000', partner_name: 'Partner A', forwarded_at: '2026-09-09T20:00:00Z', partner_qualified: null };
    service.recordReferral.mockResolvedValue({ id: 'record-1', ...body });
    const res = { apiResponse: jest.fn() }; const next = jest.fn();
    await controller.recordReferral({ body, staffUser: { id: 'staff-1' } }, res, next);
    expect(service.recordReferral).toHaveBeenCalledWith(expect.objectContaining({ partner_qualified: null }), { id: 'staff-1' });
    expect(next).not.toHaveBeenCalled();
  });
  test('rejects sale/appointment dates that are not dates', () => {
    expect(controller.validateOutcome({ sale_at: 'not-a-date' })).toMatch(/sale_at/);
  });
  test('records staff-only test/spam classification by submission ID', async () => {
    const id = '223e4567-e89b-42d3-a456-426614174000';
    service.classifySubmission.mockResolvedValue({ submission_id: id, is_test: false, is_spam: true });
    const res = { apiResponse: jest.fn() }; const next = jest.fn();
    await controller.classifySubmission({ params: { id }, body: { is_spam: true }, staffUser: { id: 'staff-1' } }, res, next);
    expect(service.classifySubmission).toHaveBeenCalledWith(id, { is_spam: true }, { id: 'staff-1' });
    expect(next).not.toHaveBeenCalled();
  });
  test('lists recent submissions for classification', async () => {
    service.listSubmissions.mockResolvedValue([{ submission_id: 'submission-1', is_spam: false }]);
    const res = { apiResponse: jest.fn() };
    await controller.listSubmissions({ query: { from: '2026-09-01' } }, res, jest.fn());
    expect(service.listSubmissions).toHaveBeenCalledWith({ from: '2026-09-01' });
    expect(res.apiResponse).toHaveBeenCalledWith(200, 'Submissions retrieved', expect.any(Array));
  });
  test('rejects non-boolean classification values', async () => {
    const res = { apiResponse: jest.fn() };
    await controller.classifySubmission({ params: { id: '223e4567-e89b-42d3-a456-426614174000' }, body: { is_spam: 'yes' } }, res, jest.fn());
    expect(res.apiResponse).toHaveBeenCalledWith(400, 'is_spam must be boolean');
  });
  test('lists and updates protected email offer tasks', async () => {
    const id = '223e4567-e89b-42d3-a456-426614174000';
    service.listEmailOfferTasks.mockResolvedValue([{ id, status: 'open' }]);
    service.updateEmailOfferTask.mockResolvedValue({ id, status: 'completed' });
    const listRes = { apiResponse: jest.fn() };
    await controller.listEmailOfferTasks({ query: { status: 'open' } }, listRes, jest.fn());
    expect(service.listEmailOfferTasks).toHaveBeenCalledWith('open');
    const updateRes = { apiResponse: jest.fn() };
    await controller.updateEmailOfferTask({ params: { id }, body: { status: 'completed' } }, updateRes, jest.fn());
    expect(service.updateEmailOfferTask).toHaveBeenCalledWith(id, 'completed');
  });
});
