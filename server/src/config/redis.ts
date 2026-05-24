import Redis from "ioredis";

const redisConnection = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    maxRetriesPerRequest: null,
});

redisConnection.on("connect", () => {
    console.log("Connected to Redis");
});

redisConnection.on("error", (err) => {
    console.error("Redis connection error:", err);
});

export default redisConnection;
