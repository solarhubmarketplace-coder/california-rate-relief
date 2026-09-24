import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { SourceList } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, GuideHeader, QuickAnswer, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';

const path = '/blog/help-with-pge-bill';
const url = `https://ratereliefca.com${path}`;
const title = 'Help Paying Your PG&E Bill: 2026 Assistance Programs';
const h1 = 'Help With a PG&E Bill in 2026: Past-Due Help, Payment Plans and Discounts';
const description =
  'Behind on PG&E? REACH pays up to $800 after a shutoff notice, LIHEAP up to $1,000 and AMP forgives up to $8,000. Who qualifies, and what to do first.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources(
  'pgeFinancialAssistance',
  'pgeReach',
  'pgeAmp',
  'pgePaymentPlan',
  'pgeMatchMyPayment',
  'pgeLiheap',
  'csdLiheap',
  'pgeBudgetBilling',
  'pgeMedicalBaselineProgram',
);

const faqs = [
  {
    question: 'Can PG&E help me pay my past-due bill?',
    answer:
      "Yes, in several ways. PG&E can split a past-due balance into a payment plan or push the due date out up to 30 days. Its REACH program, run by Dollar Energy Fund, credits up to $800 to customers who have received a 15-day or 48-hour disconnection notice and have incomes at or below 200% of the federal poverty level. CARE and FERA customers who are more than 90 days behind can enroll in the Arrearage Management Plan and have up to $8,000 forgiven.",
  },
  {
    question: 'Who can help pay my PG&E bill?',
    answer:
      "Besides PG&E's own programs, the federal Low Income Home Energy Assistance Program (LIHEAP) pays bills through 31 local agencies overseen by California's Department of Community Services and Development. PG&E says LIHEAP can pay up to $1,000 toward past-due bills. You apply through your local agency, found by ZIP code on the CSD website or by calling 1-866-675-6623.",
  },
  {
    question: 'How do I get help with my PG&E bill near me?',
    answer:
      'LIHEAP and REACH both work through local agencies. For LIHEAP, look up your county agency on the CSD website or call 1-866-675-6623. For REACH, apply online with Dollar Energy Fund or call 1-877-660-6789, and PG&E suggests your local county agency for extra help with the application.',
  },
  {
    question: 'Is PG&E Match My Payment still available?',
    answer:
      'Not for new applicants. PG&E says Match My Payment is on hold for 2026 and is not accepting new applications. When it ran, it matched payments toward past-due bills dollar for dollar up to $1,000 for households up to 400% of the federal poverty level.',
  },
  {
    question: 'What is the PG&E Arrearage Management Plan?',
    answer:
      "A debt-forgiveness plan for CARE and FERA customers who owe at least $500 on a combined gas and electric bill ($250 gas-only), more than 90 days past due, have been PG&E customers for at least six months and have made at least one on-time payment. Twelve on-time monthly payments earn up to $8,000 of forgiveness. Missing two payments in a row, or three in total, ends enrollment. NEM solar customers are not eligible.",
  },
  {
    question: 'Will Budget Billing lower my PG&E bill?',
    answer:
      "No. Budget Billing spreads costs evenly using a 12-to-13-month rolling average, so the monthly amount is steadier, but you still pay for everything you use. It requires a history of on-time payments and is not available to customers on a net energy metering plan.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function HelpWithPgeBillPage() {
  return (
    <PublicLayout breadcrumbLabel="Help with a PG&E bill" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Help with a PG&E bill" kicker="PG&E · Bill help" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                If you are behind on a PG&amp;E bill, start with what PG&amp;E itself offers: a payment plan or a due-date
                extension of up to 30 days. If you have a disconnection notice and a lower income, PG&amp;E&apos;s REACH program
                can credit up to $800, and LIHEAP, run by local agencies, can pay up to $1,000. CARE and FERA customers far behind
                can have up to $8,000 forgiven through the Arrearage Management Plan.
              </p>
              <p>
                Every program below is from PG&amp;E&apos;s own assistance pages and the state agency that runs LIHEAP, checked
                September 23, 2026. Amounts and rules change, and several programs are first-come, first-served, so apply early
                rather than waiting for a shutoff date. This page is about paying a bill you already owe; if the bill itself looks
                wrong or keeps climbing, see{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={guideLink}>
                  why a PG&amp;E bill runs high
                </Link>
                .
              </p>

              <QuickAnswer label="What to do first">
                <p>
                  <strong>Before the due date:</strong> set up a payment plan or a due-date extension in your PG&amp;E account
                  under Payment Arrangements. <strong>If you have a 15-day or 48-hour disconnection notice:</strong> apply for
                  REACH (1-877-660-6789) and contact your local LIHEAP agency (1-866-675-6623). <strong>If you are income-qualified
                  and not yet enrolled:</strong> sign up for CARE or FERA, which lowers every future bill and opens the door to
                  debt forgiveness.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="PG&E bill help at a glance"
                  facts={[
                    { label: 'REACH one-time credit', value: 'Up to $800', note: 'Needs a disconnection notice; income ≤200% FPL', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeReach.url } },
                    { label: 'LIHEAP', value: 'Up to $1,000', note: 'Toward past-due bills, per PG&E', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeFinancialAssistance.url } },
                    { label: 'Arrearage Management Plan', value: 'Up to $8,000 forgiven', note: 'CARE/FERA, 12 on-time payments', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeAmp.url } },
                    { label: 'Due-date extension', value: 'Up to 30 days', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgePaymentPlan.url } },
                  ]}
                />
              </div>

              <h2>Which PG&amp;E program fits your situation</h2>
              <DataTable
                caption="PG&E bill assistance by situation"
                columns={['Situation', 'Program', 'What it gives', 'Key rule']}
                rows={[
                  ['Can pay, just not all at once', 'Payment plan', 'Past-due balance split into monthly installments', 'Pay each regular bill on time too'],
                  ['Can pay in a few weeks', 'Due-date extension', 'A new due date up to 30 days out', 'Cannot be changed once set'],
                  ['Disconnection notice, income ≤200% FPL', 'REACH', 'Up to $800 credit', 'Once per calendar year; not while in AMP'],
                  ['Past due, lower income', 'LIHEAP', 'Up to $1,000 toward past-due bills', 'Apply through a local agency'],
                  ['CARE/FERA, $500+ over 90 days past due', 'Arrearage Management Plan', 'Up to $8,000 forgiven', '12 on-time payments'],
                  ['Want steadier bills', 'Budget Billing', 'Monthly amount from a rolling average', 'Does not reduce what you owe'],
                ]}
                note={<>Sources: PG&amp;E Financial Assistance, REACH, AMP, Payment Plans and Budget Billing pages, checked September 23, 2026.</>}
              />

              <h2>Payment plans and due-date extensions</h2>
              <p>
                These are the fastest options and have no income test. A payment plan breaks the past-due balance into smaller
                monthly installments, which you pay on top of your regular bill, so you will see two due dates a month. A
                due-date extension instead promises the full past-due amount on a set date up to 30 days away. Both are set up
                online under Payment Arrangements.
              </p>
              <p>
                PG&amp;E&apos;s rules are strict. You need active service and a residential account, you cannot already have a
                payment plan, and you cannot be on automatic payments, Budget Billing or the Arrearage Management Plan. Once set,
                neither arrangement can be changed, and a plan cannot be switched to an extension or the reverse. Breaking a plan
                can make you ineligible for the next one and can lead to disconnection. You can pay a plan off early without
                penalty.
              </p>

              <h2>REACH: up to $800 after a disconnection notice</h2>
              <p>
                Relief for Energy Assistance through Community Help is PG&amp;E&apos;s one-time emergency credit, processed by
                Dollar Energy Fund. To qualify you must be the main customer on the account, have received a 15-day or 48-hour
                disconnection notice, have a household income at or below 200% of the federal poverty level, not have received
                REACH earlier in the same calendar year, and not be enrolled in the Arrearage Management Plan. The credit goes
                straight onto the past-due bill, first come, first served. PG&amp;E says REACH helped nearly 64,000 customers in
                2025.
              </p>
              <p>
                Apply online through Dollar Energy Fund or by phone at 1-877-660-6789. Because funding runs out, apply as soon as
                the notice arrives.
              </p>

              <h2>LIHEAP: federal help through local agencies</h2>
              <p>
                The Low Income Home Energy Assistance Program is federal money that California&apos;s Department of Community
                Services and Development (CSD) passes to 31 local agencies. It can make a one-time payment toward heating or
                cooling bills, help in an energy crisis such as a shutoff, and pay for weatherization. PG&amp;E says LIHEAP can put
                up to $1,000 toward past-due bills; the amount you get depends on your agency, location and funding. CSD says
                California received $236.7 million in LIHEAP funding for federal fiscal year 2026.
              </p>
              <DataTable
                caption="LIHEAP 2026 monthly income limits in California"
                columns={['Household size', 'Monthly income limit']}
                rows={[
                  ['1', '$3,331.66'],
                  ['2', '$4,356.83'],
                  ['3', '$5,382.00'],
                  ['4', '$6,407.16'],
                  ['5', '$7,432.25'],
                ]}
                note={<>Source: California Department of Community Services and Development, energy bill help page, checked September 23, 2026. Larger households have higher limits; agencies also prioritize the elderly, people with disabilities and households with young children.</>}
              />
              <p>
                Find your agency by ZIP code on the CSD website or call the LIHEAP hotline at 1-866-675-6623. This is the answer
                to &ldquo;help with my PG&amp;E bill near me&rdquo;: the agency serving your county handles the application.
              </p>

              <h2>Arrearage Management Plan: up to $8,000 forgiven</h2>
              <p>
                AMP is for residential customers enrolled in CARE or FERA who owe at least $500 on a combined gas and electric bill,
                or $250 on gas only, more than 90 days past due. You also need at least six months as a PG&amp;E customer and at
                least one on-time payment. Each month you pay your current bill on time, PG&amp;E forgives part of the old
                balance; 12 full on-time payments earn the full forgiveness, up to $8,000. Anything owed above $8,000 is set aside
                until the plan ends.
              </p>
              <p>
                You can miss up to two payments that are not in a row, as long as you catch up by the next due date. Two missed
                payments in a row, or three in total, end the enrollment. Net energy metering customers, master-metered customers
                and their sub-metered tenants cannot enroll. Sign up in your PG&amp;E account under Assistance Programs or call
                1-877-660-6789.
              </p>

              <h2>Match My Payment is on hold for 2026</h2>
              <p>
                PG&amp;E&apos;s Match My Payment program matched payments toward past-due bills dollar for dollar, up to $1,000, for
                households up to 400% of the federal poverty level. PG&amp;E says it matched more than $25 million in payments, but
                the program is on hold for 2026 and not accepting new applications. If you read about it elsewhere, check
                PG&amp;E&apos;s page before counting on it.
              </p>

              <h2>Discounts that lower every future bill</h2>
              <p>
                Help with one past-due bill does not fix the next one. PG&amp;E lists CARE at 35% or more off electricity and 20%
                or more off gas, and FERA at 18% off, for income-qualified households. How to qualify and apply is covered in{' '}
                <Link href="/blog/income-qualified-bill-discount-pge" className={guideLink}>
                  PG&amp;E&apos;s CARE and FERA discounts
                </Link>
                . Enrollment in CARE or FERA is also what makes you eligible for the Arrearage Management Plan above.
              </p>
              <p>
                <strong>Medical Baseline</strong> is not income-based. If someone in the home depends on power for a qualifying
                condition or device, such as an oxygen concentrator, CPAP machine or dialysis, PG&amp;E gives roughly 500 kWh of
                electricity and 25 therms of gas a month at the lowest price on your plan, or a 12% discount on some time-of-use
                plans, plus extra warnings before a Public Safety Power Shutoff. A doctor must certify the application.
              </p>

              <h2>Budget Billing: steadier, not smaller</h2>
              <p>
                Budget Billing recalculates your payment every month from a 12-to-13-month rolling average and adds 1/12 of any
                balance or credit. It smooths out summer and winter spikes but does not reduce what you owe. PG&amp;E requires a
                history of on-time, complete payments, and customers on a net energy metering plan are not eligible. You can
                leave it at any time; any remaining balance moves to your next bill.
              </p>

              <h2>After the emergency: cutting the bill itself</h2>
              <p>
                Once the account is current, the question becomes why the bill got that high. Check your rate plan, your daily
                usage and the hours you use power; our guide to{' '}
                <Link href="/blog/how-to-lower-pge-bill" className={guideLink}>
                  lowering a PG&amp;E bill
                </Link>{' '}
                walks through each lever, and{' '}
                <Link href="/blog/how-to-read-pge-bill" className={guideLink}>
                  how to read a PG&amp;E bill
                </Link>{' '}
                shows where each charge appears. Solar is a long-term decision, not a fix for a past-due balance, and several
                assistance programs above are not open to net energy metering customers.
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

            <SolarInquiry topic="PG&E bill help" utility="pge" variant="bill" heading="Review Your PG&E Bill Options" />
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
