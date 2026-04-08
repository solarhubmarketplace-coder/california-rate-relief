'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    UserPlus,
    Loader2,
    Trash2,
    Edit2,
    Shield,
    Mail,
    RefreshCw,
    Eye,
    EyeOff,
    Search,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
    User,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
    CreateUserData,
    UpdateUserData,
} from '@/lib/users';
import { format } from 'date-fns';

export function UserManagement() {
    const { toast } = useToast();
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // Modal states
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    // Form states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [createForm, setCreateForm] = useState<CreateUserData>({
        email: '',
        password: '',
        name: '',
    });
    const [editForm, setEditForm] = useState<UpdateUserData>({
        email: '',
        name: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    // Load users
    const loadUsers = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await fetchUsers();
            setUsers(data);
        } catch (error) {
            console.error('Failed to load users:', error);
            toast({
                title: 'Error',
                description: 'Failed to load users',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    }, [toast]);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    // Filter users
    const filteredUsers = users.filter(
        (user) =>
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Create user
    const handleCreate = async () => {
        if (!createForm.email || !createForm.password) {
            toast({
                title: 'Validation Error',
                description: 'Email and password are required',
                variant: 'destructive',
            });
            return;
        }

        setIsSubmitting(true);
        try {
            await createUser(createForm);
            toast({
                title: 'User Created',
                description: `Successfully created admin user ${createForm.email}`,
            });
            setIsCreateOpen(false);
            setCreateForm({ email: '', password: '', name: '' });
            loadUsers();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to create user',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Update user
    const handleUpdate = async () => {
        if (!selectedUser) return;

        setIsSubmitting(true);
        try {
            await updateUser(selectedUser.id, editForm);
            toast({
                title: 'User Updated',
                description: 'Successfully updated user',
            });
            setIsEditOpen(false);
            setSelectedUser(null);
            loadUsers();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to update user',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Delete user
    const handleDelete = async () => {
        if (!selectedUser) return;

        setIsSubmitting(true);
        try {
            await deleteUser(selectedUser.id);
            toast({
                title: 'User Deleted',
                description: 'Successfully deleted user',
            });
            setIsDeleteOpen(false);
            setSelectedUser(null);
            loadUsers();
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Failed to delete user',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Open edit modal
    const openEditModal = (user: User) => {
        setSelectedUser(user);
        setEditForm({
            email: user.email,
            name: user.name || '',
        });
        setIsEditOpen(true);
    };

    // Open delete modal
    const openDeleteModal = (user: User) => {
        setSelectedUser(user);
        setIsDeleteOpen(true);
    };

    return (
        <div className='space-y-6'>
            {/* Header */}
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                <div>
                    <h1 className='text-2xl font-bold text-foreground'>User Management</h1>
                    <p className='text-muted-foreground'>
                        Manage admin users for your organization
                    </p>
                </div>
                <div className='flex items-center gap-3'>
                    <Button
                        variant='outline'
                        size='icon'
                        onClick={loadUsers}
                        disabled={isLoading}
                    >
                        <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                    </Button>
                    <Button onClick={() => setIsCreateOpen(true)}>
                        <UserPlus className='mr-2 h-4 w-4' />
                        Add Admin User
                    </Button>
                </div>
            </div>

            {/* Search */}
            <div className='relative max-w-sm'>
                <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
                <Input
                    placeholder='Search by name or email...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='pl-10 bg-white'
                />
            </div>

            {/* Users Table */}
            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                        <Shield className='h-5 w-5 text-primary' />
                        Admin Users
                    </CardTitle>
                    <CardDescription>
                        {users.length} total user{users.length !== 1 ? 's' : ''}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='rounded-lg border border-border overflow-hidden'>
                        <Table>
                            <TableHeader>
                                <TableRow className='hover:bg-transparent'>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Created</TableHead>
                                    <TableHead className='text-right'>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isLoading ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className='h-32 text-center'>
                                            <Loader2 className='mx-auto h-6 w-6 animate-spin text-muted-foreground' />
                                        </TableCell>
                                    </TableRow>
                                ) : filteredUsers.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={4}
                                            className='h-32 text-center text-muted-foreground'
                                        >
                                            {searchQuery ? 'No users match your search' : 'No users found'}
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredUsers.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>
                                                <div className='flex items-center gap-3'>
                                                    <div className='h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center'>
                                                        <span className='text-sm font-medium text-primary'>
                                                            {user.name?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <span className='font-medium text-foreground'>
                                                        {user.name || '—'}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className='flex items-center gap-2'>
                                                    <Mail className='h-4 w-4 text-muted-foreground' />
                                                    <span className='text-sm'>{user.email}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className='text-muted-foreground'>
                                                {format(new Date(user.created_at), 'MMM d, yyyy')}
                                            </TableCell>
                                            <TableCell className='text-right'>
                                                <div className='flex items-center justify-end gap-2'>
                                                    <Button
                                                        variant='ghost'
                                                        size='icon'
                                                        onClick={() => openEditModal(user)}
                                                    >
                                                        <Edit2 className='h-4 w-4' />
                                                    </Button>
                                                    <Button
                                                        variant='ghost'
                                                        size='icon'
                                                        className='text-destructive hover:text-destructive'
                                                        onClick={() => openDeleteModal(user)}
                                                    >
                                                        <Trash2 className='h-4 w-4' />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Create User Dialog */}
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='flex items-center gap-2'>
                            <UserPlus className='h-5 w-5 text-primary' />
                            Create Admin User
                        </DialogTitle>
                        <DialogDescription>
                            Add a new admin user to manage the CRM
                        </DialogDescription>
                    </DialogHeader>
                    <div className='space-y-4 py-4'>
                        <div className='space-y-2'>
                            <Label htmlFor='create-name'>Name</Label>
                            <Input
                                id='create-name'
                                placeholder='John Doe'
                                value={createForm.name}
                                onChange={(e) =>
                                    setCreateForm({ ...createForm, name: e.target.value })
                                }
                            />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='create-email'>
                                Email <span className='text-destructive'>*</span>
                            </Label>
                            <Input
                                id='create-email'
                                type='email'
                                placeholder='admin@company.com'
                                value={createForm.email}
                                onChange={(e) =>
                                    setCreateForm({ ...createForm, email: e.target.value })
                                }
                            />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='create-password'>
                                Password <span className='text-destructive'>*</span>
                            </Label>
                            <div className='relative'>
                                <Input
                                    id='create-password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='••••••••'
                                    value={createForm.password}
                                    onChange={(e) =>
                                        setCreateForm({ ...createForm, password: e.target.value })
                                    }
                                />
                                <Button
                                    type='button'
                                    variant='ghost'
                                    size='icon'
                                    className='absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className='h-4 w-4' />
                                    ) : (
                                        <Eye className='h-4 w-4' />
                                    )}
                                </Button>
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                Minimum 6 characters
                            </p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant='outline'
                            onClick={() => setIsCreateOpen(false)}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleCreate} disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <UserPlus className='mr-2 h-4 w-4' />
                                    Create User
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Edit User Dialog */}
            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='flex items-center gap-2'>
                            <Edit2 className='h-5 w-5 text-primary' />
                            Edit User
                        </DialogTitle>
                        <DialogDescription>
                            Update user information
                        </DialogDescription>
                    </DialogHeader>
                    <div className='space-y-4 py-4'>
                        <div className='space-y-2'>
                            <Label htmlFor='edit-name'>Name</Label>
                            <Input
                                id='edit-name'
                                placeholder='John Doe'
                                value={editForm.name}
                                onChange={(e) =>
                                    setEditForm({ ...editForm, name: e.target.value })
                                }
                            />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='edit-email'>Email</Label>
                            <Input
                                id='edit-email'
                                type='email'
                                placeholder='admin@company.com'
                                value={editForm.email}
                                onChange={(e) =>
                                    setEditForm({ ...editForm, email: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant='outline'
                            onClick={() => setIsEditOpen(false)}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleUpdate} disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    Saving...
                                </>
                            ) : (
                                'Save Changes'
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete User?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete{' '}
                            <span className='font-semibold'>{selectedUser?.email}</span>?
                            This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDelete}
                            disabled={isSubmitting}
                            className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    Deleting...
                                </>
                            ) : (
                                'Delete'
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
