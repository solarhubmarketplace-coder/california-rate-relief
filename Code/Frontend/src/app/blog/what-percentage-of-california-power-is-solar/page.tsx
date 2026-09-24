// 2026-09-23 new page (claude/ta-installers-20260923) for "what percentage of
// california power is solar" and "how many homes in california have solar".
// All figures come from California Energy Commission pages fetched on
// 2026-09-23. The CEC does not publish a count of homes with solar on those
// pages, so the page says so rather than borrowing a trade-group estimate.
import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

const PATH = '/blog/what-percentage-of-california-power-is-solar';
const UPDATED = '2026-09-23';
const metaTitle = 'What Percentage of California Power Is Solar? 2024 Data';
const metaDescription =
  'Solar supplied 21.3% of California’s 2024 power mix and 23.4% of in-state generation, before counting rooftop systems. What the CEC numbers mean.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const CEC_TSEG_2024 =
  'https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/2024-total-system-electric-generation';
const CEC_CAPACITY =
  'https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/electric-generation-capacity-and-energy';
const CEC_SOLAR_ALMANAC = 'https://ww2.energy.ca.gov/almanac/renewables_data/solar/index_cms.php';
const DGSTATS_FAQ = 'https://www.californiadgstats.ca.gov/faq/';
const CPUC_NEM = 'https://www.cpuc.ca.gov/NEM/';

