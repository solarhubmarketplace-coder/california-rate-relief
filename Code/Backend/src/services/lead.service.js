const { supabaseAdmin } = require("../lib/supabase");

class LeadService {
  /**
   * Create a new lead
   * @param {Object} payload - Lead data including tracking parameters
   * @returns {Object} Created lead
   */
  async createLead({
    name,
    phone,
    source,
    email,
    type,
    address,
    bill_amount,
    utility_provider,
    credit_score,
    // Tracking parameters (hidden fields for ad attribution)
    gclid,
    fbclid,
    utm_source,
    utm_campaign,
    utm_content
  }) {
    // Deduplication Check — if lead exists, update their info and re-trigger a call
    const { data: existingLeads, error: dedupError } = await supabaseAdmin
      .from("leads")
      .select("*")
      .eq("phone", phone)
      .limit(1);

    if (dedupError) {
      throw { statusCode: 500, message: dedupError.message };
    }

    if (existingLeads && existingLeads.length > 0) {
      const existingLead = existingLeads[0];

      // Update lead with any new info provided
      const updateFields = {};
      if (name) updateFields.name = name;
      if (email) updateFields.email = email;
      if (address) updateFields.address = address;
      if (bill_amount) updateFields.bill_amount = bill_amount;
      if (utility_provider) updateFields.utility_provider = utility_provider;
      if (credit_score) updateFields.credit_score = credit_score;

      if (Object.keys(updateFields).length > 0) {
        await supabaseAdmin
          .from("leads")
          .update(updateFields)
          .eq("id", existingLead.id);
      }

      // Re-trigger a voice call for the existing lead
      const queueService = require("./queue.service");
      await queueService.createTasksForLead({ ...existingLead, ...updateFields });

      console.log(
        `[LeadService] Duplicate phone ${phone} — re-triggered call for existing lead ${existingLead.id}`
      );

      return { ...existingLead, ...updateFields, _retriggered: true };
    }

    // Prepare lead data (including tracking fields)
    const leadData = {
      name,
      phone,
      source: source || "website",
      email: email || null,
      address: address || null,
      status: "new",
      // ✨ If type is explicitly provided, use it. Otherwise default based on source:
      // - Webhook/website submissions default to "hot" (trigger calls)
      // - Manual imports/default to "cold" (email only)
      type: type || (source === "webhook" || source === "website" ? "hot" : "cold"),
      bill_amount: bill_amount || null,
      utility_provider: utility_provider || null,
      credit_score: credit_score || null,
      // Tracking parameters for ad attribution
      gclid: gclid || null,
      fbclid: fbclid || null,
      utm_source: utm_source || null,
      utm_campaign: utm_campaign || null,
      utm_content: utm_content || null,
      created_at: new Date().toISOString(),
    };

    // Insert Lead
    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert(leadData)
      .select()
      .single();

    if (error) {
      throw { statusCode: 500, message: error.message };
    }

    // ✨ NEW: Assign email sequence to lead if active sequence exists
    try {
      const emailSequenceService = require("./email-sequence.service");
      const activeSequence = await emailSequenceService.getActiveSequence(leadData.type);
      
      if (activeSequence) {
        await emailSequenceService.assignSequenceToLead(data.id, activeSequence.id);
        console.log(
          `[LeadService] Assigned sequence "${activeSequence.name}" to lead ${data.id}`
        );
      }
    } catch (seqError) {
      console.error("[LeadService] Failed to assign sequence:", seqError.message);
      // Non-blocking - continue even if sequence assignment fails
    }

    // Create queue tasks for the new lead
    const queueService = require("./queue.service");
    await queueService.createTasksForLead(data);

    return data;
  }

