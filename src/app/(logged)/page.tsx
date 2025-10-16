import type {Metadata} from 'next';
import {redirect} from "next/navigation";
import {useHasSession} from "@/_utils/has-session";

export const metadata: Metadata = {
  title: "Página inicial | Magafy",
};

export default async function HomePage() {
  const hasSession = await useHasSession();

  if (!hasSession) {
    return redirect("/entrar");
  }

  return <main />;
}
