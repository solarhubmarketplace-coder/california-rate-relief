import { CircleCheck } from 'lucide-react';

// =============================================================================
// LastReviewedBadge — inline freshness stamp
// =============================================================================
// Small inline date stamp ("Last editorially reviewed <date>") that lives near
// the H1 or in a byline strip. Single-line, no decorative wrapper — designed
// to compose with author byline / category chip / status icons inline.
// =============================================================================

interface LastReviewedBadgeProps {
  /** ISO date string, e.g. '2026-05-06' */
  lastReviewed: string;
  /** Visual variant — pages may pass 'compact' or 'inline' for smaller forms */
  variant?: 'default' | 'compact' | 'inline';
}

export function LastReviewedBadge({ lastReviewed, variant }: LastReviewedBadgeProps) {
  void variant;
  return (
    <span
      className='inline-flex items-center gap-1.5 text-xs font-medium'
      style={{ color: '#6B7B82' }}
      aria-label={`Last editorially reviewed ${lastReviewed}`}
    >
      <CircleCheck
        className='h-3.5 w-3.5'
        style={{ color: '#0E2A3A' }}
        aria-hidden='true'
      />
      <span>
        Last editorially reviewed{' '}
        <strong style={{ color: '#0E2A3A' }}>{lastReviewed}</strong>
      </span>
    </span>
  );
}
