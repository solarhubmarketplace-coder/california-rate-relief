import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google Nest Doorbell Review 2026: The Google Ecosystem Play',
  description: "Google Nest Doorbell integrates tightly with Google Home and Nest Aware. Honest 2026 review of the wired and battery models, subscription trade-offs, and alternatives.",
  alternates: { canonical: 'https://securehomegear.com/cameras/nest-doorbell' },
  openGraph: { title: 'Google Nest Doorbell Review 2026', description: '2026 review of Google Nest video doorbell.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Google Nest Doorbell Review 2026: The Google Ecosystem Play',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/nest-doorbell' },
};

export default function NestDoorbell() {
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
              <span style={{ color: '#f5f5f5' }}>Nest Doorbell</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Product Review</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Google Nest Doorbell Review 2026: The Google Ecosystem Play</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Google&apos;s Nest Doorbell is the pick for households deep in Google Home / Nest Aware. Wired or battery, premium hardware build, excellent image quality, and native Google Assistant integration. Like Ring, full features (extended event history, smart alerts, familiar face detection) require a Nest Aware subscription. Here&apos;s the honest 2026 review.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Models Available</h2>
              <ul className='space-y-3 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Nest Doorbell (wired, 2nd gen)</strong> — Existing doorbell wiring, continuous power, ~$180. Best for homes with working doorbell wiring.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Nest Doorbell (battery)</strong> — Rechargeable, no wiring needed, ~$180-$200. Can also be hardwired for continuous power.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Strengths</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Google Home integration.</strong> Native. Deep. If you have Nest Hub, Google speakers, or Pixel devices, this just works.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Image quality.</strong> HDR, clear night vision, wide field of view — Google hardware engineering is strong.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Familiar face detection.</strong> With Nest Aware, the doorbell can identify household members vs strangers — rare feature.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Local fallback.</strong> Nest Doorbell stores ~1 hour locally if WiFi drops, then syncs.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Watch-outs</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Nest Aware required for full features.</strong> $8-$15/mo. See <Link href='/cameras/nest-aware' className='underline' style={{ color: '#f59e0b' }}>full Nest Aware breakdown</Link>.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Google product discontinuation risk.</strong> Google has discontinued Nest products before (Nest Secure, original Works with Nest API). Consider this if you&apos;re buying for 5-10 year horizon.</li>
                <li>Battery version is heavier than Ring Battery Doorbell</li>
                <li>Limited to one chime type per household</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When Nest Doorbell Fits</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>You&apos;re deep in the Google / Nest ecosystem already</li>
                <li>You value native Google Assistant doorbell announcements</li>
                <li>Familiar face detection is a compelling feature for you</li>
                <li>You&apos;re OK paying Nest Aware for full features</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When to Skip Nest Doorbell</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Subscription fatigue → <Link href='/cameras/eufy-doorbell' className='underline' style={{ color: '#f59e0b' }}>Eufy Video Doorbell</Link></li>
                <li>You want Amazon ecosystem instead → <Link href='/alternatives/ring' className='underline' style={{ color: '#f59e0b' }}>Ring</Link></li>
                <li>You want a premium independent brand → <Link href='/cameras/canary' className='underline' style={{ color: '#f59e0b' }}>Canary</Link></li>
                <li>Google&apos;s discontinuation history worries you</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/google-nest' className='underline' style={{ color: '#f59e0b' }}>Full Google Nest brand review</Link></li>
                <li><Link href='/cameras/nest-aware' className='underline' style={{ color: '#f59e0b' }}>Nest Aware subscription breakdown</Link></li>
                <li><Link href='/cameras/doorbell-camera' className='underline' style={{ color: '#f59e0b' }}>Doorbell camera complete guide</Link></li>
                <li><Link href='/alternatives/google-nest' className='underline' style={{ color: '#f59e0b' }}>Google Nest alternatives</Link></li>
              </ul>
            </div>

            <div className='mt-10'><Link href='/cameras' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#f59e0b' }}><ArrowLeft className='h-4 w-4' />Back to Camera Reviews</Link></div>
          </article>
        </div>
      </main>
      <SHGFooter />
    </SHGLayout>
  );
}
