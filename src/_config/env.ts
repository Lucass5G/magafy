import {vercel} from "@t3-oss/env-core/presets-zod";
import {createEnv} from "@t3-oss/env-nextjs";
import {z} from "zod";
import {betterAuthEnv} from "@/_config/better-auth.env";

export const env = createEnv({
  server: {
    BASE_URL: z.string(),
  },
  experimental__runtimeEnv: process.env,
  extends: [betterAuthEnv, vercel()],
  isServer: typeof window === "undefined",
});
