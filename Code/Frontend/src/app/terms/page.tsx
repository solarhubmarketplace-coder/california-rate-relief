import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { ChevronRight } from 'lucide-react';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header as CRRHeader } from '@/components/landing/Header';
import { Footer as CRRFooter } from '@/components/landing/Footer';
import { GLP1TrustPage } from '@/components/glp1/GLP1TrustPage';

// =============================================================================
// HOST-AWARE /terms PAGE — same pattern as /privacy
// =============================================================================

type Domain = 'crr' | 'grh' | 'shg' | 'ahb' | 'glp1';
interface BrandConfig { brand: string; domain: string; canonical: string; }

const BRANDS: Record<Domain, BrandConfig> = {
  crr: { brand: 'California Rate Relief', domain: 'ratereliefca.com', canonical: 'https://ratereliefca.com/terms' },
  grh: { brand: 'GreenReviewsHub', domain: 'greenreviewshub.com', canonical: 'https://greenreviewshub.com/terms' },
  shg: { brand: 'SecureHomeGear', domain: 'securehomegear.com', canonical: 'https://securehomegear.com/terms' },
  ahb: { brand: 'At Home Biohacking', domain: 'athomebiohacking.com', canonical: 'https://athomebiohacking.com/terms' },
  glp1: { name: 'GLP1CompareHub', canonical: 'https://glp1comparehub.com/terms' },
};

async function getDomain(): Promise<Domain> {
  const hdrs = await headers();
  const host = (hdrs.get('host') || '').toLowerCase();
  if (host.includes('greenreviewshub')) return 'grh';
  if (host.includes('securehomegear')) return 'shg';
  if (host.includes('athomebiohacking')) return 'ahb';
  if (host.includes('glp1comparehub')) return 'glp1';
  return 'crr';
}

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain();
  const cfg = BRANDS[domain];
  return {
    title: `Terms of Service — ${cfg.brand}`,
    description: `Terms of use for ${cfg.domain}: copyright, disclaimers, limitations of liability, and governing law.`,
    alternates: { canonical: cfg.canonical },
  };
}

interface Palette { fg: string; muted: string; mutedFg: string; accent: string; bg: string; }

function TermsBody({ cfg, palette }: { cfg: BrandConfig; palette: Palette }) {
  const { brand, domain } = cfg;
  return (
    <div className='space-y-8 leading-relaxed' style={{ color: palette.muted }}>
      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>1. Acceptance of Terms</h2>
        <p>Access to and use of {domain} (the &quot;Site&quot;) is conditioned on your acceptance of these Terms of Service. If you disagree, please do not use the Site.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>2. Editorial Content and Opinions</h2>
        <p className='mb-3'>Product reviews, comparisons, and recommendations on {brand} represent our independent editorial judgment based on research, public product information, aggregated customer feedback, and where applicable, hands-on testing. Opinions expressed are the author&apos;s and do not constitute professional advice.</p>
        <p>We strive for accuracy but make no warranty that content is free from errors. If you spot a factual error, please <Link href='/contact' className='underline' style={{ color: palette.accent }}>contact us</Link> and we will correct it.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>3. Affiliate Relationships</h2>
        <p>{brand} may earn affiliate commissions when visitors purchase products through links on the Site. Full disclosure on our <Link href='/affiliate-disclosure' className='underline' style={{ color: palette.accent }}>affiliate disclosure page</Link>. Affiliate relationships do not alter our editorial recommendations.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>4. Intellectual Property</h2>
        <p>All original content, text, logos, and graphics on {brand} are owned by us or licensed to us. You may share brief excerpts (up to 100 words) with attribution and a link back. Republishing full articles requires written permission.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>5. No Warranty</h2>
        <p>{brand} content is provided &quot;as is&quot; without warranties of any kind, either express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. Product pricing, feature availability, and third-party service terms change frequently; we verify at publish time but cannot guarantee real-time accuracy. Check the manufacturer website and retailer before purchase.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>6. Limitation of Liability</h2>
        <p>{brand}, its owners, employees, and contributors will not be liable for any indirect, incidental, consequential, or punitive damages arising from use of the Site or any product purchased through links on the Site. Your exclusive remedy for dissatisfaction with the Site is to stop using it.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>7. Third-Party Content and Links</h2>
        <p>{brand} links to third-party retailers, manufacturers, and content. We are not responsible for third-party content, product quality, pricing, shipping, returns, or warranty fulfillment. All purchases are made directly with the third-party retailer under their own terms.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>8. Governing Law</h2>
        <p>These Terms are governed by the laws of the United States and the state where {brand} operates. Disputes will be resolved in the appropriate courts of that jurisdiction.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>9. Changes to These Terms</h2>
        <p>We may update these Terms periodically. Material changes will be announced with an updated effective date at the top of this page. Continued use after changes constitutes acceptance.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>10. Contact</h2>
        <p>Questions about these Terms? Use our <Link href='/contact' className='underline' style={{ color: palette.accent }}>contact page</Link>.</p>
      </section>
    </div>
  );
}

