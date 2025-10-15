import {redirect} from "next/navigation";
import {Profile} from "@/_layouts/Profile";
import {useHasSession} from "@/_utils/has-session";

export const metadata = {
  title: "Perfil | Magafy",
};

export default async function ProfilePage() {
  const hasSession = await useHasSession();

  if (!hasSession) {
    redirect("/entrar");
  }

  return <Profile />;
}
