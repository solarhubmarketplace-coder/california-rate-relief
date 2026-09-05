const { supabaseAdmin, withRetry } = require("../lib/supabase-wrapper");
const queueService = require("./queue.service");
const googleAuthService = require("./google-auth.service");
const config = require("../config");

// Simple date helpers since date-fns is not available
const addMinutes = (date, minutes) => new Date(date.getTime() + minutes * 60000);
const subMinutes = (date, minutes) => new Date(date.getTime() - minutes * 60000);

class SchedulerService {
  constructor() {
    this.isRunning = false;
    this.intervalId = null;
    this.runChecksInFlight = false;
    this.lastRunAt = new Map();
    this.CHECK_INTERVAL_MS = config.QUEUE_CHECK_INTERVAL;
  }

  /**
   * Claim an operation's cadence for this pass. The timestamp is recorded
   * before the operation starts so a failing database scan cannot hot-loop.
   */
  claimCadence(name, intervalMs, nowMs) {
    const lastRunAt = this.lastRunAt.get(name);
    if (lastRunAt !== undefined && nowMs - lastRunAt < intervalMs) {
      return false;
    }

    this.lastRunAt.set(name, nowMs);
    return true;
  }

  /**
   * Start the scheduler
   */
  start() {
    if (this.isRunning) {
      console.log("[Scheduler] Already running");
      return;
    }

    console.log("[Scheduler] Starting - queue-only mode");
    this.isRunning = true;

    // Run immediately, then on interval
    this.runChecks();
    this.intervalId = setInterval(
      () => this.runChecks(),
      this.CHECK_INTERVAL_MS
    );
  }

  /**
   * Stop the scheduler
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
    console.log("[Scheduler] Stopped");
  }

  /**
   * Run all scheduled checks
   * ✨ SIMPLIFIED: Only processes queue tasks, no direct lead querying
   */
  async runChecks() {
    if (this.runChecksInFlight) {
      console.log("[Scheduler] Previous pass still running; skipping overlapping tick");
      return false;
    }

    // If the Supabase circuit breaker is open the database is saturated. Skip
    // the whole pass rather than issuing queries that will fail and consume the
    // disk-IOPS budget the instance needs in order to recover.
    try {
      const { isCircuitOpen } = require("../lib/supabase-wrapper");
      if (isCircuitOpen()) {
        console.warn("[Scheduler] Supabase circuit open; skipping tick to let the database recover");
        return false;
      }
    } catch (_) {
      // Wrapper unavailable — fall through and run normally.
    }

    this.runChecksInFlight = true;

    try {
      const nowMs = Date.now();
      const syncSettings = this.claimCadence(
        "settingsSync",
        config.SCHEDULER_SETTINGS_SYNC_INTERVAL_MS,
        nowMs
      );

      // Queue delivery runs first and on every base tick. Database-wide scans
      // are added only when their independent cadence is due.
      const ops = [
        {
          name: "queues",
          fn: () => queueService.processQueues({ syncSettings }),
        },
      ];

      if (this.claimCadence("autoEnrollments", config.SCHEDULER_AUTO_ENROLLMENT_INTERVAL_MS, nowMs)) {
        ops.push({ name: "autoEnrollments", fn: () => this.scheduleAutoEnrollments() });
      }
      if (this.claimCadence("reminders", config.SCHEDULER_REMINDER_INTERVAL_MS, nowMs)) {
        ops.push({ name: "reminders", fn: () => this.scheduleReminders() });
      }
      if (this.claimCadence("reengagement", config.SCHEDULER_REENGAGEMENT_INTERVAL_MS, nowMs)) {
        ops.push({ name: "reengagement", fn: () => this.scheduleReengagementCalls() });
      }
      if (this.claimCadence("sequences", config.SCHEDULER_SEQUENCE_INTERVAL_MS, nowMs)) {
        ops.push({ name: "sequences", fn: () => this.scheduleSequenceEmails() });
      }
      if (this.claimCadence("tokenRefresh", config.SCHEDULER_TOKEN_REFRESH_INTERVAL_MS, nowMs)) {
        ops.push({ name: "tokenRefresh", fn: () => googleAuthService.checkAndRefreshTokens() });
      }

      for (const op of ops) {
        try {
          await op.fn();
        } catch (error) {
          console.error(`[Scheduler] Error in ${op.name}:`, error.message);
        }
      }
      return true;
    } finally {
      this.runChecksInFlight = false;
    }
  }

