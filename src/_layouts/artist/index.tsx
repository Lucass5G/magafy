import { Heading } from "@components/Typography";
import Image from "next/image";

export function TopArtist() {
  return (
    <main className={"flex flex-col gap-4"}>
      <section className={"flex flex-col gap-2 p-8"}>
        <Heading as={"h2"}>Top Artistas</Heading>
        <Heading as={"h5"} className={"text-grey-300"}>
          Aqui você encontra seus artistas preferidos
        </Heading>
      </section>
      <section className={"flex flex-col gap-4 px-8"}>
        <div className={"flex flex-row gap-4 items-center"}>
          <Image
            src={"globe.svg"}
            alt={"Imagem do artista"}
            width={64}
            height={64}
          />
          <Heading as={"h6"}>Black Alien</Heading>
        </div>
      </section>
    </main>
  );
}
