import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders } from '@/lib/glp1-providers';
import { ArrowRight, ShieldCheck, AlertCircle, CircleCheck, Calendar, Pill, Droplet } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oral Tirzepatide May 2026: Sublingual Drops + GLP-1 Gum (Needle-Free Compounded GLP-1) | GLP1CompareHub',
  description:
    'Compounded oral tirzepatide is now available in two needle-free formats: Direct Meds sublingual drops at $224.10/mo and Embody GLP-1 gum. Bioavailability, dosing, and how the oral route compares to injection — verified May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/oral-tirzepatide' },
  openGraph: {
    title: 'Oral Tirzepatide — Sublingual + GLP-1 Gum (Needle-Free)',
    description:
      'Two verified needle-free compounded tirzepatide formats in May 2026: Direct Meds sublingual ($224.10/mo) and Embody GLP-1 gum. Side-by-side bioavailability and pricing.',
    url: 'https://glp1comparehub.com/oral-tirzepatide',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Oral Tirzepatide May 2026: Sublingual Drops + GLP-1 Gum (Needle-Free Compounded GLP-1)',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/oral-tirzepatide',
  about: ['Oral tirzepatide', 'Sublingual tirzepatide', 'GLP-1 gum', 'Compounded tirzepatide', 'Needle-free GLP-1'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there an oral form of tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no FDA-approved oral tirzepatide as of May 2026. Branded Zepbound and Mounjaro are injectable only. However, two compounded oral formats are available through verified telehealth: Direct Meds offers compounded sublingual (under-the-tongue) tirzepatide drops at $224.10/mo, and Embody offers a compounded GLP-1 gum format. Both are NOT FDA-approved. Oral semaglutide IS FDA-approved as Wegovy Pill ($149/mo) and Rybelsus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sublingual tirzepatide as effective as the injection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no published head-to-head clinical trial comparing compounded sublingual tirzepatide to injectable tirzepatide. The clinical efficacy data from branded injectable tirzepatide (SURMOUNT-1: 20.2% weight loss) does NOT automatically transfer to compounded sublingual versions. Bioavailability of peptides taken sublingually is generally lower than injection — the FDA-approved oral semaglutide (Rybelsus) requires a much higher dose than injectable semaglutide to achieve similar effect. Patients should expect possibly reduced efficacy and adjust expectations accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does GLP-1 gum work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Embody offers a compounded GLP-1 gum format as a daily oral chewable alternative to injection. The gum is designed to release the active compound through buccal (cheek-side) absorption when chewed. As with sublingual drops, no published clinical trial data compares the gum format to injection. Embody markets it as an option for needle-averse patients who still want compounded GLP-1 therapy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest needle-free tirzepatide option?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct Meds sublingual tirzepatide drops at $224.10/mo are the cheapest verified needle-free compounded tirzepatide option in our active May 2026 stack. Embody GLP-1 gum pricing is bundled into their $149 first-month / $299 flat-refill program rather than priced separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Wegovy Pill the same as oral tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Wegovy Pill is oral semaglutide — a different active ingredient. Tirzepatide is the dual GIP + GLP-1 receptor agonist in injectable Zepbound and Mounjaro; semaglutide is the GLP-1-only agonist in injectable Wegovy and Ozempic. Wegovy Pill is FDA-approved at $149/mo. Oral tirzepatide is only available compounded (NOT FDA-approved). See our Zepbound vs Wegovy comparison for the full comparison.',
      },
    },
  ],
};

