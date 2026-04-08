'use client';

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { Lead, CallLog, Appointment } from '@/types';
import { fetchLeads } from '@/lib/leads';
import { fetchCallLogs } from '@/lib/callLogs';
import { fetchAppointments } from '@/lib/appointments';

interface DashboardContextType {
  leads: Lead[];
  callLogs: CallLog[];
  appointments: Appointment[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [callLogs, setCallLogs] = useState<CallLog[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // Guard to prevent multiple simultaneous fetches
  const isFetchingRef = useRef(false);
  const hasFetchedRef = useRef(false);

  const fetchData = async () => {
    // Prevent duplicate fetches
    if (isFetchingRef.current) {
      console.log('[DashboardContext] Fetch already in progress, skipping...');
      return;
    }

    isFetchingRef.current = true;
    console.log('[DashboardContext] Starting data fetch...');

    try {
      setIsLoading(true);
      setError(null);

      // Fetch leads FIRST
      const leadsData = await fetchLeads();
      console.log('[DashboardContext] Leads fetched:', leadsData.length);

      // Then fetch calls and appointments in parallel, passing leads to avoid redundant fetches
      const [callLogsData, appointmentsData] = await Promise.all([
        fetchCallLogs(undefined, leadsData), // Pass leads to avoid re-fetching
        fetchAppointments(leadsData),         // Pass leads to avoid re-fetching
      ]);

      console.log('[DashboardContext] Data fetched successfully:', {
        leads: leadsData.length,
        calls: callLogsData.length,
        appointments: appointmentsData.length,
      });

      setLeads(leadsData);
      setCallLogs(callLogsData);
      setAppointments(appointmentsData);
      hasFetchedRef.current = true;
    } catch (err) {
      console.error('[DashboardContext] Failed to fetch dashboard data:', err);
      setError(err instanceof Error ? err : new Error('Failed to fetch data'));
    } finally {
      setIsLoading(false);
      isFetchingRef.current = false;
    }
  };

  // Initial fetch on mount - only once
  useEffect(() => {
    if (!hasFetchedRef.current) {
      fetchData();
    }
  }, []); // Empty dependency array - only run on mount

  const value: DashboardContextType = {
    leads,
    callLogs,
    appointments,
    isLoading,
    error,
    refetch: fetchData,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboardData() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboardData must be used within a DashboardProvider');
  }
  return context;
}
