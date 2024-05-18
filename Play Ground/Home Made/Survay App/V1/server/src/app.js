import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Importing routes
import userRoutes from "./routes/user.routes.js";
import adminRoutes from './routes/admin.routes.js';
import responseRoutes from "./routes/response.routes.js";

const app = express();

// CORS configuration for deployment
app.use(cors({
    origin: process.env.CORS_ORIGIN || "*", // Secure this for production
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}));

// Using built-in Express middleware for parsing JSON and URL-encoded bodies
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));
app.use(cookieParser());

// Routes declaration
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/response", responseRoutes);

app.get("/", (req, res) => {
    res.json("Hello");
})

export { app };
