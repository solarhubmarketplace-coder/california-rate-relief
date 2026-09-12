import type { IntakePayload } from './intake';

export function emailOfferAttribution(base: IntakePayload['attribution'], search: string): IntakePayload['attribution'] {
  const query = new URLSearchParams(search);
  if (query.get('utm_medium')?.toLowerCase() !== 'email') return base;
  const tag = (key: string) => {
    const value = query.get(key) || '';
    return /^[a-z0-9_-]{1,80}$/i.test(value) ? value : undefined;
  };
  return {
    ...base,
    original_acquisition_source: base.acquisition_source,
    original_acquisition_medium: base.acquisition_medium,
    source: 'email', acquisition_source: tag('utm_source') || 'crr', acquisition_medium: 'email',
    utm_source: tag('utm_source') || 'crr', utm_medium: 'email',
    utm_campaign: tag('utm_campaign'), utm_content: tag('utm_content'),
    organic_landing_page: undefined, gclid: undefined, gbraid: undefined,
    wbraid: undefined, msclkid: undefined, fbclid: undefined, utm_term: undefined,
  };
}
