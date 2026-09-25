import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { RATE_TRACKER_CRUMB } from '@/lib/city-pages';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, MapPin, Home, AlertTriangle } from 'lucide-react';
import { CITIES, UTILITY_DATA, utilityRateText } from '@/data/cities-data';
import {
  companiesCityHref,
  hasCompaniesCityPage,
} from '@/lib/canonical-redirects';
import { savingsCityHref } from '@/lib/canonical-redirects';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RegionalCostCities } from '@/components/shared/RegionalCostCities';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { RATE_TRACKER_PATH } from '@/data/utility-rate-tracker';
import { Byline } from '@/components/trust/Byline';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

/**
 * Los Angeles County regional hub.
 *
 * Why this page exists: a full link-graph crawl on 2026-09-05 found that eleven
 * /solar-savings city pages had zero inbound internal links from anywhere on the
 * site, and almost all of them were LA-basin cities — including Los Angeles and
 * Long Beach, the site's two largest markets. The five existing regional hubs
 * (Orange County, Bay Area, Inland Empire, San Diego County, Central Valley)
 * covered every region except this one, so LA County city pages were reachable
 * only from the sitemap.
 *
 * Unlike the older hubs this one links to BOTH city routes, since the 77
 * /solar-companies pages were the fully orphaned layer despite drawing 41% of
 * the site's search impressions.
 */

// 2026-09-23 (topical-authority pass, city_bills hub): this page ranks for
// "electricity provider los angeles california" and "average electric bill
// los angeles", so it now answers those first, with the county's providers
// read from the California Energy Commission's service-territory layers and
// the bill figures from the CPUC Public Advocates Office Q2 2026 report.
const TITLE = 'Los Angeles Electricity Providers: LADWP, SCE & More (2026)';
const DESCRIPTION =
  'LADWP serves the City of Los Angeles, SCE most of the county, and Pasadena, Glendale, Burbank and others run their own utilities. Rates, bills and solar rules.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/solar-savings/los-angeles-county' },
  openGraph: {
    images: [CRR_SOCIAL_CARD],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: 'https://ratereliefca.com/solar-savings/los-angeles-county',
    modifiedTime: '2026-09-23T00:00:00Z',
  },
};

const CEC_URL =
  'https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about';
const PAO_Q2_2026_URL =
  'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf';

/** Providers in Los Angeles County, from the CEC layers queried 2026-09-23. */
const PROVIDERS: { name: string; kind: string; where: string }[] = [
  { name: 'Southern California Edison (SCE)', kind: 'Investor-owned utility', where: 'Most of the county: about 74% of its area on the CEC map' },
  { name: 'Los Angeles Department of Water and Power (LADWP)', kind: 'City-owned utility', where: 'The City of Los Angeles: about 10% of county area' },
  { name: 'Glendale Water & Power, Pasadena Water and Power, Burbank Water and Power', kind: 'City-owned utilities', where: 'Their own cities' },
  { name: 'Vernon, Azusa, Cerritos, City of Industry', kind: 'City-owned utilities', where: 'Parts of those cities' },
  {
    name: 'Clean Power Alliance, Lancaster Energy, Energy for Palmdale’s Independent Choice, Pomona Choice Energy, Pico Rivera Innovative Municipal Energy',
    kind: 'Community choice providers (generation only)',
    where: 'Member cities inside SCE territory; SCE still delivers',
  },
];

