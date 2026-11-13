jest.mock('../src/services/intake.service', () => ({ createSubmission: jest.fn(), recordEmailVisit: jest.fn(), recordRejection: jest.fn() }));
const fs = require('fs');
const path = require('path');
const service = require('../src/services/intake.service');
const controller = require('../src/controllers/intake.controller');

function response() {
  return { apiResponse: jest.fn((status, message, data, error) => ({ status, message, data, error })) };
}

describe('retired anonymous POST /api/leads', () => {
  beforeEach(() => jest.clearAllMocks());

  test('an anonymous caller gets 410 and the refusal is counted without personal data', () => {
    const res = response();
    const next = jest.fn();
    controller.legacyLeadsGate({ headers: {}, body: { name: 'Test', phone: '9515550187', address: '123 Main St' } }, res, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.apiResponse).toHaveBeenCalledWith(410, 'This endpoint has been retired. Submit leads to /api/intake.', null, { code: 'legacy_route_retired' });
    expect(service.recordRejection).toHaveBeenCalledWith({ reason: 'legacy_route_retired', landing_page: 'unknown', form_kind: 'legacy_api_leads', layer: 'api' });
    expect(service.createSubmission).not.toHaveBeenCalled();
  });

  test('a body cannot smuggle a homeowner lead through any more', () => {
    const res = response();
    controller.legacyLeadsGate({ headers: { authorization: 'Basic abc' }, body: { homeowner: true } }, res, jest.fn());
    expect(res.apiResponse).toHaveBeenCalledWith(410, expect.any(String), null, { code: 'legacy_route_retired' });
  });

  test('a staff Bearer token falls through to requireStaff and the staff route', () => {
    const res = response();
    const next = jest.fn();
    controller.legacyLeadsGate({ headers: { authorization: 'Bearer x' } }, res, next);
    expect(next).toHaveBeenCalledWith();
    expect(res.apiResponse).not.toHaveBeenCalled();
    expect(service.recordRejection).not.toHaveBeenCalled();
  });

  test('app.js mounts the gate before requireStaff and no longer exposes the legacy translator', () => {
    const app = fs.readFileSync(path.join(__dirname, '../src/app.js'), 'utf8');
    const gate = app.indexOf("app.post('/api/leads', intakeController.legacyLeadsGate)");
    const staff = app.indexOf("app.use('/api', requireStaff)");
    expect(gate).toBeGreaterThan(-1);
    expect(staff).toBeGreaterThan(gate);
    expect(app).not.toContain('createLegacyIntake');
    expect(controller.createLegacyIntake).toBeUndefined();
  });
});
