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
import { VerifyInstallerBox, type InstallerLicense, DGSTATS_LICENSE_BASIS } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';

// License numbers tied to the company by a primary source; CSLB status checked September 24, 2026.
const SUNRUN_LICENSES: InstallerLicense[] = [
  { number: '750184', holder: 'Sunrun Installation Services Inc dba Sunrun', basis: DGSTATS_LICENSE_BASIS, status: 'current and active', checked: 'September 24, 2026' }
];

const path = '/solar-installers/vivint-review';
const checked = '2026-09-23';

const metaTitle = 'Vivint Solar Reviews (2026): Now Sunrun. What Owners Can Do';
const metaDescription =
  'Vivint Solar became part of Sunrun in October 2020. What that means for a legacy agreement, the California court record, and who to call for service.';

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
  headline: 'Vivint Solar Reviews (2026): Now Part of Sunrun, and What Legacy Owners Can Do',
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
  deal: 'https://investors.sunrun.com/news-events/press-releases/detail/216/sunrun-completes-acquisition-of-vivint-solar-to-accelerate',
  nrg: 'https://investors.nrg.com/news-releases/news-release-details/nrg-completes-acquisition-vivint-smart-home-inc-creating-leading',
  bbbSunrun: 'https://www.bbb.org/us/ca/san-francisco/profile/solar-energy-equipment-dealers/sunrun-inc-1116-312886/complaints',
  move: 'https://www.sunrun.com/go-solar-center/solar-faq/what-happens-if-i-move',
  cl: 'https://www.courtlistener.com/?type=r&party_name=%22Vivint%20Solar%22',
  sce: 'https://www.courtlistener.com/docket/13556957/southern-california-edison-company-v-vivint-solar-inc/',
  dekker: 'https://www.courtlistener.com/docket/16542406/dekker-v-vivint-solar-inc/',
  gailani: 'https://www.courtlistener.com/docket/6320562/gailani-v-vivint-solar-inc/',
  gallo: 'https://www.courtlistener.com/docket/18729605/sandra-gallo-v-vivint-solar-inc/',
  aguirre: 'https://www.courtlistener.com/docket/6217026/aguirre-v-vivint-solar-developer-llc/',
};

const sources: ReviewSource[] = [
  { name: 'Sunrun — Sunrun completes acquisition of Vivint Solar (October 8, 2020)', url: SRC.deal, supports: 'Closing date; all-stock at 0.55 Sunrun shares per Vivint Solar share; more than 500,000 combined customers; Vivint Solar to be integrated into Sunrun', checked },
  { name: 'NRG Energy — NRG completes acquisition of Vivint Smart Home (March 10, 2023)', url: SRC.nrg, supports: 'Vivint Smart Home, a home security and smart home company, acquired by NRG; no mention of Vivint Solar', checked },
  { name: 'Better Business Bureau — Sunrun, Inc. complaints', url: SRC.bbbSunrun, supports: '4,017 complaints in three years; complaint types', checked },
  { name: 'Sunrun — What happens if I move?', url: SRC.move, supports: 'Transfer steps when selling a home with a Sunrun agreement', checked },
  { name: 'CourtListener — federal dockets naming Vivint Solar entities, California districts', url: SRC.cl, supports: 'Dockets filed 2014 to 2021 in the Central, Southern, Northern and Eastern Districts of California', checked },
  { name: 'CourtListener — Southern California Edison Co. v. Vivint Solar, Inc., C.D. Cal. No. 2:17-cv-08388', url: SRC.sce, supports: 'Trademark case filed November 16, 2017; terminated April 6, 2018', checked },
  { name: 'CourtListener — Dekker v. Vivint Solar, Inc., N.D. Cal. No. 3:19-cv-07918', url: SRC.dekker, supports: 'Contract case filed December 3, 2019; terminated August 23, 2023', checked },
];

const DOCKETS: { name: string; court: string; filed: string; nature: string; href?: string }[] = [
  { name: 'Southern California Edison Co. v. Vivint Solar, Inc.', court: 'C.D. Cal.', filed: 'Nov. 16, 2017 (closed Apr. 6, 2018)', nature: 'Trademark', href: SRC.sce },
  { name: 'Aguirre v. Vivint Solar Developer, LLC', court: 'E.D. Cal.', filed: 'Sept. 4, 2017 (closed Aug. 23, 2018)', nature: 'Other statutory action', href: SRC.aguirre },
  { name: 'Gailani v. Vivint Solar Inc.', court: 'S.D. Cal.', filed: 'Feb. 23, 2017 (closed Apr. 3, 2017)', nature: 'Consumer credit', href: SRC.gailani },
  { name: 'Dekker v. Vivint Solar, Inc.', court: 'N.D. Cal.', filed: 'Dec. 3, 2019 (closed Aug. 23, 2023)', nature: 'Contract', href: SRC.dekker },
  { name: 'Gallo v. Vivint Solar, Inc.', court: 'C.D. Cal.', filed: 'Dec. 9, 2020 (closed July 30, 2021)', nature: 'Consumer credit', href: SRC.gallo },
];

