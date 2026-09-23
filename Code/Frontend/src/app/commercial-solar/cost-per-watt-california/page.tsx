import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { Byline } from '@/components/trust/Byline';
import { TocRail, RAIL_GRID } from '@/components/trust/TocRail';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { ArticleCTA } from '@/components/shared/ArticleCTA';
import CommercialSolarCalculator from '@/components/landing/CommercialSolarCalculator';

const title = 'Commercial Solar Cost in California: What You Pay (2026)';
const description =
  'California commercial solar runs $2.0-$4.3/W by size and type (LBNL). See after-tax cost, utility savings, property tax, and the two 2027 deadlines.';
const h1 = 'Commercial Solar Cost in California: What You Actually Pay';
const canonicalUrl = 'https://ratereliefca.com/commercial-solar/cost-per-watt-california';
const VERIFIED = 'September 22, 2026';
const DATE_MODIFIED = '2026-09-22';
const DATE_PUBLISHED = '2026-04-23';

const trackingTheSunFull =
  'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf';
const trackingTheSunSummary =
  'https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_executive_summary.pdf';
const lbnl2026Update =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const nrel2024Benchmark = 'https://docs.nlr.gov/docs/fy25osti/92536.pdf';
const nrel2022Benchmark = 'https://docs.nlr.gov/docs/fy22osti/83586.pdf';
const seiaQ42025 = 'https://www.powermag.com/wp-content/uploads/2025/12/ussmi-q4-2025-es.pdf';
const irc48e = 'https://www.law.cornell.edu/uscode/text/26/48E';
const irsNotice202542 = 'https://www.irs.gov/pub/irs-drop/n-25-42.pdf';
const irsNotice202615 = 'https://www.irs.gov/pub/irs-drop/n-26-15.pdf';
const irc168 = 'https://uscode.house.gov/view.xhtml?req=(title:26%20section:168%20edition:prelim)';
const irc50 = 'https://uscode.house.gov/view.xhtml?req=(title:26%20section:50%20edition:prelim)';
const ftbForm100 = 'https://www.ftb.ca.gov/forms/2025/2025-100-booklet.html';
const boeLta2026034 = 'https://www.boe.ca.gov/proptaxes/pdf/lta26034.pdf';
const boeAnnotation610 = 'https://www.boe.ca.gov/proptaxes/pdf/610_0089.pdf';
const cdtfaReg1521 = 'https://cdtfa.ca.gov/lawguides/vol1/sutr/1521.html';
const cdtfa6377 =
  'https://cdtfa.ca.gov/industry/manufacturing-and-research-and-development-equipment-exemption/qualifications.htm';
const govCode66015 =
  'https://law.justia.com/codes/california/code-gov/title-7/division-1/chapter-7-5/section-66015/';
const sanDiegoBulletin301 =
  'https://www.sandiego.gov/development-services/forms-publications/information-bulletins/301';
const pgeB10Tariff = 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_B-10.pdf';
const pgeB19Tariff = 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_B-19.pdf';
const sdgeMediumComm =
  'https://www.sdge.com/sites/default/files/regulatory/Summary%20Table%20for%20Medium%20Comm%206-1-26.pdf';
const sdgeLargeComm =
  'https://www.sdge.com/sites/default/files/regulatory/Summary%20Table%20for%20Large%20Comm%206-1-26.pdf';
const cpucNbt =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing';
const pgeSolarBillingPlan =
  'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html';
const smudSsr = 'https://www.smud.org/Rate-Information/Solar-and-Storage-Rate';
const pgeRule21 =
  'https://www.pge.com/b2b/newgenerator/distributedgeneration/generationrule21/index.shtml';
const pgeInterconnectionTimeline =
  'https://www.pge.com/assets/pge/docs/about/doing-business-with-pge/generation-interconnection-process-timeline.pdf';
const pgeHandbook =
  'https://www.pge.com/assets/pge/docs/about/doing-business-with-pge/distribution-interconnection-handbook.pdf';
const sceRule21Faq = 'https://www.sce.com/sites/default/files/inline-files/Rule21_FAQ%20(1).pdf';
const aiAddendum =
  'https://passivehousenetwork.org/wp-content/uploads/2021/02/AI_821_Green_Commercial_Interactive1.pdf';
const appraisalVa9 =
  'https://www.sips.org/documents/Valuation-of-Green-and-High-Performance-Commercial-Property.pdf';
const ekq2010 = 'https://escholarship.org/uc/item/507394s4';
const ekq2013 = 'https://escholarship.org/content/qt3k16p2rj/qt3k16p2rj.pdf';
const cbreLogistics =
  'https://www.cbre.com/insights/reports/the-impact-of-on-site-rooftop-solar-pv-on-logistics-property-values';
const jllRooftop = 'https://www.jll.com/en-us/insights/optimizing-rooftop-potential';
const lbnlSellingIntoSun = 'https://emp.lbl.gov/publications/selling-sun-price-premium-analysis';
const nberSolarPremium = 'https://www.nber.org/system/files/working_papers/w17200/w17200.pdf';
const cbreCapRate = 'https://www.cbre.com/insights/reports/us-cap-rate-survey-h1-2026';
const sgipMetrics = 'https://www.selfgenca.com/home/program_metrics/';
const reapFaq = 'https://www.rd.usda.gov/media/file/download/usda-rd-reap-faq-03312026.pdf';
const reapNofo =
  'https://www.federalregister.gov/documents/2024/10/16/2024-23854/notice-of-funding-opportunity-for-the-rural-energy-for-america-program-for-fiscal-years-2025-2026';
const dfpiPace =
  'https://dfpi.ca.gov/regulated-industries/property-assessed-clean-energy-pace-program-administrators/';
const cecTitle24Pv =
  'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-15';
const cecTitle24Battery =
  'https://www.energy.ca.gov/sites/default/files/2025-03/Whats_new_for_2025_Nonresidential_ada.pdf';
const cpucAb2143 =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/prevailing-wage-for-qualified-renewable-energy-facilities';
const cslbC10 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C10';
const cslbC46 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C46';
const smudBusiness = 'https://www.smud.org/Going-Green/Solar-for-Your-Business';

