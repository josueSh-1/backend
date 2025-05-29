import { pool } from "../db.js"
import { getUserModel, createUserModel, deleteUserModel, editUserModel} from "../models/users_model.js"

export const getUsers = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users')
        res.json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error getting users' })
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const rows = await getUserModel(id)
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not Found" })
        }
        res.json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error getting user' })
    }
}

export const createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, password, phone, fk_id_role, status } = req.body
        const rows = await createUserModel(first_name, last_name, email, password, phone, fk_id_role, status)
        return res.json(rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error creating user' })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const rowCount = await deleteUserModel(id)
        if (rowCount === 0) {
            return res.status(404).json({ message: "User not Found" })
        }
        return res.json({ message: "User deleted" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error deleting user' })
    }
}

export const editUser = async (req, res) => {
    try {
        const { id } = req.params
        const { first_name, last_name, email, password, phone, fk_id_role, status } = req.body
        const rows = await editUserModel(first_name, last_name, email, password, phone, fk_id_role, status, id)
        if (!rows) {
            return res.status(404).json({ message: "User not Found" })
        }
        return res.json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error updating user' })
    }
}