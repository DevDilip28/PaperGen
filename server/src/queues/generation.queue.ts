import { Queue } from "bullmq";
import redisConnection from "../config/redis.js";

export const generationQueue = new Queue("assignment-generation", {
    connection: redisConnection,
});
