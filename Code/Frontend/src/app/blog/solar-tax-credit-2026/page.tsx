import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Tax Credit 2026: The Complete Guide to What\u2019s Left',
  description:
    'The federal residential solar tax credit expired Dec 31, 2025. Here\u2019s what\u2019s still available in 2026 — commercial ITC, PPAs, SGIP, and how California homeowners can still save.',
  alternates: {
    canonical: '/blog/solar-tax-credit-2026',
  },
  openGraph: {
    title:
      'Solar Tax Credit 2026: The Complete Guide to What\u2019s Left',
    description:
      'The residential ITC is gone. Here\u2019s what California homeowners and businesses can still claim in 2026.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Solar Tax Credit 2026: The Complete Guide to What\u2019s Left',
  description:
    'The federal residential solar tax credit expired Dec 31, 2025. Here is what is still available in 2026 for California homeowners and businesses.',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/blog/solar-tax-credit-2026',
  },
};

export default function SolarTaxCredit2026() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Blog
              </Link>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Solar Incentives
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Tax Credit 2026: The Complete Guide to What&apos;s Left
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>9 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                If you&apos;ve been researching solar panels in 2026, you&apos;ve probably run into conflicting information about the federal solar tax credit. Some sites still advertise &quot;30% off your solar system!&quot; — but that&apos;s no longer accurate for homeowners. The residential Investment Tax Credit (ITC) under Section 25D expired on December 31, 2025, following the passage of the One Big Beautiful Bill Act. That means if you purchase a solar system with your own money in 2026, the federal tax credit is 0%. But that&apos;s not the whole story. Commercial credits are still alive, PPAs still work, and California has its own incentive programs. Here&apos;s exactly what&apos;s left and what it means for you.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Happened to the 30% Tax Credit
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The federal residential solar tax credit — formally known as the Section 25D Investment Tax Credit — allowed homeowners who purchased solar systems to deduct 30% of the total installed cost from their federal income taxes. On a typical $25,000-$35,000 residential system, that meant $7,500-$10,500 back in your pocket. It was the single largest incentive driving residential solar adoption in California.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The One Big Beautiful Bill Act, signed into law in late 2025, eliminated the residential ITC effective December 31, 2025. Systems that were placed in service before that date still qualify. Systems purchased and installed in 2026 or later do not. There is no phase-down period for residential — it went from 30% to 0% overnight.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Timeline: When It Expired and Why
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Inflation Reduction Act of 2022 had extended the residential ITC at 30% through 2032. The One Big Beautiful Bill Act superseded that timeline, cutting the credit as part of broader tax reform. The political reasoning doesn&apos;t change the math: if you&apos;re a California homeowner looking to buy a solar system outright in 2026, there is no federal tax credit available.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you purchased your system before the deadline and haven&apos;t yet filed your taxes, you can still claim the credit for the year the system was placed in service. Unused ITC amounts can be carried forward to future tax years until fully utilized.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What&apos;s Still Available: The Commercial ITC
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s what most people miss: the <strong>commercial</strong> Investment Tax Credit under Section 48E is still active. Projects that begin construction by July 4, 2026 or are placed in service by December 31, 2027 qualify for a 30% base credit. This applies to businesses, nonprofits (via direct pay), and — critically — third-party solar providers who install systems on residential rooftops through power purchase agreements (PPAs).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On top of the 30% base, bonus adders can push the credit even higher: a 10% bonus for projects in designated energy communities, a 10% bonus for systems meeting domestic content requirements, and a 10-20% bonus for projects serving low-income communities. In the right circumstances, the effective credit can reach 50% or more.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How PPAs Still Pass Savings to Homeowners
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the part that matters most for California homeowners right now. In a PPA (Power Purchase Agreement), a third-party company owns the solar panels on your roof. Because they own the system, they claim the commercial ITC. They then pass those savings to you through a lower per-kilowatt-hour rate. You pay a fixed monthly amount — typically 30-50% less than your current utility bill — and you don&apos;t pay anything upfront for the panels, installation, or maintenance.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The residential tax credit is gone, but the economic benefit of solar hasn&apos;t disappeared — it&apos;s just shifted. Instead of buying a system and claiming a credit yourself, you let a third party claim the commercial credit and share the savings with you. The net result for your monthly budget is often similar or even better, because you also avoid the $25,000-$35,000 upfront cost.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Battery Storage Credits in 2026
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Standalone residential battery storage no longer qualifies for the federal ITC. However, battery systems paired with solar may still qualify under commercial rules when installed as part of a PPA or third-party-owned system. The eligibility depends on the ownership structure and how the system is classified for tax purposes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If battery storage is important to you — and in California, where TOU rates create significant peak-to-off-peak price swings, it often is — the PPA route may be the only way to capture any federal credit on the storage component in 2026.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                SGIP: California&apos;s Own Battery Incentive
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Self-Generation Incentive Program (SGIP) is a California state program — separate from the federal ITC — that provides rebates for energy storage systems. SGIP is still active in 2026 and provides meaningful rebates, especially for customers in high-fire-risk areas or on medical baseline rates. The rebate amount varies by utility territory and budget step, but it can cover a significant portion of battery installation costs.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SGIP funding is allocated in steps, with earlier applicants receiving higher rebates. If you&apos;re considering battery storage, checking your SGIP eligibility should be one of the first steps — before the remaining funding is exhausted.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Homeowners Should Do Now
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The loss of the residential ITC changes the calculus, but it doesn&apos;t eliminate the case for solar. California utility rates continue to climb — PG&E, SCE, and SDG&E have all implemented rate increases in 2025 and 2026 — and that trend shows no sign of reversing. The question isn&apos;t whether solar saves money; it&apos;s which path to solar makes the most financial sense now that the residential credit is gone.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For most California homeowners in 2026, the answer is a PPA or similar third-party ownership structure. You get panels on your roof at no upfront cost, a fixed monthly payment that&apos;s lower than your current utility bill, and protection against future rate increases — all without needing any tax credit yourself. The provider handles the incentives on their end and passes the benefit through to your rate.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The PPA Advantage in a Post-ITC World
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before the residential ITC expired, the purchase-vs-PPA decision was a legitimate debate. Purchasing could yield higher lifetime savings if you had the cash and tax liability to absorb the credit. Now, with the residential credit at 0%, the purchase path is significantly less attractive for most homeowners. You&apos;d be paying full price for a system with no federal offset.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A PPA, on the other hand, still benefits from the commercial ITC. The third-party owner captures the 30% credit (or more with bonus adders), keeps the system cost low, and offers you a rate that undercuts your utility. You start saving from month one, with zero capital at risk. In 2026, this is the most straightforward path to lower electricity costs for California homeowners.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The bottom line: the tax credit landscape has fundamentally changed, but the opportunity to save on your electricity bill hasn&apos;t. It just requires a different approach than it did a year ago.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                See What You Qualify for in 2026
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The residential tax credit is gone, but savings aren&apos;t. Find out if a no-cost solar program can lower your bill — it takes about 30 seconds.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
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
                href='/blog/commercial-solar-installation-cost-california'
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
