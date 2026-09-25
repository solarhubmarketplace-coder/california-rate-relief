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
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';
import { Byline } from '@/components/trust/Byline';

const path = '/panel-reviews/silfab-solar-panels-review';
const checked = '2026-09-23';

const metaTitle = 'Silfab Solar Panels Review (2026): Made in USA, Warranty';
const metaDescription =
  'Silfab makes panels in Washington and South Carolina. The SIL-430 QD datasheet, why the product warranty depends on registration, and Silfab vs REC.';

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
  headline: 'Silfab Solar Panels Review (2026): Where They Are Made, the Warranty and the Specs',
  description: metaDescription,
  datePublished: '2026-04-23',
  dateModified: checked,
  author: CRR_AUTHOR_PERSON,
  publisher: { '@type': 'Organization', name: 'California Rate Relief', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ratereliefca.com${path}` },
};

const SRC = {
  home: 'https://www.silfabsolar.com/',
  story: 'https://silfabsolar.com/our-story/',
  warranty: 'https://silfabsolar.com/support-overview/',
  sheet: 'https://silfabsolar.com/wp-content/uploads/2026/05/Silfab-SIL-430-QD-Data-Final.pdf',
  rec: 'https://www.recgroup.com/en-us/rec-alpha-pure-rx',
  usc48e: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section48E&num=0&edition=prelim',
  irs: 'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb',
};

const sources: ReviewSource[] = [
  { name: 'Silfab Solar — homepage', url: SRC.home, supports: 'Mississauga, Ontario corporate office; plants in Burlington, WA and Fort Mill, SC; Prime and Elite residential lines; Elite “exclusively made in the USA”', checked },
  { name: 'Silfab Solar — Our story', url: SRC.story, supports: 'Founded 2010; first plant in Toronto; two U.S. manufacturing locations', checked },
  { name: 'Silfab Solar — Warranty and support', url: SRC.warranty, supports: '25-year and 30-year residential warranty terms; warranty document Revision Q', checked },
  { name: 'Silfab Solar — SIL-430 QD datasheet', url: SRC.sheet, supports: '430 W; 22.1%; n-type half cells; −0.29%/°C; product warranty 12 years extendable to 25 with registration; 30-year performance, ≥89.3% at year 30', checked },
  { name: 'REC Group — REC Alpha Pure-RX', url: SRC.rec, supports: '450–470 W; 22.6% maximum efficiency; 20-year product and 25-year performance warranty; made in Singapore', checked },
  { name: 'U.S. Code — 26 U.S.C. § 48E', url: SRC.usc48e, supports: 'Domestic content bonus rules in § 48E(a)(3)(B); adjusted percentage rising by construction start year', checked },
  { name: 'IRS — FAQs on Public Law 119-21 changes to 25D', url: SRC.irs, supports: 'No residential credit for expenditures made after December 31, 2025', checked },
];

const faqs = [
  {
    question: 'Where are Silfab solar panels made?',
    answer:
      'Silfab lists manufacturing plants at Burlington, Washington and Fort Mill, South Carolina, with its corporate office in Mississauga, Ontario. It says its first plant was in Toronto, and it markets the Elite series as made exclusively in the USA.',
  },
  {
    question: 'What is the Silfab warranty?',
    answer:
      'Silfab’s support page states a 25-year and a 30-year warranty on its residential panels. The SIL-430 QD datasheet is more specific: a 30-year performance warranty with at least 89.3% of output at year 30, and a product warranty of 12 years that extends to 25 years when the panels are registered. Make sure your installer registers them.',
  },
  {
    question: 'Are Silfab panels good?',
    answer:
      'On the datasheet, the SIL-430 QD is a current-generation panel: 22.1% efficient, n-type cells, a −0.29%/°C temperature coefficient and a 30-year performance warranty. Whether it is the right panel for you depends on the price per watt in your quote and on whether the product warranty is registered.',
  },
  {
    question: 'Silfab vs. REC: which is better?',
    answer:
      'They trade off differently. REC’s Alpha Pure-RX has a higher listed efficiency and a stronger year-25 output guarantee but a shorter base product warranty and is made in Singapore. Silfab’s SIL-430 QD has a longer performance term and U.S. manufacturing. Compare the exact models in your quotes.',
  },
  {
    question: 'Does a U.S.-made panel get me a bigger tax credit?',
    answer:
      'Not as a homeowner buying in 2026: the IRS says the residential credit is not allowed for expenditures made after December 31, 2025. U.S.-made panels can matter to a company that owns the system under a lease or PPA, because the commercial credit in 26 U.S.C. § 48E has a domestic content bonus.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function SilfabSolarReview() {
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
              <span className='text-foreground font-medium'>Silfab Solar</span>
            </nav>
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Panel Brand Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Silfab Solar Panels Review (2026): Where They Are Made, the Warranty and the Specs
              </h1>
              <Byline updated={checked} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Updated September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Silfab is a North American panel maker that builds its modules in the United States, at plants in
                Burlington, Washington and Fort Mill, South Carolina. Its SIL-430 QD residential panel is rated at 430
                watts and 22.1% efficiency, with a 30-year performance warranty. The catch is in the product warranty:
                the datasheet gives 12 years, extended to 25 only if the panels are registered.
              </p>
              <p className={p}>
                This review is for a California homeowner who has a quote that names Silfab, or wants one. It uses
                Silfab’s own site, datasheet and warranty page, checked on September 23, 2026, and compares the panel with
                a competing premium model from REC. It does not rank panel brands.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'U.S. plants', value: 'WA and SC', note: 'Burlington, Washington; Fort Mill, South Carolina', source: { url: SRC.home, date: checked } },
                    { label: 'SIL-430 QD efficiency', value: '22.1%', note: '430 W, n-type half cells', source: { url: SRC.sheet, date: checked } },
                    { label: 'Performance warranty', value: '30 years', note: 'At least 89.3% of output at year 30', source: { url: SRC.sheet, date: checked } },
                    { label: 'Product warranty', value: '12 → 25 years', note: 'Extension requires registration', source: { url: SRC.sheet, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Silfab Solar panels review and quote comparison' />
              </div>

              <h2 className={h2}>Where are Silfab panels made?</h2>
              <p className={p}>
                Silfab lists two U.S. manufacturing addresses, 1770 Port Drive in Burlington, Washington and 7149
                Logistics Lane in Fort Mill, South Carolina, and a corporate office in Mississauga, Ontario. It markets its
                Elite series as “exclusively made in the USA.”<Cite href={SRC.home} date={checked} /> The company says it
                was formed in 2010 by a group of solar investors, that its first plant was in Toronto, and that it now has
                two U.S. manufacturing locations.<Cite href={SRC.story} date={checked} />
              </p>

              <h2 className={h2}>Silfab’s residential panels</h2>
              <p className={p}>
                Silfab sells two residential lines. Prime is the core line, with models including the SIL-440, SIL-430,
                SIL-420, SIL-410 and SIL-370. Elite is the premium line, built with back-contact cells, with models including
                the SIL-410, SIL-420 and SIL-380. It also makes commercial and utility panels.
                <Cite href={SRC.home} date={checked} />
              </p>
              <p className={p}>
                The current SIL-430 QD datasheet lists 430 watts, 22.1% module efficiency, 108 n-type half cells
                and a temperature coefficient of −0.29% per °C.<Cite href={SRC.sheet} date={checked} /> That last figure
                matters in inland California, where roof temperatures run high in summer: it is the share of output a panel
                loses for each degree above its test temperature, so a smaller number means less summer loss. Compare it
                with the figure on every other datasheet you are quoted.
              </p>

              <h2 className={h2}>The Silfab warranty, and why registration matters</h2>
              <p className={p}>
                Silfab’s support page describes its residential panels as carrying a 25-year and a 30-year warranty and
                points to its limited product and linear performance warranty, Revision Q, for the full terms.
                <Cite href={SRC.warranty} date={checked} /> The SIL-430 QD datasheet spells out how that works for one
                model: a 30-year performance warranty with at least 89.3% of rated output at the end of year 30, and a
                product warranty of 12 years that is “extendable to 25 years subject to registration.”
                <Cite href={SRC.sheet} date={checked} />
              </p>
              <p className={p}>
                In plain terms: if nobody registers your panels, a defect in year 15 may not be covered. Ask your installer
                to register the panels with Silfab and to give you the confirmation, and keep it with your contract.
                Also ask whether the warranty pays for the labor to remove and replace a failed panel, or only for the
                panel itself, and put the answer in writing.
              </p>

              <h2 className={h2}>Silfab vs. REC</h2>
              <p className={p}>
                People comparing Silfab often have an REC quote too. Here is one current model from each, from the
                makers’ own pages.
              </p>
              <div className='not-prose overflow-x-auto rounded-xl border border-border mb-6'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>&nbsp;</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Silfab SIL-430 QD</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>REC Alpha Pure-RX</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-medium'>Rated power</td><td className='px-4 py-3 text-foreground/80'>430 W</td><td className='px-4 py-3 text-foreground/80'>450–470 W</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-medium'>Efficiency</td><td className='px-4 py-3 text-foreground/80'>22.1%</td><td className='px-4 py-3 text-foreground/80'>Up to 22.6%</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-medium'>Product warranty</td><td className='px-4 py-3 text-foreground/80'>12 years, 25 with registration</td><td className='px-4 py-3 text-foreground/80'>20 years, 25 through a certified installer</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-medium'>Performance warranty</td><td className='px-4 py-3 text-foreground/80'>30 years, ≥89.3% at year 30</td><td className='px-4 py-3 text-foreground/80'>25 years, ≥92% at year 25</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-medium'>Made in</td><td className='px-4 py-3 text-foreground/80'>United States</td><td className='px-4 py-3 text-foreground/80'>Singapore</td></tr>
                  </tbody>
                </table>
              </div>
              <p className={p}>
                Sources: the Silfab datasheet and REC’s Alpha Pure-RX page.<Cite href={SRC.sheet} date={checked} />
                <Cite href={SRC.rec} date={checked} /> Neither is better in every row. The full{' '}
                <Link href='/panel-reviews/rec-solar-panels-review' className={a}>REC panels review</Link> explains REC’s
                certified-installer warranty.
              </p>

              <h2 className={h2}>Does U.S. manufacturing change the price or the credit?</h2>
              <p className={p}>
                For a homeowner who buys in 2026, no federal credit is available: the IRS says the residential credit is not
                allowed for expenditures made after December 31, 2025.<Cite href={SRC.irs} date={checked} /> Where U.S.
                manufacturing can matter is under a lease or PPA. The company that owns the system may claim the commercial
                credit under 26 U.S.C. § 48E, which has a domestic content bonus; the share of U.S.-made manufactured
                products needed rises with the year construction starts, to 50% for 2026 and 55% after that.
                <Cite href={SRC.usc48e} date={checked} /> A U.S.-made panel helps the owner reach that share, and whether
                any of that value reaches you depends on the contract. Compare ownership options with the{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>lease, PPA, loan and cash comparison</Link>.
              </p>

              <h2 className={h2}>When Silfab makes sense</h2>
              <p className={p}>
                Silfab is worth asking for if you want panels made in the United States, value a 30-year performance
                warranty, or are comparing premium panels in a hot inland climate where the temperature coefficient
                matters. It is a weaker fit if your installer will not register the panels or will not say in writing who
                pays for replacement labor. Price is the other check: ask for the same system with a second panel brand and
                compare cost per watt. For the rest of the quote, see{' '}
                <Link href='/solar-panels-california' className={a}>what solar costs in California</Link> and our{' '}
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
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Ask for US-Made Silfab Panels in a Written Quote</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
              <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
            </div>
            <div className='mt-8'>
              <SolarInquiry topic='Silfab Solar panels review and quote comparison' />
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
