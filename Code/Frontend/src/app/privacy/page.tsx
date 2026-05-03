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
// HOST-AWARE /privacy PAGE
// =============================================================================
// One legal text body, swapped brand name + per-domain layout. Each domain
// reaches /privacy through middleware's isSharedTrustPath allowlist.
// =============================================================================

type Domain = 'crr' | 'grh' | 'shg' | 'ahb' | 'glp1';

interface BrandConfig {
  brand: string;
  domain: string;
  contactPath: string;
  canonical: string;
}

const BRANDS: Record<Domain, BrandConfig> = {
  crr: { brand: 'California Rate Relief', domain: 'ratereliefca.com', contactPath: '/contact', canonical: 'https://ratereliefca.com/privacy' },
  grh: { brand: 'GreenReviewsHub', domain: 'greenreviewshub.com', contactPath: '/contact', canonical: 'https://greenreviewshub.com/privacy' },
  shg: { brand: 'SecureHomeGear', domain: 'securehomegear.com', contactPath: '/contact', canonical: 'https://securehomegear.com/privacy' },
  ahb: { brand: 'At Home Biohacking', domain: 'athomebiohacking.com', contactPath: '/contact', canonical: 'https://athomebiohacking.com/privacy' },
  glp1: { name: 'GLP1CompareHub', canonical: 'https://glp1comparehub.com/privacy' },
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
    title: `Privacy Policy — ${cfg.brand}`,
    description: `How ${cfg.brand} collects, uses, and protects visitor data. GDPR, CCPA, and US state privacy law compliance information.`,
    alternates: { canonical: cfg.canonical },
  };
}

interface Palette { fg: string; muted: string; mutedFg: string; accent: string; bg: string; }

function PrivacyBody({ cfg, palette }: { cfg: BrandConfig; palette: Palette }) {
  const { brand, contactPath } = cfg;
  return (
    <div className='space-y-8 leading-relaxed' style={{ color: palette.muted }}>
      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>Information We Collect</h2>
        <p className='mb-3'>
          <strong style={{ color: palette.fg }}>Analytics data (automatic).</strong> When you visit {brand}, our analytics provider collects: pages viewed, referring site, approximate location (city-level from IP), browser type, device type, and time on page. This data is aggregated and used to understand what content is useful to readers.
        </p>
        <p className='mb-3'>
          <strong style={{ color: palette.fg }}>Affiliate click tracking.</strong> When you click an affiliate link, the retailer (Amazon, AWIN merchants, CJ Affiliate, Impact.com, etc.) sets a tracking cookie to attribute any subsequent purchase to {brand}. We do not have access to your personal purchase data; retailers only tell us aggregate commission amounts per reporting period.
        </p>
        <p>
          <strong style={{ color: palette.fg }}>Contact form submissions.</strong> If you email us or submit a contact form, we store the message, your email address, and any attached information to respond to your inquiry. This data is not sold, shared with third parties, or used for marketing.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>How We Use Your Data</h2>
        <ul className='space-y-2 list-disc pl-6'>
          <li>To operate and improve the {brand} website</li>
          <li>To respond to direct contact and inquiries</li>
          <li>To measure affiliate program performance at the aggregate level</li>
          <li>To comply with applicable law</li>
        </ul>
        <p className='mt-3'>We do not sell personal data to third parties. We do not use your data for advertising targeting outside of our site.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>Cookies</h2>
        <p className='mb-3'>We use cookies for basic site functionality and analytics. Third-party cookies are set by:</p>
        <ul className='space-y-2 list-disc pl-6'>
          <li><strong style={{ color: palette.fg }}>Affiliate networks</strong> (Amazon, AWIN, CJ Affiliate, Impact.com), to attribute purchases to our site</li>
          <li><strong style={{ color: palette.fg }}>Analytics providers</strong>, to measure aggregate site usage</li>
        </ul>
        <p className='mt-3'>You can disable cookies in your browser settings. Some site functionality may be affected, but most content remains accessible.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>Your Rights (GDPR / CCPA)</h2>
        <p className='mb-3'>Depending on your location, you may have rights to:</p>
        <ul className='space-y-2 list-disc pl-6'>
          <li>Request a copy of personal data we hold about you</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of any data sharing (we do not sell data, so this is effectively always opted out)</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
        <p className='mt-3'>
          To exercise any of these rights, email us via our{' '}
          <Link href={contactPath} className='underline' style={{ color: palette.accent }}>contact page</Link>
          . We respond to GDPR requests within 30 days and CCPA requests within 45 days as required by law.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>Data Retention</h2>
        <p>Analytics data is retained for 26 months (standard provider default). Contact form submissions are retained for 3 years to support follow-up communications. Delete requests are processed within the timeframes above.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>Children&apos;s Privacy</h2>
        <p>{brand} is not intended for children under 13. We do not knowingly collect data from children. If you believe we have inadvertently collected data from a minor, contact us and we will delete it promptly.</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>Changes to This Policy</h2>
        <p>We may update this privacy policy periodically. Material changes will be announced with an updated effective date at the top of this page.</p>
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
            <span style={{ color: palette.fg }}>Privacy Policy</span>
          </nav>
          <header className='mb-10'>
            <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: palette.fg }}>Privacy Policy</h1>
            <p className='text-lg' style={{ color: palette.muted }}>
              Effective date: April 2026. This policy explains what data {cfg.brand} collects, how it&apos;s used, and your rights under GDPR, CCPA, and applicable US state privacy laws.
            </p>
          </header>
          {children}
        </article>
      </div>
    </main>
  );
}

function ShgPrivacy() {
  const cfg = BRANDS.shg;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#f59e0b', bg: '#0a0f1c' };
  return (
    <SHGLayout>
      <SHGHeader />
      <PageShell cfg={cfg} palette={palette}><PrivacyBody cfg={cfg} palette={palette} /></PageShell>
      <SHGFooter />
    </SHGLayout>
  );
}

  if (d === 'glp1') {
    return (
      <GLP1TrustPage title='Privacy Policy'>
        <CommonContent name={cfg.name} domain={d} />
      </GLP1TrustPage>
    );
  }

function GrhPrivacy() {
  const cfg = BRANDS.grh;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', bg: 'hsl(150, 20%, 5%)' };
  return (
    <ReviewLayout>
      <ReviewHeader />
      <PageShell cfg={cfg} palette={palette}><PrivacyBody cfg={cfg} palette={palette} /></PageShell>
      <ReviewFooter />
    </ReviewLayout>
  );
}

function AhbPrivacy() {
  const cfg = BRANDS.ahb;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#ec4899', bg: '#0c0a18' };
  return (
    <AHBLayout>
      <AHBHeader />
      <PageShell cfg={cfg} palette={palette}><PrivacyBody cfg={cfg} palette={palette} /></PageShell>
      <AHBFooter />
    </AHBLayout>
  );
}

function CrrPrivacy() {
  const cfg = BRANDS.crr;
  const palette: Palette = { fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', bg: 'hsl(var(--background))' };
  return (
    <PublicLayout>
      <CRRHeader />
      <PageShell cfg={cfg} palette={palette}><PrivacyBody cfg={cfg} palette={palette} /></PageShell>
      <CRRFooter />
    </PublicLayout>
  );
}

export default async function PrivacyPage() {
  const domain = await getDomain();
  if (domain === 'shg') return <ShgPrivacy />;
  if (domain === 'grh') return <GrhPrivacy />;
  if (domain === 'ahb') return <AhbPrivacy />;
  return <CrrPrivacy />;
}
