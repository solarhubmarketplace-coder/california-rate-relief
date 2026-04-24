import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Arlo Base Station Guide 2026: Which Base Station Do You Need?',
  description: "Arlo's base stations — SmartHub VMB5000, VMB4540, and original — differ in camera support and features. Complete 2026 guide to compatibility and which to buy.",
  alternates: { canonical: 'https://securehomegear.com/cameras/arlo-base-station' },
  openGraph: { title: 'Arlo Base Station Guide 2026', description: '2026 guide to Arlo base stations and SmartHub.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Arlo Base Station Guide 2026: Which Base Station Do You Need?',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/arlo-base-station' },
};

export default function ArloBaseStation() {
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
              <span style={{ color: '#f5f5f5' }}>Arlo Base Station</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Product Guide</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Arlo Base Station Guide 2026: Which Base Station Do You Need?</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Arlo&apos;s camera system uses a base station (sometimes called SmartHub) as the central hub between cameras and your router. Unlike Eufy&apos;s HomeBase, Arlo base stations historically haven&apos;t enabled no-subscription local storage — they&apos;re mainly for camera communication and siren functionality. Here&apos;s what you need to know in 2026.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What Arlo Base Stations Do</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Wireless hub for Arlo cameras that need one (mainly older Pro generations)</li>
                <li>Built-in 100dB siren that can activate remotely or on motion</li>
                <li>USB storage slot for local recording (limited, not a full alternative to Arlo Secure cloud)</li>
                <li>Ethernet connection to router for reliable camera uplink</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Arlo Base Station Models</h2>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <h3 className='text-2xl font-bold mb-2' style={{ color: '#f5f5f5' }}>Arlo SmartHub VMB5000</h3>
                <p className='mb-2'>The current-generation hub. Required for Arlo Ultra and some Arlo Pro cameras. Supports full 4K streaming from Ultra cameras. USB backup storage slot. Ethernet preferred connection.</p>
                <p><strong style={{ color: '#f5f5f5' }}>Best for:</strong> Arlo Ultra camera owners; newer Arlo systems.</p>
              </section>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <h3 className='text-2xl font-bold mb-2' style={{ color: '#f5f5f5' }}>Arlo Base Station VMB4540</h3>
                <p className='mb-2'>Previous generation. Works with Arlo Pro, Pro 2, Pro 3 cameras. USB storage slot. Still functional but being phased out in favor of SmartHub.</p>
                <p><strong style={{ color: '#f5f5f5' }}>Best for:</strong> Existing Arlo Pro 1-3 owners who need a replacement.</p>
              </section>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <h3 className='text-2xl font-bold mb-2' style={{ color: '#f5f5f5' }}>Original Arlo Base Station VMB3000</h3>
                <p className='mb-2'>Legacy. For original Arlo / Arlo Pro cameras only. No USB storage. Consider upgrading to newer base if you&apos;re expanding.</p>
                <p><strong style={{ color: '#f5f5f5' }}>Best for:</strong> Only if forced by legacy camera compatibility.</p>
              </section>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Which Arlo Cameras Need A Base Station</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Requires base station:</strong> Arlo Ultra, Arlo Ultra 2, Arlo Pro (original), Arlo Pro 2, some Pro 3 configurations</li>
                <li><strong style={{ color: '#f5f5f5' }}>Base station optional:</strong> Arlo Essential, Arlo Pro 4, Arlo Pro 5S (these can work WiFi-direct but base station adds features)</li>
                <li><strong style={{ color: '#f5f5f5' }}>No base station needed:</strong> Arlo Essential Indoor, Arlo Essential Wired Doorbell (direct WiFi)</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>The Local Storage Limitation</h2>
              <p>
                Unlike Eufy HomeBase which offers full no-subscription operation, Arlo base stations&apos; USB storage is limited — it&apos;s backup, not a full cloud replacement. Accessing recorded footage from the USB drive requires removing it from the base station and reading on a computer. For the polished browsing experience, Arlo Secure cloud is still needed. Buyers who want genuinely local, app-browsable storage should consider <Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>Eufy</Link> or <Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>Reolink</Link> instead.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/arlo-camera' className='underline' style={{ color: '#f59e0b' }}>Full Arlo brand review</Link></li>
                <li><Link href='/cameras/arlo-subscription' className='underline' style={{ color: '#f59e0b' }}>Arlo Secure subscription</Link></li>
                <li><Link href='/cameras/eufy-homebase' className='underline' style={{ color: '#f59e0b' }}>Eufy HomeBase (comparable product)</Link></li>
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
