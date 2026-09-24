// 2026-09-23 new page (claude/ta-installers-20260923) for "inflation reduction
// act solar california". The IRA's residential solar credit schedule was cut
// short by Public Law 119-21 (July 4, 2025), so the page leads with what a
// California homeowner can and cannot claim in 2026. Sources: IRS fact sheet
// FS-2022-40, IRS credit and OBBB pages, the CEC's IRA rebate page, BOE, CPUC,
// all fetched 2026-09-23.
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
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

const PATH = '/blog/inflation-reduction-act-solar-california';
const UPDATED = '2026-09-23';
const metaTitle = "Inflation Reduction Act and Solar in California: What's Left";
const metaDescription =
  'The IRA set a 30% home solar credit through 2032, but federal law ended it for installs completed after 2025. What California homeowners can still use.';

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

const IRS_FS_2022_40 = 'https://www.irs.gov/pub/taxpros/fs-2022-40.pdf';
const IRS_25D = 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit';
const IRS_OBBB_FAQ =
  'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb';
const IRS_OBBB = 'https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions';
const CEC_IRA =
  'https://www.energy.ca.gov/programs-and-topics/programs/inflation-reduction-act-residential-energy-rebate-programs';
const BOE_SOLAR = 'https://boe.ca.gov/proptaxes/active-solar-energy-system/';
const CPUC_LOW_INCOME =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide/low-income-solar-programs';

