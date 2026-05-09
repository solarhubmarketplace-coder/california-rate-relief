import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { peptides } from '@/lib/peptides-data';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Peptide Therapy Guide for GLP-1 Users 2026: BPC-157, PT-141, Ipamorelin & More | GLP1CompareHub',
  description:
    'Honest peptide guides for GLP-1 users: BPC-157 (gut + recovery), Ipamorelin/CJC-1295 (muscle preservation), PT-141 (libido), TB-500 (recovery), AOD-9604 (fat loss). Pricing, evidence, and red flags. Updated May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/peptides' },
  openGraph: {
    title: 'Peptide Therapy Guide for GLP-1 Users 2026',
    description:
      'Five most-stacked peptides for GLP-1 users: gut healing, muscle preservation, libido rescue, recovery, and stubborn fat loss. Honest evidence reviews and provider pricing.',
    type: 'website',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/peptides',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Peptide Therapy for GLP-1 Users',
  description: 'Honest consumer guides to peptides commonly stacked with GLP-1 medications.',
  url: 'https://glp1comparehub.com/peptides',
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub' },
};

export default function PeptidesIndex() {
  return (
    <GLP1Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <GLP1Header />
      <MedicalDisclaimerBanner />

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">Peptides</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Peptide Therapy Guide for GLP-1 Users (May 2026)
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6 max-w-3xl">
          Honest guides to the five peptides most commonly stacked with semaglutide and tirzepatide. Pricing, evidence, dosing, and the red flags consumer-marketing usually leaves out.
        </p>

        <EditorialReviewBox />

        {/* Regulatory context */}
        <div className="my-8 rounded-xl border-2 border-blue-300 bg-blue-50 p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="text-blue-600 mt-0.5 shrink-0" size={26} />
            <div>
              <p className="font-bold text-blue-900 text-lg mb-2">Regulatory context as of May 2026</p>
              <p className="text-blue-900 text-sm leading-relaxed">
                None of the peptides on this site are FDA-approved for the off-label uses consumers commonly chase. Several were removed from the FDA Category 2 restricted list in April 2026 and are now eligible for patient-specific 503A compounding with a valid prescription. A PCAC review on July 23-24, 2026 is expected to formalize the status of BPC-157, TB-500, and others. Use only via licensed telehealth with physician oversight — gray-market &quot;research peptide&quot; sales are illegal for human use and carry sourcing/contamination risks.
              </p>
            </div>
          </div>
        </div>

        {/* Peptide grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">The Five Most-Stacked Peptides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {peptides.map((p) => (
              <Link
                key={p.slug}
                href={`/peptides/${p.slug}`}
                className="block rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                  {p.category}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  {p.name}
                  {p.fullName && (
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      ({p.fullName})
                    </span>
                  )}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{p.hook}</p>
                <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold">
                  Read full guide <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-12 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Editorial note:</strong> The content on this site is informational and is not medical advice. Peptide therapy decisions should be made with a licensed healthcare provider. Evidence bases for off-label peptide uses are limited; we present what is known and flag what is not. We may earn a commission if you sign up with telehealth providers we link to — at no extra cost to you.{' '}
            <Link href="/affiliate-disclosure" className="text-blue-600 underline">Full disclosure</Link>.
          </p>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
