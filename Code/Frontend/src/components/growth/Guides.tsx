import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import {
  companiesCityHref,
  hasCompaniesCityPage,
} from '@/lib/canonical-redirects';
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
const cpucSolarConsumerGuide: Source = {
  label: 'CPUC: California Solar Consumer Protection Guide',
  url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
};
const irsObbbFaq: Source = {
  label:
    'IRS: FAQs on OBBB modifications to residential energy credits (Sections 25C/25D/etc.)',
  url: 'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb',
};
const irsForm5695: Source = {
  label: 'IRS: 2025 Instructions for Form 5695 (Residential Energy Credits)',
  url: 'https://www.irs.gov/instructions/i5695',
};
const dfpiPace: Source = {
  label: 'California DFPI: PACE consumer protections',
  url: 'https://dfpi.ca.gov/consumers/housing/pace/',
};
const link = 'text-primary underline underline-offset-2';
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
    title: 'Solar Lease vs. PPA vs. Loan vs. Cash Purchase in California',
    intro:
      'A solar lease and a PPA both mean you don’t own the system: with a lease you pay a fixed monthly rent, with a PPA you pay for the power it produces. A loan and a cash purchase both mean you own the system: a loan finances it over time, while cash pays for it outright from day one with no ongoing third-party payment. Compare the same system size across all four financing paths before comparing the payment amounts, since each one prices a different thing.',
    metaTitle: 'Solar Lease vs. PPA vs. Purchase: California Guide',
    metaDescription:
      'Solar lease, PPA and cash purchase, compared side by side for California homes: what you own, what you pay monthly, and how the numbers differ.',
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
    title: 'SDG&E Time-of-Use Rates: TOU-DR1 Peak Hours Explained',
    intro:
      'SDG&E’s TOU-DR1 residential plan has a peak and off-peak window that runs 4–9 p.m. every day, including weekends — that’s what most searchers are actually looking for. Your generation provider, whether SDG&E or a community choice aggregator, is billed separately from delivery, but the plan’s hourly schedule is what determines when you pay the higher rate. This page opens with the TOU-DR1 hours, then explains how generation charges add to the delivery price.',
    metaTitle: 'SDG&E Time-of-Use Rates (2026): Compare Your Plan',
    metaDescription:
      "See which SDG&E time-of-use plan is on your bill and what it costs. Peak runs 4-9 p.m. for TOU-DR1 and TOU-DR2, including weekends.",
  },
};
export type GuideKey = keyof typeof definitions;
export function guideMetadata(key: GuideKey): Metadata {
  const d = definitions[key];
  const modifiedTime =
    key === 'financing' || key === 'nem' || key === 'companies'
      ? '2026-09-22T00:00:00Z'
      : key === 'panels'
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
        <thead className="bg-muted">
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
function FourWayDetailTable() {
  const rows: [string, string, string, string, string][] = [
    ['Who owns the system', 'You', 'You', 'Solar provider', 'Solar provider'],
    [
      'Federal tax credit, for a system installed now',
      "None — expenditures after 12/31/2025 don’t qualify",
      'Same as cash: you own the equipment, but the credit ended for expenditures after 12/31/2025',
      'Not applicable at any date — the credit is for your cost of buying the property, and a lease payment isn’t that',
      'Not applicable at any date, same reason as a lease',
    ],
    [
      'Monthly cost shape',
      'None, after the one-time payment',
      'Fixed loan payment (principal and interest) set by the loan term',
      'Fixed monthly rent',
      'Payment tracks the electricity the system actually produces, priced per kWh',
    ],
    [
      'Escalator',
      'None',
      'None — the payment is fixed by the loan agreement',
      'Typically increases 1%–3% a year over the prior year’s payment; CPUC’s guide advises caution above that range',
      'Same 1%–3% typical range, applied to the per-kWh price',
    ],
    [
      'What happens if you sell the home',
      'System transfers with the house “just like any other major home improvement”',
      'Same, but ask about payoff: some solar loans are secured against the home, and missed payments “could result in foreclosure”',
      'Buyer assumes the contract, you keep paying, or you buy out the remaining value',
      'Same three options as a lease',
    ],
    [
      'Who maintains and repairs it',
      'You',
      'You',
      'Provider is “responsible for all monitoring, maintenance, and repairs”',
      'Same as lease',
    ],
    [
      'Buyout terms',
      'Not applicable — no buyout, you already own it',
      'Pay off the remaining loan balance',
      'CPUC’s guide sets no fixed formula, only that a buyout “could be thousands of dollars”',
      'Same as lease',
    ],
  ];
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full text-left text-sm">
        <caption className="p-4 text-left font-semibold">
          Cash, loan, lease and PPA: ownership, cost and what changes at sale
        </caption>
        <thead className="bg-muted">
          <tr>
            <th className="p-3"></th>
            <th className="p-3">Cash purchase</th>
            <th className="p-3">Solar loan</th>
            <th className="p-3">Lease</th>
            <th className="p-3">PPA</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t">
              <th scope="row" className="p-3 align-top">
                {row[0]}
              </th>
              {row.slice(1).map((cell, i) => (
                <td key={i} className="p-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t bg-muted p-3 text-xs text-muted-foreground">
        Checked September 22, 2026 against the{' '}
        <a className={link} href={cpucSolarConsumerGuide.url}>
          CPUC California Solar Consumer Protection Guide
        </a>{' '}
        (ownership, escalator range, sale and buyout terms, maintenance
        responsibility) and the IRS&rsquo;s{' '}
        <a className={link} href={irsForm5695.url}>
          2025 Form 5695 instructions
        </a>{' '}
        and{' '}
        <a className={link} href={irsObbbFaq.url}>
          OBBB tax-law FAQs
        </a>{' '}
        (federal tax credit).
      </p>
    </div>
  );
}
export function GrowthGuide({ kind }: { kind: GuideKey }) {
  const d = definitions[kind];
  let content;
  let sources: Source[] = [consumer, nem];
  let sourceCheckedDate = '2026-09-10';
  let utility = '';
  let faq: ReactNode = null;
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
        <section id="reviewed-installers">
          <h2>The installers with full reviews on this site, side by side</h2>
          <p className="mb-4">
            Of the companies mentioned above, four &mdash; Sunrun, Tesla, SunPower and
            Palmetto &mdash; have a dedicated review page on this site with its own
            CSLB-verification attempt. The table below pulls one fact per category
            from each company&rsquo;s own site, fetched September 22, 2026, so you can
            compare them on the same basis before you click through to the full
            review.
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Comparison of the four solar installers with full reviews on this
                site
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Company</th>
                  <th className="p-3">Ownership models offered</th>
                  <th className="p-3">Warranty / guarantee</th>
                  <th className="p-3">Service &amp; transfer on sale</th>
                  <th className="p-3">Published CSLB license(s)</th>
                  <th className="p-3">California service area</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">
                    <Link href="/solar-installers/sunrun-review" className={link}>
                      Sunrun
                    </Link>
                  </th>
                  <td className="p-3 align-top">
                    Subscription (Sunrun&rsquo;s lease) or Protection Plus, plus cash
                    purchase or loan &mdash; Sunrun&rsquo;s own guarantee page draws this
                    exact line (sunrun.com, accessed 2026-09-22).
                  </td>
                  <td className="p-3 align-top">
                    90% lifetime production guarantee (Sunrun pays any shortfall);
                    free replacement parts and labor for 25 years; watertight roof
                    warranty; a battery-backup guarantee during outages; 24/7
                    monitoring &mdash; all tied to Subscription/Protection Plus, not
                    cash or loan (sunrun.com, accessed 2026-09-22).
                  </td>
                  <td className="p-3 align-top">
                    Transfer isn&rsquo;t automatic: buyer and seller exchange info
                    through Sunrun&rsquo;s own portal, confirm the closing date, e-sign,
                    and the buyer completes a soft credit check that doesn&rsquo;t
                    affect their score; a lien filed for the system is released at
                    no cost during the transfer; if the buyer won&rsquo;t assume it,
                    the seller can prepay the balance into the sale price
                    (sunrun.com, accessed 2026-09-22).
                  </td>
                  <td className="p-3 align-top">
                    #750184 and #969975 (sunrun.com, accessed 2026-09-22)
                  </td>
                  <td className="p-3 align-top">
                    Not published as a static coverage map; confirm your address on
                    Sunrun&rsquo;s own site.
                  </td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">
                    <Link href="/solar-installers/tesla-solar-review" className={link}>
                      Tesla
                    </Link>
                  </th>
                  <td className="p-3 align-top">
                    Tesla&rsquo;s own product page currently leads with a &ldquo;Tesla
                    Solar Lease&rdquo; (tesla.com, accessed 2026-09-22); cash and loan
                    purchase weren&rsquo;t independently reconfirmed on tesla.com this
                    session &mdash; ask which options apply to your address.
                  </td>
                  <td className="p-3 align-top">
                    Solar panels: manufacturer-backed guarantee of at least 80% of
                    nameplate power capacity for at least 25 years; Tesla processes
                    the claim and performs the labor at its own cost (tesla.com,
                    accessed 2026-09-22).
                  </td>
                  <td className="p-3 align-top">
                    Not itemized on the tesla.com pages reachable this session
                    &mdash; see the full Tesla review.
                  </td>
                  <td className="p-3 align-top">
                    #888104 and #1127593 (tesla.com, accessed 2026-09-22)
                  </td>
                  <td className="p-3 align-top">
                    Not published as a static coverage map; confirm your address on
                    Tesla&rsquo;s own site.
                  </td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">
                    <Link href="/solar-installers/sunpower-review" className={link}>
                      SunPower
                    </Link>
                  </th>
                  <td className="p-3 align-top">
                    New installs go through SunPower&rsquo;s dealer network (the
                    CA-licensed entity is &ldquo;Complete Solar, Inc. DBA
                    SunPower&rdquo;); specific payment types weren&rsquo;t itemized on the
                    pages fetched this session. Legacy pre-9/30/2024 lease/PPA
                    accounts are serviced by SunStrong Management, not new
                    originations (us.sunpower.com, accessed 2026-09-22).
                  </td>
                  <td className="p-3 align-top">
                    New installs: two years of &ldquo;Worry-Free Support,&rdquo; a
                    10-year workmanship warranty, a production guarantee (SunPower
                    adds panels or compensates if output falls below 50% for 3
                    straight months, or 85% for 18), and up to 25-year manufacturer
                    warranties on premium panels/microinverters &mdash; SunPower
                    covers claim costs the first 2 years, then the homeowner pays
                    claim fees (us.sunpower.com, accessed 2026-09-22).
                  </td>
                  <td className="p-3 align-top">
                    Systems installed before Sept. 30, 2024 under the original
                    SunPower Corporation: SunPower Inc. did not assume the
                    obligation &mdash; cash/loan customers contact their lender,
                    lease/PPA customers contact SunStrong Management, (833)
                    514-1858. Systems installed after that date carry SunPower
                    Inc.&rsquo;s own coverage (us.sunpower.com, accessed 2026-09-22).
                    Home-sale transfer mechanics specifically weren&rsquo;t itemized
                    this session.
                  </td>
                  <td className="p-3 align-top">
                    #961988, held by &ldquo;Complete Solar, Inc. DBA SunPower,&rdquo;
                    classified C-10 (Electrical) and C-46 (Solar) (us.sunpower.com,
                    accessed 2026-09-22)
                  </td>
                  <td className="p-3 align-top">
                    Sold through SunPower&rsquo;s dealer/partner network; coverage
                    varies by dealer and wasn&rsquo;t published as a single list this
                    session.
                  </td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">
                    <Link href="/solar-installers/palmetto-solar-review" className={link}>
                      Palmetto
                    </Link>
                  </th>
                  <td className="p-3 align-top">
                    The Palmetto Energy Plan &mdash; a PPA or a lease depending on
                    state, $0 down, with a 0&ndash;3.5% annual rate escalator
                    (help.palmetto.com, accessed 2026-09-22). Outright cash or loan
                    purchase wasn&rsquo;t itemized on the pages fetched this session.
                  </td>
                  <td className="p-3 align-top">
                    90% performance/production guarantee, reviewed every 3 years,
                    with a bill credit for any shortfall, plus 25 years of bundled
                    service (help.palmetto.com, accessed 2026-09-22).
                  </td>
                  <td className="p-3 align-top">
                    Not itemized on the palmetto.com pages reachable this session
                    &mdash; see the full Palmetto review for the transfer options
                    documented there.
                  </td>
                  <td className="p-3 align-top">
                    #1048921, classified Electrical Contractor (palmetto.com,
                    accessed 2026-09-22)
                  </td>
                  <td className="p-3 align-top">
                    Sold through Palmetto&rsquo;s own crews and partner network;
                    coverage varies by address and wasn&rsquo;t published as a single
                    list this session.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            None of these license numbers&rsquo; current status &mdash; active,
            suspended, bond on file &mdash; was independently verified this session;
            CSLB&rsquo;s own lookup tool is the only place to confirm that.{' '}
            <Link
              className={link}
              href="/solar-installers/how-to-verify-a-solar-contractor-california"
            >
              Full contractor-verification walkthrough
            </Link>
            .
          </p>
        </section>
        <section>
          <h2>How &ldquo;best&rdquo; actually gets decided</h2>
          <p className="mb-3">
            The section above this one already tells you the right first
            questions &mdash; who&rsquo;s actually installing (the company itself, a
            subcontractor, or a financing-only middleman) and what their legal
            name is, so you can look them up. Two things extend that.
          </p>
          <p className="mb-3">
            Get more than one bid. The same evaluation applies to every company
            on this page and to any company not on it &mdash; a single quote is a
            price, not a comparison. Checking a contractor&rsquo;s CSLB license,
            bond, and complaint history before you sign is covered in full, with
            the exact lookup steps, on our{' '}
            <Link
              className={link}
              href="/solar-installers/how-to-verify-a-solar-contractor-california"
            >
              how-to-verify guide
            </Link>
            ; the checklist there is built from the CPUC&rsquo;s own
            consumer-protection guidance, not from this page&rsquo;s opinion.
          </p>
          <p>
            Then judge each bid on the specifics in the table above: which
            ownership model it&rsquo;s actually offering you, what the guarantee
            covers (and whether it applies to your payment type &mdash; Sunrun&rsquo;s
            and Palmetto&rsquo;s guarantees explicitly don&rsquo;t cover a cash or loan
            purchase), and what happens if you sell the house before the term
            is up. A company that&rsquo;s &ldquo;best&rdquo; on price and worst on
            transfer terms isn&rsquo;t automatically the right pick for a five-year
            owner versus a thirty-year one.
          </p>
        </section>
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
                className="rounded-lg border p-4 capitalize text-primary underline"
                href={companiesCityHref(slug)}
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
                className="rounded-lg border p-4 text-primary underline"
                href={companiesCityHref(slug)}
              >
                {hasCompaniesCityPage(slug)
                  ? label
                  : `${label.replace(/ solar (companies|installers)$/, '')} solar costs`}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2>Why a &ldquo;solar companies near me&rdquo; search shows a map first</h2>
          <p className="mb-3">
            Search &ldquo;solar companies near me&rdquo; or &ldquo;best solar companies in
            [city],&rdquo; and Google leads with a Local Pack &mdash; a map with a
            handful of nearby businesses &mdash; before any article, including this
            one. That&rsquo;s true whether the search is generic or has a city
            attached to it, and it&rsquo;s not something a comparison page is built
            to outrank. What this page and the four reviews above it are built
            for is the step after the map: once the Local Pack has given you
            two or three names, the table above tells you what to actually
            check on each one. Our{' '}
            <Link className={link} href="/solar-installers">
              solar-installers hub
            </Link>{' '}
            covers this in more depth, including how to compare the quotes you
            get back.
          </p>
          <p>
            Southern California readers searching &ldquo;best solar company in
            southern california&rdquo; or &ldquo;best solar companies orange
            california&rdquo;: OC Solar, already listed above, states it serves
            Southern California specifically &mdash; confirm your own address is
            in range before treating it as a lead.
          </p>
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
  if (kind === 'companies')
    faq = (
      <section>
        <h2>FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3>What makes a solar company the &ldquo;best&rdquo; in California?</h3>
            <p className="mt-2">
              No single company is &ldquo;best&rdquo; for every homeowner &mdash; the
              right one depends on your roof, your bill, and which ownership
              model you want. Judge each bid the same way: is the
              installer&rsquo;s legal name and CSLB license verified, does the
              warranty match your payment type, and what happens to the
              contract if you sell your home. See the comparison table and
              the verify-a-contractor guide above.
            </p>
          </div>
          <div>
            <h3>Does California Rate Relief rank or rate solar companies?</h3>
            <p className="mt-2">
              No. This page compares companies on facts you can check
              yourself &mdash; license numbers, warranty terms, ownership models
              &mdash; not a 1-to-5 star score or a &ldquo;top 10&rdquo; list. As the
              existing page states, the list of companies shown is unranked,
              and inclusion doesn&rsquo;t mean a referral relationship exists.
            </p>
          </div>
          <div>
            <h3>How do I check a California solar company&rsquo;s CSLB license myself?</h3>
            <p className="mt-2">
              Use CSLB&rsquo;s own free lookup tool &mdash; the exact steps are
              covered on our{' '}
              <Link
                className={link}
                href="/solar-installers/how-to-verify-a-solar-contractor-california"
              >
                how-to-verify guide
              </Link>
              . None of the license numbers listed on this page had
              their current status re-verified this session, so check before
              you sign.
            </p>
          </div>
          <div>
            <h3>
              Are Sunrun, Tesla, SunPower, and Palmetto the only solar
              companies in California?
            </h3>
            <p className="mt-2">
              No. They&rsquo;re the four with a full, CSLB-check-attempted review
              on this site. The company list above this table also includes
              NRG Clean Power and OC Solar, and many more installers operate
              in California &mdash; the Local Pack for your specific city, plus
              our growing list of{' '}
              <Link className={link} href="/solar-installers">
                solar-installer reviews
              </Link>
              , will surface others.
            </p>
          </div>
        </div>
      </section>
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
          <h2>The federal tax credit changed for a system installed now</h2>
          <p>
            The{' '}
            <a className={link} href={irsForm5695.url}>
              IRS confirms
            </a>{' '}
            the Residential Clean Energy Credit — the 30% credit homeowners
            could claim for buying a solar system — is over for new installs:
            “You can’t claim residential clean energy credits for
            expenditures made after December 31, 2025.” A separate{' '}
            <a className={link} href={irsObbbFaq.url}>
              IRS FAQ on the same law
            </a>{' '}
            is more specific about timing: “If installation is completed
            after December 31, 2025, the expenditure will be treated as made
            after December 31, 2025, which will prevent the taxpayer from
            claiming the section 25D credit.” Installation date controls, not
            when you signed the contract or made a deposit.
          </p>
          <p className="mt-3">
            That credit was only ever available to the person who bought the
            system. The IRS describes it as a percentage of “your costs of
            qualified solar electric property” — a purchase cost, not a
            rental payment or a per-kWh charge. A lease payment or a PPA’s
            electricity price was never “your cost” of buying the property,
            so lease and PPA customers were not the ones claiming this credit
            even when it was active. For anyone installing now, the credit
            doesn’t change the cash-vs-loan-vs-lease-vs-PPA decision at all,
            because none of the four paths gets it anymore.
          </p>
        </section>
        <section>
          <h2>Four-way comparison</h2>
          <p>
            Every row below is sourced to California’s own consumer guide or
            the IRS — see “Sources checked” below for the full links.
          </p>
          <FourWayDetailTable />
        </section>
        <section>
          <h2>Which one, when</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Cash</strong> fits if you have the capital, want to own
              the system with no monthly payment and no loan lien to think
              about, and are comfortable handling your own maintenance and
              repairs.
            </li>
            <li>
              <strong>Loan</strong> fits if you want the same ownership and
              maintenance responsibility as a cash purchase but need to
              spread the cost out. Confirm whether the loan is secured
              against the home before signing — some solar loans place a
              lien on the property, and CPUC’s guide is direct that this
              “could result in foreclosure” if payments are missed.
            </li>
            <li>
              <strong>Lease</strong> fits if a fixed, predictable monthly
              payment matters more than ownership, and you’d rather the
              provider handle all monitoring, maintenance and repairs. See{' '}
              <Link
                className={link}
                href="/solar-problems/solar-escalator-clause-explained"
              >
                how solar escalator clauses work
              </Link>{' '}
              and{' '}
              <Link
                className={link}
                href="/blog/what-happens-if-stop-paying-solar-lease-california"
              >
                what happens if you stop paying a solar lease
              </Link>{' '}
              before you sign.
            </li>
            <li>
              <strong>PPA</strong> fits the same profile as a lease, except
              the payment tracks actual production instead of a flat rent —
              useful if you’d rather pay only for power the system produces,
              with the tradeoff that the payment can move with weather and
              system performance in a way a flat lease payment does not. See{' '}
              <Link className={link} href="/blog/solar-ppa-vs-lease-california">
                a closer look at lease vs. PPA
              </Link>
              .
            </li>
            <li>
              The federal credit no longer separates these paths: it doesn’t
              apply to any of the four for a system installed now, so it
              isn’t a reason to prefer ownership (cash or loan) over a lease
              or PPA the way it was before 2026.
            </li>
          </ul>
          <p className="mt-4">
            For more detail on any one path:{' '}
            <Link
              className={link}
              href="/blog/is-it-better-to-buy-or-lease-solar-panels-california"
            >
              buy vs. lease, in more depth
            </Link>
            ,{' '}
            <Link
              className={link}
              href="/blog/how-much-does-it-cost-to-lease-solar-panels-california"
            >
              what a solar lease costs in California
            </Link>
            , or{' '}
            <Link className={link} href="/blog/solar-ppa-explained-california">
              how a solar PPA works
            </Link>
            .
          </p>
        </section>
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
        <section>
          <h2>Questions to ask before you sign</h2>
          <p>
            The sections above already cover escalator questions and what
            happens to the contract on a roof change or ownership change.
            Beyond those, ask:
          </p>
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              <strong>
                Is this a standard solar loan, or a PACE assessment repaid
                through your property tax bill?
              </strong>{' '}
              If it’s PACE, the{' '}
              <a className={link} href={dfpiPace.url}>
                DFPI requires
              </a>{' '}
              the program administrator to get your oral confirmation of the
              key terms and check your reasonable ability to repay before
              work begins.
            </li>
            <li>
              <strong>Is the loan secured against your home?</strong> CPUC’s
              guide flags this directly — some solar loans place a lien on
              the property, and missed payments “could result in
              foreclosure.” See{' '}
              <Link
                className={link}
                href="/solar-problems/ucc-1-lien-solar-california"
              >
                UCC-1 liens on solar loans
              </Link>{' '}
              for what that filing actually attaches to.
            </li>
            <li>
              <strong>
                What is the APR, and will this loan make it harder to sell or
                refinance the home?
              </strong>{' '}
              Both are CPUC’s own suggested questions to put to a lender.
            </li>
            <li>
              <strong>
                If a salesperson mentions a federal tax credit, ask for the
                exact installation completion date it would apply to.
              </strong>{' '}
              The residential credit doesn’t apply to any system with
              expenditures made after December 31, 2025, regardless of
              financing type.
            </li>
            <li>
              <strong>
                How exactly is a lease or PPA buyout priced if you sell
                before the contract ends?
              </strong>{' '}
              CPUC’s guide confirms a buyout is possible but sets no formula
              — get the actual number from the provider, in writing, before
              you sign. See{' '}
              <Link
                className={link}
                href="/blog/what-happens-to-solar-lease-when-i-sell-california"
              >
                what happens to a solar lease when you sell your home
              </Link>
              .
            </li>
            <li>
              <strong>What’s your right to cancel?</strong> California gives
              you at least three business days to cancel a solar contract for
              any reason, five if you’re 65 or older — see{' '}
              <Link
                className={link}
                href="/blog/can-you-cancel-solar-panel-contract-before-installation-california"
              >
                your right to cancel a solar contract
              </Link>{' '}
              for the full mechanics.
            </li>
          </ol>
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
  if (kind === 'financing') {
    sources = [consumer, nem, cpucSolarConsumerGuide, irsForm5695, irsObbbFaq, dfpiPace];
    sourceCheckedDate = '2026-09-22';
  }
  if (kind === 'nem') {
    sourceCheckedDate = '2026-09-22';
    sources = [
      nem,
      {
        label: 'CPUC: Net Billing Tariff (NBT) proceeding history',
        url: 'https://www.cpuc.ca.gov/nbt',
      },
      {
        label: 'CPUC: Avoided Cost Calculator documentation (2024, v1b)',
        url: 'https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/demand-side-management/acc-models-latest-version/updated-2024-acc-documentation-v1b.pdf',
      },
      {
        label: 'PG&E: Solar Billing Plan overview',
        url: 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html',
      },
      {
        label: 'PG&E: Understand your solar bill (legacy NEM window)',
        url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html',
      },
      {
        label: 'PG&E: Electric Home (E-ELEC) rate plan',
        url: 'https://www.pge.com/en/account/rate-plans/electric-home.html',
      },
      {
        label: 'SCE: Solar Billing Plan overview',
        url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/solar-billing-plan',
      },
      {
        label: 'SCE: Understanding export pricing',
        url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/understanding-export-pricing',
      },
      {
        label: 'SCE: Solar Billing Plan FAQs',
        url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/solar-billing-plan-faqs',
      },
      {
        label: 'SDG&E: Understanding your solar bill',
        url: 'https://www.sdge.com/solar/solar-billing-plan/UnderstandingYourSolarBill',
      },
      {
        label: 'SDG&E: Export pricing',
        url: 'https://www.sdge.com/solar/solar-billing-plan/export-pricing',
      },
    ];
    faq = (
      <section>
        <h2>FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3>What is NEM 3.0?</h3>
            <p className="mt-2">
              It’s the common name for California’s Net Billing Tariff,
              adopted by the CPUC in Decision D.22-12-056 and in effect for
              PG&E, SCE and SDG&E customers who applied for solar
              interconnection on or after April 15, 2023.
            </p>
          </div>
          <div>
            <h3>When did NEM 3.0 start?</h3>
            <p className="mt-2">
              The CPUC adopted the decision on December 15, 2022; it took
              effect for new interconnection applications on April 15, 2023.
              It’s been in effect for new solar since then — there’s no
              pending vote to “pass” it.
            </p>
          </div>
          <div>
            <h3>How is NEM 3.0 different from NEM 2.0?</h3>
            <p className="mt-2">
              The core difference is export compensation: NEM 2.0 credited
              exports near the retail rate, while NEM 3.0 credits them using
              the CPUC’s Avoided Cost Calculator, which is usually lower and
              varies by hour. See the full{' '}
              <Link className={link} href="/blog/nem-2-vs-nem-3-california">
                NEM 2.0 vs. NEM 3.0 comparison
              </Link>{' '}
              for the side-by-side.
            </p>
          </div>
          <div>
            <h3>Does NEM 3.0 apply to LADWP or SMUD customers?</h3>
            <p className="mt-2">
              No. LADWP and SMUD are municipal utilities, not regulated by
              the CPUC, and each publishes its own net metering rules
              separately from the Net Billing Tariff.
            </p>
          </div>
          <div>
            <h3>
              How much do PG&E, SCE or SDG&E pay for exported solar under NEM
              3.0?
            </h3>
            <p className="mt-2">
              There’s no single fixed rate. Each utility calculates an hourly
              export credit from the CPUC’s Avoided Cost Calculator, so the
              value changes by hour, month and enrollment year. Check your
              utility’s export-pricing page for the current numbers for your
              plan vintage.
            </p>
          </div>
          <div>
            <h3>What rate plan do I have to be on with NEM 3.0?</h3>
            <p className="mt-2">
              A time-of-use rate is required at all three utilities. PG&E
              defaults residential solar customers to Electric Home
              (E-ELEC); SCE moves them to TOU-D-Prime; SDG&E also requires
              TOU service — confirm the specific plan with SDG&E.
            </p>
          </div>
          <div>
            <h3>
              Do I keep my NEM 2.0 grandfathering if I sell my house or add
              panels?
            </h3>
            <p className="mt-2">
              At PG&E and SCE, the legacy period is tied to the system and
              its original interconnection date, not the owner, so a new
              owner inherits the remaining years. Adding panels beyond a
              small threshold (1 kW at PG&E; the greater of 1 kW or 10% of
              system size at SCE) moves the account to the Net Billing
              Tariff. SDG&E did not state an equivalent rule on the pages
              checked.
            </p>
          </div>
          <div>
            <h3>Does a battery help under NEM 3.0?</h3>
            <p className="mt-2">
              It can, because it lets you use your own solar at night
              instead of exporting it for a lower credit — but whether it
              pays back depends on your utility and usage. See{' '}
              <Link
                className={link}
                href="/battery/battery-payback-nem-3-california"
              >
                battery payback under NEM 3.0
              </Link>{' '}
              for the math.
            </p>
          </div>
        </div>
      </section>
    );
    content = (
      <>
        <section>
          <h2>What the Net Billing Tariff actually is</h2>
          <p>
            The Net Billing Tariff (NBT) — what most people call NEM 3.0 — is
            the billing structure the California Public Utilities Commission
            adopted in Decision D.22-12-056 on December 15, 2022, as the
            successor to Net Energy Metering 2.0. As with NEM, your solar
            output first offsets the electricity you use in the home; only
            what’s left over gets exported to the grid. The difference from
            NEM 2.0 is in how that exported electricity is valued: instead of
            a credit close to your retail rate, it’s compensated at a rate
            meant to reflect what that power is actually worth to the grid
            at that hour.
          </p>
        </section>
        <section>
          <h2>Who’s on NEM 3.0, and who’s grandfathered</h2>
          <p>
            Your tariff depends on when you applied for interconnection, not
            when your system was installed or turned on. If you (or the
            home’s previous owner) submitted an interconnection application
            to PG&E, SCE or SDG&E on or after April 15, 2023, you’re on the
            Net Billing Tariff. Applications submitted before that date
            stayed on NEM 1.0 or NEM 2.0.
          </p>
          <p className="mt-3">
            Legacy customers aren’t grandfathered forever. The CPUC states
            that NEM 2.0 customer-generators may remain on that tariff for
            20 years from their interconnection date, under authority the
            commission traces to an earlier decision, D.14-03-041. PG&E
            states the same 20-year window for its original NEM 1.0
            customers, counted the same way — from the date of
            interconnection, not the purchase date of the home or system.
            LADWP and SMUD aren’t part of this — they’re municipal utilities
            outside CPUC jurisdiction and set their own net metering rules.
            See the{' '}
            <Link className={link} href="/blog/nem-2-vs-nem-3-california">
              NEM 2.0 vs. NEM 3.0 comparison
            </Link>{' '}
            for how the two tariffs differ.
          </p>
        </section>
        <section>
          <h2>How export compensation works</h2>
          <p>
            There’s no single published cents-per-kWh number for NEM 3.0
            exports, and this page won’t invent one. Instead, PG&E, SCE and
            SDG&E each calculate an hourly export credit using the CPUC’s
            Avoided Cost Calculator (ACC) — a model that estimates what a
            kilowatt-hour delivered to the grid at a given hour is worth
            over a 30-year horizon, built separately for each utility’s
            climate zones. The CPUC notes these credits are “usually lower
            than import rates” but “can rise above the retail rate on late
            summer evenings,” when grid demand peaks. In practice this
            means:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>PG&E</strong> issues an Energy Export Credit that
              “will vary by time of day, day of the week and season,”
              recalculated using the CPUC-approved ACC values, with
              published hourly/daily/monthly credit tables available for
              download for 2023–2026.
            </li>
            <li>
              <strong>SCE</strong> calculates its Energy Export Credit
              hourly, using the ACC “approved as of January 1 of the
              calculation year,” split into delivery (transmission,
              distribution, GHG adder) and generation components. Customers
              who enroll before January 1, 2028 get those prices locked for
              their first nine years on the plan.
            </li>
            <li>
              <strong>SDG&E</strong> builds its export credit from 8,760
              hourly ACC values per climate zone, averaged across zones and
              split into a generation component (bundled customers only)
              and a delivery component (all customers), calculated
              separately for weekday and weekend/holiday hours each month.
            </li>
          </ul>
          <p className="mt-3">
            For the current dollar figures — which change by plan vintage
            and update periodically — see your utility’s own export-pricing
            page rather than a fixed number here; the structure above is
            what won’t change month to month.
          </p>
        </section>
        <section>
          <h2>Your TOU rate (the import side)</h2>
          <p>
            All three investor-owned utilities require Net Billing Tariff
            customers to take electricity service on a time-of-use (TOU)
            rate, with the CPUC describing this as “high differential”
            pricing — lower off-peak prices, higher on-peak prices — so your
            bill reflects when you’re actually pulling from the grid, not
            just how much.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Time-of-use requirements by utility under the Net Billing
                Tariff
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Utility</th>
                  <th className="p-3">What’s required</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">
                    PG&E
                  </th>
                  <td className="p-3 align-top">
                    Residential Solar Billing Plan customers are
                    automatically enrolled on Electric Home (E-ELEC), a TOU
                    rate with peak pricing 4–9 p.m. daily, partial-peak 3–4
                    p.m. and 9 p.m.–midnight, and off-peak the rest of the
                    day.
                  </td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">
                    SCE
                  </th>
                  <td className="p-3 align-top">
                    Residential customers are transitioned to the
                    TOU-D-Prime rate and are charged the full retail rate
                    for everything they import — there’s no separate
                    “solar rate” for usage.
                  </td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">
                    SDG&E
                  </th>
                  <td className="p-3 align-top">
                    SDG&E confirms Net Billing Tariff accounts take TOU
                    service, consistent with the CPUC’s general rule; a
                    single named residential TOU plan could not be
                    confirmed from SDG&E’s own pages with enough confidence
                    to publish here, so verify the specific plan with SDG&E
                    for your address.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            For current TOU rate periods and pricing by utility, see{' '}
            <Link className={link} href="/blog/pge-time-of-use-rates-2026">
              PG&E’s 2026 time-of-use rates
            </Link>
            ,{' '}
            <Link className={link} href="/blog/sce-time-of-use-rates-2026">
              SCE’s 2026 time-of-use rates
            </Link>
            , and{' '}
            <Link className={link} href="/blog/sdge-time-of-use-rates-2026">
              SDG&E’s 2026 time-of-use rates
            </Link>
            .
          </p>
        </section>
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
        <section>
          <h2>The annual true-up, briefly</h2>
          <p>
            Like NEM 2.0, the Net Billing Tariff settles annually. PG&E
            states any remaining credit balance is reset to zero at the
            start of your new 12-month cycle; SDG&E settles net exporters
            against import charges and pays any true annual surplus at Net
            Surplus Compensation rates, which are separate from and lower
            than the monthly export credit. What changed under NEM 3.0 is
            the size of that annual number, because the export side of the
            math now runs on ACC values instead of retail-rate credits. For
            how to read your own true-up statement and what the line items
            mean, see{' '}
            <Link
              className={link}
              href="/solar-problems/true-up-bill-california-explained"
            >
              how the annual true-up is settled
            </Link>
            .
          </p>
        </section>
        <section>
          <h2>Why batteries matter under NEM 3.0</h2>
          <p>
            Because exported power is now worth less than the power you’d
            otherwise buy back in the evening, storing your solar and using
            it yourself during peak TOU hours — instead of exporting it for
            a lower credit — is the main lever NEM 3.0 gives homeowners to
            control their bill. Whether that pencils out, and by how much,
            depends on your utility’s export credit, your TOU rate spread,
            and your evening usage. For the utility-by-utility payback math,
            see{' '}
            <Link
              className={link}
              href="/battery/battery-payback-nem-3-california"
            >
              battery payback under NEM 3.0
            </Link>
            .
          </p>
        </section>
        <section>
          <h2>If you sell your home or add panels</h2>
          <p>
            Selling the home: PG&E states its 20-year NEM legacy rules “are
            tied to the system, not the owner” — if the prior owner had used
            15 of their 20 years, the new owner inherits the remaining five
            on the same tariff. SCE similarly states that “account changes,
            such as moving in or out of a residence with an NEM system or
            transferring the account to someone else’s name, do not affect
            the NEM eligibility period of the original system.” SDG&E’s
            Solar Billing Plan pages reviewed did not address this directly
            — confirm with SDG&E if you’re buying or selling a home with a
            legacy system there.
          </p>
          <p className="mt-3">
            Adding panels: expanding a grandfathered NEM 1.0/2.0 system can
            move the whole account onto the Net Billing Tariff. PG&E moves
            accounts to the Solar Billing Plan at the next true-up date if
            the expansion is either more than 10% of the original system’s
            nameplate capacity or more than 1 kW — whichever threshold is
            reached first. SCE allows growth up to “the greater of 1 kW or
            10 percent of the original system size” while staying on the
            legacy tariff, filed under a specific “NEM 1.0/2.0 Expansion”
            interconnection option — exceed that, or skip that filing, and
            the account moves to the Solar Billing Plan. Again, SDG&E’s own
            pages did not state an equivalent threshold in the pages
            checked.
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
  }
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
    sourceCheckedDate = '2026-09-22';
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
      {
        label: 'SDG&E: when rates matter, plan hours by schedule',
        url: 'https://www.sdge.com/whenmatters',
      },
      {
        label: 'SDG&E: Schedule TOU-DR1 total rates table (eff. 8/1/2026)',
        url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20TOU-DR1%20Total%20Rates%20Table.pdf',
      },
      {
        label: 'SDG&E: Schedule TOU-DR2 total rates table (eff. 8/1/2026)',
        url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20TOU-DR2%20Total%20Rates%20Table.pdf',
      },
      {
        label: 'SDG&E: Schedule TOU-DR-P total rates table (eff. 1/1/2026)',
        url: 'https://www.sdge.com/sites/default/files/regulatory/1-1-26%20Schedule%20TOU-DR-P%20Total%20Rates%20Table.pdf',
      },
      {
        label: 'SDG&E: Schedule EV-TOU-5 total rates table (eff. 1/1/2026)',
        url: 'https://www.sdge.com/sites/default/files/regulatory/1-1-26%20Schedule%20EV-TOU-5%20Total%20Rates%20Table.pdf',
      },
      {
        label: 'SDG&E: Schedule DR total rates table (eff. 8/1/2026)',
        url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20DR%20Total%20Rates%20Table.pdf',
      },
      {
        label: 'SDG&E: Reduce Your Use demand response program',
        url: 'https://www.sdge.com/residential/savings-center/energy-saving-programs/reduce-your-use/demand-response-residential-programs',
      },
      {
        label: 'SDG&E: Solar Billing Plan',
        url: 'https://www.sdge.com/solar/solar-billing-plan',
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
          <h3 className="mt-6">Off-peak and super off-peak hours (weekday vs. weekend/holiday)</h3>
          <p>
            On-peak is 4–9 p.m. every day for TOU-DR1, TOU-DR2, EV-TOU-5 and
            TOU-DR-P — there is no separate weekend on-peak window. Off-peak
            and super off-peak <em>do</em> shift on weekends and holidays,
            because the weekday morning commute-hours block disappears.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-3 text-left font-semibold">
                Off-peak and super off-peak windows · checked September 22, 2026
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Plan</th>
                  <th className="p-3">Weekday off-peak</th>
                  <th className="p-3">Weekend/holiday off-peak</th>
                  <th className="p-3">Weekday super off-peak</th>
                  <th className="p-3">Weekend/holiday super off-peak</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top font-normal">
                    TOU-DR1, EV-TOU-5, TOU-DR-P
                  </th>
                  <td className="p-3">6 a.m.–10 a.m., 2 p.m.–4 p.m., 9 p.m.–12 a.m.</td>
                  <td className="p-3">2 p.m.–4 p.m., 9 p.m.–12 a.m.</td>
                  <td className="p-3">12 a.m.–6 a.m., 10 a.m.–2 p.m.</td>
                  <td className="p-3">12 a.m.–2 p.m. (one continuous block)</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top font-normal">
                    TOU-DR2
                  </th>
                  <td className="p-3" colSpan={4}>
                    12 a.m.–4 p.m., 9 p.m.–12 a.m. (no weekday/weekend difference; no super off-peak tier)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Holidays, for this purpose: New Year&rsquo;s Day, Presidents Day,
            Memorial Day, Independence Day, Labor Day, Veterans Day,
            Thanksgiving Day and Christmas Day. Since off-peak and super
            off-peak cost less than on-peak on every plan, that is also the
            practical answer to &ldquo;best time to run appliances&rdquo; on
            SDG&amp;E — outside the 4–9 p.m. window, any day.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Source checked September 22, 2026:{' '}
            <a className={link} href="https://www.sdge.com/whenmatters">
              SDG&amp;E, when rates matter
            </a>
            , corroborating the pricing-plan chooser above.
          </p>
        </section>
        <SdgeRateTable />
        <section>
          <h2>TOU-DR2, TOU-DR-P, EV-TOU-5 and DR: the other four plans</h2>
          <p>
            SDG&amp;E&rsquo;s own tariff title for the plan most people mean
            by &ldquo;TOU-DR1&rdquo; is Schedule TOU-DR1 &ndash; Residential
            Time-of-Use Service. Four more residential schedules exist.
            Figures below are SDG&amp;E&rsquo;s bundled Total Rate (delivery +
            SDG&amp;E generation); a community choice aggregation (CCA)
            customer pays SDG&amp;E&rsquo;s delivery-only portion of the same
            schedule plus their CCA&rsquo;s generation charge — delivery-only
            figures for these four plans were not independently available
            this session.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-3 text-left font-semibold">
                Total Rate by schedule · checked September 22, 2026
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Plan</th>
                  <th className="p-3">Hours</th>
                  <th className="p-3">Summer Total Rate</th>
                  <th className="p-3">Winter Total Rate</th>
                  <th className="p-3">Fixed charge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top font-normal">TOU-DR2 — 2-period Residential TOU</th>
                  <td className="p-3">Same as TOU-DR2 row above</td>
                  <td className="p-3">Tier 1: 31.0¢ off-pk / 58.9¢ on-pk · Tier 2: 41.7¢ / 69.6¢</td>
                  <td className="p-3">Tier 1: 36.7¢ / 50.8¢ · Tier 2: 47.4¢ / 61.5¢</td>
                  <td className="p-3">$0.79343/day standard</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top font-normal">TOU-DR-P — adds Reduce Your Use event days</th>
                  <td className="p-3">Same clock hours as TOU-DR1</td>
                  <td className="p-3">Tier 1: 31.0¢ SOP / 38.5¢ off-pk / 43.0¢ on-pk · Tier 2: 41.7¢ / 49.2¢ / 53.7¢</td>
                  <td className="p-3">Tier 1: 32.1¢ / 40.7¢ / 48.4¢ · Tier 2: 42.8¢ / 51.4¢ / 59.1¢</td>
                  <td className="p-3">Same, $0.79343/day</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top font-normal">EV-TOU-5 — for homes with a DMV-registered EV</th>
                  <td className="p-3">Same clock hours as TOU-DR1</td>
                  <td className="p-3">13.1¢ SOP / 49.6¢ off-pk / 80.2¢ on-pk</td>
                  <td className="p-3">12.3¢ / 46.6¢ / 52.4¢</td>
                  <td className="p-3">Same, $0.79343/day</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top font-normal">DR — flat, no time-of-use</th>
                  <td className="p-3">Not time-of-use; same price all hours</td>
                  <td className="p-3">Tier 1: 41.3¢ · Tier 2: 52.0¢</td>
                  <td className="p-3">Same as summer (not seasonal)</td>
                  <td className="p-3">Same, $0.79343/day</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            On TOU-DR-P, SDG&amp;E can call up to 18 Reduce Your Use event
            days a year; on those days, 4–9 p.m. usage costs an extra
            $1.16/kWh on top of the on-peak rate above. CARE, FERA and
            DRAH-enrolled households pay a lower fixed charge, $0.39688/day,
            on every plan above (about $12/month vs. about{' '}
            <Link className={link} href="/blog/california-24-dollar-fixed-charge-explained">
              the ~$24/month fixed charge, explained
            </Link>
            {' '}for standard accounts).
          </p>
          <p className="mt-3">
            All five schedules above (TOU-DR1, TOU-DR2, TOU-DR-P, EV-TOU-5 and
            DR) are effective August 1, 2026, per SDG&amp;E&rsquo;s own
            tariff-rate tables for each schedule.
          </p>
          <p className="mt-4 font-semibold">Which plan when</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>Can shift most usage to midday or overnight: TOU-DR1&rsquo;s super off-peak is the lowest non-EV rate found (26.7¢ summer).</li>
            <li>Wants the simplest schedule, no midday tier to track: TOU-DR2 (on-peak/off-peak only).</li>
            <li>Can meaningfully cut usage on ~18 called afternoons a year: TOU-DR-P trades a lower baseline on-peak rate for the event-day adder.</li>
            <li>
              Owns an EV and{' '}
              <Link className={link} href="/blog/solar-panels-for-ev-charging-california">
                charges an EV on the super off-peak window
              </Link>
              : EV-TOU-5&rsquo;s super off-peak (11.7¢–12.4¢) is the lowest rate on any plan here, but its on-peak rate (up to 80.0¢) is also the highest.
            </li>
            <li>Can&rsquo;t or won&rsquo;t shift usage by time of day: DR is flat, but at 41.3¢/52.0¢ it is priced above most plans&rsquo; off-peak and super off-peak rates.</li>
          </ul>
        </section>
        <section>
          <h2>The Solar Billing Plan and your rate plan</h2>
          <p>
            SDG&amp;E&rsquo;s Solar Billing Plan is the billing structure a
            solar account moves to once a legacy Net Energy Metering
            agreement&rsquo;s 20-year term ends. SDG&amp;E states that
            residential Solar Billing Plan customers are placed on EV-TOU-5
            (above), not TOU-DR1 or TOU-DR2, and that exported energy earns
            separate Generation and Delivery Export Credits priced by time of
            day and season, set by the CPUC. For the export-credit mechanics
            and how this compares to a legacy agreement, see our{' '}
            <Link className={link} href="/blog/nem-2-vs-nem-3-california">
              NEM 2.0 vs. the Solar Billing Plan
            </Link>{' '}
            and{' '}
            <Link className={link} href="/blog/what-is-nem-3-california">
              what the Solar Billing Plan changes for solar owners
            </Link>{' '}
            pages rather than duplicating that here.
          </p>
        </section>
        <section>
          <h2>How to switch SDG&amp;E rate plans</h2>
          <p>
            Log in to My Energy Center, open the Billing menu, select Pricing
            Plans, scroll to the eligible plans list, and click Enroll next to
            the plan you want.
          </p>
        </section>
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
            proposal. For the{' '}
            <Link className={link} href="/california-utility-rate-tracker">
              current composite SDG&amp;E rate and why rates moved in 2026
            </Link>
            , and for{' '}
            <Link className={link} href="/blog/why-is-my-california-electric-bill-so-high">
              why your bill can run higher than the rate alone suggests
            </Link>
            , see those pages rather than a rate-plan schedule alone.
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
          <Link className={link} href={companiesCityHref('san-diego')}>
            San Diego solar cost and comparison guide
          </Link>
          . The tool carries your inputs into the optional inquiry below.
        </p>
        <section>
          <h2>Local project decisions in San Diego County</h2>
          <p>
            A rate plan does not answer permit scope, roof work or the utility named on a
            particular address. These city guides keep those checks with the published local
            process before you compare a proposal.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><Link className={link} href="/solar-cost/escondido">Escondido solar cost and project checks</Link></li>
            <li><Link className={link} href="/solar-cost/chula-vista">Chula Vista solar cost and project checks</Link></li>
            <li><Link className={link} href="/solar-cost/carlsbad">Carlsbad solar cost and project checks</Link></li>
            <li><Link className={link} href="/solar-cost/oceanside">Oceanside solar cost and project checks</Link></li>
          </ul>
        </section>
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
      faq={faq}
      // The calculator page opens with the calculator itself; a bill-first
      // quick check above it would be a second first step on the same screen.
      quickCheck={kind === 'calculator' ? false : undefined}
    >
      {content}
    </DecisionPage>
  );
}
