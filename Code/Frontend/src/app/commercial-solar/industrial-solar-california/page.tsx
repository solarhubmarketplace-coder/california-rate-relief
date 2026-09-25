import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { CommercialReviewButton, CommercialReviewForm } from '@/components/growth/CommercialReview';

// Created 2026-09-23 (topical-authority program, Tier 2, CREATE_DEDICATED): the
// "industrial solar california", "industrial solar companies" and "solar for
// industrial buildings" queries were landing on the companies page. Industrial
// counts are CRR's tabulation of the CPUC DGStats Interconnected Applications
// file (data through 2026-05-31): PV, status Interconnected, Customer Sector
// "Industrial", approved in 2025 (51 systems). PG&E figures are from Schedules
// B-19 and B-20 as fetched 2026-09-23 (rates effective March 1, 2026).

const title = 'Industrial Solar in California: Rates, Sizing and Rules';
const h1 = 'Industrial Solar in California: What Plants and Manufacturers Should Check';
const description =
  'How California industrial sites use solar: 2025 system sizes, PG&E B-19 and B-20 demand charges, export rules, the Energy Code and what to ask bidders.';
const path = '/commercial-solar/industrial-solar-california';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const dgStatsDownloads = 'https://www.californiadgstats.ca.gov/downloads/';
const lbnl2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const tts2024Summary =
  'https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_executive_summary.pdf';
const pgeB19 = 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_B-19.pdf';
const pgeB20 = 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_B-20.pdf';
const sceBusinessTou =
  'https://www.sce.com/business/rates-financing/rate-plans/business-time-of-use-rate-plans';
const cpucNbt =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing';
const cecNonresPv =
  'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-15';
const irc48e =
  'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section48E&num=0&edition=prelim';

