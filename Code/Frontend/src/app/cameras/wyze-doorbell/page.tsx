import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'Wyze Doorbell Review 2026: Cheapest Video Doorbell With Real Features',
  description: "Wyze Video Doorbell and Doorbell Pro are the cheapest name-brand video doorbells worth buying. Honest 2026 review — wired vs Pro, Cam Plus trade-offs, and alternatives.",
  alternates: { canonical: 'https://securehomegear.com/cameras/wyze-doorbell' },
  openGraph: { title: 'Wyze Doorbell Review 2026', description: '2026 review of Wyze video doorbells.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Wyze Doorbell Review 2026: Cheapest Video Doorbell With Real Features',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/wyze-doorbell' },
};

export default function WyzeDoorbell() {
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
              <span style={{ color: '#f5f5f5' }}>Wyze Doorbell</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Product Review</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Wyze Doorbell Review 2026: Cheapest Video Doorbell With Real Features</h1>
            
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: '#1f2940', accent: '#f59e0b' }} />
</header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Wyze&apos;s video doorbells are the cheapest name-brand options that actually work. The standard Wyze Video Doorbell runs ~$40 wired, and the Wyze Video Doorbell Pro adds battery-powered flexibility and better specs at ~$80. For budget-conscious buyers, there&apos;s real value here. Here&apos;s the honest 2026 review.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>The Wyze Doorbell Lineup</h2>
              <ul className='space-y-3 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Wyze Video Doorbell (wired)</strong> — Existing doorbell wiring required, 1080p, 120° field of view, motion alerts, two-way talk. ~$40.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Wyze Video Doorbell Pro</strong> — Battery-powered, 1440p (2K), color night vision, HDR, person detection with Cam Plus. ~$80.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Strengths</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Very low price — $40 wired is half of Ring Basic ($60-$100)</li>
                <li>Wyze Video Doorbell Pro&apos;s 2K resolution punches above its price</li>
                <li>Works without Cam Plus subscription (limited event history)</li>
                <li>microSD local storage option on Pro</li>
                <li>Alexa, Google Assistant integration</li>
                <li>Setup is approachable for non-technical users</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Watch-outs</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Cam Plus subscription ($3-$10/mo) pushes for full event history and AI detection</li>
                <li>Build quality reflects the price — plastic, not premium</li>
                <li>Wired version needs 16V-24V transformer (same as Ring/Nest); older homes may need upgrade</li>
                <li>The Wyze 2022 security disclosure history applies across their product line</li>
                <li>App functional but not at Ring or Arlo polish level</li>
                <li>Chime options more limited than premium brands</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When Wyze Doorbell Fits</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Budget is the #1 constraint — you want a video doorbell under $50</li>
                <li>You&apos;re replacing a broken doorbell quickly and cheaply</li>
                <li>You already have Wyze cameras (ecosystem consistency)</li>
                <li>You&apos;re OK with simpler features vs premium brands</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When to Skip Wyze Doorbell</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>You want 2K+ and no subscription → <Link href='/cameras/eufy-doorbell' className='underline' style={{ color: '#f59e0b' }}>Eufy Video Doorbell</Link> at $100-$150</li>
                <li>You&apos;re Amazon-ecosystem → <Link href='/cameras/blink-doorbell' className='underline' style={{ color: '#f59e0b' }}>Blink Video Doorbell</Link> at similar price</li>
                <li>You want premium features and app → <Link href='/cameras/arlo-doorbell' className='underline' style={{ color: '#f59e0b' }}>Arlo</Link> or <Link href='/cameras/nest-doorbell' className='underline' style={{ color: '#f59e0b' }}>Nest</Link></li>
                <li>Wyze 2022 disclosure concerns you</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Wyze Doorbell Pro vs Ring Video Doorbell</h2>
              <p>
                At similar price points ($80 Pro vs $100 Ring 4/5), Wyze gives you 2K vs Ring&apos;s 1080p. Ring gives you better app polish, deeper Alexa integration, and Ring Neighbors. Wyze gives you optional local storage and the ability to use the doorbell without subscription. Trade-offs rather than clear winners.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/wyze' className='underline' style={{ color: '#f59e0b' }}>Full Wyze brand review</Link></li>
                <li><Link href='/cameras/doorbell-camera' className='underline' style={{ color: '#f59e0b' }}>Doorbell camera complete guide</Link></li>
                <li><Link href='/cameras/video-doorbell-without-subscription' className='underline' style={{ color: '#f59e0b' }}>No-subscription video doorbells</Link></li>
                <li><Link href='/cameras/doorbell-transformer' className='underline' style={{ color: '#f59e0b' }}>Doorbell transformer guide</Link></li>
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
