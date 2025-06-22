import 'dotenv/config'
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../middlewares/jwtS.js';
import { createUserModel, getEmailUserModel } from "../models/users_model.js"

const JWT_SECRET = jwtSecret;

// REGISTRO
export const registerUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password, phone, fk_id_role, status } = req.body

    // Verificar si el correo ya está registrado
    const emailMatch = await getUserEmailModel(email)
    if (emailMatch) {
      return res.status(400).json({ message: "Email already registered" })
    }
    const rows = await createUserModel(first_name,last_name,email,password,phone,fk_id_role,status)
    res.status(201).json(rows[0])
  } catch (error) {
    next(error)
  }
};

// LOGIN
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await getEmailUserModel(email);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generar JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.fk_id_role,
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.fk_id_role,
        status: user.status
      }
    });
  } catch (error) {
    next(error);
  }
};