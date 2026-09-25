import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Info, Clock } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/solar-installers/trinity-solar-review';
const checked = '2026-09-23';

const metaTitle = 'Trinity Solar Reviews (2026): Northeast Installer, Not CA';
const metaDescription =
  'Trinity Solar (founded 1994) lists nine eastern states and not California. Its BBB file, court dockets and warranty terms, checked Sept. 23, 2026.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${path}`,
    publishedTime: '2026-04-23T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Trinity Solar Reviews (2026): Northeast Installer, Not a California Option',
  description: metaDescription,
  datePublished: '2026-04-23',
  dateModified: checked,
  author: CRR_AUTHOR_PERSON,
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief',
    url: 'https://ratereliefca.com',
    logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ratereliefca.com${path}` },
};
// No Review/Rating JSON-LD here: Google's review-snippet rules require
// ratings for a local business or organization to come directly from users,
// not from editors, and this site does not collect user ratings
// (developers.google.com/search/docs/appearance/structured-data/review-snippet,
// fetched 2026-09-23).

const SRC = {
  home: 'https://www.trinitysolar.com/',
  about: 'https://www.trinitysolar.com/about-us/',
  bbb: 'https://www.bbb.org/us/nj/wall-township/profile/solar-energy-design/trinity-solar-0221-16001220',
  bbbComplaints: 'https://www.bbb.org/us/nj/wall-township/profile/solar-energy-design/trinity-solar-0221-16001220/complaints',
  cl: 'https://www.courtlistener.com/?type=r&party_name=%22Trinity%20Solar%22',
  charman: 'https://www.courtlistener.com/docket/60120033/charman-v-trinity-solar-inc/',
  hanson: 'https://www.courtlistener.com/docket/68411986/hanson-v-trinity-solar-llc/',
  beason: 'https://www.courtlistener.com/docket/69314397/beason-v-trinity-solar-llc/',
};

const sources: ReviewSource[] = [
  { name: 'Trinity Solar — homepage', url: SRC.home, supports: 'Service states (CT, DE, MD, MA, NJ, NY, PA, RI, OH); “up to 25-year parts & labor guarantee”; no equipment brand named', checked },
  { name: 'Trinity Solar — About us', url: SRC.about, supports: 'Founded in 1994 by Bill, Arty and Tom Pollock; more than 2,500 employees across nine states; 125,000 installations (2025)', checked },
  { name: 'Better Business Bureau — Trinity Solar (Wall Township, NJ) profile', url: SRC.bbb, supports: 'A+ rating; accredited since December 6, 2001; business started February 18, 1994; Wall Township address', checked },
  { name: 'Better Business Bureau — Trinity Solar complaints', url: SRC.bbbComplaints, supports: '230 complaints in three years; 104 closed in 12 months; complaint types', checked },
  { name: 'CourtListener — federal dockets, party name “Trinity Solar”', url: SRC.cl, supports: 'Party-name results, including unrelated matters', checked },
  { name: 'CourtListener — Charman v. Trinity Solar Inc., S.D. Cal. No. 3:21-cv-01423', url: SRC.charman, supports: 'Filed August 9, 2021; terminated May 26, 2022', checked },
  { name: 'CourtListener — Hanson v. Trinity Solar, LLC, D.R.I. No. 1:24-cv-00132', url: SRC.hanson, supports: 'Filed April 5, 2024; terminated December 27, 2024', checked },
  { name: 'CourtListener — Beason v. Trinity Solar LLC, D. Conn. No. 3:24-cv-01712', url: SRC.beason, supports: 'Filed October 25, 2024', checked },
];

const faqs = [
  {
    question: 'Does Trinity Solar serve California?',
    answer:
      'No. Its homepage, checked September 23, 2026, lists Connecticut, Delaware, Maryland, Massachusetts, New Jersey, New York, Pennsylvania, Rhode Island and Ohio. California is not on the list, and its About page describes the company as working across nine states. If someone offers you a Trinity Solar contract for a California home, confirm the legal entity and its California license before going further.',
  },
  {
    question: 'Is Trinity Solar legit?',
    answer:
      'Yes, it is an established company. The BBB lists Trinity Solar in Wall Township, New Jersey, as accredited since 2001 with an A+ rating and a business start date of February 18, 1994, and the company says it has made 125,000 installations. It also has 230 BBB complaints in the last three years, mostly about service and repairs.',
  },
  {
    question: 'What is Trinity Solar?',
    answer:
      'A residential solar installer founded in New Jersey in 1994 by three brothers, Bill, Arty and Tom Pollock, according to the company. It says it has more than 2,500 employees across nine states and also offers roofing, battery storage and EV chargers.',
  },
  {
    question: 'What is Trinity Solar’s BBB rating?',
    answer:
      'A+, with accreditation since December 6, 2001, on the Wall Township, New Jersey profile we checked on September 23, 2026. The same profile listed 230 complaints in three years and 104 closed in the last 12 months.',
  },
  {
    question: 'Does Trinity Solar make its own panels?',
    answer:
      'Nothing on its homepage says so, and the page names no panel, inverter or battery brand. Trinity is an installer. The equipment is whatever the proposal specifies, so ask for model numbers in writing.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function TrinitySolarReview() {
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
              <span className='text-foreground font-medium'>Trinity Solar Review</span>
            </nav>

            {/* California context banner */}
            <div className='mb-6 rounded-xl border-2 border-blue-500/40 bg-blue-500/10 p-5'>
              <div className='flex items-start gap-3'>
                <Info className='h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5' />
                <div>
                  <p className='text-xs font-bold uppercase tracking-widest text-blue-300 mb-1'>California note</p>
                  <p className='text-foreground font-semibold leading-relaxed'>
                    Trinity Solar’s own site lists nine service states, none of them California (checked
                    September 23, 2026). If you are shopping for a California home, compare{' '}
                    <Link href='/solar-installers' className='text-blue-200 underline hover:text-blue-100'>
                      solar companies that list California
                    </Link>{' '}
                    instead.
                  </p>
                  {/* GS-MERGES 2026-09-24 (plan 6.2): Trinity has no California service
                      area and no recent California installs, so the two comparison pages
                      that paired it with a California option now 301 elsewhere. */}
                  <p className='mt-2 text-foreground leading-relaxed'>
                    The state&rsquo;s own record agrees: in the CPUC&rsquo;s interconnection data for PG&amp;E, SCE and
                    SDG&amp;E territory, no residential solar system under the Trinity Solar name was approved from
                    2017 through May 2026 (
                    <a href='https://www.californiadgstats.ca.gov/downloads/' className='text-blue-200 underline hover:text-blue-100'>
                      CPUC DG Stats
                    </a>
                    , checked September 24, 2026). Weighing Trinity against Sunrun? In California only Sunrun is on
                    the table; see the{' '}
                    <Link href='/solar-installers/sunrun-review' className='text-blue-200 underline hover:text-blue-100'>
                      Sunrun review
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Solar Installer Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Trinity Solar Reviews (2026): Northeast Installer, Not a California Option
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>8 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-2 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                  Best for
                </p>
                <p className='text-sm text-foreground font-medium mt-1'>
                  Northeast homeowners (NJ, NY, CT, MA, PA, MD) looking at a
                  family-owned installer with a long track record
                </p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                  Not an option for
                </p>
                <p className='text-sm text-foreground font-medium mt-1'>
                  California homeowners — Trinity doesn&apos;t meaningfully
                  serve CA
                </p>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Trinity Solar is a legitimate, long-established installer, but it does not work in California.
                Founded in New Jersey in 1994, it lists nine service states on its own site, from Maryland to
                Massachusetts plus Ohio, and none are in the West. Its BBB profile shows an A+ rating and 230
                complaints in three years, most of them about service and repairs.
              </p>
              <p className={p}>
                People reach this page from two directions. Some are in the Northeast and want Trinity Solar
                reviews; the BBB and court sections below apply to them. Others are in California and have seen
                the name in an ad or a comparison. For them the answer is short: Trinity will not be one of your
                quotes, so spend the time on companies that list your state.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'Founded', value: '1994', note: 'New Jersey; family-founded', source: { url: SRC.about, date: checked } },
                    { label: 'Service states on its site', value: '9', note: 'None in California', source: { url: SRC.home, date: checked } },
                    { label: 'BBB complaints, last 3 years', value: '230', note: '104 closed in the last 12 months', source: { url: SRC.bbbComplaints, date: checked } },
                    { label: 'Installations (company figure)', value: '125,000', note: 'As of 2025', source: { url: SRC.about, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Trinity Solar review and quote comparison' />
              </div>

              <h2 className={h2}>What is Trinity Solar?</h2>
              <p className={p}>
                Trinity Solar says three New Jersey brothers, Bill, Arty and Tom Pollock, started the business
                in 1994. The company describes itself as family-founded, with more than 2,500 employees across
                nine states and 125,000 installations as of 2025.<Cite href={SRC.about} date={checked} /> Its BBB
                profile lists a headquarters on Allenwood Road in Wall Township, New Jersey, and services that
                include solar, roofing, battery storage and EV chargers.<Cite href={SRC.bbb} date={checked} />
              </p>

              <h2 className={h2}>Is Trinity Solar legit?</h2>
              <p className={p}>
                On the public record, yes. The BBB profile we checked on September 23, 2026 shows an A+ rating,
                accreditation since December 6, 2001, and a business start date of February 18, 1994.
                <Cite href={SRC.bbb} date={checked} /> Thirty-two years of operation and a large installed base are
                real evidence that the company exists and stays in business. They are not evidence about the
                experience you would have, which is what the complaint file speaks to.
              </p>

              <h2 className={h2}>Does Trinity Solar serve California?</h2>
              <p className={p}>
                No. Trinity’s homepage lists Connecticut, Delaware, Maryland, Massachusetts, New Jersey, New
                York, Pennsylvania, Rhode Island and Ohio.<Cite href={SRC.home} date={checked} /> We found one
                federal case naming the company that was filed in California, <em>Charman v. Trinity Solar
                Inc.</em> in the Southern District (No. 3:21-cv-01423, filed August 9, 2021, closed May 26,
                2022).<Cite href={SRC.charman} date={checked} /> A case filed here does not mean the company
                installs here, and nothing on its site suggests it does.
              </p>
              <p className={p}>
                If a salesperson in
                California uses the Trinity name, ask for the legal name of the company that will sign the
                contract and check its license with the Contractors State License Board before you share
                anything else. Our{' '}
                <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={a}>
                  contractor-verification walkthrough
                </Link>{' '}
                shows how.
              </p>

              <h2 className={h2}>Trinity Solar reviews and complaints</h2>
              <p className={p}>
                The BBB listed 230 complaints about Trinity Solar in the last three years and 104 closed in the
                last 12 months. By type: 155 service or repair issues, 40 order issues, 14 product issues, 9 sales
                and advertising issues, 7 customer service issues, 3 delivery issues and 2 billing issues.
                <Cite href={SRC.bbbComplaints} date={checked} />
              </p>
              <p className={p}>
                The recent complaints we read describe installs that took months longer than promised, systems
                waiting on activation, repeated failed inspections, roof problems customers linked to the
                installation, and difficulty getting updates. Some mention delays in incentive payments and in
                coordination with the utility. Complaint counts are not scaled to the number of installations,
                so read the themes, not the total, and ask how each one is handled in your contract.
              </p>

              <h2 className={h2}>What the federal court record shows</h2>
              <p className={p}>
                A party-name search for “Trinity Solar” on CourtListener returns a mix of cases, several of them
                unrelated retirement-fund litigation in which the name appears among many parties.
                <Cite href={SRC.cl} date={checked} /> Among the dockets that name the company directly are{' '}
                <em>Hanson v. Trinity Solar, LLC</em> (D.R.I., filed April 5, 2024, closed December 27, 2024),{' '}
                <em>Beason v. Trinity Solar LLC</em> (D. Conn., filed October 25, 2024), an employment case in
                western Pennsylvania closed in February 2025, and a 2025 case in which Trinity is the plaintiff.
                <Cite href={SRC.hanson} date={checked} />
                <Cite href={SRC.beason} date={checked} /> A filed case is an allegation, and a closed docket does
                not say who prevailed.
              </p>

              <h2 className={h2}>Warranty, equipment and financing</h2>
              <p className={p}>
                Trinity’s homepage offers an “up to 25-year parts &amp; labor guarantee” and says it will honor
                the warranty for the lifetime of the roof or solar system.<Cite href={SRC.home} date={checked} />{' '}
                “Up to” is the phrase to pin down: ask which parts, which labor and which years your contract
                covers. The homepage mentions solar and roofing payment options but gives no terms, and it names
                no panel, inverter or battery brand. Get all of it in the written proposal.
              </p>

              <h2 className={h2}>Trinity Solar compared with Sunrun, Momentum and Tesla</h2>
              <p className={p}>
                Trinity is often compared with national names. For a California home, the difference
                that matters is simple: Sunrun lists California on its own contractor-license page, and neither
                Momentum nor Trinity lists California as a service state. See the{' '}
                <Link href='/solar-installers/sunrun-review' className={a}>Sunrun review</Link>,{' '}
                <Link href='/solar-installers/momentum-solar-review' className={a}>Momentum Solar review</Link>{' '}
                and the{' '}
                <Link href='/solar-installers/tesla-solar-review' className={a}>Tesla Solar review</Link>. For
                SunPower, which filed for bankruptcy in 2024, see the{' '}
                <Link href='/solar-installers/sunpower-review' className={a}>SunPower review</Link>.
              </p>

              <h2 className={h2}>What a California homeowner should do instead</h2>
              <p className={p}>
                Start with companies whose own sites list California, and compare at least two written quotes on
                the same system size and equipment. The{' '}
                <Link href='/solar-installers' className={a}>California solar company reviews</Link> list those
                companies, and the{' '}
                <Link href='/best-solar-companies-california' className={a}>comparison of solar companies in California</Link>{' '}
                covers how to choose. Before you sign, read the{' '}
                <Link href='/solar-problems/solar-contract-red-flags-california' className={a}>contract red flags</Link>{' '}
                page.
              </p>
              <p className={p}>
                If you found this page from New Jersey or another state Trinity serves, the BBB file and court
                dockets above are yours to use, but the rest of this site is written for California rules, rates
                and incentives.
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
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>
                California Shopper? Compare Installers That Confirm They Serve Your Address.
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>
                Trinity doesn&apos;t serve California. California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.
              </p>
              <div className='flex justify-center'>
                <Link
                  href='#solar-inquiry'
                  className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
                >
                  Request a solar review
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>
                California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
              </p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic='Trinity Solar review and quote comparison' />
            </div>

            <HubSpokeLinks hub='installer_reviews' currentPath={path} />

            <div className='mt-10'>
              <Link href='/solar-installers' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'>
                <ArrowLeft className='h-4 w-4' />
                Back to California solar company reviews
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'>
        <VerifyInstallerBox installerName='Trinity' bbbProfileUrl='https://www.bbb.org/us/nj/wall-township/profile/solar-energy-design/trinity-solar-0221-16001220' />
      </div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
