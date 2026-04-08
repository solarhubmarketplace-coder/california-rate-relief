import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase configuration from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if Supabase is configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
    console.warn(
        'Missing Supabase environment variables. Some features may not work. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.'
    );
}

// Create Supabase client for client-side usage
// Uses the anonymous (public) key for Row Level Security (RLS) policies
export const supabase: SupabaseClient = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-key',
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true,
        },
    }
);

// Database type definitions for better TypeScript support
export interface Database {
    public: {
        Tables: {
            leads: {
                Row: {
                    id: string;
                    created_at: string;
                    name: string | null;
                    phone: string;
                    status: 'new' | 'contacted' | 'qualified' | 'disqualified';
                    source: string | null;
                };
                Insert: {
                    id?: string;
                    created_at?: string;
                    name?: string | null;
                    phone: string;
                    status?: 'new' | 'contacted' | 'qualified' | 'disqualified';
                    source?: string | null;
                };
                Update: {
                    id?: string;
                    created_at?: string;
                    name?: string | null;
                    phone?: string;
                    status?: 'new' | 'contacted' | 'qualified' | 'disqualified';
                    source?: string | null;
                };
            };
            calls: {
                Row: {
                    id: string;
                    lead_id: string | null;
                    started_at: string;
                    status: string | null;
                    transcript: string | null;
                    recording_url: string | null;
                    duration_seconds: number | null;
                };
                Insert: {
                    id?: string;
                    lead_id?: string | null;
                    started_at?: string;
                    status?: string | null;
                    transcript?: string | null;
                    recording_url?: string | null;
                    duration_seconds?: number | null;
                };
                Update: {
                    id?: string;
                    lead_id?: string | null;
                    started_at?: string;
                    status?: string | null;
                    transcript?: string | null;
                    recording_url?: string | null;
                    duration_seconds?: number | null;
                };
            };
            appointments: {
                Row: {
                    id: string;
                    lead_id: string | null;
                    scheduled_time: string;
                    status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no_show';
                };
                Insert: {
                    id?: string;
                    lead_id?: string | null;
                    scheduled_time: string;
                    status?: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no_show';
                };
                Update: {
                    id?: string;
                    lead_id?: string | null;
                    scheduled_time?: string;
                    status?: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no_show';
                };
            };
        };
    };
}

export default supabase;
