import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, Clock } from 'lucide-react';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { CommercialReviewButton, CommercialReviewForm } from '@/components/growth/CommercialReview';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';
import { Byline } from '@/components/trust/Byline';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

export const metadata: Metadata = {
  title: "CPACE Financing California: How Commercial PACE Works",
  description: "CPACE lets California commercial property owners finance solar and repay it through the property tax bill. How CSCDA Open PACE works and what to ask.",
  alternates: { canonical: '/commercial-solar/cpace-financing-california' },
  openGraph: { title: 'CPACE Financing California: How Commercial PACE Works for Solar', description: 'CPACE solar financing in California.', type: 'article', publishedTime: '2026-04-23T00:00:00Z', images: [CRR_SOCIAL_CARD] },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'CPACE Financing California: How Commercial PACE Works for Solar',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: CRR_AUTHOR_PERSON,
  publisher: { '@type': 'Organization', name: 'California Rate Relief', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
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
              <Byline updated="2026-04-23" />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                CPACE — Commercial Property Assessed Clean Energy — is a California financing structure specifically designed for commercial clean-energy projects (solar, storage, efficiency upgrades). It&apos;s repaid via an assessment on the property tax bill rather than as a conventional loan. Terms are set by the PACE administrator, and the obligation stays with the property if you sell. For commercial property owners evaluating how to pay for solar, CPACE is worth understanding alongside direct purchase, lease, and PPA.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How CPACE Works</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The mechanics: your property&apos;s taxing authority places a special assessment on the property equal to the financed amount. You repay the assessment via your property tax bill over the financing term, which the administrator sets. The financing is secured by the assessment on the property. If you sell the property, the remaining assessment stays with the property and transfers to the buyer.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Because CPACE is property-secured rather than personal/corporate-credit-secured, it&apos;s structurally closer to a mortgage than to a conventional business loan. Approval is based on the property&apos;s loan-to-value, existing mortgage consent (if applicable), and the project&apos;s energy-savings economics.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The legal basis is state law. Streets and Highways Code §5898.20 lets a public agency designate an area where property owners may enter voluntary contractual assessments to finance distributed generation renewable energy and energy or water efficiency improvements, and §5898.12 states the Legislature&apos;s intent that this cover residential, commercial, industrial, agricultural and other real property (<a href='https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=5898.20.&lawCode=SHC' className='text-primary underline underline-offset-2' target='_blank' rel='noopener noreferrer'>California Legislative Information</a>, checked September 24, 2026).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>California CPACE Program: CSCDA Open PACE</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                One statewide option is the <strong>CSCDA Open PACE program</strong> of the California Statewide Communities Development Authority, which covers residential and commercial property owners. CSCDA says a city or county must be a CSCDA member and adopt a resolution opting in to Open PACE before property owners there can use it; owners apply through one of the program&apos;s commercial PACE providers.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What CSCDA says its Open PACE administrators do, and what to confirm with them:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Financing:</strong> CSCDA says its administrators provide 100% financing for eligible projects</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Rate and term:</strong> set by the administrator; ask whether the rate is fixed for the whole term</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Structure:</strong> ask whether the financing carries any personal or corporate guarantee</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Repayment:</strong> through the property tax bill; the assessment stays with the property</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Size limit:</strong> ask the administrator how it caps the assessment against property value</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Eligible uses:</strong> energy efficiency, renewable energy, water conservation and seismic improvements, per CSCDA</span></li>
                <li className='flex items-start gap-2'><span className='text-primary font-bold mt-1'>•</span><span><strong>Local availability:</strong> confirm your city or county has opted in</span></li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who CPACE Fits</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Commercial property owners with long-term hold horizons.</strong> A long term only makes sense if you expect to own the property long enough for the bill reductions to cover the PACE assessment. If you&apos;re planning to sell soon, the assessment stays with the property — which is fine but makes your sale more complex.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Property owners who want property-secured financing.</strong> CPACE is secured by an assessment on the property. For owners who don&apos;t want a conventional business loan, that can be useful; confirm the guarantee and balance-sheet treatment with the administrator and your accountant.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Property owners whose existing mortgage lender consents.</strong> A PACE assessment is collected with property taxes, so a mortgage lender will usually want to approve it; getting that consent is one of the main hurdles before CPACE funds.
              </p>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className='not-prose'>
                <CommercialReviewButton />
              </div>

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
                    <tr className='border-t border-border'><td className='px-4 py-3 font-semibold text-foreground'>Term</td><td className='px-4 py-3 text-foreground/80'>N/A</td><td className='px-4 py-3 text-foreground/80'>Set by administrator</td><td className='px-4 py-3 text-foreground/80'>Set by contract</td></tr>
                    <tr className='border-t border-border'><td className='px-4 py-3 font-semibold text-foreground'>Recourse</td><td className='px-4 py-3 text-foreground/80'>N/A</td><td className='px-4 py-3 text-foreground/80'>Secured by the property</td><td className='px-4 py-3 text-foreground/80'>N/A</td></tr>
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
                <li>Get preliminary underwriting</li>
                <li>Obtain existing mortgage lender consent (most important gate)</li>
                <li>Close the PACE assessment (paperwork is routed through the county recorder)</li>
                <li>Project funds disburse to the EPC and construction begins</li>
              </ol>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ask the administrator for its expected time from application to funded close, and build it into the project schedule.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What is CPACE in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Commercial Property Assessed Clean Energy — a property-secured financing structure for commercial clean-energy projects in California, repaid through the property tax bill.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does CPACE transfer when I sell the property?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. The assessment stays with the property. The buyer takes over the remaining PACE payments. This is sometimes framed as a benefit (no payoff required at sale) and sometimes a complication (sale process includes disclosing the PACE assessment).</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What are CPACE interest rates in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>This page does not publish a rate: the administrator sets it by term, property and market conditions. Ask for the rate, whether it is fixed, all fees and the total repayment, and compare them with a conventional loan.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Who administers CPACE in California?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>CSCDA Open PACE is one statewide program; a city or county has to opt in before owners there can use it. PACE providers (third-party companies) originate the financing through the program.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Check the amount before you finance it</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>C-PACE finances a project cost; it does not set one. The assessment runs with the property for the whole term, so the figure it is written against matters more here than under a structure you can refinance out of. Read the quoted amount against <Link href='/commercial-solar/cost-per-watt-california' className='text-primary hover:underline'>commercial solar cost per watt in California</Link>, which gives the published per-watt figures by system size and the date they were checked.</p>
            </div>

            {/* The closing ask (2026-09-23): the inline commercial form, in place of
                a link to /commercial-assessment. Heading and intro keep the old box's wording. */}
            <CommercialReviewForm
              heading='Request a commercial solar assessment'
              intro='Tell us about your property and project. California Rate Relief reviews inquiries and forwards suitable projects to an independent provider, subject to service availability.'
              className='mt-12'
            />

            <div className='mt-10'><Link href='/commercial-solar' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Commercial Solar Hub</Link></div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><VerifyCommercialSolarBox topic="cpace" /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
