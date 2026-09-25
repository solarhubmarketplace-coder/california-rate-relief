import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';
import { HubUpLink } from '@/components/growth/HubUpLink';

const path = '/panel-reviews/rec-solar-panels-review';
const checked = '2026-09-23';

const metaTitle = "REC Solar Panels Review (2026): Alpha Pure-RX, Where Made";
const metaDescription =
  'Who makes REC panels, where they are made, and what the Alpha Pure-RX warranty really covers, including the certified-installer ProTrust terms.';

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
  twitter: crrTwitter(metaTitle, metaDescription),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'REC Solar Panels Review (2026): Who Makes Them, Where, and the Alpha Pure-RX Warranty',
  description: metaDescription,
  datePublished: '2026-04-23',
  dateModified: checked,
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ratereliefca.com${path}` },
};

const SRC = {
  about: 'https://www.recgroup.com/en-us/about-rec',
  rx: 'https://www.recgroup.com/en-us/rec-alpha-pure-rx',
  ril: 'https://www.ril.com/sites/default/files/2023-01/Media-Release-RIL-REC-10102021.pdf',
  silfab: 'https://silfabsolar.com/wp-content/uploads/2026/05/Silfab-SIL-430-QD-Data-Final.pdf',
  usc48e: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section48E&num=0&edition=prelim',
};

const sources: ReviewSource[] = [
  { name: 'REC Group — About REC', url: SRC.about, supports: 'Founded 1996; headquartered in Norway with operational headquarters in Singapore; “Made in Singapore”', checked },
  { name: 'REC Group — REC Alpha Pure-RX', url: SRC.rx, supports: '450–470 W; 22.6% maximum efficiency; heterojunction cells; 20-year product and 25-year performance warranty, at least 92% in year 25; ProTrust terms; made in Singapore', checked },
  { name: 'Reliance Industries — Reliance New Energy Solar acquires REC Solar Holdings (October 10, 2021)', url: SRC.ril, supports: '100% of REC Solar Holdings AS acquired from China National Bluestar at an enterprise value of US$771 million; polysilicon plants in Norway, cell and module plant in Singapore', checked },
  { name: 'Silfab Solar — SIL-430 QD datasheet', url: SRC.silfab, supports: 'Comparison figures for Silfab', checked },
  { name: 'U.S. Code — 26 U.S.C. § 48E', url: SRC.usc48e, supports: 'Domestic content bonus rules in § 48E(a)(3)(B)', checked },
];

const faqs = [
  {
    question: 'Who makes REC solar panels?',
    answer:
      'REC Group, founded in Norway in 1996. It is headquartered in Norway with operational headquarters in Singapore. Since October 2021 it has been owned by Reliance New Energy Solar, part of India’s Reliance Industries, which bought 100% of REC Solar Holdings from China National Bluestar.',
  },
  {
    question: 'Where are REC Alpha solar panels made?',
    answer:
      'In Singapore. REC’s Alpha Pure-RX page says “Made in Singapore,” and Reliance’s 2021 acquisition release describes REC’s cell and module plant there, with polysilicon plants in Norway.',
  },
  {
    question: 'Are REC solar panels any good?',
    answer:
      'On the spec sheet, the Alpha Pure-RX is a high-efficiency panel: up to 22.6% with heterojunction cells, and a performance warranty of at least 92% of output at year 25. The base product warranty is 20 years, extended to 25 only through a certified installer who registers the panels. Judge it on those terms and on the price per watt in your quote.',
  },
  {
    question: 'What is REC ProTrust?',
    answer:
      'REC’s enhanced warranty. It adds five years to the 20-year product warranty and a labor warranty of up to 25 years, but only when the panels are installed by an REC Certified Solar Professional and registered by that installer with REC.',
  },
  {
    question: 'Do REC panels count as U.S.-made?',
    answer:
      'No. They are made in Singapore. That matters only to a company claiming the commercial credit’s domestic content bonus on a leased or PPA system; a homeowner buying in 2026 gets no federal credit either way.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function RecSolarReview() {
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
              <Link href='/panel-reviews' className='hover:text-primary transition-colors'>Panel Reviews</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>REC Solar</span>
            </nav>
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Panel Brand Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                REC Solar Panels Review (2026): Who Makes Them, Where, and the Alpha Pure-RX Warranty
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Updated September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                REC solar panels are made in Singapore by REC Group, a company founded in Norway in 1996 and owned since
                2021 by India’s Reliance Industries. Its current residential flagship, the Alpha Pure-RX, is rated at 450 to
                470 watts and up to 22.6% efficiency, and REC guarantees at least 92% of its output in year 25. The base
                product warranty is 20 years; the 25-year version needs a certified installer.
              </p>
              <HubUpLink path="/panel-reviews/rec-solar-panels-review" />
              <p className={p}>
                This review is for a California homeowner comparing a quote that names REC. It uses REC’s own product pages
                and the Reliance acquisition release, checked on September 23, 2026, and compares REC with a U.S.-made
                panel. It does not rank panel brands.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'Made in', value: 'Singapore', source: { url: SRC.rx, date: checked } },
                    { label: 'Alpha Pure-RX efficiency', value: 'Up to 22.6%', note: '450–470 W, heterojunction cells', source: { url: SRC.rx, date: checked } },
                    { label: 'Output guaranteed in year 25', value: '≥92%', source: { url: SRC.rx, date: checked } },
                    { label: 'Owner since 2021', value: 'Reliance', note: '100% of REC Solar Holdings', source: { url: SRC.ril, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='REC Solar panels review and quote comparison' />
              </div>

              <h2 className={h2}>Who makes REC solar panels?</h2>
              <p className={p}>
                REC Group, which says it was founded in 1996 and is headquartered in Norway with its operational
                headquarters in Singapore.<Cite href={SRC.about} date={checked} /> On October 10, 2021, Reliance New Energy
                Solar, a unit of India’s Reliance Industries, announced that it had acquired 100% of REC Solar Holdings AS
                from China National Bluestar at an enterprise value of US$771 million.
                <Cite href={SRC.ril} date={checked} />
              </p>
              <p className={p}>
                If you were looking for a local installer or a commercial solar developer with REC in its name, this page
                is not about that: it covers REC Group’s panels. When a quote lists REC panels, check that the model number
                matches an REC Group datasheet. For a business property, see{' '}
                <Link href='/commercial-solar/rec-commercial-solar-panels' className={a}>REC panel lines for commercial projects</Link>.
              </p>

              <h2 className={h2}>Where are REC panels made?</h2>
              <p className={p}>
                In Singapore. REC’s Alpha Pure-RX page says “Made in Singapore.”<Cite href={SRC.rx} date={checked} />{' '}
                Reliance’s acquisition release describes REC’s operations at the time as two polysilicon plants in Norway
                and one plant in Singapore making cells and modules.<Cite href={SRC.ril} date={checked} />
              </p>

              <h2 className={h2}>The Alpha Pure-RX on paper</h2>
              <p className={p}>
                REC lists the Alpha Pure-RX at 450 to 470 watts with a maximum efficiency of 22.6%, using heterojunction
                (HJT) cells, and markets its temperature coefficient as a strength in hot weather.
                <Cite href={SRC.rx} date={checked} /> For a roof in the Central Valley or the Inland Empire, look up the
                exact temperature coefficient on the datasheet for the model in your quote and compare it with the other
                panels you are offered. A smaller loss per degree means more output on hot afternoons.
              </p>

              <h2 className={h2}>What the REC warranty covers, and ProTrust</h2>
              <p className={p}>
                The standard terms on the Alpha Pure-RX page are a 20-year product warranty and a 25-year performance
                warranty with at least 92% of rated power in year 25. REC ProTrust adds five years to the product warranty
                and a labor warranty of up to 25 years, but only if the panels are installed by an REC Certified Solar
                Professional and registered with REC by that installer.<Cite href={SRC.rx} date={checked} />
              </p>
              <p className={p}>
                So ask two questions before you sign: is the installer an REC Certified Solar Professional, and will it
                register your panels and give you the confirmation? Without both, you have the 20-year product warranty and
                no REC labor coverage.
              </p>

              <h2 className={h2}>REC vs. Silfab</h2>
              <p className={p}>
                A common comparison is with Silfab’s U.S.-made SIL-430 QD. REC’s panel has the higher listed efficiency
                (up to 22.6% against 22.1%) and the stronger year-25 output guarantee (at least 92%). Silfab’s has a longer
                performance term, 30 years with at least 89.3% at year 30, and is made in the United States. Both extend the
                product warranty to 25 years only after registration, REC through a certified installer.
                <Cite href={SRC.rx} date={checked} />
                <Cite href={SRC.silfab} date={checked} /> The{' '}
                <Link href='/panel-reviews/silfab-solar-panels-review' className={a}>Silfab review</Link> has its full
                terms.
              </p>

              <h2 className={h2}>Does it matter that REC is not U.S.-made?</h2>
              <p className={p}>
                For a homeowner buying a system in 2026, no: there is no federal residential credit for installations after
                2025. It can matter under a lease or PPA, because the company that owns the system may claim the commercial
                credit under 26 U.S.C. § 48E, and its domestic content bonus depends on the share of U.S.-made manufactured
                products in the project.<Cite href={SRC.usc48e} date={checked} /> A Singapore-made panel does not add to that
                share. Whether any of the owner’s credit reaches you is a question for the contract; the{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>lease, PPA, loan and cash comparison</Link>{' '}
                shows what to look for.
              </p>

              <h2 className={h2}>When REC makes sense</h2>
              <p className={p}>
                REC is worth considering if your installer is an REC Certified Solar Professional and will register the
                panels, if roof space is tight and a higher-wattage panel reduces the panel count, or if you are comparing
                premium panels for a hot inland roof. It makes less sense if the installer cannot offer ProTrust, or if the
                price per watt is well above an otherwise identical quote with another panel. See{' '}
                <Link href='/solar-panels-california' className={a}>what solar costs in California</Link> to check the
                whole quote, and our{' '}
                <Link href='/panel-reviews' className={a}>other panel brand reviews</Link>.
              </p>

              <div className='not-prose'>
                <FaqJsonLd items={faqs} />
                <FaqBlock items={faqs} schema={false} />
              </div>

              <div className='not-prose'>
                <SourceList sources={sources} />
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get REC Panels in a Written Quote</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
              <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
            </div>
            <div className='mt-8'>
              <SolarInquiry topic='REC Solar panels review and quote comparison' />
            </div>

            <HubSpokeLinks hub='installer_reviews' currentPath={path} />

            <div className='mt-10'><Link href='/panel-reviews' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Panel Reviews</Link></div>
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'><TrustedSources domain='crr' variant='compact' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
      <div className='container mx-auto px-4 max-w-3xl'><RelatedInstallers picks='premium' /></div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
