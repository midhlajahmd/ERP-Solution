import Sale from './sales.model';
import Product from './product.model';
import Customer from './customer.model';

export const addSale = async (productId: string, customerId: string, quantity: number) => {
    const product = await Product.findById(productId);
    const customer = await Customer.findById(customerId);
    
    if (!product) throw new Error('Product not found');
    if (!customer) throw new Error('Customer not found');
    if (product.stock < quantity) throw new Error('Not enough stock available');

    const total = quantity * product.price;

    // Deduct stock from the product
    product.stock -= quantity;
    await product.save();

    const newSale = new Sale({ product: productId, customer: customerId, quantity, price: product.price, total });
    await newSale.save();

    return newSale;
};

export const getSales = async () => {
    return await Sale.find().populate('product customer');
};

export const getSalesReport = async () => {
    const sales = await Sale.find();
    const totalRevenue = sales.reduce((sum, sale) => sum + sale.total, 0);
    return { totalSales: sales.length, totalRevenue };
};
