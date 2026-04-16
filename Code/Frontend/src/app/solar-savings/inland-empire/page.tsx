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
  title: 'Inland Empire Solar Companies | Riverside, San Bernardino | Rate Relief',
  description:
    'Solar for Inland Empire homes in Riverside, Corona, Murrieta, Temecula, and more. Cut your SCE bill by 30-50% with zero down solar programs.',
  alternates: {
    canonical: '/solar-savings/inland-empire',
  },
  openGraph: {
    title: 'Inland Empire Solar Energy & Bill Reduction',
    description:
      'Reduce your Inland Empire electric bill with solar. Save 30-50% on SCE and Kern County rates, zero money down.',
    type: 'website',
  },
};

// Inland Empire counties: Riverside, San Bernardino, Kern (partially), Ventura (partially)
const inlandEmpireCounties = [
  'Riverside County',
  'San Bernardino County',
  'Kern County',
];

const inlandEmpireCities = CITIES.filter((city) =>
  inlandEmpireCounties.includes(city.county)
).sort((a, b) => b.avgMonthlyBill - a.avgMonthlyBill);

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Inland Empire Solar Energy & Cost Reduction',
    description:
      'A guide to solar energy options and electric bill reduction strategies for Inland Empire homeowners in Riverside, San Bernardino, and Kern County.',
    url: 'https://ratereliefca.com/solar-savings/inland-empire',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'California Rate Relief Program — Inland Empire',
      description:
        'Helping Inland Empire homeowners qualify for affordable solar energy programs.',
      areaServed: [
        { '@type': 'City', name: 'Riverside' },
        { '@type': 'City', name: 'San Bernardino' },
        { '@type': 'City', name: 'Corona' },
        { '@type': 'City', name: 'Murrieta' },
        { '@type': 'City', name: 'Temecula' },
        { '@type': 'City', name: 'Bakersfield' },
      ],
    },
  };
}

export default function InlandEmpireSolarPage() {
  const sceUtility = UTILITY_DATA['sce'];

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
              <span className='text-foreground font-medium'>Inland Empire</span>
            </nav>

            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight'>
                Solar Energy in the Inland Empire
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
                The Inland Empire experiences some of California's hottest summers and highest solar potential. Residents of Riverside, San Bernardino, and surrounding areas pay {(sceUtility.ratePerKwh * 100).toFixed(1)}¢ per kWh on average to SCE, with peak rates climbing to {sceUtility.peakTouRate}. A typical Inland Empire household spends $3,200+ annually on cooling and electricity — solar with a fixed-rate agreement slashes that by 30-50%.
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
                  Covering Riverside, San Bernardino, and Kern County served by SCE and local utilities.
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
                  Verify your address and utility account, then schedule a free 15-minute savings consultation.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Why Inland Empire Homeowners Are Going Solar
              </h2>
              <ul className='space-y-3 text-muted-foreground leading-relaxed'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Extreme cooling demands:</strong> Summers in the Inland Empire push
                    air conditioning to the limit. SCE rates spike during peak summer hours
                    (2-8 PM), making solar production during peak times exceptionally valuable.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Outstanding solar resource:</strong> The Inland Empire receives 5.8+
                    peak sun hours daily on average — among California's best. Your roof is a
                    power plant.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>SCE's ongoing rate increases:</strong> Southern California Edison has
                    already approved rate increases through 2028, plus new $24/month fixed charges.
                    Lock in a lower rate now with solar.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Zero down Power Purchase Agreement:</strong> No upfront costs. Pay a
                    fixed monthly rate for clean solar electricity. Inland Empire homes typically
                    save $120-200/month from day one.
                  </span>
                </li>
              </ul>
            </div>

            {/* Cities Grid */}
            <div className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                Solar in Inland Empire Cities
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {inlandEmpireCities.map((city) => {
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
                Ready to Beat the Inland Empire Heat & High Bills?
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Get a custom solar savings estimate in 60 seconds. No fees, no obligation.
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
