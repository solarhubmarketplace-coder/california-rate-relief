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

// Created 2026-09-23 (topical-authority program, CREATE). Rates, code and
// statutory statements were fetched on 2026-09-23 from the sources listed at
// the foot. No dealership is named and no project is described as typical.

const title = 'Car Dealerships Going Solar in California: A 2026 Guide';
const h1 = 'Car Dealerships Going Solar in California: Canopies, EV Charging and the Numbers to Check';
const description =
  'How California car dealerships use roofs and parking canopies for solar, how EV charging and demand charges change the math, and the 2026 tax deadlines.';
const path = '/commercial-solar/car-dealerships-going-solar-california';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const pgeBev = 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_BEV.pdf';
const sceBusinessTou =
  'https://www.sce.com/business/rates-financing/rate-plans/business-time-of-use-rate-plans';
const cpucNbt =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing';
const tts2024Summary =
  'https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_executive_summary.pdf';
const lbnl2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const cecNonresPv =
  'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-15';
const bscCalgreen = 'https://www.dgs.ca.gov/BSC/CALGreen';
const usc = (s: string) =>
  `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section${s}&num=0&edition=prelim`;
const irc48e = usc('48E');
const irc168 = usc('168');
const irc30c = usc('30C');
const ftb100 = 'https://www.ftb.ca.gov/forms/2025/2025-100-booklet.html';

