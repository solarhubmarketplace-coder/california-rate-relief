/* DRAFT — Chad to confirm before release. */
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrustPageShell } from '@/components/trust/TrustPageShell';
import { TRUST_LINKS } from '@/components/trust/trust-links';
import { AI_USE_HEADING, AiUseStatement } from '@/components/trust/AiUseStatement';

// =============================================================================
// /editorial-policy — CRR only (middleware 404s it on the other four hosts).
//
// States only what is established about the business: an independent
// information and referral site; refers California homeowners who ask for help
// to a solar provider and is compensated when a referred homeowner signs an
// agreement; does not install; not a utility, contractor or government agency;
// figures from primary sources (IRS, CPUC, CEC, utilities, LBNL), dated. The
// one statement about placement is quoted from the existing /methodology page.
// No fee amounts, partner names, staff or review steps.
// =============================================================================

const PATH = TRUST_LINKS.editorialPolicy.href;

export const metadata: Metadata = {
  title: 'Editorial Policy | California Rate Relief',
  description:
    'How California Rate Relief publishes: what the site is, where its figures come from, how it is paid, and how corrections are logged.',
  alternates: { canonical: PATH },
};

export default function EditorialPolicyPage() {
  return (
    <TrustPageShell
      title="Editorial policy"
      lede="What this site publishes, where its numbers come from, and how it is paid."
      path={PATH}
    >
      <section>
        <h2>What California Rate Relief is</h2>
        <p>
          California Rate Relief is an independent information and referral site about solar
          for California homeowners. When a homeowner asks for help, the site refers them to a
          solar provider.
        </p>
        <p>
          It does not install anything. It is not a utility, a contractor or a government
          agency.
        </p>
      </section>

      <section>
        <h2>Where the figures come from</h2>
        <p>
          Figures on this site are drawn from primary sources — the Internal Revenue Service,
          the California Public Utilities Commission, the California Energy Commission, the
          electric utilities and Lawrence Berkeley National Laboratory — and they are dated.
          Pages link to the sources they cite.
        </p>
        <p>
          The source types are listed on{' '}
          <Link href={TRUST_LINKS.sourcesWeUse.href}>sources we use</Link>.
        </p>
      </section>

      <section>
        <h2>How the site is paid</h2>
        <p>
          California Rate Relief is compensated by a solar provider when a homeowner we refer
          signs an agreement. The details are on{' '}
          <Link href={TRUST_LINKS.howWeMakeMoney.href}>how we make money</Link>.
        </p>
        <p>
          As the <Link href={TRUST_LINKS.methodology.href}>methodology page</Link> states, the
          site does not accept payment for placement.
        </p>
      </section>

      <section>
        <h2>{AI_USE_HEADING}</h2>
        <AiUseStatement />
      </section>

      <section>
        <h2>How pages are researched</h2>
        <p>
          The <Link href={TRUST_LINKS.methodology.href}>methodology page</Link> describes what is
          checked and how often pages are reviewed.
        </p>
      </section>

      <section>
        <h2>Corrections</h2>
        <p>
          Material corrections are logged, with the date each fix shipped, on the{' '}
          <Link href={TRUST_LINKS.corrections.href}>corrections page</Link>. To report an error,
          use the <Link href="/contact">contact page</Link> and name the page it is on.
        </p>
      </section>
    </TrustPageShell>
  );
}
