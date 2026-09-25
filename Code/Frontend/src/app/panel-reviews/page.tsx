import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Calendar, Clock, Factory } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';
import { Byline } from '@/components/trust/Byline';

export const metadata: Metadata = {
  title: "Solar Panel Brand Reviews for California Homeowners (2026)",
  description: "Plain-English reviews of the solar panel brands California installers use: Trina, Silfab, REC and Canadian Solar, plus how 25-year warranties differ.",
  alternates: { canonical: '/panel-reviews' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Solar Panel Brand Reviews for California Homeowners (2026)',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: CRR_AUTHOR_PERSON,
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
  { name: 'Trina Solar', slug: 'trina-solar-panels-review', origin: 'China', series: 'Vertex S series', ownership: 'Public (SSE: 688599)', usedBy: 'Made mainly in China; check the Vertex S datasheet' },
  { name: 'Silfab Solar', slug: 'silfab-solar-panels-review', origin: 'Canada (US manufacturing)', series: 'Cascade / Prime / Elite series', ownership: 'Private, Mississauga Ontario HQ', usedBy: 'US and Canadian plants; ask whether the installer offers Silfab labor coverage' },
  { name: 'REC Solar', slug: 'rec-solar-panels-review', origin: 'Norway (now Reliance-owned)', series: 'Alpha Pure series', ownership: 'Reliance Industries subsidiary', usedBy: 'Made in Singapore; ProTrust coverage needs an REC-certified installer' },
  { name: 'Canadian Solar', slug: 'canadian-solar-panels-review', origin: 'Canada', series: 'HiKu / BiHiKu / TOPHiKu series', ownership: 'Public (NASDAQ: CSIQ)', usedBy: 'Made mainly in Asia; check the HiKu or TOPHiKu datasheet' },
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
              <Byline updated="2026-04-23" />
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>5 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none mb-10'>
              <p className='text-lg text-foreground/80 leading-relaxed'>
                Your California installer will propose a specific solar panel brand — and that choice matters. Panel reliability, efficiency, warranty depth, and long-term company solvency all differ between tier-1 manufacturers. These reviews cover the panel brands most commonly installed in California in 2026, what makes each one distinct, and what to ask the installer quoting you.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Short version: most tier-1 panels in the current market produce similar output and carry similar 25-year warranties. The bigger differences are the manufacturer&apos;s financial stability (will they exist in year 20 to honor the warranty?), their US manufacturing presence (matters for IRA domestic-content bonuses), and how they pair with specific inverter brands.
              </p>
            </div>

            {/* Bill-first step after the intro (2026-09-23); it opens the inquiry
                form at the end of the page at step 2. */}
            <HeroQuickCheck topic="Solar panel brand comparison" className='mb-12' />

            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>Panel Brand Reviews</h2>
              <div className='grid md:grid-cols-2 gap-4'>
                {panels.map((p) => (
                  <Link key={p.slug} href={`/panel-reviews/${p.slug}`} className='p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors'>
                    <Factory className='h-5 w-5 text-primary mb-2' />
                    <h3 className='font-bold text-foreground mb-2'>{p.name}</h3>
                    <p className='text-xs text-muted-foreground mb-2'>{p.origin} — {p.ownership}</p>
                    <p className='text-sm text-foreground/80'>Series: {p.series}</p>
                    <p className='text-xs text-muted-foreground mt-2'>Note: {p.usedBy}</p>
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
                <strong>US manufacturing.</strong> The domestic-content bonus (10 percentage points for a project under 1 MW or one meeting prevailing-wage and apprenticeship rules, 2 points otherwise) rides on the <em>commercial</em> credit under IRC § 48E. It is not something a homeowner claims — the federal residential credit ended for expenditures made after December 31, 2025, so this matters to a business buyer or to the third-party owner on a lease or PPA. Qualifying requires the project to meet the IRS thresholds for US-made steel, iron and manufactured products, not just the panels. Silfab and Qcells have US manufacturing footprints. Trina, Canadian Solar, REC, Jinko, and Longi primarily manufacture overseas.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Warranty structure.</strong> Standard is 25-year product (defect) + 25-year performance (power warranty). The year-25 guaranteed output level varies by panel and is printed on each model&apos;s warranty sheet; compare it across the quotes you get.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Efficiency.</strong> A higher-efficiency panel produces more from the same roof area; the datasheet gives each model&apos;s efficiency. It matters most if roof space is limited.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                <strong>Your installer&apos;s relationship.</strong> Some installers have strong partnerships with specific panel brands (supply agreements, enhanced labor warranties, etc.). Ask whether the installer quoting you offers any manufacturer labor coverage; that can matter more than a small spec difference.
              </p>
            </section>

            {/* The closing ask (2026-09-23): the inquiry form itself, in place of
                a link-only box that sent readers to the home page. */}
            <SolarInquiry variant='review' topic="Solar panel brand comparison" />
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="premium" /></div>
    </PublicLayout>
  );
}
