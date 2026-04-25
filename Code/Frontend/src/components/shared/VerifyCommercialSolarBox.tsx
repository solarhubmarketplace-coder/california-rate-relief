import { ExternalLink, Building2 } from 'lucide-react';

// =============================================================================
// VerifyCommercialSolarBox — primary-source links for CRR commercial-solar pages
// =============================================================================
// Commercial solar buyers are heavily regulated. This box surfaces the
// primary sources a CRE owner / property manager should consult before any
// project: CSLB for contractor licensing, CPUC for VNEM and tariff rules,
// CEC for Title 24 requirements, IRS Section 48 for the commercial ITC,
// CPACE program for financing, SGIP for battery storage incentives.
//
// All links use rel="noopener external" — NOT nofollow. These are
// editorial citations, not affiliate links.
// =============================================================================

interface Props {
  /** Optional topic emphasis to surface only the most relevant links. */
  topic?: 'general' | 'financing' | 'cpace' | 'sgip' | 'title24' | 'vnem';
}

interface SourceLink { name: string; url: string; description: string; }

const ALL_LINKS: Record<string, SourceLink> = {
  cslb: {
    name: 'CSLB License Lookup',
    url: 'https://www.cslb.ca.gov/onlineservices/checklicenseii/checklicense.aspx',
    description: 'Verify any commercial solar contractor — active C-46 license, bond, classification, and disciplinary history.',
  },
  cpuc: {
    name: 'CPUC Net Energy Metering / NBT',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering',
    description: 'Authoritative source for NEM 3 / Net Billing Tariff rules affecting commercial export compensation.',
  },
  vnem: {
    name: 'CPUC Virtual Net Metering (VNEM)',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering/expanded-virtual-net-energy-metering',
    description: 'CPUC docs on Virtual Net Metering / NEM Aggregation for multi-meter properties (apartments, mixed-use).',
  },
  cec: {
    name: 'California Energy Commission — Title 24',
    url: 'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards',
    description: 'Title 24 building energy efficiency standards including the commercial solar mandate for new construction.',
  },
  irs48: {
    name: 'IRS — Investment Tax Credit (Section 48)',
    url: 'https://www.irs.gov/businesses/energy-incentives-for-individuals-businesses-and-utilities',
    description: 'Federal Investment Tax Credit for commercial solar (separate from the residential 25D credit).',
  },
  cpace: {
    name: 'CaliforniaFIRST / CSCDA C-PACE',
    url: 'https://www.cscda.org/PACE',
    description: 'California Statewide Communities Development Authority C-PACE financing program.',
  },
  sgip: {
    name: 'Self-Generation Incentive Program (SGIP)',
    url: 'https://www.selfgenca.com/',
    description: 'CPUC-funded battery storage incentive — meaningful rebates for commercial properties, especially in HFTD zones.',
  },
  treasury: {
    name: 'US Treasury — Direct Pay & Transferability',
    url: 'https://home.treasury.gov/policy-issues/inflation-reduction-act',
    description: 'Treasury guidance on Inflation Reduction Act provisions: direct pay (for tax-exempt entities), credit transferability.',
  },
};

const TOPIC_LINKS: Record<string, (keyof typeof ALL_LINKS)[]> = {
  general: ['cslb', 'cpuc', 'cec', 'irs48', 'cpace', 'sgip'],
  financing: ['irs48', 'cpace', 'treasury', 'sgip'],
  cpace: ['cpace', 'cslb', 'irs48'],
  sgip: ['sgip', 'cslb', 'cpuc'],
  title24: ['cec', 'cslb', 'irs48'],
  vnem: ['vnem', 'cpuc', 'cslb', 'cec'],
};

export function VerifyCommercialSolarBox({ topic = 'general' }: Props) {
  const links = TOPIC_LINKS[topic].map((k) => ALL_LINKS[k]);
  return (
    <aside
      className='my-8 rounded-xl border border-border bg-card p-5'
      aria-label='Primary regulatory and program sources for California commercial solar'
    >
      <div className='flex items-start gap-3'>
        <div className='flex-shrink-0 mt-0.5'>
          <Building2 className='h-5 w-5 text-primary' aria-hidden='true' />
        </div>
        <div className='flex-1 min-w-0'>
          <h3 className='font-bold text-foreground mb-1'>Verify with regulators and program offices</h3>
          <p className='text-sm text-muted-foreground mb-3'>
            Commercial solar decisions involve six- and seven-figure outlays. These primary sources let you confirm any claim we make at the regulator or program office:
          </p>
          <ul className='space-y-2 text-sm'>
            {links.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target='_blank'
                  rel='noopener external'
                  className='font-semibold text-primary underline inline-flex items-center gap-1'
                >
                  {l.name}
                  <ExternalLink className='h-3 w-3 flex-shrink-0' aria-hidden='true' />
                </a>
                <span className='text-muted-foreground'> — {l.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
