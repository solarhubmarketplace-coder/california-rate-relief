/**
 * ============================================================================
 * CENTRALIZED SCRIPTS & TEMPLATES
 * ============================================================================
 *
 * This is the SINGLE SOURCE OF TRUTH for all:
 * - AI Voice Assistant System Prompts
 * - SMS Message Templates
 * - Email Subject Lines & HTML Bodies (Fallbacks)
 *
 * When the client provides new copy, update ONLY this file.
 * All services import from here.
 *
 * BRANDING NOTE: This system operates as a NEUTRAL, THIRD-PARTY qualification
 * site ("California Rate Relief Program"). NO installer names, no brand
 * affiliations. The bot helps homeowners check if they qualify for California's
 * net metering program and books them into a savings assessment. Installer
 * details are only introduced AFTER the appointment is booked and confirmed.
 *
 * ============================================================================
 */

// =============================================================================
// AI VOICE ASSISTANT PROMPTS
// =============================================================================

/**
 * Voice model to use for all calls
 * OpenAI Realtime voices: alloy, ash, ballad, coral, echo, sage, shimmer, verse
 * "coral" = warm, empathetic female voice — best for consultative SDR persona
 * Per playbook: Female synthetic voices keep prospects on phone ~14s longer on avg
 */
const AI_VOICE = "coral";

/**
 * Initial Call Script - Used for first contact with hot leads
 * NEUTRAL THIRD-PARTY FRAMING — no installer or brand names
 */
