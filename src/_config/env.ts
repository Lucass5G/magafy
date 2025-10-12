import { createEnv } from "@t3-oss/env-nextjs";
import { betterAuthEnv } from "@/_config/better-auth.env";

export const env = createEnv({
  server: {},
  experimental__runtimeEnv: process.env,
  extends: [betterAuthEnv],
  isServer: typeof window === "undefined",
});
