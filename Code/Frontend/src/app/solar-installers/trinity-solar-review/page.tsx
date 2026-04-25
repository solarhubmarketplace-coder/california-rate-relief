import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import {
  ArrowLeft,
  ArrowRight,
  Info,
  Clock,
  Calendar,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title:
    'Trinity Solar Review 2026: Northeast Installer, Not a California Option',
  description:
    'Trinity Solar is a large family-owned residential installer serving the Northeast (NJ, NY, CT, MA, PA, MD). Here is an honest 2026 review and what it means if you are shopping solar in California.',
  alternates: {
    canonical: '/solar-installers/trinity-solar-review',
  },
  openGraph: {
    title:
      'Trinity Solar Review 2026: Northeast-Only Installer',
    description:
      'Trinity Solar serves the Northeast, not California. What the company offers, its reputation, and what California homeowners should do instead.',
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Trinity Solar Review 2026: Northeast Installer, Not a California Option',
  description:
    'A 2026 review of Trinity Solar, a Northeast-focused residential solar installer, and what California homeowners should know about it.',
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/solar-installers/trinity-solar-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'Trinity Solar',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Wall Township',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '3.4',
    bestRating: '5',
  },
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
  },
  reviewBody:
    'Trinity Solar is a large private family-owned residential installer founded in 1994, primarily serving the Northeast. It has a strong install-phase reputation but mixed post-install service feedback. Trinity does not meaningfully operate in California.',
};

