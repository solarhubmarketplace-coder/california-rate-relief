import { cn } from '@/lib/utils';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  className,
}: StatCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30',
        className
      )}
    >
      <div className='flex items-start justify-between'>
        <div className='space-y-1.5'>
          <p className='text-sm text-muted-foreground'>{title}</p>
          <p className='text-2xl font-semibold text-foreground'>{value}</p>
          {change !== undefined && (
            <div className='flex items-center gap-1 pt-1'>
              {isPositive && (
                <>
                  <TrendingUp className='h-4 w-4 text-status-success' />
                  <span className='text-xs font-medium text-status-success'>
                    +{change}%
                  </span>
                </>
              )}
              {isNegative && (
                <>
                  <TrendingDown className='h-4 w-4 text-status-error' />
                  <span className='text-xs font-medium text-status-error'>
                    {change}%
                  </span>
                </>
              )}
              {!isPositive && !isNegative && (
                <span className='text-xs text-muted-foreground'>No change</span>
              )}
              <span className='text-xs text-muted-foreground'>
                vs last week
              </span>
            </div>
          )}
        </div>
        <div className='rounded-lg bg-primary/10 p-3'>
          <Icon className='h-6 w-6 text-primary' />
        </div>
      </div>
    </div>
  );
}
