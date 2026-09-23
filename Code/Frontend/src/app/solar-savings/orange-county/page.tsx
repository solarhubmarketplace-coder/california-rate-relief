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

// Region-specific sources for the prose below, fetched 2026-09-23; see the
// Sources line on the page.
const CHECKED = 'September 23, 2026';
const ANAHEIM_RATES_URL = 'https://www.anaheim.net/6335/Residential-Rates';
const SDGE_ABOUT_URL = 'https://www.sdge.com/more-information/our-company/about-us';
const OCPA_URL = 'https://www.ocpower.org/';
const SCE_CCA_URL = 'https://www.sce.com/partners/partnerships/community-choice-aggregation';

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
      'Orange County solar: SCE, Anaheim Public Utilities or SDG&E, where Orange County Power Authority fits, and how to compare quotes.',
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
              <span className='text-foreground font-medium'>Orange County</span>
            </nav>

            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight'>
                Solar Energy in Orange County
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
                Three utilities serve the Orange County cities in this guide. Southern California Edison serves most of them, Anaheim runs its own city utility, and San Clemente is in SDG&amp;E territory. They price electricity very differently, so start with the name on your bill.
              </p>
            </div>

            {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="Orange County solar savings and quote comparison" utility="sce" className='mb-12' />

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Three utilities, three different bills
              </h2>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>SCE: Irvine, Santa Ana, Huntington Beach, Westminster</h3>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                {utilityRateText(sceUtility).sentence} That covers <Link href={savingsCityHref('irvine')} className='text-primary underline'>Irvine</Link>, <Link href={savingsCityHref('santa-ana')} className='text-primary underline'>Santa Ana</Link>, <Link href={savingsCityHref('huntington-beach')} className='text-primary underline'>Huntington Beach</Link> and <Link href={savingsCityHref('westminster')} className='text-primary underline'>Westminster</Link>. The <Link href='/blog/why-is-my-sce-bill-so-high' className='text-primary underline'>SCE bill guide</Link> and the <Link href='/blog/sce-time-of-use-rates-2026' className='text-primary underline'>SCE time-of-use guide</Link> explain the charges an estimate should start from.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>Anaheim Public Utilities: Anaheim</h3>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Anaheim&apos;s posted domestic rate is an $8.00 monthly charge, 14.00¢ per kWh for the first 10 kWh a day, and 21.49¢ per kWh after that, with a time-of-use option alongside it (Anaheim Public Utilities, Residential Rates, checked September 23, 2026). The page shows no effective date, so confirm the current schedule with the utility. An estimate built on SCE&apos;s average does not describe a bill in <Link href={savingsCityHref('anaheim')} className='text-primary underline'>Anaheim</Link>.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>SDG&amp;E: San Clemente</h3>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                SDG&amp;E says it has powered San Diego and southern Orange counties for over 140 years, and <Link href={savingsCityHref('san-clemente')} className='text-primary underline'>San Clemente</Link> is inside that territory. {utilityRateText(sdgeUtility).sentence} The <Link href='/solar-savings/san-diego-county' className='text-primary underline'>San Diego County guide</Link> covers SDG&amp;E and the community choice aggregators on its side of the line.
              </p>
            </section>

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Where Orange County Power Authority fits
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Orange County Power Authority (OCPA) is a community choice aggregator. Its site names Buena Park, Fullerton, <Link href={savingsCityHref('irvine')} className='text-primary underline'>Irvine</Link> and Fountain Valley as communities it serves. SCE lists OCPA among the CCAs in its territory and says it keeps providing CCA customers with meter reading, billing, maintenance and outage response.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                So an Irvine bill can carry OCPA generation charges next to SCE delivery charges. Ask each bidder which provider the estimate uses for generation, and have both portions modeled from your own bill.
              </p>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Sources, each checked {CHECKED}: <a href={ANAHEIM_RATES_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Anaheim Public Utilities, Residential Rates</a>; <a href={SDGE_ABOUT_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>SDG&amp;E, About Us</a>; <a href={OCPA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Orange County Power Authority</a>; <a href={SCE_CCA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>SCE, Community Choice Aggregation</a>.
              </p>
            </section>

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
                Say which utility bills your address, and whether OCPA appears on the bill, when you send the form below. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
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
        dateModified='2026-09-23'
      />

      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
