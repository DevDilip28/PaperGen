import Redis from "ioredis";

const redisConnection = new Redis.default(
  process.env.REDIS_URL as string,
  {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
  }
);

redisConnection.on("connect", () => {
  console.log("Connected to Redis");
});

redisConnection.on("error", (err: Error) => {
  console.error("Redis connection error:", err);
});

export default redisConnection;
