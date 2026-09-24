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
import { VerifyInstallerBox } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';

const path = '/solar-installers/tesla-solar-review';
const checked = '2026-09-23';

const metaTitle = 'Tesla Solar Reviews (2026): Are Tesla Solar Panels Good?';
const metaDescription =
  "Tesla's panels, Solar Inverter and Powerwall 3 on their own datasheets, how Tesla prices a system in California, the inverter price question, and service.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${path}`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tesla Solar Reviews (2026): Are Tesla Solar Panels Good, and What Does Tesla Solar Cost in California?',
  description: metaDescription,
  datePublished: '2026-04-22',
  dateModified: checked,
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ratereliefca.com${path}` },
};
// No Review/Rating JSON-LD here: Google's review-snippet rules require
// ratings for a local business or organization to come directly from users,
// not from editors, and this site does not collect user ratings
// (developers.google.com/search/docs/appearance/structured-data/review-snippet,
// fetched 2026-09-23).

const SRC = {
  panel: 'https://energylibrary.tesla.com/docs/Public/Solar/Retrofit/Datasheet/TeslaPanelMount/DatasheetTeslaSolarPanel.pdf',
  inverter: 'https://energylibrary.tesla.com/docs/Public/Solar/Inverter/Datasheet/SolarShutdownDevice/en-us/SolarInverter-Datasheet-SolarShutdownDevice.pdf',
  pw3: 'https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-us/Powerwall-3-Datasheet.pdf',
  service: 'https://www.tesla.com/support/energy/solar-panels/learn/solar-service-warranty',
  solarpanels: 'https://www.tesla.com/solarpanels',
  design: 'https://www.tesla.com/powerwall/design',
  bbbSd: 'https://www.bbb.org/us/ca/san-diego/profile/solar-energy-contractors/tesla-1126-171985508',
  dispatch: 'https://investors.sunrun.com/news-events/press-releases/detail/381/sunrun-and-tesla-dispatch-580-megawatts-to-californias',
  rec: 'https://www.recgroup.com/en-us/rec-alpha-pure-rx',
  silfab: 'https://silfabsolar.com/wp-content/uploads/2026/05/Silfab-SIL-430-QD-Data-Final.pdf',
  irs: 'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb',
};

const sources: ReviewSource[] = [
  { name: 'Tesla Energy Library — Tesla solar panel datasheet (2025)', url: SRC.panel, supports: 'TSP-415 and TSP-420; ≥20.3% and ≥20.5% efficiency; assembled in Buffalo, NY; 3x power zones; 25-year product and performance warranty; ≥98% year 1, ≤0.45%/yr, ≥87.2% at 25 years', checked },
  { name: 'Tesla Energy Library — Tesla Solar Inverter and Solar Shutdown Device datasheet (October 25, 2024)', url: SRC.inverter, supports: '3.8, 5, 5.7 and 7.6 kW; 98.0% CEC efficiency at 240 V; 4 MPPTs; 12.5-year warranty; designed to integrate with Powerwall; no price listed', checked },
  { name: 'Tesla Energy Library — Powerwall 3 datasheet (2025)', url: SRC.pw3, supports: '13.5 kWh; 11.5 kW; integrated solar inverter with 20 kW input; 10-year warranty', checked },
  { name: 'Tesla Support — Solar service and warranty', url: SRC.service, supports: 'Remote technical support; in-house crews or certified technicians for onsite repairs', checked },
  { name: 'Tesla — Solar panels page', url: SRC.solarpanels, supports: 'Advertises a Tesla solar lease; no price shown without a quote', checked },
  { name: 'Tesla — Powerwall design and order page', url: SRC.design, supports: 'Quote requires an installation address', checked },
  { name: 'Better Business Bureau — Tesla (San Diego) profile', url: SRC.bbbSd, supports: 'Lists Tesla Energy Operations Inc and SolarCity as alternate names; Not Rated while responding to previously closed complaints; not accredited', checked },
  { name: 'Sunrun — Sunrun and Tesla dispatch 580 MW (September 21, 2026)', url: SRC.dispatch, supports: 'Coordinated dispatch of Powerwalls with Sunrun; about 55% of 110,000 Powerwalls owned by Sunrun', checked },
  { name: 'REC Group — Alpha Pure-RX', url: SRC.rec, supports: 'Comparison: up to 22.6% efficiency', checked },
  { name: 'Silfab Solar — SIL-430 QD datasheet', url: SRC.silfab, supports: 'Comparison: 22.1% efficiency', checked },
  { name: 'IRS — FAQs on Public Law 119-21 changes to 25D', url: SRC.irs, supports: 'No residential credit for expenditures made after December 31, 2025', checked },
];

const faqs = [
  {
    question: 'Are Tesla solar panels good?',
    answer:
      'They are solid, not exceptional, on paper. Tesla’s datasheet lists 415 and 420 W panels at about 20.3% to 20.5% efficiency, assembled in Buffalo, New York, with a 25-year product and performance warranty and at least 87.2% of rated output at year 25. Some premium panels list higher efficiency, around 22% or more. Tesla’s strength is the matched system: its panels, inverter, Powerwall and app from one company.',
  },
  {
    question: 'How much do Tesla solar panels cost in California?',
    answer:
      'Tesla does not publish a price without an address. Its order tools ask where the system will go and then quote that system. Get the cash price, divide it by the system size in watts, and compare with at least one other written quote for the same size. Tesla also advertises a solar lease, which you would compare on the monthly payment, term and escalator.',
  },
  {
    question: 'How much does a Tesla solar inverter cost?',
    answer:
      'Tesla does not publish a standalone price for the Tesla Solar Inverter; its datasheet lists none and Tesla quotes whole systems. The inverter comes in 3.8, 5, 5.7 and 7.6 kW sizes with a 12.5-year warranty. If you add Powerwall 3, its built-in solar inverter can take up to 20 kW of solar input, so you may not need a separate inverter at all.',
  },
  {
    question: 'Is Sunrun owned by Tesla?',
    answer:
      'No. Sunrun is a separate Nasdaq-listed company. It installs Tesla Powerwall batteries and coordinated a September 2026 battery dispatch with Tesla, in which Sunrun said it owned about 55% of the 110,000 Powerwalls taking part.',
  },
  {
    question: 'Can I get a Tesla Powerwall at no cost?',
    answer:
      'Not from Tesla as a general offer. Some households qualify for income-limited state battery rebates, and some battery owners are paid for sharing power with the grid, but neither makes a Powerwall costless. Our Powerwall 3 cost page covers the current rebate status and what grid programs pay.',
  },
  {
    question: 'How is Tesla solar customer service?',
    answer:
      'Tesla says it offers technical support remotely and sends in-house crews or certified technicians for onsite repairs. It publishes no response-time commitment, and its BBB presence is split across several profiles. Ask in writing who will service your system and how quickly a visit is scheduled.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function TeslaSolarReview() {
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
              <span className='text-foreground font-medium'>Tesla Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Tesla Solar Reviews (2026): Are Tesla Solar Panels Good?
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Updated September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>9 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p>
                <p className='text-3xl font-extrabold text-foreground mt-1'>3.1 <span className='text-lg text-muted-foreground'>/ 5</span></p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p>
                <p className='text-sm text-foreground font-medium mt-1'>Buyers who want one company&apos;s panels, inverter and battery in one app</p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p>
                <p className='text-sm text-foreground font-medium mt-1'>You need responsive post-install service from a phone-and-email rep</p>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Tesla solar panels are competent rather than top of the class: Tesla’s own datasheet lists 415 and 420 W
                panels at about 20.5% efficiency, assembled in Buffalo, New York, with a 25-year warranty. What sets Tesla
                apart is the matched system of panels, Solar Inverter, Powerwall and app from one company. Tesla publishes
                no California price; it quotes by address.
              </p>
              <p className={p}>
                This review goes component by component using Tesla’s own datasheets and support pages, checked on
                September 23, 2026, then covers pricing, the inverter price question, service and how Tesla relates to
                Sunrun. It does not rank Tesla against other installers.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'Panel efficiency', value: '≈20.5%', note: 'TSP-420; TSP-415 ≈20.3%', source: { url: SRC.panel, date: checked } },
                    { label: 'Panel warranty', value: '25 years', note: 'Product and performance; ≥87.2% at year 25', source: { url: SRC.panel, date: checked } },
                    { label: 'Solar Inverter warranty', value: '12.5 years', note: '98.0% CEC efficiency', source: { url: SRC.inverter, date: checked } },
                    { label: 'Powerwall 3', value: '13.5 kWh', note: '11.5 kW; 10-year warranty', source: { url: SRC.pw3, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Tesla Solar review and quote comparison' />
              </div>

              <h2 className={h2}>Are Tesla solar panels good?</h2>
              <p className={p}>
                Tesla’s panel datasheet lists two models, the TSP-415 and TSP-420, with module efficiency of at least 20.3%
                and 20.5%. It says the panels are assembled in Buffalo, New York, and that they have three times as many
                power zones as Tesla’s legacy panels, which helps output when part of a panel is shaded. The warranty is 25
                years for both product and performance, with at least 98% of rated power in year one, no more than 0.45%
                loss a year after that, and at least 87.2% at year 25.<Cite href={SRC.panel} date={checked} />
              </p>
              <p className={p}>
                For comparison, REC lists its Alpha Pure-RX at up to 22.6% efficiency and Silfab lists its SIL-430 QD at
                22.1%.<Cite href={SRC.rec} date={checked} />
                <Cite href={SRC.silfab} date={checked} /> A lower-efficiency panel is not a worse buy if the price per watt
                reflects it; it means you need a little more roof for the same output. If roof space is tight, that
                difference matters. See our{' '}
                <Link href='/panel-reviews' className={a}>panel brand reviews</Link> for more models.
              </p>

              <h2 className={h2}>The Tesla Solar Inverter, and what it costs</h2>
              <p className={p}>
                The Tesla Solar Inverter comes in 3.8, 5, 5.7 and 7.6 kW sizes, with a CEC-weighted efficiency of 98.0% at
                240 volts, four maximum power point trackers and a 12.5-year warranty. It is designed to work with Powerwall
                and the Tesla app.<Cite href={SRC.inverter} date={checked} />
              </p>
              <p className={p}>
                People often search for the Tesla inverter price. Tesla does not publish one: the datasheet lists no price,
                and Tesla quotes complete systems by address. Two practical points follow. If your inverter fails within 12.5
                years, the replacement should fall under the warranty, subject to its terms, rather than be a purchase. And if you are adding a battery, Powerwall 3
                has its own solar inverter with up to 20 kW of solar input, so a new Tesla system built around Powerwall 3 may
                not need a separate inverter.<Cite href={SRC.pw3} date={checked} /> If an installer quotes a standalone
                inverter, ask for it as its own line with the model number.
              </p>

              <h2 className={h2}>Powerwall 3 in a Tesla system</h2>
              <p className={p}>
                Powerwall 3 stores 13.5 kWh, delivers up to 11.5 kW and carries a 10-year warranty.
                <Cite href={SRC.pw3} date={checked} /> What it costs installed, how SGIP stands and how it pays back under
                net billing are covered on our{' '}
                <Link href='/battery/tesla-powerwall-3-cost-california' className={a}>Powerwall 3 cost page</Link>. For how it
                compares with other batteries, see{' '}
                <Link href='/battery/powerwall-vs-enphase-vs-franklinwh' className={a}>Powerwall 3 vs. Enphase vs. FranklinWH</Link>.
              </p>

              <h2 className={h2}>How much does Tesla solar cost in California?</h2>
              <p className={p}>
                Tesla shows no price until you give it an address; its Powerwall design page asks for the installation
                address before quoting, and its solar panels page advertises a Tesla solar lease without a figure.
                <Cite href={SRC.design} date={checked} />
                <Cite href={SRC.solarpanels} date={checked} /> So there is no honest single number for “Tesla solar cost in
                California.” What you can do is compare like with like: get Tesla’s written cash price, divide it by the
                system size in watts, and put it beside at least one other written quote for the same size. Our{' '}
                <Link href='/solar-panels-california' className={a}>California solar cost guide</Link> gives a statewide
                benchmark.
              </p>
              <p className={p}>
                If you buy, there is no federal residential credit on a 2026 installation: the IRS says the credit is not
                allowed for expenditures made after December 31, 2025.<Cite href={SRC.irs} date={checked} /> If you lease,
                compare the monthly payment, term, escalator and end-of-term options with the{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>lease, PPA, loan and cash comparison</Link>.
              </p>

              <h2 className={h2}>Tesla solar reviews in California: service</h2>
              <p className={p}>
                Tesla’s support page says it provides technical support remotely and sends in-house crews or certified
                technicians when a repair needs someone on site.<Cite href={SRC.service} date={checked} /> It does not publish
                a response-time commitment. Tesla’s record at the Better Business Bureau is spread over several profiles
                rather than one; a San Diego profile that lists Tesla Energy Operations Inc and SolarCity as alternate names
                was “Not Rated” on September 23, 2026 because the business was responding to previously closed complaints.
                <Cite href={SRC.bbbSd} date={checked} />
              </p>
              <p className={p}>
                Service and repair issues were the largest share of BBB complaints for every installer we checked for these
                reviews, so ask Tesla the same things
                you would ask anyone: who will service the system, how a visit is requested, how quickly one is scheduled, and
                who covers roof leaks at the mounting points. Get the answers in writing. For the upkeep an owner handles
                between service visits, see our guide to{' '}
                <Link href='/solar-panel-maintenance-california' className={a}>solar panel maintenance in California</Link>.
              </p>

              <h2 className={h2}>Is Sunrun owned by Tesla?</h2>
              <p className={p}>
                No. They are separate companies that work together. Sunrun installs Powerwalls, and in September 2026 the two
                announced a coordinated dispatch of home batteries to California’s grid in which Sunrun said it owned about 55%
                of the 110,000 Powerwalls taking part.<Cite href={SRC.dispatch} date={checked} /> See{' '}
                <Link href='/solar-installers/sunrun-vs-tesla-solar' className={a}>Sunrun vs. Tesla Solar</Link> and the{' '}
                <Link href='/solar-installers/sunrun-review' className={a}>Sunrun review</Link>.
              </p>

              <h2 className={h2}>When Tesla fits</h2>
              <p className={p}>
                Tesla fits a buyer who wants panels, inverter, battery and monitoring from one company and one app, and who is
                comfortable getting quotes and service through Tesla’s own channels. It fits less well if roof space is tight
                and you want the highest-efficiency panel, or if you want a named local contact for service. Compare a Tesla
                quote with others on the{' '}
                <Link href='/solar-installers' className={a}>California solar company reviews</Link> list.
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
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Considering Tesla Solar? Compare Real Pricing.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.</p>
              <div className='flex justify-center'>
                <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic='Tesla Solar review and quote comparison' />
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
        <VerifyInstallerBox installerName='Tesla' cslbLicenseNumber='888104' />
      </div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
