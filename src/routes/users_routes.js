import { Router } from "express";

import { getUsers, getUser, createUser, deleteUser, editUser, getResidents, getResident, createResident, deleteResident, editResident} from "../controllers/users_controller.js";

const router = Router()

router.get('/users', getUsers)

router.get('/users/:id', getUser)

router.post('/users', createUser)

router.delete('/users/:id', deleteUser)

router.put('/users/:id', editUser)

router.get('/residents', getResidents)

router.get('/residents/:id', getResident)

router.post('/residents', createResident)

router.delete('/residents/:id', deleteResident)

router.put('/residents/:id', editResident)

export default router;