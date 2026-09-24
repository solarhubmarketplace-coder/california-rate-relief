// 2026-09-23 topical-authority upgrade (claude/ta-installers-20260923).
// Statewide residential solar guide and the cost_value hub: what home solar
// costs, how it works under California's current billing rules, whether it pays
// and what to do next. It replaces the shared GrowthGuide 'panels' body
// (Guides.tsx is left untouched for other owners).
//
// The previous title claimed a "$3.30/W" California median from LBNL's 2026
// data update. That figure does not appear in the report's text (it was
// checked again 2026-09-23), so it is gone. The price band used here is the one
// LBNL states in words in Tracking the Sun, 2024 Edition (p.35 and p.37), the
// same benchmark src/data/solar-cost-benchmark.ts carries for /solar-cost.
// Every other figure was fetched from its primary source on 2026-09-23.
import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { DecisionPage, QuoteChecklist, type Source } from '@/components/growth/DecisionPage';
import { SolarCalculator } from '@/components/growth/SolarCalculator';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';

const PATH = '/solar-panels-california';
const UPDATED = '2026-09-23';
const metaTitle = 'Solar Panels in California (2026): Cost, Rules, Worth It';
const metaDescription =
  'What home solar costs in California, how net billing credits your exports, which incentives still apply in 2026, and how to judge whether it pays.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const LBNL_TTS_2024 =
  'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf';
const LBNL_2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const CPUC_NEM = 'https://www.cpuc.ca.gov/NEM/';
const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const CPUC_LOW_INCOME =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide/low-income-solar-programs';
const IRS_OBBB =
  'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb';
const BOE_SOLAR = 'https://boe.ca.gov/proptaxes/active-solar-energy-system/';
const CEC_2025_CODE =
  'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/2025-building-energy-efficiency';
const CEC_2025_PV =
  'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-12';
const NREL_PVWATTS = 'https://pvwatts.nrel.gov/';
const CEC_2024_GEN =
  'https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/2024-total-system-electric-generation';

const sources: Source[] = [
  {
    label: 'Lawrence Berkeley National Laboratory: Tracking the Sun, 2024 Edition (installed-price band, p.35; California position, p.37)',
    url: LBNL_TTS_2024,
  },
  {
    label: 'Lawrence Berkeley National Laboratory: U.S. Distributed Solar and Storage, 2026 data update (August 2026)',
    url: LBNL_2026,
  },
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: CPUC_NEM },
  { label: 'CPUC: California Solar Consumer Protection Guide (version 4, 2025)', url: CPUC_GUIDE },
  { label: 'CPUC: low-income solar programs', url: CPUC_LOW_INCOME },
  { label: 'IRS: FAQs on OBBB changes to the residential clean energy credit (section 25D)', url: IRS_OBBB },
  { label: 'Board of Equalization: active solar energy system new construction exclusion', url: BOE_SOLAR },
  { label: 'California Energy Commission: 2025 Building Energy Efficiency Standards (effective date)', url: CEC_2025_CODE },
  { label: 'California Energy Commission: 2025 single-family solar PV requirements', url: CEC_2025_PV },
  { label: 'California Energy Commission: 2024 Total System Electric Generation', url: CEC_2024_GEN },
  { label: 'NREL: PVWatts calculator (production estimates for grid-connected PV)', url: NREL_PVWATTS },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'How much do solar panels cost in California?',
    answer:
      'Lawrence Berkeley National Laboratory’s Tracking the Sun report put most host-owned residential systems installed in 2023 between $3.20 and $5.50 per watt (the 20th to 80th percentile of its national sample) and described California pricing as near the middle of that range. LBNL’s August 2026 update reports that host-owned residential prices fell by $0.50 per watt in 2025 after adjusting for inflation. Your own price depends on system size, equipment, roof and electrical work, so compare itemized quotes.',
  },
  {
    question: 'Is solar free in California?',
    answer:
      'Almost never. The CPUC’s consumer guide says it plainly: solar energy is rarely free, and an honest company will be upfront about all the costs. A lease or power purchase agreement can start with no money down, but you pay every month for years. The exception is a small set of income-qualified programs, such as DAC-SASH, which provides no-cost rooftop systems to income-qualified homeowners in disadvantaged communities.',
  },
  {
    question: 'Does California pay for solar panels?',
    answer:
      'Not for most households. The state does not buy panels for homeowners in general. Income-qualified homeowners in disadvantaged communities may qualify for DAC-SASH, which GRID Alternatives administers, and SGIP offers incentives to eligible low-income customers who pair solar with battery storage. Utility bill discounts under DAC-GT and CSGT are not rooftop systems.',
  },
  {
    question: 'Can I still get the 30% federal solar tax credit?',
    answer:
      'Not for a system installed now. The IRS says the residential clean energy credit is not allowed for expenditures made after December 31, 2025, and an expenditure counts as made when the original installation is completed. A system finished in 2026 does not qualify, even if you paid a deposit earlier.',
  },
  {
    question: 'Will solar panels raise my property taxes in California?',
    answer:
      'Not while the current exclusion applies. The Board of Equalization says installing a qualifying active solar energy system will not increase or decrease the assessment of the existing property; it is a new construction exclusion, not an exemption. The statute is scheduled to sunset on January 1, 2027, so check its status if your system will finish near that date.',
  },
  {
    question: 'Is solar required on new homes in California?',
    answer:
      'Yes, for most new single-family homes. Under the 2025 Energy Code, which applies to buildings whose permit applications are filed on or after January 1, 2026, newly constructed single-family homes must include a solar PV system, sized by the smaller of a roof-area method or a formula based on climate zone and floor area. No system is required if the calculated size is under 1.8 kWdc or the usable roof area is under 80 contiguous square feet. Additions and alterations are exempt.',
  },
  {
    question: 'How much do solar panels save in California?',
    answer:
      'No honest page can give you one number. Savings depend on how much of the solar output you use at home, your utility’s rate plan and export credit, the price you pay and how long you keep the system. Ask each bidder to model your remaining bill on your own 12 months of usage and your actual tariff, and treat any quote that shows your bill disappearing entirely as a reason for questions.',
  },
];

