import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Byline } from '@/components/trust/Byline';
import { TRUST_LINKS, formatTrustDate } from '@/components/trust/trust-links';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { StatewideCostBenchmark } from '@/components/growth/StatewideCostBenchmark';
import { CopyCitationButton, SolarCostIndexTable } from '@/components/growth/SolarCostIndexTable';
import { CEC_SERVICE_TERRITORY_SOURCE } from '@/data/city-cost-data';
import { RATE_TRACKER_PATH, Q2_2026_URL } from '@/data/utility-rate-tracker';
import { STATEWIDE_COST_BENCHMARK } from '@/data/solar-cost-benchmark';
import {
  COST_INDEX_CSV_PATH,
  COST_INDEX_CSV_URL,
  COST_INDEX_PATH,
  COST_INDEX_PUBLISHED,
  COST_INDEX_TITLE,
  COST_INDEX_UPDATED,
  COST_INDEX_URL,
  STATE_RESIDENTIAL_PV_FEE_LIMIT,
  computeCostIndexFindings,
  formatUsd,
  getCostIndexRows,
  getCostIndexSources,
  listJoin,
} from '@/data/solar-cost-index';
import { HubUpLink } from '@/components/growth/HubUpLink';
import { PermitFeeChart } from '@/components/growth/PermitFeeChart';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

// =============================================================================
// /california-solar-cost-index — the linkable data page for the cost layer.
//
// Every figure below is either read from a row (src/data/solar-cost-index.ts,
// which quotes src/data/city-cost-data.ts) or computed from the rows at build
// time by computeCostIndexFindings(). Nothing numeric is typed into this file
// except the statute's own $450 figure, which lives with its source in the
// data module. No system price, no estimate, no savings claim, no installer.
//
// CRR-only: src/middleware.ts serves it on ratereliefca.com (and the local
// preview host) and 404s it everywhere else, CSV included.
// =============================================================================

const rows = getCostIndexRows();
const findings = computeCostIndexFindings(rows);
const sources = getCostIndexSources(rows);

/** Cited in "What the index does not cover"; same link and date as the /solar-cost hub. */
const BPC_7169 = {
  label: 'California Business and Professions Code §7169, solar energy system disclosure document',
  url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169',
  verifiedAt: '2026-09-17',
};
const pageSources = [
  ...sources,
  BPC_7169,
  {
    label: `${STATEWIDE_COST_BENCHMARK.source.publisher}, ${STATEWIDE_COST_BENCHMARK.source.label}`,
    url: STATEWIDE_COST_BENCHMARK.source.url,
    verifiedAt: STATEWIDE_COST_BENCHMARK.source.verifiedAt,
  },
];

const metaTitle = 'California Solar Cost Index 2026: Permit Fees by City';
const metaDescription = findings.published
  ? `Permit fees, instant permitting, utilities and CCAs for ${findings.total} California cities, each linked to its source. ${findings.published.count} publish a fee: ${formatUsd(findings.published.min)} to ${formatUsd(findings.published.max)}.`
  : `Permit fees, instant permitting, utilities and CCAs for ${findings.total} California cities, each linked to its source.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: COST_INDEX_PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: COST_INDEX_URL,
    publishedTime: `${COST_INDEX_PUBLISHED}T00:00:00Z`,
    modifiedTime: `${COST_INDEX_UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: { card: 'summary', title: metaTitle, description: metaDescription },
};

const link = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

/** 'PG&E, SCE or SDG&E', read from the rows rather than typed. */
const iouNames = (() => {
  const names = [...new Set(rows.filter((r) => r.utility.type === 'IOU').map((r) => r.utility.display.split(';')[0]))].sort();
  return names.length <= 1 ? names.join('') : `${names.slice(0, -1).join(', ')} or ${names[names.length - 1]}`;
})();

const platformSourceCities = rows.filter((r) => r.sources.some((s) => s.kind === 'platform')).map((r) => r.city);
const limitUsd = formatUsd(STATE_RESIDENTIAL_PV_FEE_LIMIT.baseUsd);

