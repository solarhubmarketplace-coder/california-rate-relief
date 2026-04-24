import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sunlux Solar Review 2026: One of SoCal's Higher-Rated Regional Installers",
  description: "Sunlux has 7,000+ installs, Google 4.7/5 across 550+ reviews, BBB A+, and competitive California pricing. Here's the honest 2026 review, strengths, the permitting delays, and who it fits.",
  alternates: { canonical: '/solar-installers/sunlux-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Sunlux Solar Review 2026: One of SoCal's Higher-Rated Regional Installers",
  datePublished: '2026-04-24', dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/sunlux-solar-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Sunlux Solar', address: { '@type': 'PostalAddress', addressRegion: 'CA', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '4.4', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Sunlux is a strong SoCal + Texas installer with 7,000+ completed installs, Google 4.7/5, BBB A+, and competitive cash pricing. Primary complaint theme is permitting/activation delays — real, but less severe than the national PPA-heavy competitors.',
};

export default function SunluxReview() {
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
              <span className='text-foreground font-medium'>Sunlux Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Sunlux Solar Review 2026: One of SoCal&apos;s Higher-Rated Regional Installers
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p><p className='text-3xl font-extrabold text-foreground mt-1'>4.4 <span className='text-lg text-muted-foreground'>/ 5</span></p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p><p className='text-sm text-foreground font-medium mt-1'>SoCal cash/loan buyers who want competitive pricing and a strong Google/BBB record</p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p><p className='text-sm text-foreground font-medium mt-1'>You need a locked install-by date, permitting and activation delays are the main complaint</p></div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Sunlux is a Southern California solar installer (with Texas operations) that has built a meaningful scale — more than 7,000 completed installations, while maintaining customer reputation metrics well above the national PPA-heavy installers. Google shows 4.7/5 across 550+ reviews, Yelp holds at 3.8/5, and the BBB profile is A+ (not accredited, which is common and not a red flag). For SoCal cash and loan buyers, Sunlux sits in the upper tier of our comparison.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux is a privately held regional installer focused on Southern California and Texas. The company uses its own installation crews rather than subcontracting — one of the key differentiators from Palmetto and similar national dealer-network brands. California coverage is strongest in Orange County, LA, Inland Empire, and San Diego County; confirm serviceability for more remote parts of the state.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux does not manufacture panels. The company installs quality Tier-1 options, Panasonic has been a frequent panel choice, with SolarEdge inverters and LG batteries mentioned in recent installs. Install-day is typically completed in one day. The full process from contract to Permission to Operate runs 3 to 6 months, in line with California industry average post-NEM 3.0.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and Reputation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The reputation data is one of the stronger profiles in our California comparison:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Google: 4.7/5 across 550+ reviews — genuinely strong.</li>
                <li>Yelp: 3.8/5. Mixed but positive-skewing.</li>
                <li>BBB: A+, not accredited, modest complaint volume relative to company scale.</li>
                <li>EnergySage: positive reviews in smaller sample.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Permitting and activation delays — the most frequent theme. Typical for California in 2025–2026 but worth managing expectations around.</li>
                <li>Occasional unexpected fees at install (adders for panel-upgrade, trenching, etc.). Get itemized pricing in writing.</li>
                <li>Post-install service can be slower than the sales experience. Warranty claims have been reported as 2–4 week response times.</li>
                <li>Minor HOA or permit coordination hiccups with tighter-regulation California cities.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux focuses on ownership — cash or loan financing through third-party partners. You own the system, capture the 30% federal ITC, and don&apos;t carry a long-term PPA or lease obligation. Pricing is competitive; customer reports put cash-purchase pricing in the $3.00–$3.80 per watt range in California, which is roughly at or below the state average.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux provides standard 25-year equipment coverage and what the company describes as full component and workmanship guarantees. Specific terms vary by contract — get the warranty language in writing before signing, especially for workmanship length (10 years is common; 25 years is excellent).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Sunlux Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunlux is a strong pick for SoCal cash or loan buyers who value a regional installer with in-house crews, competitive pricing, and above-average customer reputation metrics. It&apos;s particularly attractive if you&apos;re in Orange County, LA Metro, or coastal San Diego where Sunlux has its strongest service history. The main caveat is timeline. Expect standard California industry 3 to 6 months, and build margin in your planning.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Is Sunlux Solar a reputable company?</h3><p className='text-foreground/80'>Yes, by the data we can verify, 7,000+ installs, Google 4.7/5, BBB A+. One of the cleaner reputations in SoCal regional solar.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Sunlux offer PPAs or leases?</h3><p className='text-foreground/80'>Not as the primary offering. Sunlux focuses on cash and loan financing where you own the system.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What panels does Sunlux use?</h3><p className='text-foreground/80'>Tier-1 options — Panasonic has been a frequent panel brand with SolarEdge inverters and LG or other name-brand batteries. Sunlux does not manufacture its own panels.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Sunlux serve all of California?</h3><p className='text-foreground/80'>Strongest coverage is Southern California. Confirm serviceability for your specific zip code in the first call.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare Sunlux Against Two California Alternatives.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief works with multiple top-rated California solar installers. Fill out one 60-second form and we&apos;ll line up quotes from up to three installers. So you can compare their pricing, equipment, and warranty terms side by side.</p>
              <div className='flex justify-center'><Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>More California Installer Reviews</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-installers/baker-electric-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Baker Electric Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/solar-optimum-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Solar Optimum Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/ameco-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Ameco Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
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
