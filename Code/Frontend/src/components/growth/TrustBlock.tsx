// =============================================================================
// TrustBlock — what California Rate Relief is, what happens after the form, and
// who does or does not make contact.
//
// The site has no licence number, no Google Business Profile and no office, so
// the usual trust furniture is unavailable. What is left is saying plainly what
// the service is and is not. Rendered beside the intake form, where the
// question "who am I actually sending this to" is asked.
//
// Corrected 20 Sep 2026: describe the existing referral/consent workflow rather
// than promising an unverified contact channel or a completed provider match.
// Exact provider arrangements remain a business-record verification item.
// =============================================================================

export const TRUST_BLOCK_POINTS = [
  {
    title: 'What this is',
    body:
      'California Rate Relief is a private referral service. It is not a contractor, does not install or finance anything, and is not a utility, a government agency or an assistance program.',
  },
  {
    title: 'What happens after the form',
    body:
      'Your project details are recorded for referral to a solar provider. The provider decides whether it can help and what it can offer; availability, design and price are determined after its own review.',
  },
  {
    title: 'How you are contacted',
    body:
      'Read the consent wording before submitting. Your inquiry includes contact details for follow-up about the project; a provider decides whether it can serve it.',
  },
  {
    title: 'Using the site without submitting',
    body:
      'The calculators, bill comparisons and checklists on this site work without contact details, and nothing on this page requires a submission.',
  },
] as const;

export function TrustBlock({
  className = '',
  heading = 'Before you send anything',
  id = 'crr-trust-block',
}: {
  className?: string;
  heading?: string;
  /** Unique per instance: a page may carry the intake form more than once. */
  id?: string;
}) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={`my-8 rounded-2xl border border-border bg-white p-5 md:p-6 ${className}`}
    >
      <h2 id={`${id}-heading`} className="text-lg font-bold text-foreground">
        {heading}
      </h2>
      <dl className="mt-4 grid gap-4 md:grid-cols-2">
        {TRUST_BLOCK_POINTS.map((point) => (
          <div key={point.title}>
            <dt className="text-sm font-semibold text-foreground">{point.title}</dt>
            <dd className="mt-1 text-sm text-foreground/80">{point.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
