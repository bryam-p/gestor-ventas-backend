import { Router } from 'express';
import { getAllSale, getSaleById } from '../controllers/salesController'

const router = Router()

router.get('/api/sale', getAllSale);
router.get('/api/sale/:id', getSaleById);

export default router