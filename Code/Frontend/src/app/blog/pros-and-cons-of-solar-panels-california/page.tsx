// 2026-09-23 new page (claude/ta-installers-20260923) for "pros and cons of
// solar panels in california". It weighs the trade-offs under the rules that
// apply in 2026: net billing for PG&E, SCE and SDG&E customers, no federal
// credit for new installs, and the price data LBNL states in text. Every figure
// was fetched from its primary source on 2026-09-23. No savings are promised.
import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { Byline } from '@/components/trust/Byline';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

const PATH = '/blog/pros-and-cons-of-solar-panels-california';
const UPDATED = '2026-09-23';
const metaTitle = 'Pros and Cons of Solar Panels in California (2026)';
const metaDescription =
  'The real advantages and drawbacks of home solar in California in 2026: net billing, no federal credit, battery costs, property tax, contracts and roofs.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const CPUC_NEM = 'https://www.cpuc.ca.gov/NEM/';
const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const CPUC_LOW_INCOME =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide/low-income-solar-programs';
const LBNL_TTS_2024 =
  'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf';
const LBNL_2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const IRS_OBBB_FAQ =
  'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb';
const BOE_SOLAR = 'https://boe.ca.gov/proptaxes/active-solar-energy-system/';
const CEC_2024_GEN =
  'https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/2024-total-system-electric-generation';

