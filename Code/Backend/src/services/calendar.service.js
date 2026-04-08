const googleAuthService = require("./google-auth.service");
const { google } = require("googleapis");
const config = require("../config");

class CalendarService {
  /**
   * Create an event in Google Calendar
   * @param {Object} details - { summary, description, startTime, endTime }
   */
  async createEvent({ summary, description, startTime, endTime }) {
    // ✨ FIX: Add retry logic with exponential backoff for network timeouts
    const maxRetries = 3;
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const auth = await googleAuthService.getClient();
        const calendar = google.calendar({ version: "v3", auth });

        const event = {
          summary,
          description,
          start: {
            dateTime: startTime, // ISO format
            timeZone: config.BUSINESS_TIMEZONE,
          },
          end: {
            dateTime: endTime,
            timeZone: config.BUSINESS_TIMEZONE,
          },
        };

        const res = await calendar.events.insert({
          calendarId: "primary",
          resource: event,
        });

        console.log(`[CalendarService] Event created: ${res.data.htmlLink}`);
        return res.data;
      } catch (error) {
        lastError = error;

        // Retry on timeout or network errors
        const isRetryableError =
          error.code === "ETIMEDOUT" ||
          error.code === "ECONNRESET" ||
          error.code === "ENOTFOUND" ||
          (error.response && error.response.status >= 500);

        if (isRetryableError && attempt < maxRetries) {
          const delay = Math.pow(2, attempt) * 1000; // Exponential backoff: 2s, 4s, 8s
          console.log(
            `[CalendarService] Retry ${attempt}/${maxRetries} after ${delay}ms... (${
              error.code || error.message
            })`
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Don't throw - log and return null (non-blocking)
        console.error(
          `[CalendarService] Failed after ${attempt} attempt(s):`,
          error.message || error.code
        );
        break;
      }
    }

    // All retries failed - log but don't throw (non-blocking)
    console.error(
      "[CalendarService] Calendar sync failed, appointment saved to DB only"
    );
    return null;
  }
}

module.exports = new CalendarService();
