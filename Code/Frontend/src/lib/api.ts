// API Barrel File - Re-exports all domain-specific API functions
// This maintains backward compatibility with existing imports

// Lead APIs
export {
    fetchLeads,
    fetchLeadById,
    createLead,
    updateLeadStatus,
    triggerAICall,
    parseBackendLead,
} from './leads';

// Call Log APIs
export {
    fetchCallLogs,
    fetchCallLogById,
} from './callLogs';

// Appointment APIs
export {
    fetchAppointments,
    createAppointment,
    updateAppointmentStatus,
    rescheduleAppointment,
} from './appointments';

// Dashboard APIs
export {
    fetchDashboardStats,
    fetchActivityFeed,
} from './dashboard';

// Settings APIs
export {
    fetchSettings,
    updateSettings,
} from './settings';
