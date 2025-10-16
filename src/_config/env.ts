import {vercel} from "@t3-oss/env-core/presets-zod";
import {createEnv} from "@t3-oss/env-nextjs";
import {z} from "zod";
import {betterAuthEnv} from "@/_config/better-auth.env";

export const env = createEnv({
  server: {
    BETTER_AUTH_URL: z.string(),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  extends: [betterAuthEnv, vercel()],
  isServer: typeof window === "undefined",
});
