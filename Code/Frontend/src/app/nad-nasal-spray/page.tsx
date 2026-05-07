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
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Sparkles, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NAD+ Nasal Spray May 2026: How It Compares to IV ($150-$1,000) and Injection ($79) | GLP1CompareHub',
  description:
    'NAD+ nasal spray is one of 5 NAD+ formats offered by Eden Health. Compare bioavailability vs IV therapy ($150-$1,000+/session) and at-home injection ($79 first month at System Labs). Honest read on what nasal spray delivery actually does.',
  alternates: { canonical: 'https://glp1comparehub.com/nad-nasal-spray' },
  openGraph: {
    title: 'NAD+ Nasal Spray — How It Compares to IV and Injection',
    description:
      'Eden Health\'s 5-format NAD+ menu includes nasal spray. Bioavailability vs IV, vs subcutaneous injection. Honest evidence read.',
    url: 'https://glp1comparehub.com/nad-nasal-spray',
    siteName: 'GLP1CompareHub',
    type: 'article',
    images: [{ url: '/img/glp1/og-nad-nasal-spray.jpg', width: 1168, height: 784, alt: 'NAD+ Nasal Spray — comparison and provider guide 2026' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NAD+ Nasal Spray: Bioavailability, Cost, and How It Compares',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/nad-nasal-spray',
  about: ['NAD+ nasal spray', 'NAD+ formats', 'Eden Health'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does NAD+ nasal spray work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bioavailability of NAD+ via nasal mucosal absorption has not been independently validated against IV or subcutaneous injection in published trials. The theoretical basis is real — nasal mucosa allows absorption of small molecules into the bloodstream while bypassing the GI tract — but for NAD+ specifically, the dose actually reaching systemic circulation has not been characterized. Patients should expect possibly reduced effectiveness compared to injection or IV. Anecdotal reports are mixed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does NAD+ nasal spray cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NAD+ nasal spray pricing is provider-specific. Eden Health (tryeden.com) offers it as one of 5 NAD+ formats; verify current pricing at intake. For comparison: NAD+ IV therapy runs $150-$1,000+ per session at clinics; at-home subcutaneous NAD+ injection runs $79 first month / $149 ongoing at System Labs. Nasal spray sits in between IV and oral formats on the cost-vs-bioavailability spectrum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is NAD+ nasal spray FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. NAD+ in any format (IV, injection, nasal spray, oral, topical) is not FDA-approved for any indication. It is administered through compounding pharmacies and longevity clinics under wellness/anti-aging framings. Always work with a licensed prescriber and use accredited 503A pharmacy partners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are there 5 different NAD+ formats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health offers NAD+ in injection, nasal spray, face cream, transdermal patches, and oral capsules — each targeting different bioavailability profiles and use cases. Injection has the highest systemic bioavailability. Nasal spray offers moderate absorption with no needle. Topical/face cream targets local skin tissue (anti-aging skincare framing). Patches and oral are lowest-bioavailability. Eden\'s breadth is unusual; most providers offer one or two formats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I pick nasal spray or injection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For systemic NAD+ supplementation (energy, longevity), injection has stronger bioavailability evidence. Pick nasal spray if you have strong needle aversion, are testing NAD+ as an entry point, or are using it for cognitive/neurological angles where direct nasal-to-brain transport is theorized to be relevant. Most patients pursuing NAD+ for energy or weight-loss-stack support should default to injection.',
      },
    },
  ],
};

