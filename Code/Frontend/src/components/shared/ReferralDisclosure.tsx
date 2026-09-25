import Link from 'next/link';

// =============================================================================
// ReferralDisclosure — the compensation line that sits next to every CRR lead
// form (home wizard, inline inquiry forms, quick checks, commercial form).
//
// The sentence is Decision #1's wording, the same one /methodology and
// /how-we-make-money carry. Keep all three in step by importing
// COMPENSATION_SENTENCE rather than retyping it. It is not the compliance
// sentence ("California Rate Relief is a referral service. We are not a
// licensed contractor."), which stays where it is and is never paraphrased.
//
// Rendered beside a form, never inside its consent text, and it changes
// nothing the form submits.
// =============================================================================

export const COMPENSATION_SENTENCE =
  'California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.';

export const HOW_WE_MAKE_MONEY_PATH = '/how-we-make-money';

export function ReferralDisclosure({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-muted-foreground ${className}`} data-referral-disclosure="">
      {COMPENSATION_SENTENCE}{' '}
      <Link href={HOW_WE_MAKE_MONEY_PATH} className="underline underline-offset-2 hover:text-primary">
        How we make money
      </Link>
    </p>
  );
}
