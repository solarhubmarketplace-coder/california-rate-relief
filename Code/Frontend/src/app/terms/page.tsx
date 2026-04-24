import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — SecureHomeGear',
  description: 'Terms of use for SecureHomeGear.com — copyright, disclaimers, limitations of liability, and governing law.',
  alternates: { canonical: 'https://securehomegear.com/terms' },
};

export default function TermsSHG() {
  return (
    <SHGLayout>
      <SHGHeader />
      <main className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: '#71717a' }}>
              <Link href='/' style={{ color: '#d4d4d8' }}>Home</Link>
              <ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f5f5f5' }}>Terms of Service</span>
            </nav>

            <header className='mb-10'>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>Terms of Service</h1>
              <p className='text-lg' style={{ color: '#d4d4d8' }}>Effective date: April 2026. By using SecureHomeGear.com, you agree to the terms below.</p>
            </header>

            <div className='space-y-8 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>1. Acceptance of Terms</h2>
                <p>Access to and use of SecureHomeGear.com (the &quot;Site&quot;) is conditioned on your acceptance of these Terms of Service. If you disagree, please do not use the Site.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>2. Editorial Content and Opinions</h2>
                <p className='mb-3'>Product reviews, comparisons, and recommendations on SecureHomeGear represent our independent editorial judgment based on research, public product information, aggregated customer feedback, and where applicable, hands-on testing. Opinions expressed are the author&apos;s and do not constitute professional advice.</p>
                <p>We strive for accuracy but make no warranty that content is free from errors. If you spot a factual error, please <Link href='/contact' className='underline' style={{ color: '#f59e0b' }}>contact us</Link> and we will correct it.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>3. Affiliate Relationships</h2>
                <p>SecureHomeGear may earn affiliate commissions when visitors purchase products through links on the Site. Full disclosure on our <Link href='/affiliate-disclosure' className='underline' style={{ color: '#f59e0b' }}>affiliate disclosure page</Link>. Affiliate relationships do not alter our editorial recommendations.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>4. Intellectual Property</h2>
                <p>All original content, text, logos, and graphics on SecureHomeGear are owned by us or licensed to us. You may share brief excerpts (up to 100 words) with attribution and a link back. Republishing full articles requires written permission.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>5. No Warranty</h2>
                <p>SecureHomeGear content is provided &quot;as is&quot; without warranties of any kind, either express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. Product pricing, feature availability, and third-party service terms change frequently — we verify at publish time but cannot guarantee real-time accuracy. Check the manufacturer website and retailer before purchase.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>6. Limitation of Liability</h2>
                <p>SecureHomeGear, its owners, employees, and contributors will not be liable for any indirect, incidental, consequential, or punitive damages arising from use of the Site or any product purchased through links on the Site. Your exclusive remedy for dissatisfaction with the Site is to stop using it.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>7. Third-Party Content and Links</h2>
                <p>SecureHomeGear links to third-party retailers, manufacturers, and content. We are not responsible for third-party content, product quality, pricing, shipping, returns, or warranty fulfillment. All purchases are made directly with the third-party retailer under their own terms.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>8. Governing Law</h2>
                <p>These Terms are governed by the laws of the United States and the state where SecureHomeGear operates. Disputes will be resolved in the appropriate courts of that jurisdiction.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>9. Changes to These Terms</h2>
                <p>We may update these Terms periodically. Material changes will be announced with an updated effective date at the top of this page. Continued use after changes constitutes acceptance.</p>
              </section>

              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>10. Contact</h2>
                <p>Questions about these Terms — use our <Link href='/contact' className='underline' style={{ color: '#f59e0b' }}>contact page</Link>.</p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <SHGFooter />
    </SHGLayout>
  );
}
