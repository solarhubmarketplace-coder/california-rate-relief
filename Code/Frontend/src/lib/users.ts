// User Management API Functions - Using Backend API
import axiosClient from './axios';

// ============================================
// Types
// ============================================

export interface User {
    id: string;
    email: string;
    name?: string;
    created_at: string;
    last_sign_in_at?: string;
    email_confirmed_at?: string;
}

export interface CreateUserData {
    email: string;
    password: string;
    name?: string;
}

export interface UpdateUserData {
    email?: string;
    name?: string;
    password?: string;
}

// ============================================
// API Functions
// ============================================

/**
 * Fetch all users from Supabase Auth via backend
 */
export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await axiosClient.get('/users');
        const data = (response as any).data || response;
        return data || [];
    } catch (error: any) {
        console.warn('Failed to fetch users:', error.message || error);
        return [];
    }
}

/**
 * Create a new user
 */
export async function createUser(userData: CreateUserData): Promise<User> {
    try {
        const response = await axiosClient.post('/users', userData);
        const data = (response as any).data || response;
        return data;
    } catch (error: any) {
        console.error('Failed to create user:', error);
        throw new Error(error.response?.data?.message || error.message || 'Failed to create user');
    }
}

/**
 * Update an existing user
 */
export async function updateUser(userId: string, userData: UpdateUserData): Promise<User> {
    try {
        const response = await axiosClient.put(`/users/${userId}`, userData);
        const data = (response as any).data || response;
        return data;
    } catch (error: any) {
        console.error('Failed to update user:', error);
        throw new Error(error.response?.data?.message || error.message || 'Failed to update user');
    }
}

/**
 * Delete a user
 */
export async function deleteUser(userId: string): Promise<void> {
    try {
        await axiosClient.delete(`/users/${userId}`);
    } catch (error: any) {
        console.error('Failed to delete user:', error);
        throw new Error(error.response?.data?.message || error.message || 'Failed to delete user');
    }
}

/**
 * Get a single user by ID
 */
export async function getUserById(userId: string): Promise<User | null> {
    try {
        const response = await axiosClient.get(`/users/${userId}`);
        const data = (response as any).data || response;
        return data;
    } catch (error: any) {
        console.error('Failed to get user:', error);
        return null;
    }
}
