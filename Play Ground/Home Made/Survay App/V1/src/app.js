import express, { json, urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(json({ limit: "16kb" }))
app.use(urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


//importing routes
import userRoutes from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users", userRoutes)



export { app }