import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './auth.model';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export const registerUser = async (username: string, email: string, password: string, role: string) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error('User already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, role });
    await newUser.save();
    return newUser;
};

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    return { token, user };
};
