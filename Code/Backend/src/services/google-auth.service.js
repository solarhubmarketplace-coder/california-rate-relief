const { google } = require('googleapis');
const { supabaseAdmin } = require('../lib/supabase');
const https = require('https');
const querystring = require('querystring');

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

class GoogleAuthService {
    /**
     * Generate the Auth URL
     */
    generateAuthUrl() {
        const scopes = [
            'https://www.googleapis.com/auth/gmail.send',
            'https://www.googleapis.com/auth/calendar',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ];

        return oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes,
            prompt: 'consent'
        });
    }

    /**
     * Helper: Exchange Code for Tokens using HTTPS with Forced IPv4
     * Solves ETIMEDOUT issues on some environments
     */
    async exchangeCodeForTokenIPv4(code) {
        return new Promise((resolve, reject) => {
            const postData = querystring.stringify({
                code: code,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: process.env.GOOGLE_REDIRECT_URI,
                grant_type: 'authorization_code'
            });

            const options = {
                hostname: 'oauth2.googleapis.com',
                port: 443,
                path: '/token',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': postData.length
                },
                family: 4, // <--- CRITICAL: Force IPv4
                timeout: 10000 // 10s timeout
            };

            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => data += chunk);
                res.on('end', () => {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        try {
                            const tokens = JSON.parse(data);
                            // Normalize expiry
                            if (tokens.expires_in) {
                                tokens.expiry_date = Date.now() + (tokens.expires_in * 1000);
                            }
                            resolve(tokens);
                        } catch (e) {
                            reject(new Error('Failed to parse token response'));
                        }
                    } else {
                        reject(new Error(`Token exchange failed: ${res.statusCode} - ${data}`));
                    }
                });
            });

            req.on('error', (e) => {
                reject(new Error(`IPv4 Request Failed: ${e.message}`));
            });

            req.on('timeout', () => {
                req.destroy();
                reject(new Error('IPv4 Request Timed Out'));
            });

            req.write(postData);
            req.end();
        });
    }

    /**
     * Handle the callback and save tokens
     */
    async handleCallback(code) {
        try {
            console.log(`[GoogleAuth] Handling callback with code: ${code ? code.substring(0, 10) : 'MISSING'}...`);

            // 1. Try Token Exchange (Standard + IPv4 Fallback)
            let tokens;
            try {
                // Try standard first
                console.log('[GoogleAuth] Attempting standard token exchange...');
                const res = await oauth2Client.getToken(code);
                tokens = res.tokens;
                console.log('[GoogleAuth] Standard exchange successful');
            } catch (stdErr) {
                console.warn('[GoogleAuth] Standard exchange failed (ETIMEDOUT likely). Attempting IPv4 fallback:', stdErr.message);
                // Try Forced IPv4
                tokens = await this.exchangeCodeForTokenIPv4(code);
                console.log('[GoogleAuth] IPv4 fallback successful');
            }

            oauth2Client.setCredentials(tokens);

            // 2. Fetch User Profile (Optional - Best Effort)
            let profile = {};
            try {
                const oauth2 = google.oauth2({ auth: oauth2Client, version: 'v2' });
                const userInfo = await oauth2.userinfo.get();
                profile = userInfo.data;
                console.log('[GoogleAuth] User profile fetched:', profile.email);
            } catch (err) {
                console.error('[GoogleAuth] Failed to fetch user profile (non-critical):', err.message);
            }

            // 3. Save to DB
            const { error } = await supabaseAdmin
                .from('settings')
                .upsert({
                    key: 'google_admin_tokens',
                    value: {
                        ...tokens,
                        profile: profile
                    },
                    updated_at: new Date().toISOString()
                }, { onConflict: 'key' });

            if (error) {
                console.error('[GoogleAuth] Database error:', error);
                throw error;
            }

            console.log('[GoogleAuth] Success. Tokens saved.');
            return { tokens, profile };

        } catch (error) {
            console.error('[GoogleAuth] CRITICAL FAILURE:', error);
            throw new Error(`Google Auth Failed: ${error.message}`);
        }
    }

    /**
     * Get an authenticated client
     */
    async getClient() {
        const { data, error } = await supabaseAdmin
            .from('settings')
            .select('value')
            .eq('key', 'google_admin_tokens')
            .single();

        if (error || !data) {
            throw new Error('Google tokens not found. Admin needs to authenticate first.');
        }

        const tokens = data.value;
        oauth2Client.setCredentials(tokens);
        return oauth2Client;
    }

    /**
     * Check connection status
     */
    async getConnectionStatus() {
        try {
            const { data, error } = await supabaseAdmin
                .from('settings')
                .select('value, updated_at')
                .eq('key', 'google_admin_tokens')
                .single();

            if (error || !data) {
                return {
                    connected: false,
                    message: 'Google account not connected',
                    profile: null
                };
            }

            const tokens = data.value;
            const hasAccessToken = !!tokens?.access_token;
            const hasRefreshToken = !!tokens?.refresh_token;

            return {
                connected: hasAccessToken && hasRefreshToken,
                hasAccessToken,
                hasRefreshToken,
                connectedAt: data.updated_at,
                message: hasAccessToken ? 'Google account connected' : 'Google tokens incomplete',
                profile: tokens.profile || null
            };
        } catch (error) {
            console.error('Error checking Google status:', error);
            return {
                connected: false,
                message: 'Error checking connection status',
                profile: null
            };
        }
    }

    /**
     * Disconnect Google account - remove tokens from DB
     */
    async disconnect() {
        const { error } = await supabaseAdmin
            .from('settings')
            .delete()
            .eq('key', 'google_admin_tokens');

        if (error) {
            console.error('[GoogleAuth] Error disconnecting:', error);
            throw new Error('Failed to disconnect Google account');
        }

        // Revoke credentials on the client
        oauth2Client.revokeCredentials().catch(() => {
            // Best effort - token may already be invalid
        });

        console.log('[GoogleAuth] Google account disconnected');
        return { disconnected: true };
    }

    /**
     * Check and refresh tokens if expiring soon (e.g., within 5 minutes)
     * To be called by strict cron job
     */
    async checkAndRefreshTokens() {
        try {
            const { data, error } = await supabaseAdmin
                .from('settings')
                .select('value')
                .eq('key', 'google_admin_tokens')
                .single();

            if (error || !data || !data.value) {
                return;
            }

            const tokens = data.value;
            if (!tokens.refresh_token) {
                return;
            }

            // Check expiry
            const now = Date.now();
            const expiryDate = tokens.expiry_date || 0;
            // 5 minutes buffer
            const buffer = 5 * 60 * 1000;

            if (expiryDate - now < buffer) {

                // Set credentials to client to use refresh token
                oauth2Client.setCredentials(tokens);

                // Refresh
                const { credentials } = await oauth2Client.refreshAccessToken();

                // Merge new tokens (keep profile and refresh_token if not returned)
                const newTokens = {
                    ...tokens,
                    ...credentials,
                    // Ensure refresh token is kept if google doesn't send a new one (common)
                    refresh_token: credentials.refresh_token || tokens.refresh_token
                };

                // Save back to DB
                await supabaseAdmin
                    .from('settings')
                    .update({
                        value: newTokens,
                        updated_at: new Date().toISOString()
                    })
                    .eq('key', 'google_admin_tokens');

                console.log('[GoogleAuth] Token refreshed.');
            }

        } catch (error) {
            console.error('[GoogleAuth] Error during token refresh check:', error.message);
        }
    }
}

module.exports = new GoogleAuthService();
