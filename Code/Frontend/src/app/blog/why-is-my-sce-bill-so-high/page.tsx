import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { BillComparison } from '@/components/growth/BillComparison';
import { SourceList } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/why-is-my-sce-bill-so-high';
const url = `https://ratereliefca.com${path}`;
const title = 'Why Is My Edison Bill So High? SCE Bill Checklist (2026)';
const h1 = 'Why Is My Edison Bill So High? How to Check an SCE Bill in 2026';
const description =
  'An SCE bill runs high for five reasons: more days, more kWh, summer 4–9 p.m. prices, the Base Services Charge or a missing credit. Check each in order.';
const published = '2026-04-24';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources('sceTou', 'sceTiered', 'sceBsc', 'sceNemBill', 'sceRateOptions', 'sceRateCompare', 'dceSolar', 'paoQ2_2026', 'paoQ3_2025', 'cpucClimateCredit', 'cpucCareFera', 'cpucNbt', 'smudResRates', 'scePastBills');

const faqs = [
  {
    question: 'Why is my SCE bill so high this month?',
    answer:
      "Compare kWh per day with the same month last year before anything else. If daily use is similar, look at the season and the hour: SCE's TOU-D-4-9PM plan charged about 58 cents per kWh on summer weekday evenings against 34 cents off-peak, per SCE's plan page. Also check whether the California Climate Credit, $36.00 on SCE bills in August and again in September 2026, is missing from the bill you are comparing.",
  },
  {
    question: 'How do I get a copy of my SCE bill?',
    answer:
      "Log in to SCE's My Account, open the Billing & Payment Options card and choose Billing & Payment History, where you can view up to 36 months of charges and payments and download PDFs of past bills. SCE's Copy of Bill self-service form also returns PDF copies: up to three years of history, 12 bills at a time.",
  },
  {
    question: 'Did Edison raise rates recently?',
    answer:
      "Yes. SCE's residential average rate rose about 13.1% on October 1, 2025, when its 2025 general rate case took effect, per the CPUC Public Advocates Office. Two small cuts followed, on January 1 and June 1, 2026, leaving the average at 34.4 cents per kWh.",
  },
  {
    question: 'What is the average SCE bill?',
    answer:
      "It depends heavily on where you live. The CPUC Public Advocates Office's estimates as of June 1, 2026 run from about $81 a month for a CARE customer in cool climate zone 6 to about $254 for a non-CARE customer in hot zone 15, where homes average around 700 kWh a month. SMUD's June 1, 2026 comparison prices a 750 kWh SCE month at $283.",
  },
  {
    question: 'Why is my SCE bill so high with solar panels?',
    answer:
      "Solar customers still pay SCE's daily Base Services Charge and set delivery and nonbypassable fees every month. On net energy metering's annual billing option, the net energy charges for the year come due at the annual settlement, which can look like a large bill. On the newer Solar Billing Plan, charges are due monthly and exports are usually credited below retail prices.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function WhyIsMySCEBillSoHigh() {
  return (
    <PublicLayout breadcrumbLabel="Why is my SCE bill so high?" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Why is my SCE bill so high?" kicker="SCE · Billing" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                An Edison bill usually jumps for one of five reasons: a longer billing period, more kWh per day, summer
                4-to-9 p.m. prices, the Base Services Charge SCE added in November 2025, or a credit that stopped. SCE&apos;s
                average rate also rose about 13.1% on October 1, 2025. Compare your daily kWh with last year first.
              </p>
              <p>
                That order matters because each check rules out the next. If daily use is up, the fix is in the house; if
                daily use is flat but the dollars rose, it is the price. This page covers Southern California Edison
                specifically; the statewide picture is in our{' '}
                <Link href={hub.href} className={guideLink}>
                  guide to high California electric bills
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="SCE numbers behind the bill"
                  facts={[
                    { label: 'SCE residential average, June 1, 2026', value: '34.4¢/kWh', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                    { label: 'TOU-D-4-9PM, summer weekday 4–9 p.m.', value: '≈58¢/kWh', note: 'Off-peak ≈34¢', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceTou.url } },
                    { label: 'Base Services Charge', value: '$0.79/day', note: '$12 FERA, $6 CARE per month', source: { publisher: 'SCE', date: RATE_SOURCES_CHECKED, url: SRC.sceBsc.url } },
                    { label: 'SCE customers behind on bills, May 2026', value: '17%', note: 'Average owed $733', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="SCE bill review" utility="sce" />
              </div>

              <h2>Start with two bills from comparable periods</h2>
              <p>
                Pull the current bill and the same season from last year if you have it. If you no longer have the paper
                copy, SCE&apos;s My Account shows up to 36 months of bill history with PDFs, and its Copy of Bill form returns up
                to three years of bills, 12 at a time. Record the billing days, total kWh,
                electric charges, rate-plan name and any generation-provider line. A larger bill over more days is not the
                same change as a larger bill over the same number of days.
              </p>
            </div>

            <div className="my-8">
              <BillComparison utilityName="SCE" />
            </div>

            <div className="prose prose-slate max-w-none">
              <h2>Read the change in this order</h2>
              <p>
                <strong>1. Billing days and kWh per day.</strong> Divide total kWh by billing days on each bill. The Public
                Advocates Office says SCE customers in hot climate zone 15 average about 700 kWh a month and those in cool
                zone 6 about 385, so where you live sets the baseline for what is normal.
              </p>
              <p>
                <strong>2. Summer and the peak hours.</strong> SCE&apos;s summer runs June through September, and most homes
                are on a time-of-use plan. SCE lists these prices on its plan page, checked September 23, 2026, for customers
                who buy both delivery and generation from SCE:
              </p>
              <DataTable
                caption="SCE time-of-use prices as listed by SCE (cents per kWh, rounded)"
                columns={['Plan', 'Summer weekday peak', 'Summer off-peak', 'Winter 4/5–8/9 p.m.', 'Winter 8 a.m.–4/5 p.m.']}
                rows={[
                  ['TOU-D-4-9PM', '58¢ (4–9 p.m.)', '34¢', '51¢', '33¢'],
                  ['TOU-D-5-8PM', '74¢ (5–8 p.m.)', '34¢', '60¢', '32¢'],
                  ['TOU-D-PRIME', '59¢ (4–9 p.m.)', '26¢', '56¢', '24¢'],
                ]}
                note={<>Source: SCE Time-of-Use Residential Rate Plans, checked September 23, 2026. Summer weekend evenings are priced at a lower mid-peak rate (46¢, 54¢ and 40¢). TOU-D-4-9PM and 5-8PM also give a 10¢-per-kWh baseline credit; TOU-D-PRIME does not.</>}
              />
              <p>
                A summer evening kWh on TOU-D-5-8PM costs more than twice an off-peak one. Air conditioning that runs from
                late afternoon into the evening is the most common way a July or August bill doubles. For the full plan
                details, see{' '}
                <Link href="/blog/sce-time-of-use-rates-2026" className={guideLink}>
                  SCE&apos;s time-of-use plans and peak hours
                </Link>
                .
              </p>
              <p>
                <strong>3. Baseline and tiers.</strong> On SCE&apos;s tiered Schedule D, the price as of June 1, 2026 was 30
                cents per kWh up to your baseline allowance and 40 cents above it. Allowances run from 11.4 kWh a day in cool
                region 6 to 45.0 kWh a day in hot region 15 in summer, and SCE adds 16.5 kWh a day for Medical Baseline
                customers. The full list of plans is in{' '}
                <Link href="/blog/sce-rate-schedules" className={guideLink}>
                  SCE residential rate schedules
                </Link>
                .
              </p>
              <p>
                <strong>4. The Base Services Charge.</strong> In November 2025 SCE replaced its old Basic Charge with a Base
                Services Charge, about $24 a month for most customers, $12 for FERA customers and qualifying affordable
                housing, and $6 for CARE customers, and cut the per-kWh price by about 10%. SCE&apos;s own chart says low-use
                homes may see a higher bill and high-use homes a lower one. Solar customers pay it too. The full list of
                what moved on SCE statements is in{' '}
                <Link href="/blog/sce-rate-increase-2026" className={guideLink}>
                  what changed on SCE bills since November 2025
                </Link>
                .
              </p>
              <p>
                <strong>5. Rate changes.</strong> SCE&apos;s residential average rose about 13.1% on October 1, 2025, when its
                2025 general rate case took effect, then fell about 2.3% on January 1, 2026 and 0.1% on June 1, 2026, per the
                CPUC Public Advocates Office. If you are comparing a 2025 bill with a 2026 one, part of the difference is the
                price. The full timeline is in the{' '}
                <Link href="/blog/sce-rate-increase-2026" className={guideLink}>
                  SCE rate increase history
                </Link>
                .
              </p>
              <p>
                <strong>6. Credits.</strong> The California Climate Credit came to SCE residential bills in August and
                September 2026, $36.00 each time, per the CPUC. An October bill without it can look about $36 higher on the
                same usage.
              </p>
              <p>
                <strong>7. Generation and delivery.</strong> If a community choice provider buys your power, its generation
                charges and SCE&apos;s delivery charges are separate sections of one bill and answer different questions.
              </p>

              <h2>If the bill lists Desert Community Energy</h2>
              <p>
                For a Palm Springs-area account, confirm the generation provider on the bill before applying an SCE-only
                solar-billing explanation. Desert Community Energy says it handles its solar customers&apos; generation charges
                and credits and runs its own true-up, at the end of May for most net energy metering customers, while SCE
                continues delivery charges. For a question about the generation line, contact the provider shown there; for
                delivery, meter or recorded-usage questions, contact SCE.
              </p>

              <h2>What is the average SCE bill?</h2>
              <p>
                One average would hide more than it shows, because usage varies so much by region. The CPUC Public Advocates
                Office tracks estimated SCE bills in a hot and a cool climate zone. As of June 1, 2026, they run from about $81
                a month for a CARE customer in cool zone 6 to about $254 for a non-CARE customer in hot zone 15. SMUD&apos;s
                published comparison, also as of June 1, 2026, prices a 750 kWh month at $283 on SCE. For a statewide
                comparison, see the{' '}
                <Link href="/blog/average-utility-bill-california" className={guideLink}>
                  average California utility bill
                </Link>
                .
              </p>

              <h2>Why an SCE bill stays high with solar panels</h2>
              <p>
                SCE&apos;s net energy metering customers still get a monthly bill for set fees, which SCE lists as delivery and
                nonbypassable charges, even in months when the panels cover the energy. On SCE&apos;s annual billing option,
                net energy charges for the whole year come due once, on the annual settlement statement, which is why a
                single SCE bill can be very large. Our guide to the{' '}
                <Link href="/blog/sce-settlement-bill" className={guideLink}>
                  SCE annual settlement bill
                </Link>{' '}
                explains how to read it. Newer systems on the Solar Billing Plan pay monthly, are required to take TOU-D-PRIME,
                and earn export credits that the CPUC says are usually lower than the retail price.
              </p>

              <h2>Use SCE&apos;s own comparison before changing plans</h2>
              <p>
                SCE&apos;s{' '}
                <a href="https://www.sce.com/save-money/rates-financing/rate-plan-comparison" target="_blank" rel="noopener noreferrer" className={guideLink}>
                  Rate Plan Comparison
                </a>{' '}
                uses your account history to compare eligible plans. Review the result beside the hours your household
                actually uses electricity; SCE says a customer who switches to a time-of-use plan cannot switch again for 12
                months. If the utility, service address or a charge does not match what you expected, contact SCE before
                asking anyone else to interpret it.
              </p>

              <h2>If the bill is hard to pay</h2>
              <p>
                You are not alone: the Public Advocates Office counts 813,943 SCE customers, 17%, behind on their bills in May
                2026, owing $733 on average. CARE cuts the electric bill 30% to 35% for households under the CPUC&apos;s income
                limits and FERA 18% for households just above them, and both lower the Base Services Charge.
              </p>

              <h2>When a solar or battery comparison is useful</h2>
              <p>
                Once you know the bill pattern, you can decide whether to compare a solar or battery proposal. Ask for the same
                billing period, rate-plan assumption, remaining fixed charges, delivery and generation treatment, and any
                battery settings in writing. A proposal that cannot show those inputs is not ready for comparison. If roof work
                or backup is part of the decision, start with{' '}
                <Link href="/blog/is-my-roof-good-for-solar-california" className={guideLink}>
                  whether the roof is suited to solar
                </Link>{' '}
                and{' '}
                <Link href="/blog/solar-battery-backup-california" className={guideLink}>
                  the separate backup and battery decision
                </Link>
                . For address-level checks, see the local guides for{' '}
                <Link href="/solar-cost/temecula" className={guideLink}>
                  Temecula
                </Link>
                ,{' '}
                <Link href="/solar-cost/murrieta" className={guideLink}>
                  Murrieta
                </Link>{' '}
                and{' '}
                <Link href="/solar-companies/palm-desert" className={guideLink}>
                  Palm Desert
                </Link>
                , and confirm the utility on your own bill rather than assuming it from the city.
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

            <div className="mt-8">
              <SolarInquiry utility="sce" topic="SCE bill review" variant="bill" heading="Compare a Solar Plan With Your SCE Bill" />
            </div>
            <RelatedGuides
              heading="Before treating solar as the fix"
              links={[
                { href: '/solar-problems/solar-bill-still-high-california', label: 'When a bill stays high after going solar' },
                { href: '/solar-problems/running-ac-with-solar-california', label: 'Whether solar covers all-day air conditioning' },
              ]}
            />
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
