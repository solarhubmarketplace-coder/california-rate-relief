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
  lastReviewed?: string;
  /** ISO date string for last pricing/data verification, e.g. '2026-05-06' */
  lastVerified?: string;
  /** Editor / reviewer name (e.g. 'Chad Simpson'). Optional — defaults to "Editorial Team" wording. */
  author?: string;
  /** Alias for `author` — accepted for backward compatibility with older pages. */
  reviewer?: string;
  /** Alias for `lastReviewed` — accepted for backward compatibility with older pages. */
  dateReviewed?: string;
  /** Alias for `lastReviewed` — older pages used this name */
  reviewDate?: string;
  /** Alias for `author` — older pages used this name */
  reviewerName?: string;
  /** Page-specific editorial summary. Renders above the standard boilerplate when present. */
  summary?: string;
  /** Page-specific recommendation / verdict. Renders below the summary when present. */
  recommendation?: string;
  /** Page-specific "our pick" line — short label. */
  pick?: string;
  /** Page-specific reasoning paragraph that follows the pick. */
  reasoning?: string;
  /** Bulleted caveats / limitations rendered as a small list below the pick. */
  caveats?: string[];
}

export function EditorialReviewBox({
  lastReviewed,
  lastVerified,
  author,
  reviewer,
  dateReviewed,
  summary,
  recommendation,
  pick,
  reasoning,
  caveats,
}: EditorialReviewBoxProps) {
  // Coalesce aliases so older pages still work.
  const reviewedDate = lastReviewed ?? dateReviewed;
  const verifiedDate = lastVerified ?? lastReviewed ?? dateReviewed;
  const reviewerName = author ?? reviewer;
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
      {summary && (
        <p className='text-sm leading-relaxed mb-3' style={{ color: '#3D4A52' }}>
          <strong>Editorial summary:</strong> {summary}
        </p>
      )}
      {recommendation && (
        <p className='text-sm leading-relaxed mb-3' style={{ color: '#3D4A52' }}>
          <strong>Recommendation:</strong> {recommendation}
        </p>
      )}
      {pick && (
        <p className='text-sm leading-relaxed mb-3' style={{ color: '#3D4A52' }}>
          <strong>Our pick:</strong> {pick}
          {reasoning && <> {reasoning}</>}
        </p>
      )}
      {caveats && caveats.length > 0 && (
        <ul className='text-sm leading-relaxed mb-4 pl-5 list-disc' style={{ color: '#3D4A52' }}>
          {caveats.map((caveat, i) => (
            <li key={i}>{caveat}</li>
          ))}
        </ul>
      )}
      <p
        className='text-sm leading-relaxed mb-4'
        style={{ color: '#3D4A52' }}
      >
        Editorially reviewed by {reviewerName ?? 'the GLP1CompareHub Editorial Team'}.
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
        {reviewedDate && (
          <>
            <span>
              Last editorially reviewed:{' '}
              <strong style={{ color: '#0E2A3A' }}>{reviewedDate}</strong>
            </span>
            <span aria-hidden='true'>·</span>
          </>
        )}
        {verifiedDate && (
          <>
            <span>
              Pricing last verified:{' '}
              <strong style={{ color: '#0E2A3A' }}>{verifiedDate}</strong>
            </span>
            <span aria-hidden='true'>·</span>
          </>
        )}
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
