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
import { ArrowRight, AlertCircle, CircleCheck, Calendar, DollarSign, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cheapest Tirzepatide Online May 2026: $149–$179/mo Verified | GLP1CompareHub',
  description:
    'Verified cheapest tirzepatide online May 2026: System Labs $179/mo (lowest sustained), Embody $149 first month with Spring Forward $200-off promo, branded Zepbound from $25/mo with insurance. Side-by-side cost across all three paths.',
  alternates: { canonical: 'https://glp1comparehub.com/cheapest-tirzepatide-online' },
  openGraph: {
    title: 'Cheapest Tirzepatide Online — Verified May 2026 ($149–$179/mo)',
    description:
      'Three cost paths: branded+insurance ($25/mo), LillyDirect cash-pay ($299–$699), and compounded telehealth ($179–$399). Honest read on which is cheapest for you.',
    url: 'https://glp1comparehub.com/cheapest-tirzepatide-online',
    siteName: 'GLP1CompareHub',
    type: 'article',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-cheapest-tirzepatide.jpg', width: 1168, height: 784, alt: 'Cheapest Tirzepatide Online — verified lowest prices 2026' }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cheapest Tirzepatide Online May 2026',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/cheapest-tirzepatide-online',
  about: ['Cheapest tirzepatide', 'Compounded tirzepatide', 'Branded Zepbound', 'Telehealth GLP-1'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the absolute cheapest tirzepatide available online in May 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your insurance status. With commercial insurance covering branded Zepbound + the manufacturer savings card, out-of-pocket can drop to $25/mo — that is the absolute cheapest path. If you do not qualify for insurance coverage, System Labs offers compounded tirzepatide at $179/mo (the lowest verified telehealth price). Embody offers $149 first month with the Spring Forward $200-off promo, but jumps to $299/mo on refills.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cheaper compounded tirzepatide as effective as branded Zepbound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — the clinical efficacy of branded Zepbound (SURMOUNT-1: 20.2% weight loss at 72 weeks) does NOT automatically transfer to compounded versions. Compounded tirzepatide is produced by 503A pharmacies under FDA exemptions and does not undergo the same pre-market safety and efficacy testing. Many patients report comparable results, but no head-to-head trial has been published. The post-April 2026 FDA enforcement shift means buying compounded is also higher-risk than it was a year ago.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is LillyDirect cash-pay Zepbound priced in May 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eli Lilly\'s direct-to-patient cash-pay program prices Zepbound vials at $299 for the starter dose (2.5mg) and scales to $399–$699/mo for higher maintenance doses. This is a manufacturer-direct cash-pay price independent of insurance. It is more expensive than compounded telehealth ($179–$399/mo) but provides FDA-approved branded medication with full clinical trial efficacy data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why did compounded tirzepatide get more expensive after April 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing has actually held in May 2026 — the verified stack still spans $179–$399/mo. The FDA April 1 enforcement shift restricted 503A pharmacies to true patient-specific compounding (not bulk telehealth-scale production), which has tightened supply. Some lower-quality providers have exited the market, but the verified primary providers continue serving at pre-April pricing. If the April 30 503B exclusion proposal finalizes after the June 29 comment period, prices may shift further.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do any cheap tirzepatide programs come with hidden fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most verified primary providers in our stack include consult, shipping, and the medication in their advertised monthly price. Watch for: (1) Provider program fees on top of medication ($74.99/mo at Ivim Health). (2) Lab work charges (rarely included; $50–$200 per lab order). (3) Dose-escalation upcharges (Embody is unique in offering flat $299/mo refills regardless of dose). (4) 3-month commitment requirements (Gala Health bundles at $179–$199/mo only on a 3-month plan).',
      },
    },
  ],
};

