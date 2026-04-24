import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Wired Security Camera System 2026: POE & NVR Top Picks',
  description: "Best wired security camera systems for 2026 — POE camera kits with NVR storage. Reolink, Lorex, and top kits for homes and small business.",
  alternates: { canonical: 'https://securehomegear.com/cameras/best-wired-security-camera-system' },
  openGraph: { title: 'Best Wired Security Camera System 2026', description: 'Top wired security camera systems for 2026.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Best Wired Security Camera System 2026: POE & NVR Top Picks',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/best-wired-security-camera-system' },
};

export default function BestWiredSystem() {
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
              <span style={{ color: '#f5f5f5' }}>Best Wired Security Camera System</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Buying Guide</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Best Wired Security Camera System 2026: POE & NVR Top Picks</h1>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&q=80&auto=format&fit=crop' alt='Wired security camera system with NVR' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Wired security camera systems — specifically POE + NVR setups — are the ultimate reliable-install choice. No WiFi congestion, no battery swaps, no subscription fees, and 24/7 uptime. They take more effort upfront (cable pulling) but reward you with decades of low-maintenance operation. Here are the best 2026 options.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Top 3 Wired System Recommendations</h2>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#f59e0b' }}>#1 Best Overall</div>
                <h3 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Reolink POE NVR Kits</h3>
                <p className='mb-3'>
                  Reolink is the consumer-accessible POE leader. NVR kits with 4-16 cameras, 2-4TB storage, 4K options, reasonable DIY-friendly pricing. Strong app. No subscription needed. The sweet spot for homeowner POE setups.
                </p>
                <p><strong style={{ color: '#f5f5f5' }}>Price range:</strong> $400-$1,500 for 4-8 camera kits. <Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>Full review →</Link></p>
              </section>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#f59e0b' }}>#2 Best For Higher-Scale</div>
                <h3 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Lorex POE NVR Kits</h3>
                <p className='mb-3'>
                  Lorex pushes into commercial-adjacent territory — 16+ camera support, larger storage, 4K as standard, more enterprise-grade features. Best when Reolink&apos;s capacity is insufficient. More expensive but scales further.
                </p>
                <p><strong style={{ color: '#f5f5f5' }}>Price range:</strong> $600-$2,500+ for 8-16 camera kits. <Link href='/cameras/lorex' className='underline' style={{ color: '#f59e0b' }}>Full review →</Link></p>
              </section>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#f59e0b' }}>#3 Best Premium All-in-One</div>
                <h3 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Eufy eufyCam Wired (Professional Install)</h3>
                <p className='mb-3'>
                  Eufy isn&apos;t a POE-native brand, but their wired eufyCam models paired with HomeBase offer a different take on "wired" — continuous power without cable pulling from an NVR. Less commercial but more user-friendly.
                </p>
                <p><strong style={{ color: '#f5f5f5' }}>Price range:</strong> $400-$1,200 kit. <Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>Full review →</Link></p>
              </section>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Why Wired Beats Wireless (For Serious Setups)</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Reliability.</strong> No WiFi dropouts, no RF interference, no router saturation</li>
                <li><strong style={{ color: '#f5f5f5' }}>Continuous power.</strong> No batteries to recharge, no outlet conflicts</li>
                <li><strong style={{ color: '#f5f5f5' }}>24/7 recording.</strong> NVR storage enables it natively, no subscription</li>
                <li><strong style={{ color: '#f5f5f5' }}>Higher resolution.</strong> 4K is standard, not an upsell</li>
                <li><strong style={{ color: '#f5f5f5' }}>Lower long-term cost.</strong> No subscription = thousands of dollars saved over 10 years</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Trade-offs To Consider</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Installation complexity — cable pulling in attics/walls</li>
                <li>Less renter-friendly — permanent infrastructure</li>
                <li>Higher upfront hardware cost than single wireless cameras</li>
                <li>NVR needs physical placement + power + cooling</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Sizing Your System</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Small home (4 cameras):</strong> 4-channel Reolink NVR + 4 POE cameras → $400-$700</li>
                <li><strong style={{ color: '#f5f5f5' }}>Medium home (6-8 cameras):</strong> 8-channel Reolink or Lorex → $700-$1,200</li>
                <li><strong style={{ color: '#f5f5f5' }}>Large home or small business (12-16 cameras):</strong> 16-channel Lorex → $1,500-$3,000</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/poe-camera' className='underline' style={{ color: '#f59e0b' }}>POE cameras explained</Link></li>
                <li><Link href='/cameras/business-security-cameras' className='underline' style={{ color: '#f59e0b' }}>Business security cameras</Link></li>
                <li><Link href='/cameras/commercial-security-cameras' className='underline' style={{ color: '#f59e0b' }}>Commercial security cameras</Link></li>
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
