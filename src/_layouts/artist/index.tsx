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
import {useArtist} from "@/_layouts/artist/use-artist";

export function TopArtist() {
  const { artists, nextArtists, previousArtists } = useArtist();

  return (
    <main className={"flex flex-col gap-4"}>
      <section className={"flex flex-col gap-2 p-8"}>
        <Heading as={"h2"}>Top Artistas</Heading>
        <Heading as={"h5"} className={"text-grey-300"}>
          Aqui você encontra seus artistas preferidos
        </Heading>
      </section>
      <section className={"flex flex-col gap-4 px-8"}>
        {artists.data._data.items.map((artist) => (
          <div className={"flex flex-row gap-4 items-center"} key={artist.id}>
            <Image
              src={artist.images?.[0]?.url ?? "globe.svg"}
              alt={"Imagem do artista"}
              width={artist.images?.[0]?.width ?? 64}
              height={artist.images?.[0]?.height ?? 64}
              className={"max-w-16 max-h-16 rounded-full"}
            />
            <Heading as={"h6"}>{artist.name}</Heading>
          </div>
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
      </section>
    </main>
  );
}
