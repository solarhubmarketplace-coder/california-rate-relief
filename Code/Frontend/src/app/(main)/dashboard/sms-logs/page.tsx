'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { fetchSmsLogs, fetchSmsStats, SmsLog, SmsStats } from '@/lib/sms-logs';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { RefreshCw, MessageSquare, XCircle, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SmsLogsPage() {
    const { toast } = useToast();
    const [allLogs, setAllLogs] = useState<SmsLog[]>([]);
    const [stats, setStats] = useState<SmsStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({
        leadName: '',
        status: 'all',
    });

    // Load data from backend (only status filter is supported by backend)
    const loadData = useCallback(async () => {
        setIsLoading(true);
        try {
            // Build query params - only pass status to backend
            const params: any = {};
            if (filters.status !== 'all') params.status = filters.status;

            const [logsData, statsData] = await Promise.all([
                fetchSmsLogs(params),
                fetchSmsStats(),
            ]);
            setAllLogs(logsData.data);
            setStats(statsData);
        } catch (error: any) {
            console.error('Failed to load sms logs:', error);
            toast({
                title: 'Error Loading Logs',
                description: error.message || 'Failed to fetch sms logs',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    }, [filters.status, toast]); // Only reload when status changes

    // Client-side filtering for lead name search
    const logs = useMemo(() => {
        if (!filters.leadName.trim()) {
            return allLogs;
        }
        const searchTerm = filters.leadName.toLowerCase().trim();
        return allLogs.filter((log) => {
            const leadName = log.leads?.name || '';
            return leadName.toLowerCase().includes(searchTerm);
        });
    }, [allLogs, filters.leadName]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const getStatusBadge = (status: string) => {
        const variants: Record<string, string> = {
            sent: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
            failed: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
            pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
            delivered: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
            undelivered: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
        };
        const icons: Record<string, any> = {
            sent: CheckCircle2,
            delivered: CheckCircle2,
            failed: XCircle,
            undelivered: XCircle,
            pending: RefreshCw,
        };

        const Icon = icons[status] || MessageSquare;

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
                            <h1 className="text-3xl font-bold">SMS Logs</h1>
                            <p className="text-muted-foreground mt-1">
                                View and filter SMS dispatch history.
                            </p>
                        </div>
                        <Button variant="outline"
                            className="bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                            onClick={loadData} disabled={isLoading}>
                            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                            Refresh
                        </Button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total SMS</CardTitle>
                                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats?.total || 0}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Delivered</CardTitle>
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

                    <div className="flex flex-wrap gap-4 items-end">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="lead">Filter by Lead</Label>
                            <Input
                                id="lead"
                                placeholder="Search lead name..."
                                value={filters.leadName}
                                className='bg-white text-primary hover:bg-primary/20 hover:text-primary'
                                onChange={(e) => setFilters({ ...filters, leadName: e.target.value })}
                            />
                        </div>
                        <div className="grid w-full max-w-[200px] items-center gap-1.5">
                            <Label htmlFor="status">Status</Label>
                            <Select
                                value={filters.status}
                                onValueChange={(val) => setFilters({ ...filters, status: val })}
                            >
                                <SelectTrigger className='bg-white text-primary hover:bg-primary/20 hover:text-primary'>
                                    <SelectValue placeholder="All Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="sent">Sent</SelectItem>
                                    <SelectItem value="failed">Failed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="rounded-lg border bg-white overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Lead</TableHead>
                                    <TableHead>Content</TableHead>
                                    {/* <TableHead>Message</TableHead> */}
                                    {/* <TableHead>Direction</TableHead> */}
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
                                            No SMS logs found
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    logs.map((log) => (
                                        <TableRow key={log.id}>
                                            <TableCell className="font-medium">
                                                {log.leads?.name || 'Unknown Lead'}
                                            </TableCell>
                                            {/* <TableCell>{log.to_number}</TableCell> */}
                                            <TableCell className="max-w-[300px] truncate" title={log.content}>
                                                {log.content}
                                            </TableCell>
                                            {/* <TableCell>
                                                <Badge variant="secondary" className="text-xs">
                                                    {log.direction.toUpperCase()}
                                                </Badge>
                                            </TableCell> */}
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
