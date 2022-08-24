import { Router } from "express";
import { getAllUsers } from "../controllers/contractorController";

const router = Router()

router.get('/api/contractor', getAllUsers);

export default router
