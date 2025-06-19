import { getResidentModel, createResidentModel, deleteResidentModel, editResidentModel, getResidentsModel} from "../models/residents_model.js"


export const getResidents = async (req, res, next) => {
  try {
    const rows = await getResidentsModel()
    res.json(rows)
  } catch (error) {
    next(error)
  }
}

export const getResident = async (req, res, next) => {
  try {
    const { id } = req.params
    const row = await getResidentModel(id)

    if (!row) {
      const error = new Error("Resident not found")
      error.status = 404
      throw error
    }
    res.json(row)
  } catch (error) {
    next(error)
  }
}

export const createResident = async (req, res, next) => {
  try {
    const { first_name, last_name, birthdate, admission_date, bio } = req.body
    const rows = await createResidentModel(first_name, last_name, birthdate, admission_date, bio)
    res.status(201).json(rows[0])
  } catch (error) {
    next(error)
  }
}

export const deleteResident = async (req, res, next) => {
  try {
    const { id } = req.params
    const rowCount = await deleteResidentModel(id)

    if (rowCount === 0) {
      const error = new Error("Resident not found")
      error.status = 404
      throw error
    }
    res.json({ message: "Resident deleted" })
  } catch (error) {
    next(error)
  }
}

export const editResident = async (req, res, next) => {
  try {
    const { id } = req.params
    const row = await editResidentModel(req.body, id)

    if (!row) {
      const error = new Error("Resident not found")
      error.status = 404
      throw error
    }
    res.json(row)
  } catch (error) {
    next(error)
  }
}