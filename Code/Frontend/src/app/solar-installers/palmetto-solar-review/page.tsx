import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Palmetto Solar Review 2026: Honest Look at a National Installer With Serious Complaint Volume",
  description: "Palmetto Solar serves California and 22+ other states through subcontractors. SolarReviews 3.0/5, 300+ BBB complaints in 3 years, heavy LightReach PPA push. Here's the honest 2026 review.",
  alternates: { canonical: '/solar-installers/palmetto-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Palmetto Solar Review 2026: Honest Look at a National Installer",
  datePublished: '2026-04-24', dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/palmetto-solar-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Palmetto Solar', address: { '@type': 'PostalAddress', addressRegion: 'Multi-state', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '2.8', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Palmetto Solar has the highest BBB complaint volume in our California installer comparison, 300+ complaints in 3 years, a 3.0/5 SolarReviews score, and recurring themes of long delays, poor post-install support, and LightReach PPA/lease friction. Legitimate pick for no-upfront-cost buyers who want a national brand, but set expectations accordingly.',
};

export default function PalmettoReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link>
              <span>/</span>
              <Link href='/best-solar-companies-california' className='hover:text-primary'>Best Solar Companies in California</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Palmetto Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Palmetto Solar Review 2026: Honest Look at a High-Volume National Installer
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>9 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p>
                <p className='text-3xl font-extrabold text-foreground mt-1'>2.8 <span className='text-lg text-muted-foreground'>/ 5</span></p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p>
                <p className='text-sm text-foreground font-medium mt-1'>Buyers who want a $0-down LightReach PPA and a national brand, and who can tolerate longer timelines</p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p>
                <p className='text-sm text-foreground font-medium mt-1'>You value strong post-install support, fast PTO timelines, or buying the system outright</p>
              </div>
            </div>

            <div className='p-4 rounded-lg border border-amber-500/30 bg-amber-500/5 flex gap-3 items-start mb-10'>
              <AlertTriangle className='h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5' />
              <div className='text-sm text-foreground/80'>
                <strong className='text-foreground'>Reputation caveat:</strong> Palmetto has the highest BBB complaint volume of any installer in our California comparison. 300+ in 3 years, 124 closed in the past 12 months. We still include it because the business model works for some buyers, but the reputation data justifies extra due diligence.
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Palmetto Solar is a large national solar installer founded around 2010 that operates in California and 22+ other states through a subcontractor network. The company has scaled aggressively through a combination of in-house sales and third-party install partners, which shows up in both its reach and its complaint volume. Our take: Palmetto is a legitimate installer, but it&apos;s a volume play that doesn&apos;t consistently deliver the post-install service experience that smaller California regional installers can.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Corporate Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Palmetto is privately held and operates across the US Southeast, Mid-Atlantic, Texas, and expanding into the West — California is part of that Western expansion. In California, installation is typically handled by regional subcontractor partners rather than Palmetto&apos;s own W-2 crews, which is the core factor driving the variability in customer experience. Some California subcontractors are excellent; others are the source of the delays and communication problems that show up in complaint data.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Palmetto does not manufacture its own panels. The company installs premium black high-efficiency panels (typically 395–405W, 19.8%+ efficiency) alongside name-brand inverters and batteries (including Sonnen in some markets). Equipment selection varies by subcontractor. Install-day itself is usually completed in one day; the slow part is design, permitting, and utility interconnection, which customer reports routinely describe as 6 to 12+ months from contract to Permission to Operate.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Reputation Numbers</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SolarReviews shows Palmetto at approximately 3.0 out of 5 across 142+ reviews. Google aggregate hovers around 4.0 in most California metros, while Yelp runs significantly lower. 1.6/5 in some service area listings, which reflects the ghost-town pattern of dissatisfied customers finding Yelp more than satisfied ones. The BBB profile maintains an A+ rating but logs 300+ complaints over three years, with 124 closed in just the past 12 months. The company does respond to complaints, but volume alone is the highest in our California comparison.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Recurring themes across BBB, SolarReviews, and Reddit:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Long delays between contract signing and Permission to Operate. Commonly 6 to 12+ months.</li>
                <li>Deposits held for extended periods when projects stall or are cancelled.</li>
                <li>Underperforming systems — customer reports of continued high utility bills after activation.</li>
                <li>Post-install support that is slow or unresponsive, particularly when issues are surfaced more than 90 days after PTO.</li>
                <li>Financing disputes with LightReach, Palmetto&apos;s primary PPA/lease partner.</li>
                <li>Roof leaks and subcontractor workmanship issues traced back to regional partners.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing. LightReach PPA/Lease Model</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Palmetto&apos;s primary financing offering is a LightReach PPA/lease. Under this model, Palmetto or LightReach owns the system and the homeowner pays for the electricity the system produces, typically at a contracted rate below the current utility rate with an annual escalator. Cash and loan purchase options exist but are not the focus of Palmetto&apos;s sales funnel.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the single most important thing to understand about Palmetto: <strong>if you sign a LightReach PPA, you don&apos;t own the panels on your roof.</strong> That affects home-sale transferability, claim responsibility for roof leaks, and long-term savings math. Under California&apos;s AB 942, transfer rules are now more homeowner-friendly than they were pre-2025, but PPA/lease friction is still real.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Palmetto offers a 25-year standard warranty on equipment and (typically) workmanship, which is table-stakes for a modern installer. Monitoring is provided through a proprietary app — some California customers have reported being asked to pay for monitoring access after install, which is worth clarifying in your contract before signing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Palmetto Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Palmetto is a reasonable pick if the LightReach PPA fits your financial situation (no upfront cost, no tax liability to capture the ITC), and you value the scale of a national brand with a 25-year equipment warranty. It also makes sense if you have a strong local subcontractor partner whose reputation you&apos;ve verified independently — that&apos;s the single highest-impact variable in the Palmetto customer experience.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                It&apos;s a poor pick if you&apos;re a cash buyer (the national-brand premium isn&apos;t rewarded), if you need to hit a specific install timeline, or if post-install responsiveness is a priority. Several smaller California-only installers in our comparison (Baker Electric, New Day, Option One) carry dramatically cleaner reputation data at similar pricing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Is Palmetto Solar a good company?</h3>
                  <p className='text-foreground/80 leading-relaxed'>It&apos;s a legitimate installer that has completed thousands of installs, but the reputation data is substantially below the California regional installers in our comparison. 300+ BBB complaints in 3 years and a 3.0/5 SolarReviews score mean real risk you need to manage.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Does Palmetto install their own panels?</h3>
                  <p className='text-foreground/80 leading-relaxed'>No. Palmetto uses Tier-1 third-party panels and inverters. Installation in California is typically done by regional subcontractors, not Palmetto W-2 crews.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>What is LightReach?</h3>
                  <p className='text-foreground/80 leading-relaxed'>LightReach is the PPA/lease financing arm that partners closely with Palmetto. Under a LightReach contract, you don&apos;t own the panels; you pay for the power the system produces. Multiple customer complaints center on LightReach-specific financing disputes.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>How long does a Palmetto install actually take?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Install day is usually one day. But the full process — design, permitting, utility approval, PTO, frequently stretches 6 to 12+ months based on customer reports. Industry average for a straightforward California install is 2 to 3 months.</p>
                </div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Palmetto Against Two California Alternatives.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief works with multiple top-rated California solar installers. Fill out one 60-second form and we&apos;ll line up quotes from up to three installers. So you can compare their pricing, equipment, and warranty terms side by side.</p>
              <div className='flex justify-center'>
                <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>More California Installer Reviews</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-installers/sunrun-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Sunrun Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/sunnova-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Sunnova Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/baker-electric-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Baker Electric Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/new-day-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>New Day Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
              </div>
            </div>

            <div className='mt-10'>
              <Link href='/best-solar-companies-california' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Best Solar Companies in California</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
