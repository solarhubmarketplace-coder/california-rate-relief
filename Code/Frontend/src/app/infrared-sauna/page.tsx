import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'Infrared Sauna Guide 2026: Full Saunas, Blankets, Research',
  description: "Infrared sauna research, cardiovascular benefits, portable blankets vs full saunas. Sunlighten, Clearlight, HigherDOSE, and the honest evidence.",
  alternates: { canonical: 'https://athomebiohacking.com/infrared-sauna' },
  openGraph: { title: 'Infrared Sauna Guide 2026: Full Saunas, Blankets, Research', description: "Infrared sauna research, cardiovascular benefits, portable blankets vs full saunas. Sunlighten, Clearlight, HigherDOSE, and the honest evidence.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
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
              
              <span style={{ color: '#f0fdf4' }}>Infrared Sauna</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Category Hub</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>Infrared Sauna Guide 2026: Full Saunas, Blankets, Research</h1>
            
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: '#251a44', accent: '#ec4899' }} />
</header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>Infrared sauna has strong cardiovascular evidence from Finnish longitudinal research (Laukkanen et al.) and emerging data on vascular function (Hachem et al., 2025). Our honest guide — full saunas, portable blankets, and when each fits.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Start Here</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/infrared-sauna/best-sauna-blanket' className='underline' style={{ color: '#34d399' }}>Best sauna blankets — HigherDOSE, MiHigh compared</Link></li>
                <li><Link href='/infrared-sauna/best-infrared-sauna' className='underline' style={{ color: '#34d399' }}>Best full-size infrared saunas</Link></li>
              </ul>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Evidence Quality by Claim</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f0fdf4' }}>Cardiovascular benefits:</strong> Strong (long-term Finnish cohort studies)</li>
                <li><strong style={{ color: '#f0fdf4' }}>Detoxification claims:</strong> Weak — limited high-quality evidence</li>
                <li><strong style={{ color: '#f0fdf4' }}>Portable blanket-specific research:</strong> Limited — most data extrapolates from full saunas</li>
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
