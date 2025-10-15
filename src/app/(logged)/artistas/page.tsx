import {TopArtist} from "@/_layouts/artist";
import {Suspense} from "react";

export default function ArtistsPage() {
  return (
    <Suspense fallback={<div>Carregando artistas</div>}>
      <TopArtist />
    </Suspense>
  );
}
