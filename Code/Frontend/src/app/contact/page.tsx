import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ChevronRight, Mail, MessageCircle, AlertCircle, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact SecureHomeGear',
  description: 'Get in touch with SecureHomeGear — corrections, partnership inquiries, product review submissions, and privacy requests.',
  alternates: { canonical: 'https://securehomegear.com/contact' },
};

export default function ContactSHG() {
  return (
    <SHGLayout>
      <SHGHeader />
      <main className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: '#71717a' }}>
              <Link href='/' style={{ color: '#d4d4d8' }}>Home</Link>
              <ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f5f5f5' }}>Contact</span>
            </nav>

            <header className='mb-12'>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>Get in Touch</h1>
              <p className='text-xl leading-relaxed' style={{ color: '#d4d4d8' }}>
                We read every email. Whether you have a question, spotted a mistake, or want to work with us, here is how to reach us.
              </p>
            </header>

            <div className='grid md:grid-cols-2 gap-5 mb-12'>
              <div className='p-6 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='flex items-center gap-3 mb-3'>
                  <MessageCircle className='h-5 w-5' style={{ color: '#f59e0b' }} />
                  <h2 className='text-lg font-bold' style={{ color: '#f5f5f5' }}>General Inquiries</h2>
                </div>
                <p className='text-sm mb-4' style={{ color: '#d4d4d8' }}>
                  Questions about a product, a review, or the site in general.
                </p>
                <a href='mailto:hello@securehomegear.com' className='text-sm underline font-medium' style={{ color: '#f59e0b' }}>
                  hello@securehomegear.com
                </a>
                <p className='text-xs mt-2' style={{ color: '#71717a' }}>Typical response: 2-3 business days</p>
              </div>

              <div className='p-6 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='flex items-center gap-3 mb-3'>
                  <AlertCircle className='h-5 w-5' style={{ color: '#f59e0b' }} />
                  <h2 className='text-lg font-bold' style={{ color: '#f5f5f5' }}>Corrections</h2>
                </div>
                <p className='text-sm mb-4' style={{ color: '#d4d4d8' }}>
                  Spotted a factual error, outdated spec, or broken link? Tell us and we will fix it.
                </p>
                <a href='mailto:corrections@securehomegear.com' className='text-sm underline font-medium' style={{ color: '#f59e0b' }}>
                  corrections@securehomegear.com
                </a>
                <p className='text-xs mt-2' style={{ color: '#71717a' }}>We review within 48 hours</p>
              </div>

              <div className='p-6 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='flex items-center gap-3 mb-3'>
                  <Briefcase className='h-5 w-5' style={{ color: '#f59e0b' }} />
                  <h2 className='text-lg font-bold' style={{ color: '#f5f5f5' }}>Partnerships &amp; Press</h2>
                </div>
                <p className='text-sm mb-4' style={{ color: '#d4d4d8' }}>
                  Media inquiries, review sample submissions, affiliate program discussions.
                </p>
                <a href='mailto:partnerships@securehomegear.com' className='text-sm underline font-medium' style={{ color: '#f59e0b' }}>
                  partnerships@securehomegear.com
                </a>
                <p className='text-xs mt-2' style={{ color: '#71717a' }}>Typical response: 5 business days</p>
              </div>

              <div className='p-6 rounded-xl border' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <div className='flex items-center gap-3 mb-3'>
                  <Mail className='h-5 w-5' style={{ color: '#f59e0b' }} />
                  <h2 className='text-lg font-bold' style={{ color: '#f5f5f5' }}>Privacy &amp; Legal</h2>
                </div>
                <p className='text-sm mb-4' style={{ color: '#d4d4d8' }}>
                  GDPR/CCPA data requests, legal notices, and takedown requests.
                </p>
                <a href='mailto:privacy@securehomegear.com' className='text-sm underline font-medium' style={{ color: '#f59e0b' }}>
                  privacy@securehomegear.com
                </a>
                <p className='text-xs mt-2' style={{ color: '#71717a' }}>
                  GDPR/CCPA requests handled within 30 days
                </p>
              </div>
            </div>

            <section className='p-6 rounded-xl border mb-8' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
              <h2 className='text-xl font-bold mb-3' style={{ color: '#f5f5f5' }}>For Brands and Manufacturers</h2>
              <p className='mb-3' style={{ color: '#d4d4d8' }}>
                We welcome product samples for review consideration. We do not accept payment for positive coverage, guaranteed placement in rankings, or sponsored reviews disguised as editorial content. If that is the pitch, please don&apos;t send it.
              </p>
              <p style={{ color: '#d4d4d8' }}>
                To submit a product for review, email{' '}
                <a href='mailto:partnerships@securehomegear.com' className='underline' style={{ color: '#f59e0b' }}>
                  partnerships@securehomegear.com
                </a>{' '}
                with product specs, retail price, any press materials, and shipping address confirmation. We decline more samples than we accept, based on category fit and editorial schedule.
              </p>
            </section>
          </article>
        </div>
      </main>
      <SHGFooter />
    </SHGLayout>
  );
}