function PageShell({ cfg, palette, children }: { cfg: BrandConfig; palette: Palette; children: React.ReactNode }) {
  return (
    <main className='py-16' style={{ backgroundColor: palette.bg }}>
      <div className='container mx-auto px-4'>
        <article className='max-w-3xl mx-auto'>
          <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: palette.mutedFg }}>
            <Link href='/' style={{ color: palette.muted }}>Home</Link>
            <ChevronRight className='h-3 w-3' />
            <span style={{ color: palette.fg }}>Terms of Service</span>
          </nav>
          <header className='mb-10'>
            <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: palette.fg }}>Terms of Service</h1>
            <p className='text-lg' style={{ color: palette.muted }}>Effective date: April 2026. By using {cfg.domain}, you agree to the terms below.</p>
          </header>
          {children}
        </article>
      </div>
    </main>
  );
}

function ShgTerms() {
  const cfg = BRANDS.shg;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#f59e0b', bg: '#0a0f1c' };
  return (
    <SHGLayout>
      <SHGHeader />
      <PageShell cfg={cfg} palette={palette}><TermsBody cfg={cfg} palette={palette} /></PageShell>
      <SHGFooter />
    </SHGLayout>
  );
}

  if (d === 'glp1') {
    return (
      <GLP1TrustPage title='Terms of Use'>
        <CommonContent name={cfg.name} domain={d} />
      </GLP1TrustPage>
    );
  }

function GrhTerms() {
  const cfg = BRANDS.grh;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', bg: 'hsl(150, 20%, 5%)' };
  return (
    <ReviewLayout>
      <ReviewHeader />
      <PageShell cfg={cfg} palette={palette}><TermsBody cfg={cfg} palette={palette} /></PageShell>
      <ReviewFooter />
    </ReviewLayout>
  );
}

function AhbTerms() {
  const cfg = BRANDS.ahb;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#ec4899', bg: '#0c0a18' };
  return (
    <AHBLayout>
      <AHBHeader />
      <PageShell cfg={cfg} palette={palette}><TermsBody cfg={cfg} palette={palette} /></PageShell>
      <AHBFooter />
    </AHBLayout>
  );
}

function CrrTerms() {
  const cfg = BRANDS.crr;
  const palette: Palette = { fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', bg: 'hsl(var(--background))' };
  return (
    <PublicLayout>
      <CRRHeader />
      <PageShell cfg={cfg} palette={palette}><TermsBody cfg={cfg} palette={palette} /></PageShell>
      <CRRFooter />
    </PublicLayout>
  );
}

export default async function TermsPage() {
  const domain = await getDomain();
  if (domain === 'shg') return <ShgTerms />;
  if (domain === 'grh') return <GrhTerms />;
  if (domain === 'ahb') return <AhbTerms />;
  return <CrrTerms />;
}
