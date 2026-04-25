import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar, AlertTriangle } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: "LA Solar Group Review 2026: Vertical Integration (They Make Their Own Panels) With Mixed Reputation",
  description: "LA Solar Group manufactures its own black-on-black panels — unique in residential CA solar. Yelp 4.2/5 across 1,000+ reviews offset by 55 BBB complaints and recurring roof leak reports. Honest 2026 review.",
  alternates: { canonical: '/solar-installers/la-solar-group-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "LA Solar Group Review 2026",
  datePublished: '2026-04-24', dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/la-solar-group-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'LA Solar Group', address: { '@type': 'PostalAddress', addressLocality: 'Sun Valley', addressRegion: 'CA', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '3.3', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'LA Solar Group is genuinely unique — one of the few California residential installers that vertically integrates and manufactures its own black-on-black panels. Yelp 4.2/5 across 1,000+ reviews offset by 55 BBB complaints and recurring roof leak themes. Volume installer with quality variance.',
};

export default function LASolarGroupReview() {
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
              <span className='text-foreground font-medium'>LA Solar Group Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                LA Solar Group Review 2026: They Make Their Own Panels (Mixed Reputation)
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p><p className='text-3xl font-extrabold text-foreground mt-1'>3.3 <span className='text-lg text-muted-foreground'>/ 5</span></p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p><p className='text-sm text-foreground font-medium mt-1'>Buyers drawn to black-on-black aesthetics from a single vertically-integrated vendor</p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p><p className='text-sm text-foreground font-medium mt-1'>Post-install service responsiveness is a priority. The roof leak complaint pattern is real</p></div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                LA Solar Group is genuinely unusual in California residential solar: the company manufactures its own black-on-black panels in addition to performing the installations. Most installers in our comparison (Palmetto, Sunrun, Sunnova, Solar Optimum, Baker Electric, etc.) all use Tier-1 third-party panels. LA Solar Group is the only one that is vertically integrated; one vendor owns panel manufacture, install, warranty, and ongoing service.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The reputation picture is mixed. Yelp shows 4.2/5 across more than 1,000 reviews — unusually high volume for a regional installer. The BBB file logs 55 complaints over 3 years, and roof leaks show up repeatedly across SolarReviews, Yelp 1-star reviews, and Reddit. Install times range widely, from 3-week fast turnarounds to 9+ month drags.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                LA Solar Group is headquartered in Sun Valley (LA area) with significant operations across Southern California. Privately held, with its own panel manufacturing operation separate from the install business but under common ownership.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and the Vertical Integration Story</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                LA Solar Group manufactures its own panel line, typically black-on-black monocrystalline panels marketed on aesthetic appeal. Third-party inverters (Enphase, SolarEdge) and batteries (Tesla, Franklin) are paired with the house-brand panels. The integration story is appealing on paper: one vendor owns the warranty stack from manufacture through install. In practice, buyers should note that a vertically integrated warranty is only as strong as the long-term viability of the manufacturer — LA Solar Group panels are not a Tier-1 mainstream brand with deep secondary-market support if the company faces future financial stress.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and Reputation</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Yelp: 4.2/5 across 1,000+ reviews. High volume, positive skew.</li>
                <li>BBB: 55 complaints over 3 years, not accredited. Meaningful complaint volume for company scale.</li>
                <li>SolarReviews: Mixed — some complaints specifically around roof leaks and post-install responsiveness.</li>
                <li>Reddit r/solar: Mixed mentions; roof leak is the recurring theme.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li><strong>Roof leaks.</strong> Recurring across multiple review sources. Workmanship-quality variance on roof penetrations is the specific issue.</li>
                <li>Timeline slippage — 3-week fast installs contrasted against 9+ month drags.</li>
                <li>Net-metering coordination delays after install.</li>
                <li>Unexpected additional charges at install, extra electrical work, trenching, or rewiring not clearly disclosed at quote.</li>
                <li>Communication friction once issues surface post-install.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                LA Solar Group offers cash, loans, and leases / PPAs. In the PPA model, LA Solar Group or a financing partner may own the system and you pay for power produced. Financing terms and ownership structure vary by contract; read carefully and clarify who actually owns the panels at close.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                25-year standard. The panel warranty is backed by LA Solar Group itself rather than a Tier-1 manufacturer like Qcells or Panasonic, which is the tradeoff of vertical integration. The company has been operating for some years, but long-term panel warranty honor depends on the manufacturer still existing in decade-plus timeframes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When LA Solar Group Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                LA Solar Group is interesting for buyers specifically drawn to the all-black aesthetic and willing to trade some long-term manufacturer-backing certainty for vertical integration. It may make sense in the LA metro for buyers with strong personal references to a specific sales rep. The recurring roof leak pattern and the BBB complaint volume mean extra due diligence is warranted — specifically around workmanship warranty length and leak-response SLAs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does LA Solar Group really make their own panels?</h3><p className='text-foreground/80'>Yes — they are one of the very few California residential installers with their own panel manufacturing. This differentiates them from Palmetto, Sunrun, etc. which all use Tier-1 third-party panels.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Are LA Solar Group panels Tier-1?</h3><p className='text-foreground/80'>No. Tier-1 is an industry classification applied to large, bankable panel manufacturers (Qcells, Longi, Jinko, Canadian Solar, etc.). LA Solar Group&apos;s panels are house-brand manufacture.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What&apos;s the roof leak issue?</h3><p className='text-foreground/80'>Multiple review sources (SolarReviews, Yelp 1-star, Reddit r/solar) report roof leaks traced to workmanship on roof penetrations. Ask the sales rep directly about their roof-penetration process and the warranty response time for leaks discovered post-install.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare LA Solar Group Against Two Alternatives.</h3>
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
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
