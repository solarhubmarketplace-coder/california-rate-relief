import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CostCityTable } from '@/components/growth/CostCityTable';
import { cityCostPath, getPublishableCityCostRows } from '@/data/city-cost-data';
import { COST_INDEX_PATH } from '@/data/solar-cost-index';
import { RATE_TRACKER_PATH } from '@/data/utility-rate-tracker';
import { COST_RULES_PATH, COST_RULES_TITLE, costHubRow, formatVerified } from '@/lib/city-cost-content';
import { DG_MIN_COST_N, DG_SOURCE, formatDollars, formatPerWatt, stateDg, systemPrice } from '@/data/dgstats';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';

// =============================================================================
// /solar-cost — the index of the city cost layer.
//
// WHY THIS PAGE EXISTS
// The 2026-09-18 link audit found that twenty of the fifty-seven
// /solar-cost/<city> pages had no inbound internal link anywhere on the site.
// The pages that link city pages — the six regional guides under
// /solar-savings and the /solar-savings and /solar-companies city pages — all
// read their city list from src/data/cities-data.ts, and the cost layer reads
// src/data/city-cost-data.ts. A city that exists only in the cost file was
// therefore advertised in the sitemap and linked from nothing.
//
// This index closes that gap at the source: it lists every row that passes the
// gate in city-cost-data.ts, so a city page cannot ship without an inbound
// link. scripts/assert-city-links.mjs fails the moment that stops being true.
//
// WHAT IT SAYS (rebuilt 2026-09-24, Block 3 of the SEO plan)
// It answers the price question first with the statewide CPUC DG Stats
// figure (reported cost per watt, PG&E, SCE and SDG&E territories), then lists
// every city in a table per county: utility, CCA, the reported median cost per
// watt with the level it comes from (city, county, utility area or statewide)
// and the permit fee. Every cell is built by costHubRow() from the same data
// the city page renders. The earlier "no price anywhere" rule and the LBNL
// national benchmark are retired on this layer: DG Stats is a California,
// per-city, sourced figure, always labeled as reported costs, not a quote.
// =============================================================================

const path = '/solar-cost';
const rows = getPublishableCityCostRows();

/** The six regional guides, so this index is not a dead end for a reader who
 *  wants the wider area rather than one city. */
const REGIONAL_GUIDES: { href: string; label: string }[] = [
  { href: '/solar-savings/bay-area', label: 'Bay Area solar guide' },
  { href: '/solar-savings/central-valley', label: 'Central Valley solar guide' },
  { href: '/solar-savings/inland-empire', label: 'Inland Empire solar guide' },
  { href: '/solar-savings/los-angeles-county', label: 'Los Angeles County solar guide' },
  { href: '/solar-savings/orange-county', label: 'Orange County solar guide' },
  { href: '/solar-savings/san-diego-county', label: 'San Diego County solar guide' },
];

// The count is interpolated rather than typed: a row added to city-cost-data.ts
// must not be able to make this title wrong.
const state = stateDg();
const statePerWatt = state.costPerWatt;
const statePrice = systemPrice(state.medianSizeKwDc2025 as number, statePerWatt.median as number);
const metaTitle = `Solar Panel Cost by California City (2026): ${rows.length} Cities`;
const metaDescription = `Median reported solar cost per watt for ${rows.length} California cities from CPUC data, each city's permit fee against the $450 state limit, its utility and CCA.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'website',
    url: `https://ratereliefca.com${path}`,
  },
};

function byCounty() {
  const groups = new Map<string, typeof rows>();
  for (const row of rows) {
    const list = groups.get(row.county) ?? [];
    list.push(row);
    groups.set(row.county, list);
  }
  return [...groups.entries()]
    .map(([county, list]) => [county, [...list].sort((a, b) => a.city.localeCompare(b.city))] as const)
    .sort((a, b) => a[0].localeCompare(b[0]));
}

/*
 * CollectionPage with an ItemList of exactly the links rendered below. This
 * route is an index, not an article: the writing is on the city pages, each of
 * which emits its own Article node. No date is invented — dateModified is the
 * newest sourcesFetchedAt among the rows listed, a date that already exists in
 * the data.
 */
