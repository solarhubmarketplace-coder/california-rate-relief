'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Shield } from 'lucide-react';
import { FloatingMobileCTA } from '@/components/landing/FloatingMobileCTA';
import { FOOTER_TRUST_LINKS, TRUST_LINKS } from '@/components/trust/trust-links';
import { SiteIdentityBlock } from '@/components/trust/SiteIdentityBlock';

// =============================================================================
// CRR footer (design pass 2, 2026-09-22)
//
// Ink surface rather than a brand-color band: in the neutral-publisher palette
// the brand color is kept for links, buttons and the one ask. The trust column
// is the set 22b §3 asks for — About, Editorial policy, How we make money,
// Methodology, Corrections, Sources we use, Privacy / Do not sell — read from
// components/trust/trust-links.ts so the footer and the pages cannot drift.
//
// Guide links (2026-09-23, topic map Block 5 §5.8, approved by Chad): the
// hub page of every topic hub that has one, and nothing else, so each hub is
// one click from every page and each hub lists its own guides. Hubs only, no
// spokes: the cost index is a spoke of the cost hub and is linked from it, and
// /blog stays in the header ("Guides"). /solar-cost and /solar-installers are
// still here (added 2026-09-18 because twenty /solar-cost city pages and eight
// installer reviews had no other inbound link). Same list as the hub pages in
// src/data/topic-hubs.ts; the news hub is added when its page exists.
// =============================================================================

const GUIDE_LINKS = [
  { href: '/solar-panels-california', label: 'Solar cost and value' },
  { href: '/solar-cost', label: 'Solar cost by city' },
  { href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california', label: 'Leases, PPAs and financing' },
  { href: '/blog/california-solar-tax-credit-2026', label: 'Solar incentives' },
  { href: '/best-solar-companies-california', label: 'Solar companies in California' },
  { href: '/solar-installers', label: 'Solar company reviews' },
  { href: '/solar-problems', label: 'Solar problems and scams' },
  { href: '/california-utility-rate-tracker', label: 'Utility rate tracker' },
  { href: '/blog/why-is-my-california-electric-bill-so-high', label: 'High electric bills' },
  { href: '/blog/nem-2-vs-nem-3-california', label: 'NEM 3.0 and net billing' },
  { href: '/blog/is-community-solar-worth-it', label: 'Community solar' },
  { href: '/battery', label: 'Home batteries' },
  { href: '/blog/is-my-roof-good-for-solar-california', label: 'Roofs and solar' },
  { href: '/solar-panel-maintenance-california', label: 'Solar panel maintenance' },
  { href: '/commercial-solar', label: 'Commercial solar' },
];

const linkClass =
  'text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline';
const headingClass =
  '!mb-4 !text-sm !font-semibold uppercase !tracking-wider text-white';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-foreground py-14 text-white'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
            {/* Brand */}
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <Image
                  src='/img/logo.svg'
                  alt='California Rate Relief'
                  width={40}
                  height={40}
                  className='h-10 w-10'
                />
                <div>
                  <span className='block text-lg font-bold tracking-tight text-white'>
                    California Rate Relief
                  </span>
                </div>
              </div>
              <p className='text-sm leading-relaxed text-white/80'>
                California Rate Relief collects residential and commercial
                project information and connects California property owners with
                solar providers for further review.
              </p>
              <div className='flex items-center gap-2'>
                <Shield className='h-4 w-4 text-white/70' aria-hidden='true' />
                <span className='text-xs font-medium text-white/80'>
                  Private referral service
                </span>
              </div>
              <p className='text-xs leading-relaxed text-white/70'>
                California Rate Relief is a private referral service. We are not
                a government agency or utility, and are not affiliated with or
                endorsed by any government agency, utility, or the CPUC.
              </p>
            </div>

            {/* Guides */}
            <div>
              <h2 className={headingClass}>Guides</h2>
              <ul className='space-y-2.5 text-sm'>
                {GUIDE_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href='https://www.cpuc.ca.gov/consumer-support/consumer-programs-az/solar-energy'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={linkClass}
                  >
                    CPUC consumer information
                  </a>
                </li>
              </ul>
            </div>

            {/* Trust and policies (22b §3.9) */}
            <div>
              <h2 className={headingClass}>Trust and policies</h2>
              <ul className='space-y-2.5 text-sm'>
                {FOOTER_TRUST_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className={headingClass}>Contact</h2>
              <ul className='space-y-4 text-sm'>
                <li className='flex items-start gap-3'>
                  <Mail className='mt-0.5 h-4 w-4 flex-shrink-0 text-white/70' aria-hidden='true' />
                  <div>
                    <a href='mailto:info@ratereliefca.com' className={`font-medium ${linkClass}`}>
                      info@ratereliefca.com
                    </a>
                    <span className='block text-xs text-white/70'>Email support</span>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <MapPin className='mt-0.5 h-4 w-4 flex-shrink-0 text-white/70' aria-hidden='true' />
                  <div>
                    <span className='block font-medium text-white/90'>
                      Serving all of California
                    </span>
                    <span className='text-xs text-white/70'>Statewide coverage</span>
                  </div>
                </li>
                <li>
                  <Link href={TRUST_LINKS.author.href} className={linkClass}>
                    About the author
                  </Link>
                </li>
              </ul>
              <SiteIdentityBlock className='mt-4 text-xs leading-relaxed text-white/80' linkClassName={linkClass} />
            </div>
          </div>

          {/* Bottom bar */}
          <div className='flex flex-col gap-3 border-t border-white/15 pt-6 text-sm md:flex-row md:items-center md:justify-between'>
            <p className='text-white/70'>
              &copy; {currentYear} California Rate Relief. All rights reserved.
            </p>
            <p className='flex flex-wrap gap-x-5 gap-y-2'>
              <Link href='/terms' className={linkClass}>
                Terms of service
              </Link>
              <Link href='/affiliate-disclosure' className={linkClass}>
                Referral service disclosure
              </Link>
            </p>
          </div>
        </div>
      </div>
      <FloatingMobileCTA />
    </footer>
  );
}
