import Link from 'next/link';
import { FaqBlock } from '@/components/trust/FaqBlock';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';

// =============================================================================
// SeniorSolarExtras — added 2026-09-23 to /blog/free-solar-for-seniors-california
// (topical-authority wave, agent costfin).
//
// Improves the page for its own senior-specific intent ("solar panels for
// seniors", "solar programs for seniors", fixed-income bill help). It does NOT
// carry out the held Decision 14 G06 differentiation (no retitle, no change of
// targeting away from the generic free-solar terms). Every rule and figure was
// fetched from the CPUC or DFPI on 2026-09-23.
// =============================================================================

const link = 'text-primary underline underline-offset-2';

export const SENIOR_SRC = {
  cpucGuide:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  cpucDisclosure:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide/cslb-disclosure-documents',
  cpucMedicalBaseline:
    'https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/medical-baseline',
  cpucFera:
    'https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/family-electric-rate-assistance-program',
  dfpiPace: 'https://dfpi.ca.gov/consumers/housing/pace/',
} as const;

export const seniorExtraSources = [
  { label: 'CPUC: Solar Consumer Protection Guide overview (cancellation, escalators, contract term)', url: SENIOR_SRC.cpucGuide },
  { label: 'CPUC: CSLB solar disclosure documents', url: SENIOR_SRC.cpucDisclosure },
  { label: 'CPUC: Medical Baseline program', url: SENIOR_SRC.cpucMedicalBaseline },
  { label: 'California DFPI: PACE consumer protections', url: SENIOR_SRC.dfpiPace },
];

/** Protections that do change at 65. */
export function SeniorProtections() {
  return (
    <section id="protections-at-65">
      <h2>What does change at 65: more time to cancel</h2>
      <p>
        Age does not qualify you for a solar program, but it does lengthen your right to
        walk away from a contract. The CPUC: &ldquo;You have at least three business days
        to cancel your contract for any reason. If you are 65 years old or older, you have
        five business days&rdquo; (
        <a className={link} href={SENIOR_SRC.cpucGuide}>
          CPUC, California Solar Consumer Protection Guide
        </a>
        , checked September 23, 2026).
      </p>
      <p className="mt-3">
        The state disclosure package you must receive before signing states that right on
        its cover page. The CPUC says the documents include &ldquo;the total cost of the
        system, a one-year bill savings estimate, and the three-day right to cancel (five if
        the customer is over 65 years old)&rdquo; (
        <a className={link} href={SENIOR_SRC.cpucDisclosure}>
          CPUC
        </a>
        ). If the paperwork shows three days and you are 65 or older, ask why before you
        sign. How to send the notice is in{' '}
        <Link
          className={link}
          href="/blog/can-you-cancel-solar-panel-contract-before-installation-california"
        >
          cancelling a California solar contract
        </Link>
        .
      </p>
      <p className="mt-3">
        Before anyone starts work, check that the contractor&rsquo;s license is active in
        one of the classes the CPUC names: &ldquo;C-46 (Solar Contractor), C-10 (Electrical
        Contractor), or B (General Building Contractor).&rdquo; If a salesperson came to the
        door, see{' '}
        <Link className={link} href="/solar-problems/solar-door-to-door-sales-california">
          what a door-to-door solar rep can and cannot do
        </Link>
        .
      </p>
    </section>
  );
}

/** Bill help sized for a fixed income. */
export function FixedIncomeBillHelp() {
  return (
    <section id="fixed-income-bill-help">
      <h2>Lowering the bill on a fixed income, without solar</h2>
      <p>
        If the monthly bill is the problem, these programs work faster than any solar
        contract and have no age requirement:
      </p>
      <ul className="mt-3 list-disc space-y-3 pl-5">
        <li>
          <strong>CARE:</strong> a &ldquo;30–35% discount&rdquo; on the electric bill for
          income-qualified households.
        </li>
        <li>
          <strong>FERA:</strong> an &ldquo;18% discount on electricity bills&rdquo; for
          families whose income slightly exceeds the CARE limits, for PG&amp;E, SCE and
          SDG&amp;E customers. For June 1, 2026 to May 31, 2027 the FERA limit is $54,100 for
          a household of one or two people (
          <a className={link} href={SENIOR_SRC.cpucFera}>
            CPUC
          </a>
          , checked September 23, 2026).
        </li>
        <li>
          <strong>Medical Baseline:</strong> &ldquo;extra allowances of natural gas and
          electricity billed at your utility company&rsquo;s lowest rate&rdquo; for
          households that rely on life-support equipment or have qualifying conditions (
          <a className={link} href={SENIOR_SRC.cpucMedicalBaseline}>
            CPUC
          </a>
          ). The CPUC page lists no income or age limit; ask your utility how to apply.
        </li>
      </ul>
      <p className="mt-3">
        Ask your utility which income sources count for CARE and FERA. Then, if you still want
        solar, compare offers against the lower bill, not the old one.
      </p>
    </section>
  );
}

