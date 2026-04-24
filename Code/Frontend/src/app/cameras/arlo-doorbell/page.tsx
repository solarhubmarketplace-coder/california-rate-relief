import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Arlo Video Doorbell Review 2026: Premium Hardware, Subscription-Dependent',
  description: "Arlo's video doorbells — Wired, Essential, and Pro — offer premium build and 2K video. Honest 2026 review covering features, Arlo Secure subscription, and alternatives.",
  alternates: { canonical: 'https://securehomegear.com/cameras/arlo-doorbell' },
  openGraph: { title: 'Arlo Video Doorbell Review 2026', description: '2026 review of Arlo video doorbells.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Arlo Video Doorbell Review 2026: Premium Hardware, Subscription-Dependent',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/arlo-doorbell' },
};

export default function ArloDoorbell() {
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
              <span style={{ color: '#f5f5f5' }}>Arlo Doorbell</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Product Review</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Arlo Video Doorbell Review 2026: Premium Hardware, Subscription-Dependent</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Arlo&apos;s video doorbell lineup plays the premium-independent card — not Amazon-owned, not Google-owned, with strong AI detection and excellent image quality. The catch is Arlo Secure, the subscription that gates most of the intelligent features. Here&apos;s the honest 2026 review.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>The Arlo Doorbell Lineup</h2>
              <ul className='space-y-3 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Arlo Essential Video Doorbell Wired (2nd Gen)</strong> — Entry-level wired, 1080p or 2K, ~$100-$150</li>
                <li><strong style={{ color: '#f5f5f5' }}>Arlo Essential Video Doorbell Wire-Free</strong> — Battery-powered, ~$150-$200</li>
                <li><strong style={{ color: '#f5f5f5' }}>Arlo Video Doorbell Pro</strong> — Premium tier with HDR, enhanced night vision, ~$200-$250</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Strengths</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>App polish.</strong> Arlo&apos;s app is among the best in the category.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Premium image quality.</strong> HDR, wide field of view, good night vision.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Independent ownership.</strong> Not Amazon, not Google. Some buyers value this.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Alexa/Google/HomeKit.</strong> Broad voice ecosystem integration.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Strong AI detection.</strong> Person, package, vehicle, animal — best-in-class tagging with Arlo Secure.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Watch-outs</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Arlo Secure required for meaningful features.</strong> $8-$15/mo for AI detection and cloud recording. Without it, the doorbell is basic.</li>
                <li>Price competitive with Ring Pro and Nest — premium positioning justified but firm</li>
                <li>Battery-powered version can be demanding on recharge cycles in cold weather</li>
                <li>No local storage option — you&apos;re in the cloud</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When Arlo Doorbell Fits</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>You want premium hardware from an independent (non-Amazon, non-Google) brand</li>
                <li>You already have Arlo cameras and want ecosystem cohesion</li>
                <li>You&apos;re OK paying Arlo Secure monthly</li>
                <li>Best-in-class AI detection accuracy is important</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When to Skip Arlo Doorbell</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Subscription fees are a dealbreaker → <Link href='/cameras/eufy-doorbell' className='underline' style={{ color: '#f59e0b' }}>Eufy Doorbell</Link></li>
                <li>Amazon ecosystem is priority → <Link href='/alternatives/ring' className='underline' style={{ color: '#f59e0b' }}>Ring</Link></li>
                <li>Google ecosystem is priority → <Link href='/cameras/nest-doorbell' className='underline' style={{ color: '#f59e0b' }}>Nest Doorbell</Link></li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/arlo-camera' className='underline' style={{ color: '#f59e0b' }}>Full Arlo brand review</Link></li>
                <li><Link href='/cameras/arlo-subscription' className='underline' style={{ color: '#f59e0b' }}>Arlo Secure subscription breakdown</Link></li>
                <li><Link href='/cameras/doorbell-camera' className='underline' style={{ color: '#f59e0b' }}>Doorbell camera complete guide</Link></li>
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
