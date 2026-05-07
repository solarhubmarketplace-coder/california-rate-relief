import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | GLP1CompareHub',
  description:
    'GLP1CompareHub provides educational content only. We are not licensed medical providers. This page details the limits of our content and the risks specific to compounded GLP-1 medications under post-April 2026 FDA enforcement.',
  alternates: { canonical: 'https://glp1comparehub.com/medical-disclaimer' },
  robots: { index: true, follow: true },
};

export default function MedicalDisclaimerPage() {
  return (
    <GLP1Layout>
      <GLP1Header />

      <main>
        <section className="py-10 md:py-14" style={{ backgroundColor: '#F0EBE0' }}>
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <nav className="text-xs mb-3" aria-label="Breadcrumb">
              <Link href="/" style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Medical Disclaimer</span>
            </nav>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-[1.1]"
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Medical Disclaimer
            </h1>
            <p className="text-lg mb-3" style={{ color: '#3D5560' }}>
              The limits of our content. Read this before acting on anything you find on GLP1CompareHub.
            </p>
            <div className="text-xs" style={{ color: '#6B7B82' }}>
              Last updated: May 6, 2026
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <div className="rounded-lg p-5 flex items-start gap-3" style={{ backgroundColor: '#FFF8E1' }}>
              <AlertTriangle className="h-6 w-6 shrink-0 mt-0.5" style={{ color: '#B8860B' }} />
              <div className="text-sm md:text-base" style={{ color: '#7A4F00' }}>
                <strong>The short version:</strong> nothing on this site is medical advice. We are an
                independent affiliate publisher, not a clinic, not a pharmacy, not a licensed
                medical practice. If you are considering a GLP-1 medication, talk to a licensed
                physician familiar with your medical history.
              </div>
            </div>

            <h2 className="text-2xl font-bold pt-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              Who we are
            </h2>
            <p style={{ color: '#3D5560' }}>
              GLP1CompareHub is an independent affiliate publisher. We compare GLP-1 telehealth
              providers using publicly verifiable data: prices crawled from each provider's website,
              partner-dashboard performance metrics from affiliate networks, and citations to
              peer-reviewed clinical research where it exists.
            </p>
            <p style={{ color: '#3D5560' }}>
              We are <strong>not</strong> licensed physicians. We are <strong>not</strong> a clinic,
              pharmacy, or telehealth platform. We do not prescribe medications, deliver care, or
              maintain doctor–patient relationships. We do not access your medical records.
            </p>

            <h2 className="text-2xl font-bold pt-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              No medical advice
            </h2>
            <p style={{ color: '#3D5560' }}>
              Information on this site — including provider reviews, drug comparisons, pricing
              guides, and FAQ answers — is for educational purposes only. It is not a substitute
              for the medical advice, diagnosis, or treatment decisions of a licensed healthcare
              provider who knows your specific medical history.
            </p>
            <p style={{ color: '#3D5560' }}>
              Do not start, stop, or change a medication based on something you read here. GLP-1
              medications carry meaningful risks including (but not limited to) gastrointestinal
              side effects, gallbladder problems, pancreatitis, kidney issues, and known
              contraindications with personal or family history of medullary thyroid carcinoma or
              MEN2 syndrome. Individual response varies.
            </p>

            <h2 className="text-2xl font-bold pt-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              About compounded GLP-1 specifically
            </h2>
            <p style={{ color: '#3D5560' }}>
              Most providers we cover sell <strong>compounded</strong> semaglutide and tirzepatide.
              Compounded medications are <strong>not FDA-approved</strong>. They are mixed by 503A
              or 503B compounding pharmacies for individual patient prescriptions. Clinical evidence
              for compounded versions is significantly less robust than for FDA-approved branded
              products (Wegovy, Zepbound, Ozempic, Mounjaro).
            </p>
            <p style={{ color: '#3D5560' }}>
              In March 2026 the FDA issued warning letters to more than 30 telehealth companies
              over compounded GLP-1 marketing practices including misleading "sameness" claims to
              branded medications, deceptive pricing, and unsubstantiated efficacy. The April 2026
              FDA enforcement update further narrowed the legal scope of compounding for these
              molecules. The regulatory environment is actively evolving and this content may
              become out of date quickly.
            </p>
            <p style={{ color: '#3D5560' }}>
              We re-verify provider availability and pricing monthly. We update or remove content
              when claims become inaccurate or when regulatory status changes. We do not promise
              that any specific provider listed today will still be operating tomorrow.
            </p>

            <h2 className="text-2xl font-bold pt-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              No equivalence to branded
            </h2>
            <p style={{ color: '#3D5560' }}>
              Compounded semaglutide is not the same product as Wegovy or Ozempic. Compounded
              tirzepatide is not the same product as Zepbound or Mounjaro. They contain related
              active pharmaceutical ingredients but are produced under different regulatory
              regimes, with different quality controls, different supply chains, and different
              clinical evidence bases. Anywhere on this site that compares prices or efficacy
              between compounded and branded versions is doing so as a consumer-information
              comparison, not as a claim of medical equivalence.
            </p>

            <h2 className="text-2xl font-bold pt-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              Affiliate relationships
            </h2>
            <p style={{ color: '#3D5560' }}>
              We earn commissions when readers sign up with providers through our affiliate links.
              Those commissions do not change what readers pay. We rank providers by patient fit,
              not by what they pay us — see our{' '}
              <Link href="/methodology" className="underline">
                methodology
              </Link>{' '}
              and{' '}
              <Link href="/affiliate-disclosure" className="underline">
                full affiliate disclosure
              </Link>{' '}
              for the details.
            </p>

            <h2 className="text-2xl font-bold pt-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              When to call your doctor instead
            </h2>
            <ul className="space-y-2" style={{ color: '#3D5560' }}>
              <li className="flex gap-2"><ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#0E6E5A' }} /><span>Before starting any GLP-1 medication, especially if you have a personal/family history of thyroid cancer, MEN2, pancreatitis, gallbladder disease, or severe gastrointestinal disorders.</span></li>
              <li className="flex gap-2"><ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#0E6E5A' }} /><span>If you experience severe abdominal pain, persistent vomiting, signs of pancreatitis or gallbladder disease, or any concerning symptom while on GLP-1 medication.</span></li>
              <li className="flex gap-2"><ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#0E6E5A' }} /><span>If you are pregnant, planning pregnancy, or breastfeeding — GLP-1 medications are not recommended.</span></li>
              <li className="flex gap-2"><ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#0E6E5A' }} /><span>Before combining GLP-1 medication with insulin, sulfonylureas, or other diabetes medications.</span></li>
              <li className="flex gap-2"><ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#0E6E5A' }} /><span>If you are unsure whether a compounded vs. branded medication is right for your situation.</span></li>
            </ul>

            <h2 className="text-2xl font-bold pt-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              Authoritative sources we link to
            </h2>
            <ul className="space-y-1.5 text-sm" style={{ color: '#3D5560' }}>
              <li>
                FDA — Medications containing semaglutide marketed for type 2 diabetes or weight loss:{' '}
                <a className="underline" href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/medications-containing-semaglutide-marketed-type-2-diabetes-or-weight-loss" target="_blank" rel="noopener noreferrer">FDA.gov</a>
              </li>
              <li>
                FDA — Drug Safety Communications:{' '}
                <a className="underline" href="https://www.fda.gov/drugs/drug-safety-and-availability/drug-safety-communications" target="_blank" rel="noopener noreferrer">FDA.gov</a>
              </li>
              <li>
                FDA — Compounding and the FDA: Questions and Answers:{' '}
                <a className="underline" href="https://www.fda.gov/drugs/human-drug-compounding/compounding-and-fda-questions-and-answers" target="_blank" rel="noopener noreferrer">FDA.gov</a>
              </li>
              <li>
                NIH MedlinePlus — Semaglutide Injection:{' '}
                <a className="underline" href="https://medlineplus.gov/druginfo/meds/a618008.html" target="_blank" rel="noopener noreferrer">medlineplus.gov</a>
              </li>
              <li>
                FTC — Health Products Compliance Guidance:{' '}
                <a className="underline" href="https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance" target="_blank" rel="noopener noreferrer">ftc.gov</a>
              </li>
            </ul>

            <p className="pt-6 text-xs" style={{ color: '#6B7B82' }}>
              This disclaimer is reviewed and updated whenever the FDA or FTC issues material
              guidance affecting GLP-1 telehealth or compounding. If you have questions about the
              accuracy of any specific claim on this site, contact us through the methodology page.
            </p>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
