import express from "express"
import { PORT}  from "./config.js"
import userRoutes  from "./routes/users_routes.js"
import residentRoutes from "./routes/residents_routes.js"
import donationRoutes from "./routes/donations_routes.js"
const app = express()

app.use(express.json())
app.use(userRoutes)
app.use(residentRoutes)
app.use(donationRoutes)

app.listen(PORT)
console.log("Listen: ", PORT)