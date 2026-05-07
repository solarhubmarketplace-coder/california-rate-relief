import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders } from '@/lib/glp1-providers';
import { buildAffiliateUrl, buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Zap, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lipotropic Injections 2026: Cost ($89/mo at Home), MIC+B12 Guide, GLP-1 Stack | GLP1CompareHub',
  description:
    'Lipotropic injections (MIC+B12) explained: how they work, what the evidence says, local clinic pricing ($25-$80/shot) vs at-home telehealth ($89/mo at System Labs), and why patients are stacking them with GLP-1 medications for energy and metabolic support.',
  alternates: { canonical: 'https://glp1comparehub.com/lipotropic-injections' },
  openGraph: {
    title: 'Lipotropic Injections — MIC+B12 Cost, At-Home Options, GLP-1 Stack',
    description:
      'Local clinic $25-$80/shot vs at-home $89/mo. The honest read on what lipotropic injections actually do, plus the GLP-1 + MIC+B12 stack pattern.',
    url: 'https://glp1comparehub.com/lipotropic-injections',
    siteName: 'GLP1CompareHub',
    type: 'article',
    images: [{ url: '/img/glp1/og-lipotropic-injections.jpg', width: 1168, height: 784, alt: 'Lipotropic Injections — telehealth provider guide 2026' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lipotropic Injections 2026: Cost, At-Home Options, and the GLP-1 Stack',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/lipotropic-injections',
  about: ['Lipotropic injections', 'MIC+B12', 'B-12 injection', 'GLP-1 metabolic stack'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are lipotropic injections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lipotropic injections are a compounded blend typically containing MIC (methionine, inositol, choline) plus vitamin B12 — sometimes with additional ingredients like L-carnitine, B-complex vitamins, or chromium. The components are individually well-studied for nutrient repletion and metabolic support; the specific MIC+B12 combination is marketed for weight-loss support and energy. The injections are administered subcutaneously or intramuscularly, typically 1-3 times weekly during a weight-loss program.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do lipotropic injections cost in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local medspa or weight-loss clinic pricing typically runs $25-$80 per injection, often packaged in 4-8 shot bundles. At-home telehealth pricing is significantly cheaper: System Labs offers MIC+B12 at $89/mo for ongoing weekly injections (Gronk-verified May 2026). Eden Health and Direct Meds also offer lipotropic blends — verify pricing at intake.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do lipotropic injections cause weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no high-quality clinical evidence that lipotropic injections directly cause weight loss as a standalone therapy. The individual components (B12, methionine, inositol, choline) play roles in metabolism and energy, and B12 deficiency can cause fatigue that reduces activity. Most clinical use of lipotropic injections is as a supportive therapy alongside calorie restriction, exercise, or GLP-1 medications — not as a primary weight-loss intervention. Marketing claims that overstate this should be approached skeptically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are people stacking lipotropic injections with GLP-1 medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GLP-1 medications reduce appetite — patients often eat less and drop micronutrient intake along with calories. B12, in particular, is a common deficiency during caloric restriction. Adding MIC+B12 injections during a GLP-1 program is theorized to support energy levels, prevent B12 deficiency, and provide metabolic cofactors. The practice is anecdotal — no published clinical trial has tested the GLP-1 + MIC+B12 combination — but the supplementation framing is medically conservative compared to other "stack" patterns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are lipotropic injections FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lipotropic injection blends are not FDA-approved as a single drug product. They are produced by 503A compounding pharmacies under FDA exemptions. Individual components like vitamin B12 (cyanocobalamin) ARE FDA-approved separately for B12 deficiency. The compounded MIC+B12 blends sold for weight-loss support are NOT FDA-approved drugs. Always work with a licensed prescriber and use accredited 503A pharmacy partners.',
      },
    },
  ],
};

export default function LipotropicInjectionsPage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  const systemLabsUrl = buildAffiliateUrl('glp1-system-labs', 'lipotropic-injections');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA href={buildGlp1AffiliateUrl('tmates', 'lipotropic-injections')} brandName="TMates" pricePitch="GLP-1 + lipotropic stack — compounded semaglutide from $158/mo" />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* Header */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Lipotropic Injections</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <span style={{ color: '#D4A33A' }}>Lipotropic Injections</span> 2026 — MIC+B12 Cost & GLP-1 Stack
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Local medspa shots run $25-$80 each. At-home weekly injection programs start at $89/mo. The honest read on what MIC+B12 actually does, what the evidence shows, and why GLP-1 patients are stacking them.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 5, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-5' style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}>
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  Important: Lipotropic injections are NOT FDA-approved as a weight-loss drug
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                Compounded MIC+B12 lipotropic blends are produced by 503A pharmacies under FDA exemptions. Individual
                components (vitamin B12, methionine, inositol, choline) are well-studied for nutrient and metabolic
                roles, but the specific weight-loss-marketed blends do not have FDA approval. There is no high-quality
                clinical evidence that lipotropic injections directly cause weight loss — most clinical use is as
                supportive therapy alongside calorie restriction, exercise, or GLP-1 medications.
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR */}
        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-6 md:p-8' style={{ backgroundColor: '#F0EBE0', border: '2px solid #D4A33A' }}>
              <div className='flex items-start gap-3 mb-5'>
                <Trophy className='h-6 w-6 flex-shrink-0' style={{ color: '#D4A33A' }} />
                <h2
                  className='text-2xl md:text-3xl font-bold'
                  style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
                >
                  TL;DR — Local vs At-Home
                </h2>
              </div>
              <div className='grid md:grid-cols-3 gap-5'>
                <VerdictCol
                  rank='Local medspa / clinic'
                  result='$25-$80/shot'
                  detail='Per-shot pricing; weekly visits required. 4-shot bundles typically $100-$250. Plus consultation, often plus B12 deficiency labs.'
                />
                <VerdictCol
                  rank='At-home telehealth'
                  result='$89/mo'
                  detail='System Labs MIC+B12 at $89/mo includes weekly self-administered subcutaneous injections, prescriber consult, and shipping.'
                />
                <VerdictCol
                  rank='Stacked with GLP-1'
                  result='$268/mo'
                  detail='System Labs GLP-1 ($179) + MIC+B12 ($89) = $268/mo total. One intake, one provider, one shipment cycle.'
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's actually in a lipotropic injection */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              What&rsquo;s Actually in a Lipotropic Injection?
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              The name &ldquo;lipotropic&rdquo; refers to compounds that affect lipid (fat) metabolism. The standard
              blend is <strong>MIC+B12</strong>, with optional add-ons:
            </p>

            <div className='space-y-3'>
              <IngredientRow
                name='Methionine'
                role='Essential amino acid; precursor to SAM-e and homocysteine. Plays a role in lipid metabolism and liver health. Not FDA-approved as a weight-loss agent.'
              />
              <IngredientRow
                name='Inositol'
                role='Vitamin-like compound (sometimes called B8). Linked to insulin signaling and PCOS support. Not FDA-approved for weight loss; some evidence for metabolic syndrome support.'
              />
              <IngredientRow
                name='Choline'
                role='Essential nutrient required for liver function and neurotransmitter synthesis. Deficiency is real but most US adults have adequate intake from diet.'
              />
              <IngredientRow
                name='Vitamin B12 (cyanocobalamin or methylcobalamin)'
                role='FDA-approved for B12 deficiency. Real role in energy metabolism and neurological function. The most clinically supported component of the blend.'
              />
              <IngredientRow
                name='Optional: L-carnitine'
                role='Amino acid derivative involved in fatty acid transport. Some metabolic-support evidence; weight-loss evidence is mixed.'
              />
              <IngredientRow
                name='Optional: B-complex vitamins'
                role='B1, B2, B6, B5 added for general energy/metabolic support. Most adults get adequate amounts from diet unless deficient.'
              />
              <IngredientRow
                name='Optional: Chromium'
                role='Trace mineral with limited evidence for blood-sugar support. Often included in metabolic-support blends.'
              />
            </div>
          </div>
        </section>

        {/* Honest evidence read */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The Honest Evidence Read
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Lipotropic injection marketing typically claims direct fat-burning, energy boost, and weight-loss
              acceleration. The peer-reviewed literature supports a more conservative read:
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What&rsquo;s well-supported:</strong> B12 supplementation in deficient patients improves energy
              and corrects neurological symptoms. Methionine and choline have established roles in liver function. B12
              deficiency is genuinely common in patients on prolonged caloric restriction (including GLP-1 patients).
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What&rsquo;s NOT well-supported:</strong> No high-quality clinical trial has shown that the
              specific MIC+B12 blends marketed for weight-loss cause meaningful weight loss as standalone therapy.
              The individual components have metabolic roles but there is not strong evidence that injecting them
              accelerates fat loss beyond what calorie restriction alone produces.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Practical implication:</strong> Treat lipotropic injections as <em>nutrient-repletion + supportive
              therapy</em>, not as a weight-loss drug. They make sense as part of a broader weight-loss program
              (especially alongside GLP-1 medications where B12 deficiency is a real concern), but skeptical of any
              marketing claim that positions them as the primary fat-loss mechanism.
            </p>
          </div>
        </section>

        {/* Cost comparison */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Zap className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Cost: Local Clinic vs At-Home Telehealth
            </h2>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Source</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Per-Shot Price</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Frequency</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Monthly Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <CostRow source='IV bar / mobile drip' perShot='$30-$60' freq='Drop-in' monthly='$120-$240/mo' />
                  <CostRow source='Local medspa' perShot='$40-$80' freq='Weekly clinic visit' monthly='$160-$320/mo + clinic fees' />
                  <CostRow source='Local weight-loss clinic' perShot='$25-$50' freq='Weekly clinic visit' monthly='$100-$200/mo + program fees' />
                  <CostRow source='System Labs (telehealth)' perShot='— (bundled)' freq='Weekly self-administered' monthly='$89/mo flat' winner />
                  <CostRow source='Eden Health (telehealth)' perShot='— (bundled)' freq='Weekly self-administered' monthly='Verify at intake' />
                  <CostRow source='Direct Meds (telehealth)' perShot='— (bundled)' freq='Weekly self-administered' monthly='Verify at intake' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#6B7B82' }}>
              Local pricing reflects typical 2026 medspa and weight-loss clinic rates; varies by metro area. At-home
              telehealth pricing Gronk-verified May 5, 2026 from System Labs (only verified provider with explicit
              MIC+B12 monthly pricing as of this date).
            </p>
          </div>
        </section>

        {/* GLP-1 stack */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The GLP-1 + MIC+B12 Stack
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              GLP-1 medications (semaglutide, tirzepatide) reduce appetite and caloric intake. Patients often drop
              micronutrient intake along with calories — particularly B12, which is one of the most common
              deficiencies during prolonged caloric restriction. Adding MIC+B12 injections is the most medically
              conservative &ldquo;stack&rdquo; pattern in the GLP-1 biohacker world.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>The thesis:</strong> GLP-1 handles appetite and weight loss; MIC+B12 prevents the energy crash
              from reduced caloric intake and supports liver/metabolic function during the cut.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>The honest read:</strong> No clinical trial has tested the GLP-1 + MIC+B12 combination as
              combined therapy. The supplementation rationale is reasonable; the marketing-implied "fat-burning
              acceleration" is not supported. Most prescribers consider B12 supplementation a sensible precaution
              during prolonged GLP-1 use, especially for patients with limited dietary variety.
            </p>

            <div className='p-5 rounded-2xl mt-5' style={{ backgroundColor: '#F4EBD0', border: '1px solid #D4A33A' }}>
              <div className='text-sm font-bold mb-2' style={{ color: '#7A6020' }}>
                System Labs: GLP-1 + MIC+B12 stack pricing (single intake)
              </div>
              <div className='space-y-1 text-sm' style={{ color: '#3D5560' }}>
                <div>Compounded GLP-1: <strong>$179/mo</strong></div>
                <div>MIC+B12 injection: <strong>$89/mo</strong></div>
                <div className='pt-2 mt-2 border-t' style={{ borderColor: '#D4A33A' }}>
                  <strong>Total: $268/mo</strong> — both programs under one provider, one intake, one shipment.
                </div>
              </div>
            </div>
            <p className='text-sm mt-4 italic' style={{ color: '#6B7B82' }}>
              See our <Link href='/providers/system-labs' className='underline' style={{ color: '#D4A33A' }}>System Labs review</Link>{' '}
              for the full longevity stack including NAD+ and sermorelin add-ons.
            </p>
          </div>
        </section>

        {/* Featured CTA */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='p-7 md:p-10 rounded-3xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
              <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                At-home alternative to local medspa visits
              </div>
              <h3
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                System Labs MIC+B12 — $89/mo
              </h3>
              <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                Self-administered weekly subcutaneous injection. No medspa visits. Stacks under a single intake with
                System Labs GLP-1 ($179/mo) and NAD+ ($79 first month) for the full longevity protocol. Lab-tested
                peptides from certified compounding pharmacies.
              </p>
              <div className='flex flex-wrap gap-3'>
                <a
                  href={systemLabsUrl}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with System Labs <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/providers/system-labs'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all'
                  style={{ color: '#D4A33A', border: '1.5px solid #D4A33A' }}
                >
                  Read Full System Labs Review
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Provider table */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare Verified Telehealth Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              All providers ship to all 50 US states. Pricing verified May 5, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='lipotropic-injections'
              heading='Top Compounded GLP-1 + Adjacent-Peptide Providers'
            />
          </div>
        </section>

        <RelatedGuides currentPath="/lipotropic-injections" />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Skip the medspa — get matched in 60 seconds.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz routes you to the verified telehealth provider for MIC+B12 injections, GLP-1, NAD+, or the full longevity stack.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Take the Quiz <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/nad-iv-therapy'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  NAD+ Therapy Guide
                </Link>
                <Link
                  href='/best-compounded-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Top GLP-1 Programs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}

function VerdictCol({ rank, result, detail }: { rank: string; result: string; detail: string }) {
  return (
    <div className='text-center'>
      <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
        {rank}
      </div>
      <div className='text-2xl font-bold mb-2' style={{ color: '#D4A33A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
        {result}
      </div>
      <p className='text-xs leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}

function IngredientRow({ name, role }: { name: string; role: string }) {
  return (
    <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <h3 className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{name}</h3>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{role}</p>
    </div>
  );
}

function CostRow({ source, perShot, freq, monthly, winner = false }: { source: string; perShot: string; freq: string; monthly: string; winner?: boolean }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>
        {source}
        {winner && (
          <span className='inline-block ml-2 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
            Cheapest
          </span>
        )}
      </td>
      <td className='px-5 py-3 text-sm' style={{ color: '#3D5560' }}>{perShot}</td>
      <td className='px-5 py-3 text-sm' style={{ color: '#3D5560' }}>{freq}</td>
      <td className='px-5 py-3 text-right font-bold' style={{ color: winner ? '#D4A33A' : '#3D5560' }}>{monthly}</td>
    </tr>
  );
}
