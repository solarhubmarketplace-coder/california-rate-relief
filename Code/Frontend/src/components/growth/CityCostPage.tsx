import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Byline } from '@/components/trust/Byline';
import { TocRail, RAIL_GRID } from '@/components/trust/TocRail';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { BillComparison } from '@/components/growth/BillComparison';
import { LocalProjectGuidance } from '@/components/growth/LocalProjectGuidance';
import { CitySiblingLinks, NearbyCostCities } from '@/components/growth/NearbyCostCities';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { RelatedGuides, type RelatedGuideLink } from '@/components/shared/RelatedGuides';
import { StatewideCostBenchmark } from '@/components/growth/StatewideCostBenchmark';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import {
  CEC_SERVICE_TERRITORY_SOURCE_0923,
  COST_TEMPLATE_CSLB_VERIFIED,
  cityCostPath,
  type CityCostRow,
} from '@/data/city-cost-data';
import {
  RATE_TRACKER_PATH,
  formatAverageRateCents,
  getUtilityRate,
} from '@/data/utility-rate-tracker';
import { growthCities } from '@/data/growth-cities';
import { getCityBySlug } from '@/data/cities-data';
import { companiesCityHref, hasCompaniesCityPage } from '@/lib/canonical-redirects';
import { cityQuickCheckUtility, costPageModified, costPageSeo } from '@/lib/city-pages';

/** The City of Corona's own statement of whom its electric utility serves. */
const CORONA_ELECTRIC_SERVICE_URL =
  'https://www.coronaca.gov/departments/utilities/customer-care/services/electric-service';

// Per-city extra links where a city's cost page draws impressions for a query
// another page answers (topical-authority wave 2026-09-23, CREATE_DEDICATED
// holder links). Most cities have none.
const CITY_COST_EXTRA_LINKS: Record<string, RelatedGuideLink[]> = {
  'san-diego': [
    {
      href: '/blog/solar-resources',
      label: 'Official California solar resources',
      note: 'production data, license checks, net billing rules and incentives, from the agencies that publish them',
    },
  ],
};

// =============================================================================
// CityCostPage — the template behind /solar-cost/[city]
//
// The query family is "solar panel cost <city>" / "how much does solar cost in
// <city>". Page one for those terms is full of price ranges nobody sourced.
// This page answers the question the other way round: it states plainly that no
// reliable public price exists for the city, then explains, with a source for
// every claim, the things that actually move the number for that address — the
// utility that bills it, the city's own permit rules, the physical work the roof
// and the main panel may force, and the state rules on buying versus
// third-party ownership and on property tax.
//
// HARD CONSTRAINTS
//   - No price, no range, no per-watt figure, no payback period. Not anywhere.
//     The mechanisms are described; the arithmetic is the reader's, on their own
//     quote and their own bill.
//   - The utility rate is IMPORTED from src/data/utility-rate-tracker.ts. It is
//     never typed into this file. (Strategy of record §7.2-§7.3.)
//   - California Rate Relief is a private solar referral service and not a
//     contractor. No installer is named, nothing is described as ours, and
//     nothing is called free.
//   - Rows reach this component only through the gate in city-cost-data.ts, so
//     every field rendered below already carries a source and a fetched date.
// =============================================================================

export interface CityCostSource {
  label: string;
  url: string;
  /** ISO date this source was fetched and the sentence checked against it. */
  verifiedAt: string;
}

