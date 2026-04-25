import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Clock, Factory } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title: 'Solar Panel Brand Reviews for California Homeowners (2026)',
  description:
    "Plain-English reviews of the solar panel brands California installers actually use — Qcells, REC, Silfab, Trina, Canadian Solar, Jinko, Longi, Maxeon. What's behind the warranty, who uses each one, and how to pick.",
  alternates: { canonical: '/panel-reviews' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Solar Panel Brand Reviews for California Homeowners (2026)',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/panel-reviews' },
};

interface Panel {
  name: string;
  slug: string;
  origin: string;
  series: string;
  ownership: string;
  usedBy: string;
}

const panels: Panel[] = [
  { name: 'Trina Solar', slug: 'trina-solar-panels-review', origin: 'China', series: 'Vertex S series', ownership: 'Public (SSE: 688599)', usedBy: 'Momentum Solar, Freedom Forever, broader installer base' },
  { name: 'Silfab Solar', slug: 'silfab-solar-panels-review', origin: 'Canada (US manufacturing)', series: 'Cascade / Prime / Elite series', ownership: 'Private, Mississauga Ontario HQ', usedBy: 'Semper Solaris (enhanced labor warranty partner)' },
  { name: 'REC Solar', slug: 'rec-solar-panels-review', origin: 'Norway (now Reliance-owned)', series: 'Alpha Pure series', ownership: 'Reliance Industries subsidiary', usedBy: 'Sunrun, Momentum, Freedom Forever' },
  { name: 'Canadian Solar', slug: 'canadian-solar-panels-review', origin: 'Canada', series: 'HiKu / BiHiKu / TOPHiKu series', ownership: 'Public (NASDAQ: CSIQ)', usedBy: 'Major residential and commercial installers' },
];

export default function PanelReviewsHub() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-4xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Panel Reviews</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Panel Brand Reviews</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Solar Panel Brand Reviews for California Homeowners</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>5 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none mb-10'>
              <p className='text-lg text-foreground/80 leading-relaxed'>
                Your California installer will propose a specific solar panel brand — and that choice matters. Panel reliability, efficiency, warranty depth, and long-term company solvency all differ between tier-1 manufacturers. These reviews cover the panel brands most commonly installed in California in 2026, what makes each one distinct, and which California installers tend to use them.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Short version: most tier-1 panels in the current market produce similar output and carry similar 25-year warranties. The bigger differences are the manufacturer&apos;s financial stability (will they exist in year 20 to honor the warranty?), their US manufacturing presence (matters for IRA domestic-content bonuses), and how they pair with specific inverter brands.
              </p>
            </div>

            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>Panel Brand Reviews</h2>
              <div className='grid md:grid-cols-2 gap-4'>
                {panels.map((p) => (
                  <Link key={p.slug} href={`/panel-reviews/${p.slug}`} className='p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors'>
                    <Factory className='h-5 w-5 text-primary mb-2' />
                    <h3 className='font-bold text-foreground mb-2'>{p.name}</h3>
                    <p className='text-xs text-muted-foreground mb-2'>{p.origin} — {p.ownership}</p>
                    <p className='text-sm text-foreground/80'>Series: {p.series}</p>
                    <p className='text-xs text-muted-foreground mt-2'>Used by: {p.usedBy}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className='mb-12 prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>What to Look For in a Solar Panel Brand</h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Company solvency.</strong> A 25-year warranty is only as good as the company behind it. Public companies file quarterly reports you can read. Private companies vary. After multiple installer bankruptcies in 2024-2026, panel-manufacturer financial health matters more to buyers than ever.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>US manufacturing.</strong> The federal ITC&apos;s domestic-content bonus (up to 10% additional credit on top of the 30% base) requires panels meet domestic-content thresholds. Silfab, Qcells (via Axia Solar), and Tesla have US manufacturing footprints. Trina, Canadian Solar, REC, Jinko, and Longi primarily manufacture overseas.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Warranty structure.</strong> Standard is 25-year product (defect) + 25-year performance (power warranty). The year-25 guaranteed output level varies by panel: tier-1 baseline is roughly 80-85%; premium panels (Qcells, REC Alpha, Silfab) guarantee 86-92%+ at year 25.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Efficiency.</strong> Modern tier-1 residential panels run 20-22% efficiency. A 2-3 percentage-point efficiency difference translates to 5-10% more annual production from the same roof area. Matters most if roof space is limited.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                <strong>Your installer&apos;s relationship.</strong> Some installers have strong partnerships with specific panel brands (supply agreements, enhanced labor warranties, etc.). Semper Solaris for example offers enhanced labor coverage on Silfab panels. That kind of partnership is worth more than a small spec difference.
              </p>
            </section>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Get Quotes With Multiple Panel Options</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief connects you with installers offering different panel brands. Fill out one form, get up to three quotes — compare pricing and panel specs side by side.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
