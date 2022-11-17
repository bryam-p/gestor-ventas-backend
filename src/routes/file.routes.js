import { Router } from 'express';
import { createNewFile } from '../controllers/filesController';

const router = Router()

router.post('/api/file', createNewFile);

export default router

