"use client";

import {Button} from "@components/Button";
import {authClient} from "@lib/auth-client";
import {useRouter} from "next/navigation";

export function SignoutButton() {
  const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/entrar");
        },
      },
    });
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}
