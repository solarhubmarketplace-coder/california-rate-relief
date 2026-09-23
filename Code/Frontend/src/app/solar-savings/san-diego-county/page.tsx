import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight } from 'lucide-react';
import { CITIES, UTILITY_DATA, utilityRateText } from '@/data/cities-data';
import { savingsCityHref } from '@/lib/canonical-redirects';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RegionalCostCities } from '@/components/shared/RegionalCostCities';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

// Region-specific sources for the prose below, fetched 2026-09-23; see the
// Sources line on the page.
const CHECKED = 'September 23, 2026';
const SDCP_URL = 'https://sdcommunitypower.org/our-community/';
const CEA_URL = 'https://thecleanenergyalliance.org/';
const SDGE_TOU_URL = 'https://www.sdge.com/whenmatters';
const SDGE_ABOUT_URL = 'https://www.sdge.com/more-information/our-company/about-us';

export const metadata: Metadata = {
  title: 'San Diego County Solar Guide: City, Bill and Project Paths',
  description:
    'San Diego County solar: the SDG&E average rate, the 4-9 p.m. peak, and whether San Diego Community Power or Clean Energy Alliance is on your bill.',
  alternates: {
    canonical: '/solar-savings/san-diego-county',
  },
  openGraph: {
    title: 'San Diego County Solar Guide: City, Bill and Project Paths',
    description:
      'SDG&E delivers power to every city in this guide; a community choice aggregator supplies it in most. What that means for a quote.',
    type: 'website',
  },
};

// San Diego County cities
const sanDiegoCities = CITIES.filter(
  (city) => city.county === 'San Diego County'
).sort((a, b) => a.name.localeCompare(b.name));

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'San Diego County Solar Guide',
    description:
      'Editorial navigation for solar-planning resources in San Diego County.',
    url: 'https://ratereliefca.com/solar-savings/san-diego-county',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: sanDiegoCities.map((city, position) => ({
        '@type': 'ListItem',
        position: position + 1,
        name: `${city.name} solar guide`,
        url: `https://ratereliefca.com${savingsCityHref(city.slug)}`,
      })),
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
              <Link href='#solar-inquiry' className='hover:text-foreground'>
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
                SDG&amp;E delivers electricity to every city in this guide, and its residential average is the highest of California&apos;s three large investor-owned utilities. {utilityRateText(sdgeUtility).sentence} The same report puts PG&amp;E at {utilityRateText(UTILITY_DATA['pge']).cents} and SCE at {utilityRateText(UTILITY_DATA['sce']).cents}. In most of these cities a community choice aggregator now supplies the power by default, so the bill has two parts.
              </p>
            </div>

            {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="San Diego County solar planning and quote comparison" className='mb-12' />

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                San Diego Community Power or Clean Energy Alliance?
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                <strong>San Diego Community Power</strong> serves the cities of San Diego, Chula Vista, Encinitas, Imperial Beach, La Mesa and National City and the unincorporated areas of San Diego County. In this guide that means <Link href={savingsCityHref('san-diego')} className='text-primary underline'>San Diego</Link>, <Link href={savingsCityHref('chula-vista')} className='text-primary underline'>Chula Vista</Link>, <Link href={savingsCityHref('encinitas')} className='text-primary underline'>Encinitas</Link> and unincorporated <Link href={savingsCityHref('fallbrook')} className='text-primary underline'>Fallbrook</Link>.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                <strong>Clean Energy Alliance</strong> is the default power provider for Carlsbad, Del Mar, Escondido, Oceanside, San Marcos, Solana Beach and Vista, which covers <Link href={savingsCityHref('carlsbad')} className='text-primary underline'>Carlsbad</Link>, <Link href={savingsCityHref('escondido')} className='text-primary underline'>Escondido</Link> and <Link href={savingsCityHref('oceanside')} className='text-primary underline'>Oceanside</Link>. In CEA&apos;s words, SDG&amp;E delivers energy, handles billing and serves customers.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Neither CCA&apos;s page names <Link href={savingsCityHref('el-cajon')} className='text-primary underline'>El Cajon</Link>. Check an El Cajon bill for a generation provider before comparing quotes.
              </p>
            </section>

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                The 4 to 9 p.m. peak
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                SDG&amp;E&apos;s time-of-use pricing puts the peak between 4 p.m. and 9 p.m. Solar output falls away through those hours, so a proposal should show how much of your evening use it covers and what a battery would add. The <Link href='/blog/sdge-time-of-use-rates-2026' className='text-primary underline'>SDG&amp;E time-of-use guide</Link> lists the current plans, and the <Link href='/blog/why-is-my-sdge-bill-so-high' className='text-primary underline'>SDG&amp;E bill guide</Link> walks through the charges.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                SDG&amp;E also serves southern Orange County, San Clemente included; the <Link href='/solar-savings/orange-county' className='text-primary underline'>Orange County guide</Link> covers that side of the county line.
              </p>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Sources, each checked {CHECKED}: <a href={SDCP_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>San Diego Community Power, Our Community</a>; <a href={CEA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Clean Energy Alliance</a>; <a href={SDGE_TOU_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>SDG&amp;E, When Matters</a>; <a href={SDGE_ABOUT_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>SDG&amp;E, About Us</a>.
              </p>
            </section>

            {/* Cities Grid */}
            <div className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                San Diego County city guides
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {sanDiegoCities.map((city) => {
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
                          <p className='text-sm text-muted-foreground'>
                            Open the current city guide
                          </p>
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
            <RegionalCostCities region='San Diego County' counties={['San Diego County']} />

            <p className='mb-12 text-muted-foreground leading-relaxed'>
              Storage questions start on the <Link href='/battery' className='text-primary underline'>battery hub</Link>, and the <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary underline'>PPA, loan, lease and cash guide</Link> compares ways to pay.
            </p>

            {/* CTA Section */}
            <div className='bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight'>
                Describe your San Diego County project
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Include the generation provider on your SDG&amp;E bill, SDCP, CEA or SDG&amp;E itself, when you send the form below. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
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
              <SolarInquiry topic="San Diego County solar planning and quote comparison" />
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
        Article, alongside the CollectionPage node above, as on the Bay Area,
        Orange County and Central Valley hubs: the regional prose above the
        city index is original and sourced (2026-09-23). datePublished is
        omitted because no first-publish date is recorded for this page.
      */}
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline='Solar Energy in San Diego County'
        url='https://ratereliefca.com/solar-savings/san-diego-county'
        dateModified='2026-09-23'
      />

      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
