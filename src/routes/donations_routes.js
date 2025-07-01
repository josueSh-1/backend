import { Router } from "express";

import { getDonations, getDonation, createDonation } from "../controllers/donations_controller.js";
import { authMiddleware } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/roles_auth.js";

const router = Router()

router.get('/donation',authMiddleware, isAdmin,getDonations)

router.get('/donation/:id',authMiddleware, isAdmin,getDonation)

router.post('/donation',authMiddleware,createDonation)


export default router