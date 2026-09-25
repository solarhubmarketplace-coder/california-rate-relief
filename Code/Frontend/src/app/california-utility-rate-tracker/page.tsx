import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SRC } from '@/data/rate-sources';
import { Calendar, Clock } from 'lucide-react';
import {
  Q2_2026_URL,
  Q1_2026_URL,
  Q4_2025_URL,
  Q3_2025_URL,
  Q2_2025_URL,
  DECISION_24_05_028_URL,
  SMUD_RATE_GUIDE_URL,
  SMUD_RESIDENTIAL_RATES_URL,
  LADWP_STALE_PDF_URL,
  LADWP_RESIDENTIAL_RATES_URL,
  PAO_REPORTS_INDEX_URL,
  formatAverageRateWithPerKwh,
  getUtilityRate,
} from '@/data/utility-rate-tracker';
import { FACTS, centsFromDollars, formatFactDateShort, usd } from '@/data/facts';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';
import { RateHistoryChart } from '@/components/growth/RateHistoryChart';
import { RATE_HISTORY_SNAPSHOTS } from '@/data/utility-rate-tracker';

// Page-specific driver sources cited in "Why Rates Moved in 2026" and the
// Income-Graduated Fixed Charge section — not rate figures, so they live here
// rather than in the shared data file. Sourced from the 2026-09-22 reviewed
// draft's source ledger (rows 17 and 20).
const SMUD_RATE_FACTSHEET_URL =
  'https://www.smud.org/-/media/Documents/Rate-Information/2026-2027-Rate-Action/0211-25_RatesProposal_Factsheet--F.ashx';
const PGE_BASE_SERVICES_CHARGE_URL =
  'https://www.pge.com/en/account/billing-and-assistance/base-services-charge.html';

// =============================================================================
// California Utility Rate Tracker — /california-utility-rate-tracker
//
// Faithful port of 01_Project_Documents/drafts/
// CA_UTILITY_RATE_TRACKER_DRAFT_2026-09-17.md. Every rate, fixed-charge figure
// and date on this page comes from that draft, each with the draft's own
// source URL and fetched date. Cells the draft marked TODO render as
// "Not sourced" / "Not yet published" text, never a number. The 12-month
// change figures are this page's own calculation from two CPUC Public
// Advocates Office quarterly snapshots — never presented as a CPUC figure.
//
// No solar, savings or "free" claim; no installer name. Reference page only.
// The single CTA below the content is the standing site component.
// =============================================================================

const title = 'California Utility Rate Tracker: PG&E, SCE, SDG&E, SMUD';
const description =
  "See current average residential electric rates for PG&E, SCE, SDG&E and SMUD, verified against CPUC and utility sources on Sept. 22, 2026.";
const canonicalPath = '/california-utility-rate-tracker';
const canonicalUrl = `https://ratereliefca.com${canonicalPath}`;
const datePublished = '2026-09-18';
const lastUpdated = '2026-09-23';
const lastUpdatedDisplay = 'September 23, 2026';
const dataVerifiedDisplay = '22 Sep 2026';
// Figures added on 2026-09-23 (LADWP row and the utility-by-utility answers)
// were fetched and checked that day.
const t3VerifiedDisplay = '23 Sep 2026';
// 2026-09-24 (plan item 5.1): the SMUD and LADWP rows and the fixed-charge
// tiers read from src/data/facts.ts and show that record's checked date.
const smud = FACTS.smudRates.value;
const ladwp = FACTS.ladwpR1a.value;
const igfc = FACTS.fixedChargeDecision.value;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-09-18T00:00:00Z',
    modifiedTime: '2026-09-23T00:00:00Z',
    url: canonicalUrl,
    images: [CRR_SOCIAL_CARD],
  },
};

const sourceLink =
  'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

// Every rate figure, source URL and fetched date on this page now lives in
// src/data/utility-rate-tracker.ts so that any other page needing "the current
// average residential rate" imports it instead of re-typing it.
// See CALIFORNIA_STRATEGY_OF_RECORD_2026-09-17.md §7.2-§7.3.

const datasetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'California Utility Rate Tracker: PG&E, SCE, SDG&E Residential Electric Rates',
  description:
    "Monthly-updated tracker of average residential electric rates, recent rate changes, and fixed charges for California's major investor-owned utilities, sourced from CPUC Public Advocates Office quarterly reports and utility tariff filings.",
  url: canonicalUrl,
  keywords: [
    'California electricity rates',
    'PG&E rates',
    'SCE rates',
    'SDG&E rates',
    'CPUC',
    'utility rate tracker',
  ],
  temporalCoverage: '2025-06/2026-06',
  spatialCoverage: { '@type': 'Place', name: 'California, USA' },
  creator: { '@type': 'Organization', name: 'California Rate Relief', url: 'https://ratereliefca.com' },
  distribution: {
    '@type': 'DataDownload',
    encodingFormat: 'text/html',
    contentUrl: canonicalUrl,
  },
  isBasedOn: [
    Q2_2026_URL,
    Q1_2026_URL,
    Q4_2025_URL,
    Q3_2025_URL,
    Q2_2025_URL,
    DECISION_24_05_028_URL,
  ],
  datePublished,
  dateModified: lastUpdated,
};


// The tracker's questions as data (2026-09-23): FaqBlock renders them and emits
// FAQPage JSON-LD from the same strings. The first five are the original
// methodology questions, unchanged in substance.
const trackerFaqs = [
  {
    question: 'What does “residential average rate” mean?',
    answer:
      'It is total residential class revenue divided by total residential kilowatt-hours sold, a blended average across every residential rate plan, time-of-use period and customer type at a utility. It is not the rate on any one household’s specific tariff.',
  },
  {
    question: 'Does this page include the California Climate Credit?',
    answer:
      'No. The figures on this page exclude the California Climate Credit, a twice-yearly bill credit funded by cap-and-trade allowance revenue, matching the convention the CPUC Public Advocates Office itself uses for these figures.',
  },
  {
    question: 'Why is the 12-month change on this page not a CPUC-published figure?',
    answer:
      'The Public Advocates Office publishes 3-year, 5-year and 10-year change figures, not a 1-year figure. This page calculates its own 12-month change from two officially sourced quarterly snapshots and shows the arithmetic, so it stays auditable and is never mistaken for a CPUC-stated number.',
  },
  {
    question: 'Why isn’t there a Q3 2026 row in the rate-history table yet?',
    answer:
      `As of ${dataVerifiedDisplay}, the CPUC Public Advocates Office had not yet published a Q3 2026 Electric Rates Report. Its cadence has been to publish roughly one month after quarter-end, so a Q3 2026 report (covering July to September 2026) is expected around late October to early November 2026.`,
  },
  {
    question: 'Does this page estimate savings or compare solar options?',
    answer:
      'No. This is a reference page of sourced, dated rate figures. It does not estimate savings, compare solar proposals, or name any installer.',
  },
  {
    question: 'How much did PG&E change its rates in 2026?',
    answer:
      "PG&E's residential average fell from 37.8 cents per kWh on October 1, 2025 to 35.0 cents on January 1, 2026 and 33.7 cents on March 1, 2026, with no change in the second quarter, per the CPUC Public Advocates Office. The office warns that PG&E's pending requests could raise the average bill 16% in 2027 if all are approved.",
  },
  {
    question: 'Who approves PG&E rate increases?',
    answer:
      'The California Public Utilities Commission. PG&E files a general rate case every four years, most recently on May 15, 2025 for 2027 to 2030, plus separate requests for other costs; the CPUC reviews each one in a public proceeding before PG&E can change prices.',
  },
  {
    question: 'What is PG&E’s E-ELEC rate?',
    answer:
      "E-ELEC, PG&E's Electric Home plan, is for homes with an EV, battery or heat pump and is required for new solar. From March 1, 2026 it charges 55.214 cents per kWh on summer peak (4 to 9 p.m.) and 33.358 cents off-peak (midnight to 3 p.m.), and 32.063 and 28.468 cents in winter, plus the daily Base Services Charge.",
  },
  {
    question: 'When do SMUD summer rates start?',
    answer:
      "June 1. SMUD's summer season runs June 1 through September 30, when its Time-of-Day Rate adds a mid-peak period and a higher peak price, 37.65 cents per kWh from 5 to 8 p.m. on weekdays in 2026.",
  },
  {
    question: 'Is SMUD cheaper than PG&E?',
    answer:
      "Yes, by SMUD's comparison: a 750 kWh month cost $149 at SMUD and $290 at PG&E as of June 1, 2026. You cannot choose between them, though; which one serves you depends on your address.",
  },
  {
    question: 'What are SDG&E’s super off-peak hours?',
    answer:
      'Midnight to 6 a.m. and 10 a.m. to 2 p.m. on weekdays, and midnight to 2 p.m. on weekends and holidays. From August 1, 2026, TOU-DR1 charges 37.433 cents per kWh then in summer and 43.719 cents in winter.',
  },
  {
    question: 'What is the difference between LADWP Tier 1 and Tier 2?',
    answer:
      'Tier 1 is the first block of use each bill (350 kWh a month in Zone 1, 500 in Zone 2) at the lowest price; Tier 2 is the next block at a higher price. For July to September 2026, LADWP lists Tier 1 at 26.408 cents per kWh and Tier 2 at 32.267 cents.',
  },
  {
    question: 'How do I find out who my electricity provider is?',
    answer:
      "Check the name on your bill. Without a bill, enter a ZIP code, city or county in the CPUC's rate comparison tool, or look up the address on the California Energy Commission's electric utility service-area map, which includes city and district utilities.",
  },
];

