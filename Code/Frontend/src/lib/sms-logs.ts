import axiosClient from './axios';

export interface SmsLog {
    id: string;
    lead_id: string;
    sms_sid: string;
    status: string;
    body: string;
    content?: string;
    to_number: string;
    direction: string;
    sent_at: string;
    created_at: string;
    leads?: {
        name: string;
        email: string;
        phone: string;
    };
}

export interface SmsStats {
    total: number;
    sent: number;
    failed: number;
    success_rate: number;
}

interface FetchSmsLogsParams {
    page?: number;
    limit?: number;
    status?: string;
    lead_id?: string;
}

export const fetchSmsLogs = async (params: FetchSmsLogsParams = {}) => {
    const response = await axiosClient.get('/sms-logs', { params });
    // axiosClient returns the response body directly
    return {
        data: response.data.data as SmsLog[],
        pagination: response.data.pagination,
    };
};

export const fetchSmsStats = async () => {
    const response = await axiosClient.get('/sms-logs/stats');
    return response.data as SmsStats;
};
