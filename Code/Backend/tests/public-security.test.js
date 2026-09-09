const mockUpdateConsentStatus = jest.fn();
jest.mock('../src/services/lead.service', () => ({ updateConsentStatus: mockUpdateConsentStatus }));
const leadController = require('../src/controllers/lead.controller');

describe('public compatibility security', () => {
  beforeEach(() => jest.clearAllMocks());
  test('public consent route accepts opt-out and returns no lead record', async () => {
    mockUpdateConsentStatus.mockResolvedValue({ id: 'private-lead', phone: '+15555550123', status: 'declined' });
    const res = { apiResponse: jest.fn() };
    await leadController.publicOptOut({ params: { leadId: 'lead-id' }, body: { status: 'opted_out' } }, res, jest.fn());
    expect(res.apiResponse).toHaveBeenCalledWith(200, 'Consent updated successfully', { status: 'opted_out' });
  });
  test('public consent route rejects opt-in', async () => {
    const res = { apiResponse: jest.fn() };
    await leadController.publicOptOut({ params: { leadId: 'lead-id' }, body: { status: 'opted_in' } }, res, jest.fn());
    expect(mockUpdateConsentStatus).not.toHaveBeenCalled();
    expect(res.apiResponse).toHaveBeenCalledWith(400, expect.stringContaining('Only opted_out'));
  });
});
