import express from "express";
import cors from "cors";

import assignmentRoutes from "./routes/assignment.route.js"

const app = express();

import cors from "cors";

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "https://papergen-git-main-dilip-asdeos-projects.vercel.app",
        ],
        credentials: true,
    })
);

app.use(express.json());

app.use("/api/assignments", assignmentRoutes);

export default app;
