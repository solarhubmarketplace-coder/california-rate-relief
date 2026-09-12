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
            utm_content,
            // Page-level attribution (added 2026-09-05)
            landing_page,
            landing_city_slug,
            landing_page_type,
            submitted_from,
            referrer,
            utm_medium,
            utm_term,
            ga_client_id
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
            utm_content,
            // Page-level attribution (added 2026-09-05)
            landing_page,
            landing_city_slug,
            landing_page_type,
            submitted_from,
            referrer,
            utm_medium,
            utm_term,
            ga_client_id
        });
        if (lead.duplicate) {
            return res.apiResponse(200, 'Existing lead updated', lead);
        }
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

const { redirectLegacyEmailLink } = require('../lib/legacy-email-landing');
const handleLeadConversionClick = redirectLegacyEmailLink;

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

// Anonymous compatibility path: only opt-out is allowed and no lead record is
// returned. Opt-in and all other consent changes require staff authentication.
const publicOptOut = async (req, res, next) => {
    try {
        const { leadId } = req.params;
        if (!leadId || req.body?.status !== 'opted_out') {
            return res.apiResponse(400, 'Only opted_out is accepted on the public consent endpoint');
        }
        await leadService.updateConsentStatus(leadId, 'opted_out');
        return res.apiResponse(200, 'Consent updated successfully', { status: 'opted_out' });
    } catch (error) { next(error); }
};

module.exports = {
    ingestLead,
    getLeads,
    ingestLeadsBulk,
    upgradeLeadToHot,
    handleLeadConversionClick,
    updateConsent,
    publicOptOut
};

