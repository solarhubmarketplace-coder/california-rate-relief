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

const path = '/blog/how-to-read-pge-bill';
const url = `https://ratereliefca.com${path}`;
const title = 'How to Read Your PG&E Bill: Every Page and Charge';
const h1 = 'How to Read a PG&E Bill in 2026: The Account Summary, Electric Charges, CCA Lines and Solar Statements';
const description =
  'A PG&E bill has five parts: account summary, service notes, electric, gas and a breakdown. What each line means, how to check the math, and solar bills.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources(
  'pgeUnderstandBill',
  'pgeSolarBill',
  'pgeResRatesCurrent',
  'pgeEv2Tariff',
  'pgeBaseline',
  'cpucClimateCredit',
  'cpucNbt',
);

const faqs = [
  {
    question: 'How do I understand my PG&E bill?',
    answer:
      "Read it in this order. Page 1 is the account summary: amount due, due date and a 12-month history. Page 3 shows your electric charges, including the billing dates, your rate plan and your kWh by time period. Page 4 does the same for gas, and page 5 breaks the charges into line items. Page 2 holds phone numbers, dispute rights and definitions.",
  },
  {
    question: 'What is the Base Services Charge on my PG&E bill?',
    answer:
      "A daily fixed charge PG&E added on March 1, 2026, alongside lower prices per kWh. It is $0.79343 a day for most customers, about $24 a month, with lower tiers of $0.39688 and $0.19713 a day for income-qualified households. It does not change with how much you use.",
  },
  {
    question: 'Why does my PG&E bill show generation charges from another company?',
    answer:
      "If you live where a community choice aggregator supplies electricity, the aggregator's generation charges replace PG&E's, and PG&E still bills you for delivery. You will also see a Power Charge Indifference Adjustment, which PG&E says ensures both its own customers and those who buy electricity from other providers pay for the above-market costs of electric generation resources.",
  },
  {
    question: 'How do I read a PG&E bill with solar?',
    answer:
      "Solar customers get a monthly net energy metering statement that shows the difference between what the system produced and what PG&E supplied, as a credit or a charge, plus a year-to-date total. The Base Services Charge is billed monthly and cannot be offset by generation credits. At the end of the 12th month, the annual true-up settles the year, and any remaining credits reset to zero.",
  },
  {
    question: 'What is the California Climate Credit on my PG&E bill?',
    answer:
      'Your share of payments from the state program that makes large emitters buy carbon permits. In 2026, PG&E electric customers receive $36.18 on the August bill and again on the September bill, and PG&E gas customers received $46.26 in April, per the CPUC.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function HowToReadPgeBillPage() {
  return (
    <PublicLayout breadcrumbLabel="How to read a PG&E bill" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="How to read a PG&E bill" kicker="PG&E · Billing" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                A PG&amp;E bill has five parts. Page 1 is the account summary with the amount due. Page 2 holds phone numbers,
                dispute rights and definitions. Page 3 is your electric charges, page 4 your gas charges, and page 5 breaks the
                charges into line items. To understand a bill, go straight to page 3: your rate plan, billing dates and kWh by
                time period explain most of the total.
              </p>
              <p>
                The layout and definitions below are from PG&amp;E&apos;s Understand Your Bill and Solar Bill pages, and the prices
                from its residential rate table for March 1, 2026 onward, all checked September 23, 2026. Since March 2026, every
                PG&amp;E residential bill also shows a Base Services Charge, so a bill from this year will not line up exactly with
                one from 2025.
              </p>

              <QuickAnswer label="Three numbers to find first">
                <p>
                  <strong>Billing days</strong> (page 3): a 33-day bill is not comparable to a 28-day one. <strong>Total kWh and
                  kWh per period</strong> (page 3): how much you used, and how much of it fell in peak hours.{' '}
                  <strong>Rate plan</strong> (page 3): E-TOU-C, E-TOU-D, EV2-A, E-ELEC or E-1, which sets every price on the
                  bill.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="What changed on PG&E bills in 2026"
                  facts={[
                    { label: 'Base Services Charge', value: '$0.79343/day', note: 'From March 1, 2026; about $24 a month', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'Climate Credit (electric)', value: '$36.18 × 2', note: 'August and September 2026 bills', source: { publisher: 'CPUC', date: RATE_SOURCES_CHECKED, url: SRC.cpucClimateCredit.url } },
                    { label: 'Solar minimum charge', value: 'Replaced', note: 'By the Base Services Charge, March 2026', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeSolarBill.url } },
                    { label: 'Net surplus rate (NEM true-up)', value: '≈2–4¢/kWh', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeSolarBill.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="Read PG&E bill" utility="pge" />
              </div>

              <h2>A PG&amp;E bill, page by page</h2>
              <DataTable
                caption="What each page of a PG&E bill shows"
                columns={['Page', 'What is on it', 'What to check']}
                rows={[
                  ['1. Account summary', 'Account number, service address, charges, payments, total due and due date; enrolled programs; 12-month billing history; messages; payment stub', 'Is the amount due what you expected? Are CARE, FERA or other programs listed?'],
                  ['2. Customer service', 'Phone numbers, dispute procedures and CPUC complaint information, key definitions, payment methods', 'Where to call and how to dispute'],
                  ['3. Electric charges', 'Billing dates, service agreement ID, rate plan, kWh used, peak and off-peak breakdown, total electric charges with credits and taxes, daily usage chart', 'Billing days, rate plan, kWh per day, share of kWh in peak hours'],
                  ['4. Gas charges', 'Billing dates, therms used, fixed fees, taxes and fees, gas procurement cost, daily usage chart', 'Therms per day against the same month last year'],
                  ['5. Charges breakdown', 'Itemized electric charges line by line', 'Whether each line matches your plan'],
                ]}
                note={<>Source: PG&amp;E, Understand Your Bill, checked September 23, 2026.</>}
              />

              <h2>Reading the electric charges on page 3</h2>
              <p>
                This page does most of the explaining. Start with the billing dates and count the days. Next find the rate plan
                name and match it to PG&amp;E&apos;s prices. Then look at your kWh split by time period: on a time-of-use plan, the
                bill shows how much you used in peak, part-peak and off-peak hours. Divide total kWh by the number of days to get
                kWh per day, which is the fairest way to compare two bills. The daily usage chart shows which days drove the
                total, usually the hottest or coldest ones.
              </p>
              <p>
                If you are on E-TOU-C or E-1, look for your baseline. PG&amp;E defines it as an allotment of electricity at the
                lowest price based on where you live, your heating source and the season. On E-TOU-C it shows up as a credit of
                8.140 cents per baseline kWh; on E-1 it is the line between the 32.561-cent Tier 1 price and the 40.702-cent Tier 2
                price.
              </p>

              <h2>Check the math yourself: a worked example</h2>
              <p>
                Our own arithmetic, for a 30-day summer bill on E-TOU-C in baseline territory X (9.8 kWh a day for homes without
                electric heat) with 450 kWh used, 90 of them between 4 and 9 p.m.:
              </p>
              <DataTable
                caption="Example PG&E E-TOU-C summer bill, before taxes and fees (prices from March 1, 2026)"
                columns={['Line', 'Calculation', 'Amount']}
                rows={[
                  ['Peak energy', '90 kWh × 52.240¢', '$47.02'],
                  ['Off-peak energy', '360 kWh × 39.940¢', '$143.78'],
                  ['Baseline credit', '294 kWh (9.8 × 30) × −8.140¢', '−$23.93'],
                  ['Base Services Charge', '30 days × $0.79343', '$23.80'],
                  ['Total', '', '$190.67'],
                ]}
                note={<>Illustration only, built from PG&amp;E&apos;s residential rate table and baseline quantities, checked September 23, 2026. A real bill adds local taxes and fees, and August and September bills subtract the Climate Credit.</>}
              />
              <p>
                If your own numbers come out far from the bill, the usual reasons are a different rate plan than you think, a
                community choice provider supplying generation, a billing period that crossed a price change, or a credit such as
                the Climate Credit landing that month.
              </p>

              <h2>What each charge means</h2>
              <DataTable
                caption="PG&E bill terms, as PG&E defines them"
                columns={['Term', 'Meaning']}
                rows={[
                  ['Base Services Charge', 'A monthly fixed charge that came with lower kWh prices; it does not depend on usage'],
                  ['Baseline allowance', 'Electricity at the lowest price, set by location, heating source and season'],
                  ['Generation charges', 'The cost of creating the electricity that powers your home'],
                  ['Distribution charge', 'The lower-voltage system of power lines, poles, substations and transformers'],
                  ['Power Charge Indifference Adjustment (PCIA)', 'Shares above-market generation costs between PG&E customers and those who buy power elsewhere'],
                  ['Public purpose programs', 'Programs set by law, such as low-income assistance and energy efficiency'],
                  ['Wildfire Hardening Charge', 'Repays bonds for preventing and mitigating catastrophic wildfires'],
                  ['Energy Cost Recovery Amount', 'Helps reduce the cost of financing PG&E’s emergence from bankruptcy'],
                  ['Franchise fee', 'Pays cities and counties for the right to use public streets'],
                  ['California Climate Credit', 'Your share of payments from the state carbon permit program'],
                ]}
                note={<>Source: PG&amp;E, Understand Your Bill glossary, checked September 23, 2026.</>}
              />
              <p>
                Most of these do not appear as separate prices on page 3 because PG&amp;E bills a single total price per kWh. The
                tariff for each plan shows how that total splits into generation, distribution, transmission, public purpose,
                wildfire and bond charges; the breakdown on page 5 reflects that split.
              </p>

              <h2>If a community choice provider supplies your power</h2>
              <p>
                If you buy generation from a community choice aggregator, your bill shows the aggregator&apos;s generation charges
                in place of PG&amp;E&apos;s, while PG&amp;E keeps billing delivery, and the Power Charge Indifference Adjustment
                appears as its own line. This is the line people often read
                as a mystery third-party charge; our guide to{' '}
                <Link href="/blog/what-is-3rd-party-electric-on-pge-bill" className={guideLink}>
                  third-party electric charges on a PG&amp;E bill
                </Link>{' '}
                explains it with a real joint rate comparison.
              </p>

              <h2>How to read a PG&amp;E bill with solar</h2>
              <p>
                Solar customers get a monthly net energy metering statement. PG&amp;E says it shows the difference between the
                energy your system produced and the electricity PG&amp;E supplied, as a credit or a charge, along with the service
                charge, any gas or non-energy charges, and a year-to-date running total.
              </p>
              <ul>
                <li>
                  <strong>Base Services Charge.</strong> Since March 2026, residential NEM customers moved from the Minimum
                  Electric Charge to the Base Services Charge, about $24 a month for most. PG&amp;E says it cannot be offset by
                  monthly generation credits, so solar homes pay it every month.
                </li>
                <li>
                  <strong>Annual true-up.</strong> At the end of the 12th month of your billing cycle, the true-up statement
                  reconciles all energy charges and credits and any net surplus compensation. By law, remaining credits reset to
                  zero before the next 12-month cycle.
                </li>
                <li>
                  <strong>Net surplus compensation.</strong> If your system produced more than you used over the year, PG&amp;E
                  pays a CPUC-set rate of roughly 2 to 4 cents per kWh for the excess.
                </li>
              </ul>
              <p>
                Newer systems on the Solar Billing Plan are on the E-ELEC rate, which the CPUC requires for PG&amp;E customers on
                the net billing tariff, and their exports earn hourly Energy Export Credits rather than retail-rate credits. The
                true-up itself is covered in{' '}
                <Link href="/solar-problems/true-up-bill-california-explained" className={guideLink}>
                  what a NEM true-up is
                </Link>{' '}
                and PG&amp;E&apos;s NEM rules in{' '}
                <Link href="/blog/nem-pge" className={guideLink}>
                  PG&amp;E net metering explained
                </Link>
                .
              </p>

              <h2>When the bill still looks wrong</h2>
              <p>
                Page 2 lists PG&amp;E&apos;s dispute procedures and how to reach the CPUC if a dispute is not resolved. Before
                calling, compare kWh per day with the same month last year and confirm your rate plan and generation provider.
                If the bill is right but too high, see{' '}
                <Link href="/blog/how-to-lower-pge-bill" className={guideLink}>
                  how to lower a PG&amp;E bill
                </Link>
                ; if you are behind on it, see{' '}
                <Link href="/blog/help-with-pge-bill" className={guideLink}>
                  help paying a PG&amp;E bill
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

            <SolarInquiry topic="Read PG&E bill" utility="pge" variant="bill" heading="Compare a Solar Plan With Your PG&E Bill" />
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
