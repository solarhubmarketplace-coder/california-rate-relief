import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { ChevronRight, Mail, MessageCircle, AlertCircle, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact GreenReviewsHub',
  description:
    'Get in touch with GreenReviewsHub, questions, corrections, partnerships, and press inquiries.',
  alternates: {
    canonical: '/reviews/contact',
  },
};

export default function ContactPage() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link href='/reviews' className='hover:text-primary transition-colors'>
                Reviews
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>Contact</span>
            </nav>

            <header className='mb-12'>
              <h1 className='text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight'>
                Get in Touch
              </h1>
              <p className='text-xl text-foreground/80 leading-relaxed'>
                We read every email. Whether you have a question, spotted a mistake, or want to
                work with us — here&apos;s how to reach us.
              </p>
            </header>

            <div className='grid md:grid-cols-2 gap-6 mb-12'>
              <div className='p-6 border border-border rounded-xl bg-card'>
                <div className='flex items-center gap-3 mb-3'>
                  <MessageCircle className='h-5 w-5 text-primary' />
                  <h2 className='text-lg font-bold text-foreground'>General Inquiries</h2>
                </div>
                <p className='text-foreground/80 text-sm mb-4'>
                  Questions about a product, a review, or our site in general.
                </p>
                <a
                  href='mailto:hello@greenreviewshub.com'
                  className='text-primary hover:underline font-medium text-sm'
                >
                  hello@greenreviewshub.com
                </a>
                <p className='text-xs text-muted-foreground mt-2'>Typical response: 2-3 business days</p>
              </div>

              <div className='p-6 border border-border rounded-xl bg-card'>
                <div className='flex items-center gap-3 mb-3'>
                  <AlertCircle className='h-5 w-5 text-primary' />
                  <h2 className='text-lg font-bold text-foreground'>Corrections</h2>
                </div>
                <p className='text-foreground/80 text-sm mb-4'>
                  Spotted a factual error, outdated spec, or broken link? Tell us and we&apos;ll
                  fix it.
                </p>
                <a
                  href='mailto:corrections@greenreviewshub.com'
                  className='text-primary hover:underline font-medium text-sm'
                >
                  corrections@greenreviewshub.com
                </a>
                <p className='text-xs text-muted-foreground mt-2'>We review within 48 hours</p>
              </div>

              <div className='p-6 border border-border rounded-xl bg-card'>
                <div className='flex items-center gap-3 mb-3'>
                  <Briefcase className='h-5 w-5 text-primary' />
                  <h2 className='text-lg font-bold text-foreground'>Partnerships &amp; Press</h2>
                </div>
                <p className='text-foreground/80 text-sm mb-4'>
                  Media inquiries, brand collaborations, review samples, and affiliate program
                  discussions.
                </p>
                <a
                  href='mailto:partnerships@greenreviewshub.com'
                  className='text-primary hover:underline font-medium text-sm'
                >
                  partnerships@greenreviewshub.com
                </a>
                <p className='text-xs text-muted-foreground mt-2'>Typical response: 5 business days</p>
              </div>

              <div className='p-6 border border-border rounded-xl bg-card'>
                <div className='flex items-center gap-3 mb-3'>
                  <Mail className='h-5 w-5 text-primary' />
                  <h2 className='text-lg font-bold text-foreground'>Privacy &amp; Legal</h2>
                </div>
                <p className='text-foreground/80 text-sm mb-4'>
                  GDPR/CCPA data requests, legal notices, and takedown requests.
                </p>
                <a
                  href='mailto:privacy@greenreviewshub.com'
                  className='text-primary hover:underline font-medium text-sm'
                >
                  privacy@greenreviewshub.com
                </a>
                <p className='text-xs text-muted-foreground mt-2'>
                  GDPR/CCPA requests handled within 30 days
                </p>
              </div>
            </div>

            {/* Who we are */}
            <section className='p-6 border border-border rounded-xl bg-card mb-8'>
              <h2 className='text-xl font-bold text-foreground mb-3'>Who You&apos;re Reaching</h2>
              <p className='text-foreground/80 leading-relaxed mb-3'>
                GreenReviewsHub is an independent publication covering portable power stations,
                electric bikes, smart home devices, electric lawn equipment, mini split HVAC
                systems, and related green-energy products. We&apos;re a small, US-based team
                focused on getting product recommendations right for actual buyers.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Read more about our{' '}
                <Link href='/reviews/about' className='text-primary hover:underline'>
                  editorial standards and testing methodology
                </Link>
                , or review our{' '}
                <Link
                  href='/reviews/affiliate-disclosure'
                  className='text-primary hover:underline'
                >
                  affiliate disclosure
                </Link>
                .
              </p>
            </section>

            {/* Brands */}
            <section className='p-6 border border-primary/30 bg-primary/5 rounded-xl'>
              <h2 className='text-xl font-bold text-foreground mb-3'>For Brands &amp; Manufacturers</h2>
              <p className='text-foreground/80 leading-relaxed mb-3'>
                We welcome product samples for review consideration. We do not accept payment for
                positive coverage, guaranteed placement in rankings, or sponsored reviews
                disguised as editorial content. If that&apos;s the pitch, please don&apos;t
                bother sending it.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                If you&apos;d like to submit a product for review, email{' '}
                <a
                  href='mailto:partnerships@greenreviewshub.com'
                  className='text-primary hover:underline'
                >
                  partnerships@greenreviewshub.com
                </a>{' '}
                with product specs, retail price, any press materials, and shipping address
                confirmation. Note: we decline more samples than we accept, based on category fit
                and editorial schedule.
              </p>
            </section>
          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
