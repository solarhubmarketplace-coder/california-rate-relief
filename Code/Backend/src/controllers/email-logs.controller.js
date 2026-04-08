const emailService = require('../services/email.service');

const getEmailLogs = async (req, res, next) => {
    try {
        const { page = 1, limit = 50, status, search } = req.query;

        const { data, count } = await emailService.getLogs({
            page: parseInt(page),
            limit: parseInt(limit),
            status,
            search
        });

        return res.apiResponse(200, 'Email logs retrieved successfully', {
            data,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total: count,
                pages: Math.ceil(count / limit)
            }
        });
    } catch (error) {
        next(error);
    }
};

const getEmailStats = async (req, res, next) => {
    try {
        const stats = await emailService.getStats();
        return res.apiResponse(200, 'Email stats retrieved successfully', stats);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getEmailLogs,
    getEmailStats
};
