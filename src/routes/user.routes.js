import { Router } from 'express';
import { createNewUser, getAllUsers, getUserById } from '../controllers/userController'

const router = Router()

router.get('/api/user', getAllUsers);
router.get('/api/user/:id', getUserById);
router.post('/api/user', createNewUser);

export default router







