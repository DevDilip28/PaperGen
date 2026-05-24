import express from "express";
import cors from "cors";

import assignmentRoutes from "./routes/assignment.route.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/assignments", assignmentRoutes);

app.get("/", (_req, res) => {
  res.send("PaperGen Backend Running");
});

export default app;
