import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { Metadata } from 'next';
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

const path = '/solar-installers/sunergy-solar-review';
const checked = '2026-09-23';

export const metadata: Metadata = {
  title: 'Sunergy Solar Reviews (2026): Which Sunergy, BBB, Warranty',
  description:
    'Several California businesses use the Sunergy name. The Lake Forest installer’s published warranty and equipment, its BBB file and what to verify first.',
  alternates: { canonical: path },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Sunergy Solar Reviews (2026): Which Sunergy You Are Dealing With, Its BBB File and Warranty',
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
  site: 'https://www.sunergycorp.com/',
  bbb: 'https://www.bbb.org/us/ca/lake-forest/profile/solar-energy-contractors/sunergy-1126-1000170863',
  bbbCaLlc: 'https://www.bbb.org/us/ca/mcclellan-park/profile/solar-energy-contractors/sunergy-california-llc-1156-90054574',
  pacific: 'https://sunergypacific.com/',
  irs: 'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb',
};

const sources: ReviewSource[] = [
  { name: 'Sunergy — homepage (sunergycorp.com)', url: SRC.site, supports: 'Lake Forest address; service area California, Montana and Alaska; “23 Years” of experience; Enphase microinverters; U.S.-made panels; 25-year system and 15-year battery warranties', checked },
  { name: 'Better Business Bureau — Sunergy (Lake Forest, CA)', url: SRC.bbb, supports: 'F rating; not accredited; business started September 18, 2015; 3 complaints; failure to respond to 2; website sunergycorp.com', checked },
  { name: 'Better Business Bureau — Sunergy California, LLC (McClellan Park, CA)', url: SRC.bbbCaLlc, supports: 'A separate BBB file for a similarly named LLC; not rated; file opened February 10, 2020', checked },
  { name: 'Sunergy Pacific — homepage', url: SRC.pacific, supports: 'A separate Santa Rosa company with a similar name', checked },
  { name: 'IRS — FAQs on Public Law 119-21 changes to 25D', url: SRC.irs, supports: 'No residential credit for expenditures made after December 31, 2025', checked },
];

