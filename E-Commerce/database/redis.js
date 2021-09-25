/**
 * Redis Store
 * Redis Client
 * Session
 */

var redis = require("redis");
var session = require("express-session");
var connectRedis = require("connect-redis");
// connectRedis -> object
const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  host: "localhost",
  port: "6379",
});

redisClient.on("connect", () => {
  console.log("Redis connection established.");
});

redisClient.on("error", (err) => {
  console.error("Could not connect to Redis.", err);
});

module.exports = { redisClient, RedisStore, session };
