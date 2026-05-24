import { Request, Response } from "express";

import Assignment from "../models/assignment.model.js";
import { generationQueue } from "../queues/generation.queue.js";

export const generateAssignment = async (req: Request, res: Response) => {
    try {
        const {
            topic,
            dueDate,
            instructions,
            questionTypes,
        } = req.body;

        const totalQuestions = questionTypes.reduce(
            (acc: number, item: any) =>
                acc + item.count,
            0
        );

        const totalMarks = questionTypes.reduce(
            (acc: number, item: any) =>
                acc + item.count * item.marks,
            0
        );

        const assignment = await Assignment.create({
            topic,
            dueDate,
            instructions,
            questionTypes,
            totalQuestions,
            totalMarks,
            status: "pending",
        });

        await generationQueue.add(
            "generate-paper",
            {
                assignmentId: assignment._id,
                topic,
                totalQuestions,
                totalMarks,
                instructions,
                questionTypes,
            },

            {
                attempts: 3,

                backoff: {
                    type: "exponential",
                    delay: 2000,
                },
            }
        );

        res.status(201).json({
            success: true,

            assignmentId: assignment._id,

            assignment,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to generate assignment",
        });
    }
};

export const getAssignment = async (req: Request, res: Response) => {
    try {
        const assignment = await Assignment.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            assignment,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch assignment",
        })
    }
};

export const getAssignmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const assignment = await Assignment.findById(id);

        if (!assignment) {
            return res.status(404).json({
                success: false,
                message: "Assignment not found",
            })
        }

        res.status(200).json({
            success: true,
            assignment,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch assignment",
        })
    }
}

export const deleteAssignment = async (req: Request, res: Response) => {
    try {
        const assignment = await Assignment.findByIdAndDelete(
            req.params.id
        );

        if (!assignment) {
            return res.status(404).json({
                message: "Assignment not found",
            });
        }

        return res.json({
            message: "Assignment deleted",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Delete failed",
        });
    }
};
