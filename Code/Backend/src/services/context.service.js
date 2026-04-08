/**
 * Context Service - Phase 3: Context Continuity
 * Handles loading and managing previous call context
 */
const { supabaseAdmin } = require("../lib/supabase");

// ✨ SPEED: In-memory cache for lead data and call context
// Avoids repeated DB lookups for the same lead across rapid call attempts (double-dial, retries)
const _leadCache = new Map();
const _contextCache = new Map();
const CACHE_TTL = 3 * 60 * 1000; // 3 minutes - short enough to stay fresh, long enough for retries

function _getCached(cache, key) {
  const entry = cache.get(key);
  if (entry && (Date.now() - entry.ts) < CACHE_TTL) return entry.data;
  if (entry) cache.delete(key);
  return null;
}

function _setCache(cache, key, data) {
  cache.set(key, { data, ts: Date.now() });
  // Prune if too large
  if (cache.size > 200) {
    const now = Date.now();
    for (const [k, v] of cache) {
      if (now - v.ts > CACHE_TTL) cache.delete(k);
    }
  }
}
/**
 * Get previous call history for a lead by phone number
 * @param {string} leadId - The lead UUID
 * @param {number} limit - Number of previous calls to fetch (default: 3)
 * @returns {Promise<Object>} Previous call context
 */
async function getPreviousCallContext(leadId, limit = 3) {
  try {
    if (!leadId) {
      return {
        has_previous_calls: false,
        previous_calls: [],
        summary: null,
      };
    }
    // ✨ SPEED: Check cache first (helps double-dial and rapid retries)
    const cached = _getCached(_contextCache, leadId);
    if (cached) return cached;
    // Fetch previous calls for this lead
    const { data: previousCalls, error } = await supabaseAdmin
      .from("call_logs")
      .select(
        "id, created_at, status, duration, ai_summary, conversation_context, transcript"
      )
      .eq("lead_id", leadId)
      .eq("status", "completed")
      .order("created_at", { ascending: false })
      .limit(limit);
    if (error) {
      console.error("[CONTEXT] Error fetching previous calls:", error);
      return {
        has_previous_calls: false,
        previous_calls: [],
        summary: null,
      };
    }
    if (!previousCalls || previousCalls.length === 0) {
      return {
        has_previous_calls: false,
        previous_calls: [],
        summary: null,
      };
    }
    // Build context summary from previous calls
    const contextSummary = buildContextSummary(previousCalls);
    const result = {
      has_previous_calls: true,
      previous_calls: previousCalls,
      summary: contextSummary,
      last_call_date: previousCalls[0]?.created_at,
      total_previous_calls: previousCalls.length,
    };
    _setCache(_contextCache, leadId, result);
    return result;
  } catch (error) {
    console.error("[CONTEXT] Failed to get previous call context:", error);
    return {
      has_previous_calls: false,
      previous_calls: [],
      summary: null,
    };
  }
}
/**
 * Build a concise summary from previous calls
 * @param {Array} calls - Previous call records
 * @returns {string} Summary text
 */
function buildContextSummary(calls) {
  if (!calls || calls.length === 0) {
    return null;
  }
  const summaryParts = [];
  const mostRecentCall = calls[0];
  // Add information from most recent call
  if (mostRecentCall.ai_summary) {
    summaryParts.push(`Last call: ${mostRecentCall.ai_summary}`);
  }
  // Extract key information from conversation context
  if (mostRecentCall.conversation_context) {
    const ctx = mostRecentCall.conversation_context;
    if (ctx.customer_interests && ctx.customer_interests.length > 0) {
      summaryParts.push(`Interests: ${ctx.customer_interests.join(", ")}`);
    }
    if (ctx.objections_raised && ctx.objections_raised.length > 0) {
      summaryParts.push(
        `Previous concerns: ${ctx.objections_raised.join(", ")}`
      );
    }
    if (ctx.call_outcome) {
      summaryParts.push(`Last outcome: ${ctx.call_outcome}`);
    }
    // ✨ Include qualification state from previous call
    if (ctx.qualification) {
      const q = ctx.qualification;
      const qParts = [];
      if (q.homeowner !== null) qParts.push(`Homeowner: ${q.homeowner ? 'Yes' : 'No'}`);
      if (q.bill_amount) qParts.push(`Bill: $${q.bill_amount}/mo`);
      if (q.credit_score) qParts.push(`Credit: ${q.credit_score}`);
      if (q.roof_shade) qParts.push(`Roof: ${q.roof_shade}`);
      if (qParts.length > 0) {
        summaryParts.push(`Qualification: ${qParts.join(", ")}`);
      }
    }
  }
  // If we have multiple calls, add a count
  if (calls.length > 1) {
    summaryParts.push(`Total previous calls: ${calls.length}`);
  }
  return summaryParts.join(" | ");
}
/**
 * Generate enhanced system message with previous context
 * @param {string} baseMessage - Base system message
 * @param {Object} previousContext - Previous call context from getPreviousCallContext
 * @param {Object} leadInfo - Lead information (name, phone, etc.)
 * @returns {string} Enhanced system message
 */
