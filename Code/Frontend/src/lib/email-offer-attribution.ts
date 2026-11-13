import type { IntakePayload } from './intake';

export function emailOfferAttribution(base: IntakePayload['attribution'], search: string, emailVisitId?: string | null): IntakePayload['attribution'] {
  const query = new URLSearchParams(search);
  if (query.get('utm_medium')?.toLowerCase() !== 'email') return base;
  const tag = (key: string) => {
    const value = query.get(key) || '';
    return /^[a-z0-9_-]{1,80}$/i.test(value) ? value : undefined;
  };
  // source / acquisition_* are last touch by design. The utm_* fields, click
  // ids, traffic_channel, initial_referrer and landing_page stay the first
  // touch (lead contract item 6), so the email visit gets its own keys.
  return {
    ...base,
    original_acquisition_source: base.acquisition_source,
    original_acquisition_medium: base.acquisition_medium,
    source: 'email', acquisition_source: tag('utm_source') || 'crr', acquisition_medium: 'email',
    email_utm_source: tag('utm_source') || 'crr',
    email_utm_campaign: tag('utm_campaign'),
    email_utm_content: tag('utm_content'),
    email_visit_id: emailVisitId && /^[0-9a-f-]{36}$/i.test(emailVisitId) ? emailVisitId : undefined,
    organic_landing_page: undefined,
  };
}
