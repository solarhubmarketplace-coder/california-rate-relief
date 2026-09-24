// 2026-09-23 new page (topical-authority wave, Tier 2, agent costfin).
// Answers "pge solar program" and its cluster: does PG&E have a solar program,
// what Solar Choice and Green Saver are, whether PG&E has a free-solar or
// solar-battery program. Every program rule and status below was fetched from
// PG&E, the CPUC or the SGIP tracker on 2026-09-23. The Solar Billing Plan is
// summarized only; its full treatment belongs to the billing guides.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const PATH = '/blog/pge-solar-program';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const S = {
  pgeIncentives: 'https://www.pge.com/en/clean-energy/solar/solar-incentives-and-programs.html',
  pgeSbp: 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html',
  pgeSolarBill: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html',
  pgeGreenSaver: 'https://www.pge.com/en/save-energy-and-money/energy-saving-programs/green-saver-program.html',
  pgeSolarChoice: 'https://www.pge.com/en/clean-energy/solar/community-renewable-programs.html',
  pgeGenBattery:
    'https://www.pge.com/en/outages-and-safety/outage-preparedness-and-support/general-outage-resources/generator-and-battery-rebate-program.html',
  cpucNem: 'https://www.cpuc.ca.gov/NEM/',
  cpucDac:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/solar-in-disadvantaged-communities',
  cpucGuide:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  sgipTracker: 'https://www.selfgenca.com/home/program_metrics/',
  // 2026-09-23 Tier 3 (claude/t3-misc-20260923): sources for the added FAQs.
  pgeCalc: 'https://www.pge.com/en/clean-energy/clean-energy-calculator.html',
  pgeFinancing:
    'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/financing-options-for-solar.html',
  pgeAssistance: 'https://www.pge.com/en/account/billing-and-assistance/financial-assistance.html',
} as const;

const sources: Source[] = [
  { label: 'PG&E: Clean energy incentives and programs (SOMAH, DAC-SASH, SGIP)', url: S.pgeIncentives },
  { label: 'PG&E: Solar Billing Plan', url: S.pgeSbp },
  { label: 'PG&E: Understand your solar bill (Base Services Charge)', url: S.pgeSolarBill },
  { label: 'PG&E: Green Saver program', url: S.pgeGreenSaver },
  { label: 'PG&E: Community renewable programs (Solar Choice)', url: S.pgeSolarChoice },
  { label: 'PG&E: Generator and Battery Rebate Program', url: S.pgeGenBattery },
  { label: 'CPUC: Net energy metering and the Net Billing Tariff', url: S.cpucNem },
  { label: 'CPUC: Solar in Disadvantaged Communities (DAC-SASH, DAC-GT, CSGT)', url: S.cpucDac },
  { label: 'CPUC: California Solar Consumer Protection Guide', url: S.cpucGuide },
  { label: 'SGIP program tracker (category status by administrator)', url: S.sgipTracker },
  { label: 'PG&E: Clean Energy Calculator', url: S.pgeCalc },
  { label: 'PG&E: Financing options for solar (estimate link)', url: S.pgeFinancing },
  { label: 'PG&E: Financial assistance programs', url: S.pgeAssistance },
];

