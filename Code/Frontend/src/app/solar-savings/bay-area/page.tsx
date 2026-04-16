import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, MapPin, Home } from 'lucide-react';
import {
  CITIES,
  UTILITY_DATA,
  type CityData,
} from '@/data/cities-data';

export const metadata: Metadata = {
  title: 'Bay Area Solar Companies | San Jose, San Francisco, Oakland | Rate Relief',
  description:
    'Solar solutions for Bay Area homeowners in San Jose, San Francisco, Oakland, Fremont, and beyond. Cut your PG&E bill by 30-50% with zero down solar programs.',
  alternates: {
    canonical: '/solar-savings/bay-area',
  },
  openGraph: {
    title: 'Bay Area Solar Energy & Cost Reduction Guide',
    description:
      'Explore solar for your Bay Area home. Reduce your PG&E electric bill by 30-50% with zero money down.',
    type: 'website',
  },
};

// Bay Area counties: Santa Clara, San Francisco, Alameda, Contra Costa, Santa Cruz, Sonoma, San Mateo, Monterey, etc.
const bayAreaCounties = [
  'Santa Clara County',
  'San Francisco County',
  'Alameda County',
  'Contra Costa County',
  'Santa Cruz County',
  'Sonoma County',
  'San Mateo County',
  'Monterey County',
];

const bayAreaCities = CITIES.filter((city) =>
  bayAreaCounties.includes(city.county)
).sort((a, b) => b.avgMonthlyBill - a.avgMonthlyBill);

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Bay Area Solar Energy & Cost Reduction',
    description:
      'A guide to solar energy options and electric bill reduction strategies for Bay Area homeowners served by PG&E.',
    url: 'https://ratereliefca.com/solar-savings/bay-area',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'California Rate Relief Program — Bay Area',
      description:
        'Helping Bay Area homeowners qualify for affordable solar energy programs under PG&E service.',
      areaServed: [
        { '@type': 'City', name: 'San Jose' },
        { '@type': 'City', name: 'San Francisco' },
        { '@type': 'City', name: 'Oakland' },
        { '@type': 'City', name: 'Fremont' },
        { '@type': 'City', name: 'Pleasanton' },
        { '@type': 'City', name: 'Sunnyvale' },
      ],
    },
  };
}

export default function BayAreaSolarPage() {
  const pgeUtility = UTILITY_DATA['pge'];

  return (
    <PublicLayout>
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            {/* Breadcrumbs */}
            <nav className='flex items-center gap-2 text-sm text-muted-foreground mb-8'>
              <Link href='/' className='hover:text-foreground'>
                Home
              </Link>
              <span>/</span>
              <Link href='/#qualify' className='hover:text-foreground'>
                Solar Savings
              </Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Bay Area</span>
            </nav>

            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight'>
                Solar Energy in the Bay Area
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
                Bay Area homeowners served by PG&E pay an average of {(pgeUtility.ratePerKwh * 100).toFixed(1)}¢ per kWh, among the highest in the nation. With peak time-of-use rates reaching {pgeUtility.peakTouRate}, a typical Bay Area household spends $3,500+ annually on electricity — but solar combined with a fixed-rate agreement can reduce that by 30-50%.
              </p>
            </div>

            {/* Info Section */}
            <div className='grid md:grid-cols-3 gap-6 mb-12'>
              <div className='bg-card rounded-xl border border-border p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  <MapPin className='h-5 w-5 text-primary' />
                  <h3 className='font-semibold text-foreground'>Service Area</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Serving Bay Area homeowners on PG&E: San Jose, San Francisco, Oakland, Fremont, and surrounding communities.
                </p>
              </div>
              <div className='bg-card rounded-xl border border-border p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  <Home className='h-5 w-5 text-primary' />
                  <h3 className='font-semibold text-foreground'>Homeowners Only</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Program available for owner-occupied homes. Renters should contact their landlord.
                </p>
              </div>
              <div className='bg-card rounded-xl border border-border p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  <ArrowRight className='h-5 w-5 text-primary' />
                  <h3 className='font-semibold text-foreground'>Next Step</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Enter your address and current bill, then schedule your free 15-minute savings assessment.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Why Bay Area Homeowners Are Switching to Solar
              </h2>
              <ul className='space-y-3 text-muted-foreground leading-relaxed'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>PG&E rates are among the highest in America:</strong> The Bay Area pays
                    significantly more per kWh than the national average, with continued increases
                    locked in through 2028.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Growing fixed charges:</strong> PG&E added a $24/month fixed charge
                    nationwide. Locking in a fixed solar payment shields you from future rate volatility.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Excellent solar production:</strong> Bay Area cities enjoy 5.2-5.8 peak
                    sun hours daily on average, with clear weather patterns ideal for year-round
                    solar generation.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>No money down PPA:</strong> Qualify for a Power Purchase Agreement where
                    you pay a fixed monthly rate for solar electricity. Most Bay Area homes save
                    $100-200/month immediately.
                  </span>
                </li>
              </ul>
            </div>

            {/* Cities Grid */}
            <div className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                Solar in Bay Area Cities
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {bayAreaCities.map((city) => {
                  const utility = UTILITY_DATA[city.utilityCode];
                  return (
                    <Link
                      key={city.slug}
                      href={`/solar-savings/${city.slug}`}
                      className='group bg-card rounded-xl border border-border p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300'
                    >
                      <div className='flex items-start justify-between gap-3'>
                        <div className='flex-1'>
                          <h3 className='text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2'>
                            {city.name}
                          </h3>
                          <div className='space-y-1 text-sm text-muted-foreground'>
                            <p>
                              <span className='font-medium text-foreground'>
                                ${city.avgMonthlyBill}/mo
                              </span>{' '}
                              avg bill
                            </p>
                            <p>{utility.shortName} service area</p>
                          </div>
                        </div>
                        <div className='text-primary/0 group-hover:text-primary transition-colors'>
                          <ArrowRight className='h-5 w-5' />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className='bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight'>
                Ready to Cut Your Bay Area Electric Bill?
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                See if you qualify for a fixed-rate solar program. Takes 60 seconds, completely free.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* JSON-LD Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildRegionalCollectionSchema()),
        }}
      />

      <Footer />
    </PublicLayout>
  );
}
