import Redis from "ioredis";

const redisConnection = new Redis(
    process.env.REDIS_URL || "redis://localhost:6379",
    {
        maxRetriesPerRequest: null,
    }
);

redisConnection.on("connect", () => {
    console.log("Connected to Redis");
});

redisConnection.on("error", (err: Error) => {
    console.error("Redis connection error:", err);
});

export default redisConnection;