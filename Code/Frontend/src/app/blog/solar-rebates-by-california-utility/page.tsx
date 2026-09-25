// 2026-09-23 rewrite (topical-authority wave, agent costfin). The previous body
// carried unsourced program claims (CARE/FERA percentages without a source, a
// "retail-rate-equivalent" export credit for SMUD, Roseville and Glendale that
// the utilities' own pages do not support, and PSPS/HFTD battery tiers). Every
// figure below was fetched from the program's administrator, the CPUC or the
// utility on 2026-09-23. Glendale Water & Power is left out because its current
// terms could not be confirmed from a primary source on 2026-09-23; LADWP's own
// site refused automated retrieval, so its section states only what the CPUC
// and the SGIP tracker confirm. Prior body is in git history.
//
// 2026-09-23 Tier 3 re-check (claude/t3-misc-20260923): every program below was
// re-fetched from its source on 2026-09-23. Changes: the CPUC net billing quote
// now matches the CPUC's wording ("usually lower than the retail rate"); SGIP's
// scope and the AB 209 sub-category are stated precisely (the open sub-category
// is only for customers of publicly owned utilities); SMUD's legacy-NEM
// exceptions added; a community choice aggregator section added with Clean
// Power Alliance's Sun Storage Rebate and 3CE's battery rebate, which closed to
// new applications on March 19, 2026; Anaheim Public Utilities' battery rebate
// added. LADWP's page still refused automated retrieval (403).
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { Q2_2026_URL, RATE_TRACKER_PATH } from '@/data/utility-rate-tracker';

const PATH = '/blog/solar-rebates-by-california-utility';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const S = {
  irs: 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit',
  cpucSgip: 'https://www.cpuc.ca.gov/sgip',
  sgipTracker: 'https://www.selfgenca.com/home/program_metrics/',
  cpucDac:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/solar-in-disadvantaged-communities',
  cpucCareFera:
    'https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/family-electric-rate-assistance-program',
  cpucNem: 'https://www.cpuc.ca.gov/NEM/',
  boe: 'https://boe.ca.gov/proptaxes/active-solar-energy-system/',
  pgeBattery:
    'https://www.pge.com/en/outages-and-safety/outage-preparedness-and-support/general-outage-resources/generator-and-battery-rebate-program.html',
  pgeCalc: 'https://www.pge.com/en/clean-energy/clean-energy-calculator.html',
  pgeSolarBill: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html',
  sce: 'https://www.sce.com/clean-energy-efficiency/solar-generation-storage/solar-billing-incentives',
  sdge: 'https://www.sdge.com/solar/considering-solar',
  sdcp: 'https://sdcommunitypower.org/solar-battery-savings/',
  smudSsr: 'https://www.smud.org/Rate-Information/Solar-and-Storage-Rate',
  smudBattery: 'https://www.smud.org/Going-Green/Battery-storage/Homeowner',
  roseville: 'https://www.roseville.ca.gov/electric_utility/rates/roseville_solar_2_0/index.php',
  ladwp: 'https://www.ladwp.com/residential-services/solar-programs',
  cpa: 'https://cleanpoweralliance.org/sun-storage-rebate/',
  threeCe: 'https://3cenergy.org/rebates/residential-battery-rebate-program/',
  anaheimBattery: 'https://www.anaheim.net/5730/Battery-Storage',
} as const;

const sources: Source[] = [
  { label: 'IRS: Residential Clean Energy Credit', url: S.irs },
  { label: 'CPUC: Self-Generation Incentive Program', url: S.cpucSgip },
  { label: 'SGIP program tracker: budget category status by administrator', url: S.sgipTracker },
  { label: 'CPUC: Solar in Disadvantaged Communities (DAC-SASH, DAC-GT, CSGT)', url: S.cpucDac },
  { label: 'CPUC: CARE and FERA discounts and income guidelines', url: S.cpucCareFera },
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: S.cpucNem },
  { label: 'Board of Equalization: Active Solar Energy System Exclusion', url: S.boe },
  { label: 'CPUC Public Advocates Office: Q2 2026 Electric Rates Report', url: Q2_2026_URL },
  { label: 'PG&E: Generator and Battery Rebate Program', url: S.pgeBattery },
  { label: 'PG&E: Clean Energy Calculator', url: S.pgeCalc },
  { label: 'PG&E: how solar customers are billed', url: S.pgeSolarBill },
  { label: 'SCE: Solar billing and incentives', url: S.sce },
  { label: 'SDG&E: Considering solar (incentives and programs)', url: S.sdge },
  { label: 'San Diego Community Power: Solar Battery Savings', url: S.sdcp },
  { label: 'SMUD: Solar and Storage Rate', url: S.smudSsr },
  { label: 'SMUD: battery storage incentives for homeowners', url: S.smudBattery },
  { label: 'Roseville Electric: Roseville Solar 2.0', url: S.roseville },
  { label: 'Clean Power Alliance: Sun Storage Rebate', url: S.cpa },
  { label: 'Central Coast Community Energy: Residential Battery Rebate Program (closed March 19, 2026)', url: S.threeCe },
  { label: 'Anaheim Public Utilities: Battery Storage rebate', url: S.anaheimBattery },
];

