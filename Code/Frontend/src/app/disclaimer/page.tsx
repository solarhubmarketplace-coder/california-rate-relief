import type { Metadata } from 'next';
import { GLP1TrustPage } from '@/components/glp1/GLP1TrustPage';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | GLP1CompareHub',
  description:
    'Important medical, FDA, and legal disclaimers for GLP1CompareHub. Read before making any healthcare decision based on information from this site.',
  alternates: { canonical: 'https://glp1comparehub.com/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <GLP1TrustPage
      title='Medical Disclaimer'
      subtitle='Important information before making any healthcare decision based on content from this site.'
    >
      <h2>Not Medical Advice</h2>
      <p>
        The information on GLP1CompareHub.com is for educational and informational purposes only.
        It is <strong>not</strong> intended to replace professional medical advice, diagnosis, or
        treatment. Always seek the advice of a qualified healthcare provider with any questions you
        may have regarding a medical condition, treatment, or medication.
      </p>

      <h2>Always Consult Healthcare Professionals</h2>
      <p>
        GLP-1 medications (semaglutide, tirzepatide, and the branded versions Wegovy, Zepbound,
        Mounjaro, Ozempic, and Saxenda) are prescription drugs. They require evaluation by a
        licensed healthcare provider who can assess your full medical history, current medications,
        contraindications, and weight-loss goals. Do not start, stop, or modify any medication
        without consulting your prescriber.
      </p>

      <h2>Emergency Situations</h2>
      <p>
        If you are experiencing a medical emergency, call 911 immediately or go to the nearest
        emergency room. Do not rely on this website for urgent medical guidance.
      </p>

      <h2>GLP-1 Medication Warnings</h2>
      <ul>
        <li>
          <strong>Prescription required.</strong> All GLP-1 medications require a valid prescription
          from a licensed prescriber.
        </li>
        <li>
          <strong>Side effects.</strong> Common side effects include nausea, vomiting, diarrhea,
          constipation, and abdominal pain. Rare but serious side effects include pancreatitis,
          gallbladder disease, kidney injury, and thyroid C-cell tumors. See your prescriber for
          the full safety profile.
        </li>
        <li>
          <strong>Not for everyone.</strong> GLP-1 medications are contraindicated in people with a
          personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine
          Neoplasia syndrome type 2 (MEN 2).
        </li>
        <li>
          <strong>Pregnancy.</strong> GLP-1 medications are not recommended during pregnancy or
          breastfeeding. Notify your prescriber if you are pregnant, planning to become pregnant,
          or breastfeeding.
        </li>
      </ul>

      <h2>Pricing and Availability Disclaimer</h2>
      <p>
        Pricing and product availability shown on this site are based on data verified from each
        provider&rsquo;s public website at the time of publication. Prices change frequently.
        Always verify current pricing directly with the provider before making a purchase
        decision. We do our best to update pricing monthly but cannot guarantee real-time
        accuracy.
      </p>

      <h2>No Provider Endorsement (Affiliate Disclosure)</h2>
      <p>
        GLP1CompareHub participates in affiliate programs with telehealth providers. We may earn
        a commission when you click our links and sign up — at no additional cost to you. Our
        editorial recommendations are not influenced by commission rates. We do not accept
        payment for placement in our rankings, and providers cannot purchase featured positions.
      </p>

      <h2>Compounded Medications Notice</h2>
      <p>
        Compounded GLP-1 medications (compounded semaglutide and compounded tirzepatide) are{' '}
        <strong>NOT FDA-approved drugs</strong>. They are produced by state-licensed 503A and 503B
        compounding pharmacies under specific FDA exemptions. While many patients use compounded
        GLP-1 successfully, the FDA has issued warnings about compounded versions. Consult your
        prescriber about whether a branded FDA-approved medication or a compounded alternative is
        right for your specific situation.
      </p>

      <h2>Individual Results Vary</h2>
      <p>
        Weight-loss outcomes from GLP-1 medications vary significantly between individuals based on
        diet, exercise, dose, individual response, comorbidities, and adherence. Clinical trial
        averages (e.g., 14.9% weight loss with semaglutide in STEP-1, 20.2% with tirzepatide in
        SURMOUNT-1) are population averages, not guarantees of personal outcome.
      </p>

      <h2>External Resources</h2>
      <p>
        Some pages on this site link to external sources including manufacturer websites, peer-reviewed
        clinical trials (NEJM, JAMA, Lancet), and government health resources (FDA, CDC, NIH). We are
        not responsible for the content, accuracy, or availability of external sites. Linking does
        not constitute endorsement.
      </p>

      <h2>Questions or Concerns</h2>
      <p>
        Email us through the <a href='/contact'>contact page</a>. We respond to medical-disclaimer
        and editorial-policy questions within one business day.
      </p>

      <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#7A6478' }}>
        <em>Last updated: May 2026</em>
      </p>
    </GLP1TrustPage>
  );
}
