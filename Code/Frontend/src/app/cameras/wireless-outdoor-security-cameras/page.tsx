import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wireless Outdoor Security Cameras 2026: Battery & Solar Picks',
  description: "Best wireless outdoor security cameras for 2026 — battery-powered and solar-compatible cameras from Arlo, Eufy, Reolink, Ring, and more.",
  alternates: { canonical: 'https://securehomegear.com/cameras/wireless-outdoor-security-cameras' },
  openGraph: { title: 'Wireless Outdoor Security Cameras 2026', description: '2026 guide to wireless outdoor security cameras.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Wireless Outdoor Security Cameras 2026: Battery & Solar Picks',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/wireless-outdoor-security-cameras' },
};

export default function WirelessOutdoor() {
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
              <span style={{ color: '#f5f5f5' }}>Wireless Outdoor Cameras</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Category Guide</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Wireless Outdoor Security Cameras 2026: Battery & Solar Picks</h1>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80&auto=format&fit=crop' alt='Wireless outdoor security cameras' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Wireless outdoor security cameras solve the problem of covering spots where you can&apos;t (or don&apos;t want to) run cables. Battery-powered, WiFi-connected, and increasingly solar-compatible, they install in minutes and reposition in seconds. Here are the best 2026 picks.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Top Wireless Outdoor Cameras 2026</h2>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#f59e0b' }}>Best No-Subscription Overall</div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#f5f5f5' }}>Eufy SoloCam E40 / S40 / Pro</h3>
                <p>
                  Battery-powered, no subscription required, HomeBase-free model available, solar panel compatible. 2K resolution, AI person detection on-device. 3-6 month battery depending on model/activity.
                </p>
                <p className='mt-2'><Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>Full Eufy review →</Link></p>
              </section>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#f59e0b' }}>Best Premium Wireless</div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#f5f5f5' }}>Arlo Pro 5S / Ultra 2</h3>
                <p>
                  Arlo&apos;s top-tier wireless outdoor cams. 2K-4K resolution, premium AI (with Arlo Secure), excellent app, spotlight models. Subscription-dependent for full features.
                </p>
                <p className='mt-2'><Link href='/cameras/arlo-camera' className='underline' style={{ color: '#f59e0b' }}>Full Arlo review →</Link></p>
              </section>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#f59e0b' }}>Best Battery + Solar Budget</div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#f5f5f5' }}>Reolink Argus 3 / Argus Eco / Go PT</h3>
                <p>
                  Battery-powered outdoor cameras with dedicated solar panel accessories. Reolink Argus Eco is especially popular for no-subscription battery + solar setups at budget prices.
                </p>
                <p className='mt-2'><Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>Full Reolink review →</Link></p>
              </section>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#f59e0b' }}>Best Amazon Ecosystem</div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#f5f5f5' }}>Ring Stick Up Cam Battery / Spotlight Cam Battery</h3>
                <p>
                  Ring&apos;s wireless battery cams integrate natively with Alexa. Require Ring Protect for cloud recording. Solid hardware, strong ecosystem, ongoing subscription cost.
                </p>
                <p className='mt-2'><Link href='/alternatives/ring' className='underline' style={{ color: '#f59e0b' }}>Ring review →</Link></p>
              </section>

              <section className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#f59e0b' }}>Best Ultra Budget</div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#f5f5f5' }}>Wyze Cam Outdoor / Blink Outdoor</h3>
                <p>
                  Cheap battery-powered outdoor options. Wyze integrates with Cam Plus subscription, Blink with Blink Plus. Both &lt;$80 per camera, both subscription-gated for full features.
                </p>
              </section>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What To Look For In A Wireless Outdoor Camera</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Weather rating</strong> — Look for IP65+ (water jets, total dust protection)</li>
                <li><strong style={{ color: '#f5f5f5' }}>Battery life</strong> — 3-6 months is realistic; cold-weather performance varies</li>
                <li><strong style={{ color: '#f5f5f5' }}>Solar panel compatibility</strong> — Extends battery life indefinitely if location gets sun</li>
                <li><strong style={{ color: '#f5f5f5' }}>Resolution</strong> — 2K is the 2026 floor; 4K is premium</li>
                <li><strong style={{ color: '#f5f5f5' }}>Local vs cloud storage</strong> — Subscription-free only works with local storage</li>
                <li><strong style={{ color: '#f5f5f5' }}>AI detection</strong> — On-device vs cloud, person/package/vehicle classification</li>
                <li><strong style={{ color: '#f5f5f5' }}>Two-way talk</strong> — Standard on nearly all 2026 cameras</li>
                <li><strong style={{ color: '#f5f5f5' }}>Night vision</strong> — Color night vision becoming common above IR-only</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Related Guides</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/cameras/best-outdoor-security-cameras-without-subscription' className='underline' style={{ color: '#f59e0b' }}>Best outdoor cameras without subscription</Link></li>
                <li><Link href='/cameras/no-subscription-security-camera' className='underline' style={{ color: '#f59e0b' }}>No-subscription cameras general</Link></li>
                <li><Link href='/cameras/security-cameras' className='underline' style={{ color: '#f59e0b' }}>Security cameras complete guide</Link></li>
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
