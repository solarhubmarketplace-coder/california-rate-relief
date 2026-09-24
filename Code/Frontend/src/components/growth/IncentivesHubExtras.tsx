import Link from 'next/link';
import { FaqBlock } from '@/components/trust/FaqBlock';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';

// =============================================================================
// IncentivesHubExtras — added 2026-09-23 to /blog/california-solar-tax-credit-2026,
// the hub page for "incentives" (topical-authority wave, agent costfin).
//
// Answers the hub's head questions directly (is there a California solar tax
// credit, what the federal credit was in 2022 to 2025 and how it was claimed,
// what rebates remain) and gives the hub its visible, grouped list of every
// spoke (STRUCTURE_AND_LINK_RULES §5.1, §5.2). Every figure was fetched from
// its primary source on 2026-09-23: IRS, U.S. Code, FTB, BOE, CPUC, the SGIP
// program tracker and the utilities' own program pages.
// =============================================================================

const link = 'text-primary underline underline-offset-2';

export const INC = {
  irs25d: 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit',
  irsObbbFaq:
    'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb',
  ftbCredits: 'https://www.ftb.ca.gov/file/personal/credits/index.html',
  boe: 'https://boe.ca.gov/proptaxes/active-solar-energy-system/',
  sgipTracker: 'https://www.selfgenca.com/home/program_metrics/',
  cpucSgip: 'https://www.cpuc.ca.gov/sgip',
  cpucDac:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/solar-in-disadvantaged-communities',
  cpucCareFera:
    'https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/family-electric-rate-assistance-program',
  smudBattery: 'https://www.smud.org/Going-Green/Battery-storage/Homeowner',
  sdgeConsidering: 'https://www.sdge.com/solar/considering-solar',
  // 2026-09-23 Tier 2 (agent costfin): sources for the added FAQ entries.
  us48e: 'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29',
  cecSfa: 'https://www.energy.ca.gov/programs-and-topics/programs/solar-all-program',
  cpucGuide:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  // 2026-09-23 Tier 3 (agent misc): sources for the added FAQ entries.
  sceCareFera: 'https://www.sce.com/save-money/income-qualified-programs/care-fera',
  cpucLowIncome: 'https://www.cpuc.ca.gov/solarguide/lowincomesolar',
} as const;

export const incentivesHubExtraSources = [
  { label: 'IRS: Residential Clean Energy Credit (30% for 2022 to 2025; not available after 2025)', url: INC.irs25d },
  { label: 'IRS: FAQs on the Public Law 119-21 changes to Section 25D (FS-2025-05, August 21, 2025)', url: INC.irsObbbFaq },
  { label: 'California Franchise Tax Board: personal income tax credits', url: INC.ftbCredits },
  { label: 'Board of Equalization: Active Solar Energy System Exclusion', url: INC.boe },
  { label: 'CPUC: Self-Generation Incentive Program', url: INC.cpucSgip },
  { label: 'SMUD: battery storage incentives for homeowners', url: INC.smudBattery },
  { label: 'SDG&E: considering solar (incentives and programs)', url: INC.sdgeConsidering },
  { label: 'U.S. Code: 26 U.S.C. § 48E, clean electricity investment credit (business credit)', url: INC.us48e },
  { label: 'California Energy Commission: Solar for All Program (status and August 2025 statement)', url: INC.cecSfa },
  { label: 'CPUC: California Solar Consumer Protection Guide', url: INC.cpucGuide },
  { label: 'SCE: CARE and FERA discounts and income limits (June 1, 2026 to May 31, 2027)', url: INC.sceCareFera },
  { label: 'CPUC: Low Income Solar Programs (DAC-SASH, DAC-GT, CSGT, farmworker housing)', url: INC.cpucLowIncome },
];

