'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { intakeHrefForPath, isCommercialIntentPath } from '@/lib/intake-routing';

export function Header() {
  const pathname = usePathname();
  const isCommercial = isCommercialIntentPath(pathname);

  return (
    <header className='bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center' aria-label='California Rate Relief home'>
            <Image
              src='/img/logo.svg'
              alt='California Rate Relief'
              width={36}
              height={36}
              className='h-9 w-9'
            />
            <div className='hidden min-[360px]:block ml-3'>
              <span className='font-bold text-foreground text-sm sm:text-lg tracking-tight'>
                California Rate Relief
              </span>
              <span className='text-xs text-muted-foreground block -mt-1 font-medium tracking-wide uppercase'>
                Solar referrals
              </span>
            </div>
          </Link>

          {/* Nav + CTA */}
          <div className='flex items-center gap-2 sm:gap-4'>
            <nav className='hidden lg:flex items-center gap-5'>
              <Link href='/tools/solar-panel-calculator' className='text-sm font-medium text-muted-foreground hover:text-foreground'>Calculator</Link>
              <Link href='/best-solar-companies-california' className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
                Solar Companies
              </Link>
              <Link href='/solar-panels-california' className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
                Solar in CA
              </Link>
              <Link href='/commercial-solar' className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
                Commercial
              </Link>
              <Link href='/blog' className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
                Blog
              </Link>
              <Link href='/about' className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
                About
              </Link>
            </nav>
            <Link href='/blog' className='hidden sm:block lg:hidden text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
              Blog
            </Link>
              <Button
                asChild
                size='sm'
                className='bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all text-sm'
              >
                <Link href={intakeHrefForPath(pathname)}>{isCommercial ? <><span className='sm:hidden'>Commercial</span><span className='hidden sm:inline'>Commercial Assessment</span></> : intakeHrefForPath(pathname)==='#solar-inquiry' ? 'Solar Inquiry' : 'Check Eligibility'}</Link>
              </Button>
              <Button
                asChild
                variant='outline'
                className='hidden xl:inline-flex border-border text-foreground hover:bg-muted font-medium'
              >
                <Link href='/login'>Login</Link>
              </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
