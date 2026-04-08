'use client';

import { useMemo } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { CallTrendsChart } from '@/components/dashboard/CallTrendsChart';
import { LiveCallsWidget } from '@/components/dashboard/LiveCallsWidget';
import { DashboardProvider, useDashboardData } from '@/contexts/DashboardContext';
import { computeDashboardStats, computeActivityFeed } from '@/lib/dashboard';
import {
  Users,
  Phone,
  Calendar,
  TrendingUp,
} from 'lucide-react';

function DashboardContent() {
  const { leads, callLogs, appointments, isLoading } = useDashboardData();

  // Compute stats and activities from cached data (no API calls!)
  const stats = useMemo(
    () => computeDashboardStats(leads, callLogs, appointments),
    [leads, callLogs, appointments]
  );

  const activities = useMemo(
    () => computeActivityFeed(leads, callLogs),
    [leads, callLogs]
  );

  return (
    <DashboardLayout>
      <div className='space-y-6'>
        {/* Stats Cards */}
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {isLoading ? (
            <>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className='h-32 animate-pulse rounded-lg bg-card border border-border'
                />
              ))}
            </>
          ) : (
            <>
              <StatCard
                title='Total Leads Today'
                value={stats.total_leads_today}
                icon={Users}
              />
              <StatCard
                title='AI Calls Triggered'
                value={stats.calls_triggered}
                icon={Phone}
              />
              <StatCard
                title='Appointments Booked'
                value={stats.appointments_booked}
                icon={Calendar}
              />
              <StatCard
                title='Conversion Rate'
                value={`${stats.conversion_rate}%`}
                icon={TrendingUp}
              />
            </>
          )}
        </div>

        {/* Charts and Activity */}
        <div className='grid gap-6 lg:grid-cols-5'>
          <div className='lg:col-span-3 space-y-6'>
            <LiveCallsWidget />
            <CallTrendsChart />
          </div>
          <ActivityFeed activities={activities} className='lg:col-span-2' />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardProvider>
        <DashboardContent />
      </DashboardProvider>
    </ProtectedRoute>
  );
}
