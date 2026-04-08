'use client';

import { useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { cn } from '@/lib/utils';
import { useDashboardData } from '@/contexts/DashboardContext';
import { Loader2 } from 'lucide-react';

interface ChartDataPoint {
  name: string;
  calls: number;
  booked: number;
}

interface CallTrendsChartProps {
  className?: string;
}

// Get the day name from a date
function getDayName(date: Date): string {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
}

// Get the start of the week (last 7 days)
function getLast7Days(): Date[] {
  const days: Date[] = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    date.setHours(0, 0, 0, 0);
    days.push(date);
  }

  return days;
}

export function CallTrendsChart({ className }: CallTrendsChartProps) {
  const { callLogs, appointments, isLoading } = useDashboardData();

  // Compute chart data from cached data (no API calls!)
  const chartData = useMemo(() => {
    // Get last 7 days
    const last7Days = getLast7Days();

    // Aggregate data by day
    const dataByDay: ChartDataPoint[] = last7Days.map((day) => {
      const dayEnd = new Date(day);
      dayEnd.setHours(23, 59, 59, 999);

      // Count calls on this day
      const callsOnDay = callLogs.filter((call) => {
        const callDate = new Date(call.created_at);
        return callDate >= day && callDate <= dayEnd;
      }).length;

      // Count appointments booked (scheduled/confirmed) with start_time on this day
      const bookedOnDay = appointments.filter((apt) => {
        const aptDate = new Date(apt.start_time);
        return aptDate >= day && aptDate <= dayEnd &&
          (apt.status === 'scheduled' || apt.status === 'confirmed');
      }).length;

      return {
        name: getDayName(day),
        calls: callsOnDay,
        booked: bookedOnDay,
      };
    });

    return dataByDay;
  }, [callLogs, appointments]);

  return (
    <div
      className={cn('rounded-lg border border-border bg-card p-5', className)}
    >
      <div className='mb-4'>
        <h3 className='font-medium text-foreground'>Call Trends</h3>
        <p className='text-sm text-muted-foreground'>
          This week&apos;s activity
        </p>
      </div>
      <div className='h-[280px]'>
        {isLoading ? (
          <div className='h-full flex items-center justify-center'>
            <Loader2 className='h-8 w-8 animate-spin text-muted-foreground' />
          </div>
        ) : (
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id='colorCalls' x1='0' y1='0' x2='0' y2='1'>
                  <stop
                    offset='5%'
                    stopColor='hsl(221, 83%, 53%)'
                    stopOpacity={0.2}
                  />
                  <stop
                    offset='95%'
                    stopColor='hsl(221, 83%, 53%)'
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id='colorBooked' x1='0' y1='0' x2='0' y2='1'>
                  <stop
                    offset='5%'
                    stopColor='hsl(142, 71%, 45%)'
                    stopOpacity={0.2}
                  />
                  <stop
                    offset='95%'
                    stopColor='hsl(142, 71%, 45%)'
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray='3 3'
                stroke='hsl(220, 13%, 91%)'
                className='dark:stroke-[hsl(220,14%,20%)]'
              />
              <XAxis
                dataKey='name'
                stroke='hsl(220, 9%, 46%)'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke='hsl(220, 9%, 46%)'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                  color: 'hsl(var(--foreground))',
                }}
              />
              <Area
                type='monotone'
                dataKey='calls'
                stroke='hsl(221, 83%, 53%)'
                fillOpacity={1}
                fill='url(#colorCalls)'
                strokeWidth={2}
                name='Calls'
              />
              <Area
                type='monotone'
                dataKey='booked'
                stroke='hsl(142, 71%, 45%)'
                fillOpacity={1}
                fill='url(#colorBooked)'
                strokeWidth={2}
                name='Booked'
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className='mt-3 flex items-center justify-center gap-6'>
        <div className='flex items-center gap-2'>
          <div className='h-2.5 w-2.5 rounded-full bg-primary' />
          <span className='text-xs text-muted-foreground'>Calls</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='h-2.5 w-2.5 rounded-full bg-status-success' />
          <span className='text-xs text-muted-foreground'>Booked</span>
        </div>
      </div>
    </div>
  );
}
