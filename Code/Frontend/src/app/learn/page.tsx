import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learn — At Home Biohacking Research & Science',
  description: "Educational content, research summaries, and the science behind biohacking modalities. Plus company info and legal pages.",
  alternates: { canonical: 'https://athomebiohacking.com/learn' },
  openGraph: { title: 'Learn — At Home Biohacking Research & Science', description: "Educational content, research summaries, and the science behind biohacking modalities. Plus company info and legal pages.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
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
              
              <span style={{ color: '#f0fdf4' }}>Learn</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Learn Hub</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>Learn — At Home Biohacking Research & Science</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>Educational content, research summaries, and the company info you need.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Company</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/learn/about' className='underline' style={{ color: '#34d399' }}>About At Home Biohacking</Link></li>
                <li><Link href='/learn/contact' className='underline' style={{ color: '#34d399' }}>Contact</Link></li>
              </ul>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Legal & Disclosures</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/learn/affiliate-disclosure' className='underline' style={{ color: '#34d399' }}>Affiliate Disclosure</Link></li>
                <li><Link href='/learn/medical-disclaimer' className='underline' style={{ color: '#34d399' }}>Medical Disclaimer</Link></li>
                <li><Link href='/learn/privacy' className='underline' style={{ color: '#34d399' }}>Privacy Policy</Link></li>
                <li><Link href='/learn/terms' className='underline' style={{ color: '#34d399' }}>Terms of Service</Link></li>
              </ul>
            </div>

            <div className='mt-10'><Link href='/' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#34d399' }}><ArrowLeft className='h-4 w-4' />Home</Link></div>
          </article>
        </div>
      </main>
      <AHBFooter />
    </AHBLayout>
  );
}
