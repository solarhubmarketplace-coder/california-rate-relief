'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { UserManagement } from '@/components/users/UserManagement';

export default function UsersPage() {
    return (
        <ProtectedRoute>
            <DashboardLayout>
                <UserManagement />
            </DashboardLayout>
        </ProtectedRoute>
    );
}
