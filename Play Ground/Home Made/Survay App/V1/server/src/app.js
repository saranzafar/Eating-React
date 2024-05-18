import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Importing routes
import userRoutes from "./routes/user.routes.js";
import adminRoutes from './routes/admin.routes.js'
import responseRoutes from "./routes/response.routes.js"

const app = express();

// Middleware to log requests for debugging
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log(`Request origin: ${req.headers.origin}`);
    next();
});

// CORS configuration for deployment
app.use(cors({
    origin: "https://survey-app-sage.vercel.app", // Set the allowed origin
    methods: ["GET", "POST", "DELETE"],
    credentials: true // Allow credentials (cookies, authorization headers, TLS client certificates)
}));

// Manually handle preflight requests for better control
app.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://survey-app-sage.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.sendStatus(200);
});

// Using built-in Express middleware for parsing JSON and URL-encoded bodies
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));
app.use(cookieParser());

// Routes declaration
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/response", responseRoutes);

export { app };
