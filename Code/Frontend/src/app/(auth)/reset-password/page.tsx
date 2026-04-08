'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { resetPassword } from '@/lib/auth';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Loader2, KeyRound, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ResetPasswordPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isValidSession, setIsValidSession] = useState<boolean | null>(null);
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        // Check if we have a valid recovery session
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            // Check if this is a password recovery session
            // Supabase sets the user when clicking the recovery link
            if (session?.user) {
                setIsValidSession(true);
            } else {
                // No session - might be an invalid or expired link
                setIsValidSession(false);
            }
        };

        checkSession();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast({
                title: 'Passwords do not match',
                description: 'Please make sure your passwords match.',
                variant: 'destructive',
            });
            return;
        }

        if (password.length < 6) {
            toast({
                title: 'Password too short',
                description: 'Password must be at least 6 characters.',
                variant: 'destructive',
            });
            return;
        }

        setIsLoading(true);

        try {
            const result = await resetPassword(password);
            if (result.success) {
                setIsSuccess(true);
                toast({
                    title: 'Password updated!',
                    description: 'Your password has been successfully reset.',
                });
            } else {
                toast({
                    title: 'Reset failed',
                    description: result.error || 'Unable to reset password',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'An unexpected error occurred',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Loading state while checking session
    if (isValidSession === null) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-slate-50'>
                <Card className='w-full max-w-md shadow-lg border border-slate-200'>
                    <CardContent className='flex items-center justify-center py-12'>
                        <Loader2 className='h-8 w-8 animate-spin text-[#084F5A]' />
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Invalid or expired link
    if (!isValidSession) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-slate-50 p-4'>
                <Card className='w-full max-w-md shadow-lg border border-slate-200'>
                    <CardHeader className='space-y-4 pb-6'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 bg-red-100 rounded-xl'>
                                <XCircle className='h-8 w-8 text-red-600' />
                            </div>
                            <div>
                                <CardTitle className='text-2xl font-bold text-slate-900'>
                                    Invalid Link
                                </CardTitle>
                                <CardDescription className='text-slate-600'>
                                    This reset link is invalid or expired
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className='space-y-6'>
                        <p className='text-slate-600'>
                            The password reset link you clicked is either invalid or has expired.
                            Please request a new password reset from the login page.
                        </p>
                        <Button
                            className='w-full h-11 bg-[#084F5A] hover:bg-[#38737F]'
                            onClick={() => router.push('/login')}
                        >
                            Back to Login
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Success state
    if (isSuccess) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-slate-50 p-4'>
                <Card className='w-full max-w-md shadow-lg border border-slate-200'>
                    <CardHeader className='space-y-4 pb-6'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 bg-green-100 rounded-xl'>
                                <CheckCircle className='h-8 w-8 text-green-600' />
                            </div>
                            <div>
                                <CardTitle className='text-2xl font-bold text-slate-900'>
                                    Password Reset!
                                </CardTitle>
                                <CardDescription className='text-slate-600'>
                                    Your password has been updated
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className='space-y-6'>
                        <p className='text-slate-600'>
                            Your password has been successfully reset. You can now use your new password to sign in.
                        </p>
                        <Button
                            className='w-full h-11 bg-[#084F5A] hover:bg-[#38737F]'
                            onClick={() => router.push('/')}
                        >
                            Go to Dashboard
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Reset password form
    return (
        <div className='min-h-screen flex items-center justify-center bg-slate-50 p-4'>
            <Card className='w-full max-w-md shadow-lg border border-slate-200'>
                <CardHeader className='space-y-4 pb-6'>
                    <div className='flex items-center gap-4'>
                        <div className='p-3 bg-[#084F5A]/10 rounded-xl'>
                            <KeyRound className='h-8 w-8 text-[#084F5A]' />
                        </div>
                        <div>
                            <CardTitle className='text-2xl font-bold text-slate-900'>
                                Set New Password
                            </CardTitle>
                            <CardDescription className='text-slate-600'>
                                Enter your new password below
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className='space-y-5'>
                        <div className='space-y-2'>
                            <Label htmlFor='password' className='text-sm font-medium'>
                                New Password
                            </Label>
                            <Input
                                id='password'
                                type='password'
                                placeholder='At least 6 characters'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={isLoading}
                                className='h-11'
                            />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='confirmPassword' className='text-sm font-medium'>
                                Confirm New Password
                            </Label>
                            <Input
                                id='confirmPassword'
                                type='password'
                                placeholder='Confirm your new password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                disabled={isLoading}
                                className='h-11'
                            />
                        </div>
                        <Button
                            type='submit'
                            className='w-full h-11 text-sm bg-[#084F5A] hover:bg-[#38737F] text-white font-medium shadow-sm'
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    Updating...
                                </>
                            ) : (
                                'Update Password'
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
