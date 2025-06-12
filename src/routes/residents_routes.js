import { Router } from "express";

import { getResidents, getResident, createResident, deleteResident, editResident} from "../controllers/residents_controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { residentSchema, residentUpdateSchema } from "../schemas/residents_schema.js";

const router = Router()

router.get('/residents', getResidents)

router.get('/residents/:id', getResident)

router.post('/residents', validateSchema(residentSchema),createResident)

router.delete('/residents/:id', deleteResident)

router.put('/residents/:id', validateSchema(residentUpdateSchema),editResident)

export default router;