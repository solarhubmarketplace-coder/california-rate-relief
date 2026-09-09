import type { Metadata } from 'next';
import { GLP1TrustPage } from '@/components/glp1/GLP1TrustPage';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | GLP1CompareHub',
  description:
    'The medical, compounded-drug, pricing, affiliate, and external-source boundaries for GLP1CompareHub.',
  alternates: { canonical: 'https://www.glp1comparehub.com/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <GLP1TrustPage
      title='Medical Disclaimer'
      subtitle='The line between our price research and a medical decision.'
    >
      <h2>GLP1CompareHub Is Not a Medical Provider</h2>
      <p>
        GLP1CompareHub is a publisher. We do not practice medicine, diagnose conditions,
        prescribe or dispense drugs, evaluate side effects, or decide whether a treatment is
        appropriate for any person. Chad Simpson is not a medical professional.
      </p>

      <h2>No Medical Advice</h2>
      <p>
        Content on this site is general information, not medical advice and not a substitute for
        care from a licensed healthcare professional who knows your history. Do not start, stop,
        change, or combine a prescription medication because of something published here.
      </p>

      <h2>Emergencies and Side Effects</h2>
      <p>
        This site cannot evaluate symptoms. Call 911 or your local emergency service for an
        emergency. For possible side effects, dosing questions, pregnancy, drug interactions, or
        contraindications, contact your prescriber or pharmacist and use the current FDA-approved
        prescribing information for the specific drug.
      </p>

      <h2>Compounded Drugs</h2>
      <p>
        Compounded drugs are not FDA-approved. FDA does not review them for safety, effectiveness,
        or quality before marketing. A compounded drug is not an FDA-approved generic, and a
        pharmacy or outsourcing facility should not be described as &ldquo;FDA-approved&rdquo; or
        &ldquo;FDA-licensed.&rdquo;
      </p>
      <p>
        Read the FDA&rsquo;s current{' '}
        <a
          href='https://www.fda.gov/drugs/human-drug-compounding/fda-telehealth-companies-what-know-when-promoting-compounded-drugs'
          target='_blank'
          rel='noopener noreferrer'
        >
          guidance for telehealth companies promoting compounded drugs
        </a>.
      </p>

      <h2>Price Evidence, Not a Quote</h2>
      <p>
        A pricing record shows what a provider-owned public page displayed on the stated capture
        date. It does not guarantee eligibility, a prescription, inventory, insurance coverage, a
        checkout total, or a future recurring charge. Promotions and terms can change. Confirm the
        complete recurring amount, included services, refund policy, and cancellation terms with
        the provider before paying.
      </p>

      <h2>Affiliate Relationships</h2>
      <p>
        GLP1CompareHub may earn a commission from some provider links. That relationship does not
        turn a price observation into an endorsement. Providers cannot buy a better position in
        the public dataset or remove an unfavorable caveat. See the{' '}
        <a href='/affiliate-disclosure'>affiliate disclosure</a>.
      </p>

      <h2>External Sources</h2>
      <p>
        We link to provider and government pages so readers can inspect the source. External pages
        can change after our capture date, and we do not control their content, availability, or
        privacy practices. A link is evidence of what we checked, not an endorsement.
      </p>

      <h2>Corrections</h2>
      <p>
        If a source, amount, or description is wrong, use the <a href='/contact'>contact page</a>
        {' '}and include the affected URL plus the supporting source.
      </p>

      <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#6B7B82' }}>
        <em>Last updated: August 31, 2026</em>
      </p>
    </GLP1TrustPage>
  );
}
