"use client";
import {ConditionalRender} from "@components/ConditionalRender";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@components/Pagination";
import {Heading} from "@components/Typography";
import Image from "next/image";
import {Suspense} from "react";
import {ArtistsAlbums} from "@/_layouts/(Artists)/Albums";
import {useArtistsStore} from "@/_layouts/(Artists)/Artist/artists.store";
import {useArtist} from "@/_layouts/(Artists)/Artist/use-artist";

export function TopArtist() {
  const { artists, nextArtists, previousArtists } = useArtist();
  const { setCurrentArtist, currentArtist } = useArtistsStore();
  return (
    <main className={"flex flex-col gap-4 w-full px-4 md:px-8 pt-6 md:pt-12"}>
      <ConditionalRender when={!currentArtist}>
        <section className={"flex flex-col gap-2"}>
          <Heading as={"h2"}>Top Artistas</Heading>
          <Heading as={"h5"} className={"text-grey-300"}>
            Aqui você encontra seus artistas preferidos
          </Heading>
        </section>
        {artists.data._data.items.map((artist) => (
          <button
            type="button"
            className={
              "flex flex-row gap-4 items-center hover:opacity-50 hover:cursor-pointer"
            }
            key={artist.id}
            onClick={() => setCurrentArtist(artist)}
          >
            <Image
              src={artist.images?.[0]?.url ?? "globe.svg"}
              alt={"Imagem do artista"}
              width={artist.images?.[0]?.width ?? 64}
              height={artist.images?.[0]?.height ?? 64}
              className={"max-w-16 max-h-16 rounded-full"}
            />
            <Heading as={"h6"}>{artist.name}</Heading>
          </button>
        ))}
        <section>
          <Pagination className={"flex justify-end"}>
            <PaginationContent className={"flex flex-row gap-4"}>
              <PaginationItem>
                <PaginationPrevious onClick={previousArtists} />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={nextArtists} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </ConditionalRender>
      <ConditionalRender when={!!currentArtist}>
        <Suspense fallback={<div>Carregando album</div>}>
          <ArtistsAlbums />
        </Suspense>
      </ConditionalRender>
    </main>
  );
}
