import { Router } from "express";

import { getDonations, getDonation, createDonation } from "../controllers/donations_controller.js";

const router = Router()

router.get('/donation',getDonations)

router.get('/donation/:id',getDonation)

router.post('/donation',createDonation)


export default router