/** Long contracts, liens and heirs. */
export function LongContractsOnFixedIncome() {
  return (
    <section id="long-contracts">
      <h2>A 20-year contract on a fixed income: three questions</h2>
      <ol className="mt-3 list-decimal space-y-3 pl-5">
        <li>
          <strong>Will the payment rise while your income does not?</strong> The CPUC says
          escalators are &ldquo;typically in the range of a 1 percent to 3 percent increase
          above the rate you paid in the previous year.&rdquo; At 3%, the payment is about 1.8
          times the first year&rsquo;s after 20 increases. Ask for the year-by-year schedule.
        </li>
        <li>
          <strong>What happens to the contract after you?</strong> The CPUC says &ldquo;a
          typical lease contract period is 20-25 years,&rdquo; and that if the house is sold
          before a lease or PPA ends, &ldquo;you will have to pay the solar provider the
          remainder of the value of the lease or PPA or transfer the contract to the new
          property owner.&rdquo; Ask what the contract says if the home passes to your heirs
          or is sold by your estate, and get the buyout formula in writing.
        </li>
        <li>
          <strong>Is it a lien on your home?</strong> PACE financing is repaid &ldquo;through
          increased assessments in their annual property tax bills,&rdquo; and the DFPI warns
          PACE &ldquo;can also make it more difficult to sell or refinance a property because a
          lien is placed on your home until the PACE contract is paid off.&rdquo; The
          administrator must get your oral confirmation of the key terms and check your
          ability to pay (
          <a className={link} href={SENIOR_SRC.dfpiPace}>
            DFPI
          </a>
          , checked September 23, 2026).
        </li>
      </ol>
      <p className="mt-3">
        Offers that bundle a new roof with solar are covered in{' '}
        <Link className={link} href="/blog/free-roof-replacement-with-solar-panels-california">
          what a roof-and-solar bundle really costs
        </Link>
        , and the full payment comparison is in{' '}
        <Link className={link} href="/blog/free-solar-panels-california#no-money-down">
          what no-upfront-cost solar costs over the contract
        </Link>
        .
      </p>
    </section>
  );
}

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Is there a solar program just for seniors in California?',
    answer:
      'Not one based on age. The state’s rooftop program for income-qualified homeowners, DAC-SASH, depends on household income, living in a qualifying disadvantaged community and owning and living in the home. Age changes one thing: buyers 65 or older get five business days, instead of three, to cancel a home solar contract.',
  },
  {
    question: 'Are there senior discounts on solar panels?',
    answer:
      'There is no state senior discount on solar equipment. The discounts that exist are on the electric bill and depend on income or medical need, not age: CARE (30 to 35% off), FERA (18% off) and Medical Baseline (extra energy at the lowest rate).',
  },
  {
    question: 'What is the best way for a senior on a fixed income to lower the electric bill?',
    answer:
      'Check CARE, FERA and Medical Baseline with your utility first; they take effect on the bill without a contract. If you then consider solar, get the full payment schedule, check for an escalator, and ask what happens to the contract if the home is sold or passes to your heirs.',
  },
  {
    question: 'How long do I have to cancel a solar contract if I am over 65?',
    answer:
      'The CPUC says buyers 65 or older have five business days to cancel for any reason, compared with at least three for other buyers. The state disclosure documents you receive before signing must state that right.',
  },
];

export function SeniorFaq() {
  return <FaqBlock items={faqs} id="seniors-faq" heading="Solar questions from California seniors" />;
}