const STATE_SOURCES: CityCostSource[] = [
  {
    label: '26 U.S.C. §25D — Residential clean energy credit (§25D(h) termination; §25D(e)(8)(A) timing), U.S. House Office of the Law Revision Counsel',
    url: 'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A25D+edition%3Aprelim%29',
    verifiedAt: '2026-09-17',
  },
  {
    label: '26 U.S.C. §48E — Clean electricity investment credit (§48E(i) leasing denial)',
    url: 'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'CPUC, California Solar Consumer Protection Guide (lease, PPA, loan and cash compared; upfront costs)',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
    verifiedAt: '2026-09-23',
  },
  {
    label: 'California Business and Professions Code §7169 — solar energy system disclosure document',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'CSLB, Solar Requirements (reproduces §7169; disclosure and Supporting Information forms)',
    url: 'https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx',
    verifiedAt: COST_TEMPLATE_CSLB_VERIFIED,
  },
  {
    label: 'CSLB licence and home improvement salesperson lookup',
    url: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx',
    verifiedAt: COST_TEMPLATE_CSLB_VERIFIED,
  },
  {
    label: 'California Revenue and Taxation Code §73 — active solar energy system new construction exclusion (§73(a), §73(i)(1)-(2))',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=73',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'California State Board of Equalization, Active Solar Energy System Exclusion',
    url: 'https://boe.ca.gov/proptaxes/active-solar-energy-system/',
    verifiedAt: '2026-09-17',
  },
  {
    label: 'BOE Letter to Assessors No. 2024/031 (26 August 2024) — §73 sunset and construction in progress',
    url: 'https://www.boe.ca.gov/proptaxes/pdf/lta24031.pdf',
    verifiedAt: '2026-09-17',
  },
  // 2026-09-23: the signed guide itself (published October 2025). Its
  // affirmation page is where the escalation rule for bill-savings estimates
  // is stated; appended rather than inserted so the indexes above hold.
  {
    label: 'CPUC, California Solar Consumer Protection Guide, PDF published October 2025 ("Watch Out for False Claims"; customer affirmations, page 6)',
    url: 'https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/solar-guide/2025-versions/2025-updates/solarguide26_040626_simple.pdf',
    verifiedAt: '2026-09-23',
  },
  // 2026-09-23: the two state rules that bound every city's permit line.
  {
    label: 'California Government Code §66015 — residential solar permit fee limit (§66015(a), (e); amended by AB 1132, Stats. 2023, Ch. 357; in effect until January 1, 2034)',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=66015',
    verifiedAt: '2026-09-23',
  },
  {
    label: 'California Government Code §65850.52 — online automated solar permitting such as SolarAPP+ (§65850.52(b), (c))',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52',
    verifiedAt: '2026-09-23',
  },
];

const GOV_66015 = STATE_SOURCES[STATE_SOURCES.length - 2];
const GOV_65850_52 = STATE_SOURCES[STATE_SOURCES.length - 1];

const link = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

// Titles, descriptions and the H1 now come from costPageSeo() in
// src/lib/city-pages.ts, which also decides whether this page or the city's
// /solar-companies page leads with "Solar Panels in <city>".

// The URL shape now lives with the data (src/data/city-cost-data.ts) so the
// /solar-cost index can build links without importing this template. Re-exported
// here because the city route imports it from this module.
export { cityCostPath } from '@/data/city-cost-data';

/** The tracker-rate sentence, for a city where the utility serves only part of it. */
function utilityRateSentence(
  utility: ReturnType<typeof getUtilityRate>,
  rate: string,
  lead: string,
): string {
  if (utility.averageResidentialRateCents === null) {
    return `${lead}no comparable average residential rate is published for ${utility.name}: ${utility.basisNote}.`;
  }
  return `${lead}its current average residential rate is ${rate}, as of ${utility.asOf}, per ${utility.sourceLabel}. That rate is ${utility.basisNote}.`;
}

function formatVerified(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const month = months[Number(match[2]) - 1];
  return month ? `${month} ${Number(match[3])}, ${match[1]}` : iso;
}

