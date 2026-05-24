import express from "express";

import {
    generateAssignment,
    getAssignment,
    getAssignmentById,
    deleteAssignment,
} from "../controllers/assignment.controller.js";

const router = express.Router();

router.post("/generate", generateAssignment);
router.get("/", getAssignment);
router.get("/:id", getAssignmentById);
router.delete("/:id", deleteAssignment);

export default router;

