export type EmailOffer = 'bill-review' | 'quote-review';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const emailCampaignTag = (value: string | null) => value && /^[a-z0-9_-]{1,80}$/i.test(value) ? value : null;

export function emailVisitPayload(offer: EmailOffer, search: string, visitId: string, test = false, now = new Date()) {
  const query = new URLSearchParams(search);
  if (query.get('utm_medium')?.toLowerCase() !== 'email' || !UUID.test(visitId)) return null;
  const campaign = emailCampaignTag(query.get('utm_campaign'));
  const variant = emailCampaignTag(query.get('utm_content'));
  if (!campaign) return null;
  return {
    visit_id: visitId,
    landing_path: `/email/${offer}`,
    campaign_key: campaign,
    variant_key: variant,
    client_time: now.toISOString(),
    test,
  };
}
