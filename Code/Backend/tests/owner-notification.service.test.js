const mockRpc = jest.fn();
jest.mock('../src/lib/supabase', () => ({ supabaseAdmin: { rpc: mockRpc } }));
const mockSendEmail = jest.fn();
jest.mock('../src/services/email.service', () => ({ sendEmail: mockSendEmail }));
jest.mock('../src/config', () => ({
  OWNER_NOTIFICATION_EMAIL: 'owner@example.com', EMAIL_FROM: 'sender@example.com',
  OWNER_NOTIFICATION_STALE_MINUTES: 10, OWNER_NOTIFICATION_MAX_ATTEMPTS: 5,
  OWNER_NOTIFICATION_POLL_INTERVAL_MS: 15000, OWNER_NOTIFICATION_IDEMPOTENCY_WINDOW_HOURS: 24,
}));
const worker = require('../src/services/owner-notification.service');

const row = {
  id: 'outbox-1', submission_id: 'submission-1', lead_id: 'lead-1',
  provider_idempotency_key: 'crr-owner-submission-1',
  payload: { segment: 'residential', name: 'Test', phone: '+19515550187', is_test: true, qualification_data: { utility_provider: 'SCE', homeowner: true, credit_score: 'above_650', service_zip: '92591' }, attribution: { landing_page: '/blog/sce', source: 'organic_google', utm_campaign: 'utility' } },
};