  /**
   * Schedule next emails in sequences for leads
   * Checks leads with active sequences and schedules next step if delay period has passed
   */
  async scheduleSequenceEmails() {
    try {
      // Get all leads with active sequences that haven't completed
      const { data: activeSequences, error } = await withRetry(
        () => supabaseAdmin
          .from("lead_sequence_tracking")
          .select(`
            *,
            leads(id, email, name, phone, type),
            email_sequences(id, name, lead_type)
          `)
          .is("completed_at", null),
        { label: "Scheduler.sequences" }
      );

      if (error) {
        console.error("[Scheduler] Error fetching active sequences:", error);
        return;
      }

      if (!activeSequences || activeSequences.length === 0) {
        return;
      }

      const now = new Date();
      const stepsBySequence = new Map();

      for (const tracking of activeSequences) {
        const lead = tracking.leads;
        if (!lead || !lead.email) continue;

        // A scheduler pass may contain many leads in the same sequence. Fetch
        // its steps once instead of repeating the same read for every lead.
        if (!stepsBySequence.has(tracking.sequence_id)) {
          const { data: sequenceSteps, error: stepsError } = await supabaseAdmin
            .from("email_sequence_steps")
            .select("*")
            .eq("sequence_id", tracking.sequence_id)
            .order("step_order", { ascending: true });

          if (stepsError) {
            console.error(
              `[Scheduler] Error fetching steps for sequence ${tracking.sequence_id}:`,
              stepsError
            );
          }
          stepsBySequence.set(tracking.sequence_id, sequenceSteps || []);
        }

        const steps = stepsBySequence.get(tracking.sequence_id);

        if (!steps || steps.length === 0) continue;

        // current_step is the next unsent step. Queue it directly; adding one
        // here skipped every other email and prevented the final step.
        const currentStepOrder = Number(tracking.current_step);
        const currentStep = steps.find(
          (step) => Number(step.step_order) === currentStepOrder
        );

        if (!currentStep) continue;

        const lastSent = tracking.last_sent_at
          ? new Date(tracking.last_sent_at)
          : null;
        const delayDays = Math.max(0, Number(currentStep.delay_days) || 0);
        const delayMs = delayDays * 24 * 60 * 60 * 1000;
        const scheduledAt = lastSent
          ? new Date(lastSent.getTime() + delayMs)
          : new Date(now.getTime() + delayMs);

        if (now < scheduledAt) continue;

        // Only one task for a sequence should be outstanding for a lead. This
        // also recognizes first-step tasks created by older enrollment paths
        // that did not include sequence_step metadata.
        const { data: existingTask } = await supabaseAdmin
          .from("communication_tasks")
          .select("id")
          .eq("lead_id", lead.id)
          .eq("task_type", "email")
          .eq("metadata->>sequence_id", tracking.sequence_id)
          .in("status", ["pending", "processing"])
          .limit(1);

        if (existingTask && existingTask.length > 0) {
          continue; // Already scheduled
        }

        // Queue the tracking record's current (next unsent) step. Processing
        // the last step causes email-sequence.service to mark it complete.
        await queueService.createTask({
          lead_id: lead.id,
          task_type: "email",
          scheduled_at: scheduledAt.toISOString(),
          metadata: {
            sequence_id: tracking.sequence_id,
            sequence_step: currentStepOrder,
          },
        });

        const sequenceName = tracking.email_sequences?.name || 'Unknown';
        console.log(
          `[Scheduler] Scheduled sequence step ${currentStepOrder} for lead ${lead.id} (${sequenceName})`
        );
      }
    } catch (error) {
      console.error("[Scheduler] Error scheduling sequence emails:", error);
    }
  }

