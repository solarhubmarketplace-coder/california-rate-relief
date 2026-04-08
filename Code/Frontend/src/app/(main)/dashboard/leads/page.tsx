'use client';

import { useEffect, useState, useCallback } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { LeadTable } from '@/components/leads/LeadTable';
import { LeadDetailDrawer } from '@/components/leads/LeadDetailDrawer';
import { AddLeadModal } from '@/components/leads/AddLeadModal';
import { BulkImportModal } from '@/components/leads/BulkImportModal';
import { fetchLeads } from '@/lib/leads';
import { fetchCallLogs } from '@/lib/callLogs';
import { exportLeadsToCSV } from '@/lib/export';
import { Lead, CallLog } from '@/types';
import { Button } from '@/components/ui/button';
import { Plus, RefreshCw, Upload, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLeadUpdates, useCallUpdates } from '@/hooks/use-realtime';

export default function LeadsPage() {
  const { toast } = useToast();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [callLogs, setCallLogs] = useState<CallLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [addLeadModalOpen, setAddLeadModalOpen] = useState(false);
  const [bulkImportModalOpen, setBulkImportModalOpen] = useState(false);

  const loadLeads = async (filters?: { status?: string; search?: string }) => {
    setIsLoading(true);
    try {
      const data = await fetchLeads(filters);
      setLeads(data);
    } catch (error) {
      console.error('Failed to load leads:', error);
      toast({
        title: 'Error Loading Leads',
        description: error instanceof Error ? error.message : 'Failed to load leads from server.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loadCallLogs = async (leadsData?: Lead[]) => {
    try {
      // Pass leads to avoid re-fetching
      const data = await fetchCallLogs(undefined, leadsData);
      setCallLogs(data);
    } catch (error) {
      console.error('Failed to load call logs:', error);
    }
  };

  // Handle new leads from realtime subscription (e.g., from external sources or other users)
  const handleNewLead = useCallback((leadData: {
    id: string;
    name: string | null;
    phone: string;
    source: string | null;
    status: string;
    created_at: string;
  }) => {
    const nameParts = (leadData.name || '').split(' ');
    const newLead: Lead = {
      id: leadData.id,
      first_name: nameParts[0] || '',
      last_name: nameParts.slice(1).join(' ') || '',
      phone: leadData.phone,
      source: (leadData.source as Lead['source']) || 'website',
      status: (leadData.status as Lead['status']) || 'new',
      created_at: leadData.created_at,
    };

    setLeads((prev) => {
      // Check if lead already exists
      if (prev.some((l) => l.id === newLead.id)) {
        return prev;
      }
      return [newLead, ...prev];
    });
  }, []);

  // Handle lead status updates
  const handleLeadUpdate = useCallback((leadData: {
    id: string;
    name: string | null;
    phone: string;
    source: string | null;
    status: string;
    created_at: string;
  }) => {
    const nameParts = (leadData.name || '').split(' ');
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadData.id
          ? {
            ...lead,
            first_name: nameParts[0] || lead.first_name,
            last_name: nameParts.slice(1).join(' ') || lead.last_name,
            status: leadData.status as Lead['status'],
          }
          : lead
      )
    );
  }, []);

  // Handle new call logs from realtime
  const handleNewCall = useCallback((callData: {
    id: string;
    lead_id: string | null;
    call_sid: string | null;
    status: string | null;
    created_at: string;
    answered_at: string | null;
    ended_at: string | null;
    duration: number;
    transcript: string | null;
    recording_url: string | null;
  }) => {
    setCallLogs((prev) => {
      if (prev.some((c) => c.id === callData.id)) {
        return prev;
      }
      // Find the lead name for this call
      const lead = leads.find((l) => l.id === callData.lead_id);

      // Map status to outcome
      let outcome: CallLog['outcome'] = 'failed';
      if (callData.status === 'completed') outcome = 'qualified';
      else if (callData.status === 'no-answer') outcome = 'voicemail';
      else if (callData.status === 'failed') outcome = 'failed';

      const newCallLog: CallLog = {
        id: callData.id,
        lead_id: callData.lead_id || '',
        lead_name: lead ? `${lead.first_name} ${lead.last_name}` : 'Unknown',
        duration_seconds: callData.duration || 0,
        outcome,
        recording_url: callData.recording_url || undefined,
        transcript_summary: callData.transcript?.substring(0, 200) || undefined,
        transcript_full: callData.transcript || undefined,
        created_at: callData.created_at,
      };
      return [newCallLog, ...prev];
    });
  }, [leads]);

  // Subscribe to realtime updates
  useLeadUpdates({
    onNewLead: handleNewLead,
    onLeadUpdate: handleLeadUpdate,
  });

  useCallUpdates({
    onNewCall: handleNewCall,
  });

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Fetch leads first
        const leadsData = await fetchLeads();
        setLeads(leadsData);

        // Then fetch call logs, passing leads to avoid re-fetching
        await loadCallLogs(leadsData);
      } catch (error) {
        console.error('Failed to load data:', error);
        toast({
          title: 'Error Loading Data',
          description: error instanceof Error ? error.message : 'Failed to load data from server.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [toast]);

  const handleLeadClick = (lead: Lead) => {
    setSelectedLead(lead);
    setDrawerOpen(true);
  };

  const handleFilterChange = (filters: {
    status?: string;
    search?: string;
  }) => {
    loadLeads(filters);
  };

  const handleLeadAdded = (newLead: Lead) => {
    // Optimistic UI update - add to the beginning of the list
    setLeads((prev) => [newLead, ...prev]);

    toast({
      title: 'Lead Added',
      description: `${newLead.first_name} ${newLead.last_name} has been added successfully.`,
    });
  };

  const leadCallHistory = selectedLead
    ? callLogs.filter((call) => call.lead_id === selectedLead.id)
    : [];

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className='space-y-6'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-foreground'>Leads</h1>
              <p className='text-sm text-muted-foreground'>
                Manage and track all your solar leads
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <Button variant='outline' size='icon'
                className='bg-white text-primary hover:bg-primary/20 hover:text-primary'
                onClick={() => loadLeads()}>
                <RefreshCw className='h-4 w-4' />
              </Button>
              <Button
                variant="ghost"
                className="gap-2 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                onClick={() => {
                  exportLeadsToCSV(leads);
                  toast({
                    title: "Export Complete",
                    description: `Exported ${leads.length} leads to CSV`,
                  });
                }}
                disabled={leads.length === 0}
              >
                <Download className='h-4 w-4 ' />
                Export
              </Button>
              <Button
                variant="ghost"
                className="gap-2 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                onClick={() => setBulkImportModalOpen(true)}
              >
                <Upload className='h-4 w-4' />
                Import CSV
              </Button>
              <Button className='gap-2' onClick={() => setAddLeadModalOpen(true)}>
                <Plus className='h-4 w-4' />
                Add Lead
              </Button>
            </div>
          </div>

          {/* Lead Table */}
          <LeadTable
            leads={leads}
            isLoading={isLoading}
            onLeadClick={handleLeadClick}
            onFilterChange={handleFilterChange}
          />

          {/* Lead Detail Drawer */}
          <LeadDetailDrawer
            lead={selectedLead}
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            callHistory={leadCallHistory}
          />

          {/* Add Lead Modal */}
          <AddLeadModal
            open={addLeadModalOpen}
            onOpenChange={setAddLeadModalOpen}
            onLeadAdded={handleLeadAdded}
          />

          {/* Bulk Import Modal */}
          <BulkImportModal
            open={bulkImportModalOpen}
            onOpenChange={setBulkImportModalOpen}
            onImportComplete={() => loadLeads()}
          />
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
