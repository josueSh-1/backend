import { Router } from "express";

import { getUsers, getUser, createUser, deleteUser, editUser} from "../controllers/users_controller.js"
import { validateSchema } from "../middlewares/validateSchema.js";
import { usersSchema, userUpdateSchema } from "../schemas/users_schema.js";
import { authMiddleware } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/roles_auth.js";

const router = Router()

router.use(authMiddleware, isAdmin)

router.get('/users', getUsers)

router.get('/users/:id', getUser)

router.post('/users', validateSchema(usersSchema),createUser)

router.delete('/users/:id', deleteUser)

router.put('/users/:id', validateSchema(userUpdateSchema),editUser)

export default router;