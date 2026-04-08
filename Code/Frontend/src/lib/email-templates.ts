import axiosClient from './axios';

export interface EmailTemplate {
    id: string;
    name: string;
    subject: string;
    html_content: string;
    is_current: boolean;
    lead_type: 'cold' | 'hot';
    created_at: string;
}

export interface EmailLog {
    id: string;
    template_id: string;
    lead_id: string;
    email_to: string;
    subject: string;
    status: 'sent' | 'failed' | 'pending';
    sent_at: string;
    created_at: string;
    email_templates?: {
        name: string;
    };
    leads?: {
        name: string;
        email: string;
    };
}

export interface EmailStats {
    total: number;
    sent: number;
    failed: number;
    success_rate: number;
}

export const fetchEmailTemplates = async () => {
    const response = await axiosClient.get('/email-templates');
    return response.data as EmailTemplate[];
};

export const fetchEmailTemplate = async (id: string) => {
    const response = await axiosClient.get(`/email-templates/${id}`);
    return response.data as EmailTemplate;
};

export const createEmailTemplate = async (data: Partial<EmailTemplate>) => {
    const response = await axiosClient.post('/email-templates', data);
    return response.data;
};

export const updateEmailTemplate = async (id: string, data: Partial<EmailTemplate>) => {
    const response = await axiosClient.put(`/email-templates/${id}`, data);
    return response.data;
};

export const deleteEmailTemplate = async (id: string) => {
    await axiosClient.delete(`/email-templates/${id}`);
};

export const setCurrentTemplate = async (id: string) => {
    await axiosClient.post(`/email-templates/${id}/set-current`);
};

export const fetchEmailLogs = async (params: any = {}) => {
    const response = await axiosClient.get('/email-logs', { params });
    // Handle both wrapped and unwrapped structure if necessary, though backend standard is consistent
    return response.data.data;
};

export const fetchEmailStats = async () => {
    const response = await axiosClient.get('/email-logs/stats');
    return response.data as EmailStats;
};
