import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },

        difficulty: {
            type: String,
            enum: ["easy", "medium", "hard"],
            required: true,
        },

        marks: {
            type: Number,
            required: true,
        },
    },
    {
        _id: false,
    }
);

const SectionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        instruction: {
            type: String,
            required: true,
        },

        questions: [QuestionSchema],
    },
    {
        _id: false,
    }
);

const QuestionTypeSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
        },

        count: {
            type: Number,
            required: true,
        },

        marks: {
            type: Number,
            required: true,
        },
    },
    {
        _id: false,
    }
);

const AssignmentSchema = new mongoose.Schema(
    {
        topic: {
            type: String,
            required: true,
        },

        dueDate: {
            type: String,
        },

        instructions: {
            type: String,
        },

        uploadedFile: {
            type: String,
        },

        questionTypes: [QuestionTypeSchema],

        totalQuestions: {
            type: Number,
            required: true,
        },

        totalMarks: {
            type: Number,
            required: true,
        },

        status: {
            type: String,
            enum: [
                "pending",
                "processing",
                "completed",
                "failed",
            ],

            default: "pending",
        },

        questionPaper: {
            sections: [SectionSchema],
        },
    },

    {
        timestamps: true,
        versionKey: false,
    }
);

const Assignment = mongoose.model(
    "Assignment",
    AssignmentSchema
);

export default Assignment;