const metaTitle = 'Solar Rebates and Incentives by California Utility (2026)';
const metaDescription =
  'Solar and battery incentives by utility and CCA: PG&E, SCE, SDG&E, SMUD, LADWP, Roseville and more. What each pays in 2026 and what has closed.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: URL,
    publishedTime: '2026-04-24T00:00:00Z',
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Does PG&E offer solar incentives?',
    answer:
      'PG&E does not pay a rebate for rooftop solar panels. It administers the state SGIP battery program for its territory, runs a Generator and Battery Rebate Program for portable equipment in high fire-risk areas (up to $300, plus up to $200 more for CARE or FERA customers), and its Clean Energy Calculator shows the incentives it finds for your account.',
  },
  {
    question: 'What is the solar rebate in California?',
    answer:
      'For most homeowners there is no rebate on solar panels in 2026. The federal credit is not available for systems placed in service after December 31, 2025. The state program that remains, SGIP, pays toward batteries by budget category, and most residential categories were closed or waitlisted on September 23, 2026. Income-qualified homeowners in disadvantaged communities can apply to DAC-SASH, and some municipal utilities and community choice aggregators, such as SMUD, San Diego Community Power and Clean Power Alliance, run their own battery incentives.',
  },
  {
    question: 'How do I find solar incentives near me?',
    answer:
      'Start with the utility named on your electric bill, not your city. Investor-owned utilities (PG&E, SCE, SDG&E) share the state programs; city-owned utilities such as SMUD, LADWP, Roseville Electric and Anaheim Public Utilities set their own. If a community choice aggregator supplies your power, check it too: San Diego Community Power and Clean Power Alliance run battery rebates, while Central Coast Community Energy closed its battery rebate to new applications on March 19, 2026.',
  },
  {
    question: 'How do I apply for a solar or battery rebate in California?',
    answer:
      'Through the program’s administrator. SGIP goes through the administrator for your territory, DAC-SASH through GRID Alternatives, CARE and FERA through your utility, and municipal programs through that utility. SMUD, for example, requires enrollment within 90 days of permission to operate. Get the reservation or approval in writing before a contract counts on it.',
  },
  {
    question: 'Is net metering a rebate?',
    answer:
      'No. It is how exported electricity is credited on your bill. On PG&E, SCE and SDG&E, systems that applied since April 15, 2023 are on the Net Billing Tariff, with export credits the CPUC says are usually lower than the retail rate. SMUD credits exports at 9.6 cents per kWh from June 1, 2026, and Roseville Electric at $0.0691 per kWh for newer systems.',
  },
];

