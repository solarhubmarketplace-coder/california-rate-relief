import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { primaryProviders } from '@/lib/glp1-providers';
import { ArrowRight, ShieldCheck, AlertCircle, CircleCheck, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compounded Tirzepatide May 2026: Cost ($179–$399), Post-FDA-Crackdown Status, and Verified Providers | GLP1CompareHub',
  description:
    'Independent guide to compounded tirzepatide updated May 5 2026 — including the April 1 FDA enforcement shift, April 30 503B exclusion proposal (comment period open until June 29), how 503A pharmacies are now operating under narrow exceptions, current $179–$399/mo pricing across 10 verified telehealth providers, and which is right for you.',
  alternates: { canonical: 'https://glp1comparehub.com/compounded-tirzepatide' },
  openGraph: {
    title: 'Compounded Tirzepatide — Updated May 5 2026 (Post-FDA-Crackdown)',
    description:
      'Post-April 2026 enforcement landscape, narrow 503A exceptions, 10 verified provider pricing rows ($179–$399/mo), and what June 29 could mean for compounded GLP-1.',
    url: 'https://glp1comparehub.com/compounded-tirzepatide',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Compounded Tirzepatide May 2026: Cost, Post-FDA-Crackdown Status, and Verified Providers',
  datePublished: '2026-05-03',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/compounded-tirzepatide',
  about: ['Compounded tirzepatide', 'Tirzepatide', '503A compounding pharmacy', '503B compounding facility', 'FDA enforcement', 'GLP-1 weight loss'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is compounded tirzepatide still legal in May 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded tirzepatide is still available as of May 5 2026, but the legal landscape has materially tightened. On April 1 2026, the FDA ended its enforcement discretion for 503A pharmacies producing copies of tirzepatide and semaglutide at telehealth scale. On April 30, the FDA formally proposed excluding tirzepatide, semaglutide, and liraglutide from the 503B bulks list — public comment period is open through June 29 2026. 503A pharmacies are now restricted to true patient-specific compounding (documented allergy, custom strength, or other clinical justification) rather than routine telehealth-scale production. Many telehealth providers continue serving customers under these narrow exceptions or via shifting supply chains, but legal and compliance risk has increased.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded tirzepatide FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Compounded tirzepatide is NOT an FDA-approved drug. It is produced by state-licensed 503A and 503B compounding pharmacies under specific FDA exemptions. The FDA-declared shortage of branded tirzepatide ended in 2024-2025. With the April 1 2026 enforcement shift and the April 30 503B exclusion proposal, the regulatory window for routine compounded tirzepatide has narrowed significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does compounded tirzepatide cost in May 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of May 2026, compounded tirzepatide ranges from $179/mo (System Labs entry, the lowest verified price in our stack) to $399/mo (DirectMeds injectable, top tier). Embody offers $149 first month + $299 flat refills with a Spring Forward $200-off promo. Gala Health offers $179-$199/mo on 3-month all-inclusive plans. This compares to $1,498/mo for branded Zepbound through telehealth, $499-$1,086 list price per fill, or $25/mo with commercial insurance + savings card when covered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded tirzepatide safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded tirzepatide produced by reputable 503A pharmacies follows USP standards but does not undergo the same FDA pre-market safety review as branded Zepbound or Mounjaro. Look for providers using LegitScript-certified, NABP-accredited compounding pharmacies. Post-April 2026, verifying that your provider is operating under a valid 503A patient-specific compounding exception (not a discontinued bulk-production model) is more important than ever. Risks include batch-to-batch variability, incorrect dosing, and adulteration in lower-tier providers. The clinical efficacy data from branded Zepbound (SURMOUNT-1, 20.2% weight loss at 72 weeks) does NOT automatically transfer to compounded versions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy compounded tirzepatide online in May 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verified telehealth providers actively serving compounded tirzepatide customers as of May 2026 (Gronk-verified): System Labs ($179/mo, lowest entry); Embody ($149 first / $299 flat refills, Spring Forward $200 off promo); Gala Health ($179-$199/mo 3-month plan); Care Bare Rx (from $199/mo, oral + injectable); Eden Health ($149 intro / $229-$249 ongoing); Direct Meds (sublingual $224.10/mo, injectable $399/mo). All require a telehealth consultation and prescription.',
      },
    },
    {
      '@type': 'Question',
      name: 'What changes if the FDA finalizes the April 30 503B proposal in July 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The April 30 proposal targets 503B outsourcing-facility compounding of tirzepatide, semaglutide, and liraglutide. If finalized after the June 29 comment period, 503B-only providers may discontinue compounded GLP-1 lines. Most providers in the verified May 2026 stack source from 503A pharmacies, which would continue serving compounded tirzepatide for individual prescriptions under documented medical necessity — but supply chains may tighten further and prices may shift. We re-verify provider status monthly.',
      },
    },
  ],
};

