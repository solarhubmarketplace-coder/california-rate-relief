import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar, AlertTriangle } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Cite, SourceList, type ReviewSource } from '@/components/reviews/ReviewParts';

// 2026-09-23 (Tier 2): upgraded for "lightreach solar reviews". The BBB file,
// which could not be read on September 18, now lists LightReach as an
// alternate name for Palmetto Solar, so the page reports its dated counts.
// Removed as unsourced: the footprint paragraph, the panel wattage and brand
// claims, the "6 to 12+ months" timeline, complaint themes attributed to
// Reddit, a 25-year warranty claim and a paid-monitoring anecdote.
// The Energy Plan, transfer and license paragraphs keep their September 18
// and 22 checks, which are dated in the sources list.

const path = '/solar-installers/palmetto-solar-review';
const checked = '2026-09-23';
const sep22 = '2026-09-22';

const metaTitle = 'Palmetto Solar and LightReach Reviews (2026): BBB, Contract';
const metaDescription =
  "Palmetto Solar and LightReach reviews: its BBB file (340 complaints in 3 years), nine federal dockets, the 25-year Energy Plan and selling your home.";

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
  headline: 'Palmetto Solar and LightReach Reviews (2026): BBB File, Court Record and Contract',
  description: metaDescription,
  datePublished: '2026-04-24',
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
  bbb: 'https://www.bbb.org/us/nc/charlotte/profile/solar-energy-contractors/palmetto-solar-0473-92033792',
  bbbComplaints: 'https://www.bbb.org/us/nc/charlotte/profile/solar-energy-contractors/palmetto-solar-0473-92033792/complaints',
  cl: 'https://www.courtlistener.com/?type=r&party_name=%22Palmetto%20Solar%22',
  weisent: 'https://www.courtlistener.com/docket/74814421/weisent-v-palmetto-solar-llc-dba-lightreach/',
  edmonds: 'https://www.courtlistener.com/docket/70500361/edmonds-v-palmetto-solar-llc/',
  ewing: 'https://www.courtlistener.com/docket/67608954/ewing-v-palmetto-solar-llc/',
  bronstin: 'https://www.courtlistener.com/docket/70577511/bronstin-v-palmetto-solar-llc/',
  connor: 'https://www.courtlistener.com/docket/65743100/connor-v-palmetto-solar-llc/',
  strickland: 'https://www.courtlistener.com/docket/63893351/strickland-v-palmetto-solar-llc/',
  lightreach: 'https://palmetto.com/lightreach',
  lightreachPartners: 'https://palmetto.com/business/lightreach-solar',
  home: 'https://palmetto.com',
  planFaq: 'https://help.palmetto.com/en/articles/9948784-palmetto-energy-plan-faqs',
  guarantee: 'https://help.palmetto.com/en/articles/10250514-understanding-your-palmetto-solar-performance-guarantee',
  protect: 'https://palmetto.com/protect',
  selling: 'https://help.palmetto.com/en/articles/9948792-selling-your-home-we-can-help',
  cancel: 'https://help.palmetto.com/en/articles/11049616-how-to-cancel-or-transfer-your-solar-lease-agreement',
  license: 'https://palmetto.com/state-contractor-license-information',
};

