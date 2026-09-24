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
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';

const path = '/blog/why-is-my-smud-bill-so-high';
const url = `https://ratereliefca.com${path}`;
const title = 'Why Is My SMUD Bill So High? 2026 Rates and Summer Peaks';
const h1 = 'Why Is My SMUD Bill So High? Summer Hours, the Fixed Charge and 2026 Rates';
const description =
  'A SMUD bill jumps in summer because weekday prices from noon to midnight rise, 5–8 p.m. hits 37.65¢, and rates rose 3% in 2026. Check each cause.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources('smudResRates', 'smudTodDetails', 'smudRateArchive', 'smudLowIncome', 'cpucMyBill');

const faqs = [
  {
    question: 'Why is my SMUD bill so high in summer?',
    answer:
      "From June 1 to September 30, SMUD's standard Time-of-Day rate adds a mid-peak price of 21.39 cents per kWh on weekdays from noon to 5 p.m. and 8 p.m. to midnight, and charges 37.65 cents from 5 to 8 p.m. The rest of the year, the top price is 17.76 cents. Air conditioning running through weekday afternoons and evenings lands mostly in those higher-priced hours.",
  },
  {
    question: 'Did SMUD raise rates in 2026?',
    answer:
      "Yes. SMUD's board approved a 3% increase effective January 1, 2026 and another 3% on January 1, 2027. SMUD estimated they add $4.35 and then $4.48 a month for the average residential customer. In 2024 and 2025 rates rose 2.75% four times.",
  },
  {
    question: 'What is the SMUD System Infrastructure Fixed Charge?',
    answer:
      'It is a flat $27.00 a month on the standard rate, $17 on the Time-of-Day (Low Use) rate, and it pays for poles, wires, transformers, meters, billing and customer service. It is the same whether you use 100 kWh or 2,000 kWh.',
  },
  {
    question: 'Is SMUD cheaper than PG&E?',
    answer:
      "SMUD's own comparison, as of June 1, 2026, prices a 750 kWh monthly bill at $149 on SMUD against $290 on PG&E, $283 on SCE, $322 on SDG&E and $217 on LADWP. SMUD describes its rates as, on average, more than 50% lower than PG&E's.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function WhyIsMySmudBillSoHighPage() {
  return (
    <PublicLayout breadcrumbLabel="Why is my SMUD bill so high?" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Why is my SMUD bill so high?" kicker="SMUD · Billing" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                A SMUD bill usually jumps for one of three reasons. From June through September, weekday electricity from noon
                to midnight costs more, and 5 to 8 p.m. costs 37.65 cents per kWh. A flat $27 monthly charge applies however
                little you use. And SMUD raised rates 3% on January 1, 2026. Check summer hours first.
              </p>
              <p>
                SMUD is still one of the cheapest large utilities in California, which is part of why a high bill surprises
                people. Its own comparison prices a 750 kWh month at $149, about half of PG&amp;E&apos;s $290. But SMUD&apos;s standard
                Time-of-Day rate makes summer weekday use far more expensive than the rest of the year. For the statewide picture, see our{' '}
                <Link href={hub.href} className={guideLink}>
                  guide to high California electric bills
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="SMUD prices that move your bill"
                  facts={[
                    { label: 'Summer peak, weekdays 5–8 p.m.', value: '37.65¢/kWh', note: 'June 1–September 30', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudResRates.url } },
                    { label: 'Non-summer off-peak', value: '12.85¢/kWh', note: 'Lowest standard price', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudResRates.url } },
                    { label: 'System Infrastructure Fixed Charge', value: '$27.00/month', note: '$17 on the Low Use rate', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudResRates.url } },
                    { label: 'Rate increase', value: '+3%', note: 'January 1, 2026; another 3% on January 1, 2027', source: { publisher: 'SMUD', date: RATE_SOURCES_CHECKED, url: SRC.smudRateArchive.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="SMUD bill review" utility="smud" />
              </div>

              <h2>1. Summer: SMUD&apos;s Time-of-Day rate changes on June 1</h2>
              <p>
                The standard residential rate is Time-of-Day (5-8 p.m.). For eight months of the year it has just two prices.
                From June 1 to September 30 it has three, and the middle one covers most waking weekday hours.
              </p>
              <DataTable
                caption="SMUD Time-of-Day (5-8 p.m.) rate, 2026 prices per kWh"
                columns={['Period', 'Weekday hours', 'Summer (Jun 1–Sep 30)', 'Non-summer']}
                rows={[
                  ['Peak', '5–8 p.m.', '$0.3765', '$0.1776'],
                  ['Mid-peak', 'Noon–5 p.m. and 8 p.m.–midnight', '$0.2139', 'No mid-peak (off-peak)'],
                  ['Off-peak', 'Midnight–noon (summer); all but 5–8 p.m. (non-summer)', '$0.1550', '$0.1285'],
                ]}
                note={<>Source: SMUD Residential rates and Time-of-Day rate details, checked September 23, 2026. Weekends and SMUD&apos;s listed holidays are off-peak all day. The hydrogeneration charge is currently $0.00 per kWh.</>}
              />
              <p>
                The spread is the story. A kWh on a summer weekday at 6 p.m. costs about 2.9 times a kWh on a March night.
                Here is our own arithmetic for one home: 600 kWh in April with 15% of it between 5 and 8 p.m. on weekdays comes
                to about $108.52 with the fixed charge. The same home using 1,200 kWh in August, 15% at peak, 45% at mid-peak
                and 40% off-peak, pays about $284.68. Usage doubled; the bill rose about 2.6 times.
              </p>
              <p>
                The practical levers follow from the table: pre-cool the house before noon, let the thermostat drift up
                between 5 and 8 p.m., and move laundry, dishwashing and EV charging to weekends or after midnight. SMUD&apos;s
                holiday list counts too: New Year&apos;s Day, Martin Luther King Jr. Day, Presidents Day, Memorial Day,
                Juneteenth, Independence Day, Labor Day, Indigenous Peoples&apos; Day, Veterans Day, Thanksgiving and Christmas
                are off-peak all day, though a fixed-date holiday that falls on a weekend does not move its off-peak price to
                the observed weekday. A chart of every period, and the hours on SMUD&apos;s other plans, is in{' '}
                <Link href="/blog/smud-peak-hours" className={guideLink}>
                  SMUD peak hours and summer rate dates
                </Link>
                .
              </p>

              <h2>2. The $27 System Infrastructure Fixed Charge</h2>
              <p>
                Every standard SMUD bill carries a $27.00 monthly System Infrastructure Fixed Charge for poles, wires,
                transformers, meters, billing and customer service. In a small apartment using 250 kWh, that charge can be a
                third of the bill or more. SMUD offers a Time-of-Day (Low Use) rate with a $17 fixed charge but higher energy
                prices, for homes that use under 270 kWh a month and have an electrical panel of 125 amps or smaller.
              </p>

              <h2>3. The 2026 rate increase, and the next one</h2>
              <p>
                SMUD&apos;s board approved two increases: 3% on January 1, 2026 and 3% on January 1, 2027. SMUD estimated the
                average residential customer would pay $4.35 a month more from the first and $4.48 more from the second, and it
                says it is committed to keeping increases within inflation through 2030. Before that, rates rose 2.75% on
                January 1 and May 1 of both 2024 and 2025. So a 2026 bill compared with a 2023 bill for the same usage reflects
                five increases.
              </p>
              <DataTable
                caption="SMUD approved residential rate increases, 2024 to 2027"
                columns={['Effective date', 'Increase']}
                rows={[
                  ['January 1, 2024', '2.75%'],
                  ['May 1, 2024', '2.75%'],
                  ['January 1, 2025', '2.75%'],
                  ['May 1, 2025', '2.75%'],
                  ['January 1, 2026', '3%'],
                  ['January 1, 2027 (approved)', '3%'],
                ]}
                note={<>Source: SMUD Rate change archive, checked September 23, 2026. SMUD cites reliability and infrastructure work, state compliance, vegetation management and wildfire insurance, and inflation.</>}
              />

              <h2>4. Your plan may not fit your habits</h2>
              <p>
                SMUD offers alternatives. The Fixed Rate charges the same price at every hour, $0.2189 per kWh in summer and
                $0.1371 the rest of the year, and SMUD says it averages about 4% more than Time-of-Day. It can still suit a
                household that cannot avoid 5 to 8 p.m., such as someone home all day in summer. Critical Peak Pricing lowers
                summer off-peak and mid-peak prices in exchange for $0.50 per kWh on top of the regular price during Peak Events
                of one to four hours. You can compare your peak-hour use and switch plans in My Account.
              </p>

              <h2>5. A discount you are missing</h2>
              <p>
                SMUD runs its own assistance program, not the state&apos;s CARE and FERA. The Energy Assistance Program Rate
                takes up to $105 a month off for households at or below 50% of the federal poverty level, down to $10 for those
                at 150% to 200%. The income limits effective February 1, 2026 are $3,607 a month for one or two people and
                $5,500 for four. SMUD also offers a $15 monthly Medical Equipment Discount and takes 1.5 cents per kWh off all
                use between midnight and 6 a.m. for customers with a registered plug-in EV.
              </p>

              <h2>Solar on SMUD, and who to call</h2>
              <p>
                Solar customers on SMUD&apos;s Solar and Storage Rate earn 9.6 cents per kWh for power sent to the grid
                at any hour or season. That is well under the 15.50 to 37.65 cents you pay in summer, so a system pays back
                mainly through power you use yourself, and a battery that covers 5 to 8 p.m. tends to add the most value. The{' '}
                <Link href="/solar-savings/sacramento" className={guideLink}>
                  Sacramento solar and bill guide
                </Link>{' '}
                covers the local numbers.
              </p>
              <p>
                SMUD is a community-owned, not-for-profit utility. The CPUC says it cannot help resolve issues with publicly
                owned utilities such as SMUD, so questions and disputes go to SMUD directly. To see how SMUD compares with the investor-owned utilities,
                read{' '}
                <Link href="/blog/electricity-rates-highest-in-us-california" className={guideLink}>
                  how California electricity rates rank nationally
                </Link>{' '}
                and the{' '}
                <Link href="/california-utility-rate-tracker" className={guideLink}>
                  California utility rate tracker
                </Link>
                . If your usage itself looks high, compare it with the{' '}
                <Link href="/blog/average-kwh-per-day-california" className={guideLink}>
                  average kWh per day in California
                </Link>
                , and for other utilities see{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={guideLink}>
                  why a PG&amp;E bill runs high
                </Link>{' '}
                or{' '}
                <Link href="/blog/why-is-my-ladwp-bill-so-high" className={guideLink}>
                  why an LADWP bill runs high
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

            <SolarInquiry utility="smud" topic="SMUD bill review" variant="bill" heading="Compare a Solar Plan With Your SMUD Bill" />
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
