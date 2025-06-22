import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth_controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { registerSchema, loginSchema } from "../schemas/auth_schema.js";

const router = Router();

// Ruta para registrar un nuevo usuario
router.post('/register', validateSchema(registerSchema), registerUser);

// Ruta para login y generar token
router.post('/login', validateSchema(loginSchema), loginUser);

export default router;