/** The headline findings, each a sentence built from computed counts. */
function buildFindings(): string[] {
  const f = findings;
  const out: string[] = [];
  const dated = rows.filter((r) => r.fee.status === 'dated').map((r) => r.city);
  const conflicting = rows.filter((r) => r.fee.status === 'conflicting').map((r) => r.city);
  out.push(
    `${f.feeCounts.published} of ${f.total} cities publish a current dollar figure for a residential solar permit that we could confirm. ` +
      `${f.feeCounts['not-published']} publish no dollar figure on their permit pages, and ${plural(f.feeCounts['not-retrievable'], 'city', 'cities')} ${f.feeCounts['not-retrievable'] === 1 ? 'does' : 'do'} not publish a fee schedule in readable form.` +
      (dated.length ? ` ${listJoin(dated)} ${dated.length === 1 ? 'has' : 'have'} only a dated schedule.` : '') +
      (conflicting.length ? ` ${listJoin(conflicting)} ${conflicting.length === 1 ? 'publishes' : 'publish'} two different figures.` : ''),
  );
  if (f.published) {
    out.push(
      `Among the ${f.published.count} published fees, the city's own charge for a standard home system runs from ${formatUsd(f.published.min)} (${listJoin(f.published.minCities)}) to ${formatUsd(f.published.max)} (${listJoin(f.published.maxCities)}). The median is ${formatUsd(f.published.median)}. Some cities list other charges beside the permit, such as a fire plan review; open a row to see them.`,
    );
    const above = f.aboveStateLimit;
    out.push(
      `${f.atOrBelowStateLimit} of those ${f.published.count} are at or below ${limitUsd}, the limit California Government Code section 66015 sets for a residential PV permit up to ${STATE_RESIDENTIAL_PV_FEE_LIMIT.thresholdKw} kW.` +
        (above.length
          ? ` ${above.length === 1 ? 'One is' : above.length === 2 ? 'Two are' : `${above.length} are`} above it: ${listJoin(above.map((a) => `${a.city} (${a.amountDisplay})`))}. The same section lets a city charge more if it adopts written findings on its costs; this index did not check whether ${above.length === 1 ? 'it has' : 'either has'}.`
          : ''),
    );
  }
  const p = f.platformCounts;
  const automated = p.solarapp + p.symbium + p['city-instant'];
  out.push(
    `${automated} of ${f.total} cities name an instant permit platform for home solar: SolarAPP+ in ${p.solarapp} and Symbium in ${p.symbium}` +
      (f.cityInstantCities.length ? `, while ${listJoin(f.cityInstantCities)} ${f.cityInstantCities.length === 1 ? 'issues' : 'issue'} qualifying permits through ${f.cityInstantCities.length === 1 ? 'its' : 'their'} own system` : '') +
      `. ${p['none-named']} name none on their permit pages${p.unconfirmed ? `, and ${p.unconfirmed} do not say either way` : ''}.`,
  );
  const u = f.utilityCounts;
  out.push(
    `${u.IOU} of ${f.total} cities are served mainly by ${iouNames}, and ${u.POU} by a publicly owned utility` +
      (f.mixedCities.length ? `; in ${listJoin(f.mixedCities)} it depends on the address` : '') +
      `. ${f.ccaCount} are also served by one of ${f.ccaNames} community choice aggregators, which supply the generation while the utility still delivers it.`,
  );
  return out;
}

const citationText = `Chad Simpson, "${COST_INDEX_TITLE}," California Rate Relief, updated ${formatTrustDate(COST_INDEX_UPDATED)}, ${COST_INDEX_URL}.`;
const linkHtml = `<a href="${COST_INDEX_URL}">California Solar Cost Index 2026</a> (California Rate Relief)`;

function buildDatasetSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: COST_INDEX_TITLE,
    description:
      `City-level facts behind a California residential solar quote for ${findings.total} cities: the city's published residential solar permit fee, whether it names an instant permit platform (SolarAPP+ or Symbium), whether permits can be filed online, the electric utility and its ownership type, the utility's average residential rate where the CPUC publishes one, and the community choice aggregator. Every value links to the city, utility, CCA or state document it came from. No system prices or estimates.`,
    url: COST_INDEX_URL,
    keywords: [
      'California solar permit fees',
      'solar permit cost by city',
      'SolarAPP+',
      'Symbium',
      'California electric utilities',
      'community choice aggregation',
      'Government Code 66015',
    ],
    creator: { '@type': 'Organization', name: 'California Rate Relief', url: 'https://ratereliefca.com' },
    author: {
      '@type': 'Person',
      '@id': 'https://ratereliefca.com/author/chad-simpson#person',
      name: 'Chad Simpson',
      url: 'https://ratereliefca.com/author/chad-simpson',
    },
    publisher: { '@type': 'Organization', name: 'California Rate Relief', url: 'https://ratereliefca.com' },
    datePublished: COST_INDEX_PUBLISHED,
    dateModified: COST_INDEX_UPDATED,
    temporalCoverage: `${findings.oldestCheck}/${COST_INDEX_UPDATED}`,
    spatialCoverage: { '@type': 'Place', name: 'California, United States' },
    variableMeasured: [
      'City residential solar permit fee (US dollars)',
      'Permit fee status',
      'Instant permit platform',
      'Online permit filing',
      'Electric utility',
      'Utility ownership type',
      'Utility average residential rate (cents per kWh)',
      'Community choice aggregator',
      'Date checked',
    ],
    distribution: [
      { '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: COST_INDEX_CSV_URL },
      { '@type': 'DataDownload', encodingFormat: 'text/html', contentUrl: COST_INDEX_URL },
    ],
    isBasedOn: sources.map((s) => s.url),
  };
}

