import Link from 'next/link';
import type { Source } from './DecisionPage';
import { FaqBlock } from '@/components/trust/FaqBlock';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { Q2_2026_URL } from '@/data/utility-rate-tracker';

// =============================================================================
// FinancingHubExtras — sections added to /blog/ppa-loan-vs-solar-lease-vs-cash-california
// on 2026-09-23 (Decision 14, G03).
//
// G03 folds /blog/solar-ppa-vs-lease-california into this hub. The loser's
// unique, still-accurate content is carried here: the lease-versus-PPA
// mechanism, the minimum-energy guarantee question, the PPA price-per-kWh
// comparison (the loser ranked better on "solar ppa price per kwh california"),
// the contract term and the 10% savings-estimate cap, and the property-tax and
// resale points for third-party-owned systems. Every figure was re-fetched from
// its primary source on 2026-09-23. Figures the loser sourced only to installer
// marketing pages (Sunrun, Tesla escalator and guarantee wording) are not
// carried over: installer pages are not sources on this site.
// The 301 itself belongs to the merges agent; nothing here redirects.
// =============================================================================

const link = 'text-primary underline underline-offset-2';

const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const CPUC_NEM = 'https://www.cpuc.ca.gov/NEM/';
const BOE_FAQ =
  'https://boe.ca.gov/proptaxes/active-solar-energy-system/frequently-asked-questions.htm';
const BOE_EXCLUSION = 'https://boe.ca.gov/proptaxes/active-solar-energy-system/';
const LBNL_TPO = 'https://www.osti.gov/servlets/purl/1342946';
// 2026-09-23 Tier 2 (agent costfin): the 301'd /blog/solar-ppa-vs-lease-california
// held two more clusters, "ppa cost" and "lease solar panels california"; their
// questions are answered in the two sections added below (#ppa-cost,
// #leasing-in-california). Sources fetched 2026-09-23.
const DG_STATS = 'https://www.californiadgstats.ca.gov/charts/nem/';
const US_48E =
  'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29';
// 2026-09-23 Tier 3 (claude/t3-misc-20260923): sources for the three FAQ
// entries added below (buy or lease, cancelling a lease, PG&E on-bill loans).
const PGE_SOLAR_FINANCING =
  'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/financing-options-for-solar.html';
const IRS_25D = 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit';