export default function TrinitySolarReview() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>
                Home
              </Link>
              <span>/</span>
              <Link
                href='/best-solar-companies-california'
                className='hover:text-primary transition-colors'
              >
                Best Solar Companies in California
              </Link>
              <span>/</span>
              <span className='text-foreground font-medium'>
                Trinity Solar Review
              </span>
            </nav>

            {/* California context banner */}
            <div className='mb-6 rounded-xl border-2 border-blue-500/40 bg-blue-500/10 p-5'>
              <div className='flex items-start gap-3'>
                <Info className='h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5' />
                <div>
                  <p className='text-xs font-bold uppercase tracking-widest text-blue-300 mb-1'>
                    California note
                  </p>
                  <p className='text-foreground font-semibold leading-relaxed'>
                    Trinity Solar is a Northeast-focused installer and does
                    not have meaningful California operations. If you&apos;re
                    a California homeowner shopping solar in 2026, Trinity
                    is almost certainly not going to be one of your actual
                    options — see our{' '}
                    <Link
                      href='/best-solar-companies-california'
                      className='text-blue-200 underline hover:text-blue-100'
                    >
                      Best Solar Companies in California
                    </Link>
                    {' '}guide for installers who actually serve your
                    address.
                  </p>
                </div>
              </div>
            </div>

            {/* Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Solar Installer Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Trinity Solar Review 2026: Northeast Installer, Not a
                California Option
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-23'>Updated April 23, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>9 min read</span>
                </div>
              </div>
            </header>

            {/* Score */}
            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                  Our take
                </p>
                <p className='text-3xl font-extrabold text-foreground mt-1'>
                  3.4 <span className='text-lg text-muted-foreground'>/ 5</span>
                </p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                  Best for
                </p>
                <p className='text-sm text-foreground font-medium mt-1'>
                  Northeast homeowners (NJ, NY, CT, MA, PA, MD) looking at a
                  family-owned installer with a long track record
                </p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                  Not an option for
                </p>
                <p className='text-sm text-foreground font-medium mt-1'>
                  California homeowners — Trinity doesn&apos;t meaningfully
                  serve CA
                </p>
              </div>
            </div>

            {/* Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Trinity Solar is a large, privately held, family-owned
                residential solar installer founded in 1994 and headquartered
                in Wall Township, New Jersey. With approximately 2,000 to
                3,000 employees, Trinity is one of the most established
                players in Northeast residential solar — operating primarily
                in New Jersey, New York, Connecticut, Massachusetts,
                Pennsylvania, and Maryland. Because our audience is
                California-focused, we&apos;ll keep this review brief on the
                company profile and spend more time on where it fits (and
                doesn&apos;t fit) in the national installer comparison.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Company
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Trinity Solar is a second-generation family-run business that
                started as a solar water-heating contractor in 1994 and
                pivoted to photovoltaic installation as the residential
                market took off. It remains private and family-owned with
                revenue estimates in the mid-hundred-millions to low-billions
                range depending on source. The company focuses exclusively
                on the Northeast corridor and has not expanded meaningfully
                into the West Coast or Sun Belt markets.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Equipment and Installation
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Trinity does not manufacture its own panels, inverters, or
                batteries. Panel sourcing is Tier-1 mix (varies by project
                and availability). Inverters are typically Enphase
                microinverters or SolarEdge string inverters. Batteries are
                third-party options when included. Installation is a blend
                of direct Trinity crews and partner crews depending on the
                project and market. Trinity is NABCEP certified and holds
                manufacturer-certified installer status for its primary
                equipment partners.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Typical install-to-PTO timelines in Trinity&apos;s Northeast
                markets run roughly 1 to 3 months, which is competitive for
                the region.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Financing
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Trinity does not own its own financing product. Lease and
                PPA options are offered through third-party partners —
                including, historically, a financing partnership with
                Sunnova before Sunnova&apos;s 2025 bankruptcy. Loan
                financing is through standard third-party solar lenders.
                Cash purchase is always available.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Reputation
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Trinity holds a BBB A+ rating. The BBB profile lists
                approximately 214 complaints closed in the prior three
                years, which is a moderate volume for a company of this
                size. SolarReviews and EnergySage composite ratings sit in
                the 3.2 to 3.8 range. The recurring themes across complaints
                are: communication gaps during longer-than-expected
                permitting or utility interconnection delays, slow
                post-install service response, and occasional billing
                disputes. Positive reviews generally praise the install day
                experience and the crews&apos; professionalism.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                There are no major active class-action lawsuits against
                Trinity as of 2026. Individual consumer complaints appear in
                normal volumes for a regional installer of this scale.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Warranty
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Trinity offers 25-year equipment and workmanship warranties,
                consistent with industry standard. As a private company
                founded in 1994 with 30+ years of operating history, the
                balance-sheet confidence for long-duration warranties is
                reasonable — not as transparent as a publicly traded
                installer with quarterly disclosures, but meaningfully
                stronger than a newer or smaller regional player.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Trinity Probably Isn&apos;t in Your California Quote Set
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Trinity focuses on the Northeast. The company doesn&apos;t
                have California operations in any meaningful volume, so if
                you&apos;re shopping solar in Los Angeles, San Diego,
                Sacramento, or anywhere else in California, Trinity is
                almost certainly not going to show up in your quote set —
                and if you did get a sales call from someone pitching
                Trinity Solar in California, that&apos;s worth double-
                checking, because the entity structure or licensing may not
                be standard.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For California residents evaluating installers in 2026, the
                right comparison set is companies that actually have
                California crews, California utility-interconnection
                relationships, and California post-install service
                infrastructure. See our{' '}
                <Link
                  href='/best-solar-companies-california'
                  className='text-primary hover:underline font-medium'
                >
                  Best Solar Companies in California
                </Link>{' '}
                guide for the current shortlist —{' '}
                <Link
                  href='/solar-installers/sunrun-review'
                  className='text-primary hover:underline font-medium'
                >
                  Sunrun
                </Link>
                ,{' '}
                <Link
                  href='/solar-installers/tesla-solar-review'
                  className='text-primary hover:underline font-medium'
                >
                  Tesla Solar
                </Link>
                ,{' '}
                <Link
                  href='/solar-installers/solar-optimum-review'
                  className='text-primary hover:underline font-medium'
                >
                  Solar Optimum
                </Link>
                , and{' '}
                <Link
                  href='/solar-installers/semper-solaris-review'
                  className='text-primary hover:underline font-medium'
                >
                  Semper Solaris
                </Link>{' '}
                are solid starting points.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Does Trinity Solar serve California?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    No, not in any meaningful capacity. Trinity operates
                    primarily in the Northeast — New Jersey, New York,
                    Connecticut, Massachusetts, Pennsylvania, and Maryland.
                    California homeowners should focus on installers that
                    actually serve the state.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Is Trinity Solar a good installer if I&apos;m in New
                    Jersey?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    In its Northeast footprint, Trinity is a reasonable
                    mid-market choice. Family-owned, 30+ year operating
                    history, BBB A+, competitive pricing. The most common
                    criticism in reviews is post-install service response
                    time. Get two or three competing quotes regardless of
                    which installer looks best on paper.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    What about the old Trinity-Sunnova financing
                    partnership?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Trinity historically used Sunnova as a lease/PPA
                    financing partner on some projects. Since Sunnova&apos;s
                    2025 bankruptcy, those legacy contracts transferred to
                    SunStrong Management along with the rest of Sunnova&apos;s
                    portfolio. New Trinity projects use other financing
                    partners. See our{' '}
                    <Link
                      href='/solar-installers/sunnova-review'
                      className='text-primary hover:underline'
                    >
                      Sunnova review
                    </Link>{' '}
                    for context on that bankruptcy.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    Does Trinity Solar manufacture its own panels?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    No. Trinity sources Tier-1 panels from multiple
                    manufacturers depending on project and availability. In
                    our California comparison, only Tesla and Qcells (the
                    manufacturer behind Axia Solar) actually own their panel
                    factories.
                  </p>
                </div>
              </div>
            </div>

            {/* CA-focused CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>
                California Shopper? Compare 3 Installers That Actually Serve
                Your Address.
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>
                Trinity doesn&apos;t serve California — but California Rate
                Relief works with multiple top-rated California solar
                installers. Fill out one 60-second form and we&apos;ll bring
                you quotes from up to three installers for your address, so
                you can compare pricing, equipment, and warranty terms side
                by side.
              </p>
              <div className='flex justify-center'>
                <Link
                  href='/#qualify'
                  className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
                >
                  Get My 3 Quotes
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>
                Free. No obligation. No impact on your credit score.
              </p>
            </div>

            {/* Related */}
            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>
                More Installer Reviews
              </h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link
                  href='/solar-installers/sunnova-review'
                  className='p-4 border border-border rounded-lg hover:border-primary transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-foreground'>
                      Sunnova Review
                    </span>
                    <ArrowRight className='h-4 w-4 text-muted-foreground' />
                  </div>
                </Link>
                <Link
                  href='/solar-installers/sunrun-review'
                  className='p-4 border border-border rounded-lg hover:border-primary transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-foreground'>
                      Sunrun Review
                    </span>
                    <ArrowRight className='h-4 w-4 text-muted-foreground' />
                  </div>
                </Link>
                <Link
                  href='/solar-installers/tesla-solar-review'
                  className='p-4 border border-border rounded-lg hover:border-primary transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-foreground'>
                      Tesla Solar Review
                    </span>
                    <ArrowRight className='h-4 w-4 text-muted-foreground' />
                  </div>
                </Link>
                <Link
                  href='/solar-installers/solar-optimum-review'
                  className='p-4 border border-border rounded-lg hover:border-primary transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-foreground'>
                      Solar Optimum Review
                    </span>
                    <ArrowRight className='h-4 w-4 text-muted-foreground' />
                  </div>
                </Link>
              </div>
            </div>

            <div className='mt-10'>
              <Link
                href='/best-solar-companies-california'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Best Solar Companies in California
              </Link>
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
