import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'Red Light Therapy Guide 2026: Panels, Masks, and the Research',
  description: "Red light therapy (photobiomodulation) has strong mitochondrial and skin research. Joovv, Mito Red Light, LED face masks — research-backed buying guide.",
  alternates: { canonical: 'https://athomebiohacking.com/red-light-therapy' },
  openGraph: { title: 'Red Light Therapy Guide 2026: Panels, Masks, and the Research', description: "Red light therapy (photobiomodulation) has strong mitochondrial and skin research. Joovv, Mito Red Light, LED face masks — research-backed buying guide.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
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
              
              <span style={{ color: '#f0fdf4' }}>Red Light Therapy</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Category Hub</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>Red Light Therapy Guide 2026: Panels, Masks, and the Research</h1>
            
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: '#251a44', accent: '#ec4899' }} />
</header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>Red light therapy (photobiomodulation, PBM) is one of the most mechanistically well-supported modalities — strong evidence for mitochondrial enhancement (Ponnusamy 2026), pain/skin applications (Shivappa 2025, Maghfour 2024), and perineal wound healing (Alayat 2026).</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Research-Backed Use Cases</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f0fdf4' }}>Skin health:</strong> Collagen, wound healing, acne (strong evidence)</li>
                <li><strong style={{ color: '#f0fdf4' }}>Pain management:</strong> Musculoskeletal and perineal pain</li>
                <li><strong style={{ color: '#f0fdf4' }}>Mitochondrial function:</strong> ATP production, cytochrome c oxidase</li>
                <li><strong style={{ color: '#f0fdf4' }}>Muscle recovery:</strong> Moderate evidence for post-workout</li>
              </ul>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Top Brands</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f0fdf4' }}>Joovv</strong> — Premium tier, strong published research. $600-$5,000+ depending on panel size.</li>
                <li><strong style={{ color: '#f0fdf4' }}>Mito Red Light</strong> — Mid-tier. Solid reputation, clinical-grade specs. $400-$2,000.</li>
                <li><strong style={{ color: '#f0fdf4' }}>LED face masks</strong> — Targeted skin applications. $150-$500.</li>
              </ul>
            </div>

            <div className='mt-10'><Link href='/' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#34d399' }}><ArrowLeft className='h-4 w-4' />Home</Link></div>
          </article>
        </div>
      </main>
      <AHBFooter />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="ahb" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#ec4899', cardBg: '#15102a', cardBorder: '#251a44' }} />
      </div>

    </AHBLayout>
  );
}