const faqs = [
  {
    question: 'How much do solar carports cost for an auto dealership?',
    answer:
      'No public agency publishes a dealership or carport price. LBNL reports that large California systems at commercial sites installed in 2023 had a median price of $2.3 per watt before incentives, across all mounting types; a canopy adds steel, foundations and site work on top. Ask for the canopy priced per parking space and the solar priced per watt, separately.',
  },
  {
    question: 'Is solar worth it for a car dealership in California?',
    answer:
      'It depends on the demand charges on your tariff, how much of the output you use on site, how EV charging is metered, and whether a new system can be placed in service before the federal credit deadline that applies to it. Ask for a monthly bill model on your actual rate schedule, with and without EV charging and a battery.',
  },
  {
    question: 'Can solar power the EV chargers on a dealership lot?',
    answer:
      "Partly, and timing is the key. On PG&E's optional Schedule BEV for separately metered EV charging, the super off-peak period runs 9 a.m. to 2 p.m. every day, which overlaps midday solar production. Charging inventory and service vehicles in that window uses solar output on site instead of exporting it.",
  },
  {
    question: 'Is there still a federal tax credit for dealership EV chargers?',
    answer:
      'Not for chargers placed in service after June 30, 2026. The alternative fuel vehicle refueling property credit in 26 U.S.C. §30C does not apply to property placed in service after that date. The solar credit under §48E has its own rules and deadlines.',
  },
  {
    question: 'Do new dealership buildings in California have to include solar?',
    answer:
      "Many new nonresidential buildings do. The California Energy Commission's 2025 Energy Code, Section 140.10(a), requires solar PV on newly constructed buildings of listed types, including retail, office and warehouse, usually with battery storage. Ask your architect which building type your showroom and service building fall under.",
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

export default function DealershipSolar() {
  return (
    <PublicLayout breadcrumbLabel="Car dealership solar">
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
              <span className="text-foreground">Car dealership solar</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Dealerships · Canopies · EV charging
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                California car dealerships that go solar usually use two surfaces: the showroom
                and service-building roofs, and parking canopies over the inventory or customer
                lot. Whether it pays comes down to three things: the demand charges on the
                dealership&apos;s business tariff, how EV charging is metered and timed, and
                whether a new system can be placed in service before the federal credit
                deadline that applies to it.
              </p>
              <p>
                This guide is part of the{' '}
                <Link href="/commercial-solar" className={link}>
                  commercial solar hub for California businesses
                </Link>
                . Dealerships are retail sites, and the{' '}
                <Link href="/commercial-solar/retail-solar-california" className={link}>
                  retail solar guide
                </Link>{' '}
                covers the landlord and lease questions that also apply here. Sources were
                checked {CHECKED}.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Why dealerships look at solar
              </h2>
              <p>
                A dealership combines a large daytime load (showroom lighting and cooling,
                service bays with compressors and lifts, offices) with a lot of paved,
                unshaded space. That makes it a natural fit for on-site solar, and retail is one
                of the biggest commercial segments already doing it: Berkeley Lab&apos;s{' '}
                <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>
                  2026 data update
                </a>{' '}
                names retail, warehouse, industrial and office buildings as the largest business
                types among 2025 commercial installs, and found third-party ownership slightly
                more common at retail sites than at other commercial sub-segments.
              </p>
              <p>
                EV charging adds a second reason. Chargers for inventory, demo and service
                vehicles raise the site&apos;s energy use and can set new demand peaks. Solar,
                storage and charging are best priced as one design, with each piece on its own
                line.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Roof or canopy: where the array goes
              </h2>
              <p>
                <strong>Roofs</strong> are usually the lower-cost host if they have years of life
                left and the structure can take the load. Showrooms with large glass areas and
                architectural roofs may have less usable space than the service building. See the{' '}
                <Link href="/commercial-solar/commercial-solar-roofing" className={link}>
                  commercial solar roofing guide
                </Link>{' '}
                for the roof checks.
              </p>
              <p>
                <strong>Parking canopies</strong> cover inventory from sun and weather and give
                the array room to grow, but you pay for steel, foundations and site work. Canopy
                clearance has to suit vans and trucks on the lot, accessible spaces and any fire
                lane, and bidders should design for how cars are moved and displayed. The{' '}
                <Link href="/commercial-solar/commercial-solar-carport-cost" className={link}>
                  commercial carport cost guide
                </Link>{' '}
                explains what a canopy adds and how to read a bid.
              </p>
              <p id="carport-cost">
                <strong>What dealership carports cost.</strong> No public agency publishes a
                dealership or carport price. The nearest benchmark is Berkeley Lab&apos;s{' '}
                <a href={tts2024Summary} target="_blank" rel="noopener noreferrer" className={link}>
                  Tracking the Sun 2024 summary
                </a>
                : large California commercial systems installed in 2023 had a median price of
                $2.3 per watt before incentives, across all mounting types. A canopy sits on top
                of that as steel, foundations, trenching and paving repair. Ask each bidder for
                the solar priced per watt and the structure priced per covered parking space, so
                you can compare canopy designs and hold the solar part against a roof quote.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                The bill: demand charges and EV charging rates
              </h2>
              <p>
                Most dealerships are on a business time-of-use tariff with demand charges. SCE&apos;s{' '}
                <a href={sceBusinessTou} target="_blank" rel="noopener noreferrer" className={link}>
                  business TOU page
                </a>{' '}
                describes two kinds: a facilities-related charge set by the highest demand in the
                month at any hour, and a time-related charge set by the highest demand during
                on-peak or mid-peak weekday hours. Solar lowers energy purchases, but a cloudy
                interval or an evening charging session can still set the monthly peak. A{' '}
                <Link href="/commercial-solar/commercial-battery-storage-california" className={link}>
                  commercial battery
                </Link>{' '}
                is the tool for that line.
              </p>
              <p>
                Separately metered EV charging can move to an EV rate. PG&amp;E&apos;s{' '}
                <a href={pgeBev} target="_blank" rel="noopener noreferrer" className={link}>
                  Schedule BEV
                </a>{' '}
                is optional for commercial charging metered apart from the rest of the site. It
                replaces the customer charge and demand charge with a monthly subscription in
                kW blocks, and in rates effective March 1, 2026 it prices energy like this:
              </p>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="p-3 text-left text-xs text-muted-foreground">
                    PG&amp;E Schedule BEV, total bundled rates effective March 1, 2026. Super
                    off-peak 9 a.m.–2 p.m., peak 4–9 p.m., off-peak all other hours, every day,
                    no seasonal variation.
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Item</th>
                      <th className="p-3">BEV-1 (up to about 100 kW)</th>
                      <th className="p-3">BEV-2 secondary (about 100 kW and up)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3">Subscription block</th><td className="p-3">10 kW at $12.41</td><td className="p-3">50 kW at $95.56</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3">Overage fee</th><td className="p-3">$2.48 per kW</td><td className="p-3">$3.82 per kW</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3">Peak energy</th><td className="p-3">$0.35711/kWh</td><td className="p-3">$0.36977/kWh</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3">Off-peak energy</th><td className="p-3">$0.16510/kWh</td><td className="p-3">$0.15654/kWh</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3">Super off-peak energy</th><td className="p-3">$0.13844/kWh</td><td className="p-3">$0.13327/kWh</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                The super off-peak window overlaps midday solar production. Scheduling inventory
                and service-vehicle charging between 9 a.m. and 2 p.m. uses the array&apos;s
                output on site, while the 4 to 9 p.m. peak is the time to avoid. SCE and SDG&amp;E
                customers should ask their utility for the equivalent EV rate before modeling.
              </p>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Export credits favor using solar on site
              </h2>
              <p>
                Since April 15, 2023, new solar customers of PG&amp;E, SCE and SDG&amp;E take
                service on the CPUC&apos;s{' '}
                <a href={cpucNbt} target="_blank" rel="noopener noreferrer" className={link}>
                  net billing tariff
                </a>
                , which credits exports at values from the CPUC&apos;s Avoided Cost Calculator
                that are usually lower than the retail rate. For a dealership, that argues for
                sizing the system to daytime load, including scheduled EV charging, rather than
                filling every canopy for export. The{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                  commercial cost and bill guide
                </Link>{' '}
                shows how export credits enter the payback math.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                New showrooms and remodels: code requirements
              </h2>
              <p>
                For new construction, the California Energy Commission&apos;s{' '}
                <a href={cecNonresPv} target="_blank" rel="noopener noreferrer" className={link}>
                  2025 nonresidential solar PV guidance
                </a>{' '}
                says Section 140.10(a) requires solar on newly constructed buildings of listed
                types, including retail, office and warehouse, generally with battery storage
                unless an exception applies. The{' '}
                <Link href="/commercial-solar/title-24-requirements" className={link}>
                  Title 24 commercial solar requirements page
                </Link>{' '}
                covers sizing and exceptions.
              </p>
              <p>
                EV charging has its own code track. CALGreen, Title 24 Part 11, sets green
                building standards for nonresidential new buildings, additions and alterations,
                its 2025 edition took effect January 1, 2026, and it includes EV charging
                provisions, according to the{' '}
                <a href={bscCalgreen} target="_blank" rel="noopener noreferrer" className={link}>
                  Building Standards Commission
                </a>
                . Ask your city whether a lot reconfiguration or building addition triggers them
                before you lay out canopies and chargers.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Tax credits and depreciation in 2026
              </h2>
              <p>
                A dealership that owns its system can claim the credit under{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §48E
                </a>
                : 6% of the qualified investment, or 30% for a facility under 1 MW AC or one meeting
                the prevailing-wage and apprenticeship rules. For a solar facility whose
                construction began after July 4, 2026, there is no credit for property placed in
                service after December 31, 2027; storage at the facility is excepted from that
                cutoff. The statute excludes &ldquo;a building or its structural components&rdquo;
                from qualified property, so ask a tax professional how canopy steel is treated.
              </p>
              <p>
                On depreciation,{' '}
                <a href={irc168} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §168(e)(3)(B)(viii)
                </a>{' '}
                treats §48E qualified property and energy storage as 5-year property, and
                §168(k) allows 100% first-year depreciation for qualified property acquired after
                January 19, 2025. California does not conform to §168(k), per the{' '}
                <a href={ftb100} target="_blank" rel="noopener noreferrer" className={link}>
                  FTB&apos;s 2025 Form 100 booklet
                </a>
                . The charger credit in{' '}
                <a href={irc30c} target="_blank" rel="noopener noreferrer" className={link}>
                  §30C
                </a>{' '}
                does not apply to property placed in service after June 30, 2026. Have your tax
                professional confirm how these apply to your entity before a bid&apos;s
                after-tax numbers go into a decision.
              </p>
              <p>
                If the dealership would rather not own the equipment, a lease or PPA moves the
                credit and depreciation to a third-party owner. Compare the options in{' '}
                <Link href="/commercial-solar/commercial-solar-ppa-vs-purchase-california" className={link}>
                  PPA versus purchase
                </Link>{' '}
                and{' '}
                <Link href="/commercial-solar/financing-options" className={link}>
                  commercial solar financing options
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What to put in a dealership solar bid request
              </h2>
              <ol className="list-decimal space-y-3 pl-6">
                <li>Twelve months of interval data for every meter, including any separately metered chargers.</li>
                <li>The site plan with inventory, customer, service and accessible parking marked, plus fire lanes.</li>
                <li>Planned charger count and power, and when vehicles can charge.</li>
                <li>Roof age and condition for the showroom and service buildings.</li>
                <li>The ownership structure you want priced, and whether you own or lease the land.</li>
                <li>A request for canopy, solar, electrical, charger and battery lines priced separately.</li>
              </ol>
              <p>
                Then compare bidders with the{' '}
                <Link href="/commercial-solar/companies-california" className={link}>
                  commercial solar company checklist
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                When solar is the wrong move for a dealership
              </h2>
              <p>
                Wait if the site is due for a rebuild or major remodel, if the lot layout will
                change, or if you lease the land on a term shorter than the system&apos;s
                financing or contract. A dealership served by a publicly owned utility such as
                LADWP or SMUD should model that utility&apos;s own rates and export terms, since
                the CPUC net billing tariff applies to PG&amp;E, SCE and SDG&amp;E. And if a new
                system cannot realistically be placed in service before the credit deadline that
                applies to it, rerun the numbers without the credit before signing.
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
                It does not name, rank or endorse dealerships or installers, and nothing here is
                tax advice.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>PG&amp;E, <a href={pgeBev} target="_blank" rel="noopener noreferrer" className={link}>Electric Schedule BEV, Business Electric Vehicles</a> (rates effective March 1, 2026)</li>
                <li>SCE, <a href={sceBusinessTou} target="_blank" rel="noopener noreferrer" className={link}>business time-of-use rate plans</a></li>
                <li>CPUC, <a href={cpucNbt} target="_blank" rel="noopener noreferrer" className={link}>net energy metering and net billing</a></li>
                <li>LBNL, <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>U.S. Distributed Solar and Storage: 2026 Data Update</a> (August 2026) and <a href={tts2024Summary} target="_blank" rel="noopener noreferrer" className={link}>Tracking the Sun 2024 executive summary</a> (August 2024)</li>
                <li>California Energy Commission, <a href={cecNonresPv} target="_blank" rel="noopener noreferrer" className={link}>2025 Nonresidential Solar PV</a>; California Building Standards Commission, <a href={bscCalgreen} target="_blank" rel="noopener noreferrer" className={link}>CALGreen</a></li>
                <li>26 U.S.C. <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>§48E</a>, <a href={irc168} target="_blank" rel="noopener noreferrer" className={link}>§168</a> and <a href={irc30c} target="_blank" rel="noopener noreferrer" className={link}>§30C</a>, Office of the Law Revision Counsel (text in effect September 22, 2026)</li>
                <li>California Franchise Tax Board, <a href={ftb100} target="_blank" rel="noopener noreferrer" className={link}>2025 Form 100 booklet</a></li>
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
