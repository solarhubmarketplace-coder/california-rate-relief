import { ReactNode } from 'react';

interface GLP1LayoutProps {
  children: ReactNode;
}

/**
 * Layout shell for the GLP1CompareHub.com brand.
 *
 * Aesthetic (matchglp1.com-inspired): warm cream background, deep wine/purple
 * accent (footer + cost-explorer card), coral/orange CTAs, soft pastel category
 * badges. Distinct from GRH (dark green-tint), AHB (dark green-leaf), SHG (dark
 * blue-shield), and CRR (clean blue-utility).
 *
 * Design tokens:
 *   --glp1-cream:    #FDF7F0  page background
 *   --glp1-wine:     #2D0E2D  deep wine — hero card + footer
 *   --glp1-wine-mid: #3A1B3D  midtone — H1 headings
 *   --glp1-coral:    #F47C5B  primary CTA
 *   --glp1-coral-h:  #E5654A  CTA hover
 *   --glp1-mint:     #5FBFAA  success / "saved" callouts
 *   --glp1-peach-bg: #FFE5D9  soft pastel category badge
 *   --glp1-mint-bg:  #D4F1E8  soft pastel category badge
 *   --glp1-lav-bg:   #EDE5F2  soft pastel category badge
 *   --glp1-text:     #4B3548  body text (muted wine)
 *   --glp1-border:   #E8DDD0  warm border
 */
export function GLP1Layout({ children }: GLP1LayoutProps) {
  return (
    <div
      className='min-h-screen'
      style={{
        // shadcn-compatible CSS variables, scoped to this niche
        ['--background' as string]: '32 75% 96%',     // cream
        ['--foreground' as string]: '290 40% 17%',    // deep wine
        ['--card' as string]: '0 0% 100%',
        ['--card-foreground' as string]: '290 40% 17%',
        ['--primary' as string]: '15 88% 65%',        // coral
        ['--primary-foreground' as string]: '0 0% 100%',
        ['--secondary' as string]: '32 60% 92%',
        ['--secondary-foreground' as string]: '290 40% 17%',
        ['--muted' as string]: '32 50% 94%',
        ['--muted-foreground' as string]: '290 15% 38%',
        ['--accent' as string]: '167 38% 56%',        // mint
        ['--accent-foreground' as string]: '290 40% 17%',
        ['--border' as string]: '32 30% 86%',
        ['--ring' as string]: '15 88% 65%',
        // Custom GLP-1 brand tokens
        ['--glp1-cream' as string]: '#FDF7F0',
        ['--glp1-wine' as string]: '#2D0E2D',
        ['--glp1-wine-mid' as string]: '#3A1B3D',
        ['--glp1-coral' as string]: '#F47C5B',
        ['--glp1-coral-h' as string]: '#E5654A',
        ['--glp1-mint' as string]: '#5FBFAA',
        ['--glp1-peach-bg' as string]: '#FFE5D9',
        ['--glp1-mint-bg' as string]: '#D4F1E8',
        ['--glp1-lav-bg' as string]: '#EDE5F2',
        ['--glp1-text' as string]: '#4B3548',
        ['--glp1-border' as string]: '#E8DDD0',
        backgroundColor: '#FDF7F0',
        color: '#4B3548',
        fontFamily: '"Inter", system-ui, sans-serif',
      }}
    >
      {children}
    </div>
  );
}
