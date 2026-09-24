import Link from 'next/link';

// =============================================================================
// FreeSolarRealityExtras — sections added to /blog/free-solar-panels-california
// on 2026-09-23 (Decision 14, G06 "is it real").
//
// G06 folds /solar-problems/free-solar-california-is-it-real into this page. The
// loser's unique, still-accurate content is carried here: the two CPUC bill
// discount programs for households that cannot put panels on their own roof
// (DAC-GT and CSGT), SGIP's low-income storage categories with today's tracker
// status, the two-part state disclosure package (cover page since 2019,
// Supporting Information since November 1, 2025), what a provider failure means
// for a 20-to-25-year contract, and when a $0-down offer is simply financing.
// Every figure was re-fetched from its primary source on 2026-09-23.
//
// Not carried over, because they could not be verified from a primary source
// this session or break Rule 5: named-company bankruptcy dates other than the
// SEC-filed Sunnova petition, the "guaranteed 50%+ savings" third-party-owner
// description, the non-compliant-provider list status, and the CSLB bond and
// PACE cap figures in the loser's key facts.
//
// Rule 5 applies throughout: "free" and "no cost" appear only inside an
// attributed government quotation or as a description of what an ad claims.
// The 301 itself belongs to the merges agent; nothing here redirects.
// =============================================================================

const link = 'text-primary underline underline-offset-2';

export const CPUC_DAC_PAGE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/solar-in-disadvantaged-communities';
export const CPUC_DISCLOSURE_DOCS =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide/cslb-disclosure-documents';
export const SGIP_TRACKER = 'https://www.selfgenca.com/home/program_metrics/';
export const CPUC_GUIDE_PAGE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
export const SUNNOVA_8K =
  'https://www.sec.gov/Archives/edgar/data/1772695/000177269525000105/nova-20250608.htm';

/** DAC-GT and CSGT: the two bill-discount routes for homes that cannot host panels. */
export function GreenTariffDiscounts() {
  return (
    <section id="green-tariff-discounts">
      <h2>No suitable roof? Two CPUC programs cut the bill instead</h2>
      <p>
        Some households cannot put panels on the roof: renters, shaded homes, roofs near
        the end of their life. For income-qualified customers in disadvantaged
        communities, the CPUC runs two programs that deliver a bill discount rather than
        equipment. (
        <a className={link} href={CPUC_DAC_PAGE}>
          CPUC, Solar in Disadvantaged Communities
        </a>
        , checked September 23, 2026.)
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          <strong>DAC Green Tariff (DAC-GT).</strong> Lets &ldquo;income-qualified,
          residential customers in DACs who may be unable to install solar on their roof
          to benefit from utility-scale clean energy&rdquo; with &ldquo;a 20% bill
          discount.&rdquo;
        </li>
        <li>
          <strong>Community Solar Green Tariff (CSGT).</strong> Lets residential
          customers in DACs &ldquo;who may be unable to install solar on their roof to
          benefit from a local solar project and receive a 20% bill discount.&rdquo;
          Projects are organized with a local nonprofit or government sponsor.
        </li>
      </ul>
      <p className="mt-3">
        Neither puts anything on your house, and neither needs a roof, a lease or a
        loan. Ask your utility whether your address and household qualify. Renters have
        more options in{' '}
        <Link className={link} href="/blog/solar-for-renters">
          solar for renters in California
        </Link>
        .
      </p>
    </section>
  );
}

/** SGIP's low-income storage categories, with the tracker status on the check date. */
export function SgipEquityStatus() {
  return (
    <section id="sgip-equity">
      <h2>SGIP&rsquo;s low-income battery categories: check the row, not the name</h2>
      <p>
        The CPUC&rsquo;s printed consumer guide (October 2025) names the Self-Generation
        Incentive Program alongside DAC-SASH as a possible exception for qualifying
        low-income homeowners. SGIP pays toward battery storage, and its budgets open,
        waitlist and close by category and administrator.
      </p>
      <p className="mt-3">
        On September 23, 2026, the{' '}
        <a className={link} href={SGIP_TRACKER}>
          SGIP program tracker
        </a>{' '}
        showed the ratepayer-funded Residential Solar and Storage Equity category closed
        at all four administrators (PG&amp;E, SCE, SoCalGas and the Center for
        Sustainable Energy). The AB 209-funded version was on a waitlist at most
        administrators, with one AB 209 sub-category shown open at PG&amp;E and SCE.
        Equity Resiliency and Small Residential Storage were closed everywhere. A
        salesperson citing SGIP should be able to name the category and show its current
        status; the detail is in{' '}
        <Link className={link} href="/battery/sgip-battery-rebate-california">
          the SGIP battery rebate status guide
        </Link>
        .
      </p>
    </section>
  );
}

