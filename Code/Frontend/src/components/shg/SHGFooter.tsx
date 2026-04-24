'use client';

import Link from 'next/link';

export function SHGFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='border-t py-16'
      style={{ backgroundColor: '#0a0f1c', borderColor: '#1e293b' }}
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-3 gap-10 mb-12'>
            {/* Brand */}
            <div className='space-y-4'>
              <Link href='/' className='flex items-center gap-2.5'>
                <div
                  className='w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-base'
                  style={{ backgroundColor: '#f59e0b', color: '#0a0f1c' }}
                >
                  SHG
                </div>
                <div className='flex flex-col'>
                  <span
                    className='font-bold text-xl tracking-tight leading-tight'
                    style={{ color: '#f5f5f5' }}
                  >
                    SecureHomeGear
                  </span>
                  <span
                    className='text-[10px] font-semibold tracking-widest uppercase leading-tight'
                    style={{ color: '#f59e0b' }}
                  >
                    Honest Home Security Reviews
                  </span>
                </div>
              </Link>
              <p
                className='text-sm leading-relaxed font-medium'
                style={{ color: '#d4d4d8' }}
              >
                Independent reviews of home security cameras, video doorbells,
                smart locks, and alarm systems. We help you find products that
                fit your home — with or without subscription lock-in.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h4
                className='font-bold text-lg mb-6 tracking-tight'
                style={{ color: '#f5f5f5' }}
              >
                Reviews
              </h4>
              <ul className='space-y-3'>
                {[
                  { label: 'Security Cameras', href: '/cameras' },
                  { label: 'Video Doorbells', href: '/cameras' },
                  { label: 'Ring Alternatives', href: '/alternatives/ring' },
                  { label: 'Blink Alternatives', href: '/alternatives/blink' },
                  { label: 'Nest Alternatives', href: '/alternatives/google-nest' },
                  { label: 'Compare Brands', href: '/compare/eufy-vs-ring' },
                ].map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className='font-medium transition-colors inline-flex items-center gap-2'
                      style={{ color: '#d4d4d8' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4
                className='font-bold text-lg mb-6 tracking-tight'
                style={{ color: '#f5f5f5' }}
              >
                About
              </h4>
              <ul className='space-y-3'>
                {[
                  { label: 'About & How We Test', href: '/about' },
                  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms of Service', href: '/terms' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='font-medium transition-colors inline-flex items-center gap-2'
                      style={{ color: '#d4d4d8' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='pt-8' style={{ borderTop: '1px solid #1e293b' }}>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <p className='text-sm font-medium' style={{ color: '#71717a' }}>
                &copy; {currentYear} SecureHomeGear. All rights reserved.
              </p>
              <p className='text-xs' style={{ color: '#52525b' }}>
                SecureHomeGear is reader-supported. When you buy through links
                on our site, we may earn an affiliate commission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
