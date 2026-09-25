import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, Clock } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';

const path = '/solar-installers/momentum-solar-vs-trinity-solar';
const checked = '2026-09-23';

const metaTitle = 'Momentum Solar vs Trinity Solar (2026): Records Compared';
const metaDescription =
  'Momentum Solar and Trinity Solar compared on their own sites, BBB files and court dockets. They overlap in four states, and neither lists California.';

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
  headline: 'Momentum Solar vs. Trinity Solar (2026): Two East Coast Installers on the Record',
  description: metaDescription,
  datePublished: checked,
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

const SRC = {
  momentum: 'https://www.momentumsolar.com/',
  momentumBbbProfile: 'https://www.bbb.org/us/nj/south-plainfield/profile/solar-energy-design/momentum-solar-0221-90134444',
  momentumBbb: 'https://www.bbb.org/us/nj/south-plainfield/profile/solar-energy-design/momentum-solar-0221-90134444/complaints',
  momentumCl: 'https://www.courtlistener.com/?type=r&party_name=%22Momentum%20Solar%22',
  trinity: 'https://www.trinitysolar.com/',
  trinityAbout: 'https://www.trinitysolar.com/about-us/',
  trinityBbbProfile: 'https://www.bbb.org/us/nj/wall-township/profile/solar-energy-design/trinity-solar-0221-16001220',
  trinityBbb: 'https://www.bbb.org/us/nj/wall-township/profile/solar-energy-design/trinity-solar-0221-16001220/complaints',
  trinityCl: 'https://www.courtlistener.com/?type=r&party_name=%22Trinity%20Solar%22',
};

const sources: ReviewSource[] = [
  { name: 'Momentum Solar — homepage', url: SRC.momentum, supports: 'Service states CT, FL, MA, NV, NJ, NY, TX; no equipment brands or warranty terms stated', checked },
  { name: 'Better Business Bureau — Momentum Solar profile', url: SRC.momentumBbbProfile, supports: 'A+; accredited since March 24, 2015; business started November 1, 2009', checked },
  { name: 'Better Business Bureau — Momentum Solar complaints', url: SRC.momentumBbb, supports: '561 complaints in three years: 254 service or repair, 113 sales and advertising', checked },
  { name: 'CourtListener — dockets naming Momentum Solar', url: SRC.momentumCl, supports: '23 party-name results, several coded under the TCPA', checked },
  { name: 'Trinity Solar — homepage', url: SRC.trinity, supports: 'Service states CT, DE, MD, MA, NJ, NY, PA, RI, OH; up to 25-year parts and labor guarantee', checked },
  { name: 'Trinity Solar — About us', url: SRC.trinityAbout, supports: 'Founded 1994; more than 2,500 employees; 125,000 installations (2025)', checked },
  { name: 'Better Business Bureau — Trinity Solar profile', url: SRC.trinityBbbProfile, supports: 'A+; accredited since December 6, 2001; business started February 18, 1994', checked },
  { name: 'Better Business Bureau — Trinity Solar complaints', url: SRC.trinityBbb, supports: '230 complaints in three years: 155 service or repair, 9 sales and advertising', checked },
  { name: 'CourtListener — dockets naming Trinity Solar', url: SRC.trinityCl, supports: 'Party-name results, including unrelated matters', checked },
];

const ROWS: [string, string, string][] = [
  ['Lists California', 'No', 'No'],
  ['States where both work', 'CT, MA, NJ, NY', 'CT, MA, NJ, NY'],
  ['Other states listed', 'FL, NV, TX', 'DE, MD, PA, RI, OH'],
  ['In business since (BBB)', 'November 1, 2009', 'February 18, 1994'],
  ['BBB rating', 'A+, accredited since 2015', 'A+, accredited since 2001'],
  ['BBB complaints, 3 years', '561', '230'],
  ['Share that are service or repair', 'About 45%', 'About 67%'],
  ['Share that are sales and advertising', 'About 20%', 'About 4%'],
  ['Warranty stated on homepage', 'None stated', '“Up to 25-year parts & labor guarantee”'],
];

