import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sunergy Solar Review 2026: CA-Focused Installer With Strong EnergySage Ratings",
  description: "Sunergy Solar (Ladera Ranch / LA area) holds a 4.7/5 EnergySage rating across 92 reviews. Ownership model, Enphase microinverter equipment, and the delay complaints; the honest 2026 review.",
  alternates: { canonical: '/solar-installers/sunergy-solar-review' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: "Sunergy Solar Review 2026: CA-Focused Installer With Strong EnergySage Ratings",
  datePublished: '2026-04-24', dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/sunergy-solar-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org', '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Sunergy Solar', address: { '@type': 'PostalAddress', addressLocality: 'Ladera Ranch', addressRegion: 'CA', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '4.0', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Sunergy Solar is a California-focused installer with a 4.7/5 EnergySage score across 92 reviews and a simple ownership (not PPA) model. Strong on equipment and ownership economics. Recurring complaint is communication and install date slippage — worth setting tight expectations in the contract.',
};

export default function SunergyReview() {
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
              <span className='text-foreground font-medium'>Sunergy Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Sunergy Solar Review 2026: CA-Focused Installer With a 4.7/5 EnergySage Rating
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-24'>Updated April 24, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>8 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p>
                <p className='text-3xl font-extrabold text-foreground mt-1'>4.0 <span className='text-lg text-muted-foreground'>/ 5</span></p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p>
                <p className='text-sm text-foreground font-medium mt-1'>SoCal cash or loan buyers who want an Enphase-based system they own outright</p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p>
                <p className='text-sm text-foreground font-medium mt-1'>You need a hard install-by date; communication and timeline slippage are recurring themes</p>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Sunergy Solar is a California-focused installer based in the Ladera Ranch / LA area with several regional locations. (Note: don&apos;t confuse this company with Sunergy Systems in Washington; a different operation.) The CA Sunergy has built a solid customer reputation — 4.7/5 across 92 EnergySage reviews — and focuses on straight-ownership financing rather than the PPA-heavy models favored by larger national installers. The trade-off: a handful of recurring complaints about communication and install date slippage.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Footprint and Profile</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunergy operates across Southern California with multiple regional offices. It&apos;s a smaller regional installer versus the 22-state national brands in our comparison — which is a feature if service quality and local familiarity matter to you, and a limitation if you&apos;re outside SoCal.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunergy does not manufacture its own panels. The company installs Enphase microinverters as the default with a range of Tier-1 panel options. Install-day turnaround is typically 1 to 2 days on the roof; the full process from contract to Permission to Operate runs about 2 to 6 months, with some customers reporting 6+ month delays. The delay pattern is consistent with most California installers operating under NEM 3.0 and the utility interconnection backlogs in PG&amp;E / SCE / SDG&amp;E territory.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reviews and Reputation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                EnergySage shows 4.7/5 across 92 reviews; genuinely above industry average for a residential solar installer. SolarReviews has a smaller sample but skews positive. Yelp is mixed, negative reviews are concentrated around communication and install date slippage rather than equipment or workmanship. BBB complaint volume is modest for the company&apos;s size.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Common Complaints</h2>
              <ul className='list-disc pl-6 space-y-2 text-foreground/80 mb-6'>
                <li>Ghosting or silence after contract signing. Customer reports of multi-week gaps in communication.</li>
                <li>Install date rescheduled multiple times without proactive notice.</li>
                <li>Occasional leaks or post-install workmanship issues requiring follow-up visits.</li>
                <li>Slower response to warranty claims compared to industry-best installers.</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Financing and Ownership</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunergy is a clean ownership model: cash or loan. The company partners with Sungage Financial for solar loans but does not heavily push PPAs or leases. You own the system, which means you capture the 30% federal Residential Clean Energy Credit directly and you don&apos;t carry a 20-year contract when you sell the home. That&apos;s a genuine advantage over PPA-heavy competitors like Palmetto.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Typical warranty is 25 years on the solar system and 15 years on battery storage (when included). Workmanship warranty is usually 10 years but confirm the specific contract language before signing; California regional installers vary in how they structure the workmanship vs manufacturer warranties.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Sunergy Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunergy is a solid mid-tier pick for SoCal homeowners who want an ownership model (cash or loan), an Enphase-based system, and competitive pricing. The customer reputation data is meaningfully cleaner than the national PPA-heavy installers. The trade-off is communication consistency — build firm contractual milestones and get writing from the sales rep on timeline commitments.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Is Sunergy Solar a good company?</h3><p className='text-foreground/80'>EnergySage reviews are genuinely strong (4.7/5 / 92 reviews) and the ownership-model focus is customer-friendly. Main risk is communication slippage during the permitting/install window.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Sunergy install their own panels?</h3><p className='text-foreground/80'>No; Sunergy uses Tier-1 third-party panels with Enphase microinverters. Installation is done by Sunergy&apos;s own crews.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Does Sunergy offer PPAs or leases?</h3><p className='text-foreground/80'>Primarily no, the company&apos;s default is cash or loan (Sungage Financial). You own the system.</p></div>
                <div><h3 className='text-lg font-bold text-foreground mb-2'>Is this the same company as Sunergy Systems in Washington?</h3><p className='text-foreground/80'>No. The CA Sunergy Solar (based in Ladera Ranch / LA) is a different company. Reviews for Sunergy Systems WA do not apply here.</p></div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Get Sunergy&apos;s Quote Alongside Two Others.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief works with multiple California solar installers. Fill out one 60-second form and we&apos;ll line up quotes from up to three installers — so you can compare their pricing, equipment, and warranty terms side by side.</p>
              <div className='flex justify-center'><Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link></div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>More California Installer Reviews</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-installers/baker-electric-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Baker Electric Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/solar-optimum-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Solar Optimum Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/sunlux-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Sunlux Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/ameco-solar-review' className='p-4 border border-border rounded-lg hover:border-primary'><div className='flex items-center justify-between'><span className='font-medium'>Ameco Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
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
