import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Doorbell Transformer 2026: What It Is, Why It Matters For Smart Doorbells',
  description: "Smart video doorbells often require a specific voltage and amperage from your doorbell transformer. 2026 guide — what transformer you need, how to check, and wiring basics.",
  alternates: { canonical: 'https://securehomegear.com/cameras/doorbell-transformer' },
  openGraph: { title: 'Doorbell Transformer Explained 2026', description: '2026 guide to doorbell transformers for smart doorbells.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Doorbell Transformer 2026: What It Is, Why It Matters For Smart Doorbells',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/doorbell-transformer' },
};

export default function DoorbellTransformer() {
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
              <span style={{ color: '#f5f5f5' }}>Doorbell Transformer</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Installation Guide</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Doorbell Transformer 2026: What It Is, Why It Matters For Smart Doorbells</h1>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80&auto=format&fit=crop' alt='Video doorbell mounted by a front door' className='w-full h-64 object-cover' loading='lazy' />
            </div>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                If you&apos;re replacing a traditional doorbell with a smart video doorbell (Ring, Nest, Eufy, Arlo), one of the first questions you&apos;ll hit is whether your existing doorbell transformer can power it. Smart doorbells need more juice than mechanical chime systems. Here&apos;s what you need to know.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What Is a Doorbell Transformer?</h2>
              <p>
                A doorbell transformer is a small electrical device that converts your home&apos;s 120V AC power to a lower voltage — typically 8, 16, or 24 volts — suitable for powering a doorbell. It&apos;s usually tucked in your basement, attic, utility closet, or mounted to the junction box near your electrical panel. You may have never thought about it, but it&apos;s been quietly powering your doorbell for the life of your home.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Why It Matters For Smart Doorbells</h2>
              <p>
                Traditional doorbells draw very little power — the old chime is a basic electromechanical device. Smart video doorbells (with WiFi, camera, motion sensors, two-way audio, and sometimes a porch light) draw significantly more. Most manufacturers require specific voltage and amperage ranges for reliable operation:
              </p>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Ring Video Doorbell Pro/Pro 2</strong> — 16-24V AC, 30VA transformer minimum</li>
                <li><strong style={{ color: '#f5f5f5' }}>Ring Video Doorbell 4/5</strong> — 8-24V AC, 10VA-40VA</li>
                <li><strong style={{ color: '#f5f5f5' }}>Google Nest Doorbell (wired)</strong> — 16-24V AC, 10VA minimum</li>
                <li><strong style={{ color: '#f5f5f5' }}>Eufy Doorbell Wired 2K</strong> — 16-24V AC, 30VA minimum</li>
                <li><strong style={{ color: '#f5f5f5' }}>Arlo Essential Wired</strong> — 16-24V AC, 10VA-40VA</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>How To Check Your Existing Transformer</h2>
              <ol className='space-y-2 list-decimal pl-6'>
                <li>Locate the transformer — basement, utility room, attic, or near the electrical panel. It looks like a small metal box with wires.</li>
                <li>Look for the voltage rating printed on the label. Common values: 8V, 16V, 24V.</li>
                <li>Look for the VA (volt-amp) rating. Common: 10VA, 20VA, 30VA, 40VA.</li>
                <li>Compare against your intended smart doorbell&apos;s minimum requirements.</li>
              </ol>
              <p className='mt-3'>
                If your existing transformer is 16V 10VA and you&apos;re installing a Ring Pro 2 (requires 30VA), you&apos;ll need to upgrade the transformer before installation.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Upgrading a Doorbell Transformer</h2>
              <p>
                Replacement transformers run $15-$30. Installation takes 15-30 minutes for someone comfortable with electrical work, longer if you&apos;ve never worked on household wiring. Key steps:
              </p>
              <ol className='space-y-2 list-decimal pl-6'>
                <li>Turn off the circuit breaker feeding the transformer. Verify power is off with a voltage tester.</li>
                <li>Disconnect the existing transformer.</li>
                <li>Mount and wire the new transformer using the same wire connections.</li>
                <li>Restore power, test doorbell operation, then install the smart doorbell.</li>
              </ol>
              <p className='mt-3'>
                If you&apos;re not comfortable with electrical work, hire an electrician — quoted at $100-$200 for a transformer swap, more if wiring needs extension.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>The Battery Alternative</h2>
              <p>
                If you don&apos;t have existing doorbell wiring, don&apos;t want to upgrade a transformer, or rent and can&apos;t modify wiring, battery-powered smart doorbells skip the transformer question entirely. See our <Link href='/cameras/video-doorbell-without-subscription' className='underline' style={{ color: '#f59e0b' }}>no-subscription doorbell guide</Link> and <Link href='/cameras/doorbell-camera' className='underline' style={{ color: '#f59e0b' }}>doorbell camera hub</Link> for battery-powered recommendations.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/doorbell-camera' className='underline' style={{ color: '#f59e0b' }}>Doorbell camera complete guide</Link></li>
                <li><Link href='/cameras/eufy-doorbell' className='underline' style={{ color: '#f59e0b' }}>Eufy Doorbell review</Link></li>
                <li><Link href='/cameras/nest-doorbell' className='underline' style={{ color: '#f59e0b' }}>Nest Doorbell review</Link></li>
                <li><Link href='/cameras/arlo-doorbell' className='underline' style={{ color: '#f59e0b' }}>Arlo Doorbell review</Link></li>
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
