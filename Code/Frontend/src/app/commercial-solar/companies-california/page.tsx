// Upgraded 2026-09-23 (topical-authority program): the page now owns the
// "commercial solar company / EPC / commercial solar quotes" cluster. It moved
// off DecisionPage to the PublicLayout + ArticleJsonLd pattern so the Article,
// FAQPage and author signals are visible to scripts/qc-gate-tsx.mjs without a
// second Article node. Original company claims remain at base e605685.
import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { TocRail, RAIL_GRID } from '@/components/trust/TocRail';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { CommercialReviewButton, CommercialReviewForm } from '@/components/growth/CommercialReview';

// `h1` is the on-page heading; `metaTitle` is the search title.
const h1 = 'Commercial Solar Companies and EPCs in California: Compare by Scope';
const metaTitle = 'Commercial Solar Companies & EPCs in California: 6 Checks';
const description =
  'Installer, EPC, developer or owner? How California commercial solar companies split the work, and 6 items to get in writing before comparing quotes.';
const path = '/commercial-solar/companies-california';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const DATE_PUBLISHED = '2026-04-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline underline-offset-2';

const cslbLookup = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const cslbC46 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C46';
const cslbC10 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C10';
const cslbB =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=B';
const sceBusinessTou =
  'https://www.sce.com/business/rates-financing/rate-plans/business-time-of-use-rate-plans';
const lbnl2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const tts2024Summary =
  'https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_executive_summary.pdf';
const cpucRule21 = 'https://www.cpuc.ca.gov/Rule21/';
const cecOptIn =
  'https://www.energy.ca.gov/programs-and-topics/topics/power-plants/opt-certification-program';
const usc = (s: string) =>
  `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section${s}&num=0&edition=prelim`;
const irc48e = usc('48E');
const irc45 = usc('45');

