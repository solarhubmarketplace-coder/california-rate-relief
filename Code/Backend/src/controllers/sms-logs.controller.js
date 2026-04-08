const smsService = require('../services/sms.service');

const getSmsLogs = async (req, res, next) => {
    try {
        const { page = 1, limit = 50, status, lead_id } = req.query;

        const { data, count } = await smsService.getLogs({
            page: parseInt(page),
            limit: parseInt(limit),
            status,
            lead_id
        });

        return res.apiResponse(200, 'SMS logs retrieved successfully', {
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

const getSmsStats = async (req, res, next) => {
    try {
        const stats = await smsService.getStats();
        return res.apiResponse(200, 'SMS stats retrieved successfully', stats);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getSmsLogs,
    getSmsStats
};
