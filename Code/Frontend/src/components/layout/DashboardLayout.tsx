'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import {
  LayoutDashboard,
  Users,
  Phone,
  Calendar,
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  LogOut,
  User,
  Shield,
  FlaskConical,
  Mail,
  MessageSquare,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Leads', href: '/dashboard/leads', icon: Users },
  { name: 'Call Logs', href: '/dashboard/calls', icon: Phone },
  { name: 'Appointments', href: '/dashboard/appointments', icon: Calendar },
  { name: 'Email Logs', href: '/dashboard/email-logs', icon: Mail },
  { name: 'SMS Logs', href: '/dashboard/sms-logs', icon: MessageSquare },
  { name: 'Email Templates', href: '/dashboard/email-templates', icon: FileText },
  { name: 'User Management', href: '/dashboard/users', icon: Shield },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Testing', href: '/dashboard/testing', icon: FlaskConical },
];

const THEME_KEY = 'sun-speed-theme';

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const router = useRouter();

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_KEY, 'light');
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-border bg-sidebar transition-transform duration-200 lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="flex h-14 items-center gap-3 border-b border-border px-5">
          <Image src="/img/logo.svg" alt="California Rate Relief" width={36} height={36} className="h-9 w-9" />
          <span className="text-lg font-bold text-foreground">Rate Relief</span>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User profile */}
        <div className="border-t border-border p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 px-4 py-5 hover:bg-accent"
              >
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary text-base font-semibold">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <p className="text-base font-medium text-foreground">
                    {user?.name || 'User'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {user?.role === 'admin' ? 'Admin' : 'User'}
                  </p>
                </div>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive py-3 text-base"
                onClick={handleLogout}
              >
                <LogOut className="mr-2.5 h-5 w-5" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col lg:pl-60">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border bg-background px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <h2 className="text-lg font-semibold text-foreground">
            {navigation.find((n) => n.href === pathname)?.name || 'Dashboard'}
          </h2>

          <div className="ml-auto flex items-center gap-3">
            {/* Theme toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Status indicator */}
            <div className="flex items-center gap-2 rounded-full bg-status-success/10 px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-status-success" />
              <span className="text-xs font-medium text-status-success">
                Active
              </span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import {
  LayoutDashboard,
  Users,
  Phone,
  Calendar,
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  LogOut,
  User,
  Shield,
  FlaskConical,
  Mail,
  MessageSquare,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Leads', href: '/dashboard/leads', icon: Users },
  { name: 'Call Logs', href: '/dashboard/calls', icon: Phone },
  { name: 'Appointments', href: '/dashboard/appointments', icon: Calendar },
  { name: 'Email Logs', href: '/dashboard/email-logs', icon: Mail },
  { name: 'SMS Logs', href: '/dashboard/sms-logs', icon: MessageSquare },
  { name: 'Email Templates', href: '/dashboard/email-templates', icon: FileText },
  { name: 'User Management', href: '/dashboard/users', icon: Shield },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Testing', href: '/dashboard/testing', icon: FlaskConical },
];

const THEME_KEY = 'sun-speed-theme';

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const router = useRouter();

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_KEY, 'light');
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-border bg-sidebar transition-transform duration-200 lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="flex h-14 items-center gap-3 border-b border-border px-5">
          <Image src="/logo.svg" alt="Sun Speed Logo" width={36} height={36} className="h-9 w-9" />
          <span className="text-lg font-bold text-foreground">Sun Speed</span>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User profile */}
        <div className="border-t border-border p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 px-4 py-5 hover:bg-accent"
              >
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary text-base font-semibold">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <p className="text-base font-medium text-foreground">
                    {user?.name || 'User'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {user?.role === 'admin' ? 'Admin' : 'User'}
                  </p>
                </div>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive py-3 text-base"
                onClick={handleLogout}
              >
                <LogOut className="mr-2.5 h-5 w-5" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col lg:pl-60">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border bg-background px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <h2 className="text-lg font-semibold text-foreground">
            {navigation.find((n) => n.href === pathname)?.name || 'Dashboard'}
          </h2>

          <div className="ml-auto flex items-center gap-3">
            {/* Theme toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Status indicator */}
            <div className="flex items-center gap-2 rounded-full bg-status-success/10 px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-status-success" />
              <span className="text-xs font-medium text-status-success">
                Active
              </span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
