import { ActivityItem } from '@/types';
import { cn } from '@/lib/utils';
import { Phone, Calendar, CheckCircle, XCircle, UserPlus } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ActivityFeedProps {
  activities: ActivityItem[];
  className?: string;
}

const activityIcons = {
  call_completed: { icon: Phone, color: 'text-primary' },
  appointment_booked: { icon: Calendar, color: 'text-status-success' },
  lead_qualified: { icon: CheckCircle, color: 'text-status-success' },
  call_failed: { icon: XCircle, color: 'text-status-error' },
  new_lead: { icon: UserPlus, color: 'text-status-new' },
};

export function ActivityFeed({ activities, className }: ActivityFeedProps) {
  return (
    <div className={cn('rounded-lg border border-border bg-card', className)}>
      <div className='border-b border-border px-5 py-4'>
        <h3 className='font-medium text-foreground'>Recent Activity</h3>
        <p className='text-sm text-muted-foreground'>Live updates</p>
      </div>
      <div className='divide-y divide-border'>
        {activities.map((activity) => {
          const { icon: Icon, color } = activityIcons[activity.type];
          return (
            <div
              key={activity.id}
              className='flex items-start gap-3 px-5 py-3 transition-colors hover:bg-accent/50'
            >
              <div className={cn('mt-0.5', color)}>
                <Icon className='h-4 w-4' />
              </div>
              <div className='flex-1 min-w-0'>
                <p className='text-sm text-foreground'>
                  {activity.message}{' '}
                  {activity.lead_name && (
                    <span className='font-medium'>{activity.lead_name}</span>
                  )}
                </p>
                <p className='text-xs text-muted-foreground'>
                  {formatDistanceToNow(new Date(activity.timestamp), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
