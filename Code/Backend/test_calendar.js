require('dotenv').config();
const calendarService = require('./src/services/calendar.service');
const { supabaseAdmin } = require('./src/lib/supabase');

async function testCalendar() {
    console.log("Starting Calendar Sync Test...");
    try {
        const startTime = new Date();
        startTime.setMinutes(startTime.getMinutes() + 5); // 5 mins from now
        const endTime = new Date(startTime.getTime() + 15 * 60000);

        console.log(`Creating event for ${startTime.toISOString()}`);

        const result = await calendarService.createEvent({
            summary: "TEST EVENT - Sun Speed",
            description: "This is a test event from the verification script.",
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString()
        });

        console.log("SUCCESS! Event Created:", result);
    } catch (error) {
        console.error("FAILURE:", error);
    }
}

testCalendar();
