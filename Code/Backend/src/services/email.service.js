const { Resend } = require('resend');
const config = require('../config');
const {
    EMAIL_COLD_LEAD_SUBJECT,
    EMAIL_COLD_LEAD_HTML,
    fillTemplate,
} = require('../config/scripts');

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
        try {
            const { data, error } = await this.resend.emails.send({
                from: context.from || this.from,
                to: [to],
                subject,
                html: htmlBody
            });

            if (error) {
                console.error('[EmailService] Resend error:', error);
                throw new Error(error.message || 'Failed to send email');
            }

            console.log(`[EmailService] Sent email to ${to}, ID: ${data.id}`);

            // ✨ LOGGING TO DATABASE
            try {
                const { supabaseAdmin } = require('../lib/supabase');
                const { error: logError } = await supabaseAdmin.from('email_logs').insert({
                    lead_id: context.leadId || null,
                    template_id: context.templateId || null,
                    email_to: to,
                    status: 'sent',
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
            // Log failure if possible
            try {
                const { supabaseAdmin } = require('../lib/supabase');
                if (context.leadId) {
                    await supabaseAdmin.from('email_logs').insert({
                        lead_id: context.leadId,
                        template_id: context.templateId || null,
                        email_to: to,
                        status: 'failed',
                        subject: subject,
                        error_message: error.message,
                        created_at: new Date().toISOString()
                    });
                }
            } catch (e) { /* ignore */ }
            throw error;
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
