import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Download, FileCheck2, SearchCheck, ShieldAlert } from 'lucide-react';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1PricingEvidence } from '@/components/glp1/GLP1PricingEvidence';
import {
  GLP1_PRICING_CAPTURE_DATE,
  GLP1_PRICING_CAPTURE_LABEL,
  glp1PricingCorrections,
  glp1PricingMethod,
  glp1ProviderPriceRecords,
} from '@/lib/glp1-provider-pricing';

export const metadata: Metadata = {
  title: 'GLP-1 Telehealth Prices: Source-Checked Provider Costs',
  description:
    'Compare advertised GLP-1 telehealth cash prices from provider-owned pages. Every amount includes its source, capture date, inclusions, and unresolved terms.',
  alternates: { canonical: 'https://www.glp1comparehub.com/pricing' },
  openGraph: {
    title: 'GLP-1 Telehealth Prices — Checked Against Provider Pages',
    description:
      'A dated, source-linked comparison of advertised GLP-1 telehealth prices and the terms that provider pages leave unclear.',
    url: 'https://www.glp1comparehub.com/pricing',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.glp1comparehub.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'GLP-1 telehealth pricing',
      item: 'https://www.glp1comparehub.com/pricing',
    },
  ],
};

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'GLP-1 Telehealth Advertised Price Dataset',
  description:
    'Advertised cash-pay prices, stated inclusions, unresolved terms, source URLs, and capture dates from public GLP-1 telehealth provider pages.',
  url: 'https://www.glp1comparehub.com/pricing',
  dateModified: GLP1_PRICING_CAPTURE_DATE,
  isAccessibleForFree: true,
  creator: { '@id': 'https://www.glp1comparehub.com#organization' },
  variableMeasured: [
    'Advertised price',
    'Billing period',
    'Medication inclusion',
    'Consultation inclusion',
    'Shipping inclusion',
    'Source URL',
    'Capture date',
  ],
  distribution: [
    {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: 'https://www.glp1comparehub.com/pricing/data.json',
    },
    {
      '@type': 'DataDownload',
      encodingFormat: 'text/csv',
      contentUrl: 'https://www.glp1comparehub.com/pricing/data.csv',
    },
  ],
};

