import express from "express";
import cors from "cors";

import assignmentRoutes from "./routes/assignment.route.js";

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "https://papergen-git-main-dilip-asdeos-projects.vercel.app",
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());

app.use("/api/assignments", assignmentRoutes);

app.get("/", (_req, res) => {
    res.send("PaperGen Backend Running");
});

export default app;
