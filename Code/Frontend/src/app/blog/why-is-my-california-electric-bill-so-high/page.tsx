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
import { BillComparison } from '@/components/growth/BillComparison';
import { SourceList } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, guideLink } from '@/components/growth/RateGuideParts';
import { Byline } from '@/components/trust/Byline';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';

// =============================================================================
// Electric-bills hub (topical-authority wave, 2026-09-23). Hand-written so the
// route carries its own Article schema and inquiry form; it no longer renders
// the shared CaliforniaBillDecisionPage("high") body. The "lower" guide still
// uses that component and is unchanged. The bill comparison tool
// (#bill-comparison) and the source-checked list are kept.
// =============================================================================

const path = '/blog/why-is-my-california-electric-bill-so-high';
const url = `https://ratereliefca.com${path}`;
const title = 'Why Is California Electricity So Expensive? Check Your Bill';
const h1 = 'Why Is My California Electric Bill So High? What Drives Rates and What to Check';
const description =
  "California's electricity costs nearly twice the U.S. average, driven by wildfire, grid and solar-incentive costs. See the causes and what to check on your bill.";
const published = '2026-04-24';
const updated = '2026-09-23';

const sources = [
  ...rateSources(
    'paoQ2_2026',
    'eiaEpm56a',
    'eiaEpm56b',
    'eiaBill2024',
    'cpucRateComparison',
    'cpucCareFera',
    'cpucClimateCredit',
    'cpucMyBill',
    'pgeBsc',
    'sceBsc',
    'sdgeTouDr1Aug2026',
    'pgeResRatesCurrent',
    'sdgeWhenMatters',
    'cpucMedicalBaseline',
  ),
];

const faqs = [
  {
    question: 'Why is electricity so expensive in California?',
    answer:
      "The CPUC Public Advocates Office names three main statewide drivers of rising rates: wildfire mitigation and liability costs, transmission and distribution investment, and rooftop solar incentives under net energy metering. Those costs are recovered from a residential base that uses little electricity per home, so each kWh carries more of them. California's average residential price was 34.74 cents per kWh in June 2026, second only to Hawaii, per EIA.",
  },
  {
    question: 'Why is my electric bill so high this month?',
    answer:
      'Check four things in order: the number of days in the billing period, your kWh per day compared with the same month last year, whether summer or peak-hour prices applied, and whether a credit you had last month is missing. In 2026, PG&E, SCE and SDG&E paid the California Climate Credit in August and September, so an October bill without it can look higher even with the same use.',
  },
  {
    question: 'Why are electric rates so high in Southern California?',
    answer:
      "SDG&E has the highest residential average rate of the three big utilities, 45.5 cents per kWh in June 2026, and SCE's average has roughly doubled since 2016 (up 101%), according to the CPUC Public Advocates Office. On time-of-use plans, the 4 to 9 p.m. peak also covers the hours a summer air conditioner often runs.",
  },
  {
    question: 'Why is my bill still high with solar panels?',
    answer:
      'Solar does not remove the fixed Base Services Charge or the non-bypassable charges every customer pays, and on the net billing tariff exported power is usually credited at less than the retail price. A combined PG&E or SDG&E bill also carries gas. Compare the annual true-up, not a single month, before deciding the system is underperforming.',
  },
  {
    question: 'Who do I call if I think my bill is wrong?',
    answer:
      "Call the utility first, using the number on the front of the bill, with a complete copy of the bill in hand. If a CPUC-regulated utility such as PG&E, SCE or SDG&E cannot resolve it, the CPUC's consumer line is 1-800-649-7570. The CPUC cannot resolve disputes with municipal utilities such as SMUD or LADWP; those have their own complaint channels.",
  },
];

