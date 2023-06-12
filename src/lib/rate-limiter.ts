import { Ratelimit } from "@upstash/ratelimit"
import { redis } from "./redis"

export const rateLimiter =  new Ratelimit ({
  redis,
  limiter: Ratelimit.slidingWindow(4, '10 s'), // 4 requests per 10 seconds
  prefix: '@upstash/ratelimit'
})  
