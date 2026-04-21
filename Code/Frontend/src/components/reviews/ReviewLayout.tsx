import { ReactNode } from 'react';

interface ReviewLayoutProps {
  children: ReactNode;
}

export function ReviewLayout({ children }: ReviewLayoutProps) {
  return (
    <div
      className='min-h-screen'
      style={{
        // Override CSS custom properties so all Tailwind classes
        // (text-foreground, bg-card, border-border, etc.) render
        // correctly on the dark GreenVerdict theme
        ['--background' as string]: '0 0% 4%',
        ['--foreground' as string]: '0 0% 96%',
        ['--card' as string]: '0 0% 9%',
        ['--card-foreground' as string]: '0 0% 96%',
        ['--popover' as string]: '0 0% 9%',
        ['--popover-foreground' as string]: '0 0% 96%',
        ['--primary' as string]: '142 71% 45%',
        ['--primary-foreground' as string]: '0 0% 4%',
        ['--secondary' as string]: '0 0% 15%',
        ['--secondary-foreground' as string]: '0 0% 96%',
        ['--muted' as string]: '0 0% 15%',
        ['--muted-foreground' as string]: '0 0% 64%',
        ['--accent' as string]: '0 0% 15%',
        ['--accent-foreground' as string]: '142 71% 45%',
        ['--destructive' as string]: '0 62% 50%',
        ['--destructive-foreground' as string]: '0 0% 100%',
        ['--border' as string]: '0 0% 17%',
        ['--input' as string]: '0 0% 17%',
        ['--ring' as string]: '142 71% 45%',
        backgroundColor: 'hsl(0, 0%, 4%)',
        color: 'hsl(0, 0%, 96%)',
      }}
    >
      {children}
    </div>
  );
}