const faqs = [
  {
    question: 'Which Sunergy is this review about?',
    answer:
      'The installer at sunergycorp.com, based at 20311 Hermana Circle in Lake Forest. The BBB also has files for Sunergy California, LLC in McClellan Park, and Sunergy Pacific is a separate company in Santa Rosa. Match the business name and license on your contract to the company you researched.',
  },
  {
    question: 'Is Sunergy Solar legit?',
    answer:
      'It is a real business with a published address and service area. Its BBB file, checked on September 23, 2026, showed an F rating, no accreditation, three complaints and a failure to respond to two of them. A small file with unanswered complaints is a reason to ask how the company handles problems, and to get its answers in writing.',
  },
  {
    question: 'What warranty does Sunergy offer?',
    answer:
      'Its homepage advertises a 25-year warranty on solar systems and a 15-year warranty on batteries. Ask what each covers, equipment, workmanship or both, and get the terms as a document before you sign.',
  },
  {
    question: 'What equipment does Sunergy use?',
    answer:
      'Its homepage says it installs U.S.-made black panels with Enphase microinverters. The exact panel and battery models should be written into your proposal.',
  },
  {
    question: 'Where does Sunergy install?',
    answer:
      'Its homepage lists California, Montana and Alaska, and says it is expanding to Texas and Hawaii. Confirm your address is covered.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function SunergyReview() {
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
              <span className='text-foreground font-medium'>Sunergy</span>
            </nav>
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Sunergy Solar Reviews (2026): Which Sunergy You Are Dealing With, Its BBB File and Warranty
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Updated September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p>
                <p className='text-3xl font-extrabold text-foreground mt-1'>4.0 <span className='text-lg text-muted-foreground'>/ 5</span></p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p>
                <p className='text-sm text-foreground font-medium mt-1'>SoCal cash or loan buyers who want an Enphase-based system they own outright</p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p>
                <p className='text-sm text-foreground font-medium mt-1'>You need a hard install-by date; communication and timeline slippage are recurring themes</p>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                The Sunergy most people mean is a Lake Forest installer at sunergycorp.com that advertises Enphase
                microinverters, a 25-year system warranty and a 15-year battery warranty. Before you rely on any review,
                check which Sunergy you are talking to: several California businesses use the name. The Lake Forest
                company’s BBB file showed an F rating and two unanswered complaints on September 23, 2026.
              </p>
              <p className={p}>
                This page uses the company’s own homepage and the Better Business Bureau’s files. It does not repeat
                review-site ratings, which change weekly and mix companies with similar names.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'Service area (own site)', value: 'CA, MT, AK', note: 'Expanding to TX and HI, it says', source: { url: SRC.site, date: checked } },
                    { label: 'Advertised warranties', value: '25 yr / 15 yr', note: 'Solar system / batteries', source: { url: SRC.site, date: checked } },
                    { label: 'BBB rating (Lake Forest)', value: 'F', note: 'Not accredited; 3 complaints, 2 unanswered', source: { url: SRC.bbb, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Sunergy Solar review and quote comparison' />
              </div>

              <h2 className={h2}>Which Sunergy is which</h2>
              <p className={p}>
                The company reviewed here lists its address as 20311 Hermana Circle, Lake Forest, and its site as
                sunergycorp.com.<Cite href={SRC.site} date={checked} /> The BBB separately lists Sunergy California, LLC at
                a McClellan Park address near Sacramento, a file opened in February 2020 with no rating.
                <Cite href={SRC.bbbCaLlc} date={checked} /> Sunergy Pacific is another company, based in Santa Rosa, whose
                site mentions no connection to the Lake Forest business.<Cite href={SRC.pacific} date={checked} />
              </p>
              <p className={p}>
                Reviews on aggregator and map sites can blend these. Before signing, match three things: the company name
                on the contract, the address, and the license holder at the Contractors State License Board. Our{' '}
                <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={a}>
                  contractor-verification walkthrough
                </Link>{' '}
                shows how, and our{' '}
                <Link href='/solar-installers/empire-solar-review' className={a}>Empire Solar review</Link> covers the same
                similar-name problem for another company.
              </p>

              <h2 className={h2}>What Sunergy says it offers</h2>
              <p className={p}>
                The Lake Forest company’s homepage lists California, Montana and Alaska as its service area and says it is
                expanding to Texas and Hawaii. It advertises U.S.-made black panels with Enphase microinverters, residential
                and commercial work, EV chargers, ground mounts and carports, and refers to 23 years of experience.
                <Cite href={SRC.site} date={checked} /> It advertises a 25-year warranty on solar systems and a 15-year
                warranty on batteries, without saying on the homepage whether those cover workmanship, equipment or both.
              </p>
              <p className={p}>
                Ask for the warranty as a document. Equipment warranties come from the panel, inverter and battery makers;
                what an installer adds is workmanship and roof coverage. You want to know which of those the 25 years refers
                to, and who pays for labor on a warranty repair.
              </p>

              <h2 className={h2}>Sunergy reviews: the BBB file</h2>
              <p className={p}>
                The BBB profile for Sunergy at the Lake Forest address, checked on September 23, 2026, showed an F rating,
                no accreditation, a business start date of September 18, 2015 and three complaints, with a failure to
                respond to two of them.<Cite href={SRC.bbb} date={checked} /> That start date is more recent than the 23 years
                of experience the homepage mentions, which is a fair thing to ask the company to explain.
              </p>
              <p className={p}>
                Three complaints is a small file, and it does not say how many systems the company installs. The part that
                matters is the unanswered complaints. Ask the company how it handles a customer problem, who your contact
                will be after installation, and how quickly it schedules a service visit, and keep the answers in writing.
              </p>

              <h2 className={h2}>Paying for a Sunergy system</h2>
              <p className={p}>
                The homepage does not describe financing terms. If you buy, cash or loan, there is no federal residential
                credit on a 2026 installation: the IRS says the credit is not allowed for expenditures made after December
                31, 2025.<Cite href={SRC.irs} date={checked} /> Compare a Sunergy quote per watt against at least one other
                written quote, and compare financing with the{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>lease, PPA, loan and cash comparison</Link>.{' '}
                <Link href='/solar-panels-california' className={a}>What solar costs in California</Link> gives a statewide
                benchmark.
              </p>

              <h2 className={h2}>Before you sign</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Is the business on the contract the Lake Forest company at sunergycorp.com, and what is its CSLB license number?</li>
                <li>What exactly does the 25-year warranty cover, and is labor included on warranty repairs?</li>
                <li>What panel, microinverter and battery models are in the proposal?</li>
                <li>What is the written timeline to installation and to permission to operate, and what happens if it slips?</li>
              </ul>
              <p className={p}>
                For other companies that list California, see the{' '}
                <Link href='/solar-installers' className={a}>California solar company reviews</Link>, and read the{' '}
                <Link href='/solar-problems/solar-contract-red-flags-california' className={a}>contract red flags</Link>{' '}
                before signing with anyone.
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
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Sunergy&apos;s Quote Before You Sign.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.</p>
              <div className='flex justify-center'><Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Request a solar review<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic='Sunergy Solar review and quote comparison' />
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
        <VerifyInstallerBox installerName='Sunergy' bbbProfileUrl='https://www.bbb.org/us/ca/lake-forest/profile/solar-energy-contractors/sunergy-1126-1000170863' />
      </div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
