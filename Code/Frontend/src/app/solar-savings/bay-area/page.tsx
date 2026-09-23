import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight } from 'lucide-react';
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

// Region-specific sources for the prose below. Each CCA's own statement of
// where it serves, fetched 2026-09-23; see the Sources line on the page.
const CHECKED = 'September 23, 2026';
const AVA_URL = 'https://avaenergy.org/community/who-we-serve/';
const MCE_URL = 'https://www.mcecleanenergy.org/service-area/';
const CLEANPOWERSF_URL = 'https://cleanpowersf.org/understanding-my-bill';
const SJCE_URL = 'https://www.sanjoseca.gov/your-government/departments-offices/energy';
const SVCE_URL = 'https://www.svcleanenergy.org/communities/';
const WESTLIGHT_URL = 'https://www.westlightenergy.org/';
const SCP_URL = 'https://sonomacleanpower.org/who-we-are';
const THREECE_URL = 'https://3cenergy.org/wp-content/uploads/2023/05/Implementation-Plan-Addendum-No.-5.pdf';

export const metadata: Metadata = {
  title: "Bay Area Solar Savings: San Jose, San Francisco, Oakland",
  description: "Bay Area solar: which community choice aggregator shares your PG&E bill in San Jose, San Francisco, Oakland and nearby cities, and how to compare quotes.",
  alternates: {
    canonical: '/solar-savings/bay-area',
  },
  openGraph: {
    title: 'Bay Area Solar Companies: San Jose, San Francisco, Oakland',
    description:
      'Which community choice aggregator shares your PG&E bill in each Bay Area city, and what that changes in a solar quote.',
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
                Every city in this guide is on PG&amp;E&apos;s grid, and in almost every one a community choice aggregator (CCA) supplies the electricity by default while PG&amp;E delivers it and sends the bill. {utilityRateText(pgeUtility).sentence} That is PG&amp;E&apos;s bundled figure. If a CCA supplies your power, part of your bill is priced by the CCA instead.
              </p>
            </div>

            {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="Bay Area solar savings and quote comparison" utility="pge" className='mb-12' />

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Which community choice aggregator is on a Bay Area bill
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Find your city, then look for the same name on the generation lines of your PG&amp;E bill. Each CCA&apos;s own site names the places it serves:
              </p>
              <ul className='space-y-3 text-muted-foreground leading-relaxed mb-4'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Ava Community Energy</strong> is the default provider in most of Alameda County, including <Link href={savingsCityHref('oakland')} className='text-primary underline'>Oakland</Link>, <Link href={savingsCityHref('fremont')} className='text-primary underline'>Fremont</Link>, <Link href={savingsCityHref('hayward')} className='text-primary underline'>Hayward</Link>, <Link href={savingsCityHref('livermore')} className='text-primary underline'>Livermore</Link> and <Link href={savingsCityHref('pleasanton')} className='text-primary underline'>Pleasanton</Link>.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>MCE</strong> serves 38 communities in Contra Costa, Marin, Napa and Solano counties, among them <Link href={savingsCityHref('richmond')} className='text-primary underline'>Richmond</Link> and <Link href={savingsCityHref('walnut-creek')} className='text-primary underline'>Walnut Creek</Link>.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>CleanPowerSF</strong> serves <Link href={savingsCityHref('san-francisco')} className='text-primary underline'>San Francisco</Link>. In its own words, it buys clean electricity for you and PG&amp;E delivers that electricity to your home.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>San José Clean Energy</strong> is the City of San José&apos;s own not-for-profit supplier for <Link href={savingsCityHref('san-jose')} className='text-primary underline'>San Jose</Link>, run by its Energy Department.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Silicon Valley Clean Energy</strong> lists 13 Santa Clara County communities, including <Link href={savingsCityHref('sunnyvale')} className='text-primary underline'>Sunnyvale</Link> and <Link href={savingsCityHref('mountain-view')} className='text-primary underline'>Mountain View</Link>.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>WestLight Energy</strong>, the new name of Peninsula Clean Energy, serves communities in San Mateo County and Los Banos. Its site names no member cities, so check the bill in <Link href={savingsCityHref('san-mateo')} className='text-primary underline'>San Mateo</Link> or <Link href={savingsCityHref('half-moon-bay')} className='text-primary underline'>Half Moon Bay</Link>.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Sonoma Clean Power</strong> is the public power provider for Sonoma and Mendocino counties, and <Link href={savingsCityHref('santa-rosa')} className='text-primary underline'>Santa Rosa</Link> is one of its member cities.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Central Coast Community Energy (3CE)</strong> counts <Link href={savingsCityHref('santa-cruz')} className='text-primary underline'>Santa Cruz</Link>, <Link href={savingsCityHref('watsonville')} className='text-primary underline'>Watsonville</Link>, <Link href={savingsCityHref('monterey')} className='text-primary underline'>Monterey</Link>, <Link href={savingsCityHref('salinas')} className='text-primary underline'>Salinas</Link>, <Link href={savingsCityHref('seaside')} className='text-primary underline'>Seaside</Link>, <Link href={savingsCityHref('marina')} className='text-primary underline'>Marina</Link> and <Link href={savingsCityHref('pacific-grove')} className='text-primary underline'>Pacific Grove</Link> among its members, plus the County of Santa Cruz, which covers <Link href={savingsCityHref('aptos')} className='text-primary underline'>Aptos</Link>.
                  </span>
                </li>
              </ul>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Sources, each checked {CHECKED}: <a href={AVA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Ava, Who We Serve</a>; <a href={MCE_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>MCE, Service Area</a>; <a href={CLEANPOWERSF_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>CleanPowerSF, Understanding My Bill</a>; <a href={SJCE_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>City of San José Energy Department</a>; <a href={SVCE_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>SVCE, Communities</a>; <a href={WESTLIGHT_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>WestLight Energy</a>; <a href={SCP_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Sonoma Clean Power, Who We Are</a>; <a href={THREECE_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>3CE Implementation Plan Addendum No. 5 (May 15, 2023)</a>.
              </p>
            </section>

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                What a CCA changes in a solar quote
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Sonoma Clean Power puts the split plainly: PG&amp;E charges you for distribution, the poles and wires, and on the same bill the CCA charges you for generation. A proposal that prices every kWh at PG&amp;E&apos;s bundled rate is modeling a bill you may not have.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Ask each bidder which generation provider the estimate assumes, which rate plan it uses for the PG&amp;E delivery portion, and how exports are credited on each part. MCE and the other CCAs let customers opt back to PG&amp;E generation, so use the provider your current bill actually shows.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                For the delivery side, the <Link href='/blog/why-is-my-pge-bill-so-high' className='text-primary underline'>PG&amp;E bill guide</Link> and the <Link href='/blog/pge-time-of-use-rates-2026' className='text-primary underline'>PG&amp;E time-of-use guide</Link> walk through the charges. Coastal fog and inland heat make a neighbor&apos;s production a poor stand-in for yours, so get an estimate for your own roof.
              </p>
            </section>

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
                Tell us the CCA and rate plan printed on your PG&amp;E bill when you send the form below. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
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
        dateModified='2026-09-23'
      />

      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
