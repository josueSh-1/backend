import { Router } from "express";

import { getUsers, getUser, createUser, deleteUser, editUser} from "../controllers/users_controller.js"

const router = Router()

router.get('/users', getUsers)

router.get('/users/:id', getUser)

router.post('/users', createUser)

router.delete('/users/:id', deleteUser)

router.put('/users/:id', editUser)

export default router;