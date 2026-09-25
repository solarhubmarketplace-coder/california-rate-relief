// 2026-09-23 new page (topical-authority wave, Tier 2, agent costfin).
// Answers "smud solar program" and its cluster: SMUD solar rebates, the
// Solar and Storage Rate (SMUD's net metering successor), SolarShares and the
// battery incentive. Every figure was fetched from smud.org on 2026-09-23,
// the day SMUD's battery incentive dropped; both levels are shown with dates.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { FACTS, usd } from '@/data/facts';

const PATH = '/blog/smud-solar-program';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const S = {
  smudSolar: 'https://www.smud.org/Going-Green/Solar-for-Your-Home',
  smudSsr: 'https://www.smud.org/Rate-Information/Solar-and-Storage-Rate',
  smudBattery: 'https://www.smud.org/Going-Green/Battery-storage/Homeowner',
  smudShares: 'https://www.smud.org/Going-Green/Residential-SolarShares',
  irs25d: 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit',
  cpucNem: 'https://www.cpuc.ca.gov/NEM/',
} as const;

const sources: Source[] = [
  { label: 'SMUD: Solar for your home (FAQ: rebates, sizing, interconnection, contractors)', url: S.smudSolar },
  { label: 'SMUD: Solar and Storage Rate (export rate effective June 1, 2026)', url: S.smudSsr },
  { label: 'SMUD: Battery storage for homeowners (My Energy Optimizer Partner+)', url: S.smudBattery },
  { label: 'SMUD: Residential SolarShares', url: S.smudShares },
  { label: 'IRS: Residential Clean Energy Credit', url: S.irs25d },
  { label: 'CPUC: Net energy metering and the Net Billing Tariff (PG&E, SCE, SDG&E)', url: S.cpucNem },
];

// 2026-09-24 (plan item 5.1): SMUD's export credit and battery incentive
// amounts read from src/data/facts.ts. Dates of past changes stay literal.
const exportCents = `${FACTS.smudExportRate.value}¢`;
const batt = FACTS.smudBatteryIncentive.value;
const battNow = `${usd(batt.perKwh)} per kWh, up to ${usd(batt.capPerHousehold)}`;
const battBefore = `${usd(batt.previousPerKwh)} per kWh, up to ${usd(batt.previousCap)}`;

const metaTitle = 'SMUD Solar Program 2026: Export Rate, Rebates, SolarShares';
const metaDescription =
  `SMUD has no solar panel rebate. It pays ${exportCents}/kWh for exports, cut its battery incentive to ${usd(batt.perKwh)}/kWh on Sept. 23, 2026, and runs SolarShares.`;

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
    question: 'Does SMUD offer solar rebates?',
    answer:
      'Not for solar panels. SMUD’s own answer is that it “does not offer rebates for solar installations but battery storage incentives are available.” The battery incentive is paid through its My Energy Optimizer Partner+ program.',
  },
  {
    question: 'How much does SMUD pay for excess solar?',
    answer:
      `On the Solar and Storage Rate, SMUD pays ${exportCents} per kWh for power you export and do not use or store, at any time of day or in any season, effective June 1, 2026. A credit offsets your usage charges and any remainder carries over to later bills.`,
  },
  {
    question: 'Does NEM 3.0 apply to SMUD customers?',
    answer:
      'No. NEM 3.0 is the common name for the CPUC’s Net Billing Tariff, which covers PG&E, SCE and SDG&E. SMUD says it is not governed by the CPUC and that its board sets its rates. SMUD’s own rule for newer systems is the Solar and Storage Rate; customers approved before March 1, 2022 can keep net metering through December 31, 2030.',
  },
  {
    question: 'What is the SMUD solar battery rebate now?',
    answer:
      `From September 23, 2026, SMUD’s upfront enrollment incentive is ${battNow} per household. Projects submitted for interconnection by September 22 and enrolled by December 31, 2026 keep the earlier ${battBefore}. You must be on the Solar and Storage Rate and enroll within 90 days of permission to operate.`,
  },
  {
    question: 'How does SMUD SolarShares work?',
    answer:
      'You subscribe to output from local solar farms instead of putting panels on your roof, for up to 20 years. SMUD’s table shows a monthly charge of $2.00 per kW of SolarShares in year one, falling each year to nothing in year six, and a monthly credit from year seven that grows each year. Solar and Storage Rate customers cannot join.',
  },
];

