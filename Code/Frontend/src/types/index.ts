// Lead Management Types
export interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email?: string;
  email_status?:
  | "pending"
  | "sent"
  | "opened"
  | "clicked"
  | "bounced"
  | "failed";
  source:
  | "facebook"
  | "instantly"
  | "google"
  | "referral"
  | "website"
  | "csv_import"
  | "google_ads";
  type?: "hot" | "cold"; // Hot leads get called immediately, cold leads go through nurture flow
  bill_amount?: number;
  status: "new" | "contacted" | "converted" | "declined"; // converted = qualified, declined = disqualified
  qualification_data?: QualificationData;
  created_at: string;
  last_call_date?: string;
  appointment_status?: "none" | "scheduled" | "completed" | "cancelled";
}

export interface QualificationData {
  roof_type?: string;
  credit_confident?: boolean;
  homeowner_status?: boolean;
  interest_level?: "high" | "medium" | "low";
  notes?: string;
}

// Call Log Types
export interface CallLog {
  id: string;
  lead_id: string;
  lead_name: string;
  duration_seconds: number;
  outcome:
  | "booked"
  | "qualified"
  | "voicemail"
  | "hangup"
  | "failed"
  | "dnc"
  | "not_qualified";
  recording_url?: string;
  transcript_summary?: string;
  transcript_full?: string;
  latency_p50?: number;
  created_at: string;
  transcript?: string;
  ai_summary?: string;
  conversation_context?: any;
  key_points?: any;
  cost_breakdown?: {
    realtime_api?: { tokens: number; cost: number };
    rag_searches?: { count: number; tokens: number; cost: number };
    ai_analysis?: { tokens: number; cost: number };
    ai_summary?: { tokens: number; cost: number };
    total_cost: number;
    timestamp?: string;
  };
}

// Appointment Types
export interface Appointment {
  id: string;
  lead_id: string;
  lead_name: string;
  lead_phone: string;
  start_time: string;
  end_time?: string;
  status: "scheduled" | "confirmed" | "completed" | "cancelled" | "no_show";
  notes?: string;
}

// Dashboard Types
export interface DashboardStats {
  total_leads_today: number;
  total_leads_change: number;
  calls_triggered: number;
  calls_change: number;
  appointments_booked: number;
  appointments_change: number;
  conversion_rate: number;
  conversion_change: number;
}

export interface ActivityItem {
  id: string;
  type:
  | "call_completed"
  | "appointment_booked"
  | "lead_qualified"
  | "call_failed"
  | "new_lead";
  message: string;
  lead_name?: string;
  timestamp: string;
}

// Settings Types
export interface Settings {
  auto_dial_enabled: boolean;
  double_dial_enabled: boolean;
  voicemail_enabled: boolean;
  google_connected?: boolean; // Whether Google OAuth is connected for Gmail/Calendar
  google_admin_tokens?: {
    profile?: {
      name: string;
      email: string;
      picture: string;
    };
  };
}
