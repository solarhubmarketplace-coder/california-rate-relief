import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { IntentCTA } from '@/components/growth/IntentCTA';
import { Calendar, Clock } from 'lucide-react';
import {
  Q2_2026_URL,
  Q1_2026_URL,
  Q4_2025_URL,
  Q3_2025_URL,
  Q2_2025_URL,
  DECISION_24_05_028_URL,
  SMUD_SCHEDULE_R_URL,
  LADWP_STALE_PDF_URL,
  PAO_REPORTS_INDEX_URL,
  formatAverageRateWithPerKwh,
  getUtilityRate,
} from '@/data/utility-rate-tracker';

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

const title = 'CA Utility Rate Tracker: PG&E, SCE, SDG&E Rates';
const description =
  'Sourced, dated tracker of PG&E, SCE, and SDG&E residential electric rates, fixed charges, and rate history — updated monthly from CPUC data.';
const canonicalPath = '/california-utility-rate-tracker';
const canonicalUrl = `https://ratereliefca.com${canonicalPath}`;
const lastUpdated = '2026-09-18';
const lastUpdatedDisplay = 'September 18, 2026';
const dataVerifiedDisplay = '17 Sep 2026';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-09-18T00:00:00Z',
    modifiedTime: '2026-09-18T00:00:00Z',
    url: canonicalUrl,
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
  datePublished: lastUpdated,
  dateModified: lastUpdated,
};

