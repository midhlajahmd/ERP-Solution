import mongoose from 'mongoose';

export interface ICustomer extends mongoose.Document {
    name: string;
    email: string;
    phone: string;
}

const CustomerSchema = new mongoose.Schema<ICustomer>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<ICustomer>('Customer', CustomerSchema);