export default function OralTirzepatidePage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />

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
              <span style={{ color: '#0E2A3A' }}>Oral Tirzepatide</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Oral <span style={{ color: '#D4A33A' }}>Tirzepatide</span> 2026 — Sublingual + GLP-1 Gum
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Two verified needle-free compounded tirzepatide formats in May 2026 — sublingual drops and a GLP-1 gum. Bioavailability, dosing, and how oral compares to injection.
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

        {/* Top FDA notice */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-5' style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}>
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  Important: There is no FDA-approved oral tirzepatide
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                Branded Zepbound (tirzepatide) and Mounjaro are injectable only. The oral formats covered on this page —
                sublingual drops at Direct Meds and the GLP-1 gum at Embody — are <strong>compounded</strong>, NOT
                FDA-approved. Bioavailability of orally-administered peptides is generally lower than injection, and
                no head-to-head clinical trial has compared compounded oral tirzepatide to injection. The post-April
                2026 FDA enforcement landscape applies to compounded oral as well as injectable tirzepatide.
                If you want an FDA-approved oral GLP-1, see the Wegovy Pill (oral semaglutide) at $149/mo —
                <Link href='/zepbound-vs-wegovy' className='underline ml-1' style={{ color: '#B14739' }}>compare here</Link>.
              </div>
            </div>
          </div>
        </section>

        {/* Two formats hero */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The Two Verified Oral Formats
            </h2>
            <p className='text-sm mb-7 text-center' style={{ color: '#6B7B82' }}>
              Both available through verified telehealth in May 2026. Both compounded (NOT FDA-approved).
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {/* Sublingual */}
              <div className='p-6 rounded-2xl' style={{ backgroundColor: '#F0EBE0', border: '2px solid #D4A33A' }}>
                <div className='flex items-center gap-3 mb-3'>
                  <Droplet className='h-6 w-6' style={{ color: '#D4A33A' }} />
                  <h3 className='text-xl font-bold' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                    Sublingual Drops
                  </h3>
                </div>
                <p className='text-sm mb-3 leading-relaxed' style={{ color: '#3D5560' }}>
                  Liquid compounded tirzepatide held under the tongue for 60-90 seconds for absorption through
                  the sublingual mucosa. Daily administration. Direct Meds is the only verified provider.
                </p>
                <div className='space-y-2 text-sm mb-4' style={{ color: '#3D5560' }}>
                  <div className='flex justify-between'>
                    <span>Provider:</span>
                    <strong style={{ color: '#0E2A3A' }}>Direct Meds</strong>
                  </div>
                  <div className='flex justify-between'>
                    <span>Monthly price:</span>
                    <strong style={{ color: '#D4A33A' }}>$224.10/mo</strong>
                  </div>
                  <div className='flex justify-between'>
                    <span>Administration:</span>
                    <span>Daily under-the-tongue</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Refrigeration:</span>
                    <span>Yes (cold-chain ship)</span>
                  </div>
                </div>
                <Link
                  href='/providers/directmeds'
                  className='inline-flex items-center gap-1 text-sm font-bold'
                  style={{ color: '#D4A33A' }}
                >
                  Read Direct Meds review <ArrowRight className='h-4 w-4' />
                </Link>
              </div>

              {/* GLP-1 Gum */}
              <div className='p-6 rounded-2xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
                <div className='flex items-center gap-3 mb-3'>
                  <Pill className='h-6 w-6' style={{ color: '#D4A33A' }} />
                  <h3 className='text-xl font-bold' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                    GLP-1 Gum
                  </h3>
                </div>
                <p className='text-sm mb-3 leading-relaxed' style={{ color: '#3D5560' }}>
                  Compounded chewable gum format designed for buccal absorption. Daily chewing schedule.
                  Embody is the only verified provider. Available alongside Embody&rsquo;s injectable program.
                </p>
                <div className='space-y-2 text-sm mb-4' style={{ color: '#3D5560' }}>
                  <div className='flex justify-between'>
                    <span>Provider:</span>
                    <strong style={{ color: '#0E2A3A' }}>Embody</strong>
                  </div>
                  <div className='flex justify-between'>
                    <span>Monthly price:</span>
                    <strong style={{ color: '#D4A33A' }}>$149 first / $299 flat</strong>
                  </div>
                  <div className='flex justify-between'>
                    <span>Administration:</span>
                    <span>Daily chewable</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Refrigeration:</span>
                    <span>Confirm with provider</span>
                  </div>
                </div>
                <Link
                  href='/providers/embody'
                  className='inline-flex items-center gap-1 text-sm font-bold'
                  style={{ color: '#D4A33A' }}
                >
                  Read Embody review <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Oral vs injectable comparison */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Oral vs Injectable Tirzepatide — Side-by-Side
            </h2>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F0EBE0' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Factor</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Oral (Sublingual / Gum)</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Injectable (Compounded)</th>
                  </tr>
                </thead>
                <tbody>
                  <FactRow factor='Administration' oral='Daily oral (drops or gum)' inj='Weekly subcutaneous injection' />
                  <FactRow factor='Bioavailability' oral='Lower (peptide oral absorption challenges)' inj='Standard subcutaneous bioavailability' />
                  <FactRow factor='Clinical trial data' oral='None published for compounded oral tirzepatide' inj='Branded SURMOUNT-1: 20.2% weight loss (compounded data DNE transfer)' />
                  <FactRow factor='Needle required' oral='No' inj='Yes (small subcutaneous needle, weekly)' />
                  <FactRow factor='Storage' oral='Refrigeration (sublingual); confirm for gum' inj='Refrigeration required' />
                  <FactRow factor='Monthly cost' oral='$149-$299/mo' inj='$179-$399/mo' />
                  <FactRow factor='Dosing flexibility' oral='Daily — easier to adjust' inj='Weekly — slower titration cycle' />
                  <FactRow factor='Adherence pattern' oral='Daily habit (some find easier)' inj='Weekly habit (others find easier)' />
                  <FactRow factor='FDA approval status' oral='Compounded — NOT FDA-approved' inj='Compounded — NOT FDA-approved (branded Zepbound IS approved injectable)' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#6B7B82' }}>
              Bioavailability note: The only FDA-approved oral GLP-1 (Wegovy Pill / Rybelsus, oral semaglutide) requires a
              significantly higher mg dose than injectable to achieve comparable plasma exposure. The same physiology
              likely applies to oral tirzepatide formats, though no head-to-head trial has been published for the compounded versions.
            </p>
          </div>
        </section>

        {/* Bioavailability deep-dive */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The Bioavailability Question — Honest Read
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Peptides like tirzepatide and semaglutide are large molecules. The gastrointestinal tract is generally hostile to
              peptide absorption — stomach acid and digestive enzymes degrade them before they reach the bloodstream. This is
              why injectable GLP-1s have dominated since their introduction: subcutaneous injection bypasses GI degradation
              and delivers ~100% of the dose into systemic circulation.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Oral GLP-1 has been engineered around this problem. The FDA-approved oral semaglutide (Rybelsus / Wegovy Pill)
              uses a permeation enhancer (SNAC) to facilitate stomach absorption — but achieves only roughly 0.4-1% bioavailability.
              To compensate, the oral dose is much larger (e.g., 14mg oral Rybelsus to mimic 1mg injectable Ozempic effect).
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Sublingual</strong> and <strong>buccal (gum)</strong> routes attempt a different bypass: absorption through
              the mucosal tissue under the tongue or inside the cheek, avoiding the stomach entirely. In theory this can
              produce better bioavailability than swallowed peptides. In practice, for tirzepatide specifically, no published
              clinical trial has confirmed how much active compound actually reaches the bloodstream by these routes — and
              compounded versions are not subject to the same bioavailability standards as FDA-approved drugs.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Practical implication:</strong> patients choosing a compounded oral format should reasonably expect
              <em> possibly reduced efficacy</em> compared to injectable. Some patients report they tolerate the daily
              oral dose better than weekly injection. Others see noticeably less weight-loss response. There is no current
              way to predict individual response with the compounded oral formats.
            </p>
          </div>
        </section>

        {/* When to choose oral */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              When Oral Tirzepatide Is the Right Pick
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
                <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#7CA982' }}>
                  Pick oral if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Strong needle aversion — you would not start (or would discontinue) injectable therapy
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You travel frequently — oral formats avoid the cold-chain storage problem
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Daily habit ritual fits your lifestyle better than a weekly injection
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You are open to potentially reduced efficacy in exchange for needle-free administration
                  </li>
                </ul>
              </div>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
                <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#D4A33A' }}>
                  Stick with injectable if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want the trial-proven efficacy (SURMOUNT-1: 20.2% weight loss applies to branded injectable)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Daily oral schedule does not fit your lifestyle (weekly injection is easier for you)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want predictable bioavailability + dosing certainty
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Cost optimization matters — System Labs injectable starts at $179/mo, lower than oral options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What about Wegovy Pill */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The FDA-Approved Oral Alternative — Wegovy Pill
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              If you want a needle-free GLP-1 backed by FDA approval (not compounded), <strong>oral semaglutide</strong> is the
              answer — sold as Wegovy Pill at $149/mo and Rybelsus for type-2 diabetes. Oral semaglutide is a different
              active ingredient (GLP-1 only, not the dual GIP+GLP-1 of tirzepatide), and the trial-data weight-loss profile
              is closer to injectable Wegovy than to injectable Zepbound. Tirzepatide-specific properties (dual mechanism,
              ~50% more weight loss in head-to-head trials) do not transfer to semaglutide.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              For most patients comparing the oral options, the question reduces to:
            </p>
            <ul className='space-y-2 text-sm mb-4' style={{ color: '#3D5560' }}>
              <li className='flex items-start gap-2'>
                <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                <span><strong>FDA-approved + oral but lower trial weight loss?</strong> → Wegovy Pill (semaglutide), $149/mo</span>
              </li>
              <li className='flex items-start gap-2'>
                <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                <span><strong>Compounded oral tirzepatide for the dual-mechanism profile?</strong> → Direct Meds sublingual ($224.10/mo) or Embody GLP-1 gum</span>
              </li>
              <li className='flex items-start gap-2'>
                <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                <span><strong>FDA-approved + best trial weight loss?</strong> → Branded injectable Zepbound (only via injection, see <Link href='/zepbound-vs-wegovy' className='underline' style={{ color: '#D4A33A' }}>Zepbound vs Wegovy</Link>)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Provider table */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare All Verified Compounded GLP-1 Programs
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Direct Meds + Embody offer needle-free formats; the others offer compounded injectable. Verified May 5, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='oral-tirzepatide'
              heading='Top Compounded Tirzepatide Programs (Including Oral Formats)'
            />
          </div>
        </section>

        <RelatedGuides currentPath="/oral-tirzepatide" />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Pick the format that fits your life.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz routes you to the right provider based on format preference (sublingual, gum, injectable), budget, and timeline.
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
                  href='/best-compounded-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Top 6 Programs Ranked
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

      <GLP1Footer />
    </GLP1Layout>
  );
}

function FactRow({ factor, oral, inj }: { factor: string; oral: string; inj: string }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>{factor}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{oral}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{inj}</td>
    </tr>
  );
}
