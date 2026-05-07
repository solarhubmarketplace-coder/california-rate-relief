/**
 * Internal-link-equity component for glp1comparehub.com.
 * Renders a "Related Guides" grid that links to all OTHER GLP-1 content
 * pages, excluding the page it's used on.
 *
 * Usage:
 *   <RelatedGuides currentPath="/tirzepatide-near-me" />
 *
 * Expanded 2026-05-06: 10 → 46 links covering all live clusters
 * (tirzepatide, semaglutide, microdosing, format/pill, peptide+stack,
 *  compliance, compare, tools).
 */

import Link from 'next/link';

interface RelatedLink {
  href: string;
  title: string;
  description: string;
  /** Used to show a relevant section subset when a cluster prop is passed */
  cluster: string;
}

const RELATED_LINKS: RelatedLink[] = [
  // ── Core head-to-head comparisons ─────────────────────────────────────────
  {
    href: '/tirzepatide-vs-semaglutide',
    title: 'Tirzepatide vs Semaglutide',
    description: 'Two molecules side-by-side with NEJM-cited trial data — 20.9% vs 14.9% weight loss.',
    cluster: 'compare',
  },
  {
    href: '/zepbound-vs-wegovy',
    title: 'Zepbound vs Wegovy',
    description: 'Branded battle + the insurance-vs-cash-pay loophole that changes the math.',
    cluster: 'compare',
  },
  {
    href: '/ozempic-vs-mounjaro',
    title: 'Ozempic vs Mounjaro',
    description: 'Once-weekly injectables compared on efficacy, side effects, and cost in 2026.',
    cluster: 'compare',
  },
  {
    href: '/wegovy-vs-mounjaro',
    title: 'Wegovy vs Mounjaro',
    description: 'Weight-loss head-to-head with STEP-1 and SURMOUNT-1 trial data.',
    cluster: 'compare',
  },
  {
    href: '/semaglutide-vs-wegovy',
    title: 'Semaglutide vs Wegovy — Are They Different?',
    description: 'Answer-first: sema IS Wegovy. The $16,200 vs $1,188 annual cost breakdown.',
    cluster: 'compare',
  },
  {
    href: '/tirzepatide-vs-zepbound',
    title: 'Tirzepatide vs Zepbound — Same Drug?',
    description: 'Clarity page: tirzepatide IS Zepbound. Branded vs compounded cost math.',
    cluster: 'compare',
  },

  // ── Tirzepatide cluster ────────────────────────────────────────────────────
  {
    href: '/compounded-tirzepatide',
    title: 'Compounded Tirzepatide Guide',
    description: 'Post-April 2026 FDA framing + verified provider pricing.',
    cluster: 'tirzepatide',
  },
  {
    href: '/best-compounded-tirzepatide',
    title: 'Best Compounded Tirzepatide 2026',
    description: '6 verified telehealth programs ranked by price, support, and value.',
    cluster: 'tirzepatide',
  },
  {
    href: '/cheapest-compounded-tirzepatide',
    title: 'Cheapest Compounded Tirzepatide',
    description: 'Price table: TMates $167, MEDVi $179-299, Eden $229-299 vs Zepbound $1,086.',
    cluster: 'tirzepatide',
  },
  {
    href: '/tirzepatide-near-me',
    title: 'Tirzepatide Near Me',
    description: 'Local clinic vs telehealth — telehealth wins 4 of 5 criteria.',
    cluster: 'tirzepatide',
  },
  {
    href: '/tirzepatide-before-and-after',
    title: 'Tirzepatide Before & After',
    description: 'SURMOUNT-1 trial data + realistic month-by-month timeline.',
    cluster: 'tirzepatide',
  },
  {
    href: '/tirzepatide-tablets',
    title: 'Tirzepatide Tablets — Do They Exist?',
    description: 'FDA status + the 4 oral formats that actually exist right now.',
    cluster: 'tirzepatide',
  },
  {
    href: '/oral-tirzepatide',
    title: 'Oral Tirzepatide (Sublingual + Gum)',
    description: 'Needle-free tirzepatide: DirectMeds drops + Embody GLP-1 gum.',
    cluster: 'tirzepatide',
  },
  {
    href: '/sublingual-tirzepatide',
    title: 'Sublingual Tirzepatide',
    description: '3-column bioavailability table: 94% injectable vs 10-30% sublingual vs 1% oral.',
    cluster: 'tirzepatide',
  },
  {
    href: '/tirzepatide-with-b12',
    title: 'Tirzepatide with B12',
    description: 'Why B12 is added to compounded tirzepatide — and which form actually absorbs.',
    cluster: 'tirzepatide',
  },
  {
    href: '/microdosing-tirzepatide',
    title: 'Microdosing Tirzepatide',
    description: 'SURMOUNT-1 dose-response (5mg=15%, 10mg=19.5%) + Ivim microdosing protocol.',
    cluster: 'tirzepatide',
  },
  {
    href: '/microdose-tirzepatide',
    title: 'How to Microdose Tirzepatide',
    description: 'Dose math table for 5mg/mL and 10mg/mL vials + 4-tier starting guide.',
    cluster: 'tirzepatide',
  },

  // ── Semaglutide cluster ────────────────────────────────────────────────────
  {
    href: '/compounded-semaglutide',
    title: 'Compounded Semaglutide Guide',
    description: 'FDA enforcement timeline, 503A vs 503B explained, verified 2026 pricing.',
    cluster: 'semaglutide',
  },
  {
    href: '/best-compounded-semaglutide',
    title: 'Best Compounded Semaglutide 2026',
    description: '6 providers ranked: TMates and Strut lead on price, Eden on included labs.',
    cluster: 'semaglutide',
  },
  {
    href: '/cheapest-semaglutide-online',
    title: 'Cheapest Semaglutide Online',
    description: 'Strut $99 vs TMates $158 vs Embody $149 intro vs Eden $229 — full comparison.',
    cluster: 'semaglutide',
  },
  {
    href: '/semaglutide-tablets',
    title: 'Semaglutide Tablets (Rybelsus & Beyond)',
    description: 'Rybelsus is T2D-only. OASIS-1 pipeline data. 5-column bioavailability table.',
    cluster: 'semaglutide',
  },
  {
    href: '/sublingual-semaglutide',
    title: 'Sublingual Semaglutide',
    description: 'Honest review: 10-30% claimed bioavailability vs 94% injectable. SNAC gap.',
    cluster: 'semaglutide',
  },
  {
    href: '/semaglutide-with-b12',
    title: 'Semaglutide with B12',
    description: 'Why compounders add B12 — evidence summary and cyanocobalamin vs methylcobalamin.',
    cluster: 'semaglutide',
  },
  {
    href: '/compounded-semaglutide-with-b12',
    title: 'Compounded Semaglutide with B12',
    description: 'Compounded-specific angle: pricing $99-299, FDA timeline, B12 vs B6 FAQ.',
    cluster: 'semaglutide',
  },
  {
    href: '/microdosing-semaglutide',
    title: 'Microdosing Semaglutide',
    description: 'STEP dose-response (5.9%/9.3%/14.9%) + 8-12 week ultra-slow titration tables.',
    cluster: 'semaglutide',
  },
  {
    href: '/how-to-microdose-semaglutide',
    title: 'How to Microdose Semaglutide',
    description: 'Step-by-step: dose measurement for 2 vial concentrations, injection technique, storage.',
    cluster: 'semaglutide',
  },

  // ── Format / pill pages ────────────────────────────────────────────────────
  {
    href: '/wegovy-pill',
    title: 'Wegovy Pill — When Will It Exist?',
    description: 'No approved pill yet (May 2026). OASIS-1 vs STEP-1 data. Compounded $99-249 now.',
    cluster: 'format',
  },
  {
    href: '/oral-semaglutide-vs-injection',
    title: 'Oral Semaglutide vs Injection',
    description: '~1% oral vs ~94% injectable bioavailability — PIONEER vs STEP-1 trial data.',
    cluster: 'format',
  },
  {
    href: '/wegovy-pill-vs-injection',
    title: 'Oral Wegovy vs Injectable',
    description: 'OASIS-1 (~15.1%) vs STEP-1 (~14.9%). Fasting protocol deep-dive.',
    cluster: 'format',
  },

  // ── Microdosing hub ────────────────────────────────────────────────────────
  {
    href: '/microdosing-glp-1-schedule',
    title: 'GLP-1 Microdosing Schedule',
    description: 'Full dose tables: sema 0.25→2.4mg and tirz 0.5→5mg+ with side-effect timing.',
    cluster: 'microdosing',
  },

  // ── Peptide + stack ────────────────────────────────────────────────────────
  {
    href: '/glp-1-stack-guide',
    title: 'GLP-1 Stack Guide',
    description: '5 stacks (NAD+, sermorelin, B12, lipotropics, metformin) with evidence table.',
    cluster: 'peptide',
  },
  {
    href: '/nad-iv-therapy',
    title: 'NAD+ IV Therapy',
    description: '$150-$1,000+ clinic IV vs $79 first-month at-home injection — is it worth it?',
    cluster: 'peptide',
  },
  {
    href: '/nad-injection',
    title: 'NAD+ Injection',
    description: 'SubQ vs IV vs nasal spray comparison. GLP-1 stack rationale: lean mass + sirtuin activation.',
    cluster: 'peptide',
  },
  {
    href: '/nad-nasal-spray',
    title: 'NAD+ Nasal Spray',
    description: 'Fastest-absorbing NAD+ format — how it compares to IV and subQ injection.',
    cluster: 'peptide',
  },
  {
    href: '/sermorelin-for-weight-loss',
    title: 'Sermorelin for Weight Loss',
    description: 'Growth hormone secretagogue stacked with GLP-1 for lean mass preservation.',
    cluster: 'peptide',
  },
  {
    href: '/glutathione-injection',
    title: 'Glutathione Injection',
    description: 'Master antioxidant injection for detox + skin — evidence and provider options.',
    cluster: 'peptide',
  },
  {
    href: '/lipotropic-injections',
    title: 'Lipotropic Injections',
    description: 'MIC/B12 shots paired with GLP-1: fat-mobilization rationale and clinical reality.',
    cluster: 'peptide',
  },
  {
    href: '/compounded-liraglutide',
    title: 'Compounded Liraglutide',
    description: 'SCALE trial ~8% vs STEP-1 ~14.9%. Daily dosing context and Ivim Health availability.',
    cluster: 'peptide',
  },

  // ── Compliance / trust pillars ─────────────────────────────────────────────
  {
    href: '/is-compounded-glp-1-legal',
    title: 'Is Compounded GLP-1 Legal?',
    description: 'FDA shortage/enforcement timeline, 4 patient protections, red flags checklist.',
    cluster: 'compliance',
  },
  {
    href: '/fda-compounded-glp-1',
    title: 'FDA & Compounded GLP-1',
    description: '4-date enforcement timeline and the 503A vs 503B split that matters in 2026.',
    cluster: 'compliance',
  },
  {
    href: '/503a-compounding-pharmacy-tirzepatide',
    title: '503A Compounding & Tirzepatide',
    description: '503A vs 503B table, 4-step telehealth workflow, 3-point verification checklist.',
    cluster: 'compliance',
  },

  // ── Tools & interactive ────────────────────────────────────────────────────
  {
    href: '/compare',
    title: 'Side-by-Side Provider Comparison',
    description: 'Select any 2-4 providers and compare pricing, medications, and features live.',
    cluster: 'tool',
  },
  {
    href: '/match',
    title: 'Find Your GLP-1 Match',
    description: '5-question quiz that matches your budget, goals, and medical history to a provider.',
    cluster: 'tool',
  },
  {
    href: '/tools/cost-calculator',
    title: 'GLP-1 Cost Calculator',
    description: 'Titration-aware cost breakdown: 12-week, 6-month, and 12-month projections.',
    cluster: 'tool',
  },
];

