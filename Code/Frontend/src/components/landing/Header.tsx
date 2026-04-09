'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className='bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src='/img/logo.svg'
              alt='California Rate Relief Program'
              width={36}
              height={36}
              className='h-9 w-9'
            />
            <div className='xl:block ml-3'>
              <span className='font-bold text-foreground text-lg tracking-tight'>
                California Rate Relief
              </span>
              <span className='text-xs text-muted-foreground block -mt-1 font-medium tracking-wide uppercase'>
                Program
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className='flex items-center gap-4'>
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
