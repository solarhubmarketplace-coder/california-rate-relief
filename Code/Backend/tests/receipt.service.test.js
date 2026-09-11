const mockInsert = jest.fn();
const mockSingle = jest.fn();
jest.mock('../src/lib/supabase', () => ({supabaseAdmin:{from:jest.fn(()=>({insert:mockInsert}))}}));
const service = require('../src/services/staff.service');
beforeEach(() => {
  jest.clearAllMocks();
  mockInsert.mockReturnValue({select:jest.fn(()=>({single:mockSingle}))});
});
test.each([['23505',409],['23503',404],['23514',400],['other',500]])('maps receipt database error %s to %s', async (code,statusCode) => {
  mockSingle.mockResolvedValue({error:{code,message:'private database detail'}});
  await expect(service.recordReceipt('submission',{evidence_reference:'message',receipt_at:'2026-01-01T00:00:00Z'},{id:'staff'})).rejects.toEqual(expect.objectContaining({code,statusCode}));
});
test('binds destination and recorder independently of evidence payload', async () => {
  mockSingle.mockResolvedValue({data:{id:'receipt'}});
  await service.recordReceipt('submission',{evidence_reference:'message',receipt_at:'2026-01-01T00:00:00Z',destination:'forged',recorded_by:'forged'},{id:'staff'});
  expect(mockInsert).toHaveBeenCalledWith({submission_id:'submission',destination:'solarhubmarketplace@gmail.com',evidence_reference:'message',receipt_at:'2026-01-01T00:00:00Z',recorded_by:'staff'});
});
