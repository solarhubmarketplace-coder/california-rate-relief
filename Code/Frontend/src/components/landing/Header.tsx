'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className='bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src='/logo.svg'
              alt='Sun Speed'
              width={36}
              height={36}
              className='h-9 w-9'
            />
            <div className='xl:block ml-3'>
              <span className='font-bold text-foreground text-lg tracking-tight'>
                Sun Speed
              </span>
              <span className='text-xs text-muted-foreground block -mt-1 font-medium tracking-wide uppercase'>
                Rate Relief Program
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className='flex items-center gap-4'>
            <a
              href='tel:1-800-SUN-SPEED'
              className='hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              <Phone className='h-4 w-4' />
              <span>1-800-SUN-SPEED</span>
            </a>
            <Link href='#qualify'>
              <Button
                size='sm'
                className='bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all text-sm'
              >
                Check Eligibility
              </Button>
            </Link>
            <Link href='/login' className='hidden sm:block'>
              <Button
                variant='outline'
                className='border-border text-foreground hover:bg-muted font-medium'
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
