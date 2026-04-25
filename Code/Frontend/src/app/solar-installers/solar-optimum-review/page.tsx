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
  title:
    "Solar Optimum Review 2026: California's Highest-Rated Installer, Compared",
  description:
    "Solar Optimum holds EnergySage 4.8/5 (851 reviews) and only 21 BBB complaints in 3 years. Here is an honest 2026 look at California's highest-rated solar installer.",
  alternates: { canonical: '/solar-installers/solar-optimum-review' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Solar Optimum Review 2026: California's Highest-Rated Installer, Compared",
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/solar-optimum-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Solar Optimum', address: { '@type': 'PostalAddress', addressLocality: 'Glendale', addressRegion: 'CA', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '4.6', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Solar Optimum has the strongest customer reputation of any installer in our California comparison — EnergySage 4.8/5 across 851 reviews, only 21 BBB complaints in 3 years, and a 6-level 25-year warranty. Smaller footprint than national competitors but genuinely excellent where they operate.',
};

export default function SolarOptimumReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
              <span>/</span>
              <Link href='/best-solar-companies-california' className='hover:text-primary transition-colors'>Best Solar Companies in California</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Solar Optimum Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Optimum Review 2026: California&apos;s Highest-Rated Installer, Compared
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-22'>Updated April 22, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>9 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p>
                <p className='text-3xl font-extrabold text-foreground mt-1'>4.6 <span className='text-lg text-muted-foreground'>/ 5</span></p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p>
                <p className='text-sm text-foreground font-medium mt-1'>Buyers prioritizing service quality, reputation, and a 6-level 25-year warranty</p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p>
                <p className='text-sm text-foreground font-medium mt-1'>You&apos;re outside their CA/NV/AZ/FL footprint or need the cheapest possible cash price</p>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Solar Optimum is the quiet best-in-class player in our California installer comparison. Founded in 2008 and based in Glendale, California, the company is small compared to national installers — roughly 132 employees and ~$28 million in revenue — but the customer reputation data is genuinely exceptional. EnergySage shows 4.8 out of 5 across 851 reviews. The BBB profile lists only 21 complaints over the prior three years. The company has been named EnergySage Installer of the Year multiple times, including 2026 for the third consecutive year, and has been Panasonic&apos;s National Installer of the Year five times. When we built this review, Solar Optimum was the single installer whose complaint-to-scale ratio stood out across every data source we checked.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Corporate Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar Optimum is privately held and headquartered in Glendale, California. The company operates in California, Nevada, Arizona, and Florida — not the 22-state national footprint of Sunrun or the 45+ states of SunPower, but a focused operational geography that the company can actually support with its in-house service team. In California specifically, the installer covers most of the major metros reliably.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar Optimum does not manufacture its own panels. The company installs Tier-1 options including Qcells, REC, and Solaria panels, with Enphase microinverters as the default. Battery options are Tesla Powerwall or Enphase IQ. For roofing bundles, Solar Optimum holds GAF Master Elite and CertainTeed credentials — the two highest-tier roofing certifications — which means the same crew handling your solar can also handle the roof underneath it with manufacturer-backed warranties.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Installation is primarily in-house W-2 crews. Install-day turnaround is typically 2 to 3 days on the roof, with 60 to 90 days for the full process from contract to Permission to Operate depending on utility interconnection queue. Those are competitive timelines for California.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Reputation Numbers, In Context</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                To put Solar Optimum&apos;s reputation data in context: Sunrun had 4,045 BBB complaints over 3 years. Freedom Forever had 1,359. Momentum Solar had 642. Semper Solaris had 173. Solar Optimum had 21. That&apos;s not just a low number — that&apos;s a genuinely best-in-class complaint-to-install ratio across our entire comparison set. EnergySage&apos;s 4.8/5 across 851 reviews is similarly well above industry average, and Trustpilot and other aggregators generally show 4.5+ stars.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The recurring themes in the handful of negative reviews are: occasional add-on costs discovered during install, and some post-install service slowness on edge-case issues. These are real but are significantly less frequent than the comparable themes at larger national installers. No major class-action lawsuits or regulatory actions were active in 2025 or into 2026.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Six-Level 25-Year Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar Optimum&apos;s warranty is unusually comprehensive. Six separate coverage levels are each guaranteed for 25 years: panels, inverter, racking, roofing (where applicable), workmanship, and performance. That structure is genuinely rare in residential solar — most installers offer a 25-year manufacturer panel warranty plus a shorter workmanship warranty. Solar Optimum&apos;s bundling at 25 years across all six categories is the most comprehensive warranty offer in our California comparison.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                As with any private-company warranty, the value depends on the business still being around to honor it in year 20. Solar Optimum has been operating since 2008, which is a respectable run, and the small but stable employee count and focused geography suggest a sustainable operation rather than a growth-at-all-costs model that would stress the balance sheet.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Pricing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar Optimum&apos;s California cash pricing runs competitive with the mid-market — not the cheapest on this list (Tesla typically undercuts them), but reasonable given the quality and warranty depth. Financing is third-party partners rather than an in-house lease or PPA. That means the pricing transparency is good — you&apos;re paying a contract rate plus the cost of borrowing, with no lease escalator hidden in the fine print.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Solar Optimum Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar Optimum is the right pick if service quality and reputation matter more to you than shaving off the last dollar of upfront cost. The 6-level 25-year warranty is meaningful if you&apos;re planning to stay in the home long-term. The roofing certification matters if you need a roof replacement bundled with the solar install. And the complaint data is exceptional in ways that are simply not true of the larger national installers.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                It&apos;s less compelling if you&apos;re specifically hunting the absolute lowest cash price (Tesla is typically lower), if you live outside their CA/NV/AZ/FL coverage footprint, or if you specifically want a national publicly traded installer with quarterly financial disclosures.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Is Solar Optimum a good company?</h3>
                  <p className='text-foreground/80 leading-relaxed'>By the data we can verify, yes — it&apos;s the single highest-rated installer across EnergySage, BBB, and Trustpilot in our California comparison. 4.8/5 across 851 EnergySage reviews is exceptional in residential solar.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Where does Solar Optimum operate?</h3>
                  <p className='text-foreground/80 leading-relaxed'>California, Nevada, Arizona, and Florida. Coverage within California includes the major metros. If you&apos;re in a remote California area, confirm serviceability before getting too far into the process.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Is Solar Optimum cheaper than Sunrun or Tesla?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Tesla is typically the cheaper cash option in California ($2.27 to $2.82 per watt). Solar Optimum runs competitive mid-market pricing. Versus Sunrun&apos;s ~$3.33 per watt average, Solar Optimum is often cheaper — and the service experience is substantially better.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>What does the 6-level warranty actually cover?</h3>
                  <p className='text-foreground/80 leading-relaxed'>25-year coverage across six separate categories: panels, inverter, racking, roofing (where applicable), workmanship, and performance. That&apos;s meaningfully more comprehensive than a standard 25-year panel warranty plus 10-year workmanship.</p>
                </div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Get Solar Optimum&apos;s Quote Alongside Two Others.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief works with multiple top-rated California solar installers. Fill out one 60-second form and we&apos;ll line up quotes from up to three installers — including Solar Optimum — so you can compare their pricing, equipment, and warranty terms side by side with comparable options.</p>
              <div className='flex justify-center'>
                <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>More California Installer Reviews</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-installers/semper-solaris-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Semper Solaris Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/tesla-solar-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Tesla Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/sunrun-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Sunrun Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/sunpower-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>SunPower Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
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
        <VerifyInstallerBox installerName="Solar Optimum" cslbLicenseNumber="903305" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
