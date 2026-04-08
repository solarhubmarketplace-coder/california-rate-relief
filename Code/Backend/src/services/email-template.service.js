const { supabaseAdmin } = require('../lib/supabase');

class EmailTemplateService {
    /**
     * Get all email templates
     * @returns {Object} - { data, error }
     */
    async getTemplates() {
        try {
            const { data, error } = await supabaseAdmin
                .from('email_templates')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('[EmailTemplateService] Failed to get templates:', error.message);
            throw error;
        }
    }

    /**
     * Create a new email template
     * @param {Object} templateData 
     * @returns {Object} - Created template
     */
    async createTemplate(templateData) {
        try {
            const { data, error } = await supabaseAdmin
                .from('email_templates')
                .insert([templateData])
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('[EmailTemplateService] Failed to create template:', error.message);
            throw error;
        }
    }

    /**
     * Update an email template
     * @param {string} id 
     * @param {Object} updates 
     * @returns {Object} - Updated template
     */
    async updateTemplate(id, updates) {
        try {
            const { data, error } = await supabaseAdmin
                .from('email_templates')
                .update(updates)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('[EmailTemplateService] Failed to update template:', error.message);
            throw error;
        }
    }

    /**
     * Delete an email template
     * @param {string} id 
     * @returns {boolean}
     */
    async deleteTemplate(id) {
        try {
            const { error } = await supabaseAdmin
                .from('email_templates')
                .delete()
                .eq('id', id);

            if (error) throw error;
            return true;
        } catch (error) {
            console.error('[EmailTemplateService] Failed to delete template:', error.message);
            throw error;
        }
    }

    /**
     * Set a template as current for its lead_type
     * @param {string} id 
     * @param {string} lead_type 
     * @returns {Object}
     */
    async setCurrentTemplate(id, lead_type) {
        try {
            // First submit transaction to unset current for all of this type
            // Supabase doesn't support transactions via JS easily, so we do two steps.
            // 1. Unset all is_current=true where lead_type matches
            // 2. Set is_current=true for id

            // Step 1
            await supabaseAdmin
                .from('email_templates')
                .update({ is_current: false })
                .eq('lead_type', lead_type);

            // Step 2
            const { data, error } = await supabaseAdmin
                .from('email_templates')
                .update({ is_current: true })
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('[EmailTemplateService] Failed to set current template:', error.message);
            throw error;
        }
    }
}

module.exports = new EmailTemplateService();
