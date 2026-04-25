import { ExternalLink, ShieldCheck } from 'lucide-react';

// =============================================================================
// VerifyInstallerBox — encourages readers to verify installer info at the source
// =============================================================================
// Used on CRR installer review pages. Provides direct outbound links to:
//   - CSLB License Lookup
//   - BBB Search
//   - CPUC Decision Search
//   - Optional CSLB direct license URL when we have the number
//
// Strong 2026 trust signal: editorial willingness to point readers to
// primary sources for independent verification. All links use
// rel="noopener external" — NOT nofollow — so search engines treat them
// as the trust signal they are.
// =============================================================================

interface Props {
  /** Installer brand name, used in the search-pre-fill link text. */
  installerName: string;
  /** CSLB license number (e.g., "1015697"), if known. */
  cslbLicenseNumber?: string;
  /** BBB profile URL (if we have it directly). */
  bbbProfileUrl?: string;
}

export function VerifyInstallerBox({ installerName, cslbLicenseNumber, bbbProfileUrl }: Props) {
  const cslbUrl = cslbLicenseNumber
    ? `https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=${cslbLicenseNumber}`
    : 'https://www.cslb.ca.gov/onlineservices/checklicenseii/checklicense.aspx';
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
                — confirm active license, bond, classification, disciplinary actions
              </span>
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
                — federal 30% solar tax credit reference (Form 5695)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
