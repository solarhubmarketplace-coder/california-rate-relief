const crypto = require('crypto');
const address = require('../src/services/address-validation.service');

const input = { street: '123 Main St', city: 'Temecula', zip: '92591' };
const fixture = () => ({
  verdict: { addressComplete: true, validationGranularity: 'PREMISE', possibleNextAction: 'ACCEPT' },
  address: { postalAddress: { addressLines: ['123 Main St'], locality: 'Temecula', administrativeArea: 'CA', postalCode: '92591', regionCode: 'US' }, addressComponents: [] },
  uspsData: { dpvConfirmation: 'Y' },
});
const ok = (result) => jest.fn().mockResolvedValue({ ok: true, json: async () => ({ result }) });

describe('optional Google Address Validation backstop', () => {
  let info;
  beforeEach(() => {
    process.env.GOOGLE_ADDRESS_VALIDATION_API_KEY = 'unit-test-placeholder';
    info = jest.spyOn(console, 'info').mockImplementation(() => {});
  });
  afterEach(() => {
    delete process.env.GOOGLE_ADDRESS_VALIDATION_API_KEY;
    info.mockRestore();
  });

  test('disabled without a key: no request is made', async () => {
    delete process.env.GOOGLE_ADDRESS_VALIDATION_API_KEY;
    const fetchImpl = jest.fn();
    expect(address.enabled()).toBe(false);
    await expect(address.check(input, { fetchImpl })).resolves.toEqual({ outcome: 'disabled' });
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  test('a premise-level USPS match is accepted', async () => {
    const fetchImpl = ok(fixture());
    await expect(address.check({ ...input, street: '1 Accept St' }, { fetchImpl })).resolves.toEqual({ outcome: 'ok' });
    const body = JSON.parse(fetchImpl.mock.calls[0][1].body);
    expect(body.enableUspsCass).toBe(true);
    expect(body.address.administrativeArea).toBe('CA');
  });

  test('a rejected verdict is returned as its code', async () => {
    const r = fixture(); r.verdict.addressComplete = false;
    await expect(address.check({ ...input, street: '2 Reject St' }, { fetchImpl: ok(r) })).resolves.toEqual({ outcome: 'rejected', code: 'address_unverified' });
  });

  test('PO box -> po_box', () => {
    const r = fixture(); r.metadata = { poBox: true };
    expect(address.interpret(r)).toBe('po_box');
    const r2 = fixture(); r2.uspsData.poBoxOnlyPostalCode = true;
    expect(address.interpret(r2)).toBe('po_box');
  });

  test('a subpremise needs the detached-home answer', () => {
    const r = fixture(); r.verdict.possibleNextAction = 'CONFIRM_ADD_SUBPREMISES'; r.uspsData.dpvConfirmation = 'D';
    expect(address.interpret(r)).toBe('unit_unconfirmed');
    expect(address.interpret(r, { unitConfirmed: true })).toBeNull();
    const r2 = fixture(); r2.address.addressComponents = [{ componentType: 'subpremise', confirmationLevel: 'CONFIRMED' }];
    expect(address.interpret(r2)).toBe('unit_unconfirmed');
  });

  test.each(['ROUTE', 'PREMISE_PROXIMITY', 'OTHER'])('coarse match %s -> address_unverified', (granularity) => {
    const r = fixture(); r.verdict.validationGranularity = granularity;
    expect(address.interpret(r)).toBe('address_unverified');
  });

  test.each(['N', '', 'D', 'S'])('DPV %p without a confirmed unit -> address_unverified', (dpv) => {
    const r = fixture(); r.uspsData.dpvConfirmation = dpv;
    expect(address.interpret(r)).toBe('address_unverified');
  });

  test('incomplete, unconfirmed, unresolved or suspicious -> address_unverified', () => {
    for (const key of ['missingComponentTypes', 'unconfirmedComponentTypes', 'unresolvedTokens']) {
      const r = fixture(); r.address[key] = ['street_number'];
      expect(address.interpret(r)).toBe('address_unverified');
    }
    const s = fixture(); s.address.addressComponents = [{ componentType: 'route', confirmationLevel: 'UNCONFIRMED_AND_SUSPICIOUS' }];
    expect(address.interpret(s)).toBe('address_unverified');
    expect(address.interpret(null)).toBe('address_unverified');
  });

  test('timeout, network error and 5xx/403 accept the lead and log without the address', async () => {
    const fetchers = [
      jest.fn().mockRejectedValue(new Error('The operation was aborted due to timeout')),
      jest.fn().mockResolvedValue({ ok: false, status: 503 }),
      jest.fn().mockResolvedValue({ ok: false, status: 403 }),
    ];
    for (const [i, fetchImpl] of fetchers.entries()) {
      await expect(address.check({ ...input, street: `${10 + i} Outage St` }, { fetchImpl })).resolves.toEqual({ outcome: 'unavailable' });
    }
    const logged = info.mock.calls.map((c) => c[0]).join('\n');
    expect(logged).toContain('crr_address_check_unavailable');
    expect(logged).not.toMatch(/Outage|Temecula|92591/);
  });

  test('an exhausted allowance accepts without a request', async () => {
    const now = Date.now();
    const norm = address.normalizeAddress({ ...input, street: '9 Burst St', state: 'CA' });
    const key = crypto.createHash('sha256').update(JSON.stringify(norm).toLowerCase()).digest('hex');
    for (let i = 0; i < 10; i++) address.consumeAllowance(key, now);
    const fetchImpl = jest.fn();
    await expect(address.check({ ...input, street: '9 Burst St' }, { fetchImpl })).resolves.toEqual({ outcome: 'unavailable' });
    expect(fetchImpl).not.toHaveBeenCalled();
  });
});