  /**
   * Schedule appointment reminders (24h and 1h)
   */
  async scheduleReminders() {
    const now = new Date();
    const queueService = require("./queue.service"); // Late bind to avoid circular dep

    // Define windows (look ahead 24h and 1h, with 30m buffer)
    const windows = [
      { type: '24h', minutes: 24 * 60 }, // Changed offsetMs to minutes for add/subMinutes
      { type: '1h', minutes: 1 * 60 }
    ];

    for (const window of windows) {
      // The original logic was:
      // const targetTime = new Date(now.getTime() + window.offsetMs);
      // const startWindow = new Date(targetTime.getTime() - 15 * 60 * 1000).toISOString(); // +/- 15 mins
      // const endWindow = new Date(targetTime.getTime() + 15 * 60 * 1000).toISOString();

      // This implies 'targetTime' is the appointment time we are looking for?
      // If window.minutes is 1440 (24h).
      // targetTime = now - 1440.
      // This implies we are looking for appointments that happened 24 hours ago?
      // THAT SEEMS WRONG for a reminder BEFORE the appointment.

      // If we want a reminder 24h BEFORE.
      // We want appointments where scheduled_time = now + 24h.
      // So targetTime should be addMinutes(now, window.minutes).

      // Let's correct this logic if it's indeed 'reminder before'.
      // Usually reminders are "24 hours before appointment".

      let targetForQuery;
      if (window.type === '24h' || window.type === '1h') {
        // Forward looking: we want to find appointments that are scheduled for 'now + window.minutes'
        targetForQuery = addMinutes(now, window.minutes);
      } else {
        // Assuming backward looking or immediate?
        targetForQuery = addMinutes(now, window.minutes); // Defaulting to forward for safety
      }

      const startWindow = subMinutes(targetForQuery, 15);
      const endWindow = addMinutes(targetForQuery, 15);

      // console.log(`[Scheduler] Checking ${window.type} reminders. Window: ${startWindow.toISOString()} - ${endWindow.toISOString()}`);

      const { data: appointments, error } = await withRetry(
        () => supabaseAdmin
          .from('appointments')
          .select('*')
          .gte('scheduled_time', startWindow.toISOString())
          .lte('scheduled_time', endWindow.toISOString())
          .eq('status', 'scheduled'),
        { label: "Scheduler.reminders" }
      );

      if (error) {
        console.error(`[Scheduler] Error fetching appointments for ${window.type}:`, error);
        continue;
      }

      if (appointments && appointments.length > 0) {
        console.log(`[Scheduler] Found ${appointments.length} appointments for ${window.type} reminder.`);
      }

      if (!appointments || appointments.length === 0) continue;

      for (const appt of appointments) {
        // Check if reminder task already exists
        // Note: filtering JSONB array in Supabase is tricky, so we rely on exact metadata match if possible
        // or just fetch by lead_id and filter in code.
        // Optimization: We check if ANY task exists for this lead + type + appt_id

        // This is not super efficient but safe:
        const { data: existing } = await supabaseAdmin
          .from('communication_tasks')
          .select('id')
          .eq('lead_id', appt.lead_id)
          .eq('metadata->>reminder_type', window.type)
          .eq('metadata->>appointment_id', appt.id)
          .limit(1); // ✨ FIX: Use limit(1) instead of single() to avoid errors when multiple tasks exist (SMS + Email)

        if (existing && existing.length > 0) continue; // Already scheduled

        // Create SMS reminder
        await queueService.createTask({
          lead_id: appt.lead_id,
          task_type: 'sms',
          scheduled_at: new Date().toISOString(), // Send now (since we are in the window)
          metadata: {
            trigger: 'automated_reminder',
            reminder_type: window.type,
            appointment_id: appt.id
          }
        });

        // ✨ NEW: Create Email reminder
        await queueService.createTask({
          lead_id: appt.lead_id,
          task_type: 'email',
          scheduled_at: new Date().toISOString(),
          metadata: {
            trigger: 'automated_reminder',
            reminder_type: window.type,
            appointment_id: appt.id
          }
        });
        console.log(`[Scheduler] Scheduled ${window.type} reminder for appointment ${appt.id}`);
      }
    }
  }