export default function CheapestTirzepatideOnlinePage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  const systemLabsUrl = buildAffiliateUrl('glp1-system-labs', 'cheapest-tirzepatide-online');
  const embodyUrl = buildAffiliateUrl('glp1-embody', 'cheapest-tirzepatide-online');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA href={buildGlp1AffiliateUrl('tmates', 'cheapest-tirzepatide-online')} brandName="TMates" pricePitch="Lowest verified price: compounded tirzepatide from $167/mo" />

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
              <span style={{ color: '#0E2A3A' }}>Cheapest Tirzepatide Online</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Cheapest <span style={{ color: '#D4A33A' }}>Tirzepatide</span> Online — May 2026
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Three cost paths verified May 5, 2026: branded with insurance ($25/mo), LillyDirect cash-pay ($299–$699), and compounded telehealth ($179–$399). Here&rsquo;s the honest answer for your situation.
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
                  TL;DR — The Cheapest Path Depends on Your Insurance
                </h2>
              </div>
              <div className='grid md:grid-cols-3 gap-5'>
                <VerdictCol
                  rank='If you have insurance'
                  winner='Branded + Savings Card'
                  price='$25/mo'
                  detail='Commercial insurance covering Zepbound + the manufacturer savings card stacks down to $25/mo out-of-pocket. Always run an eligibility check first.'
                />
                <VerdictCol
                  rank='If uninsured (compounded)'
                  winner='System Labs'
                  price='$179/mo'
                  detail='Lowest verified compounded tirzepatide entry price in our active stack. Sustained — not an intro promo. Adjacent peptide bundle available.'
                />
                <VerdictCol
                  rank='If first-month price matters most'
                  winner='Embody'
                  price='$149 first / $299 flat'
                  detail='$149 first month with Spring Forward $200-off promo. Then flat $299/mo refills (no dose-escalation upcharges).'
                />
              </div>
            </div>
          </div>
        </section>

        {/* FDA banner */}
        <section className='py-6 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-5' style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}>
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  May 2026 FDA context for the compounded paths
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                On April 1, 2026 the FDA ended enforcement discretion for 503A pharmacies producing copies of tirzepatide
                at telehealth scale. On April 30 the FDA proposed excluding tirzepatide from the 503B bulks list — public
                comment period closes June 29, 2026. Compounded tirzepatide is still available through 503A pharmacies
                under narrow patient-specific exceptions, but supply is tightening. See our{' '}
                <Link href='/compounded-tirzepatide' className='underline' style={{ color: '#B14739' }}>full compounded tirzepatide guide</Link>{' '}
                for the regulatory deep-dive.
              </div>
            </div>
          </div>
        </section>

        {/* Three paths comparison */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The Three Cost Paths — Side-by-Side
            </h2>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Factor</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Branded + Insurance</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>LillyDirect Cash-Pay</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Compounded Telehealth</th>
                  </tr>
                </thead>
                <tbody>
                  <FactRow factor='Monthly cost' a='$25/mo (with savings card)' b='$299–$699/mo' c='$179–$399/mo' />
                  <FactRow factor='Eligibility' a='Commercial insurance + savings card' b='Anyone with valid Rx' c='Anyone telehealth-prescribed' />
                  <FactRow factor='FDA-approved?' a='Yes (branded Zepbound)' b='Yes (branded Zepbound)' c='No (compounded — NOT FDA-approved)' />
                  <FactRow factor='Trial efficacy data' a='SURMOUNT-1: 20.2% weight loss applies' b='SURMOUNT-1: 20.2% weight loss applies' c='Does NOT automatically transfer' />
                  <FactRow factor='Insurance approval needed?' a='Yes' b='No' c='No' />
                  <FactRow factor='Speed to first dose' a='1-3 weeks (insurance approval)' a2='' b='3-7 days (LillyDirect ships)' b2='' c='3-7 days (telehealth ships)' c2='' />
                  <FactRow factor='Format options' a='Injectable only' b='Injectable only (vials)' c='Injectable, sublingual, GLP-1 gum' />
                  <FactRow factor='Regulatory risk' a='Low' b='Low' c='Higher post-April 2026' />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The compounded telehealth ranking */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <DollarSign className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Cheapest Compounded Tirzepatide — Verified May 2026
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              When insurance does not cover branded Zepbound (or you do not want to navigate insurance approval),
              compounded telehealth is the cheapest path. Here&rsquo;s the verified ranking by sustained monthly price:
            </p>

            <div className='space-y-3'>
              <CheapRow rank={1} provider='System Labs' price='$179/mo' note='Lowest sustained monthly price in the verified stack. No commitment. Adjacent peptide bundle (NAD+ $79 first month, B-12 $89, sermorelin $79–$219).' badge='Cheapest Sustained' slug='system-labs' />
              <CheapRow rank={2} provider='Gala Health' price='$179–$199/mo' note='3-month commitment required. All-inclusive flat fee covers consults, async support, and shipping.' badge='Cheapest 3-Mo Bundle' slug='gala-health' />
              <CheapRow rank={3} provider='Care Bare Rx' price='From $199/mo' note='Multi-vertical: $99 hair, $99 sexual health, $199 NAD+ standalone. Both oral AND injectable compounded GLP-1.' slug='care-bare-rx' />
              <CheapRow rank={4} provider='Direct Meds (sublingual)' price='$224.10/mo' note='Cheapest needle-free compounded tirzepatide option. Daily sublingual drops.' badge='Cheapest Needle-Free' slug='directmeds' />
              <CheapRow rank={5} provider='Eden Health' price='$149 intro / $229–$249' note='Strong intro pricing; "Same Price at Every Dose" guarantee on ongoing.' slug='eden-health' />
              <CheapRow rank={6} provider='Embody' price='$149 first / $299 flat' note='Cheapest first month with Spring Forward $200 off. Flat $299/mo refills — no dose-escalation upcharges.' badge='Cheapest First Month' slug='embody' />
              <CheapRow rank={7} provider='Direct Meds (injectable)' price='$297–$399/mo' note='Higher tier — choose only if you specifically want Direct Meds for sublingual + injectable bundling.' slug='directmeds' />
            </div>

            <p className='text-xs italic mt-5' style={{ color: '#6B7B82' }}>
              All pricing Gronk-verified May 5, 2026 directly from each provider&rsquo;s public site. Confirm current rates before purchase.
            </p>
          </div>
        </section>

        {/* Featured CTAs for 2 cheapest */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className='p-7 rounded-3xl' style={{ backgroundColor: '#F0EBE0', border: '2px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Cheapest sustained
                </div>
                <h3
                  className='text-2xl font-bold mb-2'
                  style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
                >
                  System Labs
                </h3>
                <div className='text-3xl font-bold mb-3' style={{ color: '#D4A33A' }}>$179/mo</div>
                <p className='text-sm mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                  Lowest verified compounded GLP-1 entry. No commitment. Add NAD+ at $79 first month, B-12 at $89/mo,
                  or oral sermorelin at $79 first month for a complete longevity stack.
                </p>
                <a
                  href={systemLabsUrl}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with System Labs <ArrowRight className='h-4 w-4' />
                </a>
              </div>

              <div className='p-7 rounded-3xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                  Cheapest first month
                </div>
                <h3
                  className='text-2xl font-bold mb-2'
                  style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
                >
                  Embody
                </h3>
                <div className='text-3xl font-bold mb-3' style={{ color: '#D4A33A' }}>$149 first / $299 flat</div>
                <p className='text-sm mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                  Spring Forward promo: $200 off first order + free expedited shipping. Flat $299/mo refills — no
                  dose-escalation upcharges. GLP-1 gum format available for needle-averse patients.
                </p>
                <a
                  href={embodyUrl}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with Embody <ArrowRight className='h-4 w-4' />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden costs warning */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Hidden-Cost Watchouts (Compounded Telehealth)
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Cheap headline pricing can hide upcharges that turn a $179/mo program into $250+/mo. Here&rsquo;s what to verify
              at intake before committing:
            </p>
            <div className='space-y-3'>
              <WatchRow
                title='Program / membership fees'
                body='Some providers charge a separate program fee on top of medication. Ivim Health is $74.99/mo on top of compounded GLP-1 pricing. Most verified primary providers (Embody, System Labs, Gala, Care Bare, Eden, Direct Meds) bundle this in.'
              />
              <WatchRow
                title='Lab work fees'
                body='Most compounded GLP-1 programs do NOT include lab work in the base price. If your prescriber requires labs, expect $50–$200 separate. Local labs may be cheaper than direct-to-pharmacy partner labs.'
              />
              <WatchRow
                title='Dose-escalation upcharges'
                body='Many providers raise the monthly price as your dose escalates from 2.5mg → 5mg → 7.5mg → 10mg → 12.5mg → 15mg. Only Embody offers a flat $299/mo refill across all dose tiers. Eden Health markets "Same Price at Every Dose" but the ongoing range is $229–$249 depending on med.'
              />
              <WatchRow
                title='3-month commitments'
                body='Gala Health locks the $179–$199/mo bundled price to a 3-month commitment. If you cancel after month one, you may forfeit the bundled rate. Calibrate also requires 3-month minimum.'
              />
              <WatchRow
                title='Shipping fees'
                body='Most verified providers include cold-chain shipping in the monthly price. Confirm at intake — some lower-tier compounded providers add $20–$50 shipping per order.'
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
              Compare All 6 Verified Compounded Tirzepatide Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Pricing verified May 5, 2026. All ship to all 50 US states.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='cheapest-tirzepatide-online'
              heading='Top Compounded Tirzepatide Programs by Price'
            />
          </div>
        </section>

        <RelatedGuides currentPath="/cheapest-tirzepatide-online" />

        {/* Final CTA */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Find your cheapest path in 60 seconds.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz factors in your insurance status, format preference, and budget — then routes you to the lowest-cost provider that fits.
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

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}

function VerdictCol({ rank, winner, price, detail }: { rank: string; winner: string; price: string; detail: string }) {
  return (
    <div className='text-center'>
      <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
        {rank}
      </div>
      <div
        className='text-xl font-bold mb-1'
        style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
      >
        {winner}
      </div>
      <div className='text-2xl font-bold mb-2' style={{ color: '#D4A33A' }}>{price}</div>
      <p className='text-xs leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}

function FactRow({ factor, a, b, c, a2, b2, c2 }: { factor: string; a: string; b: string; c: string; a2?: string; b2?: string; c2?: string }) {
  return (
    <tr className='border-t' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>{factor}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{a}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{b}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{c}</td>
    </tr>
  );
}

function CheapRow({ rank, provider, price, note, badge, slug }: { rank: number; provider: string; price: string; note: string; badge?: string; slug: string }) {
  return (
    <div className='flex items-start gap-4 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div
        className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold'
        style={{ backgroundColor: '#D4A33A', color: 'white', fontFamily: '"Playfair Display", "Georgia", serif' }}
      >
        {rank}
      </div>
      <div className='flex-1'>
        <div className='flex flex-wrap items-baseline gap-3 mb-1'>
          <h3 className='text-lg font-bold' style={{ color: '#0E2A3A' }}>{provider}</h3>
          <span className='text-base font-bold' style={{ color: '#D4A33A' }}>{price}</span>
          {badge && (
            <span className='text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
              {badge}
            </span>
          )}
        </div>
        <p className='text-sm leading-relaxed mb-2' style={{ color: '#3D5560' }}>{note}</p>
        <Link href={`/providers/${slug}`} className='text-xs font-semibold inline-flex items-center gap-1' style={{ color: '#D4A33A' }}>
          Read full review <ArrowRight className='h-3 w-3' />
        </Link>
      </div>
    </div>
  );
}

function WatchRow({ title, body }: { title: string; body: string }) {
  return (
    <div className='flex items-start gap-3 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <CircleCheck className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#7CA982' }} />
      <div>
        <h3 className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{title}</h3>
        <p className='text-sm' style={{ color: '#3D5560' }}>{body}</p>
      </div>
    </div>
  );
}
