import axios from 'axios';

// Backend API URL - Update this when backend is deployed
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Create axios instance with default config
const axiosClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000, // 30 second timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - Add auth token or other headers
axiosClient.interceptors.request.use(
    (config) => {
        // You can add auth tokens here if needed
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor - Handle common errors
axiosClient.interceptors.response.use(
    (response) => {
        // Return the data directly from the response
        return response.data;
    },
    (error) => {
        // Handle common error scenarios
        if (error.response) {
            // Server responded with error status
            const message = error.response.data?.message || 'An error occurred';
            console.error('API Error:', message);
            return Promise.reject(new Error(message));
        } else if (error.request) {
            // Request was made but no response received
            console.error('Network Error: No response received');
            return Promise.reject(new Error('Network error. Please check your connection.'));
        } else {
            // Something happened in setting up the request
            console.error('Request Error:', error.message);
            return Promise.reject(error);
        }
    }
);

export default axiosClient;
