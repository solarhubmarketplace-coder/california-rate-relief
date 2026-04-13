const { supabaseAdmin } = require("../lib/supabase");
const queueService = require("./queue.service");
const config = require("../config");

class AppointmentService {
  /**
   * Create a new appointment
   * @param {Object} payload - { leadId, time, timezone }
   */
  async createAppointment({ leadId, time, timezone }) {
    // ✨ FIX: Timezone handling
    // Problm: AI sends "2023-10-27T16:00:00" intending 4 PM Local, but Date() treats as UTC (or local system).
    // Solution: If timezone provided, find the UTC time that acts as 4 PM in that timezone.

    let dateObj = new Date(time);

    if (timezone) {
      try {
        // Target: We want a UTC date 'D' such that D.inTimeZone(timezone) === "16:00"

        // Fix: Clean input to ensure we get the "face value" digits correctly
        const cleanTime = time.endsWith('Z') ? time : time + 'Z';
        const targetLiteral = new Date(cleanTime).toISOString().slice(0, 19).replace('T', ' ');

        let currentGuess = new Date(cleanTime); // Start with face-value UTC

        // Helper to get local time string in target TZ
        const getLocalStr = (d) => {
          return d.toLocaleString('sv-SE', { timeZone: timezone }); // sv-SE gives "YYYY-MM-DD HH:mm:ss"
        };

        // Iteration 1
        let localStr = getLocalStr(currentGuess);
        // Calculate difference in ms
        // We parse localStr back to date to compare values
        // (Treating localStr as if it were UTC to get a comparable number)
        let localAsUtc = new Date(localStr.replace(' ', 'T') + 'Z').getTime();
        let targetAsUtc = new Date(targetLiteral.replace(' ', 'T') + 'Z').getTime();

        let diff = localAsUtc - targetAsUtc;

        if (diff !== 0) {
          // Apply reverse offset
          currentGuess = new Date(currentGuess.getTime() - diff);

          // Double check (Iteration 2 - usually sufficient for DST boundaries)
          localStr = getLocalStr(currentGuess);
          localAsUtc = new Date(localStr.replace(' ', 'T') + 'Z').getTime();
          diff = localAsUtc - targetAsUtc;

          if (diff !== 0) {
            currentGuess = new Date(currentGuess.getTime() - diff);
          }
        }

        dateObj = currentGuess;
        console.log(`[AppointmentService] Converted ${time} (Local: ${timezone}) -> ${dateObj.toISOString()} (UTC)`);

      } catch (e) {
        console.warn(`[AppointmentService] Timezone conversion failed for ${timezone}: ${e.message}. Using default UTC.`);
      }
    } else {
      // Default behavior: Assume EST if no timezone (as per old logic logic was implicitly UTC assumed as EST)
      // Actually, old logic: "Use UTC to align with EST (9 AM EST = 14:00 UTC)"
      // This implies the input 'time' was EXPECTED to be UTC 14:00 for 9 AM EST.
      // If the AI sends 09:00 for "9 AM", we need to shift it to 14:00 UTC.
      // By default, if AI says "2023...T09:00:00Z", dateObj is 09:00 UTC.
      // If we want 09:00 EST, that is 14:00 UTC.
      // So we need to shift by +5 hours (approx).
      // Default to Pacific Time since this is a California solar business
      try {
        const defaultTz = 'America/Los_Angeles';
        // Same logic as above extracted? No, just copy paste for safety/speed without refactor risk
        let currentGuess = new Date(dateObj);
        const targetLiteral = dateObj.toISOString().slice(0, 19).replace('T', ' ');
        const getLocalStr = (d) => d.toLocaleString('sv-SE', { timeZone: defaultTz });

        let localStr = getLocalStr(currentGuess);
        let localAsUtc = new Date(localStr.replace(' ', 'T') + 'Z').getTime();
        let targetAsUtc = new Date(targetLiteral.replace(' ', 'T') + 'Z').getTime();
        let diff = localAsUtc - targetAsUtc;

        if (diff !== 0) {
          currentGuess = new Date(currentGuess.getTime() - diff);
          localStr = getLocalStr(currentGuess);
          localAsUtc = new Date(localStr.replace(' ', 'T') + 'Z').getTime();
          diff = localAsUtc - targetAsUtc;
          if (diff !== 0) currentGuess = new Date(currentGuess.getTime() - diff);
        }
        dateObj = currentGuess;
        console.log(`[AppointmentService] Defaulting ${time} to EST -> ${dateObj.toISOString()} (UTC)`);
      } catch (e) {
        // validation fallback
      }
    }


    // ✨ FIXED: Validate Business Rules using configured business timezone
    const tz = config.BUSINESS_TIMEZONE || 'America/Los_Angeles';
    const localStr = dateObj.toLocaleString('en-US', { timeZone: tz, weekday: 'short', hour: 'numeric', hour12: false });
    const localParts = localStr.split(', ');
    const localDay = localParts[0]; // "Mon", "Tue", etc.
    const localHour = parseInt(localParts[1], 10);

    // 1. Weekend Check
    if (localDay === 'Sat' || localDay === 'Sun') {
      throw {
        statusCode: 400,
        message: "Cannot book appointments on weekends (Sat/Sun).",
      };
    }

    // 2. Business Hours Check (9 AM - 5 PM in business timezone)
    if (localHour < 9 || localHour >= 17) {
      throw {
        statusCode: 400,
        message: `Appointments must be between 9:00 AM and 5:00 PM ${tz}.`,
      };
    }

    // ✨ FIX: Check for existing scheduled appointments for this lead
    const { data: existing } = await supabaseAdmin
      .from("appointments")
      .select("id, scheduled_time")
      .eq("lead_id", leadId)
      .eq("status", "scheduled")
      .gte("scheduled_time", new Date().toISOString())
      .order("scheduled_time", { ascending: true })
      .limit(1);

    let data;
    if (existing && existing.length > 0) {
      // Update existing appointment instead of creating duplicate
      console.log(
        `[AppointmentService] Updating existing appointment ${existing[0].id} (was: ${existing[0].scheduled_time})`
      );
      const { data: updatedData, error: updateError } = await supabaseAdmin
        .from("appointments")
        .update({
          scheduled_time: dateObj.toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing[0].id)
        .select()
        .single();

      if (updateError) {
        throw { statusCode: 500, message: updateError.message };
      }
      data = updatedData;
    } else {
      // Create new appointment if none exists
      const { data: newData, error } = await supabaseAdmin
        .from("appointments")
        .insert({
          lead_id: leadId,
          scheduled_time: dateObj.toISOString(),
          status: "scheduled",
        })
        .select()
        .single();

      if (error) {
        throw { statusCode: 500, message: error.message };
      }
      data = newData;
    }

    // ✨ AUTOMATION: Queue confirmation tasks
    // We require queueService here to avoid circular dependencies at top level if any

    try {
      // SMS Confirmation
      await queueService.createTask({
        lead_id: leadId,
        task_type: "sms",
        scheduled_at: new Date().toISOString(),
        metadata: {
          type: "confirmation",
          appointment_id: data.id,
          time: time,
        },
      });

      // Email Confirmation
      await queueService.createTask({
        lead_id: leadId,
        task_type: "email",
        scheduled_at: new Date().toISOString(),
        metadata: {
          type: "confirmation",
          appointment_id: data.id,
          time: time,
        },
      });
      console.log(
        `[AppointmentService] Queued confirmation tasks for appointment ${data.id}`
      );
    } catch (taskError) {
      console.error(
        "[AppointmentService] Failed to queue confirmation tasks:",
        taskError
      );
      // Non-blocking error
    }

    // ✨ CRITICAL FIX: Update lead status to "converted" when appointment is booked
    // This prevents double dial callbacks after successful booking
    try {
      const { error: statusError } = await supabaseAdmin
        .from("leads")
        .update({ status: "converted" })
        .eq("id", leadId);

      if (statusError) {
        console.error(
          `[AppointmentService] Failed to update lead status to 'converted':`,
          statusError
        );
      } else {
        console.log(
          `[AppointmentService] ✅ Updated lead ${leadId} status to 'converted' (appointment booked)`
        );
      }
    } catch (statusUpdateError) {
      console.error(
        "[AppointmentService] Error updating lead status:",
        statusUpdateError
      );
    }

    return data;
  }

  /**
   * Get all appointments
   */
  async getAppointments() {
    const { data, error } = await supabaseAdmin
      .from("appointments")
      .select("*, leads(name, phone)")
      .order("scheduled_time", { ascending: true });

    if (error) {
      throw { statusCode: 500, message: error.message };
    }

    return data;
  }

  /**
   * Check availability (Mock Logic)
   * @param {string} date - ISO date string
   */
  async checkAvailability(dateStr) {
    const date = new Date(dateStr);

    // 1. Check Day of Week (Mon-Fri only) using UTC
    const day = date.getUTCDay();
    if (day === 0 || day === 6) {
      // 0=Sun, 6=Sat
      return []; // Closed on weekends
    }

    // Define start/end in UTC for the given date
    // Note: Simple approximation - trusting the dateStr is effectively the day we want
    const startOfDay = new Date(dateStr);
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date(dateStr);
    endOfDay.setUTCHours(23, 59, 59, 999);

    // 2. Fetch existing appointments to check conflicts
    const { data: existingAppts, error } = await supabaseAdmin
      .from("appointments")
      .select("scheduled_time")
      .gte("scheduled_time", startOfDay.toISOString())
      .lte("scheduled_time", endOfDay.toISOString())
      .neq("status", "cancelled"); // Ignore cancelled appointments

    if (error) {
      console.error("[AppointmentService] Error checking availability:", error);
      return [];
    }

    const busyTimes = new Set(
      (existingAppts || []).map((a) => new Date(a.scheduled_time).toISOString())
    );

    // 3. Generate slots (9 AM - 5 PM in business timezone)
    const tz = config.BUSINESS_TIMEZONE || 'America/Los_Angeles';
    const slots = [];

    // Generate slots by iterating local hours 9-16 and converting to UTC
    for (let localHour = 9; localHour < 17; localHour++) {
      // Create a date string for this local hour and convert to UTC
      const localDateStr = date.toISOString().slice(0, 10); // YYYY-MM-DD
      const localTimeStr = `${localDateStr}T${String(localHour).padStart(2, '0')}:00:00`;

      // Convert local time to UTC using the same iteration approach as createAppointment
      let slotUtc = new Date(localTimeStr + 'Z'); // Start with face value
      const getLocalStr = (d) => d.toLocaleString('sv-SE', { timeZone: tz });
      let localStr = getLocalStr(slotUtc);
      let localAsUtc = new Date(localStr.replace(' ', 'T') + 'Z').getTime();
      let targetAsUtc = new Date(localTimeStr + 'Z').getTime();
      let diff = localAsUtc - targetAsUtc;
      if (diff !== 0) {
        slotUtc = new Date(slotUtc.getTime() - diff);
      }

      if (!busyTimes.has(slotUtc.toISOString())) {
        // Return both ISO (for booking) and human-readable (for speaking)
        const humanTime = slotUtc.toLocaleString('en-US', {
          timeZone: tz,
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });
        slots.push({ iso: slotUtc.toISOString(), display: humanTime });
      }
    }

    return slots;
  }
}

module.exports = new AppointmentService();
