import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar PPA Explained: How California\'s $0-Down Solar Works (2026)',
  description:
    'How a solar PPA works, what you actually pay, and why it makes sense for California homeowners in 2026. Complete breakdown with 25-year comparison.',
  alternates: {
    canonical: '/blog/solar-ppa-explained-california',
  },
  openGraph: {
    title:
      'Solar PPA Explained: How California\'s $0-Down Solar Works (2026)',
    description:
      'How a solar PPA works, what you pay, and why it makes sense for California homeowners. 25-year cost comparison included.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Solar PPA Explained: How California\'s $0-Down Solar Works (2026)',
  description:
    'How a solar PPA works, what you pay, and why it makes sense for California homeowners. Complete breakdown with cost comparisons.',
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
    '@id': 'https://ratereliefca.com/blog/solar-ppa-explained-california',
  },
};

export default function SolarPPAExplainedCalifornia() {
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
                Solar Financing
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar PPA Explained: How California&apos;s $0-Down Solar Works (2026)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
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
                A solar PPA (Power Purchase Agreement) is a financing model that puts solar panels on your roof with zero upfront cost. Instead of owning the system, you pay the company a fixed rate per kilowatt-hour (kWh) of power it produces. For California homeowners facing electricity rates of 35-46 cents per kWh, a PPA locking in 8-15 cents per kWh represents dramatic savings. This article explains how PPAs work, what you actually pay, and whether one makes sense for your situation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Is a Solar PPA?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A PPA is a contract between you and a solar company. The company owns the panels, installs them on your roof, maintains them, and handles all repairs and performance guarantees. In exchange, you agree to buy the electricity the panels produce at a fixed rate per kWh, typically for 20-25 years.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Unlike buying a system (which you own) or a lease (where you pay a fixed monthly bill regardless of production), a PPA ties your payment directly to how much electricity the system generates. More production = higher payment that month. But since production correlates with your home&apos;s usage (sunny days = AC usage = high production), you save money both ways.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The key advantage is $0 down. The solar company finances the entire installation, permits, equipment, and labor. You pay nothing upfront. The tradeoff is that you don&apos;t own the system, can&apos;t claim tax benefits (though the residential tax credit expired at the end of 2025 anyway), and are locked into a 20-25 year contract.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How It Works (Step by Step)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Proposal and site assessment.</strong> You provide your address and utility bill. The solar company uses satellite imagery and your bill history to estimate system size, production, and your projected monthly PPA payment. If the numbers work, they schedule a site visit.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Site visit and system design.</strong> An installer assesses roof condition, shading, structural capacity, and electrical infrastructure. They design a system sized to cover 60-100% of your electricity needs (you choose). They provide a detailed proposal including system specs, estimated annual production, and your estimated PPA rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. You sign a PPA contract.</strong> This is a legal document specifying the PPA rate (¢/kWh), contract term (usually 20-25 years), annual escalator (1-3%), and all terms and conditions. Before you sign, you should have a 25-year cost projection in writing. California law gives you three days to cancel — use this period to review with a lawyer if you have concerns.
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
                <strong>7. Monthly billing.</strong> Each month, your meter shows power generated by solar and power consumed from the grid. Your utility bill shows a credit for solar production (at your PPA rate) and a charge for grid consumption. If solar production exceeds usage, you get a net credit. If usage exceeds production, you pay the difference.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What You&apos;ll Pay
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Initial PPA rate:</strong> 8-15¢/kWh depending on location and utility rates. In high-rate territories like SDG&amp;E (45.7¢/kWh), a 10¢/kWh PPA represents a 78% savings. Even in lower-rate areas like PG&amp;E (41.46¢/kWh), a 12¢/kWh PPA is 71% below utility rates.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Monthly payment:</strong> If your system produces 600 kWh per month and the PPA rate is 10¢/kWh, you pay $60 to the solar company. Meanwhile, your utility bill drops by roughly $240 (600 kWh × 40¢/kWh utility rate). Your net savings: $180 per month, or $2,160 per year.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>No other costs.</strong> Maintenance, repairs, insurance, equipment replacement, and performance guarantees are all included. You don&apos;t maintain the system — the company does. If a panel fails, they replace it at no cost.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Escalator Clause
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is critical. Most PPAs include a 1-3% annual escalator. Year one you pay 10¢/kWh, year two you pay 10.3¢/kWh, year three 10.6¢/kWh, and so on. By year 20, you&apos;re paying 14.8¢/kWh — a 48% increase from the initial rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This sounds bad, but here&apos;s why it actually works in your favor: utility rates have been rising 8-12% per year in California. A 2% escalator compounds to a much slower increase. Over 25 years, utility rates could reach 100+ cents per kWh, while your PPA rate rises only to 17-18¢/kWh. Your savings grow larger every year as the gap widens.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Always request the exact escalator percentage in writing before signing. Ask the company for a 25-year cost projection showing the escalator applied year by year.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Happens After 25 Years
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                At the end of the contract term, you have three options:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Buyout:</strong> You purchase the system from the company at a pre-determined price (usually $2,000-$5,000). You then own it outright and get free electricity for life.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Renew:</strong> You sign a new PPA contract with the company, extending the arrangement for another 10-20 years at a new (higher) PPA rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. Removal:</strong> The company removes the system at no cost to you. Solar panels are recyclable and increasingly valuable, so removal isn&apos;t as costly as it sounds.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most homeowners choose the buyout — paying $3,000-$5,000 for 5+ more decades of free solar electricity is a fantastic deal.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Selling Your Home
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                When you sell, the PPA transfers automatically to the buyer. The buyer assumes the contract and continues paying the PPA rate. This can be an advantage (solar makes the home more attractive and valuable) or a challenge (some buyers are uncomfortable taking on an unfamiliar obligation).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To ease the sale, you can negotiate the buyout with the buyer (they pay $3,000-$5,000 and own the system free and clear) or the buyer can assume the contract. Most home sale contracts address the PPA explicitly. If you anticipate selling within the contract term, discuss buyout options with the solar company upfront.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                PPA vs Buying vs Leasing
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>PPA:</strong> $0 down, you pay per kWh produced, 20-25 year term, no maintenance burden, no tax benefits, moderate savings.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Lease:</strong> $0 down, you pay a fixed monthly bill (e.g., $150/month) regardless of production, 20-25 year term, similar to PPA but with less flexibility if production is lower than expected.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Purchase (cash or loan):</strong> Pay upfront ($15,000-$25,000 after savings, or finance with a loan), you own the system, claim tax benefits if available, 25+ year lifespan, highest long-term savings. Payback period: 9-12 years without tax credit, 6-7 years with it (now expired).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                PPAs are best for homeowners who want $0 down and immediate savings without ownership hassle. Purchasing is best for those with capital or financing who plan to stay 15+ years and want maximum savings.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why PPAs Dominate in 2026
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The federal residential tax credit expired December 31, 2025. This credit used to reduce the cost of a purchased system by 30%. Without it, purchased systems now have payback periods of 9-12 years instead of 6-7. For homeowners with limited capital or uncertain long-term plans, a $0-down PPA became the default option overnight.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Meanwhile, commercial entities (solar companies) can still claim the commercial investment tax credit and pass the savings to customers through lower PPA rates. So in 2026, PPAs are often more affordable than buying, which flips the traditional advantage of ownership.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who PPAs Work Best For
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                — Homeowners with electricity bills over $150/month (savings are substantial)<br />
                — Those planning to stay in the home 15+ years<br />
                — Owners who prefer $0 down and zero maintenance<br />
                — Anyone in high-rate territories (SDG&amp;E, PG&amp;E, SCE)<br />
                — Those without cash or strong financing to purchase outright<br />
                — Homeowners who are unsure about roof condition (company handles maintenance)
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                PPAs don&apos;t make sense if your roof needs replacement soon, if you&apos;re planning to sell within 5-10 years, or if your electricity consumption is under $100/month (savings may not justify the contract).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A solar PPA is a straightforward way to get solar at $0 down and lock in savings for 20-25 years. You don&apos;t own the system, don&apos;t maintain it, and can&apos;t claim tax benefits — but you get immediate bill savings without any upfront capital. In California&apos;s high-rate environment, especially with the residential tax credit gone, PPAs often offer better economics than purchasing for homeowners without substantial cash. If you qualify, it&apos;s worth exploring.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                See What a PPA Rate Would Look Like for Your Home
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                Get a personalized estimate based on your utility rates and monthly bill. Takes 60 seconds, no cost, no obligation.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check Your Eligibility
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
                href='/blog/is-solar-worth-it-california-2026'
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
