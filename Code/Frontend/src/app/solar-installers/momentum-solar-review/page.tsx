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

const path = '/solar-installers/momentum-solar-review';
const checked = '2026-09-23';

const metaTitle = 'Momentum Solar Reviews (2026): Is It Legit in California?';
const metaDescription =
  'Momentum Solar is a real company, but its site lists 7 states and not California (Sept. 23, 2026). Its BBB complaint record and federal court dockets.';

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
  headline: 'Momentum Solar Reviews (2026): Is It Legit, and Does It Serve California?',
  description: metaDescription,
  datePublished: '2026-04-22',
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
  site: 'https://www.momentumsolar.com/',
  bbb: 'https://www.bbb.org/us/nj/south-plainfield/profile/solar-energy-design/momentum-solar-0221-90134444',
  bbbComplaints: 'https://www.bbb.org/us/nj/south-plainfield/profile/solar-energy-design/momentum-solar-0221-90134444/complaints',
  cl: 'https://www.courtlistener.com/?type=r&party_name=%22Momentum%20Solar%22',
  amini: 'https://www.courtlistener.com/docket/55230567/amini-v-pro-custom-solar-llc-dba-momentum-solar/',
  gordon: 'https://www.courtlistener.com/docket/68446637/gordon-v-momentum-solar-llc/',
  velasco: 'https://www.courtlistener.com/docket/69512847/vianca-velasco-v-momentum-solar-llc/',
  oguekwe: 'https://www.courtlistener.com/docket/72055112/oguekwe-v-momentum-solar-llc/',
  murphy: 'https://www.courtlistener.com/docket/71177446/murphy-v-momentum-solar-llc/',
  whitten: 'https://www.courtlistener.com/docket/69330690/whitten-v-momentum-solar-llc/',
  adt: 'https://investor.adt.com/News--Events/news/news-details/2024/ADT-Provides-Solar-Business-Update-and-Advances-Capital-Allocation-Strategy/default.aspx',
  ftc: 'https://consumer.ftc.gov/articles/multi-level-marketing-businesses-pyramid-schemes',
  careers: 'https://www.momentumsolar.com/careers/sales/',
  clPyramid: 'https://www.courtlistener.com/?type=r&q=%28%22Momentum%20Solar%22%20OR%20%22Pro%20Custom%20Solar%22%29%20AND%20pyramid',
  munoz: 'https://www.courtlistener.com/docket/67599227/munoz-v-pro-custom-solar/',
  tapia: 'https://www.courtlistener.com/docket/18422447/tapia-v-pro-custom-solar-llc/',
  greer: 'https://www.courtlistener.com/docket/17140910/greer-v-pro-custom-solar-llc/',
  teslaLic: 'https://www.tesla.com/support/energy/more/legal/contractor-licenses',
  teslaDesign: 'https://www.tesla.com/energy/design',
};