const faqs = [
  {
    question: 'Is Vivint Solar still in business?',
    answer:
      'Not as a separate company. Sunrun completed its acquisition of Vivint Solar on October 8, 2020, and said Vivint Solar would be integrated into Sunrun. Legacy Vivint Solar systems and agreements are handled by Sunrun.',
  },
  {
    question: 'Who owns Vivint Solar now?',
    answer:
      'Sunrun, the Nasdaq-listed residential solar company. The deal was all-stock, at 0.55 Sunrun shares for each Vivint Solar share.',
  },
  {
    question: 'Is Vivint Solar the same company as Vivint home security?',
    answer:
      'No. Vivint Smart Home, the home security and smart home company, was acquired by NRG Energy on March 10, 2023. NRG’s announcement does not mention solar. Vivint Solar went to Sunrun in 2020.',
  },
  {
    question: 'Who do I call about my Vivint Solar system?',
    answer:
      'Sunrun. Ask for written confirmation of which Sunrun entity holds your agreement, where service and warranty claims go, and whether your original terms are unchanged.',
  },
  {
    question: 'What happens to my Vivint Solar agreement when I sell my house?',
    answer:
      'It has to be transferred to the buyer or paid off, through Sunrun’s transfer process. Sunrun describes a transfer portal, signatures from all parties and a soft credit check for the buyer. Start early in escrow.',
  },
  {
    question: 'Vivint Solar vs. Sunrun: which is better?',
    answer:
      'For a new system the question no longer applies: Vivint Solar does not sell under its own name, and legacy agreements are Sunrun’s. Compare Sunrun with other companies that list California instead.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function VivintSolarReview() {
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
              <span className='text-foreground font-medium'>Vivint Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Company Status Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Vivint Solar Reviews (2026): Now Part of Sunrun, and What Legacy Owners Can Do
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Vivint Solar no longer exists as a separate company. Sunrun completed an all-stock acquisition of
                Vivint Solar on October 8, 2020, and said it would fold the business into Sunrun. So a Vivint Solar
                review today is really a review of an agreement that Sunrun now administers, and the questions that
                matter are about service, billing and what happens when you sell the house.
              </p>
              <p className={p}>
                This page is for California homeowners who still have a Vivint Solar system on the roof, or who are
                buying a house that has one. It covers what the acquisition changed, the federal court record in
                California, and the steps that protect you. It is not a recommendation for or against Sunrun.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'Acquired by Sunrun', value: 'Oct. 8, 2020', note: 'All-stock, 0.55 Sunrun shares per share', source: { url: SRC.deal, date: checked } },
                    { label: 'Combined customers at closing', value: '500,000+', source: { url: SRC.deal, date: checked } },
                    { label: 'Vivint Smart Home (security)', value: 'NRG, 2023', note: 'A different company', source: { url: SRC.nrg, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Vivint Solar agreement review' />
              </div>

              <h2 className={h2}>What happened to Vivint Solar</h2>
              <p className={p}>
                Sunrun announced on October 8, 2020 that it had completed the acquisition after approval by
                regulators and by the stockholders of both companies. Each Vivint Solar share became 0.55 shares of
                Sunrun. Sunrun said the combined company served more than 500,000 customers, that Vivint Solar would
                “continue to operate as a Sunrun company for the immediate future,” and that it would be integrated
                into Sunrun over the following quarters.<Cite href={SRC.deal} date={checked} />
              </p>
              <p className={p}>
                For an owner, the point is continuity. Your system did not stop being covered by an agreement when
                the company changed hands; the agreement moved with the business. What can change is who answers the
                phone, how service is scheduled and where payments go, which is why it is worth asking Sunrun to
                confirm those details in writing.
              </p>

              <h2 className={h2}>Vivint Solar is not Vivint home security</h2>
              <p className={p}>
                The names cause real confusion. Vivint Smart Home, the home security and smart home company, is a
                different business. NRG Energy completed its acquisition of Vivint Smart Home on March 10, 2023, and
                NRG’s announcement does not mention solar.<Cite href={SRC.nrg} date={checked} /> If your question is
                about panels on the roof, Sunrun is the company to contact. If it is about cameras or an alarm panel,
                it is Vivint under NRG.
              </p>

              <h2 className={h2}>Vivint Solar reviews in California: the court record</h2>
              <p className={p}>
                A party-name search of federal dockets in California’s four districts returned 18 results naming
                Vivint entities, filed between 2014 and 2021; two of them, from 2014, name Vivint, Inc. or a security
                company rather than Vivint Solar.<Cite href={SRC.cl} date={checked} /> The Vivint Solar cases are coded across several
                categories: consumer credit, contract, employment, other statutory actions, a group of 2020
                securities suits filed while the Sunrun merger was pending, and one trademark case brought by
                Southern California Edison. A few examples, with dates as the dockets record them:
              </p>
              <div className='not-prose overflow-x-auto rounded-xl border border-border mb-6'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Case</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Court</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Filed</th>
                      <th className='text-left font-semibold text-foreground px-4 py-3'>Nature of suit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DOCKETS.map((d) => (
                      <tr key={d.name} className='border-t border-border align-top'>
                        <td className='px-4 py-3'>
                          {d.href ? (
                            <a href={d.href} target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>
                              <em>{d.name}</em>
                            </a>
                          ) : (
                            <em>{d.name}</em>
                          )}
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>{d.court}</td>
                        <td className='px-4 py-3 text-foreground/80'>{d.filed}</td>
                        <td className='px-4 py-3 text-foreground/80'>{d.nature}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={p}>
                Read these with care. A filed complaint is an allegation, a closed docket does not say who
                prevailed, and a nature-of-suit code is a filing category, not a description of what happened. The
                record is useful mainly as history. Complaints about service on a legacy system now go to Sunrun,
                whose Better Business Bureau profile listed 4,017 complaints in three years when we checked it on
                September 23, 2026, most of them service or repair issues.
                <Cite href={SRC.bbbSunrun} date={checked} /> Our{' '}
                <Link href='/solar-installers/sunrun-review' className={a}>Sunrun review</Link> covers that file in
                detail.
              </p>

              <h2 className={h2}>If you have a Vivint Solar agreement: what to do</h2>
              <ol className='list-decimal pl-6 space-y-3 text-foreground/80 mb-6'>
                <li>
                  <strong>Find your signed agreement.</strong> The escalator, term, buyout terms and transfer rules
                  are in it. If you cannot find it, ask Sunrun for a copy in writing.
                </li>
                <li>
                  <strong>Confirm who holds it now.</strong> Ask which Sunrun entity is the counterparty, where
                  service and warranty claims go, and whether any of your original terms have changed.
                </li>
                <li>
                  <strong>Check this year’s payment.</strong> If your agreement has an annual escalator, the payment
                  today is higher than the first-year figure. Our explainer on{' '}
                  <Link href='/solar-problems/solar-escalator-clause-explained' className={a}>how escalators compound</Link>{' '}
                  shows the arithmetic.
                </li>
                <li>
                  <strong>Know your exit before you need it.</strong> The{' '}
                  <Link href='/solar-installers/sunrun-buyout-cost' className={a}>Sunrun buyout page</Link> explains how
                  a payoff is priced, and{' '}
                  <Link href='/solar-installers/sunrun-lease-vs-ppa' className={a}>Sunrun lease vs. PPA</Link> explains
                  which kind of agreement you are likely to hold.
                </li>
                <li>
                  <strong>Plan the home sale early.</strong> Sunrun’s transfer process uses an online portal,
                  signatures from all parties and a soft credit check for the buyer.
                  <Cite href={SRC.move} date={checked} /> Start it as soon as you are in escrow, and read{' '}
                  <Link href='/blog/what-happens-to-solar-lease-when-i-sell-california' className={a}>
                    selling a California home with a solar lease
                  </Link>
                  .
                </li>
              </ol>

              <h2 className={h2}>Buying a house with a Vivint Solar system</h2>
              <p className={p}>
                If the listing says the panels are Vivint Solar, find out whether the seller owns them or has a lease
                or PPA. If it is a lease or PPA, ask for the current monthly payment with the escalator applied, the
                years left, and whether any notice was filed on title for the system. You are agreeing to pay a
                company for years, so read the agreement before you remove your contingencies. Our page on{' '}
                <Link href='/solar-problems/ucc-1-lien-solar-california' className={a}>solar lien filings</Link>{' '}
                explains what a filing on title means.
              </p>

              <h2 className={h2}>Vivint Solar vs. Sunrun</h2>
              <p className={p}>
                Comparisons of Vivint Solar and Sunrun are left over from when both sold solar. Since October 2020
                they have been one company. If you are shopping for a new system, compare Sunrun with other companies
                that list California, using the{' '}
                <Link href='/solar-installers' className={a}>California solar company reviews</Link>, and compare
                ownership options with the{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>
                  lease, PPA, loan and cash comparison
                </Link>
                . If you are adding a battery to an older system, see{' '}
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
              <SolarInquiry topic='Vivint Solar agreement review' />
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
        <VerifyInstallerBox installerName='Sunrun' licenses={SUNRUN_LICENSES} bbbProfileUrl='https://www.bbb.org/us/ca/san-francisco/profile/solar-energy-equipment-dealers/sunrun-inc-1116-312886' />
      </div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
