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
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { primaryProviders } from '@/lib/glp1-providers';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Pill, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tirzepatide Tablets 2026: Do They Exist? FDA Status & Options',
  description:
    'No FDA-approved tirzepatide tablet in 2026 — Zepbound and Mounjaro are injectable only. Compounded sublingual drops (~$224/mo), GLP-1 gum, and oral semaglutide alternatives compared.',
  alternates: { canonical: 'https://glp1comparehub.com/tirzepatide-tablets' },
  openGraph: {
    title: 'Tirzepatide Tablets — Are They Real? May 2026 Reality Check',
    description:
      'No FDA-approved tirzepatide tablet exists. Compounded oral options (sublingual drops at $224.10/mo, GLP-1 gum at Embody) plus the FDA-approved oral alternative.',
    url: 'https://glp1comparehub.com/tirzepatide-tablets',
    siteName: 'GLP1CompareHub',
    type: 'article',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-tirzepatide-tablets.jpg', width: 1168, height: 784, alt: 'Tirzepatide Tablets — oral format vs injectable comparison' }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tirzepatide Tablets May 2026: FDA Status, Compounded Options, and FDA-Approved Alternatives',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/tirzepatide-tablets',
  about: ['Tirzepatide tablets', 'Oral tirzepatide', 'Wegovy Pill', 'Rybelsus', 'Compounded GLP-1'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are tirzepatide tablets available in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. There is no FDA-approved tirzepatide tablet in May 2026. Branded tirzepatide is sold only as injectable Zepbound (weight loss) and Mounjaro (type-2 diabetes). The closest things to "tirzepatide tablets" available through verified telehealth are: (1) compounded sublingual tirzepatide drops at Direct Meds ($224.10/mo) — held under tongue daily, not swallowed; (2) compounded GLP-1 gum at Embody — chewable, buccal absorption. Neither is a true swallowed tablet, and neither is FDA-approved.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Rybelsus the same as tirzepatide tablets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Rybelsus is oral semaglutide, FDA-approved for type-2 diabetes. Wegovy Pill is the new oral semaglutide formulation FDA-approved for weight loss in 2025 (about $149/mo). Both are semaglutide (GLP-1 only) — a different active ingredient than tirzepatide (which is dual GIP + GLP-1). The trial weight-loss profile of oral semaglutide is closer to injectable Wegovy than to injectable Zepbound. If you specifically want the dual GIP + GLP-1 mechanism, no FDA-approved oral version exists.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why don\'t tirzepatide tablets exist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tirzepatide is a peptide molecule that is degraded by stomach acid and digestive enzymes when swallowed in plain tablet form. The FDA-approved oral semaglutide tablet (Rybelsus) uses a permeation enhancer called SNAC to facilitate stomach absorption, achieving roughly 0.4-1% bioavailability — sufficient because semaglutide is potent at the resulting plasma concentrations. Eli Lilly has not publicly announced an oral tirzepatide tablet in development. Compounded sublingual and gum formats bypass the GI tract entirely (absorbing through mucous membranes) but lack rigorous bioavailability and efficacy data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are compounded tirzepatide tablets legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded tirzepatide oral formats (sublingual, gum) are produced by 503A pharmacies under FDA exemptions. Post-April 1 2026, the FDA restricted 503A pharmacies to true patient-specific compounding (documented allergies, custom strengths) rather than routine telehealth-scale production. Compounded oral formats are still being produced by reputable LegitScript-accredited 503A pharmacies under narrow exceptions, but the compliance landscape has tightened. Verify your provider is operating under valid 503A patient-specific compounding before purchase.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the closest FDA-approved alternative to tirzepatide tablets for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wegovy Pill (oral semaglutide), FDA-approved for weight loss in 2025, at approximately $149/mo. This is a true swallowed tablet — different active ingredient (semaglutide, not tirzepatide), but it is the only FDA-approved oral GLP-1 weight-loss medication. Trial weight-loss data is closer to injectable Wegovy than to injectable Zepbound. For patients prioritizing FDA approval + tablet format over the dual GIP + GLP-1 mechanism, this is the answer.',
      },
    },
  ],
};

