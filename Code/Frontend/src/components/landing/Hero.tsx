'use client';

import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className='relative bg-gradient-to-b from-muted/30 to-background py-16 md:py-24 overflow-hidden'>
      {/* Faint California Map Outline */}
      <div className='absolute inset-0 pointer-events-none opacity-[0.02]'>
        <svg
          viewBox='0 0 400 600'
          className='h-full w-auto mx-auto'
          fill='currentColor'
        >
          <path d='M180,20 L200,25 L220,20 L240,30 L260,25 L280,35 L290,50 L285,70 L290,90 L300,110 L310,130 L320,150 L325,170 L330,190 L335,210 L340,230 L345,250 L350,270 L355,290 L360,310 L365,330 L370,350 L365,370 L355,390 L340,410 L320,430 L295,450 L270,470 L250,485 L230,495 L210,505 L190,510 L170,515 L150,510 L130,500 L115,485 L105,465 L100,445 L95,425 L90,405 L85,385 L80,365 L75,345 L70,325 L65,305 L60,285 L55,265 L50,245 L55,225 L65,205 L80,185 L95,165 L110,145 L125,125 L140,105 L155,85 L165,65 L170,45 L180,20 Z' />
        </svg>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Official Badge */}
          <div className='inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-8 shadow-sm'>
            <Shield className='h-4 w-4 text-primary' />
            <span className='text-sm font-semibold text-primary tracking-wide'>
              2026 California Rate Relief Program
            </span>
          </div>

          {/* Main Headline */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-8 tracking-[-0.03em]'>
            <span className='block'>California Homeowners:</span>
            <div className='flex flex-col items-center text-center text-5xl'>
              <span className='block mt-1 md:mt-2'>
                You Could Cut Your Monthly
              </span>
              <span className='block mt-1 md:mt-2'>
                Electric Bill by{' '}
                <span className='text-primary font-black relative inline-block'>
                  Up to 50%
                  <span className='absolute -bottom-1 left-0 right-0 h-2 md:h-3 bg-primary/20 -z-10 transform -skew-x-12'></span>
                </span>
              </span>
            </div>
          </h1>

          {/* Sub-headline */}
          <p className='text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-medium'>
            Qualify for the 2026 Rate Relief Program. Swap your high utility
            rate for a lower, fixed rate.{' '}
            <span className='font-bold text-foreground'>
              No Loans. No Debt. $0 Down.
            </span>
          </p>

          {/* CTA Button */}
          <div className='mb-8'>
            <Link href='#qualify'>
              <Button
                size='default'
                className='bg-primary hover:bg-primary/90 text-primary-foreground text-base px-6 py-2.5 h-auto font-semibold shadow-md hover:shadow-lg transition-all duration-200'
              >
                Check My Eligibility
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className='flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-foreground'>
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-4 w-4 text-status-success' />
              <span>Free Qualification Check</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-4 w-4 text-status-success' />
              <span>Takes 60 Seconds</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-4 w-4 text-status-success' />
              <span>No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