const faqs = [
  {
    question: 'Momentum Solar or Trinity Solar: which is better?',
    answer:
      'This page does not rank them. On the record, Trinity has operated longer and has fewer BBB complaints in three years, and a far smaller share of them concern sales and advertising. Momentum’s file has more complaints about how it sells, and its court record includes cases under the federal law on marketing calls. Whichever you consider, compare the written contracts.',
  },
  {
    question: 'Do Momentum Solar and Trinity Solar serve the same states?',
    answer:
      'They overlap in Connecticut, Massachusetts, New Jersey and New York, based on each company’s homepage on September 23, 2026. Momentum also lists Florida, Nevada and Texas; Trinity also lists Delaware, Maryland, Pennsylvania, Rhode Island and Ohio.',
  },
  {
    question: 'Is either company available in California?',
    answer:
      'No. Neither homepage lists California. A California homeowner should compare companies whose own sites list the state.',
  },
  {
    question: 'Is Momentum Solar legit? Is Trinity Solar legit?',
    answer:
      'Both are real, operating companies with long BBB histories and A+ ratings. Legitimacy is the floor, not the decision: read each company’s complaint themes and your own contract before you sign.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function MomentumVsTrinity() {
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
              <span className='text-foreground font-medium'>Momentum Solar vs Trinity Solar</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Installer Comparison</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Momentum Solar vs. Trinity Solar (2026): Two East Coast Installers on the Record
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Momentum Solar and Trinity Solar both install in the Northeast, and neither lists California. They
                overlap in four states: Connecticut, Massachusetts, New Jersey and New York. On the public record,
                Trinity is older and has fewer BBB complaints, while Momentum’s complaint file and court record lean
                more heavily toward how it sells.
              </p>
              <p className={p}>
                The figures below come from each company’s homepage, its Better Business Bureau profile and the federal
                dockets, all checked on September 23, 2026. Percentages are our arithmetic from the BBB counts.
              </p>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Momentum vs Trinity Solar comparison' />
              </div>

              <h2 className={h2}>The records side by side</h2>
              <div className='not-prose overflow-x-auto rounded-xl border border-border mb-6'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>&nbsp;</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Momentum Solar</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Trinity Solar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map(([label, m, t]) => (
                      <tr key={label} className='border-t border-border align-top'>
                        <td className='px-4 py-3 font-medium text-foreground'>{label}</td>
                        <td className='px-4 py-3 text-foreground/80'>{m}</td>
                        <td className='px-4 py-3 text-foreground/80'>{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className={h2}>Where each company works</h2>
              <p className={p}>
                Momentum’s homepage lists Connecticut, Florida, Massachusetts, Nevada, New Jersey, New York and Texas.
                <Cite href={SRC.momentum} date={checked} /> Trinity’s lists Connecticut, Delaware, Maryland,
                Massachusetts, New Jersey, New York, Pennsylvania, Rhode Island and Ohio.
                <Cite href={SRC.trinity} date={checked} /> A homeowner in the four shared states can get quotes from
                both. Nobody in California can get a quote from either, which is why this site’s reviews of both
                companies lead with that fact.
              </p>

              <h2 className={h2}>How long each has been around</h2>
              <p className={p}>
                Trinity’s BBB profile gives a business start date of February 18, 1994, and the company says three
                brothers founded it in New Jersey that year and that it now has more than 2,500 employees and 125,000
                installations.<Cite href={SRC.trinityBbbProfile} date={checked} />
                <Cite href={SRC.trinityAbout} date={checked} /> Momentum’s BBB profile gives a start date of November 1,
                2009.<Cite href={SRC.momentumBbbProfile} date={checked} /> Momentum’s homepage does not publish an
                installation count, so we cannot compare scale directly.
              </p>

              <h2 className={h2}>What the complaint files say</h2>
              <p className={p}>
                Momentum’s BBB file listed 561 complaints in three years: 254 service or repair, 113 sales and
                advertising, 71 product, 64 order, and the rest billing, customer service and delivery.
                <Cite href={SRC.momentumBbb} date={checked} /> Trinity’s listed 230: 155 service or repair, 40 order,
                14 product, 9 sales and advertising, and the rest customer service, delivery and billing.
                <Cite href={SRC.trinityBbb} date={checked} />
              </p>
              <p className={p}>
                The shape of each file is more telling than the totals. Service and repair dominate both, which is common
                in residential solar: the trouble tends to come after installation day. The difference is in sales. About
                one in five Momentum complaints concerns sales and advertising, against about one in twenty-five at
                Trinity. If you are talking to either company, get every promise the salesperson makes about savings,
                incentives or timelines written into the contract.
              </p>

              <h2 className={h2}>The court record</h2>
              <p className={p}>
                A party-name search for Momentum Solar returns 23 federal dockets, several coded under the Telephone
                Consumer Protection Act, the federal law on marketing calls and texts, along with employment and contract
                cases.<Cite href={SRC.momentumCl} date={checked} /> The same search for Trinity Solar returns fewer cases
                that name the company directly, mostly individual and employment matters, and several unrelated results.
                <Cite href={SRC.trinityCl} date={checked} /> Filed complaints are allegations, and a closed docket does not
                say who won. Case numbers and dates are in the{' '}
                <Link href='/solar-installers/momentum-solar-review' className={a}>Momentum</Link> and{' '}
                <Link href='/solar-installers/trinity-solar-review' className={a}>Trinity</Link> reviews.
              </p>

              <h2 className={h2}>Warranty and equipment</h2>
              <p className={p}>
                Trinity’s homepage advertises an “up to 25-year parts &amp; labor guarantee.” Momentum’s homepage states no
                warranty length. Neither names the panel, inverter or battery brands it installs.
                <Cite href={SRC.trinity} date={checked} />
                <Cite href={SRC.momentum} date={checked} /> With both, the proposal is where you find out what you are
                buying, so require model numbers and warranty years in writing.
              </p>

              <h2 className={h2}>What to ask either company</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Which legal entity signs the contract, and what is its license number in my state?</li>
                <li>What are the panel, inverter and battery models, and who holds each warranty?</li>
                <li>How long is the workmanship warranty, and does it cover roof leaks at the mounts?</li>
                <li>How soon is a repair visit scheduled after I report a problem, and do payments pause while the system is down?</li>
                <li>Which promises the salesperson made about savings or incentives are written into the contract?</li>
              </ul>

              <h2 className={h2}>For California readers</h2>
              <p className={p}>
                If you landed here from California, skip both and compare companies whose own sites list the state. The{' '}
                <Link href='/solar-installers' className={a}>California solar company reviews</Link> mark which do. For a
                related comparison, see{' '}
                <Link href='/solar-installers/sunrun-vs-trinity-solar' className={a}>Sunrun vs. Trinity Solar</Link>, and for
                the ADT question that often comes up alongside these, see{' '}
                <Link href='/solar-installers/adt-solar-vs-momentum-solar' className={a}>ADT Solar vs. Momentum Solar</Link>.
                Before signing with anyone, read the{' '}
                <Link href='/solar-problems/solar-contract-red-flags-california' className={a}>contract red flags</Link>.
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
              <SolarInquiry topic='Momentum vs Trinity Solar comparison' />
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