export default function CompoundedTirzepatidePage() {
  // Pull compounded providers for the comparison
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
              <span style={{ color: '#0E2A3A' }}>Compounded Tirzepatide</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compounded Tirzepatide 2026
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Updated May 5, 2026 — including the April 1 FDA enforcement shift, the April 30 503B exclusion proposal, and what June 29 means for compounded GLP-1.
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

        {/* FDA warning callout — top of fold (post-April 2026 reality) */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-2xl p-5'
              style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}
            >
              <div className='flex items-start gap-3 mb-3'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  Important May 2026 update: the compounded tirzepatide landscape has tightened
                </div>
              </div>
              <ul className='text-sm space-y-2 ml-8' style={{ color: '#3D5560' }}>
                <li><strong>April 1, 2026:</strong> The FDA ended enforcement discretion for 503A pharmacies producing &ldquo;essentially a copy&rdquo; of tirzepatide and semaglutide at telehealth scale.</li>
                <li><strong>April 30, 2026:</strong> The FDA formally proposed excluding tirzepatide, semaglutide, and liraglutide from the 503B bulks list — comment period open through <strong>June 29, 2026</strong>.</li>
                <li><strong>Today:</strong> 503A pharmacies are restricted to true patient-specific compounding (documented allergies, custom strengths). Many telehealth providers continue under narrow exceptions; legal and compliance risk has increased materially.</li>
                <li><strong>Always:</strong> Compounded tirzepatide is NOT an FDA-approved drug. The clinical trial efficacy of branded Zepbound (SURMOUNT-1: 20.2% weight loss) does NOT automatically transfer to compounded versions. Work with a licensed prescriber and a verifiable LegitScript / NABP-accredited compounding pharmacy.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What is compounded tirzepatide */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              What Is Compounded Tirzepatide?
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Tirzepatide</strong> is the active molecule in Eli Lilly&rsquo;s FDA-approved Zepbound
              (weight loss) and Mounjaro (type-2 diabetes). It is the only dual GIP + GLP-1 receptor agonist on
              the market, producing 20.2% average weight loss at 72 weeks in the SURMOUNT-1 trial.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Compounded tirzepatide</strong> is the same molecule produced by state-licensed 503A and 503B
              compounding pharmacies — NOT by Eli Lilly. The FDA permits compounding under specific exemptions
              (drug shortage status, individual patient medical necessity, or per state pharmacy board rules).
              Compounded versions can include the active ingredient alone, or stacked with B12, B6, NAD+, glycine,
              or L-carnitine depending on the provider&rsquo;s formulation.
            </p>
          </div>
        </section>

        {/* Pricing table */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compounded Tirzepatide Pricing (May 2026)
            </h2>
            <div className='overflow-x-auto rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Provider</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Format</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Monthly</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <PricingRow provider='System Labs' format='Injectable' price='$179/mo' note='Lowest GLP-1 entry in our verified stack; longevity bundle (NAD+ / B-12 / Sermorelin)' badge='Best Value' />
                  <PricingRow provider='Embody' format='Injectable + GLP-1 Gum' price='$149 first / $299 flat' note='Spring Forward $200 off + free shipping; flat refill price (no dose escalation fees)' badge='Best Overall' />
                  <PricingRow provider='Gala Health' format='Injectable' price='$179–$199/mo (3-mo plan)' note='All-inclusive 3-month bundling; provider consults + async support + shipping included' badge='Best 3-Mo Bundle' />
                  <PricingRow provider='Care Bare Rx' format='Oral + Injectable' price='From $199/mo' note='Multi-vertical: $99 hair, $99 sexual health, $199 NAD+ standalone' badge='Best Multi-Vertical' />
                  <PricingRow provider='Eden Health' format='Injectable' price='$149 intro / $229–$249' note='&ldquo;Same Price at Every Dose&rdquo; guarantee; month-to-month or 3-mo options' />
                  <PricingRow provider='Direct Meds' format='Sublingual Drops' price='$224.10/mo' note='Only verified provider with compounded sublingual tirzepatide; needle-free' badge='Best for Sublingual' />
                  <PricingRow provider='Direct Meds' format='Injectable' price='$297–$399/mo' note='Adjacent peptide menu (Sermorelin, NAD+, Epithalon)' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#6B7B82' }}>
              Pricing verified May 5, 2026 directly from each provider&rsquo;s public site (Gronk-verified).
              Branded comparison: Zepbound list price $499–$1,086/fill; ~$1,498/mo through telehealth without insurance;
              as low as $25/mo with commercial insurance + savings card; LillyDirect cash-pay $299 starter
              dose, $399–$699 maintenance doses.
            </p>
          </div>
        </section>

        {/* Safety / quality criteria */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              How to Choose a Safe Compounded Tirzepatide Provider
            </h2>
            <div className='space-y-3'>
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='LegitScript or NABP certification'
                body='Confirms the compounding pharmacy meets baseline regulatory and quality standards.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='503A vs 503B disclosure'
                body='503A pharmacies serve individual prescriptions. 503B "outsourcing facilities" produce in larger batches under stricter oversight. Either is acceptable; lack of clarity is a yellow flag.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='Valisure third-party testing (bonus)'
                body='Some pharmacies submit batches to Valisure for independent purity / potency testing. This is the gold standard but rare.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='Licensed prescriber required'
                body='Avoid any provider that ships without a real telehealth consultation and prescription. That is a major regulatory red flag.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#7CA982' }} />}
                title='Cold-chain shipping'
                body='Tirzepatide must remain refrigerated. Reputable providers ship with cold packs and clear handling instructions.'
              />
            </div>
          </div>
        </section>

        {/* Regulatory landscape — fully rewritten for May 2026 reality */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The May 2026 FDA Reality — A Two-Step Crackdown
            </h2>

            <div className='space-y-5'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#B14739' }}>
                  Step 1 — April 1, 2026
                </div>
                <h3 className='font-bold mb-2 text-lg' style={{ color: '#0E2A3A' }}>
                  FDA ended enforcement discretion for 503A &ldquo;essentially-a-copy&rdquo; compounding
                </h3>
                <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>
                  Throughout 2024 and 2025, while the FDA-declared shortage of branded tirzepatide and semaglutide was active, 503A
                  pharmacies operated under enforcement discretion that effectively allowed routine production
                  of compounded copies for telehealth distribution. With the shortage officially resolved, the FDA
                  ended that discretion on April 1, 2026. 503A pharmacies are now restricted to true patient-specific
                  compounding — meaning a documented allergy, custom dosing strength, or other clinical justification
                  for the individual patient. Routine telehealth-scale production of compounded copies of FDA-approved
                  tirzepatide is no longer protected.
                </p>
              </div>

              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#B14739' }}>
                  Step 2 — April 30, 2026
                </div>
                <h3 className='font-bold mb-2 text-lg' style={{ color: '#0E2A3A' }}>
                  FDA proposed excluding tirzepatide, semaglutide, and liraglutide from the 503B bulks list
                </h3>
                <p className='text-sm leading-relaxed mb-2' style={{ color: '#3D5560' }}>
                  The 503B bulks list governs which active pharmaceutical ingredients FDA-registered outsourcing
                  facilities are permitted to compound from bulk substance. On April 30, 2026, the FDA formally
                  proposed excluding all three GLP-1 ingredients on the grounds that there is &ldquo;no clinical need&rdquo;
                  for compounded versions when the FDA-approved branded products are commercially available.
                </p>
                <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>
                  The proposal entered a <strong>public comment period that closes June 29, 2026</strong>. If finalized
                  after that, 503B outsourcing facilities would no longer be permitted to compound bulk
                  tirzepatide, semaglutide, or liraglutide.
                </p>
              </div>

              <div className='p-5 rounded-2xl' style={{ backgroundColor: '#F4EBD0', border: '1px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  What this means for buyers in May 2026
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li>
                    <strong>Compounded tirzepatide is still available</strong> through telehealth providers operating
                    under 503A patient-specific exceptions or via supply chains that have already adapted to the
                    post-April reality.
                  </li>
                  <li>
                    <strong>Pricing has held</strong> — the verified May 2026 stack still ranges $179–$399/mo. The
                    crackdown has not yet materially shifted prices upward, but supply is tightening.
                  </li>
                  <li>
                    <strong>Provider quality matters more than ever.</strong> Verify your provider sources from a
                    LegitScript or NABP-accredited 503A pharmacy and is operating under a valid patient-specific
                    compounding rationale, not a discontinued bulk-production model.
                  </li>
                  <li>
                    <strong>If the June 29 proposal finalizes against compounded GLP-1,</strong> 503B-only providers
                    will discontinue their compounded GLP-1 lines. 503A patient-specific compounding can continue
                    for documented medical necessity, but supply chains may tighten further and prices may shift.
                  </li>
                  <li>
                    <strong>Branded alternatives have shifted too.</strong> LillyDirect now sells branded Zepbound
                    cash-pay vials at $299 (starter dose), scaling to $399–$699 maintenance doses. With commercial
                    insurance + the manufacturer savings card, branded Zepbound can drop as low as $25/mo when covered.
                    See our <Link href='/zepbound-vs-wegovy' className='underline' style={{ color: '#D4A33A' }}>Zepbound vs Wegovy comparison</Link> for the full pricing breakdown.
                  </li>
                </ul>
              </div>

              <p className='text-sm italic' style={{ color: '#6B7B82' }}>
                We re-verify the FDA regulatory landscape and provider availability monthly. Last verified: May 5, 2026.
                The next material milestone is the June 29 close of the 503B exclusion comment period — we will publish a
                follow-up review within 7 days of any finalized rule. Subscribe to{' '}
                <Link href='/news' className='underline' style={{ color: '#D4A33A' }}>our news feed</Link> for updates.
              </p>
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
              Compare Compounded Tirzepatide Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              All providers listed offer compounded tirzepatide. Pricing verified May 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='compounded-tirzepatide'
              heading='Top Compounded GLP-1 Telehealth Providers (May 2026)'
            />
          </div>
        </section>

        {/* Should-you-use section */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compounded Tirzepatide vs Branded Zepbound — Quick Decision Guide
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
                <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#D4A33A' }}>
                  Pick compounded if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Cost is the dominant factor (73-91% cheaper)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You are uninsured or your insurance does not cover branded
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You are comfortable with non-FDA-approved medication under prescriber supervision
                  </li>
                </ul>
              </div>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
                <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#7CA982' }}>
                  Pick branded Zepbound if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    Insurance covers the branded version
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want FDA-approved batch-to-batch consistency
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want the trial efficacy data (SURMOUNT-1: 20.2%) to apply directly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Find your compounded tirzepatide match
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Take our 60-second quiz to get matched to the right compounded tirzepatide provider for your budget and preferences.
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
                  href='/best/telemedicine-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Best for Tirzepatide
                </Link>
                <Link
                  href='/zepbound-vs-wegovy'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Compare Zepbound vs Wegovy
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

function PricingRow({ provider, format, price, note, badge }: { provider: string; format: string; price: string; note: string; badge?: string }) {
  return (
    <tr className='border-t' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3'>
        <div className='font-semibold' style={{ color: '#0E2A3A' }}>{provider}</div>
        {badge && (
          <span className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mt-1' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
            {badge}
          </span>
        )}
      </td>
      <td className='px-5 py-3 text-sm' style={{ color: '#3D5560' }}>{format}</td>
      <td className='px-5 py-3 text-right text-base font-bold' style={{ color: '#D4A33A' }}>{price}</td>
      <td className='px-5 py-3 text-xs' style={{ color: '#6B7B82' }}>{note}</td>
    </tr>
  );
}

function SafetyRow({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div
      className='flex items-start gap-3 p-5 rounded-2xl'
      style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}
    >
      <span className='flex-shrink-0 mt-0.5'>{icon}</span>
      <div>
        <h3 className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{title}</h3>
        <p className='text-sm' style={{ color: '#3D5560' }}>{body}</p>
      </div>
    </div>
  );
}
