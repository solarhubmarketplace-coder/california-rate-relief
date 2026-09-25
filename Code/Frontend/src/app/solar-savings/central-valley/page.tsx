import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { RATE_TRACKER_CRUMB } from '@/lib/city-pages';
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
import { Byline } from '@/components/trust/Byline';

// Region-specific sources for the prose below, fetched 2026-09-23; see the
// Sources line on the page. Which utility serves which city comes from
// src/data/cities-data.ts (CEC service-territory check, 2026-09-22).
const CHECKED = 'September 23, 2026';
const SMUD_RATES_URL = 'https://www.smud.org/Rate-Information/Residential-rates';
const MID_RATES_URL = 'https://www.mid.org/power/rates-service-rules/electric-rates/';
const TID_URL = 'https://www.tid.org/about-tid/';
const MERCED_ID_URL = 'https://www.mercedid.org/';
const LODI_URL = 'https://www.lodi.gov/352/Electric-Utility';
const AVA_URL = 'https://avaenergy.org/community/who-we-serve/';
// 2026-09-23 (Tier 2, citycos): "central california solar companies" is
// answered here rather than on a new region page; permit figures are each
// city's own SB 379 report to the Energy Commission.
const SB379_DATA_URL =
  'https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx';

export const metadata: Metadata = {
  title: 'Central Valley Solar Companies: Fresno & Sacramento',
  description:
    'Solar for Central Valley homes: which utility bills Fresno, Sacramento, Stockton, Modesto and Lodi, how SMUD prices power, and how to compare quotes.',
  alternates: {
    canonical: '/solar-savings/central-valley',
  },
  openGraph: {
    title: 'Central Valley Solar Companies: Fresno & Sacramento',
    description:
      'Central Valley solar: PG&E, SCE, SMUD and the district and city utilities, and what each changes in a quote.',
    type: 'website',
  },
};

// Central Valley counties: Kern, Tulare, Kings, Inyo, Mono, Fresno, Sacramento, San Joaquin, Stanislaus, Merced, Madera, etc.
const centralValleyCounties = [
  'Kern County',
  'Tulare County',
  'Kings County',
  'Fresno County',
  'Sacramento County',
  'San Joaquin County',
  'Stanislaus County',
  'Merced County',
  'Butte County',
  'Monterey County',
  'Santa Cruz County',
  'San Luis Obispo County',
];

const centralValleyCities = CITIES.filter((city) =>
  centralValleyCounties.includes(city.county)
).sort((a, b) => a.name.localeCompare(b.name));

function buildRegionalCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Central Valley Solar Energy & Cost Reduction',
    description:
      'A guide to solar energy options and electric bill reduction strategies for Central Valley homeowners in Fresno, Sacramento, Stockton, and surrounding regions.',
    url: 'https://ratereliefca.com/solar-savings/central-valley',
    // mainEntity was a LocalBusiness for this region; CRR has no premises
    // anywhere, so it was removed (design pass 2, 2026-09-22).
  };
}

