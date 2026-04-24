import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact — At Home Biohacking',
  description: "Contact At Home Biohacking — press inquiries, feedback, partnership questions.",
  alternates: { canonical: 'https://athomebiohacking.com/learn/contact' },
  openGraph: { title: 'Contact — At Home Biohacking', description: "Contact At Home Biohacking — press inquiries, feedback, partnership questions.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
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
              <span style={{ color: '#f0fdf4' }}>Contact</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Company</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>Contact — At Home Biohacking</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>Questions, feedback, press inquiries, or research corrections:</p>
              <p className='p-4 rounded-lg border' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}>
                <strong style={{ color: '#f0fdf4' }}>Email:</strong> hello@athomebiohacking.com
              </p>
              <p>We aim to reply within 2 business days. For research corrections or citation updates, please include the specific claim, page URL, and your proposed correction with a peer-reviewed source.</p>
            </div>

            <div className='mt-10'><Link href='/' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#34d399' }}><ArrowLeft className='h-4 w-4' />Home</Link></div>
          </article>
        </div>
      </main>
      <AHBFooter />
    </AHBLayout>
  );
}
