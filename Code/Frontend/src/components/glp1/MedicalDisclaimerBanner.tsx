import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

/**
 * Medical / FDA disclaimer banner.
 *
 * Surfaced ABOVE the first medical claim on every page that discusses
 * GLP-1 medications, compounded telehealth, or specific provider efficacy.
 *
 * Why this exists:
 * - FDA issued 30+ warning letters to GLP-1 telehealth companies in March 2026
 *   for misleading compounded-drug claims and unsubstantiated efficacy.
 * - FTC final order against NextMed (Dec 2025) sets the regulatory floor.
 * - Affiliate sites covering YMYL health content carry the same exposure.
 *
 * This banner is the first line of compliance defense.
 */
export function MedicalDisclaimerBanner() {
  return (
    <div className="border-b border-yellow-200 bg-yellow-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3">
        <div className="flex items-start gap-3 text-xs md:text-sm" style={{ color: '#7A4F00' }}>
          <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#B8860B' }} />
          <div className="leading-relaxed">
            <strong>Educational content — not medical advice.</strong>{' '}
            Information on this page is for educational purposes only and is not a substitute for advice from a licensed physician. GLP-1 medications carry meaningful risks; speak with your doctor before starting any treatment.{' '}
            Compounded GLP-1 medications are <strong>not FDA-approved</strong> and clinical evidence is less robust than for FDA-approved branded products (Wegovy, Zepbound, Ozempic, Mounjaro).{' '}
            <Link href="/medical-disclaimer" className="underline font-semibold">
              Read our full medical disclaimer
            </Link>
            {' · '}
            <a
              href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/medications-containing-semaglutide-marketed-type-2-diabetes-or-weight-loss"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              FDA on compounded GLP-1
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