export default function SolarRebatesByCAUtility() {
  return (
    <PublicLayout
      breadcrumbLabel="Solar rebates by utility"
      breadcrumbParent={{ label: 'California solar incentives', href: '/blog/california-solar-tax-credit-2026' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar and battery incentives near you: rebates by California utility (2026)"
        url={URL}
        datePublished="2026-04-24"
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Rebate guide · 2026"
        title="Solar and battery incentives near you: rebates by California utility (2026)"
        crumbs={[{ label: 'California solar incentives', href: '/blog/california-solar-tax-credit-2026' }]}
        crumbLabel="Solar rebates by utility"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="incentives"
        path={PATH}
        intro={
          <>
            <p>
              The solar incentives open to you depend on which utility bills you. For most
              PG&amp;E, SCE and SDG&amp;E customers there is no rebate on solar panels in 2026:
              the federal credit ended for systems installed after 2025, and most of the
              state&rsquo;s SGIP battery budgets were closed on September 23, 2026. City-owned
              utilities such as SMUD run their own programs. Find your utility below.
            </p>
            <p className="mt-3">
              Every statewide program, including the tax-credit history, is in{' '}
              <Link className={link} href="/blog/california-solar-tax-credit-2026">
                California solar incentives and the tax credit in 2026
              </Link>
              . This page goes utility by utility.
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'Federal homeowner credit',
            value: 'Ended',
            note: 'Not available for property placed in service after December 31, 2025.',
            source: { publisher: 'IRS', date: '2026-09-23', url: S.irs },
          },
          {
            label: 'SGIP residential budgets',
            value: 'Mostly closed',
            note: 'Only the AB 209 equity sub-category for publicly owned utility customers was open (through PG&E and SCE); the rest were closed or waitlisted.',
            source: { publisher: 'SGIP tracker', date: '2026-09-23', url: S.sgipTracker },
          },
          {
            label: 'SMUD battery incentive',
            value: '$300/kWh',
            note: 'Up to $6,000 per household for projects submitted on or after September 23, 2026.',
            source: { publisher: 'SMUD', date: '2026-09-23', url: S.smudBattery },
          },
          {
            label: 'CARE / FERA bill discount',
            value: '30–35% / 18%',
            note: 'On the electric bill, for income-qualified households.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: S.cpucCareFera },
          },
        ]}
        inquiry={<SolarInquiry topic="California solar rebates" />}
      >
        <section>
          <h2>First, find out who actually bills you</h2>
          <p>
            &ldquo;Near me&rdquo; means your utility, not your ZIP code. PG&amp;E, SCE and
            SDG&amp;E are investor-owned utilities regulated by the CPUC, and they share the
            state programs below. City-owned utilities such as SMUD, LADWP and Roseville
            Electric set their own solar rules. If a community choice aggregator supplies your
            generation, it may run its own program too. Your bill names both. The{' '}
            <Link className={link} href={RATE_TRACKER_PATH}>
              California utility rate tracker
            </Link>{' '}
            shows who serves which area and what each charges.
          </p>
        </section>

        <section>
          <h2>Programs that apply across PG&amp;E, SCE and SDG&amp;E</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>Federal Residential Clean Energy Credit: ended.</strong> The IRS says it
              &ldquo;is not available for any property placed in service after December 31,
              2025&rdquo; (
              <a className={link} href={S.irs}>
                IRS
              </a>
              ). That applies in every utility territory.
            </li>
            <li>
              <strong>SGIP battery incentives.</strong> The CPUC&rsquo;s Self-Generation
              Incentive Program serves customers of PG&amp;E, SCE, SoCalGas and SDG&amp;E, and
              customers of publicly owned utilities and cooperatives can apply to its
              Residential Solar and Storage Equity budget; LADWP runs its own SGIP
              administration (
              <a className={link} href={S.cpucSgip}>
                CPUC
              </a>
              ). On September 23, 2026 the{' '}
              <a className={link} href={S.sgipTracker}>
                program tracker
              </a>{' '}
              showed Small Residential Storage, Equity Resiliency and the ratepayer-funded
              Residential Solar and Storage Equity category closed at PG&amp;E, SCE, SoCalGas
              and the Center for Sustainable Energy (SDG&amp;E territory). The AB 209-funded
              equity budget was waitlisted at the Center for Sustainable Energy, SoCalGas and
              LADWP. Under PG&amp;E and SCE, its sub-category for customers of publicly owned
              utilities was open and the sub-category for everyone else was waitlisted. The
              detail is in{' '}
              <Link className={link} href="/battery/sgip-battery-rebate-california">
                the SGIP battery rebate status guide
              </Link>
              . If the battery you are pricing is a Tesla, the{' '}
              <Link className={link} href="/battery/tesla-powerwall-3-cost-california">
                Powerwall rebates, including Tesla&rsquo;s own
              </Link>
              , are listed program by program in the Powerwall 3 cost guide.
            </li>
            <li>
              <strong>DAC-SASH.</strong> The CPUC says it &ldquo;enables income-qualified
              homeowners in DACs to receive no-cost rooftop solar,&rdquo; with &ldquo;$3/watt
              incentives,&rdquo; administered by GRID Alternatives (
              <a className={link} href={S.cpucDac}>
                CPUC
              </a>
              ).
            </li>
            <li>
              <strong>DAC Green Tariff and Community Solar Green Tariff.</strong> &ldquo;A 20%
              bill discount&rdquo; for income-qualified residential customers in disadvantaged
              communities who may be unable to install solar on their roof (CPUC). See{' '}
              <Link className={link} href="/blog/solar-for-renters">
                options for renters and homes without a suitable roof
              </Link>
              .
            </li>
            <li>
              <strong>CARE and FERA.</strong> CARE gives a &ldquo;30–35% discount&rdquo; on the
              electric bill; FERA &ldquo;applies an 18% discount&rdquo; for families whose
              income slightly exceeds the CARE limits (
              <a className={link} href={S.cpucCareFera}>
                CPUC
              </a>
              ). These cut the bill; they do not pay for panels. For PG&amp;E customers, the
              income limits and enrollment rules are in{' '}
              <Link className={link} href="/blog/income-qualified-bill-discount-pge">
                how CARE and FERA work on a PG&amp;E bill
              </Link>
              .
            </li>
            <li>
              <strong>Property tax exclusion.</strong> A qualifying system does not raise your
              assessment. The Board of Equalization says the statute &ldquo;is now scheduled to
              sunset on January 1, 2027&rdquo; (
              <a className={link} href={S.boe}>
                BOE
              </a>
              ).
            </li>
          </ul>
          <p className="mt-3">
            Net billing is not a rebate. Systems that applied for interconnection since April
            15, 2023 take service on the Net Billing Tariff, which credits exports at values
            the CPUC says are &ldquo;usually lower than the retail rate,&rdquo; though they
            &ldquo;can rise above the retail rate on late summer evenings&rdquo; (
            <a className={link} href={S.cpucNem}>
              CPUC
            </a>
            ). The rules are in{' '}
            <Link className={link} href="/blog/nem-2-vs-nem-3-california">
              NEM 2.0 versus NEM 3.0
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>PG&amp;E</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>No PG&amp;E rebate on solar panels.</strong> PG&amp;E administers SGIP for
              its territory; status is by category, above. Everything else PG&amp;E offers solar
              customers, from Green Saver to DAC-SASH, is in{' '}
              <Link className={link} href="/blog/pge-solar-program">
                PG&amp;E&rsquo;s solar programs and their status
              </Link>
              .
            </li>
            <li>
              <strong>Generator and Battery Rebate Program.</strong> For portable generators and
              portable batteries (290 Wh to 1,000 Wh), not home battery systems. Customers in
              Tier 2 or 3 High Fire-Threat Districts, a High Fire Risk Area or on an Enhanced
              Power Safety Settings circuit can get &ldquo;up to $300&rdquo; per account, and
              CARE or FERA customers &ldquo;up to an additional $200.&rdquo; Applications are due
              within 12 months of purchase or by December 31, 2026, whichever is sooner (
              <a className={link} href={S.pgeBattery}>
                PG&amp;E
              </a>
              ).
            </li>
            <li>
              <strong>Clean Energy Calculator.</strong> Inside your PG&amp;E account, it uses
              &ldquo;your household&rsquo;s past 12 months of energy usage&rdquo; and shows
              &ldquo;available incentives&rdquo; alongside cost and break-even estimates (
              <a className={link} href={S.pgeCalc}>
                PG&amp;E
              </a>
              ). How to use it is in{' '}
              <Link className={link} href="/blog/pge-solar-calculator">
                the PG&amp;E solar calculator guide
              </Link>
              .
            </li>
            <li>
              <strong>What a solar bill still carries.</strong> PG&amp;E&rsquo;s monthly Base
              Services Charge, about $24 for most customers from March 2026, &ldquo;is not
              eligible to be offset by monthly generation credits&rdquo; (
              <a className={link} href={S.pgeSolarBill}>
                PG&amp;E
              </a>
              ). PG&amp;E&rsquo;s residential average rate was $0.337 per kWh in June 2026 (
              <a className={link} href={Q2_2026_URL}>
                CPUC Public Advocates Office
              </a>
              ).
            </li>
          </ul>
        </section>

        <section>
          <h2>SCE</h2>
          <p>
            SCE&rsquo;s own solar incentives page lists one rebate: SGIP, &ldquo;Rebates for
            battery storage systems.&rdquo; The rest are billing arrangements, not payments: the
            Solar Billing Plan, net energy metering for legacy customers, Virtual Net Metering
            to share credits across accounts, and the Community Renewables Program (
            <a className={link} href={S.sce}>
              SCE
            </a>
            , checked September 23, 2026). SCE&rsquo;s residential average rate was $0.344 per
            kWh on June 1, 2026 (CPUC Public Advocates Office). Plan choices are in{' '}
            <Link className={link} href="/blog/sce-time-of-use-rates-2026">
              SCE time-of-use rates for 2026
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>SDG&amp;E and San Diego</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>What SDG&amp;E lists.</strong> SGIP for storage, DAC-SASH, and the San
              Diego Solar Equity Program, which &ldquo;offers monetary assistance to
              income-qualifying, single-family homeowners in the City of San Diego to offset
              the cost of solar panel installation&rdquo; (
              <a className={link} href={S.sdge}>
                SDG&amp;E
              </a>
              , checked September 23, 2026). That SDG&amp;E page still says residential
              customers &ldquo;may qualify for a 30% federal tax credit.&rdquo; The IRS says the
              credit is not available for systems placed in service after December 31, 2025;
              go by the IRS. The same SDG&amp;E page says SGIP is &ldquo;currently offering
              Energy Storage rebates for homes&rdquo;; the tracker showed the residential
              categories in SDG&amp;E territory closed or waitlisted that day, so check the
              tracker.
            </li>
            <li>
              <strong>San Diego Community Power battery incentive.</strong> For its residential
              customers adding a solar-charged battery at a single-family home: $350 per kWh for
              a new solar-and-battery system or $250 per kWh for a battery only at market rate,
              and $500 or $350 per kWh for customers not on market rate, plus $0.10 per kWh for
              weekday dispatch. Enrollment opened September 30, 2025 (
              <a className={link} href={S.sdcp}>
                San Diego Community Power
              </a>
              , checked September 23, 2026).
            </li>
            <li>
              <strong>Rates.</strong> SDG&amp;E&rsquo;s residential average rate was $0.455 per
              kWh in June 2026, the highest of the three (CPUC Public Advocates Office). The
              plans are in{' '}
              <Link className={link} href="/blog/sdge-time-of-use-rates-2026">
                SDG&amp;E time-of-use rates
              </Link>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2>SMUD (Sacramento)</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>Export credit.</strong> Systems approved for interconnection on or after
              March 1, 2022 are on SMUD&rsquo;s Solar and Storage Rate, which credits exports at
              &ldquo;9.6¢/kWh&rdquo; effective June 1, 2026. Customers approved before March 1,
              2022 can stay on their original net metering rate through December 31, 2030,
              unless they add battery storage with incentives, modify the system or move (
              <a className={link} href={S.smudSsr}>
                SMUD
              </a>
              ).
            </li>
            <li>
              <strong>My Energy Optimizer Partner+ battery incentive.</strong> $500 per kWh, up to
              $10,000 per household, for projects submitted by September 22, 2026 and enrolled by
              December 31, 2026. From September 23, 2026 it is $300 per kWh, up to $6,000. You
              must be on the Solar and Storage Rate and enroll within 90 days of permission to
              operate; individual rental units and MED Rate customers are not eligible (
              <a className={link} href={S.smudBattery}>
                SMUD
              </a>
              , checked September 23, 2026). SolarShares, system sizing and the connection steps
              are in{' '}
              <Link className={link} href="/blog/smud-solar-program">
                the SMUD solar program guide
              </Link>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2>LADWP (Los Angeles)</h2>
          <p>
            LADWP is city-owned, so the CPUC&rsquo;s Net Billing Tariff, which covers PG&amp;E,
            SCE and SDG&amp;E, does not set its solar credits (
            <a className={link} href={S.cpucNem}>
              CPUC
            </a>
            ). LADWP is an SGIP administrator, and on September 23, 2026 the tracker showed its
            AB 209 equity budget on a waitlist. LADWP&rsquo;s own{' '}
            <a className={link} href={S.ladwp}>
              solar programs page
            </a>{' '}
            refused automated retrieval when this page was checked, so this guide does not
            restate its current incentive amounts. Check that page or call LADWP before a
            proposal counts on an LADWP incentive. A separate guide walks through{' '}
            <Link className={link} href="/blog/ladwp-solar-program">
              every LADWP solar program
            </Link>
            , from Solar Rooftops to the Feed-in Tariff. Bills are covered in{' '}
            <Link className={link} href="/blog/why-is-my-ladwp-bill-so-high">
              why LADWP bills run high
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Roseville Electric</h2>
          <p>
            Systems interconnected on or after October 1, 2018, and existing systems expanded by
            10% or more since then, are on Roseville Solar 2.0, which pays &ldquo;$0.0691 per
            kWh&rdquo; for surplus energy sent to the grid. Earlier customers keep net energy
            metering through October 1, 2028, or 20 years from interconnection, whichever is
            later (
            <a className={link} href={S.roseville}>
              City of Roseville
            </a>
            , checked September 23, 2026). The Solar 2.0 page names no solar or battery rebate;
            ask Roseville Electric about current rebates.
          </p>
        </section>

        <section>
          <h2>Community choice aggregators (CCAs)</h2>
          <p>
            If a community choice aggregator buys your electricity, PG&amp;E, SCE or SDG&amp;E
            still delivers it and still handles solar billing, but the CCA may run its own
            battery program. Three examples, each checked on its own page on September 23, 2026:
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>Clean Power Alliance.</strong> The Sun
              Storage Rebate pays $2,000 for an eligible battery, $1,250 more in Public Safety
              Power Shutoff areas, and $250 more for Medical Baseline or for CARE or FERA
              customers (not both), up to $3,500. It is &ldquo;first-come first-served&rdquo;
              with &ldquo;limited funding available,&rdquo; the installer must hold a CSLB
              license, and you can apply before or up to three months after installation (
              <a className={link} href={S.cpa}>
                Clean Power Alliance
              </a>
              ).
            </li>
            <li>
              <strong>San Diego Community Power.</strong> Its Solar Battery Savings rebate is in
              the SDG&amp;E section above.
            </li>
            <li>
              <strong>Central Coast Community Energy (3CE): closed.</strong> &ldquo;Effective
              March 19, 2026, 3CE has closed the Residential Battery Rebate Program to new
              applications.&rdquo; Applications filed before then are still processed, and 3CE
              points later battery buyers to a virtual power plant program it says launches in
              fall 2026 (
              <a className={link} href={S.threeCe}>
                3CE
              </a>
              ). Some installer and manufacturer incentive lists still showed the rebate after
              it closed.
            </li>
          </ul>
        </section>

        <section>
          <h2>Other city-owned utilities</h2>
          <p>
            Anaheim, Modesto Irrigation District, Corona and other publicly owned utilities set
            their own solar and rebate terms, and some change them mid-year. Anaheim Public
            Utilities, for example, lists a battery rebate of &ldquo;up to $3,000 per
            household&rdquo; for a UL-certified battery of at least 5 kWh, if you stay on a
            time-of-use rate and in its MyPower Savings program for at least 12 months. Its page
            does not say whether funds remain, so call before counting on it (
            <a className={link} href={S.anaheimBattery}>
              City of Anaheim
            </a>
            , checked September 23, 2026). Ask the utility for its current export credit and any
            rebate before comparing quotes. The{' '}
            <Link className={link} href={RATE_TRACKER_PATH}>
              rate tracker
            </Link>{' '}
            links each one&rsquo;s own rate schedule.
          </p>
        </section>

        <section>
          <h2>How to claim what you qualify for</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>
              <strong>Name the program and its administrator.</strong> A logo on a flyer is not
              a reservation.
            </li>
            <li>
              <strong>Check the status on the day you sign.</strong> SGIP categories and
              municipal incentives change, as SMUD&rsquo;s September 23, 2026 reduction shows.
            </li>
            <li>
              <strong>Keep incentives out of the base price.</strong> Compare the cash price
              first, and ask who pays the difference if a rebate is denied.
            </li>
            <li>
              <strong>Apply for bill help separately.</strong> CARE and FERA go through your
              utility and do not depend on solar.
            </li>
            <li>
              <strong>Check the net cost.</strong> Put the price and any confirmed incentive into
              the{' '}
              <Link className={link} href="/tools/solar-panel-calculator">
                California solar cost calculator
              </Link>
              , and see{' '}
              <Link className={link} href="/blog/solar-payback-period-california">
                how long a system takes to pay back
              </Link>
              .
            </li>
          </ol>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. We
            do not administer or decide eligibility for any program on this page, and a
            referral request does not reserve a rebate.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
