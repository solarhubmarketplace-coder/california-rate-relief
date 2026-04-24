import { ReactNode } from 'react';

interface ReviewLayoutProps {
  children: ReactNode;
}

export function ReviewLayout({ children }: ReviewLayoutProps) {
  return (
    <div
      className='min-h-screen'
      style={{
        // Subtle green tint on the dark base distinguishes GRH from CRR
        // and AHB at a glance — neutral dark grey was too generic.
        ['--background' as string]: '150 20% 5%',
        ['--foreground' as string]: '120 5% 98%',
        ['--card' as string]: '150 15% 9%',
        ['--card-foreground' as string]: '120 5% 98%',
        ['--popover' as string]: '150 15% 9%',
        ['--popover-foreground' as string]: '120 5% 98%',
        ['--primary' as string]: '142 71% 45%',
        ['--primary-foreground' as string]: '150 30% 5%',
        ['--secondary' as string]: '150 12% 14%',
        ['--secondary-foreground' as string]: '120 5% 98%',
        ['--muted' as string]: '150 12% 14%',
        ['--muted-foreground' as string]: '120 5% 80%',
        ['--accent' as string]: '150 12% 14%',
        ['--accent-foreground' as string]: '142 71% 50%',
        ['--destructive' as string]: '0 62% 50%',
        ['--destructive-foreground' as string]: '0 0% 100%',
        ['--border' as string]: '150 10% 18%',
        ['--input' as string]: '150 10% 18%',
        ['--ring' as string]: '142 71% 45%',
        backgroundColor: 'hsl(150, 20%, 5%)',
        color: 'hsl(120, 5%, 98%)',
      }}
    >
      {children}
    </div>
  );
}
