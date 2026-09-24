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
import { FaqBlock } from '@/components/trust/FaqBlock';

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
// 2026-09-23 (Tier 2, citycos): bill-and-rate sources for the rates section
// and FAQ below, each fetched that day.
const PAO_Q2_2026_URL =
  'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf';
const PGE_BSC_URL = 'https://www.pge.com/en/account/billing-and-assistance/base-services-charge.html';
const PGE_SBP_URL = 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html';
const SJCE_SOLAR_URL = 'https://sanjosecleanenergy.org/solar-billing-nem/';
const SB379_DATA_URL =
  'https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx';

const FAQS = [
  {
    question: 'What are PG&E electric rates in the Bay Area?',
    answer:
      "PG&E's residential average rate was 33.7 cents per kWh as of June 2026, unchanged since March 2026, according to the CPUC Public Advocates Office. That is up 8% over three years and 69% since January 2016. Since March 2026 most PG&E bills also carry a Base Services Charge of about $24 a month ($6 on CARE, $12 on FERA), with lower per-kWh prices in exchange. Where a community choice provider supplies your power, it sets the generation part of that price.",
  },
  {
    question: 'What is the average PG&E bill in the Bay Area?',
    answer:
      'No source publishes one average for the region: the Public Advocates Office estimates PG&E bills only for sample hot and cool climate zones, and usage varies widely between the coast and inland valleys. Use your own twelve months of bills. The office also reports that 1,356,481 PG&E customers, 24%, were behind on their energy bills in May 2026, owing $572 on average across electric and gas.',
  },
  {
    question: 'Can solar save money on electricity in the Bay Area?',
    answer:
      "It can, but the savings depend on how much of the output you use at home. On PG&E's Solar Billing Plan, export credits change by hour, day and season, and PG&E says customers save the most when they use what they produce on-site. The Base Services Charge is not reduced by solar. Community choice providers credit the generation half of the bill on their own terms; San José Clean Energy, for example, credits generation while PG&E credits delivery.",
  },
];

export const metadata: Metadata = {
  title: "Bay Area Solar Savings & PG&E Rates by City (2026)",
  description: "Bay Area electric rates and solar savings: PG&E's 33.7¢ average, the $24 Base Services Charge, and which CCA prices your solar credits in each city.",
  alternates: {
    canonical: '/solar-savings/bay-area',
  },
  openGraph: {
    title: 'Bay Area Solar Savings & PG&E Rates by City (2026)',
    description:
      "PG&E's average rate, the Base Services Charge, and which community choice provider shares your PG&E bill in each Bay Area city.",
    type: 'website',
  },
};

// Bay Area counties: Santa Clara, San Francisco, Alameda, Contra Costa, Santa Cruz, Sonoma, San Mateo, Monterey,
// and since 2026-09-24 Marin, Napa and Solano, so the grid and the cost list
// below reach Vallejo, Napa and Vacaville. REGIONAL_HUBS in lib/city-pages.ts
// mirrors this list.
const bayAreaCounties = [
  'Santa Clara County',
  'San Francisco County',
  'Alameda County',
  'Contra Costa County',
  'Santa Cruz County',
  'Sonoma County',
  'San Mateo County',
  'Monterey County',
  'Marin County',
  'Napa County',
  'Solano County',
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
    <PublicLayout breadcrumbLabel='Bay Area' breadcrumbParents={[RATE_TRACKER_CRUMB]}>
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            {/* Breadcrumbs: Home > California utility rate tracker > Bay Area, the same
                list PublicLayout emits as BreadcrumbList (Block 5 §5.6). */}
            <BreadcrumbTrail
              crumbs={[RATE_TRACKER_CRUMB]}
              current='Bay Area'
              className='flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8'
            />

            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight'>
                Solar Energy in the Bay Area
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
                Nearly every city in this guide is on PG&amp;E&apos;s grid (Palo Alto runs its own utility), and in almost every one a community choice aggregator (CCA) supplies the electricity by default while PG&amp;E delivers it and sends the bill. {utilityRateText(pgeUtility).sentence} That is PG&amp;E&apos;s bundled figure. If a CCA supplies your power, part of your bill is priced by the CCA instead.
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
                    <strong>WestLight Energy</strong>, the new name of Peninsula Clean Energy, serves communities in San Mateo County and Los Banos. Its site names no member cities, so check the bill in <Link href={savingsCityHref('san-mateo')} className='text-primary underline'>San Mateo</Link> or <Link href={savingsCityHref('half-moon-bay')} className='text-primary underline'>Half Moon Bay</Link>; the <Link href='/solar-companies/san-mateo-county' className='text-primary underline'>San Mateo County solar companies page</Link> lists each city&apos;s permit office.
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

            {/* 2026-09-23 (Tier 2, citycos): the bill-and-rate questions this
                page gets searched for ("pge electric rates bay area",
                "average pg&e bill bay area", "solar energy for saving
                electricity bay area"). Every figure is in the Sources line. */}
            <section className='bg-card rounded-2xl border border-border p-8 md:p-10 mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                What electricity costs on a Bay Area bill
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                The CPUC Public Advocates Office put PG&amp;E&apos;s residential average rate at 33.7 cents per kWh in June 2026, the same as in March. It has risen 8% over three years, 39% over five and 69% since January 2016, and the office reports that 1,356,481 PG&amp;E customers, about one in four, were behind on their energy bills in May 2026. Since March 2026 PG&amp;E has moved part of its costs into a Base Services Charge of about $24 a month, $6 for CARE households and $12 for FERA, and lowered its per-kWh prices; PG&amp;E says some customers&apos; total bills went down and others rose slightly.
              </p>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                The 33.7-cent figure is PG&amp;E&apos;s bundled average. In a city with a community choice provider, the generation part of each kWh is priced by that provider instead, so compare the generation line on your own bill with the provider&apos;s posted rates rather than with the average.
              </p>
              <h3 className='text-lg font-semibold text-foreground mt-6 mb-2'>How solar changes that bill</h3>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                A new system goes on PG&amp;E&apos;s Solar Billing Plan: exports earn credits that vary by time of day, day of the week and season, customers who start before 2028 get Energy Export Bonus Credits, and a True-Up statement closes each 12-month cycle. PG&amp;E says customers save the most when they use the energy they produce on-site, and the Base Services Charge stays on the bill either way. That is why storage has become common: the cities&apos; own 2024 permit reports to the Energy Commission show 79% of San Jose&apos;s residential solar permits and 74% of Fremont&apos;s included a battery. To line up installers city by city, see <Link href='/solar-companies/bay-area' className='text-primary underline'>how to compare solar companies across the Bay Area</Link>.
              </p>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                Sources, each checked {CHECKED}: <a href={PAO_Q2_2026_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>CPUC Public Advocates Office, Q2 2026 Electric Rates Report</a>; <a href={PGE_BSC_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>PG&amp;E, Base Services Charge</a>; <a href={PGE_SBP_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>PG&amp;E, Solar Billing Plan</a>; <a href={SJCE_SOLAR_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>San José Clean Energy, solar billing</a>; <a href={SB379_DATA_URL} target='_blank' rel='noopener noreferrer' className='text-primary underline'>California Energy Commission, SB 379 solar permit reports</a>.
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

            <FaqBlock items={FAQS} id='faq' className='mb-12' />

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
