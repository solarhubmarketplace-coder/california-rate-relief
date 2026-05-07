import { Calendar, ShieldCheck } from 'lucide-react';

interface LastReviewedBadgeProps {
  /** ISO date string */
  lastReviewed: string;
  /** Optional: also show pricing-verified date */
  lastVerified?: string;
  /** Layout variant: 'inline' (single row) or 'stacked' (two lines) */
  variant?: 'inline' | 'stacked';
}

/**
 * Compact freshness badge — placed near the top of money pages.
 *
 * Conversion + AIO + E-E-A-T trust signal in one. Per Gronk-verified
 * 2026 best practices: visible "last updated" date lifts conversions
 * 20-40% on affiliate pages and is one of the cited E-E-A-T signals
 * Google rewards for YMYL content.
 *
 * Distinct from the full EditorialReviewBox — this is the at-a-glance
 * version near the H1.
 */
export function LastReviewedBadge({
  lastReviewed,
  lastVerified,
  variant = 'inline',
}: LastReviewedBadgeProps) {
  const formatDate = (iso: string) =>
    new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  if (variant === 'stacked') {
    return (
      <div className="inline-flex flex-col gap-1 text-xs" style={{ color: '#6B7B82' }}>
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3 w-3" />
          Last reviewed: <strong style={{ color: '#0E2A3A' }}>{formatDate(lastReviewed)}</strong>
        </span>
        {lastVerified && (
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3 w-3" />
            Pricing verified: <strong style={{ color: '#0E2A3A' }}>{formatDate(lastVerified)}</strong>
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: '#6B7B82' }}>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 border" style={{ borderColor: '#E5DDC8' }}>
        <Calendar className="h-3 w-3" />
        Reviewed <strong style={{ color: '#0E2A3A' }}>{formatDate(lastReviewed)}</strong>
      </span>
      {lastVerified && (
        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1" style={{ backgroundColor: '#E0F2EC', color: '#0E6E5A' }}>
          <ShieldCheck className="h-3 w-3" />
          Pricing verified <strong>{formatDate(lastVerified)}</strong>
        </span>
      )}
    </div>
  );
}
