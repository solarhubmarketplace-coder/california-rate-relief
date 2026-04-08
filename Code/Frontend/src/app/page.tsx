'use client';

import { Suspense } from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import {
    Header,
    Hero,
    ValueProps,
    QualificationWizard,
    Footer,
} from '@/components/landing';

// Wrap QualificationWizard in Suspense for useSearchParams
function WizardWithSuspense() {
    return (
        <Suspense
            fallback={
                <section className='py-16 bg-muted/50'>
                    <div className='container mx-auto px-4'>
                        <div className='max-w-xl mx-auto bg-card rounded-2xl shadow-xl border border-border p-8'>
                            <div className='animate-pulse space-y-4'>
                                <div className='h-4 bg-muted rounded w-1/3'></div>
                                <div className='h-8 bg-muted rounded'></div>
                                <div className='grid grid-cols-2 gap-3'>
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className='h-20 bg-muted/50 rounded-xl'></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        >
            <QualificationWizard />
        </Suspense>
    );
}

export default function HomePage() {
    return (
        <PublicLayout>
            <Header />
            <main>
                <Hero />
                <WizardWithSuspense />
                <ValueProps />
            </main>
            <Footer />
        </PublicLayout>
    );
}