export default function CentralValleySolarPage() {
  const pgeUtility = UTILITY_DATA['pge'];
  const sceUtility = UTILITY_DATA['sce'];

  return (
    <PublicLayout breadcrumbLabel='Central Valley' breadcrumbParents={[RATE_TRACKER_CRUMB]}>
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            {/* Breadcrumbs: Home > California utility rate tracker > Central Valley, the same
                list PublicLayout emits as BreadcrumbList (Block 5 §5.6). */}
            <BreadcrumbTrail
              crumbs={[RATE_TRACKER_CRUMB]}
              current='Central Valley'
              className='flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8'
            />

            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight'>
                Solar Energy in the Central Valley
              </h1>
              <Byline updated="2026-09-23" />
              <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
                No single utility serves the cities in this guide. PG&amp;E, SCE and SMUD cover most of them, and city or irrigation-district utilities serve Lodi and parts of Modesto and Merced. The rate a quote should start from is the one on your own bill.
              </p>
            </div>

            {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="Central Valley solar savings and quote comparison" utility="pge" className='mb-12' />

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Who bills which Central Valley city
              </h2>
              <ul className='space-y-3 text-muted-foreground leading-relaxed mb-4'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>PG&amp;E</strong> bills <Link href={savingsCityHref('fresno')} className='text-primary underline'>Fresno</Link>, <Link href={savingsCityHref('bakersfield')} className='text-primary underline'>Bakersfield</Link>, <Link href={savingsCityHref('stockton')} className='text-primary underline'>Stockton</Link>, <Link href={savingsCityHref('manteca')} className='text-primary underline'>Manteca</Link> and <Link href={savingsCityHref('chico')} className='text-primary underline'>Chico</Link>. {utilityRateText(pgeUtility).sentence}
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>SCE</strong> serves <Link href={savingsCityHref('visalia')} className='text-primary underline'>Visalia</Link>. {utilityRateText(sceUtility).sentence}
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>SMUD</strong> serves <Link href={savingsCityHref('sacramento')} className='text-primary underline'>Sacramento</Link> and <Link href={savingsCityHref('rancho-cordova')} className='text-primary underline'>Rancho Cordova</Link>.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Two utilities, one city:</strong> <Link href={savingsCityHref('modesto')} className='text-primary underline'>Modesto</Link> addresses are served by either the Modesto Irrigation District or the Turlock Irrigation District, and <Link href={savingsCityHref('merced')} className='text-primary underline'>Merced</Link> addresses by either the Merced Irrigation District or PG&amp;E.
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold min-w-fit'>•</span>
                  <span>
                    <strong>Lodi Electric Utility</strong> serves <Link href={savingsCityHref('lodi')} className='text-primary underline'>Lodi</Link>.
                  </span>
                </li>
              </ul>
            </section>

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                How SMUD prices power
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                SMUD&apos;s default residential plan is its Time-of-Day (5&ndash;8 p.m.) Rate, with peak pricing on weekdays from 5 p.m. to 8 p.m. An optional Fixed Rate charges one price at every hour and, according to SMUD, is on average 4% higher than the Time-of-Day rate. Standard residential accounts also pay a System Infrastructure Fixed Charge of $27.00 a month (SMUD, Residential Rates, checked September 23, 2026).
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                SMUD posts a separate Solar and Storage Rate as well. Ask which SMUD plan a proposal assumes before and after the system goes in, because the peak window decides how much of your evening use the panels can offset.
              </p>
            </section>

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                District and city utilities set their own terms
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                The Modesto Irrigation District posts its own residential schedules and its own solar schedules, listed as NEM1, NEM2 and a feed-in tariff. The Turlock Irrigation District says it serves more than 240,000 people across 662 square miles. Merced Irrigation District calls itself a local public power utility serving customers in Livingston, Atwater, Winton and Merced.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Lodi Electric Utility was founded in 1910 and is community-owned, with about 27,400 electric accounts in a 14-square-mile territory. For any of these utilities, get the current schedule from the utility itself; a PG&amp;E-based estimate does not describe the bill.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                One more split to know: Ava Community Energy, which serves most of Alameda County, is also the default provider in Stockton, Tracy, Lathrop and unincorporated San Joaquin County. A <Link href={savingsCityHref('stockton')} className='text-primary underline'>Stockton</Link> bill can show Ava generation charges next to PG&amp;E delivery. Manteca is not on Ava&apos;s list.
              </p>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Sources, each checked {CHECKED}: <a href={SMUD_RATES_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>SMUD, Residential Rates</a>; <a href={MID_RATES_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>MID, Electric Rates</a>; <a href={TID_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>TID, About TID</a>; <a href={MERCED_ID_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Merced Irrigation District</a>; <a href={LODI_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Lodi Electric Utility</a>; <a href={AVA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>Ava, Who We Serve</a>.
              </p>
            </section>

            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                Comparing solar companies across the Central Valley
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                No list ranks Central California solar companies in a way that fits one roof, and this site does not either. What differs from city to city is the permit office and how it works, which each city now reports to the California Energy Commission. For 2024, Fresno reported 3,771 residential solar permits, 40% of them issued online; Stockton 4,362, 52% online; Merced 2,188, 32% online; and Bakersfield 1,160, none online. In 2023, Clovis issued 95% of its 935 permits online and Modesto 53% of 635. Batteries are common: 47% of Stockton&apos;s 2024 permits and 79% of Bakersfield&apos;s included storage.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                Ask each bidder which office will permit your address and how long its recent permits there took, then compare the same system on your own bill. The city pages cover each permit office and utility: <Link href='/solar-companies/fresno' className='text-primary underline'>Fresno</Link>, <Link href='/solar-companies/stockton' className='text-primary underline'>Stockton</Link>, <Link href='/solar-companies/modesto' className='text-primary underline'>Modesto</Link>, <Link href='/solar-companies/merced' className='text-primary underline'>Merced</Link>, <Link href='/solar-companies/visalia' className='text-primary underline'>Visalia</Link>, <Link href='/solar-companies/sacramento' className='text-primary underline'>Sacramento</Link> and <Link href='/solar-companies/bakersfield' className='text-primary underline'>Bakersfield</Link>, and <Link href='/solar-companies/kern-county' className='text-primary underline'>Kern County</Link>, where PG&amp;E and SCE split the county.
              </p>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Source, checked {CHECKED}: <a href={SB379_DATA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>California Energy Commission, SB 379 solar permit annual reports (data file dated May 2026)</a>.
              </p>
            </section>

            {/* Cities Grid */}
            <div className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                Solar in Central Valley Cities
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {centralValleyCities.map((city) => {
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
            <RegionalCostCities region='Central Valley' counties={centralValleyCounties} />

            {/* CTA Section */}
            <div className='bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight'>
                Want a Provider to Review Your Central Valley Project?
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Name the utility on your bill, and any CCA, when you send the form below. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
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
              <SolarInquiry utility="pge" topic="Central Valley solar savings and quote comparison" />
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
        headline='Solar Energy in the Central Valley'
        url='https://ratereliefca.com/solar-savings/central-valley'
        dateModified='2026-09-23'
      />

      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
