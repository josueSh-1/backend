import { Router } from "express";

import { getResidents, getResident, createResident, deleteResident, editResident} from "../controllers/residents_controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { residentSchema, residentUpdateSchema } from "../schemas/residents_schema.js";
import { authMiddleware } from "../middlewares/auth.js";
import { isNurseOrAdmin, isSomeone } from "../middlewares/roles_auth.js";

const router = Router()

router.get('/residents', authMiddleware,getResidents)
router.get('/residents/:id', authMiddleware,getResident)

router.post('/residents', authMiddleware, isNurseOrAdmin,validateSchema(residentSchema),createResident)

router.delete('/residents/:id', authMiddleware, isNurseOrAdmin, deleteResident)

router.put('/residents/:id', authMiddleware, isNurseOrAdmin, validateSchema(residentUpdateSchema),editResident)

export default router;