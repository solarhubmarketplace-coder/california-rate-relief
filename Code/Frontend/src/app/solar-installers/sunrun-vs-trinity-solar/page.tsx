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
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';

const path = '/solar-installers/sunrun-vs-trinity-solar';
const checked = '2026-09-23';

const metaTitle = 'Sunrun vs Trinity Solar (2026): Service Area, BBB, Contracts';
const metaDescription =
  'Sunrun lists California; Trinity Solar lists nine eastern states and not California. Their BBB files, warranties and contract models compared, Sept. 2026.';

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
  headline: 'Sunrun vs Trinity Solar (2026): Service Area, BBB Records and Contracts',
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
  sunrunLic: 'https://www.sunrun.com/state-contractor-license-information',
  sunrunIr: 'https://investors.sunrun.com/',
  sunrunQ2: 'https://investors.sunrun.com/news-events/press-releases/detail/378/sunrun-reports-second-quarter-2026-financial-results',
  sunrunBbb: 'https://www.bbb.org/us/ca/san-francisco/profile/solar-energy-equipment-dealers/sunrun-inc-1116-312886/complaints',
  sunrunGuarantee: 'https://www.sunrun.com/why-sunrun/your-guarantee',
  trinityHome: 'https://www.trinitysolar.com/',
  trinityAbout: 'https://www.trinitysolar.com/about-us/',
  trinityBbb: 'https://www.bbb.org/us/nj/wall-township/profile/solar-energy-design/trinity-solar-0221-16001220/complaints',
  trinityBbbProfile: 'https://www.bbb.org/us/nj/wall-township/profile/solar-energy-design/trinity-solar-0221-16001220',
  sunpower: 'https://www.courtlistener.com/docket/69017070/sunpower-corporation/',
};

const sources: ReviewSource[] = [
  { name: 'Sunrun — State contractor license information', url: SRC.sunrunLic, supports: 'States with listed contractor licenses, including California, Connecticut, Maryland, Massachusetts, New Jersey, New York, Pennsylvania and Rhode Island', checked },
  { name: 'Sunrun investor relations', url: SRC.sunrunIr, supports: 'Nasdaq: RUN; no bankruptcy or wind-down release', checked },
  { name: 'Sunrun — Second Quarter 2026 Financial Results', url: SRC.sunrunQ2, supports: '1,034,738 subscribers; 74% storage attachment', checked },
  { name: 'Better Business Bureau — Sunrun, Inc. complaints', url: SRC.sunrunBbb, supports: 'A+ and accredited; 4,017 complaints in three years; 2,386 service or repair', checked },
  { name: 'Sunrun — The Sunrun Guarantee', url: SRC.sunrunGuarantee, supports: 'Subscription and Protection Plus plans; 90% production guarantee; 25-year repair promise; watertight warranty', checked },
  { name: 'Trinity Solar — homepage', url: SRC.trinityHome, supports: 'Service states CT, DE, MD, MA, NJ, NY, PA, RI, OH; up to 25-year parts and labor guarantee', checked },
  { name: 'Trinity Solar — About us', url: SRC.trinityAbout, supports: 'Founded 1994; more than 2,500 employees; 125,000 installations (2025)', checked },
  { name: 'Better Business Bureau — Trinity Solar profile and complaints', url: SRC.trinityBbb, supports: 'A+ and accredited since 2001; 230 complaints in three years; 155 service or repair', checked },
  { name: 'CourtListener — In re SunPower Corporation, Bankr. D. Del. No. 24-11649', url: SRC.sunpower, supports: 'Chapter 11 filed August 5, 2024', checked },
];

const ROWS: [string, string, string][] = [
  ['Lists California', 'Yes, on its contractor-license page', 'No; nine eastern states and Ohio'],
  ['Ownership', 'Public company, Nasdaq: RUN', 'Family-founded private company (1994)'],
  ['Scale (company figures)', '1,034,738 subscribers at June 30, 2026', '125,000 installations as of 2025'],
  ['BBB rating', 'A+, accredited', 'A+, accredited since 2001'],
  ['BBB complaints, 3 years', '4,017 (2,386 service or repair)', '230 (155 service or repair)'],
  ['Published warranty', 'Sunrun Guarantee on Subscription and Protection Plus plans: 90% production, 25-year repair promise, watertight', '“Up to 25-year parts & labor guarantee”'],
  ['Batteries', '74% of Q2 2026 installs included storage', 'Offers battery storage; brands not named on its site'],
];

