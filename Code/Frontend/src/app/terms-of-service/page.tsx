import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | California Rate Relief Program',
  description:
    'Terms of Service for the California Rate Relief Program website and qualification services.',
  alternates: {
    canonical: '/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <PublicLayout>
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto prose prose-slate'>
            <h1 className='text-3xl md:text-4xl font-extrabold text-foreground mb-2 tracking-tight'>
              Terms of Service
            </h1>
            <p className='text-muted-foreground mb-8'>
              Last updated: April 14, 2026
            </p>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                1. Acceptance of Terms
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                By accessing and using the California Rate Relief Program website
                (ratereliefca.com), you accept and agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                2. Description of Service
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The California Rate Relief Program provides a qualification service to help
                California homeowners determine their eligibility for solar energy programs
                that may reduce their monthly electric bills. Our website collects
                information through a qualification form and connects eligible homeowners
                with savings assessment consultations.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                3. Eligibility
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The Rate Relief Program is available to California homeowners who receive
                electricity from a supported utility provider (SCE, PG&E, SDG&E, MVU, or
                LADWP). Renters are not eligible for this program. Additional eligibility
                requirements may apply and will be discussed during your savings assessment.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                4. No Guarantee of Savings
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                While we strive to provide accurate savings estimates, actual savings may
                vary based on factors including energy usage patterns, roof condition and
                orientation, local weather conditions, utility rate changes, and system
                performance. Pre-qualification through our website does not guarantee final
                program approval or specific savings amounts.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                5. User Obligations
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                You agree to provide accurate and complete information when using our
                qualification form. You agree not to use our website for any unlawful
                purpose or in any way that could damage, disable, or impair the website.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                6. Communications Consent
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                By submitting your qualification form, you expressly consent to receive
                communications from the California Rate Relief Program via telephone (including
                automated calls and AI-assisted calls on recorded lines), SMS/text messages,
                and email regarding your inquiry and the Rate Relief Program. Message and data
                rates may apply. You may opt out at any time by replying STOP to any text
                message or emailing{' '}
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
                7. Intellectual Property
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                All content on this website, including text, graphics, logos, and software,
                is the property of the California Rate Relief Program and is protected by
                copyright and other intellectual property laws.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                8. Limitation of Liability
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The California Rate Relief Program shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising from your
                use of the website or services. Our total liability shall not exceed the
                amount you have paid us, if any.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                9. CPUC Compliance
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The California Rate Relief Program operates in compliance with the
                California Public Utilities Commission (CPUC) regulations. For consumer
                information and resources about solar energy in California, visit the{' '}
                <a
                  href='https://www.cpuc.ca.gov/consumer-support/consumer-programs-az/solar-energy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  CPUC Solar Consumer Protection page
                </a>
                .
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                10. Governing Law
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                These Terms of Service shall be governed by and construed in accordance with
                the laws of the State of California, without regard to its conflict of law
                provisions.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                11. Changes to Terms
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                We reserve the right to modify these Terms of Service at any time. Changes
                will be effective immediately upon posting to this page. Your continued use
                of the website after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>
                12. Contact Us
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                If you have any questions about these Terms of Service, please contact us at{' '}
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
