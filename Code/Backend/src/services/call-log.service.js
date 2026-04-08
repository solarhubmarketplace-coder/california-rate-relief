const { supabaseAdmin } = require("../lib/supabase");

class CallLogService {
  /**
   * Create a new call log entry
   * @param {Object} payload - { leadId, callSid, status }
   * @returns {Object} Created call log
   */
  async createCallLog({ leadId, callSid, status, attemptNumber = 1 }) {
    const { data, error } = await supabaseAdmin
      .from("call_logs")
      .insert({
        lead_id: leadId,
        call_sid: callSid,
        status: status || "initiated",
        attempt_number: attemptNumber,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating call log:", error);
      throw { statusCode: 500, message: error.message };
    }

    return data;
  }

  /**
   * Update a call log by call SID
   * @param {string} callSid - Twilio Call SID
   * @param {Object} updates - Fields to update
   * @returns {Object} Updated call log
   */
  async updateCallLog(callSid, updates) {
    const updateData = { ...updates };

    // Handle specific status transitions
    if (updates.status === "answered" && !updates.answered_at) {
      updateData.answered_at = new Date().toISOString();
    }
    if (
      ["completed", "failed", "busy", "no-answer", "canceled"].includes(
        updates.status
      )
    ) {
      updateData.ended_at = new Date().toISOString();
    }

    const { data, error } = await supabaseAdmin
      .from("call_logs")
      .update(updateData)
      .eq("call_sid", callSid)
      .select()
      .single();

    if (error) {
      console.error("Error updating call log:", error);
      // Don't throw, just log - call log might not exist yet
      return null;
    }

    return data;
  }

  /**
   * Get the latest call log for a lead
   * @param {string} leadId - Lead UUID
   * @returns {Object|null} Latest call log or null
   */
  async getLatestCallLogForLead(leadId) {
    const { data, error } = await supabaseAdmin
      .from("call_logs")
      .select("*")
      .eq("lead_id", leadId)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null; // No rows
      console.error("Error getting call log:", error);
      return null;
    }

    return data;
  }

  /**
   * Get calls that need retry (failed/no-answer with attempt_number < 2)
   * @returns {Array} List of call logs needing retry
   */
  async getCallsForRetry() {
    const { data, error } = await supabaseAdmin
      .from("call_logs")
      .select("*, leads(*)")
      .in("status", ["failed", "busy", "no-answer"])
      .lt("attempt_number", 2)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error getting calls for retry:", error);
      return [];
    }

    return data || [];
  }

  /**
   * Get call logs for a lead
   * @param {string} leadId - Lead UUID
   * @returns {Array} List of call logs
   */
  async getCallLogsForLead(leadId) {
    const { data, error } = await supabaseAdmin
      .from("call_logs")
      .select("*")
      .eq("lead_id", leadId)
      .order("created_at", { ascending: false });

    if (error) {
      throw { statusCode: 500, message: error.message };
    }

    return data || [];
  }

  /**
   * Count total call attempts for a lead
   * @param {string} leadId - Lead UUID
   * @returns {number} Total number of call logs for this lead
   */
  async getCallCountForLead(leadId) {
    const { count, error } = await supabaseAdmin
      .from("call_logs")
      .select("*", { count: "exact", head: true })
      .eq("lead_id", leadId);

    if (error) {
      console.error("[CallLogService] Error counting calls:", error);
      return 0;
    }

    return count || 0;
  }
}

module.exports = new CallLogService();
