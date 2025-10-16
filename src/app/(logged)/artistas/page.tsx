import type {Metadata} from "next";
import {redirect} from "next/navigation";
import {Suspense} from "react";
import {TopArtist} from "@/_layouts/(Artists)/Artist";
import {ArtistsSkeleton} from "@/_layouts/(Artists)/Artist/artists.skeleton";
import {useHasSession} from "@/_utils/has-session";

export const metadata: Metadata = {
  title: "Artistas | Magafy",
};

export default async function ArtistsPage() {
  const hasSession = await useHasSession();

  if (!hasSession) {
    redirect("/entrar");
  }

  return (
    <Suspense fallback={<ArtistsSkeleton />}>
      <TopArtist />
    </Suspense>
  );
}
