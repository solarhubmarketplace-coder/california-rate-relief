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
import { ArrowRight, ShieldCheck, AlertCircle, CircleCheck, MapPin, Truck, Calendar, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tirzepatide Near Me May 2026: Local Clinic vs Telehealth Shipped to Your Door | GLP1CompareHub',
  description:
    'Searching for tirzepatide near you? Local clinics now charge $300–$500/mo plus travel and scheduling. Telehealth providers ship to all 50 states starting at $179/mo. Side-by-side cost, format, and convenience comparison — verified May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/tirzepatide-near-me' },
  openGraph: {
    title: 'Tirzepatide Near Me — Local Clinic vs Telehealth (Verified May 2026)',
    description:
      'The local clinic charges $300–$500/mo. Telehealth ships to all 50 states from $179/mo. Side-by-side comparison plus the post-April-2026 FDA context.',
    url: 'https://glp1comparehub.com/tirzepatide-near-me',
    siteName: 'GLP1CompareHub',
    type: 'article',
    images: [{ url: '/img/glp1/og-tirzepatide-near-me.jpg', width: 1168, height: 784, alt: 'Tirzepatide Near Me — local clinic vs telehealth comparison' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tirzepatide Near Me May 2026: Local Clinic vs Telehealth Shipped',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/tirzepatide-near-me',
  about: ['Tirzepatide', 'Local weight-loss clinic', 'Telehealth GLP-1', 'Compounded tirzepatide'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it cheaper to get tirzepatide locally or through telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telehealth is cheaper in most cases as of May 2026. Local weight-loss clinics typically charge $300–$500/mo for compounded tirzepatide programs (not counting travel time and scheduling friction). Verified telehealth providers start at $179/mo (System Labs), with most programs in the $179–$399/mo range. Telehealth also offers needle-free formats (sublingual at Direct Meds, GLP-1 gum at Embody) that local clinics rarely stock.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does telehealth tirzepatide ship to my state?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every active program in our verified May 2026 stack (System Labs, Embody, Eden Health, Gala Health, Care Bare Rx, Direct Meds) is licensed to ship to all 50 US states. Telehealth providers operate through licensed prescribers in each state, and the compounded tirzepatide ships cold-chain from accredited 503A pharmacies directly to your address. Provide your state at intake; the platform routes to a prescriber licensed there.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Google now show local clinics for "tirzepatide near me"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Following the April 1, 2026 FDA enforcement shift on 503A pharmacies, search engines have rebalanced "near me" queries to surface in-person clinics and local compounding pharmacies more prominently. The local-pack listings target users who want immediate in-person access. Telehealth providers continue to dominate organic search results below the local pack, and remain the cheaper, more convenient option for most patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does a local clinic make more sense than telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A local clinic may be the right call when: (1) you need same-day medication and cannot wait 3-7 business days for cold-chain shipping; (2) you want in-person dose-escalation supervision (most telehealth providers handle this async); (3) your insurance specifically covers an in-network local provider for branded Zepbound; or (4) you have an existing relationship with a local prescriber you trust. For everyone else, telehealth is faster onboarding, cheaper, and offers more format options.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can I get tirzepatide through telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most verified telehealth providers complete intake-to-shipment in 2-7 business days. Embody advertises a 2-minute online intake; Eden Health and System Labs typically ship within 3-5 days after prescriber review; cold-chain shipping adds 1-3 days. Compare this to a local clinic where you typically need to schedule an initial consultation (1-2 weeks out), have lab work done (additional visit), and receive the prescription only after follow-up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded tirzepatide still legal after the April 2026 FDA changes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, compounded tirzepatide is still available as of May 2026. The April 1 enforcement shift restricts 503A pharmacies to true patient-specific compounding (documented allergies, custom strengths). The April 30 503B exclusion proposal targets bulk outsourcing-facility compounding — public comment period closes June 29, 2026. Most verified telehealth providers continue serving patients under the narrower 503A patient-specific exception. See our full compounded tirzepatide guide for details.',
      },
    },
  ],
};

