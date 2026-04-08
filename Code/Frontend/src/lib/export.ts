'use client';

import { Lead, CallLog, Appointment } from '@/types';

// Convert leads to CSV format
export function leadsToCSV(leads: Lead[]): string {
    const headers = ['First Name', 'Last Name', 'Phone', 'Email', 'Source', 'Status', 'Bill Amount', 'Created At'];

    const rows = leads.map((lead) => [
        lead.first_name,
        lead.last_name,
        lead.phone,
        lead.email || '',
        lead.source,
        lead.status,
        lead.bill_amount?.toString() || '',
        new Date(lead.created_at).toLocaleString(),
    ]);

    return [
        headers.join(','),
        ...rows.map((row) => row.map(escapeCSV).join(',')),
    ].join('\n');
}

// Convert call logs to CSV format
export function callLogsToCSV(calls: CallLog[]): string {
    const headers = ['Lead Name', 'Duration (seconds)', 'Outcome', 'Created At', 'Recording URL', 'Transcript'];

    const rows = calls.map((call) => [
        call.lead_name,
        call.duration_seconds.toString(),
        call.outcome,
        new Date(call.created_at).toLocaleString(),
        call.recording_url || '',
        call.transcript_summary || '',
    ]);

    return [
        headers.join(','),
        ...rows.map((row) => row.map(escapeCSV).join(',')),
    ].join('\n');
}

// Convert appointments to CSV format
export function appointmentsToCSV(appointments: Appointment[]): string {
    const headers = ['Lead Name', 'Lead Phone', 'Scheduled Time', 'End Time', 'Status', 'Notes'];

    const rows = appointments.map((apt) => [
        apt.lead_name,
        apt.lead_phone,
        new Date(apt.start_time).toLocaleString(),
        apt.end_time ? new Date(apt.end_time).toLocaleString() : '',
        apt.status,
        apt.notes || '',
    ]);

    return [
        headers.join(','),
        ...rows.map((row) => row.map(escapeCSV).join(',')),
    ].join('\n');
}

// Escape special characters for CSV
function escapeCSV(value: string): string {
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
        return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
}

// Download CSV file
export function downloadCSV(content: string, filename: string): void {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}

// Export leads to CSV file
export function exportLeadsToCSV(leads: Lead[]): void {
    const csv = leadsToCSV(leads);
    const filename = `leads_export_${new Date().toISOString().split('T')[0]}.csv`;
    downloadCSV(csv, filename);
}

// Export calls to CSV file
export function exportCallsToCSV(calls: CallLog[]): void {
    const csv = callLogsToCSV(calls);
    const filename = `calls_export_${new Date().toISOString().split('T')[0]}.csv`;
    downloadCSV(csv, filename);
}

// Export appointments to CSV file
export function exportAppointmentsToCSV(appointments: Appointment[]): void {
    const csv = appointmentsToCSV(appointments);
    const filename = `appointments_export_${new Date().toISOString().split('T')[0]}.csv`;
    downloadCSV(csv, filename);
}