const faqs = [
  {
    question: 'Should a California homeowner choose Sunrun or Trinity Solar?',
    answer:
      'Trinity is not an option in California: its own site lists nine states in the East and Ohio, and none in the West. Sunrun lists California on its contractor-license page. So the useful comparison for a California home is Sunrun against other companies that serve your address.',
  },
  {
    question: 'Where do Sunrun and Trinity Solar both operate?',
    answer:
      'Comparing Sunrun’s license page with Trinity’s service list on September 23, 2026, both name Connecticut, Maryland, Massachusetts, New Jersey, New York, Pennsylvania and Rhode Island. In those states, a homeowner could get quotes from both.',
  },
  {
    question: 'Which has more complaints, Sunrun or Trinity Solar?',
    answer:
      'Sunrun, by count: 4,017 BBB complaints in three years against Trinity’s 230. But Sunrun reports more than a million subscribers, and complaint counts are not adjusted for size. For both, most complaints are service or repair issues, so ask each how fast a repair visit is scheduled in your area.',
  },
  {
    question: 'Is Sunrun owned by Tesla, or is Trinity part of Sunrun?',
    answer:
      'Neither. Sunrun is its own Nasdaq-listed company that installs Tesla Powerwall batteries and has coordinated battery dispatches with Tesla. Trinity Solar is a separate, family-founded company in New Jersey.',
  },
  {
    question: 'What about SunPower vs. Trinity Solar?',
    answer:
      'SunPower Corporation filed for Chapter 11 bankruptcy in Delaware on August 5, 2024. If you have a SunPower system, our SunPower review covers who handles warranties and service now.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function SunrunVsTrinity() {
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
              <span className='text-foreground font-medium'>Sunrun vs Trinity Solar</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Installer Comparison</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Sunrun vs Trinity Solar (2026): Service Area, BBB Records and Contracts
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Published September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                If your home is in California, Sunrun vs. Trinity Solar is not a real choice: Sunrun lists California
                on its contractor-license page, and Trinity’s own site lists nine states in the East and Ohio. In the
                seven states where both work, the differences are scale, contract model and complaint volume, and
                both companies’ complaint files are dominated by service and repair issues.
              </p>
              <p className={p}>
                Everything below comes from each company’s own site or filings and from its Better Business Bureau
                profile, all checked on September 23, 2026. This page does not rank either company.
              </p>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Sunrun vs Trinity Solar comparison' />
              </div>

              <h2 className={h2}>Side by side</h2>
              <div className='not-prose overflow-x-auto rounded-xl border border-border mb-6'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>&nbsp;</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Sunrun</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Trinity Solar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map(([label, sunrun, trinity]) => (
                      <tr key={label} className='border-t border-border align-top'>
                        <td className='px-4 py-3 font-medium text-foreground'>{label}</td>
                        <td className='px-4 py-3 text-foreground/80'>{sunrun}</td>
                        <td className='px-4 py-3 text-foreground/80'>{trinity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className={h2}>Service area: the first and usually last question</h2>
              <p className={p}>
                Sunrun’s state contractor-license page lists California along with most of the East Coast states
                Trinity serves.<Cite href={SRC.sunrunLic} date={checked} /> Trinity’s homepage lists Connecticut,
                Delaware, Maryland, Massachusetts, New Jersey, New York, Pennsylvania, Rhode Island and Ohio.
                <Cite href={SRC.trinityHome} date={checked} /> The overlap is seven states: Connecticut, Maryland,
                Massachusetts, New Jersey, New York, Pennsylvania and Rhode Island. A homeowner in one of those can
                collect quotes from both. A homeowner in California, or anywhere else in the West, cannot.
              </p>

              <h2 className={h2}>Contract model: subscription versus an installer’s quote</h2>
              <p className={p}>
                Sunrun reports its business in subscribers, 1,034,738 of them at June 30, 2026, and ties its main
                guarantee to its Subscription and Protection Plus plans.
                <Cite href={SRC.sunrunQ2} date={checked} />
                <Cite href={SRC.sunrunGuarantee} date={checked} /> Ask whether the offer in front of you is a
                subscription, meaning a lease or power purchase agreement where Sunrun owns the system and you pay
                monthly, or a loan or cash purchase. Trinity is an installer first; its homepage mentions solar and
                roofing payment options without listing terms.
                <Cite href={SRC.trinityHome} date={checked} />
              </p>
              <p className={p}>
                The two models put the risk in different places. Under a Sunrun subscription the company carries
                repairs and production for the term, but you carry an escalator and a transfer obligation if you sell.
                Under a purchase from an installer, you own the equipment and the manufacturers’ warranties, and your
                long-term protection is only as good as the installer’s workmanship warranty and its survival. The{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>
                  lease, PPA, loan and cash comparison
                </Link>{' '}
                lines up the terms to compare.
              </p>

              <h2 className={h2}>Complaint files compared</h2>
              <p className={p}>
                Both BBB profiles showed an A+ rating and accreditation. Sunrun’s listed 4,017 complaints in three
                years, 2,386 of them service or repair issues, about 59%.<Cite href={SRC.sunrunBbb} date={checked} />{' '}
                Trinity’s listed 230, 155 of them service or repair issues, about 67%.
                <Cite href={SRC.trinityBbb} date={checked} /> The raw counts reflect size as much as anything: Sunrun
                reports more than a million subscribers, and Trinity reports 125,000 installations.
                <Cite href={SRC.trinityAbout} date={checked} />
              </p>
              <p className={p}>
                The recent complaints against both read alike: waits for a repair visit, installs or activations that
                ran months late, and disputes over roof damage. That shared pattern is the takeaway. Whoever you pick,
                get the repair-response terms, the roof warranty and the treatment of your payments during an outage
                in writing.
              </p>

              <h2 className={h2}>Warranties</h2>
              <p className={p}>
                Sunrun’s published guarantee promises at least 90% of estimated lifetime production, a 25-year promise
                to cover repair parts and labor, a watertight warranty against leaks from the installation, and a
                battery guarantee, on its Subscription and Protection Plus plans and not in Florida.
                <Cite href={SRC.sunrunGuarantee} date={checked} /> Trinity advertises an “up to 25-year parts &amp;
                labor guarantee.”<Cite href={SRC.trinityHome} date={checked} /> “Up to” means the contract decides; ask
                Trinity which parts, which labor and how many years yours covers.
              </p>

              <h2 className={h2}>If you are in California</h2>
              <p className={p}>
                Compare Sunrun with other companies whose own sites list California, starting with the{' '}
                <Link href='/solar-installers' className={a}>California solar company reviews</Link>. The{' '}
                <Link href='/solar-installers/sunrun-review' className={a}>full Sunrun review</Link> covers its finances,
                roof program and Vivint Solar contracts, and the{' '}
                <Link href='/solar-installers/trinity-solar-review' className={a}>Trinity Solar review</Link> has its
                court record. If a battery is part of the plan, see{' '}
                <Link href='/battery/tesla-powerwall-3-cost-california' className={a}>what a Powerwall 3 costs installed</Link>.
              </p>

              <div className='not-prose'>
                <FaqJsonLd items={faqs} />
                <FaqBlock items={faqs} schema={false} />
              </div>
              <p className={p}>
                For the SunPower question above, see the{' '}
                <Link href='/solar-installers/sunpower-review' className={a}>SunPower review</Link>; the bankruptcy
                filing is on the federal docket.<Cite href={SRC.sunpower} date={checked} />
              </p>

              <div className='not-prose'>
                <SourceList sources={sources} />
              </div>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic='Sunrun vs Trinity Solar comparison' />
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
