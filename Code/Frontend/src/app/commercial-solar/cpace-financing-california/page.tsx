import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';

export const metadata: Metadata = {
  title: 'CPACE Financing California: How Commercial PACE Works for Solar',
  description: "CPACE (Commercial Property Assessed Clean Energy) lets California commercial property owners finance solar up to 30 years, fixed-rate, non-recourse, repaid via property tax assessment. Transfers with sale.",
  alternates: { canonical: '/commercial-solar/cpace-financing-california' },
  openGraph: { title: 'CPACE Financing California: How Commercial PACE Works for Solar', description: 'CPACE solar financing in California.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'CPACE Financing California: How Commercial PACE Works for Solar',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/commercial-solar/cpace-financing-california' },
};

export default function CpaceFinancing() {
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
              <span className='text-foreground font-medium'>CPACE Financing</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Commercial Solar Financing</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>CPACE Financing California: How Commercial PACE Works for Solar</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                CPACE — Commercial Property Assessed Clean Energy — is a California financing structure specifically designed for commercial clean-energy projects (solar, storage, efficiency upgrades). It&apos;s repaid via an assessment on the property tax bill rather than as a conventional loan. The terms are longer, the structure is non-recourse, and the obligation transfers with the property if you sell. For commercial property owners evaluating how to pay for solar, CPACE is worth understanding alongside direct purchase, lease, and PPA.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How CPACE Works</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The mechanics: your property&apos;s taxing authority places a special assessment on the property equal to the financed amount. You repay the assessment via your property tax bill over the loan term (up to 30 years). The lender is secured by the assessment, not by your personal or corporate credit. If you sell the property, the remaining assessment stays with the property and transfers to the buyer.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Because CPACE is property-secured rather than personal/corporate-credit-secured, it&apos;s structurally closer to a mortgage than to a conventional business loan. Approval is based on the property&apos;s loan-to-value, existing mortgage consent (if applicable), and the project&apos;s energy-savings economics.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>California CPACE Program: CSCDA Open PACE</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s statewide commercial PACE program is the <strong>CSCDA Open PACE program</strong>, administered by the California Statewide Communities Development Authority. Most major California cities and counties have opted in; property owners apply locally through a PACE administrator.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Program features as of 2026:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Term:</strong> up to 30 years</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Rate:</strong> fixed for the full term</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Structure:</strong> non-recourse; no personal or corporate guarantee</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Repayment:</strong> property tax assessment; transfers with property sale</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Max loan-to-value:</strong> approximately 30% of property value</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Eligible uses:</strong> solar, battery storage, energy efficiency upgrades, water conservation</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Status in 2025-2026:</strong> program continues unchanged</span></li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who CPACE Fits</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Commercial property owners with long-term hold horizons.</strong> The 30-year term only makes sense if you expect to own the property long enough for the solar savings to offset the PACE assessment. If you&apos;re planning to sell in 3 years, PACE transfers with the property — which is fine but makes your sale more complex.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Property owners who need non-recourse structure.</strong> CPACE is secured by the property, not by personal or corporate credit. For owners who don&apos;t want solar debt on their corporate balance sheet or who don&apos;t want personal guarantees, CPACE is uniquely useful.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Property owners whose existing mortgage lender consents.</strong> Most commercial mortgage lenders have to consent to the PACE assessment because it takes super-priority ahead of the mortgage lien. Getting lender consent is one of the main hurdles to overcome before CPACE funds.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>CPACE vs Direct Purchase vs PPA</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a quick comparison:
              </p>
              <div className='overflow-x-auto rounded-xl border border-border my-6'>
                <table className='min-w-full text-sm'>
                  <thead className='bg-muted'>
                    <tr>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Factor</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>Cash Purchase</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>CPACE</th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>PPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-semibold text-foreground'>Upfront cost</td><td className='px-4 py-3 text-foreground/80'>Full</td><td className='px-4 py-3 text-foreground/80'>None (100% financed)</td><td className='px-4 py-3 text-foreground/80'>None</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-semibold text-foreground'>System ownership</td><td className='px-4 py-3 text-foreground/80'>You own</td><td className='px-4 py-3 text-foreground/80'>You own</td><td className='px-4 py-3 text-foreground/80'>Developer owns</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-semibold text-foreground'>Tax benefits (ITC, MACRS)</td><td className='px-4 py-3 text-foreground/80'>You claim</td><td className='px-4 py-3 text-foreground/80'>You claim</td><td className='px-4 py-3 text-foreground/80'>Developer claims</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-semibold text-foreground'>Term</td><td className='px-4 py-3 text-foreground/80'>N/A</td><td className='px-4 py-3 text-foreground/80'>Up to 30 years</td><td className='px-4 py-3 text-foreground/80'>15-25 years</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-semibold text-foreground'>Recourse</td><td className='px-4 py-3 text-foreground/80'>N/A</td><td className='px-4 py-3 text-foreground/80'>Non-recourse</td><td className='px-4 py-3 text-foreground/80'>N/A</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-semibold text-foreground'>Transfer at sale</td><td className='px-4 py-3 text-foreground/80'>System conveys</td><td className='px-4 py-3 text-foreground/80'>Assessment transfers</td><td className='px-4 py-3 text-foreground/80'>PPA transfers or buyer must qualify</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How to Apply</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                CPACE applications go through PACE administrators (third-party companies that originate PACE loans in partnership with CSCDA Open PACE or other California PACE districts). Your commercial solar EPC typically has relationships with multiple PACE administrators and can introduce you. The process:
              </p>
              <ol className='space-y-2 text-foreground/80 mb-6 list-decimal pl-6'>
                <li>Apply through a PACE administrator with property financials and project specs</li>
                <li>Get preliminary underwriting (typically 2-4 weeks)</li>
                <li>Obtain existing mortgage lender consent (most important gate)</li>
                <li>Close the PACE assessment (paperwork is routed through the county recorder)</li>
                <li>Project funds disburse to the EPC and construction begins</li>
              </ol>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                From application to funded close typically takes 60-120 days for a commercial solar project.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What is CPACE in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Commercial Property Assessed Clean Energy — a property-secured financing structure for commercial clean-energy projects in California. Up to 30 years, fixed-rate, non-recourse, repaid via property tax assessment.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does CPACE transfer when I sell the property?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. The assessment stays with the property. The buyer takes over the remaining PACE payments. This is sometimes framed as a benefit (no payoff required at sale) and sometimes a complication (sale process includes disclosing the PACE assessment).</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What are CPACE interest rates in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Fixed-rate, typically in the 6-9% range in 2026 depending on term, property quality, and market conditions. Rates are higher than traditional commercial mortgages but the 30-year term and non-recourse structure make up for it in many scenarios.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Who administers CPACE in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>CSCDA Open PACE is the statewide program. Most California cities and counties have opted in. Individual PACE administrators (third-party companies) originate the loans in partnership with the program.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Need CPACE-Compatible Commercial Solar Quotes?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief connects commercial property owners with EPCs that structure CPACE-financeable projects. Fill out one form — we&apos;ll route to qualified partners.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request Commercial Quotes<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-10'><Link href='/commercial-solar' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Commercial Solar Hub</Link></div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><VerifyCommercialSolarBox topic="cpace" /></div>
    </PublicLayout>
  );
}