const sources: ReviewSource[] = [
  { name: 'Momentum Solar — homepage', url: SRC.site, supports: 'Service states listed as CT, FL, MA, NV, NJ, NY and TX; no panel, inverter or battery brand named', checked },
  { name: 'Better Business Bureau — Momentum Solar (South Plainfield, NJ) profile', url: SRC.bbb, supports: 'A+ rating; accredited since March 24, 2015; business started November 1, 2009', checked },
  { name: 'Better Business Bureau — Momentum Solar complaints', url: SRC.bbbComplaints, supports: '561 complaints in three years; 184 closed in 12 months; complaint types', checked },
  { name: 'CourtListener — federal dockets, party name “Momentum Solar”', url: SRC.cl, supports: '23 dockets returned; natures of suit and dates listed on this page', checked },
  { name: 'CourtListener — Amini v. Pro Custom Solar LLC dba Momentum Solar, C.D. Cal. No. 8:17-cv-02243', url: SRC.amini, supports: 'Filed December 26, 2017; terminated January 3, 2018', checked },
  { name: 'CourtListener — Gordon v. Momentum Solar, LLC, S.D. Cal. No. 3:24-cv-00693', url: SRC.gordon, supports: 'Filed April 17, 2024', checked },
  { name: 'ADT — Solar business update (January 24, 2024)', url: SRC.adt, supports: 'ADT will exit its residential solar business', checked },
  { name: 'CourtListener — Velasco v. Momentum Solar, LLC, C.D. Cal. No. 2:25-cv-00016', url: SRC.velasco, supports: 'Filed January 2, 2025; terminated February 25, 2025', checked },
  { name: 'Federal Trade Commission — Multi-level marketing businesses and pyramid schemes (July 2022)', url: SRC.ftc, supports: 'Pyramid scheme income based mostly on recruiting; a legitimate business pays on sales to retail customers', checked },
  { name: 'Momentum Solar — Careers: Sales', url: SRC.careers, supports: 'Base pay plus uncapped commissions and bonuses; meets homeowners 1–3 times a day, 5 days a week; company leads plus referrals; full benefits (medical, dental, 401K); two-week instructor-led training; no recruiting-based pay mentioned', checked },
  { name: 'CourtListener — RECAP search, “Momentum Solar” or “Pro Custom Solar” with “pyramid”', url: SRC.clPyramid, supports: 'No docket alleging a pyramid scheme; the one opinion hit cites an unrelated case named In re Pyramid Co. of Burlington', checked },
  { name: 'CourtListener — Munoz v. Pro Custom Solar, E.D.N.Y. No. 1:23-cv-05291', url: SRC.munoz, supports: 'Fair Labor Standards Act; filed July 11, 2023; terminated September 26, 2024', checked },
  { name: 'CourtListener — Tapia v. Pro Custom Solar LLC, E.D.N.Y. No. 2:20-cv-04180', url: SRC.tapia, supports: 'Fair Labor Standards Act; filed September 8, 2020; terminated April 1, 2021', checked },
  { name: 'CourtListener — Greer v. Pro Custom Solar LLC, M.D. Fla. No. 6:20-cv-00800', url: SRC.greer, supports: 'Fair Labor Standards Act; filed May 8, 2020; terminated January 14, 2021', checked },
  { name: 'Tesla Support — Contractor licenses', url: SRC.teslaLic, supports: 'California: CSLB 888104 and CSLB 1127593', checked },
  { name: 'Tesla — Design your Solar + Powerwall system', url: SRC.teslaDesign, supports: 'Quotes by address and average bill', checked },
];

