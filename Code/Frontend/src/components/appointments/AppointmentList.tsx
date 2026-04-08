'use client';

import { Appointment } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Calendar,
  Clock,
  Phone,
  MoreVertical,
  CheckCircle,
  XCircle,
  RefreshCw,
} from 'lucide-react';
import { format, isToday, isTomorrow, isPast } from 'date-fns';
import { cn } from '@/lib/utils';

interface AppointmentListProps {
  appointments: Appointment[];
  isLoading?: boolean;
  onStatusChange?: (
    appointmentId: string,
    status: Appointment['status']
  ) => void;
}

export function AppointmentList({
  appointments,
  isLoading,
  onStatusChange,
}: AppointmentListProps) {
  const getDateLabel = (dateStr: string) => {
    const date = new Date(dateStr);
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    return format(date, 'EEEE, MMMM d');
  };

  const getStatusBadgeVariant = (status: Appointment['status']) => {
    return status as any;
  };

  // Group appointments by date
  const groupedAppointments = appointments.reduce((groups, appointment) => {
    const dateKey = format(new Date(appointment.start_time), 'yyyy-MM-dd');
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(appointment);
    return groups;
  }, {} as Record<string, Appointment[]>);

  if (isLoading) {
    return (
      <div className='space-y-4'>
        {[1, 2, 3].map((i) => (
          <Card key={i} className='animate-pulse'>
            <CardContent className='p-6'>
              <div className='h-20 bg-secondary rounded' />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (appointments.length === 0) {
    return (
      <Card>
        <CardContent className='flex flex-col items-center justify-center py-12'>
          <Calendar className='h-12 w-12 text-muted-foreground mb-4' />
          <p className='text-lg font-medium text-foreground'>
            No appointments scheduled
          </p>
          <p className='text-sm text-muted-foreground'>
            Appointments will appear here when leads are booked
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className='space-y-6'>
      {Object.entries(groupedAppointments).map(([dateKey, dayAppointments]) => (
        <div key={dateKey} className='space-y-3'>
          <h3 className='text-sm font-semibold text-muted-foreground uppercase tracking-wide'>
            {getDateLabel(dayAppointments[0].start_time)}
          </h3>
          <div className='space-y-3'>
            {dayAppointments.map((appointment) => {
              const isPastAppointment = isPast(
                new Date(appointment.start_time)
              );

              return (
                <Card
                  key={appointment.id}
                  className={cn(
                    'transition-all hover:border-primary/50',
                    isPastAppointment &&
                      appointment.status === 'scheduled' &&
                      'opacity-60'
                  )}
                >
                  <CardContent className='p-4'>
                    <div className='flex items-start justify-between'>
                      <div className='flex items-start gap-4'>
                        {/* Time indicator */}
                        <div className='flex flex-col items-center rounded-lg bg-secondary px-3 py-2 min-w-[80px]'>
                          <span className='text-lg font-bold text-foreground'>
                            {format(new Date(appointment.start_time), 'h:mm')}
                          </span>
                          <span className='text-xs text-muted-foreground'>
                            {format(new Date(appointment.start_time), 'a')}
                          </span>
                        </div>

                        {/* Appointment details */}
                        <div className='space-y-1'>
                          <div className='flex items-center gap-2'>
                            <h4 className='font-semibold text-foreground'>
                              {appointment.lead_name}
                            </h4>
                            <Badge
                              variant={getStatusBadgeVariant(
                                appointment.status
                              )}
                              className='capitalize'
                            >
                              {appointment.status.replace('_', ' ')}
                            </Badge>
                          </div>
                          <div className='flex items-center gap-1.5 text-sm text-muted-foreground'>
                            <Phone className='h-3.5 w-3.5' />
                            <span className='font-mono'>
                              {appointment.lead_phone}
                            </span>
                          </div>
                          {appointment.notes && (
                            <p className='text-sm text-muted-foreground'>
                              {appointment.notes}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant='ghost'
                            size='icon'
                            className='h-8 w-8'
                          >
                            <MoreVertical className='h-4 w-4' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          <DropdownMenuItem
                            onClick={() =>
                              onStatusChange?.(appointment.id, 'completed')
                            }
                          >
                            <CheckCircle className='mr-2 h-4 w-4 text-status-success' />
                            Mark Completed
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              onStatusChange?.(appointment.id, 'cancelled')
                            }
                          >
                            <XCircle className='mr-2 h-4 w-4 text-status-error' />
                            Cancel
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              onStatusChange?.(appointment.id, 'no_show')
                            }
                          >
                            <Clock className='mr-2 h-4 w-4 text-status-warning' />
                            Mark No Show
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <RefreshCw className='mr-2 h-4 w-4' />
                            Reschedule
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
