const { Resend } = require('resend');
const config = require('../config');
const {
    EMAIL_COLD_LEAD_SUBJECT,
    EMAIL_COLD_LEAD_HTML,
    fillTemplate,
} = require('../config/scripts');
const {
    validateEmailAddress,
    classifyEmailError,
    permanentEmailError,
} = require('../lib/email-address');

class EmailService {
    constructor() {
        this.resend = new Resend(config.RESEND_API_KEY);
        this.from = config.EMAIL_FROM;
    }

    /**
     * Send an email using Resend
     * @param {string} to - Recipient email
     * @param {string} subject - Email subject
     * @param {string} htmlBody - Email HTML body
     */
    async sendEmail(to, subject, htmlBody, context = {}) {
        // Validate before spending a provider call. A malformed address reached
        // Resend four times on 2026-08-23 and was rejected four times; the
        // homeowner got nothing and the queue kept retrying something that could
        // never succeed. Fail it here, once, and mark it permanent so the queue
        // stops instead of looping.
        const check = validateEmailAddress(to);
        if (!check.valid) {
            const err = permanentEmailError(
                `Invalid recipient address (${check.reason}): ${JSON.stringify(to)}`,
                `address rejected locally: ${check.reason}`
            );
            await this.logSendFailure(to, subject, err, context, 'invalid_address');
            throw err;
        }
        const recipient = check.normalized;

        try {
            const request = {
                from: context.from || this.from,
                to: [recipient],
                subject,
                html: htmlBody
            };
            if (context.replyTo) request.replyTo = context.replyTo;
            if (context.text) request.text = context.text;
            if (context.headers) request.headers = context.headers;
            const options = context.idempotencyKey
                ? { idempotencyKey: context.idempotencyKey }
                : undefined;
            const { data, error } = await this.resend.emails.send(request, options);

            if (error) {
                console.error('[EmailService] Resend error:', error);
                const providerError = new Error(error.message || 'Failed to send email');
                // Resend returns structured errors. Preserve the fields the durable
                // outbox uses to distinguish retryable delivery from a permanent reject.
                for (const key of ['name', 'statusCode', 'status', 'code']) {
                    if (error[key] !== undefined) providerError[key] = error[key];
                }
                const classified = classifyEmailError(providerError);
                if (classified.kind === 'permanent') {
                    providerError.permanent = true;
                    providerError.permanentReason = classified.reason;
                }
                throw providerError;
            }

            console.log(`[EmailService] Sent email to ${recipient}, ID: ${data.id}`);

            // ✨ LOGGING TO DATABASE
            try {
                const { supabaseAdmin } = require('../lib/supabase');
                const { error: logError } = await supabaseAdmin.from('email_logs').insert({
                    lead_id: context.leadId || null,
                    template_id: context.templateId || null,
                    sequence_id: context.sequenceId || null,
                    sequence_step_id: context.sequenceStepId || null,
                    email_to: recipient,
                    status: 'sent',
                    // "accepted", not "delivered". Resend returning an id means it
                    // took the request, nothing more. The webhook at
                    // POST /api/webhook/resend is what promotes this to delivered.
                    delivery_state: 'accepted',
                    resend_email_id: data.id,
                    subject: subject,
                    sent_at: new Date().toISOString(),
                    created_at: new Date().toISOString()
                });

                if (logError) {
                    console.error('[EmailService] DB Insert Error:', logError);
                } else {
                    console.log('[EmailService] Email log saved to DB');
                }
            } catch (logStatsError) {
                console.error('[EmailService] Failed to save email log to DB:', logStatsError);
            }

            return data;
        } catch (error) {
            console.error('[EmailService] Failed to send email:', error);
            await this.logSendFailure(recipient, subject, error, context);
            throw error;
        }
    }

    /**
     * Record a failed send, classified so the queue knows whether a retry could
     * ever succeed. Never throws — a logging failure must not mask the send
     * failure that caused it.
     *
     * @param {string} to
     * @param {string} subject
     * @param {Error} error
     * @param {object} context
     * @param {string|null} deliveryState - forced state, e.g. 'invalid_address'
     */
    async logSendFailure(to, subject, error, context = {}, deliveryState = null) {
        try {
            const { supabaseAdmin } = require('../lib/supabase');
            if (!context.leadId) return;

            const classified = classifyEmailError(error);
            await supabaseAdmin.from('email_logs').insert({
                lead_id: context.leadId,
                template_id: context.templateId || null,
                sequence_id: context.sequenceId || null,
                sequence_step_id: context.sequenceStepId || null,
                email_to: typeof to === 'string' ? to.slice(0, 320) : null,
                status: 'failed',
                delivery_state: deliveryState || (classified.kind === 'permanent' ? 'invalid_address' : null),
                failure_kind: classified.kind,
                subject: subject,
                error_message: error && error.message ? String(error.message).slice(0, 1000) : 'unknown error',
                created_at: new Date().toISOString()
            });

            // A permanent failure is the only case where the lead's own status
            // should read as a failure. A transient one is still in flight.
            if (classified.kind === 'permanent') {
                await supabaseAdmin
                    .from('leads')
                    .update({ email_status: 'invalid_address' })
                    .eq('id', context.leadId);
            }
        } catch (e) {
            console.error('[EmailService] Failed to record send failure:', e.message);
        }
    }