const sources: Source[] = [
  { label: 'IRS fact sheet FS-2022-40 (December 2022): IRA changes to the residential clean energy property credit', url: IRS_FS_2022_40 },
  { label: 'IRS: Residential Clean Energy Credit', url: IRS_25D },
  { label: 'IRS: FAQs on OBBB modifications to sections 25C, 25D and others (Public Law 119-21)', url: IRS_OBBB_FAQ },
  { label: 'IRS: One Big Beautiful Bill provisions (credit terminations)', url: IRS_OBBB },
  { label: 'California Energy Commission: IRA residential energy rebate programs (HEEHRA and HOMES)', url: CEC_IRA },
  { label: 'Board of Equalization: active solar energy system new construction exclusion', url: BOE_SOLAR },
  { label: 'CPUC: low-income solar programs', url: CPUC_LOW_INCOME },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Can I still get the Inflation Reduction Act solar tax credit in California?',
    answer:
      'Not for a new system. The IRA’s 30% residential clean energy credit was later ended by Public Law 119-21: the IRS says it is not allowed for expenditures made after December 31, 2025, and an expenditure counts as made when the original installation is completed. A system finished in 2025 or earlier can still be claimed on that year’s return.',
  },
  {
    question: 'What did the Inflation Reduction Act do for home solar?',
    answer:
      'According to IRS fact sheet FS-2022-40, the IRA extended the residential clean energy property credit through 2034, set it at 30% for property placed in service from 2022 through 2032 with a phase-down to 26% in 2033 and 22% in 2034, and added battery storage of 3 kilowatt-hours or more as eligible from 2023.',
  },
  {
    question: 'Does California’s IRA rebate program pay for solar panels?',
    answer:
      'No. The California Energy Commission runs the IRA-funded HEEHRA and HOMES programs, which cover heat pumps and other electrification equipment, including electrical panel upgrades and wiring in multifamily buildings. Solar panels are not listed. As of February 24, 2026, the CEC says HEEHRA rebates for single-family retrofits are fully reserved statewide.',
  },
  {
    question: 'If my solar was installed in 2025, what happens to unused credit?',
    answer:
      'The IRS says the residential clean energy credit is nonrefundable, so it cannot exceed the tax you owe, but any unused amount can be carried forward to reduce tax in future years. A tax professional can confirm how that applies to your return.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

export default function InflationReductionActSolarCalifornia() {
  return (
    <PublicLayout
      breadcrumbLabel="Inflation Reduction Act and solar"
      breadcrumbParent={{ label: 'California solar incentives', href: '/blog/california-solar-tax-credit-2026' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="The Inflation Reduction Act and solar in California: what changed, and what is left in 2026"
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
          <Link href="/blog/california-solar-tax-credit-2026" className="hover:text-primary">California solar incentives</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">Inflation Reduction Act and solar</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Incentives</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          The Inflation Reduction Act and solar in California: what changed, and what is left
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          The Inflation Reduction Act of 2022 set the federal home solar tax credit at 30% and
          extended it through 2034. That schedule no longer applies. A July 2025 federal law ended
          the credit for expenditures made after December 31, 2025, so a California home system
          completed in 2026 gets no federal credit. The IRA&rsquo;s rebate programs in California
          do not cover solar panels either.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        <KeyFacts
          facts={[
            { label: 'IRA credit rate as passed', value: '30%', note: 'For property placed in service 2022–2032; 26% in 2033, 22% in 2034.', source: { publisher: 'IRS FS-2022-40', date: UPDATED, url: IRS_FS_2022_40 } },
            { label: 'Credit ends for expenditures after', value: 'Dec. 31, 2025', note: 'Counted when the installation is completed.', source: { publisher: 'IRS', date: UPDATED, url: IRS_OBBB_FAQ } },
            { label: 'Batteries added by the IRA', value: '3 kWh+', note: 'Eligible from 2023 until the credit ended.', source: { publisher: 'IRS', date: UPDATED, url: IRS_25D } },
            { label: 'Solar panels in California IRA rebates', value: 'Not covered', note: 'HEEHRA and HOMES target heat pumps and electrification.', source: { publisher: 'CEC', date: UPDATED, url: CEC_IRA } },
          ]}
          sourcesHref="#sources"
        />

        <div>
          <h2 className={h2}>What the Inflation Reduction Act did for home solar</h2>
          <p className={p}>
            The IRS summarized the change in fact sheet FS-2022-40, published in December 2022: the IRA &ldquo;extended the residential clean energy property credit
            through 2034, modified the applicable credit percentage rates, and added battery storage
            technology as an eligible expenditure.&rdquo; The rate was 30% of qualified expenditures
            for property placed in service from 2022 through 2032, then 26% in 2033 and 22% in 2034.
            Batteries needed a capacity of at least 3 kilowatt-hours (IRS, checked September 23,
            2026).
          </p>
          <p className={p}>
            The credit was always tied to your own home. The same fact sheet says the property had to
            be in the United States and used as a residence by the taxpayer, and that landlords could
            never use it for homes they rent out and do not live in. It was also nonrefundable: it
            could not exceed the tax you owed, though the unused part could carry forward.
          </p>

          <h2 className={h2}>What changed in 2025</h2>
          <p className={p}>
            Public Law 119-21, enacted July 4, 2025, rewrote that timeline. The IRS now says the
            residential clean energy credit &ldquo;will not be allowed for any expenditures made after
            December 31, 2025.&rdquo; Timing turns on completion, not payment: an expenditure is
            treated as made &ldquo;when the original installation of the item is completed&rdquo; (IRS
            OBBB FAQs, checked September 23, 2026). A deposit paid in 2025 does not rescue a system
            that was switched on in 2026. The same law ended the separate energy efficient home
            improvement credit for property placed in service after December 31, 2025.
          </p>
          <div className="mb-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-3 text-left font-semibold">The federal residential solar credit, as passed and as it ended</caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Installation completed</th>
                  <th className="p-3">Under the IRA as passed (2022)</th>
                  <th className="p-3">After Public Law 119-21 (2025)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className="p-3 align-top">2022 through 2025</th><td className="p-3 align-top">30%</td><td className="p-3 align-top">30%, unchanged</td></tr>
                <tr className="border-t"><th scope="row" className="p-3 align-top">2026 through 2032</th><td className="p-3 align-top">30%</td><td className="p-3 align-top">No credit</td></tr>
                <tr className="border-t"><th scope="row" className="p-3 align-top">2033</th><td className="p-3 align-top">26%</td><td className="p-3 align-top">No credit</td></tr>
                <tr className="border-t"><th scope="row" className="p-3 align-top">2034</th><td className="p-3 align-top">22%</td><td className="p-3 align-top">No credit</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            Sources: IRS FS-2022-40 and IRS OBBB FAQs, checked September 23, 2026.
          </p>

          <h2 className={h2}>If your system was finished in 2025 or earlier</h2>
          <p className={p}>
            The credit still applies to a system whose installation was completed by December 31,
            2025. The IRS describes it as 30% of the cost of new, qualified clean energy property for
            your home installed from 2022 through that date, including solar panels and batteries of
            3 kilowatt-hours or more. Any amount above your tax bill carries forward to later years.
            Because the rules on qualifying costs and carryforwards are detailed, confirm your claim
            with a tax professional.
          </p>

          <h2 className={h2}>California&rsquo;s IRA rebates: heat pumps, not panels</h2>
          <p className={p}>
            The IRA also sent rebate money to the states. In California, the Energy Commission runs
            two programs: Home Electrification and Appliance Rebates (HEEHRA) and Home Owner Managing
            Energy Savings (HOMES). HEEHRA offers single-family homes up to $8,000 toward a heat pump
            HVAC system for households under 80% of area median income, and up to $4,000 for those
            between 80% and 150%. Multifamily properties can receive up to $14,000 per unit for heat
            pumps, electric cooking and drying equipment, and electrical panel upgrades and wiring.
            Solar panels are not on the list (CEC, checked September 23, 2026).
          </p>
          <p className={p}>
            Availability is the bigger problem. As of February 24, 2026, the CEC says HEEHRA rebates
            for single-family home retrofits are &ldquo;fully reserved statewide,&rdquo; multifamily
            rebates are still being processed and HEEHRA Phase II is not available. Check the CEC page
            for the current status before you plan around one.
          </p>

          <h2 className={h2}>Leases and PPAs after the credit ended</h2>
          <p className={p}>
            The residential credit was figured on what you paid for qualified property installed at
            your home. With a lease or a power purchase agreement the solar company owns the
            equipment, and your payments are for the use of the system or its power. Whether a
            leasing company can still claim a separate business credit on a new lease, and whether
            that shows up in your price, is outside what this page could confirm. The
            practical step is simple: if a 2026 proposal shows a price &ldquo;after tax
            credit,&rdquo; ask which credit, who claims it, and what the price is without it. The
            differences between owning and leasing are laid out in the{' '}
            <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className={link}>
              comparison of cash, loan, lease and PPA
            </Link>
            .
          </p>

          <h2 className={h2}>What still lowers the cost of solar in California in 2026</h2>
          <ul className="mb-4 list-disc space-y-3 pl-5 text-foreground/80">
            <li>
              <strong>Property tax exclusion.</strong> The Board of Equalization says a qualifying
              active solar system &ldquo;will not result in either an increase or a decrease in the
              assessment of the existing property.&rdquo; The statute is scheduled to sunset on
              January 1, 2027 (BOE, checked September 23, 2026).
            </li>
            <li>
              <strong>Low-income programs.</strong> DAC-SASH provides no-cost rooftop systems to
              income-qualified homeowners in disadvantaged communities, and SGIP offers incentives to
              low-income customers who pair solar with storage (CPUC, checked September 23, 2026).
            </li>
            <li>
              <strong>A lower installed price.</strong> Without a federal credit, the quote itself
              matters more. Compare at least three itemized bids using the{' '}
              <Link href="/best-solar-companies-california" className={link}>
                guide to choosing a California solar company
              </Link>
              .
            </li>
          </ul>
          <p className={p}>
            The full picture of what is left is in{' '}
            <Link href="/blog/solar-tax-credit-expired-2026-options" className={link}>
              your options now that the solar tax credit has expired
            </Link>{' '}
            and the{' '}
            <Link href="/blog/california-solar-tax-credit-2026" className={link}>
              overview of California solar incentives
            </Link>
            . For the cost side, see the{' '}
            <Link href="/solar-panels-california" className={link}>
              statewide guide to solar panel cost
            </Link>
            ; for batteries, the{' '}
            <Link href="/battery/sgip-battery-rebate-california" className={link}>
              SGIP battery rebate status
            </Link>
            .
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="FAQ: the IRA and solar in California" />
        <HubSpokeLinks hub="incentives" currentPath={PATH} />
        <div className="mt-10">
          <SolarInquiry topic="Solar incentives after the Inflation Reduction Act" />
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
