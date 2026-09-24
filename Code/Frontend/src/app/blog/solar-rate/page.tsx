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

const path = '/blog/solar-rate';
const url = `https://ratereliefca.com${path}`;
const title = 'Solar Rates in California: The Tariff and Rate Plan (2026)';
const h1 = 'Solar Rates in California: The Solar Tariff, the Rate Plan You Pay, and What Exports Earn';
const description =
  'California solar homes pay two rates: a required plan for grid power (E-ELEC, TOU-D-PRIME or EV-TOU-5) and hourly export credits. 2026 figures by utility.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'cpucNbt',
  'pgeEelecTariff',
  'pgeResRatesCurrent',
  'pgeSolarBill',
  'sceTou',
  'sceBsc',
  'sdgeEvTou5Aug2026',
  'sdgeSolarBill',
  'sdgeExportPricing',
  'smudResRates',
  'ladwpEvNem',
);

const faqs = [
  {
    question: 'What is the solar tariff in California?',
    answer:
      "For new rooftop solar at PG&E, SCE and SDG&E, it is the net billing tariff the CPUC adopted in Decision 22-12-056, which the utilities call the Solar Billing Plan. It has applied to customers applying for interconnection since April 15, 2023. It sets a required time-of-use rate for the power you buy and credits exports at values from the CPUC's Avoided Cost Calculator, usually lower than import prices.",
  },
  {
    question: 'What rate plan do solar customers pay?',
    answer:
      'Under the net billing tariff the CPUC names one rate per utility: E-ELEC at PG&E, TOU-D-PRIME at SCE and EV-TOU-5 at SDG&E. Customers still on NEM 2.0 must be on a time-of-use rate but are not tied to those three. City-owned utilities such as SMUD and LADWP set their own solar rules.',
  },
  {
    question: 'Do solar customers pay a fixed charge?',
    answer:
      'Yes. PG&E, SCE and SDG&E residential customers, solar or not, pay a Base Services Charge of about $24 a month for most households, and all three say solar credits cannot pay it. Non-bypassable charges also stay on every bill.',
  },
  {
    question: 'How much do California utilities pay for solar exports?',
    answer:
      "Under the net billing tariff, it varies by hour. SDG&E's 2026 export file values a weekday noon export at about 0.4 cents per kWh in April and a weekday 6 p.m. export at about $1.07 in August. SMUD pays a flat 9.6 cents per kWh on its Solar and Storage Rate. NEM 1.0 and 2.0 customers are credited at retail rates.",
  },
  {
    question: 'Is a solar power tariff the same as a tariff on solar panels?',
    answer:
      'No. On utility bills, "tariff" means the approved rate schedule, and the solar tariff is the rule set for how a solar home is billed and credited. Federal import tariffs on solar panels are a different subject that affects equipment prices, not your utility rate plan; this page covers the utility meaning.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function SolarRatePage() {
  return (
    <PublicLayout breadcrumbLabel="Solar rates in California" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Solar rates in California" kicker="Solar · Utility rates" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                A California solar home pays two rates. One is the rate plan for power you still buy from the grid, and for new
                solar at PG&amp;E, SCE and SDG&amp;E the CPUC sets it: E-ELEC, TOU-D-PRIME and EV-TOU-5. The other is what the
                utility credits for power you send back, which under today&apos;s solar tariff changes by the hour and is usually
                lower than what you pay.
              </p>
              <p>
                That solar tariff is the net billing tariff the CPUC adopted in Decision 22-12-056, called the Solar Billing Plan
                by the utilities. It has applied to anyone applying for interconnection since April 15, 2023. Homes connected
                earlier under net energy metering keep those terms for 20 years. The figures below come from the CPUC&apos;s net
                billing page and each utility&apos;s current rate tables, checked September 23, 2026.
              </p>

              <QuickAnswer label="In one paragraph">
                <p>
                  <strong>Import rate:</strong> a required time-of-use plan whose most expensive hours are 4 to 9 p.m.{' '}
                  <strong>Export rate:</strong> hourly credits based on the grid value of power at that hour, very low at spring
                  middays and highest on late-summer evenings. <strong>Fixed charges:</strong> about $24 a month and
                  non-bypassable charges that solar credits cannot pay. The combination rewards using your own solar and
                  storing it for the evening, not exporting at noon.
                </p>
              </QuickAnswer>

              <div className="not-prose">
                <KeyFacts
                  heading="California solar tariff basics"
                  facts={[
                    { label: 'Net billing tariff applies from', value: 'April 15, 2023', note: 'PG&E, SCE and SDG&E', source: { publisher: 'CPUC', date: RATE_SOURCES_CHECKED, url: SRC.cpucNbt.url } },
                    { label: 'Required import rates', value: 'E-ELEC · TOU-D-PRIME · EV-TOU-5', source: { publisher: 'CPUC', date: RATE_SOURCES_CHECKED, url: SRC.cpucNbt.url } },
                    { label: 'Net billing tariff guaranteed for', value: '9 years', note: 'For the original customer', source: { publisher: 'CPUC', date: RATE_SOURCES_CHECKED, url: SRC.cpucNbt.url } },
                    { label: 'Legacy NEM 2.0 period', value: '20 years', note: 'From interconnection date', source: { publisher: 'CPUC', date: RATE_SOURCES_CHECKED, url: SRC.cpucNbt.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="Solar rate and tariff comparison" />
              </div>

              <h2>The solar rate plan at each utility</h2>
              <DataTable
                caption="Import rate plans for solar homes, by utility (summer prices per kWh)"
                columns={['Utility', 'Solar tariff', 'Import rate plan', 'Summer peak', 'Summer lowest']}
                rows={[
                  ['PG&E', 'Solar Billing Plan (net billing)', 'E-ELEC (required)', '55.214¢, 4–9 p.m.', '33.358¢, midnight–3 p.m.'],
                  ['SCE', 'Solar Billing Plan (net billing)', 'TOU-D-PRIME (required)', '59¢, 4–9 p.m. weekdays', '26¢ off-peak'],
                  ['SDG&E', 'Solar Billing Plan (net billing)', 'EV-TOU-5 (required, residential)', '80.205¢, 4–9 p.m.', '13.090¢ super off-peak'],
                  ['SMUD', 'Solar and Storage Rate', 'Set by SMUD, not the CPUC', 'See SMUD rates', 'See SMUD rates'],
                  ['LADWP', 'Net Energy Metering rider', 'Your published LADWP rate (R-1A or R-1B)', 'See LADWP rates', 'See LADWP rates'],
                ]}
                note={<>Sources: CPUC net billing page; PG&amp;E residential rate table (March 1, 2026) and E-ELEC tariff; SCE Time-of-Use plans page (SCE-rounded prices); SDG&amp;E EV-TOU-5 table (August 1, 2026); SMUD residential rates; LADWP EV/NEM/REO rates page. All checked September 23, 2026.</>}
              />
              <p>
                <strong>PG&amp;E.</strong> PG&amp;E&apos;s E-ELEC tariff says customers billed on the net billing tariff must be
                served on E-ELEC and do not need the EV, battery or heat pump other E-ELEC customers need. Its summer peak is the
                highest of PG&amp;E&apos;s whole-home plans and its winter prices the lowest, 28.468 to 32.063 cents. More in{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use rates and the best plan for solar
                </Link>
                .
              </p>
              <p>
                <strong>SCE.</strong> TOU-D-PRIME has no baseline credit but SCE&apos;s lowest off-peak prices, 24 to 26 cents, and
                a 4-to-9 p.m. window priced at 59 cents on summer weekdays and 56 cents in winter. More in{' '}
                <Link href="/blog/sce-time-of-use-rates-2026" className={guideLink}>
                  SCE time-of-use rates
                </Link>
                .
              </p>
              <p>
                <strong>SDG&amp;E.</strong> EV-TOU-5 has the widest spread: about 13 cents super off-peak against about 80 cents on
                summer evenings. More in{' '}
                <Link href="/blog/sdge-and-solar" className={guideLink}>
                  SDG&amp;E and solar
                </Link>
                .
              </p>
              <p>
                <strong>SMUD and LADWP.</strong> The CPUC&apos;s net billing tariff does not apply to city-owned utilities. SMUD
                credits exports on its Solar and Storage Rate at a flat 9.6 cents per kWh. LADWP&apos;s Net Energy Metering rider,
                effective since September 1, 2008, bills net energy on your regular rate and carries any credit balance forward to
                later bills, except taxes and minimum charges. See{' '}
                <Link href="/blog/smud-peak-hours" className={guideLink}>
                  SMUD peak hours and rates
                </Link>{' '}
                and{' '}
                <Link href="/blog/ladwp-rates" className={guideLink}>
                  LADWP rates
                </Link>
                .
              </p>

              <h2>What exports earn under the solar tariff</h2>
              <p>
                The CPUC says net billing credits exports at a rate reflecting the value of that power to the grid, based on its
                Avoided Cost Calculator and usually lower than import rates. In practice the value swings by hour and month.
                SDG&amp;E&apos;s 2026 hourly export file, which we summed across its generation and delivery parts, shows how much.
              </p>
              <DataTable
                caption="SDG&E 2026 export credit per kWh on weekdays (generation plus delivery)"
                columns={['Month', 'Noon', '6 p.m.']}
                rows={[
                  ['April', '0.41¢', '7.33¢'],
                  ['August', '6.07¢', '$1.07'],
                  ['December', '5.72¢', '9.58¢'],
                ]}
                note={<>Source: SDG&amp;E Solar Billing Plan export pricing, 2026 files, checked September 23, 2026. PG&amp;E and SCE publish their own hourly values on the same basis.</>}
              />
              <p>
                For comparison, SDG&amp;E&apos;s EV-TOU-5 charges 13.090 to 80.205 cents for the same kWh bought in summer. The gap
                is why a kWh used at home is usually worth several times a kWh exported at midday. PG&amp;E&apos;s export values by
                month and hour are in{' '}
                <Link href="/blog/selling-electricity-back-to-the-grid-price-per-kwh" className={guideLink}>
                  what utilities pay for power sold back to the grid
                </Link>
                .
              </p>
              <p>
                <strong>Lock-in and the ACC Plus adder.</strong> The CPUC guarantees the original customer the net billing tariff
                for nine years. Residential PG&amp;E and SCE customers who apply to interconnect before the end of 2027 also get
                slightly higher export credits for nine years, the adder the CPUC calls ACC Plus; the CPUC&apos;s summary does not
                list SDG&amp;E for it.
              </p>

              <h2>Charges solar cannot touch</h2>
              <p>
                Every PG&amp;E, SCE and SDG&amp;E residential bill now carries a Base Services Charge, about $24 a month for most
                households, and each utility says solar credits cannot pay it. PG&amp;E says it is not eligible to be offset by
                monthly generation credits; SCE says it is payable each month even for NEM and Solar Billing Plan customers;
                SDG&amp;E lists it among non-nettable charges with customer, meter and non-bypassable charges. Bills are also due
                monthly under the net billing tariff, which the CPUC says is meant to avoid a large surprise at true-up.
              </p>

              <h2>Older solar: NEM 1.0 and NEM 2.0 rates</h2>
              <p>
                Homes interconnected before the net billing tariff are on net energy metering, which credits exports at retail
                rates, including generation, distribution and transmission, and requires NEM 2.0 customers to be on a time-of-use
                rate. They keep NEM 2.0 for 20 years from interconnection; SDG&amp;E says its accounts then move to the Solar Billing
                Plan. Compare the two in{' '}
                <Link href="/blog/nem-2-vs-nem-3-california" className={guideLink}>
                  NEM 2.0 vs the net billing tariff
                </Link>{' '}
                and{' '}
                <Link href="/blog/net-billing-vs-net-metering-california" className={guideLink}>
                  net billing vs net metering
                </Link>
                ; see when a legacy term ends in{' '}
                <Link href="/blog/when-does-nem-2-expire" className={guideLink}>
                  when NEM 2.0 expires
                </Link>
                .
              </p>

              <h2>What this means for a solar decision</h2>
              <p>
                Under these rates, the value of solar is mostly the imports it avoids, not the exports it sells. A system sized to
                your daytime use, with a battery to cover 4 to 9 p.m., avoids the most expensive kWh on each required plan. Any
                proposal should show your remaining bill on the required rate plan, including the Base Services Charge, and the
                export-rate set it assumed. Battery economics under these rates are in{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={guideLink}>
                  battery payback under net billing
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

            <SolarInquiry topic="Solar rate and tariff comparison" heading="Compare a Solar Plan Against Your Current Rate" />
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