function buildSchema() {
  const newest = rows.map((r) => r.sourcesFetchedAt).sort().at(-1);
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Solar panel cost by California city (2026)',
    description: metaDescription,
    url: `https://ratereliefca.com${path}`,
    ...(newest ? { dateModified: newest } : {}),
    isPartOf: {
      '@type': 'WebSite',
      name: 'California Rate Relief',
      url: 'https://ratereliefca.com',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: rows.length,
      itemListElement: rows.map((row, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://ratereliefca.com${cityCostPath(row.slug)}`,
        name: `Solar panel cost in ${row.city}, California`,
      })),
    },
  };
}

const link = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export default function SolarCostIndex() {
  const grouped = byCounty();

  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2'>
              <Link href='/' className='hover:text-primary'>Home</Link>
              <span>/</span>
              <span className='text-foreground'>Solar cost by city</span>
            </nav>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight'>
              Solar Panel Cost by California City (2026)
            </h1>

            <p className='text-lg text-foreground/80 leading-relaxed mb-5'>
              California homeowners who bought their own solar systems reported a median of{' '}
              <strong>{formatPerWatt(statePerWatt.median as number)} per watt</strong> from January 2025 to
              May 2026, across {statePerWatt.n.toLocaleString('en-US')} systems in PG&amp;E, SCE and
              SDG&amp;E territory. The middle half paid {formatPerWatt(statePerWatt.p25 as number)} to{' '}
              {formatPerWatt(statePerWatt.p75 as number)}. At the {state.medianSizeKwDc2025} kW median
              size, that is about {formatDollars(statePrice)}.
            </p>
            <p className='text-foreground/80 leading-relaxed mb-5'>
              The tables below give each city&apos;s own figure where at least {DG_MIN_COST_N} owners
              reported a cost, and otherwise its county&apos;s, its utility area&apos;s or the statewide
              one, always labeled. They are reported costs, not quotes, and no federal credit comes off
              them for a system finished in 2026. Each city also shows its permit fee against the $450
              state limit.
            </p>
            <p className='text-sm text-muted-foreground mb-5'>
              Source:{' '}
              <a className={link} href={DG_SOURCE.url} rel='noopener noreferrer' target='_blank'>
                {DG_SOURCE.label}
              </a>
              , checked {formatVerified(DG_SOURCE.verifiedAt)}. Municipal utilities such as LADWP and
              SMUD are not in the data; their cities use the county or statewide figure. How it is
              counted, and the tax and permit rules every city shares:{' '}
              <Link href={COST_RULES_PATH} className={link}>{COST_RULES_TITLE}</Link>.
            </p>
            <p className='text-foreground/80 leading-relaxed mb-5'>
              To sort and filter the permit fees, permit platforms and utilities of all {rows.length}{' '}
              cities, or download them, use the{' '}
              <Link href={COST_INDEX_PATH} className={link}>
                California Solar Cost Index
              </Link>
              . The average rate your utility charges is on the{' '}
              <Link href={RATE_TRACKER_PATH} className={link}>
                California utility rate tracker
              </Link>
              ; for a business property, see{' '}
              <Link href='/commercial-solar/cost-per-watt-california' className={link}>
                commercial solar cost per watt in California
              </Link>
              .
            </p>

            {/* Bill-first step after the answer (2026-09-23); it opens the inquiry
                form at the end of the page at step 2. */}
            <HeroQuickCheck topic="California solar cost by city" className='mb-10' />

            {grouped.map(([county, list]) => (
              <section key={county} className='mb-10'>
                <h2 className='text-xl font-bold text-foreground mb-4 tracking-tight'>
                  {county}
                </h2>
                <CostCityTable
                  rows={list.map(costHubRow)}
                  caption={`Solar cost pages in ${county}: reported median cost per watt (level and number of reports) and permit fee`}
                />
              </section>
            ))}

            <section className='mb-10'>
              <h2 className='text-xl font-bold text-foreground mb-3 tracking-tight'>
                Wider than one city
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                If you are weighing a region rather than a single address, the regional guides
                cover the utility that dominates it and the cities inside it.
              </p>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2'>
                {REGIONAL_GUIDES.map((guide) => (
                  <li key={guide.href}>
                    <Link href={guide.href} className={`${link} font-medium text-sm`}>
                      {guide.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* The closing ask (2026-09-23): the inquiry form itself, in place of
                the link-only box that sent readers to the home page. */}
            <SolarInquiry variant='bill' topic="California solar cost by city" />
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