    /**
     * Generate cold lead email HTML with tracking link
     * @param {string} name - Lead name
     * @param {string} trackingUrl - Click tracking URL
     */
    getColdLeadEmailHtml(name, trackingUrl) {
        // Use the centralized template from scripts.js
        return fillTemplate(EMAIL_COLD_LEAD_HTML, { name, trackingUrl });
    }

    /**
     * Send cold lead welcome email with tracking
     * @param {string} to - Email address
     * @param {string} name - Lead name
     * @param {string} trackingToken - Unique tracking token
     * @param {string} leadId - Lead ID for conversion
     * @param {string} phone - Lead phone number for replacement
     */
    async sendColdLeadEmail(to, name, trackingToken, leadId, phone) {
        const trackingUrl = `${config.BASE_URL}/api/track/${trackingToken}`;
        const convertUrl = `${config.BASE_URL}/api/leads/convert/${leadId}`; // Endpoint to convert to hot

        // Default values - using templates from scripts.js
        let subject = fillTemplate(EMAIL_COLD_LEAD_SUBJECT, { name });
        let html = this.getColdLeadEmailHtml(name, trackingUrl);
        let templateId = null;

        try {
            const emailTemplateService = require('./email-template.service');
            const templates = await emailTemplateService.getTemplates();
            const coldTemplate = templates.find(t => t.lead_type === 'cold' && t.is_current);

            if (coldTemplate) {
                templateId = coldTemplate.id;
                console.log('[EmailService] Using dynamic Cold Template');
                subject = coldTemplate.subject.replace('{{name}}', name);

                let content = coldTemplate.content || coldTemplate.html_content;
                content = content.replace(/{{name}}/g, name);

                // ✨ Webhook / Convert URL Replacement
                content = content.replace(/{{webhook}}/g, convertUrl);

                // ✨ Correct Phone Replacement
                content = content.replace(/{{phone}}/g, phone || '');

                html = content;
                // Manual button injection removed as per user request
            } else {
                console.log('[EmailService] No active Cold Template found, using default.');
                // We typically inject tracking URL in default too. The default getColdLeadEmailHtml already has a button.
                // We should ensure the default button also points to something useful? 
                // Currently it points to 'trackingUrl'.
            }
        } catch (err) {
            console.error('[EmailService] Error loading dynamic template:', err);
        }

        return this.sendEmail(to, subject, html, {
            leadId,
            templateId,
            from: config.COLD_EMAIL_FROM || undefined // Use specific sender if configured
        });
    }

    /**
     * Send Appointment Follow Up Email (Hot Lead)
     * @param {string} to 
     * @param {string} name 
     * @param {string} phone 
     */
    async sendAppointmentFollowUpEmail(to, name, phone, leadId) {
        let subject = `Meeting Confirmed: Next Steps`;
        let html = `<p>Hi ${name}, thanks for the call. We will call you at ${phone}.</p>`;
        let templateId = null;

        try {
            const emailTemplateService = require('./email-template.service');
            const templates = await emailTemplateService.getTemplates();
            const hotTemplate = templates.find(t => t.lead_type === 'hot' && t.is_current);

            if (hotTemplate) {
                templateId = hotTemplate.id;
                console.log('[EmailService] Using dynamic Hot Template');
                subject = hotTemplate.subject.replace('{{name}}', name);
                let content = hotTemplate.content || hotTemplate.html_content;
                content = content.replace(/{{name}}/g, name);
                content = content.replace(/{{phone}}/g, phone);

                const convertUrl = leadId ? `${config.BASE_URL}/api/leads/convert/${leadId}` : '#';
                content = content.replace(/{{webhook}}/g, convertUrl);

                html = content;
            }
        } catch (err) {
            console.error('[EmailService] Error loading dynamic hot template:', err);
        }

        return this.sendEmail(to, subject, html, { leadId, templateId });
    }
    /**
     * Get Email logs with pagination and filtering
     * @param {Object} params 
     * @returns {Object} { data, count }
     */
    async getLogs({ page = 1, limit = 50, status, search }) {
        try {
            const { supabaseAdmin } = require('../lib/supabase');
            const offset = (page - 1) * limit;

            let query = supabaseAdmin
                .from('email_logs')
                .select('*, leads(name, email, phone), email_templates(name)', { count: 'exact' })
                .order('created_at', { ascending: false })
                .range(offset, offset + parseInt(limit) - 1);

            if (status) {
                query = query.eq('status', status);
            }

            const { data, error, count } = await query;

            if (error) throw error;

            return { data, count };
        } catch (error) {
            console.error('[EmailService] Failed to get email logs:', error.message);
            throw error;
        }
    }

    /**
     * Get Email statistics
     * @returns {Object}
     */
    async getStats() {
        try {
            const { supabaseAdmin } = require('../lib/supabase');
            const { data: logs, error } = await supabaseAdmin
                .from('email_logs')
                .select('status');

            if (error) throw error;

            const total = logs.length;
            const sent = logs.filter(l => l.status === 'sent' || l.status === 'delivered').length;
            const failed = logs.filter(l => l.status === 'failed' || l.status === 'bounced').length;
            const success_rate = total > 0 ? (sent / total) * 100 : 0;

            return {
                total,
                sent,
                failed,
                success_rate
            };
        } catch (error) {
            console.error('[EmailService] Failed to get email stats:', error.message);
            throw error;
        }
    }
}

module.exports = new EmailService();
