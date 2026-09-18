import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar, AlertTriangle } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { SolarInquiry } from '@/components/growth/SolarInquiry';

export const metadata: Metadata = {
  title: "Palmetto Solar Reviews 2026: Pricing & Complaints",
  description: "What Palmetto's LightReach energy plan actually is in its own words, the California court record, and how it compares to Sunrun. Sourced and dated.",
  alternates: { canonical: '/solar-installers/palmetto-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Palmetto Solar Review 2026: Honest Look at a National Installer",
  datePublished: '2026-04-24', dateModified: '2026-09-18',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/palmetto-solar-review' },
};


export default function PalmettoReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link>
              <span>/</span>
              <Link href='/best-solar-companies-california' className='hover:text-primary'>California Installer Reviews</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Palmetto Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Palmetto Solar Review 2026: Honest Look at a High-Volume National Installer
              </h1>
              
              <LastReviewedStamp date="2026-09-18" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-09-18'>Updated September 18, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>9 min read</span></div>
              </div>
            </header>

            <div className='p-4 rounded-lg border border-amber-500/30 bg-amber-500/5 flex gap-3 items-start mb-10'>
              <AlertTriangle className='h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5' />
              <div className='text-sm text-foreground/80'>
                <strong className='text-foreground'>What this page does and does not state:</strong> no star rating and no complaint count appear here. Those figures could not be re-verified at their own sources when this page was checked on September 18, 2026, so they were removed rather than carried forward with a stale date. What the page does carry is Palmetto&apos;s own description of its LightReach energy plan and a dated search of the federal court record, both below.
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Palmetto Solar is a national residential solar company that sells in California and installs largely through regional partner contractors rather than its own crews. Its primary offering is a third-party-ownership product called LightReach. This page does not rate or rank installers. It sets out what Palmetto publishes about that product, what the federal court record shows as of September 18, 2026, and the specific contract terms to settle before signing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Corporate Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Palmetto is privately held and operates across the US Southeast, Mid-Atlantic, Texas, and expanding into the West — California is part of that Western expansion. In California, installation is typically handled by regional subcontractor partners rather than Palmetto&apos;s own W-2 crews, which is the core factor driving the variability in customer experience. Some California subcontractors are excellent; others are the source of the delays and communication problems that show up in complaint data.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Palmetto does not manufacture its own panels. The company installs premium black high-efficiency panels (typically 395–405W, 19.8%+ efficiency) alongside name-brand inverters and batteries (including Sonnen in some markets). Equipment selection varies by subcontractor. Install-day itself is usually completed in one day; the slow part is design, permitting, and utility interconnection, which customer reports routinely describe as 6 to 12+ months from contract to Permission to Operate.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Checking Palmetto&apos;s Reviews, and Whose Reviews Matter</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No rating or complaint count is stated on this page: none was re-verified at its own source on September 18, 2026. Check BBB, Google, Trustpilot and the solar review aggregators yourself and note the date you looked, because these figures move continuously and a number without a date is not information. When you do, read the recent one- and two-star reviews for recurring themes rather than the aggregate score. Because installation here is typically performed by a regional partner contractor rather than Palmetto&apos;s own crews, also search reviews for the name of the specific contractor assigned to your job &mdash; that is the company that will be on your roof, and its record is the more relevant one.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What the court record shows (checked September 2026)</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A case-name search of the federal court record on <strong>September 18, 2026</strong> returned eight dockets naming Palmetto Solar. Two of them are California federal cases, which makes them the most relevant to a California reader:
              </p>
              <ul className='list-disc pl-6 space-y-3 text-foreground/80 mb-6'>
                <li><em><a href='https://www.courtlistener.com/docket/70500361/edmonds-v-palmetto-solar-llc/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>Edmonds v. Palmetto Solar, LLC</a></em> &mdash; E.D. Cal., No. 1:25-cv-00703, filed June 10, 2025. Nature of suit recorded as Consumer Credit. Docket shows no termination date as of the search.</li>
                <li><em><a href='https://www.courtlistener.com/docket/67608954/ewing-v-palmetto-solar-llc/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>Ewing v. Palmetto Solar, LLC</a></em> &mdash; S.D. Cal., No. 3:23-cv-01292, filed July 14, 2023; docket shows terminated December 13, 2023.</li>
                <li><em><a href='https://www.courtlistener.com/docket/70577511/bronstin-v-palmetto-solar-llc/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>Bronstin v. Palmetto Solar, LLC</a></em> &mdash; W.D.N.C., No. 3:25-cv-00426, filed June 18, 2025. Nature of suit: Telephone Consumer Protection Act.</li>
                <li><em><a href='https://www.courtlistener.com/docket/65743100/connor-v-palmetto-solar-llc/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>Connor v. Palmetto Solar LLC</a></em> &mdash; D.S.C., No. 2:22-cv-03963, filed November 9, 2022; docket shows terminated March 28, 2024. Nature of suit: Telephone Consumer Protection Act.</li>
                <li>Of the remaining results, one was a Truth in Lending case in the Eastern District of Louisiana (2016) and two were older matters in which Palmetto was the plaintiff rather than the defendant.</li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Source: <a href='https://www.courtlistener.com/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>CourtListener</a>, searched September 18, 2026. A filed complaint is an allegation, not a finding, and a docket termination date records that a case closed rather than who prevailed. What the record does show is a dated pattern that lines up with two specific subject areas &mdash; consumer credit and unsolicited marketing contact &mdash; which are exactly the two areas to press hardest on before signing a financed, third-party-owned agreement.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This search covers federal dockets and published opinions only. It does not cover California state courts, arbitration clauses, or CSLB licence discipline against the partner contractor who would actually perform your installation. Check that contractor&apos;s licence separately in the CSLB lookup at the foot of this page.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Recurring themes across BBB, SolarReviews, and Reddit:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li><strong>Timeline between signing and Permission to Operate.</strong> Ask for a written schedule with a date range for design, permitting, installation, inspection and utility approval, and what happens if a milestone slips.</li>
                <li><strong>Deposit treatment on a stalled or cancelled project.</strong> Ask what is refundable, under what conditions and within what period, and get it in the contract.</li>
                <li><strong>Production versus the model.</strong> Ask for the production estimate, the assumptions behind it, and what remedy exists if the system underperforms &mdash; a performance guarantee is a contract term, not a sales statement.</li>
                <li><strong>Post-install service responsibility.</strong> Ask which entity handles a service call after activation, and what the response commitment is beyond the first 90 days.</li>
                <li><strong>The financing agreement as a separate document.</strong> A LightReach agreement is distinct from the installation contract. Read both, and read the escalator, term and transfer clauses before signing either.</li>
                <li><strong>Roof penetrations and the partner contractor&apos;s record.</strong> Get the installing contractor&apos;s name and licence number, check it, and get the leak-response commitment in writing.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What is Palmetto&apos;s LightReach program, in Palmetto&apos;s own words?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Palmetto&apos;s own LightReach page, checked on <strong>September 18, 2026</strong>, presents it as an &ldquo;Energy Plan&rdquo; rather than as a lease or a power-purchase agreement. In its own words: &ldquo;we own the system and you get the power. So you can lock in a rate that&apos;s lower and more stable than your current utility bill, with no upfront cost.&rdquo; It describes a 25-year commitment with maintenance and performance guarantees included, and states that Palmetto handles maintenance. Notably, that page does <strong>not</strong> state the annual rate escalator. Source: <a href='https://palmetto.com/lightreach' target='_blank' rel='noopener noreferrer' className='text-primary underline'>palmetto.com/lightreach</a>, verified September 18, 2026.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Read that first sentence closely, because it is the most important thing on this page: <strong>&ldquo;we own the system&rdquo; means you do not own the panels on your roof.</strong> Whatever the product is called, third-party ownership has four consequences you should price in. The owner, not you, claims any tax credit. The agreement has to be transferred or settled when you sell the home, and a buyer must be willing to assume it. Responsibility for a roof leak under the array sits with whoever the contract says, which may not be the party you would expect. And the payment continues for the full term regardless of how your circumstances change.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Because the escalator is not published, treat it as the first question you ask, not the last: request the annual escalation percentage in writing, then calculate the payment in year 10 and year 25, not just year one. A rate that starts below your utility bill does not necessarily stay below it. Compare the whole structure against buying outright in <a href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary underline'>cash, loan, lease and PPA obligations side by side</a> and <a href='/blog/solar-ppa-vs-lease-california' className='text-primary underline'>how a PPA differs from a lease</a>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Palmetto offers a 25-year standard warranty on equipment and (typically) workmanship, which is table-stakes for a modern installer. Monitoring is provided through a proprietary app — some California customers have reported being asked to pay for monitoring access after install, which is worth clarifying in your contract before signing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Where This Profile Fits, and What to Verify</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This page does not recommend or rank installers. The structural fit question is ownership: a third-party-owned energy plan removes the upfront cost and the need for tax liability to use a credit, and in exchange you do not own the asset and you carry a 25-year payment obligation with transfer implications at sale. That trade-off is either right for your situation or it is not, and no review page can decide it for you.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Verify in this order: the annual escalator, term and end-of-term options in the LightReach agreement, in writing; the home-sale transfer clause; the name and California licence number of the contractor who will actually install, checked in the CSLB lookup below; the panel, inverter and battery make and model; and who is responsible for a roof leak under the array. Then get at least one quote for buying a comparable system outright, so you can see what the third-party-ownership structure costs you over the term.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>What are Palmetto Solar&apos;s reviews like?</h3>
                  <p className='text-foreground/80 leading-relaxed'>This page states no rating or complaint count: none was re-verified at its own source on September 18, 2026. Check BBB, Google, Trustpilot and the solar review aggregators yourself and note the date. One extra step matters here: because installation is typically performed by a regional partner contractor rather than Palmetto&apos;s own crews, also search reviews for that specific contractor&apos;s name once it is assigned to your job.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Is Palmetto Solar legit?</h3>
                  <p className='text-foreground/80 leading-relaxed'>It is an operating national solar company with a published third-party-ownership product. The verification that matters for your job is local: get the name and California licence number of the entity that will sign your contract and perform the installation, check it in the CSLB lookup below, and confirm the classifications cover the work. A national brand name is not a substitute for a current licence on the actual installer.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>How does Palmetto Solar compare to Sunrun?</h3>
                  <p className='text-foreground/80 leading-relaxed'>They use the same fundamental structure &mdash; a third party owns the system and you pay for the power or the equipment &mdash; so compare them on contract terms rather than brand. Put the two agreements side by side on four lines: the annual escalator, the term length, the end-of-term options, and the home-sale transfer provisions. Also compare who performs the installation, since both rely partly on partner or subcontracted crews. See the <a href='/solar-installers/sunrun-review' className='text-primary underline'>Sunrun profile</a>. This page ranks neither.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>What is Palmetto&apos;s LightReach PPA or lease program?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Palmetto presents LightReach as an &ldquo;Energy Plan&rdquo; rather than a lease or PPA. Its own page states &ldquo;we own the system and you get the power&rdquo;, describes locking in a rate with no upfront cost over 25 years, and says maintenance is handled by Palmetto. The page does not state the annual escalator, so request that figure in writing and model the payment in year 10 and year 25. Verified at <a href='https://palmetto.com/lightreach' target='_blank' rel='noopener noreferrer' className='text-primary underline'>palmetto.com/lightreach</a> on September 18, 2026.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>What do LightReach reviews and complaints focus on?</h3>
                  <p className='text-foreground/80 leading-relaxed'>The recurring subject areas in the federal court record for this company are consumer credit and unsolicited marketing contact, with two California federal dockets among the results as of September 18, 2026 (cited above). Those are allegations rather than findings, but they indicate where to concentrate your reading: the financing agreement itself, separately from the installation contract, and how you were first contacted.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Does Palmetto install its own panels?</h3>
                  <p className='text-foreground/80 leading-relaxed'>No &mdash; Palmetto does not manufacture panels, and in California installation is typically carried out by regional partner contractors rather than Palmetto employees. Require the panel, inverter and battery make and model in the contract, and get the installing contractor&apos;s licence number so you can check it yourself.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>How long does a Palmetto install actually take?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Ask for a written schedule rather than an average. Install day itself is usually short; the length sits in design, permitting and utility interconnection, which vary by jurisdiction and utility queue. Get a date range for each stage and the remedy if a stage slips, and note that the payment obligation under a third-party-owned agreement generally begins at activation, not at signing &mdash; confirm that in your contract.</p>
                </div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Quotes Before You Sign</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>
                California Rate Relief is a private referral service. Submit one short form and it may forward your inquiry to independent California providers, subject to availability, so you can compare pricing, equipment and warranty terms side by side. No installer is named as a partner and no provider is endorsed.
              </p>
              <div className='flex justify-center'>
                <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>No cost to submit. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="Palmetto Solar review and quote comparison" />
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>More California Installer Reviews</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-installers/sunrun-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Sunrun Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/sunnova-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Sunnova Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/baker-electric-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Baker Electric Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/new-day-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>New Day Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/momentum-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Momentum Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
              </div>
            </div>

            <div className='mt-10'>
              <Link href='/best-solar-companies-california' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to California installer reviews</Link>
            </div>
            <RelatedGuides
              heading="Before comparing any installer proposal"
              intro="Which agreement you are being offered matters more than which company offers it."
              links={[
                { href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california", label: "Cash, loan, lease and PPA obligations side by side" },
                { href: "/blog/solar-ppa-vs-lease-california", label: "How a PPA differs from a lease" },
                { href: "/blog/are-solar-panels-worth-it-california", label: "Whether the quote fits the home at all" },
                { href: "/solar-problems/solar-dealer-fees-explained", label: "How a dealer fee pays for a low advertised rate" },
              ]}
            />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <VerifyInstallerBox installerName="Palmetto" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
