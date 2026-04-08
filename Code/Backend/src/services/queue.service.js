const { supabaseAdmin } = require("../lib/supabase");
const crypto = require("crypto");
const config = require("../config");
const emailService = require("./email.service");
const smsService = require("./sms.service");
const voiceService = require("./voice.service");
const callLogService = require("./call-log.service");
const settingsService = require("./settings.service");
const { SMS_FOLLOWUP_90_DAY, fillTemplate } = require("../config/scripts");
// const settingsService = require("./settings.service");
// const settingsService = require("./settings.service");

class QueueService {
  /**
   * Calculate next valid working hours timestamp
   * DST-aware: Uses configured BUSINESS_TIMEZONE for quiet hours (8 PM - 9 AM local)
   * Also skips weekends - shifts to Monday 9 AM local
   */
  getNextWorkingHoursTime(delaySeconds = 0) {
    const target = new Date(Date.now() + delaySeconds * 1000);

    if (config.QUIET_HOURS_ENABLED === "false") {
      return target.toISOString();
    }

    const tz = config.BUSINESS_TIMEZONE || 'America/Los_Angeles';

    // Get local hour and day in business timezone
    const localHour = parseInt(target.toLocaleString('en-US', { timeZone: tz, hour: 'numeric', hour12: false }), 10);
    const localDay = target.toLocaleString('en-US', { timeZone: tz, weekday: 'short' });

    // Check weekend - shift to Monday 9 AM local
    if (localDay === 'Sat' || localDay === 'Sun') {
      const daysToMonday = localDay === 'Sat' ? 2 : 1;
      target.setTime(target.getTime() + daysToMonday * 24 * 60 * 60 * 1000);
      // Set to 9 AM local by finding UTC equivalent
      return this._setLocalHour(target, 9, tz);
    }

    // Quiet hours: before 9 AM or after 8 PM local
    if (localHour < 9) {
      console.log(`[QueueService] Scheduled time inside Quiet Hours (${localHour}:00 ${tz}). Shifted to 9 AM.`);
      return this._setLocalHour(target, 9, tz);
    }

    if (localHour >= 20) {
      // Shift to next day 9 AM
      const nextDay = new Date(target.getTime() + 24 * 60 * 60 * 1000);
      const nextDayLocal = nextDay.toLocaleString('en-US', { timeZone: tz, weekday: 'short' });
      // Skip weekend
      if (nextDayLocal === 'Sat') {
        nextDay.setTime(nextDay.getTime() + 2 * 24 * 60 * 60 * 1000);
      } else if (nextDayLocal === 'Sun') {
        nextDay.setTime(nextDay.getTime() + 1 * 24 * 60 * 60 * 1000);
      }
      console.log(`[QueueService] Scheduled time inside Quiet Hours (${localHour}:00 ${tz}). Shifted to next business day 9 AM.`);
      return this._setLocalHour(nextDay, 9, tz);
    }

    return target.toISOString();
  }

  /**
   * Convert a date to have a specific local hour in the given timezone
   * Returns ISO string of the UTC equivalent
   */
  _setLocalHour(date, targetHour, tz) {
    const dateStr = date.toLocaleString('sv-SE', { timeZone: tz }).slice(0, 10);
    const localTimeStr = `${dateStr}T${String(targetHour).padStart(2, '0')}:00:00`;
    let utcGuess = new Date(localTimeStr + 'Z');
    const getLocalStr = (d) => d.toLocaleString('sv-SE', { timeZone: tz });
    const localStr = getLocalStr(utcGuess);
    const localAsUtc = new Date(localStr.replace(' ', 'T') + 'Z').getTime();
    const targetAsUtc = new Date(localTimeStr + 'Z').getTime();
    const diff = localAsUtc - targetAsUtc;
    if (diff !== 0) {
      utcGuess = new Date(utcGuess.getTime() - diff);
    }
    return utcGuess.toISOString();
  }

