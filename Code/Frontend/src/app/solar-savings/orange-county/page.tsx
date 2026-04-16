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
  title: 'Solar Companies in Orange County, California | Rate Relief',
  description:
    'Find affordable solar options for your Orange County home. Compare rates across Irvine, Anaheim, Santa Ana, Huntington Beach, and more. Save on your SCE electric bill.',
  alternates: {
    canonical: '/solar-savings/orange-county',
  },
  openGraph: {
    title: 'Orange County Solar & Savings Guide',
    description:
      'Explore solar energy options for Orange County homeowners. Reduce your SCE electric bill by 30-50% with zero money down.',
    type: 'website',
  },
};

// Filter cities in Orange County
const orangeCountyCities = CITIES.filter(
  (city) => city.county === 'Orange County'
).sort((a, b) => b.avgMonthlyBill - a.avgMonthlyBill);

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Orange County Solar Energy & Cost Reduction',
    description:
      'A guide to solar energy options and electric bill reduction strategies for Orange County, California homeowners.',
    url: 'https://ratereliefca.com/solar-savings/orange-county',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'California Rate Relief Program — Orange County',
      description:
        'Helping Orange County homeowners qualify for affordable solar energy programs.',
      areaServed: [
        { '@type': 'City', name: 'Irvine' },
        { '@type': 'City', name: 'Huntington Beach' },
        { '@type': 'City', name: 'Anaheim' },
        { '@type': 'City', name: 'Santa Ana' },
        { '@type': 'City', name: 'Westminister' },
        { '@type': 'City', name: 'San Clemente' },
      ],
    },
  };
}

export default function OrangeCountySolarPage() {
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
              <span className='text-foreground font-medium'>Orange County</span>
            </nav>

            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight'>
                Solar Energy in Orange County
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
                Orange County homeowners pay some of the highest electricity rates in California. Southern California Edison rates average {(sceUtility.ratePerKwh * 100).toFixed(1)}¢ per kWh, with time-of-use peak rates reaching {sceUtility.peakTouRate}. A typical Orange County household spends $3,000+ annually on electricity — but solar can cut that by 30-50% with zero money down.
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
                  Covering all cities served by Southern California Edison in Orange County.
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
                  Confirm your address and utility info, then book a 15-min savings assessment.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Why Orange County Residents Choose Solar Now
              </h2>
              <ul className='space-y-3 text-muted-foreground leading-relaxed'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>SCE rates are climbing:</strong> Orange County Edison customers have seen
                    cumulative rate increases of 15-20% over the past three years, with more
                    approved through 2028.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>New fixed charges:</strong> SCE added a $24.15/month fixed charge to all
                    residential bills. Solar doesn't reduce this, but it protects you from future
                    usage-based rate hikes.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Excellent sun exposure:</strong> Orange County averages 5.5+ peak sun
                    hours daily, making solar highly productive year-round.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>No money down:</strong> Qualify for a Power Purchase Agreement (PPA) and
                    pay a fixed monthly rate instead of SCE's unpredictable bills. Many households
                    save 30-50%.
                  </span>
                </li>
              </ul>
            </div>

            {/* Cities Grid */}
            <div className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                Solar in Orange County Cities
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {orangeCountyCities.map((city) => {
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
                Ready to Lower Your Orange County Electric Bill?
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Find out if you qualify for a fixed-rate solar program. Takes 60 seconds, no obligation.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check Your Eligibility
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
