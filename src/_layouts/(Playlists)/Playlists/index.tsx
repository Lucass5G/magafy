"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@components/Pagination";
import {Heading} from "@components/Typography";
import Image from "next/image";
import {usePlaylists} from "@/_layouts/(Playlists)/Playlists/use-playlists";

export function Playlists() {
  const { playlists, nextPlaylists, previousPlaylists } = usePlaylists();
  return (
    <section className={"flex flex-col gap-4 px-8"}>
      {playlists.data._data.items.map((playlist) => (
        <div className={"flex flex-row gap-4 items-center"} key={playlist.id}>
          <Image
            src={playlist.images?.[0]?.url ?? "globe.svg"}
            alt={`Imagem da playlist ${playlist.name}`}
            width={playlist.images?.[0]?.width ?? 64}
            height={playlist.images?.[0]?.height ?? 64}
            className={"max-w-16 max-h-16"}
          />
          <div className={"flex flex-col gap-2"}>
            <Heading as={"h5"}>{playlist?.name}</Heading>
            <Heading as={"h6"}>{playlist?.owner?.display_name}</Heading>
          </div>
        </div>
      ))}
      <section>
        <Pagination className={"flex justify-end"}>
          <PaginationContent className={"flex flex-row gap-6"}>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={previousPlaylists}
                aria-label="Go to previous page"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" onClick={nextPlaylists} aria-label="Go to next page" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </section>
  );
}
