import { Request, Response } from 'express';
import { registerUser, loginUser } from './auth.service';

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password, role } = req.body;
        const user = await registerUser(username, email, password, role);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await loginUser(email, password);
        res.status(200).json({ message: 'Login successful', token });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
