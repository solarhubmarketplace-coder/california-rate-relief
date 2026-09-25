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

// 2026-09-23 (Tier 2): upgraded for "is sunlux legit". The old H1 called
// Sunlux "one of SoCal's higher-rated regional installers" while the body said
// no rating had been checked; it now reports the BBB file and the federal
// docket search, both dated. Removed as unsourced: the county coverage list,
// Panasonic / SolarEdge / LG equipment, the "3 to 6 months" timeline, the
// "2-4 week" warranty response, and a complaint list with no source.
// 2026-09-24 (plan item 2.7): the numeric "Our take" score was removed; no
// published scoring method backs it. The written Best for / Think twice
// if lines stay.
// No Review/Rating JSON-LD: Google's review-snippet rules require ratings for
// a business to come from users, and this site collects none
// (developers.google.com/search/docs/appearance/structured-data/review-snippet).

const path = '/solar-installers/sunlux-solar-review';
const checked = '2026-09-23';
const sep22 = '2026-09-22';

const metaTitle = 'Sunlux Solar Reviews (2026): Is Sunlux Legit? BBB, License';
const metaDescription =
  'Is Sunlux legit? Sunlux of Corona has a BBB A+ with 7 complaints in 3 years and no federal court cases (Sept. 23, 2026). What to check before you sign.';

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
  headline: 'Sunlux Solar Reviews (2026): Is Sunlux Legit?',
  description: metaDescription,
  datePublished: '2026-04-24',
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
  bbb: 'https://www.bbb.org/us/ca/ontario/profile/solar-energy-design/sunlux-energy-1066-89087902',
  bbbComplaints: 'https://www.bbb.org/us/ca/ontario/profile/solar-energy-design/sunlux-energy-1066-89087902/complaints',
  cl: 'https://www.courtlistener.com/?type=r&party_name=Sunlux',
  site: 'https://sunlux.com/',
  warranty: 'https://sunlux.com/solar-warranty/',
  cslb: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx',
  irs: 'https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb',
};

const sources: ReviewSource[] = [
  { name: 'Better Business Bureau — Sunlux (Corona, CA) profile', url: SRC.bbb, supports: 'A+ rating; not accredited; business started January 29, 2015; corporation; 2410 Wardlow Rd, Corona', checked },
  { name: 'Better Business Bureau — Sunlux complaints', url: SRC.bbbComplaints, supports: '7 complaints in three years (4 service or repair, 3 order); 6 answered, 1 resolved; the three most recent complaints, August 2024 to February 2025', checked },
  { name: 'CourtListener — federal dockets, party name “Sunlux”', url: SRC.cl, supports: 'No dockets returned', checked },
  { name: 'Sunlux — homepage', url: SRC.site, supports: 'Southern California and Central Texas; more than 7,000 installations claimed; Tesla Powerwall 3, EV charging and electrical work; financing and ownership options; testimonial saying no third-party installers', checked },
  { name: 'Sunlux — Solar warranty', url: SRC.warranty, supports: '“Every hardware component — including the solar panels, inverter and racking — is completely covered for 25 years”; 24/7 monitoring; tech support line', checked: sep22 },
  { name: 'CSLB — Check a license or HIS registration', url: SRC.cslb, supports: 'Where to search a contractor by name or license number', checked },
  { name: 'IRS — FAQs on Public Law 119-21 changes to 25D', url: SRC.irs, supports: 'No residential clean energy credit for expenditures made after December 31, 2025', checked },
];

