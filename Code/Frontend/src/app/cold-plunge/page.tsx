import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title: 'Cold Plunge Guide 2026: Tubs, Benefits, and Research',
  description: "Research-backed guide to cold plunges and cold water immersion. Top tubs (Plunge, Sun Home, Nordic Wave) and the peer-reviewed benefits.",
  alternates: { canonical: 'https://athomebiohacking.com/cold-plunge' },
  openGraph: { title: 'Cold Plunge Guide 2026: Tubs, Benefits, and Research', description: "Research-backed guide to cold plunges and cold water immersion. Top tubs (Plunge, Sun Home, Nordic Wave) and the peer-reviewed benefits.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
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
              
              <span style={{ color: '#f0fdf4' }}>Cold Plunge</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Category Hub</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>Cold Plunge Guide 2026: Tubs, Benefits, and Research</h1>
            
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: '#251a44', accent: '#ec4899' }} />
</header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>Cold plunge and cold water immersion deliver some of the most research-backed biohacking benefits: brown adipose tissue activation, acute stress reduction, improved metabolic health. Here&apos;s the complete guide to getting started at home.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Start Here</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cold-plunge/benefits' className='underline' style={{ color: '#34d399' }}>Cold plunge benefits — what 2020-2026 research shows</Link></li>
                <li><Link href='/cold-plunge/benefits-of-ice-bath' className='underline' style={{ color: '#34d399' }}>Ice bath benefits — brown fat, metabolism, recovery</Link></li>
              </ul>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Top Cold Plunge Tubs</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f0fdf4' }}>Plunge</strong> — Premium all-in-one tub with chiller. $4,000-$6,000. Market leader.</li>
                <li><strong style={{ color: '#f0fdf4' }}>Sun Home Saunas Cold Plunge</strong> — Mid-premium. $3,000-$5,000. Strong warranty.</li>
                <li><strong style={{ color: '#f0fdf4' }}>Nordic Wave</strong> — Chest-style budget pick. $1,500-$2,500.</li>
                <li><strong style={{ color: '#f0fdf4' }}>DIY chest freezer</strong> — $500-$800. Research-backed protocols apply regardless of vessel.</li>
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

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="ahb" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#ec4899', cardBg: '#15102a', cardBorder: '#251a44' }} /></div>

    </AHBLayout>
  );
}
