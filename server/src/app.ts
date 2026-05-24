import express from "express";
import cors from "cors";

import assignmentRoutes from "./routes/assignment.route.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/assignments", assignmentRoutes);

export default app;
