import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — At Home Biohacking',
  description: "About At Home Biohacking — our mission, editorial standards, and how we cite research.",
  alternates: { canonical: 'https://athomebiohacking.com/learn/about' },
  openGraph: { title: 'About — At Home Biohacking', description: "About At Home Biohacking — our mission, editorial standards, and how we cite research.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
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
              <span style={{ color: '#f0fdf4' }}>About</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Company</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>About — At Home Biohacking</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>At Home Biohacking is an independent review site covering home wellness and biohacking gear: cold plunges, infrared saunas, PEMF mats, red light therapy panels, and vibration plates.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Our Mission</h2>
              <p>Cut through the hype in a niche full of it. Every health claim on this site links to peer-reviewed research. We flag weak evidence and contested claims honestly. We are not your doctor — content is informational, not medical advice.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Editorial Standards</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Every health claim cites peer-reviewed research (PubMed/DOI links)</li>
                <li>We prioritize systematic reviews, meta-analyses, and RCTs</li>
                <li>Weak or contested evidence gets flagged explicitly</li>
                <li>Affiliate relationships are disclosed in every review</li>
                <li>Commission amounts do not influence rankings — evidence and performance do</li>
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
