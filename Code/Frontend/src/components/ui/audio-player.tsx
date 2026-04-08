'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, Volume2, VolumeX, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioPlayerProps {
    src: string;
    className?: string;
}

function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function AudioPlayer({ src, className }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
            setIsLoaded(true);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setCurrentTime(0);
        };

        const handleError = () => {
            setError('Failed to load audio');
            setIsLoaded(false);
        };

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('error', handleError);
        };
    }, [src]);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleSeek = (value: number[]) => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.currentTime = value[0];
        setCurrentTime(value[0]);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = src;
        link.download = 'call-recording.mp3';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (error) {
        return (
            <div className={cn('flex items-center gap-2 text-sm text-muted-foreground', className)}>
                <span>Unable to load recording</span>
            </div>
        );
    }

    return (
        <div className={cn('flex items-center gap-2 p-2 rounded-lg bg-secondary/50', className)}>
            <audio ref={audioRef} src={src} preload='metadata' />

            {/* Play/Pause Button */}
            <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8 shrink-0'
                onClick={togglePlayPause}
                disabled={!isLoaded}
            >
                {isPlaying ? (
                    <Pause className='h-4 w-4' />
                ) : (
                    <Play className='h-4 w-4' />
                )}
            </Button>

            {/* Time Display */}
            <span className='text-xs text-muted-foreground w-10 shrink-0'>
                {formatTime(currentTime)}
            </span>

            {/* Progress Slider */}
            <div className='flex-1 min-w-0'>
                <Slider
                    value={[currentTime]}
                    max={duration || 100}
                    step={0.1}
                    onValueChange={handleSeek}
                    disabled={!isLoaded}
                    className='cursor-pointer'
                />
            </div>

            {/* Duration Display */}
            <span className='text-xs text-muted-foreground w-10 shrink-0'>
                {formatTime(duration)}
            </span>

            {/* Mute Button */}
            <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8 shrink-0'
                onClick={toggleMute}
                disabled={!isLoaded}
            >
                {isMuted ? (
                    <VolumeX className='h-4 w-4' />
                ) : (
                    <Volume2 className='h-4 w-4' />
                )}
            </Button>

            {/* Download Button */}
            <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8 shrink-0'
                onClick={handleDownload}
                title='Download recording'
            >
                <Download className='h-4 w-4' />
            </Button>
        </div>
    );
}
