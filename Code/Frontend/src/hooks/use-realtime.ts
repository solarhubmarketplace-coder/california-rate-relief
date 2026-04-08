'use client';

import { useEffect, useCallback, useRef } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { useToast } from '@/hooks/use-toast';
import { RealtimeChannel, RealtimePostgresChangesPayload } from '@supabase/supabase-js';

type TableName = 'leads' | 'call_logs' | 'appointments';
type EventType = 'INSERT' | 'UPDATE' | 'DELETE' | '*';

interface UseRealtimeOptions<T> {
    table: TableName;
    event?: EventType;
    onInsert?: (payload: T) => void;
    onUpdate?: (payload: T) => void;
    onDelete?: (payload: { old: T }) => void;
    showToast?: boolean;
}

// Generic hook for Supabase Realtime subscriptions
export function useRealtimeSubscription<T extends Record<string, any>>({
    table,
    event = '*',
    onInsert,
    onUpdate,
    onDelete,
    showToast = true,
}: UseRealtimeOptions<T>) {
    const { toast } = useToast();
    const channelRef = useRef<RealtimeChannel | null>(null);

    const handleChange = useCallback(
        (payload: RealtimePostgresChangesPayload<T>) => {
            const eventType = payload.eventType;

            if (eventType === 'INSERT' && onInsert) {
                onInsert(payload.new as T);

                if (showToast) {
                    const toastMessages: Record<TableName, { title: string; description: string }> = {
                        leads: { title: 'New Lead', description: 'A new lead has been added' },
                        call_logs: { title: 'Call Update', description: 'A new call has been logged' },
                        appointments: { title: 'New Appointment', description: 'An appointment has been booked!' },
                    };

                    const msg = toastMessages[table];
                    if (msg) {
                        toast({ title: msg.title, description: msg.description });
                    }
                }
            }

            if (eventType === 'UPDATE' && onUpdate) {
                onUpdate(payload.new as T);
            }

            if (eventType === 'DELETE' && onDelete) {
                onDelete({ old: payload.old as T });
            }
        },
        [table, onInsert, onUpdate, onDelete, showToast, toast]
    );

    useEffect(() => {
        if (!isSupabaseConfigured) {
            console.warn('Supabase not configured, skipping realtime subscription');
            return;
        }

        // Create a unique channel name
        const channelName = `realtime-${table}-${Date.now()}`;

        // Subscribe to changes
        const channel = supabase
            .channel(channelName)
            .on(
                'postgres_changes' as any,
                {
                    event: event,
                    schema: 'public',
                    table: table,
                },
                handleChange as any
            )
            .subscribe((status, err) => {
                if (status === 'SUBSCRIBED') {
                    console.log(`✅ Subscribed to ${table} changes`);
                }
                if (status === 'CHANNEL_ERROR') {
                    // This is often due to RLS policies or table not having realtime enabled
                    // Just log as warning, not error - realtime is optional
                    console.warn(`⚠️ Realtime not available for ${table} (this is okay if table doesn't exist or realtime is not enabled)`);
                }
            });

        channelRef.current = channel;

        // Cleanup on unmount
        return () => {
            if (channelRef.current) {
                supabase.removeChannel(channelRef.current);
                channelRef.current = null;
            }
        };
    }, [table, event, handleChange]);

    return channelRef.current;
}

// Specialized hook for call updates
interface CallData {
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
}

export function useCallUpdates(options?: {
    onNewCall?: (call: CallData) => void;
    onCallUpdate?: (call: CallData) => void;
}) {
    return useRealtimeSubscription<CallData>({
        table: 'call_logs',
        onInsert: options?.onNewCall,
        onUpdate: options?.onCallUpdate,
        showToast: true,
    });
}

// Specialized hook for appointment updates
interface AppointmentData {
    id: string;
    lead_id: string | null;
    scheduled_time: string;
    status: string;
}

export function useAppointmentUpdates(options?: {
    onNewAppointment?: (apt: AppointmentData) => void;
    onAppointmentUpdate?: (apt: AppointmentData) => void;
}) {
    return useRealtimeSubscription<AppointmentData>({
        table: 'appointments',
        onInsert: options?.onNewAppointment,
        onUpdate: options?.onAppointmentUpdate,
        showToast: true,
    });
}

// Specialized hook for lead updates
interface LeadData {
    id: string;
    name: string | null;
    phone: string;
    source: string | null;
    status: string;
    created_at: string;
}

export function useLeadUpdates(options?: {
    onNewLead?: (lead: LeadData) => void;
    onLeadUpdate?: (lead: LeadData) => void;
}) {
    return useRealtimeSubscription<LeadData>({
        table: 'leads',
        onInsert: options?.onNewLead,
        onUpdate: options?.onLeadUpdate,
        showToast: true,
    });
}
