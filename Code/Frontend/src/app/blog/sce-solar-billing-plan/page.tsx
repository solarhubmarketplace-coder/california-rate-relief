import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

// 2026-09-23 (topical-authority wave, Tier 2): the SCE spoke of the NEM hub.
// /blog/sce-nem-2 covers legacy NEM 2.0 accounts; this page owns "sce solar
// billing plan" and also answers "sce nem 3.0 rates" / "sce solar buyback
// rates" (that planned /blog/sce-nem-3-rates page was folded in here so SCE's
// net billing questions have one page). Every figure is from SCE's own pages
// or CPUC Decision 22-12-056, fetched 2026-09-23.
const path = '/blog/sce-solar-billing-plan';
const url = `https://ratereliefca.com${path}`;
const title = 'SCE Solar Billing Plan: NEM 3.0 Rates and How SCE Pays';
const h1 = 'SCE Solar Billing Plan: What Edison Pays for Your Solar Under NEM 3.0';
const description =
  'How SCE’s Solar Billing Plan (NEM 3.0) works: TOU-D-PRIME prices, export credit rates by year and hour, the bonus, how to read the bill and the True-Up.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

// SCE, "How Solar Billing Plans work": average export values by the year you
// began using solar with SCE.
const exportRows: [string, string, string, string, string][] = [
  ['Summer, daytime (6 a.m.–4 p.m.)', '$0.05', '$0.05', '$0.06', '$0.06'],
  ['Summer, evening (4–9 p.m.)', '$0.23', '$0.23', '$0.21', '$0.21'],
  ['Summer, overnight (9 p.m.–6 a.m.)', '$0.07', '$0.07', '$0.12', '$0.12'],
  ['Winter, daytime', '$0.03', '$0.03', '$0.03', '$0.03'],
  ['Winter, evening', '$0.05', '$0.05', '$0.09', '$0.10'],
  ['Winter, overnight', '$0.04', '$0.04', '$0.10', '$0.10'],
];

const primeRows: [string, string][] = [
  ['Summer weekdays, 4–9 p.m. (on-peak)', '59¢'],
  ['Summer weekends, 4–9 p.m. (mid-peak)', '40¢'],
  ['Summer, all other hours (off-peak)', '26¢'],
  ['Winter, 4–9 p.m. (mid-peak)', '56¢'],
  ['Winter, 8 a.m.–4 p.m. (super off-peak)', '24¢'],
  ['Winter, 9 p.m.–8 a.m. (off-peak)', '24¢'],
];

