const { supabaseAdmin } = require('../lib/supabase');

class SettingsService {
    /**
     * Get all settings
     * @returns {Object} Settings object with key-value pairs
     */
    async getSettings() {
        const { data, error } = await supabaseAdmin
            .from('settings')
            .select('*');

        if (error) {
            throw { statusCode: 500, message: error.message };
        }

        // Convert array to object for easier access
        const settings = {};
        data.forEach(row => {
            settings[row.key] = row.value;
        });

        return settings;
    }

    /**
     * Get a specific setting by key
     * @param {string} key - Setting key
     * @returns {Object} Setting value
     */
    async getSetting(key) {
        const { data, error } = await supabaseAdmin
            .from('settings')
            .select('*')
            .eq('key', key)
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                throw { statusCode: 404, message: `Setting '${key}' not found` };
            }
            throw { statusCode: 500, message: error.message };
        }

        return data.value;
    }

    /**
     * Update a setting
     * @param {string} key - Setting key
     * @param {Object} value - New value
     * @returns {Object} Updated setting
     */
    async updateSetting(key, value) {
        const { data, error } = await supabaseAdmin
            .from('settings')
            .upsert({
                key,
                value,
                updated_at: new Date().toISOString()
            }, { onConflict: 'key' })
            .select()
            .single();

        if (error) {
            throw { statusCode: 500, message: error.message };
        }

        return data;
    }

    /**
     * Check if auto-dial is enabled
     * @returns {Object} { enabled: boolean, delay_seconds: number }
     */
    async getAutoDialSettings() {
        try {
            const setting = await this.getSetting('auto_dial_new_leads');
            return setting || { enabled: false, delay_seconds: 60 };
        } catch (e) {
            return { enabled: false, delay_seconds: 60 };
        }
    }

    /**
     * Check if double-dial is enabled
     * @returns {Object} { enabled: boolean, retry_after_seconds: number }
     */
    async getDoubleDialSettings() {
        try {
            const setting = await this.getSetting('double_dial_strategy');
            return setting || { enabled: false, retry_after_seconds: 30 };
        } catch (e) {
            return { enabled: false, retry_after_seconds: 30 };
        }
    }

    /**
     * Check if voicemail is enabled
     * @returns {Object} { enabled: boolean }
     */
    async getVoicemailSettings() {
        try {
            const setting = await this.getSetting('leave_voicemail');
            return setting || { enabled: false };
        } catch (e) {
            return { enabled: false };
        }
    }
}

module.exports = new SettingsService();
