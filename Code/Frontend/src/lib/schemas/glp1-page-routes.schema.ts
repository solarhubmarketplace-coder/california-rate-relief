// =============================================================================
// Zod schema for glp1-page-routes.ts
// =============================================================================
// 96 GLP-1 routes with status, target keyword, KD, volume, est revenue.
// The sitemap reads from this registry — drift here means soft-404s in GSC.
// Validation at module load catches missing fields and typos in status/tier.
// =============================================================================

import { z } from 'zod';

export const PageTierSchema = z.enum(['A', 'B', 'C']);

export const PageStatusSchema = z.enum([
  'live',
  'next',
  'queued',
  'utility',
  'future',
]);

export const PageTemplateSchema = z.enum([
  'homepage',
  'provider-directory',
  'provider-detail',
  'medication-vs-medication',
  'provider-vs-provider',
  'medication-category',
  'rankings-hub',
  'compare-tool',
  'match-quiz',
  'simulator',
  'cost-calculator',
  'peptide-stack',
  'compounded-format',
  'microdosing-cluster',
  'commercial-comparison',
  'compliance-pillar',
  'utility',
  'news',
]);

export const PageRouteSchema = z.object({
  path: z.string().startsWith('/'),
  template: PageTemplateSchema,
  tier: PageTierSchema,
  status: PageStatusSchema,
  targetKeyword: z.string().optional(),
  estRevenueAtMaturity: z.number().nonnegative().optional(),
  volume: z.number().nonnegative().optional(),
  kd: z.number().min(0).max(100).optional(),
  note: z.string().optional(),
});

export const PageRoutesArraySchema = z.array(PageRouteSchema);

export type PageRoute = z.infer<typeof PageRouteSchema>;
export type PageTier = z.infer<typeof PageTierSchema>;
export type PageStatus = z.infer<typeof PageStatusSchema>;
export type PageTemplate = z.infer<typeof PageTemplateSchema>;