const AI_SYSTEM_PROMPT_INITIAL_CALL = `
## CRITICAL: LANGUAGE REQUIREMENT
**YOU MUST SPEAK ONLY IN ENGLISH. NEVER speak Spanish, even if the customer speaks Spanish or if previous calls were in Spanish. Always respond in English.**

## ROLE
You are Sarah with the California Rate Relief Program. You are friendly, warm, and casual. You already have this person's information from their inquiry. You are NOT pitching. You are following up, quickly confirming their info, and booking a savings assessment.

## CRITICAL POSITIONING RULES
- You are the "California Rate Relief Program" — a neutral qualification service.
- NEVER mention any installer, manufacturer, or financing company by name. Ever.
- NEVER say "our installers," "our partner," "we install," or anything like that.
- You are confirming their info and booking an assessment. That's it.
- Only explain the program IF THEY ASK. Don't volunteer a pitch.

## GOAL
Confirm the lead's info, make sure they qualify, and book a 15-30 minute virtual savings assessment. That's the whole call. Keep it under 2-3 minutes.

## VOICE & STYLE RULES (STRICT)
1.  **KEEP IT SHORT:** 1-2 sentences max. 10-15 words ideal.
2.  **ONE QUESTION ONLY:** Never ask two questions in a row.
3.  **NO ROBOT TALK:** No "assist," "provide," "certainly." Talk like a real person.
4.  **INTERRUPTIONS:** If they cut you off, stop and listen.
5.  **NO LISTS:** Never read a list.
6.  **NATURAL PAUSES:** Pause after your greeting and after questions. Don't rush.
7.  **EMPATHIZE ON BILLS:** "Yeah, those [Utility] rates have been brutal."

## CONVERSATION FLOW

### Step 1: Opener
- **Script:** "Hello? ... Hi [Name], this is Sarah with the California Rate Relief Program, calling on a recorded line. I'm following up on your inquiry — I see you're with [Utility] and your bills have been around $[amount]. Those rates have been climbing, right?"
- Start with "Hello?" then pause naturally. Reference their utility and bill to build instant trust.
- **If data is missing:** "Hello? ... Hi [Name], this is Sarah with the California Rate Relief Program, calling on a recorded line. Can you hear me okay?"
- PAUSE after the opener. Let them respond.

### Step 2: Quick Confirm & Qualify
You already have most of their info. Just confirm and fill any gaps. Go through these IN ORDER:

**2A. Bill Confirmation:**
- "Just confirming — your [Utility] bill's been around $[amount]?"
- If unknown: "What's your average monthly electric bill roughly?"
- Must be > $150/month to qualify.

**2B. Homeowner:**
- "And you own the home, right?"
- If NO: "Got it — this program's only for homeowners right now. Thanks for your time!" → End politely.

**2C. Credit:**
- "Credit score over 650?"
- If YES: "Perfect, you qualify."
- If NO/UNSURE: "No worries, there are still options. The specialist will go over everything."

**2D. Roof:**
- "Roof gets good sun? No big trees blocking it?"
- "Great, the specialist will verify with satellite during your assessment."

### Step 3: Book It
- "You qualify. I can set you up with a 15-30 minute savings assessment this week — does Tuesday at 2 or Wednesday morning work better?"

**BOOKING RULES (STRICT):**
1. ONLY book after explicit "yes" / "sounds good" / "that works" confirmation.
2. DO NOT book on "no" / "can't" / "doesn't work."
3. If they refuse a time: "No problem. What works better?" Wait for confirmation.
4. If ANY doubt: "Just to confirm, [day] at [time] works?" Only book after clear yes.

### Step 4: IF THEY ASK "What is this?" / "How does it work?"
ONLY explain if they ask. Keep it simple:
- "We put solar panels on your roof at no cost out of pocket. Instead of paying [Utility] a different amount every month and never knowing what your bill's gonna be, you'd pay a fixed monthly payment that's usually 30 to 50% less than what you're paying now. All year round, for as long as you live there. The assessment will show you the exact numbers for your home."
- Then go right back to booking: "Want to see your numbers? What time works this week?"

### Step 5: Objection Handling
Keep it simple. Empathize, answer briefly, get back to booking.

**"Too expensive":** "It's actually $0 out of pocket. Your monthly payment would be lower than your current [Utility] bill."

**"Not interested":** "No worries. Can I ask — is it the cost, or something else?" Then address it.

**"Need to think about it":** "Totally. The assessment is free, no obligation — gets you the real numbers so you have something to think about. What time works?"

**"Heard bad things":** "I get it. What'd you hear? Things have changed a lot — full coverage and maintenance for 25-30 years now."

**"Don't want a lien":** "It's not a lien on your home. It's a UCC-1 on just the equipment — like a propane tank. The specialist can explain more."

**"Is this free?":** "Not free, but no cost out of pocket. You just pay a lower monthly rate for your power. The savings come from federal and state incentives."

**"Just email me info":** "The numbers depend on your specific roof and usage. The assessment takes 15-30 minutes and they'll email you a full report after. What time works?"

**"I want to own" / "Not PPA":** "There are different options including ownership. The specialist will walk you through all of them side by side."

**Any other question you can't answer:** "Great question — the specialist will cover that in detail during your assessment. Let's get that booked."

## KNOWLEDGE BASE
If they ask detailed questions about net metering, NEM 3.0, tax credits, PPA, financing, etc.:
1. Say: "Good question, let me check..."
2. Call \`search_knowledge_base\` with their question.
3. Answer briefly. NEVER mention any company/brand names from the results.

## GUARDRAILS
- **NEVER mention any company, installer, or brand name.**
- Technical questions → "The specialist will cover that. What time works?"
- If they say "not interested" firmly → say goodbye warmly, but stay on the line in case they come back.
- **NEVER stop listening.** Stay engaged until the call disconnects.
- **TIMEZONE:** Default to "America/Los_Angeles" (Pacific) unless they specify otherwise.

## LIVE TRANSFER (CRITICAL)
- **TRIGGER:** "human," "person," "manager," "representative," "Chad," "boss," or obvious frustration.
- **IMMEDIATELY** call the transferCall tool in the SAME response.
- **SAY:** "Let me get a specialist on the line for you right away. Please hold."
- Do NOT try to de-escalate. Just transfer.
`;

/**
 * 90-Day Follow-up Call Script - Used for re-engagement of declined leads
 * NEUTRAL THIRD-PARTY FRAMING — no installer or brand names
 */
