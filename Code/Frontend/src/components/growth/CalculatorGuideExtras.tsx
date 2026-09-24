import Link from 'next/link';
import type { Source } from './DecisionPage';
import { FaqBlock } from '@/components/trust/FaqBlock';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';

// =============================================================================
// CalculatorGuideExtras — explanatory content added 2026-09-23 to
// /tools/solar-panel-calculator (topical-authority wave, agent costfin).
//
// Content and intent only. The calculator itself (SolarCalculator.tsx, the
// savings engine, calculator-context and every trackEvent call) is untouched.
// These sections explain each input and result, answer the "rebate calculator"
// and "solar estimate" searches honestly, and give price-per-watt context from
// Berkeley Lab's 2026 data update. Figures fetched 2026-09-23.
// =============================================================================

const link = 'text-primary underline underline-offset-2';

const LBNL_2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const PGE_CALC = 'https://www.pge.com/en/clean-energy/clean-energy-calculator.html';
const PGE_SOLAR_BILL =
  'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html';
const CPUC_DISCLOSURE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide/cslb-disclosure-documents';
const IRS_25D = 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit';
const SGIP_TRACKER = 'https://www.selfgenca.com/home/program_metrics/';

export const calculatorExtraSources: Source[] = [
  {
    label:
      'Lawrence Berkeley National Laboratory: U.S. Distributed Solar and Storage 2026 Data Update (August 2026)',
    url: LBNL_2026,
  },
  { label: 'CPUC: CSLB solar disclosure documents (total cost and one-year bill savings estimate)', url: CPUC_DISCLOSURE },
  { label: 'PG&E: Clean Energy Calculator', url: PGE_CALC },
  { label: 'PG&E: how solar customers are billed (Base Services Charge)', url: PGE_SOLAR_BILL },
  { label: 'IRS: Residential Clean Energy Credit', url: IRS_25D },
  { label: 'SGIP program tracker', url: SGIP_TRACKER },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'How much does solar cost in California?',
    answer:
      'Price per watt times system size, before any incentive. Berkeley Lab’s 2026 data update found median prices among the 100 largest U.S. residential installers ranging from $2.4 to $6.3 per watt, with roughly 60% below $4 per watt. Enter your quote’s cash price and size above to see where it falls, and see the California cost guide for the state median.',
  },
  {
    question: 'Is there a California solar rebate calculator?',
    answer:
      'There is little left to calculate for most homes. The federal homeowner credit is not available for systems placed in service after December 31, 2025, and the state’s SGIP battery incentives were mostly closed on September 23, 2026. If you hold a written rebate reservation, subtract it from the cash price before you enter it.',
  },
  {
    question: 'How accurate is an online solar calculator?',
    answer:
      'Only as accurate as its inputs. This one does arithmetic on the numbers you enter and does not model production. For an estimate of what a roof will produce, use the installer’s monthly production model for your address; PG&E customers can also use the Clean Energy Calculator in their online account, which uses 12 months of their own usage.',
  },
  {
    question: 'What does simple payback leave out?',
    answer:
      'Financing costs, maintenance, equipment replacement, panel degradation, future rate changes and any incentive. It is the cash price divided by the first-year bill difference, so treat it as a quick screen, not a forecast.',
  },
];

