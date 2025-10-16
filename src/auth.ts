import {PrismaClient} from "@prisma/client";
import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {nextCookies} from "better-auth/next-js";
import {env} from "@/_config/env";

const prisma = new PrismaClient();
const trustedOrigin = [
  "http://127.0.0.1:3000",
  env.VERCEL_URL ?? "",
  env.VERCEL_BRANCH_URL ?? "",
];

console.log("Trusted: ", trustedOrigin);

export const auth = betterAuth({
  plugins: [nextCookies()],
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL: "http://127.0.0.1:3000",
  trustedOrigins: trustedOrigin,
  advanced: {
    cookiePrefix: "better-auth",
    useSecureCookies: false,
  },
  socialProviders: {
    spotify: {
      clientId: env.SPOTIFY_PROVIDER_CLIENT_ID,
      clientSecret: env.SPOTIFY_PROVIDER_CLIENT_SECRET,
      scope: ["playlist-modify-private playlist-modify-public user-top-read"],
    },
  },
});
