import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { ChevronRight, BookOpen, Microscope, Mail } from 'lucide-react';
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

// =============================================================================
// HOST-AWARE /author/chad-simpson PROFILE PAGE
// =============================================================================
// Public bio + Person JSON-LD anchor. Every review's reviewedBy schema points
// at this page so Google can connect the dots: an editor with a public profile
// is reviewing X products.
// =============================================================================

type Domain = 'crr' | 'grh' | 'shg' | 'ahb';
interface DomainConfig { brand: string; canonical: string; siteOrigin: string; bioBlurb: string; }

const CONFIGS: Record<Domain, DomainConfig> = {
  crr: {
    brand: 'California Rate Relief',
    canonical: 'https://ratereliefca.com/author/chad-simpson',
    siteOrigin: 'https://ratereliefca.com',
    bioBlurb:
      'Chad has been tracking the California solar installer market for several years across the NEM 1, NEM 2, and NEM 3 transitions. He reads CSLB license records, BBB complaint files, court records, and homeowner reports before any installer review goes live on California Rate Relief.',
  },
  grh: {
    brand: 'GreenReviewsHub',
    canonical: 'https://greenreviewshub.com/author/chad-simpson',
    siteOrigin: 'https://greenreviewshub.com',
    bioBlurb:
      'Chad runs GreenReviewsHub as a research-led publication covering portable power stations, e-bikes, mini splits, smart thermostats, generators, and adjacent green-energy gear. Reviews aggregate manufacturer specs, owner reports, independent lab data, and warranty terms.',
  },
  shg: {
    brand: 'SecureHomeGear',
    canonical: 'https://securehomegear.com/author/chad-simpson',
    siteOrigin: 'https://securehomegear.com',
    bioBlurb:
      'Chad covers home security gear at SecureHomeGear with a focus on privacy posture, real-world reliability, and long-term ownership experience. He reads CVE disclosures, manufacturer warrant policies, and aggregated owner failure reports before a recommendation goes live.',
  },
  ahb: {
    brand: 'At Home Biohacking',
    canonical: 'https://athomebiohacking.com/author/chad-simpson',
    siteOrigin: 'https://athomebiohacking.com',
    bioBlurb:
      'Chad anchors At Home Biohacking in peer-reviewed research. Every health-relevant claim links to a PMID or DOI, and the evidence tier (RCT, systematic review, observational, anecdote) is named when a claim is made. Chad is not a medical professional; content is informational and not medical advice.',
  },
};

async function getDomain(): Promise<Domain> {
  const hdrs = await headers();
  const host = (hdrs.get('host') || '').toLowerCase();
  if (host.includes('greenreviewshub')) return 'grh';
  if (host.includes('securehomegear')) return 'shg';
  if (host.includes('athomebiohacking')) return 'ahb';
  return 'crr';
}

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain();
  const cfg = CONFIGS[domain];
  return {
    title: `Chad Simpson, Editor — ${cfg.brand}`,
    description: `About Chad Simpson, editor at ${cfg.brand}. Research-led approach, areas of focus, and how to get in touch.`,
    alternates: { canonical: cfg.canonical },
  };
}

interface Palette { fg: string; muted: string; mutedFg: string; accent: string; bg: string; cardBg: string; cardBorder: string; }

