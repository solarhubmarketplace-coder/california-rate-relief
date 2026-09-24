// 2026-09-23 new page (topical-authority wave, agent costfin). Answers
// "pg&e solar calculator": what PG&E's own tool does, how to open it, what it
// cannot tell you, and how to check a real quote. PG&E's tool is described from
// PG&E's own pages, fetched 2026-09-23; this site does not reproduce its output.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { Q2_2026_URL } from '@/data/utility-rate-tracker';

const PATH = '/blog/pge-solar-calculator';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const PGE_CALC = 'https://www.pge.com/en/clean-energy/clean-energy-calculator.html';
const PGE_ROUNDUP =
  'https://www.pge.com/en/newsroom/currents/energy-savings/articles-4009-resource-roundup-ev-savings-solar-calculators-help-customers-save.html';
const PGE_SOLAR_BILL =
  'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html';
const PGE_BATTERY_REBATE =
  'https://www.pge.com/en/outages-and-safety/outage-preparedness-and-support/general-outage-resources/generator-and-battery-rebate-program.html';
const CPUC_NEM = 'https://www.cpuc.ca.gov/NEM/';
const SGIP_TRACKER = 'https://www.selfgenca.com/home/program_metrics/';

const sources: Source[] = [
  { label: 'PG&E: Clean Energy Calculator', url: PGE_CALC },
  { label: 'PG&E Currents: EV savings and solar calculators (July 15, 2024)', url: PGE_ROUNDUP },
  { label: 'PG&E: how solar customers are billed (NEM statement, Base Services Charge, True-Up)', url: PGE_SOLAR_BILL },
  { label: 'CPUC Public Advocates Office: Q2 2026 Electric Rates Report', url: Q2_2026_URL },
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: CPUC_NEM },
  { label: 'PG&E: Generator and Battery Rebate Program', url: PGE_BATTERY_REBATE },
  { label: 'SGIP program tracker', url: SGIP_TRACKER },
];

const metaTitle = 'PG&E Solar Calculator: How to Use It and Check a Quote';
const metaDescription =
  'PG&E’s solar calculator sits in its Clean Energy Calculator and uses 12 months of your usage. What it estimates, what it can’t, and how to check a quote.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: URL,
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Does PG&E have a solar calculator?',
    answer:
      'Yes. Solar is one of the products in PG&E’s Clean Energy Calculator, which you open from your PG&E online account under the Usage and rates menu. PG&E says it is for residential customers and there is no charge to use it.',
  },
  {
    question: 'How accurate is the PG&E solar calculator?',
    answer:
      'It uses your household’s past 12 months of usage for the bill estimate, which is its strength. PG&E says its product and installation estimates come from a public U.S. Department of Energy database, so they are general prices, not a quote for your roof. Treat the result as a first estimate and check any real proposal separately.',
  },
  {
    question: 'Can the PG&E calculator tell me whether a solar quote is fair?',
    answer:
      'Not directly. It estimates costs from general data. To check a real quote, divide its cash price by the system size in watts and compare that price per watt, and compare the utility bill the quote says you will keep with the bill PG&E’s tool expects. The calculator on this site does that arithmetic without asking for contact details.',
  },
  {
    question: 'Why does my solar estimate still show a PG&E bill?',
    answer:
      'Because some charges stay. PG&E says its monthly Base Services Charge, about $24 for most customers, is not eligible to be offset by monthly generation credits, and exported solar under the Net Billing Tariff is credited at values the CPUC says are usually lower than the retail rate. PG&E settles the year in an annual True-Up statement.',
  },
];