const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

export default function CaliforniaSolarCostIndexPage() {
  const headline = buildFindings();
  const pub = findings.published;
  const excludedFromStats = findings.conflictingOrDatedCities;

  return (
    <PublicLayout
      breadcrumbLabel='California Solar Cost Index'
      breadcrumbParent={{ label: 'Solar cost by city', href: '/solar-cost' }}
    >
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline={COST_INDEX_TITLE}
        url={COST_INDEX_URL}
        datePublished={COST_INDEX_PUBLISHED}
        dateModified={COST_INDEX_UPDATED}
        description={metaDescription}
      />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: jsonLd(buildDatasetSchema()) }} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-6xl'>
            <nav aria-label='Breadcrumb' className='mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span aria-hidden='true'>/</span>
              <Link href='/solar-cost' className='hover:text-primary'>Solar cost by city</Link><span aria-hidden='true'>/</span>
              <span className='text-foreground'>California Solar Cost Index</span>
            </nav>

            <header className='mb-8 max-w-3xl'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Data &middot; {findings.total} cities
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                {COST_INDEX_TITLE}
              </h1>
              <Byline updated={COST_INDEX_UPDATED} dateLabel='Updated' sourceCount={pageSources.length} sourcesHref='#sources' />
            </header>

            <div className='max-w-3xl space-y-5 text-foreground/85 leading-relaxed'>
              <p className='text-lg'>
                A solar quote in California carries a few costs that change from one city to the next.
                This index puts them side by side for {findings.total} cities: what the city charges for
                a home solar permit, whether it issues that permit through an instant online platform,
                which utility bills the address, and whether a community choice aggregator supplies
                the power. Every cell links to the document it came from.
              </p>
              <HubUpLink path="/california-solar-cost-index" />
              <p>
                It does not print a price for a solar system in any city. No reliable public source
                publishes one, and the number that governs your project is the one in your own
                contract.
              </p>
            </div>

            {/* ---------- Headline findings ---------- */}
            <section aria-labelledby='findings' className='mt-10 max-w-3xl rounded-xl border border-border bg-card p-6'>
              <h2 id='findings' className='text-xl font-bold text-foreground mb-4 tracking-tight'>
                What the data shows
              </h2>
              <ul className='list-disc space-y-3 pl-5 text-foreground/85 leading-relaxed'>
                {headline.map((sentence) => (
                  <li key={sentence}>{sentence}</li>
                ))}
              </ul>
              <p className='mt-4 text-xs text-muted-foreground'>
                Counts are computed from the table below each time the page is built. Fee limit:{' '}
                <a href={STATE_RESIDENTIAL_PV_FEE_LIMIT.source.url} target='_blank' rel='noopener noreferrer' className={link}>
                  Government Code &sect;66015(a)(1)-(2)
                </a>
                , checked {formatTrustDate(STATE_RESIDENTIAL_PV_FEE_LIMIT.source.verifiedAt)}.
              </p>
            </section>

            {/* ---------- The fee finding, drawn (plan 7.6); computed from the same rows ---------- */}
            <PermitFeeChart
              id='permit-fee-chart'
              rows={rows}
              limitUsd={STATE_RESIDENTIAL_PV_FEE_LIMIT.baseUsd}
              limitLabel={`State limit: $${STATE_RESIDENTIAL_PV_FEE_LIMIT.baseUsd} (Gov. Code §66015)`}
              sourceNote={
                <>
                  Each dot is one city&rsquo;s published residential solar permit fee from the index below;
                  cities that publish no fee, two figures or only a dated schedule are left out. Under{' '}
                  <a href={STATE_RESIDENTIAL_PV_FEE_LIMIT.source.url} target='_blank' rel='noopener noreferrer' className={link}>
                    Government Code &sect;66015(a)
                  </a>{' '}
                  (checked September 24, 2026) a photovoltaic permit fee may not exceed $450 plus $15 per kW
                  above 15 kW, unless the city adopts a written finding that its cost is higher. The chart
                  does not show whether any city above the line has adopted one.
                </>
              }
            />

            {/* ---------- The table ---------- */}
            <section aria-labelledby='index-table' className='mt-12'>
              <h2 id='index-table' className='text-2xl font-bold text-foreground mb-2 tracking-tight scroll-mt-24'>
                The index
              </h2>
              <p className='mb-4 max-w-3xl text-foreground/80'>
                Filter by utility, fee or permit path, or sort any column. Open a row to read the
                city&rsquo;s own wording and every source with the date it was checked. The city name
                goes to that city&rsquo;s full cost page.
              </p>
              <SolarCostIndexTable rows={rows} csvHref={COST_INDEX_CSV_PATH} />
            </section>

            <div className='mt-12 max-w-3xl space-y-12 text-foreground/85 leading-relaxed'>
              {/* ---------- Using it ---------- */}
              <section aria-labelledby='use'>
                <h2 id='use' className='text-2xl font-bold text-foreground mb-4 tracking-tight scroll-mt-24'>
                  How to use it with a quote
                </h2>
                <ul className='list-disc space-y-3 pl-5'>
                  <li>
                    <strong>Find the permit line.</strong> If your city publishes a fee, you can see
                    whether a quote passes it through as its own line or folds it into the total. Ask
                    who pulls the permit and whether inspections are in the scope.
                  </li>
                  <li>
                    <strong>Ask which permit path the installer will use.</strong> In a city that names
                    SolarAPP+ or Symbium, those platforms charge their own fee on top of the city&rsquo;s.
                    Ask whether the quote includes it.
                  </li>
                  <li>
                    <strong>Check the utility name on your bill.</strong> The rate column is a
                    utility-wide average, not your rate. In a city with more than one utility, or a
                    community choice aggregator, your bill tells you which one applies. The{' '}
                    <Link href={RATE_TRACKER_PATH} className={link}>California utility rate tracker</Link>{' '}
                    has the history behind each average.
                  </li>
                </ul>
              </section>

              {/* ---------- Not covered ---------- */}
              <section aria-labelledby='not-covered'>
                <h2 id='not-covered' className='text-2xl font-bold text-foreground mb-4 tracking-tight scroll-mt-24'>
                  What the index does not cover
                </h2>
                <p>
                  The cost of a system depends on your roof, your electrical panel, the equipment and
                  the contract, so the index gives no system price for any city. Under California
                  Business and Professions Code section 7169, the total cost and payments, including
                  financing costs, must be on the front or cover page of a solar contract in boldface
                  16-point type (
                  <a href={BPC_7169.url} target='_blank' rel='noopener noreferrer' className={link}>
                    B&amp;P Code &sect;7169
                  </a>
                  , checked {formatTrustDate(BPC_7169.verifiedAt)}). That page is the figure to compare. For a national
                  reference point only:
                </p>
                <StatewideCostBenchmark />
              </section>

              {/* ---------- Methodology ---------- */}
              <section aria-labelledby='methodology'>
                <h2 id='methodology' className='text-2xl font-bold text-foreground mb-4 tracking-tight scroll-mt-24'>
                  Methodology
                </h2>
                <p className='mb-4'>
                  <strong>Last updated {formatTrustDate(COST_INDEX_UPDATED)}.</strong> Permit fields were
                  checked between {formatTrustDate(findings.oldestCheck)} and{' '}
                  {formatTrustDate(findings.newestCheck)}; each row shows its own date.
                </p>
                <ul className='list-disc space-y-3 pl-5'>
                  <li>
                    <strong>Which cities.</strong> Every California city with a{' '}
                    <Link href='/solar-cost' className={link}>solar cost page</Link> on this site. A city
                    only gets a page once every permit field on it carries a source and a checked date.
                  </li>
                  <li>
                    <strong>City permit fee.</strong> The city&rsquo;s own charge for a permit for a
                    standard home rooftop system, on the simplest path the city lists, taken from the
                    city&rsquo;s permit page or adopted fee schedule. Where a schedule lists plan check
                    and permit or inspection as separate lines, the index adds them and shows both. It
                    leaves out the separate charge the SolarAPP+ or Symbium platform collects; where a
                    city states that charge, it appears under the fee. Size limits differ by city, and
                    each row says which one applies.
                  </li>
                  <li>
                    <strong>No estimates.</strong> A city that publishes no figure on the pages we
                    checked is marked that way. The range and median use only the{' '}
                    {pub ? pub.count : 0} cities with a current published figure
                    {excludedFromStats.length ? `; ${listJoin(excludedFromStats)} are listed but left out` : ''}.
                  </li>
                  <li>
                    <strong>Instant permitting and online filing.</strong> As named on the city&rsquo;s
                    permit page
                    {platformSourceCities.length
                      ? `, or for ${listJoin(platformSourceCities)} on another City page cited in that row`
                      : ''}
                    . &ldquo;None named&rdquo; means the city&apos;s permit pages do not name a platform. It does
                    not prove the city has none.
                  </li>
                  <li>
                    <strong>Electric utility.</strong> The utility each city page names. Every city was
                    checked against the{' '}
                    <a href={CEC_SERVICE_TERRITORY_SOURCE.url} target='_blank' rel='noopener noreferrer' className={link}>
                      California Energy Commission&rsquo;s service-territory map
                    </a>{' '}
                    and Census city boundaries on {formatTrustDate(CEC_SERVICE_TERRITORY_SOURCE.verifiedAt)}.
                    Investor-owned or publicly owned is the Energy Commission&rsquo;s own label. Where
                    more than one utility serves addresses inside a city, the row says so. Service maps
                    are approximate at the edges, so read the utility name on your bill.
                  </li>
                  <li>
                    <strong>Utility average rate.</strong> The utility-wide average residential rate
                    from the{' '}
                    <a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={link}>
                      CPUC Public Advocates Office Q2 2026 Electric Rates Report
                    </a>
                    , as carried on our{' '}
                    <Link href={RATE_TRACKER_PATH} className={link}>rate tracker</Link>. It is not a city
                    figure. That report covers only the investor-owned utilities.
                  </li>
                  <li>
                    <strong>Community choice aggregator.</strong> Checked against each aggregator&rsquo;s
                    own list of the communities it serves on{' '}
                    {formatTrustDate(COST_INDEX_UPDATED)}. &ldquo;None recorded&rdquo; means the city page
                    names no aggregator.
                  </li>
                  <li>
                    <strong>Corrections.</strong> If a city has published a new fee schedule, or a cell
                    is wrong, tell us through the{' '}
                    <Link href={TRUST_LINKS.corrections.href} className={link}>corrections page</Link>. The
                    row and its date change when the source does.
                  </li>
                </ul>
              </section>

              {/* ---------- Cite ---------- */}
              <section aria-labelledby='cite' className='rounded-xl border border-primary/25 bg-primary/5 p-6'>
                <h2 id='cite' className='text-xl font-bold text-foreground mb-3 tracking-tight scroll-mt-24'>
                  Cite this data
                </h2>
                <p className='mb-3 text-sm'>
                  If you use these figures, please link to this page and name the city source shown in
                  the row.
                </p>
                <p className='mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Citation</p>
                <p className='mb-3 rounded-lg border border-border bg-white p-3 text-sm text-foreground [overflow-wrap:anywhere]'>
                  {citationText}
                </p>
                <CopyCitationButton text={citationText} />
                <p className='mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Link</p>
                <pre className='mb-3 whitespace-pre-wrap rounded-lg border border-border bg-white p-3 text-xs text-foreground [overflow-wrap:anywhere]'>
                  <code>{linkHtml}</code>
                </pre>
                <CopyCitationButton text={linkHtml} label='Copy link HTML' />
                <p className='mt-5 text-sm'>
                  Data file:{' '}
                  <a href={COST_INDEX_CSV_PATH} download className={`${link} font-medium`}>
                    download the CSV
                  </a>{' '}
                  ({findings.total} rows, one per city, with every source URL and the city&rsquo;s own
                  wording).
                </p>
              </section>

              {/* ---------- Sources ---------- */}
              <section aria-labelledby='sources'>
                <h2 id='sources' className='text-2xl font-bold text-foreground mb-4 tracking-tight scroll-mt-24'>
                  Sources
                </h2>
                <p className='mb-3 text-sm'>
                  {pageSources.length} documents, each with the date it was checked. City permit sources
                  were checked on the date shown in that city&rsquo;s row.
                </p>
                <ol className='list-decimal space-y-1.5 pl-6 text-sm [overflow-wrap:anywhere]'>
                  {pageSources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target='_blank' rel='noopener noreferrer' className={link}>
                        {source.label}
                      </a>{' '}
                      &mdash; checked {formatTrustDate(source.verifiedAt)}
                    </li>
                  ))}
                </ol>
              </section>

              <p className='text-sm text-foreground/70'>
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
            </div>

            <div className='max-w-3xl'>
              <SolarInquiry variant='bill' topic='California solar cost index: permit and utility check' />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