const faqs = [
  {
    question: 'Is Momentum Solar legit?',
    answer:
      'It is a real, operating company. The Better Business Bureau lists Momentum Solar in South Plainfield, New Jersey, as accredited since 2015 with an A+ rating, and federal court captions name the legal entity as Pro Custom Solar LLC doing business as Momentum Solar. Being a real company is not the same as being the right installer for you: its BBB file shows 561 complaints in three years, and its own site does not list California as a service state.',
  },
  {
    question: 'Does Momentum Solar install in California?',
    answer:
      'Its homepage, checked September 23, 2026, lists Connecticut, Florida, Massachusetts, Nevada, New Jersey, New York and Texas. California is not on the list. Three federal cases naming the company were filed in California courts between 2017 and 2025, but a lawsuit filed in a state does not show the company installs there today. Ask for your ZIP code to be confirmed in writing.',
  },
  {
    question: 'What are the most common Momentum Solar complaints?',
    answer:
      'On the BBB profile we checked, 254 of 561 complaints in three years were service or repair issues, 113 were sales and advertising issues, 71 product issues and 64 order issues. Recent complaints describe long waits for repair visits, systems left offline, damage claims and incomplete paperwork or inspections.',
  },
  {
    question: 'Is Momentum Solar a scam?',
    answer:
      'We found no primary source that describes it as one. The federal dockets naming the company include claims under the Telephone Consumer Protection Act, the law on marketing calls and texts, along with employment and contract cases. Those are allegations until a court decides them. Judge the offer on its contract, and verify the license before you sign.',
  },
  {
    question: 'Is Momentum Solar a pyramid scheme?',
    answer:
      'No court record we found says so. The FTC describes a pyramid scheme as one where pay comes mostly from recruiting people rather than from selling to customers. Momentum’s careers page describes its sales jobs as base pay plus commissions and bonuses on sales to homeowners, with medical, dental and 401K benefits, and mentions no pay for recruiting. A CourtListener search on September 23, 2026 returned no case alleging a pyramid scheme; the lawsuits naming the company include marketing-call and wage-and-hour cases.',
  },
  {
    question: 'What equipment and warranty does Momentum Solar offer?',
    answer:
      'Its homepage mentions battery storage but names no panel, inverter or battery brand and does not state warranty terms. Ask for the make and model of each component and the workmanship warranty, in years and in writing, as part of the contract.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function MomentumSolarReview() {
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
              <span className='text-foreground font-medium'>Momentum Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Momentum Solar Reviews (2026): Is It Legit, and Does It Serve California?
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Updated September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>11 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Momentum Solar is a legitimate, operating company, but it probably is not an option for a
                California home. Its own homepage, checked on September 23, 2026, lists seven service states
                and California is not one of them. Its Better Business Bureau file shows an A+ rating alongside
                561 complaints in three years, most of them about service and repairs.
              </p>
              <p className={p}>
                This review sets out what the company publishes about itself, what the BBB complaint file and
                the federal court record show, and what a California homeowner should check if a Momentum
                representative calls. It does not rate or rank the company.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'Service states on its site', value: '7', note: 'CT, FL, MA, NV, NJ, NY, TX; not California', source: { url: SRC.site, date: checked } },
                    { label: 'BBB complaints, last 3 years', value: '561', note: '184 closed in the last 12 months', source: { url: SRC.bbbComplaints, date: checked } },
                    { label: 'BBB rating', value: 'A+', note: 'Accredited since March 24, 2015', source: { url: SRC.bbb, date: checked } },
                    { label: 'Business started (BBB)', value: 'Nov. 1, 2009', source: { url: SRC.bbb, date: checked } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Momentum Solar review and quote comparison' />
              </div>

              <h2 className={h2}>Is Momentum Solar legit?</h2>
              <p className={p}>
                Yes, in the sense that matters first: it is a real business with a public track record. The
                BBB profile for Momentum Solar in South Plainfield, New Jersey, shows an A+ rating,
                accreditation since March 24, 2015 and a business start date of November 1, 2009.
                <Cite href={SRC.bbb} date={checked} /> Federal court captions name the company’s legal entity
                as Pro Custom Solar LLC, doing business as Momentum Solar, which is the name to look for on a
                contract.<Cite href={SRC.amini} date={checked} />
              </p>
              <p className={p}>
                “Legit” is a lower bar than “good fit.” The rest of this page covers the two things that
                decide fit for a California reader: whether the company works here at all, and what its
                customers most often complain about.
              </p>

              <h2 className={h2}>Does Momentum Solar serve California?</h2>
              <p className={p}>
                Momentum’s homepage names its service states as “CT, FL, MA, NV, NJ, NY, and TX.” California
                does not appear anywhere on that page.<Cite href={SRC.site} date={checked} /> A list on a
                marketing page is not a legal statement, so the safest reading is simple: confirm your ZIP code
                with the company in writing before you spend time on a proposal.
              </p>
              <p className={p}>
                The court record shows some California connection in the past. Three federal cases naming the
                company were filed in California courts: <em>Amini v. Pro Custom Solar LLC</em> in the Central
                District (No. 8:17-cv-02243, filed December 26, 2017, closed January 3, 2018),{' '}
                <em>Gordon v. Momentum Solar, LLC</em> in the Southern District (No. 3:24-cv-00693, filed April
                17, 2024) and <em>Velasco v. Momentum Solar, LLC</em> in the Central District (No. 2:25-cv-00016,
                filed January 2, 2025, closed February 25, 2025).
                <Cite href={SRC.gordon} date={checked} />
                <Cite href={SRC.velasco} date={checked} /> A case filed in California can follow a call or text
                received here; it does not show the company installs here today.
              </p>
              <p className={p}>
                If you were searching for a different company with a similar name, see our{' '}
                <Link href='/solar-installers/option-one-solar-review' className={a}>Option One Solar review</Link>{' '}
                for the Inland Empire installer.
              </p>

              <h2 className={h2}>Momentum Solar complaints: what the BBB file shows</h2>
              <p className={p}>
                On September 23, 2026, the BBB listed 561 complaints about Momentum Solar in the last three years
                and 184 closed in the last 12 months. By type: 254 service or repair issues, 113 sales and
                advertising issues, 71 product issues, 64 order issues, 26 billing issues, 26 customer service
                issues and 7 delivery issues.<Cite href={SRC.bbbComplaints} date={checked} />
              </p>
              <p className={p}>
                The recent complaints we read share a pattern. Customers describe waiting weeks or months for a
                technician after a system stopped producing, paying higher utility bills while it was offline,
                damage they attribute to the installation, and projects left with unfinished inspections or
                missing labels. A BBB complaint is one customer’s account plus the company’s response, not a
                finding, and the count is not adjusted for how many systems the company installs. Use the
                themes as questions: how fast is a repair visit scheduled in your area, who pays for roof damage
                traced to the install, and what happens to your payments while the system is down.
              </p>

              <h2 className={h2}>Is Momentum Solar a scam?</h2>
              <p className={p}>
                We found no primary source that calls it one. What the federal record does show is a run of
                lawsuits. A party-name search on CourtListener returned 23 federal dockets; some list the company
                in roles other than defendant, and not every entry is about solar sales.
                <Cite href={SRC.cl} date={checked} /> Several are coded under the Telephone Consumer Protection
                Act, the federal law on marketing calls and texts, including <em>Oguekwe v. Momentum Solar</em>{' '}
                (D.N.J., filed December 18, 2025) and <em>Murphy v. Momentum Solar</em> (S.D. Fla., filed August
                22, 2025, closed May 14, 2026).
                <Cite href={SRC.oguekwe} date={checked} />
                <Cite href={SRC.murphy} date={checked} /> A related group of <em>Whitten v. Momentum Solar</em>{' '}
                matters appears before the Judicial Panel on Multidistrict Litigation.
                <Cite href={SRC.whitten} date={checked} /> Others are employment and contract cases, and two new
                dockets were filed in April 2026.
              </p>
              <p className={p}>
                A filed complaint is an allegation, and a closed docket does not say who won. The practical lesson
                does not depend on the outcome: if a solar company reaches you through a call or text you did not
                ask for, verify it more carefully, not less. Our guide to{' '}
                <Link href='/solar-problems/solar-sales-tactics-california' className={a}>solar sales tactics in California</Link>{' '}
                lists the pressure points to watch for.
              </p>

              <h2 className={h2}>Is Momentum Solar a pyramid scheme?</h2>
              <p className={p}>
                No court case or company record we checked describes it as one. The Federal Trade Commission draws the line
                by where the money comes from: in a pyramid scheme, “your income would be based mostly on how many people
                you recruit, not how much product you sell,” while a legitimate business pays “based on your sales to retail
                customers.”<Cite href={SRC.ftc} date={checked} />
              </p>
              <p className={p}>
                Momentum’s own careers page describes its sales jobs as base pay plus uncapped commissions and bonuses,
                meeting homeowners one to three times a day, five days a week, working company leads as well as referrals,
                with full benefits (medical, dental and 401K) and two weeks of instructor-led training. It says nothing
                about pay for recruiting other salespeople.<Cite href={SRC.careers} date={checked} /> That is the company’s
                account of the job, not an audit of how any representative is actually paid.
              </p>
              <p className={p}>
                A CourtListener search on September 23, 2026 for “Momentum Solar” or its legal name, Pro Custom Solar,
                together with “pyramid” returned no case making that claim; the only opinion it found used the word as part
                of an unrelated case name.<Cite href={SRC.clPyramid} date={checked} /> The dockets that do name the company
                include the marketing-call cases above and wage-and-hour cases under the Fair Labor Standards Act, such as{' '}
                <em>Munoz v. Pro Custom Solar</em> (E.D.N.Y., filed July 11, 2023, closed September 26, 2024),{' '}
                <em>Tapia v. Pro Custom Solar LLC</em> (E.D.N.Y., filed September 8, 2020) and{' '}
                <em>Greer v. Pro Custom Solar LLC</em> (M.D. Fla., filed May 8, 2020).
                <Cite href={SRC.munoz} date={checked} />
                <Cite href={SRC.tapia} date={checked} />
                <Cite href={SRC.greer} date={checked} /> The BBB file counts 113 sales and advertising complaints among the
                561 in three years.<Cite href={SRC.bbbComplaints} date={checked} /> None of these is a finding against the
                company. They tell you what to ask a representative: who employs them, how the price was set, and whether
                anything they said is in the contract. Our guide to{' '}
                <Link href='/solar-problems/solar-door-to-door-sales-california' className={a}>door-to-door solar sales in California</Link>{' '}
                covers your rights when a salesperson comes to the house.
              </p>

              <h2 className={h2}>Equipment, warranty and financing</h2>
              <p className={p}>
                Momentum’s homepage refers to battery storage and financing but names no panel, inverter or
                battery brand and states no warranty length.<Cite href={SRC.site} date={checked} /> That means the
                proposal has to supply all of it. Ask for the module, inverter and battery make and model, the
                workmanship warranty in years, and the financing agreement as a separate document from the
                installation contract. If a lease or PPA is offered, compare it on the escalator, term and buyout
                terms using the{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>
                  cash, loan, lease and PPA comparison
                </Link>
                .
              </p>

              <h2 className={h2}>Tesla Solar vs Momentum Solar in California</h2>
              <p className={p}>
                For a California home this is not a like-for-like choice. Momentum’s homepage lists seven service states
                and California is not one of them,<Cite href={SRC.site} date={checked} /> while Tesla lists two California
                contractor licenses, CSLB 888104 and 1127593, and quotes by address through its online design tool.
                <Cite href={SRC.teslaLic} date={checked} />
                <Cite href={SRC.teslaDesign} date={checked} /> If you were weighing the two, put Tesla’s written quote beside
                one from another company that lists California. The{' '}
                <Link href='/solar-installers/tesla-solar-review' className={a}>Tesla Solar review</Link> covers its panels,
                lease terms and service, and{' '}
                <Link href='/solar-installers/sunrun-vs-tesla-solar' className={a}>Sunrun vs Tesla Solar</Link> compares it
                with a company that does sell here.
              </p>

              <h2 className={h2}>Momentum Solar compared with ADT Solar and Trinity Solar</h2>
              <p className={p}>
                Searches often pair Momentum with two other East Coast names. ADT announced on January 24, 2024
                that it was leaving residential solar,<Cite href={SRC.adt} date={checked} /> and neither Momentum nor Trinity lists California as a service
                state. See{' '}
                <Link href='/solar-installers/adt-solar-vs-momentum-solar' className={a}>ADT Solar vs. Momentum Solar</Link>{' '}
                and{' '}
                <Link href='/solar-installers/momentum-solar-vs-trinity-solar' className={a}>Momentum Solar vs. Trinity Solar</Link>{' '}
                for the side-by-side records, and the{' '}
                <Link href='/solar-installers/sunrun-review' className={a}>Sunrun review</Link> for a company that does
                list California.
              </p>

              <h2 className={h2}>CSLB license: attempted, unverified</h2>
              <p className={p}>
                This page cites CSLB license <strong>#997872</strong> in the verification box below. CSLB’s online
                lookup was rate-limited on every attempt and returned no rendered record (
                <a href='https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx?LicNum=997872' target='_blank' rel='noopener noreferrer' className={a}>cslb.ca.gov</a>,
                attempted September 22, 2026), and no license page on momentumsolar.com confirms the number. Given
                the open question about California service, check it yourself and confirm that the entity name on
                the license matches the one on your contract. Our{' '}
                <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={a}>
                  contractor-verification walkthrough
                </Link>{' '}
                shows where to look.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-2'><strong>Questions to ask before you rely on any quote:</strong></p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Do you install in my ZIP code in California today, confirmed in writing?</li>
                <li>What legal entity signs my contract, and which California license number belongs to it?</li>
                <li>If you do not serve my area, which licensed California contractor would do the work?</li>
                <li>What are the panel, inverter and battery models, and the workmanship warranty in years?</li>
              </ul>

              <div className='not-prose'>
                <FaqJsonLd items={faqs} />
                <FaqBlock items={faqs} schema={false} />
              </div>

              <div className='not-prose'>
                <SourceList sources={sources} />
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Quotes Before You Sign</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>
                California Rate Relief is a private referral service. Submit one short form and it may forward your inquiry to independent California providers, subject to availability, so you can compare pricing, equipment and warranty terms side by side. No installer is named as a partner and no provider is endorsed.
              </p>
              <div className='flex justify-center'>
                <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic='Momentum Solar review and quote comparison' />
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
        <VerifyInstallerBox installerName='Momentum' cslbLicenseNumber='997872' bbbProfileUrl='https://www.bbb.org/us/nj/south-plainfield/profile/solar-energy-design/momentum-solar-0221-90134444' />
      </div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