  /**
   * Generate a random tracking token
   */
  generateToken() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  /**
   * Create a single generic task
   */
  async createTask(taskData) {
    const { data, error } = await supabaseAdmin
      .from("communication_tasks")
      .insert({
        ...taskData,
        status: taskData.status || "pending",
        attempt_number: taskData.attempt_number || 1,
        max_attempts: taskData.max_attempts || config.QUEUE_MAX_ATTEMPTS,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("[QueueService] Failed to create task:", error);
      throw error;
    }
    return data;
  }

  /**
   * Create tasks for a lead based on lead type
   * @param {object} lead - Lead object with id, name, email, phone, type
   */
  async createTasksForLead(lead) {
    const now = new Date();
    const tasks = [];

    // Cold leads: ONLY email
    if (lead.type === "cold") {
      if (lead.email) {
        tasks.push({
          lead_id: lead.id,
          task_type: "email",
          status: "pending",
          attempt_number: 1,
          max_attempts: config.QUEUE_MAX_ATTEMPTS,
          scheduled_at: new Date(
            now.getTime() + config.QUEUE_EMAIL_DELAY * 1000
          ).toISOString(),
          metadata: { trackingToken: this.generateToken() },
        });
      }
    }
    // Hot leads: email + SMS + voice
    else if (lead.type === "hot") {
      // Email
      if (lead.email) {
        tasks.push({
          lead_id: lead.id,
          task_type: "email",
          status: "pending",
          attempt_number: 1,
          max_attempts: config.QUEUE_MAX_ATTEMPTS,
          scheduled_at: new Date(
            now.getTime() + config.QUEUE_EMAIL_DELAY * 1000
          ).toISOString(),
          metadata: {},
        });
      }
      // SMS
      if (lead.phone) {
        tasks.push({
          lead_id: lead.id,
          task_type: "sms",
          status: "pending",
          attempt_number: 1,
          max_attempts: config.QUEUE_MAX_ATTEMPTS,
          scheduled_at: new Date(
            now.getTime() + config.QUEUE_SMS_DELAY * 1000
          ).toISOString(),
          metadata: {},
        });
      }
      // Voice
      if (lead.phone) {
        tasks.push({
          lead_id: lead.id,
          task_type: "voice",
          status: "pending",
          attempt_number: 1,
          max_attempts: config.QUEUE_MAX_ATTEMPTS,
          // ✨ NEW: Smart Scheduling (Respect Quiet Hours)
          scheduled_at: this.getNextWorkingHoursTime(config.QUEUE_VOICE_DELAY),
          metadata: {},
        });
      }
    }

    if (tasks.length > 0) {
      const { data, error } = await supabaseAdmin
        .from("communication_tasks")
        .insert(tasks)
        .select();

      if (error) {
        console.error("[QueueService] Failed to create tasks:", error);
        throw error;
      }

      console.log(
        `[QueueService] Created ${data.length} tasks for lead ${lead.id}`
      );
      return data;
    }

    return [];
  }

  /**
   * Create hot lead tasks when cold lead confirms (clicks email)
   */
  async createHotLeadTasks(lead) {
    const now = new Date();
    const tasks = [];

    // ✨ NEW: Get settings first - NO tasks if both disabled
    const autoDialSettings = await settingsService.getAutoDialSettings();
    const voicemailSettings = await settingsService.getVoicemailSettings();

    // ✨ NEW: SMS task only if Leave Voicemail is enabled
    if (voicemailSettings.enabled && lead.phone) {
      tasks.push({
        lead_id: lead.id,
        task_type: "sms",
        status: "pending",
        attempt_number: 1,
        max_attempts: config.QUEUE_MAX_ATTEMPTS,
        scheduled_at: new Date(now.getTime() + 5000).toISOString(), // 5 seconds
        metadata: { trigger: "hot_lead_welcome" },
      });
      console.log(`[QueueService] SMS task created for hot lead ${lead.id}`);
    } else {
      console.log(
        `[QueueService] Leave Voicemail disabled, skipping SMS task for lead ${lead.id}`
      );
    }

    // ✨ NEW: Voice task only if Auto-Dial is enabled
    if (autoDialSettings.enabled && lead.phone) {
      const delaySeconds = autoDialSettings.delay_seconds || 60;

      tasks.push({
        lead_id: lead.id,
        task_type: "voice",
        status: "pending",
        attempt_number: 1,
        max_attempts: config.QUEUE_MAX_ATTEMPTS,
        // ✨ NEW: Smart Scheduling
        scheduled_at: this.getNextWorkingHoursTime(delaySeconds),
        metadata: { trigger: "hot_lead_auto_dial" },
      });
      console.log(
        `[QueueService] Voice task created for hot lead ${lead.id} (delay: ${delaySeconds}s)`
      );
    } else {
      console.log(
        `[QueueService] Auto-Dial disabled, skipping voice task for lead ${lead.id}`
      );
    }

    // ✨ Result: If BOTH settings disabled, tasks array is empty (no communication)
    if (tasks.length === 0) {
      console.log(
        `[QueueService] No tasks created for hot lead ${lead.id} - all settings disabled`
      );
      return []; // Don't insert anything
    }

    // Insert tasks
    if (tasks.length > 0) {
      const { data, error } = await supabaseAdmin
        .from("communication_tasks")
        .insert(tasks)
        .select();

      if (error) {
        console.error("[QueueService] Failed to create hot lead tasks:", error);
        throw error;
      }

      console.log(
        `[QueueService] Created ${data.length} hot lead task(s) for lead ${lead.id}`
      );
      return data;
    }

    return [];
  }

  /**
   * Get pending tasks ready for processing
   */
  async getPendingTasks(taskType, limit = 5) {
    const now = new Date().toISOString();

    try {
      const { data, error } = await supabaseAdmin
        .from("communication_tasks")
        .select("*, leads(*)")
        .eq("task_type", taskType)
        .eq("status", "pending")
        .lte("scheduled_at", now)
        .order("scheduled_at", { ascending: true })
        .limit(limit);

      if (error) {
        console.error(
          `[QueueService] Error fetching ${taskType} tasks:`,
          error.message
        );
        // Don't log full error object to avoid noise, just return empty array
        return [];
      }

      return data || [];
    } catch (error) {
      // Handle network errors gracefully
      if (error.message && error.message.includes("fetch failed")) {
        console.error(
          `[QueueService] Network error fetching ${taskType} tasks - will retry on next cycle`
        );
      } else {
        console.error(
          `[QueueService] Unexpected error fetching ${taskType} tasks:`,
          error.message
        );
      }
      return [];
    }
  }

  /**
   * Update task status
   */
  async updateTask(taskId, updates) {
    const { error } = await supabaseAdmin
      .from("communication_tasks")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", taskId);

    if (error) {
      console.error("[QueueService] Failed to update task:", error);
    }
  }

  /**
   * Process email queue
   */
  async processEmailQueue() {
    const tasks = await this.getPendingTasks("email");

    for (const task of tasks) {
      if (!task.leads) continue;

      const lead = task.leads;
      if (!lead.email) {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: "No email address",
        });
        continue;
      }

      await this.updateTask(task.id, {
        status: "processing",
        executed_at: new Date().toISOString(),
      });

      try {
        const trackingToken = task.metadata?.trackingToken;

        // ✨ NEW: Check if this is a sequence email task
        if (task.metadata?.sequence_step) {
          const emailSequenceService = require("./email-sequence.service");
          const sequenceData = await emailSequenceService.getNextStepForLead(lead.id);

          if (sequenceData && sequenceData.currentStep) {
            const step = sequenceData.currentStep;
            let subject = step.subject.replace(/{{name}}/g, lead.name || "there");
            let html = step.html_content.replace(/{{name}}/g, lead.name || "there");
            html = html.replace(/{{phone}}/g, lead.phone || "");

            const convertUrl = lead.id
              ? `${config.BASE_URL}/api/leads/convert/${lead.id}`
              : "#";
            html = html.replace(/{{webhook}}/g, convertUrl);

            await emailService.sendEmail(lead.email, subject, html, {
              leadId: lead.id,
              sequenceId: sequenceData.tracking.sequence_id,
              templateId: null,
            });

            // Advance to next step (or mark complete)
            await emailSequenceService.advanceLeadToNextStep(lead.id);

            console.log(
              `[QueueService] Sent sequence step ${step.step_order} to lead ${lead.id}`
            );
          }
        }
        // ✨ Check if lead has an active email sequence (first email)
        else {
          const emailSequenceService = require("./email-sequence.service");
          const sequenceData = await emailSequenceService.getNextStepForLead(lead.id);

          if (sequenceData && sequenceData.currentStep) {
            // Lead has an active sequence - send first step
            const step = sequenceData.currentStep;
            let subject = step.subject.replace(/{{name}}/g, lead.name || "there");
            let html = step.html_content.replace(/{{name}}/g, lead.name || "there");
            html = html.replace(/{{phone}}/g, lead.phone || "");

            const convertUrl = lead.id
              ? `${config.BASE_URL}/api/leads/convert/${lead.id}`
              : "#";
            html = html.replace(/{{webhook}}/g, convertUrl);

            await emailService.sendEmail(lead.email, subject, html, {
              leadId: lead.id,
              sequenceId: sequenceData.tracking.sequence_id,
              templateId: null,
            });

            // Advance to next step (or mark complete)
            await emailSequenceService.advanceLeadToNextStep(lead.id);

            console.log(
              `[QueueService] Sent sequence step ${step.step_order} to lead ${lead.id}`
            );
          } else if (lead.type === "cold" && trackingToken) {
            // Cold lead email with tracking (fallback if no sequence)
            await emailService.sendColdLeadEmail(
              lead.email,
              lead.name || "there",
              trackingToken,
              lead.id,
              lead.phone
            );
          } else if (task.metadata?.trigger === "automated_reminder") {
            // ✨ NEW: Automated Reminders - using templates from scripts.js
            const {
              EMAIL_APPOINTMENT_REMINDER_24H_SUBJECT,
              EMAIL_APPOINTMENT_REMINDER_24H_HTML,
              EMAIL_APPOINTMENT_REMINDER_1H_SUBJECT,
              EMAIL_APPOINTMENT_REMINDER_1H_HTML,
              fillTemplate,
            } = require("../config/scripts");

            const timeType = task.metadata?.reminder_type || "upcoming";
            const subject =
              timeType === "24h"
                ? EMAIL_APPOINTMENT_REMINDER_24H_SUBJECT
                : EMAIL_APPOINTMENT_REMINDER_1H_SUBJECT;

            const htmlContent =
              timeType === "24h"
                ? fillTemplate(EMAIL_APPOINTMENT_REMINDER_24H_HTML, {
                    name: lead.name || "there",
                  })
                : fillTemplate(EMAIL_APPOINTMENT_REMINDER_1H_HTML, {
                    name: lead.name || "there",
                  });

            await emailService.sendEmail(lead.email, subject, htmlContent, {
              leadId: lead.id,
            });
          } else {
            // ✨ Hot lead - use email template from database
            let subject = `Hi ${lead.name || "there"}, we're reaching out!`;
            let html = `<p>Thanks for your interest in solar! Our team will be in touch shortly.</p>`;
            let templateId = null;

            try {
              const emailTemplateService = require("./email-template.service");
              const templates = await emailTemplateService.getTemplates();
              const hotTemplate = templates.find(
                (t) => t.lead_type === "hot" && t.is_current
              );

              if (hotTemplate) {
                templateId = hotTemplate.id;
                console.log(
                  `[QueueService] Using Hot Lead Template: ${hotTemplate.name}`
                );
                subject = hotTemplate.subject.replace(/{{name}}/g, lead.name || "there");
                let content = hotTemplate.content || hotTemplate.html_content;
                content = content.replace(/{{name}}/g, lead.name || "there");
                content = content.replace(/{{phone}}/g, lead.phone || "");

                const convertUrl = lead.id
                  ? `${config.BASE_URL}/api/leads/convert/${lead.id}`
                  : "#";
                content = content.replace(/{{webhook}}/g, convertUrl);

                html = content;
              } else {
                console.log(
                  "[QueueService] No active Hot Template found, using default email"
                );
              }
            } catch (err) {
              console.error(
                "[QueueService] Error loading hot template:",
                err.message
              );
            }

            await emailService.sendEmail(lead.email, subject, html, {
              leadId: lead.id,
              templateId,
            });
          }
        }

        await this.updateTask(task.id, {
          status: "completed",
          completed_at: new Date().toISOString(),
        });

        // Update lead's email_status
        await supabaseAdmin
          .from("leads")
          .update({ email_status: "sent" })
          .eq("id", lead.id);

        console.log(`[QueueService] Email sent to ${lead.email}`);
      } catch (error) {
        console.error(
          `[QueueService] Email failed for lead ${lead.id}:`,
          error.message
        );
        await this.handleTaskFailure(task, error.message);
      }
    }
  }

  /**
   * Process SMS queue
   */
  async processSmsQueue() {
    if (String(config.QUEUE_SMS_ENABLED) !== "true") {
      return;
    }

    const tasks = await this.getPendingTasks("sms");

    for (const task of tasks) {
      if (!task.leads) continue;

      const lead = task.leads;
      if (!lead.phone) {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: "No phone number",
        });
        continue;
      }

      // ✨ FIXED: Consent check for SMS (TCPA compliance)
      if (lead.consent_status === "opted_out") {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: "Lead opted out of SMS (TCPA compliance)",
        });
        console.log(
          `[QueueService] Skipping SMS task - lead ${lead.id} opted out`
        );
        continue;
      }

      await this.updateTask(task.id, {
        status: "processing",
        executed_at: new Date().toISOString(),
      });

      try {
        // ✨ NEW: Check if this is a missed call follow-up
        if (task.metadata?.trigger === "first_call_declined") {
          // Check for custom body passed from VoiceController
          // If no custom body (e.g. from Sync), use Data Anomaly script
          const msgBody =
            task.metadata?.custom_body ||
            `Hey ${
              lead.name || "there"
            }, it's the California Rate Relief Program. I was just reviewing the utility profile for your home... the numbers look a little distinct compared to the neighbors. I wanted to verify the meter type before we archive the file. Give me a call back!`;

          const smsResult = await smsService.sendSms(lead.phone, msgBody);

          // ✨ FIX: Log SMS to database
          if (smsResult && smsResult.sid) {
            try {
              await smsService.logSmsActivity(
                lead.id,
                smsResult.sid,
                "missed_call_followup",
                "sent"
              );
            } catch (logError) {
              console.error(
                "[QueueService] Failed to log SMS activity:",
                logError.message
              );
            }
          }

          console.log(
            `[QueueService] Sent missed call follow-up SMS to ${lead.phone}`
          );
        }
        // ✨ NEW: Automated Reminders - using templates from scripts.js
        else if (task.metadata?.trigger === "automated_reminder") {
          const {
            SMS_APPOINTMENT_REMINDER_24H,
            SMS_APPOINTMENT_REMINDER_1H,
            fillTemplate: smsTemplate,
          } = require("../config/scripts");

          const timeType = task.metadata?.reminder_type || "upcoming";
          const message =
            task.metadata?.custom_body ||
            (timeType === "24h"
              ? smsTemplate(SMS_APPOINTMENT_REMINDER_24H, {
                  name: lead.name || "there",
                })
              : smsTemplate(SMS_APPOINTMENT_REMINDER_1H, {
                  name: lead.name || "there",
                }));

          const smsResult = await smsService.sendSms(lead.phone, message);

          // ✨ FIX: Log SMS to database
          if (smsResult && smsResult.sid) {
            try {
              await smsService.logSmsActivity(
                lead.id,
                smsResult.sid,
                "appointment_reminder",
                "sent"
              );
            } catch (logError) {
              console.error(
                "[QueueService] Failed to log SMS activity:",
                logError.message
              );
            }
          }

          console.log(
            `[QueueService] Sent ${timeType} reminder SMS to ${lead.phone}`
          );
        }
        // ✨ NEW: 90-day Re-engagement SMS
        else if (task.metadata?.trigger === "followup_90_day") {
          const msgBody = fillTemplate(SMS_FOLLOWUP_90_DAY, {
            name: lead.name || "there",
          });

          const smsResult = await smsService.sendSms(lead.phone, msgBody);

          // ✨ FIX: Log SMS to database
          if (smsResult && smsResult.sid) {
            try {
              await smsService.logSmsActivity(
                lead.id,
                smsResult.sid,
                "followup_90_day",
                "sent"
              );
            } catch (logError) {
              console.error(
                "[QueueService] Failed to log SMS activity:",
                logError.message
              );
            }
          }

          console.log(
            `[QueueService] Sent 90-day re-engagement SMS to ${lead.phone}`
          );
        } else {
          // Regular hot lead welcome SMS
          await smsService.sendHotLeadWelcome(
            lead.phone,
            lead.name || "there",
            lead.id
          );
          console.log(
            `[QueueService] Sent hot lead welcome SMS to ${lead.phone}`
          );
        }

        await this.updateTask(task.id, {
          status: "completed",
          completed_at: new Date().toISOString(),
        });

        // Update lead's sms_status if field exists
        await supabaseAdmin
          .from("leads")
          .update({ sms_status: "sent" })
          .eq("id", lead.id);
      } catch (error) {
        console.error(
          `[QueueService] SMS failed for lead ${lead.id}:`,
          error.message
        );
        await this.handleTaskFailure(task, error.message);
      }
    }
  }

  /**
   * Process voice queue
   */
  async processVoiceQueue() {
    // ✨ NEW: Master switch for Voice queue
    if (String(config.QUEUE_VOICE_ENABLED) !== "true") {
      return;
    }

    // ✨ FIXED: DST-aware Quiet Hours check using configured business timezone
    if (config.QUIET_HOURS_ENABLED !== "false") {
      const tz = config.BUSINESS_TIMEZONE || 'America/Los_Angeles';
      const now = new Date();
      const localHour = parseInt(now.toLocaleString('en-US', { timeZone: tz, hour: 'numeric', hour12: false }), 10);
      const localDay = now.toLocaleString('en-US', { timeZone: tz, weekday: 'short' });
      const isWeekend = localDay === 'Sat' || localDay === 'Sun';
      const isDaytime = localHour >= 9 && localHour < 20;
      if (isWeekend || !isDaytime) {
        return; // Silent return during quiet hours/weekends
      }
    }

    // ✨ NEW: STALE CALL CLEANUP
    const STALE_THRESHOLD_MINUTES = 5;
    const staleTime = new Date(
      Date.now() - STALE_THRESHOLD_MINUTES * 60 * 1000
    ).toISOString();

    const { data: staleCalls } = await supabaseAdmin
      .from("call_logs")
      .select("id, call_sid, status")
      .in("status", ["initiated", "ringing", "queued"])
      .lt("created_at", staleTime);

    if (staleCalls && staleCalls.length > 0) {
      console.log(
        `[QueueService] Found ${staleCalls.length} stale calls - cleaning up...`
      );
      for (const call of staleCalls) {
        await callLogService.updateCallLog(call.call_sid, {
          status: "failed",
          duration: 0,
        });
        console.log(
          `[QueueService] Marked stale call ${call.call_sid} as failed (timeout)`
        );
      }
    }

    // ✨ NEW: Check if there's an active call in progress
    const { data: activeCalls } = await supabaseAdmin
      .from("call_logs")
      .select("id, call_sid, status")
      .in("status", ["initiated", "ringing", "in-progress", "queued"])
      .order("created_at", { ascending: false })
      .limit(1);

    if (activeCalls && activeCalls.length > 0) {
      // Silent return to avoid log spam
      return;
    }

    // ✨ NEW: Get only 1 voice task at a time (sequential calling)
    const tasks = await this.getPendingTasks("voice", 1);

    for (const task of tasks) {
      if (!task.leads) continue;

      const lead = task.leads;
      if (!lead.phone) {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: "No phone number",
        });
        continue;
      }

      // ✨ NEW: Consent check
      if (lead.consent_status === "opted_out") {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: "Lead opted out",
        });
        console.log(
          `[QueueService] Skipping voice task - lead ${lead.id} opted out`
        );
        continue;
      }

      // ✨ NEW: Validate lead type (MUST be hot)
      if (lead.type !== "hot") {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: "Lead is not hot",
        });
        console.log(
          `[QueueService] Skipping voice task - lead ${lead.id} is ${lead.type}`
        );
        continue;
      }

      // ✨ NEW: Check if lead already exhausted
      if (lead.status === "exhausted") {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: "Lead already exhausted",
        });
        continue;
      }

      // ✨ NEW: Count existing call attempts
      const callCount = await callLogService.getCallCountForLead(lead.id);
      if (callCount >= config.QUEUE_MAX_ATTEMPTS) {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: "Max call attempts reached",
        });
        await supabaseAdmin
          .from("leads")
          .update({ status: "exhausted" })
          .eq("id", lead.id);
        console.log(
          `[QueueService] Lead ${lead.id} reached max attempts, marked exhausted`
        );
        continue;
      }

      await this.updateTask(task.id, {
        status: "processing",
        executed_at: new Date().toISOString(),
      });

      try {
        // Pass trigger context so voice service can include it in TwiML URL
        const callContext = { trigger: task.metadata?.trigger };
        const call = await voiceService.makeCall(
          lead.id,
          lead.phone,
          callContext
        );

        await callLogService.createCallLog({
          leadId: lead.id,
          callSid: call.sid,
          status: "initiated",
          attemptNumber: task.attempt_number,
        });

        await this.updateTask(task.id, {
          status: "completed",
          completed_at: new Date().toISOString(),
          metadata: { ...task.metadata, callSid: call.sid },
        });

        console.log(
          `[QueueService] Voice call initiated to ${lead.phone}, SID: ${call.sid}`
        );

        // Only process ONE voice task per cycle
        break;
      } catch (error) {
        console.error(
          `[QueueService] Voice call failed for lead ${lead.id}:`,
          error.message
        );

        const errorCode = error.code || error.twilioCode;
        if (
          ["21211", "INVALID_PHONE_NUMBER", "21610", "30005"].includes(
            String(errorCode)
          )
        ) {
          let failureReason = `Twilio Error ${errorCode}: ${error.message}`;

          if (String(errorCode) === "21610") {
            await supabaseAdmin
              .from("leads")
              .update({ consent_status: "opted_out" })
              .eq("id", lead.id);
          }

          await this.updateTask(task.id, {
            status: "failed",
            error_message: failureReason,
          });

          await supabaseAdmin
            .from("leads")
            .update({ status: "declined" })
            .eq("id", lead.id);

          console.log(
            `[QueueService] Lead ${lead.id} marked as declined due to permanent voice failure`
          );
          continue;
        }

        await this.handleTaskFailure(task, error.message);
      }
    }
  }

  /**
   * Handle task failure with retry logic
   */
  async handleTaskFailure(task, errorMessage) {
    if (
      errorMessage &&
      (errorMessage.includes("Invalid phone number") ||
        errorMessage.includes("21211"))
    ) {
      await this.updateTask(task.id, {
        status: "failed",
        error_message: errorMessage,
      });
      console.log(
        `[QueueService] Task ${task.id} marked as failed - invalid phone number (no retry)`
      );
      return;
    }

    if (task.task_type === "voice") {
      const doubleDialSettings = await settingsService.getDoubleDialSettings();

      if (!doubleDialSettings.enabled) {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: `${errorMessage} (Double Dial disabled)`,
        });

        const { error: updateError } = await supabaseAdmin
          .from("leads")
          .update({ status: "declined" })
          .eq("id", task.lead_id);

        if (updateError) {
          console.error(
            `[QueueService] FAILED to update lead status:`,
            updateError
          );
        } else {
          console.log(
            `[QueueService] UPDATED lead ${task.lead_id} status to 'declined'`
          );
        }
        return;
      }

      if (task.attempt_number < task.max_attempts) {
        // ✨ CRITICAL FIX: Check if appointment already exists before creating retry task
        // This prevents "zombie" callbacks after successful appointment booking
        const { data: existingAppointment } = await supabaseAdmin
          .from("appointments")
          .select("id")
          .eq("lead_id", task.lead_id)
          .eq("status", "scheduled")
          .gte("scheduled_time", new Date().toISOString())
          .limit(1);

        if (existingAppointment && existingAppointment.length > 0) {
          console.log(
            `[QueueService] Cancelling retry for task ${task.id} - appointment already booked for lead ${task.lead_id}`
          );
          await this.updateTask(task.id, {
            status: "failed",
            error_message: `${errorMessage} (Appointment already booked - cancelling retry)`,
          });
          return;
        }

        // ✨ FIX: Also check if lead status is "converted"
        const { data: leadData } = await supabaseAdmin
          .from("leads")
          .select("status")
          .eq("id", task.lead_id)
          .single();

        if (leadData && leadData.status === "converted") {
          console.log(
            `[QueueService] Cancelling retry for task ${task.id} - lead ${task.lead_id} already converted`
          );
          await this.updateTask(task.id, {
            status: "failed",
            error_message: `${errorMessage} (Lead already converted - cancelling retry)`,
          });
          return;
        }

        const retryDelay =
          (doubleDialSettings.retry_after_seconds || 30) * 1000;
        const retryTime = new Date(Date.now() + retryDelay).toISOString();

        const { data: newTask, error } = await supabaseAdmin
          .from("communication_tasks")
          .insert({
            lead_id: task.lead_id,
            task_type: task.task_type,
            status: "pending",
            attempt_number: task.attempt_number + 1,
            max_attempts: task.max_attempts,
            scheduled_at: retryTime,
            metadata: task.metadata,
          })
          .select()
          .single();

        if (!error && newTask) {
          await this.updateTask(task.id, {
            status: "superseded",
            error_message: errorMessage,
            metadata: { ...task.metadata, retried_as: newTask.id },
          });
          console.log(
            `[QueueService] Scheduled voice retry for task ${task.id} -> ${newTask.id} (delay: ${retryDelay}ms)`
          );
        } else {
          await this.updateTask(task.id, {
            status: "failed",
            error_message: errorMessage,
          });
        }
        return;
      } else {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: errorMessage,
        });

        const { error: updateError } = await supabaseAdmin
          .from("leads")
          .update({ status: "declined" })
          .eq("id", task.lead_id);

        if (updateError) {
          console.error(
            `[QueueService] FAILED to update lead status:`,
            updateError
          );
        } else {
          console.log(
            `[QueueService] UPDATED lead ${task.lead_id} status to 'declined'`
          );
        }
        return;
      }
    }

    if (task.attempt_number < task.max_attempts) {
      const retryTime = new Date(
        Date.now() + config.QUEUE_RETRY_DELAY * 1000
      ).toISOString();

      const { data: newTask, error } = await supabaseAdmin
        .from("communication_tasks")
        .insert({
          lead_id: task.lead_id,
          task_type: task.task_type,
          status: "pending",
          attempt_number: task.attempt_number + 1,
          max_attempts: task.max_attempts,
          scheduled_at: retryTime,
          metadata: task.metadata,
        })
        .select()
        .single();

      if (!error && newTask) {
        await this.updateTask(task.id, {
          status: "superseded",
          error_message: errorMessage,
          metadata: { ...task.metadata, retried_as: newTask.id },
        });
        console.log(
          `[QueueService] Scheduled retry for task ${task.id} -> ${newTask.id}`
        );
      } else {
        await this.updateTask(task.id, {
          status: "failed",
          error_message: errorMessage,
        });
      }
    } else {
      await this.updateTask(task.id, {
        status: "failed",
        error_message: errorMessage,
      });

      const statusField = `${task.task_type}_status`;
      await supabaseAdmin
        .from("leads")
        .update({ [statusField]: "failed" })
        .eq("id", task.lead_id);

      console.log(
        `[QueueService] Task ${task.id} failed after ${task.attempt_number} attempts`
      );
    }
  }

  /**
   * Find task by tracking token
   */
  async findTaskByTrackingToken(token) {
    const { data, error } = await supabaseAdmin
      .from("communication_tasks")
      .select("*, leads(*)")
      .eq("metadata->>trackingToken", token)
      .single();

    if (error) {
      console.error("[QueueService] Error finding task by token:", error);
      return null;
    }
    return data;
  }

  /**
   * Sync tasks based on current settings state
   */
  async syncTasksBasedOnSettings() {
    const results = {
      autoDial: { created: 0, skipped: 0 },
      doubleDial: { created: 0, skipped: 0 },
      smsFollowup: { created: 0, skipped: 0 },
    };

    // 1. AUTO-DIAL NEW LEADS
    const autoDialSettings = await settingsService.getAutoDialSettings();

    if (autoDialSettings.enabled) {
      const { data: newHotLeads, error: newError } = await supabaseAdmin
        .from("leads")
        .select("id, phone, name")
        .eq("type", "hot")
        .eq("status", "new")
        .not("phone", "is", null);

      if (newError) {
        console.error("[QueueService] Error fetching new hot leads:", newError);
      } else {
        for (const lead of newHotLeads || []) {
          const { data: existingTask } = await supabaseAdmin
            .from("communication_tasks")
            .select("id")
            .eq("lead_id", lead.id)
            .eq("task_type", "voice")
            .in("status", ["pending", "processing"])
            .limit(1);

          if (existingTask && existingTask.length > 0) {
            results.autoDial.skipped++;
            continue;
          }

          const delaySeconds = autoDialSettings.delay_seconds || 60;

          await supabaseAdmin.from("communication_tasks").insert({
            lead_id: lead.id,
            task_type: "voice",
            status: "pending",
            attempt_number: 1,
            max_attempts: config.QUEUE_MAX_ATTEMPTS,
            // ✨ NEW: Smart Scheduling
            scheduled_at: this.getNextWorkingHoursTime(delaySeconds),
            metadata: { trigger: "settings_sync", reason: "auto_dial_enabled" },
          });

          results.autoDial.created++;
          console.log(
            `[QueueService] Created voice task for new lead: ${
              lead.name || lead.id
            }`
          );
        }
      }
    }

    // 2. DOUBLE DIAL STRATEGY
    const doubleDialSettings = await settingsService.getDoubleDialSettings();

    if (doubleDialSettings.enabled) {
      const { data: declinedLeads, error: declinedError } = await supabaseAdmin
        .from("leads")
        .select("id, phone, name")
        .eq("type", "hot")
        .eq("status", "declined")
        .gt("created_at", new Date(Date.now() - 5 * 60 * 1000).toISOString())
        .not("phone", "is", null);

      if (declinedError) {
        console.error(
          "[QueueService] Error fetching declined leads:",
          declinedError
        );
      } else {
        for (const lead of declinedLeads || []) {
          // ✨ CRITICAL FIX: Check if appointment already exists before double dial
          // This prevents "zombie" callbacks after successful appointment booking
          const { data: existingAppointment } = await supabaseAdmin
            .from("appointments")
            .select("id")
            .eq("lead_id", lead.id)
            .eq("status", "scheduled")
            .gte("scheduled_time", new Date().toISOString())
            .limit(1);

          if (existingAppointment && existingAppointment.length > 0) {
            console.log(
              `[QueueService] Skipping double dial for lead ${lead.id} - appointment already booked`
            );
            results.doubleDial.skipped++;
            continue;
          }

          // ✨ FIX: Also check if lead status is "converted" (shouldn't happen if appointment check works, but safety net)
          const { data: leadData } = await supabaseAdmin
            .from("leads")
            .select("status")
            .eq("id", lead.id)
            .single();

          if (leadData && leadData.status === "converted") {
            console.log(
              `[QueueService] Skipping double dial for lead ${lead.id} - lead already converted`
            );
            results.doubleDial.skipped++;
            continue;
          }

          const callCount = await callLogService.getCallCountForLead(lead.id);

          if (callCount !== 1) {
            results.doubleDial.skipped++;
            continue;
          }

          const { data: existingTask } = await supabaseAdmin
            .from("communication_tasks")
            .select("id")
            .eq("lead_id", lead.id)
            .eq("task_type", "voice")
            .gte("attempt_number", 2)
            .in("status", ["pending", "processing"])
            .limit(1);

          if (existingTask && existingTask.length > 0) {
            results.doubleDial.skipped++;
            continue;
          }

          const now = new Date();
          const retryDelay = (doubleDialSettings.retry_after_seconds || 30) * 1000;

          await supabaseAdmin.from("communication_tasks").insert({
            lead_id: lead.id,
            task_type: "voice",
            status: "pending",
            attempt_number: 2,
            max_attempts: config.QUEUE_MAX_ATTEMPTS,
            scheduled_at: new Date(now.getTime() + retryDelay).toISOString(),
            metadata: {
              trigger: "settings_sync",
              reason: "double_dial_enabled",
            },
          });

          results.doubleDial.created++;
          console.log(
            `[QueueService] Created retry voice task for declined lead: ${
              lead.name || lead.id
            }`
          );
        }
      }
    }

    // 3. SMS FOLLOW-UP FOR NO-ANSWER
    const voicemailSettings = await settingsService.getVoicemailSettings();

    if (voicemailSettings.enabled) {
      const { data: declinedNoSms, error: smsError } = await supabaseAdmin
        .from("leads")
        .select("id, phone, name")
        .eq("status", "declined")
        .not("phone", "is", null);

      if (smsError) {
        console.error("[QueueService] Error fetching leads for SMS:", smsError);
      } else {
        for (const lead of declinedNoSms || []) {
          // ✨ FIX: Check if lead has attempted calls (either in call_logs OR failed voice tasks)
          // This handles cases where calls fail at Twilio level before call_log is created
          const callCount = await callLogService.getCallCountForLead(lead.id);

          // Check for first call attempt (attempt_number = 1) that failed/superseded
          // This ensures we only send SMS after the FIRST call attempt, not subsequent ones
          const { data: firstVoiceAttempt } = await supabaseAdmin
            .from("communication_tasks")
            .select("id, attempt_number, status")
            .eq("lead_id", lead.id)
            .eq("task_type", "voice")
            .eq("attempt_number", 1)
            .in("status", ["failed", "superseded", "completed"])
            .limit(1);

          // Lead qualifies if:
          // 1. Has exactly 1 call in call_logs (normal case), OR
          // 2. Has a failed/superseded first voice attempt (Twilio error before call_log creation)
          const hasFirstCallAttempt =
            callCount === 1 ||
            (firstVoiceAttempt && firstVoiceAttempt.length > 0);

          if (!hasFirstCallAttempt) {
            results.smsFollowup.skipped++;
            continue;
          }

          // ✨ NEW: Check if retry voice task already exists or is pending (Double Dial)
          // Ensure we don't send SMS if a Double Dial is scheduled/pending
          const { data: pendingVoice } = await supabaseAdmin
            .from("communication_tasks")
            .select("id")
            .eq("lead_id", lead.id)
            .eq("task_type", "voice")
            .in("status", ["pending", "processing"])
            .limit(1);

          if (pendingVoice && pendingVoice.length > 0) {
            // Still trying to call (Double Dial) - don't send SMS yet
            results.smsFollowup.skipped++;
            continue;
          }

          // ✨ FIX: More reliable check - query directly for the specific trigger in metadata
          const { data: existingSmsTask } = await supabaseAdmin
            .from("communication_tasks")
            .select("id")
            .eq("lead_id", lead.id)
            .eq("task_type", "sms")
            .eq("metadata->>trigger", "first_call_declined")
            .in("status", ["pending", "processing", "completed"])
            .limit(1);

          if (existingSmsTask && existingSmsTask.length > 0) {
            results.smsFollowup.skipped++;
            continue;
          }

          const now = new Date();

          await supabaseAdmin.from("communication_tasks").insert({
            lead_id: lead.id,
            task_type: "sms",
            status: "pending",
            attempt_number: 1,
            max_attempts: 1,
            scheduled_at: new Date(now.getTime() + 5000).toISOString(),
            metadata: {
              trigger: "first_call_declined",
              reason: "settings_sync",
            },
          });

          results.smsFollowup.created++;
          console.log(
            `[QueueService] Created SMS follow-up for declined lead: ${
              lead.name || lead.id
            }`
          );
        }
      }
    }

    return results;
  }

  /**
   * Run all queue processors
   */
  async processQueues() {
    try {
      // Check for new leads to auto-dial based on settings
      await this.syncTasksBasedOnSettings();

      await this.processEmailQueue();
      await this.processSmsQueue();
      await this.processVoiceQueue();
    } catch (error) {
      console.error("[QueueService] Error processing queues:", error);
    }
  }
}

module.exports = new QueueService();
