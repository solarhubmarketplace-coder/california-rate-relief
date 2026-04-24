import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eufy HomeBase Explained 2026: HomeBase 2, 3, S380, Which To Get',
  description: "Eufy HomeBase is the hub that makes the eufyCam no-subscription system work. HomeBase 2, 3, S380 differences — features, storage, cameras supported, upgrade paths.",
  alternates: { canonical: 'https://securehomegear.com/cameras/eufy-homebase' },
  openGraph: { title: 'Eufy HomeBase Explained 2026', description: '2026 breakdown of Eufy HomeBase versions.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Eufy HomeBase Explained 2026: HomeBase 2, 3, S380, Which To Get',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/eufy-homebase' },
};

export default function EufyHomebase() {
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
              <span style={{ color: '#f5f5f5' }}>Eufy HomeBase</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Product Guide</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Eufy HomeBase Explained 2026: HomeBase 2, 3, S380, Which To Get</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                The Eufy HomeBase is the central hub that makes the entire eufyCam system work. It&apos;s the local storage device, the signal relay between cameras and your router, and the reason Eufy can offer their no-subscription model. But there are multiple HomeBase generations, and picking the right one matters. Here&apos;s the 2026 breakdown.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What HomeBase Does</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Local video storage</strong> — Events record to internal HomeBase storage, not cloud</li>
                <li><strong style={{ color: '#f5f5f5' }}>Wireless camera connection</strong> — Dedicated radio link to your eufyCam wireless cameras</li>
                <li><strong style={{ color: '#f5f5f5' }}>Internal hub for Eufy ecosystem</strong> — Connects alarms, sensors, and other Eufy smart home products</li>
                <li><strong style={{ color: '#f5f5f5' }}>Audio alarm output</strong> — Built-in 100dB siren triggered by camera events</li>
                <li><strong style={{ color: '#f5f5f5' }}>No subscription required</strong> — Full features without monthly fee</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>HomeBase Generations</h2>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <h3 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>HomeBase 2</h3>
                <p className='mb-3'>
                  The workhorse generation shipped with most eufyCam 2 / 2C / 2 Pro bundles. 16GB internal storage (~30-60 days of events depending on use). Works with most wireless eufyCam models and compatible eufySensor devices. Still widely sold and supported.
                </p>
                <p><strong style={{ color: '#f5f5f5' }}>Best for:</strong> Starting a Eufy setup affordably. Budget is constrained. <strong style={{ color: '#f5f5f5' }}>Not for:</strong> Adding more than ~16 cameras or wanting expanded storage.</p>
              </section>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <h3 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>HomeBase 3 / S380</h3>
                <p className='mb-3'>
                  The newer generation. HDD-slot expandable storage (up to ~16TB), supports more concurrent cameras (up to 16+), enhanced AI detection running on-hub (faster than camera-side), cross-camera tracking (BionicMind features). Required for newer eufyCam 3 / eufyCam S3 Pro systems.
                </p>
                <p><strong style={{ color: '#f5f5f5' }}>Best for:</strong> Newer Eufy setups, multi-camera expansion, long-term retention. <strong style={{ color: '#f5f5f5' }}>Price premium:</strong> Meaningful but one-time cost.</p>
              </section>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Which HomeBase To Get</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Buying a kit:</strong> Take whichever HomeBase comes bundled. Usually best value.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Buying cameras individually:</strong> If budget allows, go HomeBase 3/S380 for future-proofing.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Upgrading existing setup:</strong> Worth upgrading to HomeBase 3 if you&apos;re adding newer eufyCam 3 models — the AI detection is much better on-hub.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Budget starter setup:</strong> HomeBase 2 still works great, stays at a lower price point.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Compatibility Matrix (2026)</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>eufyCam 2, 2C, 2 Pro</strong> → HomeBase 2 or HomeBase 3 (check specific compatibility per Eufy docs)</li>
                <li><strong style={{ color: '#f5f5f5' }}>eufyCam 3, 3C, S3 Pro</strong> → HomeBase 3 / S380 required for full features</li>
                <li><strong style={{ color: '#f5f5f5' }}>eufy Wired Doorbells</strong> → May or may not need HomeBase depending on model; many work HomeBase-free</li>
                <li><strong style={{ color: '#f5f5f5' }}>SoloCam series</strong> → HomeBase-free, microSD local storage</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>Full Eufy brand review</Link></li>
                <li><Link href='/cameras/eufy-doorbell' className='underline' style={{ color: '#f59e0b' }}>Eufy Doorbell review</Link></li>
                <li><Link href='/cameras/eufy-s340' className='underline' style={{ color: '#f59e0b' }}>Eufy S340 (E340) review</Link></li>
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