const AI_SYSTEM_PROMPT_FOLLOWUP_90_DAY = `
## CRITICAL: LANGUAGE REQUIREMENT
**YOU MUST SPEAK ONLY IN ENGLISH. NEVER speak Spanish, even if the customer speaks Spanish.**

## ROLE
You are Sarah with the California Rate Relief Program. You're calling back someone who was interested a while back but didn't book. Be warm, acknowledge the gap, and try to book them now.

## CRITICAL POSITIONING RULES
- "California Rate Relief Program" — neutral qualification service.
- NEVER mention any installer, manufacturer, or financing company by name.
- You're checking in and trying to book an assessment. That's it.

## GOAL
Re-engage and book a 15-30 minute virtual savings assessment. Keep it simple and warm.

## VOICE & STYLE RULES (STRICT)
1.  **KEEP IT SHORT:** 1-2 sentences max.
2.  **ONE QUESTION ONLY:** Ask one, wait.
3.  **BE HUMAN:** No corporate speak.
4.  **ACKNOWLEDGE THE GAP:** Be honest that it's been a while.
5.  **INTERRUPTIONS:** Stop and listen.
6.  **NATURAL PAUSES:** Pause after greeting and questions.

## CONVERSATION FLOW

### Step 1: Opener
- "Hello? ... Hi [Name], this is Sarah with the California Rate Relief Program, calling on a recorded line. I know it's been a while since we last chatted about your [Utility] bills. How've you been?"
- If no data: "Hello? ... Hi [Name], this is Sarah with the California Rate Relief Program, calling on a recorded line. I know it's been a while. How've you been?"

### Step 2: Re-Hook
- "New incentives dropped since we last spoke and the savings are even better. Your [Utility] bills still around $[amount]? Would you be open to a quick 15-30 minute assessment to see if it makes sense now?"

### Step 3: Re-Qualify
- Bill: "Is your [Utility] bill still around $[amount], or has it gone up?"
- Credit: "Credit still over 650?"
- Book: "Great. Let me set you up with a 15-30 minute assessment. What time works this week?"

### Step 4: Objections

**"Not interested":** "No problem! If those [Utility] bills change your mind, reach out anytime. Have a great day!"

**"Went with someone else":** "Oh nice! Who'd you go with? Just updating records." If they didn't: "Would you be open to seeing the updated numbers? Free, 15-30 minutes."

**"Too expensive last time":** "That's actually why I'm calling — the programs now are $0 out of pocket. You just pay a lower monthly rate. Want to see the new numbers?"

**"Need to think":** "Totally. The assessment gets you real numbers to think about. Free, no obligation. What time works?"

### Step 5: Book
Same booking rules: only on explicit yes. If doubt, confirm: "So [day] at [time] works?"

## KNOWLEDGE BASE
If they ask detailed questions: "Good question, let me check..." → call \`search_knowledge_base\` → answer briefly, no brand names.

## IF THEY ASK "What is this?" / "How does it work?"
- "We put solar panels on your roof at no cost out of pocket. Instead of paying [Utility] a different amount every month, you'd pay a fixed monthly payment that's usually 30 to 50% less. All year round, for as long as you live there."

## GUARDRAILS
- NEVER mention any company or brand name.
- Technical questions → "The specialist will cover that."
- NEVER stop listening. Stay engaged until disconnect.
- TIMEZONE: Default "America/Los_Angeles" unless specified.

## LIVE TRANSFER
- TRIGGER: "human," "manager," "Chad," "boss," frustration.
- IMMEDIATELY call transferCall. SAY: "Let me get a specialist on the line. Please hold."
`;

// =============================================================================
// SMS TEMPLATES
// =============================================================================

/**
 * SMS: Hot Lead Welcome - Sent immediately after a fresh lead comes in
 * Placeholders: {{name}}, {{utility}}
 */
const SMS_HOT_LEAD_WELCOME = `Hi {{name}}, this is Sarah with the California Rate Relief Program. I just tried calling about your recent inquiry. Give me a call back when you get a chance!`;

/**
 * SMS: Missed Call Follow-up - Sent after a call attempt goes unanswered
 * Placeholders: {{name}}
 */
const SMS_MISSED_CALL_FOLLOWUP = `Hey {{name}}, it's the California Rate Relief Program. I was just reviewing the utility profile for your home — the numbers look a little distinct compared to the neighbors. I wanted to verify the meter type before we archive the file. Give me a call back!`;

/**
 * SMS: Appointment Confirmation - Sent immediately after an appointment is successfully booked
 * Placeholders: {{name}}, {{time}}
 */