export default function SmudSolarProgramPage() {
  return (
    <PublicLayout
      breadcrumbLabel="SMUD solar programs"
      breadcrumbParent={{ label: 'Solar incentives', href: '/blog/california-solar-tax-credit-2026' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="SMUD solar programs in 2026: export rate, SolarShares and battery incentives"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Utility programs"
        title="SMUD solar programs in 2026: export rate, SolarShares and battery incentives"
        crumbs={[{ label: 'Solar incentives', href: '/blog/california-solar-tax-credit-2026' }]}
        crumbLabel="SMUD solar programs"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="incentives"
        path={PATH}
        intro={
          <>
            <p>
              SMUD does not pay a rebate on solar panels; it says so itself. What it does offer:
              the Solar and Storage Rate, which pays {exportCents} per kWh for power you export; a battery
              incentive that fell to {battNow}, on September 23, 2026; and
              SolarShares, for customers who want solar without panels on the roof. Older
              systems can stay on net metering through 2030.
            </p>
            <p className="mt-3">
              SMUD is city-owned and sets its own rules, so the PG&amp;E-area rules most solar
              articles describe do not apply in Sacramento. The statewide picture is in{' '}
              <Link className={link} href="/blog/california-solar-tax-credit-2026">
                California solar incentives in 2026
              </Link>
              .
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'Export credit',
            value: `${exportCents}/kWh`,
            note: 'Solar and Storage Rate, any hour or season, effective June 1, 2026.',
            source: { publisher: 'SMUD', date: FACTS.smudExportRate.checkedAt, url: FACTS.smudExportRate.sourceUrl },
          },
          {
            label: 'Battery incentive',
            value: `${usd(batt.perKwh)}/kWh`,
            note: `Up to ${usd(batt.capPerHousehold)}, from Sept. 23, 2026 (was ${usd(batt.previousPerKwh)}/kWh, up to ${usd(batt.previousCap)}).`,
            source: { publisher: 'SMUD', date: FACTS.smudBatteryIncentive.checkedAt, url: FACTS.smudBatteryIncentive.sourceUrl },
          },
          {
            label: 'Solar panel rebate',
            value: 'None',
            note: 'SMUD: no rebates for solar installations.',
            source: { publisher: 'SMUD', date: UPDATED, url: S.smudSolar },
          },
          {
            label: 'Legacy net metering',
            value: 'To Dec. 31, 2030',
            note: 'For systems approved before March 1, 2022.',
            source: { publisher: 'SMUD', date: UPDATED, url: S.smudSsr },
          },
        ]}
        inquiry={<SolarInquiry utility="smud" topic="SMUD solar programs" market="CA" />}
      >
        <section>
          <h2>Does SMUD offer solar rebates?</h2>
          <p>
            No. In SMUD&rsquo;s own words, it &ldquo;does not offer rebates for solar installations
            but battery storage incentives are available.&rdquo; It also says it does not sell
            solar systems (
            <a className={link} href={S.smudSolar}>
              SMUD
            </a>
            , checked September 23, 2026). So any SMUD money in a solar proposal should be a battery
            incentive, and it should be named as My Energy Optimizer Partner+.
          </p>
          <p className="mt-3">
            SMUD&rsquo;s solar estimator mentions &ldquo;available tax credits and rebates,&rdquo; and
            its FAQ tells you to check with a tax consultant. The federal homeowner credit is gone
            for new systems: the IRS says the Residential Clean Energy Credit &ldquo;is not available
            for any property placed in service after December 31, 2025&rdquo; (
            <a className={link} href={S.irs25d}>
              IRS
            </a>
            ). Make sure an estimate does not subtract it.
          </p>
        </section>

        <section>
          <h2>SMUD net metering and the Solar and Storage Rate</h2>
          <p>
            SMUD is not under the CPUC. It says, &ldquo;As a community-owned, not-for-profit electric
            service, we&rsquo;re not governed by the California Public Utilities Commission
            (CPUC),&rdquo; and its board sets its rates. That is why the CPUC&rsquo;s Net Billing
            Tariff, often called NEM 3.0, covers PG&amp;E, SCE and SDG&amp;E but not SMUD (
            <a className={link} href={S.cpucNem}>
              CPUC
            </a>
            ).
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Newer systems.</strong> The Solar and Storage Rate covers customers approved to
              install solar or storage on or after March 1, 2022. Residential customers stay on the
              Time-of-Day (5-8 p.m.) Rate, and exports are credited at 9.6¢ per kWh &ldquo;no matter
              the time of day or season,&rdquo; effective June 1, 2026. A credit offsets usage
              charges and the rest carries over to later bills.
            </li>
            <li>
              <strong>Older systems.</strong> Customers approved before March 1, 2022 can stay on
              net metering through December 31, 2030, unless they add a battery with SMUD incentives,
              modify or replace the system, or move.
            </li>
            <li>
              <strong>Buying a home with solar.</strong> SMUD puts customers who move to a property
              with solar on the Solar and Storage Rate, whether or not they had solar before.
            </li>
            <li>
              <strong>Expanding an old system.</strong> Growing it by more than 10% or 1 kW,
              whichever is greater, moves you to the Solar and Storage Rate with a new
              interconnection application.
            </li>
          </ul>
          <p className="mt-3">
            Source:{' '}
            <a className={link} href={S.smudSsr}>
              SMUD, Solar and Storage Rate
            </a>
            , checked September 23, 2026. Exports earn a flat 9.6¢ whatever the hour, so compare it
            with the price per kWh on your own SMUD bill: every kWh your panels cover at home saves
            that import price, and every kWh you send back earns 9.6¢. Why a SMUD bill runs high is
            in{' '}
            <Link className={link} href="/blog/why-is-my-smud-bill-so-high">
              why your SMUD bill is so high
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>How big a system SMUD allows, and the connection steps</h2>
          <p>
            SMUD sizes systems to your use, not your roof: up to 110% of your last 12 months of
            consumption, or up to 120% on the Solar and Storage Rate if you add a battery. There is
            a one-time interconnection fee for a new solar system, solar with a battery, or a battery
            alone, but not for adding a battery to existing solar. SMUD requires a building permit
            for every installation, including one you do yourself, and says a contractor should hold
            a C-10 electrical or C-46 solar license (
            <a className={link} href={S.smudSolar}>
              SMUD
            </a>
            , checked September 23, 2026).
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Your contractor applies through SMUD&rsquo;s PowerClerk portal and pays the fee.</li>
            <li>SMUD reviews the application and emails an approval.</li>
            <li>The system is installed and passes local permits and inspections.</li>
            <li>SMUD installs the meter and issues permission to operate.</li>
          </ol>
          <p className="mt-3">
            If your contractor goes out of business mid-project, SMUD says its interconnection team
            can help transfer the application to a new one. How to check a contractor before that
            happens is in{' '}
            <Link className={link} href="/solar-installers/licensed-solar-installer">
              how to check a solar installer&rsquo;s license
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>SMUD&rsquo;s battery incentive: My Energy Optimizer Partner+</h2>
          <p>
            This is SMUD&rsquo;s one cash incentive for home energy equipment, and it changed on the
            day this page was checked. SMUD: &ldquo;Effective Sept. 23, the upfront enrollment
            incentive will be reduced from $500 per kWh (up to $10,000 per household) to $300 per kWh
            (up to $6,000 per household).&rdquo; Projects submitted for interconnection by September
            22 and enrolled by December 31, 2026 keep the higher level. Everyone must enroll within 90
            days of permission to operate.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>What you agree to.</strong> SMUD can dispatch the battery when demand is
              highest, and always leaves a 20% reserve at the end of an event. You keep full use of
              the battery in an outage.
            </li>
            <li>
              <strong>How much.</strong> SMUD&rsquo;s amounts reflect that 20% reserve. Its table
              lists $2,400 at the new rate for a 10 kWh battery.
            </li>
            <li>
              <strong>Which batteries.</strong> Eguana, Enphase, Franklin, SolarEdge, Sonnen and
              Tesla. Ongoing quarterly payments are currently for Tesla batteries only:{' '}
              {usd(batt.teslaQuarterly.one)} for one, {usd(batt.teslaQuarterly.two)} for two,{' '}
              {usd(batt.teslaQuarterly.threeOrMore)} for three or more.
            </li>
            <li>
              <strong>Who cannot join.</strong> You must be on the Solar and Storage Rate. Individual
              rental units and MED Rate customers are not eligible.
            </li>
          </ul>
          <p className="mt-3">
            Source:{' '}
            <a className={link} href={S.smudBattery}>
              SMUD, battery storage for homeowners
            </a>
            , checked September 23, 2026. Whether a battery pays in your case is in{' '}
            <Link className={link} href="/battery">
              home battery storage in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>SolarShares: solar without panels on your roof</h2>
          <p>
            Residential SolarShares lets a SMUD customer take power from solar farms in the
            Sacramento region instead of installing panels. SMUD adds a charge or credit to your bill
            each month for 20 years, or until you leave; if you rejoin later, the 20 years start
            again. SMUD says it maintains and operates the solar panels, and &ldquo;if you move, your
            SolarShares move with you&rdquo; (
            <a className={link} href={S.smudShares}>
              SMUD
            </a>
            , checked September 23, 2026).
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-4 text-left font-semibold">
                SMUD Residential SolarShares: monthly charge or credit per kW, by program year
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Years</th>
                  <th className="p-3">Monthly charge (+) or credit (−) per kW</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="p-3">1 to 5</td><td className="p-3">$2.00, $1.75, $1.50, $1.25, $1.00</td></tr>
                <tr className="border-t"><td className="p-3">6</td><td className="p-3">$0</td></tr>
                <tr className="border-t"><td className="p-3">7 to 12</td><td className="p-3">−$1.00, −$1.25, −$1.50, −$1.75, −$2.00, −$2.25</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Years 13 to 20 are in SMUD&rsquo;s terms and conditions. Solar and Storage Rate customers
            and Neighborhood SolarShares customers cannot join; Greenergy customers are moved off
            Greenergy if they do. SolarShares does not satisfy California&rsquo;s solar requirement
            for new homes or ADUs, and Neighborhood SolarShares for new construction is closed to new
            applications.
          </p>
        </section>

        <section>
          <h2>Leases and PPAs in SMUD territory</h2>
          <p>
            SMUD does not regulate the contract between you and a solar provider. Asked what happens
            at the end of a lease or PPA, SMUD&rsquo;s answer is to contact your solar provider
            about its terms (
            <a className={link} href={S.smudSolar}>
              SMUD
            </a>
            ). With a 9.6¢ export credit, check how much of a PPA&rsquo;s modeled output the provider
            assumes you use at home, because you pay the PPA price for every kWh, including the ones
            you export. What to compare is in{' '}
            <Link className={link} href="/blog/solar-ppa-companies">
              how to compare solar PPA companies
            </Link>{' '}
            and{' '}
            <Link className={link} href="/blog/solar-leasing-company">
              what a solar leasing company does
            </Link>
            .
          </p>
          <p className="mt-3">
            Other utilities run very different programs; see{' '}
            <Link className={link} href="/blog/pge-solar-program">
              PG&amp;E&rsquo;s solar programs
            </Link>{' '}
            and{' '}
            <Link className={link} href="/blog/ladwp-solar-program">
              LADWP&rsquo;s solar programs
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. We are
            not SMUD and do not run or decide eligibility for any SMUD program; enroll through SMUD.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
