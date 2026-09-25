import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Byline } from '@/components/trust/Byline';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { CommercialReviewButton, CommercialReviewForm } from '@/components/growth/CommercialReview';

// Created 2026-09-23 (topical-authority program, CREATE_DEDICATED): the
// "commercial solar carport cost" queries were landing on the residential
// carport guide. Every figure was fetched on 2026-09-23 from the source it
// cites; tax statements are limited to statute and IRS text.

const title = 'Commercial Solar Carport Cost in California: What Drives It';
const h1 = 'Commercial Solar Carport Cost in California';
const description =
  'No agency publishes a commercial carport price. LBNL California benchmarks, what a canopy adds, the clearance rules and the tax limits to check first.';
const path = '/commercial-solar/commercial-solar-carport-cost';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const tts2024Summary =
  'https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_executive_summary.pdf';
const tts2024Report =
  'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf';
const lbnl2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const nrel2023 = 'https://www.nrel.gov/docs/fy23osti/87303.pdf';
const dsaIr168 =
  'https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/interpretations_of_regs/IR_16-8_2022-CBC.pdf';
const dsaIr11b9 =
  'https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/interpretations_of_regs/IR_11B-9.pdf';
const cslbC46 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C46';
const cslbB =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=B';
const usc = (s: string) =>
  `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section${s}&num=0&edition=prelim`;
const irc48e = usc('48E');
const irc168 = usc('168');
const irc6417 = usc('6417');
const irc30c = usc('30C');
const ftb100 = 'https://www.ftb.ca.gov/forms/2025/2025-100-booklet.html';
const pgeBev = 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_BEV.pdf';
const irsElectivePay =
  'https://www.irs.gov/credits-deductions/elective-pay-and-transferability-frequently-asked-questions-elective-pay';

