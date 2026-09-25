import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { defaultCrumbs } from '@/lib/breadcrumbs';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';
import { Byline } from '@/components/trust/Byline';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

export const metadata: Metadata = {
  title: "Solar PPA Explained: How California's $0-Down Solar Works",
  description: "How a California solar PPA works: the $/kWh rate, escalator, term, and what CPUC's consumer guide requires providers to disclose before you sign.",
  alternates: {
    canonical: '/blog/solar-ppa-explained-california',
  },
  openGraph: {
    title:
      'Solar PPA Explained: How California\'s $0-Down Solar Works (2026)',
    description:
      'How a solar PPA works in California: the per-kWh price, the escalator, the term, and what the CPUC and CSLB require providers to disclose.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Solar PPA Explained: How California\'s $0-Down Solar Works (2026)',
  description:
    'How a solar PPA works in California: the per-kWh price, the escalator, the term, and what the CPUC and CSLB require providers to disclose.',
  datePublished: '2026-04-16',
  dateModified: '2026-09-22',
  author: CRR_AUTHOR_PERSON,
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/blog/solar-ppa-explained-california',
  },
};

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/solar-ppa-explained-california');
const CRUMB_LABEL = 'Solar PPA explained';

export default function SolarPPAExplainedCalifornia() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Solar Financing
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar PPA Explained: How California&apos;s $0-Down Solar Works (2026)
              </h1>
              <Byline updated="2026-09-22" />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-09-22'>Updated September 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>8 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                A solar PPA (Power Purchase Agreement) puts a solar system on your roof that a solar company owns. Instead of buying the system, you pay the company a set price per kilowatt-hour (kWh) for the power it produces, usually with an annual escalator. Many PPAs have no down payment; some are prepaid. For context, the CPUC Public Advocates Office reported average residential rates of 33.7&cent; (PG&amp;E), 34.4&cent; (SCE) and 45.5&cent; (SDG&amp;E) per kWh in June 2026 (<a href='https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf' target='_blank' rel='noopener noreferrer' className='text-primary underline'>Q2 2026 Electric Rates Report</a>). Whether a PPA saves you money depends on its starting price, its escalator, how much of your usage it covers and the utility charges you still pay. This article explains how PPAs work, what you actually pay, and how to check one.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="California solar PPA explanation and options" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Is a Solar PPA?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A PPA is a contract between you and a solar company. The company owns the panels, installs them on your roof, and is usually responsible for maintenance and repairs under the contract. In exchange, you agree to buy the electricity the panels produce at a fixed rate per kWh, typically for 20-25 years.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Unlike buying a system (which you own) or a lease (where you pay a fixed monthly bill regardless of production), a PPA ties your payment directly to how much electricity the system generates. More production = higher payment that month. Production and usage do not line up hour by hour, so ask how the proposal accounts for the evening hours when the panels produce little.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many PPAs have no down payment: the solar company pays for the installation, permits, equipment, and labor, and you pay for the power over the contract term. Read the contract for any upfront or prepaid amount. The tradeoff is that you don&apos;t own the system, can&apos;t claim tax benefits (though the residential tax credit expired at the end of 2025 anyway), and are locked into a 20-25 year contract.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How It Works (Step by Step)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Proposal and site assessment.</strong> You provide your address and utility bill. The solar company uses satellite imagery and your bill history to estimate system size, production, and your projected monthly PPA payment. If the numbers work, they schedule a site visit.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Site visit and system design.</strong> An installer assesses roof condition, shading, structural capacity, and electrical infrastructure. They design a system sized to part or all of your electricity needs. They provide a detailed proposal including system specs, estimated annual production, and your estimated PPA rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. You sign a PPA contract.</strong> This is a legal document specifying the PPA rate (¢/kWh), contract term (usually 20-25 years), annual escalator (1-3%), and all terms and conditions. Before you sign, you should have a 25-year cost projection in writing. The CPUC&apos;s consumer guide states that you have at least three business days to cancel for any reason, or 5 days if you are 65 or older (CPUC, California Solar Consumer Protection Guide (2025)). Use that period to review the contract, with a lawyer if you have concerns.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>4. Financing and permitting.</strong> The solar company obtains all financing and permits. You don&apos;t need to sign any loans or paperwork. The company handles everything. Permits typically take 4-12 weeks depending on your jurisdiction.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>5. Installation.</strong> Once permitted, installation takes 2-5 days. The company handles interconnection with the utility and installs a new meter or upgrade if needed. You provide access to your roof and electrical panel.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>6. Utility approval and activation.</strong> The utility approves the system for interconnection (usually 1-4 weeks). Once approved, the system activates and starts generating power. You&apos;re now buying and selling electricity through the meter.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>7. Monthly billing.</strong> You get two bills. The CPUC&apos;s guide notes that customers who sign a lease or PPA &ldquo;will also receive a monthly bill from a loan company or solar provider&rdquo; (CPUC, California Solar Consumer Protection Guide (2025)). The solar provider bills you for the power the system produced at your PPA rate; your utility still bills you for grid power you use and its fixed charges, and credits exports under its own rules.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What You&apos;ll Pay
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Initial PPA rate:</strong> set by each provider&apos;s written quote; this guide has no verified California range to give you. The utility figures above are class averages rather than the price at any one hour, so check the plan you are actually on before comparing &mdash; <Link href='/blog/sdge-time-of-use-rates-2026' className='text-primary underline'>SDG&amp;E time-of-use rates</Link> sets out its peak windows.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Monthly payment:</strong> multiply the system&apos;s production in kWh by the PPA rate. That is what you pay the solar company. Your utility bill goes down only for the grid power the system replaces; exported power is credited at the utility&apos;s export value, not at the retail rate. Ask the provider to show both bills side by side for a sample month.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Other costs.</strong> Maintenance and repairs are usually the provider&apos;s responsibility under a PPA, but read the contract for what is included, what is excluded, and whether there is any production guarantee.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Escalator Clause
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is critical. Many PPAs include an annual escalator, and the CPUC notes escalators are typically in the range of 1 to 3 percent a year (see below). An escalator compounds: at 2% a year, the price in year 20 is about 46% higher than in year one.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Whether the escalator works for you depends on how your utility&apos;s rates change over the same years, and no one can promise that. Compare the escalator with the utility rate history in the CPUC Public Advocates Office quarterly reports, not with a sales projection.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Always request the exact escalator percentage in writing before signing. Ask the company for a 25-year cost projection showing the escalator applied year by year.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For how far an escalator can run before it stops paying off against utility rate growth, see <Link href='/solar-problems/solar-escalator-clause-explained' className='text-primary underline'>Solar Escalator Clauses, Explained</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What California Requires Providers to Disclose
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Two state-level requirements apply specifically to leases and PPAs, on top of general solar sales rules.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>The CPUC&apos;s Solar Consumer Protection Guide.</strong> The state treats leases and PPAs as third-party-owned systems and requires the sale-related risk to be explained up front: &ldquo;If you sell your house before the Lease or PPA contract is over, you will have to pay the Solar Provider the remainder of the value of the Lease or PPA or transfer the contract to the new property owner&rdquo; (CPUC, California Solar Consumer Protection Guide, p. 12). The guide confirms the escalator range this page uses above and adds a caution: &ldquo;Escalators are typically in the range of a 1 percent to 3 percent increase,&rdquo; and shoppers should &ldquo;be cautious of entering into a contract with an escalator higher than that&rdquo; (CPUC, California Solar Consumer Protection Guide Overview &amp; FAQ). Providers interconnecting through PG&amp;E, SCE, SDG&amp;E, Bear Valley Electric Service, PacifiCorp, or Liberty are required to collect your initials and signature on this guide before you sign a contract (CPUC, California Solar Consumer Protection Guide Overview &amp; FAQ) — if you weren&apos;t handed one, ask for it first.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>The CSLB disclosure forms.</strong> Separately, your contractor must give you two CSLB forms before you sign. On the &ldquo;Solar Energy System Supporting Information&rdquo; form, a PPA entry requires the provider to write in the energy rate in $/kWh and the escalator percentage; a lease entry requires the monthly payment and escalator; both require a yes/no answer to &ldquo;Can the customer transfer the system to a new homeowner if they want to sell their house?&rdquo; — with a note that transfer &ldquo;may require the customer to pay off the agreement in full&rdquo; (CSLB, Solar Energy System Supporting Information, Version 2). The companion cover-page form shows the total system cost and a one-year bill-savings estimate. You also have a right to cancel — see <Link href='/blog/can-you-cancel-solar-panel-contract-before-installation-california' className='text-primary underline'>your right to cancel a solar contract</Link> for the exact window and how to exercise it. Ask for both CSLB forms filled in, not blank, before you sign the contract itself.
              </p>

              <h3 className='text-xl font-bold text-foreground mt-8 mb-3'>
                Where DFPI does — and doesn&apos;t — fit in
              </h3>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Department of Financial Protection and Innovation licenses and regulates PACE program administrators, a separate property-tax-assessment financing option, and it has licensed California Finance Lenders who make solar loans since it took on PACE oversight in 2019 (DFPI, PACE). DFPI does not license or directly regulate solar leases or PPAs — they aren&apos;t loans. If a PPA or lease goes wrong, DFPI generally isn&apos;t the right agency; your first calls are the provider itself, then CSLB if the dispute involves the contractor&apos;s license or the disclosure forms above.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Happens After 25 Years
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                At the end of the contract term, you have three options:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Buyout:</strong> If the contract allows it, you buy the system from the company at the price or formula the contract sets. You then own it and are responsible for its maintenance.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Renew:</strong> You sign a new PPA contract with the company, extending the arrangement for another 10-20 years at a new (higher) PPA rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. Removal:</strong> The company removes the system. Check the contract for who pays for removal and for any roof repair afterward.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Which option makes sense depends on the system&apos;s condition, the buyout price, and your plans for the home. Ask for the end-of-term options in writing before you sign.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Selling Your Home
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                When you sell, the CPUC&apos;s consumer guide warns that you will have to pay the provider the remainder of the contract&apos;s value or transfer the contract to the new owner (quoted below). A buyer who assumes the contract continues paying the PPA rate. This can be an advantage (solar makes the home more attractive and valuable) or a challenge (some buyers are uncomfortable taking on an unfamiliar obligation).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To ease the sale, you can pay off the contract or the buyer can assume it; the provider decides whether a buyer qualifies. Most home sale contracts address the PPA explicitly. If you anticipate selling within the contract term, discuss buyout options with the solar company upfront.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For the full mechanics of transferring, buying out, or ending a lease or PPA at sale — including what most home-sale contracts say and how buyers typically respond — see <Link href='/blog/what-happens-to-solar-lease-when-i-sell-california' className='text-primary underline'>What Happens to a Solar Lease When You Sell in California</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                PPA vs Buying vs Leasing
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>PPA:</strong> often no down payment, you pay per kWh produced, long contract term, provider usually maintains the system, no tax credit for you.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Lease:</strong> often no down payment, you pay a set monthly amount regardless of production, long contract term, similar to a PPA but your payment does not fall if production is lower than expected.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Purchase (cash or loan):</strong> pay the full price upfront or finance it with a loan, and you own the system. There is no federal residential credit on a system installed in 2026: IRC &sect; 25D does not apply to expenditures made after December 31, 2025. For a price benchmark, LBNL&apos;s Tracking the Sun (2024 Edition) found host-owned residential systems installed in 2023 priced at $3.20 to $5.50 per watt (20th to 80th percentile, national).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A PPA can fit a homeowner who does not want to buy or maintain a system and accepts a long contract. Buying can fit someone with cash or financing who plans to stay in the home. Compare the total cost of each in writing.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a full side-by-side of loan, lease, and cash across more scenarios, see <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary underline'>PPA vs. Loan vs. Lease vs. Cash in California</Link>; for a closer look at PPA vs. lease specifically, see <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california#lease-vs-ppa' className='text-primary underline'>Solar PPA vs. Lease in California</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why PPAs Get More Attention in 2026
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The federal residential credit (IRC &sect; 25D) does not apply to expenditures made after December 31, 2025, and the IRS treats the expenditure as made when installation is complete. Before that, it covered 30% of a purchased system&apos;s cost. Without it, a purchase costs more than it did, which is one reason PPAs and leases get more attention.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On a PPA the solar company owns the system, and it is the company that may claim the &sect; 48E business credit. That is the provider&apos;s tax position, not a savings figure for you: compare the PPA&apos;s total payments with the cost of buying.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who PPAs Work Best For
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                — Homeowners with high electricity use, compared against their own bills<br />
                — Those planning to stay in the home 15+ years<br />
                — Owners who prefer no down payment and provider maintenance<br />
                — Anyone in high-rate territories (SDG&amp;E, PG&amp;E, SCE)<br />
                — Those without cash or strong financing to purchase outright<br />
                — Homeowners who want the provider to maintain the system (confirm the roof is sound first)
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Eligibility and program terms vary by provider — Tesla&apos;s PPA program, for example, sets its own requirements, covered in the <Link href='/solar-installers/tesla-solar-review' className='text-primary underline'>Tesla Solar review</Link> rather than here.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                PPAs don&apos;t make sense if your roof needs replacement soon, if you&apos;re planning to sell within 5-10 years, or if your electric bill is already low.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A solar PPA is a way to get solar without buying the system, usually with no down payment, in exchange for a long contract with a price that can rise every year. You don&apos;t own the system and can&apos;t claim a tax credit. Whether it saves you money depends on the starting price, the escalator and the utility charges you still pay, so compare its total cost in writing with buying and with doing nothing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Ask before you sign
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s consumer guide recommends putting these questions to your PPA or lease provider directly, in writing (CPUC, California Solar Consumer Protection Guide, p. 12):
              </p>

              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>What is the total cost of the solar electricity over the entire contract term?</li>
                <li>How much will I pay up front, how much over time, and for how long?</li>
                <li>Will my payments increase over time — by how much, and how often?</li>
                <li>What happens if I want to end the contract early? Will I owe a balloon payment or an early termination fee, and how much?</li>
                <li>How does this contract affect my ability to sell or refinance my home?</li>
                <li>Are there fees to transfer the contract to a new homeowner?</li>
              </ul>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ask for the 25-year cost projection mentioned above and both CSLB disclosure forms, filled in with these answers, before you sign — not promised verbally.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Trips Up California Solar Shoppers, Per State Research
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                CPUC-commissioned interviews with solar adopters found people get tripped up by specific, recurring gaps rather than one bad actor. Some adopters said they &ldquo;rushed into solar to later find that the cost was higher than expected, or that there were contingencies that had not been clearly stated&rdquo; — a pre-signing problem, not a post-installation one (CPUC/ILLUME Advising, Solar Consumer Protection Guide Research Findings, 2020, p. 20). Others described monthly bills they couldn&apos;t explain — one shopper put it as &ldquo;I don&apos;t even know... I got a bill each month... I don&apos;t know what&apos;s going to happen when I have a true-up, I mean, it&apos;s sort of a mystery to me&rdquo; (CPUC/ILLUME Advising, Solar Consumer Protection Guide Research Findings, 2020, p. 20). With a PPA, ask your provider to walk through a sample monthly bill — what you&apos;re charged for production, what the utility bills separately — before you sign, not after your first one arrives.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Separately, California&apos;s consumer guide names specific claims to treat as red flags, not facts — see <Link href='/blog/free-solar-panels-california' className='text-primary underline'>Are free solar panels really free in California?</Link> for the full list and what each one actually means. A legitimate PPA quote puts a number on the rate, the escalator, and the term — if a provider won&apos;t commit any of those three to writing, that alone is reason to ask again before signing.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                See What a PPA Rate Would Look Like for Your Home
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you want a provider to price a PPA for your home, send your utility and bill details through the form on this page. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
              </p>
              <Link
                href='#solar-inquiry'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Request a solar review
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="California solar PPA explanation and options" />
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/blog'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Articles
              </Link>
              <Link
                href='/solar-panels-california#worth-it'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Next Article
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
