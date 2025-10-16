import {PrismaClient} from "@prisma/client";
import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {nextCookies} from "better-auth/next-js";
import {env} from "@/_config/env";

const prisma = new PrismaClient();
console.log("ENV", env.BASE_URL);
export const auth = betterAuth({
  plugins: [nextCookies()],
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL: env.BASE_URL,
  trustedOrigins: [
    "https://magafy.vercel.app",
    "https://magafy-preview.vercel.app",
    "http://127.0.0.1:3000",
  ],
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
