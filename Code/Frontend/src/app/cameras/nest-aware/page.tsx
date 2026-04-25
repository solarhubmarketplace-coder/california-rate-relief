import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'Nest Aware Explained 2026: Plans, Pricing, Features, Worth It?',
  description: "Nest Aware is Google's subscription for Nest cameras and doorbells. Full 2026 breakdown — plans, what you get, what works without it, and whether to subscribe.",
  alternates: { canonical: 'https://securehomegear.com/cameras/nest-aware' },
  openGraph: { title: 'Nest Aware Explained 2026', description: '2026 breakdown of Google Nest Aware subscription.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Nest Aware Explained 2026: Plans, Pricing, Features, Worth It?',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/nest-aware' },
};

export default function NestAware() {
  return (
    <SHGLayout>
      <SHGHeader />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: '#71717a' }}>
              <Link href='/' style={{ color: '#d4d4d8' }}>Home</Link><ChevronRight className='h-3 w-3' />
              <Link href='/cameras' style={{ color: '#d4d4d8' }}>Cameras</Link><ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f5f5f5' }}>Nest Aware</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Subscription Breakdown</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Nest Aware Explained 2026: Plans, Pricing, Features, Worth It?</h1>
            
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: '#1f2940', accent: '#f59e0b' }} />
</header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Nest Aware is Google&apos;s subscription service for Nest cameras and doorbells — event recording history, intelligent alerts, familiar face detection, and emergency calling. It&apos;s not required to use Nest cameras, but most of the intelligent features live behind it. Here&apos;s the 2026 breakdown of what you get, what it costs, and whether it&apos;s worth it.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Nest Aware Plans (2026)</h2>
              <ul className='space-y-3 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Nest Aware</strong> — ~$8/month or $80/year. 30-day event video history. Works across all your Nest cameras on one Google Home account.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Nest Aware Plus</strong> — ~$15/month or $150/year. 60-day event video history PLUS 10 days of 24/7 continuous video history for wired cameras. Same multi-camera coverage.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What Nest Aware Includes</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Event video history</strong> — 30 or 60 days of motion-triggered clips in cloud</li>
                <li><strong style={{ color: '#f5f5f5' }}>24/7 continuous recording</strong> (Plus tier only) — 10-day rolling window for wired cameras</li>
                <li><strong style={{ color: '#f5f5f5' }}>Familiar face detection</strong> — Nest learns household faces, separates from strangers</li>
                <li><strong style={{ color: '#f5f5f5' }}>Activity zones</strong> — Define specific regions for motion detection</li>
                <li><strong style={{ color: '#f5f5f5' }}>Intelligent alerts</strong> — Person, package, vehicle, animal classification</li>
                <li><strong style={{ color: '#f5f5f5' }}>Emergency calling</strong> — Via Google Nest Hub Max in-app</li>
                <li><strong style={{ color: '#f5f5f5' }}>Sound detection</strong> — Glass break, smoke/CO alarm detection</li>
                <li><strong style={{ color: '#f5f5f5' }}>Free Google One storage benefits</strong> (some tiers)</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What Works Without Nest Aware</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Live view from the Google Home app</li>
                <li>Motion alerts to your phone</li>
                <li>3 hours of event video history (short, but real)</li>
                <li>Two-way talk</li>
                <li>Basic person detection</li>
                <li>Local 1-hour emergency storage (battery doorbells only)</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>How It Compares to Competitors</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Ring Protect Basic</strong> ($4/mo single camera) is cheaper per-camera but requires multiple subscriptions for multi-camera homes</li>
                <li><strong style={{ color: '#f5f5f5' }}>Arlo Secure</strong> ($8-$15/mo) is comparable, with better multi-camera AI detection</li>
                <li><strong style={{ color: '#f5f5f5' }}>Blink Plus</strong> ($10/mo) covers unlimited Blink cameras but with less sophisticated AI</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Is Nest Aware Worth It?</h2>
              <p>
                <strong style={{ color: '#f5f5f5' }}>Probably yes</strong> if you have 2+ Nest cameras and use Google Home daily. Familiar face detection and 30-day history are genuinely useful features. <strong style={{ color: '#f5f5f5' }}>Probably not</strong> if you only have one camera and rarely review footage — 3 hours of free history covers basic incidents. If you&apos;re sensitive to recurring costs, consider <Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>Eufy</Link> or <Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>Reolink</Link> — both offer comparable features without monthly fees.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/google-nest' className='underline' style={{ color: '#f59e0b' }}>Full Google Nest brand review</Link></li>
                <li><Link href='/cameras/nest-doorbell' className='underline' style={{ color: '#f59e0b' }}>Nest Doorbell review</Link></li>
                <li><Link href='/alternatives/google-nest' className='underline' style={{ color: '#f59e0b' }}>Google Nest alternatives</Link></li>
                <li><Link href='/cameras/ring-protect-plan' className='underline' style={{ color: '#f59e0b' }}>Ring Protect comparison</Link></li>
              </ul>
            </div>

            <div className='mt-10'><Link href='/cameras' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#f59e0b' }}><ArrowLeft className='h-4 w-4' />Back to Camera Reviews</Link></div>
          </article>
        </div>
      </main>
      <SHGFooter />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="shg" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#f59e0b', cardBg: '#0f1729', cardBorder: '#1f2940' }} />
      </div>

    </SHGLayout>
  );
}
