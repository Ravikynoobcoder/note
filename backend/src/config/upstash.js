// backend/src/config/upstash.js
// Keep the file so your imports don’t break
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

// Create a dummy ratelimit so nothing crashes
const ratelimit = {
  // these methods do nothing
  limit: async () => ({ success: true }),
};

export default ratelimit;