  /**
   * Schedule 90-day re-engagement calls for declined leads
   * Finds leads that were marked 'declined' more than 90 days ago
   * and creates new voice call tasks with 'followup_90_day' trigger
   */
  async scheduleReengagementCalls() {
    const REENGAGEMENT_DAYS = 90;
    const cutoffDate = new Date(Date.now() - REENGAGEMENT_DAYS * 24 * 60 * 60 * 1000).toISOString();

    try {
      // Find leads that:
      // 1. Have status 'declined'
      // 2. Were created more than 90 days ago
      // 3. Have a phone number
      const { data: eligibleLeads, error: leadsError } = await withRetry(
        () => supabaseAdmin
          .from('leads')
          .select('id, phone, name')
          .eq('status', 'declined')
          .lt('created_at', cutoffDate)
          .not('phone', 'is', null)
          .limit(config.SCHEDULER_REENGAGEMENT_BATCH_SIZE),
        { label: "Scheduler.reengagement" }
      );

      if (leadsError) {
        console.error('[Scheduler] Error fetching leads for re-engagement:', leadsError);
        return;
      }

      if (!eligibleLeads || eligibleLeads.length === 0) {
        return; // No leads need re-engagement
      }

      console.log(`[Scheduler] Found ${eligibleLeads.length} leads eligible for 90-day re-engagement`);

      // This sequence is shared by the whole batch, so resolve it once rather
      // than issuing one lookup per lead.
      let reactivationSequence = null;
      try {
        const emailSequenceService = require("./email-sequence.service");
        reactivationSequence = await emailSequenceService.getActiveSequence("reactivation");
      } catch (error) {
        console.error("[Scheduler] Failed to load reactivation sequence:", error.message);
      }

      for (const lead of eligibleLeads) {
        // Check if a 90-day follow-up task already exists for this lead
        const { data: existingTask } = await supabaseAdmin
          .from('communication_tasks')
          .select('id')
          .eq('lead_id', lead.id)
          .eq('metadata->>trigger', 'followup_90_day')
          .in('status', ['pending', 'processing', 'completed', 'failed'])
          .limit(1);

        if (existingTask && existingTask.length > 0) {
          continue; // Already has a 90-day task, skip
        }

        // Create voice task for 90-day follow-up
        await queueService.createTask({
          lead_id: lead.id,
          task_type: 'voice',
          scheduled_at: queueService.getNextWorkingHoursTime(0),
          metadata: {
            trigger: 'followup_90_day',
            reason: '90_day_reengagement'
          }
        });

        // Also create an SMS task with the 90-day script
        await queueService.createTask({
          lead_id: lead.id,
          task_type: 'sms',
          scheduled_at: new Date().toISOString(),
          metadata: {
            trigger: 'followup_90_day',
            reason: '90_day_reengagement'
          }
        });

        console.log(`[Scheduler] Scheduled 90-day re-engagement for lead ${lead.name || lead.id}`);

        // ✨ Also enroll into the 90-day reactivation email sequence
        if (reactivationSequence) {
          try {
            const emailSequenceService = require("./email-sequence.service");
            await emailSequenceService.assignSequenceToLead(lead.id, reactivationSequence.id);

            // Queue first email now so the sequence actually starts
            await queueService.createTask({
              lead_id: lead.id,
              task_type: "email",
              scheduled_at: new Date().toISOString(),
              metadata: {
                sequence_id: reactivationSequence.id,
                sequence_step: 1,
                trigger: "reactivation_start",
              },
            });
          } catch (error) {
            console.error("[Scheduler] Failed to enroll in reactivation sequence:", error.message);
          }
        }
      }
    } catch (error) {
      console.error('[Scheduler] Error in scheduleReengagementCalls:', error);
    }
  }

