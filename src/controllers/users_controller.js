import { getUserModel, createUserModel, deleteUserModel, editUserModel, getUsersModel} from "../models/users_model.js"
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
      const error = new Error("User not found")
      error.status = 404
      throw error
    }
    res.json(row)
  } catch (error) {
    next(error)
  }
}

export const createUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password, phone, fk_id_role, status } = req.body
    const rows = await createUserModel(first_name, last_name, email, password, phone, fk_id_role, status)
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
      const error = new Error("User not found")
      error.status = 404
      throw error
    }
    res.json({ message: "User deleted" })
  } catch (error) {
    next(error)
  }
}

export const editUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const row = await editUserModel(req.body, id)

    if (!row) {
      const error = new Error("User not found")
      error.status = 404
      throw error
    }
    res.json(row)
  } catch (error) {
    next(error)
  }
}