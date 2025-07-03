import { Router } from "express";

import { getDonations, getDonation, createDonation, donationDetailedCtr } from "../controllers/donations_controller.js";
import { authMiddleware } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/roles_auth.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { donationsSchema } from "../schemas/donations_schema.js";

const router = Router()

router.get('/donation',authMiddleware, isAdmin,getDonations)
router.get('/donation/detailed',authMiddleware,isAdmin, donationDetailedCtr)

router.get('/donation/:id',authMiddleware, isAdmin,getDonation)

router.post('/donation',authMiddleware,validateSchema(donationsSchema),createDonation)



export default router