/** Sources the added sections cite, appended to the hub's own list. */
export const financingHubExtraSources: Source[] = [
  {
    label:
      'CPUC Public Advocates Office: Q2 2026 Electric Rates Report (residential average rates, June 2026)',
    url: Q2_2026_URL,
  },
  {
    label: 'Board of Equalization: Active Solar Energy System Exclusion',
    url: BOE_EXCLUSION,
  },
  {
    label: 'Board of Equalization: Active Solar Energy System Exclusion FAQs',
    url: BOE_FAQ,
  },
  {
    label:
      'Berkeley Lab: Leasing Into the Sun, sales of California homes with third-party-owned solar (LBNL-1007003, January 2017)',
    url: LBNL_TPO,
  },
  {
    label:
      'California Distributed Generation Statistics (CPUC-authorized): residential ownership by type, data through May 31, 2026',
    url: DG_STATS,
  },
  {
    label: 'U.S. Code: 26 U.S.C. § 48E(i), denial of credit for solar leasing arrangements',
    url: US_48E,
  },
  {
    label: 'PG&E: financing options for solar (checked September 23, 2026)',
    url: PGE_SOLAR_FINANCING,
  },
  {
    label: 'IRS: Residential Clean Energy Credit (checked September 23, 2026)',
    url: IRS_25D,
  },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'What is the difference between a solar lease and a PPA?',
    answer:
      'Both leave the solar provider owning the system on your roof. With a lease, the CPUC says you make scheduled monthly payments for the electricity the system produces. With a PPA, you typically pay for all the power the system generates at a fixed price per kilowatt-hour. A lease payment stays the same in a low-production month; a PPA bill falls with output.',
  },
  {
    question: 'Which is cheaper in California, a solar lease or a PPA?',
    answer:
      'Neither label is cheaper by itself. The total depends on the contract price, the escalator, the term and how much the system produces on your roof. Put both offers on the same system size, the same usage history and the same utility rate plan, then compare the total of every payment plus the utility bill that remains.',
  },
  {
    question: 'What is a typical solar PPA price per kWh in California?',
    answer:
      'No state agency publishes a typical residential PPA price, so treat any "typical" figure you are shown with caution. What you can compare it with is your own utility price. The CPUC Public Advocates Office reported residential average rates of $0.337 per kWh for PG&E, $0.344 for SCE and $0.455 for SDG&E in June 2026, excluding the California Climate Credit. Those are averages across the whole residential class, not your marginal price.',
  },
  {
    question: 'Do I get a federal tax credit with a solar lease or PPA?',
    answer:
      'No. The provider owns the equipment, so any federal credit tied to it is the provider’s business tax position, not yours. The homeowner credit under Section 25D is not available for any property placed in service after December 31, 2025, so a cash or loan buyer finishing installation now does not get it either.',
  },
  {
    question: 'Will a leased or PPA system raise my property taxes?',
    answer:
      'Not under the current exclusion. The Board of Equalization says a qualifying system is excluded from new-construction assessment whether it is leased or owned, and no form or filing is required. The statute is scheduled to sunset on January 1, 2027.',
  },
  {
    question: 'Can you buy out a solar PPA or lease?',
    answer:
      'Usually, on the contract’s terms. The CPUC says that if you sell before the contract ends you will have to pay the provider the remainder of its value or transfer it to the buyer, and that buying out a lease or PPA can cost thousands of dollars. Ask for the buyout price or formula for every year in writing before you sign.',
  },
  {
    question: 'Is it better to buy or lease solar panels in California?',
    answer:
      'It depends on what you want to carry. Buying, with cash or a loan, means you own the system and its output, keep it if you sell, and pay for repairs once the warranties run out. A lease or PPA costs little or nothing up front and moves repairs to the provider, but you sign a long contract, often with a yearly escalator, that a buyer has to take over or you have to pay off. Two things no longer tilt the choice: the IRS says the homeowner credit is not available for property placed in service after December 31, 2025, and the property tax exclusion treats leased and owned systems the same. Compare both on the same system, usage and rate plan.',
  },
  {
    question: 'Can you cancel a solar lease in California?',
    answer:
      'Only inside the cancellation window: at least three business days after you receive a signed, dated copy, or five if you are 65 or older, according to the CPUC’s consumer guide. After installation, a lease or PPA usually ends by transferring it to a home buyer, paying the provider the remaining value, buying the system at a time the contract allows, or reaching the end of the term. Stopping payments does not end it. Read the early-termination and purchase-option sections of your agreement first.',
  },
  {
    question: 'Does PG&E offer on-bill financing for home solar?',
    answer:
      'Not on its solar financing page, which names buying, leasing and power purchase agreements as the most popular ways to pay and lists no PG&E loan for rooftop solar. If a salesperson says the payment will be “on your PG&E bill,” ask for the lender’s legal name and the loan agreement in writing. PACE financing is paid through the property tax bill, not the PG&E bill.',
  },
  {
    question: 'Can you lease solar panels in California?',
    answer:
      'Yes, if you own the home, but few people do now. California Distributed Generation Statistics shows leases were about 3% of residential solar projects at PG&E, SCE and SDG&E in 2025, against about 42% PPAs. Most offers without a purchase are PPAs, billed per kWh.',
  },
];

