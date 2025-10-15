import {authSession} from "@lib/auth-session";
import {redirect} from "next/navigation";
import {Login} from "@/_layouts/Login";

export default async function HomePage() {
  const session = await authSession();

  if (session) {
    return redirect("/artistas");
  }

  return <Login />;
}