export default function TirzepatideTabletsPage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA href={buildGlp1AffiliateUrl('tmates', 'tirzepatide-tablets')} brandName="TMates" pricePitch="Compounded tirzepatide injectable from $167/mo" />

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
              <span style={{ color: '#0E2A3A' }}>Tirzepatide Tablets</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <span style={{ color: '#D4A33A' }}>Tirzepatide</span> Tablets — Are They Real?
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Short answer: no FDA-approved tirzepatide tablet exists in May 2026. Here are the actual compounded oral options, the closest FDA-approved alternative, and what to ask before paying for &ldquo;tirzepatide tablets&rdquo; online.
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

        {/* Top reality check */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-5' style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}>
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  Reality check: There is no FDA-approved tirzepatide tablet
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                Branded tirzepatide is injectable only — Zepbound (weight loss) and Mounjaro (type-2 diabetes), both
                from Eli Lilly. If you see a product marketed as &ldquo;tirzepatide tablets&rdquo; online, it is one
                of three things: (1) a compounded sublingual/oral format from a 503A pharmacy (NOT FDA-approved); (2)
                confused marketing that actually means oral semaglutide (Rybelsus / Wegovy Pill — different active
                ingredient); or (3) a fraudulent product from an unregulated source. This page distinguishes them.
              </div>
            </div>
          </div>
        </section>

        {/* The honest answer grid */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Pill className='h-6 w-6' style={{ color: '#D4A33A' }} />
              What &ldquo;Tirzepatide Tablets&rdquo; Actually Refers To
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Searches for &ldquo;tirzepatide tablets&rdquo; usually map to one of four real products. Here&rsquo;s
              what each one actually is:
            </p>

            <div className='space-y-4'>
              <ProductCard
                category='Compounded'
                name='Compounded Sublingual Tirzepatide Drops'
                provider='Direct Meds'
                price='$224.10/mo'
                fdaStatus='NOT FDA-approved'
                what='Liquid compounded tirzepatide held under the tongue for absorption through sublingual mucosa. Daily administration. Closest needle-free format to "tablets" but technically drops, not pills.'
                href='/oral-tirzepatide'
                primary
              />
              <ProductCard
                category='Compounded'
                name='Compounded GLP-1 Gum (Tirzepatide)'
                provider='Embody'
                price='$149 first / $299 flat refills'
                fdaStatus='NOT FDA-approved'
                what='Compounded chewable gum format for buccal absorption. Daily chewing schedule. Embody is the only verified provider in our active stack with this format.'
                href='/oral-tirzepatide'
                primary
              />
              <ProductCard
                category='FDA-approved'
                name='Wegovy Pill (Oral Semaglutide)'
                provider='Manufacturer-direct + telehealth'
                price='From $149/mo'
                fdaStatus='FDA-approved 2025'
                what='True FDA-approved tablet — but semaglutide, NOT tirzepatide. Different active ingredient (GLP-1 only, not the dual GIP+GLP-1 of tirzepatide). Closest FDA-approved oral GLP-1 weight-loss option.'
                href='/zepbound-vs-wegovy'
              />
              <ProductCard
                category='FDA-approved (Diabetes)'
                name='Rybelsus (Oral Semaglutide for T2D)'
                provider='Pharmacies via prescription'
                price='~$1,000/mo cash; insurance varies'
                fdaStatus='FDA-approved 2019 (T2D only)'
                what='Original FDA-approved oral semaglutide tablet, indicated for type-2 diabetes (not weight loss). Same molecule as Wegovy Pill at different dosing/labeling. Off-label weight-loss prescribing exists but is not on-label.'
                href='/zepbound-vs-wegovy'
              />
            </div>
          </div>
        </section>

        {/* Why no FDA-approved tablet */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Why Doesn&rsquo;t an FDA-Approved Tirzepatide Tablet Exist Yet?
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Tirzepatide is a peptide molecule. Peptides are degraded by stomach acid and digestive enzymes when
              swallowed in plain tablet form — typically less than 1% reaches the bloodstream. The FDA-approved oral
              semaglutide (Rybelsus / Wegovy Pill) solves this with a permeation enhancer (SNAC) that facilitates
              stomach absorption. Even with SNAC, oral semaglutide achieves only ~0.4-1% bioavailability, requiring a
              much higher mg dose than the injectable equivalent.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              For tirzepatide specifically, Eli Lilly has not publicly announced an oral tablet program. The dual GIP
              + GLP-1 mechanism would presumably face the same peptide-absorption challenges, requiring either a SNAC-style
              permeation enhancer or a different absorption mechanism entirely. Until such a formulation passes FDA
              review, there is no FDA-approved tirzepatide tablet. We re-verify Lilly&rsquo;s pipeline quarterly.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Compounded oral tirzepatide</strong> (sublingual drops, gum) bypasses the GI tract entirely by
              absorbing through mucous membranes under the tongue or in the cheek. This avoids the peptide-degradation
              problem but lacks the rigorous bioavailability and efficacy data that FDA-approved formulations require.
              Patients should reasonably expect possibly reduced efficacy compared to injectable.
            </p>
          </div>
        </section>

        {/* Decision framework */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Which Oral Option Fits You?
            </h2>
            <div className='space-y-3'>
              <DecisionRow
                ifClause='You specifically want FDA-approved + tablet format'
                pick='Wegovy Pill (oral semaglutide), $149/mo'
                color='#7CA982'
              />
              <DecisionRow
                ifClause='You want the cheapest needle-free compounded tirzepatide'
                pick='Direct Meds sublingual drops, $224.10/mo'
                color='#D4A33A'
              />
              <DecisionRow
                ifClause='You want a chewable format (gum) at flat-refill pricing'
                pick='Embody GLP-1 gum, $149 first / $299 flat refills'
                color='#D4A33A'
              />
              <DecisionRow
                ifClause='You want the dual GIP + GLP-1 mechanism (tirzepatide-specific)'
                pick='Compounded oral tirzepatide is the only oral path; injectable is the only FDA-approved path'
                color='#6B7B82'
              />
              <DecisionRow
                ifClause='You have type-2 diabetes and want oral semaglutide'
                pick='Rybelsus via your prescriber (insurance covers in many cases)'
                color='#7CA982'
              />
            </div>
          </div>
        </section>

        {/* Cross-link to oral page */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='p-6 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
              <h3
                className='text-xl font-bold mb-2'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Want a deeper read on the actual oral options?
              </h3>
              <p className='text-sm mb-4' style={{ color: '#3D5560' }}>
                We have a dedicated guide covering compounded sublingual tirzepatide drops, the GLP-1 gum format,
                and the bioavailability honest-read for each. Includes the side-by-side oral-vs-injection comparison.
              </p>
              <Link
                href='/oral-tirzepatide'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all'
                style={{ color: '#D4A33A', border: '1.5px solid #D4A33A' }}
              >
                Read: Oral Tirzepatide (Sublingual + Gum) Guide <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </div>
        </section>

        {/* What to ask before purchase */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              5 Questions to Ask Before Buying &ldquo;Tirzepatide Tablets&rdquo; Online
            </h2>
            <div className='space-y-3'>
              <CheckRow
                question='1. Is the product FDA-approved?'
                answer='If yes, ask for the NDC number and verify on FDA.gov. If no (compounded), the SURMOUNT-1 efficacy data does not automatically apply.'
              />
              <CheckRow
                question='2. What format is it actually — sublingual, gum, swallowed tablet, or injection?'
                answer='True swallowed tablets of tirzepatide do not exist in 2026. If a provider claims to offer one, that is a red flag. Sublingual drops and gum formats are real but absorb differently than tablets.'
              />
              <CheckRow
                question='3. Which compounding pharmacy makes it?'
                answer='Reputable providers will name the LegitScript or NABP-accredited 503A pharmacy. If they evade or refuse, that is a yellow flag — especially post-April 2026 when 503A enforcement tightened.'
              />
              <CheckRow
                question='4. Is the pricing all-inclusive?'
                answer='Watch for separate consult fees, lab charges, and dose-escalation upcharges. Most verified providers (Embody, System Labs, Direct Meds, Eden, Gala, Care Bare) bundle medication + consult + shipping in one monthly fee.'
              />
              <CheckRow
                question='5. What is the cancellation policy?'
                answer='Most verified compounded telehealth programs allow cancel-anytime. Some require 3-month commitments. Read the policy before paying — that flexibility is worth real money if the medication does not work for you.'
              />
            </div>
          </div>
        </section>

        {/* Provider table */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Verified Compounded Tirzepatide Providers (May 2026)
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Direct Meds and Embody are the only providers offering oral formats. The rest offer injectable.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='tirzepatide-tablets'
              heading='Top Compounded Tirzepatide Programs (Verified May 2026)'
            />
          </div>
        </section>

        <RelatedGuides currentPath="/tirzepatide-tablets" />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Get matched to the right format in 60 seconds.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz routes you to the verified provider that fits your format preference (oral, sublingual, gum, injectable), budget, and timeline.
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
                  href='/oral-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Oral Tirzepatide Deep Dive
                </Link>
                <Link
                  href='/zepbound-vs-wegovy'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Branded Comparison
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

function ProductCard({ category, name, provider, price, fdaStatus, what, href, primary = false }: { category: string; name: string; provider: string; price: string; fdaStatus: string; what: string; href: string; primary?: boolean }) {
  return (
    <div
      className='p-5 rounded-2xl bg-white'
      style={{ border: primary ? '2px solid #D4A33A' : '1px solid #E5DDC8' }}
    >
      <div className='flex flex-wrap items-baseline gap-3 mb-2'>
        <span className='text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: primary ? '#F4EBD0' : '#F8F4ED', color: '#7A6020' }}>
          {category}
        </span>
        <h3 className='text-lg font-bold' style={{ color: '#0E2A3A' }}>{name}</h3>
      </div>
      <div className='flex flex-wrap gap-4 mb-2 text-sm' style={{ color: '#3D5560' }}>
        <span><strong>Via:</strong> {provider}</span>
        <span><strong>Price:</strong> <span style={{ color: '#D4A33A', fontWeight: 700 }}>{price}</span></span>
        <span><strong>FDA:</strong> {fdaStatus}</span>
      </div>
      <p className='text-sm leading-relaxed mb-3' style={{ color: '#3D5560' }}>{what}</p>
      <Link href={href} className='text-sm font-semibold inline-flex items-center gap-1' style={{ color: '#D4A33A' }}>
        Learn more <ArrowRight className='h-3 w-3' />
      </Link>
    </div>
  );
}

function DecisionRow({ ifClause, pick, color }: { ifClause: string; pick: string; color: string }) {
  return (
    <div className='flex items-start gap-4 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <CircleCheck className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color }} />
      <div>
        <div className='text-sm mb-1' style={{ color: '#6B7B82' }}>If…</div>
        <div className='text-base font-semibold mb-1' style={{ color: '#0E2A3A' }}>{ifClause}</div>
        <div className='text-sm' style={{ color: '#3D5560' }}>
          → <strong style={{ color }}>{pick}</strong>
        </div>
      </div>
    </div>
  );
}

function CheckRow({ question, answer }: { question: string; answer: string }) {
  return (
    <div className='flex items-start gap-3 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <X className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#7CA982' }} />
      <div>
        <h3 className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{question}</h3>
        <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{answer}</p>
      </div>
    </div>
  );
}
