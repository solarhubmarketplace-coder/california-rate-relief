const leadService = require('../services/lead.service');

const ingestLead = async (req, res, next) => {
    try {
        const {
            name,
            phone,
            email,
            address,
            source,
            type,
            bill_amount,
            utility_provider,
            credit_score,
            // Tracking parameters (hidden fields for ad attribution)
            gclid,
            fbclid,
            utm_source,
            utm_campaign,
            utm_content
        } = req.body;

        if (!phone) {
            return res.apiResponse(400, 'Phone number is required');
        }

        const lead = await leadService.createLead({
            name,
            phone,
            email,
            address,
            source,
            type,
            bill_amount,
            utility_provider,
            credit_score,
            gclid,
            fbclid,
            utm_source,
            utm_campaign,
            utm_content
        });
        return res.apiResponse(201, 'Lead created successfully', lead);
    } catch (error) {
        next(error);
    }
};

const getLeads = async (req, res, next) => {
    try {
        const leads = await leadService.getLeads();
        return res.apiResponse(200, 'Leads retrieved successfully', leads);
    } catch (error) {
        next(error);
    }
};

const ingestLeadsBulk = async (req, res, next) => {
    try {
        const { leads, sequence_id } = req.body;

        if (!leads || !Array.isArray(leads)) {
            return res.apiResponse(400, 'leads array is required');
        }

        if (leads.length === 0) {
            return res.apiResponse(400, 'leads array cannot be empty');
        }

        if (leads.length > 1000) {
            return res.apiResponse(400, 'Maximum 1000 leads per request');
        }

        // ✨ NEW: Add sequence_id to all leads if provided
        const leadsWithSequence = sequence_id
            ? leads.map(lead => ({ ...lead, sequence_id }))
            : leads;

        const results = await leadService.createLeads(leadsWithSequence);
        return res.apiResponse(201, 'Bulk lead ingestion complete', {
            created_count: results.created.length,
            skipped_count: results.skipped.length,
            error_count: results.errors.length,
            ...results
        });
    } catch (error) {
        next(error);
    }
};

const upgradeLeadToHot = async (req, res, next) => {
    try {
        const { leadId } = req.params;

        if (!leadId) {
            return res.apiResponse(400, 'leadId is required');
        }

        const lead = await leadService.upgradeLeadToHot(leadId);
        return res.apiResponse(200, 'Lead upgraded to HOT', lead);
    } catch (error) {
        next(error);
    }
};

const handleLeadConversionClick = async (req, res, next) => {
    try {
        const { leadId } = req.params;
        await leadService.upgradeLeadToHot(leadId);

        // Return Success HTML
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Interest Confirmed</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; text-align: center; padding: 20px; background: #f0fdf4; color: #166534; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
                    .card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); max-width: 500px; width: 100%; }
                    h1 { margin-top: 0; color: #15803d; }
                    p { font-size: 18px; color: #374151; line-height: 1.6; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h1>✅ Request Received!</h1>
                    <p>Thanks for confirm your interest. One of our solar experts has been notified and will call you shortly to discuss your savings.</p>
                </div>
            </body>
            </html>
        `);
    } catch (error) {
        console.error('Lead conversion error:', error);
        res.send(`
            <!DOCTYPE html>
            <html>
            <body style="font-family: sans-serif; text-align: center; padding: 50px;">
                <h1>Something went wrong</h1>
                <p>We couldn't process your request automatically. Please reply to the email directly.</p>
            </body>
            </html>
        `);
    }
};

const updateConsent = async (req, res, next) => {
    try {
        const { leadId } = req.params;
        const { status } = req.body;

        if (!leadId) {
            return res.apiResponse(400, 'leadId is required');
        }
        if (!status) {
            return res.apiResponse(400, 'status is required');
        }

        const lead = await leadService.updateConsentStatus(leadId, status);
        return res.apiResponse(200, 'Consent updated successfully', lead);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    ingestLead,
    getLeads,
    ingestLeadsBulk,
    upgradeLeadToHot,
    handleLeadConversionClick,
    updateConsent
};

