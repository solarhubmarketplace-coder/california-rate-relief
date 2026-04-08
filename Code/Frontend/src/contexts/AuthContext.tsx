'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';
import { User, login as loginApi, logout as logoutApi, getCurrentUser, onAuthStateChange } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for current user on mount
    const initAuth = async () => {
      try {
        // First check Supabase session
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        } else {
          // Fallback to localStorage for backward compatibility
          const storedUser = localStorage.getItem('solar_crm_user');
          if (storedUser) {
            try {
              setUser(JSON.parse(storedUser));
            } catch (error) {
              localStorage.removeItem('solar_crm_user');
            }
          }
        }
      } catch (error) {
        console.error('Auth init error:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Listen for auth state changes from Supabase
    const { data: { subscription } } = onAuthStateChange((user) => {
      setUser(user);
      if (user) {
        localStorage.setItem('solar_crm_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('solar_crm_user');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const result = await loginApi(email, password);
      if (result.success && result.user) {
        setUser(result.user);
        localStorage.setItem('solar_crm_user', JSON.stringify(result.user));
        router.push('/dashboard');
        return { success: true };
      }
      return { success: false, error: result.error || 'Login failed' };
    } catch (error) {
      return {
        success: false,
        error: 'An error occurred during login',
      };
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
      setUser(null);
      localStorage.removeItem('solar_crm_user');
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear local state even if Supabase logout fails
      setUser(null);
      localStorage.removeItem('solar_crm_user');
      router.push('/login');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
