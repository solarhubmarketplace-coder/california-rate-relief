const emailTemplateService = require('../services/email-template.service');

const getTemplates = async (req, res, next) => {
    try {
        const templates = await emailTemplateService.getTemplates();
        return res.apiResponse(200, 'Templates retrieved successfully', templates);
    } catch (error) {
        next(error);
    }
};

const createTemplate = async (req, res, next) => {
    try {
        let { name, subject, html_content, lead_type } = req.body;

        // Normalize lead_type to match DB constraint ('cold', 'hot')
        if (lead_type === 'cold_outreach') lead_type = 'cold';
        if (lead_type === 'follow_up' || lead_type === 'follow-up') lead_type = 'hot';

        if (!name || !subject || !html_content || !lead_type) {
            return res.apiResponse(400, 'All fields are required');
        }

        // Check availability
        const allTemplates = await emailTemplateService.getTemplates();
        const existing = allTemplates.find(t => t.lead_type === lead_type);

        if (existing) {
            return res.apiResponse(400, `A template for ${lead_type} already exists. Please edit the existing one.`);
        }

        const template = await emailTemplateService.createTemplate({
            name,
            subject,
            html_content,
            lead_type,
            is_current: true
        });

        return res.apiResponse(201, 'Template created successfully', template);
    } catch (error) {
        next(error);
    }
};

const updateTemplate = async (req, res, next) => {
    try {
        const { id } = req.params;
        let { html_content, lead_type, ...otherUpdates } = req.body;

        const updates = { ...otherUpdates };
        if (html_content) {
            updates.html_content = html_content;
        }
        if (lead_type) {
            if (lead_type === 'cold_outreach') updates.lead_type = 'cold';
            else if (lead_type === 'follow_up' || lead_type === 'follow-up') updates.lead_type = 'hot';
            else updates.lead_type = lead_type;
        }

        const template = await emailTemplateService.updateTemplate(id, updates);
        return res.apiResponse(200, 'Template updated successfully', template);
    } catch (error) {
        next(error);
    }
};

const deleteTemplate = async (req, res, next) => {
    try {
        const { id } = req.params;
        await emailTemplateService.deleteTemplate(id);
        return res.apiResponse(200, 'Template deleted successfully');
    } catch (error) {
        next(error);
    }
};

const setCurrentTemplate = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { lead_type } = req.body; // Ideally we fetch lead_type from DB if not passed, but frontend should pass it or we lookup.

        // If frontend doesn't pass lead_type, we need to fetch it first.
        // Assuming implementation plan implies we might need to fetch it.
        // For efficiency, let's assume valid request for now, or update logic.

        // Actually, setCurrentTemplate in service relies on lead_type. 
        // If frontend calls `setCurrentTemplate(id)` only, we must lookup the template to know its type.
        // I will add a lookup in service or here.
        // Frontend `lib/email-templates.ts` calls `post /:id/set-current`.

        // I'll update service to handle this or fetch here.
        // Fetching here is safer.
        const templates = await emailTemplateService.getTemplates();
        const target = templates.find(t => t.id === id);
        if (!target) {
            return res.apiResponse(404, 'Template not found');
        }

        const updated = await emailTemplateService.setCurrentTemplate(id, target.lead_type);
        return res.apiResponse(200, 'Template set as current', updated);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getTemplates,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    setCurrentTemplate
};
