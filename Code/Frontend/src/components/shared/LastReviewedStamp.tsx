import Link from 'next/link';
import { CalendarCheck, ShieldCheck } from 'lucide-react';

// =============================================================================
// LastReviewedStamp — visible "Last reviewed" badge for trust + freshness
// =============================================================================
// Visible date stamp signals to users (and indirectly to Google) that a page
// has a defined refresh cadence. Pair with dateModified in JSON-LD for full
// freshness signal coverage.
//
// Variants:
//  - 'reviewed'  — generic "Last reviewed" (default)
//  - 'medical'   — "Last medically reviewed" (for AHB benefits-of pages)
//  - 'updated'   — "Last updated" (for blog/news posts)
// =============================================================================

export type StampVariant = 'reviewed' | 'medical' | 'updated';

export type StampPalette = {
  fg: string;
  muted: string;
  border: string;
  accent: string;
};

interface Props {
  date: string;            // ISO date string e.g. "2026-04-24"
  reviewer?: string;       // defaults to "Chad Simpson, Editor"
  variant?: StampVariant;
  palette: StampPalette;
  showMethodologyLink?: boolean;
}

function formatDate(iso: string): string {
  // Expected input: YYYY-MM-DD; output: "April 24, 2026"
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${months[m - 1]} ${d}, ${y}`;
}

function variantLabel(v: StampVariant): string {
  if (v === 'medical') return 'Last medically reviewed';
  if (v === 'updated') return 'Last updated';
  return 'Last reviewed';
}

export function LastReviewedStamp({
  date,
  reviewer = 'Chad Simpson, Editor',
  variant = 'reviewed',
  palette,
  showMethodologyLink = true,
}: Props) {
  const Icon = variant === 'medical' ? ShieldCheck : CalendarCheck;
  return (
    <div
      className='inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs my-3'
      style={{ borderColor: palette.border, color: palette.muted }}
      aria-label={`${variantLabel(variant)} on ${formatDate(date)} by ${reviewer}`}
    >
      <Icon className='h-3.5 w-3.5 flex-shrink-0' style={{ color: palette.accent }} aria-hidden='true' />
      <span>
        {variantLabel(variant)} <strong style={{ color: palette.fg }}>{formatDate(date)}</strong> by{' '}
        <Link href='/author/chad-simpson' className='underline' style={{ color: palette.accent }}>
          {reviewer}
        </Link>
        {showMethodologyLink && (
          <>
            {' · '}
            <Link href='/methodology' className='underline' style={{ color: palette.accent }}>
              Methodology
            </Link>
          </>
        )}
      </span>
    </div>
  );
}
