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
  title: "Baker Electric Solar Review 2026: San Diego's Cleanest Reputation Installer",
  description: "Baker Electric Solar is family-owned since 1938, based in Escondido. Yelp 4.1/5 across 774 reviews, 25-year workmanship standard, very clean complaint record. Here's the honest 2026 review.",
  alternates: { canonical: '/solar-installers/baker-electric-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Baker Electric Solar Review 2026",
  datePublished: '2026-04-24', dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/baker-electric-solar-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Baker Electric Solar', address: { '@type': 'PostalAddress', addressLocality: 'Escondido', addressRegion: 'CA', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Baker Electric Solar has one of the cleanest reputations in our California installer comparison, family-owned since 1938, strong Yelp (4.1/5 / 774 reviews), 25-year workmanship warranty, and genuine electrical pedigree. Top-tier pick for San Diego County.',
};

export default function BakerReview() {
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
              <span className='text-foreground font-medium'>Baker Electric Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Baker Electric Solar Review 2026: San Diego County&apos;s Cleanest Reputation
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p><p className='text-3xl font-extrabold text-foreground mt-1'>4.5 <span className='text-lg text-muted-foreground'>/ 5</span></p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p><p className='text-sm text-foreground font-medium mt-1'>San Diego County homeowners who want a long-established local installer with strong electrical pedigree</p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p><p className='text-sm text-foreground font-medium mt-1'>You&apos;re far outside Baker&apos;s North County / Escondido service footprint</p></div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Baker Electric has been a family-owned electrical contractor in Escondido since 1938. 87 years of continuous California operations. The company&apos;s solar division layers residential PV onto that electrical foundation, which matters. Complex main-panel upgrades, EV charger integration, and backup-battery transfer-switch work — all of which involve electrical expertise as much as solar expertise — tend to go smoother with an installer whose core business was licensed electrical work before solar was even a product category.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Baker Electric serves primarily San Diego County (strongest coverage in North County) and extends into parts of Orange County and the Inland Empire. The company is privately held and family-operated — the same ownership family across multiple generations, which is rare in residential solar and correlates with stable warranty honor over long horizons.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Baker Electric does not manufacture panels. The company installs Tier-1 options with Enphase microinverters as the default and Franklin Home Power or Tesla Powerwall batteries depending on quote. Install-day typically runs 1 to 3 days on the roof; full process from contract to Permission to Operate is often among the faster in SD County thanks to the company&apos;s experience navigating local permitting offices.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and Reputation</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Yelp: 4.1/5 across 774 reviews. One of the stronger aggregated ratings in our California comparison.</li>
                <li>Google: Consistently strong in SD County.</li>
                <li>BBB: Low complaint volume relative to company scale.</li>
                <li>SolarReviews + consumer forums: Mostly positive tone.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Baker&apos;s complaint profile is genuinely light. What shows up:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Occasional warranty-claim disputes on install labor (rare).</li>
                <li>A small number of electrical panel issues where customer expected one scope and Baker quoted another.</li>
                <li>Pricing tends to be mid-market, not the cheapest — occasional buyer pushback on not getting rock-bottom cash pricing.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing and Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Baker Electric focuses on ownership — cash or loans through third-party financing partners. PPAs/leases are available but not the default pitch. The workmanship warranty is 25 years, which is at the top of the industry range and one of the things that makes the company&apos;s longevity actually meaningful: a 25-year workmanship warranty is only worth what it&apos;s worth if the installer is still there to honor it in year 20.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Baker Electric Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Baker Electric is a top-tier pick for San Diego County homeowners, particularly in North County and East County, who value electrical pedigree, local ownership, and long warranty continuity. It&apos;s particularly strong for jobs that involve more than a straightforward roof install — main-panel upgrades, EV chargers, battery transfer switches — where the electrical-first background pays off. Less compelling for buyers specifically hunting the cheapest cash price (Tesla Solar typically undercuts) or those outside the San Diego service area.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>How long has Baker Electric been in business?</h3><p className='text-foreground/80'>Since 1938 — 87 years. That kind of continuity is rare in residential solar and matters when warranty terms stretch to 25 years.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Baker Electric serve the whole San Diego area?</h3><p className='text-foreground/80'>Strongest coverage is North County and East County San Diego. Extends into parts of Orange County and Inland Empire. Confirm for your specific zip.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Is Baker more expensive than national brands?</h3><p className='text-foreground/80'>Mid-market. Tesla Solar is typically cheaper on cash purchase. Versus Sunrun or Sunnova on a lease/PPA, Baker is often competitive on total cost-of-ownership.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Baker Electric Against Two Alternatives.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>Fill out one 60-second form and we&apos;ll line up quotes from up to three California solar installers. So you can compare side by side.</p>
              <div className='flex justify-center'><Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>More California Installer Reviews</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-installers/solar-optimum-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Solar Optimum Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/sunlux-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Sunlux Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/option-one-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Option One Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
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
      <div className="container mx-auto px-4 max-w-3xl">
        <VerifyInstallerBox installerName="Baker Electric" cslbLicenseNumber="993048" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
