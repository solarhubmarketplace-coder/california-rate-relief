import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarCheck2, FileSearch, Scale, ShieldCheck } from 'lucide-react';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1PricingEvidence } from '@/components/glp1/GLP1PricingEvidence';
import {
  GLP1_PRICING_CAPTURE_LABEL,
  glp1ProviderPriceRecords,
} from '@/lib/glp1-provider-pricing';

export const metadata: Metadata = {
  title: 'GLP-1 Telehealth Price Comparison | GLP1CompareHub',
  description:
    'Compare advertised GLP-1 telehealth prices against provider-owned sources. See capture dates, stated inclusions, promotional terms, and what remains unclear.',
  alternates: { canonical: 'https://www.glp1comparehub.com/' },
  icons: {
    icon: [{ url: '/img/glp1/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: 'GLP-1 Telehealth Prices, Checked at the Source',
    description:
      'A dated, source-linked comparison of advertised GLP-1 telehealth prices and unresolved terms.',
    type: 'website',
    url: 'https://www.glp1comparehub.com/',
    siteName: 'GLP1CompareHub',
    images: [
      {
        url: 'https://www.glp1comparehub.com/img/glp1/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GLP1CompareHub price transparency database',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.glp1comparehub.com#organization',
  name: 'GLP1CompareHub',
  url: 'https://www.glp1comparehub.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.glp1comparehub.com/img/glp1/favicon.svg',
  },
  description:
    'Independent publisher documenting public GLP-1 telehealth prices, terms, and source evidence.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.glp1comparehub.com#website',
  name: 'GLP1CompareHub',
  url: 'https://www.glp1comparehub.com',
  description:
    'Source-linked GLP-1 telehealth price comparisons with dated evidence and unresolved terms.',
  publisher: { '@id': 'https://www.glp1comparehub.com#organization' },
};

export default function GLP1Home() {
  const publishedCount = glp1ProviderPriceRecords.filter(
    (record) => record.publicPriceStatus === 'published'
  ).length;

  return (
    <GLP1Layout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='mx-auto max-w-7xl px-4 py-2 text-center text-xs md:px-6' style={{ color: '#7A6020' }}>
          <strong>Affiliate disclosure:</strong> We may earn a commission from some links on this
          site. Compensation does not determine the order of the price evidence below.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Read the full disclosure</Link>.
        </div>
      </div>

      <main>
        <section
          className='py-14 md:py-24'
          style={{ background: 'linear-gradient(135deg, #F8F4ED 0%, #F4EBD0 55%, #E5DDC8 100%)' }}
        >
          <div className='mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16'>
            <div>
              <p className='mb-3 text-xs font-extrabold uppercase tracking-[0.2em]' style={{ color: '#7A6020' }}>
                Source-checked GLP-1 pricing
              </p>
              <h1 className='text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                What does GLP-1 telehealth actually cost?
              </h1>
              <p className='mt-6 max-w-3xl text-base leading-relaxed md:text-xl' style={{ color: '#3D5560' }}>
                The ad gives you one number. The checkout can give you another. We check the
                provider&rsquo;s own page, record the date, separate an intro price from the ongoing
                terms, and flag what the provider never says.
              </p>
              <p className='mt-5 text-xl font-extrabold' style={{ color: '#0E2A3A' }}>
                Unknown means unknown.
              </p>
              <div className='mt-8 flex flex-wrap gap-3'>
                <Link
                  href='/pricing'
                  className='inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-bold text-white shadow-md transition hover:-translate-y-0.5'
                  style={{ backgroundColor: '#0F4D5C' }}
                >
                  Compare current prices <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/methodology'
                  className='inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold transition hover:-translate-y-0.5'
                  style={{ border: '1.5px solid #0E2A3A', color: '#0E2A3A' }}
                >
                  See how we verify
                </Link>
              </div>
            </div>

            <div className='rounded-3xl p-6 text-white shadow-xl md:p-8' style={{ backgroundColor: '#0F4D5C' }}>
              <p className='text-xs font-bold uppercase tracking-[0.18em]' style={{ color: '#F4D483' }}>
                Current evidence set
              </p>
              <div className='mt-5 grid grid-cols-2 gap-4'>
                <Stat value={String(glp1ProviderPriceRecords.length)} label='providers checked' />
                <Stat value={String(publishedCount)} label='public prices found' />
                <Stat value='100%' label='source-linked' />
                <Stat value='$0' label='pay-to-play placement' />
              </div>
              <div className='mt-6 border-t pt-5 text-sm leading-relaxed' style={{ borderColor: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.78)' }}>
                Last checked {GLP1_PRICING_CAPTURE_LABEL}. Provider prices and promotions can
                change. Confirm the final recurring total before paying.
              </div>
            </div>
          </div>
        </section>

        <section className='py-12 md:py-16' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='mx-auto max-w-7xl px-4 md:px-6'>
            <div className='mb-8 flex flex-wrap items-end justify-between gap-4'>
              <div>
                <h2 className='text-3xl font-bold md:text-4xl' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                  The latest provider-page snapshot
                </h2>
                <p className='mt-2 max-w-3xl text-sm leading-relaxed md:text-base' style={{ color: '#3D5560' }}>
                  These are advertised cash-pay amounts. They are not endorsements, treatment
                  recommendations, or promises about what a clinician will prescribe.
                </p>
              </div>
              <Link href='/pricing' className='inline-flex items-center gap-1.5 text-sm font-bold underline underline-offset-4' style={{ color: '#0F4D5C' }}>
                Open the full dataset <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
            <GLP1PricingEvidence records={glp1ProviderPriceRecords} compact />
          </div>
        </section>

        <section className='bg-white py-14 md:py-20'>
          <div className='mx-auto max-w-7xl px-4 md:px-6'>
            <div className='mx-auto max-w-3xl text-center'>
              <h2 className='text-3xl font-bold md:text-4xl' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                A smaller site. A stronger record.
              </h2>
              <p className='mt-4 text-base leading-relaxed' style={{ color: '#3D5560' }}>
                We are rebuilding around facts we can prove. No fake star scores. No medical
                rankings written without a clinician. No hundreds of pages saying the same thing.
              </p>
            </div>
            <div className='mt-10 grid gap-5 md:grid-cols-3'>
              <Principle
                icon={FileSearch}
                title='Provider-owned sources'
                body='Every published price points back to the page where the provider made the claim.'
              />
              <Principle
                icon={CalendarCheck2}
                title='Dated observations'
                body='A price without a date is a screenshot without context. Every record carries both.'
              />
              <Principle
                icon={Scale}
                title='Terms before rankings'
                body='We compare what is disclosed, what is missing, and what the recurring charge may require.'
              />
            </div>
          </div>
        </section>

        <section className='py-12' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-[auto_1fr] md:px-6'>
            <ShieldCheck className='h-9 w-9' style={{ color: '#7A6020' }} />
            <div>
              <h2 className='text-2xl font-bold' style={{ color: '#0E2A3A' }}>The medical boundary</h2>
              <p className='mt-3 max-w-4xl text-sm leading-relaxed' style={{ color: '#3D5560' }}>
                GLP1CompareHub is a publisher, not a medical practice. Compounded drugs are not
                FDA-approved and are not reviewed by FDA for safety, effectiveness, or quality
                before marketing. Prescription decisions belong to a licensed clinician who knows
                the patient.
              </p>
              <div className='mt-4 flex flex-wrap gap-5 text-sm font-bold'>
                <Link href='/disclaimer' className='underline underline-offset-4' style={{ color: '#0F4D5C' }}>
                  Medical disclaimer
                </Link>
                <a
                  href='https://www.fda.gov/drugs/human-drug-compounding/fda-telehealth-companies-what-know-when-promoting-compounded-drugs'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline underline-offset-4'
                  style={{ color: '#0F4D5C' }}
                >
                  FDA telehealth guidance
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className='text-3xl font-extrabold' style={{ color: '#F4D483' }}>{value}</div>
      <div className='mt-1 text-xs' style={{ color: 'rgba(255,255,255,0.72)' }}>{label}</div>
    </div>
  );
}

function Principle({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof FileSearch;
  title: string;
  body: string;
}) {
  return (
    <div className='rounded-2xl p-6' style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}>
      <Icon className='h-6 w-6' style={{ color: '#7A6020' }} />
      <h3 className='mt-4 text-lg font-bold' style={{ color: '#0E2A3A' }}>{title}</h3>
      <p className='mt-2 text-sm leading-relaxed' style={{ color: '#3D5560' }}>{body}</p>
    </div>
  );
}
