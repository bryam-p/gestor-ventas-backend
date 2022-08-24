import { Router } from 'express';
import { getAllArticle, getArticleById } from '../controllers/articleController';

const router = Router()

router.get('/api/article', getAllArticle);
router.get('/api/article/:id', getArticleById);

export default router