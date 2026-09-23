import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: "REC Solar Panels Review: Alpha Pure HJT Series Specs",
  description: "REC's Alpha Pure uses HJT cells for better hot-weather output. Reliance-owned, made in Singapore. Warranty terms and what to ask a California installer.",
  alternates: { canonical: '/panel-reviews/rec-solar-panels-review' },
  openGraph: { title: 'REC Solar Panels Review 2026: Alpha Pure Series for California', description: 'REC Solar panel review for California homeowners.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'REC Solar Panels Review 2026',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/panel-reviews/rec-solar-panels-review' },
};

export default function RecSolarReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
              <span>/</span>
              <Link href='/panel-reviews' className='hover:text-primary transition-colors'>Panel Reviews</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>REC Solar</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Panel Brand Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>REC Solar Panels Review 2026: Alpha Pure Series for California</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                REC Group is one of the premium tier-1 solar panel manufacturers — Norwegian in origin, now owned by Reliance Industries (India&apos;s largest private-sector conglomerate). REC&apos;s Alpha Pure series is well-regarded as a premium residential panel, especially for California homeowners who prioritize warranty depth and efficiency. Here&apos;s an honest review.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="REC Solar panels review and quote comparison" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Company</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                REC Group (Renewable Energy Corporation) was founded in Norway in 1996. The company is now headquartered in Singapore and has been owned by India-based Reliance Industries since a 2021 acquisition. REC manufactures panels at facilities in Singapore and continues to be recognized as a tier-1 manufacturer with strong quality control reputation. Reliance is one of the largest conglomerates in India — financial stability backing the warranty is solid.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                REC has historically been a premium-positioned brand rather than a high-volume commodity supplier — the panels are commonly seen on higher-end residential installs rather than ultra-price-sensitive bids.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Panel Series</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The flagship residential line is the <strong>REC Alpha Pure</strong> series, using heterojunction (HJT) cell technology. HJT is a premium cell architecture that offers better temperature coefficient (less efficiency loss as panels heat up in California&apos;s hot summers) and better low-light performance than traditional PERC cells. Wattage, efficiency and the year-25 power warranty vary by model; the datasheet and warranty sheet for the quoted model give them.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                REC offers a strong warranty on the Alpha Pure series — 25-year product + 25-year power, and the guaranteed year-25 output is on the warranty sheet for the exact model being quoted. REC also runs a &quot;ProTrust&quot; warranty through REC-certified installers; ask whether the installer quoting you is certified and what that warranty adds.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who Uses REC in California</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                REC panels are usually offered on mid-to-premium residential installs. Which brands an installer offers changes with its supply agreements, so ask each installer, including companies such as{' '}<Link href='/solar-installers/sunrun-review' className='text-primary hover:underline'>Sunrun</Link>{' '}or{' '}<Link href='/solar-installers/momentum-solar-review' className='text-primary hover:underline'>Momentum Solar</Link>, which panel its quote specifies.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When REC Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You want premium warranty depth.</strong> Compare REC Alpha Pure&apos;s year-25 power guarantee on its warranty sheet with the other panels you are quoted.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You live in hot inland California.</strong> HJT cells have a better temperature coefficient than PERC, meaning Alpha Pure panels lose less efficiency during hot summer days in places like Bakersfield, Fresno, Palm Springs. The temperature coefficient on each datasheet shows how much output a panel loses per degree of heat.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You want the ProTrust enhanced labor warranty</strong> (installer must be REC-certified to offer it).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When REC May Not Be The Best Fit</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Price. REC Alpha Pure typically costs more per watt than baseline tier-1 panels like Trina Vertex S or Canadian Solar HiKu. On a budget-first install, the price premium may not be worth it.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Domestic content. REC panels are manufactured in Singapore, so they do not count as US-made manufactured products toward the domestic-content bonus on the commercial credit (IRC § 48E), which a business or third-party system owner claims, not a homeowner. If domestic content is important, consider panels made in the US, such as Silfab (Washington State) or Qcells (Georgia).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Are REC solar panels good?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. REC Alpha Pure is a premium tier-1 panel with HJT cell technology, strong warranty depth, and good hot-weather performance. Widely offered as a premium residential option.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Where are REC panels made?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Primarily in Singapore. REC panels do not qualify for the domestic-content bonus on the commercial ITC (IRC § 48E), which a business or third-party system owner claims, not a homeowner.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is REC Solar publicly traded?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>REC Group is privately held, now owned by Reliance Industries (the parent Reliance is publicly traded in India). Financial stability backing warranty claims is solid given the Reliance parentage.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What is HJT technology and why does it matter?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Heterojunction (HJT) cells combine crystalline silicon with thin-film amorphous silicon layers. Benefits: better temperature coefficient (less efficiency loss when hot), better low-light / diffuse-light performance, higher bifacial gain. Meaningful for California homeowners in hot inland areas.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Ask for REC Alpha Pure Panels in a Written Quote</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
              <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="REC Solar panels review and quote comparison" />
            </div>

            <div className='mt-10'><Link href='/panel-reviews' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Panel Reviews</Link></div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="premium" /></div>
    </PublicLayout>
  );
}
