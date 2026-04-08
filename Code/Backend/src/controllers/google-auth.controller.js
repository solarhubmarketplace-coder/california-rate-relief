const googleAuthService = require('../services/google-auth.service');

const initiateAuth = async (req, res, next) => {
    try {
        const url = googleAuthService.generateAuthUrl();
        res.redirect(url);
    } catch (error) {
        next(error);
    }
};

const handleCallback = async (req, res, next) => {
    try {
        const { code } = req.query;

        if (!code) {
            return res.apiResponse(400, 'Authorization code is required');
        }

        await googleAuthService.handleCallback(code);

        // Redirect to frontend settings page with success indicator
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
        res.redirect(`${frontendUrl}/dashboard/settings?google_connected=true`);
    } catch (error) {
        // Redirect to frontend with error if auth fails
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
        res.redirect(`${frontendUrl}/dashboard/settings?google_error=${encodeURIComponent(error.message || 'Authentication failed')}`);
    }
};

/**
 * Check if Google is connected
 */
const getStatus = async (req, res, next) => {
    try {
        const status = await googleAuthService.getConnectionStatus();
        return res.apiResponse(200, 'Google connection status', status);
    } catch (error) {
        next(error);
    }
};

/**
 * Disconnect Google account
 */
const disconnect = async (req, res, next) => {
    try {
        await googleAuthService.disconnect();
        return res.apiResponse(200, 'Google account disconnected');
    } catch (error) {
        next(error);
    }
};

module.exports = {
    initiateAuth,
    handleCallback,
    getStatus,
    disconnect
};
