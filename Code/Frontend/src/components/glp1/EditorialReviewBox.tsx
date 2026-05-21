import Link from 'next/link';
import { BookOpen } from 'lucide-react';

// =============================================================================
// EditorialReviewBox — "How this page is reviewed" attribution block
// =============================================================================
// Renders mid- or near-end of long-form YMYL pages. Surfaces editorial process
// + freshness dates so a QRG rater (or human reader) can see:
//   - who reviewed the page
//   - what data sources fed it
//   - when it was last reviewed / verified
//   - that rankings are independent of commission size
//   - link to the full methodology
//
// Wording is "Editorially Reviewed" not "Medically Reviewed" — the latter
// would require a licensed medical professional named as the reviewer (an
// FTC 16 CFR 255 issue if claimed without one).
// =============================================================================

interface EditorialReviewBoxProps {
  /** ISO date string for last editorial review, e.g. '2026-05-06' */
  lastReviewed: string;
  /** ISO date string for last pricing/data verification, e.g. '2026-05-06' */
  lastVerified: string;
}

export function EditorialReviewBox({ lastReviewed, lastVerified }: EditorialReviewBoxProps) {
  return (
    <aside
      className='rounded-xl border p-5 my-8'
      style={{ backgroundColor: '#F0EBE0', borderColor: '#D8CFB8' }}
      aria-label='Editorial review information'
    >
      <div className='flex items-start gap-3 mb-3'>
        <BookOpen
          className='h-5 w-5 mt-0.5 flex-shrink-0'
          style={{ color: '#0E2A3A' }}
          aria-hidden='true'
        />
        <h3
          className='text-sm font-bold uppercase tracking-wide'
          style={{ color: '#0E2A3A' }}
        >
          How this page is reviewed
        </h3>
      </div>
      <p
        className='text-sm leading-relaxed mb-4'
        style={{ color: '#3D4A52' }}
      >
        Editorially reviewed by the GLP1CompareHub Editorial Team.
        GLP1CompareHub is an independent, research-driven directory — not a
        medical practice and not a pharmacy. Provider pricing is verified
        directly from each provider&apos;s public site, every clinical claim
        cites a peer-reviewed trial (NEJM, JAMA, Lancet) or FDA prescribing
        information, and rankings are determined by published methodology
        weights, never by commission rate. Content is for informational
        purposes and is not medical advice — always consult a licensed
        prescriber before starting, stopping, or modifying any GLP-1
        medication.
      </p>
      <div
        className='flex flex-wrap gap-x-4 gap-y-1 text-xs'
        style={{ color: '#6B7B82' }}
      >
        <span>
          Last editorially reviewed:{' '}
          <strong style={{ color: '#0E2A3A' }}>{lastReviewed}</strong>
        </span>
        <span aria-hidden='true'>·</span>
        <span>
          Pricing last verified:{' '}
          <strong style={{ color: '#0E2A3A' }}>{lastVerified}</strong>
        </span>
        <span aria-hidden='true'>·</span>
        <Link
          href='/methodology'
          className='underline font-semibold'
          style={{ color: '#0E2A3A' }}
        >
          Our methodology
        </Link>
      </div>
    </aside>
  );
}
