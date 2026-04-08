'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Phone, PhoneOff, Loader2, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VoiceCallDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    leadId: string;
    leadName: string;
    phoneNumber: string;
    onCallInitiated?: (callSid: string) => void;
    onCallEnded?: () => void;
}

type CallState = 'idle' | 'initiating' | 'ringing' | 'in-progress' | 'completed' | 'failed';

export function VoiceCallDialog({
    open,
    onOpenChange,
    leadId,
    leadName,
    phoneNumber,
    onCallInitiated,
    onCallEnded,
}: VoiceCallDialogProps) {
    const [callState, setCallState] = useState<CallState>('idle');
    const [callSid, setCallSid] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

    // Duration timer
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (callState === 'in-progress') {
            interval = setInterval(() => {
                setDuration((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [callState]);

    // Reset state when dialog closes
    useEffect(() => {
        if (!open) {
            setCallState('idle');
            setCallSid(null);
            setError(null);
            setDuration(0);
            setIsMuted(false);
        }
    }, [open]);

    const formatDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const initiateCall = async () => {
        setCallState('initiating');
        setError(null);

        try {
            const { triggerVoiceCall } = await import('@/lib/voice');
            const result = await triggerVoiceCall(leadId, phoneNumber);

            if (result.success && result.callSid) {
                setCallSid(result.callSid);
                setCallState('ringing');
                onCallInitiated?.(result.callSid);

                // Simulate call progression (in real implementation, poll status or use WebSocket)
                setTimeout(() => {
                    setCallState('in-progress');
                }, 3000);
            } else {
                setError(result.error || 'Failed to initiate call');
                setCallState('failed');
            }
        } catch (err: any) {
            setError(err.message || 'Failed to initiate call');
            setCallState('failed');
        }
    };

    const endCall = async () => {
        if (callSid) {
            try {
                const { endCall } = await import('@/lib/voice');
                await endCall(callSid);
            } catch (err) {
                console.error('Failed to end call:', err);
            }
        }

        setCallState('completed');
        onCallEnded?.();
    };

    const getStateMessage = () => {
        switch (callState) {
            case 'idle':
                return 'Ready to call';
            case 'initiating':
                return 'Connecting to AI voice system...';
            case 'ringing':
                return 'Ringing...';
            case 'in-progress':
                return 'AI is speaking with the lead';
            case 'completed':
                return 'Call ended';
            case 'failed':
                return error || 'Call failed';
            default:
                return '';
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        AI Voice Call
                    </DialogTitle>
                    <DialogDescription>
                        {callState === 'idle' ? (
                            <>
                                Start an AI-powered voice call to{' '}
                                <span className="font-semibold text-foreground">{leadName}</span>
                            </>
                        ) : (
                            getStateMessage()
                        )}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    {/* Call Status Display */}
                    <div className="rounded-lg bg-muted/50 p-6 text-center">
                        {/* Animated Call Icon */}
                        <div
                            className={cn(
                                'mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full',
                                callState === 'idle' && 'bg-primary/10',
                                callState === 'initiating' && 'bg-amber-500/10',
                                callState === 'ringing' && 'bg-amber-500/10 animate-pulse',
                                callState === 'in-progress' && 'bg-green-500/10',
                                callState === 'completed' && 'bg-muted',
                                callState === 'failed' && 'bg-destructive/10'
                            )}
                        >
                            {callState === 'initiating' ? (
                                <Loader2 className="h-10 w-10 animate-spin text-amber-500" />
                            ) : callState === 'in-progress' ? (
                                <Volume2 className="h-10 w-10 text-green-500 animate-pulse" />
                            ) : callState === 'failed' ? (
                                <PhoneOff className="h-10 w-10 text-destructive" />
                            ) : (
                                <Phone
                                    className={cn(
                                        'h-10 w-10',
                                        callState === 'ringing' && 'text-amber-500 animate-bounce',
                                        callState === 'idle' && 'text-primary',
                                        callState === 'completed' && 'text-muted-foreground'
                                    )}
                                />
                            )}
                        </div>

                        {/* Lead Info */}
                        <p className="text-lg font-semibold text-foreground">{leadName}</p>
                        <p className="font-mono text-sm text-muted-foreground">{phoneNumber}</p>

                        {/* Duration */}
                        {(callState === 'in-progress' || callState === 'completed') && (
                            <p className="mt-2 text-2xl font-mono font-bold text-foreground">
                                {formatDuration(duration)}
                            </p>
                        )}

                        {/* Error Message */}
                        {error && (
                            <p className="mt-2 text-sm text-destructive">{error}</p>
                        )}
                    </div>
                </div>

                <DialogFooter className="flex-col gap-2 sm:flex-row">
                    {callState === 'idle' && (
                        <>
                            <Button variant="outline" onClick={() => onOpenChange(false)}>
                                Cancel
                            </Button>
                            <Button onClick={initiateCall} className="gap-2">
                                <Phone className="h-4 w-4" />
                                Start AI Call
                            </Button>
                        </>
                    )}

                    {(callState === 'initiating' || callState === 'ringing' || callState === 'in-progress') && (
                        <Button
                            variant="destructive"
                            onClick={endCall}
                            className="w-full gap-2"
                        >
                            <PhoneOff className="h-4 w-4" />
                            End Call
                        </Button>
                    )}

                    {(callState === 'completed' || callState === 'failed') && (
                        <>
                            <Button
                                variant="outline"
                                onClick={() => onOpenChange(false)}
                                className="w-full sm:w-auto"
                            >
                                Close
                            </Button>
                            {callState === 'failed' && (
                                <Button
                                    onClick={() => {
                                        setCallState('idle');
                                        setError(null);
                                    }}
                                    className="w-full sm:w-auto gap-2"
                                >
                                    <Phone className="h-4 w-4" />
                                    Try Again
                                </Button>
                            )}
                        </>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

// Export a simple trigger button that can be used anywhere
interface VoiceCallButtonProps {
    leadId: string;
    leadName: string;
    phoneNumber: string;
    disabled?: boolean;
    size?: 'default' | 'sm' | 'lg' | 'icon';
    variant?: 'default' | 'outline' | 'ghost';
    className?: string;
}

export function VoiceCallButton({
    leadId,
    leadName,
    phoneNumber,
    disabled,
    size = 'sm',
    variant = 'default',
    className,
}: VoiceCallButtonProps) {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <Button
                size={size}
                variant={variant}
                onClick={(e) => {
                    e.stopPropagation();
                    setDialogOpen(true);
                }}
                disabled={disabled}
                className={cn('gap-2', className)}
            >
                <Phone className="h-4 w-4" />
                Trigger Call
            </Button>

            <VoiceCallDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                leadId={leadId}
                leadName={leadName}
                phoneNumber={phoneNumber}
            />
        </>
    );
}