const faqs = [
  {
    question: 'Is Sunlux legit?',
    answer:
      'It is a real, operating installer. The Better Business Bureau lists Sunlux in Corona, California as a corporation in business since January 29, 2015, with an A+ rating and 7 complaints in three years, and a search of federal court dockets on September 23, 2026 returned no cases naming it. That makes it a legitimate business; whether it is the right one for you depends on its license, the contract and how its service works in your area.',
  },
  {
    question: 'What do Sunlux complaints say?',
    answer:
      'Its BBB file had 7 complaints in three years: 4 service or repair issues and 3 order issues, with 6 answered and 1 resolved. The three most recent, from August 2024 to February 2025, describe a two-month wait for an inverter replacement, a production-guarantee payment the customer said was six months late, and a system that the customer said underproduced for over a year.',
  },
  {
    question: 'Is Sunlux Energy Inc. the same as Sunlux solar?',
    answer:
      'The company’s site refers to itself as Sunlux and Sunlux Energy, and the BBB lists the business as Sunlux, a corporation at 2410 Wardlow Rd in Corona. Before you sign, match the exact business name on your contract to a license in the CSLB lookup.',
  },
  {
    question: 'Where does Sunlux work?',
    answer:
      'Its homepage says it serves Southern California and Central Texas and mentions working with Southern California Edison and SDG&E customers. Confirm your ZIP code on the first call.',
  },
  {
    question: 'Does Sunlux offer leases or only purchases?',
    answer:
      'Its homepage mentions ownership and financing options arranged with third-party partners, and testimonials describe both financed and cash purchases. No page we reached names a lender, rate or term. Ask whether your offer is a purchase, a loan or a lease, because that decides who owns the system and what happens when you sell.',
  },
  {
    question: 'What panels and batteries does Sunlux install?',
    answer:
      'Its site does not name a panel brand; it features the Tesla Powerwall 3 for batteries, plus EV charging and electrical work such as panel upgrades. Require the make and model of every component in the contract.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function SunluxReview() {
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
              <span className='text-foreground font-medium'>Sunlux Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Sunlux Solar Reviews (2026): Is Sunlux Legit?
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Updated September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-2 gap-6'>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p><p className='text-sm text-foreground font-medium mt-1'>Southern California buyers who want a regional installer with a published 25-year hardware warranty</p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p><p className='text-sm text-foreground font-medium mt-1'>You need fast warranty service: 4 of its 7 BBB complaints in three years were service or repair issues</p></div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Yes, Sunlux is a real, operating Southern California installer. The Better Business Bureau lists Sunlux
                in Corona as a corporation in business since January 29, 2015, with an A+ rating and 7 complaints in three
                years; it is not BBB accredited. A search of federal court dockets on September 23, 2026 returned no cases
                naming it. Legit is the first test, not the last.
              </p>
              <p className={p}>
                This review sets out what the BBB file and the court record show, what Sunlux publishes about itself, and
                what to confirm in writing before you sign. It does not rank Sunlux against other installers.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'BBB rating', value: 'A+', note: 'Not accredited; in business since Jan. 29, 2015', source: { url: SRC.bbb, date: checked } },
                    { label: 'BBB complaints, last 3 years', value: '7', note: '4 service or repair, 3 order', source: { url: SRC.bbbComplaints, date: checked } },
                    { label: 'Federal dockets naming Sunlux', value: '0', note: 'Party-name search, CourtListener', source: { url: SRC.cl, date: checked } },
                    { label: 'Hardware warranty', value: '25 years', note: 'Panels, inverter and racking, per Sunlux', source: { url: SRC.warranty, date: sep22 } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Sunlux Solar review and quote comparison' />
              </div>

              <h2 className={h2}>Is Sunlux legit? What the record shows</h2>
              <p className={p}>
                The BBB profile lists the business as Sunlux, a corporation at 2410 Wardlow Road in Corona, started on
                January 29, 2015, rated A+ and not BBB accredited. It shows no license number, and it reminds readers that
                the trade may require licensing, which is a prompt to check CSLB yourself.<Cite href={SRC.bbb} date={checked} />
              </p>
              <p className={p}>
                The complaint file is short. On September 23, 2026 it held 7 complaints in three years, 4 about service or
                repairs and 3 about orders, with 6 answered and 1 resolved, and none closed in the last 12 months. The three
                most recent describe a two-month wait for an inverter replacement after a system stopped reporting
                (February 2025), a production-guarantee payment the customer said was more than six months late, to which
                Sunlux replied that the check had been mailed (December 2024), and a system the customer said underproduced
                for over a year (August 2024).<Cite href={SRC.bbbComplaints} date={checked} /> Seven complaints is a small
                number, and the BBB does not adjust it for how many systems a company installs. The pattern, though, is
                consistent: every one is about what happens after the system is on the roof.
              </p>
              <p className={p}>
                A party-name search of federal court dockets on CourtListener returned no cases naming Sunlux.
                <Cite href={SRC.cl} date={checked} /> That search does not cover California state courts or arbitration, so it
                is a floor, not a clean bill.
              </p>

              <h2 className={h2}>What Sunlux says about itself</h2>
              <p className={p}>
                Sunlux’s homepage says it works in Southern California and Central Texas, claims more than 7,000
                installations across its executive team’s experience, and lists Tesla Powerwall 3 batteries, EV charging and
                electrical work such as panel upgrades and rewiring alongside solar. It mentions ownership and financing
                options arranged with third-party partners, and one customer testimonial on the page says the company uses
                no third-party installers.<Cite href={SRC.site} date={checked} /> Those are the company’s own statements and a
                customer’s, not independent findings. Ask who will be on your roof, and get it in the contract.
              </p>
              <p className={p}>
                People also search for “Sunlux Energy Inc.” The site uses both Sunlux and Sunlux Energy, and the BBB lists the
                business simply as Sunlux. What matters is the exact business name on your contract and the license
                behind it.
              </p>

              <h2 className={h2}>Warranty: the published terms</h2>
              <p className={p}>
                Sunlux’s warranty page states: “Every hardware component — including the solar panels, inverter and racking
                — is completely covered for 25 years,” plus 24/7 system monitoring and a tech support line.
                <Cite href={SRC.warranty} date={sep22} /> Not stated on the pages we reached: a numeric production guarantee,
                a roof or leak warranty, a battery-specific term, or which purchase types the 25-year coverage applies to.
                Given that every BBB complaint concerns service after installation, get the warranty document itself, not the
                marketing page, and ask for the repair response commitment in writing.
              </p>

              <h2 className={h2}>Financing and selling the home</h2>
              <p className={p}>
                No page we reached names a lender, a rate, a term or a lease menu. Ask directly whether your offer is a cash
                purchase, a loan or a lease, because that decides who owns the system, who can claim any tax credit and what
                happens at resale. There is no federal residential credit on a system installed in 2026; the IRS says the credit
                is not allowed for expenditures made after December 31, 2025.<Cite href={SRC.irs} date={checked} /> An owned system,
                paid in cash, conveys with the house like any other improvement. A loan may have to be paid off or assumed
                at closing, so ask the lender, and check whether it filed a UCC-1 notice. Our guide to{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>cash, loan, lease and PPA</Link>{' '}
                lays out the trade-offs, and{' '}
                <Link href='/solar-problems/ucc-1-lien-solar-california' className={a}>what a UCC-1 filing means</Link>{' '}
                covers the lien question.
              </p>

              <h2 className={h2}>CSLB license and questions to ask</h2>
              <p className={p}>
                No CSLB license number appears on Sunlux’s homepage or warranty page, and the BBB profile shows none. Search
                “Sunlux” at CSLB’s{' '}
                <a href={SRC.cslb} target='_blank' rel='noopener noreferrer' className={a}>license lookup</a> and confirm the
                business name matches your contract; our guide to{' '}
                <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={a}>verifying a California solar contractor</Link>{' '}
                walks through it.
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>What is the CSLB license number, and does the business name match the contract?</li>
                <li>Are you buying, financing or leasing, and if financing, what are the lender, rate, term and any UCC-1 filing?</li>
                <li>Is there a production guarantee, and what percentage is written into the contract?</li>
                <li>What is the written response time for a warranty repair, and who pays for lost production while you wait?</li>
                <li>Which panel, inverter and battery models are proposed, and does the 25-year coverage apply to each?</li>
              </ul>

              <h2 className={h2}>The same checks for any “is it legit” question</h2>
              <p className={p}>
                The steps above work for any installer: the BBB file and what the complaints are about, a federal docket
                search, the CSLB license under the exact contract name, and whether the company sells in California at all.
                We have run them for{' '}
                <Link href='/solar-installers/momentum-solar-review' className={a}>Momentum Solar</Link>,{' '}
                <Link href='/solar-installers/elevation-solar-review' className={a}>Elevation</Link>,{' '}
                <Link href='/solar-installers/trinity-solar-review' className={a}>Trinity Solar</Link>,{' '}
                <Link href='/solar-installers/palmetto-solar-review' className={a}>Palmetto and LightReach</Link>,{' '}
                <Link href='/solar-installers/solar-optimum-review' className={a}>Solar Optimum</Link> and{' '}
                <Link href='/solar-installers/la-solar-group-review' className={a}>LA Solar Group</Link>, and the{' '}
                <Link href='/solar-installers' className={a}>solar company reviews index</Link> explains how to read each record.
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
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Sunlux With Other Written Quotes</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.</p>
              <div className='flex justify-center'><Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic='Sunlux Solar review and quote comparison' />
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
        <VerifyInstallerBox installerName='Sunlux' bbbProfileUrl={SRC.bbb} />
      </div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
