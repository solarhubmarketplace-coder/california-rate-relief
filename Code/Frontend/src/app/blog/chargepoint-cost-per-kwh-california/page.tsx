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

const path = '/blog/chargepoint-cost-per-kwh-california';
const url = `https://ratereliefca.com${path}`;
const title = 'ChargePoint Cost per kWh in California: Prices and Fees';
const h1 = 'ChargePoint Cost per kWh in California: Who Sets the Price, the Fees and What Home Charging Costs';
const description =
  'ChargePoint prices are set by each station owner, plus a ChargePoint fee of $0.25–$0.99 a session. See California display rules and home-charging costs.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources('chargepointPricing', 'chargepointServiceFee', 'cdfaEvfsFaq', 'paoQ2_2026', 'pgeResRatesCurrent', 'sceTou', 'smudResRates', 'smudTodDetails', 'ladwpResRates', 'ladwpEv');

const faqs = [
  {
    question: 'How much does ChargePoint charge per kWh in California?',
    answer:
      "ChargePoint does not set one price. Its stations are independently owned, and each owner decides whether to charge by the kWh, by the hour, per session or not at all. The price for a specific station is in the ChargePoint app before you start. On paid sessions ChargePoint adds its own service fee, $0.25 for Level 2 or $0.49 for DC fast charging with a ChargePoint account.",
  },
  {
    question: 'What is the ChargePoint service fee?',
    answer:
      'A fee ChargePoint charges, separate from the station owner\'s price, on certain paid sessions. As of June 16, 2026, it is $0.25 (AC) or $0.49 (DC) for sessions started with the ChargePoint app, an RFID card or vehicle authentication, and $0.49 (AC) or $0.99 (DC) for guests paying another way, such as tapping a credit card.',
  },
  {
    question: 'Is public charging cheaper than gas in California?',
    answer:
      "Often, but not always. The CPUC Public Advocates Office calculates that, for a 100 MPGe EV against a 28 mpg car, electricity breaks even with gasoline at about 48.7 cents per kWh when gas is $4.60 a gallon and 63.6 cents at $6.00. A public session priced below that, including fees, is cheaper per mile.",
  },
  {
    question: 'Is it cheaper to charge at home than at a ChargePoint station?',
    answer:
      "Usually, on an EV rate at night. PG&E's EV2-A plan charges 22.558 cents per kWh off-peak, SCE's TOU-D-PRIME 24 to 26 cents, and SMUD 12.85 to 15.50 cents off-peak before its 1.5-cent EV discount after midnight. Compare those with the per-kWh price in the ChargePoint app plus the session fee.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function ChargepointCostPerKwhPage() {
  return (
    <PublicLayout breadcrumbLabel="ChargePoint cost per kWh" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="ChargePoint cost per kWh" kicker="EV charging · Price per kWh" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                There is no single ChargePoint price per kWh. Each station owner sets its own, by the kWh, the hour, the session
                or free, and the ChargePoint app shows it before you plug in. On paid sessions ChargePoint adds a service fee:
                $0.25 for Level 2 or $0.49 for DC fast charging with an account, as of June 16, 2026.
              </p>
              <p>
                That is why two ChargePoint stations a block apart can cost very different amounts. This page explains how the
                price is built, what California law requires a charger to show you, and how public charging compares with
                charging at home on your utility&apos;s rates, which is the part we track closely. For home electricity prices
                across the state, see the{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="ChargePoint pricing basics"
                  facts={[
                    { label: 'Who sets the station price', value: 'Station owner', note: 'Per kWh, per hour, per session or free', source: { publisher: 'ChargePoint', date: RATE_SOURCES_CHECKED, url: SRC.chargepointPricing.url } },
                    { label: 'ChargePoint service fee, account holders', value: '$0.25 AC / $0.49 DC', note: 'Guests: $0.49 / $0.99', source: { publisher: 'ChargePoint', date: RATE_SOURCES_CHECKED, url: SRC.chargepointServiceFee.url } },
                    { label: 'Gas-parity price for an EV', value: '48.7–63.6¢/kWh', note: 'At $4.60–$6.00 gasoline', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                    { label: 'PG&E EV2-A, off-peak at home', value: '22.558¢/kWh', note: 'Rates from March 1, 2026', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                  ]}
                />
              </div>

              <h2>How a ChargePoint price is built</h2>
              <p>
                ChargePoint says stations on its platform are independently owned and each owner, or roaming partner, decides
                what to charge; ChargePoint processes the payment. A session&apos;s cost can combine several parts, all of
                which appear in the app for that station:
              </p>
              <ul>
                <li><strong>Energy rate:</strong> charged per kWh while your car is actually taking energy. ChargePoint says U.S. energy rates are per kWh.</li>
                <li><strong>Time rate while connected:</strong> charged per minute or hour whether or not energy is flowing.</li>
                <li><strong>Session fee:</strong> a flat fee set by the owner when a session starts.</li>
                <li><strong>Minimum and maximum fees:</strong> a floor or cap on the session, before taxes and fees.</li>
                <li><strong>Overstay rate:</strong> a time charge that starts after a grace period once charging finishes, or after a maximum connection time.</li>
                <li><strong>ChargePoint&apos;s own fees:</strong> the service fee, a guest fee when you tap a card without an account, and a convenience fee when driver support starts a session for you.</li>
              </ul>
              <p>
                Owners can also charge one price for the first hour or two and another after, offer discounts on some
                connections, or charge nothing; the app can filter for free stations.
              </p>
              <DataTable
                caption="ChargePoint service fee per paid session (as of June 16, 2026)"
                columns={['How you start the session', 'Level 2 (AC)', 'DC fast']}
                rows={[
                  ['ChargePoint app, RFID card or vehicle authentication', '$0.25', '$0.49'],
                  ['Guest or anonymous, such as a tapped credit or debit card', '$0.49', '$0.99'],
                ]}
                note={<>Source: ChargePoint, What is the service fee?, last updated June 16, 2026, checked September 23, 2026. The service fee is in addition to the station owner&apos;s price.</>}
              />

              <h2>What California requires a public charger to show you</h2>
              <p>
                Commercial EV chargers in California are measuring devices, like gas pumps, and the state&apos;s Division of
                Measurement Standards applies weights-and-measures rules to them. Its guidance for charger makers says:
              </p>
              <ul>
                <li>The charger must continuously show both the kWh delivered and the price during a session.</li>
                <li>Tiered pricing is allowed, but every price that could apply must be displayed before you start the session.</li>
                <li>The display must start at zero for price and energy for at least 15 seconds.</li>
                <li>A receipt, paper or electronic, must identify the charger&apos;s location; a link you have to type in does not count.</li>
                <li>Chargers used commercially must accept a credit or debit card from customers without an account, under a California Air Resources Board regulation.</li>
              </ul>
              <p>
                If a charger&apos;s screen does not match the price in the app, ChargePoint lists that as a separate support
                question, and your county weights-and-measures office registers commercial chargers.
              </p>

              <h2>Public charging vs. home charging, per kWh</h2>
              <p>
                Home charging on a utility EV or time-of-use plan is usually the cheaper benchmark. These are the
                lowest-priced hours on EV-friendly plans at four large California utilities, for customers who buy their
                power from the utility:
              </p>
              <DataTable
                caption="Home charging prices on EV-friendly plans, 2026 (cents per kWh)"
                columns={['Utility and plan', 'Lowest-price hours', 'Price']}
                rows={[
                  ['PG&E EV2-A', 'Off-peak, all year', '22.558¢'],
                  ['SCE TOU-D-PRIME', 'Off-peak and super off-peak', '24¢ winter, 26¢ summer'],
                  ['SMUD Time-of-Day', 'Off-peak, plus 1.5¢ EV discount midnight–6 a.m.', '12.85¢ winter, 15.50¢ summer, before discount'],
                  ['LADWP R-1B', 'Base period; 2.5¢ EV discount if separately metered', '26.540¢ Jul–Sep, 27.814¢ from Oct 1, before discount'],
                ]}
                note={<>Sources: PG&amp;E residential rate table from March 1, 2026; SCE Time-of-Use page; SMUD residential rates and Time-of-Day details; LADWP residential rates and EV pages. All checked September 23, 2026. Fixed daily or monthly charges are extra and apply whether or not you charge an EV.</>}
              />
              <p>
                A worked example, using a hypothetical public price: 40 kWh at $0.45 per kWh plus the $0.49 DC service fee comes
                to $18.49. The same 40 kWh at PG&amp;E&apos;s EV2-A off-peak price is about $9.02. Both are below what the
                Public Advocates Office calculates as gasoline parity for a 100 MPGe EV, 48.7 cents per kWh at $4.60 a gallon,
                so either beats gas per mile in that comparison; home charging simply beats it by more.
              </p>
              <p>
                For the utility details behind those numbers, see{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use and EV rates
                </Link>
                ,{' '}
                <Link href="/blog/sce-rate-schedules" className={guideLink}>
                  SCE rate schedules
                </Link>{' '}
                and{' '}
                <Link href="/blog/ladwp-ev-charging-rates" className={guideLink}>
                  LADWP EV charging rates
                </Link>
                . If you are thinking about charging from your own roof, read{' '}
                <Link href="/blog/solar-panels-for-ev-charging-california" className={guideLink}>
                  solar panels for EV charging in California
                </Link>
                , and for what solar exports earn when the car is not home, see{' '}
                <Link href="/blog/selling-electricity-back-to-the-grid-price-per-kwh" className={guideLink}>
                  selling electricity back to the grid
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
              <HubSpokeLinks hub="utility_rates" currentPath={path} />
            </div>

            <SolarInquiry topic="EV charging costs" heading="Compare Solar for EV Charging With Your Bill" />
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