/** The electric-bills hub's children, grouped for the visible list (SEO/24 §5.2). */
const spokeGroups: { heading: string; links: { href: string; label: string; blurb: string }[] }[] = [
  {
    heading: 'High-bill guides by utility',
    links: [
      { href: '/blog/why-is-my-pge-bill-so-high', label: 'Why a PG&E bill runs high', blurb: 'Seven causes to check, from billing days to the gas section.' },
      { href: '/blog/why-is-my-sce-bill-so-high', label: 'Why an Edison bill runs high', blurb: 'SCE plans, peak hours and what the Base Services Charge changed.' },
      { href: '/blog/why-is-my-sdge-bill-so-high', label: 'Why an SDG&E bill runs high', blurb: 'A bill-first checklist for the highest-priced of the big three.' },
      { href: '/blog/why-is-my-ladwp-bill-so-high', label: 'Why an LADWP bill runs high', blurb: 'Separate water, sewer and trash from the electric charges.' },
      { href: '/blog/why-is-my-smud-bill-so-high', label: 'Why a SMUD bill runs high', blurb: 'Summer peak pricing, the fixed charge and the 2026 increase.' },
    ],
  },
  {
    heading: 'Averages and usage',
    links: [
      { href: '/blog/average-utility-bill-california', label: 'Average utility bill in California', blurb: 'Electric and gas averages from EIA, and bills by utility.' },
      { href: '/blog/average-kwh-per-day-california', label: 'Average kWh per day in California', blurb: 'Daily use, baseline allowances and the cheapest hours.' },
      { href: '/blog/average-pge-bill-for-1-bedroom-apartment', label: 'PG&E bill for a one-bedroom apartment', blurb: 'What apartment-sized usage costs on PG&E plans.' },
      { href: '/blog/where-does-california-get-its-electricity', label: 'Where California gets its electricity', blurb: 'The 2024 power mix, imports and how much the state uses per day.' },
    ],
  },
  {
    heading: 'Reading the bill',
    links: [
      { href: '/blog/california-24-dollar-fixed-charge-explained', label: 'The $24 fixed charge, explained', blurb: 'What the Base Services Charge covers and who pays less.' },
      { href: '/blog/what-is-3rd-party-electric-on-pge-bill', label: '"3rd party electric" on a PG&E bill', blurb: 'Why a community choice provider appears on your statement.' },
      { href: '/blog/sce-settlement-bill', label: 'The SCE annual settlement bill', blurb: 'Why solar customers get a once-a-year balance from Edison.' },
      { href: '/blog/how-often-does-ladwp-bill', label: 'How often LADWP bills', blurb: 'Two-month billing, tiers per bill and what that does to totals.' },
      { href: '/blog/direct-access-electricity-california', label: 'Direct Access electricity in California', blurb: 'Who can buy power from a non-utility provider, and who cannot.' },
    ],
  },
  {
    heading: 'Rates behind the bill',
    links: [
      { href: '/blog/pge-vs-sce-vs-sdge-rates-compared', label: 'PG&E vs. SCE vs. SDG&E rates', blurb: 'Rates per kWh and sample bills side by side.' },
      { href: '/blog/sce-rate-increase-2026', label: 'SCE rate increases, 2024 to 2026', blurb: 'The October 2025 jump and every change since.' },
    ],
  },
  {
    heading: 'Help paying and ways to lower it',
    links: [
      { href: '/blog/income-qualified-bill-discount-pge', label: "PG&E's income-qualified discounts", blurb: 'CARE, FERA and the lower Base Services Charge, with 2026 limits.' },
      { href: '/blog/how-to-lower-electric-bill-california', label: 'How to lower a California electric bill', blurb: 'Rate plan, baseline, fixed charges and usage, in that order.' },
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z` },
};

export default function WhyIsMyCaliforniaElectricBillSoHigh() {
  return (
    <PublicLayout breadcrumbLabel="Why is my California electric bill so high?" breadcrumbParent={{ label: 'Blog', href: '/blog' }}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <header className="mb-8">
              <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/blog" className="hover:text-primary">Blog</Link>
                <span aria-hidden="true">/</span>
                <span className="text-foreground">Why California electric bills are high</span>
              </nav>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">California · Electric bills</span>
              <h1 className="mb-4 mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                California electricity is expensive because of what utilities are allowed to recover in rates: wildfire
                prevention and liability, transmission and distribution upgrades, and rooftop solar incentives. Residential
                rates have risen 69% to 101% since 2016. Your own bill on top of that depends on daily usage, your rate plan,
                the season and fixed charges, so check those next.
              </p>
              <p>
                This page is the starting point for every bill question on the site. The first half explains the statewide
                price. The second half is a checklist for your own statement, with a tool that separates a usage jump from a
                price jump, and a map of the utility-specific guides. For the current rate at each utility, use the{' '}
                <Link href="/california-utility-rate-tracker" className={guideLink}>
                  California utility rate tracker
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="California electricity prices"
                  facts={[
                    { label: 'California residential price, June 2026', value: '34.74¢/kWh', note: 'U.S. average: 18.34¢', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaEpm56a.url } },
                    { label: 'Rank among states, June 2026', value: '2nd highest', note: 'After Hawaii', source: { publisher: 'U.S. EIA', date: RATE_SOURCES_CHECKED, url: SRC.eiaEpm56a.url } },
                    { label: 'Rate rise, Jan 2016 to Jun 2026', value: '+69% to +101%', note: 'PG&E, SDG&E, SCE', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                    { label: 'Households behind on bills, May 2026', value: '20.6%', note: 'PG&E, SCE and SDG&E combined', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="California high electric bill" />
              </div>

              <h2>Why electricity is so expensive in California</h2>
              <p>
                The CPUC&apos;s Public Advocates Office, which represents customers before the commission, tracks residential
                rates every quarter. Its July 2026 report, citing the CPUC&apos;s 2025 SB 695 report, names three main
                statewide drivers:
              </p>
              <ul>
                <li>
                  <strong>Wildfire mitigation and wildfire liability.</strong> Undergrounding lines, clearing vegetation,
                  insurance and past fire costs. The office counts $3.97 billion of PG&amp;E&apos;s 2026 revenue requirement
                  as wildfire-related, about 19%, and about 14% at both SCE and SDG&amp;E.
                </li>
                <li>
                  <strong>Transmission and distribution investment.</strong> The wires, poles, substations and high-voltage
                  lines that move power to homes.
                </li>
                <li>
                  <strong>Rooftop solar incentives.</strong> Net energy metering credits exports at retail prices; the office
                  lists those incentives among the main drivers of higher rates.
                </li>
              </ul>
              <p>
                The result shows up in the office&apos;s ten-year numbers. From January 2016 to June 2026, the residential
                average rate rose 69% at PG&amp;E, 101% at SCE and 97% at SDG&amp;E. The report&apos;s chart shows rates rising
                far faster than general inflation since 2014. As of June 2026 the averages were 33.7 cents per kWh at PG&amp;E,
                34.4 cents at SCE and 45.5 cents at SDG&amp;E.
              </p>
              <DataTable
                caption="Residential average electricity price, June 2026"
                columns={['Area', 'Cents per kWh', 'Source']}
                rows={[
                  ['Hawaii', '52.72¢', 'EIA'],
                  ['California (all utilities)', '34.74¢', 'EIA'],
                  ['Massachusetts', '29.61¢', 'EIA'],
                  ['New York', '29.49¢', 'EIA'],
                  ['U.S. average', '18.34¢', 'EIA'],
                  ['SDG&E', '45.5¢', 'CPUC Public Advocates Office'],
                  ['SCE', '34.4¢', 'CPUC Public Advocates Office'],
                  ['PG&E', '33.7¢', 'CPUC Public Advocates Office'],
                ]}
                note={<>Sources: U.S. EIA Electric Power Monthly Table 5.6.A, June 2026; CPUC Public Advocates Office Q2 2026 Electric Rates Report. Both checked September 23, 2026. The two measure slightly differently: EIA covers every California utility, the office covers each investor-owned utility&apos;s residential class excluding the California Climate Credit.</>}
              />
              <p>
                One thing works in California&apos;s favor: homes here use little electricity. In EIA&apos;s 2024 data the
                average California home used 503 kWh a month, second-lowest of the 50 states and D.C., against a U.S. average
                of 863 kWh.
                That keeps the average monthly bill, $160.86 in 2024, well below what the price alone would suggest. It also
                means fixed costs are spread over fewer kWh. More on how that plays out in the{' '}
                <Link href="/blog/electricity-rates-highest-in-us-california" className={guideLink}>
                  national rate ranking
                </Link>
                .
              </p>

              <h2>Why your bill is high: check these in order</h2>
              <p>
                Statewide prices explain why every Californian pays more than the national average. They do not explain why
                your bill jumped this month. For that, work down this list.
              </p>
              <ol>
                <li>
                  <strong>Billing days.</strong> A 33-day bill is not comparable with a 28-day bill. Divide total kWh by days
                  on each statement.
                </li>
                <li>
                  <strong>kWh per day.</strong> Compare with the same month last year, not last month. Air conditioning, a
                  new EV, a pool pump or electric heating can double daily use.
                </li>
                <li>
                  <strong>Season and peak hours.</strong> Summer prices run June through September at PG&amp;E and SCE. On
                  the main time-of-use plans at all three utilities, 4 to 9 p.m. costs the most; SDG&amp;E&apos;s default TOU-DR1 charged 69.135
                  cents per kWh on summer peak from August 1, 2026, before its baseline credit.
                </li>
                <li>
                  <strong>Baseline and tiers.</strong> Usage above your baseline allowance costs more. PG&amp;E&apos;s tiered
                  E-1 plan charged 32.561 cents within baseline and 40.702 cents above it from March 1, 2026.
                </li>
                <li>
                  <strong>Fixed charges.</strong> Since late 2025 at SCE and SDG&amp;E and March 1, 2026 at PG&amp;E, most
                  bills include a Base Services Charge of about $24 a month, or $6 and $12 for CARE and FERA customers. It
                  replaced part of the per-kWh price, so a low-use home can pay more and a high-use home less.
                </li>
                <li>
                  <strong>Missing credits.</strong> In 2026 the California Climate Credit came in August and September:
                  $36.18 per payment at PG&amp;E, $36.00 at SCE and $49.36 at SDG&amp;E. A bill without it looks higher.
                </li>
                <li>
                  <strong>Who supplies generation.</strong> If a community choice provider buys your power, its generation
                  charges and the utility&apos;s delivery charges are separate sections of the same bill.
                </li>
              </ol>
            </div>

            <div className="my-8">
              <BillComparison utilityName="California electric" />
            </div>

            <div className="prose prose-slate max-w-none">
              <p>
                If daily use held steady but daily charges rose, the price changed: a rate plan, a season, a tier, a credit
                or a rate change. If daily use rose, the fix is in the house. The CPUC&apos;s{' '}
                <a href={SRC.cpucRateComparison.url} target="_blank" rel="noopener noreferrer" className={guideLink}>
                  rate comparison tool
                </a>{' '}
                lists the residential, CARE and EV rates available at your ZIP code, including community choice providers.
              </p>

              <h2>Guides for each part of the bill</h2>
              <p>Pick the guide for the utility on your statement or the line you do not recognize.</p>
            </div>

            <nav aria-label="Electric bill guides" className="not-prose my-6 space-y-6">
              {spokeGroups.map((g) => (
                <section key={g.heading}>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{g.heading}</h3>
                  <ul className="space-y-2">
                    {g.links.map((l) => (
                      <li key={l.href} className="leading-relaxed">
                        <Link href={l.href} className={`font-medium ${guideLink}`}>
                          {l.label}
                        </Link>
                        <span className="text-foreground/75"> — {l.blurb}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </nav>

            <div className="prose prose-slate max-w-none">
              <h2>If the bill is hard to pay</h2>
              <p>
                About 2.42 million PG&amp;E, SCE and SDG&amp;E customers were behind on their bills in May 2026, owing $619
                on average, according to the Public Advocates Office. If your household income is at or below the CPUC
                limits, $43,280 for one or two people and $66,000 for four from June 1, 2026, CARE cuts the electric bill
                30% to 35%. FERA takes 18% off for households just above those limits. Medical Baseline adds lower-priced
                energy for homes that rely on medical equipment. Apply through your utility; municipal utilities such as
                LADWP and SMUD run their own programs.
              </p>

              <h2>If you think the bill is wrong</h2>
              <p>
                Call the utility first, using the customer service number on the front of the bill, with a full copy of the
                bill in hand. If a PG&amp;E, SCE or SDG&amp;E dispute is not resolved, the CPUC can walk you through the
                complaint process at 1-800-649-7570. The CPUC says it cannot resolve issues with municipal utilities such as
                SMUD or LADWP.
              </p>

              <h2>Where solar fits, once you know the cause</h2>
              <p>
                Solar addresses usage and time of use. It does not remove the Base Services Charge or non-bypassable charges,
                and new systems at PG&amp;E, SCE and SDG&amp;E are credited under the net billing tariff, where exports usually
                earn less than retail prices. Before comparing proposals, read{' '}
                <Link href="/blog/nem-2-vs-nem-3-california" className={guideLink}>
                  how NEM 2.0 and NEM 3.0 credit exports
                </Link>
                , check{' '}
                <Link href="/solar-panels-california" className={guideLink}>
                  California solar costs and sizing
                </Link>
                , and see which{' '}
                <Link href="/blog/california-solar-tax-credit-2026" className={guideLink}>
                  California solar incentives still apply in 2026
                </Link>
                . A proposal should use a full year of your actual usage and your current rate plan, and show what stays on
                the bill afterward.
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <SourceList sources={sources} sourceCheckedDate={RATE_SOURCES_CHECKED} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <HubSpokeLinks hub="utility_rates" currentPath={path} title="More on utility rates" />
            </div>

            <SolarInquiry topic="California high electric bill" variant="bill" heading="Compare a Solar Plan With Your Electric Bill" />
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
