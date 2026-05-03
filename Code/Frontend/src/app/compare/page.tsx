import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { glp1Providers } from '@/lib/glp1-providers';
import { allPageRoutes } from '@/lib/glp1-page-routes';
import { ArrowRight, Columns3, DollarSign, Pill, Headphones, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compare GLP-1 Providers — Side-by-Side Comparison Tool | GLP1CompareHub',
  description:
    'Compare any 2-4 GLP-1 telehealth providers side-by-side. Pricing, medications, features, ratings, and pros/cons in one view.',
  alternates: { canonical: 'https://glp1comparehub.com/compare' },
  openGraph: {
    title: 'Compare GLP-1 Providers Side-by-Side',
    description: 'Pick any 2-4 GLP-1 telehealth providers and see them compared instantly.',
    url: 'https://glp1comparehub.com/compare',
    siteName: 'GLP1CompareHub',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://glp1comparehub.com/compare' },
  ],
};

export default function CompareHubPage() {
  // Pull all pre-built vs-pages from the page-routes registry
  const vsPages = allPageRoutes.filter((r) => r.template === 'provider-vs-provider');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#FFF1D6', borderColor: '#E8DDD0' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#8A6D1A' }}>
          <strong>Affiliate Disclosure:</strong> Comparisons are independent.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* Header */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#7A6478' }}>Home</Link>
              <span style={{ color: '#7A6478' }}> / </span>
              <span style={{ color: '#3A1B3D' }}>Compare</span>
            </nav>

            <h1
              className='text-3xl md:text-5xl font-bold mb-4'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare GLP-1 Providers
            </h1>
            <p className='text-base md:text-lg max-w-3xl' style={{ color: '#4B3548' }}>
              Compare any GLP-1 telehealth providers side-by-side. Pre-built head-to-head pages
              below, or browse our{' '}
              <Link href='/providers' className='underline' style={{ color: '#F47C5B' }}>
                full directory
              </Link>{' '}
              to see all options.
            </p>
          </div>
        </section>

        {/* Popular comparisons */}
        <section className='py-12' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Popular Comparisons
            </h2>
            <p className='text-sm mb-6' style={{ color: '#7A6478' }}>
              The most-viewed head-to-head pages on our site.
            </p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'>
              {vsPages.map((vp) => {
                const slug = vp.path.replace('/compare/', '');
                const [a, b] = slug.split('-vs-');
                return (
                  <Link
                    key={vp.path}
                    href={vp.path}
                    className='block bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5'
                    style={{ border: '1px solid #E8DDD0' }}
                  >
                    <div className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#7A6478' }}>
                      Compare
                    </div>
                    <div className='text-sm font-bold' style={{ color: '#3A1B3D' }}>
                      {prettyName(a)} <span style={{ color: '#F47C5B' }}>vs</span> {prettyName(b)}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* What you can compare */}
        <section className='py-14 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-8 text-center'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              What You Can Compare
            </h2>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
              <CompareItem
                icon={<DollarSign className='h-5 w-5' />}
                title='Pricing'
                body='Monthly + 3-month + per-dose pricing across all tiers'
              />
              <CompareItem
                icon={<Pill className='h-5 w-5' />}
                title='Medications'
                body='Compounded vs branded options at each provider'
              />
              <CompareItem
                icon={<Headphones className='h-5 w-5' />}
                title='Consultations'
                body='Provider visits, messaging, support availability'
              />
              <CompareItem
                icon={<Settings className='h-5 w-5' />}
                title='Features'
                body='Lab work, dose flexibility, cancellation, shipping'
              />
            </div>
          </div>
        </section>

        {/* How to use */}
        <section className='py-14' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-8 text-center'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              How to Use This Tool
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              <Step n={1} title='Pick from popular' body='Tap any pre-built head-to-head above.' />
              <Step n={2} title='See side-by-side' body='Pricing, medications, features in one view.' />
              <Step n={3} title='Take the quiz' body="Or get matched in 60 seconds via our quiz." />
            </div>
            <div className='text-center mt-8'>
              <Link
                href='/match'
                className='inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md'
                style={{ backgroundColor: '#F47C5B' }}
              >
                Take the Quiz <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

function prettyName(slug: string): string {
  const provider = glp1Providers.find((p) => p.slug === slug);
  return provider?.name ?? slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
}

function CompareItem({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div
      className='text-center p-5 rounded-2xl'
      style={{ backgroundColor: '#FDF7F0', border: '1px solid #E8DDD0' }}
    >
      <div
        className='inline-flex items-center justify-center w-11 h-11 rounded-full mb-3'
        style={{ backgroundColor: '#FFE5D9', color: '#F47C5B' }}
      >
        {icon}
      </div>
      <h3 className='font-bold mb-1.5' style={{ color: '#3A1B3D' }}>
        {title}
      </h3>
      <p className='text-xs' style={{ color: '#4B3548' }}>
        {body}
      </p>
    </div>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className='flex items-start gap-3'>
      <div
        className='w-9 h-9 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-white'
        style={{ backgroundColor: '#F47C5B' }}
      >
        {n}
      </div>
      <div>
        <h3 className='font-bold mb-1' style={{ color: '#3A1B3D' }}>{title}</h3>
        <p className='text-sm' style={{ color: '#4B3548' }}>{body}</p>
      </div>
    </div>
  );
}
