import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

// Extend Express Request Type to Include `user`
declare module 'express-serve-static-core' {
    interface Request {
        user?: { id: string; role: string };
    }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as { id: string; role: string };
        req.user = decoded; // ✅ Now TypeScript recognizes `user`
        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid token' });
    }
};
