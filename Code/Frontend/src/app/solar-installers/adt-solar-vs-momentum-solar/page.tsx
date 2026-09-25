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
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';

const path = '/solar-installers/adt-solar-vs-momentum-solar';
const checked = '2026-09-23';

const metaTitle = 'ADT Solar vs Momentum Solar: ADT Exited Solar in 2024';
const metaDescription =
  'ADT left residential solar in 2024, and Momentum Solar does not list California. What that means for ADT Solar owners and for anyone comparing the two.';

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
  headline: 'ADT Solar vs. Momentum Solar: ADT Left Residential Solar, and What That Means Now',
  description: metaDescription,
  datePublished: checked,
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
  adt2024: 'https://investor.adt.com/News--Events/news/news-details/2024/ADT-Provides-Solar-Business-Update-and-Advances-Capital-Allocation-Strategy/default.aspx',
  adtFy24: 'https://investor.adt.com/News--Events/news/news-details/2025/ADT-Reports-Fourth-Quarter-and-Full-Year-2024-Results/default.aspx',
  momentum: 'https://www.momentumsolar.com/',
  momentumBbb: 'https://www.bbb.org/us/nj/south-plainfield/profile/solar-energy-design/momentum-solar-0221-90134444/complaints',
  momentumCl: 'https://www.courtlistener.com/?type=r&party_name=%22Momentum%20Solar%22',
  lighthouse: 'https://www.sunrun.com/lighthouse',
  elevationService: 'https://poweredbyelevation.com/solar-service/',
};

const sources: ReviewSource[] = [
  { name: 'ADT — ADT provides solar business update and advances capital allocation strategy (January 24, 2024)', url: SRC.adt2024, supports: 'ADT will exit its residential solar business; exit may include transferring components of the business to other parties', checked },
  { name: 'ADT — Fourth quarter and full year 2024 results', url: SRC.adtFy24, supports: 'Solar business substantially wound down in the third quarter of 2024; reported as discontinued operations', checked },
  { name: 'Momentum Solar — homepage', url: SRC.momentum, supports: 'Service states CT, FL, MA, NV, NJ, NY, TX', checked },
  { name: 'Better Business Bureau — Momentum Solar complaints', url: SRC.momentumBbb, supports: '561 complaints in three years; 254 service or repair; 113 sales and advertising', checked },
  { name: 'CourtListener — federal dockets naming Momentum Solar', url: SRC.momentumCl, supports: 'Dockets including claims under the Telephone Consumer Protection Act', checked },
  { name: 'Sunrun — Lighthouse', url: SRC.lighthouse, supports: 'Service platform for owners who lost access to their original installer', checked },
  { name: 'Elevation — Solar service', url: SRC.elevationService, supports: 'Services systems regardless of who installed them', checked },
];