const faqs = [
  {
    question: 'What is a commercial solar EPC?',
    answer:
      'EPC stands for engineering, procurement and construction. It is a contracting role in which one party designs the system, buys the equipment and builds the project, usually under a single contract. It is not a California license category: the physical work is still done under a CSLB license such as C-46 Solar or C-10 Electrical.',
  },
  {
    question: 'Who are the largest commercial solar companies in California?',
    answer:
      'This page names none. No dated, primary-source ranking of commercial solar companies working in California was available, and size is a weak proxy for license standing, current capacity or experience with your roof, tariff and utility. Published lists usually rank by megawatts installed, which favors utility-scale builders over rooftop specialists.',
  },
  {
    question: 'How do I get comparable commercial solar quotes?',
    answer:
      'Give every bidder the same brief: 12 months of interval data, the tariff name, the roof or site plan, the electrical service size and the ownership structure you want priced. Ask for a line-item cash price, the DC system size, the production and bill model, and the exact contracting entity. Only then compare totals.',
  },
  {
    question: "What's the difference between a commercial solar company and an EPC?",
    answer:
      'Often only the label. What matters is which legal entity carries the engineering, the construction, the warranty and the ongoing service, and whether those are the same entity. Get all four named in writing, because they are frequently split between a developer, an EPC and subcontractors.',
  },
  {
    question: 'Who builds rooftop solar for commercial and industrial clients?',
    answer:
      'Commercial rooftop systems are built by contractors holding a CSLB C-46 Solar or C-10 Electrical license, sometimes as the EPC and sometimes as a subcontractor to one. Roof repair or replacement is separate work under a roofing or general building license. Ask each bidder whether it self-performs the electrical and racking work or subcontracts it.',
  },
  {
    question: 'Who installs solar carports for businesses in California?',
    answer:
      'The same licensed solar and electrical contractors, usually working with a structural engineer for the canopy and foundations and often a general building contractor for site work. Carport bids need the structure priced separately from the solar equipment.',
  },
  {
    question: 'Is a commercial solar tax credit reduced by debt financing?',
    answer:
      'Not by an ordinary loan, under the statute. Section 48E(d)(2) applies rules similar to section 45(b)(3), which reduces the credit when a facility is financed with tax-exempt bond proceeds, by up to 15%. Grants, subsidized programs and your own facts can raise other questions, so confirm the treatment with a tax professional.',
  },
  {
    question: 'What license does a solar company need in California?',
    answer:
      'CSLB classifies solar contractors as C-46 ("installs, modifies, maintains, and repairs thermal and photovoltaic solar energy systems") and electrical contractors as C-10, whose scope includes solar photovoltaic cells. Check the license number of the exact entity on your contract in the CSLB lookup before signing.',
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description,
    type: 'article',
    url: canonicalUrl,
    publishedTime: `${DATE_PUBLISHED}T00:00:00Z`,
    modifiedTime: `${DATE_MODIFIED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, description),
};

export default function CommercialSolarCompanies() {
  return (
    <PublicLayout breadcrumbLabel="Commercial solar companies and EPCs">
      <Header />
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={h1}
        url={canonicalUrl}
        datePublished={DATE_PUBLISHED}
        dateModified={DATE_MODIFIED}
        description={description}
      />
      <FaqJsonLd items={faqs} />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className={`mx-auto max-w-6xl ${RAIL_GRID}`}>
            <article className="min-w-0 max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-primary">Home</Link>
                <span>/</span>
                <Link href="/commercial-solar" className="transition-colors hover:text-primary">Commercial Solar</Link>
                <span>/</span>
                <span className="font-medium text-foreground">Companies and EPCs</span>
              </nav>

              <header className="mb-8">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  Choosing a commercial solar company
                </span>
                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {h1}
                </h1>
                <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
              </header>

              <div id="companies-body">
              <div className="prose prose-slate max-w-none [&_h2]:scroll-mt-24">
                <p className="text-lg">
                  A California commercial solar company can be an installer, an EPC
                  (engineering, procurement and construction contractor), a developer or a
                  financier, and one project often involves several of them. Compare them on
                  scope, not size: the licensed entity that signs, completed projects like
                  yours, an itemized cash price, a bill model built on your tariff, and who
                  services the system afterward.
                </p>
                <p>
                  This page is part of the{' '}
                  <Link href="/commercial-solar" className={link}>
                    commercial solar guide for California businesses
                  </Link>
                  . Before comparing bidders, the{' '}
                  <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                    commercial cost-per-watt benchmarks
                  </Link>{' '}
                  give you a published baseline to hold each price against. Sources were checked{' '}
                  {CHECKED}.
                </p>
                <p className="text-sm text-muted-foreground">
                  California Rate Relief is a referral service. We are not a licensed
                  contractor. It does not rank, endorse or name any company as a preferred
                  provider.
                </p>
              </div>

              <KeyFacts
                className="max-w-3xl"
                sourcesHref="#sources"
                facts={[
                  {
                    label: 'Median non-residential system, 2025',
                    value: '41 kW',
                    note: 'U.S. median size, with a long upper tail. LBNL 2026 data update.',
                    source: { publisher: 'LBNL', url: lbnl2026, date: 'Aug 2026' },
                  },
                  {
                    label: 'California commercial sites, over 100 kW',
                    value: '$2.3/W',
                    note: 'Median installed price, 2023 installs, before incentives.',
                    source: { publisher: 'LBNL', url: tts2024Summary, date: 'Aug 2024' },
                  },
                  {
                    label: 'Licenses that cover solar work',
                    value: 'C-46 · C-10',
                    note: 'CSLB Solar and Electrical classifications. Check the entity that signs.',
                    source: { publisher: 'CSLB', url: cslbC46 },
                  },
                ]}
              />

              <div className="prose prose-slate max-w-none [&_h2]:scroll-mt-24">
                <h2 id="what-is-an-epc" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  Installer, EPC, developer, owner: who does what
                </h2>
                <p>
                  EPC describes a contracting role, not a license. The EPC engineers the
                  system, buys the equipment and builds the job, usually under one contract for
                  the whole scope. A residential-style installer typically sells and installs a
                  standard package; an EPC is hired to deliver a designed project on a specific
                  building or site.
                </p>
                <p>Four roles show up on commercial deals, and sales conversations blur them:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>The developer</strong> originates the project, secures the site and
                    interconnection path, and often arranges the financing. See{' '}
                    <Link href="/commercial-solar/solar-developers" className={link}>
                      what a solar developer does
                    </Link>{' '}
                    for how that role is paid.
                  </li>
                  <li>
                    <strong>The EPC contractor</strong> performs the engineering, procurement
                    and construction.
                  </li>
                  <li>
                    <strong>The owner</strong> holds title to the system. Under a lease or
                    power purchase agreement, that is not the business using the power.
                  </li>
                  <li>
                    <strong>The service provider</strong> monitors and maintains the system
                    after it is running. It may be the EPC, the owner or a third party.
                  </li>
                </ul>
                <p>
                  Whatever the label, the physical work in California is done under a state
                  contractor license. CSLB&apos;s{' '}
                  <a href={cslbC46} className={link}>C-46 Solar Contractor</a> classification
                  covers installing, modifying, maintaining and repairing photovoltaic systems,
                  and the{' '}
                  <a href={cslbC10} className={link}>C-10 Electrical Contractor</a> scope
                  includes solar photovoltaic cells. Ask which licensed entity signs the contract
                  and pulls the permits, then check that number yourself in the{' '}
                  <a href={cslbLookup} className={link}>CSLB license lookup</a>. A company that
                  markets itself as an EPC is not automatically the licensed entity doing your
                  work.
                </p>

                <h2 id="epc-comparison" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  Six things to get in writing from every bidder
                </h2>
                <p>
                  Ask each bidder to price the same scope, and get the responsible legal
                  entities named. These six items separate a comparable proposal from a sales
                  estimate:
                </p>
                <div className="my-6 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <caption className="sr-only">Commercial solar proposal comparison</caption>
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-4">Project item</th>
                        <th className="p-4">Evidence to request</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Relevant work', 'Completed projects with a similar roof, operating hours and utility. Owner references and permission to call them.'],
                        ['Contractor and service', 'The exact contracting entity, its license record, insurance, subcontractors, warranty exclusions and who handles a failed system.'],
                        ['Electrical and structural scope', 'Service capacity, roof life, structural review, equipment location, roof penetrations and any switchgear or transformer work.'],
                        ['Bill model', 'Actual interval data, tariff name, generation provider, energy charges, demand charges and fixed charges.'],
                        ['Interconnection', 'Who files the utility application, study results, upgrade allowances, milestones and the permission-to-operate assumption.'],
                        ['Price and financing', 'Solar-only cash price, then storage, carport or roof work, financing costs, operations, insurance and end-of-term terms on their own lines.'],
                      ].map(([item, detail]) => (
                        <tr key={item} className="border-t">
                          <th scope="row" className="p-4 align-top">{item}</th>
                          <td className="p-4">{detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  A company website describes its own offering. It does not establish current
                  license standing, capacity to take your project or the final installed price.
                </p>

                <h2 id="commercial-solar-quotes" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  How to get commercial solar quotes you can compare
                </h2>
                <p>
                  Most mismatched quotes start with mismatched inputs. Send every bidder the
                  same package: twelve months of interval data from the utility, the rate
                  schedule name, the roof plan or site plan, the size of the main electrical
                  service, any roof work already planned, and the ownership structure you want
                  priced (cash, loan, lease or PPA). Then ask for:
                </p>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>The DC system size and the module and inverter models.</li>
                  <li>A line-item cash price before any financing or tax assumption.</li>
                  <li>Monthly production and a monthly bill model on your actual tariff.</li>
                  <li>Interconnection responsibility and the assumed permission-to-operate date.</li>
                  <li>The service, monitoring and warranty terms, and who delivers them.</li>
                </ol>
                <p>
                  Keep tax and incentive assumptions on a separate row. The{' '}
                  <Link href="/commercial-solar/cost-per-watt-california#quote-checklist" className={link}>
                    commercial quote checklist
                  </Link>{' '}
                  lists the line items to request.
                </p>

                {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
                <div className="not-prose">
                  <CommercialReviewButton />
                </div>

                <h2 id="largest-companies" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  Top, largest and best commercial solar companies: how to read the lists
                </h2>
                <p>
                  This page does not name a company as the largest or the best. No dated,
                  primary-source ranking of commercial solar companies working in California was
                  available for this update, and a ranking without one is a guess. You can still
                  read published lists critically by asking how they were measured:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Megawatts installed in a period</strong> is the usual metric, and it
                    favors utility-scale builders over commercial rooftop specialists.
                  </li>
                  <li>
                    <strong>Project count</strong> gives a very different order, because many
                    small rooftop jobs can outnumber a few large ones.
                  </li>
                  <li>
                    <strong>National versus California volume</strong> matters: a large national
                    EPC may have done little work in your utility territory.
                  </li>
                  <li>
                    <strong>Segment</strong> matters most. Commercial rooftop, carport, ground
                    mount and utility scale are different businesses with different contractors.
                  </li>
                </ul>
                <p>
                  Utility-scale EPC work is a separate market. Large facilities that sell into
                  the wholesale market interconnect under the CAISO tariff or a wholesale
                  distribution tariff rather than the CPUC&apos;s{' '}
                  <a href={cpucRule21} className={link}>Rule 21</a>, and solar facilities of 50
                  MW or more can use the California Energy Commission&apos;s{' '}
                  <a href={cecOptIn} className={link}>opt-in certification program</a>. If you
                  are hosting a system on your own building or lot, look for commercial rooftop
                  or carport experience instead.
                </p>

                <h2 id="systems" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  What a commercial solar energy system includes
                </h2>
                <p>
                  A commercial system has the same core parts as a home system, sized and
                  engineered for a larger service: modules, inverters, racking or a canopy,
                  conduit and combiners, switchgear at the point of interconnection, a revenue
                  or monitoring meter, and often a battery. Sizes vary widely. Berkeley
                  Lab&apos;s{' '}
                  <a href={lbnl2026} className={link}>2026 data update</a> reports a median
                  non-residential system of 41 kW in 2025, with the largest median sizes at
                  schools and industrial properties (over 100 kW) and an 85 kW median on
                  warehouses. Roughly half of 2025 non-residential installs were on commercial
                  buildings, a third on agricultural land and the rest at tax-exempt sites.
                </p>
                <p>
                  The mounting decision changes who you hire. A{' '}
                  <Link href="/commercial-solar/commercial-solar-roofing" className={link}>
                    commercial roof project
                  </Link>{' '}
                  may need a roofer before the solar crew arrives, and a{' '}
                  <Link href="/commercial-solar/commercial-solar-carport-cost" className={link}>
                    parking-lot carport
                  </Link>{' '}
                  needs structural engineering and foundations. Module choice matters too; if
                  a bidder proposes a specific brand, such as{' '}
                  <Link href="/commercial-solar/rec-commercial-solar-panels" className={link}>
                    REC&apos;s commercial panel lines
                  </Link>
                  , check the listing data behind it.
                </p>

                <h2 id="cost" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  How much do commercial solar panels cost?
                </h2>
                <p>
                  Prices vary by size, site and customer type. LBNL&apos;s{' '}
                  <a href={tts2024Summary} className={link}>Tracking the Sun 2024 summary</a>{' '}
                  reports that large California systems installed in 2023 had median prices of
                  $2.3 per watt at commercial sites, $2.0 at agricultural sites and $4.1 at
                  tax-exempt sites, before incentives. A per-watt comparison only works on the
                  same DC system size and the same included work, so keep storage, carports,
                  roof repairs and electrical upgrades on their own lines. Work through the{' '}
                  <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                    commercial cost-per-watt guide
                  </Link>
                  , then the size-specific pages for{' '}
                  <Link href="/commercial-solar/commercial-solar-cost-100kw-california" className={link}>100 kW</Link>,{' '}
                  <Link href="/commercial-solar/commercial-solar-cost-500kw-california" className={link}>500 kW</Link> and{' '}
                  <Link href="/commercial-solar/commercial-solar-cost-1mw-california" className={link}>1 MW</Link>{' '}
                  systems.
                </p>

                <h2 id="financing" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  How commercial solar is financed
                </h2>
                <p>
                  Most bidders can price the same project four ways: cash or a loan (you own it
                  and claim the tax benefits), a lease, a power purchase agreement where a third
                  party owns the system and sells you the power, or C-PACE, repaid on the
                  property tax bill. The{' '}
                  <Link href="/commercial-solar/financing-options" className={link}>
                    commercial financing options guide
                  </Link>{' '}
                  compares them, and{' '}
                  <Link href="/commercial-solar/commercial-solar-ppa-vs-purchase-california" className={link}>
                    PPA versus purchase
                  </Link>{' '}
                  shows how ownership moves the tax benefit.
                </p>
                <p>
                  A common question is whether borrowing reduces the federal credit. Under{' '}
                  <a href={irc48e} className={link}>26 U.S.C. §48E(d)(2)</a>, rules similar to{' '}
                  <a href={irc45} className={link}>§45(b)(3)</a> apply, and §45(b)(3) reduces
                  the credit when a facility is financed with tax-exempt bond proceeds, by the
                  lesser of 15% or the bond-financed share. The statute does not reduce the
                  credit for an ordinary commercial loan. Confirm your own facts with a tax
                  professional.
                </p>

                <h2 id="business-bill" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  Compare the business bill, not a residential average
                </h2>
                <p>
                  Energy charges measure the kilowatt-hours you use. Demand charges measure your
                  peak. SCE&apos;s{' '}
                  <a href={sceBusinessTou} className={link}>business TOU page</a> describes
                  facilities-related demand charges, based on the highest recorded demand in each
                  billing month, and time-related demand charges, based on the highest demand in
                  on-peak or mid-peak hours. A solar array can cut annual purchases without
                  touching the interval that sets a demand charge, which is why the bill model
                  should show solar alone and, separately, solar with battery controls. A{' '}
                  <Link href="/commercial-solar/commercial-battery-storage-california" className={link}>
                    commercial battery
                  </Link>{' '}
                  is priced and justified on that demand line.
                </p>

                <h2 id="by-property-type" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  Commercial solar by property type
                </h2>
                <p>
                  Ask whether a bidder has finished work on your property type, not only in your
                  county. Roof structure, operating hours, refrigeration load and interconnection
                  path differ enough that relevant experience is a real screening question:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li><Link href="/commercial-solar/warehouse-solar-california" className={link}>Warehouse solar projects</Link>: large flat roofs, membrane condition and lighting or refrigeration load.</li>
                  <li><Link href="/commercial-solar/retail-solar-california" className={link}>Retail solar projects</Link>: leased premises, landlord consent and shorter occupancy horizons.</li>
                  <li><Link href="/commercial-solar/agricultural-solar-california" className={link}>Agricultural solar projects</Link>: pumping loads, seasonal use and several service points.</li>
                  <li><Link href="/commercial-solar/multifamily-solar-california" className={link}>Multifamily solar projects</Link>: common-area versus tenant metering and allocation rules.</li>
                  <li><Link href="/commercial-solar/self-storage-solar-california" className={link}>Self-storage solar projects</Link>: low, flat loads with large roof area.</li>
                  <li><Link href="/commercial-solar/school-solar-california" className={link}>School solar projects</Link> and <Link href="/commercial-solar/church-solar-california" className={link}>church solar projects</Link>: tax-exempt owners and elective pay.</li>
                  <li><Link href="/commercial-solar/car-dealerships-going-solar-california" className={link}>Car dealership solar</Link>: big lots, canopies and EV charging.</li>
                </ul>

                <h2 id="manufacturing" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  Manufacturing and industrial projects
                </h2>
                <p>
                  An industrial proposal needs your operating schedule. Identify shift changes,
                  weekend production, process heat, compressors, refrigeration and planned
                  equipment additions, and ask whether the model includes startup peaks and
                  shutdowns. Separate existing loads from an expansion that has not opened,
                  document roof access, ventilation, fire-lane and production-interruption
                  limits, and define which loads need backup. Bill savings and outage operation
                  are different requirements.
                </p>

                <h2 id="operations" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  Operations and maintenance after installation
                </h2>
                <p>
                  Ask for the O&amp;M scope as its own document: monitoring, alarm response
                  times, inverter replacement terms, cleaning, roof-leak responsibility at
                  penetrations, and what happens if the installer stops operating. Under a PPA or
                  lease, the owner usually carries these duties; under a purchase, you do unless
                  you contract them out. A new-installation contractor is not automatically
                  responsible for an existing system. For an older system, start with the
                  original installer, the manufacturer and your records.
                </p>

                <h2 id="regional-project-brief" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                  Regional project brief
                </h2>
                <p>
                  A street address in Riverside, Los Angeles or San Diego does not identify the
                  utility account or tariff. Give each bidder the exact address, the permit
                  authority, the current tariff and utility account, the owner or leaseholder
                  with authority over the roof or site, and your operating hours, and ask for
                  written confirmation that it accepts the address and project type.
                </p>

                <h2 id="faq" className="mb-4 mt-10 text-2xl font-bold text-foreground">
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

                <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
                <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>CSLB, <a href={cslbC46} className={link}>C-46 Solar</a>, <a href={cslbC10} className={link}>C-10 Electrical</a> and <a href={cslbB} className={link}>B General Building</a> classifications; <a href={cslbLookup} className={link}>license lookup</a></li>
                  <li>LBNL, <a href={lbnl2026} className={link}>U.S. Distributed Solar and Storage: 2026 Data Update</a> (August 2026)</li>
                  <li>LBNL, <a href={tts2024Summary} className={link}>Tracking the Sun 2024 executive summary</a> (August 2024)</li>
                  <li>SCE, <a href={sceBusinessTou} className={link}>business time-of-use rate plans</a></li>
                  <li>CPUC, <a href={cpucRule21} className={link}>Electric Rule 21</a>; California Energy Commission, <a href={cecOptIn} className={link}>Opt-In Certification Program</a></li>
                  <li>26 U.S.C. <a href={irc48e} className={link}>§48E</a> and <a href={irc45} className={link}>§45</a>, Office of the Law Revision Counsel (text in effect September 22, 2026)</li>
                </ul>
              </div>
              </div>

              {/* The form moved into the shared inline placement (#commercial-review)
                  on 2026-09-23; heading and intro keep this page's wording. The
                  #solar-inquiry wrapper stays for scripts/test-commercial-growth.mjs. */}
              <CommercialReviewForm
                legacyAnchor
                heading="Discuss a California commercial project"
                intro="Send the property basics to California Rate Relief. This is a private referral inquiry. Project review, provider availability and a proposal come later."
              />
              <HubSpokeLinks hub="commercial" currentPath={path} />
              <RelatedGuides
                heading="Contract and paperwork checks that apply to any scope"
                intro="The disclosure and financing traps are the same ones residential buyers hit first."
                links={[
                  { href: '/solar-problems/solar-contract-red-flags-california', label: 'What the California disclosure forms are meant to stop' },
                  { href: '/solar-installers/how-to-verify-a-solar-contractor-california', label: 'How to verify a contractor before signing' },
                  { href: '/solar-problems', label: 'All California solar problem guides' },
                ]}
              />
            </article>
            <TocRail rootId="companies-body" />
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
