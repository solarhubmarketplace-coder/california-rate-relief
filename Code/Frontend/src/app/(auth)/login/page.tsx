'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { forgotPassword } from '@/lib/auth';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Sun, Loader2, ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [isSendingReset, setIsSendingReset] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const { login, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  // Redirect to home if already logged in
  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.replace('/dashboard');
    }
  }, [isAuthenticated, loading, router]);

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-slate-50'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#084F5A]'></div>
      </div>
    );
  }

  // Don't render login form if authenticated (will redirect)
  if (isAuthenticated) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-slate-50'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#084F5A]'></div>
      </div>
    );
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await login(email, password);
      if (result.success) {
        toast({
          title: 'Welcome back!',
          description: 'You have been successfully logged in.',
        });
        router.push('/dashboard');
      } else {
        toast({
          title: 'Login failed',
          description: result.error || 'Invalid credentials',
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

  return (
    <div className='min-h-screen flex bg-slate-50'>
      {/* Left Side - Branding */}
      <div className='hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#084F5A] via-[#38737F] to-[#6099A5] overflow-hidden'>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-100'></div>
        <div className='relative z-10 flex flex-col items-center justify-center p-12 text-white w-full'>
          <div className='max-w-md space-y-8'>
            <div className='flex items-center gap-4'>
              <Image src='/logo.svg' alt='Sun Speed Logo' width={64} height={64} className='h-16 w-16' />
              <div>
                <h1 className='text-3xl font-bold'>Sun Speed</h1>
                <p className='text-white/80 text-base mt-1'>Solar CRM Platform</p>
              </div>
            </div>

            <div className='space-y-8 pt-8'>
              <div>
                <h2 className='text-3xl font-semibold mb-4'>
                  Streamline Your Solar Business
                </h2>
                <p className='text-white/80 text-base leading-relaxed'>
                  Manage leads, automate calls with AI voice agents, and
                  schedule appointments—all from one powerful platform.
                </p>
              </div>

              <div className='space-y-4 pt-4'>
                <div className='flex items-start gap-3'>
                  <div className='mt-1 p-2 bg-white/10 rounded-lg'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='font-semibold text-lg'>AI-Powered Calling</p>
                    <p className='text-sm text-white/70'>
                      Automated voice agent for lead qualification
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='mt-1 p-2 bg-white/10 rounded-lg'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='font-semibold text-lg'>Real-Time Analytics</p>
                    <p className='text-sm text-white/70'>
                      Track performance and conversions
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='mt-1 p-2 bg-white/10 rounded-lg'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='font-semibold text-lg'>Smart Scheduling</p>
                    <p className='text-sm text-white/70'>
                      Seamless appointment management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Subtle decorative elements */}
        <div className='absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 left-10 w-48 h-48 bg-[#88C3CF]/10 rounded-full blur-3xl'></div>
      </div>

      {/* Right Side - Login Form */}
      <div className='flex-1 flex items-center justify-center p-8 bg-white'>
        <Card className='w-full max-w-lg shadow-lg border border-slate-200'>
          <CardHeader className='space-y-4 pb-8'>
            <div className='flex items-center gap-4'>
              <Image src='/logo.svg' alt='Sun Speed Logo' width={56} height={56} className='h-14 w-14' />
              <div>
                <CardTitle className='text-3xl font-bold text-slate-900'>
                  Welcome Back
                </CardTitle>
                <CardDescription className='text-base text-slate-600'>
                  Sign in to Sun Speed
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-sm font-medium'>
                  Email Address
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='admin@sunspeed.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className='h-11'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password' className='text-sm font-medium'>
                  Password
                </Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className='h-11'
                />
              </div>
              <div className='flex items-center justify-between'>
                <button
                  type='button'
                  onClick={() => {
                    setForgotEmail(email);
                    setShowForgotPassword(true);
                  }}
                  className='text-sm text-[#084F5A] hover:text-[#38737F] font-medium transition-colors'
                >
                  Forgot password?
                </button>
              </div>
              <Button
                type='submit'
                className='w-full h-11 text-sm bg-[#084F5A] hover:bg-[#38737F] text-white font-medium shadow-sm'
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Forgot Password Dialog */}
      <Dialog open={showForgotPassword} onOpenChange={(open) => {
        setShowForgotPassword(open);
        if (!open) {
          setResetEmailSent(false);
        }
      }}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle className='flex items-center gap-2'>
              {resetEmailSent ? (
                <CheckCircle className='h-5 w-5 text-green-600' />
              ) : (
                <Mail className='h-5 w-5 text-[#084F5A]' />
              )}
              {resetEmailSent ? 'Check Your Email' : 'Reset Password'}
            </DialogTitle>
            <DialogDescription>
              {resetEmailSent
                ? `We've sent a password reset link to ${forgotEmail}`
                : 'Enter your email address and we\'ll send you a reset link'
              }
            </DialogDescription>
          </DialogHeader>
          {resetEmailSent ? (
            <div className='space-y-4'>
              <p className='text-sm text-slate-600'>
                Didn&apos;t receive the email? Check your spam folder or try again.
              </p>
              <div className='flex gap-2'>
                <Button
                  variant='outline'
                  className='flex-1'
                  onClick={() => setResetEmailSent(false)}
                >
                  Try Again
                </Button>
                <Button
                  className='flex-1 bg-[#084F5A] hover:bg-[#38737F]'
                  onClick={() => setShowForgotPassword(false)}
                >
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSendingReset(true);
                const result = await forgotPassword(forgotEmail);
                setIsSendingReset(false);
                if (result.success) {
                  setResetEmailSent(true);
                } else {
                  toast({
                    title: 'Failed to send reset email',
                    description: result.error,
                    variant: 'destructive',
                  });
                }
              }}
              className='space-y-4'
            >
              <div className='space-y-2'>
                <Label htmlFor='forgot-email'>Email Address</Label>
                <Input
                  id='forgot-email'
                  type='email'
                  placeholder='Enter your email'
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                  disabled={isSendingReset}
                />
              </div>
              <div className='flex gap-2'>
                <Button
                  type='button'
                  variant='outline'
                  className='flex-1'
                  onClick={() => setShowForgotPassword(false)}
                  disabled={isSendingReset}
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  className='flex-1 bg-[#084F5A] hover:bg-[#38737F]'
                  disabled={isSendingReset}
                >
                  {isSendingReset ? (
                    <>
                      <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                      Sending...
                    </>
                  ) : (
                    'Send Reset Link'
                  )}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