const metaTitle = 'PG&E Solar Programs in 2026: What Is Open and What Is Not';
const metaDescription =
  'PG&E does not pay for rooftop panels. Its solar programs: Solar Billing Plan, Green Saver (full), Solar Choice (on hold), DAC-SASH, SOMAH and SGIP.';

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
    question: 'Does PG&E have a solar program?',
    answer:
      'Several, but none of them is PG&E paying for panels on your roof. PG&E bills solar customers on the Solar Billing Plan, runs two community solar options for customers without panels (Green Saver, which is at capacity, and Solar Choice, whose enrollment is on hold), and lists three state incentive programs on its incentives page: SOMAH, DAC-SASH and SGIP.',
  },
  {
    question: 'What is the PG&E Solar Choice program?',
    answer:
      'A way to buy solar power to match 50% or 100% of your use without panels, with the charges and credits as separate lines on your PG&E bill. PG&E says it may raise or lower your bill depending on your rate and PCIA vintage. Enrollment is on hold under CPUC Decision 21-12-036, and new applicants go on a waitlist. Customers of a community choice aggregator and customers on net metering are not eligible.',
  },
  {
    question: 'Does PG&E have a free solar program?',
    answer:
      'No. PG&E does not install solar. The no-cost program for PG&E customers is DAC-SASH, run by GRID Alternatives for income-qualified homeowners in disadvantaged communities who are eligible for CARE or FERA. The CPUC tells shoppers to beware of a provider who says solar is free, because it is not.',
  },
  {
    question: 'Does PG&E have a solar battery program?',
    answer:
      'For home batteries, the state money is SGIP, which PG&E administers in its territory; most residential categories were closed or waitlisted on September 23, 2026. PG&E’s Generator and Battery Rebate is different: up to $300 toward a portable generator or a 290 to 1,000 Wh portable battery for customers in high fire-risk areas, plus up to $200 more for CARE or FERA customers.',
  },
  // 2026-09-23 Tier 3 (claude/t3-misc-20260923): three small PG&E questions.
  {
    question: 'Does PG&E have a solar estimator?',
    answer:
      'Yes, inside your account. PG&E’s Clean Energy Calculator uses your household’s past 12 months of energy usage to estimate product and installation costs, break-even points, available incentives and how your bill could change, for solar, battery storage and EV chargers among other upgrades. You need a PG&E online account; it is under the Usage and rates menu. Treat its result as a check on a quote, not a quote.',
  },
  {
    question: 'Does PG&E own or rent rooftop solar on homes?',
    answer:
      'Not through any program on its solar pages. PG&E’s incentives page lists SOMAH, DAC-SASH and SGIP, all run under state rules, and its programs for customers without panels, Green Saver and Solar Choice, use solar built elsewhere. An offer described as a PG&E-owned system on your roof deserves a written explanation of who will own it.',
  },
  {
    question: 'What PG&E programs help with the electric bill?',
    answer:
      'PG&E lists CARE (35% or more off electricity for income-qualified households), FERA (18%), Medical Baseline, and help with past-due bills: REACH, up to $800 if you have a disconnection notice; LIHEAP, up to $1,000; Match My Payment, up to $1,000; and the Arrearage Management Plan, up to $8,000 in debt forgiveness. It also offers payment arrangements, Budget Billing and Energy Savings Assistance home upgrades. None of these depends on having solar.',
  },
  {
    question: 'Can I keep my PG&E bill discounts if I go solar?',
    answer:
      'PG&E’s CARE rules are about your income, your account and your usage; having solar is not on the list. Two things change. A discounted rate makes each kWh your panels replace worth less, so ask for any solar estimate to use your CARE or FERA rate. And Green Saver and Solar Choice exclude customers on a net metering schedule.',
  },
];

