import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { ChevronRight, Mail } from 'lucide-react';
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

const DOMAIN_CONTACT = {
  crr: { name: 'California Rate Relief', email: 'info@ratereliefca.com', canonical: 'https://ratereliefca.com/contact' },
  grh: { name: 'Green Reviews Hub', email: 'editorial@greenreviewshub.com', canonical: 'https://greenreviewshub.com/contact' },
  shg: { name: 'SecureHomeGear', email: 'editorial@securehomegear.com', canonical: 'https://securehomegear.com/contact' },
  ahb: { name: 'At Home Biohacking', email: 'editorial@athomebiohacking.com', canonical: 'https://athomebiohacking.com/contact' },
  glp1: { name: 'GLP1CompareHub', canonical: 'https://glp1comparehub.com/contact' },
};

export async function generateMetadata(): Promise<Metadata> {
  const d = await getDomain();
  return {
    title: `Contact ${DOMAIN_CONTACT[d].name}`,
    description: `Get in touch with ${DOMAIN_CONTACT[d].name} for corrections, partnerships, and editorial questions.`,
    alternates: { canonical: DOMAIN_CONTACT[d].canonical },
  };
}

export default async function ContactPage() {
  const d = await getDomain();
  const cfg = DOMAIN_CONTACT[d];

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
                <span style={{ color: '#f5f5f5' }}>Contact</span>
              </nav>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>Contact {cfg.name}</h1>
              <p className='text-lg mb-8' style={{ color: '#d4d4d8' }}>How to reach us. Typical response time is one business day.</p>
              <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
                <section>
                  <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Editorial</h2>
                  <p>Email <a href={`mailto:${cfg.email}`} className='underline' style={{ color: '#f59e0b' }}>{cfg.email}</a> for corrections, fact checks, and editorial feedback. Include the page URL and the specific issue.</p>
                </section>
                <section>
                  <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Brands and Partnerships</h2>
                  <p>We don&apos;t accept paid placement or sponsored reviews. Brands interested in being considered for editorial coverage may email the same address.</p>
                </section>
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
      <GLP1TrustPage title='Contact'>
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
                <span style={{ color: '#f0fdf4' }}>Contact</span>
              </nav>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f0fdf4' }}>Contact {cfg.name}</h1>
              <p className='text-lg mb-8' style={{ color: '#a7f3d0' }}>How to reach us. Typical response time is one business day.</p>
              <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
                <section>
                  <h2 className='text-2xl font-bold mb-3' style={{ color: '#f0fdf4' }}>Editorial and Citation Corrections</h2>
                  <p>Email <a href={`mailto:${cfg.email}`} className='underline' style={{ color: '#34d399' }}>{cfg.email}</a>. We take research-citation corrections seriously. If a study we&apos;ve linked has been retracted or superseded, or if we&apos;ve misrepresented its findings, let us know and we&apos;ll log the correction on the page.</p>
                </section>
                <section>
                  <h2 className='text-2xl font-bold mb-3' style={{ color: '#f0fdf4' }}>Brands and Practitioners</h2>
                  <p>We don&apos;t accept paid placement. Brands and clinical practitioners interested in editorial coverage may email the same address.</p>
                </section>
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
                <span style={{ color: '#f5f5f5' }}>Contact</span>
              </nav>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>Contact {cfg.name}</h1>
              <p className='text-lg mb-8' style={{ color: '#d4d4d8' }}>How to reach us. Typical response time is one business day.</p>
              <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
                <section>
                  <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Editorial</h2>
                  <p>Email <a href={`mailto:${cfg.email}`} className='underline' style={{ color: '#10b981' }}>{cfg.email}</a> for corrections, fact checks, and editorial feedback.</p>
                </section>
                <section>
                  <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Brands and Partnerships</h2>
                  <p>We don&apos;t accept paid placement or sponsored reviews. Coverage decisions are editorial.</p>
                </section>
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
              <span className='text-foreground'>Contact</span>
            </nav>
            <h1 className='text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight'>Contact {cfg.name}</h1>
            <p className='text-lg text-muted-foreground mb-8'>How to reach us, and what to expect for response time.</p>
            <div className='prose prose-slate max-w-none space-y-6 text-foreground/80'>
              <h2 className='text-2xl font-bold text-foreground'>General Inquiries</h2>
              <p>Email <a href={`mailto:${cfg.email}`} className='text-primary underline'>{cfg.email}</a>. Typical response time is one business day. For solar quote requests, fill out the 60-second form on our <Link href='/' className='text-primary underline'>homepage</Link> and we&apos;ll route you to up to three vetted California installers.</p>
              <h2 className='text-2xl font-bold text-foreground'>Corrections and Editorial Feedback</h2>
              <p>If you spot a factual error in any of our articles or installer reviews, email the page URL plus the correction. We log corrections at the bottom of the corrected page.</p>
              <h2 className='text-2xl font-bold text-foreground'>Installer and Vendor Inquiries</h2>
              <p>If you operate a California solar installation business and want to be considered for our installer network or editorial reviews, email <a href={`mailto:${cfg.email}`} className='text-primary underline'>{cfg.email}</a> with your CSLB license number, primary California service area, and a recent customer reference list. We do not accept paid placements.</p>
              <h2 className='text-2xl font-bold text-foreground'>Press and Partnerships</h2>
              <p>Same address. Please include &ldquo;Press&rdquo; or &ldquo;Partnership&rdquo; in the subject line.</p>
            </div>
            <div className='mt-12 p-5 rounded-lg border border-border bg-card flex items-start gap-3'>
              <Mail className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
              <div>
                <div className='font-bold text-foreground'>Direct email</div>
                <a href={`mailto:${cfg.email}`} className='text-primary underline'>{cfg.email}</a>
              </div>
            </div>
          </article>
        </div>
      </main>
      <CRRFooter />
    </PublicLayout>
  );
}
