import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { primaryProviders } from '@/lib/glp1-providers';
import { ArrowRight, ShieldCheck, AlertCircle, CircleCheck, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compounded Tirzepatide 2026: Cost ($133–$399/mo), Safety, FDA Status, and Where to Buy | GLP1CompareHub',
  description:
    'Independent guide to compounded tirzepatide: how 503A pharmacies make it, why it is NOT FDA-approved, current pricing across the top 6 telehealth providers ($133–$399/mo), legal status post-April 2026, and which provider matches your situation.',
  alternates: { canonical: 'https://glp1comparehub.com/compounded-tirzepatide' },
  openGraph: {
    title: 'Compounded Tirzepatide 2026 — Pricing, Safety, FDA Status',
    description:
      '503A pharmacy compounding, post-April-2026 FDA shutdown analysis, $133–$399/mo provider pricing comparison, and which telehealth program is right for you.',
    url: 'https://glp1comparehub.com/compounded-tirzepatide',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Compounded Tirzepatide 2026: Cost, Safety, and Where to Buy',
  datePublished: '2026-05-03',
  dateModified: '2026-05-03',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/compounded-tirzepatide',
  about: ['Compounded tirzepatide', 'Tirzepatide', '503A compounding pharmacy', 'GLP-1 weight loss'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is compounded tirzepatide FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Compounded tirzepatide is NOT an FDA-approved drug. It is produced by state-licensed 503A and 503B compounding pharmacies under specific FDA exemptions that allow compounding of medications when the branded version (Zepbound, Mounjaro) is in shortage or when an individual patient has documented medical necessity for a custom formulation. The FDA April 30, 2026 503B proposal could materially change availability — see the regulatory section below.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does compounded tirzepatide cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of May 2026, compounded tirzepatide ranges from $133/mo (GobyMeds entry tier) to $399/mo (DirectMeds injectable, top tier) across our verified telehealth provider stack. This compares to $1,498/mo for branded Zepbound through telehealth — a 73-91% cost reduction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded tirzepatide safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded tirzepatide produced by reputable 503A pharmacies follows USP standards but does not undergo the same FDA pre-market safety review as branded Zepbound or Mounjaro. Look for providers using LegitScript-certified, NABP-accredited, or Valisure-tested compounding pharmacies. Risks include batch-to-batch variability, incorrect dosing, and adulteration in lower-tier providers. The clinical efficacy data from Zepbound (SURMOUNT-1, 20.2% weight loss at 72 weeks) does NOT automatically transfer to compounded versions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy compounded tirzepatide online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top verified telehealth providers offering compounded tirzepatide as of May 2026: GobyMeds (from $133/mo), Ivim Health ($149/mo + $74.99 program fee), Eden Health (from $129 first month, 3-mo plan), MEDVi ($229-$299/mo), SkinnyRx ($299-$399/mo), DirectMeds ($224-$399/mo). All require a telehealth consultation and prescription.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded tirzepatide legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded tirzepatide produced by state-licensed 503A pharmacies under documented medical necessity is legal in the United States as of May 2026. The legal landscape is evolving: the FDA April 30, 2026 503B proposal would limit compounding when a branded equivalent is on the market. Consult your prescriber and the FDA\'s current guidance for the latest status.',
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

      <div className='border-b' style={{ backgroundColor: '#FFF1D6', borderColor: '#E8DDD0' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#8A6D1A' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* Header */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#7A6478' }}>Home</Link>
              <span style={{ color: '#7A6478' }}> / </span>
              <span style={{ color: '#3A1B3D' }}>Compounded Tirzepatide</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compounded Tirzepatide 2026
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#4B3548' }}>
              The 73-91% cheaper alternative to branded Zepbound. Cost, safety, FDA status, and where to buy.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#7A6478' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 3, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
            </div>
          </div>
        </section>

        {/* FDA warning callout — top of fold */}
        <section className='py-6' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-2xl p-5 flex items-start gap-3'
              style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}
            >
              <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
              <div>
                <div className='text-sm font-bold mb-1' style={{ color: '#B14739' }}>
                  Important: Compounded tirzepatide is NOT FDA-approved
                </div>
                <div className='text-sm' style={{ color: '#4B3548' }}>
                  It is produced by state-licensed 503A pharmacies under specific FDA exemptions. The clinical
                  trial efficacy of <em>branded</em> Zepbound (SURMOUNT-1: 20.2% average weight loss) does NOT
                  automatically transfer to compounded versions. Always work with a licensed prescriber and
                  use providers that source from accredited compounding pharmacies (LegitScript, NABP, USP-compliant).
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is compounded tirzepatide */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              What Is Compounded Tirzepatide?
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#4B3548' }}>
              <strong>Tirzepatide</strong> is the active molecule in Eli Lilly&rsquo;s FDA-approved Zepbound
              (weight loss) and Mounjaro (type-2 diabetes). It is the only dual GIP + GLP-1 receptor agonist on
              the market, producing 20.2% average weight loss at 72 weeks in the SURMOUNT-1 trial.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#4B3548' }}>
              <strong>Compounded tirzepatide</strong> is the same molecule produced by state-licensed 503A and 503B
              compounding pharmacies — NOT by Eli Lilly. The FDA permits compounding under specific exemptions
              (drug shortage status, individual patient medical necessity, or per state pharmacy board rules).
              Compounded versions can include the active ingredient alone, or stacked with B12, B6, NAD+, glycine,
              or L-carnitine depending on the provider&rsquo;s formulation.
            </p>
          </div>
        </section>

        {/* Pricing table */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compounded Tirzepatide Pricing (May 2026)
            </h2>
            <div className='overflow-x-auto rounded-2xl bg-white' style={{ border: '1px solid #E8DDD0' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#FDF7F0' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>Provider</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>Format</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>Monthly</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <PricingRow provider='GobyMeds' format='Injectable' price='From $133/mo' note='Lowest entry price; B12 / NAD+ / glycine combo available' badge='Best Value' />
                  <PricingRow provider='Ivim Health' format='Injectable' price='$149/mo + $74.99 fee' note='Two-part pricing; microdosing GLP-1 program available' />
                  <PricingRow provider='OrderlyMeds' format='Injectable' price='$299/mo (after starter)' note='3-month starter $449; lifestyle bundle (BetterHelp, meals)' />
                  <PricingRow provider='MEDVi' format='Injectable' price='$229–$299/mo' note='Strongest brand recognition; 30-day flexibility' />
                  <PricingRow provider='SkinnyRx' format='Injectable' price='$299–$399/mo' note='503A specialist; bundled all-in pricing' badge='Best Overall' />
                  <PricingRow provider='Eden Health' format='Injectable' price='From $129 first mo (3-mo)' note='"Same Price at Every Dose" guarantee' />
                  <PricingRow provider='DirectMeds' format='Injectable' price='$399/mo' note='Sublingual drops also offered at $224.10/mo (unique)' badge='Best for Sublingual' />
                  <PricingRow provider='DirectMeds' format='Sublingual Drops' price='$224.10/mo' note='Only verified provider with sublingual GLP-1 in May 2026' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#7A6478' }}>
              Pricing verified directly from each provider&rsquo;s public site, May 2026. Confirm current rates
              before purchase. Branded comparison: Zepbound through telehealth ~$1,498/mo (73-91% more expensive).
            </p>
          </div>
        </section>

        {/* Safety / quality criteria */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              How to Choose a Safe Compounded Tirzepatide Provider
            </h2>
            <div className='space-y-3'>
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#5FBFAA' }} />}
                title='LegitScript or NABP certification'
                body='Confirms the compounding pharmacy meets baseline regulatory and quality standards.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#5FBFAA' }} />}
                title='503A vs 503B disclosure'
                body='503A pharmacies serve individual prescriptions. 503B "outsourcing facilities" produce in larger batches under stricter oversight. Either is acceptable; lack of clarity is a yellow flag.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#5FBFAA' }} />}
                title='Valisure third-party testing (bonus)'
                body='Some pharmacies submit batches to Valisure for independent purity / potency testing. This is the gold standard but rare.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#5FBFAA' }} />}
                title='Licensed prescriber required'
                body='Avoid any provider that ships without a real telehealth consultation and prescription. That is a major regulatory red flag.'
              />
              <SafetyRow
                icon={<ShieldCheck className='h-5 w-5' style={{ color: '#5FBFAA' }} />}
                title='Cold-chain shipping'
                body='Tirzepatide must remain refrigerated. Reputable providers ship with cold packs and clear handling instructions.'
              />
            </div>
          </div>
        </section>

        {/* Regulatory landscape */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The FDA April 30, 2026 503B Shutdown Proposal
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#4B3548' }}>
              In April 2026, the FDA proposed limiting 503B outsourcing-facility compounding of tirzepatide and
              semaglutide on the grounds that the branded equivalents (Zepbound, Wegovy) are no longer in shortage.
              The proposal does NOT directly affect 503A pharmacy compounding for individual prescriptions, which
              remains the primary channel for compounded tirzepatide as of May 2026.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#4B3548' }}>
              <strong>Practical impact:</strong> Most of the providers in our top stack (SkinnyRx, MEDVi, Ivim,
              Eden Health, GobyMeds, OrderlyMeds, DirectMeds) source from 503A pharmacies and would continue
              serving compounded tirzepatide if the 503B proposal is implemented. 503B-only providers may
              discontinue their compounded GLP-1 lines.
            </p>
            <p className='text-sm italic' style={{ color: '#7A6478' }}>
              We re-verify the FDA regulatory status monthly. Last verified: May 3, 2026. Subscribe to{' '}
              <Link href='/news' className='underline' style={{ color: '#F47C5B' }}>our news feed</Link> for updates.
            </p>
          </div>
        </section>

        {/* Provider table */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare Compounded Tirzepatide Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#7A6478' }}>
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
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compounded Tirzepatide vs Branded Zepbound — Quick Decision Guide
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E8DDD0' }}>
                <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#F47C5B' }}>
                  Pick compounded if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#4B3548' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#5FBFAA' }} />
                    Cost is the dominant factor (73-91% cheaper)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#5FBFAA' }} />
                    You are uninsured or your insurance does not cover branded
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#5FBFAA' }} />
                    You are comfortable with non-FDA-approved medication under prescriber supervision
                  </li>
                </ul>
              </div>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E8DDD0' }}>
                <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#5FBFAA' }}>
                  Pick branded Zepbound if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#4B3548' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#5FBFAA' }} />
                    Insurance covers the branded version
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#5FBFAA' }} />
                    You want FDA-approved batch-to-batch consistency
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#5FBFAA' }} />
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
              style={{ background: 'linear-gradient(135deg, #F47C5B 0%, #F09A65 50%, #EFC079 100%)' }}
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
                  style={{ color: '#F47C5B' }}
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
    <tr className='border-t' style={{ borderColor: '#E8DDD0' }}>
      <td className='px-5 py-3'>
        <div className='font-semibold' style={{ color: '#3A1B3D' }}>{provider}</div>
        {badge && (
          <span className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mt-1' style={{ backgroundColor: '#FFF1D6', color: '#A88A1A' }}>
            {badge}
          </span>
        )}
      </td>
      <td className='px-5 py-3 text-sm' style={{ color: '#4B3548' }}>{format}</td>
      <td className='px-5 py-3 text-right text-base font-bold' style={{ color: '#F47C5B' }}>{price}</td>
      <td className='px-5 py-3 text-xs' style={{ color: '#7A6478' }}>{note}</td>
    </tr>
  );
}

function SafetyRow({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div
      className='flex items-start gap-3 p-5 rounded-2xl'
      style={{ backgroundColor: '#FDF7F0', border: '1px solid #E8DDD0' }}
    >
      <span className='flex-shrink-0 mt-0.5'>{icon}</span>
      <div>
        <h3 className='font-bold mb-1' style={{ color: '#3A1B3D' }}>{title}</h3>
        <p className='text-sm' style={{ color: '#4B3548' }}>{body}</p>
      </div>
    </div>
  );
}
