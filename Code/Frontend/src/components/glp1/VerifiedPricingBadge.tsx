import { ShieldCheck } from 'lucide-react';

interface VerifiedPricingBadgeProps {
  /** ISO date when pricing was verified against the source */
  verifiedDate: string;
  /** Optional: source label (default: brand site) */
  source?: string;
  /** Layout variant */
  variant?: 'inline' | 'compact';
}

/**
 * Compact "verified pricing" trust badge — placed adjacent to every price
 * callout on money pages.
 *
 * Per 2026 CRO research: trust elements near buy buttons lift conversions
 * 20-40%. This badge specifically signals:
 *   - Pricing isn't a stale/guessed number
 *   - We crawled the source site recently
 *   - We're not making things up (FTC-safer)
 *
 * Used on:
 *   - Provider detail pages (next to the starting-price card)
 *   - Best-of rankings (next to each provider's pricing block)
 *   - Comparison pages (in the table footer or next to price rows)
 */
export function VerifiedPricingBadge({
  verifiedDate,
  source = 'brand site',
  variant = 'inline',
}: VerifiedPricingBadgeProps) {
  const formatDate = (iso: string) =>
    new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  if (variant === 'compact') {
    return (
      <span
        className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide"
        style={{ color: '#0E6E5A' }}
      >
        <ShieldCheck className="h-3 w-3" />
        Verified {formatDate(verifiedDate)}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{ backgroundColor: '#E0F2EC', color: '#0E6E5A' }}
    >
      <ShieldCheck className="h-3 w-3" />
      Verified on {source} <strong>{formatDate(verifiedDate)}</strong>
    </span>
  );
}
