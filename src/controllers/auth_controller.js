import 'dotenv/config'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { createUserModel, getEmailUserModel } from "../models/users_model.js"
import { createError, errors } from '../utils/error.js';

const JWT_SECRET = process.env.JWT_SECRET;

// REGISTRO
export const registerUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password, phone, fk_id_role, status } = req.body

    // Verificar si el correo ya está registrado
    const emailMatch = await getEmailUserModel(email)
    if (emailMatch) {
      throw createError(errors.emailExists);
    }

    // Hashear la contraseña antes de guardar
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const rows = await createUserModel(first_name, last_name, email, hashedPassword, phone, fk_id_role, status)
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
    if (!user) {
      throw createError(errors.invalidCredentials);
    }

    // Comparar la contraseña ingresada con el hash guardado
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw createError(errors.invalidCredentials);
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
        id: user.id_user,
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