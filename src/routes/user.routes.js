import { Router } from 'express';
import { createNewUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController'

const router = Router()

router.get('/api/user', getAllUsers);
router.get('/api/user/:id', getUserById);
router.post('/api/user', createNewUser);
router.patch('/api/user/:id', updateUser);
router.delete('/api/user/:id', deleteUser);

export default router







