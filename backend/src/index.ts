import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './modules/auth/auth.routes';
import salesRoutes from './modules/sales/sales.routes';

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/sales', salesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
