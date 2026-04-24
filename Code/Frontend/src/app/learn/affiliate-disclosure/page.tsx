import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — At Home Biohacking',
  description: "Affiliate disclosure for At Home Biohacking. We earn commission on qualifying purchases. This does not change our reviews.",
  alternates: { canonical: 'https://athomebiohacking.com/learn/affiliate-disclosure' },
  openGraph: { title: 'Affiliate Disclosure — At Home Biohacking', description: "Affiliate disclosure for At Home Biohacking. We earn commission on qualifying purchases. This does not change our reviews.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
};

export default function Page() {
  return (
    <AHBLayout>
      <AHBHeader />
      <main className='py-16' style={{ backgroundColor: '#0a1a14' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: '#6ee7b7' }}>
              <Link href='/' style={{ color: '#a7f3d0' }}>Home</Link><ChevronRight className='h-3 w-3' />
              <Link href="/learn" style={{ color: "#a7f3d0" }}>Learn</Link><ChevronRight className="h-3 w-3" />
              <span style={{ color: '#f0fdf4' }}>Affiliate Disclosure</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Legal</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>Affiliate Disclosure — At Home Biohacking</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>At Home Biohacking (athomebiohacking.com) participates in affiliate programs and earns commissions on qualifying purchases made through links on this site.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Programs We Participate In</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Amazon Associates Program</li>
                <li>HealthyLine direct affiliate program</li>
                <li>HigherDOSE (via AWIN)</li>
                <li>Plunge affiliate program</li>
                <li>Joovv direct affiliate</li>
                <li>Mito Red Light direct affiliate</li>
                <li>LifePro (via FlexOffers)</li>
                <li>Impact.com programs for various brands</li>
              </ul>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>How It Works</h2>
              <p>When you click an affiliate link and make a purchase, we may earn a commission. This does not increase the price you pay — it comes from the brand&apos;s marketing budget.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Editorial Independence</h2>
              <p>Affiliate relationships do not influence our editorial decisions. Recommendations are based on research quality, product performance, and honest evaluation. Some brands we recommend do not have affiliate programs — we recommend them anyway.</p>
              <p>FTC-required disclosure per 16 CFR Part 255.</p>
            </div>

            <div className='mt-10'><Link href='/' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#34d399' }}><ArrowLeft className='h-4 w-4' />Home</Link></div>
          </article>
        </div>
      </main>
      <AHBFooter />
    </AHBLayout>
  );
}
