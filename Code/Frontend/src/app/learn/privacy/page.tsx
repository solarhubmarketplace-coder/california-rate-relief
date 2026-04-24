import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — At Home Biohacking',
  description: "At Home Biohacking privacy policy — what we collect, how we use it, your rights.",
  alternates: { canonical: 'https://athomebiohacking.com/learn/privacy' },
  openGraph: { title: 'Privacy Policy — At Home Biohacking', description: "At Home Biohacking privacy policy — what we collect, how we use it, your rights.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
};

export default function Page() {
  return (
    <AHBLayout>
      <AHBHeader />
      <main className='py-16' style={{ backgroundColor: '#0a1a14' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: '#6ee7b7' }}>
              <Link href='/' style={{ color: '#a7f3d0' }}>Home</Link><ChevronRight className='h-3 w-3' />
              <Link href="/learn" style={{ color: "#a7f3d0" }}>Learn</Link><ChevronRight className="h-3 w-3" />
              <span style={{ color: '#f0fdf4' }}>Privacy Policy</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Legal</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>Privacy Policy — At Home Biohacking</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>Last updated: April 2026</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>What We Collect</h2>
              <p>We collect minimal data: anonymous analytics (page views, referrers, device type via standard analytics tools), contact form submissions (email and message when you contact us), affiliate link click data (used by affiliate networks to attribute sales).</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>How We Use It</h2>
              <p>Analytics help us understand which content is useful. Contact info is used only to respond to your inquiries. Affiliate click data goes to the affiliate networks to attribute commissions — we do not sell personal data.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Your Rights (CCPA / GDPR)</h2>
              <p>You can request access to, correction of, or deletion of any personal data we hold about you by emailing hello@athomebiohacking.com.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Cookies</h2>
              <p>This site uses essential cookies (required for site function) and analytics cookies. Affiliate links may set tracking cookies from the affiliate network (e.g., Amazon, Rakuten, AWIN). You can decline non-essential cookies via the banner on first visit.</p>
            </div>

            <div className='mt-10'><Link href='/' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#34d399' }}><ArrowLeft className='h-4 w-4' />Home</Link></div>
          </article>
        </div>
      </main>
      <AHBFooter />
    </AHBLayout>
  );
}