/** The direct answer for the hub's head questions, placed first in the body. */
export function IncentivesAnswer() {
  return (
    <section id="tax-credit-answer">
      <h2>Is there a California solar tax credit in 2026?</h2>
      <p>
        <strong>No state credit, and the federal one has ended for new systems.</strong>{' '}
        California&rsquo;s Franchise Tax Board lists 13 personal income tax credits on its
        credits page, and none is for solar (
        <a className={link} href={INC.ftbCredits}>
          FTB
        </a>
        , checked September 23, 2026). The credit most people mean by &ldquo;the California
        solar tax credit&rdquo; is the federal Residential Clean Energy Credit under 26
        U.S.C. § 25D.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          <strong>2022 through 2025:</strong> the IRS says the credit &ldquo;equals 30% of the
          costs of new, qualified clean energy property for your home installed anytime from
          2022 through December 31, 2025.&rdquo; That is the answer for the 2022 and 2023
          credit questions too.
        </li>
        <li>
          <strong>2026 and later:</strong> &ldquo;The credit is not available for any property
          placed in service after December 31, 2025&rdquo; (
          <a className={link} href={INC.irs25d}>
            IRS
          </a>
          ). Public Law 119-21, enacted July 4, 2025, set that end date. The IRS adds that
          &ldquo;if installation is completed after December 31, 2025, the expenditure will be
          treated as made after December 31, 2025,&rdquo; so a 2025 contract or deposit does
          not qualify a 2026 installation (
          <a className={link} href={INC.irsObbbFaq}>
            IRS FAQ
          </a>
          , both checked September 23, 2026).
        </li>
      </ul>
      <h3 className="mt-5">How the credit was claimed, for a system installed by 2025</h3>
      <p>
        &ldquo;File Form 5695, Residential Energy Credits with your tax return to claim the
        credit.&rdquo; You claim it &ldquo;for the tax year when the property is installed,
        not merely purchased,&rdquo; and &ldquo;you can carry forward any excess unused
        credit&rdquo; to later years (IRS). The IRS also says you could claim it for your main
        home &ldquo;whether you own or rent it,&rdquo; but not as a landlord who does not
        live there. For the records to keep, see{' '}
        <Link className={link} href="/blog/solar-tax-credit-2026">
          completion dates and prior-year records
        </Link>
        ; for what a new buyer can still use, see{' '}
        <Link className={link} href="/blog/solar-tax-credit-expired-2026-options">
          the options now the credit has ended
        </Link>
        .
      </p>
    </section>
  );
}

const rows: [string, string, string, string][] = [
  [
    'Federal Residential Clean Energy Credit (§ 25D)',
    '30% of costs for systems installed 2022 through 2025',
    'Ended: not available for property placed in service after December 31, 2025',
    'IRS',
  ],
  [
    'SGIP (Self-Generation Incentive Program)',
    'Battery storage incentives, by budget category',
    'Most residential categories closed on September 23, 2026; the low-income AB 209 equity budget was waitlisted, except its sub-category for customers of publicly owned utilities under PG&E and SCE, which was open',
    'CPUC; SGIP tracker',
  ],
  [
    'DAC-SASH',
    '“$3/watt incentives” for income-qualified homeowners in disadvantaged communities',
    'Budget of $120 million, $10 million a year 2019–2030',
    'CPUC',
  ],
  [
    'DAC Green Tariff and Community Solar Green Tariff',
    '“a 20% bill discount” with no panels on your roof',
    'Income-qualified residential customers in disadvantaged communities',
    'CPUC',
  ],
  [
    'CARE and FERA',
    'CARE: 30–35% off the electric bill. FERA: 18%',
    'Income-qualified households; apply through your utility',
    'CPUC',
  ],
  [
    'Property tax exclusion',
    'A qualifying system does not raise your assessment',
    '“Scheduled to sunset on January 1, 2027”',
    'BOE',
  ],
  [
    'Local utility and city programs',
    'For example SMUD’s battery incentive and the City of San Diego’s solar equity program',
    'Vary by utility; see the utility-by-utility guide',
    'SMUD; SDG&E',
  ],
];

