import {betterAuth} from "better-auth";
import Database from "better-sqlite3";
import {env} from "@/_config/env";

export const auth = betterAuth({
  database: new Database("database.sqlite"),
  baseURL: "http://127.0.0.1:3000",
  trustedOrigins: ["http://127.0.0.1:3000"],
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
