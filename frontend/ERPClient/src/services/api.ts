import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token and log requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('Request:', { 
    url: config.url, 
    method: config.method, 
    data: config.data 
  });
  return config;
});

// Add response interceptor to log responses
api.interceptors.response.use(
  (response) => {
    console.log('Response:', response.data);
    return response;
  },
  (error) => {
    console.error('Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Auth APIs
export const login = (email: string, password: string) =>
  api.post('/auth/login', { email, password });

export const register = (name: string, email: string, password: string) =>
  api.post('/auth/register', {
    username: name,
    email,
    password,
    role: 'cashier'
  });

// Sales APIs
export const createSale = (saleData: any) =>
  api.post('/sales/add', saleData);

export const listSales = () =>
  api.get('/sales');

export const getSalesReport = () =>
  api.get('/sales/report');

export default api; 