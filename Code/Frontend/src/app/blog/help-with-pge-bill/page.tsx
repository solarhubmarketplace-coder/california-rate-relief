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
import { HubUpLink } from '@/components/growth/HubUpLink';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/help-with-pge-bill';
const url = `https://ratereliefca.com${path}`;
const title = 'Help Paying Your PG&E Bill: 2026 Assistance Programs';
const h1 = 'Help Paying Your PG&E Bill in 2026: Assistance Programs, Payment Plans and Discounts';
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
  'pgeRule9',
  'pgeRule10',
  'pgeRule17_1',
  'pgeBillForecast',
  'pgeCompareBills',
  'pgeRatePlans',
  'pgeBscNews',
  'pgeResRatesCurrent',
  'pgeNscFaq',
  'cpucClimateCredit',
  'cpucMyBill',
  'pgeBillsDownNews',
);

const faqs = [
  {
    question: "What can I do if I can't afford my PG&E bill?",
    answer:
      'Call PG&E before the due date and ask for a payment plan or an extension of up to 30 days. If you have a disconnection notice and a low income, apply for REACH (up to $800). Apply for LIHEAP through your local agency (PG&E says up to $1,000). Enroll in CARE or FERA if you qualify, which lowers every future bill and opens the Arrearage Management Plan, which can forgive up to $8,000 of old debt.',
  },
  {
    question: 'Can PG&E fix an incorrect bill?',
    answer:
      "Yes. Under PG&E's Electric Rule 10, if you question a bill PG&E must explain it and issue a corrected bill if it was wrong. Under Rule 17.1, PG&E refunds a billing-error overcharge for up to three years, and can back-bill a residential undercharge for only three months. If you and PG&E still disagree, you can take the dispute to the CPUC; a residential customer who cannot pay the disputed amount does not have to deposit it during the CPUC's review.",
  },
  {
    question: 'How often does PG&E bill?',
    answer:
      "Monthly. PG&E's Electric Rule 9 sets a regular billing period of once each month, prorated when a period is shorter than 27 days or longer than 33 days because meter-read dates vary. Solar customers on net energy metering also get an annual true-up statement.",
  },
  {
    question: 'Can I see my projected PG&E bill?',
    answer:
      "Yes, with PG&E's free Bill Forecast Alert. You set a bill amount, and PG&E emails, texts or calls if your bill is on track to exceed it, so you have time to cut use before the statement. It is open to single-location customers with a SmartMeter; net energy metering and Direct Access customers are not eligible.",
  },
  {
    question: 'Why is my PG&E bill negative?',
    answer:
      'A negative amount is a credit: you have paid more than you owe, or credits such as the California Climate Credit or solar credits were larger than that period’s charges. The credit is applied to future bills. If a solar true-up statement ends below zero, PG&E lets you leave the credit on the account or request a check when it is over $1.',
  },
  {
    question: 'Is there a PG&E bill calculator or estimator?',
    answer:
      "Signed in to your PG&E account, the compare-bills tool explains why this month's charges differ from past bills and the rate comparison prices your usage on other plans. To estimate by hand, multiply your kWh by your plan's price and add the daily Base Services Charge: 400 kWh on E-TOU-C at the 39.940-cent summer off-peak price, plus 30 days at $0.79343, is about $183.56 before any baseline credit, peak use or taxes.",
  },
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
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
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
              <HubUpLink path="/blog/help-with-pge-bill" />
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
                or more off gas, and FERA at 18% off, for income-qualified households. The 2026 income limits and steps are in{' '}
                <Link href="/blog/income-qualified-bill-discount-pge" className={guideLink}>
                  how to qualify and apply for PG&amp;E CARE
                </Link>{' '}
                and FERA. Enrollment in CARE or FERA is also what makes you eligible for the Arrearage Management Plan above.
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

              <h2>Checking a PG&amp;E bill before you pay it</h2>
              <p>
                A bill that looks wrong or unaffordable is worth checking before you set up a payment plan. These are the
                questions PG&amp;E customers ask most, answered from PG&amp;E&apos;s own tariff rules and account tools.
              </p>
              <h3>How often PG&amp;E bills, and why totals move</h3>
              <p>
                PG&amp;E bills monthly. Its Electric Rule 9 sets a regular billing period of once each month, with a pro-rata
                correction when a period runs shorter than 27 days or longer than 33, because meter reads cannot always fall on
                the same day. A 33-day bill after a 28-day one will look higher with no change in use, so compare kWh per day.
                If PG&amp;E cannot read the meter, Rule 9 lets it bill an estimate based on your past use; an estimate caused by
                something within PG&amp;E&apos;s control is treated as a billing error.
              </p>
              <h3>What changed on PG&amp;E bills in 2026</h3>
              <p>
                Three things. On March 1, 2026 PG&amp;E began the income-based Base Services Charge, about $24 a month for most
                customers, $12 for FERA and deed-restricted affordable housing and $6 for CARE, and cut per-kWh prices to offset
                it. PG&amp;E says prices were then 13% lower than in January 2024, but whether your total fell depends on your use.
                And the California Climate Credit moved: in 2026 PG&amp;E electric customers receive $36.18 on the August bill and
                again on the September bill, instead of the spring and fall credits of past years.
              </p>
              <h3>A bill higher than usual</h3>
              <p>
                Signed in to your account, PG&amp;E&apos;s compare-bills tool puts this month next to last month or the same month
                last year and shows why the charges changed, with usage by day and hour and next to the weather. If daily use
                is up, look at heating, cooling, a pool pump or a new EV. If use is flat but charges rose, check the season,
                your plan&apos;s peak hours and whether a credit from last month is missing. The{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={guideLink}>
                  PG&amp;E high-bill checklist
                </Link>{' '}
                goes through each cause.
              </p>
              <h3>A projected bill, and estimating your own</h3>
              <p>
                PG&amp;E&apos;s free Bill Forecast Alert lets you set a limit for the month and warns you by email, text or phone
                when you are on track to exceed it. It is open to single-location customers with a SmartMeter, but not to net
                energy metering or Direct Access customers. PG&amp;E&apos;s other estimating tool also sits inside your online
                account: the rate plan comparison prices your own usage on each plan. To estimate by hand, multiply kWh by your
                plan&apos;s price and add the daily Base Services Charge. For example, 400 kWh at E-TOU-C&apos;s summer off-peak
                price of 39.940 cents is $159.76, plus 30 days at $0.79343 is $23.80, about $183.56 before the baseline credit,
                any peak-hour use and taxes. Every plan&apos;s prices are in{' '}
                <Link href="/blog/pge-rate-schedules" className={guideLink}>
                  PG&amp;E&apos;s residential rate schedules
                </Link>
                .
              </p>
              <h3>Why a PG&amp;E bill can be negative</h3>
              <p>
                A negative balance is a credit, not an error. It happens when you paid more than you owed, or when credits such
                as the Climate Credit or solar credits exceed that period&apos;s charges. The credit carries to your next bill. On
                a solar true-up statement that ends below zero, PG&amp;E says you can leave the credit on the account for future
                energy charges or ask for a check if it is more than $1.
              </p>
              <h3>If the bill is wrong</h3>
              <p>
                Ask PG&amp;E for an explanation first; its Electric Rule 10 says that if a bill is found incorrect, PG&amp;E will
                issue a corrected bill. When a billing error overcharged you, Rule 17.1 has PG&amp;E refund up to three years of
                the overcharge; when it undercharged a residential customer, PG&amp;E can back-bill only three months. If you and
                PG&amp;E cannot agree, you can take the dispute to the CPUC, and a residential customer who cannot pay the
                disputed amount does not have to deposit it with the CPUC while it reviews the case.
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
                assistance programs above are not open to net energy metering customers. When you are ready to look at it,
                start with{' '}
                <Link href="/blog/pge-solar-program" className={guideLink}>
                  PG&amp;E&apos;s solar and community solar programs
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
