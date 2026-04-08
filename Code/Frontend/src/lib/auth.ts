// Auth utilities using Supabase authentication
import { supabase, isSupabaseConfigured } from './supabaseClient';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export async function login(
  email: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  // Validate inputs
  if (!email || !password) {
    return {
      success: false,
      error: 'Email and password are required',
    };
  }

  // Check if Supabase is configured
  if (!isSupabaseConfigured) {
    return {
      success: false,
      error: 'Authentication service not configured. Please contact administrator.',
    };
  }

  try {
    // Sign in with Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    if (!data.user) {
      return {
        success: false,
        error: 'Login failed. Please try again.',
      };
    }

    // Map Supabase user to our User type
    const user: User = {
      id: data.user.id,
      email: data.user.email || email,
      name: data.user.user_metadata?.name ||
        data.user.user_metadata?.full_name ||
        email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      role: data.user.user_metadata?.role || 'user',
    };

    return {
      success: true,
      user,
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

export async function logout(): Promise<void> {
  if (!isSupabaseConfigured) {
    console.warn('Supabase not configured, skipping logout');
    return;
  }

  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
}

export async function getCurrentUser(): Promise<User | null> {
  if (!isSupabaseConfigured) {
    return null;
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email || '',
      name: user.user_metadata?.name ||
        user.user_metadata?.full_name ||
        (user.email ? user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1) : 'User'),
      role: user.user_metadata?.role || 'user',
    };
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
}

export async function signUp(
  email: string,
  password: string,
  name?: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  if (!email || !password) {
    return {
      success: false,
      error: 'Email and password are required',
    };
  }

  if (!isSupabaseConfigured) {
    return {
      success: false,
      error: 'Authentication service not configured. Please contact administrator.',
    };
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || email.split('@')[0],
          role: 'user',
        },
      },
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    if (!data.user) {
      return {
        success: false,
        error: 'Sign up failed. Please try again.',
      };
    }

    const user: User = {
      id: data.user.id,
      email: data.user.email || email,
      name: name || email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      role: 'user',
    };

    return {
      success: true,
      user,
    };
  } catch (error) {
    console.error('Sign up error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

// Listen for auth state changes
export function onAuthStateChange(callback: (user: User | null) => void) {
  if (!isSupabaseConfigured) {
    return { data: { subscription: { unsubscribe: () => { } } } };
  }

  return supabase.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      const user: User = {
        id: session.user.id,
        email: session.user.email || '',
        name: session.user.user_metadata?.name ||
          session.user.user_metadata?.full_name ||
          (session.user.email ? session.user.email.split('@')[0] : 'User'),
        role: session.user.user_metadata?.role || 'user',
      };
      callback(user);
    } else {
      callback(null);
    }
  });
}

// Request password reset email - Supabase handles the reset link
export async function forgotPassword(
  email: string
): Promise<{ success: boolean; error?: string }> {
  if (!email) {
    return {
      success: false,
      error: 'Email is required',
    };
  }

  if (!isSupabaseConfigured) {
    return {
      success: false,
      error: 'Authentication service not configured. Please contact administrator.',
    };
  }

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/reset-password`,
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Forgot password error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

// Update password for authenticated user (used after clicking reset link)
export async function resetPassword(
  newPassword: string
): Promise<{ success: boolean; error?: string }> {
  if (!newPassword) {
    return {
      success: false,
      error: 'New password is required',
    };
  }

  if (newPassword.length < 6) {
    return {
      success: false,
      error: 'Password must be at least 6 characters',
    };
  }

  if (!isSupabaseConfigured) {
    return {
      success: false,
      error: 'Authentication service not configured. Please contact administrator.',
    };
  }

  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Reset password error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}


