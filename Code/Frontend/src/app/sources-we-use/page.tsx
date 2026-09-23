/* DRAFT — Chad to confirm before release. */
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrustPageShell } from '@/components/trust/TrustPageShell';
import { TRUST_LINKS } from '@/components/trust/trust-links';

// =============================================================================
// /sources-we-use — CRR only (middleware 404s it on the other four hosts).
//
// Names the primary sources the site's figures are drawn from — the IRS, the
// CPUC, the California Energy Commission, the electric utilities and LBNL —
// with a one-line description of each publisher and a link to its own site.
// It makes no claim about which page uses which source; each page's own
// source list does that.
// =============================================================================

const PATH = TRUST_LINKS.sourcesWeUse.href;

const PRIMARY_SOURCES: { name: string; url?: string; what: string }[] = [
  {
    name: 'Internal Revenue Service (IRS)',
    url: 'https://www.irs.gov/',
    what: 'Federal tax law and tax-credit guidance.',
  },
  {
    name: 'California Public Utilities Commission (CPUC)',
    url: 'https://www.cpuc.ca.gov/',
    what: "The state regulator of California's investor-owned electric utilities: tariffs, net billing and consumer-protection decisions.",
  },
  {
    name: 'California Energy Commission (CEC)',
    url: 'https://www.energy.ca.gov/',
    what: "The state energy agency, including California's building energy code.",
  },
  {
    name: 'The electric utilities',
    what: "Each utility's own published tariff schedules and rate pages.",
  },
  {
    name: 'Lawrence Berkeley National Laboratory (LBNL)',
    url: 'https://emp.lbl.gov/',
    what: 'Research on installed solar and storage prices.',
  },
];

export const metadata: Metadata = {
  title: 'Sources We Use | California Rate Relief',
  description:
    'The primary sources behind the figures on California Rate Relief: the IRS, the CPUC, the California Energy Commission, the utilities and LBNL.',
  alternates: { canonical: PATH },
};

export default function SourcesWeUsePage() {
  return (
    <TrustPageShell
      title="Sources we use"
      lede="Figures on this site are drawn from primary sources, and they are dated."
      path={PATH}
    >
      <section>
        <h2>Primary sources</h2>
        <ul className="space-y-4">
          {PRIMARY_SOURCES.map((s) => (
            <li key={s.name} className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.name}
                  </a>
                ) : (
                  s.name
                )}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.what}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Checking a figure yourself</h2>
        <p>
          Pages link to the sources they cite, so a figure can be checked against the
          publisher&apos;s own page and the date it was checked.
        </p>
      </section>

      <section>
        <h2>When a source changes</h2>
        <p>
          Rates, credits and program rules move. Material corrections are logged, with dates, on
          the <Link href={TRUST_LINKS.corrections.href}>corrections page</Link>.
        </p>
      </section>

      <section>
        <h2>The wider reference list</h2>
        <p>
          The <Link href={TRUST_LINKS.methodology.href}>methodology page</Link> lists the wider set
          of references the site consults.
        </p>
      </section>
    </TrustPageShell>
  );
}
