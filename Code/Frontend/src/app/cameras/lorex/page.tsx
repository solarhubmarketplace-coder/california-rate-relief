import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lorex Security Cameras Review 2026: Commercial-Grade For Residences',
  description: "Lorex cameras sit between residential and commercial — higher resolution, larger NVR capacities, and serious reliability. Honest 2026 review with who should and shouldn't buy.",
  alternates: { canonical: 'https://securehomegear.com/cameras/lorex' },
  openGraph: { title: 'Lorex Security Cameras Review 2026', description: '2026 review of Lorex security cameras.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Lorex Security Cameras Review 2026: Commercial-Grade For Residences',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/lorex' },
};

export default function LorexBrandHub() {
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
              <span style={{ color: '#f5f5f5' }}>Lorex</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Brand Hub</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Lorex Security Cameras Review 2026: Commercial-Grade For Residences</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Lorex sits in a specific lane: homeowners who want something closer to commercial-grade than consumer. 4K resolution standard, NVR kits with 8-16+ channel capacity, serious cable runs, and a lineage connected to Dahua&apos;s surveillance expertise. It&apos;s not the brand to pick if you want a cute plug-and-play single camera. It&apos;s the brand to pick if you&apos;re wiring up a building — residential or light commercial.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Who Lorex Is</h2>
              <p>
                Canadian-based, part of the Dahua Technology family (one of the world&apos;s largest surveillance equipment manufacturers). That parentage shapes the product DNA — these are serious cameras designed for recording, retention, and 24/7 operation. Consumer-facing but commercial-capable.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Product Lineup</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Lorex NVR kits</strong> — 4, 8, 16-channel NVRs with 2-16 cameras, 2-6TB HDD capacity</li>
                <li><strong style={{ color: '#f5f5f5' }}>4K POE cameras</strong> — Bullet and dome form factors, wired to NVR</li>
                <li><strong style={{ color: '#f5f5f5' }}>Wireless NVR options</strong> — WiFi cameras + NVR (less common, less reliable than POE)</li>
                <li><strong style={{ color: '#f5f5f5' }}>Lorex 2K indoor cams</strong> — Consumer-grade indoor options</li>
                <li><strong style={{ color: '#f5f5f5' }}>Lorex video doorbells</strong> — Wired doorbell additions that tie into NVR</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Strengths</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>4K as standard.</strong> Not an optional upgrade. Most Lorex cameras ship at higher resolution than consumer competitors.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Local recording at scale.</strong> NVR storage capacity measured in terabytes. Months of 24/7 retention is realistic.</li>
                <li><strong style={{ color: '#f5f5f5' }}>No required subscription.</strong> NVR is the storage. No monthly fee for core functionality.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Reliable wired POE.</strong> Industry-standard POE means no WiFi bottlenecks.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Scales to commercial.</strong> 16+ camera setups are actually supported, not an afterthought.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Watch-outs</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Dahua parentage concerns.</strong> U.S. government restricted Dahua equipment for federal use in 2019 due to stated security concerns. Lorex has argued their consumer products are distinct. Research this if it matters to you.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Installation complexity.</strong> POE wiring is more involved than battery cameras. Professional install often needed.</li>
                <li><strong style={{ color: '#f5f5f5' }}>App is functional but not premium.</strong> Not at Ring or Arlo app polish.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Not a casual purchase.</strong> Kits start $400-$600 and go up meaningfully.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When Lorex Fits</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>You&apos;re wiring a permanent install for a house or small business</li>
                <li>You need 8+ camera coverage reliably</li>
                <li>You want 4K resolution and long footage retention</li>
                <li>You&apos;re comfortable with cable pulling or will hire an installer</li>
                <li>The subscription model of Ring/Nest/Arlo bothers you at multi-camera scale</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When to Skip Lorex</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>You need 1-3 cameras and want battery/wireless flexibility → <Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>Eufy</Link> or <Link href='/cameras/arlo-camera' className='underline' style={{ color: '#f59e0b' }}>Arlo</Link></li>
                <li>You want a more consumer-polished POE system → <Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>Reolink</Link> POE + NVR</li>
                <li>Dahua parentage is a concern for you</li>
                <li>Professional install is not an option</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>Reolink (consumer POE alternative)</Link></li>
                <li><Link href='/cameras/business-security-cameras' className='underline' style={{ color: '#f59e0b' }}>Business security cameras guide</Link></li>
                <li><Link href='/cameras/commercial-security-cameras' className='underline' style={{ color: '#f59e0b' }}>Commercial security cameras guide</Link></li>
                <li><Link href='/cameras/best-wired-security-camera-system' className='underline' style={{ color: '#f59e0b' }}>Best wired security camera systems</Link></li>
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