export default function TirzepatideNearMePage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA href={buildGlp1AffiliateUrl('medvi', 'tirzepatide-near-me')} brandName="MEDVi" pricePitch="Compounded tirzepatide from $179/mo — ships nationwide" />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission — at no extra cost to you.{' '}
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
              <span style={{ color: '#0E2A3A' }}>Tirzepatide Near Me</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Tirzepatide <span style={{ color: '#D4A33A' }}>Near Me</span> — Local Clinic vs Telehealth Shipped
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Local clinics charge $300–$500/mo plus travel time. Telehealth ships to all 50 states from $179/mo with cold-chain delivery. Here&rsquo;s when each path wins.
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

        {/* Top FDA + SERP-shift notice */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-2xl p-5'
              style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}
            >
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  Why &ldquo;tirzepatide near me&rdquo; searches changed in 2026
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                The April 1, 2026 FDA enforcement shift restricted 503A pharmacies to patient-specific compounding,
                pushing many telehealth supply chains to adapt. Search engines responded by surfacing local clinics and
                local compounding pharmacies more prominently in &ldquo;near me&rdquo; results. <strong>Telehealth still ships to all 50
                states</strong> at lower prices — the local pack just shows up first now. This page compares both paths
                so you can decide which actually fits your situation.
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR verdict */}
        <section className='py-10' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-6 md:p-8 bg-white' style={{ border: '2px solid #D4A33A' }}>
              <div className='flex items-start gap-3 mb-5'>
                <Trophy className='h-6 w-6 flex-shrink-0' style={{ color: '#D4A33A' }} />
                <h2
                  className='text-2xl md:text-3xl font-bold'
                  style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
                >
                  TL;DR — Telehealth Wins 4 of 5 Times
                </h2>
              </div>
              <div className='grid md:grid-cols-3 gap-5'>
                <VerdictCol
                  label='Cost winner'
                  winner='Telehealth'
                  detail='$179/mo (System Labs entry) vs $300–$500/mo at most local weight-loss clinics. Telehealth saves $150–$320/mo.'
                />
                <VerdictCol
                  label='Convenience winner'
                  winner='Telehealth'
                  detail='2-minute online intake + cold-chain shipping in 3-7 business days vs 1-2 weeks for an initial local consult, lab work, and follow-up scripting.'
                />
                <VerdictCol
                  label='Speed-to-meds winner'
                  winner='Local clinic'
                  detail='If you need same-day or next-day medication and cannot wait for shipping, a local clinic can sometimes dispense in 24-48 hours.'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Side-by-side path comparison */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Local Clinic vs Telehealth — Side-by-Side
            </h2>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Factor</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Local Weight-Loss Clinic</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Telehealth (Verified)</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Winner</th>
                  </tr>
                </thead>
                <tbody>
                  <FactRow factor='Monthly cost (compounded)' local='$300–$500/mo' tele='$179–$399/mo' winner='Telehealth' />
                  <FactRow factor='Initial consult' local='In-person, 1-2 wk wait' tele='Async or 2-min online intake' winner='Telehealth' />
                  <FactRow factor='Time to first dose' local='2-3 weeks (incl. labs)' tele='3-7 business days' winner='Telehealth' />
                  <FactRow factor='Format options' local='Injectable only (typical)' tele='Injectable, sublingual (Direct Meds), GLP-1 gum (Embody)' winner='Telehealth' />
                  <FactRow factor='State availability' local='Limited to clinic location' tele='All 50 states (each provider)' winner='Telehealth' />
                  <FactRow factor='Same-day pickup' local='Sometimes possible' tele='Not possible (cold-chain ships)' winner='Local' />
                  <FactRow factor='In-person dose checks' local='Yes (every appointment)' tele='Async messaging + telehealth video' winner='Local' />
                  <FactRow factor='Insurance billing (branded)' local='Sometimes available' tele='Cash-pay typical (some accept HSA/FSA)' winner='Local' />
                  <FactRow factor='Travel + scheduling friction' local='Real cost (drive + time off work)' tele='None' winner='Telehealth' />
                  <FactRow factor='Provider quality variance' local='Highly variable by city' tele='Standardized via accredited 503A pharmacy' winner='Telehealth' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#6B7B82' }}>
              Pricing verified May 5, 2026. Local clinic pricing reflects typical compounded weight-loss program rates;
              individual clinics vary. Telehealth pricing covers the 6 verified active programs in our affiliate stack.
            </p>
          </div>
        </section>

        {/* The local clinic path */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <MapPin className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The Local Clinic Path
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              A typical local weight-loss clinic offering compounded tirzepatide will charge <strong>$300–$500 per month</strong> for
              the medication plus required clinic visits. This usually includes the initial intake consultation, lab work
              (often required), monthly dose-check visits, and the medication itself. Local pricing varies meaningfully by
              metro area — coastal cities and affluent suburbs trend higher.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Beyond the listed price, the real cost includes <strong>travel time, taking time off work, and scheduling friction</strong>.
              A typical 6-month weight-loss program with monthly clinic visits costs 6-12 hours of your time on top of the
              dollar cost. Telehealth providers eliminate this entirely.
            </p>
            <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
              <h3 className='font-bold mb-3' style={{ color: '#0E2A3A' }}>
                When the local clinic is the right call
              </h3>
              <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                <li className='flex items-start gap-2'>
                  <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                  You need medication today and cannot wait 3-7 business days for cold-chain shipping.
                </li>
                <li className='flex items-start gap-2'>
                  <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                  Your insurance specifically covers an in-network local provider for branded Zepbound.
                </li>
                <li className='flex items-start gap-2'>
                  <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                  You have a complex medical history that requires in-person dose-escalation supervision.
                </li>
                <li className='flex items-start gap-2'>
                  <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                  You have an existing relationship with a local prescriber you already trust.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The telehealth path */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Truck className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The Telehealth Path — Cheaper, Faster, More Format Options
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Verified telehealth providers ship compounded tirzepatide to all 50 US states from $179/mo (System Labs).
              Each platform routes your intake to a licensed prescriber in your state, sources the medication from an
              accredited 503A compounding pharmacy, and ships cold-chain directly to your address. Most providers
              complete intake-to-shipment in 3-7 business days.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-5'>
              <div className='p-5 rounded-2xl' style={{ backgroundColor: '#F0EBE0', border: '1px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Cheapest entry
                </div>
                <h3 className='font-bold mb-2' style={{ color: '#0E2A3A' }}>System Labs — $179/mo</h3>
                <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>
                  Lowest verified GLP-1 entry price in our active stack. Adjacent peptides (NAD+, B-12, sermorelin)
                  available as add-ons for biohacker stacks. <Link href='/providers/system-labs' className='underline' style={{ color: '#D4A33A' }}>System Labs review →</Link>
                </p>
              </div>
              <div className='p-5 rounded-2xl' style={{ backgroundColor: '#F4EBD0', border: '1px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Best overall
                </div>
                <h3 className='font-bold mb-2' style={{ color: '#0E2A3A' }}>Embody — $149 first / $299 flat refills</h3>
                <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>
                  Spring Forward $200 off + free expedited shipping. Flat refill price (no dose-escalation upcharges).
                  GLP-1 gum format for needle-averse patients. <Link href='/providers/embody' className='underline' style={{ color: '#D4A33A' }}>Embody review →</Link>
                </p>
              </div>
              <div className='p-5 rounded-2xl' style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
                  Best needle-free
                </div>
                <h3 className='font-bold mb-2' style={{ color: '#0E2A3A' }}>Direct Meds — $224.10/mo sublingual</h3>
                <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>
                  Only verified provider with compounded sublingual tirzepatide drops. Daily oral administration —
                  no needles, no refrigerated injections. <Link href='/providers/directmeds' className='underline' style={{ color: '#D4A33A' }}>Direct Meds review →</Link>
                </p>
              </div>
              <div className='p-5 rounded-2xl' style={{ backgroundColor: '#F0EBE0', border: '1px solid #E5DDC8' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
                  Best 3-month bundle
                </div>
                <h3 className='font-bold mb-2' style={{ color: '#0E2A3A' }}>Gala Health — $179–$199/mo</h3>
                <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>
                  All-inclusive 3-month plan — provider consults, async support, and shipping all bundled into the
                  flat monthly fee. <Link href='/providers/gala-health' className='underline' style={{ color: '#D4A33A' }}>Gala Health review →</Link>
                </p>
              </div>
            </div>
            <p className='text-sm' style={{ color: '#6B7B82' }}>
              See all 6 verified providers in the comparison table below. For our editorial ranking by EPC and
              real conversion data, see <Link href='/best-compounded-tirzepatide' className='underline' style={{ color: '#D4A33A' }}>Best Compounded Tirzepatide 2026</Link>.
            </p>
          </div>
        </section>

        {/* Decision framework */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Which Path Fits Your Situation?
            </h2>
            <div className='space-y-3'>
              <DecisionRow
                ifClause='You want the lowest possible monthly price'
                pick='Telehealth — System Labs at $179/mo'
                color='#D4A33A'
              />
              <DecisionRow
                ifClause='You want needle-free format (sublingual or oral)'
                pick='Telehealth — Direct Meds sublingual or Embody GLP-1 gum'
                color='#D4A33A'
              />
              <DecisionRow
                ifClause='You want a flat refill price with no dose-escalation upcharges'
                pick='Telehealth — Embody $299 flat refills'
                color='#D4A33A'
              />
              <DecisionRow
                ifClause='You want all-inclusive 3-month bundling (lowest LTV)'
                pick='Telehealth — Gala Health 3-month plan'
                color='#D4A33A'
              />
              <DecisionRow
                ifClause='You need medication today, cannot wait for shipping'
                pick='Local clinic (only path that can dispense same-day)'
                color='#7CA982'
              />
              <DecisionRow
                ifClause='Your commercial insurance covers branded Zepbound + you have an in-network local provider'
                pick='Local clinic (Path 1: branded + insurance can drop OOP to $25/mo)'
                color='#7CA982'
              />
              <DecisionRow
                ifClause='You want the longest FDA track record + want trial efficacy data to apply directly'
                pick='Either path with branded Zepbound (FDA-approved, see Zepbound vs Wegovy)'
                color='#6B7B82'
              />
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
              Compare Verified Telehealth Providers (Ships to Your State)
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              All providers ship compounded tirzepatide to all 50 US states. Pricing verified May 5, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='tirzepatide-near-me'
              heading='Top Telehealth Providers Shipping Tirzepatide Nationwide'
            />
          </div>
        </section>

        {/* What to ask if you go local */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Going to a Local Clinic? Ask These 6 Questions First
            </h2>
            <div className='space-y-3'>
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='1. Which compounding pharmacy do you source from?'
                body='Ask for the pharmacy name and verify LegitScript or NABP accreditation. Reputable local clinics will share this readily.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='2. Are you operating under 503A patient-specific compounding?'
                body='Post-April 2026, this is the right answer. If they say "503B bulk" or evade the question, that is a yellow flag.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='3. What is the all-in monthly cost (medication + visits + labs)?'
                body='Some clinics quote $300/mo for medication only and add $80/visit + $200 lab fees. Get the full number upfront.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='4. What is your dose-escalation protocol?'
                body='Standard tirzepatide titration: 2.5mg for 4 weeks, then 5mg, then 7.5mg, etc. If they push faster escalation, get a second opinion.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='5. Do you accept my insurance for branded Zepbound?'
                body='If yes, ask for an eligibility check before committing. With commercial insurance + savings card, branded Zepbound can drop to $25/mo.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='6. Can I cancel after the first month?'
                body='Some local programs require 3-6 month commitments. Telehealth providers typically allow cancel-anytime — that flexibility is worth real money.'
              />
            </div>
          </div>
        </section>

        <RelatedGuides currentPath="/tirzepatide-near-me" />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Skip the local clinic search — get matched in 60 seconds.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz routes you to the verified telehealth provider that ships to your state and fits your budget, format preference, and timeline.
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
                  See Best Compounded Tirzepatide
                </Link>
                <Link
                  href='/compounded-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Full Compounded Guide
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

function VerdictCol({ label, winner, detail }: { label: string; winner: string; detail: string }) {
  return (
    <div className='text-center'>
      <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
        {label}
      </div>
      <div
        className='text-2xl font-bold mb-2'
        style={{ color: '#D4A33A', fontFamily: '"Playfair Display", "Georgia", serif' }}
      >
        {winner}
      </div>
      <p className='text-xs leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}

function FactRow({ factor, local, tele, winner }: { factor: string; local: string; tele: string; winner: string }) {
  return (
    <tr className='border-t' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>{factor}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{local}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{tele}</td>
      <td className='px-5 py-3 text-center text-xs font-semibold' style={{ color: winner === 'Telehealth' ? '#D4A33A' : winner === 'Local' ? '#7CA982' : '#6B7B82' }}>
        {winner}
      </td>
    </tr>
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

function SafetyRow({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className='flex items-start gap-3 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <span className='flex-shrink-0 mt-0.5'>{icon}</span>
      <div>
        <h3 className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{title}</h3>
        <p className='text-sm' style={{ color: '#3D5560' }}>{body}</p>
      </div>
    </div>
  );
}