const TOC: Array<{ id: string; label: string }> = [
  { id: 'current-rates', label: 'Current Average Residential Rates by Utility' },
  { id: 'what-changed', label: 'What Changed This Month' },
  { id: 'rate-history', label: '12-Month Rate History' },
  { id: 'igfc', label: 'The Income-Graduated Fixed Charge, Explained' },
  { id: 'pge-history', label: 'PG&E Rate History and Recent Changes' },
  { id: 'sce-history', label: 'SCE Rate History and Recent Changes' },
  { id: 'sdge-history', label: 'SDG&E Rate History and Recent Changes' },
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
        headline='California Utility Rate Tracker'
        url={canonicalUrl}
        datePublished={lastUpdated}
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
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>California Utility Rate Tracker</h1>
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
                California&apos;s big investor-owned utilities change their electricity rates several times a year, and the changes are buried in regulatory filings most people never see. This page collects, in one place, the current average residential rate for California&apos;s major electric utilities, how that rate has moved over the last year and over time, and the fixed monthly charges that ride along with it &mdash; all sourced directly from the California Public Utilities Commission&apos;s own watchdog office and each utility&apos;s own published tariffs. It exists so a reporter, researcher or ratepayer can find a sourced, dated number without digging through PDFs.
              </p>
              <p className='text-sm text-foreground/70 mb-8'>This is a reference page, not a savings estimate. It does not compare solar, name an installer, or state what any household would save. Figures are restated exactly as the cited sources report them, with the one exception noted below: the 12-month change figures, which this page calculates itself and labels as such.</p>

              <nav aria-label='Table of contents' className='rounded-xl border border-border p-5 mb-10 not-prose'>
                <p className='font-semibold text-foreground mb-3 text-sm'>On this page</p>
                <ol className='list-decimal pl-5 space-y-1 text-sm'>
                  {TOC.map((item) => (
                    <li key={item.id}><a href={`#${item.id}`} className={sourceLink}>{item.label}</a></li>
                  ))}
                </ol>
              </nav>

              <h2 id='current-rates' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>Current Average Residential Rates by Utility</h2>
              <p>All rates below are the CPUC Public Advocates Office&apos;s &ldquo;Residential Average Rate&rdquo; (RAR) &mdash; a bundled generation-plus-delivery average across the whole residential class, <strong>excluding</strong> the California Climate Credit (a twice-yearly bill credit, not a rate). This is the same basis the Public Advocates Office uses for its own utility-to-utility comparisons.</p>

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
                      <td className='py-3 px-3'>Fixed $26.20/month + 13.31&cent;/kWh (Oct&ndash;May) / 21.26&cent;/kWh (Jun&ndash;Sep) on Schedule R (RF01)</td>
                      <td className='py-3 px-3'>Effective May 1, 2025 (document version dated June 20, 2025)</td>
                      <td className='py-3 px-3'>Not sourced (see note 1 below) &mdash; SMUD does not publish a CPUC-style blended average rate</td>
                      <td className='py-3 px-3'>May 1, 2025 (current version)</td>
                      <td className='py-3 px-3'>Not sourced (see note 1 below)</td>
                      <td className='py-3 px-3'>$26.20/month base charge on Schedule R</td>
                      <td className='py-3 px-3'><a href={SMUD_SCHEDULE_R_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD Residential Rate Schedule R</a></td>
                      <td className='py-3 pl-3'>{dataVerifiedDisplay}</td>
                    </tr>
                    <tr className='align-top'>
                      <td className='py-3 pr-3 font-semibold'>LADWP&sup2;</td>
                      <td className='py-3 px-3'>Not sourced (see note 2 below)</td>
                      <td className='py-3 px-3'>&mdash;</td>
                      <td className='py-3 px-3'>Not sourced (see note 2 below)</td>
                      <td className='py-3 px-3'>Not sourced (see note 2 below)</td>
                      <td className='py-3 px-3'>Not sourced (see note 2 below)</td>
                      <td className='py-3 px-3'>Not sourced (see note 2 below)</td>
                      <td className='py-3 px-3'>No current LADWP tariff document could be retrieved; see note 2</td>
                      <td className='py-3 pl-3'>Attempted {dataVerifiedDisplay}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/60 text-xs mb-2'>PG&amp;E, SCE and SDG&amp;E figures: CPUC Public Advocates Office, <a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>Q2 2026 Electric Rates Report</a>, p.8, 20, 22, 24. Fetched {dataVerifiedDisplay}.</p>
              <p className='text-foreground/60 text-xs mb-2'><strong>Note 1 (SMUD):</strong> SMUD is a publicly owned utility and is not covered by the CPUC Public Advocates Office reports. SMUD does not publish a single blended, CPUC-style average rate, so no comparable 12-month change or &ldquo;most recent change&rdquo; percentage can be sourced for it. The $26.20/month figure differs from the &asymp;$27/month figure sometimes referenced elsewhere; $26.20 is the figure printed in the sourced schedule. A 2026/2027 SMUD board-approved rate change was not found this pass (the &ldquo;2026-2027 proposed rate changes&rdquo; page returned a 404).</p>
              <p className='text-foreground/60 text-xs mb-8'><strong>Note 2 (LADWP):</strong> LADWP is a publicly owned utility and is not covered by the CPUC Public Advocates Office reports. The only LADWP tariff document retrievable in this research pass (<a href={LADWP_STALE_PDF_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>ladwp.com/.../LADWP_Electric_Rates.pdf</a>) is dated July 1, 2009 and is not current; the ladwp.com residential-rates page and the rates.ladwp.com portal returned access errors to the research tool. No current LADWP rate is published on this page as a result.</p>

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

              <h2 id='rate-history' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>12-Month Rate History</h2>
              <p>The CPUC Public Advocates Office publishes this data <strong>quarterly</strong>, not monthly &mdash; so this table reflects the quarter-end snapshot each report captures rather than 12 separate calendar months. Where the underlying report gives a specific rate-change date within the quarter, that date is used instead of the report&apos;s cover date.</p>
              <div className='overflow-x-auto mb-3 not-prose'>
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
              <p>By <strong>CPUC Decision 24-05-028</strong> (issued 15 May 2024), PG&amp;E, SCE and SDG&amp;E (plus Bear Valley Electric, Liberty Utilities and PacifiCorp) were ordered to add an income-graduated fixed monthly charge alongside a reduced per-kWh volumetric rate:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>Tier 1 (CARE-enrolled households):</strong> &asymp; $6/month</li>
                <li><strong>Tier 2 (FERA-enrolled or deed-restricted affordable housing):</strong> &asymp; $12/month</li>
                <li><strong>Tier 3 (all other residential customers):</strong> $24.15/month</li>
              </ul>
              <p>Implementation was staggered by utility:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li><strong>SCE and SDG&amp;E:</strong> began Q4 2025 (SDG&amp;E&apos;s Base Services Charge took effect October 1, 2025 per the CPUC Public Advocates Office Q4 2025 report)</li>
                <li><strong>PG&amp;E, Bear Valley Electric, Liberty Utilities, PacifiCorp:</strong> began Q1 2026 (PG&amp;E&apos;s Base Services Charge took effect March 1, 2026 per Advice Letter 7846-E)</li>
              </ul>
              <p>This is a <strong>flat charge that does not vary with usage</strong>, layered on top of (and, for CARE customers, partly offset against) the volumetric rate &mdash; it is not the same thing as the &ldquo;current average rate&rdquo; figures above, which already reflect its effect on the class-average RAR where applicable.</p>
              <p className='text-foreground/60 text-xs mb-10'>Sources: <a href={DECISION_24_05_028_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Decision 24-05-028</a>, fetched {dataVerifiedDisplay}; <a href={Q2_2026_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>CPUC Public Advocates Office Q2 2026 Report</a>, pp. 20&ndash;24, fetched {dataVerifiedDisplay}.</p>

              <h2 id='pge-history' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>PG&amp;E Rate History and Recent Changes</h2>
              <p>PG&amp;E&apos;s residential average rate was 33.7&cent;/kWh as of June 2026, unchanged since a March 1, 2026 decrease of about 3.7% from January 1, 2026 rates (Advice Letter 7846-E). Over the trailing five quarterly snapshots this page tracks, PG&amp;E&apos;s reported rate moved 38.6&cent; (June 2025) &rarr; 37.8&cent; (Oct 2025) &rarr; 35.0&cent; (Jan 2026) &rarr; 33.7&cent; (Mar 2026) &rarr; 33.7&cent; (Jun 2026, no change). Over longer horizons, the Public Advocates Office reports PG&amp;E&apos;s rate up 8% over three years, 39% over five years and 69% over ten years. PG&amp;E&apos;s income-graduated Base Services Charge began March 1, 2026. See the current-rates and 12-month history tables above for full sourcing.</p>

              <h2 id='sce-history' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>SCE Rate History and Recent Changes</h2>
              <p>SCE&apos;s residential average rate was 34.4&cent;/kWh as of June 1, 2026, a roughly 0.1% decrease from January 1, 2026 rates (Advice Letter 5829-E). Over the trailing five quarterly snapshots, SCE&apos;s reported rate moved 31.2&cent; (June 2025) &rarr; 35.3&cent; (Oct 2025) &rarr; 34.5&cent; (Jan 2026) &rarr; 34.5&cent; (Mar 2026) &rarr; 34.4&cent; (Jun 2026). Over longer horizons, the Public Advocates Office reports SCE&apos;s rate up 4% over three years, 56% over five years and 101% over ten years &mdash; the largest ten-year and five-year increase of the three utilities on this page. SCE&apos;s income-graduated Base Services Charge began Q4 2025. See the current-rates and 12-month history tables above for full sourcing.</p>

              <h2 id='sdge-history' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>SDG&amp;E Rate History and Recent Changes</h2>
              <p>SDG&amp;E&apos;s residential average rate was 45.5&cent;/kWh as of June 1, 2026 &mdash; the highest of the three utilities on this page &mdash; a roughly 2.0% decrease from April 1, 2026 rates (Advice Letter 4843-E) following a FERC-ordered reduction in its Base Transmission Revenue Requirement. Over the trailing five quarterly snapshots, SDG&amp;E&apos;s reported rate moved 41.5&cent; (June 2025) &rarr; 41.0&cent; (Oct 2025) &rarr; 45.7&cent; (Jan 2026) &rarr; 45.7&cent; (Mar 2026) &rarr; 45.5&cent; (Jun 2026). Over longer horizons, the Public Advocates Office reports SDG&amp;E&apos;s rate up 5% over three years, 42% over five years and 97% over ten years. SDG&amp;E&apos;s income-graduated Base Services Charge began October 1, 2025. See the current-rates and 12-month history tables above for full sourcing.</p>

              <h2 id='methodology' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>How These Rates Are Calculated (Methodology)</h2>
              <p className='font-semibold text-foreground mb-2'>Primary sources used</p>
              <ol className='list-decimal pl-6 space-y-2'>
                <li><strong>CPUC Public Advocates Office quarterly Electric Rates Reports</strong> &mdash; the authoritative, independent (not utility-authored) source for the Residential Average Rate (RAR) figure used throughout this page. Published roughly one month after each quarter closes, at <a href={PAO_REPORTS_INDEX_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>publicadvocates.cpuc.ca.gov/press-room/reports-and-analyses</a>.</li>
                <li><strong>CPUC decisions and advice letters</strong> (docs.cpuc.ca.gov) for structural changes such as the income-graduated fixed charge (Decision 24-05-028) and the utility advice-letter filings cited by the Public Advocates Office reports.</li>
                <li><strong>Utility-published rate schedules</strong> (e.g. SMUD&apos;s Schedule R) for publicly owned utilities not covered by the CPUC Public Advocates Office reports.</li>
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

              <h2 id='faq' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>Frequently Asked Questions</h2>
              <div className='space-y-6'>
                <div>
                  <p className='font-semibold text-foreground mb-1'>What does &ldquo;residential average rate&rdquo; mean?</p>
                  <p className='m-0'>It is total residential class revenue divided by total residential kilowatt-hours sold &mdash; a blended average across every residential rate plan, time-of-use period and customer type at a utility. It is not the rate on any one household&apos;s specific tariff.</p>
                </div>
                <div>
                  <p className='font-semibold text-foreground mb-1'>Does this page include the California Climate Credit?</p>
                  <p className='m-0'>No. The figures on this page exclude the California Climate Credit, a twice-yearly bill credit funded by cap-and-trade allowance revenue, matching the convention the CPUC Public Advocates Office itself uses for these figures.</p>
                </div>
                <div>
                  <p className='font-semibold text-foreground mb-1'>Why is the 12-month change on this page not a CPUC-published figure?</p>
                  <p className='m-0'>The Public Advocates Office publishes 3-year, 5-year and 10-year change figures, not a 1-year figure. This page calculates its own 12-month change from two officially sourced quarterly snapshots and shows the arithmetic (see the box above the &ldquo;What Changed This Month&rdquo; section), so it stays auditable and is never mistaken for a CPUC-stated number.</p>
                </div>
                <div>
                  <p className='font-semibold text-foreground mb-1'>Why isn&apos;t there a Q3 2026 row in the rate-history table yet?</p>
                  <p className='m-0'>As of {dataVerifiedDisplay}, the CPUC Public Advocates Office had not yet published a Q3 2026 Electric Rates Report. Its cadence has been to publish roughly one month after quarter-end, so a Q3 2026 report (covering July&ndash;September 2026) is expected around late October&ndash;early November 2026.</p>
                </div>
                <div>
                  <p className='font-semibold text-foreground mb-1'>Does this page estimate savings or compare solar options?</p>
                  <p className='m-0'>No. This is a reference page of sourced, dated rate figures. It does not estimate savings, compare solar proposals, or name any installer.</p>
                </div>
              </div>

              <h2 id='sources' className='text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-24'>Sources and How We Update This Page</h2>
              <p>Every figure on this page traces to one of the primary sources below, each with the date it was fetched for this page.</p>
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
                    <tr className='border-b border-border'><td className='py-2 pr-4'>7</td><td className='py-2 px-3'><a href={SMUD_SCHEDULE_R_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>SMUD Residential Rate Schedule R (RF01)</a></td><td className='py-2 pl-3'>{dataVerifiedDisplay}</td></tr>
                    <tr><td className='py-2 pr-4'>8</td><td className='py-2 px-3'><a href={LADWP_STALE_PDF_URL} target='_blank' rel='noopener noreferrer' className={sourceLink}>LADWP electric rate PDF</a> (found to be stale &mdash; dated 2009; not used as current)</td><td className='py-2 pl-3'>Attempted {dataVerifiedDisplay} (rejected as non-current)</td></tr>
                  </tbody>
                </table>
              </div>
              <p className='text-sm text-foreground/70 mb-10'>This page is reviewed monthly; the rate tables above are substantively updated only when a new CPUC Public Advocates Office quarterly report publishes or a utility files a rate-changing advice letter the Public Advocates Office has not yet rolled up. See our <Link href='/methodology' className={sourceLink}>methodology page</Link> for how California Rate Relief sources and corrects its content generally.</p>
            </div>

            <IntentCTA cta='article_cta' variant='bill' />
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'><TrustedSources domain='crr' variant='compact' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
