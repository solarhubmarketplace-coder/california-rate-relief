import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — SecureHomeGear',
  description: 'How SecureHomeGear collects, uses, and protects visitor data. GDPR, CCPA, and US state privacy law compliance information.',
  alternates: { canonical: 'https://securehomegear.com/privacy' },
};

export default function PrivacySHG() {
  return (
    <SHGLayout>
      <SHGHeader />
      <main className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: '#71717a' }}>
              <Link href='/' style={{ color: '#d4d4d8' }}>Home</Link>
              <ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f5f5f5' }}>Privacy Policy</span>
            </nav>

            <header className='mb-10'>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>Privacy Policy</h1>
              <p className='text-lg' style={{ color: '#d4d4d8' }}>
                Effective date: April 2026. This policy explains what data SecureHomeGear collects, how it&apos;s used, and your rights under GDPR, CCPA, and applicable US state privacy laws.
              </p>
            </header>

            <div className='space-y-8 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Information We Collect</h2>
                <p className='mb-3'>
                  <strong style={{ color: '#f5f5f5' }}>Analytics data (automatic).</strong> When you visit SecureHomeGear, our analytics provider collects: pages viewed, referring site, approximate location (city-level from IP), browser type, device type, and time on page. This data is aggregated and used to understand what content is useful to readers.
                </p>
                <p className='mb-3'>
                  <strong style={{ color: '#f5f5f5' }}>Affiliate click tracking.</strong> When you click an affiliate link, the retailer (Amazon, AWIN merchants, etc.) sets a tracking cookie to attribute any subsequent purchase to SecureHomeGear. We do not have access to your personal purchase data; retailers only tell us aggregate commission amounts per reporting period.
                </p>
                <p>
                  <strong style={{ color: '#f5f5f5' }}>Contact form submissions.</strong> If you email us or submit a contact form, we store the message, your email address, and any attached information to respond to your inquiry. This data is not sold, shared with third parties, or used for marketing.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>How We Use Your Data</h2>
                <ul className='space-y-2 list-disc pl-6'>
                  <li>To operate and improve the SecureHomeGear website</li>
                  <li>To respond to direct contact and inquiries</li>
                  <li>To measure affiliate program performance at the aggregate level</li>
                  <li>To comply with applicable law</li>
                </ul>
                <p className='mt-3'>We do not sell personal data to third parties. We do not use your data for advertising targeting outside of our site.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Cookies</h2>
                <p className='mb-3'>We use cookies for basic site functionality and analytics. Third-party cookies are set by:</p>
                <ul className='space-y-2 list-disc pl-6'>
                  <li><strong style={{ color: '#f5f5f5' }}>Affiliate networks</strong> (Amazon, AWIN, CJ Affiliate, Impact.com) — attribute purchases to our site</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Analytics providers</strong> — measure aggregate site usage</li>
                </ul>
                <p className='mt-3'>You can disable cookies in your browser settings. Some site functionality may be affected, but most content remains accessible.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Your Rights (GDPR / CCPA)</h2>
                <p className='mb-3'>Depending on your location, you may have rights to:</p>
                <ul className='space-y-2 list-disc pl-6'>
                  <li>Request a copy of personal data we hold about you</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt out of any data sharing (we do not sell data, so this is effectively always opted out)</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p className='mt-3'>
                  To exercise any of these rights, email us via our{' '}
                  <Link href='/contact' className='underline' style={{ color: '#f59e0b' }}>contact page</Link>
                  . We respond to GDPR requests within 30 days and CCPA requests within 45 days as required by law.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Data Retention</h2>
                <p>
                  Analytics data is retained for 26 months (standard provider default). Contact form submissions are retained for 3 years to support follow-up communications. Delete requests are processed within the timeframes above.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Children&apos;s Privacy</h2>
                <p>
                  SecureHomeGear is not intended for children under 13. We do not knowingly collect data from children. If you believe we have inadvertently collected data from a minor, contact us and we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Changes to This Policy</h2>
                <p>
                  We may update this privacy policy periodically. Material changes will be announced with an updated effective date at the top of this page.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <SHGFooter />
    </SHGLayout>
  );
}
