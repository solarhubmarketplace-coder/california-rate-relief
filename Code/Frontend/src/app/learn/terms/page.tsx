import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — At Home Biohacking',
  description: "Terms of service for At Home Biohacking.",
  alternates: { canonical: 'https://athomebiohacking.com/learn/terms' },
  openGraph: { title: 'Terms of Service — At Home Biohacking', description: "Terms of service for At Home Biohacking.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
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
              <span style={{ color: '#f0fdf4' }}>Terms</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Legal</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>Terms of Service — At Home Biohacking</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>Last updated: April 2026</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Acceptance of Terms</h2>
              <p>By using athomebiohacking.com, you agree to these terms. If you do not agree, please do not use this website.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Content License</h2>
              <p>All original content on this site is copyrighted. You may share links to our pages freely. Reproducing our written content without attribution is not permitted.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Affiliate Disclosure</h2>
              <p>We earn commissions through affiliate links. See our <Link href='/learn/affiliate-disclosure' className='underline' style={{ color: '#34d399' }}>Affiliate Disclosure</Link>.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>No Warranty</h2>
              <p>Content is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee accuracy, completeness, or fitness for a particular purpose. Research citations are accurate at time of publication; studies and their interpretations may evolve.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Limitation of Liability</h2>
              <p>Under no circumstances will At Home Biohacking be liable for any damages arising from use of this site or products reviewed. Use of any wellness product is at your own risk. See also our <Link href='/learn/medical-disclaimer' className='underline' style={{ color: '#34d399' }}>Medical Disclaimer</Link>.</p>
            </div>

            <div className='mt-10'><Link href='/' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#34d399' }}><ArrowLeft className='h-4 w-4' />Home</Link></div>
          </article>
        </div>
      </main>
      <AHBFooter />
    </AHBLayout>
  );
}
