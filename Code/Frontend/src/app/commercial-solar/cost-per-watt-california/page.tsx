import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';

export const metadata: Metadata = {
  title: 'Commercial Solar Panels Cost in California 2026: $/Watt by System Size',
  description: "What commercial solar costs in California in 2026 — $1.72/Wdc national average (up 10% YoY). Prices by segment: small business, mid-market, large C&I, and what the 30% ITC + MACRS bring the effective cost to.",
  alternates: { canonical: '/commercial-solar/cost-per-watt-california' },
  openGraph: { title: 'Commercial Solar Panels Cost in California 2026: $/Watt by System Size', description: 'Commercial solar pricing in California by system size.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Commercial Solar Panels Cost in California 2026',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/commercial-solar/cost-per-watt-california' },
};

export default function CommercialSolarCost() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link><span>/</span>
              <Link href='/commercial-solar' className='hover:text-primary transition-colors'>Commercial Solar</Link><span>/</span>
              <span className='text-foreground font-medium'>Cost Per Watt</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Commercial Solar Pricing</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Commercial Solar Panels Cost in California 2026: $/Watt by System Size</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Commercial solar in the U.S. averaged approximately <strong>$1.72 per Wdc installed</strong> in 2025, up 10% year-over-year per SEIA data. California&apos;s commercial pricing generally tracks the national average, though California-specific pricing data was not verified across three independent public sources. Actual pricing varies widely by system size — the larger the project, the lower the $/W — and by segment. Here&apos;s what commercial solar realistically costs in California in 2026 before and after the 30% ITC plus MACRS depreciation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Cost by System Size Segment</h2>

              <div className='overflow-x-auto rounded-xl border border-border my-8'>
                <table className='min-w-full text-sm'>
                  <thead className='bg-muted'>
                    <tr>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Segment</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Typical Size</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>$/Wdc (pre-incentive)</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Total System Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>Small business</td>
                      <td className='px-4 py-3 text-foreground/80'>10-50 kW</td>
                      <td className='px-4 py-3 text-foreground/80'>$1.83-$3.50</td>
                      <td className='px-4 py-3 text-foreground/80'>$18K-$175K</td>
                    </tr>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>Mid-market</td>
                      <td className='px-4 py-3 text-foreground/80'>50-500 kW</td>
                      <td className='px-4 py-3 text-foreground/80'>$1.40-$2.00</td>
                      <td className='px-4 py-3 text-foreground/80'>$70K-$1M</td>
                    </tr>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>Large C&amp;I</td>
                      <td className='px-4 py-3 text-foreground/80'>500 kW-several MW</td>
                      <td className='px-4 py-3 text-foreground/80'>$1.10-$1.70</td>
                      <td className='px-4 py-3 text-foreground/80'>$550K-$5M+</td>
                    </tr>
                    <tr className='border-t border-border'>
                      <td className='px-4 py-3 font-semibold text-foreground'>Agricultural</td>
                      <td className='px-4 py-3 text-foreground/80'>100 kW-2 MW (often ground-mount)</td>
                      <td className='px-4 py-3 text-foreground/80'>Overlaps mid/large</td>
                      <td className='px-4 py-3 text-foreground/80'>$200K-$3M</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The scale economics are real. A 50 kW rooftop system has roughly the same engineering, permitting, and interconnection overhead as a 500 kW system, but those fixed costs get spread across 10x more wattage on the larger project. That&apos;s why $/W drops sharply as you move from small-business scale up to large C&amp;I.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What&apos;s In a Commercial Solar Price</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical commercial solar install cost per watt breaks down approximately as:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Modules (panels):</strong> ~25-35% of total cost</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Inverters + BOS (balance of system):</strong> ~15-20%</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Racking / mounting structure:</strong> ~8-12% (higher for carport/canopy, lower for rooftop)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Installation labor:</strong> ~15-20%</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Engineering, permitting, interconnection:</strong> ~5-10%</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>EPC margin, financing fees, contingency:</strong> ~10-20%</span></li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What Changes With Battery Storage</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under California&apos;s NEM 3.0 / Net Billing Tariff rules, commercial solar systems increasingly include battery storage to capture self-consumption value rather than exporting at low rates. Adding battery storage typically increases total project cost by 30-60%, with commercial lithium battery pricing in California running approximately $400-$700 per kWh installed in 2026 (directional; varies by size, chemistry, and inverter integration).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California SGIP (Self-Generation Incentive Program) still offers commercial battery rebates in 2026, though the large-scale storage budget closed to new applications after December 30, 2025. Tiered rates depend on budget, step, and equity status. Details on our{' '}<Link href='/commercial-solar/sgip-battery-storage' className='text-primary hover:underline'>SGIP commercial battery page</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Effective Cost After Incentives</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The sticker price isn&apos;t what you actually pay if you own the system and have taxable income. The federal Investment Tax Credit (ITC) is 30% of system cost through 2032 (with bonuses for domestic content + labor that can push the effective credit higher). On top of that, 5-year MACRS depreciation accelerates the tax shield further.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Worked example: a $500,000 mid-market commercial solar install at $1.70/Wdc for a 294 kW system. 30% ITC = $150,000 credit. MACRS depreciation in year 1 (bonus-adjusted) can recover another ~$100,000-$140,000 in federal tax shield depending on your effective rate. Effective first-year after-tax cost ends up around $210,000-$250,000 — roughly half the sticker price.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re a non-profit or tax-exempt entity, the ITC is still accessible via &quot;direct pay&quot; — the IRS issues a cash payment equivalent to the credit. The MACRS depreciation doesn&apos;t apply (no taxable income to shield), but the direct-pay ITC by itself still produces 30% off the effective cost.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Why California Pricing Tracks (But Varies From) the National Average</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s commercial solar market has high labor costs, strict permitting, and complex interconnection processes that tend to push pricing above the national average at the small-business and mid-market tiers. Offsetting that, California&apos;s high volume of commercial projects means EPCs have strong supply-chain relationships and scale economies — so the price spread between California and lower-cost markets narrows on large projects. Net: expect your specific project to land within the segment ranges above, with individual quotes varying 15-30% across qualified EPCs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How much does commercial solar cost per watt in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>$1.10-$3.50/Wdc depending on system size. Small business (under 50 kW) runs $1.83-$3.50/W. Mid-market (50-500 kW) runs $1.40-$2.00/W. Large C&amp;I (500 kW+) runs $1.10-$1.70/W. National commercial average in 2025 was $1.72/W per SEIA.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What does a 500 kW commercial solar system cost in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>A 500 kW mid-market/large commercial solar system typically runs $700,000-$900,000 pre-incentive in California (at $1.40-$1.80/W). After the 30% ITC and MACRS depreciation, the effective after-tax cost for a profitable buyer is roughly $350,000-$480,000.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can you finance commercial solar without capex?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes — via PPA, lease, or CPACE. See our full{' '}<Link href='/commercial-solar/financing-options' className='text-primary hover:underline'>commercial solar financing options</Link>{' '}guide.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does California commercial solar cost more than residential?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>On a per-watt basis, commercial costs less than residential because of scale. California residential solar runs approximately $2.41-$3.14/W in early 2026; commercial averages $1.72/W and drops below $1.50/W at larger system sizes.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get Itemized Commercial Solar Quotes</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief routes your project to commercial EPCs for itemized quotes with $/W breakdown and financing options.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request Commercial Quotes<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-10'><Link href='/commercial-solar' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Commercial Solar Hub</Link></div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><VerifyCommercialSolarBox topic="general" /></div>
    </PublicLayout>
  );
}
