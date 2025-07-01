import { getUserModel, createUserModel, deleteUserModel, editUserModel, getUsersModel} from "../models/users_model.js"
import bcrypt from 'bcrypt';
import { createError, errors } from '../utils/error.js';

export const getUsers = async (req, res, next) => {
  try {
    const rows = await getUsersModel()
    res.json(rows)
  } catch (error) {
    next(error) 
  }
}

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const row = await getUserModel(id)

    if (!row) {
      throw createError(errors.userNotFound);
    }
    res.json(row)
  } catch (error) {
    next(error)
  }
}

export const createUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password, phone, fk_id_role, status } = req.body
    // Hashear la contraseña antes de guardar
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Validar si el email ya existe (opcional, si no lo haces en otro lado)
    // const emailMatch = await getEmailUserModel(email);
    // if (emailMatch) {
    //   throw createError(errors.emailExists);
    // }
    const rows = await createUserModel(first_name, last_name, email, hashedPassword, phone, fk_id_role, status)
    res.status(201).json(rows[0])
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const rowCount = await deleteUserModel(id)

    if (rowCount === 0) {
      throw createError(errors.userNotFound);
    }
    res.json({ message: "User deleted" })
  } catch (error) {
    next(error)
  }
}

export const editUser = async (req, res, next) => {
  try {
    const { id } = req.params
    let data = { ...req.body };
    // Si se va a actualizar la contraseña, hashearla
    if (data.password) {
      const saltRounds = 10;
      data.password = await bcrypt.hash(data.password, saltRounds);
    }
    const row = await editUserModel(data, id)

    if (!row) {
      throw createError(errors.userNotFound);
    }
    res.json(row)
  } catch (error) {
    next(error)
  }
}