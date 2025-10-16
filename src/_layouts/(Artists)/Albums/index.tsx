import {Heading} from "@components/Typography";
import {format} from "date-fns";
import {ArrowLeftIcon} from "lucide-react";
import Image from "next/image";
import {useArtistsAlbums} from "@/_layouts/(Artists)/Albums/use-artists-albums";
import {useArtistsStore} from "@/_layouts/(Artists)/Artist/artists.store";

export function ArtistsAlbums() {
  const { albums } = useArtistsAlbums();
  const { currentArtist, setCurrentArtist } = useArtistsStore();
  return (
    <section className={"flex flex-col gap-8 md:gap-16"}>
      <section className={"flex justify-between items-center"}>
        <button
          type={"button"}
          className={
            "flex flex-row gap-2  items-center hover:opacity-50 hover:cursor-pointer"
          }
          onClick={() => setCurrentArtist(null)}
        >
          <ArrowLeftIcon size={32} className={"w-6 h-6 md:w-8 md:h-8"} />
          <Heading
            as={"h5"}
            className={"font-bold text-sm md:text-base md:flex"}
          >
            {currentArtist?.name}
          </Heading>
        </button>
        <Image
          src={currentArtist?.images[0].url ?? "globe.svg"}
          alt={`Imagem do artista ${currentArtist?.name}`}
          width={currentArtist?.images[0].width ?? 72}
          height={currentArtist?.images[0].height ?? 72}
          className={"w-12 h-12 md:w-18 md:h-18 rounded-full"}
        />
      </section>
      <section className={"flex flex-col gap-8"}>
        {albums.data._data.items.map((album) => (
          <div key={album.id} className={"flex flex-row gap-4 items-center"}>
            <Image
              src={album.images?.[0]?.url ?? "globe.svg"}
              alt={`Album ${album.name}`}
              width={album.images?.[0]?.width ?? 72}
              height={album.images?.[0]?.height ?? 72}
              className={"w-16 h-16 md:max-w-18 md:max-h-18"}
            />
            <div>
              <Heading as={"h5"} className={"text-sm md:text-base"}>
                {album.name}
              </Heading>
              <Heading as={"h6"} className={"text-xs md:text-sm"}>
                {format(
                  new Date(album.release_date.replaceAll("-", "/")),
                  "dd/MM/yyyy",
                )}
              </Heading>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
