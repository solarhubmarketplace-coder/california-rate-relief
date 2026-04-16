import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'What Is the CPUC and How Does It Affect Your Electric Bill in 2026?',
  description:
    'The CPUC regulates PG&E, SCE, and SDG&E — setting your rates, approving fixed charges, and ruling on net metering. Here\'s what every California homeowner needs to know.',
  alternates: {
    canonical: '/blog/california-public-utilities-commission',
  },
  openGraph: {
    title:
      'What Is the CPUC and How Does It Affect Your Electric Bill in 2026?',
    description:
      'The CPUC controls your electricity rates, NEM policy, and the $24 fixed charge. Here\'s how it works and what it means for your bill.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'What Is the CPUC and How Does It Affect Your Electric Bill in 2026?',
  description:
    'The CPUC regulates PG&E, SCE, and SDG&E — setting your rates, approving fixed charges, and ruling on net metering. Here\'s what every California homeowner needs to know.',
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
    '@id': 'https://ratereliefca.com/blog/california-public-utilities-commission',
  },
};

export default function CaliforniaPublicUtilitiesCommission() {
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
                California Energy Policy
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                What Is the CPUC and How Does It Affect Your Electric Bill in 2026?
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
                Every time your electricity rate goes up, a fixed charge appears on your bill, or net metering rules change, one agency is behind it: the California Public Utilities Commission (CPUC). If you pay an electric bill in California, the CPUC&apos;s decisions directly determine how much you pay. Here&apos;s what this agency actually does, who runs it, and what their recent rulings mean for your wallet.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Is the CPUC?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California Public Utilities Commission is the state agency that regulates investor-owned utilities (IOUs) — PG&amp;E, Southern California Edison (SCE), and San Diego Gas &amp; Electric (SDG&amp;E). These three utilities serve roughly 75% of California&apos;s electricity customers. The CPUC sets the rates these utilities can charge, approves infrastructure spending, oversees safety standards, manages wildfire mitigation programs, and determines the rules for net energy metering (NEM).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Municipal utilities like LADWP, SMUD, and Glendale Water &amp; Power are NOT regulated by the CPUC — they&apos;re governed by local city councils. So if you&apos;re with PG&amp;E, SCE, or SDG&amp;E, the CPUC is the entity deciding what you pay.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Runs the CPUC?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The CPUC is led by five commissioners, all appointed by the Governor. As of 2026, the commissioners are: President John Reynolds (promoted to president in February 2026), Darcie L. Houck, Karen Douglas, Matthew Baker, and Christine Harada — all appointed by Governor Newsom. They serve staggered six-year terms. The president sets the agenda and leads proceedings, but all five commissioners vote on major rate decisions.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What the CPUC Controls
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Electricity rates:</strong> Every few years, each utility files a General Rate Case (GRC) requesting permission to charge customers more. The CPUC reviews costs, holds hearings, and issues a final decision. PG&amp;E, SCE, and SDG&amp;E all have pending 2026 revenue requirement advice letters that could result in further rate increases.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Fixed charges:</strong> The CPUC approved a monthly fixed charge (Base Services Charge) that all customers pay regardless of how much electricity they use. PG&amp;E began collecting approximately $24/month in March 2026. SCE and SDG&amp;E implemented their fixed charges in late 2025.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Net energy metering:</strong> The CPUC sets the rules for how solar customers are compensated for excess energy sent back to the grid. NEM 3.0, which dramatically reduced export credits for new solar customers, was a CPUC decision.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Safety and wildfire mitigation:</strong> After the devastating wildfires linked to utility equipment, the CPUC oversees wildfire mitigation plans and can penalize utilities for safety failures. Wildfire-related costs are a major driver of rate increases — utilities pass these costs to ratepayers.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How the CPUC Sets Your Rates
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The process works like this: A utility files a rate case saying &quot;we need X billion dollars to maintain the grid, fight wildfires, upgrade infrastructure, and earn a profit for shareholders.&quot; The CPUC&apos;s public advocates office pushes back. Intervenors (consumer groups, solar advocates, environmental organizations) file arguments. Eventually, the commissioners vote on a final authorized revenue amount. That total is divided across all ratepayers.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The result is your per-kWh rate. And those rates have been climbing relentlessly. From 2021 to 2026, cumulative rate increases across the three IOUs range from 25% to 76%, depending on the utility and rate plan. SDG&amp;E customers have been hit hardest, with average rates now at 45.7 cents per kWh — the highest in the continental United States.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The $24 Fixed Charge
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                One of the CPUC&apos;s most controversial recent decisions was approving a monthly fixed charge of approximately $24 for all residential customers. This charge appears on your bill every month regardless of electricity usage. The stated goal is to lower per-kWh rates by shifting some grid costs into a flat fee — but for most customers, the total bill has still gone up because per-kWh rates haven&apos;t dropped enough to offset the new charge.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For solar customers, the fixed charge is particularly impactful. Even if your solar system produces enough energy to zero out your per-kWh charges, you still owe $24/month just for being connected to the grid. This is a permanent cost that solar alone cannot eliminate.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Rate Increases: 25-76% in Five Years
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Between 2021 and 2026, California&apos;s three investor-owned utilities have imposed cumulative rate increases ranging from 25% to 76%. The drivers are wildfire liability costs, grid hardening (burying power lines, installing covered conductors), renewable energy procurement mandates, and the utilities&apos; guaranteed return on equity for shareholders. Each of these costs flows directly to your bill.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                There is no indication this trend will reverse. All three utilities have pending rate cases for 2026 and beyond. The CPUC has historically approved the majority of requested increases, sometimes with modest reductions. If you&apos;re planning your household budget for the next decade, assuming 5-8% annual electricity rate increases is realistic based on recent history.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The NEM 3.0 Ruling
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In one of its most consequential decisions for solar customers, the CPUC adopted NEM 3.0 (Net Billing Tariff) in late 2022, effective April 2023. NEM 3.0 reduced the value of exported solar energy by roughly 75% compared to NEM 2.0. In March 2026, a California appellate court upheld the CPUC&apos;s NEM 3.0 decision, confirming it will remain in place.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under NEM 3.0, the economics of solar have shifted. Systems that maximize self-consumption (using the solar power you produce rather than exporting it) perform best. Battery storage has become more important. And Power Purchase Agreements (PPAs) — where a third party owns the system and sells you the power at a fixed rate — have become the most popular way for homeowners to go solar, because the PPA provider handles the NEM complexity and passes savings directly to the homeowner.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How to File a Complaint
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you have a dispute with your utility — billing errors, service problems, rate questions — the CPUC operates a consumer complaint process. You can file online at <strong>cpuc.ca.gov/complaints</strong> or call <strong>1-800-649-7575</strong>. The CPUC will investigate and can order utilities to correct billing errors or service issues. It&apos;s worth using if you&apos;ve hit a wall with your utility&apos;s customer service.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What This Means for Solar and PPAs
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The CPUC&apos;s trajectory is clear: rates are going up, fixed charges are here to stay, and NEM 3.0 has changed the solar export math. For homeowners, this creates a straightforward calculation. You can continue paying rates that have increased 25-76% in five years and are projected to keep climbing. Or you can lock in a fixed rate through a solar PPA that&apos;s typically 30-50% below your current utility rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The CPUC doesn&apos;t regulate PPA rates — those are private contracts between homeowners and solar providers. So while your utility rate is subject to whatever the CPUC approves next, a PPA rate is locked in for the life of the agreement. In a rising-rate environment, that predictability has real value.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Tired of Rates You Can&apos;t Control?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                See if you qualify to lock in a fixed energy rate that&apos;s lower than what you&apos;re paying now. Takes 60 seconds, no cost or obligation.
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
                href='/blog/california-energy-commission'
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