const sources: ReviewSource[] = [
  { name: 'Better Business Bureau — Palmetto Solar (Charlotte, NC) profile', url: SRC.bbb, supports: 'Alternate names Palmetto Solar, LLC and LightReach; Not Rated while responding to previously closed complaints; not accredited; business started October 12, 2015', checked },
  { name: 'Better Business Bureau — Palmetto Solar complaints', url: SRC.bbbComplaints, supports: '340 complaints in three years; 195 closed in 12 months; 148 service or repair, 70 order, 53 sales and advertising, 24 billing, 23 customer service, 19 product; recent complaint themes', checked },
  { name: 'CourtListener — federal dockets, party name “Palmetto Solar”', url: SRC.cl, supports: 'Nine dockets; none is a bankruptcy case filed by Palmetto', checked },
  { name: 'CourtListener — Weisent v. Palmetto Solar LLC dba Lightreach, W.D. Tex. No. 4:26-cv-00070', url: SRC.weisent, supports: 'Filed September 18, 2026; names Palmetto Solar LLC doing business as LightReach', checked },
  { name: 'CourtListener — Edmonds v. Palmetto Solar, LLC, E.D. Cal. No. 1:25-cv-00703', url: SRC.edmonds, supports: 'Filed June 10, 2025; nature of suit Consumer Credit; open', checked },
  { name: 'CourtListener — Ewing v. Palmetto Solar, LLC, S.D. Cal. No. 3:23-cv-01292', url: SRC.ewing, supports: 'Filed July 14, 2023; terminated December 13, 2023', checked },
  { name: 'CourtListener — Strickland v. Palmetto Solar, LLC, M.D.N.C. No. 1:22-cv-00580', url: SRC.strickland, supports: 'Filed July 22, 2022; terminated February 21, 2023', checked },
  { name: 'Palmetto — LightReach (homeowner page)', url: SRC.lightreach, supports: '“We own the system and you get the power”; 25 years; no upfront cost; maintenance and performance guarantees; no escalator stated', checked },
  { name: 'Palmetto — LightReach for business', url: SRC.lightreachPartners, supports: 'LightReach is “a premiere partner network offering the Palmetto Energy Plan”; installers and dealers join as partners; 25-year agreement with the homeowner', checked },
  { name: 'Palmetto — homepage', url: SRC.home, supports: 'Palmetto Energy Plan structured as a lease or PPA depending on the state', checked: sep22 },
  { name: 'Palmetto Help Center — Palmetto Energy Plan FAQs', url: SRC.planFaq, supports: 'Annual Rate Escalator 0% to 3.5%; 25 years of service; 90% Performance and Production Guarantee', checked: sep22 },
  { name: 'Palmetto Help Center — Understanding your performance guarantee', url: SRC.guarantee, supports: 'Reviewed every 36 months; shortfall paid within 30 days; Energy Plan customers only', checked: sep22 },
  { name: 'Palmetto — Palmetto Protect', url: SRC.protect, supports: 'Parts, labor, remote issue detection and service network', checked: sep22 },
  { name: 'Palmetto Help Center — Selling your home', url: SRC.selling, supports: 'Transfer, prepay or fair-market-value buyout after five years; 60-day notice; responsibility until written transfer', checked: sep22 },
  { name: 'Palmetto Help Center — How to cancel or transfer your solar lease agreement', url: SRC.cancel, supports: '15-day prior written notice', checked: sep22 },
  { name: 'Palmetto — State contractor license information', url: SRC.license, supports: 'California license #1048921, Electrical Contractor', checked: sep22 },
];

