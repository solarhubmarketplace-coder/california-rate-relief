import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';

// 2026-09-23 (Tier 2): rewritten for "sunrun tesla" / "sunrun vs tesla solar".
// The earlier version compared install times, service quality and "wins"
// that had no source, and said Tesla's lease terms were unpublished; Tesla's
// support page now publishes them. Every row below is from a company page,
// filing or press release, with the date it was checked. Two rows keep the
// September 22 check (Sunrun licenses and home-sale transfer; Tesla panel and
// Powerwall warranties) because those pages were not re-read on the 23rd.

const path = '/solar-installers/sunrun-vs-tesla-solar';
const checked = '2026-09-23';
const priorCheck = '2026-09-22';

const metaTitle = 'Sunrun vs Tesla Solar (2026): Warranty, Lease and Powerwall';
const metaDescription =
  "Sunrun vs Tesla in California: Sunrun's subscription and guarantee vs Tesla's 25-year lease or purchase, who installs Powerwall, and how they partner.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${path}`,
    publishedTime: '2026-04-24T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sunrun vs Tesla Solar: Which Fits a California Home?',
  description: metaDescription,
  datePublished: '2026-04-24',
  dateModified: checked,
  author: CRR_AUTHOR_PERSON,
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ratereliefca.com${path}` },
};

const SRC = {
  sunrunQ2: 'https://investors.sunrun.com/news-events/press-releases/detail/378/sunrun-reports-second-quarter-2026-financial-results',
  dispatch: 'https://investors.sunrun.com/news-events/press-releases/detail/381/sunrun-and-tesla-dispatch-580-megawatts-to-californias',
  flexRelease: 'https://investors.sunrun.com/news-events/press-releases/detail/348/sunrun-and-tesla-launch-home-energy-plan-to',
  flexTesla: 'https://www.tesla.com/support/tesla-electric/sunrun-flex',
  lsiRelease: 'https://investors.sunrun.com/news-events/press-releases/detail/372/sunrun-renew-home-and-tesla-team-up-to-deliver-more',
  guarantee: 'https://www.sunrun.com/why-sunrun/your-guarantee',
  sunrunPowerwall: 'https://www.sunrun.com/solar-battery-storage/tesla-powerwall',
  roofing: 'https://www.sunrun.com/roofing',
  sunrunLic: 'https://www.sunrun.com/state-contractor-license-information',
  sunrunMove: 'https://www.sunrun.com/go-solar-center/solar-faq/what-happens-if-i-move',
  teslaLease: 'https://www.tesla.com/support/energy/solar-panels/learn/leasing-solar',
  teslaDesign: 'https://www.tesla.com/energy/design',
  teslaLic: 'https://www.tesla.com/support/energy/more/legal/contractor-licenses',
  teslaPanel: 'https://energylibrary.tesla.com/docs/Public/Solar/Retrofit/Datasheet/TeslaPanelMount/DatasheetTeslaSolarPanel.pdf',
  pw3: 'https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-us/Powerwall-3-Datasheet.pdf',
  teslaWarranty: 'https://www.tesla.com/support/energy/solar-panels/learn/warranty',
  pwWarranty: 'https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/General/Warranty/en-us/Powerwall-Warranty-EN.pdf',
};

const sources: ReviewSource[] = [
  { name: 'Sunrun — Second quarter 2026 financial results (August 5, 2026)', url: SRC.sunrunQ2, supports: '1,205,613 customers and 1,034,738 subscribers at June 30, 2026; $1.1 billion total cash; $3.7 billion Contracted Net Earning Assets; 74% storage attachment in Q2 2026', checked },
  { name: 'Sunrun — Sunrun and Tesla dispatch 580 megawatts (September 21, 2026)', url: SRC.dispatch, supports: 'September 9, 2026 dispatch; more than 140,000 batteries incl. 110,000 Powerwalls; Sunrun operated more than half of the Powerwalls; DSGS and ELRP', checked },
  { name: 'Sunrun — Sunrun and Tesla launch home energy plan for Texans (July 24, 2025)', url: SRC.flexRelease, supports: 'Tesla Electric + Sunrun Flex, available to Sunrun Flex customers in Texas', checked },
  { name: 'Tesla Support — Tesla Electric + Sunrun Flex', url: SRC.flexTesla, supports: 'Offered only to Sunrun Flex customers in Texas; at least one Powerwall; 12-month contract', checked },
  { name: 'Sunrun — Sunrun, Renew Home and Tesla (June 24, 2026)', url: SRC.lsiRelease, supports: 'Plan to aggregate home batteries and other devices into more than 16 GW of flexible capacity; Virginia first', checked },
  { name: 'Sunrun — Your guarantee', url: SRC.guarantee, supports: 'At least 90% of estimated lifetime production; 25 years of repairs, parts and labor; watertight roof warranty; battery outage guarantee; Subscription or Protection Plus plans only', checked },
  { name: 'Sunrun — Tesla Powerwall', url: SRC.sunrunPowerwall, supports: 'Tesla certified premium installer; Powerwall for as little as $0 down under monthly or full-amount leases; Tesla app; adding Powerwall to an existing system offered only in California', checked },
  { name: 'Sunrun — Roofing', url: SRC.roofing, supports: 'Roof work through Remi Roofing; 5-year workmanship warranty on Remi jobs; solar warranty requires a healthy roof; Remi financing not in NY or NV', checked },
  { name: 'Sunrun — State contractor license information', url: SRC.sunrunLic, supports: 'California licenses #750184 and #969975', checked: priorCheck },
  { name: 'Sunrun — What happens if I move', url: SRC.sunrunMove, supports: 'Four-step lease or PPA transfer; UCC-1 notice temporarily removed at no cost during transfer', checked: priorCheck },
  { name: 'Tesla Support — How leasing solar with Tesla works', url: SRC.teslaLease, supports: '25-year term; 3% annual escalator; $600 upfront; payments after PTO; maintenance incl. battery and inverter replacement; 95% availability; transfer and year-5 buyout; direct service territories', checked },
  { name: 'Tesla — Design your Solar + Powerwall system', url: SRC.teslaDesign, supports: 'Address and average bill required before a system recommendation', checked },
  { name: 'Tesla Support — Contractor licenses', url: SRC.teslaLic, supports: 'California: CSLB 888104 and CSLB 1127593', checked },
  { name: 'Tesla Energy Library — Tesla solar panel datasheet (2025)', url: SRC.teslaPanel, supports: 'TSP-415 and TSP-420; ≥20.3% and ≥20.5% efficiency; assembled in Buffalo, NY; 25-year product and performance warranty', checked },
  { name: 'Tesla Energy Library — Powerwall 3 datasheet (2025)', url: SRC.pw3, supports: '13.5 kWh; up to 11.5 kW; integrated solar inverter; 10-year warranty', checked },
  { name: 'Tesla Support — Solar panel warranty', url: SRC.teslaWarranty, supports: 'At least 80% of nameplate for at least 25 years; Tesla processes claims and covers related labor, including third-party panels it installed', checked: priorCheck },
  { name: 'Tesla — Powerwall Limited Warranty', url: SRC.pwWarranty, supports: '10 years; at least 70% of 13.5 kWh at year 10; 37.8 MWh throughput cap outside self-consumption, time-based control and backup', checked: priorCheck },
];

const faqs = [
  {
    question: 'Is Sunrun owned by Tesla?',
    answer:
      'No. They are separate companies that work together. Sunrun is a Tesla certified installer of Powerwall, and in September 2026 the two coordinated a 580 MW dispatch of home batteries to California’s grid in which Sunrun operated more than half of the 110,000 Powerwalls taking part.',
  },
  {
    question: 'Which is cheaper, Sunrun or Tesla?',
    answer:
      'Neither publishes a California price. Tesla’s design tool asks for your address and average bill before it prices a system, and Sunrun quotes by address too. Compare cash quotes by price per watt for the same system size, and compare subscriptions or leases by the year-one payment, the escalator and the year-25 payment. Tesla’s lease escalates 3% a year; get Sunrun’s escalator in writing from your agreement.',
  },
  {
    question: 'Does Sunrun install Tesla Powerwall?',
    answer:
      'Yes. Sunrun calls itself a Tesla certified premium installer and offers Powerwall under monthly or full-amount leases, with the Tesla app for monitoring. Its Powerwall page says adding a Powerwall to an existing system is currently offered only in California. Sunrun’s current Powerwall page does not mention its older Brightbox battery service.',
  },
  {
    question: 'Is Sunrun going bankrupt?',
    answer:
      'Its latest results do not suggest it. Sunrun’s second-quarter 2026 release, dated August 5, 2026, reports $1.1 billion in total cash, $3.7 billion of Contracted Net Earning Assets and 1,034,738 subscribers, up 10% on a year earlier, and contains no going-concern or bankruptcy statement. The Sunrun review tracks this in more detail.',
  },
  {
    question: 'Will Sunrun replace my roof?',
    answer:
      'Not itself. Sunrun offers roof work through a partnership with Remi Roofing that bundles removing the system, the roof work and reinstallation, with a 5-year workmanship warranty on Remi jobs. Sunrun says its 25-year system warranty requires a healthy roof, so settle the roof before a new install.',
  },
  {
    question: 'Can I get the Tesla Electric and Sunrun Flex plan in California?',
    answer:
      'No. Tesla and Sunrun both describe Tesla Electric + Sunrun Flex as available only to Sunrun Flex customers in Texas. It needs a new Sunrun Flex system with at least one Powerwall and runs on 12-month contracts.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';
const td = 'text-left align-top py-3 px-3 leading-relaxed';

export default function SunrunVsTeslaSolar() {
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
              <span className='text-foreground font-medium'>Sunrun vs Tesla Solar</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Installer Comparison</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Sunrun vs Tesla Solar: Which Fits a California Home?
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Updated September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Sunrun and Tesla are separate companies that work together: Sunrun installs Tesla Powerwall, and the two
                coordinated a statewide battery dispatch in September 2026. What separates them is how you pay and who owns
                the system. Most Sunrun customers subscribe and Sunrun owns the equipment. Tesla sells its own panels,
                inverter and Powerwall for cash or under a 25-year lease. Neither publishes a California price.
              </p>
              <p className={p}>
                This comparison uses each company’s own pages, filings and press releases, checked on the dates in the
                sources list. It covers ownership and lease terms, what each one guarantees, batteries, roofs, how the
                partnership works and whether Sunrun is financially stable. It does not rank either company.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'Sunrun subscribers', value: '1,034,738', note: 'Of 1,205,613 customers, June 30, 2026', source: { url: SRC.sunrunQ2, date: checked } },
                    { label: 'Tesla lease', value: '25 yrs, 3%/yr', note: 'Term and annual escalator; $600 upfront', source: { url: SRC.teslaLease, date: checked } },
                    { label: 'Sunrun production promise', value: '90%', note: 'Of estimated lifetime output; Subscription or Protection Plus', source: { url: SRC.guarantee, date: checked } },
                    { label: 'Tesla lease availability promise', value: '95%', note: 'System availability, calculated every two years', source: { url: SRC.teslaLease, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Sunrun vs Tesla Solar comparison' />
              </div>

              <h2 className={h2}>Sunrun vs Tesla at a glance</h2>
              <div className='overflow-x-auto my-6 not-prose'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-3 pr-4 font-bold text-foreground'>Factor</th>
                      <th className='text-left py-3 px-3 font-bold text-foreground'>Sunrun</th>
                      <th className='text-left py-3 px-3 font-bold text-foreground'>Tesla Solar</th>
                    </tr>
                  </thead>
                  <tbody className='text-foreground/80'>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium align-top'>Who owns the system</td>
                      <td className={td}>Mostly Sunrun: 1,034,738 of its 1,205,613 customers were subscribers at June 30, 2026.<Cite href={SRC.sunrunQ2} date={checked} /></td>
                      <td className={td}>You, if you buy; Tesla, if you lease.<Cite href={SRC.teslaLease} date={checked} /></td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium align-top'>Lease terms published</td>
                      <td className={td}>Set in your agreement; get the term and escalator in writing.</td>
                      <td className={td}>25 years, 3% annual escalator, $600 upfront, payments start after permission to operate.<Cite href={SRC.teslaLease} date={checked} /></td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium align-top'>Performance promise</td>
                      <td className={td}>At least 90% of estimated production over the system’s life, with 25 years of repairs, parts and labor; Subscription or Protection Plus plans only.<Cite href={SRC.guarantee} date={checked} /></td>
                      <td className={td}>Lease: 95% system availability, and maintenance including battery and inverter replacement for the term.<Cite href={SRC.teslaLease} date={checked} /> Purchase: panels guaranteed at least 80% of nameplate for 25 years, with Tesla covering claim labor.<Cite href={SRC.teslaWarranty} date={priorCheck} /></td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium align-top'>Panels</td>
                      <td className={td}>Brand set in your proposal; ask for the make and model.</td>
                      <td className={td}>Tesla TSP-415 or TSP-420, about 20.3% to 20.5% efficient, assembled in Buffalo, New York.<Cite href={SRC.teslaPanel} date={checked} /></td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium align-top'>Battery</td>
                      <td className={td}>Tesla Powerwall as a Tesla certified installer, from $0 down under a lease; adding Powerwall to an existing system offered only in California.<Cite href={SRC.sunrunPowerwall} date={checked} /></td>
                      <td className={td}>Powerwall 3: 13.5 kWh, up to 11.5 kW, 10-year warranty.<Cite href={SRC.pw3} date={checked} /></td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium align-top'>Monitoring app</td>
                      <td className={td}>Tesla app for Powerwall customers.<Cite href={SRC.sunrunPowerwall} date={checked} /></td>
                      <td className={td}>Tesla app.</td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium align-top'>Roof</td>
                      <td className={td}>Watertight roof warranty under the guarantee; roof replacement through Remi Roofing with a 5-year workmanship warranty.<Cite href={SRC.roofing} date={checked} /></td>
                      <td className={td}>Not stated on the Tesla pages checked; ask who covers leaks at the mounts.</td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium align-top'>Selling the home</td>
                      <td className={td}>A documented four-step lease or PPA transfer; the UCC-1 notice is lifted during the transfer at no cost.<Cite href={SRC.sunrunMove} date={priorCheck} /></td>
                      <td className={td}>Lease can transfer to the buyer with Tesla’s help, or be bought out after year five; a purchased system conveys with the house.<Cite href={SRC.teslaLease} date={checked} /></td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium align-top'>California licenses listed</td>
                      <td className={td}>#750184 and #969975.<Cite href={SRC.sunrunLic} date={priorCheck} /></td>
                      <td className={td}>CSLB 888104 and CSLB 1127593.<Cite href={SRC.teslaLic} date={checked} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={p}>
                Neither company’s status at CSLB was checked for this page. Confirm the license on your contract at the{' '}
                <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={a}>CSLB lookup</Link>{' '}
                before you sign.
              </p>

              <h2 className={h2}>Is Sunrun owned by Tesla?</h2>
              <p className={p}>
                No. They are two companies with three public arrangements. In California, Sunrun installs Powerwall and
                the two coordinate their battery fleets: on September 9, 2026 they dispatched more than 580 MW from over
                140,000 home batteries, including 110,000 Powerwalls, more than half of them operated by Sunrun, under the
                state’s Demand Side Grid Support and Emergency Load Reduction programs.<Cite href={SRC.dispatch} date={checked} />{' '}
                In Texas, Tesla sells an electricity plan, Tesla Electric + Sunrun Flex, to Sunrun Flex customers who have at
                least one Powerwall; both companies say it is offered only in Texas.
                <Cite href={SRC.flexRelease} date={checked} />
                <Cite href={SRC.flexTesla} date={checked} /> And in June 2026 they announced, with Renew Home, a plan to
                pool home batteries and other devices into more than 16 GW of flexible capacity, starting in Virginia.
                <Cite href={SRC.lsiRelease} date={checked} />
              </p>

              <h2 className={h2}>Sunrun vs Tesla cost</h2>
              <p className={p}>
                Neither company prints a California price. Tesla’s design tool asks for your address and your average
                electric bill before it recommends and prices a system.<Cite href={SRC.teslaDesign} date={checked} /> Sunrun’s
                Powerwall page advertises “as little as $0 down” but no total or monthly figure.
                <Cite href={SRC.sunrunPowerwall} date={checked} /> So the comparison has to be built from two written quotes
                for the same address.
              </p>
              <p className={p}>
                If both are purchases, compare the price per watt for the same system size and what each includes. If one
                is a Sunrun subscription and the other a Tesla lease, compare the year-one payment, the escalator and the
                payment in year 25: at Tesla’s 3% escalator the last payment is about double the first (1.03 to the 24th
                power is about 2.03). Ask Sunrun for its escalator in writing. Our{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>cash, loan, lease and PPA comparison</Link>{' '}
                and the guide to{' '}
                <Link href='/solar-installers/sunrun-lease-vs-ppa' className={a}>Sunrun’s lease and PPA</Link> show what to
                line up.
              </p>

              <h2 className={h2}>Sunrun battery vs Tesla Powerwall</h2>
              <p className={p}>
                The battery does not separate them, because Sunrun installs Powerwall. Sunrun calls itself a Tesla certified
                premium installer, offers Powerwall under monthly or full-amount leases, and points Powerwall customers to
                the Tesla app for monitoring. Its page says adding a Powerwall to an existing system is currently offered
                only in California.<Cite href={SRC.sunrunPowerwall} date={checked} /> The difference is ownership: buy a
                Powerwall from Tesla and it is yours, with Tesla’s 10-year warranty;
                <Cite href={SRC.pw3} date={checked} /> lease it from Sunrun and Sunrun owns it and services it under its
                guarantee. For what one costs and which rebates still apply, see the{' '}
                <Link href='/battery/tesla-powerwall-3-cost-california' className={a}>Powerwall 3 price and rebate page</Link>.
              </p>

              <h2 className={h2}>Is Sunrun going bankrupt?</h2>
              <p className={p}>
                Its most recent filing does not point that way. Sunrun’s second-quarter 2026 release, dated August 5,
                2026, reports $1.1 billion in total cash, $3.7 billion of Contracted Net Earning Assets, subscribers up 10%
                on a year earlier and a 74% storage attachment rate, and contains no going-concern or bankruptcy statement.
                <Cite href={SRC.sunrunQ2} date={checked} /> Subscriber additions in the quarter were 31% lower than a year
                earlier, which is worth watching. Several other California solar companies have filed for bankruptcy since
                2024; the{' '}
                <Link href='/solar-installers/sunrun-review' className={a}>Sunrun review</Link> and{' '}
                <Link href='/solar-installers/worst-solar-companies-california' className={a}>the bankruptcy record</Link>{' '}
                cover them.
              </p>

              <h2 className={h2}>Will Sunrun replace my roof?</h2>
              <p className={p}>
                Not with its own crews. Sunrun offers roof work through a partnership with Remi Roofing, which bundles
                removing the system, the roof work and reinstalling it, with a 5-year workmanship warranty on every Remi
                job. Sunrun says its 25-year solar warranty requires a healthy roof, and that Remi’s financing is not
                available in New York or Nevada.<Cite href={SRC.roofing} date={checked} /> If your roof is near the end of
                its life, price the roof and the solar together, whichever company you choose.
              </p>

              <h2 className={h2}>Who each tends to fit</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li><strong>If you want no upfront cost and someone else responsible for repairs,</strong> both offer that: Sunrun through its subscription and guarantee, Tesla through its lease. Compare the escalators and the guarantees line by line.</li>
                <li><strong>If you want to own the system,</strong> Tesla sells its own panels, inverter and Powerwall for cash, and you keep them when you sell the house.</li>
                <li><strong>If you already have solar and want to add a battery,</strong> Sunrun says it offers Powerwall add-ons in California; ask Tesla the same for your address.</li>
                <li><strong>If your roof needs work,</strong> Sunrun has a published roofing arrangement; for Tesla, ask in writing who handles the roof and leaks.</li>
              </ul>
              <p className={p}>
                For the complaint files and court records behind each company, read the{' '}
                <Link href='/solar-installers/sunrun-review' className={a}>full Sunrun review</Link> and the{' '}
                <Link href='/solar-installers/tesla-solar-review' className={a}>full Tesla Solar review</Link>. For a list of
                companies that install Powerwall, see{' '}
                <Link href='/blog/tesla-powerwall-installers-california' className={a}>Tesla Powerwall installers in California</Link>.
              </p>

              <div className='not-prose'>
                <FaqJsonLd items={faqs} />
                <FaqBlock items={faqs} schema={false} />
              </div>

              <div className='not-prose'>
                <SourceList sources={sources} />
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Written Quotes Before You Sign</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.</p>
              <div className='flex justify-center'>
                <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic='Sunrun vs Tesla Solar comparison' />
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