const faqs = [
  {
    question: 'How big are industrial solar systems in California?',
    answer:
      'Larger than most business systems. The 51 industrial-sector systems PG&E, SCE and SDG&E connected in 2025 had a median size of 195 kW DC, against 61 kW for all non-residential systems, and together totaled about 53 MW DC. Berkeley Lab also finds industrial sites among the largest non-residential systems nationally, with median sizes over 100 kW.',
  },
  {
    question: 'Will solar lower an industrial demand charge?',
    answer:
      'Not reliably on its own. On PG&E Schedule B-19, one demand charge is set by the highest 15-minute interval at any time in the month, and another by the highest interval from 4 to 9 p.m., when solar output is low. A battery controlled to shave those intervals is what usually targets demand charges.',
  },
  {
    question: 'Do new factories in California have to install solar?',
    answer:
      'Not under the building type list. The Energy Commission’s 2025 Energy Code, Section 140.10, requires solar on new nonresidential buildings of listed types such as office, retail, school and warehouse. Manufacturing buildings are not on that list, and unconditioned buildings, additions and alterations are excluded. A warehouse on an industrial site can still be covered.',
  },
  {
    question: 'Who builds industrial solar projects?',
    answer:
      'The same licensed solar and electrical contractors that build other commercial systems, often working as or under an EPC, with structural engineers for roofs, canopies or ground mounts. Check the license of the entity that signs the contract with the CSLB, and ask for completed industrial projects with similar loads.',
  },
  {
    question: 'What does industrial solar cost?',
    answer:
      'No public source reports an industrial-only price. LBNL found a 2023 median of $2.3 per watt for large California commercial systems over 100 kW, before incentives. Treat that as a starting benchmark and price your own site from itemized bids.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: `${DATE_MODIFIED}T00:00:00Z`,
    modifiedTime: `${DATE_MODIFIED}T00:00:00Z`,
    url: canonicalUrl,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(title, description),
};

export default function IndustrialSolarCalifornia() {
  return (
    <PublicLayout breadcrumbLabel="Industrial solar">
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={h1}
        url={canonicalUrl}
        datePublished={DATE_MODIFIED}
        dateModified={DATE_MODIFIED}
        description={description}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/commercial-solar" className="hover:text-primary">Commercial Solar</Link>
              <span>/</span>
              <span className="text-foreground">Industrial solar</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Plants · Manufacturing · Demand charges
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                Industrial solar in California means on-site systems at plants, factories and
                processing sites, and they run larger than other business systems. The 51
                industrial-sector systems PG&amp;E, SCE and SDG&amp;E connected in 2025 had a median
                size of 195 kW DC, and 21 were ground-mounted. The economics turn on demand
                charges, operating hours and space more than on panel price.
              </p>
              <p>
                This page covers what is different about industrial sites. For the steps every
                commercial project shares, see{' '}
                <Link href="/commercial-solar/companies-california" className={link}>
                  how to compare commercial solar companies and EPCs
                </Link>
                , and for every business guide, the{' '}
                <Link href="/commercial-solar" className={link}>
                  commercial solar hub
                </Link>
                . Sources were checked {CHECKED}.
              </p>
            </div>

            <KeyFacts
              className="max-w-3xl"
              sourcesHref="#sources"
              facts={[
                {
                  label: 'Industrial systems connected in CA, 2025',
                  value: '51 · 195 kW median',
                  note: 'PG&E, SCE and SDG&E; about 53 MW DC in total. CRR count from CPUC DGStats.',
                  source: { publisher: 'CPUC DGStats', url: dgStatsDownloads, date: 'May 2026 data' },
                },
                {
                  label: 'PG&E B-19 applies above',
                  value: '499 kW demand',
                  note: 'For three consecutive months in the past 12. B-20 applies above 999 kW.',
                  source: { publisher: 'PG&E', url: pgeB19, date: 'Mar 2026' },
                },
                {
                  label: 'B-19 summer peak demand charge',
                  value: '$46.16/kW',
                  note: 'Secondary voltage, 4 to 9 p.m., plus a $37.37/kW maximum-demand charge. Rates effective March 1, 2026.',
                  source: { publisher: 'PG&E', url: pgeB19, date: 'Mar 2026' },
                },
              ]}
            />

            <div className="prose prose-slate max-w-none">
              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What industrial solar looks like in California
              </h2>
              <p>
                In CRR&apos;s count of the CPUC&apos;s{' '}
                <a href={dgStatsDownloads} target="_blank" rel="noopener noreferrer" className={link}>
                  DGStats interconnection data
                </a>
                , 51 PV systems in the industrial customer sector were connected by the three
                investor-owned utilities in 2025: 33 by PG&amp;E, 17 by SCE and one by SDG&amp;E.
                Their median was 195 kW DC, the middle half ran from about 40 kW to 634 kW, and the
                group totaled about 53 MW DC. For comparison, the median across all 3,607
                non-residential systems connected that year was 61 kW.
              </p>
              <p>
                Mounting was split: 27 were on roofs, 21 on the ground and three mixed. Only eight
                were third-party owned, and five included battery storage. The sector label comes
                from the utility application, so some plants may be filed as commercial instead.
              </p>
              <p>
                The national picture is similar. Berkeley Lab&apos;s{' '}
                <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>
                  2026 data update
                </a>{' '}
                names industrial buildings among the largest commercial business types for solar
                in 2025 and reports median industrial system sizes above 100 kW, with schools the
                only other segment that large.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                The bill: demand charges decide the economics
              </h2>
              <p>
                Large industrial accounts pay heavily for demand, the highest rate of use in a
                short interval, not only for energy. On PG&amp;E,{' '}
                <a href={pgeB19} target="_blank" rel="noopener noreferrer" className={link}>
                  Schedule B-19
                </a>{' '}
                applies to a customer whose maximum demand exceeded 499 kW for three consecutive
                months in the past year, and{' '}
                <a href={pgeB20} target="_blank" rel="noopener noreferrer" className={link}>
                  Schedule B-20
                </a>{' '}
                to one that exceeded 999 kW. Both bill three demand charges at once: a maximum
                demand charge set by the highest 15-minute interval at any time, a peak demand
                charge for 4 to 9 p.m., and a part-peak demand charge.
              </p>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="p-3 text-left text-xs text-muted-foreground">
                    PG&amp;E summer demand charges, secondary voltage, dollars per kW per month.
                    Rates effective March 1, 2026 (Advice 7846-E).
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Schedule</th>
                      <th className="p-3">Peak demand (4&ndash;9 p.m.)</th>
                      <th className="p-3">Maximum demand (any time)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">B-19 (over 499 kW)</th><td className="p-3">$46.16</td><td className="p-3">$37.37</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">B-20 (over 999 kW)</th><td className="p-3">$41.35</td><td className="p-3">$39.08</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Solar produces most around midday, so it does little for the 4-to-9 p.m. peak
                charge, and one cloudy interval during a busy shift can still set the maximum
                demand charge for the month. SCE&apos;s{' '}
                <a href={sceBusinessTou} target="_blank" rel="noopener noreferrer" className={link}>
                  business rate pages
                </a>{' '}
                describe the same split between facilities-related demand charges, set by the
                month&apos;s highest demand at any time, and time-related demand charges, set during
                on-peak and mid-peak weekday hours. Ask for a bill model that shows the energy
                savings and the demand savings separately, and a second case with a{' '}
                <Link href="/commercial-solar/commercial-battery-storage-california" className={link}>
                  commercial battery
                </Link>{' '}
                controlled to shave those intervals.
              </p>
              <p>
                PG&amp;E also offers <strong>Option R</strong> on B-19 and B-20 to customers with
                on-site renewable generation of at least 15% of their annual peak demand, subject to
                a 600 MW participation cap across its schedules. Ask any bidder whether the model
                assumes Option R and whether space remains under the cap.
              </p>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Size to what the plant uses while the sun is up
              </h2>
              <p>
                New systems at PG&amp;E, SCE and SDG&amp;E take service under the Net Billing
                Tariff, which the{' '}
                <a href={cpucNbt} target="_blank" rel="noopener noreferrer" className={link}>
                  CPUC
                </a>{' '}
                says has applied to customers applying for interconnection since April 15, 2023.
                Exports earn credits based on the CPUC&apos;s Avoided Cost Calculator, usually below
                the retail rate, and the CPUC lists the size limit as the customer&apos;s annual load
                plus up to 50% if the customer attests to the need. In the 2025 industrial data,
                16 systems were on the Net Billing Tariff and most of the rest on the older NEM 2.0
                tariff, which new applications can no longer join.
              </p>
              <p>
                The practical result: value comes from output the plant uses on site. A one-shift
                weekday operation exports much of its weekend production; a round-the-clock process
                load absorbs almost all of it. Give bidders 12 months of 15-minute interval data,
                your shift pattern and planned shutdowns, and ask for the share of production
                used on site.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                The Energy Code and new industrial buildings
              </h2>
              <p>
                The Energy Commission&apos;s{' '}
                <a href={cecNonresPv} target="_blank" rel="noopener noreferrer" className={link}>
                  2025 nonresidential solar guidance
                </a>{' '}
                lists the new building types that must include solar under Section 140.10: among
                them office, retail, school and warehouse buildings, but not manufacturing
                buildings. Additions, alterations and unconditioned buildings are excluded, and
                the rules apply to permit applications submitted on or after January 1, 2026. A new
                distribution warehouse on a plant campus can be covered even when the plant is
                not. The{' '}
                <Link href="/commercial-solar/title-24-requirements" className={link}>
                  Title 24 requirements guide
                </Link>{' '}
                goes through the calculation and exceptions.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Roofs, ground mounts and canopies at a plant
              </h2>
              <p>
                Industrial roofs carry exhaust stacks, vents, skylights and equipment that break up
                the usable area, and many are older metal or membrane roofs. Get a structural
                review and the roof&apos;s remaining life before comparing bids; the{' '}
                <Link href="/commercial-solar/commercial-solar-roofing" className={link}>
                  commercial solar roofing guide
                </Link>{' '}
                covers load checks, attachments and fire pathways.
              </p>
              <p>
                Ground mounts on spare land avoid the roof but add fencing, trenching and a longer
                run to the switchgear, and 21 of the 51 industrial systems in 2025 went that way.
                Canopies over employee or truck parking are the third option, priced as a
                structure plus solar; see the{' '}
                <Link href="/commercial-solar/commercial-solar-carport-cost" className={link}>
                  commercial carport cost guide
                </Link>
                . Wherever the array goes, write down which production areas, loading lanes and
                emergency routes must stay clear during construction.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Cost, tax and ownership
              </h2>
              <p>
                No public source reports an industrial-only installed price. Berkeley Lab&apos;s{' '}
                <a href={tts2024Summary} target="_blank" rel="noopener noreferrer" className={link}>
                  Tracking the Sun 2024 summary
                </a>{' '}
                found a 2023 median of $2.3 per watt for large (100 kW and up) California
                commercial systems before incentives. The{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                  commercial cost-per-watt guide
                </Link>{' '}
                breaks prices down by size, and the{' '}
                <Link href="/commercial-solar/average-wattage-of-a-commercial-solar-panel" className={link}>
                  commercial panel wattage data
                </Link>{' '}
                shows the larger modules these projects use.
              </p>
              <p>
                Size also matters for the federal credit. Under{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §48E
                </a>
                , a facility under 1 MW AC gets the 30% rate without the labor rules; a larger
                one needs the prevailing-wage and apprenticeship requirements to reach it. A solar facility
                whose construction began after July 4, 2026 gets no credit for property placed in
                service after December 31, 2027. The{' '}
                <Link href="/commercial-solar/commercial-solar-tax-credit" className={link}>
                  commercial solar tax credit guide
                </Link>{' '}
                covers the rest, and{' '}
                <Link href="/blog/commercial-solar-financing-california" className={link}>
                  commercial financing options
                </Link>{' '}
                compares owning with a PPA or lease.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What to put in an industrial bid request
              </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Twelve months of 15-minute interval data for every meter the project could serve, and the rate schedule on each.</li>
                <li>Shift schedule, weekend and holiday operation, and planned shutdowns or expansions.</li>
                <li>Roof drawings, age and warranty, or the land area and any easements for a ground mount.</li>
                <li>Main switchgear rating and any planned electrical upgrades.</li>
                <li>Which loads need backup power, stated separately from bill savings.</li>
                <li>Site rules for contractors: safety training, access hours and production areas that stay closed.</li>
              </ol>
              <p>
                Ask each bidder to return a line-item price, the DC and AC sizes, a monthly bill
                model on your actual tariff with and without a battery, and the licensed entity that
                will sign. If a developer offers to own the system, read{' '}
                <Link href="/commercial-solar/solar-developers" className={link}>
                  what a solar developer does
                </Link>{' '}
                first.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                When solar is the wrong move for a plant
              </h2>
              <p>
                Solar is a weak fit when most of the load runs at night, when the roof needs
                replacing within a few years and no land is available, or when you lease the
                building on a term shorter than the payback you are modeling. It also misleads if
                the proposal counts on demand-charge savings without interval data to back them.
                In those cases, fix the roof, the lease or the data first.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{f.question}</h3>
                    <p>{f.answer}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
                The rates on this page are published tariff figures, not a bill estimate, and
                nothing here is tax advice.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>California Public Utilities Commission, <a href={dgStatsDownloads} target="_blank" rel="noopener noreferrer" className={link}>DGStats Interconnected Applications Data Set</a> (data through May 31, 2026). Counts are CRR&apos;s tabulation of 2025 PV systems.</li>
                <li>PG&amp;E, <a href={pgeB19} target="_blank" rel="noopener noreferrer" className={link}>Electric Schedule B-19</a> and <a href={pgeB20} target="_blank" rel="noopener noreferrer" className={link}>Electric Schedule B-20</a> (rates effective March 1, 2026)</li>
                <li>SCE, <a href={sceBusinessTou} target="_blank" rel="noopener noreferrer" className={link}>business time-of-use rate plans</a></li>
                <li>CPUC, <a href={cpucNbt} target="_blank" rel="noopener noreferrer" className={link}>Net Energy Metering and Net Billing</a></li>
                <li>California Energy Commission, <a href={cecNonresPv} target="_blank" rel="noopener noreferrer" className={link}>2025 Nonresidential Solar PV</a></li>
                <li>LBNL, <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>U.S. Distributed Solar and Storage: 2026 Data Update</a> (August 2026) and <a href={tts2024Summary} target="_blank" rel="noopener noreferrer" className={link}>Tracking the Sun 2024 executive summary</a> (August 2024)</li>
                <li>26 U.S.C. <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>§48E</a>, Office of the Law Revision Counsel (text in effect September 23, 2026)</li>
              </ul>
            </div>

            <CommercialReviewForm className="mt-12" />
            <HubSpokeLinks hub="commercial" currentPath={path} />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
