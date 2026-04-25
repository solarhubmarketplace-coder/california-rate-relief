import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'Canadian Solar Panels Review 2026: HiKu Series for California',
  description: "Canadian Solar is a tier-1 public manufacturer with strong value positioning. Here is an honest review of Canadian Solar HiKu panels for California homeowners — warranty, efficiency, installer partnerships.",
  alternates: { canonical: '/panel-reviews/canadian-solar-panels-review' },
  openGraph: { title: 'Canadian Solar Panels Review 2026: HiKu Series for California', description: 'Canadian Solar panel review for California homeowners.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Canadian Solar Panels Review 2026',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/panel-reviews/canadian-solar-panels-review' },
};

export default function CanadianSolarReview() {
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
              <span className='text-foreground font-medium'>Canadian Solar</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Panel Brand Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Canadian Solar Panels Review 2026: HiKu Series for California</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Canadian Solar is one of the largest publicly traded tier-1 panel manufacturers globally, headquartered in Guelph, Ontario, Canada, and listed on the NASDAQ under ticker CSIQ. The company has been producing panels at massive scale for over two decades and is a common choice on California residential and commercial installs when value is the priority over premium specs. Here&apos;s a plain review.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Company</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Canadian Solar Inc. was founded in 2001 by Dr. Shawn Qu and is headquartered in Guelph, Ontario. Despite the name, most of its manufacturing is in China — it&apos;s Canadian-headquartered rather than Canadian-manufactured. The company is publicly traded on the NASDAQ (CSIQ), which provides quarterly financial transparency via SEC filings. With 20+ years of continuous operation, Canadian Solar is among the most financially stable tier-1 panel manufacturers — a meaningful factor for long-duration warranty confidence.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Panel Series</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Canadian Solar&apos;s current residential lineup includes the <strong>HiKu</strong>, <strong>BiHiKu</strong>, and <strong>TOPHiKu</strong> series. HiKu is the standard residential module; BiHiKu is the bifacial variant (produces power from both sides if mounted where reflected light can reach the back); TOPHiKu uses TOPCon cell technology for improved efficiency and temperature performance. Typical wattages in the 400-440W range with efficiencies around 20-22% depending on specific model year.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Canadian Solar offers a standard 25-year product defect warranty + 25-year linear power warranty on most current residential panels. Year-25 guaranteed output is typically in the 82-85% range for baseline HiKu, higher for the premium TOPHiKu TOPCon models. Specific percentages on the panel spec sheet — verify with your installer.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who Uses Canadian Solar in California</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Canadian Solar panels are installed by a wide range of California installers — they&apos;re a common mid-tier choice when the installer is optimizing for price/performance balance. Not usually the panel of choice for premium installs (REC Alpha or Qcells Q.Peak Duo would typically be chosen there), but solid for standard residential systems.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Canadian Solar Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You want tier-1 quality at a competitive price.</strong> Canadian Solar typically prices at or slightly below the Trina/Longi tier. For a budget-conscious California homeowner getting standard residential solar, Canadian Solar is a defensible spec.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You value company financial transparency.</strong> As a NASDAQ-listed company, Canadian Solar files quarterly 10-Q and annual 10-K reports you can read on SEC EDGAR. If warranty durability matters to you and you want to verify the parent company&apos;s financial health periodically, that transparency is useful.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Canadian Solar May Not Be The Best Fit</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You want US-manufactured panels.</strong> Canadian Solar panels are primarily manufactured in China, Vietnam, and other Asian facilities. They don&apos;t qualify for the IRA domestic-content ITC bonus.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You want the absolute premium spec.</strong> Canadian Solar&apos;s standard HiKu is mid-tier residential. For hot inland California or homes with limited roof area where you want maximum production per square foot, higher-efficiency panels like REC Alpha Pure, Qcells Q.Peak Duo, or Silfab Elite may be worth the price premium.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Are Canadian Solar panels good?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. Tier-1 manufacturer, publicly traded, 20+ year operating history. Mid-tier residential spec at competitive pricing. Common and defensible choice for standard California installs.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Are Canadian Solar panels actually made in Canada?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>The company is headquartered in Canada (Guelph, Ontario). Most manufacturing is in China, Vietnam, and other Asian facilities. The &quot;Canadian&quot; name refers to headquarters, not manufacturing.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is Canadian Solar publicly traded?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes, on NASDAQ under ticker CSIQ. Quarterly and annual financial reports are available on SEC EDGAR.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How does Canadian Solar compare to Trina?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Very similar on spec, warranty, and typical pricing. Both are large tier-1 Chinese-manufactured brands with strong financial backing. Choice often comes down to installer supply-chain preference rather than meaningful panel differences.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get Quotes With Canadian Solar (or Other Tier-1) Panels</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief connects you with installers that offer Canadian Solar alongside other tier-1 panel options. One form, multiple quotes.</p>
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
