import express, { json, urlencoded } from 'express'
import cros from 'cros'
import cookieParser from 'cookie-parser'


const app = express()

app.use(cros({
    origin: process.env.CROS_ORIGIN,
    credentials: true
}))
app.use(json({ limit: "16kb" }))
app.use(urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

export { app }