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

const path = '/blog/smud-peak-hours';
const url = `https://ratereliefca.com${path}`;
const title = 'SMUD Peak Hours 2026: Summer and Time-of-Day Rates';
const h1 = 'SMUD Peak Hours in 2026: 5 to 8 p.m. on Weekdays, and What Changes June 1 to September 30';
const description =
  'SMUD peak hours are 5–8 p.m. on weekdays. Summer adds mid-peak noon–midnight from June 1 to Sept. 30. See 2026 prices, holidays and when summer ends.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources('smudTodDetails', 'smudResRates', 'smudCpp', 'smudRateArchive', 'smudLowIncome');

const faqs = [
  {
    question: 'What are SMUD peak hours?',
    answer:
      "5 p.m. to 8 p.m., Monday through Friday, all year, on SMUD's standard Time-of-Day (5-8 p.m.) rate. Weekends and SMUD's listed holidays are off-peak all day. From June 1 to September 30, weekdays also have a mid-peak price from noon to 5 p.m. and from 8 p.m. to midnight.",
  },
  {
    question: 'When do SMUD summer rates end?',
    answer:
      'September 30. From October 1 through May 31 SMUD uses its non-summer prices: the weekday 5-to-8 p.m. peak drops from 37.65 cents to 17.76 cents per kWh, the mid-peak period disappears, and every other hour is off-peak at 12.85 cents.',
  },
  {
    question: 'What are SMUD summer rates in 2026?',
    answer:
      'On the standard Time-of-Day rate: 37.65 cents per kWh from 5 to 8 p.m. on weekdays, 21.39 cents from noon to 5 p.m. and 8 p.m. to midnight on weekdays, and 15.50 cents at all other times, including all day on weekends and holidays. A $27 monthly System Infrastructure Fixed Charge applies on top.',
  },
  {
    question: 'Is SMUD peak on weekends?',
    answer:
      'No. SMUD says weekends and holidays are always off-peak on the Time-of-Day rate. The one exception is Critical Peak Pricing: customers who enroll can get a Peak Event on any summer day, weekends and holidays included.',
  },
  {
    question: 'Does SMUD have peak hours today?',
    answer:
      "If today is a weekday that is not one of SMUD's 11 listed holidays, yes: 5 to 8 p.m. is peak. From June through September, noon to 5 p.m. and 8 p.m. to midnight are also mid-peak. SMUD notifies Critical Peak Pricing customers a day before an event when it can.",
  },
  {
    question: 'Is there a cheaper time to charge an EV on SMUD?',
    answer:
      'Yes. SMUD takes 1.5 cents per kWh off all electricity used between midnight and 6 a.m. for customers with a registered plug-in electric vehicle. On the standard rate that makes summer overnight power about 14 cents and non-summer about 11.35 cents.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function SmudPeakHoursPage() {
  return (
    <PublicLayout breadcrumbLabel="SMUD peak hours" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="SMUD peak hours" kicker="SMUD · Utility rates" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                SMUD&apos;s peak hours are 5 to 8 p.m. on weekdays. Weekends and holidays are off-peak all day. From June 1 through
                September 30, weekdays also carry a mid-peak price from noon to 5 p.m. and from 8 p.m. to midnight, and the peak
                price more than doubles to 37.65 cents per kWh. Summer pricing ends September 30.
              </p>
              <HubUpLink path="/blog/smud-peak-hours" />
              <p>
                These hours belong to the plan SMUD lists as its standard residential rate, Time-of-Day (5-8 p.m.). Prices below are SMUD&apos;s 2026 prices as posted on its
                rate pages, checked September 23, 2026. SMUD is a community-owned utility, so its hours are shorter and its prices
                lower than the 4-to-9 p.m. plans at PG&amp;E, SCE and SDG&amp;E; the{' '}
                <Link href="/blog/electricity-peak-hours-california" className={guideLink}>
                  statewide peak-hours comparison
                </Link>{' '}
                lines them up.
              </p>

              <QuickAnswer label="The short version">
                <p>
                  <strong>October to May:</strong> 5 to 8 p.m. on weekdays costs 17.76 cents; every other hour costs 12.85 cents.{' '}
                  <strong>June to September:</strong> weekday 5 to 8 p.m. costs 37.65 cents, weekday noon to 5 p.m. and 8 p.m. to
                  midnight cost 21.39 cents, and nights, mornings, weekends and holidays cost 15.50 cents.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="SMUD Time-of-Day (5-8 p.m.) rate, 2026"
                  facts={[
                    { label: 'Peak hours', value: '5–8 p.m. weekdays', note: 'Weekends and holidays off-peak', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudTodDetails.url } },
                    { label: 'Summer season', value: 'June 1–Sept. 30', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudTodDetails.url } },
                    { label: 'Summer peak price', value: '37.65¢/kWh', note: 'Non-summer peak 17.76¢', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudTodDetails.url } },
                    { label: 'Fixed charge', value: '$27.00/month', note: 'System Infrastructure Fixed Charge', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudResRates.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="SMUD peak hours and solar comparison" utility="smud" />
              </div>

              <h2>SMUD time-of-day periods by season</h2>
              <DataTable
                caption="SMUD Time-of-Day (5-8 p.m.) rate: hours and 2026 prices per kWh"
                columns={['Period', 'Weekday hours', 'Summer (Jun 1–Sep 30)', 'Non-summer (Oct 1–May 31)']}
                rows={[
                  ['Peak', '5–8 p.m.', '$0.3765', '$0.1776'],
                  ['Mid-peak', 'Noon–5 p.m. and 8 p.m.–midnight', '$0.2139', 'None; these hours are off-peak'],
                  ['Off-peak', 'Midnight–noon in summer; all hours except 5–8 p.m. otherwise', '$0.1550', '$0.1285'],
                ]}
                note={<>Source: SMUD, Time-of-Day (5-8 p.m.) Rate details and holidays, checked September 23, 2026. Weekends and holidays are off-peak all day in every season.</>}
              />
              <p>
                The season line is the one that catches people. A weekday afternoon kWh costs 12.85 cents on May 31 and 21.39 cents
                on June 1, and the weekday evening kWh jumps from 17.76 to 37.65 cents. The reverse happens on October 1, which is
                why the first bill after September usually drops even if the weather stays warm.
              </p>

              <h2>SMUD holidays that count as off-peak</h2>
              <p>
                SMUD treats these 11 days as off-peak all day: New Year&apos;s Day, Martin Luther King Jr. Day, Presidents Day,
                Memorial Day, Juneteenth, Independence Day, Labor Day, Indigenous Peoples&apos; Day, Veterans Day, Thanksgiving Day
                and Christmas Day. That is three more than the eight holidays PG&amp;E and SDG&amp;E use for their time-of-use
                plans: SMUD adds Martin Luther King Jr. Day, Juneteenth and Indigenous Peoples&apos; Day. Juneteenth falls inside
                the summer season, so it spares a summer weekday from the 37.65-cent peak.
              </p>

              <h2>What an hour of summer peak costs</h2>
              <p>
                Our own arithmetic shows the spread. A central air conditioner drawing 3 kW for the three peak hours uses 9 kWh.
                On a summer weekday that costs about $3.39 at 37.65 cents; the same 9 kWh before noon costs about $1.40 at 15.50
                cents. Over 22 summer weekdays the gap is roughly $44 a month for that one habit. Pre-cooling the house in the
                morning and letting the thermostat drift up from 5 to 8 p.m. is the lever SMUD&apos;s own structure rewards.
              </p>

              <h2>Other SMUD plans and their hours</h2>
              <DataTable
                caption="SMUD residential alternatives, 2026 prices per kWh"
                columns={['Plan', 'How it works', 'Summer', 'Non-summer']}
                rows={[
                  ['Time-of-Day (Low Use)', 'Same hours; for homes using under 270 kWh a month with a panel of 125 amps or less; $17 fixed charge', 'Peak $0.4154, mid-peak $0.2514, off-peak $0.1920', 'Peak $0.2148, off-peak $0.1654'],
                  ['Fixed Rate', 'One price at every hour', '$0.2189', '$0.1371'],
                  ['Critical Peak Pricing', 'Lower summer off-peak and mid-peak prices, plus $0.50/kWh extra during Peak Events', 'Off-peak $0.1350, mid-peak $0.1939, peak $0.3765', 'Off-peak $0.1285, peak $0.1776'],
                ]}
                note={<>Sources: SMUD Residential rates and Critical Peak Pricing pages, checked September 23, 2026. SMUD says the Fixed Rate averages about 4% more than the Time-of-Day rate.</>}
              />
              <p>
                <strong>Fixed Rate.</strong> No peak hours at all, at a price SMUD says averages about 4% more than the standard
                plan. It can suit a household that is home and cooling all summer afternoon and cannot move that load.
              </p>
              <p>
                <strong>Critical Peak Pricing.</strong> SMUD can call Peak Events of one to four hours, one per day and no more
                than 50 hours a season, from June 1 to September 30, on any day including weekends and holidays. During an event
                you pay $0.50 per kWh on top of the normal price for that hour. In exchange, summer off-peak drops to 13.50 cents
                and mid-peak to 19.39 cents. You enroll through SMUD&apos;s My Energy Optimizer program; customers on the Medical
                Equipment Discount or Budget Billing cannot join.
              </p>

              <h2>EV charging and solar on SMUD</h2>
              <p>
                SMUD takes 1.5 cents per kWh off everything used between midnight and 6 a.m. for households with a registered
                plug-in electric vehicle, so the cheapest SMUD power is overnight. Solar customers on SMUD&apos;s Solar and Storage
                Rate earn 9.6 cents per kWh for power sent to the grid, less than every retail price in the tables above, so solar
                pays off mainly through power you use yourself. A battery that covers 5 to 8 p.m. in summer avoids the 37.65-cent
                hours. The rules behind both, including who qualifies, are in{' '}
                <Link href="/blog/smud-solar-program" className={guideLink}>
                  SMUD&apos;s solar export rate and battery incentive
                </Link>
                . Local numbers are in the{' '}
                <Link href="/solar-savings/sacramento" className={guideLink}>
                  Sacramento solar and bill guide
                </Link>
                .
              </p>

              <h2>SMUD rate increases in 2026 and 2027</h2>
              <p>
                SMUD&apos;s board approved a 3% increase on January 1, 2026 and another 3% on January 1, 2027. SMUD estimated they
                add $4.35 and then $4.48 a month for an average residential customer. Before that, rates rose 2.75% on January 1
                and May 1 of both 2024 and 2025. SMUD cites reliability work, state compliance, vegetation management and
                wildfire insurance, and inflation. The hours themselves did not change.
              </p>

              <h2>If your SMUD bill still looks high</h2>
              <p>
                Check the summer months first, then the $27 fixed charge and your plan. Our{' '}
                <Link href="/blog/why-is-my-smud-bill-so-high" className={guideLink}>
                  guide to high SMUD bills
                </Link>{' '}
                walks through each cause, including SMUD&apos;s Energy Assistance Program Rate for income-qualified households.
                To see how SMUD compares with the investor-owned utilities, read{' '}
                <Link href="/blog/electricity-rates-highest-in-us-california" className={guideLink}>
                  how California electricity rates rank
                </Link>
                , or compare with{' '}
                <Link href="/blog/ladwp-rates" className={guideLink}>
                  LADWP&apos;s rates and peak hours
                </Link>
                , the other large city-owned utility.
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <SourceList sources={sources} sourceCheckedDate={RATE_SOURCES_CHECKED} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <HubSpokeLinks hub="utility_rates" currentPath={path} />
            </div>

            <SolarInquiry topic="SMUD peak hours and solar comparison" utility="smud" heading="Compare a Solar Plan With Your SMUD Bill" />
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