const faqs = [
  {
    question: 'How much does commercial solar cost per watt in California?',
    answer:
      "California's most current size- and customer-specific figures come from LBNL's Tracking the Sun 2024 Edition, covering 2023 installations (published August 2024): large non-residential systems, over 100 kW, ran a median $2.3 per watt for for-profit commercial customers, $2.0 per watt for agricultural customers, and $4.1 per watt for tax-exempt nonprofit and government customers. Small non-residential systems, 100 kW or less, ran $2.5 to $4.3 per watt nationally in the same year. All figures are gross installed prices before any incentive.",
  },
  {
    question: 'How much does a 100 kW commercial solar system cost in California?',
    answer:
      'A 100 kW system sits at the boundary LBNL uses to split small and large non-residential pricing, so a blended average is not useful at that exact size. See our dedicated 100 kW commercial solar cost guide for the size-specific figures and the scope questions to ask each bidder.',
  },
  {
    question: 'How much does a 1 MW commercial solar system cost in California?',
    answer:
      'A 1 MW system falls well inside the large non-residential band, where 2023 California medians ran $2.0 to $4.1 per watt depending on customer type. See our 1 MW commercial solar cost guide for the size-specific breakdown, including how a project at this scale differs from a rooftop-only build.',
  },
  {
    question: 'Is the federal solar tax credit still available for commercial projects in 2026?',
    answer:
      'Yes, under IRC Section 48E, at 6% base or 30% for a facility under 1 MW net output or one meeting prevailing-wage and apprenticeship rules. But the credit is zero for a wind or solar facility placed in service after December 31, 2027, unless construction began on or before July 4, 2026. That date has passed, so a project starting construction today must be placed in service by December 31, 2027 to get any credit at all.',
  },
  {
    question: 'What is MACRS bonus depreciation, and does California allow it?',
    answer:
      "Commercial solar is 5-year MACRS property, and federal law currently allows 100% bonus depreciation in year one for property placed in service after January 19, 2025, with the depreciable basis reduced by only 50% of the ITC claimed. California does not conform to federal bonus depreciation. On the state return, the bonus is added back and the same basis is depreciated on the standard, non-bonus 5-year MACRS schedule instead.",
  },
  {
    question: "Does installing commercial solar affect my property's taxes?",
    answer:
      "Under Revenue and Taxation Code Section 73, the added value of an active solar energy system, including paired battery storage, is excluded from your property's reassessed value. That exclusion goes inoperative January 1, 2027. A system in process or completed before that date keeps the exclusion permanently, until the property changes ownership. Under current law, a system placed in service on or after January 1, 2027 gets no new-construction exclusion.",
  },
  {
    question: "Does commercial solar increase a property's value?",
    answer:
      "Appraisers primarily use an income approach for solar on income-producing property, capitalizing the added or avoided income through the property's net operating income. There is no peer-reviewed study isolating a solar-specific value premium for California commercial property. The closest evidence is whole-building green-certification research (not solar-specific, and not California) and a handful of non-California industrial case studies from CBRE and JLL. Treat any premium as a income-approach question for your own appraiser, not a fixed percentage.",
  },
  {
    question: 'What is the payback period for commercial solar in California?',
    answer:
      "Payback depends on your utility tariff's demand charges, your export value under the Net Billing Tariff, your ownership structure, and whether you can use the ITC and depreciation directly. There is no single statewide payback figure we can responsibly publish. Use the calculator above with your own system size and utility bill, and see PPA versus purchase for how ownership changes who captures the tax benefit.",
  },
  {
    question: 'Is a PPA or a direct purchase better for a California business?',
    answer:
      'It depends on whether you can use the §48E credit and depreciation. A direct purchase captures both but requires capital and taxable income; a PPA or lease shifts those tax benefits to a third-party owner in exchange for no upfront cost and a monthly or per-kWh payment. See our PPA versus purchase guide for California-specific terms on both.',
  },
  {
    question: 'What permits does a commercial solar project need in California?',
    answer:
      "A commercial contractor licensed for solar work (typically a C-46 or C-10 license) pulls building and electrical permits from the local jurisdiction. Government Code Section 66015 caps the fee statewide at $1,000 for systems up to 50 kW, plus $7 per kW for the 51-250 kW portion, plus $5 per kW above 250 kW. Actual city fees are often lower — San Diego, for example, charges $758 for plan check plus $290 for inspection on the first 100 kW. Confirm your city's current schedule directly.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/commercial-solar/cost-per-watt-california' },
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: `${DATE_PUBLISHED}T00:00:00Z`,
    modifiedTime: `${DATE_MODIFIED}T00:00:00Z`,
    url: canonicalUrl,
  },
};

