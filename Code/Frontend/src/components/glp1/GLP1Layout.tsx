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
 *   --glp1-cream:    #F8F4ED  page background
 *   --glp1-wine:     #0F4D5C  deep wine — hero card + footer
 *   --glp1-wine-mid: #0E2A3A  midtone — H1 headings
 *   --glp1-coral:    #D4A33A  primary CTA
 *   --glp1-coral-h:  #B88A2A  CTA hover
 *   --glp1-mint:     #7CA982  success / "saved" callouts
 *   --glp1-peach-bg: #E8DCC0  soft pastel category badge
 *   --glp1-mint-bg:  #D9E8D4  soft pastel category badge
 *   --glp1-lav-bg:   #DEE5E8  soft pastel category badge
 *   --glp1-text:     #3D5560  body text (muted wine)
 *   --glp1-border:   #E5DDC8  warm border
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
        ['--glp1-cream' as string]: '#F8F4ED',
        ['--glp1-wine' as string]: '#0F4D5C',
        ['--glp1-wine-mid' as string]: '#0E2A3A',
        ['--glp1-coral' as string]: '#D4A33A',
        ['--glp1-coral-h' as string]: '#B88A2A',
        ['--glp1-mint' as string]: '#7CA982',
        ['--glp1-peach-bg' as string]: '#E8DCC0',
        ['--glp1-mint-bg' as string]: '#D9E8D4',
        ['--glp1-lav-bg' as string]: '#DEE5E8',
        ['--glp1-text' as string]: '#3D5560',
        ['--glp1-border' as string]: '#E5DDC8',
        backgroundColor: '#F8F4ED',
        color: '#3D5560',
        fontFamily: '"Inter", system-ui, sans-serif',
      }}
    >
      {children}
    </div>
  );
}
