import { Router } from 'express';
import { getAllBankAccount, getBankAccountById } from '../controllers/bankAccountController';

const router = Router()

router.get('/api/bankaccount', getAllBankAccount);
router.get('/api/bankaccount/:id', getBankAccountById);

export default router