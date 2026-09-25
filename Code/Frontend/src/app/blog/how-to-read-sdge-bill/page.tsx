import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { SourceList } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, GuideHeader, QuickAnswer, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';
import { HubUpLink } from '@/components/growth/HubUpLink';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/how-to-read-sdge-bill';
const url = `https://ratereliefca.com${path}`;
const title = 'How to Read Your SDG&E Bill, With or Without Solar';
const h1 = 'How to Read an SDG&E Bill in 2026: The Charges, Time-of-Use Usage, Solar Statements and Your Net Meter';
const description =
  'Read an SDG&E bill line by line: the charges breakdown, usage by time period, the Base Services Charge, solar and NEM statements, and codes on a net meter.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources(
  'sdgeMyBill',
  'sdgeSolarBill',
  'sdgeNemBill',
  'sdgeNetMeterSheet',
  'sdgeSmartMeter',
  'sdgeTouDr1Aug2026',
  'sdgePricingPlans',
  'cpucClimateCredit',
);

const faqs = [
  {
    question: 'How do I read my SDG&E bill?',
    answer:
      "Start with the breakdown of current charges, a circular chart and itemized list of what you owe. Then find the Electricity Dashboard, which on a time-of-use plan shows your kWh by time period and your highest-usage hour, and the usage history bar graphs comparing this month with last month and the same month last year. Definitions and SDG&E's policies and notices are at the end of the bill.",
  },
  {
    question: 'How do I read an SDG&E bill with solar?',
    answer:
      "On the Solar Billing Plan, look for four lines: Generation Import Charges and Delivery Import Charges for power you used from the grid, and Generation Export Credits and Delivery Export Credits for power you sent back. Each credit can only offset its matching charge. The year-to-date summary shows remaining credits and your net kWh; a negative net kWh means you exported more than you used.",
  },
  {
    question: 'How do I read an SDG&E meter with solar?',
    answer:
      'The meter scrolls through displays numbered in the top left corner: 01 is the date, 02 the time, and 10 the net reading, which is energy delivered to you minus energy you sent to the grid. Separate "del" and "rec" displays show energy delivered from SDG&E and energy received from you. The meter does not show your system\'s total production, only what flowed to the grid.',
  },
  {
    question: 'Why do I still owe money with solar on SDG&E?',
    answer:
      'Some charges cannot be paid with export credits. SDG&E calls them non-nettable: the Base Services Charge, customer and meter charges, non-bypassable charges and other fixed charges. On the Solar Billing Plan the bill is due every month, and credits roll forward only against future import charges.',
  },
  {
    question: 'What is the Climate Credit on an SDG&E bill?',
    answer:
      'A credit from the state carbon permit program. In 2026 SDG&E electric customers receive $49.36 on the August bill and again on the September bill, and SDG&E gas customers received $32.58 in April, per the CPUC.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function HowToReadSdgeBillPage() {
  return (
    <PublicLayout breadcrumbLabel="How to read an SDG&E bill" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="How to read an SDG&E bill" kicker="SDG&E · Billing" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                An SDG&amp;E bill answers three questions: what you owe (the breakdown of current charges), how much you used and
                when (usage history and the Electricity Dashboard), and on what terms (your pricing plan and the definitions at
                the end). Solar customers get extra lines for imports, exports and credits, and a net meter that shows power
                flowing both ways.
              </p>
              <HubUpLink path="/blog/how-to-read-sdge-bill" />
              <p>
                The layout and terms here come from SDG&amp;E&apos;s own bill guides, solar and NEM bill pages and net meter fact
                sheet, and the prices from its TOU-DR1 rate table effective August 1, 2026, all checked September 23, 2026. If
                you are checking a bill because it jumped, pair this page with the{' '}
                <Link href="/blog/why-is-my-sdge-bill-so-high" className={guideLink}>
                  SDG&amp;E high-bill checklist
                </Link>
                .
              </p>

              <QuickAnswer label="Find these first">
                <p>
                  <strong>Pricing plan</strong>, such as TOU-DR1 or EV-TOU-5, which sets every price. <strong>Billing days and
                  total kWh</strong>, so you can compare kWh per day with last year. <strong>kWh by time period</strong> on the
                  Electricity Dashboard: how much fell in on-peak hours, 4 to 9 p.m. <strong>Generation provider</strong>:
                  SDG&amp;E or a community choice provider.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="SDG&E bill numbers for 2026"
                  facts={[
                    { label: 'Base Services Charge', value: '$0.79343/day', note: 'About $24 a month; $0.39688 FERA', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeTouDr1Aug2026.url } },
                    { label: 'TOU-DR1 summer on-peak', value: '69.135¢/kWh', note: '4–9 p.m., from Aug 1, 2026', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeTouDr1Aug2026.url } },
                    { label: 'Baseline adjustment credit', value: '−10.702¢/kWh', note: 'Usage up to 130% of baseline', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeTouDr1Aug2026.url } },
                    { label: 'Climate Credit (electric)', value: '$49.36 × 2', note: 'August and September 2026 bills', source: { publisher: 'CPUC', date: RATE_SOURCES_CHECKED, url: SRC.cpucClimateCredit.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="Read SDG&E bill" utility="sdge" />
              </div>

              <h2>The parts of an SDG&amp;E bill</h2>
              <DataTable
                caption="What each part of an SDG&E bill shows"
                columns={['Section', 'What it shows', 'How to use it']}
                rows={[
                  ['Breakdown of current charges', 'A circular chart of the main parts of the bill, then an itemized list', 'See which part, delivery, generation or fixed charges, grew'],
                  ['Usage history', 'Bar graphs comparing this month with last month and the same month a year ago', 'Compare kWh, not dollars, with a year ago'],
                  ['Electricity Dashboard', 'Your highest-usage hour and total kWh by time period', 'See how much of your use fell from 4 to 9 p.m.'],
                  ['Demand information', 'Maximum demand for the month or year', 'Mainly relevant to business accounts'],
                  ['Payment options', 'Ways to pay, with contact information', 'Set up autopay or a payment arrangement'],
                  ['Definitions and notices', "SDG&E's definitions of charges and its policies and notices", 'Look up any line you do not recognize'],
                ]}
                note={<>Source: SDG&amp;E, Understanding your SDG&amp;E bill, checked September 23, 2026.</>}
              />

              <h2>Reading the time-of-use part</h2>
              <p>
                SDG&amp;E says a typical household is on TOU-DR1, a time-of-use plan, and that its TOU bills show electricity use by
                time period so you can take advantage of lower-priced off-peak and super off-peak hours. The Electricity Dashboard
                pinpoints your highest-usage hour of the month. If that hour falls between 4 and 9 p.m., it is costing you the
                on-peak price every day, weekends included, since SDG&amp;E&apos;s peak runs all week.
              </p>
              <p>
                Check the math against the plan. As our own arithmetic, a 30-day summer month on TOU-DR1 with 100 kWh on-peak,
                200 kWh off-peak and 200 kWh super off-peak comes to about $69.14, $92.84 and $74.87 in energy charges, plus
                $23.80 for the Base Services Charge: $260.65 before the baseline credit, taxes and fees. The baseline credit then
                takes 10.702 cents off each kWh up to 130% of your baseline allowance. If your bill is far from a check like this,
                confirm the plan name and the generation provider first.
              </p>

              <h2>If a community choice provider supplies your power</h2>
              <p>
                If your city buys power through a community choice provider and your account is enrolled, the provider&apos;s
                generation charge replaces SDG&amp;E&apos;s, and SDG&amp;E still bills delivery. SDG&amp;E&apos;s rate tables say those
                customers do not pay SDG&amp;E&apos;s commodity rate but do pay a Power Charge Indifference Adjustment set by the
                year they left SDG&amp;E&apos;s generation service. The residential PCIA rates in SDG&amp;E&apos;s August 2026 table
                range from about 1.4 cents per kWh for the 2009 vintage to about 4.8 cents for the 2024 through 2026 vintages.
              </p>

              <h2>Reading an SDG&amp;E solar bill (Solar Billing Plan)</h2>
              <p>
                Customers on SDG&amp;E&apos;s Solar Billing Plan see imports and exports split into generation and delivery:
              </p>
              <DataTable
                caption="Solar Billing Plan lines on an SDG&E bill"
                columns={['Line', 'What it means']}
                rows={[
                  ['Generation Import Charges', 'Charges for the electricity you used from the grid; your community choice provider supplies it if you are enrolled'],
                  ['Delivery Import Charges', 'Delivering that electricity, plus billing, customer care and infrastructure'],
                  ['Generation Export Credits', 'Credits for exports, valued by time of day; they can only offset Generation Import Charges'],
                  ['Delivery Export Credits', 'Credits for exports, valued by time of day; they can only offset Delivery Import Charges'],
                  ['Non-nettable charges', 'Base Services Charge, customer, meter and facilities charges, demand charges and surcharges, non-bypassable charges and fixed charges; credits cannot pay these'],
                  ['YTD remaining credits', 'Generation and delivery credits still available for future import charges'],
                  ['YTD net kWh', 'Imports minus exports so far; negative means you exported more than you used'],
                ]}
                note={<>Source: SDG&amp;E, Understanding Your Solar Billing Plan bill, checked September 23, 2026.</>}
              />
              <p>
                The bill is due every month. Unused credits roll forward. After 12 months you get a true-up bill; if you exported
                more than you imported over the year, it includes an Annual True-Up Adjustment charge for credits already given,
                and if you imported more, the adjustment is zero. Then the account resets. What SDG&amp;E pays per kWh exported,
                and the EV-TOU-5 rate these customers are on, is covered in{' '}
                <Link href="/blog/sdge-and-solar" className={guideLink}>
                  SDG&amp;E and solar
                </Link>
                .
              </p>

              <h2>Reading an SDG&amp;E NEM bill (legacy solar)</h2>
              <p>
                Customers still on net energy metering get a NEM summary on each bill. NEM Charges are the cost of the net kWh
                you bought from SDG&amp;E in the period; NEM Credits are the value of the net kWh your system over-generated. The
                Cumulative Balance is the running total of those charges and credits, and the True-Up Date is when SDG&amp;E
                reconciles the year; credits then reset to zero. SDG&amp;E says residential NEM customers can pay in full each
                month or pay only part, while fixed charges and taxes cannot be offset by generation credits. NEM customers also
                moved to the Base Services Charge.
              </p>

              <h2>How to read an SDG&amp;E meter with solar</h2>
              <p>
                SDG&amp;E&apos;s smart meter scrolls through several displays, each labeled by a number in the top left corner.
              </p>
              <DataTable
                caption="SDG&E smart meter displays for net metering customers"
                columns={['Display', 'What it shows']}
                rows={[
                  ['01', 'Date (month, day, year)'],
                  ['02', 'Time, in 24-hour format with seconds'],
                  ['10', 'Current net meter reading in kWh: delivered minus received'],
                  ['del', 'Energy delivered from the SDG&E grid to you'],
                  ['rec', 'Energy received from you onto the SDG&E grid'],
                ]}
                note={<>Source: SDG&amp;E, How to read your smart electric meter for net metering customers, and How to read your smart meter, checked September 23, 2026.</>}
              />
              <p>
                To measure usage, subtract an earlier reading from a later one: SDG&amp;E&apos;s own example goes from 001406 to
                001940, or 534 kWh. The meter does not show how much your panels produced in total, only how much flowed to the
                grid, which is the &ldquo;rec&rdquo; display. Your inverter or monitoring app is where total production shows up.
                Arrow symbols on the display show which way energy is flowing at the moment.
              </p>

              <h2>Next steps</h2>
              <p>
                To see how your plan&apos;s hours and prices compare with the others SDG&amp;E offers, read{' '}
                <Link href="/blog/sdge-time-of-use-rates-2026" className={guideLink}>
                  SDG&amp;E time-of-use rates and peak hours
                </Link>
                . For why San Diego prices are where they are, see{' '}
                <Link href="/blog/sdge-rate-increase-2026" className={guideLink}>
                  SDG&amp;E&apos;s rate increase history
                </Link>
                . The PG&amp;E version of this guide is{' '}
                <Link href="/blog/how-to-read-pge-bill" className={guideLink}>
                  how to read a PG&amp;E bill
                </Link>
                .
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <SourceList sources={sources} sourceCheckedDate={RATE_SOURCES_CHECKED} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <HubSpokeLinks hub="electric_bills" currentPath={path} />
            </div>

            <SolarInquiry topic="Read SDG&E bill" utility="sdge" variant="bill" heading="Compare a Solar Plan With Your SDG&E Bill" />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4">
        <TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
