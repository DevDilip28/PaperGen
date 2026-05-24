import "dotenv/config";

import { Worker } from "bullmq";
import redisConnection from "../config/redis.js";
import connectDB from "../config/db.js";
import Assignment from "../models/assignment.model.js";
import { QuestionPaperPrompt } from "../prompts/questionPaper.prompt.js";
import { generateQuestionPaper } from "../services/ai.service.js";
import { extractJSON } from "../parsers/questionPaper.parser.js";
import { QuestionPaperSchema } from "../validators/questionPaper.validator.js";

connectDB();

const worker = new Worker(
  "assignment-generation",

  async (job) => {

    try {
      console.log(
        "Processing Job:",
        job.id
      );

      await Assignment.findByIdAndUpdate(job.data.assignmentId,
        {
          status: "processing",
        }
      );

      const prompt = QuestionPaperPrompt({
        topic: job.data.topic,
        totalQuestions: job.data.totalQuestions,
        totalMarks: job.data.totalMarks,
        instructions: job.data.instructions,
        questionTypes: job.data.questionTypes,
      });

      const aiResponse = await generateQuestionPaper(prompt);

      const parsedResponse = extractJSON(aiResponse!);

      const validatedData = QuestionPaperSchema.parse(parsedResponse);

      await Assignment.findByIdAndUpdate(job.data.assignmentId,
        {
          status: "completed",

          questionPaper:
            validatedData,
        }
      );

      console.log(
        "Assignment Updated Successfully"
      );
    } catch (error) {
      console.log(
        "Worker Error:",
        error
      );

      await Assignment.findByIdAndUpdate(
        job.data.assignmentId,
        {
          status: "failed",
        }
      );
      throw error;
    }
  },

  {
    connection: redisConnection,
  }
);

worker.on("completed",
  (job) => {
    console.log(
      `Job ${job.id} completed`
    );
  }
);

worker.on("failed",
  (job, err) => {
    console.log(
      `Job ${job?.id} failed`
    );

    console.log(err);
  }
);
