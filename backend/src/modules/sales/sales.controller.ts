import { Request, Response } from 'express';
import { addSale, getSales, getSalesReport } from './sales.service';

export const createSale = async (req: Request, res: Response) => {
    try {
        const { productId, customerId, quantity } = req.body;
        const sale = await addSale(productId, customerId, quantity);
        res.status(201).json({ message: 'Sale recorded successfully', sale });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const listSales = async (_req: Request, res: Response) => {
    try {
        const sales = await getSales();
        res.status(200).json({ sales });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const salesReport = async (_req: Request, res: Response) => {
    try {
        const report = await getSalesReport();
        res.status(200).json({ report });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
