import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'POE Camera Guide 2026: What Is POE, Why It Matters, Best Systems',
  description: "POE (Power over Ethernet) cameras deliver power and data over one cable. 2026 complete guide — how POE works, benefits vs WiFi, best brands, installation basics.",
  alternates: { canonical: 'https://securehomegear.com/cameras/poe-camera' },
  openGraph: { title: 'POE Camera Guide 2026', description: '2026 guide to POE security cameras.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'POE Camera Guide 2026: What Is POE, Why It Matters, Best Systems',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/poe-camera' },
};

export default function PoeCamera() {
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
              <span style={{ color: '#f5f5f5' }}>POE Camera</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Category Guide</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>POE Camera Guide 2026: What Is POE, Why It Matters, Best Systems</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                POE (Power over Ethernet) cameras are the reliability workhorses of the security camera world. One Ethernet cable carries both power and data — no separate power outlet needed, no WiFi bottleneck, no battery recharges. For permanent installations where uptime matters, POE is the gold standard. Here&apos;s the complete 2026 guide.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What Is POE?</h2>
              <p>
                POE is an industry standard (IEEE 802.3af/at/bt) that delivers electrical power over standard Ethernet cabling. Instead of running a separate power line to a camera, the same CAT5e or CAT6 cable provides both the network connection and the DC power. This simplifies installation in hard-to-reach locations like attics, eaves, and soffits where power outlets aren&apos;t readily available.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>POE vs WiFi Cameras</h2>
              <div className='overflow-x-auto rounded-xl border my-4' style={{ borderColor: '#1e293b' }}>
                <table className='min-w-full text-sm'>
                  <thead style={{ backgroundColor: '#111827' }}>
                    <tr>
                      <th className='px-4 py-3 text-left font-bold' style={{ color: '#f5f5f5' }}>Factor</th>
                      <th className='px-4 py-3 text-left font-bold' style={{ color: '#f5f5f5' }}>POE</th>
                      <th className='px-4 py-3 text-left font-bold' style={{ color: '#f5f5f5' }}>WiFi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-t' style={{ borderColor: '#1e293b' }}><td className='px-4 py-3'>Reliability</td><td className='px-4 py-3'>Excellent</td><td className='px-4 py-3'>Depends on signal</td></tr>
                    <tr className='border-t' style={{ borderColor: '#1e293b' }}><td className='px-4 py-3'>Power</td><td className='px-4 py-3'>Over Ethernet</td><td className='px-4 py-3'>Outlet or battery</td></tr>
                    <tr className='border-t' style={{ borderColor: '#1e293b' }}><td className='px-4 py-3'>Installation</td><td className='px-4 py-3'>Cable pulling required</td><td className='px-4 py-3'>Just mount + WiFi</td></tr>
                    <tr className='border-t' style={{ borderColor: '#1e293b' }}><td className='px-4 py-3'>Resolution ceiling</td><td className='px-4 py-3'>4K common</td><td className='px-4 py-3'>Limited by WiFi bandwidth</td></tr>
                    <tr className='border-t' style={{ borderColor: '#1e293b' }}><td className='px-4 py-3'>24/7 continuous recording</td><td className='px-4 py-3'>Native to NVR</td><td className='px-4 py-3'>Requires cloud subscription</td></tr>
                    <tr className='border-t' style={{ borderColor: '#1e293b' }}><td className='px-4 py-3'>Best for</td><td className='px-4 py-3'>Permanent installs</td><td className='px-4 py-3'>Renters, flexibility</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Who POE Is For</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Homeowners (not renters) with a planned permanent security install</li>
                <li>Multi-camera systems (4-16+ cameras)</li>
                <li>Buyers who want 4K resolution without subscription overhead</li>
                <li>Small businesses, offices, warehouses, shops</li>
                <li>Anyone where 24/7 reliability trumps install simplicity</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Best POE Camera Systems 2026</h2>
              <ul className='space-y-3 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}><Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>Reolink POE + NVR</Link></strong> — Widest consumer-accessible POE lineup. 4K available, reasonable pricing, strong reliability. Best overall for homeowners.</li>
                <li><strong style={{ color: '#f5f5f5' }}><Link href='/cameras/lorex' className='underline' style={{ color: '#f59e0b' }}>Lorex</Link></strong> — Commercial-grade POE. Larger NVR capacity, higher camera counts. Best for small business / high-camera homes.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Amcrest</strong> — Mid-tier POE with commercial positioning. Lesser-known but serviceable.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Hikvision / Dahua</strong> (enterprise) — Powerful but U.S. import restrictions apply; thorough vendor research required before commercial purchase.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What You Need To Get Started</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>NVR (Network Video Recorder)</strong> — Central storage device, 4-16+ channel capacity</li>
                <li><strong style={{ color: '#f5f5f5' }}>POE switch (or NVR with built-in POE)</strong> — Provides power injection to cameras</li>
                <li><strong style={{ color: '#f5f5f5' }}>CAT5e or CAT6 cable runs</strong> — From NVR to each camera location</li>
                <li><strong style={{ color: '#f5f5f5' }}>Storage HDD</strong> — Usually 2-6TB inside the NVR</li>
                <li><strong style={{ color: '#f5f5f5' }}>Cameras with POE support</strong> — Most POE camera systems are sold as kits</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Installation Basics</h2>
              <p>
                POE installations require running Ethernet cable from the NVR to each camera location. This can be DIY if you&apos;re comfortable fishing cable through attics / drill points / exterior conduit. If not, expect $500-$2,000 for professional installation depending on property size and camera count. Kits with pre-terminated cables reduce complexity.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>Reolink review</Link></li>
                <li><Link href='/cameras/lorex' className='underline' style={{ color: '#f59e0b' }}>Lorex review</Link></li>
                <li><Link href='/cameras/best-wired-security-camera-system' className='underline' style={{ color: '#f59e0b' }}>Best wired security camera systems</Link></li>
                <li><Link href='/cameras/business-security-cameras' className='underline' style={{ color: '#f59e0b' }}>Business security cameras guide</Link></li>
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
