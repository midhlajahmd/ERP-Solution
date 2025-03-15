import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    role: 'superadmin' | 'admin' | 'manager' | 'cashier';
}

const UserSchema = new mongoose.Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['superadmin', 'admin', 'manager', 'cashier'], default: 'cashier' }
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
