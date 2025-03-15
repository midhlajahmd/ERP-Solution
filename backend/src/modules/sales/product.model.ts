import mongoose from 'mongoose';

export interface IProduct extends mongoose.Document {
    name: string;
    price: number;
    stock: number;
}

const ProductSchema = new mongoose.Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model<IProduct>('Product', ProductSchema);
