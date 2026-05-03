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

type Domain = 'crr' | 'grh' | 'shg' | 'ahb' | 'glp1';

async function getDomain(): Promise<Domain> {
  const hdrs = await headers();
  const host = (hdrs.get('host') || '').toLowerCase();
  if (host.includes('greenreviewshub')) return 'grh';
  if (host.includes('securehomegear')) return 'shg';
  if (host.includes('athomebiohacking')) return 'ahb';
  if (host.includes('glp1comparehub')) return 'glp1';
  return 'crr';
}

const META = {
  crr: { name: 'California Rate Relief', canonical: 'https://ratereliefca.com/affiliate-disclosure' },
  grh: { name: 'Green Reviews Hub', canonical: 'https://greenreviewshub.com/affiliate-disclosure' },
  shg: { name: 'SecureHomeGear', canonical: 'https://securehomegear.com/affiliate-disclosure' },
  ahb: { name: 'At Home Biohacking', canonical: 'https://athomebiohacking.com/affiliate-disclosure' },
  glp1: { name: 'GLP1CompareHub', canonical: 'https://glp1comparehub.com/affiliate-disclosure' },
};

export async function generateMetadata(): Promise<Metadata> {
  const d = await getDomain();
  return {
    title: `Affiliate Disclosure — ${META[d].name}`,
    description: `How ${META[d].name} earns money, how affiliate relationships work, and why they do not influence our recommendations.`,
    alternates: { canonical: META[d].canonical },
  };
}

function CommonContent({ name, domain }: { name: string; domain: Domain }) {
  const isInstaller = domain === 'crr';
  return (
    <>
      <h2 className='text-2xl font-bold mb-3'>How {name} Earns Money</h2>
      {isInstaller ? (
        <p>{name} earns a referral fee when a homeowner who uses our 3-quote form signs a contract with one of the California solar installers in our network. We do not earn money from displaying ads, selling personal data, or charging homeowners. The 3-quote service is free to the homeowner.</p>
      ) : (
        <p>{name} is a participant in affiliate programs from major retailers and direct-from-manufacturer affiliate programs. When you click an affiliate link on our site and complete a purchase, we may earn a referral commission at no extra cost to you.</p>
      )}

      <h2 className='text-2xl font-bold mt-8 mb-3'>What That Does NOT Mean</h2>
      <ul className='list-disc pl-6 space-y-2'>
        <li>Brands do not pay us for positive coverage.</li>
        <li>Brands do not preview, influence, or veto our editorial content.</li>
        <li>Affiliate commission rates do not affect product rankings or installer rankings.</li>
        <li>We do not accept &ldquo;sponsored&rdquo; reviews or pay-to-play editorial placements.</li>
      </ul>

      <h2 className='text-2xl font-bold mt-8 mb-3'>How Rankings Are Determined</h2>
      <p>Editorial rankings are based on verifiable factors: published specifications, independent customer review data (BBB, Trustpilot, retailer aggregate reviews, Reddit, specialized review sites), warranty terms, corporate stability and licensing, and real-world fit for specific use cases. {isInstaller && 'For California solar installers we also verify CSLB license status, bond, and worker comp.'}</p>

      <h2 className='text-2xl font-bold mt-8 mb-3'>FTC Compliance</h2>
      <p>This site complies with FTC 16 CFR Part 255 (Guides Concerning Endorsements and Testimonials in Advertising). All material connections — including affiliate relationships — are disclosed on every page that contains affiliate links. Disclosure is also restated in this page.</p>

      <h2 className='text-2xl font-bold mt-8 mb-3'>Programs We Participate In</h2>
      <p>Our affiliate participation includes networks such as Impact, AWIN, CJ Affiliate, ShareASale, Rakuten Advertising, and Amazon Associates, plus direct partnerships with select brands. Specific brand and program participation varies by product category and changes over time.</p>

      <h2 className='text-2xl font-bold mt-8 mb-3'>Questions</h2>
      <p>Email us through the <Link href='/contact' className='underline'>contact page</Link>. We respond to disclosure questions within one business day.</p>
    </>
  );
}

