import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "New Day Solar Review 2026: 31+ Years, Family-Owned, Ownership-Only (Murrieta CA)",
  description: "New Day Solar is a family-owned Murrieta CA installer with 31+ years of experience, very positive Yelp and forum reviews, strong loan rates, and FranklinWH battery pairing.",
  alternates: { canonical: '/solar-installers/new-day-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "New Day Solar Review 2026",
  datePublished: '2026-04-24', dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/new-day-solar-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'New Day Solar', address: { '@type': 'PostalAddress', addressLocality: 'Murrieta', addressRegion: 'CA', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '4.7', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'New Day Solar is a family-owned Murrieta-based installer with 31+ years of experience, ownership-only financing, strong Yelp reputation, FranklinWH battery pairing, and very fast post-install PTO turnaround. One of the cleanest reputations in SoCal.',
};

export default function NewDayReview() {
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
              <span className='text-foreground font-medium'>New Day Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                New Day Solar Review 2026: Family-Owned, Ownership-Only, Murrieta
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>7 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p><p className='text-3xl font-extrabold text-foreground mt-1'>4.7 <span className='text-lg text-muted-foreground'>/ 5</span></p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p><p className='text-sm text-foreground font-medium mt-1'>Inland Empire / South Riverside County buyers who want ownership and fast PTO turnaround</p></div>
              <div><p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p><p className='text-sm text-foreground font-medium mt-1'>You want a $0-down PPA or lease — New Day focuses on ownership only</p></div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                New Day Solar is a family-owned California installer based in Murrieta with more than 31 years of combined solar and electrical experience. The company focuses on ownership (cash or loan) and actively steers customers away from PPAs and leases. Customer reviews across Yelp, the company website, and solar forums run very positive. Post-install PTO turnaround is often 2 weeks or less — among the faster timelines in our California comparison.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                New Day serves the Inland Empire and southern Riverside County (Temecula, Murrieta, Menifee, Winchester, Hemet, Wildomar, Lake Elsinore) with extensions into north San Diego County. Small, locally-owned, and deep-rooted in the southwest Inland Empire market.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                New Day does not manufacture panels. Enphase microinverters are standard; FranklinWH Home Power is the primary battery pairing (some Tesla Powerwall options available). Install-day is clean; full process through Permission to Operate is often 2 to 3 months — faster than the California average, largely because New Day is deeply familiar with the Riverside County and southern Riverside permitting offices.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and Reputation</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Yelp: Very strong ratings (4.5–5 range).</li>
                <li>Own-site testimonials: Consistent positive case studies.</li>
                <li>Solar forums and Reddit: Positive mentions in r/solar discussions about Inland Empire installers.</li>
                <li>BBB: Low complaint volume, typically A+ rating.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Complaint volume is light. Occasional inspection hiccups — which is largely controlled by the county, not the installer — are the main theme. Nothing significant shows up around workmanship, post-install support, or contract disputes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Cash or loans through third-party financing partners. New Day is known for competitive loan rates — customers have reported sub-3% options at certain historical rate cycles — and does not heavily pitch PPAs or leases. You own the system.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Standard strong warranties: 25-year equipment coverage, with workmanship terms in the 10–25 year range depending on the specific contract. Confirm the workmanship length at quote — longer is better.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When New Day Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Strong fit for Inland Empire and southern Riverside County homeowners who want ownership financing, an Enphase-based system, FranklinWH battery pairing, and a small-company service experience with fast PTO turnaround. Less compelling if you&apos;re outside their service area or need $0-down PPA/lease financing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does New Day Solar offer leases or PPAs?</h3><p className='text-foreground/80'>Not as the default. The company focuses on ownership financing (cash/loan). If lease/PPA is required, this isn&apos;t your installer.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>How long does a New Day install take?</h3><p className='text-foreground/80'>Contract to Permission to Operate is often 2 to 3 months — fast for California, largely due to deep familiarity with Riverside County permitting.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What battery does New Day install?</h3><p className='text-foreground/80'>FranklinWH Home Power is the primary battery pairing. Some Tesla Powerwall options are available.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare New Day Against Two Alternatives.</h3>
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
