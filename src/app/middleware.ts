import {headers} from "next/headers";
import {type NextRequest, NextResponse} from "next/server";
import {auth} from "@/auth";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log("Session: ", session)

  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
export const config = {
  runtime: "nodejs",
};