const faqs = [
  {
    question: 'What are LightReach reviews like?',
    answer:
      'LightReach is Palmetto’s name for the partner network that sells its Palmetto Energy Plan, and the BBB files it under Palmetto Solar. On September 23, 2026 that file showed 340 complaints in three years and 195 closed in the last 12 months, with service or repair the largest category at 148. The BBB listed Palmetto as Not Rated while it responds to previously closed complaints. Read the newest complaints for your region, not just the count.',
  },
  {
    question: 'Is Palmetto Solar legit?',
    answer:
      'It is a real, operating company: the BBB shows it in business since October 12, 2015, and Palmetto publishes a California license, #1048921, for an Electrical Contractor. Being real is not the same as being a good fit. Check that license and the license of the partner installer on your contract at CSLB, and read the Energy Plan’s escalator, term and transfer clauses before you sign.',
  },
  {
    question: 'Is Palmetto Solar going out of business?',
    answer:
      'Nothing in the public record we checked says so. Its BBB profile is active, and none of the nine federal dockets naming Palmetto Solar on September 23, 2026 is a bankruptcy case filed by the company. A company’s finances can change quickly, so check the federal court record yourself if you are about to sign a 25-year agreement.',
  },
  {
    question: 'What is the LightReach Energy Plan?',
    answer:
      'A 25-year agreement in which Palmetto owns the system and you pay for the power or the equipment, structured as a lease or a power purchase agreement depending on your state. Palmetto’s help center says the annual rate escalator runs from 0% to 3.5% and is set in your agreement, and that every plan includes 25 years of service and a 90% production guarantee.',
  },
  {
    question: 'How does Palmetto Solar compare with Sunrun?',
    answer:
      'Both mainly sell agreements in which the company owns the system, so compare the contracts rather than the brands: the escalator, the term, the end-of-term options and what happens when you sell. Also compare who does the installation, since Palmetto sells through LightReach partner companies. Our Sunrun review covers Sunrun’s side.',
  },
  {
    question: 'What happens to my Palmetto plan if I sell my house?',
    answer:
      'You can transfer it to the buyer, who must pass Palmetto’s credit check; prepay the remaining balance; or buy the system at fair market value once the agreement has run at least five years. Palmetto’s own articles give two different notice periods, 60 days and 15 days, so get the deadline for your file in writing.',
  },
  {
    question: 'What CSLB license number does Palmetto use in California?',
    answer:
      'Palmetto’s license page lists #1048921, an Electrical Contractor license. Its current status was not checked at CSLB for this page. Verify it yourself, and verify the separate license of the partner company that will install your system.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'text-foreground/80 leading-relaxed mb-6';
const a = 'text-primary underline';

export default function PalmettoReview() {
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
              <span className='text-foreground font-medium'>Palmetto Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Palmetto Solar and LightReach Reviews (2026): BBB File, Court Record and Contract
              </h1>
              <LastReviewedStamp date={checked} variant='reviewed' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime={checked}>Updated September 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>10 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                LightReach reviews and Palmetto Solar reviews are about the same company. LightReach is Palmetto’s name for
                the partner network that sells its 25-year Palmetto Energy Plan, and the Better Business Bureau lists
                LightReach as an alternate name for Palmetto Solar. On September 23, 2026 that file showed 340 complaints in
                three years, most about service and repairs, and the BBB listed Palmetto as Not Rated.
              </p>
              <p className={p}>
                This page does not rate or rank installers. It sets out the BBB file, the federal court record, what
                Palmetto publishes about the Energy Plan and what happens when you sell the house, each dated to the day it
                was checked, and the contract terms to settle before signing.
              </p>

              <div className='not-prose'>
                <KeyFacts
                  sourcesHref='#sources'
                  facts={[
                    { label: 'BBB complaints, last 3 years', value: '340', note: '195 closed in the last 12 months', source: { url: SRC.bbbComplaints, date: checked } },
                    { label: 'Largest complaint type', value: '148', note: 'Service or repair issues', source: { url: SRC.bbbComplaints, date: checked } },
                    { label: 'Federal dockets naming Palmetto Solar', value: '9', note: 'Two in California; none a bankruptcy', source: { url: SRC.cl, date: checked } },
                    { label: 'Energy Plan escalator', value: '0%–3.5%', note: 'Per year, set in your agreement', source: { url: SRC.planFaq, date: sep22 } },
                  ]}
                />
              </div>

              <div className='not-prose my-8'>
                <HeroQuickCheck topic='Palmetto Solar review and quote comparison' />
              </div>

              <h2 className={h2}>LightReach reviews: what the BBB file shows</h2>
              <p className={p}>
                The BBB profile for Palmetto Solar in Charlotte, North Carolina lists Palmetto Solar, LLC and LightReach as
                alternate names, shows a business start date of October 12, 2015, and was “Not Rated” on September 23, 2026
                because the business was responding to previously closed complaints. It is not BBB accredited.
                <Cite href={SRC.bbb} date={checked} />
              </p>
              <p className={p}>
                The complaint page counted 340 complaints in three years and 195 closed in the last 12 months. By type: 148
                service or repair issues, 70 order issues, 53 sales and advertising issues, 24 billing issues, 23 customer
                service issues and 19 product issues.<Cite href={SRC.bbbComplaints} date={checked} /> The recent complaints
                describe systems left offline with service fees the owner did not expect, slow warranty repairs, trouble
                transferring an agreement during a home sale, disputes over buyout valuations, and electric bills higher than
                before the installation. A BBB complaint is one customer’s account and the company’s reply, not a
                finding, and the count is not adjusted for how many customers Palmetto has.
              </p>
              <p className={p}>
                Two things follow for a reader weighing a LightReach offer. Service is the biggest category, so ask who
                answers a service call after activation and how quickly a visit is scheduled in your area. And several
                complaints arise at the point of sale of the house, so read the transfer terms below before you sign, not
                when you list the home.
              </p>

              <h2 className={h2}>Who sells and installs a LightReach system</h2>
              <p className={p}>
                Palmetto’s business page describes LightReach as “a premiere partner network offering the Palmetto Energy
                Plan” and invites solar installers and dealers to join as partners.<Cite href={SRC.lightreachPartners} date={checked} />{' '}
                Its homeowner page says Palmetto owns the system and handles design, permits, installation, equipment and
                maintenance.<Cite href={SRC.lightreach} date={checked} /> In practice that means the company that knocked on
                your door or called you may be a partner, not Palmetto. Get the name and California license number of the
                company that will install your system, check it at CSLB, and search reviews under that name too. Neither
                Palmetto page names a panel, inverter or battery brand, so the proposal has to.
              </p>

              <h2 className={h2}>What the court record shows (checked September 23, 2026)</h2>
              <p className={p}>
                A party-name search of federal dockets returned nine naming Palmetto Solar.<Cite href={SRC.cl} date={checked} />{' '}
                None is a bankruptcy case filed by the company. The most recent and the California ones are:
              </p>
              <ul className='list-disc pl-6 space-y-3 text-foreground/80 mb-6'>
                <li><em><a href={SRC.weisent} target='_blank' rel='noopener noreferrer' className={a}>Weisent v. Palmetto Solar LLC dba Lightreach</a></em> — W.D. Tex., No. 4:26-cv-00070, filed September 18, 2026. The caption names the company as doing business as LightReach.</li>
                <li><em><a href={SRC.edmonds} target='_blank' rel='noopener noreferrer' className={a}>Edmonds v. Palmetto Solar, LLC</a></em> — E.D. Cal., No. 1:25-cv-00703, filed June 10, 2025. Nature of suit recorded as Consumer Credit; no termination date as of the search.</li>
                <li><em><a href={SRC.ewing} target='_blank' rel='noopener noreferrer' className={a}>Ewing v. Palmetto Solar, LLC</a></em> — S.D. Cal., No. 3:23-cv-01292, filed July 14, 2023; terminated December 13, 2023.</li>
                <li><em><a href={SRC.bronstin} target='_blank' rel='noopener noreferrer' className={a}>Bronstin v. Palmetto Solar, LLC</a></em> (W.D.N.C., filed June 18, 2025) and <em><a href={SRC.connor} target='_blank' rel='noopener noreferrer' className={a}>Connor v. Palmetto Solar LLC</a></em> (D.S.C., filed November 9, 2022; terminated March 28, 2024) are coded under the Telephone Consumer Protection Act, the federal law on marketing calls and texts.</li>
                <li><em><a href={SRC.strickland} target='_blank' rel='noopener noreferrer' className={a}>Strickland v. Palmetto Solar, LLC</a></em> — M.D.N.C., No. 1:22-cv-00580, filed July 22, 2022; terminated February 21, 2023. The rest are a 2016 Truth in Lending case against Palmetto Solar Louisiana, LLC and two older cases in which Palmetto was the plaintiff.</li>
              </ul>
              <p className={p}>
                A filed complaint is an allegation, not a finding, and a termination date records that a case closed, not
                who prevailed. The subjects that recur, consumer credit and marketing contact, are the two to press hardest
                on before signing a financed, company-owned agreement. This search covers federal courts only, not
                California state courts, arbitration, or license discipline against the partner who would install your
                system.
              </p>

              <h2 className={h2}>Questions the complaint file says to ask</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li><strong>Service after activation.</strong> Which company handles a service call, how is a visit requested, and is any service fee possible under the Energy Plan?</li>
                <li><strong>Timeline to Permission to Operate.</strong> Ask for a written schedule for design, permitting, installation, inspection and utility approval, and what happens if a stage slips.</li>
                <li><strong>Production against the estimate.</strong> Ask for the production estimate and its assumptions, and how the 90% guarantee is measured and paid.</li>
                <li><strong>The agreement as its own document.</strong> The Energy Plan is separate from any installation paperwork a partner gives you. Read the escalator, term and transfer clauses in both.</li>
                <li><strong>Roof penetrations.</strong> Get the installing company’s license number and its leak-response commitment in writing.</li>
              </ul>

              <h2 className={h2}>What is Palmetto’s LightReach program, in Palmetto’s own words?</h2>
              <p className={p}>
                Palmetto’s LightReach page presents it as an “Energy Plan” rather than as a lease or a power purchase
                agreement. In its own words: “we own the system and you get the power.” It describes a 25-year commitment
                with no upfront cost and with maintenance and performance guarantees included, and it does not state the
                annual escalator.<Cite href={SRC.lightreach} date={checked} />
              </p>
              <p className={p}>
                Read that first sentence closely: <strong>“we own the system” means you do not own the panels on your
                roof.</strong> Whatever the product is called, company ownership has four consequences to price in. The owner,
                not you, claims any tax credit. The agreement has to be transferred or settled when you sell, and a buyer
                must be willing to take it on. Responsibility for a roof leak under the array sits with whoever the contract
                says. And the payment continues for the full term. Compare the whole structure against buying outright in{' '}
                <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className={a}>cash, loan, lease and PPA obligations side by side</Link>{' '}
                and see{' '}
                <Link href='/solar-problems/solar-escalator-clause-explained' className={a}>how an escalator compounds over 25 years</Link>.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>The product has two names: LightReach and the Palmetto Energy Plan</h3>
              <p className={p}>
                Palmetto calls its consumer agreement the <strong>Palmetto Energy Plan</strong>: a 25-year agreement,
                structured as either a lease (a fixed monthly payment) or a PPA (a rate per kWh produced), depending on what
                your state allows.<Cite href={SRC.home} date={sep22} /> “LightReach” is the partner network that sells it. If a
                contractor offered you a LightReach agreement, you were offered the Palmetto Energy Plan.
              </p>
              <p className={p}>
                The plan’s <strong>Annual Rate Escalator</strong>, its built-in yearly price increase, runs from 0% to 3.5% and
                is set in your agreement.<Cite href={SRC.planFaq} date={sep22} /> Every plan also bundles 25 years of service
                and a 90% Performance and Production Guarantee. If the system produces less than 90% of its estimate over a
                review period, checked every 36 months from your first payment, Palmetto says it pays the shortfall to your
                bank account within 30 days at your contracted rate, with no claim to file, and that the guarantee applies
                only to Energy Plan customers, not to a system you bought.
                <Cite href={SRC.guarantee} date={sep22} /> Palmetto markets this protection as <strong>Palmetto Protect</strong>,
                which it says also covers parts, labor, remote issue detection and a service network.
                <Cite href={SRC.protect} date={sep22} />
              </p>

              <h2 className={h2}>What happens to your Palmetto Energy Plan when you sell your home</h2>
              <p className={p}>
                Selling before the 25-year term is up gives you three options, per Palmetto’s support documentation:
                <Cite href={SRC.selling} date={sep22} />
              </p>
              <ol className='list-decimal pl-6 space-y-3 text-foreground/80 mb-6'>
                <li><strong>Transfer the agreement to the buyer.</strong> The buyer applies for their own Energy Plan and must pass Palmetto’s credit and underwriting check. Once approved and the sale closes, the plan and any remaining warranty move to their name.</li>
                <li><strong>Prepay the remaining balance.</strong> You pay off what is left up front; Palmetto keeps ownership and stays responsible for maintenance.</li>
                <li><strong>Buy the system at fair market value.</strong> Only once the agreement has run at least five years. You own it, and Palmetto’s maintenance coverage ends.</li>
              </ol>
              <p className={p}>
                Palmetto says you remain responsible for the agreement until a written transfer is signed, and closing a
                sale without one is treated as a default. Its own articles also disagree on notice: the sale article says to
                submit a request at least 60 days before closing, while an article on canceling or transferring cites 15
                days’ prior written notice.<Cite href={SRC.cancel} date={sep22} /> Ask Palmetto for the deadline on your file,
                in writing. Several recent BBB complaints concern exactly this step.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-2'><strong>Questions to ask before you rely on any of this:</strong></p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Has the buyer been pre-qualified with Palmetto, in writing, before you are past the point of no return in escrow?</li>
                <li>Which notice deadline applies to your file, 60 days or 15, and is a written transfer signed before closing?</li>
                <li>If you prepay or buy out instead, what is the payoff or fair-market-value figure, and is it in your asking price?</li>
                <li>Has the agreement run at least five years, if the buyout is the path you want?</li>
              </ul>

              <h2 className={h2}>Palmetto’s California contractor license</h2>
              <p className={p}>
                Palmetto’s license page lists California license <strong>#1048921</strong>, classified as an Electrical
                Contractor.<Cite href={SRC.license} date={sep22} /> Its current status, bond and complaint history were not
                confirmed at CSLB for this page, and the partner company that installs your system holds its own license.
                Verify both before signing; our{' '}
                <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className={a}>contractor-verification walkthrough</Link>{' '}
                shows how.
              </p>

              <h2 className={h2}>Where this leaves a California homeowner</h2>
              <p className={p}>
                The fit question is ownership. A company-owned Energy Plan removes the upfront cost and the need for tax
                liability, and in exchange you do not own the equipment and you carry a 25-year payment with transfer terms at
                sale. Verify in this order: the escalator, term and end-of-term options, in writing; the home-sale transfer
                clause; the name and license of the company that will install; the panel, inverter and battery models; and
                who answers for a roof leak. Then get at least one quote for buying a comparable system, so you can see what
                company ownership costs over the term. For another company that sells mainly this kind of agreement, see the{' '}
                <Link href='/solar-installers/sunrun-review' className={a}>Sunrun review</Link>.
              </p>

              <div className='not-prose'>
                <FaqJsonLd items={faqs} />
                <FaqBlock items={faqs} schema={false} />
              </div>

              <div className='not-prose'>
                <SourceList sources={sources} />
              </div>
            </div>

            <div className='mt-12 p-4 rounded-lg border border-status-warning/30 bg-status-warning/10 flex gap-3 items-start'>
              <AlertTriangle className='h-5 w-5 text-status-warning flex-shrink-0 mt-0.5' />
              <div className='text-sm text-foreground/80'>
                <strong className='text-foreground'>What this page does not state:</strong> no star rating. Ratings on review
                sites change weekly and cannot tell you which partner company will install your system. The complaint counts
                and court records above are dated; check them again before you sign.
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
              <SolarInquiry topic='Palmetto Solar review and quote comparison' />
            </div>

            <RelatedGuides
              heading='Before comparing any installer proposal'
              intro='Which agreement you are being offered matters more than which company offers it.'
              links={[
                { href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california', label: 'Cash, loan, lease and PPA obligations side by side' },
                { href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california#lease-vs-ppa', label: 'How a PPA differs from a lease' },
                { href: '/solar-problems/ucc-1-lien-solar-california', label: 'What a UCC-1 filing on your home means at sale' },
                { href: '/solar-problems/solar-dealer-fees-explained', label: 'How a dealer fee pays for a low advertised rate' },
              ]}
            />

            <HubSpokeLinks hub='installer_reviews' currentPath={path} />

            <div className='mt-10'>
              <Link href='/solar-installers' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to California solar company reviews</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'>
        <VerifyInstallerBox installerName='Palmetto' cslbLicenseNumber='1048921' bbbProfileUrl={SRC.bbb} />
      </div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio domain='crr' palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
