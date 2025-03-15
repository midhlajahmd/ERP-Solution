import express from 'express';
import { createSale, listSales, salesReport } from './sales.controller';

const router = express.Router();

router.post('/add', createSale);
router.get('/', listSales);
router.get('/report', salesReport);

export default router;