function generateContextualSystemMessage(
  baseMessage,
  previousContext,
  leadInfo = {}
) {
  const contextAddition = [];

  // ✨ CRITICAL: Always inject lead qualification data (even on first call)
  // The playbook's personalized opener requires name, utility, bill, and address
  // to drive 35% higher conversion rates on outbound voice.
  if (leadInfo) {
    if (leadInfo.name) {
      contextAddition.push(`\n\n=== LEAD DATA (Use to personalize your opener and every response) ===`);
      contextAddition.push(`Customer Name: ${leadInfo.name}`);
      if (leadInfo.firstName) contextAddition.push(`First Name: ${leadInfo.firstName}`);
    }
    const qualificationData = [];
    if (leadInfo.bill_amount) {
      qualificationData.push(`Monthly electric bill: $${leadInfo.bill_amount}`);
    }
    if (leadInfo.utility_provider) {
      qualificationData.push(`Utility provider: ${leadInfo.utility_provider}`);
    }
    if (leadInfo.credit_score) {
      qualificationData.push(`Credit score: ${leadInfo.credit_score === 'yes' ? 'Above 650' : leadInfo.credit_score === 'no' ? 'Below 650' : 'Uncertain'}`);
    }
    if (leadInfo.address) {
      qualificationData.push(`Address: ${leadInfo.address}`);
    }
    if (qualificationData.length > 0) {
      if (contextAddition.length === 0) {
        contextAddition.push(`\n\n=== LEAD DATA (Use to personalize your opener and every response) ===`);
      }
      contextAddition.push(qualificationData.join("\n"));
      contextAddition.push(`\nCRITICAL: Use this data in your opener — reference their utility provider and bill amount by name. This drives 35% higher conversion. Still confirm the data during the call.`);
    }
  }

  // If no previous calls AND no lead data, return base message as-is
  if (contextAddition.length === 0 && (!previousContext || !previousContext.has_previous_calls)) {
    return baseMessage;
  }

  // If no previous calls but we have lead data, return base + lead data
  if (!previousContext || !previousContext.has_previous_calls) {
    return baseMessage + contextAddition.join("\n");
  }

  // Add previous conversation context
  contextAddition.push("\n\n=== PREVIOUS CONVERSATION CONTEXT ===");
  contextAddition.push(
    `This customer has called ${previousContext.total_previous_calls} time(s) before.`
  );
  if (previousContext.last_call_date) {
    const lastCallDate = new Date(previousContext.last_call_date);
    const daysAgo = Math.floor(
      (Date.now() - lastCallDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    contextAddition.push(`Last call was ${daysAgo} day(s) ago.`);
  }
  if (previousContext.summary) {
    contextAddition.push(`\nPrevious Context: ${previousContext.summary}`);
  }
  // Add specific details from most recent call
  if (
    previousContext.previous_calls &&
    previousContext.previous_calls.length > 0
  ) {
    const recentCall = previousContext.previous_calls[0];
    if (recentCall.conversation_context) {
      const ctx = recentCall.conversation_context;
      if (ctx.customer_interests && ctx.customer_interests.length > 0) {
        contextAddition.push(
          `\nCustomer showed interest in: ${ctx.customer_interests.join(", ")}`
        );
      }
      if (ctx.objections_raised && ctx.objections_raised.length > 0) {
        contextAddition.push(
          `\nPrevious concerns raised: ${ctx.objections_raised.join(", ")}`
        );
      }
      if (ctx.objections_resolved && ctx.objections_resolved.length > 0) {
        contextAddition.push(
          `\nConcerns addressed: ${ctx.objections_resolved.join(", ")}`
        );
      }
      if (ctx.call_outcome) {
        contextAddition.push(`\nLast call outcome: ${ctx.call_outcome}`);
      }
      // ✨ Include qualification progress from previous call
      if (ctx.qualification) {
        const q = ctx.qualification;
        contextAddition.push(`\n=== PREVIOUS QUALIFICATION PROGRESS (Step ${q.step_reached || 0}/4) ===`);
        if (q.homeowner !== null) contextAddition.push(`Homeowner: ${q.homeowner ? 'YES - confirmed' : 'NO - not a homeowner'}`);
        if (q.bill_amount) contextAddition.push(`Monthly bill: $${q.bill_amount} (verbally stated)`);
        if (q.credit_score) contextAddition.push(`Credit confidence: ${q.credit_score}`);
        if (q.roof_shade) contextAddition.push(`Roof/shade: ${q.roof_shade}`);
        if (q.step_reached < 4) {
          contextAddition.push(`\nIMPORTANT: Resume qualification from step ${q.step_reached + 1}. Do NOT re-ask questions they already answered.`);
        }
      }
    }
  }
  contextAddition.push("\n=== END PREVIOUS CONTEXT ===");
  contextAddition.push(
    "\n\nUse this context to provide a personalized experience. Reference previous conversations when appropriate. If they had concerns before, check if those were resolved. If an appointment was scheduled, ask how it went."
  );

  // FORCE OVERRIDE
  // ✨ NEW: Objection Handling Refinements
  const OBJECTION_GUIDE = `
  
=== CRITICAL OBJECTION HANDLING ===
1. UCC-1 vs Lien:
   - If user mentions "lien", CLARIFY: "It is NOT a lien on your home. It is a UCC-1 fixture filing."
   - EXPLAIN: "This simply secures the solar panels themselves, not your property. It does not prevent you from selling or refinancing."

2. Escalator vs Inflation:
   - If user asks about the "escalator" or "yearly increase", FRAME it against inflation.
   - SAY: "Utility rates historically rise 4-6% per year. Our 2.9% fixed escalator protects you from unpredictable utility spikes."
===================================
`;

  return `
## IMPORTANT: RETURNING CALLER DETECTED
The user has called before. DO NOT use the generic "New Lead" greeting.
Instead, say: "Hi [Name]! Good to speak with you again." or similar.
Reference their last call: "${previousContext.summary || 'unknown'}".

` + baseMessage + "\n" + OBJECTION_GUIDE + "\n" + contextAddition.join("\n");
}
/**
 * Get lead information by phone number
 * @param {string} phoneNumber - Phone number to search for
 * @returns {Promise<Object|null>} Lead information or null
 */
async function getLeadByPhone(phoneNumber) {
  try {
    if (!phoneNumber) {
      return null;
    }
    // ✨ SPEED: Check cache first
    const cached = _getCached(_leadCache, phoneNumber);
    if (cached) return cached;

    // Clean phone number - sanitize to prevent query injection
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    const sanitizedPhone = phoneNumber.replace(/[^+\d]/g, "");
    const { data: leads, error } = await supabaseAdmin
      .from("leads")
      .select("id, name, phone, email, status, bill_amount, utility_provider, credit_score, address")
      .or(`phone.eq.${sanitizedPhone},phone.eq.${cleanPhone}`)
      .limit(1);
    if (error || !leads || leads.length === 0) {
      return null;
    }
    const data = leads[0];
    // Parse name field (stored as single field "John Smith")
    const nameParts = (data.name || '').split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadResult = {
      id: data.id,
      name: data.name || '',
      firstName: firstName,
      lastName: lastName,
      phone: data.phone,
      email: data.email,
      status: data.status,
      bill_amount: data.bill_amount,
      utility_provider: data.utility_provider,
      credit_score: data.credit_score,
      address: data.address,
    };
    _setCache(_leadCache, phoneNumber, leadResult);
    return leadResult;
  } catch (error) {
    console.error("[CONTEXT] Error fetching lead by phone:", error);
    return null;
  }
}
/** Clear in-memory caches (used in tests) */
function clearCache() {
  _leadCache.clear();
  _contextCache.clear();
}

module.exports = {
  getPreviousCallContext,
  generateContextualSystemMessage,
  getLeadByPhone,
  buildContextSummary,
  clearCache,
};
