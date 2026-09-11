jest.mock('../src/services/lead.service', () => ({createLead:jest.fn()}));
const service = require('../src/services/lead.service');
const controller = require('../src/controllers/lead.controller');
test('reports an existing contact update as 200 without promising a call', async () => {
  const lead = {id:'existing',duplicate:true,_retriggered:false};
  service.createLead.mockResolvedValue(lead);
  const res = {apiResponse:jest.fn()};
  await controller.ingestLead({body:{phone:'+15555550101'}},res,jest.fn());
  expect(res.apiResponse).toHaveBeenCalledWith(200,'Existing lead updated',lead);
});