describe('durable owner notification worker', () => {
  test('holds a success-shaped provider response without a message ID as unknown', async () => {
    mockRpc.mockResolvedValueOnce({data:[row]}).mockResolvedValueOnce({data:[{...row,destination:'owner@example.com',provider_subject:'fixture',provider_html:'frozen'}]}).mockResolvedValueOnce({data:null});
    mockSendEmail.mockResolvedValue({});
    await worker.processOne();
    expect(mockRpc.mock.calls.map(call=>call[0])).not.toContain('complete_owner_notification');
    expect(mockRpc).toHaveBeenLastCalledWith('fail_owner_notification',expect.objectContaining({p_ambiguous:true}));
  });
  test('carries calculator context, zero prices and original organic landing into the frozen owner message', async () => {
    const contextRow={...row,payload:{...row.payload,qualification_data:{...row.payload.qualification_data,calculator_version:'quote-input-v2',calculator_monthly_bill:300,calculator_battery_price:0,calculator_annual_bill_after:0,calculator_simple_payback:10,inquiry_topic:'San Diego comparison'},attribution:{...row.payload.attribution,acquisition_source:'google',acquisition_medium:'organic',organic_landing_page:'/blog/entry'}}};
    mockRpc.mockResolvedValueOnce({data:[contextRow]}).mockResolvedValueOnce({data:[{...contextRow,destination:'owner@example.com',provider_subject:'fixture',provider_html:'frozen'}]}).mockResolvedValueOnce({data:null});
    mockSendEmail.mockResolvedValue({id:'local-provider-id'});await worker.processOne();
    const html=mockRpc.mock.calls[1][1].p_provider_html;
    expect(html).toContain('/blog/entry');expect(html).toContain('San Diego comparison');expect(html).toContain('quote-input-v2');expect(html).toMatch(/input arithmetic/i);expect(html).toMatch(/Battery[\s\S]*>0</);
    // Review R3: the calculator figure is labelled informational and sits under the band.
    expect(html).not.toMatch(/before CRM rounding/);
    expect(html).toContain('Calculator monthly bill (informational; the qualifying answer is the bill band above) ($)');
  });
  test('includes the submitted path and page sequence in the owner notification', async () => {
    const journeyRow = { ...row, payload: { ...row.payload, attribution: { ...row.payload.attribution,
      submitted_from: '/', journey: { version: 1, scope: 'browser_tab', truncated: false, pages: [
        { path: '/blog/sce', viewed_at: '2026-09-09T22:00:00Z' },
        { path: '/', viewed_at: '2026-09-09T22:01:00Z' },
      ] },
    } } };
    mockRpc.mockResolvedValueOnce({ data: [journeyRow] })
      .mockResolvedValueOnce({ data: [{ ...journeyRow, destination: 'owner@example.com', provider_subject: 'subject', provider_html: 'frozen' }] })
      .mockResolvedValueOnce({ data: null });
    mockSendEmail.mockResolvedValue({ id: 'provider-journey' });
    await worker.processOne();
    const html = mockRpc.mock.calls[1][1].p_provider_html;
    expect(html).toContain('Pages visited in this tab');
    expect(html).toContain('/blog/sce (2026-09-09T22:00:00.000Z) → / (2026-09-09T22:01:00.000Z)');
    expect(html).toContain('Submitted from');
  });
  async function renderRow(payloadOverrides) {
    const r = { ...row, payload: { ...row.payload, ...payloadOverrides } };
    mockRpc.mockResolvedValueOnce({ data: [r] })
      .mockResolvedValueOnce({ data: [{ ...r, destination: 'owner@example.com', provider_subject: 'subject', provider_html: 'frozen' }] })
      .mockResolvedValueOnce({ data: null });
    mockSendEmail.mockResolvedValue({ id: 'provider-render' });
    await worker.processOne();
    return mockRpc.mock.calls[mockRpc.mock.calls.length - 2][1].p_provider_html;
  }
  test('shows the city and state the intake filled from the ZIP', async () => {
    const html = await renderRow({ address: '123 Main St, Patterson, CA 95363',
      qualification_data: { ...row.payload.qualification_data, service_zip: '95363', service_market: 'CA', derived_city: 'Patterson', derived_state: 'CA' } });
    expect(html).toMatch(/Address[\s\S]*123 Main St, Patterson, CA 95363[\s\S]*City[\s\S]*Patterson[\s\S]*State[\s\S]*>CA</);
  });
  test('a city the visitor typed wins over the ZIP lookup', async () => {
    const html = await renderRow({ qualification_data: { ...row.payload.qualification_data, city: 'Wildomar', derived_city: 'Lake Elsinore', derived_state: 'CA' } });
    expect(html).toMatch(/City<\/b><\/td><td[^>]*>Wildomar</);
    expect(html).not.toContain('Lake Elsinore');
  });
  test('UNIT FLAGGED appears only when the visitor confirmed a unit address', async () => {
    const flagged = await renderRow({ qualification_data: { ...row.payload.qualification_data, unit_flagged: true, unit_confirmed_detached: true } });
    expect(flagged).toMatch(/UNIT FLAGGED[\s\S]*YES - visitor confirmed a detached single-family home with sole rights to the roof/);
    const plain = await renderRow({ qualification_data: { ...row.payload.qualification_data, unit_flagged: false } });
    expect(plain).not.toContain('UNIT FLAGGED');
  });
  test('shows the bill band label, channel, click id, form and address entry', async () => {
    const html = await renderRow({
      qualification_data: { ...row.payload.qualification_data, monthly_bill_band: '350_499', bill_amount: 425, form_kind: 'solar_inquiry', address_source: 'places', places_status: 'active' },
      attribution: { ...row.payload.attribution, traffic_channel: 'organic_google', initial_referrer: 'https://www.google.com/', gclid: 'gclid-1', ga_client_id: '123.456', landing_page_type: 'blog' },
    });
    expect(html).toMatch(/Monthly bill<\/b><\/td><td[^>]*>\$350–\$499</);
    expect(html).toMatch(/Traffic channel[\s\S]*organic_google/);
    expect(html).toMatch(/Initial referrer[\s\S]*https:\/\/www\.google\.com\//);
    expect(html).toMatch(/Google click ID[\s\S]*gclid-1/);
    expect(html).toMatch(/GA client ID[\s\S]*123\.456/);
    expect(html).toMatch(/Landing page type[\s\S]*blog/);
    expect(html).toMatch(/Form<\/b><\/td><td[^>]*>solar_inquiry</);
    expect(html).toMatch(/Address entry[\s\S]*places \/ active/);
  });
  test('an older lead without a band still shows its amount', async () => {
    const html = await renderRow({ qualification_data: { ...row.payload.qualification_data, bill_amount: 275 } });
    expect(html).toMatch(/Monthly bill<\/b><\/td><td[^>]*>275</);
  });
  beforeEach(() => jest.clearAllMocks());
  test('claims, sends with the stable provider key, and records sent state', async () => {
    mockRpc.mockResolvedValueOnce({ data: [row], error: null })
      .mockResolvedValueOnce({ data: [{ ...row, destination: 'owner@example.com', provider_from: 'sender@example.com', provider_subject: 'frozen subject', provider_html: '<p>frozen</p>' }], error: null })
      .mockResolvedValueOnce({ data: null, error: null });
    mockSendEmail.mockResolvedValue({ id: 'provider-1' });
    await worker.processOne();
    expect(mockRpc).toHaveBeenNthCalledWith(2, 'prepare_owner_notification', expect.objectContaining({
      p_provider_subject: expect.stringContaining('[TEST]'),
      p_provider_html: expect.stringMatching(/Submission ID[\s\S]*submission-1[\s\S]*Homeowner[\s\S]*Credit[\s\S]*UTM campaign/),
    }));
    expect(mockSendEmail).toHaveBeenCalledWith('owner@example.com', 'frozen subject', '<p>frozen</p>', expect.objectContaining({ idempotencyKey: 'crr-owner-submission-1' }));
    expect(mockRpc).toHaveBeenLastCalledWith('complete_owner_notification', expect.objectContaining({ p_provider_message_id: 'provider-1' }));
  });
  test('holds a network/provider-acceptance ambiguity without blind retry', async () => {
    mockRpc.mockResolvedValueOnce({ data: [row], error: null })
      .mockResolvedValueOnce({ data: [{ ...row, destination: 'owner@example.com', provider_from: 'sender@example.com', provider_subject: 'subject', provider_html: '<p>body</p>' }], error: null })
      .mockResolvedValueOnce({ data: null, error: null });
    mockSendEmail.mockRejectedValue(new Error('socket closed after request'));
    await worker.processOne();
    expect(mockRpc).toHaveBeenLastCalledWith('fail_owner_notification', expect.objectContaining({ p_ambiguous: true }));
  });
  test('allows bounded retry for a definite provider rejection', async () => {
    mockRpc.mockResolvedValueOnce({ data: [row], error: null })
      .mockResolvedValueOnce({ data: [{ ...row, destination: 'owner@example.com', provider_from: 'sender@example.com', provider_subject: 'subject', provider_html: '<p>body</p>' }], error: null })
      .mockResolvedValueOnce({ data: null, error: null });
    const error = new Error('invalid recipient'); error.statusCode = 422; mockSendEmail.mockRejectedValue(error);
    await worker.processOne();
    expect(mockRpc).toHaveBeenLastCalledWith('fail_owner_notification', expect.objectContaining({ p_ambiguous: false, p_max_attempts: 5 }));
  });
});
