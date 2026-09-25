import Link from 'next/link';

// =============================================================================
// NoMoneyDownExtras: GS-MERGES 2026-09-24 (plan 6.3, "no money down" cluster).
//
// /blog/zero-down-solar-california (8 impressions in 90 days) and
// /blog/no-upfront-cost-solar-panels (0; new in the release) 301 to
// /blog/free-solar-panels-california (2,585), which Search Console already
// shows for "no upfront cost solar panels" and which holds topic-map cluster
// 266. This file carries what the two losers had and the winner did not:
// where the cost sits in each structure and what to ask for, the progress-
// payment rule in Bus. & Prof. Code 7159.5(a)(5), the dealer fee on a $0-down
// loan, the CPUC's escalator range and what 3% compounds to, the CPUC's
// lease/PPA pros and cons, Berkeley Lab's resale finding, and the CPUC's
// total-cost questions. Every quote was re-read at its source on 2026-09-24.
//
// Not carried: a named provider's escalator (an installer's own marketing
// page is not a source here). Rule 5 applies: "free" and "no cost" appear only
// as a description of what an ad claims.
// =============================================================================

const link = 'text-primary underline underline-offset-2';

export const NMD = {
  bpc71595:
    'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7159.5',
  cpucGuide:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  lbnlTpo: 'https://www.osti.gov/servlets/purl/1342946',
} as const;

export const noMoneyDownSources = [
  {
    label:
      'California Business and Professions Code § 7159.5(a)(5): no payment beyond the value of work performed or material delivered, including advance payment from a lender (checked 2026-09-24)',
    url: NMD.bpc71595,
  },
  {
    label:
      'Berkeley Lab: Leasing Into the Sun, California home sales with third-party-owned solar (LBNL-1007003, January 2017)',
    url: NMD.lbnlTpo,
  },
];

const rows: [string, string, string][] = [
  [
    'Loan (you own the system)',
    'Interest over the term, plus any fee folded into the amount financed.',
    'The cash price, the rate, the term, the total of payments, and whether a financing statement is filed on the system.',
  ],
  [
    'Lease (the provider owns it)',
    'The monthly payment over the term, and any escalator that raises it.',
    'The year-by-year payment schedule, the escalator, the term, the buyout formula and the end-of-term options.',
  ],
  [
    'Power purchase agreement (the provider owns it)',
    'A price per kilowatt-hour of output, for as long as the agreement runs.',
    'The rate and any escalator, the production estimate behind it, and what happens in a low-production year.',
  ],
];

/** Where the cost sits in a $0-down or no-upfront-cost offer, and how to test it. */
export function NoMoneyDownCost() {
  return (
    <section id="no-money-down">
      <h2>$0 down or no upfront cost: where the money goes</h2>
      <p>
        A no-money-down offer tells you when the first payment is due. It does not tell you the
        term, the rate, the escalator, the total you pay or who owns the equipment. The same
        phrase is used for a loan, a lease and a PPA, and each puts the cost somewhere else.
      </p>
      <div className="mt-4 overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Where the cost sits in a no-money-down solar offer, by structure
          </caption>
          <thead className="bg-muted">
            <tr>
              <th className="p-4">Structure</th>
              <th className="p-4">Where the cost sits</th>
              <th className="p-4">What to ask for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t">
                <th scope="row" className="p-4 align-top">
                  {r[0]}
                </th>
                <td className="p-4 align-top">{r[1]}</td>
                <td className="p-4 align-top">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        The money you do not pay at signing still has to follow the work. Apart from the down
        payment, a contractor &ldquo;shall neither request nor accept payment that exceeds the
        value of the work performed or material delivered,&rdquo; and the rule covers advance
        payment from a lender or financier too (
        <a href={NMD.bpc71595} className={link}>
          Bus. &amp; Prof. Code § 7159.5(a)(5)
        </a>
        , checked September 24, 2026).
      </p>
      <p className="mt-3">
        A $0-down loan borrows the whole price. Any dealer fee folded into that price is financed
        in full from the first payment. Ask for the cash price and the amount financed in writing,
        so the fee shows as its own line. The mechanics are in{' '}
        <Link href="/solar-problems/solar-dealer-fees-explained" className={link}>
          where a dealer fee sits inside a price
        </Link>
        .
      </p>

      <h3 className="mt-6">How the company gets paid when you pay nothing at signing</h3>
      <p>
        Someone pays the installer on day one, and you pay that someone back over the contract.
        On a lease or PPA, payments often rise each year. The CPUC says escalators &ldquo;are
        typically in the range of a 1 percent to 3 percent increase above the rate you paid in the
        previous year. Be cautious of entering into a contract with an escalator higher than
        that.&rdquo; At 3% a year, the payment after 20 increases is about 1.8 times the first
        year&rsquo;s (
        <a href={NMD.cpucGuide} className={link}>
          CPUC consumer guide
        </a>
        , checked September 24, 2026; the multiple is arithmetic). How an escalator works is in{' '}
        <Link href="/solar-problems/solar-escalator-clause-explained" className={link}>
          what a solar escalator clause does
        </Link>
        .
      </p>

      <h3 className="mt-6">What a lease or PPA does for you, and against you</h3>
      <p>
        The CPUC lists the trade-offs side by side. In favor: &ldquo;Little or no upfront
        costs,&rdquo; the &ldquo;Solar provider is responsible for all monitoring, maintenance,
        and repairs,&rdquo; and a &ldquo;Minimum energy production often guaranteed.&rdquo;
        Against: selling the home &ldquo;may be more complicated than with a purchased
        system,&rdquo; because the buyer must take over the agreement, you keep paying, or you buy
        it out, &ldquo;which could be thousands of dollars&rdquo; (CPUC, checked September 24,
        2026).
      </p>
      <p className="mt-3">
        Do not count on a resale boost either. Berkeley Lab studied 113 California home sales with
        third-party-owned systems from 2011 to 2013 and found no statistically significant price
        premium (
        <a href={NMD.lbnlTpo} className={link}>
          LBNL-1007003
        </a>
        , January 2017).
      </p>

      <h3 className="mt-6">The total-cost test before you sign</h3>
      <p>
        Start with two questions the CPUC tells you to ask: &ldquo;What is the total cost of the
        solar system or solar energy over the entire course of the contract?&rdquo; and
        &ldquo;Will my payments increase over time? How much will they increase and how
        frequently?&rdquo; Then:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-6">
        <li>Get a cash price for the same system, even if you plan to finance.</li>
        <li>Add up every payment in the loan, lease or PPA schedule, escalator included.</li>
        <li>Add the utility bill each option leaves you with; it does not go to zero.</li>
        <li>Check the utility-rate increase the savings estimate assumes.</li>
        <li>Compare the totals over the years you expect to stay in the home.</li>
      </ol>
      <p className="mt-3">
        The{' '}
        <Link href="/tools/solar-panel-calculator" className={link}>
          solar cost calculator
        </Link>{' '}
        does the bill and price-per-watt arithmetic, and{' '}
        <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className={link}>
          cash, loan, lease and PPA compared
        </Link>{' '}
        sets the four structures side by side.
      </p>
    </section>
  );
}
