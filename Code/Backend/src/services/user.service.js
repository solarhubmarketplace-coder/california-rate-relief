const { createClient } = require('@supabase/supabase-js');
const config = require('../config');

// Create admin client with service role key
const supabaseAdmin = createClient(
    config.SUPABASE_URL,
    config.SUPABASE_SERVICE_ROLE_KEY,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    }
);

/**
 * Fetch all users from Supabase Auth
 */
async function listUsers() {
    try {
        const { data, error } = await supabaseAdmin.auth.admin.listUsers();

        if (error) throw error;

        // Map to a simpler format
        return (data.users || []).map(user => ({
            id: user.id,
            email: user.email,
            name: user.user_metadata?.name || user.user_metadata?.full_name || '',
            created_at: user.created_at,
            last_sign_in_at: user.last_sign_in_at,
            email_confirmed_at: user.email_confirmed_at,
        }));
    } catch (error) {
        console.error('Failed to list users:', error);
        throw error;
    }
}

/**
 * Create a new user
 */
async function createUser({ email, password, name }) {
    try {
        const { data, error } = await supabaseAdmin.auth.admin.createUser({
            email,
            password,
            email_confirm: true, // Auto-confirm email
            user_metadata: {
                name: name || '',
            },
        });

        if (error) throw error;

        return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata?.name || '',
            created_at: data.user.created_at,
        };
    } catch (error) {
        console.error('Failed to create user:', error);
        throw error;
    }
}

/**
 * Update an existing user
 */
async function updateUser(userId, { email, name, password }) {
    try {
        const updateData = {};
        if (email) updateData.email = email;
        if (password) updateData.password = password;
        if (name !== undefined) {
            updateData.user_metadata = { name };
        }

        const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
            userId,
            updateData
        );

        if (error) throw error;

        return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata?.name || '',
            created_at: data.user.created_at,
        };
    } catch (error) {
        console.error('Failed to update user:', error);
        throw error;
    }
}

/**
 * Delete a user
 */
async function deleteUser(userId) {
    try {
        const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

        if (error) throw error;

        return { success: true };
    } catch (error) {
        console.error('Failed to delete user:', error);
        throw error;
    }
}

/**
 * Get a single user by ID
 */
async function getUserById(userId) {
    try {
        const { data, error } = await supabaseAdmin.auth.admin.getUserById(userId);

        if (error) throw error;

        return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata?.name || '',
            created_at: data.user.created_at,
            last_sign_in_at: data.user.last_sign_in_at,
            email_confirmed_at: data.user.email_confirmed_at,
        };
    } catch (error) {
        console.error('Failed to get user:', error);
        throw error;
    }
}

module.exports = {
    listUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
};
