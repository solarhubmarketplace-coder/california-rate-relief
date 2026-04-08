// Appointment API Functions - Using Supabase
import { Appointment, Lead } from '@/types';
import axiosClient from './axios';
import { supabase, isSupabaseConfigured } from './supabaseClient';
import { fetchLeads } from './leads';

// ============================================
// Types
// ============================================

interface SupabaseAppointment {
    id: string;
    lead_id: string | null;
    scheduled_time: string;
    status: string;
}

// ============================================
// API Functions
// ============================================

export async function fetchAppointments(leads?: Lead[]): Promise<Appointment[]> {
    try {
        // Return empty if Supabase is not configured
        if (!isSupabaseConfigured) {
            console.warn('Supabase not configured, returning empty appointments');
            return [];
        }

        // Fetch appointments from Supabase
        const { data: appointments, error: appointmentsError } = await supabase
            .from('appointments')
            .select('*')
            .order('scheduled_time', { ascending: true });

        if (appointmentsError) {
            // Check if it's a "table doesn't exist" error
            if (appointmentsError.code === 'PGRST116' || appointmentsError.message?.includes('does not exist')) {
                console.warn('appointments table does not exist yet - returning empty array');
                return [];
            }
            throw appointmentsError;
        }
        if (!appointments || appointments.length === 0) return [];

        // Use provided leads or fetch them
        const leadsData = leads || await fetchLeads();
        const leadsMap = new Map(leadsData.map(l => [l.id, l]));

        // Map appointments to frontend type
        return appointments.map((apt: SupabaseAppointment) => {
            const lead = apt.lead_id ? leadsMap.get(apt.lead_id) : null;

            return {
                id: apt.id,
                lead_id: apt.lead_id || '',
                lead_name: lead ? `${lead.first_name} ${lead.last_name}` : 'Unknown',
                lead_phone: lead?.phone || '',
                start_time: apt.scheduled_time,
                status: (apt.status as Appointment['status']) || 'scheduled',
            };
        });
    } catch (error: any) {
        // Only warn for expected errors (table doesn't exist, etc.)
        const errorMessage = error?.message || error?.code || JSON.stringify(error);
        if (errorMessage.includes('does not exist') || error?.code === 'PGRST116' || error?.code === '42P01') {
            console.warn('appointments table not available:', errorMessage);
        } else {
            console.warn('Failed to fetch appointments:', errorMessage);
        }
        // Return empty array - this is expected if table doesn't exist yet
        return [];
    }
}

export async function createAppointment(appointmentData: {
    leadId?: string;
    title: string;
    time: string;
    notes?: string;
}): Promise<Appointment> {
    try {
        // Call the backend API to create an appointment
        const response = await axiosClient.post('/appointments', {
            leadId: appointmentData.leadId || null,
            time: appointmentData.time,
        });

        const data = (response as any).data || response;

        return {
            id: data.id,
            lead_id: data.lead_id || '',
            lead_name: appointmentData.title,
            lead_phone: '',
            start_time: data.scheduled_time,
            status: data.status || 'scheduled',
            notes: appointmentData.notes,
        };
    } catch (error: any) {
        console.error('Failed to create appointment:', error);
        throw new Error(error.response?.data?.message || 'Failed to create appointment');
    }
}

export async function updateAppointmentStatus(
    appointmentId: string,
    status: Appointment['status']
): Promise<Appointment> {
    try {
        if (!isSupabaseConfigured) {
            throw new Error('Supabase not configured. Cannot update appointment status.');
        }

        const { data, error } = await supabase
            .from('appointments')
            .update({ status })
            .eq('id', appointmentId)
            .select()
            .single();

        if (error) throw error;

        // Fetch lead info
        const leads = await fetchLeads();
        const lead = data.lead_id ? leads.find(l => l.id === data.lead_id) : null;

        return {
            id: data.id,
            lead_id: data.lead_id || '',
            lead_name: lead ? `${lead.first_name} ${lead.last_name}` : 'Unknown',
            lead_phone: lead?.phone || '',
            start_time: data.scheduled_time,
            status: data.status,
        };
    } catch (error) {
        console.error('Failed to update appointment status:', error);
        throw error;
    }
}

export async function rescheduleAppointment(
    appointmentId: string,
    newStartTime: string
): Promise<Appointment> {
    try {
        if (!isSupabaseConfigured) {
            throw new Error('Supabase not configured. Cannot reschedule appointment.');
        }

        const { data, error } = await supabase
            .from('appointments')
            .update({ scheduled_time: newStartTime })
            .eq('id', appointmentId)
            .select()
            .single();

        if (error) throw error;

        // Fetch lead info
        const leads = await fetchLeads();
        const lead = data.lead_id ? leads.find(l => l.id === data.lead_id) : null;

        return {
            id: data.id,
            lead_id: data.lead_id || '',
            lead_name: lead ? `${lead.first_name} ${lead.last_name}` : 'Unknown',
            lead_phone: lead?.phone || '',
            start_time: data.scheduled_time,
            status: data.status,
        };
    } catch (error) {
        console.error('Failed to reschedule appointment:', error);
        throw error;
    }
}
