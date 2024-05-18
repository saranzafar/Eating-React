import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Importing routes
import userRoutes from "./routes/user.routes.js";
import adminRoutes from './routes/admin.routes.js'
import responseRoutes from "./routes/response.routes.js"

const app = express();

//for localhost
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }));

// for deployment 
app.use(cors({
    origin: ["https://survey-app-sage.vercel.app/"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}));

// Using built-in Express middleware for parsing JSON and URL-encoded bodies
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));
app.use(cookieParser());

// Routes declaration
app.use("/api/v1/users", userRoutes);//4avail - 4, done
app.use("/api/v1/admin", adminRoutes);//4avail - 4, done
app.use("/api/v1/response", responseRoutes);//2 avail - 1

export { app };
