import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Disclaimer — At Home Biohacking',
  description: "Medical disclaimer — content is informational only and not a substitute for professional medical advice, diagnosis, or treatment.",
  alternates: { canonical: 'https://athomebiohacking.com/learn/medical-disclaimer' },
  openGraph: { title: 'Medical Disclaimer — At Home Biohacking', description: "Medical disclaimer — content is informational only and not a substitute for professional medical advice, diagnosis, or treatment.", type: 'article', publishedTime: '2026-04-24T00:00:00Z' },
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
              <span style={{ color: '#f0fdf4' }}>Medical Disclaimer</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Legal</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>Medical Disclaimer — At Home Biohacking</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg p-4 rounded-lg border' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}><strong style={{ color: '#f0fdf4' }}>Important:</strong> The content on this website is for informational and educational purposes only. It is not intended as medical advice, diagnosis, or treatment.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Consult Your Healthcare Provider</h2>
              <p>Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition or before starting any new health protocol, including cold exposure, PEMF therapy, red light therapy, infrared sauna use, or vibration plate use.</p>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Specific Warnings</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f0fdf4' }}>Cold water immersion</strong> can cause cold shock response and cardiac arrhythmias. Not safe for everyone.</li>
                <li><strong style={{ color: '#f0fdf4' }}>PEMF therapy</strong> is contraindicated with implanted electronic medical devices (pacemakers, defibrillators, cochlear implants).</li>
                <li><strong style={{ color: '#f0fdf4' }}>Infrared sauna</strong> may be unsafe for pregnant individuals, people with cardiovascular disease, and those taking certain medications.</li>
                <li><strong style={{ color: '#f0fdf4' }}>Red light therapy</strong> should not be used over the thyroid, over malignant lesions, or by those with photosensitivity.</li>
                <li><strong style={{ color: '#f0fdf4' }}>Vibration therapy</strong> is contraindicated for people with acute DVT, severe cardiovascular disease, uncontrolled hypertension, recent surgery, or pregnancy.</li>
              </ul>
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Emergency</h2>
              <p>If you are experiencing a medical emergency, call 911 (US) or your local emergency number immediately. Do not use this website for medical emergencies.</p>
            </div>

            <div className='mt-10'><Link href='/' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#34d399' }}><ArrowLeft className='h-4 w-4' />Home</Link></div>
          </article>
        </div>
      </main>
      <AHBFooter />
    </AHBLayout>
  );
}