const FAQS = [
  {
    question: 'Who is the electricity provider in Los Angeles, California?',
    answer:
      'For the City of Los Angeles it is LADWP, the city-owned Los Angeles Department of Water and Power. Most of the rest of Los Angeles County is Southern California Edison territory, often with a community choice provider such as Clean Power Alliance supplying the generation, and Glendale, Pasadena, Burbank, Vernon, Azusa, Cerritos and the City of Industry run their own utilities. The name on your bill settles it.',
  },
  {
    question: 'What is the average electric bill in Los Angeles?',
    answer:
      'No source publishes one figure for the whole county. For SCE customers, the CPUC Public Advocates Office estimated June 2026 average bills for customers not on CARE at $152 a month in a cool climate zone where homes use about 385 kWh a month, and $254 in a hot zone where they use about 700 kWh. Its Q2 2026 city comparison put the Greater Los Angeles area (SCE) above San Jose and San Diego. LADWP bills are not covered by those reports.',
  },
  {
    question: 'How much is electricity in Los Angeles?',
    answer:
      "For SCE customers, the Public Advocates Office put SCE's residential average rate at 34.4 cents per kWh as of June 1, 2026, and SCE adds a Base Services Charge of $24.15 a month for customers not on CARE or FERA. LADWP prices its standard residential rate in tiers that depend on your usage and zone; check the rate schedule printed on your bill.",
  },
  {
    question: "Do LADWP customers get the CPUC's solar rules?",
    answer:
      'No. LADWP is city-owned and credits customer solar under its own net energy metering rider, not the CPUC Net Billing Tariff that applies to SCE, PG&E and SDG&E customers. Glendale and Pasadena set their own rules too.',
  },
];

const LA_CITIES = CITIES.filter((c) => c.county === 'Los Angeles County').sort(
  (a, b) => a.name.localeCompare(b.name),
);

function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Solar Energy in Los Angeles County',
    description:
      'Solar costs, utility rates and options for Los Angeles County homeowners across LADWP, Southern California Edison, Glendale Water & Power and Pasadena Water & Power territory.',
    url: 'https://ratereliefca.com/solar-savings/los-angeles-county',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: LA_CITIES.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        url: `https://ratereliefca.com${savingsCityHref(c.slug)}`,
      })),
    },
  };
}

