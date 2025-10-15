import {Button} from "@components/Button";
import {Heading} from "@components/Typography";

export default function PlaylistsPage() {
  return (
    <main className={"flex flex-col gap-4 w-full"}>
      <section className={"flex justify-between items-center p-8"}>
        <div className="flex flex-col gap-2">
          <Heading as={"h2"}>Minhas playlists</Heading>
          <Heading as={"h5"} className={"text-grey-300"}>
            Sua coleção pessoal de playlists
          </Heading>
        </div>
        <Button>Criar playlist</Button>
      </section>
    </main>
  );
}
