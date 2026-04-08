const apiResponse = require('../utils/apiResponse');

const errorHandler = (err, req, res, next) => {
    console.error('[ERROR]', err.message);
    if (err.stack) console.error(err.stack);

    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    // Extract error details safely
    let errorDetails = null;
    if (process.env.NODE_ENV === 'development' && err.stack) {
        errorDetails = err.stack;
    } else if (err.code) {
        errorDetails = `Error Code: ${err.code}`;
    }

    // Return error as string message instead of object to prevent React rendering issues
    return apiResponse(res, status, message, null, errorDetails || message);
};

module.exports = errorHandler;
