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
  title: 'Solar Companies in Orange County, California | Rate Relief',
  description:
    'Compare Orange County solar options across Irvine, Anaheim, Santa Ana, Huntington Beach and more, and see how they affect your SCE electric bill.',
  alternates: {
    canonical: '/solar-savings/orange-county',
  },
  openGraph: {
    title: 'Orange County Solar & Savings Guide',
    description:
      'Orange County solar: the SCE rate, the fixed charge, coastal and inland production and how to compare quotes.',
    type: 'website',
  },
};

// Filter cities in Orange County
const orangeCountyCities = CITIES.filter(
  (city) => city.county === 'Orange County'
).sort((a, b) => a.name.localeCompare(b.name));

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Orange County Solar Energy & Cost Reduction',
    description:
      'A guide to solar energy options and electric bill reduction strategies for Orange County, California homeowners.',
    url: 'https://ratereliefca.com/solar-savings/orange-county',
    // mainEntity was a LocalBusiness for this region; CRR has no premises
    // anywhere, so it was removed (design pass 2, 2026-09-22).
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
              <Link href='#solar-inquiry' className='hover:text-foreground'>
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
                Most Orange County cities in this guide are served by Southern California Edison; Anaheim runs its own utility and San Clemente sits in SDG&amp;E territory. {utilityRateText(sceUtility).sentence} What solar is worth for your home depends on your usage, your roof and the contract you sign.
              </p>
            </div>

            {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="Orange County solar savings and quote comparison" utility="sce" className='mb-12' />

            {/* Info Section */}
            <div className='grid md:grid-cols-3 gap-6 mb-12'>
              <div className='bg-card rounded-xl border border-border p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  <MapPin className='h-5 w-5 text-primary' />
                  <h3 className='font-semibold text-foreground'>Editorial guide coverage</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Editorial coverage for Orange County cities. Confirm the address and utility account before relying on any rate or program information.
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
                What to Check Before Going Solar in Orange County
              </h2>
              <ul className='space-y-3 text-muted-foreground leading-relaxed'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>SCE&apos;s average rate:</strong> {utilityRateText(sceUtility).sentence}
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>The fixed charge:</strong> SCE residential customers not on CARE or FERA pay a $24.15 monthly fixed charge under CPUC Decision 24-05-028. Solar does not reduce it.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Coastal and inland sun differ:</strong> the coastal marine layer cuts early-summer output compared with inland cities, so ask each bidder for a production estimate for your roof.
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
                Solar in Orange County Cities
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {orangeCountyCities.map((city) => {
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
            <RegionalCostCities region='Orange County' counties={['Orange County']} />

            {/* CTA Section */}
            <div className='bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight'>
                Want a Provider to Review Your Orange County Project?
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
              <SolarInquiry utility="sce" topic="Orange County solar savings and quote comparison" />
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
        headline='Solar Energy in Orange County'
        url='https://ratereliefca.com/solar-savings/orange-county'
        dateModified='2026-09-10'
      />

      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
