import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { glp1Medications } from '@/lib/glp1-medications';
import { Trophy, Star, ShieldCheck, BadgeCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best GLP-1 Providers Online (May 2026) — Expert Rankings | GLP1CompareHub',
  description:
    'Expert-ranked top 5 GLP-1 telemedicine providers for each medication: Wegovy, Zepbound, Mounjaro, Ozempic, Semaglutide, Tirzepatide, Compounded GLP-1, and Brand-Name GLP-1. Updated weekly.',
  alternates: { canonical: 'https://glp1comparehub.com/best' },
  openGraph: {
    title: 'Best GLP-1 Providers — Expert Rankings 2026',
    description:
      'Independent rankings of the top GLP-1 telemedicine providers. Pricing, quality certifications (Valisure, LegitScript, NABP), customer experience, and medication options.',
    url: 'https://glp1comparehub.com/best',
    siteName: 'GLP1CompareHub',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Best Rankings', item: 'https://glp1comparehub.com/best' },
  ],
};

export default function BestRankingsHub() {
  // Split medications into "By Category" and "By Medication"
  const byCategory = glp1Medications.filter(
    (m) => m.slug === 'compounded-glp-1' || m.slug === 'brand-name-glp-1'
  );
  const byMedication = glp1Medications.filter(
    (m) => m.slug !== 'compounded-glp-1' && m.slug !== 'brand-name-glp-1'
  );

  return (
    <GLP1Layout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <GLP1Header />

      {/* Affiliate disclosure */}
      <div className='border-b' style={{ backgroundColor: '#FFF1D6', borderColor: '#E8DDD0' }}>
        <div
          className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center'
          style={{ color: '#8A6D1A' }}
        >
          <strong>Affiliate Disclosure:</strong> Rankings are independent of commission rates. We
          may earn a commission if you sign up — at no extra cost to you.{' '}
          <Link href='/affiliate-disclosure' className='underline'>
            Full disclosure
          </Link>
          .
        </div>
      </div>

      <main>
        {/* Page header */}
        <section className='py-10 md:py-16' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#7A6478' }}>Home</Link>
              <span style={{ color: '#7A6478' }}> / </span>
              <span style={{ color: '#3A1B3D' }}>Best Rankings</span>
            </nav>

            <h1
              className='text-3xl md:text-5xl font-bold mb-4'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Best GLP-1 Providers Online (May 2026)
            </h1>
            <p className='text-base md:text-lg max-w-3xl mb-6' style={{ color: '#4B3548' }}>
              Expert rankings of the top GLP-1 telemedicine providers for each medication. Updated
              monthly with verified pricing.
            </p>

            <div className='flex flex-wrap items-center gap-4 text-xs' style={{ color: '#4B3548' }}>
              <div className='flex items-center gap-1.5'>
                <ShieldCheck className='h-4 w-4' style={{ color: '#5FBFAA' }} />
                Independent Rankings
              </div>
              <div className='flex items-center gap-1.5'>
                <BadgeCheck className='h-4 w-4' style={{ color: '#5FBFAA' }} />
                Updated Monthly
              </div>
            </div>
          </div>
        </section>

        {/* By Category section */}
        <section className='py-12' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              By Category
            </h2>
            <p className='text-sm mb-6' style={{ color: '#7A6478' }}>
              Compare the broad approach: brand-name vs compounded.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
              {byCategory.map((m) => (
                <RankingTile key={m.slug} med={m} large />
              ))}
            </div>
          </div>
        </section>

        {/* By Medication section */}
        <section className='py-12 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              By Medication
            </h2>
            <p className='text-sm mb-6' style={{ color: '#7A6478' }}>
              Drill down to the specific medication you&rsquo;re interested in.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4'>
              {byMedication.map((m) => (
                <RankingTile key={m.slug} med={m} />
              ))}
            </div>
          </div>
        </section>

        {/* Methodology block */}
        <section className='py-14 md:py-20' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-3'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              How We Create Our Rankings
            </h2>
            <p className='text-base mb-8' style={{ color: '#4B3548' }}>
              Every provider in our rankings is evaluated against the same four criteria. We do not
              accept payment for placement and do not adjust rankings based on commission rates.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <MethodologyItem
                title='Pricing transparency'
                body='Verified monthly directly from each provider. We flag hidden fees, lab costs, and cancellation policies.'
              />
              <MethodologyItem
                title='Quality certifications'
                body='Valisure, LegitScript, NABP, and state pharmacy board credentials weighted heavily.'
              />
              <MethodologyItem
                title='Customer experience'
                body='Trustpilot ratings, BBB scores, and first-hand reviews where available.'
              />
              <MethodologyItem
                title='Medication options'
                body='Variety, dose flexibility, and availability of branded vs compounded formulations.'
              />
            </div>

            <div
              className='mt-8 rounded-2xl p-6 md:p-7'
              style={{ backgroundColor: '#FDF7F0', border: '1px solid #E8DDD0' }}
            >
              <h3 className='text-lg font-bold mb-3' style={{ color: '#3A1B3D' }}>
                Our Commitment
              </h3>
              <ul className='space-y-2 text-sm' style={{ color: '#4B3548' }}>
                <li>· <strong>Unbiased:</strong> Recommendations are not influenced by commission rates.</li>
                <li>· <strong>Updated:</strong> Pricing reviewed monthly; rankings refreshed quarterly.</li>
                <li>· <strong>Transparent:</strong> Methodology and affiliate disclosures are public.</li>
                <li>· <strong>No pay-to-play:</strong> Providers cannot purchase placement.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

function RankingTile({ med, large = false }: { med: typeof glp1Medications[number]; large?: boolean }) {
  return (
    <Link
      href={`/best/telemedicine-${med.slug}`}
      className='block bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1'
      style={{ border: '1px solid #E8DDD0' }}
    >
      <div
        className='inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full mb-3'
        style={{ backgroundColor: '#FFF1D6', color: '#A88A1A' }}
      >
        <Trophy className='h-3 w-3' /> Top Ranked
      </div>
      <div
        className={`font-bold mb-1.5 ${large ? 'text-xl md:text-2xl' : 'text-sm md:text-base'}`}
        style={{ color: '#3A1B3D' }}
      >
        Best for {med.name}
      </div>
      {large && med.priceRange && (
        <div className='text-xs mb-3' style={{ color: '#7A6478' }}>
          From {med.priceRange.split('–')[0]}
        </div>
      )}
      <span className='inline-flex items-center gap-1 text-xs font-semibold' style={{ color: '#F47C5B' }}>
        See Top 5 <ArrowRight className='h-3 w-3' />
      </span>
    </Link>
  );
}

function MethodologyItem({ title, body }: { title: string; body: string }) {
  return (
    <div
      className='p-5 rounded-2xl bg-white'
      style={{ border: '1px solid #E8DDD0' }}
    >
      <div className='flex items-start gap-3'>
        <Star className='h-5 w-5 mt-0.5 flex-shrink-0' style={{ color: '#F47C5B' }} />
        <div>
          <h3 className='font-bold mb-1.5' style={{ color: '#3A1B3D' }}>
            {title}
          </h3>
          <p className='text-sm' style={{ color: '#4B3548' }}>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
