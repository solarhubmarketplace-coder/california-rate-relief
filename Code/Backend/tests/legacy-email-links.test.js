jest.mock('../src/services/lead.service',()=>({upgradeLeadToHot:jest.fn()}));
const leadService=require('../src/services/lead.service');
const tracking=require('../src/controllers/tracking.controller');
const leads=require('../src/controllers/lead.controller');
describe('Legacy email GET links',()=>{
 beforeEach(()=>jest.clearAllMocks());
 for(const [name,handler] of [['tracking',tracking.handleTrackingClick],['conversion',leads.handleLeadConversionClick]]){
  test(`${name} redirects scanners without creating a request or leaking identity`,async()=>{
   const req={params:{token:'private-token',leadId:'private-customer-id'}};
   const res={set:jest.fn(),redirect:jest.fn()};
   await handler(req,res,jest.fn());
   expect(leadService.upgradeLeadToHot).not.toHaveBeenCalled();
   expect(res.set).toHaveBeenCalledWith('Referrer-Policy','no-referrer');
   expect(res.redirect).toHaveBeenCalledWith(303,'https://ratereliefca.com/?utm_source=crr&utm_medium=email&utm_campaign=legacy_link_review');
  });
 }
});