  /**
   * Auto-enroll leads into the correct email sequence based on their state.
   *
   * Rules:
   *   - cold leads with no active sequence    → cold_lead_nurture
   *   - call_state = 'no_book' / lead.status = 'no_booked' → hot_no_book_recovery
   *   - call_state = 'no_show' / status = 'no_show' → no_show_recovery
   *   - status = 'won' and no referral sequence yet → won_deal_referral
   *
   * post_appointment_followup and reactivation_90_day are enrolled at their
   * explicit trigger points (bookAppointment, 90-day re-engagement).
   */
  async scheduleAutoEnrollments() {
    try {
      const emailSequenceService = require("./email-sequence.service");

      // Helper: has lead already been enrolled (active or completed) in this sequence?
      const isAlreadyEnrolled = async (leadId, sequenceId) => {
        const { data } = await supabaseAdmin
          .from("lead_sequence_tracking")
          .select("id")
          .eq("lead_id", leadId)
          .eq("sequence_id", sequenceId)
          .limit(1);
        return data && data.length > 0;
      };

      // Has lead ever been enrolled in ANY sequence right now (active)?
      const hasActiveSequence = async (leadId) => {
        const { data } = await supabaseAdmin
          .from("lead_sequence_tracking")
          .select("id")
          .eq("lead_id", leadId)
          .is("completed_at", null)
          .limit(1);
        return data && data.length > 0;
      };

      const queueFirstEmail = async (leadId, sequenceId) => {
        // Check nothing is already queued
        const { data: existing } = await supabaseAdmin
          .from("communication_tasks")
          .select("id")
          .eq("lead_id", leadId)
          .eq("task_type", "email")
          .eq("metadata->>sequence_id", sequenceId)
          .in("status", ["pending", "processing"])
          .limit(1);
        if (existing && existing.length > 0) return;

        await queueService.createTask({
          lead_id: leadId,
          task_type: "email",
          scheduled_at: new Date().toISOString(),
          metadata: {
            sequence_id: sequenceId,
            sequence_step: 1,
            trigger: "auto_enroll_start",
          },
        });
      };

      // ─── 1. COLD LEADS → cold_lead_nurture ─────────────────────────────
      const coldSeq = await emailSequenceService.getActiveSequence("cold");
      if (coldSeq) {
        const { data: coldLeads } = await supabaseAdmin
          .from("leads")
          .select("id, email, type, status")
          .eq("type", "cold")
          .not("email", "is", null)
          .not("status", "in", "(declined,converted,opted_out)")
          .limit(100);

        for (const lead of coldLeads || []) {
          if (await hasActiveSequence(lead.id)) continue;
          if (await isAlreadyEnrolled(lead.id, coldSeq.id)) continue;
          await emailSequenceService.assignSequenceToLead(lead.id, coldSeq.id);
          await queueFirstEmail(lead.id, coldSeq.id);
          console.log(`[Scheduler] Auto-enrolled cold lead ${lead.id} in cold_lead_nurture`);
        }
      }

      // ─── 2. NO-BOOK → hot_no_book_recovery ──────────────────────────────
      const noBookSeq = await emailSequenceService.getActiveSequence("hot");
      if (noBookSeq) {
        const { data: noBookLeads } = await supabaseAdmin
          .from("leads")
          .select("id, email, call_state, status")
          .or("call_state.eq.no_book,status.eq.no_booked")
          .not("email", "is", null)
          .limit(100);

        for (const lead of noBookLeads || []) {
          if (await isAlreadyEnrolled(lead.id, noBookSeq.id)) continue;
          await emailSequenceService.assignSequenceToLead(lead.id, noBookSeq.id);
          await queueFirstEmail(lead.id, noBookSeq.id);
          console.log(`[Scheduler] Auto-enrolled lead ${lead.id} in hot_no_book_recovery`);
        }
      }

      // ─── 3. NO-SHOW → no_show_recovery ──────────────────────────────────
      const noShowSeq = await emailSequenceService.getActiveSequence("no_show");
      if (noShowSeq) {
        const { data: noShowLeads } = await supabaseAdmin
          .from("leads")
          .select("id, email, call_state, status")
          .or("call_state.eq.no_show,status.eq.no_show")
          .not("email", "is", null)
          .limit(100);

        for (const lead of noShowLeads || []) {
          if (await isAlreadyEnrolled(lead.id, noShowSeq.id)) continue;
          await emailSequenceService.assignSequenceToLead(lead.id, noShowSeq.id);
          await queueFirstEmail(lead.id, noShowSeq.id);
          console.log(`[Scheduler] Auto-enrolled lead ${lead.id} in no_show_recovery`);
        }
      }

      // ─── 4. WON → won_deal_referral ─────────────────────────────────────
      const referralSeq = await emailSequenceService.getActiveSequence("referral");
      if (referralSeq) {
        const { data: wonLeads } = await supabaseAdmin
          .from("leads")
          .select("id, email, status")
          .eq("status", "won")
          .not("email", "is", null)
          .limit(100);

        for (const lead of wonLeads || []) {
          if (await isAlreadyEnrolled(lead.id, referralSeq.id)) continue;
          await emailSequenceService.assignSequenceToLead(lead.id, referralSeq.id);
          await queueFirstEmail(lead.id, referralSeq.id);
          console.log(`[Scheduler] Auto-enrolled lead ${lead.id} in won_deal_referral`);
        }
      }
    } catch (error) {
      console.error("[Scheduler] Error in scheduleAutoEnrollments:", error.message);
    }
  }
}

module.exports = new SchedulerService();