export function FinancingHubExtras() {
  return (
    <>
      <section id="lease-vs-ppa">
        <h2>Solar lease vs PPA: the one difference that changes your bill</h2>
        <p>
          In both, the solar provider owns the system on your roof. The CPUC
          describes the payment difference this way: with a lease, &ldquo;you
          will make scheduled monthly payments in exchange for all the
          electricity the system produces.&rdquo; With a PPA, &ldquo;you
          typically pay for all the power the solar system generates (at a fixed
          per-kilowatt-hour rate).&rdquo; (
          <a className={link} href={CPUC_GUIDE}>
            CPUC, California Solar Consumer Protection Guide
          </a>
          , checked September 23, 2026.)
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>PPA:</strong> you pay per kWh produced. A cloudy month or a
            shaded array means a smaller solar bill, because you are billed on
            output.
          </li>
          <li>
            <strong>Lease:</strong> you pay the scheduled amount whatever the
            system produces. A shortfall is your cost unless the contract has a
            guarantee that pays you back for it.
          </li>
        </ul>
        <p className="mt-3">
          That is why the CPUC&rsquo;s own question list asks, &ldquo;Does the
          solar provider offer a minimum energy guarantee (common with leases and
          power purchase agreements)?&rdquo; The question matters more on a lease.
          Ask whether a guarantee measures kilowatt-hours produced or only whether
          the system was running, how a shortfall is paid, and whether the
          guarantee survives if the provider sells your contract.
        </p>
        <p className="mt-3">
          Everything else people associate with either label (the rate, any
          escalator, the term, what happens at a sale) is a term of the specific
          contract, not of the word &ldquo;lease&rdquo; or &ldquo;PPA.&rdquo; If
          either one is offered with money down, see{' '}
          <Link className={link} href="/blog/prepaid-lease-solar">
            how a prepaid lease changes the payments
          </Link>{' '}
          or{' '}
          <Link className={link} href="/blog/prepaid-ppa-california-2026">
            what a prepaid PPA still leaves you owing
          </Link>
          .
        </p>
      </section>

      <section id="ppa-price-per-kwh">
        <h2>Solar PPA price per kWh in California: how to judge the rate</h2>
        <p>
          No state agency publishes a typical residential PPA price, so a
          &ldquo;typical rate&rdquo; in an ad has nothing behind it you can check.
          Judge the rate you are quoted against three things you can check.
        </p>
        <ol className="mt-3 list-decimal space-y-3 pl-5">
          <li>
            <strong>Your utility&rsquo;s price.</strong> The CPUC Public Advocates
            Office reported residential average rates of $0.337 per kWh for
            PG&amp;E, $0.344 for SCE and $0.455 for SDG&amp;E in June 2026,
            excluding the California Climate Credit (
            <a className={link} href={Q2_2026_URL}>
              Q2 2026 Electric Rates Report
            </a>
            ). An average across the whole residential class is context, not your
            price. Your time-of-use plan and usage decide what each solar kWh
            actually displaces.
          </li>
          <li>
            <strong>What happens to exported kWh.</strong> A PPA usually charges
            for all the power the system generates. On PG&amp;E, SCE and SDG&amp;E,
            systems that applied for interconnection since April 15, 2023 take
            service on the Net Billing Tariff, which credits exports at
            Avoided Cost Calculator values that the CPUC says are &ldquo;usually
            lower than the retail rate&rdquo; (
            <a className={link} href={CPUC_NEM}>
              CPUC, net energy metering and net billing
            </a>
            , checked September 24, 2026). A kWh you pay the PPA price for and then
            export can earn back less than you paid for it. Ask the provider to
            show how much of the modeled production you use at home and how much is
            exported.
          </li>
          <li>
            <strong>Where the rate goes.</strong> The CPUC says escalators are
            &ldquo;typically in the range of a 1 percent to 3 percent increase
            above the rate you paid in the previous year&rdquo; and tells you to be
            cautious above that. Compounding is simple arithmetic: after 24 annual
            increases, a 1% escalator leaves the rate about 1.27 times where it
            started, 2% about 1.61 times and 3% about 2.03 times. Ask for the
            year-by-year price schedule, not the first-year rate.
          </li>
        </ol>
        <p className="mt-3">
          The comparison tool on this page takes the PPA&rsquo;s starting price,
          escalator and production, so you can see the total next to a lease,
          loan or cash offer on the same system.
        </p>
      </section>

      <section id="term-and-estimates">
        <h2>How long the contract runs, and what the savings estimate assumes</h2>
        <p>
          The CPUC says &ldquo;a typical lease contract period is 20-25
          years.&rdquo; Get a PPA&rsquo;s term in writing the same way. The term
          is how many years an escalator compounds and how many years a buyout or
          transfer question can come up.
        </p>
        <p className="mt-3">
          Savings estimates carry a separate assumption about your utility&rsquo;s
          future rates. The CPUC: &ldquo;Solar providers are allowed to use a
          maximum electricity rate escalation of 10% in any calculation, as of
          2025,&rdquo; and &ldquo;electricity bill savings estimates do not
          guarantee savings.&rdquo; A contract escalator raises what you pay the
          provider. A rate-escalation assumption raises what the estimate says you
          would have paid the utility. Keep the two apart when you read a
          proposal, and ask for the estimate rerun with a lower rate assumption.
        </p>
        <p className="mt-3">
          The CPUC also says lease, PPA and loan customers &ldquo;will also
          receive a monthly bill from a loan company or solar provider.&rdquo; The
          utility bill does not go away; it shrinks, and a second bill starts.
        </p>
      </section>

      <section id="ppa-cost">
        <h2>What a solar PPA costs in total</h2>
        <p>
          A PPA has no sticker price, because you buy electricity, not equipment. Its cost is the
          sum of every year&rsquo;s bill from the provider: that year&rsquo;s price per kWh times the
          kWh the system produces, for the whole term. The CPUC says the contract &ldquo;will specify
          the kilowatt-hour rate you pay in the first year and every year after that&rdquo; (
          <a className={link} href={CPUC_GUIDE}>
            CPUC
          </a>
          ), so you can add it up before you sign. Ask for three numbers:
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            <strong>The year-by-year price schedule,</strong> which shows the escalator in dollars
            rather than as a percentage.
          </li>
          <li>
            <strong>The estimated production for each year,</strong> and how a shortfall is handled.
          </li>
          <li>
            <strong>The total of all payments over the term,</strong> which the CPUC lists as the
            first question to ask about any lease or PPA.
          </li>
        </ol>
        <p className="mt-3">
          Then add what stays on your utility bill, and compare the total with a cash or loan price
          for the same system. If the PPA is offered prepaid, the upfront payment is that total paid
          early; see{' '}
          <Link className={link} href="/blog/prepaid-ppa-california-2026">
            what a prepaid PPA still leaves you owing
          </Link>
          . How PPA companies differ, and what to ask each one, is in{' '}
          <Link className={link} href="/blog/solar-ppa-companies">
            how to compare solar PPA companies
          </Link>
          . Ending early has its own price: the CPUC says buying out a lease or PPA &ldquo;can cost
          thousands of dollars,&rdquo; and what happens at a home sale is in{' '}
          <Link className={link} href="/blog/what-happens-to-solar-lease-when-i-sell-california">
            selling a home with a solar lease or PPA
          </Link>
          .
        </p>
      </section>

      <section id="leasing-in-california">
        <h2>Leasing solar panels in California now</h2>
        <p>
          Leases have become the exception. California Distributed Generation Statistics shows that
          of residential solar projects at PG&amp;E, SCE and SDG&amp;E with permission to operate in
          2025, about 3% were leases and about 42% PPAs; the rest were owned by the homeowner (
          <a className={link} href={DG_STATS}>
            DG Stats
          </a>
          , data through May 31, 2026). One reason to ask how a lease is priced in 2026: the 2025
          federal tax law added 26 U.S.C. § 48E(i), under which no business credit is determined for
          residential solar property &ldquo;if the taxpayer rents or leases such property to a third
          party&rdquo; (
          <a className={link} href={US_48E}>
            26 U.S.C. § 48E
          </a>
          ). What that means for a given offer is for the provider to explain.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>What a lease costs each month:</strong>{' '}
            <Link className={link} href="/blog/how-much-does-it-cost-to-lease-solar-panels-california">
              what sets a solar lease payment
            </Link>
            .
          </li>
          <li>
            <strong>Choosing a leasing company:</strong>{' '}
            <Link className={link} href="/blog/solar-leasing-company">
              how to compare solar leasing companies
            </Link>
            .
          </li>
          <li>
            <strong>The end of a lease, and getting out early:</strong>{' '}
            <Link className={link} href="/blog/rent-solar-panels-for-your-home-california">
              renting solar panels for your home
            </Link>
            , which covers renewal, buyout and removal, and{' '}
            <Link className={link} href="/blog/what-happens-if-stop-paying-solar-lease-california">
              what happens if you stop paying
            </Link>
            .
          </li>
          <li>
            <strong>Buy or lease:</strong>{' '}
            <Link className={link} href="/blog/is-it-better-to-buy-or-lease-solar-panels-california">
              the 2026 buy-or-lease decision
            </Link>
            .
          </li>
        </ul>
      </section>

      <section id="tpo-property-tax-resale">
        <h2>Property tax and resale with a leased or PPA system</h2>
        <p>
          <strong>Property tax.</strong> The Board of Equalization says a
          qualifying system &ldquo;is excluded whether it is leased or
          owned,&rdquo; and &ldquo;there is no form or filing required to receive
          the exclusion&rdquo; (
          <a className={link} href={BOE_FAQ}>
            BOE FAQs
          </a>
          ). The exclusion is &ldquo;not an exemption,&rdquo; and &ldquo;the
          statute is now scheduled to sunset on January 1, 2027&rdquo; (
          <a className={link} href={BOE_EXCLUSION}>
            BOE
          </a>
          , both checked September 23, 2026). The details are in{' '}
          <Link
            className={link}
            href="/blog/do-solar-panels-increase-property-taxes-california"
          >
            whether solar raises California property taxes
          </Link>
          .
        </p>
        <p className="mt-3">
          <strong>Resale.</strong> Berkeley Lab&rsquo;s only California study of
          homes sold with third-party-owned solar looked at 20,106 sales from 2011
          to 2013, including 113 with a lease or PPA, and &ldquo;fails to uncover
          statistically significant premiums for TPO PV homes nor for those with
          pre-paid leases as compared to non-PV homes&rdquo; (
          <a className={link} href={LBNL_TPO}>
            LBNL-1007003, January 2017
          </a>
          ). That is an absence of evidence, not proof of no effect. At a sale,
          the CPUC says you &ldquo;will have to pay the solar provider the
          remainder of the value of the lease or PPA or transfer the contract to
          the new property owner.&rdquo; See{' '}
          <Link className={link} href="/blog/does-solar-increase-home-value-california">
            what solar does to a California home&rsquo;s value
          </Link>
          .
        </p>
      </section>

      <p className="mt-10">
        Already in a lease or PPA and want out? Read{' '}
        <Link className={link} href="/blog/can-you-cancel-solar-panel-contract-before-installation-california#after-installation">
          how to get out of a solar contract in California
        </Link>
        . Still deciding whether to own? The{' '}
        <Link className={link} href="/blog/is-it-better-to-buy-or-lease-solar-panels-california">
          buy-or-lease guide
        </Link>{' '}
        works through the same choice with more detail.
      </p>

      <FaqBlock items={faqs} id="financing-faq" heading="Lease, PPA and loan questions" />
    </>
  );
}
