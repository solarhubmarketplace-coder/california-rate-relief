import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vibration Plate Guide 2026: Bone Density, Research, Buying Guide',
  description: "Whole body vibration has moderate-to-strong evidence for bone density, especially in postmenopausal women. LifePro, Power Plate, and the 2024-2026 research.",
  alternates: { canonical: 'https://athomebiohacking.com/vibration-plate' },
  openGraph: { title: 'Vibration Plate Guide 2026: Bone Density, Research, Buying Guide', description: "Whole body vibration has moderate-to-strong evidence for bone density, especially in postmenopausal women. LifePro, Power Plate, and the 2024-2026 research.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
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
              
              <span style={{ color: '#f0fdf4' }}>Vibration Plate</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Category Hub</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>Vibration Plate Guide 2026: Bone Density, Research, Buying Guide</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>Whole body vibration (WBV) has moderate-to-strong research support for bone density and muscle strength, particularly in older adults and postmenopausal women (Lu 2025, Massini 2025, Chen 2026).</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Research-Backed Benefits</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f0fdf4' }}>Bone mineral density:</strong> Moderate-high evidence (especially lumbar spine, femoral neck)</li>
                <li><strong style={{ color: '#f0fdf4' }}>Muscle strength in elderly:</strong> Moderate evidence</li>
                <li><strong style={{ color: '#f0fdf4' }}>Lymphatic drainage claims:</strong> Weak/limited evidence — be skeptical of marketing claims</li>
              </ul>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Top Brands</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f0fdf4' }}>LifePro</strong> — Budget-friendly. Good entry point. $150-$400.</li>
                <li><strong style={{ color: '#f0fdf4' }}>Power Plate</strong> — Premium. Used in clinical research. $2,000+.</li>
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
