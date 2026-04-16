import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar PPA vs Lease: Which Is Better for California Homeowners? (2026)',
  description:
    'Understand the difference between solar PPAs and leases in California. Side-by-side comparison, home sale impact, pros and cons, and which is right for you.',
  alternates: {
    canonical: '/blog/solar-ppa-vs-lease-california',
  },
  openGraph: {
    title:
      'Solar PPA vs Lease: Which Is Better for California Homeowners? (2026)',
    description:
      'Complete comparison of solar PPAs vs leases in California — how each works, costs, home sale impact, and which option makes the most sense.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Solar PPA vs Lease: Which Is Better for California Homeowners? (2026)',
  description:
    'Detailed comparison of solar power purchase agreements (PPAs) and solar leases in California, including costs, home sale impact, and decision framework.',
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
    '@id': 'https://ratereliefca.com/blog/solar-ppa-vs-lease-california',
  },
};

export default function SolarPPAVsLeaseCalifornia() {
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
                Solar PPA vs Lease: Which Is Better for California Homeowners? (2026)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>7 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                If you don&apos;t want to pay for a solar system outright or get a loan, you have two main options: a power purchase agreement (PPA) or a lease. Both let a third party own and maintain the system while you benefit from lower electricity bills. But they&apos;re structured differently, have different costs, and perform differently if you sell your home. This guide explains how each works, compares them directly, and helps you decide which is the better fit for your situation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How a Solar PPA Works
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In a PPA (Power Purchase Agreement), the solar provider owns the system and sells you the electricity it produces. You pay only for the power generated — not for the system itself.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Typical PPA terms:</strong> You agree to a 20-25 year contract at a fixed price per kilowatt-hour (kWh), usually 8-15 cents at signing (California average is around 10-12 cents). The rate increases 1-3% annually, typically tied to inflation. You pay based only on what the system produces — if it&apos;s cloudy, you produce less and pay less that month.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Example:</strong> Your PPA is priced at 12 cents per kWh. Your system produces 800 kWh in a given month. Your bill for solar electricity is $96 (800 × $0.12). If you also consumed 300 kWh from the grid at 40 cents/kWh, your total electricity bill is $216 ($96 solar + $120 grid).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How a Solar Lease Works
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In a lease, the solar provider owns the system and you pay a fixed monthly fee to use it, regardless of how much electricity it produces.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Typical lease terms:</strong> You agree to a 20-25 year lease with a fixed monthly payment (often $100-$250/month depending on system size), which may escalate 1-3% annually. You pay the same amount whether the system produces a lot or very little that month (though in practice, production is predictable, so providers size the payment to match typical generation).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Example:</strong> Your lease payment is $150 per month. Whether the system produces 600 kWh or 900 kWh that month, you pay $150. If you also consumed 300 kWh from the grid at 40 cents, your total bill is $270 ($150 lease + $120 grid).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Which Produces More Savings: PPA or Lease?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Both produce significant savings, but the math depends on your consumption pattern. For a typical household using 700+ kWh per month with predictable production, the difference is small (often 10-15% variation). Here&apos;s why:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>PPA advantage:</strong> You pay only for what&apos;s produced. If a cloudy month produces 30% less, your bill is proportionally lower. You share in the upside of high production months.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Lease advantage:</strong> Fixed payments are easier to budget and often lower upfront because the provider has certainty of revenue. Some leases also include performance guarantees — if the system underproduces below a minimum, the provider credits you the difference.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, PPAs are now more common in California, especially &quot;prepaid PPAs&quot; where you pay a lump sum upfront in exchange for very low per-kWh rates thereafter. These tend to produce slightly better savings than leases.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Side-by-Side Comparison Table
              </h2>

              <div className='overflow-x-auto my-6'>
                <table className='w-full text-sm border border-border'>
                  <thead className='bg-primary/10'>
                    <tr>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Feature</th>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>PPA</th>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Lease</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-border px-4 py-2'><strong>Upfront Cost</strong></td>
                      <td className='border border-border px-4 py-2'>$0 (or prepaid lump sum)</td>
                      <td className='border border-border px-4 py-2'>$0</td>
                    </tr>
                    <tr className='bg-primary/5'>
                      <td className='border border-border px-4 py-2'><strong>Payment Structure</strong></td>
                      <td className='border border-border px-4 py-2'>Per kWh (8-15¢)</td>
                      <td className='border border-border px-4 py-2'>Fixed monthly ($100-$250)</td>
                    </tr>
                    <tr>
                      <td className='border border-border px-4 py-2'><strong>Who Owns System</strong></td>
                      <td className='border border-border px-4 py-2'>Provider</td>
                      <td className='border border-border px-4 py-2'>Provider</td>
                    </tr>
                    <tr className='bg-primary/5'>
                      <td className='border border-border px-4 py-2'><strong>Maintenance</strong></td>
                      <td className='border border-border px-4 py-2'>Provider handles all</td>
                      <td className='border border-border px-4 py-2'>Provider handles all</td>
                    </tr>
                    <tr>
                      <td className='border border-border px-4 py-2'><strong>Tax Credits</strong></td>
                      <td className='border border-border px-4 py-2'>Provider claims (passed through as lower rates)</td>
                      <td className='border border-border px-4 py-2'>Provider claims (passed through as lower payment)</td>
                    </tr>
                    <tr className='bg-primary/5'>
                      <td className='border border-border px-4 py-2'><strong>Performance Risk</strong></td>
                      <td className='border border-border px-4 py-2'>You pay for what&apos;s produced (cloudy months cost less)</td>
                      <td className='border border-border px-4 py-2'>You pay fixed amount (provider absorbs underproduction)</td>
                    </tr>
                    <tr>
                      <td className='border border-border px-4 py-2'><strong>Net Metering Credits</strong></td>
                      <td className='border border-border px-4 py-2'>Provider receives credits (usually credited to you)</td>
                      <td className='border border-border px-4 py-2'>Provider receives credits (usually credited to you)</td>
                    </tr>
                    <tr className='bg-primary/5'>
                      <td className='border border-border px-4 py-2'><strong>Home Sale (Transfer)</strong></td>
                      <td className='border border-border px-4 py-2'>Transfers to buyer; buyer assumes contract</td>
                      <td className='border border-border px-4 py-2'>Transfers to buyer; buyer assumes lease</td>
                    </tr>
                    <tr>
                      <td className='border border-border px-4 py-2'><strong>Home Sale (Payoff)</strong></td>
                      <td className='border border-border px-4 py-2'>$0-$3,000 buyout or walk away</td>
                      <td className='border border-border px-4 py-2'>$0-$3,000 buyout or walk away</td>
                    </tr>
                    <tr className='bg-primary/5'>
                      <td className='border border-border px-4 py-2'><strong>Contract Length</strong></td>
                      <td className='border border-border px-4 py-2'>20-25 years</td>
                      <td className='border border-border px-4 py-2'>20-25 years</td>
                    </tr>
                    <tr>
                      <td className='border border-border px-4 py-2'><strong>Early Termination</strong></td>
                      <td className='border border-border px-4 py-2'>Buyout (typically 50-70% of remaining value)</td>
                      <td className='border border-border px-4 py-2'>Buyout (typically 50-70% of remaining value)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Home Sale Impact: Critical Difference
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The most important consideration for many homeowners is what happens if they sell. Both PPAs and leases are contractual obligations that tie to the property, not the person.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Best case:</strong> The buyer assumes the contract (takes over your PPA or lease). This is often seamless and actually helps the buyer because they inherit lower electricity rates. Both PPAs and leases transfer the same way.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>If the buyer won&apos;t assume it:</strong> You can usually pay a buyout fee to terminate the contract early. Typical buyout fees are 50-70% of the remaining net present value of the contract. For example, if you have 15 years left on a $150/month lease, the buyout might be $12,000-$18,000. This is a cost you&apos;re responsible for unless you negotiate it into the sale price.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Key point:</strong> Most homebuyers today understand that solar with a transferable PPA or lease is actually a selling feature (lower electricity bills), so contracts transfer smoothly in most California sales. However, it is a contingency to negotiate during sale.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Which Is More Common in 2026?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                PPAs now dominate the California residential solar market, especially prepaid PPAs. Leases are less common and are mostly offered by established companies. This shift happened because PPAs offer more flexibility (pay per kWh produced) and align better with NEM 3.0, where overproduction is less valuable. If you&apos;re shopping, you&apos;ll find more PPA options, better pricing on PPAs, and more installer competition on PPA terms.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Which Should You Choose?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Choose a PPA if:</strong> You have variable monthly usage (seasonal variation), you prefer to pay only for production, or you want slightly better long-term savings. PPAs are also more readily available today.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Choose a lease if:</strong> You strongly prefer fixed monthly payments for budgeting predictability, or the lease provider offers a performance guarantee that appeals to you. Leases can also sometimes offer a lower monthly payment than a PPA&apos;s equivalent cost, depending on pricing.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>In practice:</strong> The difference is small. Get quotes for both (if available) and compare the 25-year net present value. Usually, they&apos;re within 5-10% of each other. Choose the one that fits your cash flow and risk tolerance better.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                PPAs and leases are both solid no-money-down options for California homeowners. PPAs are now more common and typically offer slightly better long-term savings. Leases provide fixed monthly budgeting and are available through established providers. The real difference comes down to preference for variable vs. fixed payments and your situation with home sales (both transfer to buyers easily in most California markets). Get quotes for whichever option your provider offers, compare the per-kWh cost or monthly payment against your current utility rates, and make sure the contract terms (escalator rate, contract length, buyout fees) are clearly explained. The difference between a great PPA and a mediocre one is often bigger than the difference between a great PPA and a great lease, so focus on getting the best terms available to you.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Ready to Compare PPA and Lease Options?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program can help you get competitive quotes for both PPAs and leases, and compare them side-by-side. No obligation, no sales pressure.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Get Quotes
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
                href='/blog/solar-ppa-explained'
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
