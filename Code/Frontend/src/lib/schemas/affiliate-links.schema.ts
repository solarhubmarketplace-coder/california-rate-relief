// =============================================================================
// Zod schema for affiliate-links.ts
// =============================================================================
// This is the SINGLE source of truth for every buy button across 5 sites.
// A typo or missing field here ships to every page that uses that program.
// Validation at module load catches structural drift before deploy.
//
// To use: import and `.parse(AFFILIATE_LINKS)` in affiliate-links.ts.
// =============================================================================

import { z } from 'zod';

export const AffiliateNetworkSchema = z.enum([
  'shareasale',
  'impact',
  'cj',
  'awin',
  'amazon',
  'direct',
  'katalys',
  'pending',
]);

export const AffiliateStatusSchema = z.enum(['active', 'pending']);

export const AffiliateLinkSchema = z.object({
  brand: z.string().min(1),
  url: z.string().url(),
  status: AffiliateStatusSchema,
  network: AffiliateNetworkSchema,
  commissionRate: z.string().optional(),
  priceDisplay: z.string().optional(),
  fallbackUrl: z.string().url().optional(),
});

export const AffiliateLinksMapSchema = z.record(z.string(), AffiliateLinkSchema);

export type AffiliateLink = z.infer<typeof AffiliateLinkSchema>;
export type AffiliateNetwork = z.infer<typeof AffiliateNetworkSchema>;
