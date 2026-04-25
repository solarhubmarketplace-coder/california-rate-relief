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
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title: 'San Diego County Solar Companies | San Diego, Chula Vista, Oceanside',
  description:
    'Solar energy for San Diego County homes. Reduce your SDG&E electric bill by 30-50% with zero down solar programs. San Diego, Chula Vista, Oceanside, Carlsbad.',
  alternates: {
    canonical: '/solar-savings/san-diego-county',
  },
  openGraph: {
    title: 'San Diego County Solar & Electric Bill Savings',
    description:
      'Cut your San Diego County SDG&E bill by 30-50% with solar. Zero money down, fixed monthly rates.',
    type: 'website',
  },
};

// San Diego County cities
const sanDiegoCities = CITIES.filter(
  (city) => city.county === 'San Diego County'
).sort((a, b) => b.avgMonthlyBill - a.avgMonthlyBill);

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'San Diego County Solar Energy & Cost Reduction',
    description:
      'A guide to solar energy options and electric bill reduction strategies for San Diego County homeowners served by SDG&E.',
    url: 'https://ratereliefca.com/solar-savings/san-diego-county',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'California Rate Relief Program — San Diego County',
      description:
        'Helping San Diego County homeowners qualify for affordable solar energy programs.',
      areaServed: [
        { '@type': 'City', name: 'San Diego' },
        { '@type': 'City', name: 'Chula Vista' },
        { '@type': 'City', name: 'Oceanside' },
        { '@type': 'City', name: 'Carlsbad' },
        { '@type': 'City', name: 'El Cajon' },
        { '@type': 'City', name: 'Encinitas' },
      ],
    },
  };
}

export default function SanDiegoCountySolarPage() {
  const sdgeUtility = UTILITY_DATA['sdge'];

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
              <span className='text-foreground font-medium'>San Diego County</span>
            </nav>

            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight'>
                Solar Energy in San Diego County
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
                San Diego County has perfect weather for solar year-round, but SDG&E rates are among California's highest at {(sdgeUtility.ratePerKwh * 100).toFixed(1)}¢ per kWh, with time-of-use peak rates reaching {sdgeUtility.peakTouRate}. A typical San Diego County household spends over $3,000 annually on electricity — but solar with a fixed-rate power purchase agreement can cut that by 30-50% immediately.
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
                  Covering all of San Diego County served by San Diego Gas & Electric (SDG&E).
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
                  Confirm your address and SDG&E account details, then book your free savings consultation.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Why San Diego County Homeowners Choose Solar
              </h2>
              <ul className='space-y-3 text-muted-foreground leading-relaxed'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Perfect solar weather:</strong> San Diego's mild climate and abundant
                    sunshine (5.4+ peak sun hours daily) make it one of California's best solar
                    markets. Nearly 300 days of sunshine every year.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>SDG&E rates are the highest in the state:</strong> San Diego homeowners
                    pay more per kWh than most Californians. Rate increases of 8-10% annually have
                    been approved through 2028.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>New fixed charge:</strong> SDG&E added a $23.45/month fixed charge to
                    all residential bills. Solar locks in your variable costs with a fixed payment.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Zero-down Power Purchase Agreement:</strong> No upfront investment. Pay
                    a fixed rate for all the solar electricity your system produces. San Diego homes
                    typically save $125-225/month from day one.
                  </span>
                </li>
              </ul>
            </div>

            {/* Cities Grid */}
            <div className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                Solar in San Diego County Cities
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {sanDiegoCities.map((city) => {
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
                Ready to Lower Your San Diego County Electric Bill?
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Get a personalized solar savings estimate in 60 seconds. Completely free, no obligation.
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
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
