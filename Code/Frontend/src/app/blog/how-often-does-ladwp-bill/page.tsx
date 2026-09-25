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
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/how-often-does-ladwp-bill';
const url = `https://ratereliefca.com${path}`;
const title = 'How Often Does LADWP Bill? Every Two Months, Explained';
const h1 = 'How Often Does LADWP Bill? Why Your Bill Covers Two Months';
const description =
  'LADWP bills homes every two months and businesses monthly. See why the bill covers about 60 days, how tiers scale, and 2026 water prices per HCF.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources('ladwpBillingFaq', 'ladwpRateGuide', 'ladwpResRates', 'ladwpWaterRates', 'ladwpWaterScheduleA', 'pgeMeterSchedule', 'pgeUnderstandBill');

const faqs = [
  {
    question: 'Does LADWP bill monthly or every two months?',
    answer:
      "Every two months for homes. LADWP's billing questions page says residential and multi-residential customers are billed on a bi-monthly cycle and commercial customers monthly. A new account's first bill may cover more or less than 60 days.",
  },
  {
    question: 'Why is my LADWP bill so high?',
    answer:
      'Start with the length: a two-month bill is roughly twice a monthly one. LADWP lists the other common causes as higher water or power use, seasonal use, a misread or estimated meter, a bill that covers more than one billing period, and an earlier unpaid balance.',
  },
  {
    question: 'How often does PG&E bill?',
    answer:
      "Monthly. PG&E says its meter readers make every effort to read meters monthly, and it publishes a yearly schedule by serial letter, the letter shown in the Service Information section of the monthly statement. Read dates move a few days each month, so the gap between reads in 2026 runs 29 to 33 days.",
  },
  {
    question: 'What are LADWP water rates in 2026?',
    answer:
      "For single-family homes on Schedule A inside Los Angeles, LADWP lists $11.794 per HCF in Tier 1 for July to December 2026, $14.278 in Tier 2 and $15.024 in Tiers 3 and 4. One HCF is 748 gallons. Every home gets 16 HCF of Tier 1 water on a two-month bill.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function HowOftenDoesLadwpBillPage() {
  return (
    <PublicLayout breadcrumbLabel="How often does LADWP bill?" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="How often does LADWP bill?" kicker="LADWP · Billing" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                LADWP bills homes every two months. Its billing questions page says residential and multi-residential
                customers are on a bi-monthly cycle, while commercial customers are billed monthly. A new account&apos;s first
                bill can run longer or shorter than 60 days. So an LADWP bill usually covers about twice the usage of a
                monthly PG&amp;E or SCE bill.
              </p>
              <p>
                That one fact explains a lot of sticker shock, especially for people who move to Los Angeles from somewhere
                billed monthly. Below: what a two-month bill includes, why it is not penalized in the tiers, how water is
                priced, and how LADWP&apos;s cycle compares with PG&amp;E&apos;s. For the broader question of why bills are high
                statewide, see our{' '}
                <Link href={hub.href} className={guideLink}>
                  guide to high California electric bills
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="LADWP billing basics"
                  facts={[
                    { label: 'Residential billing cycle', value: 'Every two months', note: 'Commercial: monthly', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: SRC.ladwpBillingFaq.url } },
                    { label: 'Zone 1 Tier 1 on a two-month bill', value: 'First 700 kWh', note: '350 kWh on a monthly bill', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: SRC.ladwpRateGuide.url } },
                    { label: 'Late payment charge', value: '18% a year', note: 'Computed daily on past-due balances', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: SRC.ladwpBillingFaq.url } },
                    { label: 'Tier 1 water, two-month bill', value: '16 HCF', note: '1 HCF = 748 gallons', source: { publisher: 'LADWP', date: RATE_SOURCES_CHECKED, url: SRC.ladwpWaterScheduleA.url } },
                  ]}
                />
              </div>

              <h2>What one LADWP bill covers</h2>
              <p>
                Most Los Angeles homes get one bill for several services. Electricity and water are LADWP&apos;s own. LADWP
                also bills the city&apos;s sewer service charge and trash fees for the Bureau of Sanitation; questions about
                those go to LA Sanitation at 1-800-773-2489, not LADWP. When you compare the total with a friend&apos;s PG&amp;E
                or SCE bill, you are often comparing two months of three or four services against one month of one or two.
              </p>
              <p>
                A fair comparison takes three steps. Find the electric section and its number of days. Divide the electric
                charges by those days. Multiply by 30. A $300 electric charge over 61 days, for example, is about $4.92 a day,
                or roughly $148 for a 30-day month, our arithmetic.
              </p>

              <h2>Two-month bills do not push you into higher tiers</h2>
              <p>
                On the standard R-1A rate, LADWP sizes each tier to the billing cycle. A Zone 1 home gets 350 kWh of Tier 1 on
                a monthly bill and 700 kWh on a two-month bill; a Zone 2 home gets 500 and 1,000. So a household that stays in
                Tier 1 month to month also stays in Tier 1 on the bimonthly bill.
              </p>
              <DataTable
                caption="LADWP R-1A tier sizes by billing cycle (kWh)"
                columns={['Tier', 'Zone 1, monthly', 'Zone 1, two months', 'Zone 2, monthly', 'Zone 2, two months']}
                rows={[
                  ['Tier 1', '0–350', '0–700', '0–500', '0–1,000'],
                  ['Tier 2', '351–1,050', '701–2,100', '501–1,500', '1,001–3,000'],
                  ['Tier 3', 'Over 1,050', 'Over 2,100', 'Over 1,500', 'Over 3,000'],
                ]}
                note={<>Source: LADWP Residential Electric Rates, checked September 23, 2026.</>}
              />
              <p>
                LADWP&apos;s prices can change partway through a bill, because the adjustment factors reset in January, April,
                July and October and the summer season starts June 1. When that happens, usage is split by the days on each
                side. The next change is October 1, 2026, when R-1A Tier 1 goes from 26.408 to 27.292 cents per kWh. A bill
                that runs from late August into October will show both prices. The full price tables are in our{' '}
                <Link href="/blog/ladwp-rates" className={guideLink}>
                  LADWP rates guide
                </Link>
                .
              </p>

              <h2>Why an LADWP bill can arrive late or estimated</h2>
              <p>
                LADWP says a bill may be delayed when a meter reading is out of line with your history, when a meter is
                replaced, when the type of service changes, or when an account is under review for repeated estimates. It
                estimates a read when the reading looks inconsistent, the reader cannot get to the meter, or the meter is
                defective. A late bill often covers more days than usual, and an estimate followed by an actual read can
                produce a catch-up bill. Either way, the number of days on the bill tells you which one you are looking at.
              </p>
              <p>
                If a delay or catch-up leaves you with a larger balance than usual, ask LADWP about a payment arrangement
                before the due date. LADWP says unpaid electric and water balances can carry a late payment charge at an 18%
                annual rate, computed daily, and a payment extension does not waive it.
              </p>

              <h2>LADWP water rates in 2026</h2>
              <p>
                Water on a single-family home is priced under Schedule A, which has four tiers. Every home gets 16 HCF of Tier
                1 water per two-month bill, meant for indoor use. Tiers 2 and 3 are sized by lot size and season for outdoor
                use; Tier 4 is the most expensive water. LADWP lists these total prices per HCF, including adjustment factors,
                for service inside the city:
              </p>
              <DataTable
                caption="LADWP Schedule A water price per HCF, inside Los Angeles"
                columns={['Period', 'Tier 1', 'Tier 2', 'Tier 3', 'Tier 4']}
                rows={[
                  ['January–June 2026', '$12.495', '$14.681', '$15.427', '$17.522'],
                  ['July–December 2026', '$11.794', '$14.278', '$15.024', '$15.024'],
                  ['January–June 2027 (as listed)', '$11.944', '$14.169', '$15.601', '$15.601'],
                ]}
                note={<>Source: LADWP Schedule A – Residential, checked September 23, 2026. Service outside the city adds a surcharge of $0.319 per HCF in 2026 and $0.146 in 2027. The factors are adjusted in January and July.</>}
              />
              <DataTable
                caption="LADWP Schedule A water allotments per two-month bill, smallest lot size (under 7,500 sq. ft.)"
                columns={['Season', 'Tier 1', 'Tier 2', 'Tier 3', 'Tier 4']}
                rows={[
                  ['Winter (October–May)', '16 HCF', 'Next 6 HCF', 'Next 12 HCF', 'Over 34 HCF'],
                  ['Summer (June–September)', '16 HCF', 'Next 18 HCF', 'Next 36 HCF', 'Over 70 HCF'],
                ]}
                note={<>Source: LADWP Residential Water Rates, checked September 23, 2026. Larger lots get larger Tier 2 and 3 blocks. Since June 1, 2025, low- and medium-temperature zones get the same summer allotment as the high zone.</>}
              />
              <p>
                A small-lot home using 20 HCF in a two-month winter bill in late 2026 would pay about 16 × $11.794 plus 4 ×
                $14.278, or roughly $246 for water before sewer and other charges, our arithmetic. Water is often why an LADWP
                total looks high next to an electric-only bill elsewhere.
              </p>

              <h2>How LADWP compares with PG&amp;E and other utilities</h2>
              <p>
                PG&amp;E bills monthly. It says its meter readers make every effort to read meters each month, and it
                publishes a 2026 schedule keyed to the serial letter printed in the Service Information section of your
                statement. The dates drift. On serial H, for example, reads fall on January 30, March 3 and April 1, which
                makes one 32-day bill followed by a 29-day bill. That alone can move a PG&amp;E bill by 10% with no change in
                habits.
              </p>
              <DataTable
                caption="Billing basics by utility"
                columns={['Utility', 'Home billing cycle', 'What else is on the bill']}
                rows={[
                  ['LADWP', 'Every two months', 'Water; city sewer and trash fees'],
                  ['PG&E', 'Monthly, 29–33 days between reads', 'Gas, if PG&E serves it; a CCA’s generation charges, if you have one'],
                ]}
                note={<>Sources: LADWP billing questions page; PG&amp;E 2026 meter reading schedule and Understand Your Bill page, all checked September 23, 2026.</>}
              />
              <p>
                For a side-by-side of the big three investor-owned utilities, see{' '}
                <Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className={guideLink}>
                  PG&amp;E vs. SCE vs. SDG&amp;E rates
                </Link>
                , and for statewide numbers the{' '}
                <Link href="/blog/average-utility-bill-california" className={guideLink}>
                  average California utility bill
                </Link>
                .
              </p>

              <h2>Discounts are also figured per two-month bill</h2>
              <p>
                LADWP runs its own assistance programs instead of the state CARE and FERA programs. EZ-SAVE, for
                income-qualified households, takes up to $16.34 off every two months, and Lifeline, for qualifying seniors and
                customers with disabilities, up to $35.42. LADWP also says EZ-SAVE and Lifeline customers are not subject to
                disconnection for nonpayment, and customers keeping up with a payment agreement are protected while they do.
              </p>

              <h2>Reading a high two-month bill</h2>
              <p>
                Once you have the daily figure, the checklist in{' '}
                <Link href="/blog/why-is-my-ladwp-bill-so-high" className={guideLink}>
                  why an LADWP bill runs high
                </Link>{' '}
                walks through the rest: which service rose, the rate schedule and the clock on time-of-use service. You can see
                two years of past bills by logging in and choosing Bill &amp; Notification History. If you charge an electric
                car at home, the{' '}
                <Link href="/blog/ladwp-ev-charging-rates" className={guideLink}>
                  LADWP EV charging rates guide
                </Link>{' '}
                covers the discount for separately metered charging. And if you are weighing panels, LADWP still uses net
                energy metering, covered in the{' '}
                <Link href="/solar-savings/los-angeles-county" className={guideLink}>
                  Los Angeles County solar and bill guide
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

            <SolarInquiry utility="ladwp" topic="LADWP billing" variant="bill" heading="Compare a Solar Plan With Your LADWP Bill" />
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