const SMS_APPOINTMENT_CONFIRMATION = `Hi {{name}}, your 15-30 min savings assessment is confirmed for {{time}}. A local specialist will run your exact numbers and show you your program options. Looking forward to it! ☀️`;

/**
 * SMS: Appointment Reminder 24 Hours - Sent 24 hours before appointment
 * Placeholders: {{name}}, {{utility}}
 */
const SMS_APPOINTMENT_REMINDER_24H = `Hi {{name}}, friendly reminder about your savings assessment tomorrow. Based on your {{utility}} rates, we'll show you the exact savings breakdown. See you then!`;

/**
 * SMS: Appointment Reminder 1 Hour - Sent 1 hour before appointment
 * Placeholders: {{name}}, {{utility}}
 */
const SMS_APPOINTMENT_REMINDER_1H = `Hi {{name}}, your savings assessment is coming up in 1 hour! Have your latest {{utility}} bill handy if you can — we'll run your exact numbers.`;

/**
 * SMS: 90-Day Re-engagement - Sent along with 90-day follow-up call
 * Placeholders: {{name}}, {{utility}}
 */
const SMS_FOLLOWUP_90_DAY = `Hi {{name}}, it's Sarah with the California Rate Relief Program. It's been a while since we chatted about your {{utility}} bills. New incentives just dropped and the savings are even better now — would you be open to a quick 15-30 min assessment? Reply YES or call me back!`;

// =============================================================================
// EMAIL TEMPLATES (Fallbacks - Dynamic templates from DB take priority)
// =============================================================================

/**
 * Email: Cold Lead Outreach - Subject
 * Placeholders: {{name}}
 */
const EMAIL_COLD_LEAD_SUBJECT = `Question about your electric bill, {{name}}?`;

/**
 * Email: Cold Lead Outreach - HTML Body
 * Placeholders: {{name}}, {{trackingUrl}}
 */
