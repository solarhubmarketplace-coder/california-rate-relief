import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | California Rate Relief Program',
  description:
    'Privacy Policy for the California Rate Relief Program. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PublicLayout>
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto prose prose-slate'>
            <h1 className='text-3xl md:text-4xl font-extrabold text-foreground mb-2 tracking-tight'>
              Privacy Policy
            </h1>
            <p className='text-muted-foreground mb-8'>
              Last updated: April 14, 2026
            </p>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                1. Introduction
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The California Rate Relief Program (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is
                committed to protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you visit our
                website at ratereliefca.com and use our services.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                2. Information We Collect
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                We collect information you provide directly to us when you complete our
                qualification form, including your name, phone number, email address,
                home address, utility provider, monthly electric bill amount, homeownership
                status, and credit score range.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                We also automatically collect certain information when you visit our website,
                including your IP address, browser type, operating system, referring URLs,
                and information about how you interact with our website. We use tracking
                parameters such as Google Click IDs (gclid), Facebook Click IDs (fbclid),
                and UTM parameters (utm_source, utm_campaign, utm_content) to measure the
                effectiveness of our advertising.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                3. How We Use Your Information
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                We use the information we collect to determine your eligibility for the
                Rate Relief Program, to contact you regarding your inquiry and potential
                savings, to schedule and conduct savings assessments, to improve our website
                and services, and to comply with legal obligations.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                4. How We Share Your Information
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                We do not sell your personal information to third parties. We may share your
                information with service providers who assist us in operating our website and
                conducting our business, and when required by law or to protect our rights.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                5. Data Security
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                We implement appropriate technical and organizational measures to protect
                the security of your personal information, including SSL encryption for all
                data transmitted through our website.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                6. Your California Privacy Rights
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Under the California Consumer Privacy Act (CCPA) and the California Privacy
                Rights Act (CPRA), California residents have the right to know what personal
                information is collected, the right to delete personal information, the right
                to opt out of the sale of personal information, and the right to
                non-discrimination for exercising privacy rights.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                To exercise any of these rights, please contact us at{' '}
                <a
                  href='mailto:info@ratereliefca.com'
                  className='text-primary hover:underline'
                >
                  info@ratereliefca.com
                </a>
                .
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                7. Communications
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                By submitting your information through our qualification form, you consent
                to receive communications from us via phone, email, and SMS regarding the
                Rate Relief Program and your potential savings. You may opt out of
                communications at any time by replying STOP to any SMS message or contacting
                us at{' '}
                <a
                  href='mailto:info@ratereliefca.com'
                  className='text-primary hover:underline'
                >
                  info@ratereliefca.com
                </a>
                .
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                8. Changes to This Policy
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                We may update this Privacy Policy from time to time. We will notify you of
                any changes by posting the new Privacy Policy on this page and updating the
                &ldquo;Last updated&rdquo; date.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                9. Contact Us
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a
                  href='mailto:info@ratereliefca.com'
                  className='text-primary hover:underline'
                >
                  info@ratereliefca.com
                </a>
                .
              </p>
            </section>

            <div className='mt-12 pt-8 border-t border-border'>
              <Link
                href='/'
                className='text-primary hover:underline font-medium'
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
