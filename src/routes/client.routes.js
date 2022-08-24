import { Router } from 'express';
import { getAllClient, getClientById } from '../controllers/clientController';

const router = Router()

router.get('/api/client', getAllClient);
router.get('/api/client/:id', getClientById);

export default router