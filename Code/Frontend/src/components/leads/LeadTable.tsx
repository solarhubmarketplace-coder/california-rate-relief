'use client';

import { useState } from 'react';
import { Lead } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Phone, Search, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { triggerAICall } from '@/lib/leads';

interface LeadTableProps {
  leads: Lead[];
  isLoading?: boolean;
  onLeadClick?: (lead: Lead) => void;
  onFilterChange?: (filters: { status?: string; search?: string }) => void;
}

export function LeadTable({
  leads,
  isLoading,
  onLeadClick,
  onFilterChange,
}: LeadTableProps) {
  const { toast } = useToast();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [callDialogOpen, setCallDialogOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isCallingLead, setIsCallingLead] = useState(false);

  const handleSearch = (value: string) => {
    setSearch(value);
    onFilterChange?.({ status: statusFilter, search: value });
  };

  const handleStatusFilter = (value: string) => {
    setStatusFilter(value);
    onFilterChange?.({ status: value, search });
  };

  const handleTriggerCall = (lead: Lead, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedLead(lead);
    setCallDialogOpen(true);
  };

  const confirmCall = async () => {
    if (!selectedLead) return;

    setIsCallingLead(true);
    try {
      const result = await triggerAICall(selectedLead.id);
      if (result.success) {
        toast({
          title: 'Call Initiated',
          description: `AI is now calling ${selectedLead.first_name} ${selectedLead.last_name}`,
        });
      } else {
        toast({
          title: 'Call Failed',
          description: result.error,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to trigger call. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsCallingLead(false);
      setCallDialogOpen(false);
      setSelectedLead(null);
    }
  };

  const getSourceBadgeVariant = (source: Lead['source']) => {
    return source as any;
  };

  const getStatusBadgeVariant = (status: Lead['status']) => {
    const variants: Record<Lead['status'], any> = {
      new: 'new',
      contacted: 'contacted',
      converted: 'qualified', // Use qualified styling for converted
      declined: 'disqualified', // Use disqualified styling for declined
    };
    return variants[status];
  };

  const getEmailStatusBadgeVariant = (status?: Lead['email_status']) => {
    if (!status) return 'secondary';
    const variants: Record<string, any> = {
      pending: 'secondary',
      sent: 'default',
      opened: 'qualified',
      clicked: 'qualified',
      bounced: 'destructive',
      failed: 'destructive',
    };
    return variants[status] || 'secondary';
  };

  const getTypeBadgeVariant = (type?: Lead['type']) => {
    return type === 'hot' ? 'destructive' : 'secondary';
  };

  return (
    <div className='space-y-4'>
      {/* Filters */}
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='relative w-full sm:max-w-xs'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input
            placeholder='Search by name or email...'
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className='pl-10 bg-white'
          />
        </div>
        <Select value={statusFilter} onValueChange={handleStatusFilter}>
          <SelectTrigger className='w-full sm:w-[180px] bg-white'>
            <SelectValue placeholder='Filter by status' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Status</SelectItem>
            <SelectItem value='new'>New</SelectItem>
            <SelectItem value='contacted'>Contacted</SelectItem>
            <SelectItem value='converted'>Converted</SelectItem>
            <SelectItem value='declined'>Declined</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className='rounded-lg border border-border bg-card overflow-hidden overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow className='hover:bg-transparent'>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Email Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={9} className='h-32 text-center'>
                  <Loader2 className='mx-auto h-6 w-6 animate-spin text-muted-foreground' />
                </TableCell>
              </TableRow>
            ) : leads.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className='h-32 text-center text-muted-foreground'
                >
                  No leads found
                </TableCell>
              </TableRow>
            ) : (
              leads.map((lead) => (
                <TableRow
                  key={lead.id}
                  className='cursor-pointer transition-colors hover:bg-accent/50'
                  onClick={() => onLeadClick?.(lead)}
                >
                  <TableCell>
                    <p className='font-medium text-foreground'>
                      {lead.first_name} {lead.last_name}
                    </p>
                  </TableCell>
                  <TableCell className='font-mono text-sm'>
                    {lead.phone}
                  </TableCell>
                  <TableCell>
                    {lead.type ? (
                      <Badge
                        className={cn(
                          'capitalize',
                          lead.type === 'hot'
                            ? 'bg-orange-100 text-orange-700 hover:bg-orange-100 dark:bg-orange-950 dark:text-orange-400'
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400'
                        )}
                      >
                        {lead.type}
                      </Badge>
                    ) : (
                      <span className='text-muted-foreground'>—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={getSourceBadgeVariant(lead.source)}
                      className='capitalize'
                    >
                      {lead.source.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={getStatusBadgeVariant(lead.status)}
                      className='capitalize'
                    >
                      {lead.status}
                    </Badge>
                  </TableCell>
                  <TableCell className='text-sm'>
                    {lead.email ? (
                      <span className='text-muted-foreground'>{lead.email}</span>
                    ) : (
                      <span className='text-muted-foreground'>—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {lead.email_status ? (
                      <Badge
                        variant={getEmailStatusBadgeVariant(lead.email_status)}
                        className='capitalize'
                      >
                        {lead.email_status}
                      </Badge>
                    ) : (
                      <span className='text-muted-foreground'>—</span>
                    )}
                  </TableCell>
                  <TableCell className='text-muted-foreground'>
                    {format(new Date(lead.created_at), 'MMM d, h:mm a')}
                  </TableCell>
                  <TableCell className='text-right'>
                    <Button
                      size='sm'
                      onClick={(e) => handleTriggerCall(lead, e)}
                      disabled={lead.status === 'declined'}
                      className='gap-2'
                    >
                      <Phone className='h-4 w-4' />
                      Trigger Call
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Confirm Call Dialog */}
      <Dialog open={callDialogOpen} onOpenChange={setCallDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm AI Call</DialogTitle>
            <DialogDescription>
              Are you sure you want to trigger an AI call to{' '}
              <span className='font-semibold text-foreground'>
                {selectedLead?.first_name} {selectedLead?.last_name}
              </span>
              ?
            </DialogDescription>
          </DialogHeader>
          <div className='rounded-lg bg-secondary p-4 space-y-2'>
            <div className='flex justify-between text-sm'>
              <span className='text-muted-foreground'>Phone</span>
              <span className='font-mono'>{selectedLead?.phone}</span>
            </div>
            {selectedLead?.bill_amount && (
              <div className='flex justify-between text-sm'>
                <span className='text-muted-foreground'>Bill Amount</span>
                <span className='font-semibold'>
                  ${selectedLead.bill_amount}/mo
                </span>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant='outline' onClick={() => setCallDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmCall} disabled={isCallingLead}>
              {isCallingLead ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Calling...
                </>
              ) : (
                <>
                  <Phone className='mr-2 h-4 w-4' />
                  Start Call
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
