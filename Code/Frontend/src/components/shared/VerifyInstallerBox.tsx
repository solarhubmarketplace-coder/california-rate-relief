import { ExternalLink, ShieldCheck } from 'lucide-react';

// =============================================================================
// VerifyInstallerBox — encourages readers to verify installer info at the source
// =============================================================================
// Used on CRR installer review pages. Provides direct outbound links to:
//   - CSLB License Lookup
//   - BBB Search
//   - CPUC Decision Search
//   - The license number(s) on record for the company, each with where the
//     number comes from and the CSLB status on the date it was checked
//
// A license number is shown only when a primary source ties it to the company:
// the utility interconnection records in California DG Stats (CPUC), the
// CSLB record itself, or the company's own license page. CSLB's lookup does
// not accept deep links (a LicNum URL redirects to the blank search form), so
// the box links the lookup and prints the number to enter.
//
// All links use rel="noopener external" — NOT nofollow — so search engines
// treat them as the trust signal they are.
// =============================================================================

export const CSLB_LOOKUP_URL =
  'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';

/** Source line for numbers taken from the CPUC's DG Stats interconnection data. */
export const DGSTATS_LICENSE_BASIS =
  'as reported on utility interconnection applications in California DG Stats (CPUC), data through May 31, 2026';

export interface InstallerLicense {
  /** CSLB license number, digits only. */
  number: string;
  /** Business name exactly as the CSLB record shows it. */
  holder: string;
  /** Why this number belongs to the company, with its source. */
  basis: string;
  /** The CSLB "License Status" line, in plain words. */
  status: string;
  /** Date the CSLB record was checked, e.g. "September 24, 2026". */
  checked: string;
}

interface Props {
  /** Installer brand name, used in the search-pre-fill link text. */
  installerName: string;
  /** License number(s) tied to the company by a primary source. */
  licenses?: InstallerLicense[];
  /** BBB profile URL (if we have it directly). */
  bbbProfileUrl?: string;
}

export function VerifyInstallerBox({ installerName, licenses, bbbProfileUrl }: Props) {
  const cslbUrl = CSLB_LOOKUP_URL;
  const bbbUrl =
    bbbProfileUrl ||
    `https://www.bbb.org/search?find_country=USA&find_text=${encodeURIComponent(installerName)}`;

  return (
    <aside
      className='my-8 rounded-xl border border-border bg-card p-5'
      aria-label={`Verify ${installerName} at primary sources`}
    >
      <div className='flex items-start gap-3'>
        <div className='flex-shrink-0 mt-0.5'>
          <ShieldCheck className='h-5 w-5 text-primary' aria-hidden='true' />
        </div>
        <div className='flex-1 min-w-0'>
          <h3 className='font-bold text-foreground mb-1'>Verify {installerName} yourself</h3>
          <p className='text-sm text-muted-foreground mb-3'>
            Don&apos;t trust our review on faith. Look up {installerName} in California&apos;s primary regulatory and consumer-protection databases:
          </p>
          <ul className='space-y-2 text-sm'>
            <li>
              <a
                href={cslbUrl}
                target='_blank'
                rel='noopener external'
                className='font-semibold text-primary underline inline-flex items-center gap-1'
              >
                CSLB license lookup
                <ExternalLink className='h-3 w-3 flex-shrink-0' aria-hidden='true' />
              </a>
              <span className='text-muted-foreground'>
                {' '}
                — enter the license number to confirm active license, bond, classification, disciplinary actions
              </span>
              {licenses && licenses.length > 0 ? (
                <ul className='mt-2 space-y-2 border-l-2 border-border pl-3'>
                  {licenses.map((lic) => (
                    <li key={lic.number} className='text-muted-foreground'>
                      <span className='font-semibold text-foreground'>CSLB #{lic.number}</span>
                      {' '}({lic.holder}), {lic.basis}. CSLB status on {lic.checked}: {lic.status}.
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
            <li>
              <a
                href={bbbUrl}
                target='_blank'
                rel='noopener external'
                className='font-semibold text-primary underline inline-flex items-center gap-1'
              >
                BBB profile search
                <ExternalLink className='h-3 w-3 flex-shrink-0' aria-hidden='true' />
              </a>
              <span className='text-muted-foreground'>
                {' '}
                — read complaint volume and resolution patterns
              </span>
            </li>
            <li>
              <a
                href='https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering'
                target='_blank'
                rel='noopener external'
                className='font-semibold text-primary underline inline-flex items-center gap-1'
              >
                CPUC NEM 3 / Net Billing
                <ExternalLink className='h-3 w-3 flex-shrink-0' aria-hidden='true' />
              </a>
              <span className='text-muted-foreground'>
                {' '}
                — verify any rate / interconnection claims at the source
              </span>
            </li>
            <li>
              <a
                href='https://www.irs.gov/credits-deductions/residential-clean-energy-credit'
                target='_blank'
                rel='noopener external'
                className='font-semibold text-primary underline inline-flex items-center gap-1'
              >
                IRS Residential Clean Energy Credit
                <ExternalLink className='h-3 w-3 flex-shrink-0' aria-hidden='true' />
              </a>
              <span className='text-muted-foreground'>
                {' '}
                — IRS page for the residential credit, which ended for
                expenditures made after December 31, 2025 (Form 5695)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
