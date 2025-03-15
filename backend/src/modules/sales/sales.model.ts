import mongoose from 'mongoose';

export interface ISale extends mongoose.Document {
    product: mongoose.Schema.Types.ObjectId;
    customer: mongoose.Schema.Types.ObjectId;
    quantity: number;
    price: number;
    total: number;
    date: Date;
}

const SaleSchema = new mongoose.Schema<ISale>({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

export default mongoose.model<ISale>('Sale', SaleSchema);
