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
    this.CHECK_INTERVAL_MS = config.QUEUE_CHECK_INTERVAL;
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
    const ops = [
      { name: "reminders", fn: () => this.scheduleReminders() },
      { name: "reengagement", fn: () => this.scheduleReengagementCalls() },
      { name: "sequences", fn: () => this.scheduleSequenceEmails() },
      { name: "queues", fn: () => queueService.processQueues() },
      { name: "tokenRefresh", fn: () => googleAuthService.checkAndRefreshTokens() },
    ];

    for (const op of ops) {
      try {
        await op.fn();
      } catch (error) {
        console.error(`[Scheduler] Error in ${op.name}:`, error.message);
      }
    }
  }

  /**
   * Schedule next emails in sequences for leads
   * Checks leads with active sequences and schedules next step if delay period has passed
   */
  async scheduleSequenceEmails() {
    try {
      const emailSequenceService = require("./email-sequence.service");

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

      for (const tracking of activeSequences) {
        const lead = tracking.leads;
        if (!lead || !lead.email) continue;

        // Get sequence steps
        const { data: steps } = await supabaseAdmin
          .from("email_sequence_steps")
          .select("*")
          .eq("sequence_id", tracking.sequence_id)
          .order("step_order", { ascending: true });

        if (!steps || steps.length === 0) continue;

        // Get current step info
        const currentStep = steps.find(
          (s) => s.step_order === tracking.current_step
        );

        if (!currentStep) continue;

        // Check if we need to schedule the next step
        const lastSent = tracking.last_sent_at
          ? new Date(tracking.last_sent_at)
          : null;

        // If no last_sent_at, first email should already be queued
        // Check if delay period has passed for next step
        if (lastSent) {
          const delayMs = currentStep.delay_days * 24 * 60 * 60 * 1000;
          const nextSendTime = new Date(lastSent.getTime() + delayMs);

          if (now < nextSendTime) {
            continue; // Not time yet
          }
        }

        // Check if next step exists
        const nextStepOrder = tracking.current_step + 1;
        const nextStep = steps.find(
          (s) => s.step_order === nextStepOrder
        );

        if (!nextStep) {
          // Sequence completed - will be handled by queue service
          continue;
        }

        // Check if task already exists for this step
        const { data: existingTask } = await supabaseAdmin
          .from("communication_tasks")
          .select("id")
          .eq("lead_id", lead.id)
          .eq("task_type", "email")
          .eq("metadata->>sequence_step", String(nextStepOrder))
          .in("status", ["pending", "processing"])
          .limit(1);

        if (existingTask && existingTask.length > 0) {
          continue; // Already scheduled
        }

        // Calculate scheduled time based on delay
        const delayMs = nextStep.delay_days * 24 * 60 * 60 * 1000;
        const scheduledAt = lastSent
          ? new Date(lastSent.getTime() + delayMs)
          : new Date(now.getTime() + 60 * 1000); // Default 60s if no last_sent

        // Create email task for next step
        await queueService.createTask({
          lead_id: lead.id,
          task_type: "email",
          scheduled_at: scheduledAt.toISOString(),
          metadata: {
            sequence_id: tracking.sequence_id,
            sequence_step: nextStepOrder,
          },
        });

        const sequenceName = tracking.email_sequences?.name || 'Unknown';
        console.log(
          `[Scheduler] Scheduled sequence step ${nextStepOrder} for lead ${lead.id} (${sequenceName})`
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
          .not('phone', 'is', null),
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

      for (const lead of eligibleLeads) {
        // Check if a 90-day follow-up task already exists for this lead
        const { data: existingTask } = await supabaseAdmin
          .from('communication_tasks')
          .select('id')
          .eq('lead_id', lead.id)
          .eq('metadata->>trigger', 'followup_90_day')
          .in('status', ['pending', 'processing', 'completed'])
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
      }
    } catch (error) {
      console.error('[Scheduler] Error in scheduleReengagementCalls:', error);
    }
  }
}

module.exports = new SchedulerService();
