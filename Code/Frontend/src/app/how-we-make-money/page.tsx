/* DRAFT — Chad to confirm before release. */
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrustPageShell } from '@/components/trust/TrustPageShell';
import { TRUST_LINKS } from '@/components/trust/trust-links';

// =============================================================================
// /how-we-make-money — CRR only (middleware 404s it on the other four hosts).
//
// The business model in the only terms that are established: CRR refers
// California homeowners who ask for help to a solar provider and is
// compensated when a referred homeowner signs an agreement. The three
// "what submitting means" lines repeat the existing /affiliate-disclosure
// page; the placement line repeats the existing /methodology page.
// No fee amounts, no partner names.
// =============================================================================

const PATH = TRUST_LINKS.howWeMakeMoney.href;

export const metadata: Metadata = {
  title: 'How We Make Money | California Rate Relief',
  description:
    'California Rate Relief is an independent information and referral site. It is compensated when a homeowner it refers signs an agreement with a solar provider.',
  alternates: { canonical: PATH },
};

export default function HowWeMakeMoneyPage() {
  return (
    <TrustPageShell
      title="How we make money"
      lede="The site is paid when a homeowner it refers to a solar provider signs an agreement."
      path={PATH}
    >
      <section>
        <h2>How the site is paid</h2>
        <p>
          California Rate Relief is an independent information and referral site. When a
          California homeowner asks for help, the site refers them to a solar provider.
          California Rate Relief is compensated when a referred homeowner signs an agreement.
        </p>
      </section>

      <section>
        <h2>What that means for a reader</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The guides, source links, calculators and checklists can be used without submitting
            an inquiry.
          </li>
          <li>
            A submission is not a quote, financing approval or program eligibility decision.
          </li>
          <li>A provider decides whether it can serve the project and what it can offer.</li>
        </ul>
      </section>

      <section>
        <h2>What the site is not</h2>
        <p>
          It does not install anything. It is not a utility, a contractor or a government
          agency.
        </p>
      </section>

      <section>
        <h2>Placement</h2>
        <p>
          As the <Link href={TRUST_LINKS.methodology.href}>methodology page</Link> states, the
          site does not accept payment for placement.
        </p>
      </section>

      <section>
        <h2>More detail</h2>
        <p>
          The <Link href="/affiliate-disclosure">referral service disclosure</Link> explains what
          the inquiry form sends. The <Link href={TRUST_LINKS.privacy.href}>privacy policy</Link>{' '}
          explains how submitted information is handled.
        </p>
      </section>
    </TrustPageShell>
  );
}