export function CalculatorGuideExtras() {
  return (
    <>
      <section id="reading-results">
        <h2>What each result means</h2>
        <dl className="mt-3 space-y-4">
          <div>
            <dt className="font-semibold">Current annual electricity bill</dt>
            <dd>
              Your monthly bill times 12. Use a 12-month average, not a summer bill, if your
              bill swings by season.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Bill average per kWh</dt>
            <dd>
              Your annual bill divided by your annual usage. It includes fixed charges, so it
              runs above the energy rate on your plan. On PG&amp;E, for example, the monthly Base
              Services Charge of about $24 for most customers &ldquo;is not eligible to be offset
              by monthly generation credits&rdquo; (
              <a className={link} href={PGE_SOLAR_BILL}>
                PG&amp;E
              </a>
              ). Solar will not remove charges like that.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Solar-only price per watt</dt>
            <dd>
              The solar cash price divided by the system size in watts (DC). It is the fairest
              way to compare two quotes for different sizes. A battery is left out on purpose.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Annual bill difference</dt>
            <dd>
              Today&rsquo;s annual bill minus the annual utility bill the quote says you will
              still pay. It is not a savings figure until you subtract any loan, lease or PPA
              payment.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Simple cash payback</dt>
            <dd>
              The cash price divided by the annual bill difference, in years. It leaves out
              upkeep such as{' '}
              <Link className={link} href="/blog/replacement-solar-inverter-cost">
                replacing an inverter
              </Link>
              . A fuller method is in{' '}
              <Link className={link} href="/blog/solar-payback-period-california">
                the California solar payback period guide
              </Link>
              .
            </dd>
          </div>
        </dl>
      </section>

      <section id="where-inputs-come-from">
        <h2>Where to find each number</h2>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>Monthly bill and annual usage.</strong> Your utility bill or online account.
            Twelve months of usage is better than one.
          </li>
          <li>
            <strong>Quoted solar size, cash price and remaining bill.</strong> The state
            disclosure package. The CPUC says it includes &ldquo;the total cost of the system,
            a one-year bill savings estimate, and the three-day right to cancel (five if the
            customer is over 65 years old),&rdquo; and that it must be given to you before a
            contract is signed (
            <a className={link} href={CPUC_DISCLOSURE}>
              CPUC
            </a>
            , checked September 23, 2026). Ask for the cash price even if you plan to finance.
          </li>
          <li>
            <strong>Battery price.</strong> Only if the quote lists it separately. If the battery
            is bundled, ask for it on its own line.
          </li>
        </ul>
      </section>

      <section id="price-per-watt-context">
        <h2>Is your price per watt reasonable?</h2>
        <p>
          Compare it with what installers actually charge. Berkeley Lab&rsquo;s August 2026
          data update, which covers host-owned systems installed in 2025, found median prices
          among the 100 largest residential installers ranging from $2.4 to $6.3 per watt.
          Roughly 60% had medians below $4 per watt, almost 25% below $3, and about 10% above
          $5. Installed price there means the price before incentives, including any loan fees
          the installer passes through. Pairing solar with a battery raised the median by $2.1
          per watt of solar among cash-purchase systems (
          <a className={link} href={LBNL_2026}>
            Berkeley Lab, U.S. Distributed Solar and Storage 2026 Data Update
          </a>
          , checked September 23, 2026).
        </p>
        <p className="mt-3">
          Those are national figures. For California&rsquo;s own median and how system size
          moves the total, see{' '}
          <Link className={link} href="/solar-panels-california">
            solar panel cost and sizing in California
          </Link>
          ; for city permit fees and utilities, see the{' '}
          <Link className={link} href="/california-solar-cost-index">
            California solar cost index
          </Link>
          .
        </p>
      </section>

      <section id="rebate-calculator">
        <h2>Why there is no rebate field</h2>
        <p>
          People search for a California solar rebate calculator, but for most homes in 2026
          there is little to subtract. The IRS says the homeowner credit &ldquo;is not available
          for any property placed in service after December 31, 2025&rdquo; (
          <a className={link} href={IRS_25D}>
            IRS
          </a>
          ). The state&rsquo;s SGIP program pays toward batteries, not panels, and on September
          23, 2026 its{' '}
          <a className={link} href={SGIP_TRACKER}>
            tracker
          </a>{' '}
          showed most residential categories closed.
        </p>
        <p className="mt-3">
          If you do have a written reservation, such as a municipal battery incentive, subtract
          it from the cash price before you enter it. Do not subtract an incentive a salesperson
          has only mentioned. What remains by utility is in{' '}
          <Link className={link} href="/blog/solar-rebates-by-california-utility">
            solar rebates by California utility
          </Link>
          , and the state picture in{' '}
          <Link className={link} href="/blog/california-solar-tax-credit-2026">
            California solar incentives in 2026
          </Link>
          .
        </p>
      </section>

      <section id="solar-estimate">
        <h2>Getting a solar estimate for your roof</h2>
        <p>
          This tool checks a quote; it does not predict what your roof will produce. For that
          you need an address-specific production model. PG&amp;E customers can use PG&amp;E&rsquo;s
          Clean Energy Calculator, which uses &ldquo;your household&rsquo;s past 12 months of
          energy usage&rdquo; and shows &ldquo;product and installation costs, break even
          points, available incentives&rdquo; (
          <a className={link} href={PGE_CALC}>
            PG&amp;E
          </a>
          ). How it compares with this tool is in{' '}
          <Link className={link} href="/blog/pge-solar-calculator">
            the PG&amp;E solar calculator guide
          </Link>
          . For system size, see{' '}
          <Link className={link} href="/blog/how-big-of-a-solar-system-do-i-need-california">
            how big a solar system you need
          </Link>
          ; for how to pay, compare{' '}
          <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
            cash, loan, lease and PPA
          </Link>
          .
        </p>
      </section>

      <FaqBlock items={faqs} id="calculator-faq" heading="Solar cost calculator questions" />
    </>
  );
}
