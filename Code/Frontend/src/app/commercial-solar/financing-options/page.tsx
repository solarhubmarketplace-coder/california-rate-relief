import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';

export const metadata: Metadata = {
  title: 'Commercial Solar Financing in California: PPA, Lease, Direct, CPACE',
  description: "How to finance commercial solar in California — PPA (15-25 yr), lease, direct ownership with 30% ITC + 5-year MACRS, and CPACE up to 30 years via CSCDA Open PACE. Direct-pay for non-profits.",
  alternates: { canonical: '/commercial-solar/financing-options' },
  openGraph: { title: 'Commercial Solar Financing in California: PPA, Lease, Direct, CPACE', description: 'Complete guide to commercial solar financing options in California.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Commercial Solar Financing in California: PPA, Lease, Direct, CPACE',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/commercial-solar/financing-options' },
};

export default function CommercialFinancing() {
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
              <Link href='/commercial-solar' className='hover:text-primary transition-colors'>Commercial Solar</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Financing Options</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Commercial Solar Financing</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Commercial Solar Financing in California: PPA, Lease, Direct, CPACE</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>10 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Commercial solar financing in California has four practical paths: direct ownership (you buy it), a lease (someone else buys it, you rent it), a power purchase agreement (PPA — someone else buys it, you pay per kWh), or Commercial Property Assessed Clean Energy (CPACE — financed via property tax assessment). Each has different cash-flow profiles, tax treatment, and balance-sheet implications. This guide walks through the four, with the California-specific rules and the 2025-2026 incentive landscape.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Option 1: Direct Ownership</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Direct ownership means you (or your company) buys the solar system outright — with cash, a commercial loan, or project financing. You own the equipment, claim the full tax benefits, and capture all the long-term savings.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The tax benefits in 2026 are substantial. The federal Investment Tax Credit (ITC) is 30% of the system cost through 2032 under the Inflation Reduction Act, with additional bonuses for domestic content and labor/apprenticeship standards that can push the effective credit above 30%. On top of the ITC, commercial solar qualifies for 5-year MACRS depreciation, which accelerates the tax shield. Between the ITC and MACRS, the effective after-tax cost of a commercial solar system is often 40-50% below the sticker price.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Direct ownership fits:</strong> Companies with sufficient capital, taxable income to use the ITC and MACRS, long-term property ownership, and a desire for the lowest total lifetime cost.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Option 2: Commercial Lease</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A commercial solar lease is similar in structure to a residential lease but with longer terms (15-25 years) and stricter credit requirements (typically corporate balance sheet or investment-grade rating). The lessor owns the system, claims the ITC and MACRS, and charges you a fixed monthly payment with a 1-3.5% annual escalator.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The main advantage of a lease is balance-sheet treatment — the lease payment is an operating expense, not capex. The main disadvantage is total cost: the lessor takes a margin, so the lifetime cost is higher than direct ownership. You also can&apos;t claim the tax benefits.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Lease fits:</strong> Companies that want to avoid capex, don&apos;t have the taxable income to use the ITC effectively, or prefer predictable operating expenses.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Option 3: Power Purchase Agreement (PPA)</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A commercial PPA is structurally similar to a lease but priced per kWh rather than flat monthly. The developer owns the system, sells you the electricity at a contracted rate (typically below your current utility rate), and handles all maintenance. Terms run 15-25 years, with 1-3.5% annual escalators.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Commercial PPAs differ from residential PPAs on credit requirements (much stricter for commercial — typically corporate balance sheet or investment-grade), term length (commercial is often 20-25 years), and complexity of off-taker arrangements (multi-tenant commercial properties add legal structure).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>PPA fits:</strong> Companies with predictable load, no desire to own the system, strong corporate credit, and a preference for paying only for electricity actually delivered.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Option 4: CPACE (Commercial Property Assessed Clean Energy)</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                CPACE is a property-based financing mechanism specifically designed for commercial clean-energy projects. The loan is repaid via an assessment on your property tax bill — the mechanism is non-recourse and transfers with the property if you sell.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                In California, CPACE is administered statewide via the <strong>CSCDA Open PACE program</strong>. Most major California cities and counties have opted in; property owners apply locally. Terms: up to 30 years, fixed-rate, non-recourse, maximum ~30% loan-to-value. Funds can cover solar, battery storage, and related energy-efficiency upgrades.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>CPACE fits:</strong> Companies that want longer financing terms than a typical commercial loan, non-recourse debt, property-based repayment that transfers at sale, and can use the capital efficiency (PACE doesn&apos;t require personal or corporate guarantees the way a standard loan does). Detailed program mechanics on our{' '}<Link href='/commercial-solar/cpace-financing-california' className='text-primary hover:underline'>CPACE California page</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Non-Profit and Tax-Exempt Path: Direct Pay</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re a non-profit, school, religious institution, municipality, tribal government, or other tax-exempt entity, the Inflation Reduction Act created a pathway to monetize the 30% ITC even without taxable income. It&apos;s called <strong>direct pay</strong> (sometimes &quot;elective pay&quot;). The IRS issues a cash payment equivalent to the tax credit — so your non-profit effectively gets a 30% refund on the system cost.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Direct pay changes the financing math for non-profits and government buyers. Historically, these entities had to partner with a for-profit tax-equity investor to capture any tax benefit at all, which added complexity and cost. Direct pay lets them own the system directly and collect the ITC as cash.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How to Pick the Right Option</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A few heuristics that hold up:
              </p>
              <ul className='space-y-3 text-foreground/80 mb-6'>
                <li><strong>Profitable company with strong balance sheet and taxable income:</strong> Direct ownership usually wins on total cost because you capture ITC + MACRS.</li>
                <li><strong>Profitable company but wanting to avoid capex:</strong> PPA or lease, depending on whether you want kWh-based or flat-rate pricing.</li>
                <li><strong>Thin margins or limited taxable income:</strong> PPA or lease — you&apos;re giving up tax benefits you couldn&apos;t use anyway, and the developer values them more.</li>
                <li><strong>Multi-year property ownership plus a desire for long-term financing:</strong> CPACE, because the 30-year term and non-recourse structure is hard to match elsewhere.</li>
                <li><strong>Non-profit or tax-exempt:</strong> Direct ownership + direct pay on the ITC.</li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most California commercial EPCs can propose multiple financing structures for the same project. Get quotes that show the monthly payment, the 10-year and 25-year total cost, and the tax treatment under each structure. Compare apples-to-apples before deciding.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What is the federal tax credit for commercial solar in California in 2026?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>30% of system cost via the federal Investment Tax Credit, through 2032 under the IRA. Bonuses of 10% each are available for domestic-content and energy-community qualifying projects, so the effective credit can reach 40-50%.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can a non-profit get the solar tax credit in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes, via &quot;direct pay&quot; (elective pay). The IRS issues a cash payment equivalent to the 30% ITC for tax-exempt entities that own the system directly. Non-profits, schools, churches, and government entities all qualify.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What is CPACE and how does it differ from a regular loan?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>CPACE is a property-based financing structure repaid via an assessment on your property tax bill, up to 30 years, fixed-rate, non-recourse. It transfers with the property if you sell. Regular commercial loans are typically 5-15 years with personal or corporate guarantees. CPACE uses the property as security rather than the borrower&apos;s credit.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Are commercial PPAs different from residential PPAs?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. Commercial PPAs run 15-25 years (residential typically 10-20). Credit requirements are stricter — corporate balance sheet or investment-grade rather than consumer credit. Escalators 1-3.5%. Multi-tenant properties add legal complexity. Beyond that, the core structure (developer owns, you pay per kWh) is similar.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get Commercial Solar Financing Quotes</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief connects commercial buyers with EPCs that offer direct, lease, PPA, and CPACE-compatible proposals. Fill out one form — we&apos;ll route you to partners who can structure the right deal for your property.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request Commercial Quotes<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-10'>
              <Link href='/commercial-solar' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Commercial Solar Hub</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><VerifyCommercialSolarBox topic="financing" /></div>
    </PublicLayout>
  );
}
