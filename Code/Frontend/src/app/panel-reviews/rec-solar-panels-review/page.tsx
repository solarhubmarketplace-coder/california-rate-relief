import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'REC Solar Panels Review 2026: Alpha Pure Series for California',
  description: "REC Solar is a Norwegian-origin, now Reliance-owned tier-1 panel manufacturer known for the Alpha Pure series. Here is a California homeowner review — warranty, installer partnerships, and where REC fits.",
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

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Company</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                REC Group (Renewable Energy Corporation) was founded in Norway in 1996. The company is now headquartered in Singapore and has been owned by India-based Reliance Industries since a 2021 acquisition. REC manufactures panels at facilities in Singapore and continues to be recognized as a tier-1 manufacturer with strong quality control reputation. Reliance is one of the largest conglomerates in India — financial stability backing the warranty is solid.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                REC has historically been a premium-positioned brand rather than a high-volume commodity supplier — the panels are commonly seen on higher-end residential installs rather than ultra-price-sensitive bids.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Panel Series</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The flagship residential line is the <strong>REC Alpha Pure</strong> series, using heterojunction (HJT) cell technology. HJT is a premium cell architecture that offers better temperature coefficient (less efficiency loss as panels heat up in California&apos;s hot summers) and better low-light performance than traditional PERC cells. The Alpha Pure series typically comes in 400-430W residential modules with efficiencies around 22% and a higher year-25 power warranty than baseline tier-1 panels.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                REC offers a strong warranty on the Alpha Pure series — 25-year product + 25-year power, with the Alpha Pure typically guaranteeing higher year-25 output than the industry-baseline 80-84%. Specific percentages are on the panel spec sheet (verify with your installer for the exact model year being quoted). REC&apos;s &quot;ProTrust&quot; warranty (when installed by certified installers) also includes enhanced labor coverage similar to Silfab&apos;s arrangement.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who Uses REC in California</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                REC panels are a common choice on mid-to-premium residential installs. Based on our installer research, {' '}<Link href='/solar-installers/sunrun-review' className='text-primary hover:underline'>Sunrun</Link>,{' '}<Link href='/solar-installers/momentum-solar-review' className='text-primary hover:underline'>Momentum Solar</Link>, and{' '}<Link href='/solar-installers/freedom-forever-review' className='text-primary hover:underline'>Freedom Forever</Link>{' '}all use REC panels among other tier-1 options depending on project specifications and current supply chain availability.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When REC Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You want premium warranty depth.</strong> REC Alpha Pure&apos;s year-25 power guarantee is among the stronger in the industry.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You live in hot inland California.</strong> HJT cells have a better temperature coefficient than PERC, meaning Alpha Pure panels lose less efficiency during hot summer days in places like Bakersfield, Fresno, Palm Springs. A 3-5% difference in hot-day performance compounds across thousands of hours of annual production.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You want the ProTrust enhanced labor warranty</strong> (installer must be REC-certified to offer it).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When REC May Not Be The Best Fit</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Price. REC Alpha Pure typically costs more per watt than baseline tier-1 panels like Trina Vertex S or Canadian Solar HiKu. On a budget-first install, the price premium may not be worth it.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Domestic content. REC panels are manufactured in Singapore — they do NOT qualify for the IRA domestic-content ITC bonus (10% additional credit). If domestic-content is important, consider Silfab (Washington State) or Qcells (Georgia) instead.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Are REC solar panels good?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. REC Alpha Pure is a premium tier-1 panel with HJT cell technology, strong warranty depth, and good hot-weather performance. Commonly considered among the best residential panels available.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Where are REC panels made?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Primarily in Singapore. REC panels do not qualify for the IRA domestic-content ITC bonus.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is REC Solar publicly traded?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>REC Group is privately held, now owned by Reliance Industries (the parent Reliance is publicly traded in India). Financial stability backing warranty claims is solid given the Reliance parentage.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>What is HJT technology and why does it matter?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Heterojunction (HJT) cells combine crystalline silicon with thin-film amorphous silicon layers. Benefits: better temperature coefficient (less efficiency loss when hot), better low-light / diffuse-light performance, higher bifacial gain. Meaningful for California homeowners in hot inland areas.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get Quotes With REC Alpha Pure Panels</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief connects you with installers offering REC alongside other tier-1 panels. Fill out one form, compare quotes with specific panel options.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link>
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
