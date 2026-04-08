// Voice API Functions - For AI calling functionality
import axiosClient from './axios';

// ============================================
// Types
// ============================================

interface BackendApiResponse<T> {
    message: string;
    data: T;
    timestamp: string;
}

interface CallResponse {
    sid: string;
    status: string;
    to: string;
    from: string;
}

export interface TriggerCallResult {
    success: boolean;
    callSid?: string;
    status?: string;
    error?: string;
}

export interface CallStatus {
    callSid: string;
    status: 'queued' | 'ringing' | 'in-progress' | 'completed' | 'failed' | 'busy' | 'no-answer' | 'canceled';
    duration?: number;
}

// ============================================
// API Functions
// ============================================

/**
 * Trigger an AI voice call to a lead
 * @param leadId - The lead's UUID
 * @param phoneNumber - The phone number to call
 * @returns Result with success status and call SID
 */
export async function triggerVoiceCall(
    leadId: string,
    phoneNumber: string
): Promise<TriggerCallResult> {
    try {
        const response = await axiosClient.post<BackendApiResponse<CallResponse>>('/voice/call', {
            leadId,
            phoneNumber,
        });

        const callData = (response as any).data || response;

        return {
            success: true,
            callSid: callData.sid,
            status: callData.status,
        };
    } catch (error: any) {
        console.error('Failed to trigger voice call:', error);

        const errorMessage =
            error.response?.data?.message ||
            error.message ||
            'Failed to initiate call. Please try again.';

        return {
            success: false,
            error: errorMessage
        };
    }
}

/**
 * Get the status of an ongoing call
 * @param callSid - The Twilio Call SID
 * @returns Call status information
 */
export async function getCallStatus(callSid: string): Promise<CallStatus | null> {
    try {
        const response = await axiosClient.get<BackendApiResponse<CallStatus>>(`/voice/status/${callSid}`);
        const statusData = (response as any).data || response;
        return statusData;
    } catch (error) {
        console.error('Failed to get call status:', error);
        return null;
    }
}

/**
 * End an ongoing call
 * @param callSid - The Twilio Call SID
 * @returns Success status
 */
export async function endCall(callSid: string): Promise<boolean> {
    try {
        await axiosClient.post(`/voice/end/${callSid}`);
        return true;
    } catch (error) {
        console.error('Failed to end call:', error);
        return false;
    }
}
