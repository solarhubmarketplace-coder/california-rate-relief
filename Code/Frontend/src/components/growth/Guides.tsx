import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { DecisionPage, QuoteChecklist, type Source } from './DecisionPage';
import { SolarCalculator } from './SolarCalculator';
import { SolarFinancingComparison } from './SolarFinancingComparison';
import { ProviderComparison } from './ProviderComparison';
import { SdgeRateTable } from './SdgeRateTable';
const consumer: Source = {
  label: 'CPUC: solar consumer guide and financing comparison',
  url: 'https://www.cpuc.ca.gov/solarguide/',
};
const nem: Source = {
  label: 'CPUC: net energy metering and net billing',
  url: 'https://www.cpuc.ca.gov/NEM/',
};
const sgip: Source = {
  label: 'CPUC: SGIP eligibility, administrators and current budget links',
  url: 'https://www.cpuc.ca.gov/sgip',
};
const sdge: Source = {
  label: 'SDG&E: current residential pricing plans',
  url: 'https://www.sdge.com/residential/pricing-plans',
};
const rates: Source = {
  label: 'CPUC: electric rate comparison',
  url: 'https://www.cpuc.ca.gov/RateComparison',
};
const lbnlPricing: Source = {
  label:
    'Lawrence Berkeley National Laboratory: 2026 Distributed Solar and Storage Pricing Data Update',
  url: 'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf',
};
const link = 'text-emerald-800 underline underline-offset-2';
const definitions = {
  calculator: {
    path: '/tools/solar-panel-calculator',
    title: 'California solar bill and quote calculator',
    intro:
      'What does the quote actually change? Start with your bill, add the proposal’s numbers, and see the arithmetic before sharing any contact details.',
  },
  companies: {
    path: '/best-solar-companies-california',
    title: 'Compare solar companies in California',
    intro:
      'The best solar company for your home has to fit the property, the electric bill and the work you need done. Start there. A statewide ranking cannot verify who will install your system or answer a service call.',
    metaTitle: 'Compare solar companies in California',
    metaDescription:
      'A statewide solar company ranking cannot verify who installs your system or answers a service call. Compare by property, bill and scope instead.',
  },
  panels: {
    path: '/solar-panels-california',
    title: 'Solar panels in California: cost, size and bill comparison',
    intro:
      'The system price is only part of the decision. Put the solar equipment, battery, roof work and remaining electricity bill on separate lines. Then compare the total.',
    metaTitle: 'California Solar Panel Cost: 2025 Residential Benchmark',
    metaDescription:
      'LBNL\'s 2026 update reports a $3.30 per WDC median price for California host-owned residential solar installed in 2025. A benchmark, not a quote.',
  },
  worth: {
    path: '/blog/are-solar-panels-worth-it-california',
    title: 'Are solar panels worth it in California?',
    intro:
      'They can be. Your answer depends on the price, the electricity you use when solar is producing, your utility’s billing rules and how long you expect to keep the system. A high electric bill alone does not settle it.',
    metaTitle: 'Are solar panels worth it in California?',
    metaDescription:
      'It depends on price, when you use electricity versus when solar produces, your utility\'s billing rules, and how long you keep the system.',
  },
  financing: {
    path: '/blog/ppa-loan-vs-solar-lease-vs-cash-california',
    title: 'Solar PPA vs loan, lease and cash in California',
    intro:
      'Compare the same system before comparing payments. A PPA purchases power; a loan finances equipment. The monthly number means something different in each contract.',
    metaTitle: 'PPA vs Loan vs Lease vs Cash: Solar in California',
    metaDescription:
      'Compare cash, loan, lease and PPA the same way: same system and production, plus what each contract actually obligates you to pay.',
  },
  nem: {
    path: '/blog/what-is-nem-3-california',
    title: 'What is NEM 3.0 in California? Start with the bill',
    intro:
      'NEM 3.0 is the common name for the Net Billing Tariff used by PG&E, SCE and SDG&E for newer solar interconnections. Electricity used at home and electricity exported to the grid have different financial effects.',
    metaTitle: 'What is NEM 3.0 in California? Start with the bill',
    metaDescription:
      'NEM 3.0 is the common name for the Net Billing Tariff PG&E, SCE and SDG&E use for newer solar interconnections. Exports earn a credit; home use cuts imports.',
  },
  battery: {
    path: '/blog/solar-battery-backup-california',
    title: 'California solar batteries: backup and cost comparison',
    intro:
      'A battery can shift electricity to another hour and, with the right equipment, power selected loads during an outage. Those are separate jobs. Ask the proposal to show both.',
    metaTitle: 'California Solar Batteries: Backup and Cost Comparison',
    metaDescription:
      'A battery can shift electricity to another hour and, with the right equipment, power selected loads in an outage. Ask the proposal to show both jobs.',
  },
  sdge: {
    path: '/blog/sdge-time-of-use-rates-2026',
    title: 'SDG&E time-of-use rates: compare your 2026 bill',
    intro:
      'Start with the rate-plan name and the generation provider on your bill. SDG&E’s delivery price alone is not the complete price for a community choice customer.',
    metaTitle: 'SDG&E Time-of-Use Rates: Peak Hours and Plans',
    metaDescription:
      "SDG&E's peak window runs 4-9 p.m. for TOU-DR1 and TOU-DR2, including weekends. Compare your plan before shifting usage.",
  },
};
export type GuideKey = keyof typeof definitions;
export function guideMetadata(key: GuideKey): Metadata {
  const d = definitions[key];
  const modifiedTime =
    key === 'panels' || key === 'financing'
      ? '2026-09-11T00:00:00Z'
      : '2026-09-10T00:00:00Z';
  // `intro` is visible body copy (DecisionPage renders it as the opening
  // paragraph), so it cannot double as the search snippet without changing what
  // the page says. metaTitle/metaDescription override the snippet only; a guide
  // that sets neither keeps the previous behaviour exactly.
  const metaTitle = 'metaTitle' in d && d.metaTitle ? d.metaTitle : d.title;
  const metaDescription =
    'metaDescription' in d && d.metaDescription ? d.metaDescription : d.intro;
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: d.path },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      url: `https://ratereliefca.com${d.path}`,
      modifiedTime,
    },
  };
}
function FinancingTable() {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full text-left text-sm">
        <caption className="p-4 text-left font-semibold">
          Same equipment, different payment obligations
        </caption>
        <thead className="bg-slate-100">
          <tr>
            <th className="p-3">Option</th>
            <th className="p-3">What you pay for</th>
            <th className="p-3">Compare before signing</th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              'Cash',
              'You buy the system.',
              'Itemized installed price, maintenance, equipment replacement and warranties.',
            ],
            [
              'Loan',
              'You buy the system with borrowed money.',
              'Cash price versus financed price, APR, fees, payment changes, loan term and total repayment.',
            ],
            [
              'Lease',
              'The provider owns equipment you rent.',
              'Monthly rent, escalator, service obligations, buyout, removal and home-sale terms.',
            ],
            [
              'PPA',
              'The provider owns the system; you buy its generated electricity.',
              'Starting price per kWh, annual escalation, estimated production, purchase options and contract duration.',
            ],
          ].map((row) => (
            <tr key={row[0]} className="border-t">
              {row.map((cell, i) =>
                i === 0 ? (
                  <th scope="row" key={i} className="p-3 align-top">
                    {cell}
                  </th>
                ) : (
                  <td key={i} className="p-3 align-top">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function GrowthGuide({ kind }: { kind: GuideKey }) {
  const d = definitions[kind];
  let content;
  let sources: Source[] = [consumer, nem];
  let sourceCheckedDate = '2026-09-10';
  let utility = '';
  if (kind === 'calculator')
    content = (
      <>
        <SolarCalculator />
        <section>
          <h2>What this tool can answer</h2>
          <p>
            It annualizes your bill, separates solar price per watt from battery
            cost and checks a quoted remaining utility bill against what you
            currently pay. It does not select a system size or predict rooftop
            production. Use the installer’s monthly production model and an
            address-specific assessment for that.
          </p>
        </section>
        <QuoteChecklist />
      </>
    );
  if (kind === 'companies')
    content = (
      <>
        <ProviderComparison />
        <section>
          <h2>Choose by scope and evidence</h2>
          <p>
            Ask whether the bidder performs the installation, uses a
            subcontractor or supplies financing only. Get the legal names of the
            installer and service provider. Have each confirm your address, roof
            type, equipment and schedule in writing.
          </p>
          <p className="mt-3">
            Check the{' '}
            <a
              className={link}
              href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx"
            >
              CSLB record
            </a>{' '}
            for the business on the contract. This page does not assign invented
            ratings or certify a company’s current coverage.
          </p>
        </section>
        <QuoteChecklist />
        <FinancingTable />
        <section>
          <h2>Local details change the comparison</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              'san-diego',
              'fresno',
              'los-angeles',
              'sacramento',
              'bakersfield',
              'san-jose',
            ].map((slug) => (
              <Link
                key={slug}
                className="rounded-lg border p-4 capitalize text-emerald-800 underline"
                href={`/solar-companies/${slug}`}
              >
                {slug.replaceAll('-', ' ')}, California
              </Link>
            ))}
          </div>
          <p className="mt-5">
            More city guides use local permit, utility and contractor sources to
            help homeowners compare the same project scope.
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ['pleasanton', 'Pleasanton solar companies'],
              ['modesto', 'Modesto solar companies'],
              ['riverside', 'Riverside solar companies'],
              ['thousand-oaks', 'Thousand Oaks solar installers'],
              ['escondido', 'Escondido solar companies'],
              ['anaheim', 'Anaheim solar companies'],
              ['roseville', 'Roseville solar companies'],
              ['palm-springs', 'Palm Springs solar companies'],
              ['irvine', 'Irvine solar companies'],
              ['stockton', 'Stockton solar companies'],
            ].map(([slug, label]) => (
              <Link
                key={slug}
                className="rounded-lg border p-4 text-emerald-800 underline"
                href={`/solar-companies/${slug}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2>Before you request a proposal</h2>
          <p>
            Have your electricity usage, rate plan, roof age and expected
            changes in consumption ready. Ask for a solar-only price and a
            solar-plus-battery price using the same usage history. Use the{' '}
            <Link href="/solar-panels-california" className={link}>
              cost and sizing guide
            </Link>{' '}
            to organize the inputs.
          </p>
        </section>
      </>
    );
  if (kind === 'panels')
    content = (
      <>
        <section>
          <h2>How much do solar panels cost in California?</h2>
          <p>
            The useful number is the itemized price for your property. A price
            per watt becomes comparable only when the bids use the same scope.
            Roof repairs, electrical work and a battery can make a combined
            price look expensive even when the panel portion is similar.
          </p>
          <p className="mt-3">
            For a solar-only quote, divide its cash price by the DC system size
            in watts. Keep the battery outside that calculation. The calculator
            below does this from your inputs; it does not insert a
            market-average price.
          </p>
        </section>
        <section>
          <h2>A historical California benchmark, not a current quote</h2>
          <p>
            Lawrence Berkeley National Laboratory&apos;s 2026 data update reports a
            median gross installed price of <strong>$3.30 per WDC</strong> for
            California host-owned, stand-alone residential solar systems installed
            in 2025. It is a historical benchmark in 2025 dollars, not a price
            promise for a new proposal.
          </p>
          <p className="mt-3">
            The study&apos;s gross installed-price scope can include ancillary work or
            fees. Compare bids only after separating solar equipment, battery,
            roof work, electrical work and payment terms. A different scope can
            make the same price per watt mean something different.
          </p>
        </section>
        <SolarCalculator />
        <section>
          <h2>How much solar does the house need?</h2>
          <p>
            Request a design based on a full year of electricity use, then
            account for a planned EV, heat pump or other load change. Have the
            proposal show monthly production, shading and losses. Buying more
            capacity is not automatically better when much of its output would
            be exported.
          </p>
        </section>
        <section>
          <h2>Model the remaining utility bill</h2>
          <p>
            Include energy bought from the grid, delivery and fixed charges,
            export credits and the actual generation provider. PG&E, SCE and
            SDG&E net billing differs from municipal utility programs. The quote
            should name the applicable schedule.
          </p>
        </section>
        <section>
          <h2>Cost and worth are different questions</h2>
          <p>
            A competitive quote can still be a poor fit for a shaded roof or a
            short ownership horizon. Read the{' '}
            <Link
              className={link}
              href="/blog/are-solar-panels-worth-it-california"
            >
              worth-it decision guide
            </Link>
            , then compare{' '}
            <Link
              className={link}
              href="/blog/ppa-loan-vs-solar-lease-vs-cash-california"
            >
              cash, loan, lease and PPA obligations
            </Link>
            . No incentive is automatically deducted here; verify any claimed
            benefit before adding it to your comparison.
          </p>
        </section>
        <QuoteChecklist />
      </>
    );
  if (kind === 'panels') {
    sources = [consumer, nem, lbnlPricing];
    sourceCheckedDate = '2026-09-11';
  }
  if (kind === 'worth')
    content = (
      <>
        <section>
          <h2>The result should survive less favorable assumptions</h2>
          <p>
            Ask the provider to rerun the proposal with lower production, a
            larger remaining utility bill and any expected replacement expense.
            Compare solar alone with solar plus storage using the same load and
            tariff. A battery is not automatically required, and a battery quote
            is not automatically good value.
          </p>
        </section>
        <section>
          <h2>Separate money from backup value</h2>
          <p>
            A system may offer useful outage protection without having a short
            payback. Decide which circuits matter and how much capacity they
            need. The backup design, battery reserve and power limits belong in
            the proposal.
          </p>
        </section>
        <SolarCalculator />
        <section>
          <h2>Reasons to pause and get a revised proposal</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Production assumes an unshaded roof that the site survey has not
              checked.
            </li>
            <li>The savings estimate removes the entire utility bill.</li>
            <li>
              The proposal mixes a cash price with a financed payment or assumes
              an unconfirmed incentive.
            </li>
            <li>
              A long-term PPA or lease lacks clear transfer, buyout and service
              terms.
            </li>
          </ul>
        </section>
        <p>
          Use the{' '}
          <Link href="/solar-panels-california" className={link}>
            cost and sizing guide
          </Link>{' '}
          for equipment comparisons, or the{' '}
          <Link href="/blog/what-is-nem-3-california" className={link}>
            net billing overview
          </Link>{' '}
          to understand the utility side.
        </p>
      </>
    );
  if (kind === 'financing')
    content = (
      <>
        <FinancingTable />
        <SolarFinancingComparison />
        <section>
          <h2>A fair PPA-versus-ownership comparison</h2>
          <p>
            Use the same annual production, self-consumption, battery
            configuration and remaining utility bill. For a PPA, multiply the
            quoted price per kWh by the electricity the contract charges you
            for. Check the escalator and ask for a schedule of payments through
            the full term. For ownership, include the purchase or loan payments
            plus maintenance and replacements.
          </p>
          <p className="mt-3">
            Then add the remaining utility bill to each option. A payment below
            today’s bill does not establish total savings when another electric
            bill remains.
          </p>
        </section>
        <section>
          <h2>What to ask about an escalator</h2>
          <p>
            Is it zero or positive? Is the increase applied to the power price
            or the payment? Does the production estimate change over time? Ask
            for the contract’s schedule, not a verbal estimate, and compare the
            total over the years you expect to keep the home.
          </p>
        </section>
        <section>
          <h2>What happens when the roof or ownership changes?</h2>
          <p>
            Ask who pays to remove and reinstall equipment for roof work, what a
            buyer must do to assume the agreement, and how a buyout is priced.
            Match every promised warranty or service obligation to the
            responsible company named in the paperwork.
          </p>
        </section>
        <QuoteChecklist />
        <section>
          <h2>Keep incentives outside the base comparison</h2>
          <p>
            Start with the actual price and payment schedule. Any incentive
            claim needs its own current eligibility and ownership review. Do not
            count a provider’s business tax benefit as cash received by the
            homeowner.
          </p>
          <p className="mt-3">
            The{' '}
            <Link className={link} href="/tools/solar-panel-calculator">
              bill and quote calculator
            </Link>{' '}
            provides simple cash arithmetic. It does not calculate financing
            returns or validate a contract.
          </p>
        </section>
        <RelatedGuides
          heading="The three terms that decide what each structure really costs"
          links={[
            { href: "/solar-problems/solar-dealer-fees-explained", label: "How a dealer fee pays for a low advertised rate" },
            { href: "/solar-problems/solar-escalator-clause-explained", label: "What an annual escalator does to the later years" },
            { href: "/solar-problems/ucc-1-lien-solar-california", label: "UCC-1 liens and what they attach to" },
            { href: "/blog/solar-ppa-vs-lease-california", label: "How a PPA differs from a lease" },
            { href: "/blog/what-happens-to-solar-lease-when-i-sell-california", label: "What happens to the contract if the home is sold" },
          ]}
        />
      </>
    );
  if (kind === 'financing') sourceCheckedDate = '2026-09-11';
  if (kind === 'nem')
    content = (
      <>
        <section>
          <h2>Which California utilities does this cover?</h2>
          <p>
            The CPUC’s overview applies to PG&E, SCE and SDG&E. It identifies
            April 15, 2023 as the start of net billing for new interconnection
            applications. Existing systems can have different enrollment rights;
            ask the utility before changing a system. LADWP and SMUD publish
            separate rules.
          </p>
        </section>
        <section>
          <h2>Three flows to see in the proposal</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Solar used at home:</strong> reduces electricity you
              otherwise buy at that time.
            </li>
            <li>
              <strong>Solar exported:</strong> receives the applicable export
              credit, usually below retail under net billing; value varies by
              time.
            </li>
            <li>
              <strong>Grid electricity imported:</strong> still appears on the
              bill alongside applicable charges.
            </li>
          </ul>
          <p className="mt-3">
            An annual production total hides these flows. Ask for an hourly or
            interval-based comparison using your actual tariff and generation
            provider.
          </p>
        </section>
        <section>
          <h2>What changes when a battery is included?</h2>
          <p>
            Storage can move energy to a later hour, but the proposal must
            account for usable capacity, losses, reserve settings and installed
            price. Compare the remaining bill with and without storage. Ask
            separately about outage operation and backed-up circuits.
          </p>
        </section>
        <QuoteChecklist />
        <section>
          <h2>Follow the question you are trying to answer</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link className={link} href="/blog/nem-2-vs-nem-3-california">
                Compare the older and newer billing structures
              </Link>
            </li>
            <li>
              <Link className={link} href="/blog/nem-3-california-timeline">
                Review the net billing timeline
              </Link>
            </li>
            <li>
              <Link
                className={link}
                href="/blog/are-solar-panels-worth-it-california"
              >
                Decide whether the quote fits your home
              </Link>
            </li>
            <li>
              <Link className={link} href="/tools/solar-panel-calculator">
                Check bill and quote arithmetic
              </Link>
            </li>
          </ul>
        </section>
        <RelatedGuides
          heading="What the tariff does to storage and to the annual bill"
          links={[
            { href: "/battery/battery-payback-nem-3-california", label: "Whether a battery pays back under NEM 3.0" },
            { href: "/solar-problems/true-up-bill-california-explained", label: "How the annual true-up is settled" },
          ]}
        />
      </>
    );
  if (kind === 'battery') {
    sources = [
      sgip,
      nem,
      {
        label: 'SGIP official application portal, handbook and budget status',
        url: 'https://www.selfgenca.com/',
      },
    ];
    content = (
      <>
        <section>
          <h2>Compare the battery by what it can do</h2>
          <p>
            Get the usable energy capacity, continuous power output, compatible
            inverter, backup equipment and selected circuits in writing. Ask
            what happens when the battery reaches its reserve, how it recharges
            during an outage and whether the design can start the loads you
            need.
          </p>
        </section>
        <section id="sgip">
          <h2>Considering an SGIP incentive?</h2>
          <p>
            Use the{' '}
            <Link
              className={link}
              href="/battery/sgip-battery-rebate-california"
            >
              dedicated SGIP budget and application guide
            </Link>{' '}
            to check the current category and program administrator. Keep any
            requested incentive separate from the base equipment price until the
            project’s approval and payment terms are confirmed.
          </p>
        </section>
        <section>
          <h2>Keep the quote useful without an assumed rebate</h2>
          <p>
            Ask for the total installed cash price, then list any conditional
            incentive separately. Compare a bill-savings design with an
            outage-focused design. Check warranty limits and replacement costs
            instead of relying only on battery capacity.
          </p>
        </section>
        <SolarCalculator />
        <p>
          This page addresses residential decisions.{' '}
          <Link className={link} href="/commercial-solar/sgip-battery-storage">
            Commercial storage and SGIP
          </Link>{' '}
          involve a separate project and eligibility review. The inquiry below
          goes to CRR for a solar referral; it is not an SGIP application or
          eligibility decision.
        </p>
        <RelatedGuides
          heading="The California battery guides in detail"
          intro="Cost, sizing, equipment and rebate status, one page each."
          links={[
            { href: "/battery", label: "All home battery guides" },
            { href: "/battery/home-battery-cost-california", label: "What a home battery costs installed" },
            { href: "/battery/how-many-batteries-do-i-need-california", label: "How many batteries the load needs" },
            { href: "/battery/battery-backup-vs-generator-california", label: "Battery against a backup generator" },
            { href: "/battery/battery-payback-nem-3-california", label: "Whether a battery pays back under NEM 3.0" },
            { href: "/battery/powerwall-vs-enphase-vs-franklinwh", label: "Powerwall 3, Enphase 5P and FranklinWH compared" },
            { href: "/battery/tesla-powerwall-3-cost-california", label: "Powerwall 3 cost in California" },
            { href: "/battery/tesla-powerwall-alternatives", label: "Alternatives to a Powerwall" },
            { href: "/battery/sgip-battery-rebate-california", label: "SGIP rebate budget status" },
          ]}
        />
      </>
    );
  }
  if (kind === 'sdge') {
    utility = 'sdge';
    sources = [
      sdge,
      {
        label: 'SDG&E: total electric rate schedules and TOU periods',
        url: 'https://www.sdge.com/total-electric-rates',
      },
      {
        label: 'San Diego Community Power: billing and NEM',
        url: 'https://sdcommunitypower.org/net-energy-metering/',
      },
    ];
    content = (
      <>
        <section>
          <h2>When are SDG&E peak hours?</h2>
          <p>
            SDG&E’s current residential plan chooser shows a 4–9 p.m. peak
            window for TOU-DR1 and TOU-DR2, including weekends. TOU-DR1 has
            separate off-peak and super off-peak periods; TOU-DR2 has two
            pricing periods. Check your exact schedule and its effective date
            before shifting use.
          </p>
          <p className="mt-3">
            Source checked September 10, 2026:{' '}
            <a className={link} href={sdge.url}>
              SDG&E pricing plans
            </a>
            . The page identifies prices effective August 1, 2026 and separates
            CCA delivery-only prices from generation costs.
          </p>
        </section>
        <SdgeRateTable />
        <section>
          <h2>Compare a plan using your own load</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Read the schedule name, billing dates and generation provider on
              the bill.
            </li>
            <li>
              Use SDG&E’s plan comparison with your usage history, including an
              EV or electric heat pump if applicable.
            </li>
            <li>
              Compare total annual cost, including the Base Services Charge and
              generation charges.
            </li>
            <li>
              Check special-event pricing and any conditions before switching
              plans.
            </li>
          </ol>
        </section>
        <section>
          <h2>Why the average rate is not a solar savings estimate</h2>
          <p>
            The value of avoiding an evening purchase differs from the credit
            for exporting midday solar. Fixed and delivery charges may remain.
            The{' '}
            <Link
              className={link}
              href="/blog/pge-vs-sce-vs-sdge-rates-compared"
            >
              California utility comparison
            </Link>{' '}
            explains why a utility average cannot price your individual
            proposal.
          </p>
        </section>
        <section>
          <h2>Rate-plan changes and solar are separate comparisons</h2>
          <p>
            First compare the available plans without new equipment. If you then
            consider solar, ask for the remaining bill under the proposed solar
            tariff, generation provider and battery settings. Keep the cost of
            the equipment alongside that bill.
          </p>
        </section>
        <SolarCalculator utility="sdge" />
        <p>
          For project and permitting checks, see the{' '}
          <Link className={link} href="/solar-companies/san-diego">
            San Diego solar comparison
          </Link>
          . The tool carries your inputs into the optional inquiry below.
        </p>
        <RelatedGuides
          heading="What a peak window does after solar is installed"
          links={[
            { href: "/solar-problems/running-ac-with-solar-california", label: "Whether solar covers all-day cooling in a peak window" },
            { href: "/solar-problems/true-up-bill-california-explained", label: "How the annual true-up settles the year" },
            { href: "/battery/battery-payback-nem-3-california", label: "Whether storage earns its cost on this tariff" },
            { href: "/blog/how-big-of-a-solar-system-do-i-need-california", label: "How much capacity the household actually needs" },
          ]}
        />
      </>
    );
  }
  return (
    <DecisionPage
      {...d}
      sources={sources}
      sourceCheckedDate={sourceCheckedDate}
      utility={utility}
    >
      {content}
    </DecisionPage>
  );
}
