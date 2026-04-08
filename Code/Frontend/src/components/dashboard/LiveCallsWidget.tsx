'use client';

import { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { Phone, PhoneCall, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCallUpdates } from '@/hooks/use-realtime';

interface CallLog {
    id: string;
    lead_id: string | null;
    call_sid: string | null;
    status: string;
    created_at: string;
    answered_at: string | null;
    ended_at: string | null;
    duration: number;
}

interface ActiveCall {
    id: string;
    lead_id: string | null;
    lead_name: string;
    lead_phone: string;
    status: string;
    started_at: string;
    ended_at: string | null;
    duration_display: string;
}

interface LiveCallsWidgetProps {
    className?: string;
}

// Active statuses that should show in live calls
const ACTIVE_STATUSES = ['queued', 'initiated', 'ringing', 'in-progress'];

export function LiveCallsWidget({ className }: LiveCallsWidgetProps) {
    const [activeCalls, setActiveCalls] = useState<ActiveCall[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch active calls (only truly active ones)
    const fetchActiveCalls = useCallback(async () => {
        if (!isSupabaseConfigured) {
            setIsLoading(false);
            return;
        }

        try {
            // Calculate timestamp for 2 hours ago to filter stale calls
            // (calls older than 2 hours in "initiated" status are likely stuck)
            const twoHoursAgo = new Date();
            twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);

            // Query call_logs table for active calls only
            const { data: calls, error } = await supabase
                .from('call_logs')
                .select('id, lead_id, call_sid, status, created_at, answered_at, ended_at, duration, leads(name, phone)')
                .in('status', ACTIVE_STATUSES)
                .is('ended_at', null) // Only calls that haven't ended
                .gte('created_at', twoHoursAgo.toISOString()) // Only calls from last 2 hours
                .order('created_at', { ascending: false })
                .limit(10);

            if (error) {
                // Check if it's a "table doesn't exist" error - this is expected
                const errorMessage = error?.message || error?.code || '';
                if (error.code === 'PGRST116' || errorMessage.includes('does not exist')) {
                    // Table doesn't exist yet - this is okay, just show no calls
                    setActiveCalls([]);
                    return;
                }
                console.warn('Error fetching active calls:', errorMessage || error);
                setActiveCalls([]);
                return;
            }

            const mappedCalls: ActiveCall[] = (calls || []).map((call: any) => {
                const startTime = new Date(call.answered_at || call.created_at);
                const now = new Date();
                const durationMs = now.getTime() - startTime.getTime();
                const minutes = Math.floor(durationMs / 60000);
                const seconds = Math.floor((durationMs % 60000) / 1000);

                return {
                    id: call.id,
                    lead_id: call.lead_id,
                    lead_name: call.leads?.name || 'Unknown',
                    lead_phone: call.leads?.phone || '',
                    status: call.status,
                    started_at: call.answered_at || call.created_at,
                    ended_at: call.ended_at,
                    duration_display: `${minutes}:${seconds.toString().padStart(2, '0')}`,
                };
            });

            setActiveCalls(mappedCalls);
        } catch (error: any) {
            const errorMessage = error?.message || error?.code || JSON.stringify(error);
            console.warn('Error fetching active calls:', errorMessage);
            setActiveCalls([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Initial fetch
    useEffect(() => {
        fetchActiveCalls();
    }, [fetchActiveCalls]);

    // Poll for duration updates every second when there are active calls
    useEffect(() => {
        if (activeCalls.length === 0) return;

        const interval = setInterval(() => {
            setActiveCalls((prev) =>
                prev.map((call) => {
                    // Don't update if call has ended
                    if (call.ended_at) {
                        return call;
                    }

                    const startTime = new Date(call.started_at);
                    const now = new Date();
                    const durationMs = now.getTime() - startTime.getTime();
                    const minutes = Math.floor(durationMs / 60000);
                    const seconds = Math.floor((durationMs % 60000) / 1000);

                    return {
                        ...call,
                        duration_display: `${minutes}:${seconds.toString().padStart(2, '0')}`,
                    };
                })
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [activeCalls.length]);

    // Subscribe to realtime call updates
    useCallUpdates({
        onNewCall: (callData) => {
            if (ACTIVE_STATUSES.includes(callData.status || '')) {
                fetchActiveCalls();
            }
        },
        onCallUpdate: (callData) => {
            // If call has ended or status is not active, remove it
            if (callData.ended_at || !ACTIVE_STATUSES.includes(callData.status || '')) {
                setActiveCalls((prev) => prev.filter((c) => c.id !== callData.id));
            } else {
                // Call status changed, refetch
                fetchActiveCalls();
            }
        },
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'queued':
            case 'initiated':
                return 'bg-yellow-500';
            case 'ringing':
                return 'bg-blue-500 animate-pulse';
            case 'in-progress':
                return 'bg-green-500';
            default:
                return 'bg-gray-500';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'queued':
                return 'Queued';
            case 'initiated':
                return 'Dialing';
            case 'ringing':
                return 'Ringing';
            case 'in-progress':
                return 'On Call';
            default:
                return status ? status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Unknown';
        }
    };

    return (
        <div className={cn('rounded-lg border border-border bg-card p-5', className)}>
            <div className='mb-4 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <PhoneCall className='h-5 w-5 text-primary' />
                    <h3 className='font-medium text-foreground'>Live Calls</h3>
                </div>
                <Badge variant={activeCalls.length > 0 ? 'default' : 'secondary'}>
                    {activeCalls.length} Active
                </Badge>
            </div>

            <div className='space-y-3'>
                {isLoading ? (
                    <div className='flex items-center justify-center py-6'>
                        <div className='animate-spin rounded-full h-6 w-6 border-b-2 border-primary' />
                    </div>
                ) : activeCalls.length === 0 ? (
                    <div className='flex flex-col items-center justify-center py-6 text-center'>
                        <Phone className='h-10 w-10 text-muted-foreground/50 mb-2' />
                        <p className='text-sm text-muted-foreground'>No active calls</p>
                        <p className='text-xs text-muted-foreground/70'>
                            Active calls from the last 2 hours will appear here
                        </p>
                    </div>
                ) : (
                    activeCalls.map((call) => (
                        <div
                            key={call.id}
                            className='flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border'
                        >
                            <div className='flex items-center gap-3'>
                                <div className='relative'>
                                    <div className='h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center'>
                                        <User className='h-4 w-4 text-primary' />
                                    </div>
                                    <div
                                        className={cn(
                                            'absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card',
                                            getStatusColor(call.status)
                                        )}
                                    />
                                </div>
                                <div>
                                    <p className='text-sm font-medium text-foreground'>
                                        {call.lead_name}
                                    </p>
                                    <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                                        <span>{getStatusLabel(call.status)}</span>
                                        {call.lead_phone && (
                                            <>
                                                <span>•</span>
                                                <span>{call.lead_phone}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center gap-1 text-sm font-mono text-muted-foreground'>
                                    <Clock className='h-3 w-3' />
                                    {call.duration_display}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
