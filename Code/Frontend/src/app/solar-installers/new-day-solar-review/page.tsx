import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox, type InstallerLicense, DGSTATS_LICENSE_BASIS } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

// License numbers tied to the company by a primary source; CSLB status checked September 24, 2026.
const NEW_DAY_LICENSES: InstallerLicense[] = [
  { number: '812958', holder: 'New Day Solar', basis: DGSTATS_LICENSE_BASIS, status: 'current and active', checked: 'September 24, 2026' }
];

export const metadata: Metadata = {
  title: "New Day Solar Reviews (2026): Family-Owned, Murrieta, CA",
  description: "New Day Solar is a family-owned Murrieta installer that sells ownership (cash or loan) with Enphase inverters and FranklinWH batteries. What to confirm.",
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

// No Review/Rating JSON-LD here: Google's review-snippet rules require
// ratings for a local business or organization to come directly from users,
// not from editors, and this site does not collect user ratings
// (developers.google.com/search/docs/appearance/structured-data/review-snippet,
// fetched 2026-09-23).

export default function NewDayReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary'>Home</Link><span>/</span>
              <Link href='/solar-installers' className='hover:text-primary'>Solar company reviews</Link><span>/</span>
              <span className='text-foreground font-medium'>New Day Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                New Day Solar Reviews (2026): Family-Owned, Ownership-Only, Murrieta
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
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
                New Day Solar is a family-owned California installer based in Murrieta. The company focuses on ownership (cash or loan) and steers customers away from PPAs and leases. This review does not report its Yelp, Google or BBB ratings or its years in business, so check its CSLB license record and recent reviews yourself. Get the install and Permission to Operate timeline in writing.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="New Day Solar review and quote comparison" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                New Day serves the Inland Empire and southern Riverside County (Temecula, Murrieta, Menifee, Winchester, Hemet, Wildomar, Lake Elsinore) with extensions into north San Diego County. Small, locally-owned, and deep-rooted in the southwest Inland Empire market.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                New Day does not manufacture panels. Enphase microinverters are standard; FranklinWH Home Power is the primary battery pairing (some Tesla Powerwall options available). Install-day is clean; full process through Permission to Operate is often 2 to 3 months, faster than the California average, largely because New Day is deeply familiar with the Riverside County and southern Riverside permitting offices.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and Reputation</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Yelp, Google and BBB: not reported here. Check the current ratings and read the newest complaints yourself.</li>
                <li>Own-site testimonials: these are marketing, not independent reviews.</li>
                <li>Solar forums and Reddit: Positive mentions in r/solar discussions about Inland Empire installers.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The main theme in the complaints this review found is inspection delays, which the county largely controls rather than the installer. We did not verify total complaint volume; check the BBB record yourself.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Cash or loans through third-party financing partners. New Day is known for competitive loan rates — customers have reported sub-3% options at certain historical rate cycles, and does not heavily pitch PPAs or leases. You own the system.
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
                <div><h3 className='text-lg font-bold text-foreground mb-2'>How long does a New Day install take?</h3><p className='text-foreground/80'>Contract to Permission to Operate is often 2 to 3 months, fast for California, largely due to deep familiarity with Riverside County permitting.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>What battery does New Day install?</h3><p className='text-foreground/80'>FranklinWH Home Power is the primary battery pairing. Some Tesla Powerwall options are available.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Compare New Day With Other Written Quotes.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.</p>
              <div className='flex justify-center'><Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Request a solar review<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="New Day Solar review and quote comparison" />
            </div>

            <div className='mt-10'>
              <Link href='/best-solar-companies-california' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Best Solar Companies in California</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <VerifyInstallerBox installerName="New Day Solar" licenses={NEW_DAY_LICENSES} />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
