import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Doorbell Camera Buying Guide 2026 — Honest Reviews',
  description: "The complete 2026 doorbell camera buying guide — every major brand compared on hardware, subscription model, and real-world value. Ring, Nest, Eufy, Arlo, Canary, Reolink.",
  alternates: { canonical: 'https://securehomegear.com/cameras/doorbell-camera' },
  openGraph: { title: 'Doorbell Camera Buying Guide 2026', description: 'Honest 2026 doorbell camera buying guide.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Doorbell Camera Buying Guide 2026 — Honest Reviews',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/doorbell-camera' },
};

export default function DoorbellCameraHub() {
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
              <span style={{ color: '#f5f5f5' }}>Doorbell Camera Guide</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Category Guide</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Doorbell Camera Buying Guide 2026</h1>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80&auto=format&fit=crop' alt='Video doorbell at a front door' className='w-full h-64 object-cover' loading='lazy' />
            </div>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Video doorbells have gone mainstream — tens of millions sold in the US alone — but the brand landscape has split into two camps: subscription-dependent (Ring, Nest, Blink, Arlo) and subscription-free (Eufy, Reolink, Canary). Picking the wrong one is easy; features that look free at purchase turn out to be paywalled 30 days later. Here&apos;s the plain-English 2026 buying guide.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>The Core Decision: Subscription or No Subscription?</h2>
              <p className='mb-4'>
                Before you look at hardware specs, decide where you stand on subscription fees. Every major video doorbell ships with hardware that costs $100-$300 upfront. But that&apos;s where the brands diverge sharply.
              </p>
              <p className='mb-4'>
                <strong style={{ color: '#f5f5f5' }}>Subscription-required brands</strong> (Ring, Blink, Nest, Arlo) effectively paywall basic functionality — event history beyond a few minutes, person/package/motion category detection, cloud recording, and sometimes even video-on-demand access. Hardware looks cheap; 10-year total cost is meaningfully higher because of $60-$120 per year in subscription fees.
              </p>
              <p>
                <strong style={{ color: '#f5f5f5' }}>Subscription-free brands</strong> (Eufy, Reolink, many Canary configurations) store footage locally on a hub or microSD card. One-time hardware purchase, no ongoing fee, full feature access from day one.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Brand-by-Brand Quick Take</h2>

              <div className='space-y-4'>
                <div className='p-4 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                  <h3 className='font-bold mb-1' style={{ color: '#f5f5f5' }}>Eufy</h3>
                  <p className='text-sm'>Best overall for no-subscription operation. Local storage on HomeBase, AI person detection included. Multiple doorbell form factors. See <Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>full Eufy review</Link>.</p>
                </div>
                <div className='p-4 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                  <h3 className='font-bold mb-1' style={{ color: '#f5f5f5' }}>Canary</h3>
                  <p className='text-sm'>Premium AI-driven option from an independent brand. Strong choice if AI quality and premium build matter more than lowest price. See <Link href='/cameras/canary' className='underline' style={{ color: '#f59e0b' }}>full Canary review</Link>.</p>
                </div>
                <div className='p-4 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                  <h3 className='font-bold mb-1' style={{ color: '#f5f5f5' }}>Reolink</h3>
                  <p className='text-sm'>Best if you&apos;re building a full Reolink camera system and want a matching doorbell. Local-first philosophy. See <Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>full Reolink review</Link>.</p>
                </div>
                <div className='p-4 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                  <h3 className='font-bold mb-1' style={{ color: '#f5f5f5' }}>Arlo</h3>
                  <p className='text-sm'>Premium polish, deep AI, but Arlo Secure subscription is effectively required for core features. See <Link href='/cameras/arlo-camera' className='underline' style={{ color: '#f59e0b' }}>full Arlo review</Link>.</p>
                </div>
                <div className='p-4 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                  <h3 className='font-bold mb-1' style={{ color: '#f5f5f5' }}>Ring</h3>
                  <p className='text-sm'>Huge market share, deep Alexa integration, polished app — but Ring Protect subscription paywalls event history. See <Link href='/alternatives/ring' className='underline' style={{ color: '#f59e0b' }}>Ring alternatives</Link>.</p>
                </div>
                <div className='p-4 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                  <h3 className='font-bold mb-1' style={{ color: '#f5f5f5' }}>Google Nest</h3>
                  <p className='text-sm'>Premium + Google Home integration + Nest Aware subscription required. See <Link href='/alternatives/google-nest' className='underline' style={{ color: '#f59e0b' }}>Google Nest alternatives</Link>.</p>
                </div>
                <div className='p-4 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                  <h3 className='font-bold mb-1' style={{ color: '#f5f5f5' }}>Blink</h3>
                  <p className='text-sm'>Amazon&apos;s budget tier. Cheap hardware, Blink Plus paywall for features. See <Link href='/alternatives/blink' className='underline' style={{ color: '#f59e0b' }}>Blink alternatives</Link>.</p>
                </div>
              </div>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What to Look For In a Video Doorbell</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Resolution:</strong> 2K is the current standard. 4K is overkill for most; 1080p is limiting for reading license plates or face detail at distance.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Power:</strong> Battery vs wired. Battery means easier install but recurring charging. Wired means permanent install but no battery management.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Field of view:</strong> 160°+ is ideal so you can see packages on the ground.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Storage:</strong> Local (HomeBase, microSD, NVR) or cloud-required. Our strong preference: local.</li>
                <li><strong style={{ color: '#f5f5f5' }}>AI detection:</strong> Person, package, vehicle, familiar face. Check whether these require subscription.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Night vision:</strong> Color night vision beats black-and-white; requires ambient light or floodlight.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Integrations:</strong> Alexa, Google Home, HomeKit — matters if you&apos;re in a specific ecosystem.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Our Recommendations</h2>
              <p className='mb-3'>
                <strong style={{ color: '#f5f5f5' }}>Best overall:</strong> Eufy Video Doorbell line — no subscription, AI detection, multiple form factors. Matches what most buyers want from a Ring doorbell without the recurring fee.
              </p>
              <p className='mb-3'>
                <strong style={{ color: '#f5f5f5' }}>Best for full-system buyers:</strong> Reolink Video Doorbell — best if you&apos;re installing multiple cameras and want one brand and one app.
              </p>
              <p className='mb-3'>
                <strong style={{ color: '#f5f5f5' }}>Best for subscription-free buying guide:</strong> See our dedicated <Link href='/cameras/video-doorbell-without-subscription' className='underline' style={{ color: '#f59e0b' }}>video doorbell without subscription</Link> guide.
              </p>
              <p>
                <strong style={{ color: '#f5f5f5' }}>Best premium pick:</strong> Canary — if you want premium AI from an independent brand and don&apos;t mind paying slightly more.
              </p>
            </div>

            <div className='mt-10'><Link href='/cameras' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#f59e0b' }}><ArrowLeft className='h-4 w-4' />Back to Camera Reviews</Link></div>
          </article>
        </div>
      </main>
      <SHGFooter />
    </SHGLayout>
  );
}
