import {SignoutButton} from "@components/(Auth)/SignoutButton";
import {ConditionalRender} from "@components/ConditionalRender";
import {Heading} from "@components/Typography";
import {authSession} from "@lib/auth-session";
import Image from "next/image";
import {use} from "react";

export function Profile() {
  const session = use(authSession());
  return (
    <main className={"flex flex-col flex-1 justify-center items-center gap-4 "}>
      <ConditionalRender when={Boolean(session?.user.image)}>
        <Image
          src={session?.user.image ?? ""}
          alt={"Imagem do usuário"}
          width={128}
          height={128}
          className={"rounded-full w-32 h-32 object-cover"}
        />
      </ConditionalRender>
      <ConditionalRender
        when={!session?.user.image && Boolean(session?.user.name)}
      >
        <span
          className={
            "w-32 h-auto rounded-full flex items-center justify-center bg-button-primary text-6xl"
          }
        >
          {session?.user.name.charAt(0).toUpperCase()}
        </span>
      </ConditionalRender>
      <Heading>{session?.user.name}</Heading>
      <SignoutButton />
    </main>
  );
}
