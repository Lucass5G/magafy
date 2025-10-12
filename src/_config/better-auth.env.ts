import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const betterAuthEnv = createEnv({
  server: {
    SPOTIFY_PROVIDER_CLIENT_ID: z.string(),
    SPOTIFY_PROVIDER_CLIENT_SECRET: z.string(),
  },
  runtimeEnv: {
    SPOTIFY_PROVIDER_CLIENT_ID: process.env.SPOTIFY_PROVIDER_CLIENT_ID,
    SPOTIFY_PROVIDER_CLIENT_SECRET: process.env.SPOTIFY_PROVIDER_CLIENT_SECRET,
  },
});
