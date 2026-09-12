const express = require("express");
// const mysql = require("mysql2/promise");
// const { createClient } = require("redis");

const app = express();

const PORT = 3000;

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: 3306
// });

// const redis = createClient({
//   url: `redis://${process.env.REDIS_HOST}:6379`
// });

// redis.on("error", (err) => {
//   console.error("Redis error:", err);
// });

async function start() {
  // await redis.connect();

  app.get("/", async (req, res) => {
    try {
      console.log("Ecommerce API started-3");
      // const [rows] = await db.query("SELECT NOW() AS currentTime");

      // await redis.set("message", "Hello from Redis!");

      // const message = await redis.get("message");

      res.json({
        message: "Docker Compose is working!",
        // mysql: rows[0].currentTime,
        // redis: message
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error: error.message
      });
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`API running on port ${PORT}`);
  });
}

start().catch(console.error);