/** Every California incentive in one table, with status on the check date. */
export function IncentivesTable() {
  return (
    <section id="incentives-table">
      <h2>California solar incentives in 2026, in one table</h2>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="p-4 text-left font-semibold">
            What each program pays, and where it stood on September 23, 2026
          </caption>
          <thead className="bg-muted">
            <tr>
              <th className="p-3">Program</th>
              <th className="p-3">What it pays</th>
              <th className="p-3">Status or limit</th>
              <th className="p-3">Source</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t">
                <th scope="row" className="p-3 align-top">{r[0]}</th>
                <td className="p-3 align-top">{r[1]}</td>
                <td className="p-3 align-top">{r[2]}</td>
                <td className="p-3 align-top">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3">
        Sources, all checked September 23, 2026:{' '}
        <a className={link} href={INC.irs25d}>IRS</a>,{' '}
        <a className={link} href={INC.sgipTracker}>SGIP program tracker</a>,{' '}
        <a className={link} href={INC.cpucDac}>CPUC disadvantaged-communities programs</a>,{' '}
        <a className={link} href={INC.cpucCareFera}>CPUC CARE and FERA</a>,{' '}
        <a className={link} href={INC.boe}>BOE</a>,{' '}
        <a className={link} href={INC.smudBattery}>SMUD</a> and{' '}
        <a className={link} href={INC.sdgeConsidering}>SDG&amp;E</a>. A program name on a
        flyer is not a reservation; check the administrator&rsquo;s current status for your
        address.
      </p>
      <p className="mt-3">
        What each utility runs itself is different enough to need its own page:{' '}
        <Link className={link} href="/blog/pge-solar-program">
          PG&amp;E&rsquo;s solar programs
        </Link>{' '}
        (two of its community solar options are full or on hold),{' '}
        <Link className={link} href="/blog/smud-solar-program">
          SMUD&rsquo;s export rate, SolarShares and battery incentive
        </Link>
        , and{' '}
        <Link className={link} href="/blog/ladwp-solar-program">
          LADWP&rsquo;s solar programs in Los Angeles
        </Link>
        . A business asking about incentives should start with{' '}
        <Link className={link} href="/blog/commercial-solar-financing-california">
          commercial solar financing in California
        </Link>
        , because the federal business credit follows different rules from the homeowner
        credit.
      </p>
    </section>
  );
}