export default async function AffiliateDisclosurePage() {
  const d = await getDomain();
  const cfg = META[d];

  if (d === 'shg') {
    return (
      <SHGLayout>
        <SHGHeader />
        <main className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
          <div className='container mx-auto px-4'>
            <article className='max-w-3xl mx-auto'>
              <nav className='mb-8 text-sm flex items-center gap-2' style={{ color: '#71717a' }}>
                <Link href='/' style={{ color: '#d4d4d8' }}>Home</Link>
                <ChevronRight className='h-3 w-3' />
                <span style={{ color: '#f5f5f5' }}>Affiliate Disclosure</span>
              </nav>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>Affiliate Disclosure</h1>
              <p className='text-lg mb-8' style={{ color: '#d4d4d8' }}>How {cfg.name} earns money and stays editorially independent.</p>
              <div style={{ color: '#d4d4d8' }} className='leading-relaxed [&_h2]:text-foreground [&_h2]:!text-zinc-100 [&_a]:!text-amber-500'>
                <CommonContent name={cfg.name} domain={d} />
              </div>
            </article>
          </div>
        </main>
        <SHGFooter />
      </SHGLayout>
    );
  }

  if (d === 'glp1') {
    return (
      <GLP1TrustPage title='Affiliate Disclosure'>
        <CommonContent name={cfg.name} domain={d} />
      </GLP1TrustPage>
    );
  }

  if (d === 'ahb') {
    return (
      <AHBLayout>
        <AHBHeader />
        <main className='py-16' style={{ backgroundColor: '#0a1a14' }}>
          <div className='container mx-auto px-4'>
            <article className='max-w-3xl mx-auto'>
              <nav className='mb-8 text-sm flex items-center gap-2' style={{ color: '#6ee7b7' }}>
                <Link href='/' style={{ color: '#a7f3d0' }}>Home</Link>
                <ChevronRight className='h-3 w-3' />
                <span style={{ color: '#f0fdf4' }}>Affiliate Disclosure</span>
              </nav>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f0fdf4' }}>Affiliate Disclosure</h1>
              <p className='text-lg mb-8' style={{ color: '#a7f3d0' }}>How {cfg.name} earns money and stays editorially independent.</p>
              <div style={{ color: '#a7f3d0' }} className='leading-relaxed [&_h2]:!text-emerald-50 [&_a]:!text-emerald-400'>
                <CommonContent name={cfg.name} domain={d} />
              </div>
            </article>
          </div>
        </main>
        <AHBFooter />
      </AHBLayout>
    );
  }

  if (d === 'grh') {
    return (
      <ReviewLayout>
        <ReviewHeader />
        <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
          <div className='container mx-auto px-4'>
            <article className='max-w-3xl mx-auto'>
              <nav className='mb-8 text-sm flex items-center gap-2' style={{ color: '#71717a' }}>
                <Link href='/reviews' style={{ color: '#d4d4d8' }}>Reviews</Link>
                <ChevronRight className='h-3 w-3' />
                <span style={{ color: '#f5f5f5' }}>Affiliate Disclosure</span>
              </nav>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>Affiliate Disclosure</h1>
              <p className='text-lg mb-8' style={{ color: '#d4d4d8' }}>How {cfg.name} earns money and stays editorially independent.</p>
              <div style={{ color: '#d4d4d8' }} className='leading-relaxed [&_h2]:!text-zinc-100 [&_a]:!text-emerald-500'>
                <CommonContent name={cfg.name} domain={d} />
              </div>
            </article>
          </div>
        </main>
        <ReviewFooter />
      </ReviewLayout>
    );
  }

  return (
    <PublicLayout>
      <CRRHeader />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2'>
              <Link href='/' className='hover:text-primary'>Home</Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground'>Affiliate Disclosure</span>
            </nav>
            <h1 className='text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight'>Affiliate Disclosure</h1>
            <p className='text-lg text-muted-foreground mb-8'>How {cfg.name} earns money and stays editorially independent.</p>
            <div className='text-foreground/80 leading-relaxed [&_h2]:!text-foreground [&_a]:!text-primary'>
              <CommonContent name={cfg.name} domain={d} />
            </div>
          </article>
        </div>
      </main>
      <CRRFooter />
    </PublicLayout>
  );
}
