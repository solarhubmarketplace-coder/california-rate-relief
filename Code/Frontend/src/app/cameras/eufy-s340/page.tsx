import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'Eufy S340 Review 2026: The Dual-Camera SoloCam Deep Dive',
  description: "Eufy S340 (SoloCam S340) features dual cameras — wide + telephoto — in one device. Honest 2026 review of features, battery, and who it's best for.",
  alternates: { canonical: 'https://securehomegear.com/cameras/eufy-s340' },
  openGraph: { title: 'Eufy S340 Review 2026', description: 'Review of Eufy SoloCam S340 dual-camera outdoor security camera.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Eufy S340 Review 2026: The Dual-Camera SoloCam Deep Dive',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/eufy-s340' },
};

export default function EufyS340() {
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
              <span style={{ color: '#f5f5f5' }}>Eufy S340</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Product Review</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Eufy S340 Review 2026: The Dual-Camera SoloCam Deep Dive</h1>
            
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: '#1f2940', accent: '#f59e0b' }} />
</header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                The Eufy SoloCam S340 is one of the more interesting outdoor security cameras shipping in 2026 — it packs two cameras (a wide-angle and a telephoto) into a single weatherproof outdoor unit. Solar-panel compatible, no HomeBase required, and fully subscription-free. Here&apos;s the honest product-level review.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Why Dual Cameras Matter</h2>
              <p>
                Single-camera outdoor cameras force a trade-off: wide field of view means objects appear small and detail is lost at distance; telephoto zoom loses peripheral context. The S340&apos;s dual-camera approach gives you both. The wide camera catches everything in frame; the telephoto gives you a sharper, zoomed-in look at specific subjects (like faces or license plates). In the app, you can switch between cameras or view both simultaneously.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Key Specs</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Wide camera:</strong> 3K resolution, ~135° field of view</li>
                <li><strong style={{ color: '#f5f5f5' }}>Telephoto camera:</strong> 2K resolution, 8x zoom</li>
                <li><strong style={{ color: '#f5f5f5' }}>Auto-tracking:</strong> Pan/tilt keeps subjects in frame</li>
                <li><strong style={{ color: '#f5f5f5' }}>Color night vision:</strong> Built-in spotlight for full-color low-light recording</li>
                <li><strong style={{ color: '#f5f5f5' }}>Weather rating:</strong> IP67 (submersion-rated dust/water protection)</li>
                <li><strong style={{ color: '#f5f5f5' }}>Power:</strong> 13,400 mAh battery, solar panel compatible</li>
                <li><strong style={{ color: '#f5f5f5' }}>Storage:</strong> 8GB built-in; expandable via HomeBase (optional)</li>
                <li><strong style={{ color: '#f5f5f5' }}>AI detection:</strong> On-device person, vehicle classification</li>
                <li><strong style={{ color: '#f5f5f5' }}>Voice:</strong> Alexa, Google Assistant</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Strengths</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Dual-camera versatility.</strong> Coverage and detail in one device.</li>
                <li><strong style={{ color: '#f5f5f5' }}>No HomeBase required.</strong> Works standalone with built-in storage.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Solar panel compatibility.</strong> Install once, power forever with sun exposure.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Subscription-free core.</strong> All features work without monthly fee.</li>
                <li><strong style={{ color: '#f5f5f5' }}>3K resolution.</strong> Above mainstream 2K baseline.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Watch-outs</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Price is premium for a battery outdoor cam (~$200-$250)</li>
                <li>Auto-tracking can be fussy with multiple moving subjects</li>
                <li>Battery life with both cameras active is shorter than single-cam units</li>
                <li>Heavier/larger than single-camera SoloCams</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When The S340 Fits</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>You need one camera to cover both wide-area surveillance AND close detail capture</li>
                <li>Driveway or front yard surveillance (ID license plates + catch the whole area)</li>
                <li>Single strategic mount point for maximum coverage</li>
                <li>You want solar + battery + no subscription all in one</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Alternatives To Consider</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>Eufy SoloCam E40</Link> — Single cam, much cheaper, still no subscription</li>
                <li><Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>Reolink Argus 3 Pro</Link> — Single cam, solar-ready, budget-friendly</li>
                <li><Link href='/cameras/arlo-camera' className='underline' style={{ color: '#f59e0b' }}>Arlo Ultra 2</Link> — 4K single cam, premium, subscription-dependent</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>Full Eufy brand review</Link></li>
                <li><Link href='/cameras/wireless-outdoor-security-cameras' className='underline' style={{ color: '#f59e0b' }}>Wireless outdoor cameras guide</Link></li>
                <li><Link href='/cameras/eufy-homebase' className='underline' style={{ color: '#f59e0b' }}>Eufy HomeBase guide</Link></li>
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
