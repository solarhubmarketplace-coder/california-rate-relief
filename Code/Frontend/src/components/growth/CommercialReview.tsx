import Link from 'next/link';
import { CommercialAssessmentForm } from '@/components/landing/CommercialAssessmentForm';
import { COMMERCIAL_ASSESSMENT_PATH, COMMERCIAL_FORM_ID } from '@/lib/intake-routing';
import { IntentCTA } from './IntentCTA';
import { ReferralDisclosure } from '@/components/shared/ReferralDisclosure';

// =============================================================================
// CommercialReview — the lead capture placed on commercial content pages
// (2026-09-23). Two pieces, both built from existing parts:
//
//   * CommercialReviewForm: the inline CommercialAssessmentForm near the end of
//     the page, in <section id="commercial-review">. intakeHrefForPath() sends
//     the header button and the sticky mobile bar on every commercial content
//     page to that anchor, so the visitor stays on the page they are reading.
//   * CommercialReviewButton: one mid-page IntentCTA (commercial copy from
//     cta-intent.ts) whose button scrolls to the form.
//
// HeroQuickCheck is residential only and is never placed on these pages.
// Nothing here changes the form's fields, consent text or payload.
// =============================================================================

export interface CommercialReviewFormProps {
  /** h2 above the form. Default: CTA_COPY.commercial.formHeading. */
  heading?: string;
  /** Sentence under the h2. Default: CTA_COPY.commercial.formIntro. */
  intro?: string;
  /**
   * Wrap the form in <div id="solar-inquiry">. Commercial pages carried their
   * ask under that id before the inline form existed; the review scripts
   * (scripts/review-commercial-solar-refresh.mjs, test-commercial-growth.mjs,
   * and review-growth.mjs, which expects one #solar-inquiry on every
   * GROWTH_ROUTES entry) and older in-page links still address it. Set on the
   * commercial pages listed in GROWTH_ROUTES.
   */
  legacyAnchor?: boolean;
  /**
   * A text link to the standalone /commercial-assessment page under the form.
   * Only /commercial-solar keeps it (its review script asserts the link).
   */
  standaloneLink?: boolean;
  className?: string;
}

export function CommercialReviewForm({
  heading,
  intro,
  legacyAnchor = false,
  standaloneLink = false,
  className = 'my-10',
}: CommercialReviewFormProps) {
  const body = (
    <>
      <CommercialAssessmentForm sectionId={COMMERCIAL_FORM_ID} heading={heading} intro={intro} />
      <ReferralDisclosure className="mt-3" />
      {standaloneLink && (
        <p className="mt-4 text-sm text-muted-foreground">
          The same form is also on its own page:{' '}
          <Link href={COMMERCIAL_ASSESSMENT_PATH} className="font-medium text-primary underline underline-offset-2">
            Request a commercial assessment
          </Link>
          .
        </p>
      )}
    </>
  );
  return legacyAnchor ? (
    <div id="solar-inquiry" className={`scroll-mt-24 ${className}`}>
      {body}
    </div>
  ) : (
    <div className={className}>{body}</div>
  );
}

/** The one mid-page ask on a commercial page; its button scrolls to the form. */
export function CommercialReviewButton({ className = '' }: { className?: string }) {
  return <IntentCTA variant="commercial" cta="commercial_mid_page" className={`mb-10 ${className}`} />;
}
