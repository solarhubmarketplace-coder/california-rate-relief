// =============================================================================
// Zod schema for grh-reviews-data.ts
// =============================================================================
// 119 GRH review cards (e-bikes, power stations, lawn equipment, HVAC, solar).
// Drives every /reviews/<slug> page on greenreviewshub.com.
// Validation at module load catches missing fields and typos in badge/icon.
// =============================================================================

import { z } from 'zod';

export const ReviewBadgeSchema = z.enum(['Comparison Guide', 'Product Review']);

export const ReviewIconSchema = z.enum(['battery', 'zap']);

export const ReviewCardSchema = z.object({
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/, 'slug must be kebab-case'),
  title: z.string().min(1),
  description: z.string().min(1),
  badge: ReviewBadgeSchema,
  rating: z.number().min(0).max(5).optional(),
  icon: ReviewIconSchema.optional(),
  image: z.string().url().optional(),
  brand: z.string().optional(),
});

export const ReviewCardsArraySchema = z.array(ReviewCardSchema);

export type ReviewCard = z.infer<typeof ReviewCardSchema>;