function PersonJsonLd({ cfg }: { cfg: DomainConfig }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${cfg.siteOrigin}/author/chad-simpson#person`,
    name: 'Chad Simpson',
    url: cfg.canonical,
    jobTitle: `Editor at ${cfg.brand}`,
    description: cfg.bioBlurb,
    sameAs: [`${cfg.siteOrigin}/about`, `${cfg.siteOrigin}/methodology`],
  };
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function AuthorBody({ cfg, palette }: { cfg: DomainConfig; palette: Palette }) {
  return (
    <div className='space-y-10 leading-relaxed' style={{ color: palette.muted }}>
      <div className='flex items-center gap-5'>
        <div
          className='w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0'
          style={{ backgroundColor: palette.accent, color: '#0a0a0a' }}
          aria-hidden='true'
        >
          CS
        </div>
        <div>
          <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight' style={{ color: palette.fg }}>Chad Simpson</h1>
          <p className='text-base mt-1' style={{ color: palette.mutedFg }}>Editor, {cfg.brand}</p>
        </div>
      </div>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>About</h2>
        <p>{cfg.bioBlurb}</p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>Areas of focus</h2>
        <ul className='space-y-2 list-disc pl-6'>
          <li>California solar installer market and CSLB licensing</li>
          <li>NEM 3 net metering and post-2024 California solar economics</li>
          <li>Green-energy gear: portable power stations, e-bikes, mini splits, generators, smart thermostats, heat pump water heaters</li>
          <li>Home security cameras, video doorbells, smart locks; privacy posture and warrant policies</li>
          <li>At-home biohacking devices: red light, cold plunge, infrared sauna, PEMF, vibration plates — anchored in peer-reviewed research</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>How I work</h2>
        <p className='mb-3'>
          Most reviews on {cfg.brand} are research-led: I read primary sources (license records, court filings, CVE databases, peer-reviewed literature, manufacturer specs) and aggregated owner reports, then synthesize what matters for the buyer. When I have personally owned or installed a product, I say so on the page.
        </p>
        <p>
          Every review carries a "Last reviewed" date stamp. I refresh installer reviews every 90 days, product reviews every 60–90 days depending on category, and health-claim pages every 180 days against current literature.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-3' style={{ color: palette.fg }}>What I won&apos;t do</h2>
        <ul className='space-y-2 list-disc pl-6'>
          <li>Accept payment for placement, sponsored reviews, or rankings</li>
          <li>Recommend a product I would not own myself in the buyer&apos;s situation</li>
          <li>State a health claim without naming the evidence tier and citing a PMID or DOI</li>
          <li>Quote a price without a source URL</li>
          <li>Hide affiliate relationships — they&apos;re disclosed at the top of every relevant page and on our affiliate-disclosure page</li>
        </ul>
      </section>

      <section className='rounded-xl border p-5' style={{ borderColor: palette.cardBorder, backgroundColor: palette.cardBg }}>
        <h2 className='text-xl font-bold mb-3' style={{ color: palette.fg }}>Get in touch</h2>
        <p className='mb-3'>If you spot an error, want to flag a story, or want to get in touch with a question, please use the contact form. I read everything, even when I can&apos;t respond to all of it.</p>
        <div className='flex flex-wrap gap-3 text-sm'>
          <Link href='/contact' className='inline-flex items-center gap-1 underline font-semibold' style={{ color: palette.accent }}>
            <Mail className='h-4 w-4' aria-hidden='true' />
            Contact form
          </Link>
          <Link href='/methodology' className='inline-flex items-center gap-1 underline font-semibold' style={{ color: palette.accent }}>
            <Microscope className='h-4 w-4' aria-hidden='true' />
            Our methodology
          </Link>
          <Link href='/about' className='inline-flex items-center gap-1 underline font-semibold' style={{ color: palette.accent }}>
            <BookOpen className='h-4 w-4' aria-hidden='true' />
            About {cfg.brand}
          </Link>
        </div>
      </section>
    </div>
  );
}

function PageShell({ palette, children, cfg }: { palette: Palette; cfg: DomainConfig; children: React.ReactNode }) {
  return (
    <main className='py-16' style={{ backgroundColor: palette.bg }}>
      <PersonJsonLd cfg={cfg} />
      <div className='container mx-auto px-4'>
        <article className='max-w-3xl mx-auto'>
          <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: palette.mutedFg }}>
            <Link href='/' style={{ color: palette.muted }}>Home</Link>
            <ChevronRight className='h-3 w-3' />
            <span style={{ color: palette.fg }}>Author / Chad Simpson</span>
          </nav>
          {children}
        </article>
      </div>
    </main>
  );
}

function ShgAuthor() {
  const cfg = CONFIGS.shg;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#f59e0b', bg: '#0a0f1c', cardBg: '#0f1729', cardBorder: '#1f2940' };
  return <SHGLayout><SHGHeader /><PageShell palette={palette} cfg={cfg}><AuthorBody cfg={cfg} palette={palette} /></PageShell><SHGFooter /></SHGLayout>;
}
function GrhAuthor() {
  const cfg = CONFIGS.grh;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', bg: 'hsl(150, 20%, 5%)', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' };
  return <ReviewLayout><ReviewHeader /><PageShell palette={palette} cfg={cfg}><AuthorBody cfg={cfg} palette={palette} /></PageShell><ReviewFooter /></ReviewLayout>;
}
function AhbAuthor() {
  const cfg = CONFIGS.ahb;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#ec4899', bg: '#0c0a18', cardBg: '#15102a', cardBorder: '#251a44' };
  return <AHBLayout><AHBHeader /><PageShell palette={palette} cfg={cfg}><AuthorBody cfg={cfg} palette={palette} /></PageShell><AHBFooter /></AHBLayout>;
}
function CrrAuthor() {
  const cfg = CONFIGS.crr;
  const palette: Palette = { fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', bg: 'hsl(var(--background))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' };
  return <PublicLayout><CRRHeader /><PageShell palette={palette} cfg={cfg}><AuthorBody cfg={cfg} palette={palette} /></PageShell><CRRFooter /></PublicLayout>;
}

export default async function AuthorPage() {
  const domain = await getDomain();
  if (domain === 'shg') return <ShgAuthor />;
  if (domain === 'grh') return <GrhAuthor />;
  if (domain === 'ahb') return <AhbAuthor />;
  return <CrrAuthor />;
}
