import { Router } from "express";

import { getUsers, getUser, createUser, deleteUser, editUser} from "../controllers/users_controller.js"
import { validateSchema } from "../middlewares/validateSchema.js";
import { usersSchema, userUpdateSchema } from "../schemas/users_schema.js";
import { authMiddleware } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/roles_auth.js";

const router = Router()


router.get('/users',authMiddleware,isAdmin, getUsers)

router.get('/users/:id',authMiddleware,isAdmin, getUser)

router.post('/users',authMiddleware,isAdmin, validateSchema(usersSchema),createUser)

router.delete('/users/:id', authMiddleware,isAdmin,deleteUser)

router.put('/users/:id', authMiddleware,isAdmin,validateSchema(userUpdateSchema),editUser)

export default router;