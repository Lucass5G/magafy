import {vercel} from "@t3-oss/env-core/presets-zod";
import {createEnv} from "@t3-oss/env-nextjs";
import {betterAuthEnv} from "@/_config/better-auth.env";

export const env = createEnv({
  server: {},
  experimental__runtimeEnv: process.env,
  extends: [betterAuthEnv, vercel()],
  isServer: typeof window === "undefined",
});