export default function PgeSolarCalculatorPage() {
  return (
    <PublicLayout
      breadcrumbLabel="PG&E solar calculator"
      breadcrumbParent={{ label: 'Solar cost and value', href: '/solar-panels-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="PG&E solar calculator: how to use it, and how to check a real quote"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Solar cost and value"
        title="PG&E solar calculator: how to use it, and how to check a real quote"
        crumbs={[{ label: 'Solar cost and value', href: '/solar-panels-california' }]}
        crumbLabel="PG&E solar calculator"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="cost_value"
        path={PATH}
        intro={
          <>
            <p>
              PG&amp;E&rsquo;s solar calculator is part of its Clean Energy Calculator, inside
              your online account. It uses your last 12 months of usage to estimate product
              and installation costs, break-even points, available incentives and how your
              bill could change. It is a useful first estimate. It is not a quote for your
              roof, and it cannot check one.
            </p>
            <p className="mt-3">
              What solar costs to buy in California, before any calculator, is in{' '}
              <Link className={link} href="/solar-panels-california">
                California solar panel cost and sizing
              </Link>
              .
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'Where it is',
            value: 'Your PG&E account',
            note: 'Clean Energy Calculator, under the “Usage and rates” menu.',
            source: { publisher: 'PG&E', date: '2026-09-23', url: PGE_CALC },
          },
          {
            label: 'Usage it uses',
            value: 'Past 12 months',
            note: 'Your household’s own usage history.',
            source: { publisher: 'PG&E', date: '2026-09-23', url: PGE_CALC },
          },
          {
            label: 'PG&E average rate',
            value: '$0.337/kWh',
            note: 'Residential average, June 2026, excluding the California Climate Credit.',
            source: { publisher: 'CPUC Public Advocates Office', date: '2026-09-23', url: Q2_2026_URL },
          },
          {
            label: 'Base Services Charge',
            value: 'About $24/month',
            note: 'For most customers; not offset by solar generation credits.',
            source: { publisher: 'PG&E', date: '2026-09-23', url: PGE_SOLAR_BILL },
          },
        ]}
        inquiry={<SolarInquiry utility="pge" topic="PG&E solar calculator and quote check" market="CA" />}
      >
        <section>
          <h2>What PG&amp;E&rsquo;s calculator does</h2>
          <p>
            PG&amp;E describes the Clean Energy Calculator as a way to compare &ldquo;heat pump
            water heaters and HVAC systems, induction stoves, solar, battery storage, and EV
            chargers.&rdquo; It uses &ldquo;your household&rsquo;s past 12 months of energy
            usage&rdquo; and returns &ldquo;product and installation costs, break even points,
            available incentives,&rdquo; how your bill could change, and &ldquo;rate plan and
            next step recommendations&rdquo; (
            <a className={link} href={PGE_CALC}>
              PG&amp;E
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            PG&amp;E&rsquo;s own description of its solar calculator says it lets you
            &ldquo;estimate savings and explore how battery storage can provide back-up power
            and add to your savings,&rdquo; and that &ldquo;this tool is only available for
            residential customers&rdquo; (
            <a className={link} href={PGE_ROUNDUP}>
              PG&amp;E Currents, July 15, 2024
            </a>
            ).
          </p>
        </section>

        <section>
          <h2>How to open it</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Sign in to your PG&amp;E online account on a computer or phone.</li>
            <li>Open the &ldquo;Usage and rates&rdquo; menu and choose the Clean Energy Calculator.</li>
            <li>Pick solar, or solar with a battery, and review the assumptions it shows.</li>
            <li>Save or screenshot the result so you can compare it with a real proposal.</li>
          </ol>
          <p className="mt-3">
            PG&amp;E says there is no cost to use it. You need an active residential account,
            because the estimate is built from your own usage.
          </p>
        </section>

        <section>
          <h2>What the calculator cannot tell you</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>Your installer&rsquo;s price.</strong> PG&amp;E says &ldquo;product and
              installation estimates come from a publicly available U.S. Department of Energy
              database.&rdquo; That is a general price, not the price in front of you.
            </li>
            <li>
              <strong>Your roof.</strong> Shade, orientation, roof condition and panel layout
              come from a site visit and the installer&rsquo;s production model.
            </li>
            <li>
              <strong>Your contract.</strong> A lease or PPA adds a monthly payment and often an
              escalator. The comparison of those structures is in{' '}
              <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
                lease, PPA, loan or cash in California
              </Link>
              .
            </li>
            <li>
              <strong>Whether an incentive is actually open.</strong> A listed incentive is not
              a reservation. Check the program&rsquo;s own status, as below.
            </li>
          </ul>
        </section>

        <section>
          <h2>How PG&amp;E bills you after solar, and why that matters for the estimate</h2>
          <p>
            A solar estimate is really an estimate of your future PG&amp;E bill. PG&amp;E says
            that &ldquo;every month you receive a Net Energy Metering (NEM) Electric
            Statement&rdquo; tracking you toward the True-Up, and that &ldquo;after 12 months,
            your monthly net energy charges and credits are reconciled in an annual True-Up
            statement. Any remaining charges must be paid and any excess surpluses are
            typically reset to zero.&rdquo; The monthly Base Services Charge, about $24 for most
            customers from March 2026, &ldquo;is not eligible to be offset by monthly generation
            credits&rdquo; (
            <a className={link} href={PGE_SOLAR_BILL}>
              PG&amp;E
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            New PG&amp;E solar customers take service on the Net Billing Tariff, which credits
            exports at values the CPUC says are &ldquo;usually lower than the retail rate&rdquo; (
            <a className={link} href={CPUC_NEM}>
              CPUC
            </a>
            ). So the more of your solar you use at home, the more it is worth. For context,
            PG&amp;E&rsquo;s residential average rate was $0.337 per kWh in June 2026 (
            <a className={link} href={Q2_2026_URL}>
              CPUC Public Advocates Office
            </a>
            ). What the True-Up bill looks like is in{' '}
            <Link className={link} href="/solar-problems/true-up-bill-california-explained">
              the California true-up bill explained
            </Link>
            , and PG&amp;E&rsquo;s plans are in{' '}
            <Link className={link} href="/blog/pge-time-of-use-rates-2026">
              PG&amp;E time-of-use rates for 2026
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Checking a real quote against PG&amp;E&rsquo;s estimate</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>
              <strong>Price per watt.</strong> Divide the quote&rsquo;s solar-only cash price by
              the system size in watts. Compare it with the cost range in the California cost
              guide.
            </li>
            <li>
              <strong>Remaining bill.</strong> The state disclosure documents include a one-year
              bill savings estimate. Put the quote&rsquo;s remaining PG&amp;E bill next to the
              bill PG&amp;E&rsquo;s tool expects. A large gap needs an explanation.
            </li>
            <li>
              <strong>Payback.</strong> Divide the cash price by the yearly bill difference for a
              quick screen, then read what that leaves out in{' '}
              <Link className={link} href="/blog/solar-payback-period-california">
                the solar payback period in California
              </Link>
              .
            </li>
          </ol>
          <p className="mt-3">
            The{' '}
            <Link className={link} href="/tools/solar-panel-calculator">
              California solar cost calculator
            </Link>{' '}
            on this site does steps 1 to 3 with the numbers from your bill and quote, and asks
            for no contact details.
          </p>
        </section>

        <section>
          <h2>PG&amp;E incentives the calculator may list</h2>
          <p>
            PG&amp;E does not pay a rebate on rooftop solar panels. Its Generator and Battery
            Rebate Program covers portable generators and portable batteries (290 Wh to 1,000
            Wh), not home battery systems: up to $300 per account, plus up to $200 more for CARE
            or FERA customers, for customers in Tier 2 or 3 High Fire-Threat Districts, a High
            Fire Risk Area or on an Enhanced Power Safety Settings circuit. Applications are due
            within 12 months of purchase or by December 31, 2026, whichever is sooner (
            <a className={link} href={PGE_BATTERY_REBATE}>
              PG&amp;E
            </a>
            ). Home battery incentives run through SGIP, and on September 23, 2026 the{' '}
            <a className={link} href={SGIP_TRACKER}>
              SGIP tracker
            </a>{' '}
            showed most residential categories closed in PG&amp;E&rsquo;s territory. The full
            list is in{' '}
            <Link className={link} href="/blog/solar-rebates-by-california-utility">
              solar rebates by California utility
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. We
            are not affiliated with PG&amp;E, and a referral request does not produce a PG&amp;E
            estimate or approve an incentive.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
