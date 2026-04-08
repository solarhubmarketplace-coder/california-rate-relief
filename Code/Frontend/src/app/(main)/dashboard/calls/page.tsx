'use client';

import { useEffect, useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CallLogTable } from '@/components/calls/CallLogTable';
import { fetchLeads } from '@/lib/leads';
import { fetchCallLogs } from '@/lib/callLogs';
import { exportCallsToCSV } from '@/lib/export';
import { CallLog, Lead } from '@/types';
import { Button } from '@/components/ui/button';
import { RefreshCw, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CallLogsPage() {
  const { toast } = useToast();
  const [allCallLogs, setAllCallLogs] = useState<CallLog[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load all data once on mount (no filters - filtering happens in CallLogTable)
  const loadData = async () => {
    setIsLoading(true);
    try {
      // Fetch leads first
      const leadsData = await fetchLeads();
      setLeads(leadsData);

      // Fetch all call logs without filters
      const data = await fetchCallLogs(undefined, leadsData);
      setAllCallLogs(data);
    } catch (error) {
      console.error('Failed to load call logs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className='space-y-6'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-foreground'>Call Logs</h1>
              <p className='text-sm text-muted-foreground'>
                View all AI voice agent call history and transcripts
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <Button variant='outline' size='icon'
                className='bg-white text-primary hover:bg-primary/20 hover:text-primary transition-colors'
                onClick={() => loadData()}>
                <RefreshCw className='h-4 w-4' />
              </Button>
              <Button
                variant='outline'
                className='gap-2 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-colors'
                onClick={() => {
                  exportCallsToCSV(allCallLogs);
                  toast({ title: 'Export Complete', description: `Exported ${allCallLogs.length} calls to CSV` });
                }}
                disabled={allCallLogs.length === 0}
              >
                <Download className='h-4 w-4' />
                Export
              </Button>
            </div>
          </div>

          {/* Call Log Table - handles client-side filtering */}
          <CallLogTable
            callLogs={allCallLogs}
            isLoading={isLoading}
          />
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
