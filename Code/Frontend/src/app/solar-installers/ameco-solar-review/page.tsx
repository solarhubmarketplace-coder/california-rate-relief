import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Ameco Solar Review 2026: Long-Standing LA Regional Installer With Roofing Integration",
  description: "Ameco Solar (Paramount/LA area) combines decades of electrical and roofing experience with solar — 25-year warranties, Enphase + Tesla batteries, occasional battery supply delays. Honest 2026 review.",
  alternates: { canonical: '/solar-installers/ameco-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Ameco Solar Review 2026",
  datePublished: '2026-04-24', dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/ameco-solar-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Ameco Solar', address: { '@type': 'PostalAddress', addressLocality: 'Paramount', addressRegion: 'CA', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '4.2', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Ameco Solar is a long-established California regional installer with roofing integration, strong 25-year warranty options, and a mostly positive reputation on Yelp and SolarReviews. Tesla battery shortages and subcontractor coordination show up in complaints.',
};

export default function AmecoReview() {
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
              <span className='text-foreground font-medium'>Ameco Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Ameco Solar Review 2026: Long-Standing LA Regional Installer
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p><p className='text-3xl font-extrabold text-foreground mt-1'>4.2 <span className='text-lg text-muted-foreground'>/ 5</span></p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p><p className='text-sm text-foreground font-medium mt-1'>LA/OC homeowners who want solar + roofing bundled and value a long-established local installer</p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p><p className='text-sm text-foreground font-medium mt-1'>You want Tesla Powerwall specifically — battery supply has been inconsistent</p></div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Ameco Solar is a long-established California regional installer based in Paramount (LA area) that combines decades of electrical and roofing work with residential solar. That integration is the differentiator — Ameco can handle solar, roof replacement, and electrical panel upgrades under one contract, which matters for the common California scenario where a solar install triggers a roof or panel upgrade need. Customer reputation on Yelp and SolarReviews runs mostly positive, BBB complaint volume is modest.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ameco is a Los Angeles / Orange County focused company with occasional service extending into Inland Empire. The roofing-plus-electrical background — unusual in residential solar — means projects that involve a roof swap or a 200-amp panel upgrade (common on 1960s–1980s California homes) can move through one vendor rather than three.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ameco does not manufacture panels. The company installs Tier-1 options with Enphase microinverters as the default. Tesla Powerwall is frequently included in quotes, though Tesla&apos;s variable battery supply has been a source of occasional customer frustration when installs stretch because a Powerwall unit isn&apos;t immediately available. Full process from contract to Permission to Operate runs 4 to 8 months, with some 8+ month reports tied to battery lead times specifically.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and Reputation</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Yelp: Mostly positive reviews in the 4–4.5 range.</li>
                <li>SolarReviews: Positive skew, smaller sample.</li>
                <li>BBB: Some complaints exist, but volume is modest for company scale.</li>
                <li>Google: Strong local ratings in LA and OC.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Timeline slippage — typically when Tesla Powerwall or specific panel SKU has a long lead time.</li>
                <li>Subcontractor coordination issues when roof and solar teams hand off between trades.</li>
                <li>Occasional AC disconnect or main-panel wiring punch-list items requiring follow-up visits.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing and Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ameco offers cash, loans, leases, and PPAs through third-party partners. You can own the system (cash/loan) or go $0-down (lease/PPA). Warranty is strong — 25-year options on equipment and workmanship, with the roofing side backed by manufacturer warranties (GAF, CertainTeed typical).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Ameco Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ameco is a strong pick for LA/OC homeowners where the install involves roof replacement or substantial electrical work, and where having one vendor own the whole scope is valuable. It&apos;s also solid for straight solar-only installs where you value a long-established local relationship over a national brand. Less compelling if you&apos;re outside the LA/OC service area or if you specifically need Tesla Powerwall on a hard timeline.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Is Ameco Solar a good company?</h3><p className='text-foreground/80'>Reputation data is mostly positive — solid Yelp ratings, modest BBB complaint volume, strong warranty options. One of the cleaner LA-area installers.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Ameco handle roofing too?</h3><p className='text-foreground/80'>Yes — Ameco&apos;s roofing integration is a core differentiator. For California homes needing both solar and roof replacement, this matters.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What batteries does Ameco install?</h3><p className='text-foreground/80'>Tesla Powerwall is the most common battery pairing, though Enphase IQ Battery and other options are available. Tesla supply has been inconsistent — confirm lead time at quote.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Ameco Against Two California Alternatives.</h3>
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
