import Redis from "ioredis";

const RedisClass = Redis as unknown as typeof Redis.default;

const redisConnection = new RedisClass(
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
