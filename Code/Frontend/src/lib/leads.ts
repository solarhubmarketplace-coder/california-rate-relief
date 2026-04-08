// Lead API Functions - Connected to Backend
import { Lead } from '@/types';
import axiosClient from './axios';
import { supabase, isSupabaseConfigured } from './supabaseClient';

// ============================================
// Types
// ============================================

interface BackendLead {
    id: string;
    name: string | null;
    phone: string;
    email: string | null;
    email_status: string | null;
    source: string | null;
    type: string | null;
    status: string;
    created_at: string;
}

interface BackendApiResponse<T> {
    message: string;
    data: T;
    timestamp: string;
}

// ============================================
// Helper Functions
// ============================================

// Helper to parse name into first_name and last_name
export function parseBackendLead(backendLead: BackendLead): Lead {
    const nameParts = (backendLead.name || '').split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    return {
        id: backendLead.id,
        first_name: firstName,
        last_name: lastName,
        phone: backendLead.phone,
        email: backendLead.email || undefined,
        email_status: (backendLead.email_status as Lead['email_status']) || undefined,
        source: (backendLead.source as Lead['source']) || 'website',
        type: (backendLead.type as Lead['type']) || undefined,
        status: (backendLead.status as Lead['status']) || 'new',
        created_at: backendLead.created_at,
    };
}

// ============================================
// API Functions
// ============================================

export async function fetchLeads(filters?: { status?: string; search?: string }): Promise<Lead[]> {
    try {
        const response = await axiosClient.get<BackendApiResponse<BackendLead[]>>('/leads');
        const backendLeads: BackendLead[] = (response as any).data || response;

        // Convert backend leads to frontend Lead type
        let leads = backendLeads.map(parseBackendLead);

        // Apply client-side filters
        if (filters?.status && filters.status !== 'all') {
            leads = leads.filter(l => l.status === filters.status);
        }

        if (filters?.search) {
            const searchLower = filters.search.toLowerCase();
            leads = leads.filter(l =>
                l.first_name.toLowerCase().includes(searchLower) ||
                l.last_name.toLowerCase().includes(searchLower) ||
                l.email?.toLowerCase().includes(searchLower) ||
                l.phone.includes(searchLower)
            );
        }

        return leads;
    } catch (error) {
        console.error('Failed to fetch leads from backend:', error);
        throw error;
    }
}

export async function fetchLeadById(id: string): Promise<Lead | null> {
    try {
        const leads = await fetchLeads();
        return leads.find(l => l.id === id) || null;
    } catch (error) {
        console.error('Failed to fetch lead:', error);
        throw error;
    }
}

export async function createLead(leadData: {
    first_name: string;
    last_name: string;
    phone: string;
    email?: string;
    address?: string;
    source: Lead['source'];
    type?: Lead['type'];
    bill_amount?: number;
    utility_provider?: string;
    credit_score?: string;
    // Tracking parameters (hidden fields for ad attribution)
    gclid?: string | null;      // Google Click ID
    fbclid?: string | null;     // Facebook Click ID
    utm_source?: string | null;
    utm_campaign?: string | null;
    utm_content?: string | null;
}): Promise<Lead> {
    try {
        const response = await axiosClient.post<BackendApiResponse<BackendLead>>('/leads', {
            name: `${leadData.first_name} ${leadData.last_name}`,
            phone: leadData.phone,
            email: leadData.email,
            address: leadData.address,
            source: leadData.source,
            type: leadData.type || 'hot',
            bill_amount: leadData.bill_amount,
            utility_provider: leadData.utility_provider,
            credit_score: leadData.credit_score,
            // Tracking parameters
            gclid: leadData.gclid,
            fbclid: leadData.fbclid,
            utm_source: leadData.utm_source,
            utm_campaign: leadData.utm_campaign,
            utm_content: leadData.utm_content,
        });

        const backendLead: BackendLead = (response as any).data || response;

        // Map backend response to frontend Lead type with all provided data
        return {
            id: backendLead.id,
            first_name: leadData.first_name,
            last_name: leadData.last_name,
            phone: leadData.phone,
            email: leadData.email,
            source: leadData.source,
            type: leadData.type,
            bill_amount: leadData.bill_amount,
            status: 'new',
            created_at: backendLead.created_at || new Date().toISOString(),
        };
    } catch (error) {
        console.error('Failed to create lead:', error);
        throw error;
    }
}

export async function updateLeadStatus(leadId: string, status: Lead['status']): Promise<Lead> {
    try {
        if (!isSupabaseConfigured) {
            throw new Error('Supabase not configured. Cannot update lead status.');
        }

        const { data, error } = await supabase
            .from('leads')
            .update({ status })
            .eq('id', leadId)
            .select()
            .single();

        if (error) throw error;
        return parseBackendLead(data);
    } catch (error) {
        console.error('Failed to update lead status:', error);
        throw error;
    }
}

export async function triggerAICall(leadId: string): Promise<{ success: boolean; callId?: string; error?: string }> {
    try {
        // First, get the lead's phone number
        const lead = await fetchLeadById(leadId);
        if (!lead) {
            return { success: false, error: 'Lead not found' };
        }

        // Import and use the voice service
        const { triggerVoiceCall } = await import('./voice');
        const result = await triggerVoiceCall(leadId, lead.phone);

        if (result.success) {
            return {
                success: true,
                callId: result.callSid
            };
        } else {
            return {
                success: false,
                error: result.error || 'Failed to initiate call'
            };
        }
    } catch (error: any) {
        console.error('Failed to trigger AI call:', error);
        const errorMessage = error.response?.data?.message ||
            error.message ||
            'Failed to initiate call. Please try again.';
        return { success: false, error: errorMessage };
    }
}

