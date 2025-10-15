import {authSession} from "@lib/auth-session";
import {redirect} from "next/navigation";

export async function useHasSession() {
  const session = await authSession();

  if (!session) {
    return redirect("/entrar");
  }

  return true;
}
