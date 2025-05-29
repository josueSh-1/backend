import { pool } from "../db.js"
import { getUserModel, createUserModel, deleteUserModel, editUserModel, getResidentModel, createResidentModel, deleteResidentModel, editResidentModel} from "../models/users_model.js"

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
    const { id } = req.params
    try {
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
    const { first_name, last_name, email, password, phone, fk_id_role, status } = req.body
    try {
        const rows = await createUserModel(first_name, last_name, email, password, phone, fk_id_role, status)
        return res.json(rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error creating user' })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
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
    const { id } = req.params
    const { first_name, last_name, email, password, phone, fk_id_role, status } = req.body
    try {
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

export const getResidents = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM residents')
        return res.json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error getting residents' })
    }
}

export const getResident = async (req, res) => {
    const { id } = req.params
    try {
        const rows = await getResidentModel(id)
        if (!rows) {
            return res.status(404).json({ message: "Resident not Found" })
        }
        return res.json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error getting resident' })
    }
}

export const createResident = async (req, res) => {
    const { first_name, last_name, birthdate, admission_date, bio } = req.body
    try {
        const rows = await createResidentModel(first_name, last_name, birthdate, admission_date, bio)
        return res.json(rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error creating resident' })
    }
}

export const deleteResident = async (req, res) => {
    const { id } = req.params
    try {
        const rowCount = await deleteResidentModel(id)
        if (rowCount == 0) {
            return res.status(404).json({ message: "Resident not Found" })
        }
        return res.json({ message: "Resident deleted" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error deleting resident' })
    }
}

export const editResident = async (req, res) => {
    const { id } = req.params
    const { first_name, last_name, birthdate, admission_date, bio } = req.body
    try {
        const rows = await editResidentModel(first_name, last_name, birthdate, admission_date, bio, id)
        if (!rows) {
            return res.status(404).json({ message: "Resident not found" })
        }
        return res.json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error updating resident' })
    }
}