const h2 = 'text-2xl font-bold text-foreground';
const link = 'text-primary underline underline-offset-2';

export default function SolarPanelsCalifornia() {
  return (
    <DecisionPage
      title="Home solar in California: what it costs, how it works now, and whether it pays"
      breadcrumbLabel="Solar panels in California"
      intro="Rooftop solar still works in California, but the math changed. PG&E, SCE and SDG&E customers who applied to connect on or after April 15, 2023 earn an export credit that is usually lower than the price they pay for grid power, so most of the value now comes from using your own solar at home. Price, roof, rate plan and how you pay decide whether it pays for you."
      path={PATH}
      sources={sources}
      sourceCheckedDate={UPDATED}
      contentModifiedDate={UPDATED}
      topic="Home solar in California: cost and value"
      authorSchema="person"
      primaryResourceHref="/tools/solar-panel-calculator"
      primaryResourceLabel="Bill and quote calculator"
      comparisonHref="/best-solar-companies-california"
      comparisonLabel="Compare solar companies"
      keyStats={[
        {
          label: 'Installed price band',
          value: '$3.20–$5.50/W',
          note: 'Host-owned residential systems installed in 2023, 20th–80th percentile, national sample. LBNL places California near the middle.',
          source: { publisher: 'LBNL', date: UPDATED, url: LBNL_TTS_2024 },
        },
        {
          label: 'Price change in 2025',
          value: '−$0.50/W',
          note: 'Host-owned residential prices, year over year, inflation-adjusted.',
          source: { publisher: 'LBNL', date: UPDATED, url: LBNL_2026 },
        },
        {
          label: 'Export rules for new PG&E, SCE, SDG&E systems',
          value: 'Net billing',
          note: 'For interconnection applications since April 15, 2023.',
          source: { publisher: 'CPUC', date: UPDATED, url: CPUC_NEM },
        },
        {
          label: 'Federal 25D tax credit',
          value: 'Ended',
          note: 'Not allowed for expenditures made after December 31, 2025.',
          source: { publisher: 'IRS', date: UPDATED, url: IRS_OBBB },
        },
      ]}
      faqs={faqs}
    >
      <section id="cost">
        <h2 className={h2}>How much do solar panels cost in California?</h2>
        <p>
          Solar is priced per watt of panel capacity. The most recent dollar range Lawrence
          Berkeley National Laboratory states in its text comes from Tracking the Sun, 2024
          Edition: host-owned residential systems installed in 2023 ran from $3.20 to $5.50 per
          watt, the 20th to 80th percentile of its national sample. LBNL adds that residential
          pricing in California, &ldquo;which dominates the sample, is near the middle of the
          pack&rdquo; (LBNL, checked September 23, 2026). Its August 2026 update reports that
          host-owned residential prices fell by $0.50 per watt in 2025 after adjusting for
          inflation, without restating a new band.
        </p>
        <p className="mt-3">
          To turn that into a rough total, multiply by system size. Purely as arithmetic, a
          6-kilowatt (6,000-watt) system at the ends of that band works out to $19,200 to
          $33,000 before any incentive. That is a national benchmark from past installations,
          not a quote. Your roof, your electrical panel, the equipment and the company all move
          the number.
        </p>
        <p className="mt-3">What sits inside a quoted price, and what to ask to see separately:</p>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Panels, inverters and racking, with model numbers.</li>
          <li>Design, permits, inspection and the utility interconnection application.</li>
          <li>Electrical work such as a main panel upgrade, which can be a large line item on its own.</li>
          <li>Roof repair or replacement, priced apart from the solar work.</li>
          <li>
            A battery, if any. LBNL found that among cash-purchase residential systems, the
            median price for solar paired with storage was $2.10 per watt higher than for solar
            alone, in data where about 80% of systems were in California (LBNL, 2026 update).
          </li>
          <li>Financing costs, which change the total you pay but not the equipment.</li>
        </ul>
        <p className="mt-3">
          City-level detail lives in the{' '}
          <Link href="/solar-cost" className={link}>
            solar cost guides for 57 California cities
          </Link>
          , and the{' '}
          <Link href="/california-solar-cost-index" className={link}>
            California solar cost index
          </Link>{' '}
          compares them side by side. The{' '}
          <Link href="/blog/how-big-of-a-solar-system-do-i-need-california" className={link}>
            system sizing guide
          </Link>{' '}
          explains how many kilowatts a household usually needs.
        </p>
      </section>

      <SolarCalculator />

      <section id="how-it-works">
        <h2 className={h2}>How home solar works under California&rsquo;s current rules</h2>
        <p>
          Panels turn sunlight into direct current, and an inverter converts it to the
          alternating current your home uses. When the panels make more than the house is using,
          the extra flows to the grid. When they make less, at night or on a cloudy afternoon,
          you draw from the grid as usual. How your utility values those two flows is what
          decides the savings.
        </p>
        <p className="mt-3">
          For PG&amp;E, SCE and SDG&amp;E customers, the CPUC says that everyone applying to
          interconnect since April 15, 2023 takes service on the Net Billing Tariff. Exported
          power is credited at a rate reflecting its value to the grid, taken from the
          CPUC&rsquo;s Avoided Cost Calculator, which is &ldquo;usually lower than import
          rates.&rdquo; Customers on the older NEM 1.0 or 2.0 tariffs may stay on them for 20
          years from their interconnection date, and new net billing customers get a nine-year
          legacy period on their tariff (CPUC, checked September 23, 2026).
        </p>
        <p className="mt-3">
          The practical result: a kilowatt-hour you use at home is worth more than one you
          export. That pushes system design toward matching production to your own usage, and
          it is why batteries now show up in so many California proposals. City-run utilities
          such as LADWP, SMUD and Roseville Electric are outside the CPUC tariff and set their
          own solar billing rules, so a PG&amp;E-style estimate does not fit their customers.
        </p>
        <p className="mt-3">
          The details are in our guides to{' '}
          <Link href="/blog/nem-2-vs-nem-3-california" className={link}>
            NEM 2.0 versus NEM 3.0
          </Link>
          ,{' '}
          <Link href="/blog/what-is-nem-3-california" className={link}>
            what net billing means for your bill
          </Link>{' '}
          and{' '}
          <Link href="/solar-problems/do-i-still-get-a-utility-bill-with-solar" className={link}>
            why you still get a utility bill with solar
          </Link>
          .
        </p>
      </section>

      <section id="production-by-month">
        <h2 className={h2}>How solar production changes month by month</h2>
        <p>
          A California system does not produce the same amount every month. Output peaks in the
          long days of late spring and summer and drops in the short, low-sun weeks around December,
          and coastal fog, shade and roof angle change the shape of that curve from one address to
          the next. That matters because your bill is settled against what you use each month, and
          under net billing a summer surplus exported to the grid is worth less than the winter power
          you buy back.
        </p>
        <p className="mt-3">
          Ask every proposal for a month-by-month production estimate, not just a yearly total, and
          check it against NREL&rsquo;s{' '}
          <a href={NREL_PVWATTS} className={link} target="_blank" rel="noopener noreferrer">
            PVWatts calculator
          </a>
          , which estimates the output of grid-connected systems for any address (NREL, checked
          September 23, 2026). For why December bills look different, see{' '}
          <Link href="/solar-problems/solar-production-winter-california" className={link}>
            solar production in a California winter
          </Link>
          .
        </p>
      </section>

      <section id="batteries">
        <h2 className={h2}>Do you need a battery with solar in California?</h2>
        <p>
          Not always, but the question now comes up in almost every quote. LBNL reports that
          California and Hawaii again had the highest residential battery attachment rates in
          2025, against a national rate of 37% (LBNL, 2026 update). A battery lets you store
          daytime production for the evening peak instead of exporting it at the lower net
          billing credit, and it can back up chosen circuits in an outage. Whether it earns its
          cost depends on your rate plan&rsquo;s peak window and how much you use after sunset.
          Start with the{' '}
          <Link href="/battery" className={link}>
            home battery storage guide
          </Link>{' '}
          and the{' '}
          <Link href="/battery/battery-payback-nem-3-california" className={link}>
            battery payback analysis under net billing
          </Link>
          .
        </p>
      </section>

      <section id="incentives">
        <h2 className={h2}>Solar incentives in California for 2026</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>The federal credit is gone for new installs.</strong> The IRS says the
            residential clean energy credit (section 25D) &ldquo;will not be allowed for any
            expenditures made after December 31, 2025,&rdquo; and that an expenditure is made
            when the original installation is completed (IRS, checked September 23, 2026). What
            is left is covered in{' '}
            <Link href="/blog/solar-tax-credit-expired-2026-options" className={link}>
              your options after the solar tax credit expired
            </Link>
            .
          </li>
          <li>
            <strong>Property tax.</strong> The Board of Equalization says installing a qualifying
            active solar energy system &ldquo;will not result in either an increase or a decrease
            in the assessment of the existing property.&rdquo; It is a new construction exclusion,
            not an exemption, and the statute is scheduled to sunset on January 1, 2027 (BOE,
            checked September 23, 2026). More in{' '}
            <Link href="/blog/do-solar-panels-increase-property-taxes-california" className={link}>
              whether solar panels increase property taxes
            </Link>
            .
          </li>
          <li>
            <strong>Low-income programs.</strong> The CPUC lists DAC-SASH, which provides no-cost
            rooftop solar to income-qualified homeowners in disadvantaged communities and is
            administered by GRID Alternatives, plus SGIP incentives for low-income customers who
            pair solar with storage (CPUC, checked September 23, 2026). See{' '}
            <Link href="/blog/low-income-solar-california" className={link}>
              low-income solar options in California
            </Link>
            .
          </li>
          <li>
            <strong>Battery rebates.</strong> SGIP is the state&rsquo;s storage incentive; its
            current status is tracked on the{' '}
            <Link href="/battery/sgip-battery-rebate-california" className={link}>
              SGIP battery rebate page
            </Link>
            .
          </li>
        </ul>
        <p className="mt-3">
          The full list, utility by utility, is in the{' '}
          <Link href="/blog/california-solar-tax-credit-2026" className={link}>
            guide to California solar incentives
          </Link>{' '}
          and the{' '}
          <Link href="/blog/solar-rebates-by-california-utility" className={link}>
            solar rebates by California utility
          </Link>
          .
        </p>
      </section>

      <section id="free-solar">
        <h2 className={h2}>Is solar free in California?</h2>
        <p>
          The CPUC&rsquo;s consumer guide answers this in one line: &ldquo;Solar energy is rarely
          free. An honest company will be upfront about all the costs&rdquo; (CPUC, version 4,
          checked September 23, 2026). &ldquo;No cost&rdquo; offers are usually leases or power
          purchase agreements. You pay nothing at signing, then pay the provider every month for
          the length of the contract, often with a yearly increase. That can still be a
          reasonable choice. It is not free. Our guide to{' '}
          <Link href="/blog/free-solar-panels-california" className={link}>
            whether free solar panels are real in California
          </Link>{' '}
          walks through the pitches you are likely to hear.
        </p>
      </section>

      <section id="worth-it">
        <h2 className={h2}>Is solar worth it in California?</h2>
        <p>
          For many homeowners it can be, but the answer is personal. These are the inputs that
          decide it, roughly in order of weight:
        </p>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li>
            <strong>Your utility and rate plan.</strong> Net billing rewards using solar output
            at home; municipal utilities have their own rules.
          </li>
          <li>
            <strong>When you use power.</strong> Daytime use (working from home, pool pump,
            daytime EV charging) raises the share of production you keep.
          </li>
          <li>
            <strong>The installed price.</strong> Compare cash prices per watt across at least
            three bids, as the CPUC recommends.
          </li>
          <li>
            <strong>How you pay.</strong> A loan&rsquo;s interest or a lease&rsquo;s yearly
            escalator can erase the savings a cash purchase would show.
          </li>
          <li>
            <strong>Your roof and your horizon.</strong> A roof due for replacement soon, heavy
            shade or a planned move shortens the payoff.
          </li>
        </ol>
        <p className="mt-3">
          Work through them in{' '}
          <Link href="/blog/are-solar-panels-worth-it-california" className={link}>
            the worth-it decision guide
          </Link>
          , or read{' '}
          <Link href="/blog/nem-3-california-still-worth-it" className={link}>
            whether solar is still worth it under NEM 3.0
          </Link>{' '}
          for the net billing math.
        </p>
      </section>

      <section id="paying">
        <h2 className={h2}>Paying for solar: cash, loan, lease or PPA</h2>
        <p>
          With cash or a loan you own the system and its output. With a lease you rent the
          equipment for a fixed monthly payment; with a power purchase agreement you buy the
          electricity it produces at a set price per kilowatt-hour. Leases and PPAs move repairs
          to the provider but add a long contract, a yearly escalator in many cases and terms
          that follow the house if you sell. Compare them on the same system with the{' '}
          <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className={link}>
            side-by-side of cash, loan, lease and PPA
          </Link>
          , and check the{' '}
          <Link href="/blog/what-happens-to-solar-lease-when-i-sell-california" className={link}>
            home-sale rules for leased systems
          </Link>{' '}
          before you sign.
        </p>
      </section>

      <section id="new-homes">
        <h2 className={h2}>Solar on new homes: the Energy Code requirement</h2>
        <p>
          Buildings whose permit applications are filed on or after January 1, 2026 must comply
          with the 2025 Energy Code (CEC, checked September 23, 2026). For newly constructed
          single-family homes and townhouses it requires a solar PV system. The required size is
          the smaller of two results: a roof-area method (18 watts per square foot of
          solar-ready area on steep-sloped roofs, 14 on low-sloped roofs) or a formula based on
          climate zone and floor area. No system is required when the calculated size is under
          1.8 kWdc or the usable roof area is under 80 contiguous square feet, and a qualifying
          battery of at least 7.5 kWh can reduce the required PV size by 25%. Additions and
          alterations are exempt (CEC, checked September 23, 2026). If you are buying a new
          home, the builder&rsquo;s system is already part of the price; ask whether it is
          owned or leased.
        </p>
      </section>

      <section id="state-picture">
        <h2 className={h2}>How much of California&rsquo;s power comes from solar?</h2>
        <p>
          Solar power plants in California produced 50,666 gigawatt-hours in 2024, 23.44% of
          in-state generation. Counting imported power as well, solar was 21.30% of the
          state&rsquo;s total power mix. Those figures leave out rooftop systems; the CEC says more than 17,400 megawatts of
          behind-the-meter solar has displaced roughly 10% of the energy utilities would
          otherwise supply (CEC, 2024 Total System Electric Generation, checked September 23,
          2026). The full breakdown is in{' '}
          <Link href="/blog/what-percentage-of-california-power-is-solar" className={link}>
            what share of California&rsquo;s electricity is solar
          </Link>
          .
        </p>
      </section>

      <section id="next-steps">
        <h2 className={h2}>Next steps: from a quote to a working system</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Pull 12 months of usage and note your rate plan and generation provider from your
            bill.
          </li>
          <li>
            Get at least three written bids. The{' '}
            <Link href="/best-solar-companies-california" className={link}>
              guide to choosing and verifying a solar company
            </Link>{' '}
            lists local installers by city and shows how to check a license.
          </li>
          <li>Put the bids on the same basis with the checklist below.</li>
          <li>
            Read the solar disclosure document on the contract&rsquo;s front page. The CPUC guide
            notes you have at least three business days to cancel, five if you are 65 or older.
          </li>
          <li>
            Expect design, permits, inspection and utility approval before the system switches
            on; the{' '}
            <Link href="/blog/solar-installation-timeline-california" className={link}>
              installation timeline
            </Link>{' '}
            shows each stage.
          </li>
        </ol>
        <p className="mt-3">
          Weighing the trade-offs first? Read the{' '}
          <Link href="/blog/pros-and-cons-of-solar-panels-california" className={link}>
            pros and cons of solar panels in California
          </Link>
          .
        </p>
      </section>

      <QuoteChecklist />

      <HubSpokeLinks hub="cost_value" currentPath={PATH} />
    </DecisionPage>
  );
}
