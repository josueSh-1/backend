import { Router } from "express"
import { createEvent, deleteEvent, editEvent, getEvent, getEvents } from "../controllers/event_controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { eventSchema, eventUpdateSchema } from "../schemas/event_schema.js"
import { authMiddleware } from "../middlewares/auth.js"
import { isNurseOrAdmin } from "../middlewares/roles_auth.js"

const router = Router()

router.get('/event', authMiddleware,getEvents)
router.get('/event/:id',authMiddleware,getEvent)

router.post('/event',authMiddleware, isNurseOrAdmin,validateSchema(eventSchema),createEvent)

router.put('/event/:id',authMiddleware,isNurseOrAdmin,validateSchema(eventUpdateSchema),editEvent)

router.delete('/event/:id',authMiddleware, isNurseOrAdmin,deleteEvent)


export default router