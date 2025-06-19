import { Router } from "express"
import { createEvent, deleteEvent, editEvent, getEvent, getEvents } from "../controllers/event_controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { eventSchema, eventUpdateSchema } from "../schemas/event_schema.js"

const router = Router()

router.get('/event',getEvents)

router.get('/event/:id',getEvent)

router.post('/event',validateSchema(eventSchema),createEvent)

router.put('/event/:id',validateSchema(eventUpdateSchema),editEvent)

router.delete('/event/:id',deleteEvent)


export default router