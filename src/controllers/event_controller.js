import { createEventModel, deleteEventModel, editEventModel, getEventModel, getEventsModel } from "../models/event_model.js"

export const getEvents = async (req, res, next) => {
  try {
    const rows = await getEventsModel()
    res.json(rows)
  } catch (error) {
    next(error)
  }
}

export const getEvent = async (req, res, next) => {
  try {
    const { id } = req.params
    const row = await getEventModel(id)

    if (!row) {
      const error = new Error("Event not found")
      error.status = 404
      throw error
    }
    res.json(row)
  } catch (error) {
    next(error)
  }
}

export const createEvent = async (req, res, next) => {
  try {
    const {title, description} = req.body
    const rows = await createEventModel(title,description)
    res.status(201).json(rows[0])
  } catch (error) {
    next(error)
  }
}

export const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params
    const rowCount = await deleteEventModel(id)

    if (rowCount === 0) {
      const error = new Error("Event not found")
      error.status = 404
      throw error
    }
    res.json({ message: "Event delete" })
  } catch (error) {
    next(error)
  }
}

export const editEvent = async (req, res, next) => {
  try {
    const { id } = req.params
    const row = await editEventModel(req.body,id)

    if (!row) {
      const error = new Error("Event not found")
      error.status = 404
      throw error
    }
    res.json(row)
  } catch (error) {
    next(error)
  }
}