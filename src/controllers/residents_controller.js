import { pool } from "../db.js"
import { getResidentModel, createResidentModel, deleteResidentModel, editResidentModel} from "../model/residents_model.js"


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
    try {
        const { id } = req.params
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
    try {
        const { first_name, last_name, birthdate, admission_date, bio } = req.body
        const rows = await createResidentModel(first_name, last_name, birthdate, admission_date, bio)
        return res.json(rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error creating resident' })
    }
}

export const deleteResident = async (req, res) => {
    try {
        const { id } = req
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
    try {
        const { id } = req.params
        const { first_name, last_name, birthdate, admission_date, bio } = req.body
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