export default function PricingPage() {
  return (
    <GLP1Layout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='mx-auto max-w-7xl px-4 py-2 text-center text-xs md:px-6' style={{ color: '#7A6020' }}>
          <strong>Affiliate disclosure:</strong> GLP1CompareHub may earn from links elsewhere on
          the site. The evidence links below go directly to the cited provider pages, and payment
          does not determine placement.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        <section className='py-12 md:py-20' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='mx-auto max-w-5xl px-4 md:px-6'>
            <nav className='mb-4 text-xs' aria-label='Breadcrumb' style={{ color: '#6B7B82' }}>
              <Link href='/'>Home</Link> / <span style={{ color: '#0E2A3A' }}>Pricing</span>
            </nav>
            <p className='mb-3 text-xs font-extrabold uppercase tracking-[0.2em]' style={{ color: '#7A6020' }}>
              Price transparency database
            </p>
            <h1 className='max-w-4xl text-4xl font-bold leading-tight md:text-6xl' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              GLP-1 prices, without the sales fog.
            </h1>
            <p className='mt-6 max-w-3xl text-base leading-relaxed md:text-xl' style={{ color: '#3D5560' }}>
              Here&rsquo;s the problem. A provider can lead with a first-month deal, bury the
              recurring charge, and still call the pricing transparent. We pull the advertised
              numbers from the provider&rsquo;s own page, date the check, and show what the page
              leaves unclear.
            </p>
            <p className='mt-5 text-lg font-extrabold' style={{ color: '#0E2A3A' }}>
              This is a price database. It is not a medical ranking.
            </p>

            <div className='mt-8 flex flex-wrap gap-3'>
              <a
                href='/pricing/data.csv'
                className='inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white'
                style={{ backgroundColor: '#0F4D5C' }}
              >
                <Download className='h-4 w-4' /> Download CSV
              </a>
              <a
                href='/pricing/data.json'
                className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold'
                style={{ border: '1px solid #0F4D5C', color: '#0F4D5C' }}
              >
                <Download className='h-4 w-4' /> Download JSON
              </a>
            </div>
          </div>
        </section>

        <section className='py-12 md:py-16' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='mx-auto max-w-7xl px-4 md:px-6'>
            <div className='mb-8 flex flex-wrap items-end justify-between gap-4'>
              <div>
                <h2 className='text-3xl font-bold md:text-4xl' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                  Provider-published price evidence
                </h2>
                <p className='mt-2 text-sm' style={{ color: '#6B7B82' }}>
                  {glp1ProviderPriceRecords.length} providers checked on {GLP1_PRICING_CAPTURE_LABEL}. Sorted alphabetically.
                </p>
              </div>
              <Link href='/methodology' className='inline-flex items-center gap-1.5 text-sm font-bold underline underline-offset-4' style={{ color: '#0F4D5C' }}>
                Read the full methodology <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <GLP1PricingEvidence records={glp1ProviderPriceRecords} />
          </div>
        </section>

        <section className='bg-white py-12 md:py-16'>
          <div className='mx-auto max-w-6xl px-4 md:px-6'>
            <h2 className='text-3xl font-bold' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
              What this comparison can prove
            </h2>
            <div className='mt-7 grid gap-5 md:grid-cols-3'>
              <MethodCard
                icon={SearchCheck}
                title='The public claim'
                body='We record the amount and billing language visible on a provider-owned page. We do not substitute an affiliate dashboard or an old press release.'
              />
              <MethodCard
                icon={FileCheck2}
                title='The source and date'
                body='Every record links to the page we checked and carries the same capture date. If the provider changes the page, the old observation remains traceable.'
              />
              <MethodCard
                icon={ShieldAlert}
                title='The unresolved terms'
                body='If the recurring total, medication, consultation, shipping, or cancellation terms are unclear, we say so. Unknown means unknown.'
              />
            </div>

            <div className='mt-10 rounded-2xl p-6 md:p-8' style={{ backgroundColor: '#F0EBE0', border: '1px solid #E5DDC8' }}>
              <h3 className='text-xl font-bold' style={{ color: '#0E2A3A' }}>Scope</h3>
              <p className='mt-2 text-sm leading-relaxed' style={{ color: '#3D5560' }}>{glp1PricingMethod.scope}</p>
              <p className='mt-3 text-sm leading-relaxed' style={{ color: '#3D5560' }}>{glp1PricingMethod.sorting}</p>
              <ul className='mt-4 space-y-2 text-sm' style={{ color: '#3D5560' }}>
                {glp1PricingMethod.exclusions.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8'>
              <h3 className='text-xl font-bold' style={{ color: '#0E2A3A' }}>Correction log</h3>
              {glp1PricingCorrections.length === 0 ? (
                <p className='mt-2 text-sm leading-relaxed' style={{ color: '#3D5560' }}>
                  No material corrections are recorded for the current {GLP1_PRICING_CAPTURE_LABEL} capture.
                </p>
              ) : (
                <ul className='mt-4 space-y-3 text-sm' style={{ color: '#3D5560' }}>
                  {glp1PricingCorrections.map((correction) => (
                    <li key={`${correction.date}-${correction.provider ?? 'dataset'}`}>
                      <strong>{correction.date}</strong>
                      {correction.provider ? ` — ${correction.provider}` : ''}: {correction.summary}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        <section className='py-12' style={{ backgroundColor: '#0F4D5C' }}>
          <div className='mx-auto max-w-5xl px-4 text-white md:px-6'>
            <h2 className='text-2xl font-bold'>One medical line we will not blur</h2>
            <p className='mt-3 max-w-4xl text-sm leading-relaxed' style={{ color: 'rgba(255,255,255,0.8)' }}>
              Compounded drugs are not FDA-approved. FDA does not review them for safety,
              effectiveness, or quality before marketing. A licensed prescriber must determine
              whether any prescription treatment is appropriate for an individual patient.
            </p>
            <a
              href='https://www.fda.gov/drugs/human-drug-compounding/fda-telehealth-companies-what-know-when-promoting-compounded-drugs'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-4 inline-flex items-center gap-1.5 text-sm font-bold underline underline-offset-4'
              style={{ color: '#F4D483' }}
            >
              Read the FDA&rsquo;s telehealth guidance <ArrowRight className='h-4 w-4' />
            </a>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

function MethodCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof SearchCheck;
  title: string;
  body: string;
}) {
  return (
    <div className='rounded-2xl p-6' style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}>
      <Icon className='h-6 w-6' style={{ color: '#7A6020' }} />
      <h3 className='mt-4 font-bold' style={{ color: '#0E2A3A' }}>{title}</h3>
      <p className='mt-2 text-sm leading-relaxed' style={{ color: '#3D5560' }}>{body}</p>
    </div>
  );
}
