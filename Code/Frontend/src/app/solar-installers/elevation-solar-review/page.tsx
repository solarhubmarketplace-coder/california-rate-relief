import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Elevation Solar Review 2026: Strong EnergySage Ratings But Activation Delays",
  description: "Elevation Solar has 19,000+ installs across 5 states and a 4.6/5 EnergySage rating — but 90 BBB complaints in 3 years, recurring permit/inspection failures, and a 2.9 Yelp. Honest 2026 review.",
  alternates: { canonical: '/solar-installers/elevation-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Elevation Solar Review 2026",
  datePublished: '2026-04-24', dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/elevation-solar-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Elevation Solar', address: { '@type': 'PostalAddress', addressRegion: 'Multi-state', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Elevation Solar has a mixed reputation profile — 4.6/5 EnergySage (697 reviews) vs 90 BBB complaints and Yelp 2.9/5. Strong at sales and install, weaker at permitting and inspection coordination. Works for patient buyers.',
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
                Elevation Solar Review 2026: Strong EnergySage Ratings, Activation Delays
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
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
                Elevation is a multi-state solar installer with operations in California, Arizona, Nevada, Texas, and Florida. The company has completed more than 19,000 installations, has a 4.6/5 EnergySage score across 697 reviews — genuinely above average — but also carries a 90-complaint BBB record in 3 years and a Yelp score of 2.9. That split suggests an installer that does design and sales well but struggles with the back half of the install process in California: permitting, inspections, and utility interconnection.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation operates across 5 states with CA as one of its primary markets. A+ BBB rating despite the complaint volume, suggesting the company responds to and resolves most complaints — but that&apos;s separate from how long the original issues took to surface.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation is Enphase-heavy on microinverters, with a mix of Tier-1 panels and batteries depending on your specific quote. Install-day is usually quick and clean based on EnergySage reviews — the problems come after. Inspection failures, missing paperwork, and gateway communication issues are the recurring themes that keep systems offline for extended windows.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and Reputation</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>EnergySage: 4.6/5, 697 reviews — above average.</li>
                <li>BBB: A+, but 90 complaints in 3 years.</li>
                <li>Yelp: 2.9/5 — negative-skewing, common for post-install issues.</li>
                <li>Reddit (r/solar): mixed; specific threads describe 6 to 12+ month activation timelines.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Long gaps between install-day and Permission to Operate — commonly 6 to 12+ months.</li>
                <li>Repeated failed inspections (re-inspection delays add weeks).</li>
                <li>Microinverter and gateway communication issues after activation.</li>
                <li>Unresponsive post-install support for system monitoring problems.</li>
                <li>Communication breakdowns — sales-to-permitting-to-install handoff has visible friction.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation offers all four finance paths — cash, loans, leases, and PPAs — through third-party partners. This broad option set is a genuine positive for buyers with specific tax or cash flow constraints.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Standard 25-year equipment coverage with manufacturer warranties passed through. Workmanship warranty terms vary by contract; confirm the specific length (10-year is common) before signing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Elevation Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Elevation is a reasonable pick if you&apos;re drawn to Enphase equipment, have flexible timing, and want broad finance options. It is not ideal if you need to hit an install deadline (EV rebate milestone, home-sale timing) or if post-install responsiveness matters more than sales and design. Several cleaner-reputation California regional installers are better fits for those profiles.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Is Elevation Solar a good company?</h3><p className='text-foreground/80'>Mixed. Strong EnergySage scores (4.6/5, 697 reviews) suggest good design/sales experience; 90 BBB complaints and 2.9 Yelp suggest back-half friction at permitting, inspection, and activation.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What&apos;s the typical Elevation install timeline?</h3><p className='text-foreground/80'>Install day is usually fast. Full process to Permission to Operate has been reported at 6 to 12+ months — longer than California industry average.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Elevation manufacture their own panels?</h3><p className='text-foreground/80'>No. Elevation uses Tier-1 third-party panels, Enphase microinverters are the default, and battery options are mainstream brands.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Elevation Against Two California Alternatives.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>Fill out one 60-second form and we&apos;ll line up quotes from up to three California solar installers — so you can compare side by side.</p>
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
    </PublicLayout>
  );
}
