import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'PEMF Therapy Guide 2026: Mats, Benefits, and Research',
  description: "PEMF therapy has strong peer-reviewed evidence for bone healing and pain management. Research-backed guide to PEMF mats — HealthyLine, HigherDOSE, Bemer.",
  alternates: { canonical: 'https://athomebiohacking.com/pemf' },
  openGraph: { title: 'PEMF Therapy Guide 2026: Mats, Benefits, and Research', description: "PEMF therapy has strong peer-reviewed evidence for bone healing and pain management. Research-backed guide to PEMF mats — HealthyLine, HigherDOSE, Bemer.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
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
              
              <span style={{ color: '#f0fdf4' }}>PEMF</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Category Hub</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>PEMF Therapy Guide 2026: Mats, Benefits, and Research</h1>
            
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: '#251a44', accent: '#ec4899' }} />
</header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>Pulsed Electromagnetic Field (PEMF) therapy has one of the strongest research foundations in the biohacking space — particularly for bone healing (Caliogna 2021, Mayer 2024) and chronic pain management (Lara-Reyes 2026, Hackel 2025).</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Start Here</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/pemf/best-pemf-mat' className='underline' style={{ color: '#34d399' }}>Best PEMF mats compared — HealthyLine vs HigherDOSE vs Bemer</Link></li>
              </ul>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Who Benefits From PEMF</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Chronic pain (especially spinal/radicular neuropathic pain)</li>
                <li>Post-fracture recovery and bone healing</li>
                <li>Osteoporosis and low bone density</li>
                <li>General inflammation and recovery</li>
              </ul>
              <p className='text-sm p-4 rounded-lg border' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}><strong style={{ color: '#f0fdf4' }}>Important:</strong> People with implanted electronic medical devices should not use PEMF without medical clearance.</p>
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
