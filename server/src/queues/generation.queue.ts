import { Queue } from "bullmq";
import Redis from "ioredis";

const connection = new Redis.default(
  process.env.REDIS_URL as string,
  {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
  }
);

export const generationQueue = new Queue(
  "assignment-generation",
  {
    connection,
  }
);
