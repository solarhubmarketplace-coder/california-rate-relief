'use client';

import { useEffect, useState, useCallback } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { fetchEmailLogs, fetchEmailStats, EmailLog, EmailStats } from '@/lib/email-templates';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, Mail, XCircle, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function EmailLogsPage() {
    const { toast } = useToast();
    const [logs, setLogs] = useState<EmailLog[]>([]);
    const [stats, setStats] = useState<EmailStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const loadData = useCallback(async () => {
        setIsLoading(true);
        try {
            const [logsData, statsData] = await Promise.all([
                fetchEmailLogs(),
                fetchEmailStats(),
            ]);
            setLogs(logsData);
            setStats(statsData);
        } catch (error: any) {
            console.error('Failed to load email logs:', error);
            toast({
                title: 'Error Loading Logs',
                description: error.message || 'Failed to fetch email logs',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const getStatusBadge = (status: string) => {
        const variants: Record<string, string> = {
            sent: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
            failed: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
            pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        };
        const icons: Record<string, any> = {
            sent: CheckCircle2,
            failed: XCircle,
            pending: RefreshCw,
        };

        const Icon = icons[status] || Mail;

        return (
            <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[status] || 'bg-gray-100 text-gray-800'}`}>
                <Icon className="mr-1 h-3 w-3" />
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
        );
    };

    return (
        <ProtectedRoute>
            <DashboardLayout>
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">Email Logs</h1>
                            <p className="text-muted-foreground mt-1">
                                Default email dispatch history and performance
                            </p>
                        </div>
                        <Button variant="outline"
                            className='bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary'
                            onClick={loadData} disabled={isLoading}>
                            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                            Refresh
                        </Button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Emails</CardTitle>
                                <Mail className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats?.total || 0}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Sent Successfully</CardTitle>
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats?.sent || 0}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Failed</CardTitle>
                                <XCircle className="h-4 w-4 text-red-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats?.failed || 0}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                                <div className="text-sm text-muted-foreground">%</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {(stats?.success_rate || 0).toFixed(1)}%
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="rounded-lg border bg-white overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Template</TableHead>
                                    <TableHead>Recipient</TableHead>
                                    <TableHead>Lead</TableHead>
                                    <TableHead>Subject</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Sent At</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isLoading ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                                            Loading logs...
                                        </TableCell>
                                    </TableRow>
                                ) : logs.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                                            No email logs found
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    logs.map((log) => (
                                        <TableRow key={log.id}>
                                            <TableCell className="font-medium">
                                                {log.email_templates?.name || 'Unknown Template'}
                                            </TableCell>
                                            <TableCell>{log.email_to}</TableCell>
                                            <TableCell>{log.leads?.name || 'Unknown Lead'}</TableCell>
                                            <TableCell className="max-w-[200px] truncate" title={log.subject}>
                                                {log.subject}
                                            </TableCell>
                                            <TableCell>
                                                {getStatusBadge(log.status)}
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {new Date(log.sent_at || log.created_at).toLocaleString()}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </DashboardLayout>
        </ProtectedRoute>
    );
}
