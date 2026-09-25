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
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';

const path = '/solar-installers/elevation-solar-review';
const checked = '2026-09-23';

const metaTitle = 'Elevation Solar Reviews (2026): Legit? BBB and the Contract';
const metaDescription =
  'Elevation lists California among five states. Its BBB file (69 complaints in 3 years), its 10-year workmanship warranty and your right to cancel.';

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
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Elevation Solar Reviews (2026): Is It Legit, What the BBB File Shows and What the Contract Says',
  description: metaDescription,
  datePublished: '2026-04-24', dateModified: checked,
  author: CRR_AUTHOR_PERSON,
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ratereliefca.com${path}` },
};
// No Review/Rating JSON-LD here: Google's review-snippet rules require
// ratings for a local business or organization to come directly from users,
// not from editors, and this site does not collect user ratings
// (developers.google.com/search/docs/appearance/structured-data/review-snippet,
// fetched 2026-09-23).

const SRC = {
  home: 'https://poweredbyelevation.com/',
  about: 'https://poweredbyelevation.com/about/',
  locations: 'https://poweredbyelevation.com/locations/',
  terms: 'https://poweredbyelevation.com/purchase-agreement-terms/',
  service: 'https://poweredbyelevation.com/solar-service/',
  bbb: 'https://www.bbb.org/us/az/chandler/profile/solar-energy-contractors/elevation-1126-1000035717/complaints',
  irs: 'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb',
};

const sources: ReviewSource[] = [
  { name: 'Elevation — Locations', url: SRC.locations, supports: 'Active installation in Arizona (headquartered in Chandler), California (“from San Diego to San Francisco”), Nevada, Texas and Florida', checked },
  { name: 'Elevation — About', url: SRC.about, supports: 'Founders Jerry Coleman and Brian Bair; acquired Curb Energy in 2020', checked },
  { name: 'Elevation — Purchase Agreement Terms (last modified August 28, 2024)', url: SRC.terms, supports: '10-year workmanship and 10-year roof-penetration warranties; transferability; California cancellation rights; state sections for AZ, CA, FL, SC and NC', checked },
  { name: 'Elevation — Solar service', url: SRC.service, supports: 'Services listed; services systems regardless of who installed them; no response-time commitment', checked },
  { name: 'Better Business Bureau — Elevation (Chandler, AZ) complaints', url: SRC.bbb, supports: 'A+, accredited; 69 complaints in three years; 18 closed in 12 months; complaint types', checked },
  { name: 'IRS — FAQs on Public Law 119-21 changes to 25D', url: SRC.irs, supports: 'No residential credit for expenditures made after December 31, 2025', checked },
];

const faqs = [
  {
    question: 'Is Elevation Solar legit?',
    answer:
      'It is an established, operating company. Its BBB profile in Chandler, Arizona showed an A+ rating and accreditation on September 23, 2026, and its site lists active installation in five states including California. Its BBB file also listed 69 complaints in three years, most about service and repairs.',
  },
  {
    question: 'Does Elevation install in California?',
    answer:
      'Yes, by its own account. Its locations page lists California among five states with active installation and describes its California coverage as “from San Diego to San Francisco.” Confirm your address is served before you rely on a proposal.',
  },
  {
    question: 'What is Elevation’s workmanship warranty?',
    answer:
      'Its purchase agreement terms give 10 years on workmanship for panels, inverters, racking and wiring, measured from completed installation or repair, and a separate 10-year warranty on roof penetrations from its own work. Both transfer to later owners of the house. Panel and inverter product warranties come from the manufacturers.',
  },
  {
    question: 'Can I cancel an Elevation contract after signing?',
    answer:
      'In California, the agreement gives you at least three business days to cancel for any reason, or five business days if you are 65 or older, with notice due by midnight of the last day.',
  },
  {
    question: 'Does Elevation publish a CSLB license number?',
    answer:
      'We found none on its homepage, terms, purchase agreement or FAQ when we checked on September 22, 2026. Ask for the number and the licensed entity name, and check both at the Contractors State License Board before signing.',
  },
  {
    question: 'Does Elevation service systems it did not install?',
    answer:
      'Its service page says its maintenance and repair services extend to all systems, no matter where the panels were bought. It lists repairs, inspections, maintenance, monitoring, removal and reinstallation, and manufacturer warranty claims, but publishes no response-time commitment.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function ElevationReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span>
              <Link href='/solar-installers' className='hover:text-primary'>Solar company reviews</Link><span>/</span>
              <span className='text-foreground font-medium'>Elevation</span>
            </nav>
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Elevation Solar Reviews (2026): Is It Legit, What the BBB File Shows and What the Contract Says
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Updated September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Elevation, often searched as Elevation Solar, is a legitimate installer that lists California
                among the five states where it installs. Its BBB profile showed an A+ rating and 69 complaints in three
                years when we checked on September 23, 2026, most about service and repairs. Its purchase agreement gives
                a 10-year workmanship warranty and, in California, at least three business days to cancel.
              </p>
              <p className={p}>
                This review uses Elevation’s own pages and published purchase agreement and its Better Business Bureau
                file. It does not rate or rank the company; it sets out what to confirm before you sign.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'States with active installation', value: '5', note: 'AZ, CA, NV, TX, FL', source: { url: SRC.locations, date: checked } },
                    { label: 'BBB complaints, last 3 years', value: '69', note: '18 closed in the last 12 months; A+', source: { url: SRC.bbb, date: checked } },
                    { label: 'Workmanship warranty', value: '10 years', note: 'Plus 10 years on roof penetrations', source: { url: SRC.terms, date: checked } },
                    { label: 'California cancel window', value: '3 business days', note: '5 if you are 65 or older', source: { url: SRC.terms, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Elevation Solar review and quote comparison' />
              </div>

              <h2 className={h2}>Is Elevation Solar legit?</h2>
              <p className={p}>
                Yes, on the public record. Elevation’s about page names its founders, Jerry Coleman and Brian Bair, and
                says it acquired Curb Energy in 2020 to add energy monitoring to its offering.
                <Cite href={SRC.about} date={checked} /> Its locations page says it is headquartered in Chandler,
                Arizona.<Cite href={SRC.locations} date={checked} /> The BBB profile for Elevation in Chandler showed an A+
                rating and accreditation.<Cite href={SRC.bbb} date={checked} /> Legitimate is not the same as a good fit,
                which is what the complaint file and the contract speak to.
              </p>

              <h2 className={h2}>Does Elevation serve California?</h2>
              <p className={p}>
                Yes. Its locations page lists active installation in Arizona, California, Nevada, Texas and Florida, and
                describes its California coverage as “from San Diego to San Francisco.”
                <Cite href={SRC.locations} date={checked} /> Its purchase agreement has a California section with
                state-specific disclosures, alongside sections for Arizona, Florida, South Carolina and North Carolina.
                <Cite href={SRC.terms} date={checked} /> Confirm that your address is inside the area it actually serves.
              </p>

              <h2 className={h2}>Elevation reviews: what the BBB file shows</h2>
              <p className={p}>
                On September 23, 2026 the BBB listed 69 complaints about Elevation in the last three years and 18 closed in
                the last 12 months. By type: 48 service or repair issues, 7 order issues, 6 sales and advertising issues,
                5 customer service issues, 2 product issues and 1 billing issue.<Cite href={SRC.bbb} date={checked} />
              </p>
              <p className={p}>
                The recent complaints we read center on roof leaks customers attribute to the installation, warranty
                claims turned down because a time limit had passed, missed or cancelled service appointments, systems
                underperforming, and monitoring that stopped working. The time-limit theme is the one to act on: the
                workmanship warranty below runs 10 years from completed installation or repair, so note the date and
                report problems in writing as soon as you see them.
              </p>

              <h2 className={h2}>What Elevation’s contract promises</h2>
              <p className={p}>
                Elevation’s published purchase agreement terms, last modified August 28, 2024, warrant its work free from
                material defects for <strong>10 years</strong> from completed installation or repair, covering solar
                panels, inverters, racking and wiring. A separate <strong>10-year roof-penetration warranty</strong>{' '}
                covers leaks and penetrations relating directly to Elevation’s work. Both extend to later owners of the
                house.<Cite href={SRC.terms} date={checked} /> The panels and inverters themselves carry their
                manufacturers’ warranties; ask for the model numbers so you can read them.
              </p>
              <p className={p}>
                For California customers, the agreement gives at least three business days to cancel for any reason, and
                five business days if you are 65 or older, with notice due by midnight of the last day.
                <Cite href={SRC.terms} date={checked} /> Keep a copy of the cancellation notice and send it in a way you can
                prove.
              </p>

              <h2 className={h2}>Service after installation</h2>
              <p className={p}>
                Elevation’s service page lists system repairs, inspections, ongoing maintenance, monitoring, removals and
                reinstalls, and manufacturer warranty claims, and says the services extend to “all systems, no matter where
                you bought your panels.” It publishes no response-time commitment.<Cite href={SRC.service} date={checked} />{' '}
                Given the BBB themes above, ask for a response time in writing, and ask whether a repair visit under warranty
                has any charge.
              </p>

              <h2 className={h2}>Financing and the tax credit in 2026</h2>
              <p className={p}>
                Any statement that buying a system earns a 30% federal credit is out of date for a 2026 installation: the IRS
                says the residential credit is not allowed for expenditures made after December 31, 2025, and an expenditure
                is made when installation is completed.<Cite href={SRC.irs} date={checked} /> Elevation publishes no escalator
                rate, lease term or loan APR, so get each in writing and compare the offer with the{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>lease, PPA, loan and cash comparison</Link>.
              </p>

              <h2 className={h2}>The license number Elevation does not publish</h2>
              <p className={p}>
                We checked Elevation’s homepage, its{' '}
                <a href='https://poweredbyelevation.com/terms/' target='_blank' rel='noopener noreferrer' className={a}>Terms page</a>,
                its Purchase Agreement Terms and its{' '}
                <a href='https://poweredbyelevation.com/faq/' target='_blank' rel='noopener noreferrer' className={a}>general FAQ</a>{' '}
                on September 22, 2026 and found no CSLB or other state contractor-license number published on
                poweredbyelevation.com. That does not mean the company is unlicensed. It means you need to ask for the
                number and the exact licensed entity name, then check both yourself. Our{' '}
                <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={a}>
                  contractor-verification walkthrough
                </Link>{' '}
                shows how.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-2'><strong>Questions to ask before you sign:</strong></p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>What is the CSLB license number, and which legal entity holds it?</li>
                <li>What is the panel, inverter and battery make and model in my proposal?</li>
                <li>How quickly is a warranty service visit scheduled, and is there any charge?</li>
                <li>If I finance, what are the rate, term, escalator and total cost in writing?</li>
              </ul>

              <h2 className={h2}>When Elevation fits</h2>
              <p className={p}>
                Elevation can fit a California homeowner who wants a regional installer with a published contract and
                clear cancellation terms, and who will document problems promptly within the warranty period. Compare its
                written quote with at least one other on the same system size and equipment; the{' '}
                <Link href='/solar-installers' className={a}>California solar company reviews</Link> list other companies that
                serve the state, and{' '}
                <Link href='/solar-panels-california' className={a}>what solar costs in California</Link> gives a price check.
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
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Elevation With Other Written Quotes.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.</p>
              <div className='flex justify-center'><Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Request a solar review<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic='Elevation Solar review and quote comparison' />
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
        <VerifyInstallerBox installerName='Elevation' bbbProfileUrl='https://www.bbb.org/us/az/chandler/profile/solar-energy-contractors/elevation-1126-1000035717' />
      </div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
