import { Router } from "express";

import { getResidents, getResiden, createResident, deleteResident, editResident} from "../controllers/residents_controller.js";

const router = Router()

router.get('/residents', getResidents)

router.get('/residents/:id', getResident)

router.post('/resident', createResident)

router.delete('/residents/:id', deleteResident)

router.put('/residents/:id', editResident)

export default router;