export default function CommercialSolarCost() {
  return (
    <PublicLayout>
      <Header />
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={title}
        url={canonicalUrl}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        description={description}
      />
      <FaqJsonLd items={faqs} />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          {/* Article column plus the desktop "On this page" rail (design pass 2). */}
          <div className={`mx-auto max-w-6xl ${RAIL_GRID}`}>
          <article className="min-w-0 max-w-3xl">
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/commercial-solar" className="transition-colors hover:text-primary">Commercial Solar</Link>
              <span>/</span>
              <span className="font-medium text-foreground">Cost &amp; What You Pay</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Commercial Solar Cost &amp; Incentives
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              {/* Byline above the first paragraph; the date is DATE_MODIFIED,
                  the same value the Article schema carries. */}
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources">
                <span>16 min read</span>
              </Byline>
              <p className="mt-4 text-lg text-muted-foreground">
                Installed cost, the federal and state tax mechanics, what the system saves on
                the utility bill, and what it does to a property&apos;s tax bill and value &mdash;
                worked through with sourced, dated figures, not a sales estimate.
              </p>
            </header>

            <div id="cost-per-watt-body" className="prose prose-slate max-w-none [&_h2]:scroll-mt-24">
              <p>
                California non-residential solar ran a median $2.0 to $4.1 per watt for systems
                over 100 kW in 2023, split by customer type, and $2.5 to $4.3 per watt nationally
                for systems 100 kW or less, per Lawrence Berkeley National Laboratory&apos;s{' '}
                <a href={trackingTheSunSummary} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Tracking the Sun 2024 Edition
                </a>{' '}
                (August 2024).{/* costs-20, costs-24, costs-25, costs-26 */} Two dates now drive
                whether a project captures the federal credit and the state property-tax break at
                all: construction must have started by <strong>July 4, 2026</strong> or the
                system must be placed in service by <strong>December 31, 2027</strong> to get any
                federal Section 48E credit,{/* fedtax-13, fedtax-14 */} and the California
                property-tax exclusion for solar goes inoperative on{' '}
                <strong>January 1, 2027</strong>.{/* catax-05 */} Verified {VERIFIED}.
              </p>

              <div className="my-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border-2 border-status-warning/30 bg-status-warning/10 p-5">
                  <div className="mb-2 flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-status-warning" aria-hidden="true" />
                    <h3 className="font-bold text-foreground">Federal credit: December 31, 2027</h3>
                  </div>
                  <p className="text-sm text-foreground/90">
                    Section 48E does not apply to a wind or solar facility placed in service after
                    December 31, 2027, unless construction began on or before July 4, 2026{' '}.{/* fedtax-13, fedtax-14 */} That date has already passed. Any California
                    commercial solar project starting construction now needs a firm placed-in-service
                    date no later than December 31, 2027, or the federal credit is zero
                    {' '}.{/* fedtax-14 */}
                  </p>
                </div>
                <div className="rounded-xl border-2 border-status-warning/30 bg-status-warning/10 p-5">
                  <div className="mb-2 flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-status-warning" aria-hidden="true" />
                    <h3 className="font-bold text-foreground">Property tax: inoperative January 1, 2027</h3>
                  </div>
                  <p className="text-sm text-foreground/90">
                    Revenue &amp; Taxation Code §73 keeps a solar system&apos;s added value off your
                    property&apos;s reassessed value. That exclusion goes inoperative January 1, 2027
                    {' '}.{/* catax-05 */} A system in process or completed before then keeps the
                    exclusion permanently, until the property changes ownership;{/* catax-06 */} a
                    system placed in service on or after January 1, 2027 currently gets none
                    {' '}.{/* catax-06, catax-10 */}
                  </p>
                </div>
              </div>

              <div className="my-10 rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="mb-3 mt-0 text-xl font-bold text-foreground">See your own numbers</h2>
                <p className="text-muted-foreground">
                  Everything above is a published median or a statutory rule &mdash; not your
                  building&apos;s numbers. The calculator below takes your system size, utility
                  schedule and ownership structure and works through the same arithmetic this page
                  walks through by hand: gross cost, the §48E credit, depreciation, an estimated
                  bill offset, and a payback range. It is a planning tool, not a quote &mdash; a
                  written proposal from a licensed contractor is the only number that actually
                  binds anyone.
                </p>
              </div>

              <CommercialSolarCalculator />

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Installed cost by system size
              </h2>
              <p>
                LBNL only publishes a state-level figure where at least 20 observations are
                available, and it splits non-residential systems into small (100 kW or less) and
                large (more than 100 kW) bands, so a single blended &ldquo;commercial&rdquo;
                average mixes two different markets and, in California, three different customer
                types. LBNL&apos;s newest update, published August 2026, reports non-residential
                installed prices as &ldquo;essentially flat year-over-year&rdquo; from 2024 to
                2025, but did not publish an extractable size-class or state-level $/W table this
                cycle {/* costs-41 */} &mdash; so the 2023 California figures below remain the
                most current size- and customer-specific numbers available.
              </p>
              <div className="my-8 overflow-x-auto rounded-xl border border-border">
                <table className="min-w-full text-sm">
                  <caption className="p-4 text-left text-sm text-muted-foreground">
                    Gross installed price, before incentives, by segment. California figures are
                    2023-installation medians; national figures are 2023 20th&ndash;80th
                    percentile bands. Source: LBNL Tracking the Sun 2024 Edition. Verified {VERIFIED}.
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Segment</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Size band</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Price ($/W)</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Vintage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">California &mdash; commercial customers</td>
                      <td className="px-4 py-3 text-foreground">&gt;100 kW</td>
                      <td className="px-4 py-3 text-foreground">$2.30{/* costs-24 */}</td>
                      <td className="px-4 py-3 text-foreground">2023 installs</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">California &mdash; agricultural customers</td>
                      <td className="px-4 py-3 text-foreground">&gt;100 kW</td>
                      <td className="px-4 py-3 text-foreground">$2.00{/* costs-25 */}</td>
                      <td className="px-4 py-3 text-foreground">2023 installs</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">California &mdash; tax-exempt (nonprofit/gov&apos;t)</td>
                      <td className="px-4 py-3 text-foreground">&gt;100 kW</td>
                      <td className="px-4 py-3 text-foreground">$4.10{/* costs-26 */}</td>
                      <td className="px-4 py-3 text-foreground">2023 installs</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">National &mdash; small non-residential</td>
                      <td className="px-4 py-3 text-foreground">&le;100 kW</td>
                      <td className="px-4 py-3 text-foreground">$2.50&ndash;$4.30{/* costs-20 */}</td>
                      <td className="px-4 py-3 text-foreground">2023 installs</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">National &mdash; large non-residential</td>
                      <td className="px-4 py-3 text-foreground">&gt;100 kW</td>
                      <td className="px-4 py-3 text-foreground">$1.70&ndash;$3.10{/* costs-21 */}</td>
                      <td className="px-4 py-3 text-foreground">2023 installs</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">National &mdash; commercial segment (industry)</td>
                      <td className="px-4 py-3 text-foreground">Any</td>
                      <td className="px-4 py-3 text-foreground">$1.71{/* costs-29 */}</td>
                      <td className="px-4 py-3 text-foreground">Q3 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Industry pricing data corroborates the direction: SEIA and Wood Mackenzie&apos;s{' '}
                <a href={seiaQ42025} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  U.S. Solar Market Insight
                </a>{' '}
                puts the national commercial segment at $1.71 per watt in Q3 2025, up 9%
                year-over-year from $1.57 in Q3 2024, driven mainly by a 50% year-over-year jump
                in racking and electrical balance-of-system costs offsetting cheaper modules
                {' '}{/* costs-29 */} &mdash; the first sustained increase in over a decade of
                declines.{/* costs-27 */}
              </p>
              <p>
                One caveat on NREL&apos;s figures, which show up often in solar pricing
                discussions: since 2023, NREL&apos;s annual &ldquo;commercial&rdquo; cost
                benchmark models a 3-MWdc <strong>ground-mount</strong> system, not a rooftop or
                carport project in the 25 kW&ndash;1 MW range most California businesses build
                {' '}.{/* costs-01, costs-07 */} Its 2024 figure, $1.55 per watt{' '}
                <a href={nrel2024Benchmark} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  (NREL/TP-7A40-92536)
                </a>
                , should not be read as a rooftop number.{/* costs-01 */} NREL&apos;s last
                rooftop-scale (200 kW) commercial benchmark, from Q1 2022, was $1.84 per watt
                modeled market price{' '}
                <a href={nrel2022Benchmark} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  (NREL/TP-7A40-83586)
                </a>{' '}
                &mdash; four years stale, but still the most recent size-appropriate NREL figure
                {' '}.{/* costs-08 */}
              </p>
              <p>
                For a manufacturing or warehouse site, an industrial system is reported in the
                same non-residential bands as any other commercial system of the same DC size; the
                operating profile (shift patterns, process heat, compressors, refrigeration) sets
                the demand curve, not a separate industrial price table. See{' '}
                <Link href="/commercial-solar/warehouse-solar-california" className="text-primary underline">
                  warehouse solar
                </Link>{' '}
                and{' '}
                <Link href="/commercial-solar/agricultural-solar-california" className="text-primary underline">
                  agricultural solar
                </Link>
                {' '}for the load-schedule questions those projects raise.
              </p>
              <p>
                Because a single average hides which side of the 100 kW split (and which customer
                type) a project sits on, work through the size-specific guides rather than a
                blended figure:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <Link href="/commercial-solar/commercial-solar-cost-100kw-california" className="text-primary underline">
                    100 kW commercial solar cost in California
                  </Link>
                </li>
                <li>
                  <Link href="/commercial-solar/commercial-solar-cost-500kw-california" className="text-primary underline">
                    500 kW commercial solar cost in California
                  </Link>
                </li>
                <li>
                  <Link href="/commercial-solar/commercial-solar-cost-1mw-california" className="text-primary underline">
                    1 MW commercial solar cost in California
                  </Link>
                </li>
              </ul>
              <p>
                For a line-by-line quote checklist rather than a benchmark, see{' '}
                <Link href="/blog/commercial-solar-installation-cost-california" className="text-primary underline">
                  our commercial solar quote checklist
                </Link>
                , which walks through what to ask every bidder to itemize before comparing price.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What&apos;s in the price: cost breakdown
              </h2>
              <p>
                NREL&apos;s 2024 component breakdown (on its 3-MW ground-mount model, so treat the
                total with the caveat above) splits as follows:
              </p>
              <div className="my-8 overflow-x-auto rounded-xl border border-border">
                <table className="min-w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Component</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">$/Wdc</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">Module</td>
                      <td className="px-4 py-3 text-foreground">$0.35{/* costs-02 */}</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">Inverter</td>
                      <td className="px-4 py-3 text-foreground">$0.06{/* costs-03 */}</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">Balance of system (racking + electrical)</td>
                      <td className="px-4 py-3 text-foreground">$0.37{/* costs-04 */}</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">Labor</td>
                      <td className="px-4 py-3 text-foreground">$0.36{/* costs-05 */}</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">Soft costs (permitting, overhead, margin)</td>
                      <td className="px-4 py-3 text-foreground">$0.42{/* costs-06 */}</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/40">
                      <td className="px-4 py-3 font-bold text-foreground">Total (2024)</td>
                      <td className="px-4 py-3 font-bold text-foreground">$1.55{/* costs-01 */}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                For a rooftop-scale project, NREL&apos;s last granular breakdown (Q1 2022, 200 kW)
                itemized permitting, inspection and interconnection at $18,053 per project &mdash;
                about $0.09 per watt &mdash; including a $5,713 fixed permitting fee, a national
                average sales tax of 5.8% on hardware, EPC overhead of 13% on materials and 54% on
                labor, developer overhead of 30%, contingency of 4%, and profit margin of 7%
                {' '}.{/* costs-09 */} No NREL or LBNL source publishes a commercial
                carport-specific cost premium over rooftop; the only mounting-type coefficient
                either publishes ($0.40/W for ground-mounting) is explicitly scoped to residential
                systems,{/* costs-28 */} so ask a carport bidder to itemize the structural cost
                separately rather than assume a rule of thumb.
              </p>
              <p>
                Two buildings with the same annual kWh can still land on very different prices.
                Roof condition and remaining life, main switchgear and panel capacity,
                interconnection study results, whether the tariff&apos;s demand charges are
                modeled (not just annual kWh), mounting type, and ownership structure all move the
                number independently of system size. See{' '}
                <Link href="/commercial-solar/commercial-solar-ppa-vs-purchase-california" className="text-primary underline">
                  PPA versus purchase
                </Link>{' '}
                and{' '}
                <Link href="/commercial-solar/financing-options" className="text-primary underline">
                  commercial financing options
                </Link>{' '}
                for how ownership changes both the price you sign and who keeps the tax benefit.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What you actually pay: federal tax treatment
              </h2>
              <p>
                A California business buying commercial solar in 2026 claims the credit under IRC{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Section 48E
                </a>
                , not the older Section 48. The base rate is 6%; it rises to 30% for a facility
                under 1 MW net output, or one meeting prevailing-wage and apprenticeship rules
                {' '}.{/* fedtax-01, fedtax-02, fedtax-03 */} Bonus adders exist for energy
                communities, domestic content, and low-income siting, but each carries its own
                eligibility test and a shrinking domestic-content cost-ratio schedule (50% in
                2026, rising to 55% after December 31, 2026) {/* fedtax-05, fedtax-08 */} &mdash;
                confirm any bonus with your tax advisor before counting on it. As the callouts
                above state, the credit does not apply at all to a facility placed in service
                after December 31, 2027 unless construction began on or before July 4, 2026, a
                date that has already passed.{/* fedtax-13, fedtax-14 */}
              </p>
              <p>
                On depreciation, commercial solar is 5-year MACRS property, and 100% federal bonus
                depreciation currently applies to property acquired and placed in service after
                January 19, 2025.{/* fedtax-28, fedtax-30 */} The depreciable basis is reduced by
                only 50% of the ITC claimed, not the full credit.{/* fedtax-33 */} Here is what
                that looks like on a representative project, combining the credit with year-one
                bonus depreciation at the federal level only:
              </p>
              <div className="my-8 overflow-x-auto rounded-xl border border-border">
                <table className="min-w-full text-sm">
                  <caption className="p-4 text-left text-sm text-muted-foreground">
                    Illustrative arithmetic on sourced statutory rates, not a published LBNL/IRS
                    figure. Federal treatment only; see California non-conformity below.
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Step</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">System cost</td>
                      <td className="px-4 py-3 text-foreground">$500,000</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">ITC at 30% (§48E(a)(2))</td>
                      <td className="px-4 py-3 text-foreground">$150,000{/* fedtax-01, fedtax-02 */}</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">Basis reduction, 50% of ITC (§50(c)(3)(A))</td>
                      <td className="px-4 py-3 text-foreground">$75,000{/* fedtax-33 */}</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">Depreciable basis</td>
                      <td className="px-4 py-3 text-foreground">$425,000</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">Year-1 federal bonus depreciation (100%, §168(k)(1))</td>
                      <td className="px-4 py-3 text-foreground">$425,000{/* fedtax-30 */}</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">Year-1 depreciation&apos;s tax value at 21% federal corporate rate</td>
                      <td className="px-4 py-3 text-foreground">&asymp;$89,250</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/40">
                      <td className="px-4 py-3 font-bold text-foreground">Combined Year-1 federal benefit</td>
                      <td className="px-4 py-3 font-bold text-foreground">&asymp;$239,250 (&asymp;48% of cost)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Read that last row carefully: the credit is a dollar-for-dollar reduction in tax
                owed, while the depreciation figure is a deduction multiplied by a tax rate &mdash;
                two different mechanisms, added here only to show the combined year-one federal
                effect, not a single line item you will see on a return.
              </p>
              <p>
                California does not conform to federal bonus depreciation. Because the state&apos;s
                general IRC conformity date is fixed at January 1, 2025, before the federal law
                creating the current 100% bonus even existed, a California return must add back
                the bonus and instead depreciate the same $425,000 basis on the standard,
                non-bonus 5-year MACRS schedule.{/* fedtax-41, catax-29 */} California&apos;s
                corporate tax rate is 8.84% for C corporations (1.5% for S corporations), plus an
                $800 minimum franchise tax regardless of profitability,{/* fedtax-38, fedtax-39,
                catax-26, catax-27, catax-28 */} and there is no California state solar tax
                credit.{/* catax-30 */}
              </p>
              <p>
                The credit also remains transferable under §6418 and eligible for elective (direct)
                pay under §6417 for tax-exempt and governmental entities,{/* fedtax-22,
                fedtax-24 */} though both are now subject to new foreign-entity restrictions
                phased in mostly for construction beginning after December 31, 2025 or tax years
                beginning after July 4, 2025;{/* fedtax-18, fedtax-19, fedtax-21 */} for an
                ordinary California business with no foreign ownership or foreign-sourced
                equipment financing, these are unlikely to bite, but panel, inverter and racking
                sourcing should be checked against current guidance before relying on the full
                credit amount. Recapture follows a five-year vesting schedule if the property is
                sold or changes use before then: 100% of the credit is recaptured in year one,
                declining 80/60/40/20% in years two through five, and zero after.{/* fedtax-34,
                fedtax-35 */}
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What commercial solar saves on the utility bill
              </h2>
              <p>
                California&apos;s commercial tariffs price energy and demand separately, and
                demand charges &mdash; billed on the single highest metered kW in a period, not on
                total kWh &mdash; do not move nearly as much as a system&apos;s annual production
                does. A system that flattens most of a building&apos;s energy use can still leave
                the one interval that sets the demand charge largely untouched, which is why
                storage controls belong on the same proposal as the panels, not treated as a
                separate line item.
              </p>
              <div className="my-8 overflow-x-auto rounded-xl border border-border">
                <table className="min-w-full text-sm">
                  <caption className="p-4 text-left text-sm text-muted-foreground">
                    Selected commercial TOU schedules, Secondary voltage. Figures are the bundled
                    or total electric rate on a non-event day; each utility also charges separate
                    non-bypassable and public-purpose components. Verified {VERIFIED}.
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Utility / schedule</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Customer/basic charge</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Summer on-peak demand</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Summer on-peak energy</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Effective</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">
                        <a href={pgeB10Tariff} target="_blank" rel="noopener noreferrer" className="text-primary underline">PG&amp;E B-10</a>{' '}(medium)
                      </td>
                      <td className="px-4 py-3 text-foreground">$11.37/day{/* rates-05 */}</td>
                      <td className="px-4 py-3 text-foreground">$20.50/kW{/* rates-06 */}</td>
                      <td className="px-4 py-3 text-foreground">$0.339/kWh{/* rates-06 */}</td>
                      <td className="px-4 py-3 text-foreground">Mar 1, 2026</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">
                        <a href={pgeB19Tariff} target="_blank" rel="noopener noreferrer" className="text-primary underline">PG&amp;E B-19</a>{' '}(large, mandatory)
                      </td>
                      <td className="px-4 py-3 text-foreground">$58.63/day{/* rates-07 */}</td>
                      <td className="px-4 py-3 text-foreground">$46.16/kW{/* rates-08 */}</td>
                      <td className="px-4 py-3 text-foreground">$0.186/kWh{/* rates-08 */}</td>
                      <td className="px-4 py-3 text-foreground">Mar 1, 2026</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">
                        <a href={sdgeMediumComm} target="_blank" rel="noopener noreferrer" className="text-primary underline">SDG&amp;E TOU-M</a>{' '}(medium, &le;100kW)
                      </td>
                      <td className="px-4 py-3 text-foreground">$209.77/mo{/* rates-13 */}</td>
                      <td className="px-4 py-3 text-foreground">$30.34/kW*{/* rates-13 */}</td>
                      <td className="px-4 py-3 text-foreground">$0.319/kWh{/* rates-14 */}</td>
                      <td className="px-4 py-3 text-foreground">Jun 1, 2026</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">
                        <a href={sdgeLargeComm} target="_blank" rel="noopener noreferrer" className="text-primary underline">SDG&amp;E AL-TOU-L</a>{' '}(large, &le;500kW)
                      </td>
                      <td className="px-4 py-3 text-foreground">$234.63/mo{/* rates-09 */}</td>
                      <td className="px-4 py-3 text-foreground">$69.09/kW{/* rates-10 */}</td>
                      <td className="px-4 py-3 text-foreground">$0.283/kWh{/* rates-10 */}</td>
                      <td className="px-4 py-3 text-foreground">Jun 1, 2026</td>
                    </tr>
                  </tbody>
                </table>
                <p className="px-4 pb-4 text-xs text-muted-foreground">
                  * TOU-M&apos;s demand charge is non-coincident, applied to the higher of monthly
                  maximum demand or 50% of annual maximum demand{' '}.{/* rates-13 */} Both SDG&amp;E
                  schedules also carry a wildfire-fund plus DWR-bond non-bypassable charge of
                  $0.00591/kWh, constant across every period and season{' '}.{/* rates-15 */}
                </p>
              </div>
              <p>
                Export compensation for anyone interconnecting on or after April 15, 2023 runs
                through the CPUC&apos;s{' '}
                <a href={cpucNbt} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Net Billing Tariff
                </a>{' '}
                (D.22-12-056, adopted December 15, 2022): hourly, Avoided Cost Calculator-based
                values, locked in as a &ldquo;vintage&rdquo; for nine years from interconnection
                {' '}.{/* rates-23, rates-24 */} PG&amp;E&apos;s own billing system did not start
                billing business customers under its{' '}
                <a href={pgeSolarBillingPlan} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Solar Billing Plan
                </a>{' '}
                until March 2026, roughly three years after the policy&apos;s effective date
                {' '}.{/* rates-25 */} SMUD, outside CPUC jurisdiction, pays a flat{' '}
                <a href={smudSsr} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  9.6 cents per kWh
                </a>{' '}
                for exported commercial, industrial and agricultural solar, effective June 1, 2026,
                regardless of time of day or season.{/* rates-35 */} SCE&apos;s current,
                non-real-time-pricing commercial TOU-GS tariff sheets and LADWP&apos;s current
                commercial $/kWh rate levels could not be verified from a primary source at
                publication &mdash; rather than estimate, we are saying so plainly and pointing you
                to each utility&apos;s own current rate page before you model a bill offset on
                either one.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Does commercial solar raise a property&apos;s value?
              </h2>
              <p>
                Both the Appraisal Institute&apos;s{' '}
                <a href={aiAddendum} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Commercial Green and Energy Efficient Addendum
                </a>{' '}
                (2015) and the Appraisal Foundation&apos;s{' '}
                <a href={appraisalVa9} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Valuation Advisory #9
                </a>{' '}
                (2018) direct appraisers to the income approach as primary for solar on
                income-producing property, using the cost approach as a check.{/* value-01,
                value-09 */} Where solar is leased or under a PPA, VA-9 instructs appraisers to
                examine the contract terms for how they affect &ldquo;the amount and durability of
                net income&rdquo;,{/* value-10 */} and both bodies flag the sales-comparison
                approach as limited by thin transaction data for specialized systems like solar
                {' '}.{/* value-12 */}
              </p>
              <p>
                Peer-reviewed evidence isolating a solar-specific value premium for California
                commercial property does not exist. The closest research measures whole-building
                LEED/Energy Star certification, not solar in isolation: Eichholtz, Kok &amp;
                Quigley found a roughly 3% contract rent premium and a 16% sale-price premium for
                certified office buildings in 2010, and a roughly 3% contract rent premium with a
                13%-plus sale-price premium in a larger 2013 follow-up {/* value-13, value-14,
                value-16, value-17 */} &mdash; labeled certification-based, not solar-specific. The
                closest solar-only figures are industry, not academic, and not Californian: CBRE
                found a 4.2% value uplift on logistics property from on-site rooftop solar in{' '}
                <strong>Continental Europe</strong>{' '},{/* value-23 */} and JLL documented two U.S.
                industrial-property case examples, 4.4% (New Jersey) and 3.7% (Baltimore-D.C.),
                from third-party rooftop-solar leases valued by discounted cash flow of the lease
                income.{/* value-24 */} The well-established residential literature &mdash; LBNL&apos;s
                &ldquo;Selling Into the Sun&rdquo; (about $4/W, or roughly $15,000, for an average
                home) and a California-specific NBER study of San Diego and Sacramento County home
                sales (3.5&ndash;3.6%) &mdash; is <strong>residential</strong> and should not be
                applied to commercial property.{/* value-21, value-20 */} National commercial cap
                rates were &ldquo;broadly stable&rdquo; around 6.6% in CBRE&apos;s H1 2026 survey,
                with no California-specific table publicly available.{/* value-27 */}
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Property tax, sales tax, and permit fees
              </h2>
              <p>
                Under R&amp;T §73, the construction or addition of an active solar energy system
                is excluded from &ldquo;newly constructed&rdquo; for reassessment purposes; storage
                devices and power-conditioning equipment through the point of electricity
                conveyance are included as part of the excluded system.{/* catax-01, catax-03 */}
                The exclusion applies to commercial and industrial property, including utility-scale
                solar &mdash; a 2012 Board of Equalization annotation found no language restricting
                it{' '}
                <a href={boeAnnotation610} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  (Assessors&apos; Handbook annotation 610.0089)
                </a>{' '}.{/* catax-13 */} Systems 20 MW or larger instead get a phased-down schedule
                (Nonqualified Active Solar Energy Systems), starting at 100% exclusion and
                stepping to roughly 80/60/50% at years 1, 4 and 7 {/* catax-14 */} &mdash; most
                behind-the-meter C&amp;I systems are far under that threshold. Per{' '}
                <a href={boeLta2026034} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  BOE Letter to Assessors 2026/034
                </a>{' '}
                (September 1, 2026, the most current guidance available), the exclusion goes
                inoperative January 1, 2027;{/* catax-05 */} a system in process or completed
                before then keeps the exclusion until a subsequent change of ownership
                {' '},{/* catax-06 */} and there is currently no successor statute for a system
                placed in service on or after that date.{/* catax-06, catax-10 */} A separate
                filing rule, effective the same date, gives an initial purchaser of a newly built
                structure with incorporated solar three years to file the exclusion claim
                {' '}.{/* catax-12 */}
              </p>
              <p>
                On sales and use tax, CDTFA{' '}
                <a href={cdtfaReg1521} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Regulation 1521
                </a>{' '}
                treats a commercial solar install as a construction contract: most rack-mounted
                rooftop and free-standing ground-mount arrays are &ldquo;fixtures,&rdquo; taxed to
                the contractor as retailer on the full selling price, while true
                building-integrated PV (roofing-integrated panels or PV skylights) is taxed as a
                &ldquo;material&rdquo; on cost only;{/* catax-17 */} labor to affix a finished
                panel to its racking is separately exempt.{/* catax-18 */} A partial exemption
                under{' '}
                <a href={cdtfa6377} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  R&amp;T §6377.1
                </a>{' '}
                shaves 3.9375 percentage points off the combined rate,{/* catax-21 */} but it only
                reaches a business that is itself a manufacturer, R&amp;D firm, or electric
                utility/generator by NAICS code &mdash; a typical non-manufacturing business
                installing solar on its own building generally does not qualify.{/* catax-23 */}
              </p>
              <p>
                Permit fees are capped statewide by Government Code §66015 at $1,000 for a
                commercial system up to 50 kW, plus $7 per kW for the 51&ndash;250 kW portion, plus
                $5 per kW above 250 kW{' '}
                <a href={govCode66015} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  (effective through January 1, 2034)
                </a>{' '}.{/* catax-33 */} Actual city schedules are often lower: San Diego charges $758
                plan-check plus $290 inspection for the first 100 kW, and $264 plan-check plus
                $145 inspection for each additional 100 kW, plus a separate electrical permit fee
                {' '}
                <a href={sanDiegoBulletin301} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  (Information Bulletin 301)
                </a>{' '}.{/* catax-35 */} Confirm your own jurisdiction&apos;s current fee schedule
                directly.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Incentives and mandates
              </h2>
              <p>
                SGIP&apos;s general-market (non-equity) non-residential storage tier pays $0.25/Wh
                at Step 5, but that Large-Scale Storage budget is currently shown{' '}
                <a href={sgipMetrics} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Closed
                </a>{' '}
                in both PG&amp;E ($12.0M step) and SCE ($2.3M step) territory;{/* programs-01,
                programs-02, programs-03 */} equity tiers ($0.85&ndash;$1.00/Wh) have narrower
                site-eligibility rules.{/* programs-04, programs-05 */} See{' '}
                <Link href="/commercial-solar/sgip-battery-storage" className="text-primary underline">
                  our SGIP battery storage page
                </Link>{' '}
                (which carries a published correction) before assuming a reservation is available.
                USDA REAP grants (up to 50% of eligible cost for IRA-funded categories) are
                currently paused while the agency rescinds its prior notice and rewrites the
                underlying rule under Executive Order 14315; guaranteed loans, up to 75% of
                eligible project cost, remain open.{/* programs-16, programs-12 */}
              </p>
              <p>
                C-PACE assessments are collected on the county property tax bill under Streets
                &amp; Highways Code §5898.10/.20. Four{' '}
                <a href={dfpiPace} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  DFPI-licensed program administrators
                </a>{' '}
                currently operate statewide (Renew Financial/CaliforniaFirst, PACE Funding Group,
                FortiFi, and Ygrene),{/* programs-21 */} and commercial-focused providers PACE
                Equity (up to 30-year term, up to 30% of property value, non-recourse, fixed rate)
                and CleanFund (up to 100% of project cost) also operate here via county and JPA
                program agreements.{/* programs-22, programs-23 */} Full mechanics, eligible
                improvements, and how to apply are on our{' '}
                <Link href="/commercial-solar/cpace-financing-california" className="text-primary underline">
                  CPACE financing page
                </Link>
                .
              </p>
              <p>
                For new construction, California&apos;s 2025 Energy Code (Title 24 Part 6, in
                effect for permits filed on or after January 1, 2026) mandates solar PV, and in
                most cases battery storage, under §140.10 for a broad list of nonresidential
                building types, sized at Solar Access Roof Area times 18 W/ft² for steep-sloped
                roofs or 14 W/ft² for low-sloped roofs.{/* programs-29 */} See our{' '}
                <Link href="/commercial-solar/title-24-requirements" className="text-primary underline">
                  Title 24 requirements page
                </Link>{' '}
                for the full building-type list, sizing equations, and battery exceptions
                {' '}.{/* programs-30, programs-31 */}
              </p>
              <p>
                On utility rebates: SMUD explicitly{' '}
                <a href={smudBusiness} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  states it does not offer
                </a>{' '}
                solar installation rebates,{/* programs-42 */} and PG&amp;E, SCE, SDG&amp;E and
                LADWP&apos;s current business pages show no PV cash rebate either &mdash; each
                offers interconnection, net billing, or (for storage) SGIP instead.{/* programs-43,
                programs-44 */} SGIP itself is a CPUC-authorized, ratepayer-funded program, not a
                utility&apos;s own discretionary rebate.{/* programs-45 */}
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Timeline and interconnection
              </h2>
              <p>
                PG&amp;E&apos;s and SCE&apos;s{' '}
                <a href={pgeRule21} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Rule 21
                </a>{' '}
                interconnection fees are flat regardless of system size: an $800 application fee
                and a $2,500 supplemental-review fee at both utilities{' '}
                <a href={sceRule21Faq} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  (confirmed for SCE)
                </a>{' '}.{/* rates-19, rates-22 */} PG&amp;E&apos;s{' '}
                <a href={pgeInterconnectionTimeline} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  own posted timeline
                </a>{' '}
                runs application review 10&ndash;20 business days, engineering review 15&ndash;95
                business days across up to three phases, and, if grid upgrades are needed,
                implementation adds 3&ndash;12 months on top;{/* costs-38, costs-39 */} once no
                upgrades are required, final inspection is within 30 business days and
                interconnection approval follows about 3 business days later.{/* costs-40 */}
                PG&amp;E&apos;s{' '}
                <a href={pgeHandbook} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Distribution Interconnection Handbook
                </a>{' '}
                gives an overall typical range of 3&ndash;6 months for Simplified/Fast Track
                review, 3&ndash;7 months for Supplemental Review, and 4&ndash;10 months for a full
                Detailed Interconnection Study,{/* rates-20 */} with a 15-business-day initial
                Fast Track review.{/* rates-41 */}
              </p>
              <p>
                Separately, Assembly Bill 2143 requires prevailing wage on renewable facilities
                over 15 kW enrolled in NEM or the Net Billing Tariff at PG&amp;E, SCE, or
                SDG&amp;E, with certified payroll filed with the CPUC twice yearly{' '}
                <a href={cpucAb2143} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  through the SURGE portal
                </a>{' '}.{/* programs-39 */} Confirm whether your project&apos;s interconnection tariff
                triggers this before pricing labor.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Choosing a commercial solar installer
              </h2>
              <p>
                CSLB&apos;s{' '}
                <a href={cslbC10} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  C-10 (Electrical)
                </a>{' '}
                and{' '}
                <a href={cslbC46} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  C-46 (Solar)
                </a>{' '}
                classifications both explicitly cover photovoltaic installation.{/* programs-35,
                programs-36 */} Verify the exact contracting entity and its current license,
                bond, and disciplinary record at the CSLB lookup before signing anything. Ask each
                bidder to state the DC system size and cash price separately from any financing
                terms; itemize roof work, electrical upgrades, storage, and interconnection
                separately from the solar-only price; put expected production, remaining utility
                bill, and interconnection assumptions in writing; and get ownership, warranty,
                transfer, and service responsibilities spelled out as their own contract terms, not
                assumed. See{' '}
                <Link href="/commercial-solar/companies-california" className="text-primary underline">
                  what to compare across commercial solar companies
                </Link>{' '}
                for the full comparison guide.
              </p>
              <p className="mt-4">
                California Rate Relief is a referral service. We are not a licensed contractor.
                This page does not quote a system price, install equipment, or determine project
                eligibility; every figure above is a published third-party benchmark or a
                statutory rule, dated and cited, not a live bid.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {faqs.map((item) => (
                  <div key={item.question}>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                For the size-specific breakdowns and ownership comparison referenced above, see{' '}
                <Link href="/commercial-solar/commercial-solar-cost-100kw-california" className="text-primary underline">100 kW</Link>,{' '}
                <Link href="/commercial-solar/commercial-solar-cost-500kw-california" className="text-primary underline">500 kW</Link>,{' '}
                <Link href="/commercial-solar/commercial-solar-cost-1mw-california" className="text-primary underline">1 MW</Link>, and{' '}
                <Link href="/commercial-solar/commercial-solar-ppa-vs-purchase-california" className="text-primary underline">PPA versus purchase</Link>.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">
                Every figure above traces to one of the primary sources below, checked {VERIFIED}.
                Rates, incentive budgets, and program status change; confirm anything you intend to
                rely on directly with the source.
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>LBNL, <a href={trackingTheSunFull} target="_blank" rel="noopener noreferrer" className="text-primary underline">Tracking the Sun 2024 Edition</a> (full report, Oct. 2024) and <a href={trackingTheSunSummary} target="_blank" rel="noopener noreferrer" className="text-primary underline">executive summary</a> (Aug. 2024)</li>
                <li>LBNL, <a href={lbnl2026Update} target="_blank" rel="noopener noreferrer" className="text-primary underline">U.S. Distributed Solar and Storage: 2025 Data Update</a> (Aug. 2026)</li>
                <li>NREL, <a href={nrel2024Benchmark} target="_blank" rel="noopener noreferrer" className="text-primary underline">Documenting 15 Years of Reductions in U.S. Solar PV System Costs</a> (Jan. 2025) and <a href={nrel2022Benchmark} target="_blank" rel="noopener noreferrer" className="text-primary underline">U.S. Solar PV Cost Benchmark Q1 2022</a> (Sept. 2022)</li>
                <li>SEIA / Wood Mackenzie, <a href={seiaQ42025} target="_blank" rel="noopener noreferrer" className="text-primary underline">U.S. Solar Market Insight, Q4 2025 executive summary</a> (Dec. 2025)</li>
                <li>26 U.S.C. §48E (<a href={irc48e} target="_blank" rel="noopener noreferrer" className="text-primary underline">Cornell LII</a>); IRS <a href={irsNotice202542} target="_blank" rel="noopener noreferrer" className="text-primary underline">Notice 2025-42</a> (Sept. 2, 2025) and <a href={irsNotice202615} target="_blank" rel="noopener noreferrer" className="text-primary underline">Notice 2026-15</a> (Feb. 12, 2026)</li>
                <li>26 U.S.C. §168 and §50 (<a href={irc168} target="_blank" rel="noopener noreferrer" className="text-primary underline">House OLRC</a>, <a href={irc50} target="_blank" rel="noopener noreferrer" className="text-primary underline">§50</a>)</li>
                <li>California Franchise Tax Board, <a href={ftbForm100} target="_blank" rel="noopener noreferrer" className="text-primary underline">2025 Form 100 Booklet</a></li>
                <li>California State Board of Equalization, <a href={boeLta2026034} target="_blank" rel="noopener noreferrer" className="text-primary underline">Letter to Assessors 2026/034</a> (Sept. 1, 2026) and <a href={boeAnnotation610} target="_blank" rel="noopener noreferrer" className="text-primary underline">Assessors&apos; Handbook annotation 610.0089</a> (2012)</li>
                <li>CDTFA, <a href={cdtfaReg1521} target="_blank" rel="noopener noreferrer" className="text-primary underline">Regulation 1521</a> and <a href={cdtfa6377} target="_blank" rel="noopener noreferrer" className="text-primary underline">manufacturing/R&amp;D/power equipment exemption guidance</a></li>
                <li>Cal. Gov. Code §66015 (<a href={govCode66015} target="_blank" rel="noopener noreferrer" className="text-primary underline">statute</a>); City of San Diego, <a href={sanDiegoBulletin301} target="_blank" rel="noopener noreferrer" className="text-primary underline">Information Bulletin 301</a></li>
                <li>PG&amp;E, <a href={pgeB10Tariff} target="_blank" rel="noopener noreferrer" className="text-primary underline">Schedule B-10</a> and <a href={pgeB19Tariff} target="_blank" rel="noopener noreferrer" className="text-primary underline">Schedule B-19</a> tariff sheets (eff. Mar. 1, 2026)</li>
                <li>SDG&amp;E, <a href={sdgeMediumComm} target="_blank" rel="noopener noreferrer" className="text-primary underline">Medium Commercial</a> and <a href={sdgeLargeComm} target="_blank" rel="noopener noreferrer" className="text-primary underline">Large Commercial</a> rate summary tables (eff. Jun. 1, 2026)</li>
                <li>CPUC, <a href={cpucNbt} target="_blank" rel="noopener noreferrer" className="text-primary underline">Net Energy Metering and Net Billing</a>; PG&amp;E, <a href={pgeSolarBillingPlan} target="_blank" rel="noopener noreferrer" className="text-primary underline">Solar Billing Plan</a>; SMUD, <a href={smudSsr} target="_blank" rel="noopener noreferrer" className="text-primary underline">Solar and Storage Rate</a></li>
                <li>PG&amp;E, <a href={pgeRule21} target="_blank" rel="noopener noreferrer" className="text-primary underline">Rule 21 interconnection</a>, <a href={pgeInterconnectionTimeline} target="_blank" rel="noopener noreferrer" className="text-primary underline">interconnection process timeline</a>, and <a href={pgeHandbook} target="_blank" rel="noopener noreferrer" className="text-primary underline">Distribution Interconnection Handbook</a>; SCE, <a href={sceRule21Faq} target="_blank" rel="noopener noreferrer" className="text-primary underline">Rule 21 FAQ</a></li>
                <li>Appraisal Institute, <a href={aiAddendum} target="_blank" rel="noopener noreferrer" className="text-primary underline">Commercial Green and Energy Efficient Addendum</a> (2015); Appraisal Foundation, <a href={appraisalVa9} target="_blank" rel="noopener noreferrer" className="text-primary underline">Valuation Advisory #9</a> (2018)</li>
                <li>Eichholtz, Kok &amp; Quigley, <a href={ekq2010} target="_blank" rel="noopener noreferrer" className="text-primary underline">American Economic Review 100(5)</a> (2010) and <a href={ekq2013} target="_blank" rel="noopener noreferrer" className="text-primary underline">Review of Economics and Statistics 95(1)</a> (2013)</li>
                <li>CBRE, <a href={cbreLogistics} target="_blank" rel="noopener noreferrer" className="text-primary underline">Impact of On-Site Rooftop Solar PV on Logistics Property Values</a> (2023) and <a href={cbreCapRate} target="_blank" rel="noopener noreferrer" className="text-primary underline">U.S. Cap Rate Survey H1 2026</a> (Aug. 2026); JLL, <a href={jllRooftop} target="_blank" rel="noopener noreferrer" className="text-primary underline">Optimizing Rooftop Potential</a> (Jun. 2026)</li>
                <li>LBNL, <a href={lbnlSellingIntoSun} target="_blank" rel="noopener noreferrer" className="text-primary underline">Selling Into the Sun</a> (2015, residential); Dastrup et al., <a href={nberSolarPremium} target="_blank" rel="noopener noreferrer" className="text-primary underline">NBER Working Paper 17200</a> (2011, residential, California)</li>
                <li>SGIP, <a href={sgipMetrics} target="_blank" rel="noopener noreferrer" className="text-primary underline">Program Metrics</a>; USDA, <a href={reapFaq} target="_blank" rel="noopener noreferrer" className="text-primary underline">REAP FAQ</a> (Mar. 31, 2026) and <a href={reapNofo} target="_blank" rel="noopener noreferrer" className="text-primary underline">REAP Notice of Funding Opportunity</a> (Oct. 16, 2024)</li>
                <li>DFPI, <a href={dfpiPace} target="_blank" rel="noopener noreferrer" className="text-primary underline">PACE Program Administrators</a></li>
                <li>California Energy Commission, <a href={cecTitle24Pv} target="_blank" rel="noopener noreferrer" className="text-primary underline">2025 Nonresidential Solar PV</a> and <a href={cecTitle24Battery} target="_blank" rel="noopener noreferrer" className="text-primary underline">What&apos;s New for 2025 Nonresidential (battery)</a></li>
                <li>CPUC, <a href={cpucAb2143} target="_blank" rel="noopener noreferrer" className="text-primary underline">Prevailing Wage for Qualified Renewable Energy Facilities</a> (AB 2143)</li>
                <li>CSLB, <a href={cslbC10} target="_blank" rel="noopener noreferrer" className="text-primary underline">C-10</a> and <a href={cslbC46} target="_blank" rel="noopener noreferrer" className="text-primary underline">C-46</a> license classifications</li>
              </ul>
            </div>

            {/* The page's one CTA card: the existing ArticleCTA (commercial
                intent, tracked as article_cta), unchanged. It replaces a second,
                hand-built card that repeated the same ask. */}
            <ArticleCTA />

            <div className="mt-10">
              <Link href="/commercial-solar" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                <ArrowLeft className="h-4 w-4" /> Back to Commercial Solar Hub
              </Link>
            </div>
          <RelatedGuides
            heading="What a per-watt figure leaves out"
            intro="Compare each proposal's written scope before using a per-watt figure."
            links={[
              { href: "/solar-problems/hidden-costs-of-solar-california", label: "The cost lines that arrive after the quote" },
              { href: "/solar-problems/solar-dealer-fees-explained", label: "How a financing fee is folded into the price per watt" },
              { href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california", label: "Cash, loan, lease and PPA obligations side by side" },
            ]}
          />
          </article>
          <TocRail rootId="cost-per-watt-body" />
          </div>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4"><VerifyCommercialSolarBox topic="general" /></div>
      <div className="container mx-auto max-w-3xl px-4"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
