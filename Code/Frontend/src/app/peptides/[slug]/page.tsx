import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { peptides, getPeptideBySlug } from '@/lib/peptides-data';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, AlertCircle, CheckCircle2, ShieldCheck, FlaskConical, Pill } from 'lucide-react';

// =============================================================================
// /peptides/[slug] dynamic route
// =============================================================================
// Generates static pages for all peptides defined in peptides-data.ts.
// Each page is consumer-focused: mechanism, uses, evidence, dosing, providers,
// real user reports, and balanced "best reason / biggest red flag" framing.
// =============================================================================

export function generateStaticParams() {
  return peptides.map((p) => ({ slug: p.slug }));
}

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) return { title: 'Peptide Not Found | GLP1CompareHub' };

  return {
    title: `${peptide.name} 2026: Evidence, Dosing, Cost & GLP-1 Stacking Guide | GLP1CompareHub`,
    description: `${peptide.hook} Verified May 2026: regulatory status, telehealth providers, dosing protocols, real user reports, and honest red flags.`,
    alternates: { canonical: `https://glp1comparehub.com/peptides/${peptide.slug}` },
    openGraph: {
      title: `${peptide.name} 2026: ${peptide.category} Peptide for GLP-1 Stackers`,
      description: peptide.hook,
      type: 'article',
      siteName: 'GLP1CompareHub',
      url: `https://glp1comparehub.com/peptides/${peptide.slug}`,
      images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default async function PeptidePage({ params }: PageParams) {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${peptide.name} 2026: Evidence, Dosing, Cost & GLP-1 Stacking Guide`,
    description: peptide.hook,
    datePublished: peptide.lastUpdated,
    dateModified: peptide.lastUpdated,
    author: { '@type': 'Organization', name: 'GLP1CompareHub' },
    publisher: { '@type': 'Organization', name: 'GLP1CompareHub' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://glp1comparehub.com/peptides/${peptide.slug}` },
  };

  return (
    <GLP1Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <GLP1Header />
      <MedicalDisclaimerBanner />

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/peptides" className="hover:text-blue-600">Peptides</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{peptide.name}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
          {peptide.category}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
          {peptide.name}
          {peptide.fullName && (
            <span className="block text-base font-normal text-gray-500 mt-1">
              {peptide.fullName}
            </span>
          )}
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-3xl">{peptide.hook}</p>

        <EditorialReviewBox />

        {/* What it is */}
        <section className="mb-10 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What It Is</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{peptide.description}</p>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <FlaskConical size={18} className="text-blue-600" /> Mechanism
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{peptide.mechanism}</p>
          </div>
        </section>

        {/* Consumer uses */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Consumers Use It For</h2>
          <ul className="space-y-2">
            {peptide.consumerUses.map((use, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={18} />
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Legal status */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal &amp; Regulatory Status (May 2026)</h2>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-start gap-2">
              <ShieldCheck className="text-blue-600 shrink-0 mt-0.5" size={20} />
              <p className="text-blue-900 text-sm leading-relaxed">{peptide.legalStatus}</p>
            </div>
          </div>
        </section>

        {/* Providers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Telehealth Providers &amp; Pricing</h2>
          <p className="text-gray-700 text-sm mb-4">
            Verified May 2026. Pricing varies by dose, plan length, and bundling. Always confirm directly with the provider before signup.
          </p>
          <div className="space-y-3">
            {peptide.providers.map((p, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div>
                  <p className="font-bold text-gray-900">{p.name}</p>
                  <p className="text-gray-600 text-sm mt-1">{p.pricingNote}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Evidence Actually Shows</h2>
          <p className="text-gray-700 leading-relaxed">{peptide.evidenceSummary}</p>
        </section>

        {/* Dosing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Dosing Protocol</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-start gap-2">
              <Pill className="text-blue-600 shrink-0 mt-0.5" size={20} />
              <p className="text-gray-700 text-sm leading-relaxed">{peptide.typicalDosing}</p>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-3 italic">
            Dosing should be confirmed by your prescribing physician — these are common consumer protocols, not medical advice.
          </p>
        </section>

        {/* User reports */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Real Users Report</h2>
          <p className="text-gray-700 text-sm italic mb-3">
            Synthesized from Reddit (r/Peptides, r/Semaglutide, r/Tirzepatide) and forums, May 2025-2026:
          </p>
          <p className="text-gray-700 leading-relaxed">{peptide.userReports}</p>
        </section>

        {/* Safety */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety &amp; Contraindications</h2>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={20} />
              <p className="text-amber-900 text-sm leading-relaxed">{peptide.safety}</p>
            </div>
          </div>
        </section>

        {/* Best reason / red flag */}
        <section className="mb-10 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
            <h3 className="font-bold text-emerald-900 mb-2">Best Reason to Add It</h3>
            <p className="text-emerald-900 text-sm leading-relaxed">{peptide.bestReason}</p>
          </div>
          <div className="rounded-xl border-2 border-red-300 bg-red-50 p-5">
            <h3 className="font-bold text-red-900 mb-2">Biggest Red Flag</h3>
            <p className="text-red-900 text-sm leading-relaxed">{peptide.redFlag}</p>
          </div>
        </section>

        {/* Stack hint — TMates as default GLP-1 starting point */}
        <section className="mb-10 rounded-xl border border-gray-200 bg-white p-5">
          <p className="text-gray-700 text-sm">
            <strong>Stacking note:</strong> Peptides are typically considered after a GLP-1 protocol is dialed in. If you have not started GLP-1 therapy yet, optimize that first.{' '}
            <a
              href={buildGlp1AffiliateUrl('tmates', `peptides-${peptide.slug}`)}
              target="_blank"
              rel="sponsored noopener"
              className="text-blue-600 underline font-semibold"
            >
              Compare GLP-1 telehealth pricing here
            </a>{' '}
            before adding peptide protocols.
          </p>
        </section>

        {/* Other peptides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Peptides for GLP-1 Stackers</h2>
          <div className="flex flex-wrap gap-2">
            {peptides
              .filter((p) => p.slug !== peptide.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/peptides/${p.slug}`}
                  className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  {p.name}
                </Link>
              ))}
          </div>
        </section>
      </main>

      <RelatedGuides currentPath={`/peptides/${peptide.slug}`} priorityCluster="peptide" />
      <StickyMobileCTA
        href={buildGlp1AffiliateUrl('tmates', `peptides-${peptide.slug}`)}
        brandName="TMates"
        pricePitch="GLP-1 telehealth from $158/mo — start here before stacking peptides"
      />
      <GLP1Footer />
    </GLP1Layout>
  );
}
