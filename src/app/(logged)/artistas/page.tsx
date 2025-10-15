import {Heading} from "@components/Typography";
import {redirect} from "next/navigation";
import {Suspense} from "react";
import {TopArtist} from "@/_layouts/Artist";
import {ArtistsSkeleton} from "@/_layouts/Artist/artists.skeleton";
import {useHasSession} from "@/_utils/has-session";

export const metadata = {
  title: "Artistas | Magafy",
};

export default async function ArtistsPage() {
  const hasSession = await useHasSession();

  if (!hasSession) {
    redirect("/entrar");
  }

  return (
    <main className={"flex flex-col gap-4 w-full"}>
      <section className={"flex flex-col gap-2 p-8"}>
        <Heading as={"h2"}>Top Artistas</Heading>
        <Heading as={"h5"} className={"text-grey-300"}>
          Aqui você encontra seus artistas preferidos
        </Heading>
      </section>
      <Suspense fallback={<ArtistsSkeleton />}>
        <TopArtist />
      </Suspense>
    </main>
  );
}
