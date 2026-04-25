import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar, AlertTriangle } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: "Empire Solar Review 2026: Name Confusion, Mixed History, and Verification Checklist",
  description: "Empire Solar has several namesake entities across states. The California operation has had mixed history. Some older positive reviews, recent delay complaints and closure rumors for related entities. Verify carefully before signing.",
  alternates: { canonical: '/solar-installers/empire-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Empire Solar Review 2026",
  datePublished: '2026-04-24', dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/empire-solar-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Empire Solar', address: { '@type': 'PostalAddress', addressRegion: 'CA', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '3.0', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Empire Solar is a name used by multiple solar entities across states — the California operation has had mixed history with some older positive reviews offset by delay complaints and closure rumors for namesake entities. Verify CSLB license status before signing.',
};

export default function EmpireReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span>
              <Link href='/best-solar-companies-california' className='hover:text-primary'>Best Solar Companies in California</Link><span>/</span>
              <span className='text-foreground font-medium'>Empire Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Empire Solar Review 2026: Verify Which Empire Solar You&apos;re Actually Hiring
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='p-4 rounded-lg border border-amber-500/40 bg-amber-500/10 flex gap-3 items-start mb-8'>
              <AlertTriangle className='h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5' />
              <div className='text-sm text-foreground/80'>
                <strong className='text-foreground'>Name confusion warning:</strong> &ldquo;Empire Solar&rdquo; is a name used by multiple solar entities across different states. Some of these have had bankruptcies or closures. Before signing, verify the specific California entity you&apos;re hiring has an active CSLB license at <a href='https://www.cslb.ca.gov' target='_blank' rel='noopener noreferrer' className='text-primary underline'>cslb.ca.gov</a>.
              </div>
            </div>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p><p className='text-3xl font-extrabold text-foreground mt-1'>3.0 <span className='text-lg text-muted-foreground'>/ 5</span></p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p><p className='text-sm text-foreground font-medium mt-1'>Buyers with a specific Empire Solar California entity whose CSLB license is verified active</p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p><p className='text-sm text-foreground font-medium mt-1'>You can&apos;t identify exactly which Empire Solar entity is quoting you</p></div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                &ldquo;Empire Solar&rdquo; or &ldquo;Empire Solar Group&rdquo; is a name that has been used by several distinct solar companies across multiple states over the past decade. At least one namesake entity in Utah went through bankruptcy; others have pivoted or closed. The California operation, with mentions tied to the Pasadena area, has a mixed reputation with some older positive reviews and more recent complaints around delays and unfinished work. Before proceeding, homeowners should verify exactly which legal entity is quoting them.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Verification Checklist</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If a salesperson from &ldquo;Empire Solar&rdquo; contacts you, do the following before signing anything:
              </p>
              <ol className='list-decimal pl-6 space-y-2 text-foreground/80 mb-6'>
                <li><strong>Ask for the exact legal entity name and CSLB license number.</strong> A real California solar contractor must hold an active C-46 (Solar) or C-10 (Electrical) license.</li>
                <li><strong>Verify the license at <a href='https://www.cslb.ca.gov' target='_blank' rel='noopener noreferrer' className='text-primary underline'>cslb.ca.gov</a>.</strong> Confirm it&apos;s active (not expired, suspended, or revoked), check the bond status, and look for any disciplinary actions on record.</li>
                <li><strong>Cross-check the business address and officers against the company&apos;s website.</strong> A mismatch is a red flag.</li>
                <li><strong>Search recent news for the exact entity name</strong> (not just &ldquo;Empire Solar&rdquo; — include the city and state). Look for bankruptcy filings, lawsuits, or consumer complaints.</li>
                <li><strong>Ask who will actually perform the installation.</strong> Is it the sales entity&apos;s in-house W-2 crew, or a third-party subcontractor? Get the installing contractor&apos;s CSLB license too.</li>
                <li><strong>Ask the sales rep which panel/inverter brands they&apos;ll install</strong> and get that in writing. Mainstream Tier-1 options (Qcells, REC, Canadian Solar, Panasonic/Maxeon panels; Enphase, SolarEdge inverters) are what you want.</li>
              </ol>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What We Know About the California Entity</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Review data for Empire Solar in California is inconsistent:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Some older Yelp/Google reviews (2019–2022) are positive.</li>
                <li>More recent reports include delays on install completion, some unfinished work, roof leak complaints, and financing handoff issues when a third-party lender wasn&apos;t aligned with the install schedule.</li>
                <li>Namesake bankruptcy and closure mentions appear in search results for Empire Solar entities in other states, easy to conflate with the CA operation.</li>
                <li>CSLB license status varies by specific entity; the original Empire Solar Group license status is worth verifying if that&apos;s who&apos;s quoting you.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing and Products</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California operation has offered solar loans through third-party financing partners and uses Tier-1 third-party panels. No proprietary panel manufacture. Equipment selection varies by install.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Empire Solar Could Make Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The honest take: only if you can clearly identify and verify the specific Empire Solar California entity, its CSLB license is active, and their recent customer references check out. Given the name-confusion risk and the several cleaner-reputation California alternatives in this comparison (Baker Electric, Solar Optimum, New Day, Option One, Sunlux), most buyers will find a lower-risk option elsewhere at similar pricing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Is Empire Solar still in business in California?</h3><p className='text-foreground/80'>Varies by entity. Some &ldquo;Empire Solar&rdquo; businesses have been bankrupted or closed. Verify the specific CA entity&apos;s CSLB license before signing.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What&apos;s the difference between Empire Solar in CA versus other states?</h3><p className='text-foreground/80'>These are legally distinct entities that happen to share the name. Reviews for an Empire Solar in Utah or elsewhere do not apply to a California operation.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>How do I check a CSLB license?</h3><p className='text-foreground/80'>Go to <a href='https://www.cslb.ca.gov' target='_blank' rel='noopener noreferrer' className='text-primary underline'>cslb.ca.gov</a>, click &ldquo;Check a License,&rdquo; enter the number. You can see the status, bond amount, workers comp, and any disciplinary record.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Get Quotes From Verified California Installers.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>Fill out one 60-second form and we&apos;ll line up quotes from up to three California solar installers with active CSLB licenses and verified reputations; so you can compare side by side.</p>
              <div className='flex justify-center'><Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-10'>
              <Link href='/best-solar-companies-california' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Best Solar Companies in California</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
