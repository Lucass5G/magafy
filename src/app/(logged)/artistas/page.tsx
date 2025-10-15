import {Suspense} from "react";
import {TopArtist} from "@/_layouts/Artist";
import {ArtistsSkeleton} from "@/_layouts/Artist/artists.skeleton";
import {Heading} from "@components/Typography";


export default function ArtistsPage() {
  return (
    <main className={"flex flex-col gap-4"}>
    <section className={"flex flex-col gap-2 p-8"}>
      <Heading as={"h2"}>Top Artistas</Heading>
      <Heading as={"h5"} className={"text-grey-300"}>
        Aqui você encontra seus artistas preferidos
      </Heading>
    </section>
    <Suspense fallback={<ArtistsSkeleton/>}>
      <TopArtist />
    </Suspense>
    </main>
  );
}