  /**
   * Create multiple leads (bulk ingestion)
   * @param {Array} leads - Array of lead objects { name, phone, source, type, sequence_id? }
   * @returns {Object} { created: [], skipped: [], errors: [] }
   */
  async createLeads(leads) {
    const results = {
      created: [],
      skipped: [],
      errors: [],
    };

    // Get all existing phones for deduplication
    const phones = leads.map((l) => l.phone).filter(Boolean);
    const { data: existingLeads } = await supabaseAdmin
      .from("leads")
      .select("phone")
      .in("phone", phones);

    const existingPhones = new Set((existingLeads || []).map((l) => l.phone));

    // Filter and prepare leads for insertion
    const leadsToInsert = [];
    for (const lead of leads) {
      if (!lead.phone) {
        results.errors.push({ lead, reason: "Missing phone number" });
        continue;
      }
      if (existingPhones.has(lead.phone)) {
        results.skipped.push({ phone: lead.phone, reason: "Duplicate" });
        continue;
      }
      // Add to insert batch and mark as seen
      // ✨ Allow type to be specified in bulk import (defaults to cold for backward compatibility)
      leadsToInsert.push({
        name: lead.name || "Unknown",
        phone: lead.phone,
        source: lead.source || "csv_import",
        email: lead.email || null,
        status: "new",
        type: lead.type || "cold", // Use provided type or default to cold
        created_at: new Date().toISOString(),
      });
      existingPhones.add(lead.phone); // Prevent duplicates within batch
    }

    // Bulk insert
    if (leadsToInsert.length > 0) {
      const { data, error } = await supabaseAdmin
        .from("leads")
        .insert(leadsToInsert)
        .select();

      if (error) {
        results.errors.push({
          reason: error.message,
          count: leadsToInsert.length,
        });
      } else {
        results.created = data;

        // ✨ NEW: Assign sequences to leads if specified or use active sequence
        const emailSequenceService = require("./email-sequence.service");
        const batchSequenceId = leads[0]?.sequence_id || null;
        
        for (const createdLead of data) {
          try {
            let sequenceToAssign = null;
            
            if (batchSequenceId) {
              // All leads in batch use same sequence
              sequenceToAssign = await emailSequenceService.getSequenceById(batchSequenceId);
            } else {
              // Use active sequence for lead type
              sequenceToAssign = await emailSequenceService.getActiveSequence(createdLead.type);
            }

            if (sequenceToAssign) {
              await emailSequenceService.assignSequenceToLead(
                createdLead.id,
                sequenceToAssign.id
              );
              console.log(
                `[LeadService] Assigned sequence "${sequenceToAssign.name}" to lead ${createdLead.id}`
              );
            }
          } catch (seqError) {
            console.error(
              `[LeadService] Failed to assign sequence to lead ${createdLead.id}:`,
              seqError.message
            );
            // Non-blocking - continue even if sequence assignment fails
          }
        }

        // Create queue tasks for each new lead
        const queueService = require("./queue.service");
        for (const lead of data) {
          try {
            await queueService.createTasksForLead(lead);
          } catch (taskError) {
            console.error(
              `[LeadService] Failed to create tasks for lead ${lead.id}:`,
              taskError
            );
          }
        }
      }
    }

    return results;
  }

  /**
   * Get all leads
   * @returns {Array} List of leads
   */
  async getLeads() {
    const { data, error } = await supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw { statusCode: 500, message: error.message };
    }

    return data;
  }

  /**
   * Upgrade a lead to 'hot' status (e.g. after email reply)
   * @param {string} leadId
   * @returns {Object} Updated lead
   */
  async upgradeLeadToHot(leadId) {
    // First check if lead exists
    const { data: lead, error: fetchError } = await supabaseAdmin
      .from("leads")
      .select("*")
      .eq("id", leadId)
      .single();

    if (fetchError || !lead) {
      throw { statusCode: 404, message: "Lead not found" };
    }

    // Update type to 'hot' (Scheduler will pick it up if status is 'new')
    // If status was 'declined' or others, reset to 'new' so it gets dialed?
    // REQUIREMENT: "The system needs to automatically 'upgrade' their status to 'Hot' so the AI can engage."
    // Implication: Status must be 'new' for Scheduler to see it.

    const updates = {
      type: "hot",
      status: "new", // Reset status so scheduler sees it
    };

    const { data: updatedLead, error: updateError } = await supabaseAdmin
      .from("leads")
      .update(updates)
      .eq("id", leadId)
      .select()
      .single();

    if (updateError) {
      throw { statusCode: 500, message: updateError.message };
    }

    return updatedLead;
  }
  /**
   * Update lead consent status
   * @param {string} leadId
   * @param {string} status - 'pending', 'opted_in', 'opted_out'
   * @returns {Object} Updated lead
   */
  async updateConsentStatus(leadId, status) {
    if (!["pending", "opted_in", "opted_out"].includes(status)) {
      throw { statusCode: 400, message: "Invalid consent status" };
    }

    const updates = {
      consent_status: status,
      consent_timestamp: new Date().toISOString(),
    };

    const { data: updatedLead, error } = await supabaseAdmin
      .from("leads")
      .update(updates)
      .eq("id", leadId)
      .select()
      .single();

    if (error) {
      throw { statusCode: 500, message: error.message };
    }

    return updatedLead;
  }
}

module.exports = new LeadService();
