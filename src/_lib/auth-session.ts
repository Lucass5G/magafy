import {headers} from "next/headers";
import {auth} from "@/auth";

export const authSession = async () => await auth.api.getSession({
    headers: await headers(),
}) ?? undefined;
