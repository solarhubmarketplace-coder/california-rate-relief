import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';

const path = '/solar-installers/pge-and-sunrun';
const checked = '2026-09-23';

const metaTitle = 'PG&E and Sunrun: Battery Programs, Payments, Who Qualifies';
const metaDescription =
  'What PG&E’s battery programs with Sunrun paid: $750 in 2023, $150 per battery in 2025. Who could join, the hours, and what to ask before enrolling.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${path}`,
    publishedTime: '2026-09-23T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'PG&E and Sunrun: The Battery Programs, What They Paid and Who Qualified',
  description: metaDescription,
  datePublished: checked,
  dateModified: checked,
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ratereliefca.com${path}` },
};

const SRC = {
  pge2023a: 'https://www.pge.com/en/newsroom/currents/customer-service/articles-3649-sunrun-pge-collaborate-residential-battery-powered-virtual-power-plant-support-grid-reliability-electric-customers.html',
  pge2023b: 'https://www.pge.com/en/newsroom/currents/energy-savings/articles-3795-sunrun-pge-expand-collaboration-energy-efficiency-summer-reliability-program.html',
  sunrun2024: 'https://investors.sunrun.com/news-events/press-releases/detail/302/sunrun-and-pge-complete-first-season-of-innovative',
  save: 'https://investor.pgecorp.com/news-events/press-releases/press-release-details/2025/PGE-Launches-Seasonal-Aggregation-of-Versatile-Energy-SAVE-Virtual-Power-Plant-Program/default.aspx',
  sunrun2026: 'https://investors.sunrun.com/news-events/press-releases/detail/362/sunrun-and-pge-dispatch-energy-from-northern-california',
  dispatch: 'https://investors.sunrun.com/news-events/press-releases/detail/381/sunrun-and-tesla-dispatch-580-megawatts-to-californias',
  dsgs: 'https://www.energy.ca.gov/programs-and-topics/programs/demand-side-grid-support-program',
  elrp: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/demand-response-dr/emergency-load-reduction-program',
  nbt: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing',
};

const sources: ReviewSource[] = [
  { name: 'PG&E Currents — Sunrun and PG&E collaborate on residential battery-powered virtual power plant (February 6, 2023)', url: SRC.pge2023a, supports: 'Up to 7,500 systems; 30 MW; 7–9 p.m. August–October; $750 upfront plus a smart thermostat; eligibility; CPUC approval on January 30, 2023', checked },
  { name: 'PG&E Currents — Sunrun and PG&E expand collaboration (August 4, 2023)', url: SRC.pge2023b, supports: 'Peak Power Rewards name; 8,500 customers and 34 MW', checked },
  { name: 'Sunrun — Sunrun and PG&E complete first season (January 29, 2024)', url: SRC.sunrun2024, supports: 'Nearly 32 MW peak; 27 MW average; more than 90 consecutive days; future programs being explored', checked },
  { name: 'PG&E Corporation — PG&E launches SAVE virtual power plant program (March 24, 2025)', url: SRC.save, supports: 'Up to 1,500 battery and 400 smart-panel customers; Sunrun and SPAN; up to 100 hours June–October 2025; South Bay and Central Valley; 60% in disadvantaged or low-income communities; 20% backup reserve for Sunrun customers', checked },
  { name: 'Sunrun — Sunrun and PG&E dispatch energy from Northern California homes (February 24, 2026)', url: SRC.sunrun2026, supports: 'Local PeakShift Power; more than 1,000 systems; more than 1,200 dispatch hours July–October 2025; $150 per battery', checked },
  { name: 'Sunrun — Sunrun and Tesla dispatch 580 MW (September 21, 2026)', url: SRC.dispatch, supports: 'September 9, 2026 dispatch under DSGS and ELRP across PG&E, SCE and SDG&E areas', checked },
  { name: 'California Energy Commission — Demand Side Grid Support', url: SRC.dsgs, supports: 'Program runs May to October; incentives for capacity commitments and load reduction', checked },
  { name: 'CPUC — Emergency Load Reduction Program', url: SRC.elrp, supports: 'Residential Power Saver Rewards sunset after the 2025 program year', checked },
  { name: 'CPUC — Net Energy Metering and Net Billing', url: SRC.nbt, supports: 'Export credits usually below retail; E-ELEC required for PG&E net-billing customers', checked },
];

const faqs = [
  {
    question: 'Are PG&E and Sunrun partners?',
    answer:
      'They have worked together on specific battery programs. PG&E is the utility and Sunrun is the solar company that owns or installs the systems. In each program, PG&E paid for grid support and Sunrun enrolled its customers and dispatched their batteries. PG&E does not install or own Sunrun systems.',
  },
  {
    question: 'How much did PG&E’s Sunrun program pay?',
    answer:
      'Peak Power Rewards in 2023 paid enrolled customers $750 upfront plus a smart thermostat. Local PeakShift Power, part of PG&E’s SAVE program in 2025, paid $150 per battery, according to Sunrun.',
  },
  {
    question: 'Is the PG&E and Sunrun program running in 2026?',
    answer:
      'Neither company’s announcements that we checked on September 23, 2026 confirm a 2026 season for these PG&E programs. Sunrun did report that its batteries took part in statewide dispatches in September 2026 under the California Energy Commission’s Demand Side Grid Support program. Ask Sunrun which program, if any, is open to you this year.',
  },
  {
    question: 'Who could join?',
    answer:
      'Peak Power Rewards was open to Sunrun solar and battery customers in single-family homes with a PG&E interconnection agreement who were not in other demand response programs. SAVE was targeted at customers near constrained lines and substations in PG&E’s service area, with a concentration in the South Bay and the Central Valley.',
  },
  {
    question: 'Does enrolling lower my PG&E bill?',
    answer:
      'The program payment is separate from your bill. Your bill still depends on your rate plan and your net-billing export credits. Enrollment also means the battery discharges at times you do not choose, so ask how much charge is kept in reserve for your own outages.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function PgeAndSunrun() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
              <span>/</span>
              <Link href='/solar-installers' className='hover:text-primary transition-colors'>Solar company reviews</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>PG&amp;E and Sunrun</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Utility Program</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                PG&amp;E and Sunrun: The Battery Programs, What They Paid and Who Qualified
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Published September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                PG&amp;E and Sunrun have run programs that pay Sunrun customers in PG&amp;E territory to let their home
                batteries send stored solar power to the grid on summer evenings. The first, Peak Power Rewards, paid
                $750 upfront plus a smart thermostat in 2023. A 2025 program under PG&amp;E’s SAVE pilot paid $150 per
                battery. Neither company had confirmed a 2026 season when we checked on September 23, 2026.
              </p>
              <p className={p}>
                This page is for a PG&amp;E customer who has a Sunrun system, or is weighing one, and wants to know what
                these programs are worth and what they ask of the battery. It uses the utility’s and the company’s own
                announcements and the state program pages.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'Peak Power Rewards payment (2023)', value: '$750', note: 'Plus a smart thermostat', source: { url: SRC.pge2023a, date: checked } },
                    { label: 'Local PeakShift Power payment (2025)', value: '$150 per battery', source: { url: SRC.sunrun2026, date: checked } },
                    { label: 'Peak Power Rewards dispatch window', value: '7–9 p.m.', note: 'Every evening, August–October 2023', source: { url: SRC.pge2023b, date: checked } },
                    { label: 'Customers enrolled (2023)', value: '8,500', note: '34 MW', source: { url: SRC.pge2023b, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='PG&E solar and battery options' />
              </div>

              <h2 className={h2}>How the PG&amp;E and Sunrun relationship works</h2>
              <p className={p}>
                PG&amp;E is your utility. Sunrun owns or installs the solar and battery system on your roof, usually under
                a lease or power purchase agreement. In these programs PG&amp;E paid for grid support, and Sunrun, acting
                as the aggregator, enrolled eligible customers and dispatched their batteries at set times. PG&amp;E does
                not install Sunrun systems, and your PG&amp;E bill stays a separate account with its own rate plan. For
                everything else about the company, see our{' '}
                <Link href='/solar-installers/sunrun-review' className={a}>Sunrun review</Link>.
              </p>

              <h2 className={h2}>Peak Power Rewards (2023)</h2>
              <p className={p}>
                PG&amp;E announced the program on February 6, 2023 and said the CPUC approved it on January 30, 2023, as
                part of the state’s response to the 2022 energy emergency proclamation. The plan was to enroll up to
                7,500 Sunrun solar-and-battery systems able to discharge 30 MW every day from 7 p.m. to 9 p.m., August
                through October. Participants received a $750 upfront payment and a smart thermostat. Eligibility was
                limited to Sunrun customers in single-family homes with a PG&amp;E interconnection agreement who were not
                enrolled in another demand response program.<Cite href={SRC.pge2023a} date={checked} />
              </p>
              <p className={p}>
                By August 4, 2023 the program, by then called Peak Power Rewards, had 8,500 customers and 34 MW.
                <Cite href={SRC.pge2023b} date={checked} /> Sunrun reported on January 29, 2024 that the fleet delivered
                nearly 32 MW at its peak and an average of 27 MW during the evening peak for more than 90 consecutive
                days, and that the two companies were exploring future programs.
                <Cite href={SRC.sunrun2024} date={checked} />
              </p>

              <h2 className={h2}>SAVE and Local PeakShift Power (2025)</h2>
              <p className={p}>
                On March 24, 2025, PG&amp;E launched the Seasonal Aggregation of Versatile Energy (SAVE) pilot, a virtual
                power plant aimed at local grid constraints rather than statewide peaks. PG&amp;E said it would include up
                to 1,500 residential customers with batteries and up to 400 with smart electric panels, with Sunrun and
                SPAN as the aggregators, for up to 100 hours from June through October 2025. It said the customers were
                spread across its service area with a concentration in the South Bay and the Central Valley, that 60%
                were in disadvantaged or low-income communities, and that Sunrun customers would keep at least a 20%
                backup reserve.<Cite href={SRC.save} date={checked} />
              </p>
              <p className={p}>
                Sunrun reported on February 24, 2026 that its part of SAVE, called Local PeakShift Power, used more
                than 1,000 customer systems, dispatched for more than 1,200 hours from July to October 2025 across more
                than two dozen constrained lines and substations, and paid enrolled customers $150 per battery.
                <Cite href={SRC.sunrun2026} date={checked} /> The announcement did not say whether the program continues
                in 2026.
              </p>

              <h2 className={h2}>Statewide programs Sunrun batteries also join</h2>
              <p className={p}>
                Beyond PG&amp;E’s own pilots, Sunrun enrolls batteries in state programs open to customers of all three
                large utilities. Sunrun reported that on September 9, 2026 it and Tesla dispatched 580 MW from more than
                140,000 home batteries across the PG&amp;E, SCE and SDG&amp;E areas under the California Energy
                Commission’s Demand Side Grid Support (DSGS) program and the CPUC’s Emergency Load Reduction Program.
                <Cite href={SRC.dispatch} date={checked} /> DSGS runs from May to October and pays for capacity
                commitments and measured load reduction during extreme events.<Cite href={SRC.dsgs} date={checked} /> The
                CPUC says the residential part of ELRP, Power Saver Rewards, ended after the 2025 program year.
                <Cite href={SRC.elrp} date={checked} />
              </p>

              <h2 className={h2}>What to ask before you enroll</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Which program is this, who runs it, and is it approved for this year?</li>
                <li>What is the payment, how is it calculated, and when is it paid?</li>
                <li>How many events or hours should I expect, and at what times?</li>
                <li>How much charge is kept for my own backup, and can I opt out of an event?</li>
                <li>Does enrollment stop me joining another program, or change my agreement with Sunrun?</li>
              </ul>
              <p className={p}>
                A program payment is a bonus on top of the battery’s main job. Under the CPUC’s net billing tariff,
                PG&amp;E net-billing customers take the E-ELEC rate, and export credits are usually below the retail rate,
                so most of a battery’s value comes from using stored solar in your own evening hours.
                <Cite href={SRC.nbt} date={checked} /> Read our guides to{' '}
                <Link href='/blog/pge-time-of-use-rates-2026' className={a}>PG&amp;E time-of-use rates</Link> and{' '}
                <Link href='/battery/battery-payback-nem-3-california' className={a}>battery payback under NEM 3.0</Link>{' '}
                before you count on program income, and see{' '}
                <Link href='/battery/tesla-powerwall-3-cost-california' className={a}>what a Powerwall 3 costs installed</Link>{' '}
                if you are pricing a battery.
              </p>

              <h2 className={h2}>If you are not a Sunrun customer</h2>
              <p className={p}>
                These PG&amp;E pilots were run through Sunrun, and SAVE also used SPAN smart panels. Owners of other
                batteries can still take part in state programs through the company that enrolls them; Tesla’s
                Powerwall fleet joined the September 2026 dispatch alongside Sunrun’s. Ask the installer or battery
                maker which programs it enrolls customers in where you live. Compare how each ownership option handles
                these payments with the{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>lease, PPA, loan and cash comparison</Link>.
              </p>

              <div className='not-prose'>
                <FaqJsonLd items={faqs} />
                <FaqBlock items={faqs} schema={false} />
              </div>

              <div className='not-prose'>
                <SourceList sources={sources} />
              </div>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic='PG&E solar and battery options' />
            </div>

            <HubSpokeLinks hub='installer_reviews' currentPath={path} />

            <div className='mt-10'>
              <Link href='/solar-installers' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to California solar company reviews</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
