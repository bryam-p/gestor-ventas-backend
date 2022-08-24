import { Router } from "express";
import { getAllService, getServiceById } from "../controllers/serviceController";

const router = Router()

router.get('/api/service', getAllService);
router.get('/api/service/:id', getServiceById);

export default router