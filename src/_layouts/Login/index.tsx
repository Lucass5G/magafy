"use client";
import { Button } from "@components/Button";
import { signIn } from "@lib/auth-client";
import Image from "next/image";

export function Login() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center gap-6">
      <Image
        src={"/spotify-logo-white.svg"}
        alt={"Logo spotify com cores brancas em fundo escuro"}
        width={164}
        height={49}
      />
      <h1 className="font-medium text-sm">
        Entra com sua conta Spotify clicando no botão abaixo
      </h1>
      <Button onClick={signIn}>Entrar</Button>
    </main>
  );
}