const groups: { heading: string; links: { href: string; label: string; note: string }[] }[] = [
  {
    heading: 'Tax credits',
    links: [
      { href: '/blog/solar-tax-credit-expired-2026-options', label: 'Solar tax credit ended: your 2026 options', note: 'What a new purchase can still use.' },
      { href: '/blog/solar-tax-credit-2026', label: 'Completion dates and prior-year records', note: 'For systems finished by the end of 2025.' },
    ],
  },
  {
    heading: 'Rebates by utility and for batteries',
    links: [
      { href: '/blog/solar-rebates-by-california-utility', label: 'Solar and battery rebates by California utility', note: 'PG&E, SCE, SDG&E, SMUD, LADWP and Roseville.' },
      { href: '/battery/sgip-battery-rebate-california', label: 'SGIP battery rebate status', note: 'Category by category.' },
      { href: '/blog/tech-clean-california-heat-pump-rebate', label: 'TECH Clean California heat pump rebates', note: 'Electrification rebates that are not for solar.' },
    ],
  },
  {
    heading: 'Utility solar programs',
    links: [
      { href: '/blog/pge-solar-program', label: 'PG&E solar programs', note: 'What PG&E offers, what is closed and what is not a PG&E program.' },
      { href: '/blog/smud-solar-program', label: 'SMUD solar programs', note: 'Export rate, SolarShares and the battery incentive.' },
      { href: '/blog/ladwp-solar-program', label: 'LADWP solar programs', note: 'Solar Rooftops, Shared Solar and LADWP’s SGIP.' },
      { href: '/blog/ladwp-solar-rooftops-program', label: 'LADWP Solar Rooftops in detail', note: 'LADWP pays rent for your roof.' },
    ],
  },
  {
    heading: 'No-cost and low-income programs',
    links: [
      { href: '/blog/free-solar-panels-california', label: 'Solar sold as costing nothing: the CPUC answer', note: 'What ads mean, and DAC-SASH.' },
      { href: '/blog/low-income-solar-california', label: 'Low-income solar application paths', note: 'Bill help and rooftop programs, separately.' },
      { href: '/blog/free-solar-for-seniors-california', label: 'Solar programs for seniors', note: 'What age does and does not change.' },
      { href: '/blog/solar-for-renters', label: 'Solar options for renters', note: 'Bill discounts without a roof.' },
      { href: '/blog/solar-discount', label: 'Solar discount programs by utility and CCA', note: '20% off the bill, no panels: who runs yours.' },
      { href: '/blog/free-roof-replacement-with-solar-panels-california', label: 'Roof replacement bundled with solar', note: 'Where a “free roof” sits in the price.' },
    ],
  },
  {
    heading: 'Property tax and value',
    links: [
      { href: '/blog/do-solar-panels-increase-property-taxes-california', label: 'Does solar raise your property taxes?', note: 'The exclusion and its 2027 sunset.' },
      { href: '/blog/does-solar-increase-home-value-california', label: 'Does solar increase home value?', note: 'What the sale research found.' },
    ],
  },
  {
    heading: 'Net cost and how to pay',
    links: [
      { href: '/solar-panels-california', label: 'California solar cost and sizing', note: 'The price before any incentive.' },
      { href: '/blog/solar-payback-period-california', label: 'Solar payback period in California', note: 'How long a purchase takes to earn back.' },
      { href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california', label: 'Lease, PPA, loan or cash', note: 'Who owns the system decides who claims what.' },
      { href: '/battery', label: 'Home batteries in California', note: 'Where SGIP fits into a battery decision.' },
    ],
  },
];

/** The hub's visible list of every spoke, grouped by sub-topic. */
export function IncentivesSpokeDirectory() {
  return (
    <section id="incentive-guides">
      <h2>Every California incentive guide on this site</h2>
      <div className="space-y-5">
        {groups.map((g) => (
          <div key={g.heading}>
            <h3>{g.heading}</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link className={link} href={l.href}>
                    {l.label}
                  </Link>
                  {' '}— {l.note}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Does California have a state solar tax credit?',
    answer:
      'No. The Franchise Tax Board lists 13 personal income tax credits on its credits page, and none is for solar (checked September 23, 2026). The credit usually called the California solar tax credit is the federal Residential Clean Energy Credit, which is not available for property placed in service after December 31, 2025.',
  },
  {
    question: 'How does the solar tax credit work in California?',
    answer:
      'For systems installed from 2022 through December 31, 2025, the federal credit equaled 30% of the cost of qualified property for your home. You claimed it on IRS Form 5695 for the tax year the system was installed, and could carry forward any unused amount. There was never a separate state version.',
  },
  {
    question: 'What was the California solar tax credit for 2022 and 2023?',
    answer:
      'The federal credit was 30% for systems installed in 2022 and 2023, and stayed at 30% through 2025. The IRS says it equals 30% of the costs of new, qualified clean energy property installed anytime from 2022 through December 31, 2025.',
  },
  {
    question: 'What is the solar rebate in California?',
    answer:
      'There is no statewide rebate on rooftop solar panels for most homeowners. The state rebate that remains is SGIP, which pays toward battery storage by budget category, and most residential categories were closed on September 23, 2026. Income-qualified homeowners in disadvantaged communities can apply for DAC-SASH, and some municipal utilities and cities run their own programs.',
  },
  {
    question: 'How do I apply for a solar rebate in California?',
    answer:
      'Through the program’s administrator, not the salesperson. SGIP applications go through the administrator for your utility territory; DAC-SASH goes through GRID Alternatives; CARE and FERA through your utility; SMUD and other local programs through that utility. Ask for the reservation or approval in writing before counting on any rebate.',
  },
  {
    question: 'Does solar raise property taxes in California?',
    answer:
      'Not under the current exclusion. The Board of Equalization says installing a qualifying system will not increase the assessment, and the statute is scheduled to sunset on January 1, 2027.',
  },
  // 2026-09-23 Tier 2 (agent costfin): the remaining questions of the
  // "california solar incentives" cluster. Sources fetched 2026-09-23: IRS,
  // FTB, BOE, CPUC consumer guide, 26 U.S.C. § 48E and the CEC.
  {
    question: 'How much is the solar tax credit in California?',
    answer:
      'For a system installed now, nothing. California has no state solar credit, and the IRS says the federal Residential Clean Energy Credit is not available for property placed in service after December 31, 2025. For a home system installed from 2022 through 2025, the federal credit was 30% of qualified costs. It is nonrefundable, so it could not exceed the tax you owed, but unused credit carries forward to later years.',
  },
  {
    question: 'How do I claim the solar tax credit in California?',
    answer:
      'Only for a system installed by December 31, 2025, and only on your federal return. The IRS says to file Form 5695 with your return and to claim the credit for the tax year the property is installed, not merely purchased. There is nothing to claim on your California return, because the Franchise Tax Board lists no solar credit. A contract or deposit signed in 2025 does not qualify a system finished in 2026.',
  },
  {
    question: 'How can I get free solar panels in California?',
    answer:
      'Usually you cannot, and the CPUC says so: beware of a provider who tells you solar is free, because it is not. The real no-cost route is DAC-SASH, for income-qualified homeowners in disadvantaged communities. SOMAH pays toward solar on affordable apartment buildings, and the owner applies. An offer with no money down is a lease, PPA or loan, with the cost moved into monthly payments.',
  },
  {
    question: 'Does California tax solar panels?',
    answer:
      'Not through your property tax while the exclusion lasts. The Board of Equalization says a qualifying system will not increase your assessment, whether it is leased or owned, and no form is needed. It is an exclusion, not an exemption, and the statute is scheduled to sunset on January 1, 2027.',
  },
  {
    question: 'What solar incentives are there for California businesses?',
    answer:
      'Different ones from a homeowner’s. The federal business credit under 26 U.S.C. § 48E still exists, but the 2025 tax law added a cutoff: for solar facilities whose construction begins after July 4, 2026, it does not apply to property placed in service after December 31, 2027. Batteries at those sites are excepted from that cutoff. SGIP also has non-residential budget categories. Get tax advice before counting on either.',
  },
  {
    question: 'Is there a Solar for All program in California?',
    answer:
      'Not one a household can apply to. The California Energy Commission says the California Solar for All program is in the planning stage. In August 2025 the CPUC, the Energy Commission and the Labor and Workforce Development Agency called the EPA’s termination of Solar for All funding unlawful and asked the EPA to reverse it. The Energy Commission’s page gives no date for households to apply.',
  },
  // 2026-09-23 Tier 3 (agent misc): the remaining small incentive questions
  // assigned to this hub. Sources fetched 2026-09-23: FTB, IRS, SCE, SDG&E and
  // the CPUC's solar-in-disadvantaged-communities and low-income solar pages.
  {
    question: 'What is the solar investment tax credit (ITC) in California?',
    answer:
      'ITC is the usual name for the federal solar tax credit; California has no state version, and the Franchise Tax Board lists no solar credit. For homeowners, the federal credit is the Residential Clean Energy Credit, which paid 30% for systems installed from 2022 through 2025 and is not available for property placed in service after December 31, 2025. For businesses, the investment credit now runs under 26 U.S.C. § 48E, with the cutoff described in the business-incentives answer above. A lease or PPA provider may claim a business credit on equipment it owns; that is not a credit you can claim.',
  },
  {
    question: 'How much is the SCE CARE discount?',
    answer:
      'SCE says qualifying CARE households receive 32.5% off their electric bills, and FERA households an 18% discount. CARE customers pay a Base Services Charge of about $6 a month and FERA customers about $12. For June 1, 2026 to May 31, 2027, the CARE income limit is $43,280 for a household of one or two, $54,640 for three and $66,000 for four; FERA covers incomes above those limits up to $54,100, $68,300 and $82,500. Apply online or at 1-800-798-5723.',
  },
  {
    question: 'Does SDG&E have a solar program?',
    answer:
      'SDG&E does not pay a rebate on solar panels itself. Its considering-solar page lists SGIP battery incentives, DAC-SASH for income-qualified homeowners in disadvantaged communities, and the San Diego Solar Equity Program, which helps income-qualifying single-family homeowners in the City of San Diego with the cost of panels. The same page still mentions a 30% federal tax credit, which the IRS says is not available for systems placed in service after 2025. New SDG&E solar customers are on the CPUC’s Net Billing Tariff.',
  },
  {
    question: 'How do I qualify for no-cost solar in California?',
    answer:
      'Through DAC-SASH, which GRID Alternatives runs for the CPUC and which was accepting applications on September 23, 2026. You must own a single-family home, be income-qualified (eligible for CARE or FERA), and live in a disadvantaged community, which the CPUC defines as a census tract in the top 25% statewide on CalEnviroScreen. Income-qualified renters, and owners whose roof cannot take solar, in those same communities may qualify for a 20% solar bill discount instead, and eligible farmworker households in 18 counties have a separate no-cost program.',
  },
];

export function IncentivesHubFaq() {
  return <FaqBlock items={faqs} id="incentives-faq" heading="California solar incentive questions" />;
}
