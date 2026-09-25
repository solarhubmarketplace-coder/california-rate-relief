// 2026-09-23 new page (topical-authority wave, agent costfin). CREATE_DEDICATED:
// payback-period impressions were landing on /solar-panels-california (the cost
// hub, owned by another agent); a link from that page is requested in the
// costfin manifest. No agency publishes a statewide payback figure, so this page
// gives the method, the California inputs that move it (each sourced, fetched
// 2026-09-23) and one clearly labeled arithmetic example. It promises no payback
// and no savings.
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

const PATH = '/blog/solar-payback-period-california';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const S = {
  irs: 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit',
  cpucNem: 'https://www.cpuc.ca.gov/NEM/',
  e5301: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M521/K084/521084906.pdf',
  cpucGuide:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  lbnl: 'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf',
  pgeSolarBill: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html',
  smudSsr: 'https://www.smud.org/Rate-Information/Solar-and-Storage-Rate',
  smudBattery: 'https://www.smud.org/Going-Green/Battery-storage/Homeowner',
  roseville: 'https://www.roseville.ca.gov/electric_utility/rates/roseville_solar_2_0/index.php',
  sgip: 'https://www.selfgenca.com/home/program_metrics/',
} as const;

const sources: Source[] = [
  { label: 'CPUC Resolution E-5301 (November 30, 2023), Net Billing Tariff implementation', url: S.e5301 },
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: S.cpucNem },
  { label: 'CPUC: California Solar Consumer Protection Guide', url: S.cpucGuide },
  { label: 'Lawrence Berkeley National Laboratory: U.S. Distributed Solar and Storage 2026 Data Update (August 2026)', url: S.lbnl },
  { label: 'CPUC Public Advocates Office: Q2 2026 Electric Rates Report', url: Q2_2026_URL },
  { label: 'PG&E: how solar customers are billed', url: S.pgeSolarBill },
  { label: 'IRS: Residential Clean Energy Credit', url: S.irs },
  { label: 'SMUD: Solar and Storage Rate', url: S.smudSsr },
  { label: 'SMUD: battery storage incentives for homeowners', url: S.smudBattery },
  { label: 'Roseville Electric: Roseville Solar 2.0', url: S.roseville },
  { label: 'SGIP program tracker', url: S.sgip },
];

const metaTitle = 'Solar Payback Period in California (2026): Work Out Yours';
const metaDescription =
  'How to work out solar payback in California in 2026: price per watt, self-use versus export credits, fixed charges, the ended tax credit and batteries.';

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
    question: 'What is the average solar payback period in California?',
    answer:
      'No state agency publishes one, and the CPUC says its net billing decision did not guarantee customers an exact simple payback period, given natural variation in usage and generation. Work out your own from your quote: the cash price divided by the first-year reduction in your utility bill.',
  },
  {
    question: 'How does NEM 3.0 change solar payback?',
    answer:
      'Under the Net Billing Tariff, which applies to PG&E, SCE and SDG&E customers who applied since April 15, 2023, exported solar is credited at values the CPUC says are usually lower than the retail rate. Solar you use at home is worth more than solar you export, so payback depends heavily on how much of your production you use yourself.',
  },
  {
    question: 'What is the payback period for solar plus a battery in California?',
    answer:
      'It depends on the added price and how much export the battery turns into evening use. Berkeley Lab found paired solar-plus-storage systems had median prices $2.1 per watt higher than solar alone among cash purchases in 2025. A battery incentive, where one is open, shortens payback; most SGIP residential categories were closed on September 23, 2026, while SMUD paid $300 per kWh up to $6,000 from that date.',
  },
  {
    question: 'Does the end of the federal tax credit change payback?',
    answer:
      'Yes. The 30% federal credit is not available for property placed in service after December 31, 2025, so a payback figure that subtracts it does not apply to a system installed now. Ask for any estimate to be rerun on the full cash price.',
  },
  {
    question: 'Is solar still worth it in California?',
    answer:
      'It can be, but payback is only one test. Also compare the utility bill that remains, how long you expect to stay in the home, and whether outage backup matters to you. A system that still pays back after a stress test with lower production and a lower rate assumption is a sounder bet than one that only works on the provider’s best case.',
  },
];

export default function SolarPaybackPeriodCaliforniaPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Solar payback period"
      breadcrumbParent={{ label: 'Solar cost and value', href: '/solar-panels-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar payback period in California: how to work out yours in 2026"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Solar cost and value"
        title="Solar payback period in California: how to work out yours in 2026"
        crumbs={[{ label: 'Solar cost and value', href: '/solar-panels-california' }]}
        crumbLabel="Solar payback period"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="cost_value"
        path={PATH}
        intro={
          <>
            <p>
              Solar payback is the number of years it takes for lower electric bills to repay
              what you paid for the system. In California it turns on your price, how much of
              your solar you use at home and your utility&rsquo;s export credit. No agency
              publishes a statewide figure, and the CPUC says its net billing decision
              &ldquo;did not guarantee customers an exact simple payback period.&rdquo; Here is
              how to work out yours.
            </p>
            <p className="mt-3">
              For what a system costs to begin with, see{' '}
              <Link className={link} href="/solar-panels-california">
                California solar panel cost and sizing
              </Link>
              .
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'Federal homeowner credit',
            value: 'None for new systems',
            note: 'Not available for property placed in service after December 31, 2025.',
            source: { publisher: 'IRS', date: '2026-09-23', url: S.irs },
          },
          {
            label: 'Export credits (PG&E, SCE, SDG&E)',
            value: 'Usually below the retail rate',
            note: 'Net Billing Tariff, for applications since April 15, 2023.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: S.cpucNem },
          },
          {
            label: 'Battery price premium',
            value: '+$2.1/W',
            note: 'Median, solar plus storage versus solar alone, cash purchases, 2025.',
            source: { publisher: 'Berkeley Lab', date: '2026-09-23', url: S.lbnl },
          },
          {
            label: 'SMUD export credit',
            value: '9.6¢/kWh',
            note: 'Solar and Storage Rate, effective June 1, 2026.',
            source: { publisher: 'SMUD', date: '2026-09-23', url: S.smudSsr },
          },
        ]}
        inquiry={<SolarInquiry variant="decision" topic="Solar payback period in California" market="CA" />}
      >
        <section>
          <h2>The formula, and one worked example</h2>
          <p>
            <strong>Simple payback (years) = net cash price ÷ first-year reduction in your
            utility bill.</strong>
          </p>
          <p className="mt-3">
            The net cash price is the price after any incentive you have in writing. The
            first-year bill reduction is today&rsquo;s annual bill minus the annual bill the
            quote says you will still pay. Both numbers are in the state disclosure documents,
            which include the total cost and &ldquo;a one-year bill savings estimate.&rdquo;
          </p>
          <div className="mt-4 rounded-xl border p-4">
            <p className="font-semibold">Example with round numbers, not an estimate for any home</p>
            <p className="mt-2">
              A quote with a $24,000 cash price and a $2,400 first-year bill reduction has a
              simple payback of 10 years. If the system produces 10% less than modeled and the
              bill reduction falls to $2,160, payback becomes about 11.1 years. If the price
              were $4,000 lower, payback on the original savings would be about 8.3 years.
            </p>
          </div>
          <p className="mt-3">
            Simple payback leaves out financing, maintenance, equipment replacement, panel
            degradation and future rate changes. It is a screen, not a forecast. The{' '}
            <Link className={link} href="/tools/solar-panel-calculator">
              California solar cost calculator
            </Link>{' '}
            runs this arithmetic on your bill and quote.
          </p>
        </section>

        <section>
          <h2>What moves payback in California</h2>
          <h3>1. The price you pay</h3>
          <p>
            Berkeley Lab&rsquo;s 2026 data update found median prices among the 100 largest
            residential installers ranging from $2.4 to $6.3 per watt for systems installed in
            2025, with roughly 60% below $4 per watt (
            <a className={link} href={S.lbnl}>
              Berkeley Lab
            </a>
            ). The same system at a lower price per watt pays back sooner in direct
            proportion. Get at least two quotes and compare price per watt.
          </p>
          <h3 className="mt-5">2. How much solar you use at home</h3>
          <p>
            On PG&amp;E, SCE and SDG&amp;E, systems that applied for interconnection since April
            15, 2023 take service on the Net Billing Tariff. Exports are credited at Avoided
            Cost Calculator values the CPUC says are &ldquo;usually lower than the retail
            rate&rdquo; (
            <a className={link} href={S.cpucNem}>
              CPUC
            </a>
            ). A kWh you use at home saves what you would have paid for it; a kWh you export
            earns less. Ask the proposal for the share of production it assumes you use
            yourself. City-owned utilities set their own credit: SMUD pays 9.6 cents per kWh
            for exports from June 1, 2026 (
            <a className={link} href={S.smudSsr}>
              SMUD
            </a>
            ), and Roseville Electric $0.0691 per kWh for systems interconnected since October
            1, 2018 (
            <a className={link} href={S.roseville}>
              Roseville
            </a>
            ).
          </p>
          <h3 className="mt-5">3. Your utility&rsquo;s rates</h3>
          <p>
            The higher your rate, the more each self-used kWh saves. The CPUC Public Advocates
            Office reported residential average rates of $0.337 per kWh for PG&amp;E, $0.344 for
            SCE and $0.455 for SDG&amp;E in June 2026 (
            <a className={link} href={Q2_2026_URL}>
              Q2 2026 report
            </a>
            ). Your own time-of-use plan matters more than the average; see{' '}
            <Link className={link} href="/blog/pge-vs-sce-vs-sdge-rates-compared">
              PG&amp;E, SCE and SDG&amp;E rates compared
            </Link>
            .
          </p>
          <h3 className="mt-5">4. Charges solar cannot remove</h3>
          <p>
            PG&amp;E&rsquo;s monthly Base Services Charge, about $24 for most customers from March
            2026, &ldquo;is not eligible to be offset by monthly generation credits&rdquo; (
            <a className={link} href={S.pgeSolarBill}>
              PG&amp;E
            </a>
            ). A savings estimate that zeroes your bill has left something out.
          </p>
          <h3 className="mt-5">5. Incentives that are gone or closed</h3>
          <p>
            Older payback figures often subtracted a 30% federal credit. The IRS says the credit
            &ldquo;is not available for any property placed in service after December 31,
            2025&rdquo; (
            <a className={link} href={S.irs}>
              IRS
            </a>
            ). For a system installed now, rerun any estimate on the full cash price. What still
            exists is in{' '}
            <Link className={link} href="/blog/california-solar-tax-credit-2026">
              California solar incentives in 2026
            </Link>
            .
          </p>
          <h3 className="mt-5">6. The rate-increase assumption</h3>
          <p>
            Many estimates assume utility rates will rise, which makes savings grow each year.
            The CPUC says &ldquo;solar providers are allowed to use a maximum electricity rate
            escalation of 10% in any calculation, as of 2025,&rdquo; and that &ldquo;electricity
            bill savings estimates do not guarantee savings&rdquo; (
            <a className={link} href={S.cpucGuide}>
              CPUC
            </a>
            ). Ask which rate is used, and for the payback at a lower one.
          </p>
        </section>

        <section>
          <h2>Payback with a battery</h2>
          <p>
            A battery adds cost and changes what your solar is worth. Among cash-purchase systems
            installed in 2025, Berkeley Lab found median prices $2.1 per watt higher for solar
            paired with storage than for solar alone (
            <a className={link} href={S.lbnl}>
              Berkeley Lab
            </a>
            ). Under net billing, the battery&rsquo;s job is to hold daytime solar for evening
            use instead of exporting it for a lower credit. Whether that repays the extra cost
            depends on your evening use and your rate plan.
          </p>
          <p className="mt-3">
            Incentives can shorten it. On September 23, 2026 the{' '}
            <a className={link} href={S.sgip}>
              SGIP tracker
            </a>{' '}
            showed most residential categories closed. SMUD&rsquo;s battery incentive was $300 per
            kWh, up to $6,000 per household, for projects submitted from that date (
            <a className={link} href={S.smudBattery}>
              SMUD
            </a>
            ). The detailed math is in{' '}
            <Link className={link} href="/battery/battery-payback-nem-3-california">
              battery payback under NEM 3.0
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Payback when you do not pay cash</h2>
          <p>
            With a loan, add the interest and fees to the price before you divide. With a lease or
            PPA there is no upfront price to pay back; the question becomes whether the solar
            payment plus the remaining utility bill is lower than the bill you have now, every
            year of the contract, after the escalator. The CPUC says escalators are
            &ldquo;typically in the range of a 1 percent to 3 percent increase above the rate you
            paid in the previous year.&rdquo; See{' '}
            <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
              lease, PPA, loan and cash compared
            </Link>{' '}
            and{' '}
            <Link className={link} href="/blog/no-upfront-cost-solar-panels">
              what no-upfront-cost solar costs over the contract
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Stress-test a quote&rsquo;s payback before you sign</h2>
          <p>
            The CPUC&rsquo;s own words on payback under net billing, from Resolution E-5301:
            &ldquo;D.22-12-056 did not guarantee customers an exact simple payback period given
            the natural variation in customer usage and system generation&rdquo; (
            <a className={link} href={S.e5301}>
              CPUC, November 30, 2023
            </a>
            ). Ask the provider to rerun the proposal with:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>production 10% lower than the model;</li>
            <li>a lower rate-increase assumption than the one it used;</li>
            <li>the full cash price, with no incentive you do not have in writing;</li>
            <li>the remaining bill including fixed charges;</li>
            <li>
              the cost of any expected equipment replacement within the payback period, such as{' '}
              <Link className={link} href="/blog/replacement-solar-inverter-cost">
                a replacement inverter
              </Link>
              .
            </li>
          </ul>
          <p className="mt-3">
            If payback still works, the decision is sturdier. If it only works on the best case,
            treat that as a warning. Whether solar is worth it for you overall, beyond payback,
            is in{' '}
            <Link className={link} href="/solar-panels-california#worth-it">
              is solar worth it in California
            </Link>
            , which also covers how net billing changed the answer.
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. A
            referral request does not produce a payback figure or promise savings; any estimate
            comes from the provider, in writing.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
