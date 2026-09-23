import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { StatewideCostBenchmark } from '@/components/growth/StatewideCostBenchmark';
import { cityCostPath, getPublishableCityCostRows } from '@/data/city-cost-data';
import { COST_INDEX_PATH } from '@/data/solar-cost-index';
import { getUtilityRate, RATE_TRACKER_PATH } from '@/data/utility-rate-tracker';
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
// WHAT IT MAY AND MAY NOT SAY
// The cost layer publishes no city-specific system price, no price range
// invented for a city, no per-watt figure attributed to a city, and no
// payback period, and neither does its index. The only per-city facts stated
// here are the two the row already carries with a source: the county and the
// utility that bills the address. Everything quantitative beyond that stays
// on the city page beside the document it came from.
//
// The one exception, added 2026-09-22 (Chad's decision): this index and every
// city page may also state ONE sourced, statewide installed-price benchmark
// (currently Lawrence Berkeley National Laboratory's Tracking the Sun figure)
// via the shared StatewideCostBenchmark component. It always reads as
// statewide, never as a city's price — see the policy comment atop
// src/data/city-cost-data.ts and src/data/solar-cost-benchmark.ts.
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
const metaTitle = `Solar Panel Cost by California City: ${rows.length} Cities`;
const metaDescription =
  'Every California city page here names the utility that bills the address, the city permit rules and the state rules that set a solar price. No price estimates.';

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
    name: 'Solar panel cost by California city',
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
              What solar costs in your California city
            </h1>

            <p className='text-lg text-foreground/80 leading-relaxed mb-5'>
              {rows.length} California cities have a page here, and not one of them prints a
              price for your home. That is deliberate: what a system actually costs depends on
              your roof, your utility and the contract your own installer hands you &mdash; not a
              website. Under California Business and Professions Code section 7169 that number has
              to arrive in writing, on the front or cover page, in boldface 16-point type, showing
              the total cost of the system including financing costs.
            </p>
            <p className='text-foreground/80 leading-relaxed mb-5'>
              What a city page does carry is the part that genuinely differs by address: which
              utility bills it and whether a community choice aggregator supplies the generation,
              what that city&rsquo;s own adopted fee schedule says about a solar permit, whether
              the permit can be filed online, and the California rules that apply the same way
              everywhere. Every one of those is stated beside the document it came from and the
              date it was checked.
            </p>
            <p className='text-foreground/80 leading-relaxed mb-5'>
              To compare cities side by side, the{' '}
              <Link href={COST_INDEX_PATH} className={link}>
                California Solar Cost Index
              </Link>{' '}
              lays out the permit fee, the permit path, the utility and the community choice
              aggregator for all {rows.length} cities in one table you can sort, filter and download.
            </p>

            {/* Bill-first step after the intro (2026-09-23); it opens the inquiry
                form at the end of the page at step 2. */}
            <HeroQuickCheck topic="California solar cost by city" className='mb-10' />

            <StatewideCostBenchmark />

            <p className='text-foreground/80 leading-relaxed mb-5'>
              The rate you pay now is the other half of the arithmetic, and it is not a city
              fact but a utility one. The{' '}
              <Link href={RATE_TRACKER_PATH} className={link}>
                California utility rate tracker
              </Link>{' '}
              holds the current average residential rate for each biller with the CPUC report it
              came from. If your utility is SDG&amp;E, the plan you are on moves the bill before
              solar enters the picture at all &mdash;{' '}
              <Link href='/blog/sdge-time-of-use-rates-2026' className={link}>
                SDG&amp;E time-of-use rates
              </Link>{' '}
              sets out the peak windows and what changing plan does. For a business property the
              question is a different one, priced per watt against load and tariff rather than per
              household:{' '}
              <Link href='/commercial-solar/cost-per-watt-california' className={link}>
                commercial solar cost per watt in California
              </Link>{' '}
              is where that starts.
            </p>
            <p className='text-sm text-muted-foreground mb-10'>
              Source for the disclosure requirement above: California Business and Professions
              Code &sect;7169 &mdash;{' '}
              <a
                className={link}
                href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169'
                rel='noopener noreferrer'
                target='_blank'
              >
                leginfo.legislature.ca.gov
              </a>{' '}
              &mdash; verified 17 September 2026.
            </p>

            {grouped.map(([county, list]) => (
              <section key={county} className='mb-10'>
                <h2 className='text-xl font-bold text-foreground mb-4 tracking-tight'>
                  {county}
                </h2>
                <ul className='space-y-3'>
                  {list.map((row) => (
                    <li key={row.slug}>
                      <Link
                        href={cityCostPath(row.slug)}
                        className='group block rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50'
                      >
                        <span className='block font-semibold text-foreground group-hover:text-primary'>
                          Solar panel cost in {row.city}
                        </span>
                        <span className='mt-1 block text-sm text-muted-foreground'>
                          Billed by {getUtilityRate(row.utilityKey).name}
                          {row.cca ? ' with a community choice aggregator supplying generation' : ''}
                          . Permit rules and fee wording as {row.city} publishes them.
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
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