/** The two-part state disclosure package, as the CPUC describes it. */
export function DisclosurePackage() {
  return (
    <section id="disclosure-package">
      <h2>The two documents that show what a no-money-down deal really costs</h2>
      <p>
        Every California home solar sale, lease or financing contract comes with a state
        disclosure package. The CPUC says customers &ldquo;must be provided with these
        disclosure documents before a contract is signed,&rdquo; and that they include
        &ldquo;the total cost of the system, a one-year bill savings estimate, and the
        three-day right to cancel (five if the customer is over 65 years old).&rdquo;
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          <strong>Cover page: Solar Energy System Disclosure Document.</strong> In effect
          since January 1, 2019.
        </li>
        <li>
          <strong>Solar Energy System Supporting Information.</strong> In effect since
          November 1, 2025.
        </li>
      </ul>
      <p className="mt-3">
        The CPUC also says both documents &ldquo;must be submitted to a utility for a solar
        interconnection application to be considered complete&rdquo; (
        <a className={link} href={CPUC_DISCLOSURE_DOCS}>
          CPUC, CSLB disclosure documents
        </a>
        , checked September 23, 2026). If an offer is described as costing nothing, the
        cover page is where the total cost has to appear. Ask for both documents before
        you sign, and compare the total with the offer&rsquo;s headline.
      </p>
    </section>
  );
}

/** Provider failure risk over a 20-to-25-year third-party contract. */
export function ProviderFailureRisk() {
  return (
    <section id="provider-failure">
      <h2>If the lease or PPA company goes out of business</h2>
      <p>
        Most offers sold as no-cost are leases or PPAs, and the CPUC says &ldquo;a typical
        lease contract period is 20-25 years.&rdquo; It also lists this risk in plain
        words: &ldquo;Solar provider could go out of business during the contract
        period&rdquo; (
        <a className={link} href={CPUC_GUIDE_PAGE}>
          CPUC guide
        </a>
        , checked September 23, 2026).
      </p>
      <p className="mt-3">
        It has happened to a large residential provider. Sunnova Energy International and
        two affiliates filed Chapter 11 petitions on June 8, 2025, in the U.S. Bankruptcy
        Court for the Southern District of Texas, and said they planned to keep operating
        while pursuing asset sales under the court&rsquo;s supervision (
        <a className={link} href={SUNNOVA_8K}>
          Sunnova, Form 8-K, filed June 9, 2025
        </a>
        ). The company servicing your panels in year 15 may not be the one that sold them.
        Before you sign, ask what happens to repairs, any production guarantee and your
        payment terms if the provider is sold or shuts down.
      </p>
    </section>
  );
}

/** When a $0-down offer is simply honest financing. */
export function WhenZeroDownIsFair() {
  return (
    <section id="when-zero-down-is-fair">
      <h2>When a $0-down offer is simply financing, honestly sold</h2>
      <p>
        Not every no-money-down offer is a trap. A loan, lease or PPA can be a reasonable
        way to pay for solar if the paperwork is complete and you compare it on the right
        terms. Signs you are looking at honest financing:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>The disclosure cover page states the total cost, and it matches the contract.</li>
        <li>The contract names the contractor and its license number, and the license checks out.</li>
        <li>The payment schedule and any escalator are written out year by year.</li>
        <li>You were given the three-day (five-day if 65 or older) cancellation notice.</li>
        <li>Nobody described it as free, a government program or a utility program.</li>
      </ul>
      <p className="mt-3">
        Then judge it as what it is: a way to pay for equipment over time. The questions
        are total cost, rate, term and what happens if you sell. The pros and cons of that
        trade are in{' '}
        <Link className={link} href="/blog/no-upfront-cost-solar-panels">
          no-upfront-cost solar: who pays and when
        </Link>
        .
      </p>
    </section>
  );
}