export default function NadNasalSprayPage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  const systemLabsUrl = buildAffiliateUrl('glp1-system-labs', 'nad-nasal-spray');
  const edenUrl = buildAffiliateUrl('glp1-eden-health', 'nad-nasal-spray');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA href={buildGlp1AffiliateUrl('eden-health', 'nad-nasal-spray')} brandName="Eden Health" pricePitch="NAD+ nasal spray + 4 other formats — starting at $79/mo" />

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
              <span style={{ color: '#0E2A3A' }}>NAD+ Nasal Spray</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <span style={{ color: '#D4A33A' }}>NAD+</span> Nasal Spray 2026 — Bioavailability, Cost, Honest Read
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              One of 5 NAD+ formats offered by Eden Health. How it stacks up vs IV therapy ($150-$1,000+/session) and at-home injection ($79 first month). What the evidence shows.
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
                  Important: NAD+ in any format is NOT FDA-approved
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                NAD+ via IV, injection, nasal spray, topical, or oral routes is not FDA-approved for any indication.
                It is administered through compounding pharmacies and longevity clinics under wellness/anti-aging
                framings. Bioavailability of NAD+ via intranasal absorption has not been independently validated
                against IV or injection in published clinical trials. Always work with a licensed prescriber and
                use accredited 503A pharmacy partners.
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
                  TL;DR — Where Nasal Spray Fits
                </h2>
              </div>
              <div className='grid md:grid-cols-3 gap-5'>
                <VerdictCol
                  rank='Highest bioavailability'
                  winner='IV Therapy'
                  detail='$150-$1,000+ per session at clinics. ~100% systemic delivery. Most aggressive but most expensive and least convenient.'
                />
                <VerdictCol
                  rank='Best cost-to-effect'
                  winner='Subcutaneous Injection'
                  detail='$79 first / $149/mo at System Labs. ~100% systemic delivery via sub-cu absorption. Self-administered, cheapest of the high-bioavailability options.'
                  highlight
                />
                <VerdictCol
                  rank='Lowest commitment'
                  winner='Nasal Spray (Eden)'
                  detail='Moderate bioavailability via nasal mucosa. No needles. Easiest entry point for testing NAD+ before committing to injections.'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nasal route bioavailability */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Sparkles className='h-6 w-6' style={{ color: '#D4A33A' }} />
              How Nasal Spray Delivery Actually Works
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              The nasal mucosa is highly vascularized — small molecules sprayed into the nasal cavity can be absorbed
              directly into the bloodstream through the mucosal lining, bypassing the GI tract and first-pass liver
              metabolism. This is why some prescription drugs (sumatriptan for migraines, naloxone for opioid reversal,
              some hormone therapies) are formulated as nasal sprays.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What works in theory:</strong> NAD+ is a relatively small molecule. The nasal route should
              produce some systemic absorption that bypasses the GI degradation that plagues oral NAD+
              supplementation.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What is NOT validated:</strong> The actual percentage of administered NAD+ that reaches systemic
              circulation via nasal spray has not been characterized in published trials. The dose-response relationship
              is unclear. There is no head-to-head comparison of nasal spray NAD+ vs IV or injection in humans.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>One additional theoretical angle:</strong> Some research on intranasal drug delivery suggests
              direct nose-to-brain transport via the olfactory and trigeminal pathways — bypassing the blood-brain
              barrier. If this works for NAD+, it could be relevant for cognitive or neurological supplementation
              angles, separate from the systemic supplementation case. The evidence is preliminary.
            </p>
          </div>
        </section>

        {/* The 5-format Eden menu */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Eden Health&rsquo;s 5-Format NAD+ Menu
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Eden Health (tryeden.com) is the only verified provider in our active May 2026 stack offering NAD+ in
              5 distinct formats. Each targets a different use case:
            </p>

            <div className='space-y-3'>
              <FormatRow
                format='Subcutaneous Injection'
                bioavailability='~100% systemic'
                useCase='Highest-effect format. Best for energy, longevity, and weight-loss stack support. Comparable to IV bioavailability without clinic visits.'
              />
              <FormatRow
                format='Nasal Spray'
                bioavailability='Moderate (uncharacterized)'
                useCase='No-needle entry point. Theoretical nose-to-brain pathway for cognitive supplementation. Best for testing before committing to injection.'
                highlight
              />
              <FormatRow
                format='Face Cream / Topical'
                bioavailability='Local skin only'
                useCase='Anti-aging skincare framing — targets local skin tissue NAD+ levels. NOT a systemic supplementation method.'
              />
              <FormatRow
                format='Transdermal Patches'
                bioavailability='Low-moderate'
                useCase='Slow-release option. Convenience for users who want sustained delivery without daily dosing. Bioavailability data is limited.'
              />
              <FormatRow
                format='Oral Capsules'
                bioavailability='Lowest (GI degradation)'
                useCase='Lowest entry cost but most NAD+ is degraded before absorption. Most clinical research supports NMN/NR precursors orally rather than direct NAD+.'
              />
            </div>
          </div>
        </section>

        {/* Cost vs bioavailability */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Cost vs Bioavailability — Picking the Right NAD+ Format
            </h2>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Format</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Cost</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Bioavailability</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <PathRow format='IV Therapy (clinic)' cost='$150-$1,000+/session' bio='Highest' best='Aggressive supplementation; willing to visit clinic' />
                  <PathRow format='Subcutaneous injection (System Labs)' cost='$79 first / $149/mo' bio='~100%' best='Best cost-to-effect; most patients should default here' winner />
                  <PathRow format='Nasal spray (Eden Health)' cost='Verify at intake' bio='Moderate (estimated)' best='No-needle entry; cognitive supplementation angle' />
                  <PathRow format='Transdermal patches' cost='Verify at intake' bio='Low-moderate' best='Sustained release; convenience over potency' />
                  <PathRow format='Oral capsules' cost='$30-$80/mo' bio='Lowest' best='Cheapest test; consider NMN/NR precursors instead' />
                  <PathRow format='Face cream / topical' cost='Skincare pricing' bio='Local only' best='Anti-aging skincare; not systemic supplementation' />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Featured CTAs */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className='p-7 rounded-3xl' style={{ backgroundColor: '#F0EBE0', border: '2px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Best cost-to-bioavailability
                </div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                  System Labs NAD+ Injection
                </h3>
                <div className='text-2xl font-bold mb-3' style={{ color: '#D4A33A' }}>$79 first / $149/mo</div>
                <p className='text-sm mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
                  Self-administered subcutaneous injection. Same systemic bioavailability as IV at a fraction of cost.
                  Best default option for most patients.
                </p>
                <a
                  href={systemLabsUrl}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get System Labs NAD+ <ArrowRight className='h-4 w-4' />
                </a>
              </div>

              <div className='p-7 rounded-3xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Format variety + nasal spray
                </div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                  Eden Health 5-Format NAD+ Menu
                </h3>
                <div className='text-2xl font-bold mb-3' style={{ color: '#D4A33A' }}>Verify pricing at intake</div>
                <p className='text-sm mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
                  Only verified provider with NAD+ in injection, nasal spray, face cream, patches, AND oral capsules.
                  Best for patients wanting nasal spray specifically.
                </p>
                <a
                  href={edenUrl}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Explore Eden Health <ArrowRight className='h-4 w-4' />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Provider table */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
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
              source='nad-nasal-spray'
              heading='Top Compounded GLP-1 + Adjacent-Peptide Providers'
            />
          </div>
        </section>

        <RelatedGuides currentPath="/nad-nasal-spray" />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Pick the right NAD+ format in 60 seconds.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz factors in your needle preference, budget, and use case — then routes to System Labs (injection) or Eden Health (5-format menu).
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <Link href='/match' className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg' style={{ color: '#D4A33A' }}>
                  Take the Quiz <ArrowRight className='h-4 w-4' />
                </Link>
                <Link href='/nad-iv-therapy' className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all' style={{ color: 'white', border: '1.5px solid white' }}>
                  Full NAD+ IV Guide
                </Link>
                <Link href='/lipotropic-injections' className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all' style={{ color: 'white', border: '1.5px solid white' }}>
                  MIC+B12 Injections Guide
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

function VerdictCol({ rank, winner, detail, highlight = false }: { rank: string; winner: string; detail: string; highlight?: boolean }) {
  return (
    <div className='text-center'>
      <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
        {rank}
      </div>
      <div
        className='text-xl font-bold mb-2'
        style={{ color: highlight ? '#7CA982' : '#D4A33A', fontFamily: '"Playfair Display", "Georgia", serif' }}
      >
        {winner}
      </div>
      <p className='text-xs leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}

function FormatRow({ format, bioavailability, useCase, highlight = false }: { format: string; bioavailability: string; useCase: string; highlight?: boolean }) {
  return (
    <div
      className='p-5 rounded-2xl bg-white'
      style={{ border: highlight ? '2px solid #D4A33A' : '1px solid #E5DDC8' }}
    >
      <div className='flex flex-wrap items-baseline gap-3 mb-1'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{format}</h3>
        <span className='text-sm font-semibold' style={{ color: '#D4A33A' }}>{bioavailability}</span>
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{useCase}</p>
    </div>
  );
}

function PathRow({ format, cost, bio, best, winner = false }: { format: string; cost: string; bio: string; best: string; winner?: boolean }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>
        {format}
        {winner && (
          <span className='inline-block ml-2 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
            Best Default
          </span>
        )}
      </td>
      <td className='px-5 py-3 text-sm font-bold' style={{ color: winner ? '#D4A33A' : '#3D5560' }}>{cost}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{bio}</td>
      <td className='px-5 py-3 text-sm' style={{ color: '#3D5560' }}>{best}</td>
    </tr>
  );
}
