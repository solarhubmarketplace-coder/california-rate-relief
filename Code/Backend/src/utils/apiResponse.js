/**
 * Standardize API responses
 * @param {Object} res - Express response object
 * @param {number} status - HTTP status code
 * @param {string} message - Human readable message
 * @param {any} data - Payload
 * @param {any} error - Error details
 */
const apiResponse = (res, status, message, data = null, error = null) => {
    return res.status(status).json({
        message,
        data,
        error,
        timestamp: new Date().toISOString(),
    });
};

module.exports = apiResponse;