const TOC: Array<{ id: string; label: string }> = [
  { id: 'current-rates', label: 'Current Average Residential Rates by Utility' },
  { id: 'what-changed', label: 'What Changed This Month' },
  { id: 'why-rates-moved', label: 'Why Rates Moved in 2026' },
  { id: 'read-rate-schedule', label: 'How to Read a Rate Schedule' },
  { id: 'rate-history', label: '12-Month Rate History' },
  { id: 'igfc', label: 'The Income-Graduated Fixed Charge, Explained' },
  { id: 'pge-history', label: 'PG&E Rate History and Recent Changes' },
  { id: 'sce-history', label: 'SCE Rate History and Recent Changes' },
  { id: 'sdge-history', label: 'SDG&E Rate History and Recent Changes' },
  { id: 'utility-questions', label: 'Rate Questions by Utility' },
  { id: 'methodology', label: 'How These Rates Are Calculated (Methodology)' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'sources', label: 'Sources and How We Update This Page' },
];

export default function CaliforniaUtilityRateTrackerPage() {
  return (
    <PublicLayout>
      <ArticleJsonLd
        variant='Article'
        domain='crr'
        headline={title}
        url={canonicalUrl}
        datePublished={datePublished}
        dateModified={lastUpdated}
        description={description}
      />
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
      />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span>
              <span className='text-foreground'>California Utility Rate Tracker</span>
            </nav>

            <header className='mb-8'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Utility Rates &middot; Reference</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>California Utility Rate Tracker: Current PG&amp;E, SCE, SDG&amp;E and SMUD Rates</h1>
              <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
                <Link href='/author/chad-simpson' className='font-medium text-foreground hover:text-primary'>By Chad Simpson</Link>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={lastUpdated}>Updated {lastUpdatedDisplay}</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>10 min read</span></div>
              </div>
            </header>

            <div className='rounded-xl border border-border bg-muted/30 p-5 mb-8 text-sm'>
              <p className='font-semibold text-foreground mb-1'>Cite this page</p>
              <p className='text-foreground/80 m-0'>California Utility Rate Tracker &mdash; <a href={canonicalUrl} className={sourceLink}>{canonicalUrl}</a>. Last updated {lastUpdatedDisplay}. Every figure below was verified against its primary source on {dataVerifiedDisplay}; per-row source links and fetch dates are in the tables below and in the full source list.</p>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                As of June 2026, the average California residential electricity rate is 33.7&cent;/kWh at PG&amp;E, 34.4&cent;/kWh at SCE, and 45.5&cent;/kWh at SDG&amp;E, based on the CPUC Public Advocates Office&apos;s most recent quarterly rate report. SMUD customers on the Fixed Rate plan &mdash; an opt-in alternative to SMUD&apos;s default Time-of-Day rate &mdash; pay a $27.00 monthly fixed charge plus 13.71&cent;/kWh (October&ndash;May) or 21.89&cent;/kWh (June&ndash;September), effective January 1, 2026. These figures &mdash; and the income-graduated fixed charge now in effect at all three investor-owned utilities &mdash; are checked against CPUC and utility sources below, last verified September 22, 2026.
              </p>
              <p className='text-sm text-foreground/70 mb-8'>This is a reference page, not a savings estimate. It does not compare solar, name an installer, or state what any household would save. Figures are restated exactly as the cited sources report them, with the one exception noted below: the 12-month change figures, which this page calculates itself and labels as such.</p>

              {/* Bill-first step after the intro (2026-09-23); it opens the inquiry
                  form at the end of the page at step 2. The reference content
                  above and below is unchanged. */}
              <div className='not-prose mb-10'>
                <HeroQuickCheck topic="California utility rates and solar comparison" />
              </div>

              <nav aria-label='Table of contents' className='rounded-xl border border-border p-5 mb-10 not-prose'>
                <p className='font-semibold text-foreground mb-3 text-sm'>On this page</p>
                <ol className='list-decimal pl-5 space-y-1 text-sm'>
                  {TOC.map((item) => (
                    <li key={item.id}><a href={`#${item.id}`} className={sourceLink}>{item.label}</a></li>
                  ))}
                </ol>
              </nav>

              <h2 id='current-rates' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>Current Average Residential Rates by Utility</h2>
              <p>All rates below are the CPUC Public Advocates Office&apos;s &ldquo;Residential Average Rate&rdquo; (RAR) &mdash; a bundled generation-plus-delivery average across the whole residential class, <strong>excluding</strong> the California Climate Credit (a twice-yearly bill credit, not a rate). This is the same basis the Public Advocates Office uses for its own utility-to-utility comparisons. It is a residential figure and a business property is not billed on it: a commercial project is compared against its own tariff and against <Link href='/commercial-solar/cost-per-watt-california' className={sourceLink}>commercial solar cost per watt in California</Link>.</p>

              <div className='overflow-x-auto mb-3 not-prose'>
                <table className='w-full border-collapse text-xs'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-2 pr-3'>Utility</th>
                      <th className='text-left py-2 px-3'>Current avg. rate</th>
                      <th className='text-left py-2 px-3'>As of</th>
                      <th className='text-left py-2 px-3'>Most recent rate change</th>
                      <th className='text-left py-2 px-3'>Effective date</th>
                      <th className='text-left py-2 px-3'>12-month change*</th>
                      <th className='text-left py-2 px-3'>Fixed/base charge</th>
                      <th className='text-left py-2 px-3'>Source</th>
                      <th className='text-left py-2 pl-3'>Fetched</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border align-top'>
                      <td className='py-3 pr-3 font-semibold'>PG&amp;E</td>
                      <td className='py-3 px-3'>{formatAverageRateWithPerKwh(getUtilityRate('pge'))}</td>
                      <td className='py-3 px-3'>June 2026 (unchanged since Mar 2026)</td>
                      <td className='py-3 px-3'>RAR decrease &asymp;3.7% vs. Jan 1, 2026 rates &mdash; driven by the end of 2021 Wildfire Mitigation &amp; Catastrophic Events (WMCE) and 2023 WMCE Interim Rate Relief recovery, and the start of the income-graduated Base Services Charge (&minus;6.8% for CARE customers)</td>
                      <td className='py-3 px-3'>March 1, 2026 (Advice Letter 7846-E); no change filed for Q2 2026</td>
                      <td className='py-3 px-3'>&asymp; &minus;12.7% (from 38.6&cent; in June 2025) &mdash; calculated, see note*</td>
                      <td className='py-3 px-3'>Income-graduated Base Services Charge began Q1 2026 (see IGFC section)</td>
                      <td className='py-3 px-3'><a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Report</a>, p.8, 20</td>
                      <td className='py-3 pl-3'>{dataVerifiedDisplay}</td>
                    </tr>
                    <tr className='border-b border-border align-top'>
                      <td className='py-3 pr-3 font-semibold'>SCE</td>
                      <td className='py-3 px-3'>{formatAverageRateWithPerKwh(getUtilityRate('sce'))}</td>
                      <td className='py-3 px-3'>June 1, 2026</td>
                      <td className='py-3 px-3'>RAR decrease &asymp;0.1% vs. Jan 1, 2026 rates &mdash; 2026 wildfire self-insurance revenue requirement true-up, energy-efficiency program true-up, 2023 ERRA review decrease</td>
                      <td className='py-3 px-3'>June 1, 2026 (Advice Letter 5829-E)</td>
                      <td className='py-3 px-3'>&asymp; +10.3% (from 31.2&cent; in June 2025) &mdash; calculated, see note*</td>
                      <td className='py-3 px-3'>Income-graduated Base Services Charge began Q4 2025</td>
                      <td className='py-3 px-3'><a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Report</a>, p.8, 22</td>
                      <td className='py-3 pl-3'>{dataVerifiedDisplay}</td>
                    </tr>
                    <tr className='border-b border-border align-top'>
                      <td className='py-3 pr-3 font-semibold'>SDG&amp;E</td>
                      <td className='py-3 px-3'>{formatAverageRateWithPerKwh(getUtilityRate('sdge'))}</td>
                      <td className='py-3 px-3'>June 1, 2026</td>
                      <td className='py-3 px-3'>RAR decrease &asymp;2.0% vs. April 1, 2026 rates &mdash; FERC-ordered reduction in Base Transmission Revenue Requirement (&asymp;$112.2M)</td>
                      <td className='py-3 px-3'>June 1, 2026 (Advice Letter 4843-E)</td>
                      <td className='py-3 px-3'>&asymp; +9.6% (from 41.5&cent; in June 2025) &mdash; calculated, see note*</td>
                      <td className='py-3 px-3'>Income-graduated Base Services Charge began Q4 2025</td>
                      <td className='py-3 px-3'><a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Report</a>, p.8, 24</td>
                      <td className='py-3 pl-3'>{dataVerifiedDisplay}</td>
                    </tr>
                    <tr className='border-b border-border align-top'>
                      <td className='py-3 pr-3 font-semibold'>SMUD&sup1;</td>
                      <td className='py-3 px-3'>Fixed Rate plan (opt-in): {usd(smud.sifcPerMonth, 2)}/month + {centsFromDollars(smud.fixedRate.nonSummer)}/kWh (Oct&ndash;May) / {centsFromDollars(smud.fixedRate.summer)}/kWh (Jun&ndash;Sep)</td>
                      <td className='py-3 px-3'>Effective January 1, 2026 &mdash; supersedes the May 2025 figures previously shown here</td>
                      <td className='py-3 px-3'>Not sourced (see note 1 below) &mdash; SMUD does not publish a CPUC-style blended average rate</td>
                      <td className='py-3 px-3'>January 1, 2026 (current version); a further &asymp;3% adjustment is board-approved for January 1, 2027</td>
                      <td className='py-3 px-3'>Not sourced (see note 1 below)</td>
                      <td className='py-3 px-3'>{usd(smud.sifcPerMonth, 2)}/month System Infrastructure Fixed Charge (SIFC)</td>
                      <td className='py-3 px-3'><a href={FACTS.smudRates.sourceUrl} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD Residential rates</a></td>
                      <td className='py-3 pl-3'>{formatFactDateShort(FACTS.smudRates.checkedAt)}</td>
                    </tr>
                    <tr className='align-top'>
                      <td className='py-3 pr-3 font-semibold'>LADWP&sup2;</td>
                      <td className='py-3 px-3'>No blended average published. Standard R-1A plan: Tier 1 {centsFromDollars(ladwp.julSep2026.tier1)}/kWh, Tier 2 {centsFromDollars(ladwp.julSep2026.tier2)}/kWh (Jul&ndash;Sep 2026)</td>
                      <td className='py-3 px-3'>July&ndash;September 2026 quarter</td>
                      <td className='py-3 px-3'>Quarterly adjustment-factor step: Tier 1 rises to {centsFromDollars(ladwp.octDec2026.tier1)}/kWh</td>
                      <td className='py-3 px-3'>October 1, 2026</td>
                      <td className='py-3 px-3'>Not sourced as a blended figure; R-1A Tier 1 was {centsFromDollars(ladwp.julSep2025.tier1)} for Jul&ndash;Sep 2025</td>
                      <td className='py-3 px-3'>Power Access Charge {usd(ladwp.powerAccessChargePerMonth.tier1, 2)}&ndash;{usd(ladwp.powerAccessChargePerMonth.tier3, 2)}/month (R-1A); {usd(ladwp.r1bServiceChargePerMonth, 2)}/month service charge (R-1B)</td>
                      <td className='py-3 px-3'><a href={FACTS.ladwpR1a.sourceUrl} target='_blank' rel='noopener noreferrer' className={sourceLink}>LADWP Residential Rates</a></td>
                      <td className='py-3 pl-3'>{formatFactDateShort(FACTS.ladwpR1a.checkedAt)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/60 text-xs mb-2'>PG&amp;E, SCE and SDG&amp;E figures: CPUC Public Advocates Office, <a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Electric Rates Report</a>, p.8, 20, 22, 24. Fetched {dataVerifiedDisplay}.</p>
              <p className='text-foreground/60 text-xs mb-2'><strong>Note 1 (SMUD):</strong> SMUD is a publicly owned utility and is not covered by the CPUC Public Advocates Office reports, and it does not publish a single blended, CPUC-style average rate, so no comparable 12-month change or &ldquo;most recent change&rdquo; percentage can be sourced for it. The figures above are for SMUD&apos;s Fixed Rate plan, an opt-in alternative &mdash; SMUD&apos;s actual default rate for smart-meter customers is the Time-of-Day (5&ndash;8 p.m.) Rate, not the flat rate shown here; see <a href={SMUD_RESIDENTIAL_RATES_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD&apos;s own rate page</a> for those figures. SMUD raised rates 3% effective January 1, 2026, superseding the $26.20/month + 13.31&cent;/21.26&cent; figures previously shown here, and its board has approved a further &asymp;3% adjustment effective January 1, 2027.</p>
              <p className='text-foreground/60 text-xs mb-8'><strong>Note 2 (LADWP):</strong> LADWP is a municipal utility outside CPUC jurisdiction, and unlike PG&amp;E, SCE and SDG&amp;E it doesn&apos;t publish a single composite average-residential-rate figure, so no blended rate or 12-month percentage is shown. Its <a href={SRC.ladwpResRates.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>residential rates page</a> does publish current per-kWh prices by tier and quarter, including adjustment factors; the row above shows the standard R-1A plan from that page, checked {t3VerifiedDisplay}. Tier sizes depend on climate zone and billing cycle. The full tier and time-of-use tables are on our <Link href='/blog/ladwp-rates' className={sourceLink}>LADWP rates page</Link>. The older rate-summary PDF (<a href={LADWP_STALE_PDF_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>LADWP_Electric_Rates.pdf</a>) dates from 2019 and is not used.</p>

              <h3 className='text-lg font-bold text-foreground mt-8 mb-3'>Officially reported multi-year change (source-stated, not calculated)</h3>
              <div className='overflow-x-auto mb-3 not-prose'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-2 pr-4'>Utility</th>
                      <th className='text-center py-2 px-3'>3-year change (Jun 2023 &rarr; Jun 2026)</th>
                      <th className='text-center py-2 px-3'>5-year change (Jan 2021 &rarr; Jun 2026)</th>
                      <th className='text-center py-2 px-3'>10-year change (Jan 2016 &rarr; Jun 2026)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'><td className='py-2 pr-4 font-medium'>PG&amp;E</td><td className='text-center py-2 px-3'>&uarr; 8%</td><td className='text-center py-2 px-3'>&uarr; 39%</td><td className='text-center py-2 px-3'>&uarr; 69%</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4 font-medium'>SCE</td><td className='text-center py-2 px-3'>&uarr; 4%</td><td className='text-center py-2 px-3'>&uarr; 56%</td><td className='text-center py-2 px-3'>&uarr; 101%</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>SDG&amp;E</td><td className='text-center py-2 px-3'>&uarr; 5%</td><td className='text-center py-2 px-3'>&uarr; 42%</td><td className='text-center py-2 px-3'>&uarr; 97%</td></tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/60 text-xs mb-8'>Source: <a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Public Advocates Office, Q2 2026 Electric Rates Report</a>, p.8. Fetched {dataVerifiedDisplay}.</p>

              <div className='rounded-xl border border-border bg-muted/30 p-5 mb-10' id='methodology-note'>
                <p className='font-semibold text-foreground mb-2 text-sm'>* 12-month change methodology (calculated, not a CPUC figure)</p>
                <p className='text-sm text-foreground/80 mb-2'>The CPUC Public Advocates Office reports 3-year, 5-year and 10-year changes but does not publish a 1-year (12-month) percentage change. The 12-month figures in the table above are <strong>this page&apos;s own calculation</strong>, computed from two officially sourced quarterly snapshots &mdash; never presented as a CPUC-stated figure. The arithmetic:</p>
                <ul className='text-sm text-foreground/80 list-disc pl-5 space-y-1 mb-0'>
                  <li>PG&amp;E: (33.7&cent; &minus; 38.6&cent;) &divide; 38.6&cent; = &minus;12.7% (33.7&cent; from the <a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Report</a>; 38.6&cent; from the <a href={Q2_2025_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2025 Report</a>)</li>
                  <li>SCE: (34.4&cent; &minus; 31.2&cent;) &divide; 31.2&cent; = +10.3% (34.4&cent; from the Q2 2026 Report; 31.2&cent; from the Q2 2025 Report)</li>
                  <li>SDG&amp;E: (45.5&cent; &minus; 41.5&cent;) &divide; 41.5&cent; = +9.6% (45.5&cent; from the Q2 2026 Report; 41.5&cent; from the Q2 2025 Report)</li>
                </ul>
              </div>

              <h2 id='what-changed' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>What Changed This Month</h2>
              <p>Based strictly on the CPUC Public Advocates Office&apos;s Q2 2026 Electric Rates Report (the most recent published as of {dataVerifiedDisplay}) and each utility&apos;s cited advice letters:</p>
              <ul className='list-disc pl-6 space-y-3'>
                <li><strong>PG&amp;E</strong> filed no new rate change in Q2 2026 &mdash; its residential average rate has been flat at 33.7&cent;/kWh since the March 1, 2026 decrease. That decrease (Advice Letter 7846-E, &asymp;&minus;3.7% vs. January 1, 2026) reflected the end of two wildfire-cost-recovery programs (2021 WMCE and 2023 WMCE Interim Rate Relief) and the start of PG&amp;E&apos;s income-graduated Base Services Charge, which cut CARE-customer rates by about 6.8%.</li>
                <li><strong>SCE</strong> filed Advice Letter 5829-E, effective June 1, 2026, a roughly 0.1% residential-average-rate decrease versus January 1, 2026 rates, driven by a $650 million wildfire self-insurance revenue-requirement update, a $240.3 million cut to the 2026 energy-efficiency program budget, and a 2023 Energy Resource Recovery Account true-up.</li>
                <li><strong>SDG&amp;E</strong> filed Advice Letter 4843-E, effective June 1, 2026, a roughly 2.0% residential-average-rate decrease versus April 1, 2026 rates, following a Federal Energy Regulatory Commission order reducing SDG&amp;E&apos;s Base Transmission Revenue Requirement by about $112.2 million.</li>
                <li>Despite these quarter-over-quarter decreases, the Public Advocates Office&apos;s own framing is that all three utilities&apos; rates remain far above 2016 levels (PG&amp;E +69%, SCE +101%, SDG&amp;E +97% over ten years) and above general inflation (CPI +42% over the same comparison window in the report&apos;s chart).</li>
              </ul>
              <p className='text-sm text-foreground/70'>No savings estimate, solar comparison or program-eligibility claim is made anywhere in this section; it restates only what the cited sources state. Source: <a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Electric Rates Report</a>. Fetched {dataVerifiedDisplay}.</p>

              <h2 id='why-rates-moved' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>Why Rates Moved in 2026</h2>
              <p><strong>PG&amp;E (&minus;3.7%, effective March 1, 2026).</strong> Two wildfire-cost recovery programs finished paying off their balances &mdash; the 2021 Wildfire Mitigation and Catastrophic Events (WMCE) charge and its Interim Rate Relief add-on &mdash; cutting rates by about 4.9%. That was partly offset by a new 2023 WMCE charge (about $746.6 million in added distribution revenue) and by the rollout of the income-graduated Base Services Charge, which on its own lowered CARE customers&apos; per-kWh rate by about 6.8%.</p>
              <p><strong>SCE (roughly flat, &minus;0.1%, effective June 1, 2026).</strong> SCE&apos;s wildfire self-insurance reserve rose to $650 million in the June filing, up about $380.7 million from the prior quarter &mdash; the largest single cost pressure &mdash; offset by other adjustments. Earlier in the year (January 1, 2026), SCE&apos;s rate had already moved on a $444 million net revenue change tied to energy-cost-recovery accounting.</p>
              <p><strong>SDG&amp;E (&minus;2.0%, effective June 1, 2026, after an 11.4% increase on January 1, 2026).</strong> The January increase traced to a $184.6 million jump in the Portfolio Allocation Balancing Account (which recovers generation costs) plus prior-year under-collections. The June filing reversed part of that, driven mainly by a $112.2 million transmission-cost reduction ordered at the federal level.</p>
              <p><strong>SMUD (+3%, effective January 1, 2026).</strong> SMUD&apos;s board approved matching 3% increases for 2026 and 2027, citing new generation and storage projects for state clean-energy compliance, grid infrastructure spending (including a new operations building), rising commodity costs, wildfire prevention, and inflation.</p>
              <p><strong>The income-graduated fixed charge is now live everywhere.</strong> All three CPUC-regulated utilities have implemented it &mdash; SCE and SDG&amp;E in Q4 2025, PG&amp;E on March 1, 2026. Details in the status section below.</p>
              <p className='text-foreground/60 text-xs mb-10'>Sources: CPUC Public Advocates Office <a href={Q1_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q1 2026</a> and <a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Electric Rates Reports</a>; SMUD <a href={SMUD_RATE_FACTSHEET_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>2026-2027 Rate Proposal Fact Sheet</a>. Fetched {dataVerifiedDisplay}.</p>

              <h2 id='read-rate-schedule' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>How to Read a Rate Schedule</h2>
              <p>A utility &ldquo;rate&rdquo; isn&apos;t one price &mdash; it&apos;s several charges stacked together, and the composite cents-per-kWh figures above blend all of them into a single average. When you read your own bill or a utility&apos;s published tariff, you&apos;ll typically see:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>Generation charge</strong> &mdash; what you pay for the electricity itself. On a Community Choice Aggregation (CCA) account, this line comes from your CCA, not the utility.</li>
                <li><strong>Delivery / transmission &amp; distribution charge</strong> &mdash; what you pay the utility to move that power over its wires, regardless of who generated it.</li>
                <li><strong>Fixed (customer/base services) charge</strong> &mdash; a flat monthly amount that doesn&apos;t depend on usage. Since late 2025&ndash;early 2026, this is income-graduated at PG&amp;E, SCE and SDG&amp;E (see below).</li>
                <li><strong>Time-of-use (TOU) periods</strong> &mdash; most residential plans price electricity higher during a &ldquo;peak&rdquo; window, commonly late afternoon into evening, and lower overnight or midday. Exact peak and off-peak hours differ by utility and plan &mdash; see <Link href='/blog/pge-time-of-use-rates-2026' className={sourceLink}>PG&amp;E&apos;s time-of-use schedule</Link>, <Link href='/blog/sce-time-of-use-rates-2026' className={sourceLink}>SCE&apos;s time-of-use plans</Link> and <Link href='/blog/sdge-time-of-use-rates-2026' className={sourceLink}>SDG&amp;E&apos;s time-of-use schedule</Link> for the current hour-by-hour schedules rather than reading them off this page.</li>
                <li><strong>Tiers</strong> &mdash; some plans, including SMUD&apos;s flat-rate schedule, charge more per kWh once usage crosses a threshold within a billing period.</li>
                <li><strong>California Climate Credit</strong> &mdash; a twice-yearly bill credit, not a rate. The composite figures on this page use the CPUC&apos;s Residential Average Rate (RAR) methodology, which excludes the credit, so your actual bill can look lower than these &cent;/kWh figures suggest in the months the credit lands.</li>
              </ul>
              <p className='mb-10'>If you want the peak/off-peak breakdown for a specific plan rather than the current composite average, use the utility-specific guide linked above.</p>

              <h2 id='rate-history' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>12-Month Rate History</h2>
              <p>The CPUC Public Advocates Office publishes this data <strong>quarterly</strong>, not monthly &mdash; so this table reflects the quarter-end snapshot each report captures rather than 12 separate calendar months. Where the underlying report gives a specific rate-change date within the quarter, that date is used instead of the report&apos;s cover date.</p>
              {/* The history table below, drawn (plan 7.6). Same figures, from RATE_HISTORY_SNAPSHOTS. */}
              <RateHistoryChart
                id='rate-history-chart'
                title='Residential average electricity rate, June 2025 to June 2026 (cents per kWh)'
                description={`Line chart of the CPUC Public Advocates Office residential average rate for PG&E, SCE and SDG&E at five quarterly snapshots. ${RATE_HISTORY_SNAPSHOTS.map((r) => `${r.longLabel}: PG&E ${r.pge.toFixed(1)}, SCE ${r.sce.toFixed(1)}, SDG&E ${r.sdge.toFixed(1)} cents`).join('; ')}.`}
                points={RATE_HISTORY_SNAPSHOTS.map((r) => ({ label: r.label, longLabel: r.longLabel, month: r.month }))}
                series={[
                  { name: 'PG&E', values: RATE_HISTORY_SNAPSHOTS.map((r) => r.pge) },
                  { name: 'SCE', values: RATE_HISTORY_SNAPSHOTS.map((r) => r.sce) },
                  { name: 'SDG&E', values: RATE_HISTORY_SNAPSHOTS.map((r) => r.sdge) },
                ]}
                tableHref='#rate-history-table'
                sourceNote={<>Source: CPUC Public Advocates Office quarterly electric rates reports, Q2 2025 to Q2 2026, residential average rate excluding the California Climate Credit; checked September 24, 2026. Points are spaced by date, not evenly.</>}
              />
              <div id='rate-history-table' className='overflow-x-auto mb-3 not-prose scroll-mt-24'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-2 pr-4'>Snapshot date</th>
                      <th className='text-center py-2 px-3'>PG&amp;E (&cent;/kWh)</th>
                      <th className='text-center py-2 px-3'>SCE (&cent;/kWh)</th>
                      <th className='text-center py-2 px-3'>SDG&amp;E (&cent;/kWh)</th>
                      <th className='text-left py-2 pl-3'>Source report</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>June 2025 (as of July 1, 2025)</td><td className='text-center py-2 px-3'>38.6&cent;</td><td className='text-center py-2 px-3'>31.2&cent;</td><td className='text-center py-2 px-3'>41.5&cent;</td><td className='py-2 pl-3'><a href={Q2_2025_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2025 Report</a></td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>October 1, 2025</td><td className='text-center py-2 px-3'>37.8&cent;</td><td className='text-center py-2 px-3'>35.3&cent;</td><td className='text-center py-2 px-3'>41.0&cent;</td><td className='py-2 pl-3'><a href={Q3_2025_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q3 2025 Report</a></td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>January 1, 2026</td><td className='text-center py-2 px-3'>35.0&cent;</td><td className='text-center py-2 px-3'>34.5&cent;</td><td className='text-center py-2 px-3'>45.7&cent;</td><td className='py-2 pl-3'><a href={Q4_2025_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q4 2025 Report</a></td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>March 1, 2026</td><td className='text-center py-2 px-3'>33.7&cent;</td><td className='text-center py-2 px-3'>34.5&cent;</td><td className='text-center py-2 px-3'>45.7&cent;</td><td className='py-2 pl-3'><a href={Q1_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q1 2026 Report</a></td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>June 1, 2026</td><td className='text-center py-2 px-3'>33.7&cent; (no change)</td><td className='text-center py-2 px-3'>34.4&cent;</td><td className='text-center py-2 px-3'>45.5&cent;</td><td className='py-2 pl-3'><a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Report</a></td></tr>
                    <tr><td className='py-2 pr-4'>Q3 2026 (Jul&ndash;Sep 2026)</td><td className='text-center py-2 px-3'>Not yet published</td><td className='text-center py-2 px-3'>Not yet published</td><td className='text-center py-2 px-3'>Not yet published</td><td className='py-2 pl-3'>Q3 2026 report not yet published as of {dataVerifiedDisplay}</td></tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/60 text-xs mb-10'>Fetched {dataVerifiedDisplay} for every row shown. The CPUC Public Advocates Office&apos;s cadence has been to publish roughly one month after quarter-end, so a Q3 2026 report is expected around late October&ndash;early November 2026; this table will be updated with that snapshot once it publishes. See <a href={PAO_REPORTS_INDEX_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>publicadvocates.cpuc.ca.gov/press-room/reports-and-analyses</a>.</p>

              <h2 id='igfc' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>The Income-Graduated Fixed Charge, Explained</h2>
              <p><strong>CPUC Decision 24-05-028</strong> (issued May 15, 2024) ordered PG&amp;E, SCE and SDG&amp;E (plus Bear Valley Electric, Liberty Utilities and PacifiCorp) to replace part of their per-kWh rate with a flat monthly charge that scales with household income:</p>
              <div className='overflow-x-auto mb-4 not-prose'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-2 pr-4'>Tier</th>
                      <th className='text-left py-2 px-3'>Who</th>
                      <th className='text-left py-2 pl-3'>Approved charge</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>1</td><td className='py-2 px-3'>CARE-enrolled households</td><td className='py-2 pl-3'>{usd(igfc.tier1Care, 2)}/month</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>2</td><td className='py-2 px-3'>FERA-enrolled / deed-restricted affordable housing</td><td className='py-2 pl-3'>{usd(igfc.tier2Fera, 2)}/month</td></tr>
                    <tr><td className='py-2 pr-4'>3</td><td className='py-2 px-3'>All other residential customers</td><td className='py-2 pl-3'>{usd(igfc.tier3Standard, 2)}/month</td></tr>
                  </tbody>
                </table>
              </div>
              <p>All three utilities have now implemented it:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>SCE and SDG&amp;E</strong> &mdash; Q4 2025 (SDG&amp;E&apos;s effective date was October 1, 2025)</li>
                <li><strong>PG&amp;E</strong> &mdash; Q1 2026 (effective March 1, 2026; PG&amp;E&apos;s own billing page describes the standard-tier charge as &ldquo;around $24.00 per month&rdquo;)</li>
              </ul>
              <p>The tradeoff, per PG&amp;E&apos;s own explanation: the per-kWh energy price drops to offset the new fixed charge, so your total bill may or may not change &mdash; it depends on how much electricity you use. For the full mechanics and bill examples, see our <Link href='/blog/california-24-dollar-fixed-charge-explained' className={sourceLink}>California&apos;s $24 fixed charge, explained</Link> page.</p>
              <p>This is a <strong>flat charge that does not vary with usage</strong>, layered on top of (and, for CARE customers, partly offset against) the volumetric rate &mdash; it is not the same thing as the &ldquo;current average rate&rdquo; figures above, which already reflect its effect on the class-average RAR where applicable.</p>
              <p className='text-foreground/60 text-xs mb-10'>Sources: <a href={DECISION_24_05_028_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Decision 24-05-028</a>, fetched {dataVerifiedDisplay}; <a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Public Advocates Office Q2 2026 Report</a>, pp. 20&ndash;24, fetched {dataVerifiedDisplay}; <a href={PGE_BASE_SERVICES_CHARGE_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E Base Services Charge page</a>, fetched {dataVerifiedDisplay}.</p>

              <h2 id='pge-history' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>PG&amp;E Rate History and Recent Changes</h2>
              <p>PG&amp;E&apos;s residential average rate was 33.7&cent;/kWh as of June 2026, unchanged since a March 1, 2026 decrease of about 3.7% from January 1, 2026 rates (Advice Letter 7846-E). Over the trailing five quarterly snapshots this page tracks, PG&amp;E&apos;s reported rate moved 38.6&cent; (June 2025) &rarr; 37.8&cent; (Oct 2025) &rarr; 35.0&cent; (Jan 2026) &rarr; 33.7&cent; (Mar 2026) &rarr; 33.7&cent; (Jun 2026, no change). Over longer horizons, the Public Advocates Office reports PG&amp;E&apos;s rate up 8% over three years, 39% over five years and 69% over ten years. PG&amp;E&apos;s income-graduated Base Services Charge began March 1, 2026. See the current-rates and 12-month history tables above for full sourcing.</p>

              <h2 id='sce-history' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>SCE Rate History and Recent Changes</h2>
              <p>SCE&apos;s residential average rate was 34.4&cent;/kWh as of June 1, 2026, a roughly 0.1% decrease from January 1, 2026 rates (Advice Letter 5829-E). Over the trailing five quarterly snapshots, SCE&apos;s reported rate moved 31.2&cent; (June 2025) &rarr; 35.3&cent; (Oct 2025) &rarr; 34.5&cent; (Jan 2026) &rarr; 34.5&cent; (Mar 2026) &rarr; 34.4&cent; (Jun 2026). Over longer horizons, the Public Advocates Office reports SCE&apos;s rate up 4% over three years, 56% over five years and 101% over ten years &mdash; the largest ten-year and five-year increase of the three utilities on this page. SCE&apos;s income-graduated Base Services Charge began Q4 2025. See the current-rates and 12-month history tables above for full sourcing.</p>

              <h2 id='sdge-history' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>SDG&amp;E Rate History and Recent Changes</h2>
              <p>SDG&amp;E&apos;s residential average rate was 45.5&cent;/kWh as of June 1, 2026 &mdash; the highest of the three utilities on this page &mdash; a roughly 2.0% decrease from April 1, 2026 rates (Advice Letter 4843-E) following a FERC-ordered reduction in its Base Transmission Revenue Requirement. Over the trailing five quarterly snapshots, SDG&amp;E&apos;s reported rate moved 41.5&cent; (June 2025) &rarr; 41.0&cent; (Oct 2025) &rarr; 45.7&cent; (Jan 2026) &rarr; 45.7&cent; (Mar 2026) &rarr; 45.5&cent; (Jun 2026). Over longer horizons, the Public Advocates Office reports SDG&amp;E&apos;s rate up 5% over three years, 42% over five years and 97% over ten years. SDG&amp;E&apos;s income-graduated Base Services Charge began October 1, 2025. See the current-rates and 12-month history tables above for full sourcing. None of this is the rate on any one household&apos;s bill, because SDG&amp;E bills residential customers on time-of-use plans: <Link href='/blog/sdge-time-of-use-rates-2026' className={sourceLink}>SDG&amp;E time-of-use rates</Link> sets out the peak windows and what changing plan does.</p>


              <h2 id='utility-questions' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>Rate Questions by Utility</h2>
              <p>The averages above answer &ldquo;how expensive is my utility?&rdquo; These are the next questions people ask about each one, answered from the utility&apos;s own rate pages and tariffs (checked {t3VerifiedDisplay}), with a link to the full guide.</p>

              <h3 className='text-lg font-bold text-foreground mt-8 mb-3'>PG&amp;E</h3>
              <p><strong>How much did PG&amp;E change rates this year?</strong> Down, so far. The Public Advocates Office figures in the history table above show PG&amp;E&apos;s residential average at 37.8&cent;/kWh on October 1, 2025, 35.0&cent; on January 1, 2026 and 33.7&cent; from March 1, 2026, with no change in the second quarter. Its 2025 averages were 38.6&cent; in June and 37.8&cent; from October 1. PG&amp;E says it has cut prices five times in two years. The Public Advocates Office warns that PG&amp;E&apos;s 2027 rate case and other expected requests could raise the average bill 16% in 2027 if all are approved.</p>
              <p><strong>Who approves PG&amp;E rate increases?</strong> The CPUC. PG&amp;E&apos;s core costs go through a general rate case every four years; its 2027&ndash;2030 case was filed on May 15, 2025, and PG&amp;E does not expect related rate changes before January 2027. Fuel, transmission and public-program costs go through separate proceedings, and each approved change reaches prices through an advice letter. The CPUC&apos;s Public Advocates Office argues for customers in those cases.</p>
              <p><strong>What are PG&amp;E&apos;s time-of-use plans?</strong> E-TOU-C (peak 4&ndash;9 p.m. every day, PG&amp;E&apos;s standard plan), E-TOU-D (peak 5&ndash;8 p.m. on non-holiday weekdays), EV2-A for home EV charging, E-ELEC for electric homes and the separately metered EV-B. Hours and March 1, 2026 prices are in <Link href='/blog/pge-time-of-use-rates-2026' className={sourceLink}>PG&amp;E time-of-use rates</Link>, and every schedule, including tiered E-1, is listed in <Link href='/blog/pge-rate-schedules' className={sourceLink}>PG&amp;E rate schedules</Link>.</p>
              <p><strong>What is E-ELEC?</strong> PG&amp;E&apos;s Electric Home plan, for homes with an EV, battery storage or an electric heat pump, and the plan the CPUC requires for new solar on the net billing tariff. From March 1, 2026 it charges 55.214&cent;/kWh on summer peak (4&ndash;9 p.m.), 39.026&cent; part-peak and 33.358&cent; off-peak (midnight&ndash;3 p.m.), and 32.063&cent;, 29.854&cent; and 28.468&cent; in winter, plus the Base Services Charge.</p>
              <p><strong>Do data centers get special rates from PG&amp;E?</strong> PG&amp;E&apos;s list of electric rate schedules has no data-center schedule; large customers are billed on its large commercial and industrial schedules. What is new is how they connect. PG&amp;E&apos;s Electric Rule 30, an interim rule effective December 4, 2025, covers transmission-level service at 50 to 230 kV for non-residential applicants, and PG&amp;E says it has developers pay for grid infrastructure upfront so other customers are protected if a project stalls. PG&amp;E estimates that each new gigawatt of data-center demand could lower the average household bill 1&ndash;2% over time by spreading fixed costs; that is PG&amp;E&apos;s estimate, not a CPUC finding.</p>
              <p><strong>How do I start solar with PG&amp;E?</strong> PG&amp;E&apos;s steps: make the home efficient, choose a licensed contractor (PG&amp;E says an active A, B, C-10 or C-46 license), and have the contractor submit the interconnection application. PG&amp;E reviews it, runs an engineering review, completes any grid upgrades and then gives permission to operate. New systems go on the Solar Billing Plan; PG&amp;E says unfinished NEM2 applications moved to it on April 15, 2026. PG&amp;E also warns that surplus power is paid at only about 2&ndash;4&cent;/kWh, so an oversized system does not pay. See <Link href='/blog/pge-solar-program' className={sourceLink}>PG&amp;E&apos;s solar programs</Link>.</p>

              <h3 className='text-lg font-bold text-foreground mt-8 mb-3'>SDG&amp;E</h3>
              <p><strong>What are SDG&amp;E&apos;s super off-peak times?</strong> On weekdays, midnight to 6 a.m. and 10 a.m. to 2 p.m.; on weekends and holidays, midnight to 2 p.m. They apply on TOU-DR1, EV-TOU-5 and SDG&amp;E&apos;s other three-period plans. From August 1, 2026 the TOU-DR1 super off-peak price is 37.433&cent;/kWh in summer and 43.719&cent; in winter, and EV-TOU-5&apos;s is 13.090&cent; and 12.332&cent;. See <Link href='/blog/sdge-time-of-use-rates-2026' className={sourceLink}>SDG&amp;E time-of-use rates</Link>.</p>

              <h3 className='text-lg font-bold text-foreground mt-8 mb-3'>SMUD</h3>
              <p><strong>What did SMUD charge per kWh in 2025?</strong> On the standard Time-of-Day (5&ndash;8 p.m.) Rate from May 1, 2025: 36.55&cent; peak, 20.77&cent; mid-peak and 15.05&cent; off-peak in summer, and 17.24&cent; peak and 12.48&cent; off-peak the rest of the year, with a $26.20 monthly System Infrastructure Fixed Charge. From January 1, 2026 those became 37.65&cent;, 21.39&cent;, 15.50&cent;, 17.76&cent; and 12.85&cent;, with a $27.00 charge.</p>
              <p><strong>SMUD rate increases.</strong> SMUD&apos;s board approved 3% increases on January 1, 2026 and January 1, 2027; SMUD estimated they add $4.35 and then $4.48 a month for the average residential customer. Its schedule already lists the 2027 prices: 38.78&cent; summer peak and 13.24&cent; non-summer off-peak, with a $27.80 fixed charge. The 2024 and 2025 increases were four steps of 2.75%.</p>
              <p><strong>When do SMUD summer rates start?</strong> June 1, and they run through September 30. Peak is 5 to 8 p.m. on weekdays only; weekends and SMUD&apos;s 11 holidays are off-peak all day. See <Link href='/blog/smud-peak-hours' className={sourceLink}>SMUD peak hours</Link>.</p>
              <p><strong>SMUD vs. PG&amp;E rates.</strong> SMUD&apos;s comparison of a 750 kWh month as of June 1, 2026 shows $149 at SMUD and $290 at PG&amp;E; SMUD says its rates average more than 50% below PG&amp;E&apos;s. Per kWh, SMUD&apos;s summer peak is 37.65&cent; against 52.24&cent; on PG&amp;E&apos;s E-TOU-C, and its off-peak is 15.50&cent; against 39.94&cent;. The fixed charges are similar: $27.00 a month at SMUD and about $24 on PG&amp;E&apos;s standard tier.</p>
              <p><strong>SMUD&apos;s EV charging rate.</strong> SMUD has no separate EV plan. EV owners on the Time-of-Day Rate get 1.5&cent;/kWh off all use between midnight and 6 a.m., every day, once a plug-in vehicle registered with the DMV at the same address is on the account. That makes overnight power about 14.00&cent; in summer and 11.35&cent; the rest of the year.</p>
              <p><strong>SMUD SolarShares.</strong> Residential SolarShares supplies your home from solar farms SMUD built in the Sacramento region, with no panels on your roof. It runs for 20 years: charges of $2.00 per kW a month in year one fall to $0 by year six, then turn into credits that grow to $2.25 per kW from year 12. Solar and Storage Rate customers cannot join, and it does not satisfy the Title 24 solar requirement for new homes.</p>

              <h3 className='text-lg font-bold text-foreground mt-8 mb-3'>LADWP</h3>
              <p><strong>LADWP Tier 1 vs. Tier 2.</strong> On the standard R-1A plan, Tier 1 is the first 350 kWh a month in Zone 1 or 500 kWh in Zone 2 (700 and 1,000 kWh on a two-month bill), and Tier 2 is the next block. For July to September 2026, Tier 1 costs 26.408&cent;/kWh and Tier 2 32.267&cent;; from October 1 they are 27.292&cent; and 33.151&cent;. From October to May, Tier 3 costs the same as Tier 2. See <Link href='/blog/ladwp-rates' className={sourceLink}>LADWP rates</Link>.</p>

              <h3 className='text-lg font-bold text-foreground mt-8 mb-3'>Finding your provider and its rates</h3>
              <p><strong>Who is the electricity provider in my area?</strong> Your bill names it. Otherwise, the CPUC&apos;s rate comparison tool takes a ZIP code, city or county and lists the investor-owned utility and community choice aggregators there; the California Energy Commission&apos;s service-area map covers city and district utilities too. The step-by-step lookup is in <Link href='/blog/electricity-rates-by-zip-code' className={sourceLink}>electricity rates by ZIP code</Link>.</p>
              <p><strong>Electric supply rates near me.</strong> California has no open market for household electricity supply. If your city joined a CCA, the CCA sets the generation price and the utility still delivers the power; otherwise the utility supplies both. Buying from another supplier, Direct Access, is capped and allocated by lottery (see <Link href='/blog/direct-access-electricity-california' className={sourceLink}>Direct Access in California</Link>).</p>
              <p className='text-foreground/60 text-xs mb-10'>Sources for this section, fetched {t3VerifiedDisplay}: <a href={SRC.pgeResRatesCurrent.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E residential rates table</a>; <a href={SRC.pgeTariffIndex.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E tariffs</a>; <a href={SRC.pgeRule30.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E Electric Rule 30</a>; <a href={SRC.pgeDataCentersNews.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E on data centers</a>; <a href={SRC.pgeGrc2027.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E 2027 general rate case</a>; <a href={SRC.pgeBscNews.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E on the March 2026 bill</a>; <a href={SRC.paoPgeRequests.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>Public Advocates Office PG&amp;E fact sheet</a>; <a href='https://www.pge.com/en/clean-energy/solar/getting-started-with-solar.html' target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E getting started with solar</a>; <a href={SRC.sdgePricingPlans.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>SDG&amp;E pricing plans</a>; <a href={SRC.sdgeTouDr1Aug2026.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>SDG&amp;E TOU-DR1</a> and <a href={SRC.sdgeEvTou5Aug2026.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>EV-TOU-5</a> rate tables; <a href={SRC.smudRtod.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD Rate Schedule R-TOD</a>; <a href={SRC.smudRateArchive.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD rate archive</a>; <a href={SRC.smudTodDetails.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD Time-of-Day details</a>; <a href={SRC.smudCompare.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD rate comparison</a>; <a href={SRC.smudEvRate.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD EV rates</a>; <a href={SRC.smudSolarShares.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD SolarShares</a>; <a href={SRC.ladwpResRates.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>LADWP residential rates</a>; <a href={SRC.ladwpRateGuide.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>LADWP rate guide</a>; <a href={SRC.cpucRateComparison.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC rate comparison</a>; <a href={SRC.cecServiceAreas.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>CEC service-area map</a>; <a href={SRC.cpucNbt.url} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC net billing</a>.</p>

              <h2 id='methodology' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>How These Rates Are Calculated (Methodology)</h2>
              <p className='font-semibold text-foreground mb-2'>Primary sources used</p>
              <ol className='list-decimal pl-6 space-y-2'>
                <li><strong>CPUC Public Advocates Office quarterly Electric Rates Reports</strong> &mdash; the authoritative, independent (not utility-authored) source for the Residential Average Rate (RAR) figure used throughout this page. Published roughly one month after each quarter closes, at <a href={PAO_REPORTS_INDEX_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>publicadvocates.cpuc.ca.gov/press-room/reports-and-analyses</a>.</li>
                <li><strong>CPUC decisions and advice letters</strong> (docs.cpuc.ca.gov) for structural changes such as the income-graduated fixed charge (Decision 24-05-028) and the utility advice-letter filings cited by the Public Advocates Office reports.</li>
                <li><strong>Utility-published rate schedules</strong> (e.g. SMUD&apos;s Residential Rate Guide) for publicly owned utilities not covered by the CPUC Public Advocates Office reports.</li>
              </ol>

              <p className='font-semibold text-foreground mt-6 mb-2'>Definitions</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>&ldquo;All-in average rate&rdquo; / Residential Average Rate (RAR):</strong> total residential class revenue divided by total residential kWh sold &mdash; a blended figure across all rate tiers, time-of-use periods and customer types within the residential class. This is <strong>not</strong> the same as any single tariff&apos;s per-kWh rate, which varies by usage tier, time of day, climate zone and CARE/FERA enrollment.</li>
                <li><strong>Bundled System Average Rate (SAR):</strong> a related but broader figure covering all customer classes (residential, commercial, industrial, agricultural, etc.), shown in the source reports for context but <strong>not</strong> used as this page&apos;s headline number.</li>
                <li><strong>Excludes the California Climate Credit:</strong> a twice-yearly, non-rate bill credit (funded by cap-and-trade allowance revenue) that the Public Advocates Office explicitly nets out of its RAR figures; this page follows that convention.</li>
              </ul>

              <p className='font-semibold text-foreground mt-6 mb-2'>What is excluded from this page</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Non-CPUC-regulated utilities beyond SMUD/LADWP (e.g. other municipal utilities, rural electric cooperatives).</li>
                <li>Commercial, industrial and agricultural rates.</li>
                <li>Any savings, payback or &ldquo;switch to solar&rdquo; calculation.</li>
                <li>Community Choice Aggregator (CCA) generation rates, which differ from IOU bundled rates and are not covered by the Public Advocates Office reports used here.</li>
              </ul>

              <p className='font-semibold text-foreground mt-6 mb-2'>Update cadence</p>
              <p className='mb-10'>Monthly review; substantive rate-table updates only when a new CPUC Public Advocates Office quarterly report publishes (expect roughly: end of April, end of July, early November, mid-February) or when a utility files a rate-changing advice letter the Public Advocates Office has not yet rolled up.</p>

              <div className='not-prose'>
                <FaqBlock items={trackerFaqs} id='faq' heading='Frequently Asked Questions' />
              </div>

              <h2 id='sources' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>Sources and How We Update This Page</h2>
              <p>Every figure on this page traces to one of the primary sources below, each with the date it was checked.</p>
              <div className='overflow-x-auto mb-3 not-prose'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-2 pr-4'>#</th>
                      <th className='text-left py-2 px-3'>Source</th>
                      <th className='text-left py-2 pl-3'>Fetched</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>1</td><td className='py-2 px-3'><a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Public Advocates Office, Q2 2026 Electric Rates Report</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>2</td><td className='py-2 px-3'><a href={Q1_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Public Advocates Office, Q1 2026 Electric Rates Report</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>3</td><td className='py-2 px-3'><a href={Q4_2025_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Public Advocates Office, Q4 2025 Electric Rates Report</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>4</td><td className='py-2 px-3'><a href={Q3_2025_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Public Advocates Office, Q3 2025 Electric Rates Report</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>5</td><td className='py-2 px-3'><a href={Q2_2025_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Public Advocates Office, Q2 2025 Electric Rates Report</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>6</td><td className='py-2 px-3'><a href={DECISION_24_05_028_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Decision 24-05-028</a> (income-graduated fixed charge)</td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>7</td><td className='py-2 px-3'><a href={SMUD_RATE_GUIDE_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD 2026 Residential Rate Guide</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>8</td><td className='py-2 px-3'><a href={SMUD_RESIDENTIAL_RATES_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD Residential Rates page</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>9</td><td className='py-2 px-3'><a href={SMUD_RATE_FACTSHEET_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD 2026-2027 Rate Proposal Fact Sheet</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>10</td><td className='py-2 px-3'><a href={LADWP_STALE_PDF_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>LADWP electric rate PDF</a> (found to be stale &mdash; dated 2019; not used as current)</td><td className='py-2 pl-3'>Attempted {dataVerifiedDisplay} (rejected as non-current)</td></tr>
                    <tr className='border-b border-border'><td className='py-2 pr-4'>11</td><td className='py-2 px-3'><a href={LADWP_RESIDENTIAL_RATES_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>LADWP residential electric rates page</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr><td className='py-2 pr-4'>12</td><td className='py-2 px-3'><a href={PGE_BASE_SERVICES_CHARGE_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>PG&amp;E Base Services Charge page</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                  </tbody>
                </table>
              </div>
              <p className='text-sm text-foreground/70 mb-10'>This page is reviewed monthly; the rate tables above are substantively updated only when a new CPUC Public Advocates Office quarterly report publishes or a utility files a rate-changing advice letter the Public Advocates Office has not yet rolled up. See our <Link href='/methodology' className={sourceLink}>methodology page</Link> for how California Rate Relief sources and corrects its content generally.</p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Related Reading</h2>
              <ul className='list-disc pl-6 space-y-2 mb-10'>
                <li><Link href='/blog/why-is-my-california-electric-bill-so-high' className={sourceLink}>why your bill can run higher than the average rate suggests</Link></li>
                <li><Link href='/blog/electricity-rates-by-zip-code' className={sourceLink}>finding the rate for your address</Link></li>
                <li><Link href='/blog/pge-rate-schedules' className={sourceLink}>every PG&amp;E residential rate schedule</Link></li>
                <li><Link href='/blog/net-billing-vs-net-metering-california' className={sourceLink}>how solar export credits are calculated</Link></li>
                <li><Link href='/blog/nem-2-vs-nem-3-california' className={sourceLink}>NEM 2.0 vs. NEM 3.0</Link></li>
                <li><Link href='/blog/how-to-lower-electric-bill-california' className={sourceLink}>ways to lower your bill</Link></li>
                <li><Link href='/solar-cost' className={sourceLink}>what solar costs in California</Link></li>
              </ul>
              {/* Hub of two topics (SEO/24): utility rates, and bills and solar savings by city. */}
              <HubSpokeLinks hub='utility_rates' currentPath={canonicalPath} title='Rate plans, rate changes and utility guides' />
              <HubSpokeLinks hub='city_bills' currentPath={canonicalPath} title='Electric bills and solar savings by city and region' />
            </div>

            {/* The closing ask (2026-09-23): the inquiry form itself, in place of
                the link-only box that sent readers to the home page. */}
            <SolarInquiry variant='bill' topic="California utility rates and solar comparison" />
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'><TrustedSources domain='crr' variant='compact' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
