import {createAuthClient} from "better-auth/react";
import {redirect} from "next/navigation";

export const authClient = createAuthClient();

export const signIn = async () => {
  await authClient.signIn.social({
    provider: "spotify",
  });

  redirect("/artistas");
};