export default function PgeSolarProgramPage() {
  return (
    <PublicLayout
      breadcrumbLabel="PG&E solar programs"
      breadcrumbParent={{ label: 'Solar incentives', href: '/blog/california-solar-tax-credit-2026' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="PG&E solar programs in 2026: what PG&E offers and what is closed"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Utility programs"
        title="PG&E solar programs in 2026: what PG&E offers and what is closed"
        crumbs={[{ label: 'Solar incentives', href: '/blog/california-solar-tax-credit-2026' }]}
        crumbLabel="PG&E solar programs"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="incentives"
        path={PATH}
        intro={
          <>
            <p>
              PG&amp;E does not sell, install or pay for rooftop solar. Its solar programs are about
              billing and access: the Solar Billing Plan for homes with their own panels, Green
              Saver and Solar Choice for customers without panels, and three state programs PG&amp;E
              lists as incentives: SOMAH, DAC-SASH and SGIP. On September 23, 2026, both community
              solar options were full or on hold.
            </p>
            <p className="mt-3">
              The table below shows who each program is for and where it stood. The full list of
              state programs is in{' '}
              <Link className={link} href="/blog/california-solar-tax-credit-2026">
                California solar incentives in 2026
              </Link>
              .
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'PG&E rebate on rooftop panels',
            value: 'None',
            note: 'Its incentives page lists SOMAH, DAC-SASH and SGIP.',
            source: { publisher: 'PG&E', date: UPDATED, url: S.pgeIncentives },
          },
          {
            label: 'Green Saver discount',
            value: '20%',
            note: 'On the electric bill; program at capacity, auto-enrollment only.',
            source: { publisher: 'PG&E', date: UPDATED, url: S.pgeGreenSaver },
          },
          {
            label: 'Solar Choice',
            value: 'On hold',
            note: 'CPUC Decision 21-12-036; new applicants are waitlisted.',
            source: { publisher: 'PG&E', date: UPDATED, url: S.pgeSolarChoice },
          },
          {
            label: 'Portable battery rebate',
            value: 'Up to $300',
            note: 'High fire-risk areas; up to $200 more on CARE or FERA; apply by Dec 31, 2026.',
            source: { publisher: 'PG&E', date: UPDATED, url: S.pgeGenBattery },
          },
        ]}
        inquiry={<SolarInquiry utility="pge" topic="PG&E solar programs" market="CA" />}
      >
        <section>
          <h2>Every PG&amp;E solar program, and its status</h2>
          <p>
            PG&amp;E&rsquo;s solar programs fall into three groups. If you have panels, the Solar
            Billing Plan decides how you are billed. If you cannot install panels, Green Saver and
            Solar Choice sell you solar power through your bill, but one is full and the other is on
            hold. The programs that pay money are state programs PG&amp;E lists or administers.
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-4 text-left font-semibold">
                PG&amp;E solar programs as of September 23, 2026
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Program</th>
                  <th className="p-3">Who it is for</th>
                  <th className="p-3">What it does</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Solar Billing Plan</th>
                  <td className="p-3 align-top">Customers with their own solar, interconnected after April 14, 2023</td>
                  <td className="p-3 align-top">Monthly statements, an annual True-Up, and export credits valued by hour</td>
                  <td className="p-3 align-top">The standard for new systems</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Green Saver</th>
                  <td className="p-3 align-top">CARE- or FERA-eligible households in disadvantaged or tribal communities</td>
                  <td className="p-3 align-top">20% off the electric bill, matched with 100% solar</td>
                  <td className="p-3 align-top">At capacity; auto-enrollment as space opens</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Solar Choice</th>
                  <td className="p-3 align-top">PG&amp;E generation customers, not CCA or net metering</td>
                  <td className="p-3 align-top">Buy solar to match 50% or 100% of your use</td>
                  <td className="p-3 align-top">Enrollment on hold; waitlist</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">DAC-SASH</th>
                  <td className="p-3 align-top">Income-qualified homeowners in disadvantaged communities</td>
                  <td className="p-3 align-top">Rooftop solar at no cost, through GRID Alternatives</td>
                  <td className="p-3 align-top">Apply through GRID Alternatives</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">SOMAH</th>
                  <td className="p-3 align-top">Owners of multifamily affordable housing</td>
                  <td className="p-3 align-top">Incentives for solar on the building</td>
                  <td className="p-3 align-top">The owner applies</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">SGIP</th>
                  <td className="p-3 align-top">Battery storage, by budget category</td>
                  <td className="p-3 align-top">State incentive PG&amp;E administers in its territory</td>
                  <td className="p-3 align-top">Most residential categories closed or waitlisted</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Generator and Battery Rebate</th>
                  <td className="p-3 align-top">Customers in high fire-risk areas</td>
                  <td className="p-3 align-top">Up to $300 for a portable generator or portable battery</td>
                  <td className="p-3 align-top">Apply within 12 months of purchase or by December 31, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Sources, all checked September 23, 2026:{' '}
            <a className={link} href={S.pgeIncentives}>PG&amp;E incentives page</a>,{' '}
            <a className={link} href={S.pgeSbp}>Solar Billing Plan</a>,{' '}
            <a className={link} href={S.pgeGreenSaver}>Green Saver</a>,{' '}
            <a className={link} href={S.pgeSolarChoice}>Solar Choice</a>,{' '}
            <a className={link} href={S.pgeGenBattery}>Generator and Battery Rebate</a>,{' '}
            <a className={link} href={S.cpucDac}>CPUC</a> and the{' '}
            <a className={link} href={S.sgipTracker}>SGIP tracker</a>.
          </p>
        </section>

        <section>
          <h2>Does PG&amp;E pay for solar panels?</h2>
          <p>
            No. PG&amp;E&rsquo;s own page of clean energy incentives lists three programs, all run
            under state rules: Solar on Multifamily Affordable Housing (SOMAH), the Disadvantaged
            Communities Single-Family Affordable Solar Homes program (DAC-SASH) and the
            Self-Generation Incentive Program (SGIP). It sends everyone else to the national
            DSIRE database (
            <a className={link} href={S.pgeIncentives}>
              PG&amp;E
            </a>
            , checked September 23, 2026). If a salesperson tells you a system comes with a
            &ldquo;PG&amp;E rebate,&rdquo; ask which of those three programs it is and ask for the
            reservation in writing.
          </p>
          <p className="mt-3">
            PG&amp;E does give account holders a calculator that estimates cost and payback from
            your own usage. How to read it is in{' '}
            <Link className={link} href="/blog/pge-solar-calculator">
              the PG&amp;E solar calculator guide
            </Link>
            . If the bill itself is the problem, PG&amp;E&rsquo;s assistance programs are in{' '}
            <Link className={link} href="/blog/help-with-pge-bill">
              help paying your PG&amp;E bill
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>If you have solar: the Solar Billing Plan</h2>
          <p>
            New PG&amp;E solar customers are billed on the Solar Billing Plan, the utility&rsquo;s
            name for the CPUC&rsquo;s Net Billing Tariff. PG&amp;E says customers who submitted their
            interconnection application after April 14, 2023 are on it, that residential customers
            are automatically enrolled in the Electric Home time-of-use rate plan, and that you get
            monthly statements plus an annual True-Up (
            <a className={link} href={S.pgeSbp}>
              PG&amp;E
            </a>
            ). The CPUC says export credits are &ldquo;usually lower than the retail rate,&rdquo; and
            that residential PG&amp;E and SCE customers who apply to interconnect before the end of
            2027 get slightly higher export credits for nine years (
            <a className={link} href={S.cpucNem}>
              CPUC
            </a>
            ). PG&amp;E calls these Energy Export Bonus Credits and says the credit value is set
            when your system receives permission to operate. How the monthly statements and the
            True-Up fit together is in{' '}
            <Link className={link} href="/blog/pge-solar-billing-plan">
              how the Solar Billing Plan bills you
            </Link>
            .
          </p>
          <p className="mt-3">
            One charge solar cannot cancel: PG&amp;E&rsquo;s monthly Base Services Charge,
            about $24 for most customers from March 2026, &ldquo;is not eligible to be offset by
            monthly generation credits&rdquo; (
            <a className={link} href={S.pgeSolarBill}>
              PG&amp;E
            </a>
            ). What the net metering lines on a PG&amp;E bill mean is in{' '}
            <Link className={link} href="/blog/nem-pge">
              NEM charges on a PG&amp;E bill
            </Link>
            , and the difference between the old and new rules is in{' '}
            <Link className={link} href="/blog/net-billing-vs-net-metering-california">
              net billing vs. net metering
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>If you cannot put panels on your roof: Green Saver and Solar Choice</h2>
          <h3>Green Saver (20% off, at capacity)</h3>
          <p>
            Green Saver is PG&amp;E&rsquo;s community solar discount for income-qualified customers
            in disadvantaged communities, the same 20% the CPUC describes for its DAC Green Tariff.
            PG&amp;E says eligible residential customers get &ldquo;a 20% discount on electricity
            bills,&rdquo; applied on top of any CARE or FERA discount. To qualify you
            must live in a disadvantaged community as defined by CalEnviroScreen or within a tribal
            community, be eligible for or enrolled in CARE or FERA, and buy your electricity from
            PG&amp;E, not a community choice aggregator or Direct Access provider. Customers on any
            net metering schedule or on master-meter rates cannot join.
          </p>
          <p className="mt-3">
            The catch is capacity. PG&amp;E says the program &ldquo;is currently at
            capacity&rdquo; and that, as directed by the CPUC, it auto-enrolls eligible customers as
            space opens. There is no contract and no fee to leave, but you cannot re-enroll for a
            year after you leave (
            <a className={link} href={S.pgeGreenSaver}>
              PG&amp;E
            </a>
            , checked September 23, 2026).
          </p>
          <h3>Solar Choice (on hold)</h3>
          <p>
            Solar Choice lets PG&amp;E generation customers buy solar power to match 50% or 100% of
            their use, with the charges and credits listed separately on the bill. PG&amp;E says
            participation &ldquo;may result in either a bill premium or discount depending on a
            customer&rsquo;s rate schedule and PCIA vintage.&rdquo; Enrollment &ldquo;is on hold per
            California Public Utility Commission directive in Decision 21-12-036,&rdquo; and anyone
            who tries to enroll goes on a waitlist. Community choice customers and net metering
            customers are not eligible (
            <a className={link} href={S.pgeSolarChoice}>
              PG&amp;E
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            If your power comes from a community choice aggregator, neither program is open to you;
            ask the aggregator what it offers. Renters&rsquo; options across utilities are in{' '}
            <Link className={link} href="/blog/solar-for-renters">
              solar for renters in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Income-qualified homeowners: DAC-SASH</h2>
          <p>
            The CPUC says DAC-SASH &ldquo;enables income-qualified homeowners in DACs to receive
            no-cost rooftop solar installations.&rdquo; Eligible customers are single-family
            homeowners in disadvantaged communities who &ldquo;must be eligible for CARE or
            FERA,&rdquo; or who live in San Joaquin Valley pilot communities. The program pays
            &ldquo;$3/watt incentives&rdquo; and has a budget of $10 million a year from 2019 to
            2030. GRID Alternatives administers it statewide, and you apply through GRID (
            <a className={link} href={S.cpucDac}>
              CPUC
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            Whether your household qualifies for CARE or FERA, and how much those discounts take off,
            is in{' '}
            <Link className={link} href="/blog/income-qualified-bill-discount-pge">
              PG&amp;E CARE and FERA discounts and income limits
            </Link>
            . What &ldquo;free solar&rdquo; offers usually are is in{' '}
            <Link className={link} href="/blog/free-solar-panels-california">
              whether free solar panels are real in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Batteries: SGIP, not the PG&amp;E portable battery rebate</h2>
          <p>
            Two PG&amp;E-branded battery programs are easy to confuse. SGIP is the state incentive
            for home battery storage, and PG&amp;E administers it in its territory. On September
            23, 2026 the SGIP tracker showed most residential categories closed or on a waitlist (
            <a className={link} href={S.sgipTracker}>
              SGIP tracker
            </a>
            ). The category-by-category status is in{' '}
            <Link className={link} href="/battery/sgip-battery-rebate-california">
              the SGIP battery rebate guide
            </Link>
            .
          </p>
          <p className="mt-3">
            PG&amp;E&rsquo;s Generator and Battery Rebate Program is for portable equipment, not a
            home battery wired to solar. It pays &ldquo;up to $300 per qualified customer
            account,&rdquo; plus &ldquo;up to an additional $200&rdquo; for CARE or FERA customers,
            toward a qualifying portable generator or a portable battery of 290 to 1,000 Wh. Your
            address must be in a Tier 2 or 3 High Fire-Threat District, a High Fire Risk Area, or on
            an Enhanced Power Safety Settings circuit, and applications are due within 12 months of
            purchase or by December 31, 2026, whichever is sooner (
            <a className={link} href={S.pgeGenBattery}>
              PG&amp;E
            </a>
            ). PG&amp;E&rsquo;s other battery money, including its rebate for customers with repeated
            safety outages, is covered in{' '}
            <Link className={link} href="/battery/pge-solar-battery-rebate">
              PG&amp;E solar battery rebates in 2026
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Offers that use PG&amp;E&rsquo;s name</h2>
          <p>
            Because PG&amp;E does not sell solar, a solar offer is a contract with a private company,
            whatever the flyer says. The CPUC&rsquo;s consumer guide lists &ldquo;You can get free
            solar energy at no cost to you&rdquo; and &ldquo;You will never pay an electricity bill
            ever again&rdquo; as false claims to watch for, and says an honest salesperson
            &ldquo;would never rush you to sign&rdquo; (
            <a className={link} href={S.cpucGuide}>
              CPUC
            </a>
            , checked September 23, 2026). With solar on a PG&amp;E account you keep a PG&amp;E bill,
            and with a lease, PPA or loan you get a second monthly bill as well.
          </p>
          <p className="mt-3">
            The same questions apply in other utility territories; see{' '}
            <Link className={link} href="/blog/smud-solar-program">
              SMUD&rsquo;s solar programs
            </Link>{' '}
            and{' '}
            <Link className={link} href="/blog/ladwp-solar-program">
              LADWP&rsquo;s solar programs
            </Link>{' '}
            for the two largest city-owned utilities, or{' '}
            <Link className={link} href="/blog/solar-rebates-by-california-utility">
              solar rebates by California utility
            </Link>{' '}
            for the rest.
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. We are
            not PG&amp;E and do not run or decide eligibility for any program on this page; apply
            through PG&amp;E, GRID Alternatives or the SGIP administrator named above.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
