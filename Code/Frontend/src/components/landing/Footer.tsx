'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Shield } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-primary border-t border-primary/20 py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-3 gap-10 mb-12'>
            {/* Brand */}
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='relative'>
                  <Image
                    src='/img/logo.svg'
                    alt='California Rate Relief Program'
                    width={40}
                    height={40}
                    className='h-10 w-10'
                  />
                </div>
                <div>
                  <span className='text-white font-bold text-xl tracking-tight block'>
                    California Rate Relief
                  </span>
                  <span className='text-white/80 text-xs font-medium tracking-wide uppercase'>
                    Program
                  </span>
                </div>
              </div>
              <p className='text-white/90 text-sm leading-relaxed font-medium'>
                Helping California homeowners reduce their energy bills through
                the Rate Relief Program. Licensed, bonded, and insured.
              </p>
              <div className='flex items-center gap-2 pt-2'>
                <Shield className='h-4 w-4 text-white/80' />
                <span className='text-white/80 text-xs font-medium'>
                  CPUC Licensed Provider
                </span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className='text-white font-bold text-lg mb-6 tracking-tight'>
                Contact Us
              </h4>
              <ul className='space-y-4'>
                <li className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center'>
                    <Mail className='h-5 w-5 text-white' />
                  </div>
                  <div>
                    <a
                      href='mailto:info@ratereliefca.com'
                      className='text-white font-semibold hover:text-white/80 transition-colors block'
                    >
                      info@ratereliefca.com
                    </a>
                    <span className='text-white/70 text-xs'>Email support</span>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-0.5'>
                    <MapPin className='h-5 w-5 text-white' />
                  </div>
                  <div>
                    <span className='text-white font-semibold block'>
                      Serving all of California
                    </span>
                    <span className='text-white/70 text-xs'>
                      Statewide coverage
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className='text-white font-bold text-lg mb-6 tracking-tight'>
                Information
              </h4>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='/privacy-policy'
                    className='text-white/90 hover:text-white font-medium transition-colors inline-flex items-center gap-2 group'
                  >
                    Privacy Policy
                    <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
                      &rarr;
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/terms-of-service'
                    className='text-white/90 hover:text-white font-medium transition-colors inline-flex items-center gap-2 group'
                  >
                    Terms of Service
                    <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
                      &rarr;
                    </span>
                  </Link>
                </li>
                <li>
                  <a
                    href='https://www.cpuc.ca.gov/consumer-support/consumer-programs-az/solar-energy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white/90 hover:text-white font-medium transition-colors inline-flex items-center gap-2 group'
                  >
                    CPUC Consumer Information
                    <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
                      &rarr;
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    href='/privacy-policy#california-privacy-rights'
                    className='text-white/90 hover:text-white font-medium transition-colors inline-flex items-center gap-2 group'
                  >
                    Do Not Sell My Information
                    <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
                      &rarr;
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='pt-8 border-t border-white/10'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <p className='text-white/80 text-sm font-medium'>
                &copy; {currentYear} California Rate Relief Program. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