export default function LosAngelesCountySolarPage() {

  return (
    <PublicLayout breadcrumbLabel="Los Angeles County" breadcrumbParents={[RATE_TRACKER_CRUMB]}>
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumbs: Home > California utility rate tracker > Los Angeles County, the same
                list PublicLayout emits as BreadcrumbList (Block 5 §5.6). */}
            <BreadcrumbTrail
              crumbs={[RATE_TRACKER_CRUMB]}
              current="Los Angeles County"
              className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8"
            />

            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
                Who Provides Electricity in Los Angeles County
              </h1>
              <Byline updated="2026-09-23" />
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                If you live in the City of Los Angeles, your electricity comes
                from LADWP, the city-owned Department of Water and Power. Most
                of the rest of the county is Southern California Edison
                territory, and Glendale, Pasadena, Burbank and a few smaller
                cities run their own utilities. Which one serves your address
                sets your rates, your bill and the solar rules that apply.
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Updated September 23, 2026. Provider areas from the California
                Energy Commission; rates and bill estimates from the CPUC Public
                Advocates Office and the utilities.{' '}
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                Electricity providers in Los Angeles County
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The California Energy Commission maps every utility&apos;s
                service territory. Laid over the county boundary, its layers
                (queried September 23, 2026) show these providers:
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Electricity providers in Los Angeles County</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Provider</th>
                      <th className="p-3">Type</th>
                      <th className="p-3">Where</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROVIDERS.map((p) => (
                      <tr key={p.name} className="border-t border-border">
                        <th scope="row" className="p-3 align-top font-medium text-foreground">{p.name}</th>
                        <td className="p-3 align-top text-muted-foreground">{p.kind}</td>
                        <td className="p-3 align-top text-muted-foreground">{p.where}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                A community choice provider buys the power but does not own the
                wires: in its member cities SCE still delivers the electricity
                and sends one bill with both sets of charges. The Energy
                Commission&apos;s map also shows SCE along parts of the City of
                Los Angeles boundary, so an LA mailing address is not proof of an
                LADWP account. Source:{' '}
                <a href={CEC_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  California Energy Commission, Electric Load Serving Entities
                </a>
                .
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                What electricity costs in Los Angeles County
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">SCE.</strong> The CPUC
                Public Advocates Office put SCE&apos;s residential average rate
                at $0.344 per kWh as of June 1, 2026, up 56% over five years and
                101% since January 2016, and names wildfire mitigation and
                liability costs, transmission and distribution investment, and
                rooftop solar incentives as the main statewide drivers. Since
                November 2025 SCE has also charged a Base Services Charge of
                $24.15 a month for customers not on CARE or FERA ($12.08 on FERA,
                $6.00 on CARE), and says per-kWh prices fell about 10% to offset
                it.{' '}
                <Link href="/solar-savings/altadena" className="text-primary underline">
                  Altadena&apos;s SCE bill increase, explained
                </Link>{' '}
                shows what SCE&apos;s 2025 rate case and that charge added to bills
                in one unincorporated community, where SCE delivers the power and
                Clean Power Alliance supplies it by default.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Average bills.</strong> For
                June 2026 the Public Advocates Office estimated SCE bills for
                customers not on CARE at $152 a month in a cool climate zone
                where homes use about 385 kWh a month, and $254 in a hot zone
                where they use about 700 kWh; CARE customers averaged $81 and
                $165. Its Q2 2026 city comparison put the Greater Los Angeles
                area (SCE) ahead of San Jose and San Diego. About 813,943 SCE
                customers, 17%, were behind on their bills in May 2026, owing
                $733 on average.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">LADWP.</strong> The CPUC
                reports do not cover LADWP. Its standard residential rate (R-1A)
                is tiered by usage and zone: in Zone 1 the first tier is the
                first 350 kWh, the second the next 700 kWh and the third
                everything above 1,050 kWh; in Zone 2 the tiers are 700, 1,400
                and above 2,100 kWh. LADWP also offers a time-of-use rate
                (R-1B). The prices are on your bill and in LADWP&apos;s Schedule
                R-1; see our{' '}
                <Link href='/blog/why-is-my-ladwp-bill-so-high' className='text-primary underline'>LADWP bill and rate guide</Link>
                {' '}and, for SCE customers, the{' '}
                <Link href='/blog/why-is-my-sce-bill-so-high' className='text-primary underline'>SCE high-bill breakdown</Link>
                .
              </p>
              <p className="text-xs text-muted-foreground">
                Sources:{' '}
                <a href={PAO_Q2_2026_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">CPUC Public Advocates Office, Q2 2026 Electric Rates Report</a>
                ;{' '}
                <a href="https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc" target="_blank" rel="noopener noreferrer" className="text-primary underline">SCE, Base Services Charge</a>
                ;{' '}
                <a href="https://www.ladwp.com/account/understanding-your-rates/residential-electric-rates" target="_blank" rel="noopener noreferrer" className="text-primary underline">LADWP, residential electric rates</a>
                . All fetched September 23, 2026. Current averages for every
                utility are on the{' '}
                <Link href={RATE_TRACKER_PATH} className="text-primary underline">California utility rate tracker</Link>
                .
              </p>
            </section>

            {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
            <HeroQuickCheck topic="Los Angeles County solar savings and quote comparison" className="mb-12" />

            <div className="rounded-2xl border border-status-warning/30 bg-status-warning/10 p-6 md:p-8 mb-12">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-3">
                <AlertTriangle className="h-5 w-5 text-status-warning" />
                Check your utility before you believe any quote
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                LADWP, Glendale Water &amp; Power and Pasadena Water &amp; Power are
                publicly owned. They set their own rates and their own net-metering
                terms, and they are <strong>not</strong> governed by the CPUC&apos;s
                NEM 3.0 decision. If a salesperson is quoting you SCE rates, or
                telling an LADWP customer that a NEM 3.0 deadline is about to cost
                them money, the numbers in front of you are for a different
                household. Ask which utility the estimate was built on.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Check the provider on your bill</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  LADWP serves the City of LA. SCE serves most of the county.
                  Glendale and Pasadena run their own municipal utilities.
                </p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Homeowners</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Rooftop solar decisions assume you own the home. Renters can ask the landlord or look at community solar.
                </p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Next step</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Find your city below, confirm the utility matches your bill, then compare written quotes against that bill.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">
                Solar by city in Los Angeles County
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {LA_CITIES.map((city) => {
                  const utility = UTILITY_DATA[city.utilityCode];
                  return (
                    <div
                      key={city.slug}
                      className="bg-card rounded-xl border border-border p-5"
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {city.name}
                      </h3>
                      <div className="text-sm text-muted-foreground mb-3">
                        {utility.code === 'ladwp' ? (
                          <>LADWP · Use your electricity subtotal · See schedule</>
                        ) : (
                          <>{utility.shortName} · {utilityRateText(utility).short}</>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                        <Link
                          href={savingsCityHref(city.slug)}
                          className="text-primary hover:underline font-medium"
                        >
                          Costs &amp; savings →
                        </Link>
                        <Link
                          href={companiesCityHref(city.slug)}
                          className="text-primary hover:underline font-medium"
                        >
                          {hasCompaniesCityPage(city.slug)
                            ? 'Compare installers →'
                            : 'What solar costs →'}
                        </Link>
                      </div>

                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                We cover {LA_CITIES.length} of Los Angeles County&apos;s 88
                incorporated cities today, and we are adding more. If yours is not
                here, the statewide guide covers the rules that apply everywhere in
                California.
              </p>
            </div>

            {/* claude/audit-links-20260918 — the cost-layer cities in these
                counties that this hub's own grid does not reach. */}
            <RegionalCostCities region='Los Angeles County' counties={['Los Angeles County']} />

            {/* 2026-09-23 (Tier 2, citycos): companies-layer city pages in the county. */}
            <p className="text-muted-foreground leading-relaxed mb-12">
              Comparing installers rather than bills? The companies pages for <Link href="/solar-companies/santa-monica" className="text-primary underline">Santa Monica</Link> (SCE with Clean Power Alliance), <Link href="/solar-companies/bellflower" className="text-primary underline">Bellflower</Link> (new roof-certification rules since January 2026) and the <Link href="/solar-companies/high-desert" className="text-primary underline">High Desert</Link>, which covers Lancaster, Palmdale and the Antelope Valley, show each permit office&apos;s steps.
            </p>

            <FaqJsonLd items={FAQS} />
            <FaqBlock items={FAQS} id="faq" schema={false} />

            <HubSpokeLinks
              hub="city_bills"
              currentPath="/solar-savings/los-angeles-county"
              max={6}
              title="Electric rates and bills in other California cities"
            />

            <div className="mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                See what solar is worth at your address
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Request a solar referral to discuss your project. A provider decides what it can offer.
              </p>
              <Link
                href='#solar-inquiry'
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Solar Inquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className='mt-8'>
              <SolarInquiry topic="Los Angeles County solar savings and quote comparison" />
            </div>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
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

        dateModified includes the 2026-09-11 LADWP consistency corrections. datePublished is
        deliberately omitted: this page carries no recorded first-publish date
        and inventing one would put an unverifiable date into structured data.
      */}
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Who Provides Electricity in Los Angeles County"
        url="https://ratereliefca.com/solar-savings/los-angeles-county"
        dateModified="2026-09-23"
      />

      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <TrustedSources
          domain="crr"
          variant="compact"
          palette={{
            fg: 'hsl(var(--foreground))',
            muted: 'hsl(var(--foreground) / 0.85)',
            mutedFg: 'hsl(var(--muted-foreground))',
            accent: 'hsl(var(--primary))',
            cardBg: 'hsl(var(--card))',
            cardBorder: 'hsl(var(--border))',
          }}
        />
      </div>
    </PublicLayout>
  );
}
