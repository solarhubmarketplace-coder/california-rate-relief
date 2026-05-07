import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

interface EditorialBylineProps {
  /** ISO date string e.g. '2026-05-06' */
  reviewedDate?: string;
}

/**
 * Compact author byline — placed below the H1 on every GLP1 money page.
 *
 * Purpose: links every money page → /author/chad-simpson so Google can
 * resolve the Person schema and credit the E-E-A-T signal. Without this
 * link, the author page is an island.
 */
export function EditorialByline({ reviewedDate }: EditorialBylineProps) {
  const formattedDate = reviewedDate
    ? new Date(reviewedDate + 'T00:00:00').toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <div
      className="inline-flex items-center gap-1.5 flex-wrap text-xs"
      style={{ color: '#6B7B82' }}
    >
      <ShieldCheck className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#0E6E5A' }} />
      <span>Reviewed by</span>
      <Link
        href="/author/chad-simpson"
        className="font-semibold hover:underline"
        style={{ color: '#3D5560' }}
      >
        Chad Simpson
      </Link>
      <span style={{ color: '#B0BEC5' }}>·</span>
      <span>Founder, GLP1CompareHub</span>
      {formattedDate && (
        <>
          <span style={{ color: '#B0BEC5' }}>·</span>
          <span>Updated {formattedDate}</span>
        </>
      )}
    </div>
  );
}