export function CityCostPage({ row }: { row: CityCostRow }) {
  const utility = getUtilityRate(row.utilityKey);
  const hasAddressSpecificUtility = row.slug === 'corona';
  // 2026-09-22: a city that more than one utility serves carries a sourced
  // note naming the others. The tracker utility is then described as serving
  // part of the city, and nothing downstream pre-selects it for the reader.
  const split = row.utilitySplit;
  const utilityForTools = hasAddressSpecificUtility || split ? '' : utility.name;
  const path = cityCostPath(row.slug);
  const canonicalUrl = `https://ratereliefca.com${path}`;
  const seo = costPageSeo(row);
  const description = seo.description;
  const updated = costPageModified(row);
  const rate = formatAverageRateCents(utility);

  // 2026-09-22: cross-link to the companion /solar-companies/<city> page when
  // one is actually live — not redirected, and present in growthCities or
  // CITIES so the route renders instead of 404ing. See the dated comment
  // block in canonical-redirects.ts for why some of these are live again.
  const companiesPageIsLive =
    hasCompaniesCityPage(row.slug) &&
    (Boolean(growthCities[row.slug]) || Boolean(getCityBySlug(row.slug)));

  const sources: CityCostSource[] = [
    {
      label: `${row.city} solar permitting — ${row.permitFeeSource}`,
      url: row.permitUrl,
      verifiedAt: row.sourcesFetchedAt,
    },
    ...(row.permitSources ?? []),
    ...(row.ccaSource ? [row.ccaSource] : []),
    {
      label: utility.sourceUrl
        ? `${utility.name} average residential rate — ${utility.sourceLabel}`
        : `${utility.name} — ${utility.sourceLabel}`,
      url: utility.sourceUrl ?? `https://ratereliefca.com${RATE_TRACKER_PATH}`,
      verifiedAt: utility.fetchedAt,
    },
    ...(split ? split.sources : []),
    // 2026-09-24: the city's own rate section, when it has one.
    ...(row.localRates ? row.localRates.sources : []),
    // 2026-09-23: the City now calls its utility the Utilities Department;
    // the CEC layer (re-queried that day) shows how its area sits inside SCE's.
    ...(hasAddressSpecificUtility
      ? [
          {
            label: 'City of Corona Utilities Department — Electric Service',
            url: CORONA_ELECTRIC_SERVICE_URL,
            verifiedAt: '2026-09-23',
          },
          CEC_SERVICE_TERRITORY_SOURCE_0923,
        ]
      : []),
    ...STATE_SOURCES,
  ];

  const faqs = [
    {
      question: `How much does solar cost in ${row.city}?`,
      answer:
        `No source publishes a reliable price for a solar system in ${row.city}. ` +
        'Under Business and Professions Code section 7169(b), the figure that governs your project has to be handed to you in writing: the solar energy system disclosure document, on the front or cover page of the contract, in boldface 16-point type, carrying the total cost and payments for the system including financing costs. Ask for that document before comparing anything.',
    },
    {
      question: `Is solar worth it in ${row.city}?`,
      // 2026-09-23: rewritten against the October 2025 guide. It no longer
      // states a fixed escalation cap; it says an estimate outside the
      // disclosure document may use, at most, the CPUC's calculated average.
      answer:
        `That depends on the bill the system would offset and on the contract you are offered, not on the city. The CPUC's California Solar Consumer Protection Guide says bill savings estimates do not guarantee savings, and a homeowner signing it affirms that any savings estimate outside the disclosure document used, at most, the average electricity rate escalation the CPUC calculates, and that the installer will say which rate it used. Compare your billed usage history from ${hasAddressSpecificUtility || split ? 'the utility named on your bill' : utility.name} against that estimate, and check that the estimate's assumptions match your household.`,
    },
    {
      question: `Can I go solar in ${row.city} without paying upfront?`,
      answer:
        'Often, yes, but that is a payment structure, not a lower cost. The CPUC\'s Solar Consumer Protection Guide lists "little or no upfront costs" for leases, power purchase agreements and PACE financing, and for a purchase paid with a loan. Under a lease or PPA the solar provider owns the system on your roof and you make scheduled monthly payments, typically over a 20 to 25 year contract, and the CPUC says those payments typically rise 1 to 3 percent a year under an escalation clause. With a loan you own the system and repay it with interest. The same guide warns that "solar energy is rarely free." Compare the total cost and payments on each contract\'s disclosure cover page, not the first monthly figure.',
    },
    ...(row.extraFaqs ?? []),
    {
      question: `Do I need a permit for solar in ${row.city}?`,
      answer:
        `Yes. A rooftop solar installation is permitted construction, and ${row.city} publishes its own fee schedule and filing process: ${row.permitFeeNote} Online filing: ${row.permitOnline} Verified ${formatVerified(row.sourcesFetchedAt)}.`,
    },
    ...(row.localRates ? [row.localRates.faq] : []),
    {
      question: `Which utility serves ${row.city}?`,
      answer:
        hasAddressSpecificUtility
          ? "The City of Corona's own electric utility, run by its Utilities Department, provides bundled service to residents and businesses within the City's electric service area, and its customers do not receive an electric bill from Southern California Edison. The California Energy Commission's service-territory map shows that area as a small part of Corona inside SCE's territory. Check the utility named on your actual bill before using a rate, a bill comparison, or a project estimate. Sources: City of Corona Utilities Department, Electric Service, and the CEC service-territory map, both verified September 23, 2026."
          : split
            ? `${split.note} ${utilityRateSentence(utility, rate, `Where ${utility.name} serves the address, `)}`
            : utility.averageResidentialRateCents === null
              ? `${utility.longName} (${utility.name}). No comparable average residential rate is published for ${utility.name}: ${utility.basisNote}. Source: ${utility.sourceLabel}, checked ${formatVerified(utility.fetchedAt)}.`
              : `${utility.longName} (${utility.name}). Its current average residential rate is ${rate}, as of ${utility.asOf}, per ${utility.sourceLabel}, checked ${formatVerified(utility.fetchedAt)}. That rate is ${utility.basisNote}.`,
    },
  ];

  return (
    <PublicLayout
      breadcrumbLabel={`Solar cost in ${row.city}`}
      breadcrumbParent={{ label: 'Solar cost by city', href: '/solar-cost' }}
    >
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline={seo.h1}
        url={canonicalUrl}
        dateModified={updated}
        description={description}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      {/* Top spacing is tighter on phones so the quick check below the byline
          fits a 390x844 screen whole (2026-09-23); md and up unchanged. */}
      <main className='pb-16 pt-8 md:pt-16 bg-background'>
        <div className='container mx-auto px-4'>
          {/* Article column plus the desktop "On this page" rail (design pass 2). */}
          <div className={`mx-auto max-w-6xl ${RAIL_GRID}`}>
          <article className='min-w-0 max-w-3xl'>
            {/* Same trail as the BreadcrumbList from PublicLayout above
                (Home > Solar cost by city > city, Block 5 §5.6). */}
            <nav aria-label='Breadcrumb' className='mb-4 md:mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span aria-hidden='true'>/</span>
              <Link href='/solar-cost' className='hover:text-primary'>Solar cost by city</Link><span aria-hidden='true'>/</span>
              <span className='text-foreground' aria-current='page'>Solar cost in {row.city}</span>
            </nav>

            <header className='mb-6 md:mb-8'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                {row.county} &middot; Cost drivers
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                {seo.h1}
              </h1>
              <Byline updated={updated} dateLabel='Updated' sourceCount={sources.length} sourcesHref='#sources'>
                <span className='inline-flex items-center gap-1'><MapPin className='h-4 w-4' aria-hidden='true' />{row.city}, {row.county}</span>
              </Byline>
            </header>

            {/* Bill-first step, above the fold on a phone. It sends nothing; it
                opens the inquiry form at the end of the page at step 2. The
                utility is pre-selected only for a single-utility city. */}
            <HeroQuickCheck
              compact
              utility={cityQuickCheckUtility('cost', row.slug)}
              topic={`Solar project in ${row.city}`}
              className='mb-8'
            />

            <div id='city-cost-body' className='prose prose-slate max-w-none [&_h2]:scroll-mt-24'>
              {/* ---------- Short answer: no price, and why ---------- */}
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                There is no reliable public price for a solar system in {row.city}, and this page
                does not print one. Every figure a homeowner is quoted turns on the size of the
                system, the roof it goes on, the electrical work the house needs and the contract
                structure &mdash; and the one document that is required to state the total cost for
                a specific address is the contract&apos;s own disclosure, not a web page. What this
                page does instead is name the things that genuinely differ between {row.city} and
                the next city over, each with its source: the utility that bills the address and
                what that utility currently charges, the city&apos;s own permit fee and filing
                process, and the California rules on ownership and on property tax that apply to
                the purchase either way. Bring those to a quote and the quote becomes checkable.
              </p>
              <p className='text-sm text-foreground/70 mb-8'>
                California Rate Relief is a private solar referral service. It is not a contractor,
                it does not install anything, and it does not estimate what a system would cost you.
              </p>

              {/* 2026-09-23: this city's other pages, one per question, right
                  after the answer. Installer queries for a city land here when
                  it has no companies page; the first link sends them to the
                  page built for that question (CREATE_DEDICATED items). The
                  rate tracker is linked in the utility section below, so it is
                  left out of the statewide line here. */}
              <CitySiblingLinks
                slug={row.slug}
                type='cost'
                omitStatewide={[RATE_TRACKER_PATH]}
                className='mb-8'
              />

              <StatewideCostBenchmark cityName={row.city} />

              {/* ---------- Utility ---------- */}
              <h2 id='utility' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                {hasAddressSpecificUtility
                  ? 'Confirm the utility on this address'
                  : split
                    ? `Your utility: ${utility.name} or ${split.others}`
                    : `Your utility: ${utility.name}`}
              </h2>
              {hasAddressSpecificUtility ? (
                <>
                  <p>
                    Corona runs its own electric utility. The City&apos;s Utilities Department
                    provides bundled service to residents and businesses within the City&apos;s
                    electric service area, and those customers do not get an electric bill from
                    Southern California Edison. The California Energy Commission&apos;s
                    service-territory map shows that area as a small part of Corona inside
                    SCE&apos;s territory. Read the utility name on the actual bill before treating
                    a City utility schedule, an SCE schedule, or an online estimate as yours.
                  </p>
                  <p className='text-foreground/60 text-sm'>
                    Sources:{' '}
                    <a href={CORONA_ELECTRIC_SERVICE_URL} target='_blank' rel='noopener noreferrer' className={link}>
                      City of Corona Utilities Department — Electric Service
                    </a>
                    ;{' '}
                    <a href={CEC_SERVICE_TERRITORY_SOURCE_0923.url} target='_blank' rel='noopener noreferrer' className={link}>
                      {CEC_SERVICE_TERRITORY_SOURCE_0923.label}
                    </a>
                    . Verified September 23, 2026.
                  </p>
                </>
              ) : split ? (
                <>
                  <p>{split.note}</p>
                  <p>
                    Where {utility.longName} ({utility.name}) serves the address:
                    {utility.averageResidentialRateCents === null ? (
                      <> no comparable average residential rate is published for {utility.name} on
                      our tracker: {utility.basisNote}. Read your own tariff schedule and your own
                      bill instead of an average.</>
                    ) : (
                      <> its current average residential rate is <strong>{rate}</strong>, as of{' '}
                      {utility.asOf}. That figure is {utility.basisNote}.</>
                    )}
                  </p>
                  <p className='text-foreground/60 text-sm'>
                    Sources:{' '}
                    {split.sources.map((source, index) => (
                      <span key={source.url}>
                        {index > 0 ? '; ' : ''}
                        <a href={source.url} target='_blank' rel='noopener noreferrer' className={link}>
                          {source.label}
                        </a>
                      </span>
                    ))}
                    . Verified {formatVerified(split.sources[0].verifiedAt)}.
                  </p>
                </>
              ) : (
                <p>
                  {row.city} is billed by {utility.longName} ({utility.name}).
                  {utility.averageResidentialRateCents === null ? (
                    <> No comparable average residential rate is published for {utility.name} on our
                    tracker: {utility.basisNote}. Read your own tariff schedule and your own bill
                    instead of an average.</>
                  ) : (
                    <> Its current average residential rate is <strong>{rate}</strong>, as of{' '}
                    {utility.asOf}. That figure is {utility.basisNote}.</>
                  )}
                </p>
              )}
              {row.cca ? (
                <p>
                  Generation for many addresses in {row.city} is supplied by {row.cca} rather than by
                  {' '}{utility.name}, while {utility.name} still bills the delivery side. Check which
                  generation line appears on your own bill before comparing any estimate.
                  {row.ccaSource ? (
                    <span className='text-foreground/60 text-sm'>
                      {' '}Source:{' '}
                      <a href={row.ccaSource.url} target='_blank' rel='noopener noreferrer' className={link}>
                        {row.ccaSource.label}
                      </a>
                      , verified {formatVerified(row.ccaSource.verifiedAt)}.
                    </span>
                  ) : null}
                </p>
              ) : null}
              {!hasAddressSpecificUtility && <p className='text-foreground/60 text-sm'>
                {utility.sourceUrl ? (
                  <>
                    Source:{' '}
                    <a href={utility.sourceUrl} target='_blank' rel='noopener noreferrer' className={link}>
                      {utility.sourceLabel}
                    </a>
                    . Fetched {formatVerified(utility.fetchedAt)}.{' '}
                  </>
                ) : (
                  <>{utility.sourceLabel}. Checked {formatVerified(utility.fetchedAt)}. </>
                )}
                This page pulls the figure from our own rate record rather than restating it, so it
                cannot drift from the tracker &mdash;{' '}
                <Link href={RATE_TRACKER_PATH} className={link}>see the tracker</Link> for the rate
                history, the fixed charges and the per-row sources behind it.
              </p>}
              {!hasAddressSpecificUtility && <p>
                Why the rate matters to a cost question at all: the rate is what the system is worth
                against, not what it costs. A higher rate does not make a system cheaper to install
                in {row.city}; it changes how quickly the same install offsets a bill. Those are two
                different questions and quotes routinely blur them.
              </p>}

              {/* ---------- Local rates (2026-09-24) ----------
                  Only for a city whose /solar-savings bill page redirects
                  here. Every figure comes from the row's own sources, each
                  with the tariff's effective date in the text. */}
              {row.localRates ? (
                <>
                  <h2 id='rates' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                    {row.localRates.heading}
                  </h2>
                  {row.localRates.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                  <p className='text-foreground/60 text-sm'>
                    Sources:{' '}
                    {row.localRates.sources.map((source, index) => (
                      <span key={source.url}>
                        {index > 0 ? '; ' : ''}
                        <a href={source.url} target='_blank' rel='noopener noreferrer' className={link}>
                          {source.label}
                        </a>
                      </span>
                    ))}
                    . Verified {formatVerified(row.localRates.sources[0].verifiedAt)}.
                  </p>
                </>
              ) : null}

              {/* ---------- Permits ---------- */}
              <h2 id='permits' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                {row.city} permits
              </h2>
              <p>
                Rooftop solar is permitted construction, and the permit is a line a contractor either
                passes through to you or absorbs. It is worth knowing what the city itself charges so
                you can tell which of those two a quote is doing.
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>What {row.city} publishes:</strong> {row.permitFeeNote}</li>
                <li><strong>Filing online:</strong> {row.permitOnline}</li>
                <li>
                  <strong>Source:</strong>{' '}
                  <a href={row.permitUrl} target='_blank' rel='noopener noreferrer' className={link}>
                    {row.permitFeeSource}
                  </a>
                  . Fetched {formatVerified(row.sourcesFetchedAt)}.
                  {(row.permitSources ?? []).map((source) => (
                    <span key={source.url}>
                      {' '}Also:{' '}
                      <a href={source.url} target='_blank' rel='noopener noreferrer' className={link}>
                        {source.label}
                      </a>
                      , fetched {formatVerified(source.verifiedAt)}.
                    </span>
                  ))}
                </li>
              </ul>
              {/* 2026-09-23: the state limits every figure above is measured
                  against. Both statutes were read in full that day. */}
              <p>
                Two state rules sit behind whatever {row.city} publishes. Under{' '}
                <a href={GOV_66015.url} target='_blank' rel='noopener noreferrer' className={link}>
                  Government Code section 66015
                </a>
                , a city&apos;s residential permit fee &mdash; defined as the sum of all the charges
                it levies for a solar application on a single- or two-family home &mdash; may not
                exceed the reasonable cost of the service, and for a photovoltaic system may not
                exceed $450 plus $15 for each kilowatt above 15 kW, unless the city adopts a written
                finding with substantial evidence that its reasonable cost is higher. Under{' '}
                <a href={GOV_65850_52.url} target='_blank' rel='noopener noreferrer' className={link}>
                  Government Code section 65850.52
                </a>
                , cities with more than 50,000 people had to offer an online, automated permitting
                platform such as SolarAPP+ by September 30, 2023, and smaller cities by September
                30, 2024, for systems up to 38.4 kW AC and batteries paired with them. Cities under
                5,000 people, and counties under 150,000 along with the cities inside them, are
                exempt, and a design SolarAPP+ cannot process can still go through ordinary review.
                Verified {formatVerified(GOV_66015.verifiedAt)}.
              </p>
              <p>
                Ask for the permit and inspection scope in writing, and ask who pulls the permit. A
                quote that leaves permitting out of its scope is not the same quote as one that
                includes it, whatever the two bottom lines look like side by side.
              </p>

              <LocalProjectGuidance citySlug={row.slug} />

              {/* ---------- Cost drivers ---------- */}
              <h2 id='drivers' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                What drives the cost of a system here
              </h2>
              <p>
                These are mechanisms, not figures. Each one changes the scope of the job, which is
                what a price is attached to. Work through them against your own house and you will
                know which parts of two quotes are not comparable. For the statewide numbers behind
                them, see our{' '}
                <Link href='/solar-panels-california' className={link}>
                  California solar panel cost and sizing guide
                </Link>
                ; for how the payment structure changes the total, see{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={link}>
                  paying cash versus a loan, lease or PPA
                </Link>
                .
              </p>
              <ul className='list-disc pl-6 space-y-3'>
                <li>
                  <strong>System size versus your bill.</strong> Size follows the usage you actually
                  want to offset, which comes off twelve months of billed kWh &mdash; not off square
                  footage and not off a neighbour&apos;s system. A larger array is a larger job:
                  more modules, more racking, more labour. Sizing a system past the usage it offsets
                  adds scope without adding much to the bill it replaces.
                </li>
                <li>
                  <strong>The roof.</strong> Covering material, pitch, plane count, framing condition
                  and remaining life all change the labour and the attachment method. Tile and
                  low-slope roofs are handled differently from composition shingle. A roof near the
                  end of its life raises a sequencing question, because removing and reinstalling an
                  array later is its own job &mdash; see{' '}
                  <Link href='/blog/is-my-roof-good-for-solar-california' className={link}>
                    whether your roof is suited to solar
                  </Link>.
                </li>
                <li>
                  <strong>Shade.</strong> Trees, neighbouring structures, chimneys and vents reduce
                  what a given module produces, and the response is usually design: fewer usable
                  planes, module-level electronics, or a different layout. Shade therefore changes
                  both the equipment list and the production the system is sold on.
                </li>
                <li>
                  <strong>Main panel and electrical work.</strong> The point of interconnection has
                  to accept the new circuit. Where the existing main service panel cannot, the job
                  grows to include a panel upgrade or a derate, plus its own permit and inspection.
                  This is one of the largest scope differences between two otherwise identical
                  houses on the same street.
                </li>
                <li>
                  <strong>Battery, or no battery.</strong> A battery is a separate system with its own
                  equipment, its own interconnection and its own installation work. It answers a
                  different question from the solar array &mdash; what happens during an outage, and
                  when energy is used rather than how much is produced. Decide whether you are buying
                  it, and price it as its own line, rather than letting it ride inside a single figure.
                </li>
              </ul>

              {/* ---------- Buying vs TPO ---------- */}
              <h2 id='ownership' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Buying vs third-party ownership in 2026
              </h2>
              <p>
                The federal picture changed and it changed for everyone, {row.city} included.{' '}
                <strong>
                  Section 25D(h) of the Internal Revenue Code provides that the residential clean
                  energy credit &ldquo;shall not apply with respect to any expenditures made after
                  December 31, 2025,&rdquo; and section 25D(e)(8)(A) treats an expenditure as made
                  when the original installation of the item is completed &mdash; so a purchase whose
                  installation completes in 2026 carries no federal residential credit, whatever date
                  the contract was signed.
                </strong>{' '}
                (<a href={STATE_SOURCES[0].url} target='_blank' rel='noopener noreferrer' className={link}>26 U.S.C. §25D</a>,
                verified {formatVerified(STATE_SOURCES[0].verifiedAt)}. This is not tax advice; a tax
                professional should confirm your own position.)
              </p>
              <p>
                Under a lease or a power purchase agreement the equipment belongs to the provider, and
                any credit the provider claims is a business credit under section 48E. That is the
                provider&apos;s tax position, not a resident&apos;s entitlement, and it does not
                establish savings. On the statutory text, section 48E(i)&apos;s denial for leasing
                arrangements reaches property described in section 25D(d)(1) and (d)(4) &mdash; solar
                water heating and small wind &mdash; not (d)(2), which is residential solar electric.
                (<a href={STATE_SOURCES[1].url} target='_blank' rel='noopener noreferrer' className={link}>26 U.S.C. §48E</a>,
                verified {formatVerified(STATE_SOURCES[1].verifiedAt)}.) So the honest comparison is
                between total cost and payments on one side and a payment schedule with an escalator
                on the other &mdash; which is exactly what section 7169(b) requires to be disclosed on
                the front or cover page of the contract, in boldface 16-point type, including
                financing costs.
              </p>
              <p>
                Four pages go further into the parts of that comparison people get caught by:{' '}
                <Link href='/blog/is-it-better-to-buy-or-lease-solar-panels-california' className={link}>
                  buying versus leasing in California
                </Link>,{' '}
                <Link href='/blog/free-solar-panels-california#no-money-down' className={link}>
                  what a no-upfront-cost offer actually costs
                </Link>,{' '}
                <Link href='/solar-problems/solar-dealer-fees-explained' className={link}>
                  dealer fees
                </Link>{' '}and{' '}
                <Link href='/solar-problems/solar-escalator-clause-explained' className={link}>
                  escalator clauses
                </Link>.
              </p>

              {/* ---------- The company behind a quote ---------- */}
              {/* 2026-09-22. Every statement below was checked that day against
                  the two CSLB pages it cites (STATE_SOURCES[4] and [5]). No
                  installer is named, ranked or recommended. */}
              <h2 id='company' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Checking the solar company behind a {row.city} quote
              </h2>
              <p>
                California Rate Relief does not rank or recommend installers. Whoever you get quotes
                from, three checks come from the state rather than from the company:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  <strong>The license.</strong> The Contractors State License Board&apos;s{' '}
                  <a href={STATE_SOURCES[5].url} target='_blank' rel='noopener noreferrer' className={link}>
                    Check a License
                  </a>{' '}
                  page looks up a contractor license or a home improvement salesperson registration,
                  including complaint disclosure. Look up the company on each quote, and the person
                  who sold it.
                </li>
                <li>
                  <strong>The front page of the contract.</strong> Section 7169 requires the solar
                  energy system disclosure document on the front or cover page of every solar
                  contract, stating the total cost and payments including financing costs, how and
                  to whom you can complain, and your right to the applicable cancellation period
                  under Business and Professions Code section 7159.
                </li>
                <li>
                  <strong>The supporting pages.</strong> The supporting information that may follow
                  that page includes the salesperson&apos;s calculations of how many panels you need
                  and how much energy they will generate, and the company&apos;s contractor&apos;s
                  license number. If a quote leaves them out, ask for them before comparing it.
                </li>
              </ul>
              <p className='text-foreground/60 text-sm'>
                Sources:{' '}
                <a href={STATE_SOURCES[5].url} target='_blank' rel='noopener noreferrer' className={link}>CSLB, Check a License</a>{' '}and{' '}
                <a href={STATE_SOURCES[4].url} target='_blank' rel='noopener noreferrer' className={link}>CSLB, Solar Requirements</a>.
                Verified {formatVerified(COST_TEMPLATE_CSLB_VERIFIED)}.
              </p>

              {/* ---------- Property taxes ---------- */}
              <h2 id='property-tax' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Property taxes
              </h2>
              <p>
                <strong>
                  California Revenue and Taxation Code section 73(a) provides that
                  &ldquo;newly constructed&rdquo; does not include the construction or addition of a
                  qualifying active solar energy system, so installing one does not by itself increase
                  the existing assessment on your {row.city} home &mdash; and the Board of
                  Equalization is explicit that this is an exclusion from new construction, not an
                  exemption, meaning it removes nothing from the roll and lowers no existing tax bill.
                </strong>
              </p>
              <p>
                The date matters. Section 73(i)(1) keeps the section in effect only until January 1,
                2027; section 73(i)(2) preserves what has already been granted, so a system that
                qualifies before that date stays excluded afterwards until there is a change in
                ownership. SB 710 (Stats. 2025, Ch. 328) made January 1, 2027 the date the exclusion
                becomes inoperative. The Board of Equalization reads the sunset as covering new
                construction &ldquo;in progress or completed before January 1, 2027,&rdquo; while
                cautioning that completed construction is assessable on the lien date and on the day
                of completion &mdash; so timing questions about a project that straddles the date
                belong with your county assessor, not with a contractor.
              </p>
              <p className='text-foreground/60 text-sm'>
                Sources:{' '}
                <a href={STATE_SOURCES[6].url} target='_blank' rel='noopener noreferrer' className={link}>Rev. &amp; Tax. Code §73</a>,{' '}
                <a href={STATE_SOURCES[7].url} target='_blank' rel='noopener noreferrer' className={link}>BOE, Active Solar Energy System Exclusion</a>{' '}and{' '}
                <a href={STATE_SOURCES[8].url} target='_blank' rel='noopener noreferrer' className={link}>BOE LTA 2024/031</a>.
                Verified {formatVerified(STATE_SOURCES[6].verifiedAt)}.
              </p>

              {/* ---------- Tool ---------- */}
              <h2 id='bill-tool' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Start from your own bill, not from an average
              </h2>
              <p>
                A quote is only checkable against real usage. This compares two of your own{' '}
                {utilityForTools || 'utility'} bills on the same basis &mdash; billing days, kWh and charges &mdash;
                so you can see what actually moved before anyone tells you what a system would do
                about it. Nothing is sent anywhere; the arithmetic runs in your browser.
              </p>
              <div className='not-prose my-8'>
                <BillComparison utilityName={utilityForTools || 'utility'} />
              </div>

              {/* ---------- FAQ ---------- */}
              <h2 id='faq' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Frequently asked questions
              </h2>
              <div className='space-y-6'>
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>{faq.question}</h3>
                    <p className='text-foreground/80 m-0'>{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* ---------- Sources ---------- */}
              <h2 id='sources' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>
                Sources
              </h2>
              <ul className='list-disc pl-6 space-y-2 text-sm [overflow-wrap:anywhere]'>
                {sources.map((source) => (
                  <li key={`${source.url}-${source.label}`}>
                    <a href={source.url} target='_blank' rel='noopener noreferrer' className={link}>
                      {source.label}
                    </a>{' '}
                    &mdash; {source.url} &mdash; verified {formatVerified(source.verifiedAt)}
                  </li>
                ))}
              </ul>
              <p className='text-foreground/60 text-sm'>
                Related reference pages on this site:{' '}
                <Link href={RATE_TRACKER_PATH} className={link}>California utility rate tracker</Link>,{' '}
                <Link href='/solar-problems/solar-dealer-fees-explained' className={link}>dealer fees</Link>,{' '}
                <Link href='/solar-problems/solar-escalator-clause-explained' className={link}>escalator clauses</Link>,{' '}
                 <Link href='/blog/is-it-better-to-buy-or-lease-solar-panels-california' className={link}>buy or lease</Link>,{' '}
                 <Link href='/blog/is-my-roof-good-for-solar-california' className={link}>is my roof suited to solar</Link>.
              </p>
            </div>

            {companiesPageIsLive && (
              <Link
                href={companiesCityHref(row.slug)}
                className="group not-prose mt-10 block rounded-xl border border-primary/25 bg-primary/5 p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex items-center gap-2 font-semibold text-foreground">
                  Compare solar companies in {row.city}
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  See who actually serves {row.city} and what each written proposal should include.
                </span>
              </Link>
            )}

            {CITY_COST_EXTRA_LINKS[row.slug] && (
              <RelatedGuides heading={`More for ${row.city} homeowners`} links={CITY_COST_EXTRA_LINKS[row.slug]} />
            )}

            <NearbyCostCities row={row} />

            <HubSpokeLinks hub='city_cost' currentPath={path} max={6} title='Solar cost in other California cities' />

            <SolarInquiry
              variant='bill'
              utility={utilityForTools}
              topic={`Solar project in ${row.city}`}
            />
          </article>
          <TocRail rootId='city-cost-body' />
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