const faqs = [
  {
    question: 'Is ADT Solar still in business?',
    answer:
      'No. ADT announced on January 24, 2024 that it would exit its residential solar business, and its full-year 2024 results said the solar business was substantially wound down in the third quarter of 2024. ADT’s security and smart home business continues.',
  },
  {
    question: 'Who services an ADT Solar system now?',
    answer:
      'Start with ADT customer support for your account records, then with the manufacturers of your panels, inverter and battery, whose product warranties come from them rather than from the installer. For repairs, some companies service systems they did not install; Elevation says it services any system, and Sunrun’s Lighthouse program says it serves owners who lost access to their installer.',
  },
  {
    question: 'Did ADT sell its solar business?',
    answer:
      'ADT’s January 2024 announcement said the exit “may include the transfer of components of the business to other parties.” It did not name a buyer, and we found no primary source naming one. Ask ADT in writing who, if anyone, took over your agreement or warranty.',
  },
  {
    question: 'Does Momentum Solar serve California?',
    answer:
      'Its homepage lists Connecticut, Florida, Massachusetts, Nevada, New Jersey, New York and Texas, not California (checked September 23, 2026). Confirm your ZIP code in writing before you rely on a quote.',
  },
  {
    question: 'ADT Solar vs. Momentum Solar: which is better?',
    answer:
      'For a new system in 2026 the comparison has no answer, because ADT no longer sells solar. Momentum still does, in the states it lists. For a California home, compare companies whose own sites list California.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function AdtVsMomentum() {
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
              <span className='text-foreground font-medium'>ADT Solar vs Momentum Solar</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Installer Comparison</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                ADT Solar vs. Momentum Solar: ADT Left Residential Solar, and What That Means Now
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Published September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                ADT Solar is not a choice anymore. ADT announced on January 24, 2024 that it would leave residential
                solar, and by its own later account the business was substantially wound down in the third quarter of
                2024. Momentum Solar still sells, but its homepage lists seven states and not California. For a
                California home, neither belongs on the quote list.
              </p>
              <p className={p}>
                So this page does two jobs. For ADT Solar owners, it covers what the exit means and where to go for
                service. For anyone comparing the two names, it sets out Momentum’s current record, with sources dated
                September 23, 2026.
              </p>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='ADT Solar vs Momentum Solar comparison' />
              </div>

              <h2 className={h2}>What happened to ADT Solar</h2>
              <p className={p}>
                ADT’s January 24, 2024 release said the company would exit its residential solar business to focus on
                its core security and smart home business, and that the exit “may include the transfer of components of
                the business to other parties.”<Cite href={SRC.adt2024} date={checked} /> ADT’s results for the fourth
                quarter and full year 2024 describe the former solar segment as discontinued operations and say the
                solar business was substantially wound down in the third quarter of 2024.
                <Cite href={SRC.adtFy24} date={checked} />
              </p>
              <p className={p}>
                Neither release names a buyer for customer agreements or explains how warranty claims are handled after
                the exit, and we found no primary source that does. That gap is the reason to get answers from ADT in
                writing rather than from a phone summary.
              </p>

              <h2 className={h2}>If you own an ADT Solar system</h2>
              <ol className='list-decimal pl-6 space-y-3 text-foreground/80 mb-6'>
                <li>
                  <strong>Collect your paperwork.</strong> Find the installation contract, any loan or lease agreement,
                  the permit and inspection records, and the model numbers of the panels, inverter and any battery.
                </li>
                <li>
                  <strong>Ask ADT who holds each obligation.</strong> Ask in writing who now holds your workmanship
                  warranty and any financing agreement, and where to send a claim.
                </li>
                <li>
                  <strong>Go to the manufacturers for equipment.</strong> Panel, inverter and battery product warranties
                  are issued by their manufacturers. Register the equipment if you have not, and file equipment claims
                  with them directly.
                </li>
                <li>
                  <strong>Line up a service company.</strong> Some firms service systems they did not install. Elevation
                  says its maintenance and repair services extend to any system, and Sunrun says its Lighthouse program
                  is built for owners who lost access to their original installer.
                  <Cite href={SRC.elevationService} date={checked} />
                  <Cite href={SRC.lighthouse} date={checked} />
                </li>
              </ol>
              <p className={p}>
                Our guide to{' '}
                <Link href='/solar-installers/solar-installer-bankruptcy-california' className={a}>
                  what survives when a solar company fails
                </Link>{' '}
                covers loans, leases and warranties in more detail. If panels have to come off for roof work, the{' '}
                <Link href='/blog/solar-panel-removal-reinstall-cost' className={a}>removal and reinstall checklist</Link>{' '}
                applies to an orphaned system too.
              </p>

              <h2 className={h2}>Momentum Solar today</h2>
              <p className={p}>
                Momentum’s homepage lists Connecticut, Florida, Massachusetts, Nevada, New Jersey, New York and
                Texas.<Cite href={SRC.momentum} date={checked} /> Its Better Business Bureau file showed 561 complaints
                in three years when we checked, 254 of them service or repair issues and 113 sales and advertising
                issues.<Cite href={SRC.momentumBbb} date={checked} /> The federal docket record includes a run of cases
                under the Telephone Consumer Protection Act, the law on marketing calls and texts; those are allegations,
                not findings.<Cite href={SRC.momentumCl} date={checked} /> The{' '}
                <Link href='/solar-installers/momentum-solar-review' className={a}>Momentum Solar review</Link> has the
                case list and the complaint themes.
              </p>

              <h2 className={h2}>Side by side</h2>
              <div className='not-prose overflow-x-auto rounded-xl border border-border mb-6'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>&nbsp;</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>ADT Solar</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Momentum Solar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t border-border align-top'>
                      <td className='px-4 py-3 font-medium text-foreground'>Selling residential solar?</td>
                      <td className='px-4 py-3 text-foreground/80'>No; exit announced January 24, 2024</td>
                      <td className='px-4 py-3 text-foreground/80'>Yes, in the states it lists</td>
                    </tr>
                    <tr className='border-t border-border align-top'>
                      <td className='px-4 py-3 font-medium text-foreground'>Lists California?</td>
                      <td className='px-4 py-3 text-foreground/80'>Not applicable</td>
                      <td className='px-4 py-3 text-foreground/80'>No</td>
                    </tr>
                    <tr className='border-t border-border align-top'>
                      <td className='px-4 py-3 font-medium text-foreground'>Where existing customers go</td>
                      <td className='px-4 py-3 text-foreground/80'>ADT support for records; manufacturers for equipment</td>
                      <td className='px-4 py-3 text-foreground/80'>Momentum directly</td>
                    </tr>
                    <tr className='border-t border-border align-top'>
                      <td className='px-4 py-3 font-medium text-foreground'>BBB complaints, 3 years</td>
                      <td className='px-4 py-3 text-foreground/80'>Not checked</td>
                      <td className='px-4 py-3 text-foreground/80'>561</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className={h2}>What a California homeowner should do instead</h2>
              <p className={p}>
                Build a shortlist from companies whose own sites list California, then compare at least two written
                quotes for the same system size and equipment. The{' '}
                <Link href='/solar-installers' className={a}>California solar company reviews</Link> note which companies
                list the state. Check each license at the Contractors State License Board using our{' '}
                <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={a}>
                  verification walkthrough
                </Link>
                , and compare the financing with the{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>
                  lease, PPA, loan and cash comparison
                </Link>
                . If you want to know what a battery adds, see{' '}
                <Link href='/battery/tesla-powerwall-3-cost-california' className={a}>what a Powerwall 3 costs installed</Link>.
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
              <SolarInquiry topic='ADT Solar vs Momentum Solar comparison' />
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
