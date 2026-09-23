import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, MapPin, Home } from 'lucide-react';
import {
  CITIES,
  UTILITY_DATA,
  utilityRateText,
  type CityData,
} from '@/data/cities-data';
import { savingsCityHref } from '@/lib/canonical-redirects';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RegionalCostCities } from '@/components/shared/RegionalCostCities';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title: "Bay Area Solar Savings: San Jose, San Francisco, Oakland",
  description: "Bay Area solar savings guide: navigate PG&E rates across San Jose, San Francisco, and Oakland, evaluate battery backup, and maximize bill reduction.",
  alternates: {
    canonical: '/solar-savings/bay-area',
  },
  openGraph: {
    title: 'Bay Area Solar Companies: San Jose, San Francisco, Oakland',
    description:
      'Explore solar for your Bay Area home: the PG&E rate, the fixed charge, production by microclimate and how to compare quotes.',
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
).sort((a, b) => a.name.localeCompare(b.name));

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Bay Area Solar Energy & Cost Reduction',
    description:
      'A guide to solar energy options and electric bill reduction strategies for Bay Area homeowners served by PG&E.',
    url: 'https://ratereliefca.com/solar-savings/bay-area',
    // mainEntity was a LocalBusiness for this region; CRR has no premises
    // anywhere, so it was removed (design pass 2, 2026-09-22).
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
              <Link href='#solar-inquiry' className='hover:text-foreground'>
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
                The cities in this guide are in PG&E territory, and several get their generation from a community choice aggregator. {utilityRateText(pgeUtility).sentence} What solar is worth for your home depends on your usage, your roof and the contract you sign, so start with your own bill.
              </p>
            </div>

            {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="Bay Area solar savings and quote comparison" utility="pge" className='mb-12' />

            {/* Info Section */}
            <div className='grid md:grid-cols-3 gap-6 mb-12'>
              <div className='bg-card rounded-xl border border-border p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  <MapPin className='h-5 w-5 text-primary' />
                  <h3 className='font-semibold text-foreground'>Editorial guide coverage</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Editorial coverage for Bay Area cities in PG&E territory. Confirm the address and utility account before relying on any rate or program information.
                </p>
              </div>
              <div className='bg-card rounded-xl border border-border p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  <Home className='h-5 w-5 text-primary' />
                  <h3 className='font-semibold text-foreground'>Homeowners</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Rooftop solar decisions assume you own the home. Renters can ask the landlord or look at community solar.
                </p>
              </div>
              <div className='bg-card rounded-xl border border-border p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  <ArrowRight className='h-5 w-5 text-primary' />
                  <h3 className='font-semibold text-foreground'>Next Step</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Compare written quotes on the same usage and contract terms, then use the inquiry below if you want a provider to review your project.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                What to Check Before Going Solar in the Bay Area
              </h2>
              <ul className='space-y-3 text-muted-foreground leading-relaxed'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>PG&E&apos;s average rate:</strong> {utilityRateText(pgeUtility).sentence}
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>The fixed charge:</strong> PG&amp;E residential customers not on CARE or FERA pay a $24.15 monthly fixed charge under CPUC Decision 24-05-028. Solar does not reduce it.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Production varies by microclimate:</strong> fog near the coast and the bay cuts summer output compared with inland valleys, so ask each bidder for a production estimate for your roof.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Leases and PPAs are contracts:</strong> a PPA sets a price for the power your system produces, often with an annual escalator. Add up every payment and the remaining utility charges before comparing it with your bill.
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
                      href={savingsCityHref(city.slug)}
                      className='group bg-card rounded-xl border border-border p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300'
                    >
                      <div className='flex items-start justify-between gap-3'>
                        <div className='flex-1'>
                          <h3 className='text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2'>
                            {city.name}
                          </h3>
                          <div className='space-y-1 text-sm text-muted-foreground'>
                            <p>{city.county}</p>
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

            {/* claude/audit-links-20260918 — the cost-layer cities in these
                counties that this hub's own grid does not reach. */}
            <RegionalCostCities region='Bay Area' counties={bayAreaCounties} />

            {/* CTA Section */}
            <div className='bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight'>
                Want a Provider to Review Your Bay Area Project?
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Send your project details through the form below. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
              </p>
              <Link
                href='#solar-inquiry'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Request a solar review
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry utility="pge" topic="Bay Area solar savings and quote comparison" />
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

      {/*
        Article, alongside the CollectionPage node above — not instead of it.
        The two describe different things and neither is redundant:
          - CollectionPage  the index of city pages this hub links to
          - Article         the regional guide prose above that index, which is
                            original editorial content and needs an author,
                            a reviewer and a last-reviewed date for E-E-A-T
        Only the Article node claims mainEntityOfPage, so there is no competing
        "this page is really an X" assertion.

        dateModified is the 2026-09-10 schema/QC review. datePublished is
        deliberately omitted: this page carries no recorded first-publish date
        and inventing one would put an unverifiable date into structured data.
      */}
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline='Solar Energy in the Bay Area'
        url='https://ratereliefca.com/solar-savings/bay-area'
        dateModified='2026-09-10'
      />

      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
