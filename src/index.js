import express from "express"
import cors from "cors"
import "dotenv/config"
import { PORT}  from "./config.js"
import userRoutes  from "./routes/users_routes.js"
import residentRoutes from "./routes/residents_routes.js"
import donationRoutes from "./routes/donations_routes.js"
import eventRoutes from "./routes/event_routes.js"
import authRoutes from "./routes/auth_routes.js"
import { errorHandler } from "./middlewares/errorHandler.js"

const app = express()

app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL
}))

app.use(authRoutes)
app.use(userRoutes)
app.use(residentRoutes)
app.use(donationRoutes)
app.use(eventRoutes)

app.use(errorHandler)

app.listen(PORT)
console.log("Listen: ", PORT)