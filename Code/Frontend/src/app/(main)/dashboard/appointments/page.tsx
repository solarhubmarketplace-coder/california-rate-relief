'use client';

import { useEffect, useState, useCallback } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { AppointmentList } from '@/components/appointments/AppointmentList';
import CalendarView from '@/components/calendar/Calendar';
import { fetchAppointments, updateAppointmentStatus } from '@/lib/appointments';
import { fetchLeadById } from '@/lib/leads';
import { exportAppointmentsToCSV } from '@/lib/export';
import { Appointment } from '@/types';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RefreshCw, Calendar, List, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAppointmentUpdates } from '@/hooks/use-realtime';

export default function AppointmentsPage() {
  const { toast } = useToast();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<'list' | 'calendar'>('list');

  const loadAppointments = async () => {
    setIsLoading(true);
    try {
      const data = await fetchAppointments();
      setAppointments(data);
    } catch (error) {
      console.error('Failed to load appointments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle new appointments from realtime subscription
  const handleNewAppointment = useCallback(async (aptData: {
    id: string;
    lead_id: string | null;
    scheduled_time: string;
    status: string;
  }) => {
    // Fetch lead info to get name
    let leadName = 'Unknown';
    let leadPhone = '';

    if (aptData.lead_id) {
      const lead = await fetchLeadById(aptData.lead_id);
      if (lead) {
        leadName = `${lead.first_name} ${lead.last_name}`;
        leadPhone = lead.phone;
      }
    }

    const newAppointment: Appointment = {
      id: aptData.id,
      lead_id: aptData.lead_id || '',
      lead_name: leadName,
      lead_phone: leadPhone,
      start_time: aptData.scheduled_time,
      status: aptData.status as Appointment['status'],
    };

    setAppointments((prev) => {
      // Check if appointment already exists
      if (prev.some((a) => a.id === newAppointment.id)) {
        return prev;
      }
      return [newAppointment, ...prev];
    });
  }, []);

  // Handle appointment updates from realtime subscription
  const handleAppointmentUpdate = useCallback((aptData: {
    id: string;
    lead_id: string | null;
    scheduled_time: string;
    status: string;
  }) => {
    setAppointments((prev) =>
      prev.map((apt) =>
        apt.id === aptData.id
          ? { ...apt, status: aptData.status as Appointment['status'], start_time: aptData.scheduled_time }
          : apt
      )
    );
  }, []);

  // Subscribe to realtime appointment updates
  useAppointmentUpdates({
    onNewAppointment: handleNewAppointment,
    onAppointmentUpdate: handleAppointmentUpdate,
  });

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleStatusChange = async (
    appointmentId: string,
    status: Appointment['status']
  ) => {
    try {
      await updateAppointmentStatus(appointmentId, status);
      setAppointments((prev) =>
        prev.map((apt) => (apt.id === appointmentId ? { ...apt, status } : apt))
      );
      toast({
        title: 'Appointment Updated',
        description: `Appointment marked as ${status.replace('_', ' ')}`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update appointment status',
        variant: 'destructive',
      });
    }
  };

  const upcomingAppointments = appointments.filter(
    (a) => a.status === 'scheduled' || a.status === 'confirmed'
  );
  const completedAppointments = appointments.filter(
    (a) => a.status === 'completed'
  );
  const cancelledAppointments = appointments.filter(
    (a) => a.status === 'cancelled' || a.status === 'no_show'
  );

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className='space-y-6'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-foreground'>Appointments</h1>
              <p className='text-sm text-muted-foreground'>
                Manage scheduled site assessments and follow-ups
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex items-center rounded-lg border border-border bg-card p-1'>
                <Button
                  variant={view === 'list' ? 'secondary' : 'ghost'}
                  size='sm'
                  className='bg-white text-primary hover:bg-primary/20 hover:text-primary'
                  onClick={() => setView('list')}
                >
                  <List className='h-4 w-4' />
                </Button>
                <Button
                  variant={view === 'calendar' ? 'secondary' : 'ghost'}
                  size='sm'
                  className='bg-white text-primary hover:bg-primary/20 hover:text-primary'
                  onClick={() => setView('calendar')}
                >
                  <Calendar className='h-4 w-4' />
                </Button>
              </div>
              {view === 'list' && (
                <>
                  <Button variant='outline' size='icon'
                    className='bg-white text-primary hover:bg-primary/20 hover:text-primary'
                    onClick={loadAppointments}>
                    <RefreshCw className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='outline'
                    className='gap-2 bg-white text-primary hover:bg-primary/20 hover:text-primary '
                    onClick={() => {
                      exportAppointmentsToCSV(appointments);
                      toast({ title: 'Export Complete', description: `Exported ${appointments.length} appointments to CSV` });
                    }}
                    disabled={appointments.length === 0}
                  >
                    <Download className='h-4 w-4' />
                    Export
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Calendar View */}
          {view === 'calendar' ? (
            <CalendarView />
          ) : (
            /* List View with Tabs */
            <Tabs defaultValue='upcoming' className='space-y-4'>
              <TabsList>
                <TabsTrigger
                  value='upcoming'
                  className='hover:bg-primary/20 hover:text-primary'
                >
                  Upcoming ({upcomingAppointments.length})
                </TabsTrigger>
                <TabsTrigger
                  value='completed'
                  className='hover:bg-primary/20 hover:text-primary'
                >
                  Completed ({completedAppointments.length})
                </TabsTrigger>
                <TabsTrigger
                  value='cancelled'
                  className='hover:bg-primary/20 hover:text-primary'
                >
                  Cancelled ({cancelledAppointments.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value='upcoming'>
                <AppointmentList
                  appointments={upcomingAppointments}
                  isLoading={isLoading}
                  onStatusChange={handleStatusChange}
                />
              </TabsContent>

              <TabsContent value='completed'>
                <AppointmentList
                  appointments={completedAppointments}
                  isLoading={isLoading}
                  onStatusChange={handleStatusChange}
                />
              </TabsContent>

              <TabsContent value='cancelled'>
                <AppointmentList
                  appointments={cancelledAppointments}
                  isLoading={isLoading}
                  onStatusChange={handleStatusChange}
                />
              </TabsContent>
            </Tabs>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

