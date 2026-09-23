import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: "Elevation Solar Reviews (2026): 4.6/5 Rating, 90 Complaints",
  description: "Elevation Solar has 19,000+ installs and a 4.6/5 EnergySage score, but 90 BBB complaints in 3 years and reported 6 to 12+ month activation delays.",
  alternates: { canonical: '/solar-installers/elevation-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Elevation Solar Review 2026",
  datePublished: '2026-04-24', dateModified: '2026-09-22',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/elevation-solar-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Elevation Solar', address: { '@type': 'PostalAddress', addressRegion: 'Multi-state', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Elevation Solar has a mixed reputation profile; 4.6/5 EnergySage (697 reviews) vs 90 BBB complaints and Yelp 2.9/5. Strong at sales and install, weaker at permitting and inspection coordination. Works for patient buyers.',
};

export default function ElevationReview() {
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
              <span className='text-foreground font-medium'>Elevation Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Elevation Solar Reviews (2026): Strong EnergySage Ratings, Activation Delays
              </h1>
              
              <LastReviewedStamp date="2026-09-22" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-09-22'>Updated September 22, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p><p className='text-3xl font-extrabold text-foreground mt-1'>3.5 <span className='text-lg text-muted-foreground'>/ 5</span></p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p><p className='text-sm text-foreground font-medium mt-1'>Buyers who want an Enphase-heavy system and can tolerate a longer-than-average activation window</p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p><p className='text-sm text-foreground font-medium mt-1'>You need fast PTO or rely on tight post-install support response</p></div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Elevation is a multi-state solar installer with operations in California, Arizona, Nevada, Texas, and Florida. The company has completed more than 19,000 installations, has a 4.6/5 EnergySage score across 697 reviews, genuinely above average, but also carries a 90-complaint BBB record in 3 years and a Yelp score of 2.9. That split suggests an installer that does design and sales well but struggles with the back half of the install process in California: permitting, inspections, and utility interconnection.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="Elevation Solar review and quote comparison" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation operates across 5 states with CA as one of its primary markets. A+ BBB rating despite the complaint volume, suggesting the company responds to and resolves most complaints; but that&apos;s separate from how long the original issues took to surface.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation is Enphase-heavy on microinverters, with a mix of Tier-1 panels and batteries depending on your specific quote. Install-day is usually quick and clean based on EnergySage reviews; the problems come after. Inspection failures, missing paperwork, and gateway communication issues are the recurring themes that keep systems offline for extended windows.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and Reputation</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>EnergySage: 4.6/5, 697 reviews, above average.</li>
                <li>BBB: A+, but 90 complaints in 3 years.</li>
                <li>Yelp: 2.9/5 — negative-skewing, common for post-install issues.</li>
                <li>Reddit (r/solar): mixed; specific threads describe 6 to 12+ month activation timelines.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Long gaps between install-day and Permission to Operate, commonly 6 to 12+ months.</li>
                <li>Repeated failed inspections (re-inspection delays add weeks).</li>
                <li>Microinverter and gateway communication issues after activation.</li>
                <li>Unresponsive post-install support for system monitoring problems.</li>
                <li>Communication breakdowns — sales-to-permitting-to-install handoff has visible friction.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What Elevation&apos;s Contract Actually Promises</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation&apos;s own purchase agreement &mdash; not a marketing page &mdash; states the workmanship warranty precisely: <strong>10 years</strong> on &ldquo;the installation and/or repair of solar panels, inverters, racking and railing,&rdquo; measured &ldquo;from the date of completed installation or repair,&rdquo; plus a separate <strong>10-year roof-penetration warranty</strong> for roof work Elevation performs (<a href='https://poweredbyelevation.com/purchase-agreement-terms/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>poweredbyelevation.com, Purchase Agreement Terms</a>, accessed September 22, 2026). That resolves the &ldquo;confirm specifics&rdquo; hedge this page used to carry. Above that, product warranties run through the original manufacturer &mdash; the agreement names SolarInsure, REC Solar, Enphase, Tesla, and Generac among the brands whose products it installs (same source). One limiting clause worth flagging directly: Elevation&apos;s own contract states that its repair of a defect is your &ldquo;sole and exclusive remedy,&rdquo; which is standard contract language but worth knowing before you sign, not after a dispute.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation offers all four finance paths — cash, loans, leases, and PPAs — through third-party partners. This broad option set is a genuine positive for buyers with specific tax or cash flow constraints.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing, and What Actually Qualifies for the Tax Credit</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation&apos;s own FAQ specifically states that &ldquo;leasing and PPA do not qualify&rdquo; for the federal solar tax credit, while a qualifying cash or loan purchase can apply the credit against the system price, subject to a tax professional&apos;s confirmation (<a href='https://poweredbyelevation.com/faq-categories/solar-energy/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>poweredbyelevation.com</a>, accessed September 22, 2026). No specific escalator rate, lease term, or loan APR is published on any Elevation page &mdash; get those in writing before you sign. For how the four financing types generally compare, see our <Link href='/blog/ppa-loan-vs-solar-lease-vs-cash-california' className='text-primary underline'>Solar Lease vs. PPA vs. Loan vs. Cash explainer</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Service After Installation, and Your 3-Day Right to Cancel</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation&apos;s service page describes an ongoing scope beyond the original install: system repairs, detailed inspections, ongoing maintenance, and proactive monitoring, and it states it will service &ldquo;all systems, no matter where you bought your panels&rdquo; &mdash; meaning a system another installer put on your roof (<a href='https://poweredbyelevation.com/solar-service/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>poweredbyelevation.com/solar-service</a>, accessed September 22, 2026). No specific response-time commitment is published.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Separately, and specific to California: Elevation&apos;s own purchase agreement states you &ldquo;have at least three business days to cancel your contract for any reason,&rdquo; extended to <strong>five business days if you&apos;re 65 or older</strong> &mdash; rights that apply in California but aren&apos;t specified for other states in the same document (<a href='https://poweredbyelevation.com/purchase-agreement-terms/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>poweredbyelevation.com, Purchase Agreement Terms</a>, accessed September 22, 2026). That&apos;s a real, usable right if you sign and change your mind fast.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The One Thing Elevation Doesn&apos;t Publish: a CSLB Number</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                We checked Elevation&apos;s homepage, its <a href='https://poweredbyelevation.com/terms/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>Terms page</a>, its Purchase Agreement Terms, and its <a href='https://poweredbyelevation.com/faq/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>general FAQ</a> and found no CSLB or other state contractor-license number published anywhere on poweredbyelevation.com (checked September 22, 2026). That&apos;s different from Sunrun, Palmetto, and Freedom Forever, each of which publishes at least one number on its own site. This doesn&apos;t mean Elevation is unlicensed &mdash; we were unable to independently cross-check CSLB&apos;s own online license lookup this week &mdash; but it does mean you can&apos;t verify the license from Elevation&apos;s own marketing before you&apos;re in a sales conversation. Ask for the exact license number and entity name in writing, then check it yourself; see our <Link href='/solar-installers/how-to-verify-a-solar-contractor-california' className='text-primary underline'>full contractor-verification walkthrough</Link>.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-2'><strong>Questions to ask before you rely on any of this:</strong></p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>What&apos;s the exact CSLB license number and the legal entity name on your contract &mdash; not just &ldquo;Elevation Solar&rdquo;?</li>
                <li>Elevation&apos;s own purchase agreement states its warranties transfer to &ldquo;all transferees of the structures to which products are installed&rdquo; &mdash; so a buyer should inherit the remaining workmanship and roof-penetration coverage. Get written confirmation of this at time of sale, since the agreement also requires notification and proof-of-coverage steps to make a claim.</li>
                <li>If you&apos;re financing with a loan to qualify for the tax credit, does your specific plan actually qualify, confirmed by your own tax professional?</li>
                <li>What&apos;s Elevation&apos;s actual response-time commitment for a service request, in writing, not just &ldquo;ongoing maintenance&rdquo; as a category?</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Elevation Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation is a reasonable pick if you&apos;re drawn to Enphase equipment, have flexible timing, and want broad finance options. It is not ideal if you need to hit an install deadline (EV rebate milestone, home-sale timing) or if post-install responsiveness matters more than sales and design. Several cleaner-reputation California regional installers are better fits for those profiles.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Is Elevation Solar a good company?</h3><p className='text-foreground/80'>Mixed. Strong EnergySage scores (4.6/5, 697 reviews) suggest good design/sales experience; 90 BBB complaints and 2.9 Yelp suggest back-half friction at permitting, inspection, and activation.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What&apos;s the typical Elevation install timeline?</h3><p className='text-foreground/80'>Install day is usually fast. Full process to Permission to Operate has been reported at 6 to 12+ months — longer than California industry average.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Elevation manufacture their own panels?</h3><p className='text-foreground/80'>No. Elevation uses Tier-1 third-party panels, Enphase microinverters are the default, and battery options are mainstream brands.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What&apos;s Elevation&apos;s actual workmanship warranty length?</h3><p className='text-foreground/80'>10 years on panel, inverter, and racking installation or repair, plus a separate 10-year roof-penetration warranty (<a href='https://poweredbyelevation.com/purchase-agreement-terms/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>poweredbyelevation.com, Purchase Agreement Terms</a>, accessed September 22, 2026) &mdash; more specific than a general &ldquo;25-year&rdquo; figure, which applies to manufacturer product warranties, not Elevation&apos;s own installation work.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Elevation publish a CSLB license number?</h3><p className='text-foreground/80'>Not on any page we could find (homepage, terms, purchase agreement, or FAQ). Ask for it directly and verify it at CSLB before signing.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Can I cancel after signing?</h3><p className='text-foreground/80'>In California, yes &mdash; at least three business days for any reason, five if you&apos;re 65 or older, per Elevation&apos;s own purchase agreement (<a href='https://poweredbyelevation.com/purchase-agreement-terms/' target='_blank' rel='noopener noreferrer' className='text-primary underline'>poweredbyelevation.com</a>, accessed September 22, 2026).</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Elevation Against Two California Alternatives.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>Fill out one 60-second form and we&apos;ll line up quotes from up to three California solar installers — so you can compare side by side.</p>
              <div className='flex justify-center'><Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="Elevation Solar review and quote comparison" />
            </div>

            <div className='mt-10'>
              <Link href='/best-solar-companies-california' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Best Solar Companies in California</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <VerifyInstallerBox installerName="Elevation" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