const sources: Source[] = [
  { label: 'SCE: How Solar Billing Plans work', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/solar-billing-plan' },
  { label: 'SCE: Solar Billing Plan FAQs', url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/solar-billing-plan-faqs' },
  { label: 'SCE: Understanding solar export pricing', url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/understanding-export-pricing' },
  { label: 'SCE: Time-of-Use residential rate plans (TOU-D-PRIME)', url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/time-of-use-plans' },
  { label: 'SCE: Self-Generation Incentive Program', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/self-generation-incentive' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
];

const faqs = [
  {
    question: 'What is SCE’s Solar Billing Plan?',
    answer:
      'It is Southern California Edison’s name for the net billing tariff the CPUC adopted to replace NEM 2.0, which most people call NEM 3.0. SCE says NEM 2.0 closed to new applicants on April 15, 2023; later applications are processed under the Solar Billing Plan, on the TOU-D-PRIME rate.',
  },
  {
    question: 'How much does SCE pay for excess solar?',
    answer:
      'Exports earn Energy Export Credits that change by hour and season. SCE’s averages for customers who started in 2025 or 2026 are about $0.06 per kWh on summer days, $0.21 from 4 to 9 p.m. in summer, and $0.03 on winter days. Customers who enroll before 2028 also get a bonus of about $0.04 per kWh, or about $0.09 if income-qualified.',
  },
  {
    question: 'Does SCE pay cash for solar?',
    answer:
      'Mostly it pays in bill credits. Only energy you export beyond what you used over the whole year earns Net Surplus Compensation, which SCE puts at about $0.02 per kWh and issues as a check or a rollover credit after the annual settlement.',
  },
  {
    question: 'Are SCE NEM 3.0 export rates locked in?',
    answer:
      'Yes, for nine years. SCE says the values are fixed based on the year you began using solar with SCE, and its FAQ says customers who enroll before January 1, 2028 have fixed export credit prices for their first nine years. Someone who buys a home that already has solar gets the current year’s prices, which can change.',
  },
  {
    question: 'Why do I owe money on my SCE True-Up with solar?',
    answer:
      'Two common reasons. Export credits cannot pay set charges such as the Base Services Charge, and if you exported more energy than you used over the year, SCE reduces the credits for the extra kWh and shows the difference as an EEC Adjustment on the settlement bill.',
  },
  {
    question: 'Is the Solar Billing Plan the successor to NEM 3.0 at SCE?',
    answer:
      'It is NEM 3.0. The Solar Billing Plan is the successor to NEM 2.0; NEM 3.0 is simply the informal name for the same net billing rules.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function SceSolarBillingPlanPage() {
  return (
    <PublicLayout breadcrumbLabel="SCE Solar Billing Plan" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={h1} url={url} dateModified={updated} description={description} />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {[{ label: 'Home', href: '/' }, hub].map((c) => (
                <span key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="hover:text-primary">{c.label}</Link>
                  <span aria-hidden="true">/</span>
                </span>
              ))}
              <span className="text-foreground">{'SCE Solar Billing Plan'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                SCE’s Solar Billing Plan is Southern California Edison’s version of NEM 3.0. If you applied to
                connect your system after NEM 2.0 closed in April 2023, you are on it. You buy grid power on the TOU-D-PRIME rate,
                and SCE credits your exports at hourly values, about 6 cents per kWh on a summer day and about 21 cents
                in the evening for newer customers, locked for nine years.
              </p>
              <p>
                This guide covers what SCE pays for exported solar in each year and season, the bonus, what you pay for
                grid power, how to read the monthly bill and the annual settlement, and where a battery fits. Accounts
                still on the older tariff are covered in{' '}
                <Link href="/blog/sce-nem-2" className={link}>SCE NEM 2.0 and its 20-year legacy period</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="SCE Solar Billing Plan" utility="SCE" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'Required rate', value: 'TOU-D-PRIME', note: 'Summer weekday peak 4–9 p.m. SCE.' },
                  { label: 'Summer evening export, 2025–26', value: 'About $0.21/kWh', note: 'Daytime about $0.06. SCE.' },
                  { label: 'Export bonus, enroll before 2028', value: 'About $0.04/kWh', note: 'About $0.09 if income-qualified. SCE.' },
                  { label: 'Annual surplus payment', value: 'About $0.02/kWh', note: 'Net Surplus Compensation. SCE.' },
                ]}
              />

              <h2>Is the Solar Billing Plan SCE’s NEM 3.0?</h2>
              <p>
                Yes. The CPUC says the utilities refer to its net billing tariff, the one people call NEM 3.0, as the
                Solar Billing Plan, and that it has applied to customers applying for interconnection since April 15,
                2023. SCE’s FAQ says NEM 2.0 closed to new applicants that day and that later applications are
                processed under the Solar Billing Plan for Residential or for Business.
              </p>
              <p>
                So the Solar Billing Plan is not a successor to NEM 3.0. It is NEM 3.0, and it succeeds NEM 2.0. Your
                bill and your Permission to Operate letter show which program the account is on.
              </p>

              <h2>How much SCE pays for your solar</h2>
              <p>
                Exports earn Energy Export Credits. SCE says they are priced from the CPUC’s Avoided Cost Calculator as
                approved on January 1 of the calculation year, with a delivery part and a generation part. Its export
                pricing files list a value for each of 24 hours, split by weekday versus weekend or holiday and by
                month. There is one price set for each start year, NBT23 through NBT26, fixed for nine years from the
                date you began using solar.
              </p>
              <p>
                SCE also publishes averages by season and time of day, which are easier to read than the hourly files:
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">SCE average export credit per kWh by season, time of day and the year you started</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Season and time</th>
                      <th className="p-3">Started 2023</th>
                      <th className="p-3">2024</th>
                      <th className="p-3">2025</th>
                      <th className="p-3">2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exportRows.map(([when, a, b, c, d]) => (
                      <tr key={when} className="border-t border-border">
                        <td className="p-3">{when}</td>
                        <td className="p-3">{a}</td>
                        <td className="p-3">{b}</td>
                        <td className="p-3">{c}</td>
                        <td className="p-3">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">
                Per kWh exported, from SCE’s Solar Billing Plan page. Summer is June through September. SCE labels these
                averages; the hourly files hold the exact values.
              </p>
              <p>
                Two things stand out. Daytime exports, when most panels produce the most, earn the least in every
                year. And the newer price sets pay more overnight and on winter evenings than the 2023 and 2024 sets,
                but less on summer evenings. SCE says a customer who moves into a house that already has solar gets
                the current year’s prices, and that those can change afterward. For how SCE’s values compare with
                PG&amp;E’s and SDG&amp;E’s, see{' '}
                <Link href="/blog/nem-3-export-rates-california" className={link}>NEM 3.0 export rates across California</Link>.
              </p>

              <h3>The export bonus and when it ends</h3>
              <p>
                SCE says eligible residential customers who enroll before 2028 receive an extra credit of about $0.04
                per kWh, or about $0.09 for income-qualified customers. Those are the starting amounts the CPUC set in
                Decision 22-12-056: $0.040 and $0.093 for SCE. The decision cuts the bonus for new enrollees by 20
                percent of that starting amount at the end of each calendar year until it reaches zero, and each
                customer keeps the amount they enrolled at for nine years. It is not available to customers who move
                over from NEM 1.0 or 2.0 at the end of their legacy period, or to someone who buys a home with an
                existing system.
              </p>

              <h2>What you pay for grid power on TOU-D-PRIME</h2>
              <p>
                SCE says Solar Billing Plan customers are on TOU-D-PRIME, a rate it also offers to households with an
                EV, a home battery or an electric heat pump. Prices are highest from 4 to 9 p.m. SCE’s rate page lists
                these bundled prices per kWh:
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">SCE TOU-D-PRIME energy prices per kWh, as listed by SCE on September 23, 2026</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">TOU-D-PRIME period</th>
                      <th className="p-3">Price per kWh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {primeRows.map(([period, price]) => (
                      <tr key={period} className="border-t border-border">
                        <td className="p-3">{period}</td>
                        <td className="p-3">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                TOU-D-PRIME also carries a Base Services Charge of $0.79 per day, about $24 over a 30-day month, and has
                no baseline credit. Prices differ if a community choice aggregator supplies your generation. The rest
                of SCE’s residential plans are in{' '}
                <Link href="/blog/sce-time-of-use-rates-2026" className={link}>SCE time-of-use rates for 2026</Link>.
              </p>
              <p>
                Put the two tables side by side and the design is plain. A kWh exported on a summer afternoon earns
                about 6 cents; the same kWh bought back at 5 p.m. on a summer weekday costs 59 cents.
              </p>

              <h2>How to read an SCE bill with solar</h2>
              <p>
                Every month you pay SCE’s regular charges, including taxes, fees and the Base Services Charge, plus the
                grid power you used, priced by time of use. Your export credits are applied against eligible charges.
                SCE says the credits cannot cover set taxes and fees such as the Base Services Charge, so a solar home
                that exports more than it uses still gets a bill.
              </p>
              <h3>The annual settlement, or True-Up</h3>
              <p>
                Once a year SCE sends a settlement bill, which it also calls a True-Up bill, in the same month your
                system started service. If your system went live in March, the True-Up arrives each March. SCE calls
                that 12-month cycle the relevant period.
              </p>
              <p>
                For the settlement, SCE compares the grid power you used, the energy you exported, and the credits you
                received. If you exported more than you used, some credits get taken back. SCE’s example: a home that
                used 900 kWh from the grid and sent 1,000 kWh back keeps credits for the 900 kWh, and the credits for
                the extra 100 kWh are adjusted. Because those credits were already used on monthly bills, the
                adjustment shows up as a balance on the settlement, labeled “EEC Adjustment.” SCE says the rule is
                there so solar is sized to a home’s needs.
              </p>
              <p>
                The surplus itself is paid at Net Surplus Compensation, which SCE puts at about $0.02 per kWh. SCE
                treats it as a payment, issued as a check or rollover credit depending on your selection, and warns it
                may not cover the full credit adjustment. SCE’s FAQ says customers of a community choice aggregator or
                direct access provider are not eligible for Net Surplus Compensation from SCE. What else can make the
                settlement large is covered in{' '}
                <Link href="/blog/sce-settlement-bill" className={link}>reading an SCE annual settlement bill</Link>.
              </p>

              <h2>Batteries on SCE’s Solar Billing Plan</h2>
              <p>
                SCE’s own advice is to store solar instead of exporting it: because export credits are worth less than
                what you pay for grid power, it says, storing energy to use in expensive hours is worth more. Its FAQ
                says the Solar Billing Plan has no battery discharge requirement, so the battery can be set to cover
                your own evening use.
              </p>
              <p>
                SCE also ties its battery incentive to this plan. For SGIP, SCE says new customers must be interconnected
                with Permission to Operate on the Solar Billing Plan before an incentive is paid, and must take an
                SGIP-approved rate such as TOU-D-PRIME. Where that program stands is on the{' '}
                <Link href="/battery/sgip-battery-rebate-california" className={link}>SGIP battery rebate status page</Link>,
                and whether storage pays back is worked through in the{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={link}>NEM 3.0 battery payback guide</Link>.
              </p>

              <h2>If a community choice aggregator serves you</h2>
              <p>
                SCE’s FAQ says customers of a community choice aggregator or direct access provider can use the Solar
                Billing Plan if that provider agrees to support its provisions. SCE’s rate page sends CCA customers to
                their provider for generation costs, so ask the provider for its generation export pricing and its own
                surplus policy before you compare quotes.
              </p>

              <h2>What an SCE solar customer should check</h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Find the year you began using solar with SCE. It picks your export price set, NBT23 through NBT26.</li>
                <li>Confirm the bill shows TOU-D-PRIME and the Solar Billing Plan.</li>
                <li>Note your True-Up month, the month your system started service.</li>
                <li>Compare your yearly exports with your yearly grid use. Exporting far more than you use leads to an EEC Adjustment.</li>
                <li>If a CCA serves you, get its generation export pricing in writing.</li>
              </ol>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Other SCE and net billing questions"
                links={[
                  { href: '/blog/why-is-my-sce-bill-so-high', label: 'A bill-first checklist for high SCE bills' },
                  { href: '/blog/pge-solar-billing-plan', label: 'How PG&E runs the same plan' },
                  { href: '/solar-problems/true-up-bill-california-explained', label: 'How an annual true-up settles' },
                  { href: '/blog/sce-rate-schedules', label: 'Every SCE residential rate schedule' },
                  { href: '/blog/solar-battery-backup-california', label: 'What a backup battery runs and costs' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry utility="SCE" topic="SCE Solar Billing Plan" variant="bill" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
