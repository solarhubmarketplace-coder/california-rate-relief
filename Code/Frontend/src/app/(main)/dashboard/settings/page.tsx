'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { fetchSettings, updateSettings } from '@/lib/settings';
import { resetPassword } from '@/lib/auth';
import { useAuth } from '@/contexts/AuthContext';
import { Settings as SettingsType } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save, Key, Webhook, Bell, Phone, Lock, Eye, EyeOff, LogOut, RefreshCw, CheckCircle } from 'lucide-react';
import axiosClient from '@/lib/axios';

export default function SettingsPage() {
  const { toast } = useToast();
  const { user, logout } = useAuth();
  const [settings, setSettings] = useState<SettingsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Google connection state
  const [googleConnected, setGoogleConnected] = useState(false);
  const [googleConnectedAt, setGoogleConnectedAt] = useState<string | null>(null);
  const [isCheckingGoogle, setIsCheckingGoogle] = useState(false);

  // Google disconnect state
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Fetch Google connection status
  const checkGoogleStatus = useCallback(async () => {
    setIsCheckingGoogle(true);
    try {
      const response = await axiosClient.get('/auth/google/status');
      const data = (response as any).data || response;
      setGoogleConnected(data.connected || false);
      setGoogleConnectedAt(data.connectedAt || null);
      // Also update settings
      setSettings(prev => prev ? { ...prev, google_connected: data.connected } : prev);
    } catch (error) {
      console.error('Failed to check Google status:', error);
      setGoogleConnected(false);
    } finally {
      setIsCheckingGoogle(false);
    }
  }, []);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await fetchSettings();
        setSettings(data);
      } catch (error) {
        console.error('Failed to load settings:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSettings();
    checkGoogleStatus();
  }, [checkGoogleStatus]);

  // Handle Google OAuth redirect query parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const googleConnectedParam = params.get('google_connected');
    const googleErrorParam = params.get('google_error');

    if (googleConnectedParam === 'true') {
      // Show success toast
      toast({
        title: 'Google Connected!',
        description: 'Gmail and Calendar are now enabled.',
      });
      // Refresh the status
      checkGoogleStatus();
      // Clean up URL
      window.history.replaceState({}, '', '/settings');
    } else if (googleErrorParam) {
      // Show error toast
      toast({
        title: 'Google Connection Failed',
        description: decodeURIComponent(googleErrorParam),
        variant: 'destructive',
      });
      // Clean up URL
      window.history.replaceState({}, '', '/settings');
    }
  }, [checkGoogleStatus, toast]);


  const handleDisconnectGoogle = async () => {
    setIsDisconnecting(true);
    try {
      await axiosClient.delete('/auth/google/disconnect');
      setGoogleConnected(false);
      setGoogleConnectedAt(null);
      setSettings(prev => prev ? { ...prev, google_admin_tokens: null, google_connected: false } : prev);
      toast({
        title: 'Google Disconnected',
        description: 'Your Google account has been removed.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to disconnect Google account.',
        variant: 'destructive',
      });
    } finally {
      setIsDisconnecting(false);
    }
  };

  const handleSave = async () => {
    if (!settings) return;

    setIsSaving(true);
    try {
      await updateSettings(settings);
      toast({
        title: 'Settings Saved',
        description: 'Your settings have been updated successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save settings. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword || !confirmPassword) {
      toast({
        title: 'Missing fields',
        description: 'Please fill in all password fields.',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: 'Passwords do not match',
        description: 'New password and confirm password must match.',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: 'Password too short',
        description: 'Password must be at least 6 characters.',
        variant: 'destructive',
      });
      return;
    }

    setIsChangingPassword(true);
    try {
      const result = await resetPassword(newPassword);
      if (result.success) {
        toast({
          title: 'Password Updated',
          description: 'Your password has been changed successfully.',
        });
        // Clear the form
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to change password.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to log out. Please try again.',
        variant: 'destructive',
      });
      setIsLoggingOut(false);
    }
  };

  const updateSetting = <K extends keyof SettingsType>(
    key: K,
    value: SettingsType[K]
  ) => {
    setSettings((prev) => (prev ? { ...prev, [key]: value } : null));
  };

  if (isLoading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className='flex items-center justify-center py-12'>
            <Loader2 className='h-8 w-8 animate-spin text-muted-foreground' />
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }


  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className='space-y-6 max-w-2xl'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-foreground'>Settings</h1>
              <p className='text-sm text-muted-foreground'>
                Configure your AI voice agent and integrations
              </p>
            </div>
            <Button onClick={handleSave} disabled={isSaving} className='gap-2'>
              {isSaving ? (
                <Loader2 className='h-4 w-4 animate-spin' />
              ) : (
                <Save className='h-4 w-4' />
              )}
              Save Changes
            </Button>
          </div>



          {/* Google Integration */}
          <Card>
            <CardHeader>
              <div className='flex items-center gap-2'>
                <svg className='h-5 w-5' viewBox='0 0 24 24'>
                  <path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' />
                  <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' />
                  <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' />
                  <path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' />
                </svg>
                <CardTitle>Google Integration</CardTitle>
              </div>
              <CardDescription>
                Connect your Google account for Gmail and Calendar integration
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className={`rounded-lg border p-4 ${googleConnected ? 'border-green-500/30 bg-green-500/5' : 'border-border'}`}>
                <div className='flex items-center justify-between'>
                  <div className='space-y-1'>
                    <div className='flex items-center gap-2'>
                      <h3 className='font-medium text-foreground'>Google Account</h3>
                      {googleConnected && (
                        <CheckCircle className='h-4 w-4 text-green-500' />
                      )}
                    </div>

                    {googleConnected && settings?.google_admin_tokens?.profile ? (
                      <div className="flex items-center gap-3 mt-2 p-2 bg-background/50 rounded-md border text-left">
                        {settings.google_admin_tokens?.profile.picture && (
                          <Image
                            src={settings.google_admin_tokens?.profile.picture}
                            alt="Profile"
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full border"
                          />
                        )}
                        <div>
                          <p className="font-semibold text-sm">
                            {settings.google_admin_tokens.profile.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {settings.google_admin_tokens.profile.email}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className='text-sm text-muted-foreground'>
                        {isCheckingGoogle
                          ? 'Checking connection status...'
                          : googleConnected
                            ? '✅ Connected - Gmail and Calendar are enabled'
                            : 'Not connected - Required for email and calendar features'}
                      </p>
                    )}

                    {googleConnected && googleConnectedAt && !settings?.google_admin_tokens?.profile && (
                      <p className='text-xs text-muted-foreground'>
                        Connected: {new Date(googleConnectedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={checkGoogleStatus}
                      disabled={isCheckingGoogle}
                      title='Refresh status'
                    >
                      <RefreshCw className={`h-4 w-4 ${isCheckingGoogle ? 'animate-spin' : ''}`} />
                    </Button>
                    {googleConnected && (
                      <Button
                        variant='destructive'
                        size='sm'
                        onClick={handleDisconnectGoogle}
                        disabled={isDisconnecting}
                      >
                        {isDisconnecting ? (
                          <Loader2 className='mr-1 h-3 w-3 animate-spin' />
                        ) : null}
                        Disconnect
                      </Button>
                    )}
                    <Button
                      variant={googleConnected ? 'outline' : 'default'}
                      onClick={() => {
                        // Navigate to Google OAuth in current tab
                        const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
                        window.location.href = `${backendUrl}/auth/google`;
                      }}
                    >
                      {googleConnected ? 'Reconnect' : 'Connect Google'}
                    </Button>
                  </div>
                </div>
                <Separator className='my-4' />
                <div className='text-xs text-muted-foreground space-y-1'>
                  <p>• <strong>Calendar:</strong> Create events when appointments are booked</p>
                  {!googleConnected && (
                    <p className='mt-2 text-amber-600'>
                      ⚠️ Make sure you&apos;re logged into the Google account you want to use before clicking Connect.
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>


          {/* Dialing Behavior */}
          <Card>
            <CardHeader>
              <div className='flex items-center gap-2'>
                <Phone className='h-5 w-5 text-primary' />
                <CardTitle>Dialing Behavior</CardTitle>
              </div>
              <CardDescription>
                Configure how the AI agent handles calls
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='space-y-0.5'>
                  <Label>Auto-Dial New Leads</Label>
                  <p className='text-xs text-muted-foreground'>
                    Automatically call new leads within 60 seconds
                  </p>
                </div>
                <Switch
                  checked={settings?.auto_dial_enabled || false}
                  onCheckedChange={(checked) =>
                    updateSetting('auto_dial_enabled', checked)
                  }
                />
              </div>
              <Separator />
              <div className='flex items-center justify-between'>
                <div className='space-y-0.5'>
                  <Label>Double Dial Strategy</Label>
                  <p className='text-xs text-muted-foreground'>
                    Call again after 30 seconds if first attempt fails
                  </p>
                </div>
                <Switch
                  checked={settings?.double_dial_enabled || false}
                  onCheckedChange={(checked) =>
                    updateSetting('double_dial_enabled', checked)
                  }
                />
              </div>
              <Separator />
              <div className='flex items-center justify-between'>
                <div className='space-y-0.5'>
                  <Label>Leave Voicemail</Label>
                  <p className='text-xs text-muted-foreground'>
                    Leave a voicemail if lead doesn&apos;t answer
                  </p>
                </div>
                <Switch
                  checked={settings?.voicemail_enabled || false}
                  onCheckedChange={(checked) =>
                    updateSetting('voicemail_enabled', checked)
                  }
                />
              </div>
            </CardContent>
          </Card>



          {/* Change Password */}
          <Card>
            <CardHeader>
              <div className='flex items-center gap-2'>
                <Lock className='h-5 w-5 text-primary' />
                <CardTitle>Change Password</CardTitle>
              </div>
              <CardDescription>
                Update your account password
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='new_password'>New Password</Label>
                <div className='relative'>
                  <Input
                    id='new_password'
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder='Enter new password'
                    className='pr-10'
                  />
                  <Button
                    type='button'
                    variant='ghost'
                    size='icon'
                    className='absolute right-0 top-0 h-full px-3 hover:bg-transparent'
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff className='h-4 w-4 text-muted-foreground' />
                    ) : (
                      <Eye className='h-4 w-4 text-muted-foreground' />
                    )}
                  </Button>
                </div>
                <p className='text-xs text-muted-foreground'>
                  Must be at least 6 characters
                </p>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='confirm_password'>Confirm New Password</Label>
                <div className='relative'>
                  <Input
                    id='confirm_password'
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder='Confirm new password'
                    className='pr-10'
                  />
                  <Button
                    type='button'
                    variant='ghost'
                    size='icon'
                    className='absolute right-0 top-0 h-full px-3 hover:bg-transparent'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className='h-4 w-4 text-muted-foreground' />
                    ) : (
                      <Eye className='h-4 w-4 text-muted-foreground' />
                    )}
                  </Button>
                </div>
              </div>
              <Button
                onClick={handleChangePassword}
                disabled={isChangingPassword || !newPassword || !confirmPassword}
                className='gap-2'
              >
                {isChangingPassword ? (
                  <Loader2 className='h-4 w-4 animate-spin' />
                ) : (
                  <Lock className='h-4 w-4' />
                )}
                Update Password
              </Button>
            </CardContent>
          </Card>

          {/* Account / Logout */}
          <Card className='border-destructive/20'>
            <CardHeader>
              <div className='flex items-center gap-2'>
                <LogOut className='h-5 w-5 text-destructive' />
                <CardTitle>Account</CardTitle>
              </div>
              <CardDescription>
                Manage your account session
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center justify-between p-4 rounded-lg bg-muted/50'>
                <div>
                  <p className='font-medium text-foreground'>{user?.email || 'User'}</p>
                  <p className='text-sm text-muted-foreground'>Logged in as {user?.name || 'User'}</p>
                </div>
              </div>
              <Separator />
              <div className='space-y-2'>
                <p className='text-sm text-muted-foreground'>
                  Signing out will end your current session. You will need to sign in again to access the dashboard.
                </p>
                <Button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  variant='destructive'
                  className='gap-2'
                >
                  {isLoggingOut ? (
                    <Loader2 className='h-4 w-4 animate-spin' />
                  ) : (
                    <LogOut className='h-4 w-4' />
                  )}
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