const sources: Source[] = [
  { label: 'California Energy Commission: 2024 Total System Electric Generation', url: CEC_TSEG_2024 },
  { label: 'California Energy Commission: Electric Generation Capacity and Energy (updated June 16, 2026)', url: CEC_CAPACITY },
  { label: 'California Energy Commission: California solar energy statistics and data', url: CEC_SOLAR_ALMANAC },
  { label: 'California Distributed Generation Statistics (CPUC): frequently asked questions', url: DGSTATS_FAQ },
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: CPUC_NEM },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'What percentage of California’s electricity comes from solar?',
    answer:
      'In 2024, solar was 21.30% of California’s total system power, which counts in-state generation plus imports, and 23.44% of the electricity generated inside the state, according to the California Energy Commission. Those shares exclude rooftop and other behind-the-meter solar.',
  },
  {
    question: 'Does that include rooftop solar?',
    answer:
      'No. The CEC’s generation figures cover power plants and leave out distributed systems such as home rooftop solar. The CEC reports separately that more than 17,400 megawatts of behind-the-meter solar has displaced about 10 percent of the energy local utilities would otherwise supply.',
  },
  {
    question: 'How many homes in California have solar panels?',
    answer:
      'The CEC pages used here do not give a count of homes. The closest public tally is California Distributed Generation Statistics, a CPUC-overseen site that tracks every solar system interconnected under net metering in PG&E, SCE and SDG&E territory and updates monthly, usually with about a six-week delay. It does not cover municipal utilities such as LADWP or SMUD.',
  },
  {
    question: 'How fast is solar growing in California?',
    answer:
      'The CEC counts in-state solar PV plants of 1 megawatt and larger at 14,981 megawatts of capacity at the end of 2021 and 23,749 megawatts at the end of 2025. Their generation rose from 33,569 to 53,642 gigawatt-hours over the same years.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

export default function WhatPercentageOfCaliforniaPowerIsSolar() {
  return (
    <PublicLayout
      breadcrumbLabel="How much of California's power is solar"
      breadcrumbParent={{ label: 'Solar panels in California', href: '/solar-panels-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="What percentage of California's power is solar?"
        url={`https://ratereliefca.com${PATH}`}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 md:pt-12">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/solar-panels-california" className="hover:text-primary">Solar panels in California</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">Solar&rsquo;s share of California power</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">California solar data</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          What percentage of California&rsquo;s power is solar?
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          In 2024, solar power plants supplied 21.30% of California&rsquo;s total electricity mix,
          counting imports, and 23.44% of the electricity generated inside the state, according to
          the California Energy Commission. Neither figure includes rooftop solar. The CEC says more
          than 17,400 megawatts of rooftop and other behind-the-meter systems displaced roughly
          another 10% of the energy local utilities would otherwise have supplied.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        <KeyFacts
          facts={[
            { label: 'Solar share of total power mix, 2024', value: '21.30%', note: 'In-state generation plus imports; plants only.', source: { publisher: 'CEC', date: UPDATED, url: CEC_TSEG_2024 } },
            { label: 'Solar share of in-state generation, 2024', value: '23.44%', note: '50,666 GWh of solar out of in-state generation.', source: { publisher: 'CEC', date: UPDATED, url: CEC_TSEG_2024 } },
            { label: 'Behind-the-meter solar', value: '17,400+ MW', note: 'Displaced about 10% of energy utilities would supply.', source: { publisher: 'CEC', date: UPDATED, url: CEC_TSEG_2024 } },
            { label: 'Battery storage statewide, 2024', value: '15,040 MW', source: { publisher: 'CEC', date: UPDATED, url: CEC_TSEG_2024 } },
          ]}
          sourcesHref="#sources"
        />

        <div>
          <h2 className={h2}>Two percentages, and why both are right</h2>
          <p className={p}>
            You will see two different shares quoted for the same year, and the difference is what
            each one measures. The CEC&rsquo;s Total System Electric Generation report puts 2024
            total system power at 278,338 gigawatt-hours, a total that includes electricity imported
            from other states. Solar made up 21.30% of that system total, counting solar power
            imported into California as well as solar made here. Looking only inside the state,
            California solar plants produced 50,666 gigawatt-hours, or 23.44% of in-state generation
            (CEC, checked September 23, 2026). The first number describes the power Californians
            used; the second describes what the state&rsquo;s own plants produced.
          </p>
          <div className="mb-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-3 text-left font-semibold">California solar in the 2024 power mix (CEC)</caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Measure</th>
                  <th className="p-3">2024 figure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className="p-3 align-top">Total system electric generation</th><td className="p-3 align-top">278,338 GWh</td></tr>
                <tr className="border-t"><th scope="row" className="p-3 align-top">In-state solar generation</th><td className="p-3 align-top">50,666 GWh</td></tr>
                <tr className="border-t"><th scope="row" className="p-3 align-top">Solar share of in-state generation</th><td className="p-3 align-top">23.44%</td></tr>
                <tr className="border-t"><th scope="row" className="p-3 align-top">Solar share of total system power</th><td className="p-3 align-top">21.30%</td></tr>
                <tr className="border-t"><th scope="row" className="p-3 align-top">Behind-the-meter solar capacity</th><td className="p-3 align-top">More than 17,400 MW, not counted above</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className={h2}>Rooftop solar is counted separately</h2>
          <p className={p}>
            Home and business rooftop systems sit behind the customer&rsquo;s meter. The power they
            make is used on site first, so it never shows up as utility generation. The CEC&rsquo;s
            solar statistics page puts it simply: most electricity from PV &ldquo;is not counted into
            the total electricity production of the utility companies&rdquo; because the panels are on
            individual homes and businesses (CEC, checked September 23, 2026).
          </p>
          <p className={p}>
            Instead, the CEC reports its effect on demand. In the 2024 report it states that more than
            17,400 megawatts of behind-the-meter solar capacity &ldquo;has displaced approximately 10
            percent of energy supplied by local utilities.&rdquo; Adding that to the 21.30% plant share
            gives a rough sense of solar&rsquo;s full footprint, but the two numbers are measured
            differently, so treat any combined figure as an estimate, not a CEC statistic.
          </p>

          <h2 className={h2}>How many California homes have solar?</h2>
          <p className={p}>
            The CEC pages above do not publish a household count. The best public tally is California
            Distributed Generation Statistics, which the CPUC oversees. It covers every solar system
            interconnected under the net metering tariffs of PG&amp;E, SCE and SDG&amp;E and updates its
            interconnection data monthly, usually with about a six-week delay (DGStats FAQ, checked
            September 23, 2026). Two limits matter. It counts projects, which include businesses, not
            just homes, and it leaves out customers of municipal utilities such as LADWP and SMUD.
          </p>

          <h2 className={h2}>How solar&rsquo;s share has grown</h2>
          <p className={p}>
            The CEC&rsquo;s plant table tracks solar PV plants of one megawatt and larger. It excludes
            residential rooftop systems, backup generators and imports, and was last updated June 16,
            2026 (CEC, checked September 23, 2026).
          </p>
          <div className="mb-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-3 text-left font-semibold">In-state solar PV plants of 1 MW and larger (CEC)</caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Year</th>
                  <th className="p-3">Capacity (MW)</th>
                  <th className="p-3">Generation (GWh)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className="p-3">2021</th><td className="p-3">14,981</td><td className="p-3">33,569</td></tr>
                <tr className="border-t"><th scope="row" className="p-3">2022</th><td className="p-3">16,681</td><td className="p-3">37,389</td></tr>
                <tr className="border-t"><th scope="row" className="p-3">2023</th><td className="p-3">19,973</td><td className="p-3">39,304</td></tr>
                <tr className="border-t"><th scope="row" className="p-3">2024</th><td className="p-3">22,291</td><td className="p-3">47,194</td></tr>
                <tr className="border-t"><th scope="row" className="p-3">2025</th><td className="p-3">23,749</td><td className="p-3">53,642</td></tr>
              </tbody>
            </table>
          </div>
          <p className={p}>
            Over those four years, plant capacity rose by roughly 59% and generation by about 60%. For
            a longer view, the CEC notes that in 2012 solar PV produced 1,025 gigawatt-hours, the first
            year it passed solar thermal plants. The CEC&rsquo;s plant table and its Total System
            Electric Generation report are compiled differently, so their 2024 solar totals do not
            match exactly; use one series at a time when you compare years.
          </p>

          <h2 className={h2}>What a solar-heavy grid means for your bill</h2>
          <p className={p}>
            When a large share of the state&rsquo;s power arrives in the middle of the day, midday
            electricity becomes less valuable and evening electricity more so. That pattern is behind
            the CPUC&rsquo;s Net Billing Tariff. For PG&amp;E, SCE and SDG&amp;E customers who applied
            to connect since April 15, 2023, exported solar is credited at values from the CPUC&rsquo;s
            Avoided Cost Calculator, which are usually lower than the price of power you import (CPUC,
            checked September 23, 2026). The result is that new systems are designed to use more of
            their own output, and many add a battery to carry midday energy into the evening.
          </p>
          <p className={p}>
            Those trade-offs are covered in the{' '}
            <Link href="/solar-panels-california" className={link}>
              guide to home solar in California
            </Link>
            , the{' '}
            <Link href="/blog/nem-2-vs-nem-3-california" className={link}>
              comparison of NEM 2.0 and net billing
            </Link>{' '}
            and the{' '}
            <Link href="/battery/battery-payback-nem-3-california" className={link}>
              battery payback analysis
            </Link>
            . If you are weighing a system of your own, start with the{' '}
            <Link href="/blog/pros-and-cons-of-solar-panels-california" className={link}>
              pros and cons of solar in California
            </Link>{' '}
            and then the{' '}
            <Link href="/best-solar-companies-california" className={link}>
              guide to choosing an installer
            </Link>
            .
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="FAQ: solar in California's power mix" />
        <HubSpokeLinks hub="cost_value" currentPath={PATH} />
        <div className="mt-10">
          <SolarInquiry topic="Solar in California's electricity mix" />
        </div>
        <AuthorBio
          domain="crr"
          palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }}
        />
      </main>
      <Footer />
    </PublicLayout>
  );
}
