import {CreatePlaylistForm} from "@components/(Playlists)/CreatePlaylistForm";
import {Heading} from "@components/Typography";
import {redirect} from "next/navigation";
import {Suspense} from "react";
import {Playlists} from "@/_layouts/(Playlists)/Playlists";
import {useHasSession} from "@/_utils/has-session";

export default async function PlaylistsPage() {
  const hasSession = await useHasSession();

  if (!hasSession) {
    redirect("/entrar");
  }

  return (
    <main className={"flex flex-col gap-4 w-full"}>
      <section
        className={
          "flex flex-col gap-6 md:flex-row justify-between md:items-center p-8"
        }
      >
        <div className="flex flex-col gap-2">
          <Heading as={"h2"}>Minhas playlists</Heading>
          <Heading as={"h5"} className={"text-grey-300"}>
            Sua coleção pessoal de playlists
          </Heading>
        </div>
        <CreatePlaylistForm />
      </section>
      <Suspense fallback={<div>Carregando playlist</div>}>
        <Playlists />
      </Suspense>
    </main>
  );
}
