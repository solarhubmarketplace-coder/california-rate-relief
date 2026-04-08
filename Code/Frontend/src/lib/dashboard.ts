// Dashboard API Functions - Computed from Real Data
import { DashboardStats, ActivityItem, Lead, CallLog, Appointment } from '@/types';
import { fetchLeads } from './leads';
import { fetchCallLogs } from './callLogs';
import { fetchAppointments } from './appointments';

// ============================================
// Cache for dashboard data to avoid multiple API calls
// ============================================
interface DashboardData {
    stats: DashboardStats;
    activities: ActivityItem[];
}

// ============================================
// Helper Functions (for use with cached data)
// ============================================

/**
 * Compute dashboard stats from pre-fetched data
 * Use this when you already have the data (e.g., from DashboardContext)
 */
export function computeDashboardStats(
    leads: Lead[],
    calls: CallLog[],
    appointments: Appointment[]
): DashboardStats {
    // Get today's date range
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const leadsToday = leads.filter(l => new Date(l.created_at) >= today);
    const callsToday = calls.filter(c => new Date(c.created_at) >= today);
    const appointmentsBooked = appointments.filter(a =>
        a.status === 'scheduled' || a.status === 'confirmed'
    );

    // Calculate conversion rate (appointments / leads * 100)
    const totalLeads = leads.length || 1;
    const conversionRate = (appointmentsBooked.length / totalLeads) * 100;

    return {
        total_leads_today: leadsToday.length,
        total_leads_change: 0, // Would need historical data to compute
        calls_triggered: callsToday.length,
        calls_change: 0,
        appointments_booked: appointmentsBooked.length,
        appointments_change: 0,
        conversion_rate: Math.round(conversionRate * 10) / 10,
        conversion_change: 0,
    };
}

/**
 * Compute activity feed from pre-fetched data
 * Use this when you already have the data (e.g., from DashboardContext)
 */
export function computeActivityFeed(
    leads: Lead[],
    calls: CallLog[]
): ActivityItem[] {
    const activities: ActivityItem[] = [];

    // Add recent leads
    const recentLeads = leads.slice(0, 5);
    for (const lead of recentLeads) {
        activities.push({
            id: `lead_${lead.id}`,
            type: 'new_lead',
            message: 'New lead received:',
            lead_name: `${lead.first_name} ${lead.last_name}`,
            timestamp: lead.created_at,
        });

        if (lead.status === 'converted') {
            activities.push({
                id: `qual_${lead.id}`,
                type: 'lead_qualified',
                message: 'Lead qualified:',
                lead_name: `${lead.first_name} ${lead.last_name}`,
                timestamp: lead.created_at,
            });
        }
    }

    // Add recent calls
    for (const call of calls.slice(0, 3)) {
        if (call.outcome === 'booked') {
            activities.push({
                id: `apt_${call.id}`,
                type: 'appointment_booked',
                message: 'Appointment booked with',
                lead_name: call.lead_name,
                timestamp: call.created_at,
            });
        } else if (call.outcome === 'failed') {
            activities.push({
                id: `fail_${call.id}`,
                type: 'call_failed',
                message: 'Call failed for',
                lead_name: call.lead_name,
                timestamp: call.created_at,
            });
        } else {
            activities.push({
                id: `call_${call.id}`,
                type: 'call_completed',
                message: 'Call completed with',
                lead_name: call.lead_name,
                timestamp: call.created_at,
            });
        }
    }

    // Sort by timestamp descending
    return activities.sort((a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ).slice(0, 10);
}

// ============================================
// API Functions
// ============================================

/**
 * Fetch all dashboard data in a single optimized call
 * This prevents multiple redundant API calls to the same endpoints
 */
export async function fetchDashboardData(): Promise<DashboardData> {
    try {
        // Fetch all data in parallel (single call per endpoint)
        const [leads, calls, appointments] = await Promise.all([
            fetchLeads(),
            fetchCallLogs(),
            fetchAppointments(),
        ]);

        const stats = computeDashboardStats(leads, calls, appointments);
        const activities = computeActivityFeed(leads, calls);

        return {
            stats,
            activities,
        };
    } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
        // Return empty data on error
        return {
            stats: {
                total_leads_today: 0,
                total_leads_change: 0,
                calls_triggered: 0,
                calls_change: 0,
                appointments_booked: 0,
                appointments_change: 0,
                conversion_rate: 0,
                conversion_change: 0,
            },
            activities: [],
        };
    }
}

/**
 * @deprecated Use fetchDashboardData() instead to avoid duplicate API calls
 */
export async function fetchDashboardStats(): Promise<DashboardStats> {
    const data = await fetchDashboardData();
    return data.stats;
}

/**
 * @deprecated Use fetchDashboardData() instead to avoid duplicate API calls
 */
export async function fetchActivityFeed(): Promise<ActivityItem[]> {
    const data = await fetchDashboardData();
    return data.activities;
}