const faqs = [
  {
    question: 'How much does a commercial solar carport cost per watt?',
    answer:
      'No federal lab or California agency publishes a carport price per watt. LBNL reports that large California systems (over 100 kW) installed in 2023 had median prices of $2.3 per watt at commercial sites and $4.1 per watt at tax-exempt sites, and it names shade and parking structures as one possible reason tax-exempt prices ran higher. Treat those as the solar baseline and get the canopy priced as its own line.',
  },
  {
    question: 'Why do solar carports cost more than rooftop solar?',
    answer:
      'A roof already provides the structure. A carport has to be engineered and built: steel columns and beams tall enough to clear vehicles, foundations sized for wind and seismic loads, trenching back to the switchgear, and often lighting and paving repair. Those costs sit on top of the panels, inverters and electrical work a roof system also needs.',
  },
  {
    question: 'How tall does a commercial solar carport need to be?',
    answer:
      "For school and state projects, DSA's IR 16-8 applies at least 8 feet 2 inches of clearance over accessible parking spaces and at least 13 feet 6 inches over a designated fire lane, with 6 feet 8 inches as the minimum where there is a use underneath. Taller columns need more steel and bigger foundations, so the clearance your site needs is a cost driver. Private projects should confirm clearances with the local building and fire departments.",
  },
  {
    question: 'Does the federal tax credit cover the carport structure?',
    answer:
      'Section 48E defines qualified property to exclude "a building or its structural components," while including other tangible property used as an integral part of the facility. Which parts of a canopy fall on each side of that line is a question for a tax professional. Separately, a solar facility that began construction after July 4, 2026 gets no §48E credit for property placed in service after December 31, 2027.',
  },
  {
    question: 'Can a school or nonprofit get the credit on a carport it owns?',
    answer:
      'Tax-exempt organizations and state and local governments are "applicable entities" under 26 U.S.C. §6417, which lets them elect to receive the §48E credit as a payment. The IRS says the entity must own the property. Whether the canopy structure counts toward the credit basis is the same structural-components question a business faces, so confirm it with a tax professional.',
  },
  {
    question: 'Who builds solar carports for businesses in California?',
    answer:
      "The solar and electrical work is done under a CSLB license such as C-46 Solar or C-10 Electrical. The C-46 classification does not cover building trades except when required to install the solar system, so the canopy, foundations and paving are often designed by a structural engineer and built or subcontracted by a B general building contractor. Ask who holds each piece of the scope.",
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

export default function CommercialSolarCarportCost() {
  return (
    <PublicLayout breadcrumbLabel="Commercial carport cost">
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
              <span className="text-foreground">Commercial carport cost</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Parking canopies · Cost
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                No public agency publishes a price for commercial solar carports. The best
                primary benchmark is Berkeley Lab&apos;s California data: large systems installed
                in 2023 had median prices of $2.3 per watt at commercial sites and $4.1 per watt
                at tax-exempt sites, a gap LBNL partly links to parking structures. A canopy adds
                steel, foundations and site work to that baseline, so budget from bids that price
                the structure on its own line.
              </p>
              <p>
                This page is for businesses, schools, churches, dealerships and public agencies
                pricing a parking-lot canopy. For how carports compare with roofs and ground
                mounts in general, including home carports, see the{' '}
                <Link href="/blog/solar-carport-california-guide" className={link}>
                  California solar carport guide
                </Link>
                . For the wider set of business solar questions, start at the{' '}
                <Link href="/commercial-solar" className={link}>
                  commercial solar hub
                </Link>
                . Figures were checked {CHECKED}.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                The published benchmarks, and what they leave out
              </h2>
              <p>
                Lawrence Berkeley National Laboratory&apos;s{' '}
                <a href={tts2024Summary} target="_blank" rel="noopener noreferrer" className={link}>
                  Tracking the Sun 2024 summary
                </a>{' '}
                is the most specific public source for California commercial prices. It reports
                prices paid before incentives, by customer type, for systems over 100 kW:
              </p>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="p-3 text-left text-xs text-muted-foreground">
                    Median installed price, large (over 100 kW) California systems installed in
                    2023, before incentives. Source: LBNL Tracking the Sun 2024. All mounting types
                    combined; LBNL does not report carports separately.
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Site type</th>
                      <th className="p-3">Median price</th>
                      <th className="p-3">At 500 kW (arithmetic)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Agricultural</th><td className="p-3">$2.0/W</td><td className="p-3">$1.0 million</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Commercial</th><td className="p-3">$2.3/W</td><td className="p-3">$1.15 million</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Tax-exempt (schools, government, nonprofits)</th><td className="p-3">$4.1/W</td><td className="p-3">$2.05 million</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                The{' '}
                <a href={tts2024Report} target="_blank" rel="noopener noreferrer" className={link}>
                  full report
                </a>{' '}
                offers three possible reasons large tax-exempt projects cost more, especially in
                California: requirements for domestically made components or prevailing-wage
                labor, the &ldquo;prevalence of shade or parking structures,&rdquo; and lower
                borrowing costs. Schools and public agencies build a lot of canopies, so the
                tax-exempt figure is the closest public proxy for a carport-heavy market. It is
                still not a carport price.
              </p>
              <p>
                Newer data points the same way. LBNL&apos;s{' '}
                <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>
                  2026 data update
                </a>{' '}
                found non-residential prices essentially flat from 2024 to 2025, described
                California as relatively high-cost for non-residential systems, and found a $1.7
                per watt difference in median non-residential prices across the range of system
                sizes it plotted. It also puts everything other than modules and inverters (soft
                costs plus the rest of the balance of system) at roughly 80% of median 2025
                installed prices. A canopy adds to exactly that part of the bill.
              </p>
              <p>
                NREL does not fill the gap. Its{' '}
                <a href={nrel2023} target="_blank" rel="noopener noreferrer" className={link}>
                  Q1 2023 cost benchmark
                </a>{' '}
                models a residential rooftop system, a 3 MW ground-mounted community solar
                system and a utility-scale system, and no carport.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What a canopy adds to the price
              </h2>
              <p>
                Everything a rooftop system needs, a carport also needs. The extra cost is the
                structure the roof would otherwise provide, and it scales with the site more than
                with the kilowatts:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Engineering to open-structure loads.</strong> DSA&apos;s{' '}
                  <a href={dsaIr168} target="_blank" rel="noopener noreferrer" className={link}>
                    IR 16-8
                  </a>{' '}
                  has school and state carports designed to ASCE 7&apos;s open-building wind
                  provisions and its Chapter 12 seismic rules, with a risk category no lower than
                  the use underneath. Private projects face the same physics under the local
                  building code.
                </li>
                <li>
                  <strong>Clearance height.</strong> IR 16-8 applies 8 feet 2 inches over
                  accessible parking and 13 feet 6 inches over a designated fire lane. A taller
                  canopy means longer columns, more steel and bigger footings.
                </li>
                <li>
                  <strong>Foundations.</strong> Drilled piers or spread footings sized to the soil.
                  A geotechnical report and utility locating often come first.
                </li>
                <li>
                  <strong>Accessibility work.</strong> Under{' '}
                  <a href={dsaIr11b9} target="_blank" rel="noopener noreferrer" className={link}>
                    DSA IR 11B-9
                  </a>
                  , parking under an elevated array must meet California Building Code Section
                  11B-307, and altering the area under it can trigger path-of-travel upgrades
                  under Section 11B-202.4. DSA also says the solar system&apos;s value cannot be
                  deducted from the construction cost used to size those upgrades.
                </li>
                <li>
                  <strong>Trenching and switchgear.</strong> The run from the canopy to the point
                  of interconnection, plus any service upgrade the utility or electrical design
                  requires.
                </li>
                <li>
                  <strong>Lighting, drainage and paving repair.</strong> Canopies shade existing
                  lot lights and shed water in new places.
                </li>
              </ul>
              <p>
                Because these costs follow the site, two carports of the same kilowatt size can
                price very differently. Compare bids line by line, not on a single per-watt
                figure.
              </p>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                How to read a carport bid against the benchmarks
              </h2>
              <p>Ask every bidder for the same breakdown, then do three checks:</p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong>Solar-only price per watt.</strong> Divide the modules, inverters,
                  racking and electrical lines by the DC system size. Hold that number against the
                  LBNL medians above and against a{' '}
                  <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                    rooftop or ground-mount commercial cost benchmark
                  </Link>
                  .
                </li>
                <li>
                  <strong>Structure per parking space.</strong> Divide the canopy, foundation
                  and engineering lines by the number of spaces covered. This is the number to
                  compare between canopy designs.
                </li>
                <li>
                  <strong>Excluded site work.</strong> List every item marked &ldquo;by
                  owner&rdquo; or &ldquo;allowance.&rdquo; Paving, striping, lighting and utility
                  relocation are where carport change orders usually come from.
                </li>
              </ol>
              <p>
                For the proposal checklist that applies to any commercial bid, see{' '}
                <Link href="/commercial-solar/companies-california" className={link}>
                  how to compare commercial solar companies and EPCs
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Tax treatment: what the statute says and what it doesn&apos;t
              </h2>
              <p>
                The federal credit for a business-owned system is{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §48E
                </a>
                . It is 6% of the qualified investment, or 30% for a facility with a maximum net
                output under 1 MW AC or one that meets the prevailing-wage and apprenticeship
                rules. For a solar facility whose construction began after July 4, 2026, the
                credit does not apply to property placed in service after December 31, 2027.
                Energy storage placed at the facility is excepted from that cutoff.
              </p>
              <p>
                The statute&apos;s definition of qualified property excludes &ldquo;a building or
                its structural components,&rdquo; while including other tangible property used as
                an integral part of the facility. It does not say where a carport&apos;s columns,
                beams and footings fall. Do not let a proposal assume the whole canopy is in the
                credit basis; get that answer from a tax professional.
              </p>
              <p>
                Under{' '}
                <a href={irc168} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §168(e)(3)(B)(viii)
                </a>
                , §48E qualified property and energy storage technology are 5-year property, and
                §168(k)(1)(A) provides a 100% first-year allowance for qualified property,
                applying to property acquired after January 19, 2025. The depreciation class of
                canopy steel that is not qualified property is, again, a question for your tax
                professional. California does not conform to §168(k), according to the{' '}
                <a href={ftb100} target="_blank" rel="noopener noreferrer" className={link}>
                  FTB&apos;s 2025 Form 100 booklet
                </a>
                .
              </p>
              <p>
                Schools, public agencies and nonprofits are applicable entities under{' '}
                <a href={irc6417} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §6417
                </a>
                , which lets them elect to receive the §48E credit as a payment. The IRS{' '}
                <a href={irsElectivePay} target="_blank" rel="noopener noreferrer" className={link}>
                  elective pay FAQ
                </a>{' '}
                says the entity must own the property. The{' '}
                <Link href="/blog/commercial-solar-financing-california" className={link}>
                  commercial financing guide
                </Link>{' '}
                compares ownership, leases and PPAs.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                EV charging under the canopy
              </h2>
              <p>
                Canopies and EV chargers often go together, but price them separately. The
                federal charger credit in{' '}
                <a href={irc30c} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §30C
                </a>{' '}
                does not apply to property placed in service after June 30, 2026. On the bill
                side, PG&amp;E&apos;s{' '}
                <a href={pgeBev} target="_blank" rel="noopener noreferrer" className={link}>
                  Schedule BEV
                </a>{' '}
                is an optional business EV rate for charging metered separately from the rest of
                the site. It swaps the usual demand charge for a monthly kW subscription: BEV-2
                is sold in 50 kW blocks at $95.56 per block on secondary voltage, with a $3.82
                per kW overage fee, in rates effective March 1, 2026. Ask your bidder to model the
                chargers on the rate you would actually take. A{' '}
                <Link href="/commercial-solar/commercial-battery-storage-california" className={link}>
                  commercial battery
                </Link>{' '}
                is the other lever for charging peaks.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Who designs and builds the canopy
              </h2>
              <p>
                CSLB&apos;s{' '}
                <a href={cslbC46} target="_blank" rel="noopener noreferrer" className={link}>
                  C-46 Solar Contractor
                </a>{' '}
                classification covers installing photovoltaic systems but not building trades,
                &ldquo;except when required to install&rdquo; the solar system. Many carport
                projects therefore involve a structural engineer for the canopy and a{' '}
                <a href={cslbB} target="_blank" rel="noopener noreferrer" className={link}>
                  B general building contractor
                </a>{' '}
                or specialty subcontractors for foundations and paving. Ask which licensed entity
                signs the prime contract and who carries the structural warranty.
              </p>
              <p>
                For K-12 and community college sites, DSA&apos;s IR 16-8 says solar projects are
                not exempt from DSA review and construction oversight regardless of cost. The{' '}
                <Link href="/commercial-solar/school-solar-california" className={link}>
                  school solar guide
                </Link>{' '}
                covers that path. Dealerships weighing canopies over inventory parking can read{' '}
                <Link href="/commercial-solar/car-dealerships-going-solar-california" className={link}>
                  solar for California car dealerships
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                When a carport is the wrong choice
              </h2>
              <p>
                If the roof has the space, the structural capacity and years of life left, a
                roof system avoids paying for a canopy. A carport also makes less sense when you
                lease the lot, when the parking layout is likely to change within the
                system&apos;s life, or when the site needs a solar facility placed in service
                quickly: structural design, plan check and foundations add steps a roof job does
                not have. Compare the roof option first, on the same usage data and the same
                ownership structure. The{' '}
                <Link href="/commercial-solar/commercial-solar-roofing" className={link}>
                  commercial roof and solar guide
                </Link>{' '}
                covers that side.
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
                The medians on this page are published historical figures, not a quote, and no
                statement here is tax advice.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>LBNL, <a href={tts2024Summary} target="_blank" rel="noopener noreferrer" className={link}>Tracking the Sun 2024 executive summary</a> (August 2024) and <a href={tts2024Report} target="_blank" rel="noopener noreferrer" className={link}>full report</a> (October 2024)</li>
                <li>LBNL, <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>U.S. Distributed Solar and Storage: 2026 Data Update</a> (August 2026)</li>
                <li>NREL, <a href={nrel2023} target="_blank" rel="noopener noreferrer" className={link}>Solar PV and Energy Storage Cost Benchmarks, Q1 2023</a> (NREL/TP-7A40-87303)</li>
                <li>Division of the State Architect, <a href={dsaIr168} target="_blank" rel="noopener noreferrer" className={link}>IR 16-8</a> (revised January 18, 2024) and <a href={dsaIr11b9} target="_blank" rel="noopener noreferrer" className={link}>IR 11B-9</a> (revised June 26, 2026)</li>
                <li>CSLB, <a href={cslbC46} target="_blank" rel="noopener noreferrer" className={link}>C-46 Solar Contractor</a> and <a href={cslbB} target="_blank" rel="noopener noreferrer" className={link}>B General Building Contractor</a> classifications</li>
                <li>26 U.S.C. <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>§48E</a>, <a href={irc168} target="_blank" rel="noopener noreferrer" className={link}>§168</a>, <a href={irc6417} target="_blank" rel="noopener noreferrer" className={link}>§6417</a> and <a href={irc30c} target="_blank" rel="noopener noreferrer" className={link}>§30C</a>, Office of the Law Revision Counsel (text in effect September 22, 2026)</li>
                <li>IRS, <a href={irsElectivePay} target="_blank" rel="noopener noreferrer" className={link}>Elective pay and transferability FAQ</a> (reviewed March 7, 2026)</li>
                <li>California Franchise Tax Board, <a href={ftb100} target="_blank" rel="noopener noreferrer" className={link}>2025 Form 100 booklet</a></li>
                <li>PG&amp;E, <a href={pgeBev} target="_blank" rel="noopener noreferrer" className={link}>Electric Schedule BEV</a> (rates effective March 1, 2026)</li>
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
