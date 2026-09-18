// =============================================================================
// TrustBlock — what California Rate Relief is, what happens after the form, and
// who does or does not make contact.
//
// The site has no licence number, no Google Business Profile and no office, so
// the usual trust furniture is unavailable. What is left is saying plainly what
// the service is and is not. Rendered beside the intake form, where the
// question "who am I actually sending this to" is asked.
//
// DRAFT COPY — every string below is listed in the copy review file and is not
// to be deployed before Chad's review. The third bullet in particular states a
// behaviour (no call centre, no marketing texts) that Chad must confirm before
// it is published, and it must stay consistent with the consent checkbox on the
// form, which says a solar provider may follow up.
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
      'Your project details are recorded and referred to a solar provider. The provider decides whether it can help and what it can offer; availability, design and price are determined after its own review.',
  },
  {
    title: 'How you are contacted',
    body:
      'California Rate Relief does not run a call centre and does not send marketing text messages. Follow-up about your inquiry comes from the solar provider your details are referred to.',
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
      className={`my-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 ${className}`}
    >
      <h2 id={`${id}-heading`} className="text-lg font-bold text-slate-900">
        {heading}
      </h2>
      <dl className="mt-4 grid gap-4 md:grid-cols-2">
        {TRUST_BLOCK_POINTS.map((point) => (
          <div key={point.title}>
            <dt className="text-sm font-semibold text-slate-900">{point.title}</dt>
            <dd className="mt-1 text-sm text-slate-700">{point.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
