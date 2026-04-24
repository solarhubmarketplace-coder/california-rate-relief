import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SGIP Commercial Battery Storage Rebates California 2026',
  description: "California's Self-Generation Incentive Program (SGIP) rebates for commercial battery storage — current rates, budgets, waitlist status, and the December 2025 Large-Scale budget closure.",
  alternates: { canonical: '/commercial-solar/sgip-battery-storage' },
  openGraph: { title: 'SGIP Commercial Battery Storage Rebates California 2026', description: "California SGIP rebates for commercial battery storage.", type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'SGIP Commercial Battery Storage Rebates California 2026',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/commercial-solar/sgip-battery-storage' },
};

export default function SgipCommercialStorage() {
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
              <span className='text-foreground font-medium'>SGIP Battery Storage</span>
            </nav>

            <div className='mb-6 rounded-xl border-2 border-red-500/40 bg-red-500/10 p-5'>
              <div className='flex items-start gap-3'>
                <AlertTriangle className='h-6 w-6 text-red-400 flex-shrink-0 mt-0.5' />
                <div>
                  <p className='text-xs font-bold uppercase tracking-widest text-red-300 mb-1'>Program status — December 2025</p>
                  <p className='text-foreground font-semibold leading-relaxed'>The SGIP Large-Scale Storage budget closed to new applications after December 30, 2025. Other SGIP budget categories (general market, equity) continue in 2026 but many are waitlisted. Verify current budget availability with your utility and project EPC before designing a commercial storage project that depends on SGIP economics.</p>
                </div>
              </div>
            </div>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>California Storage Incentives</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>SGIP Commercial Battery Storage Rebates California 2026</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Self-Generation Incentive Program (SGIP) provides rebates for behind-the-meter battery storage — including commercial battery systems paired with solar. The program has been a major driver of commercial battery economics in California over the past decade, but 2025-2026 is a transition period: the Large-Scale Storage budget closed to new applications after December 30, 2025, several general-market budgets are waitlisted, and remaining funds are stepping down as incentive levels decrease.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How SGIP Commercial Rebates Work</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SGIP is administered by California&apos;s investor-owned utilities (PG&amp;E, SCE, SDG&amp;E, SoCalGas) under CPUC oversight. The program offers per-kWh rebates for qualifying battery storage installed behind the meter at customer sites. The rebate amount varies by:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Budget category:</strong> General Market, Equity, Equity Resiliency, Large-Scale</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Step level:</strong> Incentive rates decline over time as each budget fills (stepped down)</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Customer class:</strong> Residential, small commercial, large commercial, non-profit</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Resilience eligibility:</strong> High-fire-risk area, medical baseline customer, etc.</span></li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                2025 rebate rates stepped down to approximately <strong>$0.15-$1.00 per kWh of storage capacity</strong> depending on the specific budget, step, and equity/resilience qualifications. Higher rates apply to equity-resilience customers; lower rates to general-market large commercial.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Current Budget Status (as of early 2026)</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Large-Scale Storage budget:</strong> Closed to new applications after December 30, 2025. Projects that applied before the deadline are still in queue for funding.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>General Market commercial budget:</strong> Continues in 2026. Many utility-specific budgets are waitlisted as demand outpaces available funding. Application to approval can take 3-9 months depending on waitlist position.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Equity and Equity Resiliency budgets:</strong> Continue with prioritized funding. Target low-income communities, disadvantaged communities, high-fire-risk areas, and medical baseline customers. Rates are typically significantly higher than General Market.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Check current budget availability with your utility&apos;s SGIP webpage and the CPUC&apos;s program handbook before finalizing your project pro-forma. Budget availability changes frequently as applications are processed.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>SGIP + Federal ITC Stack</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California SGIP rebate stacks on top of the federal 30% Investment Tax Credit. For a commercial battery install, the effective cost math works roughly like:
              </p>
              <ol className='space-y-2 text-foreground/80 mb-6 list-decimal pl-6'>
                <li><strong>Gross installed cost.</strong> E.g., $400/kWh × 200 kWh = $80,000</li>
                <li><strong>Less SGIP rebate.</strong> E.g., $0.30/kWh × 200 kWh = $60,000 rebate (directional — varies by step/budget) — net $20,000</li>
                <li><strong>Less 30% ITC.</strong> Applied to gross cost before SGIP per current IRS guidance (verify with your tax advisor): $24,000 credit</li>
                <li><strong>Less MACRS depreciation tax shield.</strong> Applied to gross cost less half the ITC per standard IRS rules</li>
                <li><strong>Effective after-tax cost:</strong> often approaching zero or negative on smaller commercial systems when SGIP is at its high-tier rates</li>
              </ol>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The specific numbers depend on your exact SGIP budget category, current step rate, tax rate, and system size. Your commercial EPC and tax advisor should run the actual pro-forma.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How to Apply for SGIP</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Commercial SGIP applications go through your utility&apos;s SGIP program administrator (PG&amp;E, SCE, SDG&amp;E, SoCalGas). Your battery installer or commercial solar EPC typically handles the paperwork. Key timing:
              </p>
              <ol className='space-y-2 text-foreground/80 mb-6 list-decimal pl-6'>
                <li>Submit the SGIP reservation application with project specs and equipment details</li>
                <li>Utility reviews and reserves the rebate amount (days to weeks depending on queue)</li>
                <li>Install the battery system per the reserved specifications</li>
                <li>Submit post-installation documentation (interconnection approval, system commissioning)</li>
                <li>Receive rebate payment (usually within 30-90 days of post-install approval)</li>
              </ol>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is SGIP still available for commercial in 2026?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>The General Market and Equity budgets continue in 2026 but many are waitlisted. The Large-Scale Storage budget closed to new applications after December 30, 2025. Verify availability with your utility before counting on the rebate.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How much is the SGIP rebate for commercial battery storage?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Approximately $0.15-$1.00 per kWh of installed storage capacity depending on budget, step, and equity qualifications. Equity-Resilience customers in high-fire-risk areas see the highest rates. Standard General Market commercial is at the lower end.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can SGIP stack with the federal ITC?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. SGIP and the 30% federal Investment Tax Credit stack. Combined, they can reduce commercial battery cost by 50-80% on some projects. Verify the specific stacking rules with your tax advisor since state rebates can reduce the ITC-eligible basis in some cases.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What happens when SGIP budgets run out?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>The CPUC typically steps down rates as budgets fill and opens new budget allocations periodically. When a specific budget runs out, projects that applied are either waitlisted for the next allocation or move to a different budget if eligible. Historically the program has been re-funded multiple times; long-term availability is not guaranteed.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Maximize SGIP + ITC on Your Commercial Battery Project</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief routes your commercial battery project to EPCs that handle SGIP applications routinely and can structure the rebate + ITC + MACRS stack for maximum benefit.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request Commercial Quotes<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-10'><Link href='/commercial-solar' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Commercial Solar Hub</Link></div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
