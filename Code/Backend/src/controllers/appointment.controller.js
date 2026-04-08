const appointmentService = require('../services/appointment.service');

const bookAppointment = async (req, res, next) => {
    try {
        const { leadId, time } = req.body;

        if (!leadId || !time) {
            return res.apiResponse(400, 'LeadId and Time are required');
        }

        const appointment = await appointmentService.createAppointment({ leadId, time });
        return res.apiResponse(201, 'Appointment booked successfully', appointment);
    } catch (error) {
        next(error);
    }
};

const getAppointments = async (req, res, next) => {
    try {
        const appointments = await appointmentService.getAppointments();
        return res.apiResponse(200, 'Appointments retrieved successfully', appointments);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    bookAppointment,
    getAppointments
};