const sources: Source[] = [
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: CPUC_NEM },
  { label: 'CPUC: California Solar Consumer Protection Guide (version 4, 2025)', url: CPUC_GUIDE },
  { label: 'CPUC: low-income solar programs', url: CPUC_LOW_INCOME },
  { label: 'Lawrence Berkeley National Laboratory: Tracking the Sun, 2024 Edition', url: LBNL_TTS_2024 },
  { label: 'Lawrence Berkeley National Laboratory: U.S. Distributed Solar and Storage, 2026 data update', url: LBNL_2026 },
  { label: 'IRS: FAQs on OBBB changes to the residential clean energy credit', url: IRS_OBBB_FAQ },
  { label: 'Board of Equalization: active solar energy system new construction exclusion', url: BOE_SOLAR },
  { label: 'California Energy Commission: 2024 Total System Electric Generation', url: CEC_2024_GEN },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'What is the biggest downside of solar in California now?',
    answer:
      'For most PG&E, SCE and SDG&E customers it is the export credit. Systems that applied to interconnect on or after April 15, 2023 are on the CPUC’s Net Billing Tariff, which credits exported power at Avoided Cost Calculator values that are usually lower than the price you pay to import. Add the end of the federal tax credit for installs completed after 2025, and the price you pay matters more than it used to.',
  },
  {
    question: 'Is solar still worth it in California without the tax credit?',
    answer:
      'It can be, but the case now rests on your own numbers: how much of the solar output you use at home, your rate plan, the installed price and how you pay. Ask every bidder to model your remaining bill on your real usage and tariff, and compare at least three itemized quotes, as the CPUC recommends.',
  },
  {
    question: 'Do solar panels raise property taxes in California?',
    answer:
      'Not under the current exclusion. The Board of Equalization says installing a qualifying active solar energy system does not increase or decrease the assessment of the existing property. The statute is scheduled to sunset on January 1, 2027.',
  },
  {
    question: 'Do solar panels work during a power outage?',
    answer:
      'Not on their own in a typical grid-tied home. A battery with the right equipment can power selected circuits during an outage. If backup matters to you, ask each proposal to list the backed-up circuits, the battery’s usable capacity and its power limits.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const h3 = 'text-lg font-semibold text-foreground mt-6 mb-2';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

export default function ProsAndConsOfSolarPanelsCalifornia() {
  return (
    <PublicLayout
      breadcrumbLabel="Pros and cons of solar panels"
      breadcrumbParent={{ label: 'Solar panels in California', href: '/solar-panels-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Pros and cons of solar panels in California in 2026"
        url={`https://ratereliefca.com${PATH}`}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 md:pt-12">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/solar-panels-california" className="hover:text-primary">Solar panels in California</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">Pros and cons</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Is solar right for you?</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          Pros and cons of solar panels in California in 2026
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          The main advantage of home solar in California is buying less electricity from your
          utility, and with a battery, keeping some power on in an outage. The main drawbacks in
          2026 are a higher net cost now that the federal tax credit has ended, and export credits
          under net billing that are usually worth less than the power you buy. Which side wins
          depends on your usage, roof, rate plan and how you pay.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        <div className="my-8 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="p-3 text-left font-semibold">Solar in California at a glance</caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-3">Pros</th>
                <th className="p-3">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3 align-top">Every kilowatt-hour you use at home is one you do not buy</td><td className="p-3 align-top">Exports earn less than imports cost under net billing</td></tr>
              <tr className="border-t"><td className="p-3 align-top">Backup for chosen circuits when paired with a battery</td><td className="p-3 align-top">A battery adds real cost</td></tr>
              <tr className="border-t"><td className="p-3 align-top">No property tax increase under the current exclusion</td><td className="p-3 align-top">No federal tax credit for systems finished after 2025</td></tr>
              <tr className="border-t"><td className="p-3 align-top">Installed prices fell in 2025</td><td className="p-3 align-top">Upfront cost is still large, and the roof has to be ready</td></tr>
              <tr className="border-t"><td className="p-3 align-top">No-cost systems for some income-qualified homeowners</td><td className="p-3 align-top">Leases and PPAs bring long contracts and escalators</td></tr>
              <tr className="border-t"><td className="p-3 align-top">You own an asset that can transfer with the home</td><td className="p-3 align-top">You still get a utility bill, and installers can go out of business</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className={h2}>The advantages</h2>

          <h3 className={h3}>1. You buy less electricity</h3>
          <p className={p}>
            This is the core of it. Power your panels make while the house is using it never crosses
            the meter, so you do not pay the utility for it. Under current rules that home use is where
            most of the value sits, which is why a system sized to your own daytime and early-evening
            demand tends to make more sense than one sized to export. The{' '}
            <Link href="/blog/how-big-of-a-solar-system-do-i-need-california" className={link}>
              guide to sizing a system for your home
            </Link>{' '}
            shows how to work from your bill.
          </p>

          <h3 className={h3}>2. Backup power, with a battery</h3>
          <p className={p}>
            Panels alone usually shut down when the grid goes down. Paired with a battery and the right
            equipment, they can keep chosen circuits running and recharge the battery the next day.
            Californians add storage more than most: LBNL reports that California and Hawaii again had
            the highest residential battery attachment rates in 2025 (LBNL, checked September 23,
            2026). The{' '}
            <Link href="/blog/do-solar-panels-work-during-power-outage-california" className={link}>
              outage guide
            </Link>{' '}
            explains what a backup design has to include.
          </p>

          <h3 className={h3}>3. No property tax increase, for now</h3>
          <p className={p}>
            The Board of Equalization says installing a qualifying active solar energy system
            &ldquo;will not result in either an increase or a decrease in the assessment of the
            existing property.&rdquo; It is a new construction exclusion rather than an exemption, and
            the statute is scheduled to sunset on January 1, 2027 (BOE, checked September 23, 2026).
            If your install will finish near that date, confirm the rule that applies.
          </p>

          <h3 className={h3}>4. Prices came down in 2025</h3>
          <p className={p}>
            LBNL&rsquo;s August 2026 update reports that installed prices for host-owned residential
            systems fell by $0.50 per watt in 2025 after inflation (LBNL, checked September 23, 2026).
            That offsets part of what the lost tax credit took away, though not all of it.
          </p>

          <h3 className={h3}>5. Help for income-qualified homeowners</h3>
          <p className={p}>
            The CPUC lists DAC-SASH, which provides no-cost rooftop solar to income-qualified
            homeowners in disadvantaged communities, and SGIP incentives for low-income customers who
            pair solar with storage (CPUC, checked September 23, 2026). If you might qualify, check
            these before you request a market-rate quote. See{' '}
            <Link href="/blog/low-income-solar-california" className={link}>
              low-income solar programs in California
            </Link>
            .
          </p>

          <h3 className={h3}>6. A system you own stays with the house</h3>
          <p className={p}>
            A purchased system is part of the home. How much it adds to a sale price is a separate,
            unsettled question, covered in{' '}
            <Link href="/blog/does-solar-increase-home-value-california" className={link}>
              whether solar increases home value in California
            </Link>
            .
          </p>

          <h2 className={h2}>The drawbacks</h2>

          <h3 className={h3}>1. Exports are worth less than imports</h3>
          <p className={p}>
            For PG&amp;E, SCE and SDG&amp;E customers who applied to connect on or after April 15,
            2023, the CPUC&rsquo;s Net Billing Tariff credits exported power at values from its Avoided
            Cost Calculator, &ldquo;usually lower than the retail rate&rdquo; (CPUC, checked September 24,
            2026). A system that sends most of its output to the grid earns much less than it would
            have under the older NEM 2.0 rules. The mechanics are in{' '}
            <Link href="/blog/nem-2-vs-nem-3-california" className={link}>
              NEM 2.0 versus NEM 3.0
            </Link>
            .
          </p>

          <h3 className={h3}>2. The federal tax credit is gone</h3>
          <p className={p}>
            The IRS says the residential clean energy credit is not allowed for expenditures made after
            December 31, 2025, and an expenditure counts as made when the installation is completed
            (IRS, checked September 23, 2026). A system finished in 2026 carries its full price. See{' '}
            <Link href="/blog/inflation-reduction-act-solar-california" className={link}>
              what the Inflation Reduction Act credit was and why it ended
            </Link>
            .
          </p>

          <h3 className={h3}>3. The upfront cost is large</h3>
          <p className={p}>
            LBNL&rsquo;s most recent stated range puts host-owned residential systems installed in
            2023 between $3.20 and $5.50 per watt, with California near the middle of the national
            pack (LBNL Tracking the Sun, 2024 Edition). At the ends of that band, a 6-kilowatt system
            works out to roughly $19,200 to $33,000 before financing. The{' '}
            <Link href="/solar-panels-california" className={link}>
              statewide cost guide
            </Link>{' '}
            breaks down what goes into a quote.
          </p>

          <h3 className={h3}>4. Batteries add real money</h3>
          <p className={p}>
            Storage is what makes solar work best under net billing, and it is not cheap. Among
            cash-purchase residential systems, LBNL found median prices $2.10 per watt higher for
            solar paired with storage than for solar alone, in data where about 80% of systems were in
            California (LBNL, 2026 update). Whether that pays back is covered in the{' '}
            <Link href="/battery/battery-payback-nem-3-california" className={link}>
              battery payback analysis
            </Link>
            .
          </p>

          <h3 className={h3}>5. The roof has to be ready</h3>
          <p className={p}>
            Panels last longer than many roofs. If yours will need replacing in the next several
            years, doing it first avoids paying to remove and reinstall the array later. The{' '}
            <Link href="/blog/is-my-roof-good-for-solar-california" className={link}>
              roof suitability check
            </Link>{' '}
            and the{' '}
            <Link href="/blog/solar-panel-removal-reinstall-cost" className={link}>
              removal and reinstall checklist
            </Link>{' '}
            cover both sides.
          </p>

          <h3 className={h3}>6. Leases and PPAs are long commitments</h3>
          <p className={p}>
            A lease or PPA can start with nothing down, but you pay every month for the contract term,
            often with a yearly increase, and the contract follows the house if you sell. The CPUC
            guide&rsquo;s blunt reminder applies here: &ldquo;Solar energy is rarely free&rdquo; (CPUC,
            checked September 23, 2026). Compare ownership and leasing on the same system with the{' '}
            <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className={link}>
              cash, loan, lease and PPA comparison
            </Link>
            .
          </p>

          <h3 className={h3}>7. You still get a bill, and companies can fail</h3>
          <p className={p}>
            Solar customers still pay the utility for grid power they use and for fixed charges; see{' '}
            <Link href="/solar-problems/do-i-still-get-a-utility-bill-with-solar" className={link}>
              why you still get a utility bill with solar
            </Link>
            . And a warranty is only as good as the company behind it. Read{' '}
            <Link href="/solar-installers/solar-installer-bankruptcy-california" className={link}>
              what survives when an installer goes bankrupt
            </Link>{' '}
            before you weigh a long warranty.
          </p>

          <h2 className={h2}>Who solar tends to suit, and who should wait</h2>
          <p className={p}>Solar is more likely to work out if most of these are true:</p>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-foreground/80">
            <li>You own the home and expect to stay long enough to recover the cost.</li>
            <li>The roof is in good shape, faces a useful direction and gets little shade.</li>
            <li>You use a fair amount of power during the day or early evening, or plan to add an EV or heat pump.</li>
            <li>You can buy with cash or a loan whose total cost you have compared with a lease or PPA.</li>
          </ul>
          <p className={p}>It is worth pausing if:</p>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-foreground/80">
            <li>The roof needs replacing soon, or trees and neighboring buildings shade it most of the day.</li>
            <li>You expect to move within a few years, especially with a lease or PPA that must transfer.</li>
            <li>A quote assumes your bill disappears, or subtracts a federal tax credit on a 2026 install.</li>
            <li>The only offer came from a door-to-door pitch with a deadline.</li>
          </ul>
          <p className={p}>
            If you decide to go ahead, the CPUC recommends getting bids from at least three qualified
            providers and comparing them. The{' '}
            <Link href="/best-solar-companies-california" className={link}>
              guide to choosing and verifying a solar company
            </Link>{' '}
            shows how, and the{' '}
            <Link href="/blog/are-solar-panels-worth-it-california" className={link}>
              worth-it decision guide
            </Link>{' '}
            helps you test a proposal against less favorable assumptions.
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="FAQ: pros and cons of solar in California" />
        <HubSpokeLinks hub="cost_value" currentPath={PATH} />
        <div className="mt-10">
          <SolarInquiry topic="Pros and cons of solar in California" />
        </div>
        <AuthorBio
          domain="crr"
          palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }}
        />
      </main>
      <Footer />
    </PublicLayout>
  );
}
