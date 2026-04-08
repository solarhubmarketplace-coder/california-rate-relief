'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MdAdd, MdEdit, MdDelete } from 'react-icons/md';
import { fetchAppointments, createAppointment } from '@/lib/appointments';
import { Appointment } from '@/types';
import { useToast } from '@/hooks/use-toast';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Calendar as CalendarIcon, Clock, User, MapPin } from 'lucide-react';

interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    end: string;
    backgroundColor?: string;
    extendedProps: {
        leadId?: string;
        leadName?: string;
        leadPhone?: string;
        status?: string;
        notes?: string;
    };
}

interface EventFormData {
    title: string;
    description: string;
    start: string;
    end: string;
    location: string;
}

export default function CalendarView() {
    const { toast } = useToast();
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [actionLoading, setActionLoading] = useState(false);
    const calendarRef = useRef<FullCalendar>(null);
    const [currentViewType, setCurrentViewType] = useState('dayGridMonth');

    const [formData, setFormData] = useState<EventFormData>({
        title: '',
        description: '',
        start: '',
        end: '',
        location: '',
    });

    // Fetch appointments and convert to calendar events
    const loadEvents = useCallback(async () => {
        try {
            setLoading(true);
            const appointments = await fetchAppointments();

            const calendarEvents: CalendarEvent[] = appointments.map((apt: Appointment) => ({
                id: apt.id,
                title: apt.lead_name || 'Appointment',
                start: apt.start_time,
                end: apt.end_time || new Date(new Date(apt.start_time).getTime() + 3600000).toISOString(),
                backgroundColor: getStatusColor(apt.status),
                extendedProps: {
                    leadId: apt.lead_id,
                    leadName: apt.lead_name,
                    leadPhone: apt.lead_phone,
                    status: apt.status,
                    notes: apt.notes,
                },
            }));

            setEvents(calendarEvents);
        } catch (error) {
            console.error('Error loading appointments:', error);
            toast({
                title: 'Error',
                description: 'Failed to load appointments',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    }, [toast]);

    // Get color based on appointment status
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'scheduled':
                return '#10b981'; // Green
            case 'completed':
                return '#6b7280'; // Gray
            case 'cancelled':
                return '#ef4444'; // Red
            case 'no_show':
                return '#f59e0b'; // Amber
            default:
                return '#10b981';
        }
    };

    useEffect(() => {
        loadEvents();

        // Get saved view from localStorage
        const savedView = typeof window !== 'undefined'
            ? localStorage.getItem('calendarView')
            : 'dayGridMonth';
        if (savedView) {
            setCurrentViewType(savedView);
        }
    }, [loadEvents]);

    const handleDateClick = (arg: { dateStr: string }) => {
        setSelectedEvent(null);
        setIsEditMode(false);
        setFormData({
            title: '',
            description: '',
            start: `${arg.dateStr}T09:00`,
            end: `${arg.dateStr}T10:00`,
            location: '',
        });
        setShowEventModal(true);
    };

    const handleEventClick = (info: { event: { id: string; title: string; start: Date | null; end: Date | null; extendedProps: CalendarEvent['extendedProps'] } }) => {
        const event = info.event;

        setSelectedEvent({
            id: event.id,
            title: event.title,
            start: event.start?.toISOString() || '',
            end: event.end?.toISOString() || '',
            extendedProps: event.extendedProps,
        });
        setIsEditMode(true);

        const formatDateTimeLocal = (date: Date | null) => {
            if (!date) return '';
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            return `${year}-${month}-${day}T${hours}:${minutes}`;
        };

        setFormData({
            title: event.title,
            description: event.extendedProps.notes || '',
            start: formatDateTimeLocal(event.start),
            end: formatDateTimeLocal(event.end),
            location: '',
        });

        setShowEventModal(true);
    };

    const handleSaveEvent = async () => {
        if (!formData.title || !formData.start) {
            toast({
                title: 'Missing Fields',
                description: 'Please provide a title and start time',
                variant: 'destructive',
            });
            return;
        }

        try {
            setActionLoading(true);

            if (!isEditMode) {
                // Create new appointment via backend API
                await createAppointment({
                    title: formData.title,
                    time: new Date(formData.start).toISOString(),
                    notes: formData.description,
                });

                toast({
                    title: 'Appointment Created',
                    description: 'The appointment has been scheduled successfully.',
                });
            } else {
                // TODO: Implement update appointment API
                toast({
                    title: 'Event Updated',
                    description: 'Appointment update will be implemented.',
                });
            }

            setShowEventModal(false);
            setSelectedEvent(null);
            setIsEditMode(false);
            resetForm();

            // Refresh events
            await loadEvents();
        } catch (error: any) {
            console.error('Error saving event:', error);
            toast({
                title: 'Error',
                description: error.message || 'Failed to save event',
                variant: 'destructive',
            });
        } finally {
            setActionLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            start: '',
            end: '',
            location: '',
        });
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Calendar</h1>
                    <p className="text-sm text-muted-foreground">
                        View and manage your appointments
                    </p>
                </div>
                <Button
                    onClick={() => {
                        setSelectedEvent(null);
                        setIsEditMode(false);
                        const now = new Date();
                        const later = new Date(now.getTime() + 3600000);
                        setFormData({
                            title: '',
                            description: '',
                            start: now.toISOString().slice(0, 16),
                            end: later.toISOString().slice(0, 16),
                            location: '',
                        });
                        setShowEventModal(true);
                    }}
                    className="gap-2"
                >
                    <MdAdd className="h-5 w-5" />
                    New Appointment
                </Button>
            </div>

            {/* Calendar */}
            <div className="bg-card rounded-lg border border-border p-4 relative">
                {loading && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 rounded-lg">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="mt-4 text-muted-foreground">Loading appointments...</p>
                    </div>
                )}
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    initialView={currentViewType}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    events={events}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    datesSet={(dateInfo) => {
                        if (dateInfo.view.type !== currentViewType) {
                            if (typeof window !== 'undefined') {
                                localStorage.setItem('calendarView', dateInfo.view.type);
                            }
                            setCurrentViewType(dateInfo.view.type);
                        }
                    }}
                    eventContent={(eventInfo) => (
                        <div className="flex items-center justify-between w-full px-2 py-1 group overflow-hidden">
                            <span className="truncate flex-1 text-sm font-medium">
                                {eventInfo.event.title}
                            </span>
                            <div className="hidden group-hover:flex gap-1 ml-2 flex-shrink-0">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEventClick({ event: eventInfo.event as unknown as { id: string; title: string; start: Date | null; end: Date | null; extendedProps: CalendarEvent['extendedProps'] } });
                                    }}
                                    className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded hover:bg-primary/90"
                                    title="Edit"
                                >
                                    <MdEdit className="text-sm" />
                                </button>
                            </div>
                        </div>
                    )}
                    height="70vh"
                />
            </div>

            {/* Event Modal */}
            <Dialog open={showEventModal} onOpenChange={(open) => {
                setShowEventModal(open);
                if (!open) {
                    setSelectedEvent(null);
                    setIsEditMode(false);
                    resetForm();
                }
            }}>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <CalendarIcon className="h-5 w-5 text-primary" />
                            {isEditMode ? 'Edit Appointment' : 'New Appointment'}
                        </DialogTitle>
                        <DialogDescription>
                            {isEditMode ? 'Update the appointment details' : 'Create a new appointment'}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Appointment title"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="start" className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    Start
                                </Label>
                                <Input
                                    id="start"
                                    type="datetime-local"
                                    value={formData.start}
                                    onChange={(e) => setFormData({ ...formData, start: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="end" className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    End
                                </Label>
                                <Input
                                    id="end"
                                    type="datetime-local"
                                    value={formData.end}
                                    onChange={(e) => setFormData({ ...formData, end: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="location" className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                Location
                            </Label>
                            <Input
                                id="location"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                placeholder="Location (optional)"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Notes</Label>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Additional notes..."
                                rows={3}
                            />
                        </div>

                        {selectedEvent?.extendedProps.leadName && (
                            <div className="p-3 bg-muted rounded-lg">
                                <p className="text-sm font-medium flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    Lead: {selectedEvent.extendedProps.leadName}
                                </p>
                                {selectedEvent.extendedProps.leadPhone && (
                                    <p className="text-sm text-muted-foreground ml-6">
                                        {selectedEvent.extendedProps.leadPhone}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setShowEventModal(false)}
                            disabled={actionLoading}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSaveEvent}
                            disabled={actionLoading || !formData.title}
                        >
                            {actionLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                isEditMode ? 'Update' : 'Create'
                            )}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