interface RelatedGuidesProps {
  currentPath: string;
  /** Optional headline override */
  heading?: string;
  /** How many related guides to show (default 6) */
  limit?: number;
  /**
   * Optional cluster filter — if provided, surface links from this cluster first
   * before filling with cross-cluster links. Values: 'tirzepatide' | 'semaglutide' |
   * 'compare' | 'microdosing' | 'format' | 'peptide' | 'compliance' | 'tool'
   */
  priorityCluster?: string;
}

export function RelatedGuides({
  currentPath,
  heading = 'Related Guides',
  limit = 6,
  priorityCluster,
}: RelatedGuidesProps) {
  const available = RELATED_LINKS.filter((g) => g.href !== currentPath);

  let guides: RelatedLink[];
  if (priorityCluster) {
    const inCluster = available.filter((g) => g.cluster === priorityCluster);
    const outCluster = available.filter((g) => g.cluster !== priorityCluster);
    guides = [...inCluster, ...outCluster].slice(0, limit);
  } else {
    guides = available.slice(0, limit);
  }

  return (
    <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <h2
          className='text-2xl md:text-3xl font-bold mb-2'
          style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
        >
          {heading}
        </h2>
        <p className='text-sm mb-6' style={{ color: '#6B7B82' }}>
          Continue your research with these related independent reviews.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className='block p-4 rounded-xl bg-white transition-all hover:-translate-y-0.5'
              style={{ border: '1px solid #E5DDC8' }}
            >
              <div className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{g.title}</div>
              <div className='text-sm' style={{ color: '#3D5560' }}>{g.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
