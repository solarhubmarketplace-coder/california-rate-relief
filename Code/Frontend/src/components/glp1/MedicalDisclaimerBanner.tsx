import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

// =============================================================================
// MedicalDisclaimerBanner — YMYL / FDA first-line-of-defense banner
// =============================================================================
// Renders directly under the GLP1Header on every YMYL page (provider profiles,
// best-of pages, vs-pages, compounded-* pillar pages). The compliance posture
// of the site rests on this banner being above the fold AND on every monetized
// page where a user could click an affiliate CTA.
//
// Wording is deliberately specific:
//   - distinguishes compounded (NOT FDA-approved) from branded (Wegovy/Zepbound/
//     Mounjaro/Ozempic — FDA-approved for specific indications)
//   - names 503A vs 503B at point of disclosure so users see the regulatory
//     framework alongside the recommendation
//   - educational-only / consult-a-prescriber framing satisfies FTC 16 CFR 255
//     and FDA marketing rules for compounded GLP-1
//
// Do NOT soften this language without an attorney review.
// =============================================================================

export function MedicalDisclaimerBanner() {
  return (
    <div
      className='border-y-2'
      style={{ backgroundColor: '#FDF6E3', borderColor: '#C9A146' }}
      role='note'
      aria-label='Medical disclaimer'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-start gap-3'>
        <AlertCircle
          className='h-5 w-5 mt-0.5 flex-shrink-0'
          style={{ color: '#7A5A1A' }}
          aria-hidden='true'
        />
        <p
          className='text-xs md:text-sm leading-relaxed'
          style={{ color: '#3D2E0F' }}
        >
          <strong className='font-semibold'>Medical Disclaimer:</strong>{' '}
          Compounded GLP-1 medications (semaglutide, tirzepatide) are{' '}
          <strong>not FDA-approved</strong>; they are produced by state-licensed
          503A or 503B compounding pharmacies under patient-specific
          prescriptions. Branded products (Wegovy, Zepbound, Mounjaro, Ozempic)
          are FDA-approved for specific indications. Content on GLP1CompareHub
          is educational and is not medical advice — consult a licensed
          prescriber before starting, stopping, or modifying any GLP-1
          medication.{' '}
          <Link
            href='/disclaimer'
            className='underline font-semibold'
            style={{ color: '#5A4308' }}
          >
            Full medical disclaimer
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
