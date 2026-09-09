import type { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CommercialAssessmentForm } from '@/components/landing/CommercialAssessmentForm';

export const metadata: Metadata = {
  title: 'Commercial Solar Project Assessment | California Rate Relief',
  description: 'Share the basic details of a California commercial solar project for review by California Rate Relief and a matched commercial solar provider.',
  alternates: { canonical: 'https://ratereliefca.com/commercial-assessment' },
  robots: { index: false, follow: true },
};

export default function CommercialAssessmentPage() {
  return (
    <PublicLayout>
      <Header />
      <main className='bg-slate-50 py-12 md:py-16'>
        <div className='container mx-auto max-w-4xl px-4'>
          <div className='mx-auto mb-8 max-w-3xl text-center'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-wider text-primary'>California commercial solar</p>
            <h1 className='text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl'>Tell us about the property and the project</h1>
            <p className='mt-4 text-lg leading-8 text-slate-600'>
              California Rate Relief is a private referral service. We collect the project basics and make them available for review by a matched commercial solar provider.
            </p>
          </div>
          <CommercialAssessmentForm />
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