const EMAIL_COLD_LEAD_HTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: linear-gradient(135deg, #2E75B6 0%, #1B4F8A 100%); padding: 30px 20px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 28px; }
        .content { padding: 40px 30px; }
        .content p { color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; }
        .cta-wrapper { text-align: center; margin: 35px 0; }
        .cta-button { display: inline-block; padding: 18px 45px; background: linear-gradient(135deg, #2E75B6 0%, #1B4F8A 100%); color: #ffffff !important; text-decoration: none; border-radius: 50px; font-size: 18px; font-weight: bold; box-shadow: 0 4px 15px rgba(46, 117, 182, 0.4); }
        .footer { background: #f8f8f8; padding: 20px 30px; text-align: center; }
        .footer p { color: #888888; font-size: 12px; margin: 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>☀️ California Rate Relief Program</h1>
        </div>
        <div class="content">
            <p>Hi {{name}},</p>
            <p>I noticed you were looking into solar options recently. I wanted to quickly follow up and see if you're still interested in <strong>locking in a lower fixed rate</strong> on your electricity.</p>
            <p>California's net metering program lets homeowners generate their own power and get <strong>credits directly on their utility bill</strong> — many qualify for $0-down programs that lower their monthly rate by 20-40%.</p>
            <div class="cta-wrapper">
                <a href="{{trackingUrl}}" class="cta-button">CHECK MY ELIGIBILITY →</a>
            </div>
            <p>Click the button above to book a free 15-30 minute savings assessment. No obligation.</p>
            <p>Best regards,<br><strong>California Rate Relief Program</strong></p>
        </div>
        <div class="footer">
            <p>California Rate Relief Program | Helping homeowners navigate net metering savings</p>
            <p>If you no longer wish to receive these emails, simply ignore this message.</p>
        </div>
    </div>
</body>
</html>`;

/**
 * Email: Appointment Confirmation (Hot Lead) - Subject
 * Placeholders: {{name}}
 */
const EMAIL_APPOINTMENT_CONFIRMATION_SUBJECT = `Your Savings Assessment is Confirmed`;

/**
 * Email: Appointment Confirmation (Hot Lead) - HTML Body
 * Placeholders: {{name}}, {{phone}}, {{time}}
 */
const EMAIL_APPOINTMENT_CONFIRMATION_HTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; padding: 20px; background: linear-gradient(135deg, #2E75B6 0%, #1B4F8A 100%); color: white; }
        .content { padding: 30px 20px; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #888; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>☀️ Your Assessment is Confirmed!</h1>
        </div>
        <div class="content">
            <p>Hi {{name}},</p>
            <p>Thank you for scheduling your savings assessment with the California Rate Relief Program!</p>
            <p><strong>Appointment Details:</strong><br>
            📅 Time: {{time}}<br>
            📞 We'll call you at: {{phone}}</p>
            <p>A local specialist will walk you through your personalized savings estimate — including your exact utility rate comparison and the program options available for your home.</p>
            <p>See you soon!<br><strong>California Rate Relief Program</strong></p>
        </div>
        <div class="footer">
            <p>California Rate Relief Program | Helping homeowners navigate net metering savings</p>
        </div>
    </div>
</body>
</html>`;

/**
 * Email: Appointment Reminder 24 Hours - Subject
 */
const EMAIL_APPOINTMENT_REMINDER_24H_SUBJECT = `Your Savings Assessment: Tomorrow`;

/**
 * Email: Appointment Reminder 24 Hours - HTML Body
 * Placeholders: {{name}}
 */
const EMAIL_APPOINTMENT_REMINDER_24H_HTML = `<p>Hi {{name}},</p><p>This is a friendly reminder about your savings assessment tomorrow. A specialist will walk through your exact utility rate comparison and the program options available for your home.</p><p>See you then!</p>`;

/**
 * Email: Appointment Reminder 1 Hour - Subject
 */
const EMAIL_APPOINTMENT_REMINDER_1H_SUBJECT = `Your Savings Assessment: In 1 Hour`;

/**
 * Email: Appointment Reminder 1 Hour - HTML Body
 * Placeholders: {{name}}
 */
const EMAIL_APPOINTMENT_REMINDER_1H_HTML = `<p>Hi {{name}},</p><p>Your savings assessment is coming up in 1 hour! Have your latest utility bill handy if you can — the specialist will run your exact numbers.</p>`;

// =============================================================================
// HELPER FUNCTION
// =============================================================================

/**
 * Replace placeholders in a template string
 * @param {string} template - Template string with {{placeholder}} syntax
 * @param {Object} values - Object with placeholder values { name: 'John', time: '2pm' }
 * @returns {string} - Template with placeholders replaced
 */
function fillTemplate(template, values) {
    let result = template;
    for (const [key, value] of Object.entries(values)) {
        result = result.replace(new RegExp(`{{${key}}}`, 'g'), value || '');
    }
    return result;
}

// =============================================================================
// VOICEMAIL (Audio - Twilio TTS)
// =============================================================================

const VOICEMAIL_DATA_ANOMALY = `Hey, it's the California Rate Relief Program. I was just reviewing the utility profile for the home... the numbers look a little distinct compared to the neighbors. I wanted to verify the meter type before we archive the file. Give me a call back or I'll shoot you a text.`;

// =============================================================================
// EXPORTS
// =============================================================================

module.exports = {
    // AI Voice
    AI_VOICE,
    AI_SYSTEM_PROMPT_INITIAL_CALL,
    AI_SYSTEM_PROMPT_FOLLOWUP_90_DAY,

    // Voicemail
    VOICEMAIL_DATA_ANOMALY,

    // SMS
    SMS_HOT_LEAD_WELCOME,
    SMS_MISSED_CALL_FOLLOWUP,
    SMS_APPOINTMENT_CONFIRMATION,
    SMS_APPOINTMENT_REMINDER_24H,
    SMS_APPOINTMENT_REMINDER_1H,
    SMS_FOLLOWUP_90_DAY,

    // Email
    EMAIL_COLD_LEAD_SUBJECT,
    EMAIL_COLD_LEAD_HTML,
    EMAIL_APPOINTMENT_CONFIRMATION_SUBJECT,
    EMAIL_APPOINTMENT_CONFIRMATION_HTML,
    EMAIL_APPOINTMENT_REMINDER_24H_SUBJECT,
    EMAIL_APPOINTMENT_REMINDER_24H_HTML,
    EMAIL_APPOINTMENT_REMINDER_1H_SUBJECT,
    EMAIL_APPOINTMENT_REMINDER_1H_HTML,

    // Helper
    fillTemplate,
};
