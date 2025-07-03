import { Router } from "express"
import { authMiddleware } from "../middlewares/auth.js"
import { createEventLog, getEventLogs, eventLogFullDataController } from "../controllers/eventlog_controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { eventLogSchema } from "../schemas/eventlog_schema.js"

const router = Router()


router.get('/event_log',authMiddleware,getEventLogs)
router.get('/event_log/full', authMiddleware, eventLogFullDataController)

router.post('/event_log',authMiddleware,validateSchema(eventLogSchema),createEventLog)


export default router