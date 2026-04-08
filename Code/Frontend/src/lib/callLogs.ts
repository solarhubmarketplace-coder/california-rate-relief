// Call Log API Functions - Using Supabase
import { Lead, CallLog } from "@/types";
import { supabase, isSupabaseConfigured } from "./supabaseClient";
import { fetchLeads } from "./leads";

// ============================================
// Types
// ============================================

interface SupabaseCall {
  id: string;
  lead_id: string | null;
  call_sid: string | null;
  status: string | null;
  duration: number | null;
  recording_url: string | null;
  transcript: string | null;
  ai_summary: string | null;
  conversation_context: any | null;
  key_points: any | null;
  cost_breakdown: any | null;
  created_at: string;
  answered_at: string | null;
  ended_at: string | null;
  attempt_number?: number;
}// ============================================
// Helper Functions
// ============================================

// Map Supabase call to frontend CallLog type
async function mapCallToCallLog(
  call: SupabaseCall,
  leadsMap: Map<string, Lead>
): Promise<
  CallLog & {
    status?: string;
    attempt_number?: number;
    transcript?: string;
    ai_summary?: string;
    conversation_context?: any;
    key_points?: any;
    cost_breakdown?: any;
  }
> {
  const lead = call.lead_id ? leadsMap.get(call.lead_id) : null;

  // Map call status to outcome
  let outcome: CallLog["outcome"] = "failed";
  if (call.status === "completed") outcome = "qualified";
  else if (call.status === "no-answer") outcome = "voicemail";
  else if (call.status === "failed") outcome = "failed";

  return {
    id: call.id,
    lead_id: call.lead_id || "",
    lead_name: lead ? `${lead.first_name} ${lead.last_name}` : "Unknown",
    duration_seconds: call.duration || 0,
    outcome,
    recording_url: call.recording_url || undefined,
    transcript_summary: call.transcript?.substring(0, 200) || undefined,
    transcript_full: call.transcript || undefined,
    transcript: call.transcript || undefined,
    ai_summary: call.ai_summary || undefined,
    conversation_context: call.conversation_context || undefined,
    key_points: call.key_points || undefined,
    cost_breakdown: call.cost_breakdown || undefined,
    created_at: call.created_at,
    status: call.status || undefined,
    attempt_number: call.attempt_number || 1,
  };
}

// ============================================
// API Functions
// ============================================

export async function fetchCallLogs(filters?: {
  outcome?: string;
}, leads?: Lead[]): Promise<CallLog[]> {
  try {
    // Return empty if Supabase is not configured
    if (!isSupabaseConfigured) {
      console.warn("Supabase not configured, returning empty call logs");
      return [];
    }

    // Fetch calls from Supabase
    const { data: calls, error: callsError } = await supabase
      .from("call_logs")
      .select("*")
      .order("created_at", { ascending: false });

    if (callsError) {
      // Check if it's a "table doesn't exist" error (PGRST116)
      if (
        callsError.code === "PGRST116" ||
        callsError.message?.includes("does not exist")
      ) {
        console.warn(
          "call_logs table does not exist yet - returning empty array"
        );
        return [];
      }
      throw callsError;
    }
    if (!calls || calls.length === 0) return [];

    // Use provided leads or fetch them
    const leadsData = leads || await fetchLeads();
    const leadsMap = new Map(leadsData.map((l) => [l.id, l]));

    // Map calls to CallLog type
    let logs = await Promise.all(
      calls.map((call) => mapCallToCallLog(call, leadsMap))
    );

    // Apply client-side filters by status
    if (filters?.outcome && filters.outcome !== "all") {
      logs = logs.filter((l) => (l as any).status === filters.outcome);
    }

    return logs;
  } catch (error: any) {
    // Only warn for expected errors (table doesn't exist, etc.)
    const errorMessage = error?.message || error?.code || JSON.stringify(error);
    if (
      errorMessage.includes("does not exist") ||
      error?.code === "PGRST116" ||
      error?.code === "42P01"
    ) {
      console.warn("call_logs table not available:", errorMessage);
    } else {
      console.warn("Failed to fetch call logs:", errorMessage);
    }
    // Return empty array - this is expected if table doesn't exist yet
    return [];
  }
}

export async function fetchCallLogById(id: string): Promise<CallLog | null> {
  try {
    const logs = await fetchCallLogs();
    return logs.find((c) => c.id === id) || null;
  } catch (error) {
    console.error("Failed to fetch call log:", error);
    return null;
  }
}
