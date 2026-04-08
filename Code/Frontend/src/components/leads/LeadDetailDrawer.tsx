'use client';

import { Lead, CallLog } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { AudioPlayer } from '@/components/ui/audio-player';
import {
  Phone,
  Mail,
  Calendar,
  Home,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  Mic,
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface LeadDetailDrawerProps {
  lead: Lead | null;
  open: boolean;
  onClose: () => void;
  callHistory?: CallLog[];
}

export function LeadDetailDrawer({
  lead,
  open,
  onClose,
  callHistory = [],
}: LeadDetailDrawerProps) {
  if (!lead) return null;

  const getStatusColor = (status: Lead['status']) => {
    const colors = {
      new: 'bg-status-new',
      contacted: 'bg-status-info',
      qualified: 'bg-status-success',
      disqualified: 'bg-status-error',
    };
    return colors[status];
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className='w-full sm:max-w-lg overflow-y-auto'>
        <SheetHeader>
          <div className='flex items-center gap-3'>
            <div
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-foreground',
                getStatusColor(lead.status)
              )}
            >
              {lead.first_name[0]}
              {lead.last_name[0]}
            </div>
            <div>
              <SheetTitle className='text-xl'>
                {lead.first_name} {lead.last_name}
              </SheetTitle>
              <SheetDescription>
                Lead added {format(new Date(lead.created_at), 'MMMM d, yyyy')}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className='mt-6 space-y-6'>
          {/* Status & Source */}
          <div className='flex items-center gap-2'>
            <Badge variant={lead.status as any} className='capitalize'>
              {lead.status}
            </Badge>
            <Badge variant={lead.source as any} className='capitalize'>
              {lead.source}
            </Badge>
          </div>

          {/* Contact Info */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold text-foreground'>
              Contact Information
            </h4>
            <div className='space-y-2'>
              <div className='flex items-center gap-3 text-sm'>
                <Phone className='h-4 w-4 text-muted-foreground' />
                <span className='font-mono'>{lead.phone}</span>
              </div>
              {lead.email && (
                <div className='flex items-center gap-3 text-sm'>
                  <Mail className='h-4 w-4 text-muted-foreground' />
                  <span>{lead.email}</span>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Qualification Data */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold text-foreground'>
              Qualification Data
            </h4>
            <div className='grid grid-cols-2 gap-4'>
              <div className='rounded-lg bg-secondary p-3'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <DollarSign className='h-4 w-4' />
                  <span className='text-xs'>Monthly Bill</span>
                </div>
                <p className='mt-1 text-lg font-semibold'>
                  {lead.bill_amount ? `$${lead.bill_amount}` : '—'}
                </p>
              </div>
              <div className='rounded-lg bg-secondary p-3'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <Home className='h-4 w-4' />
                  <span className='text-xs'>Roof Type</span>
                </div>
                <p className='mt-1 text-lg font-semibold'>
                  {lead.qualification_data?.roof_type || '—'}
                </p>
              </div>
            </div>

            {lead.qualification_data && (
              <div className='space-y-2'>
                <div className='flex items-center justify-between rounded-lg bg-secondary p-3'>
                  <span className='text-sm text-muted-foreground'>
                    Homeowner Status
                  </span>
                  {lead.qualification_data.homeowner_status ? (
                    <div className='flex items-center gap-1 text-status-success'>
                      <CheckCircle className='h-4 w-4' />
                      <span className='text-sm font-medium'>Verified</span>
                    </div>
                  ) : (
                    <div className='flex items-center gap-1 text-status-error'>
                      <XCircle className='h-4 w-4' />
                      <span className='text-sm font-medium'>Not Verified</span>
                    </div>
                  )}
                </div>
                <div className='flex items-center justify-between rounded-lg bg-secondary p-3'>
                  <span className='text-sm text-muted-foreground'>
                    Credit Confidence
                  </span>
                  {lead.qualification_data.credit_confident ? (
                    <div className='flex items-center gap-1 text-status-success'>
                      <CheckCircle className='h-4 w-4' />
                      <span className='text-sm font-medium'>650+</span>
                    </div>
                  ) : (
                    <span className='text-sm text-muted-foreground'>—</span>
                  )}
                </div>
                {lead.qualification_data.interest_level && (
                  <div className='flex items-center justify-between rounded-lg bg-secondary p-3'>
                    <span className='text-sm text-muted-foreground'>
                      Interest Level
                    </span>
                    <Badge
                      variant={
                        lead.qualification_data.interest_level === 'high'
                          ? 'success'
                          : lead.qualification_data.interest_level === 'medium'
                            ? 'warning'
                            : 'secondary'
                      }
                      className='capitalize'
                    >
                      {lead.qualification_data.interest_level}
                    </Badge>
                  </div>
                )}
              </div>
            )}
          </div>

          <Separator />

          {/* Call History */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold text-foreground'>
              Call History
            </h4>
            {callHistory.length > 0 ? (
              <div className='space-y-3'>
                {callHistory.map((call) => (
                  <div
                    key={call.id}
                    className='rounded-lg border border-border p-3 space-y-2'
                  >
                    <div className='flex items-center justify-between'>
                      <Badge
                        variant={call.outcome as any}
                        className='capitalize'
                      >
                        {call.outcome.replace('_', ' ')}
                      </Badge>
                      <span className='text-xs text-muted-foreground'>
                        {format(new Date(call.created_at), 'MMM d, h:mm a')}
                      </span>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Clock className='h-3 w-3' />
                      <span>
                        {Math.floor(call.duration_seconds / 60)}m{' '}
                        {call.duration_seconds % 60}s
                      </span>
                    </div>
                    {call.recording_url && (
                      <div className='space-y-1'>
                        <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                          <Mic className='h-3 w-3' />
                          <span>Recording</span>
                        </div>
                        <AudioPlayer src={call.recording_url} />
                      </div>
                    )}
                    {call.transcript_summary && (
                      <p className='text-sm text-muted-foreground'>
                        {call.transcript_summary}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-sm text-muted-foreground'>
                No calls recorded yet
              </p>
            )}
          </div>

          <Separator />

          {/* Actions */}
          <div className='flex gap-3'>
            <Button className='flex-1 gap-2'>
              <Phone className='h-4 w-4' />
              Trigger Call
            </Button>
            <Button variant='outline' className='flex-1 gap-2'>
              <Calendar className='h-4 w-4' />
              Schedule
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
