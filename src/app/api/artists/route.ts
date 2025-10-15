import {authSession} from "@lib/auth-session";
import {spotifyApi} from "@/_utils/ofetch-spotify";
import {auth} from "@/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") ?? "5";
  const offset = searchParams.get("offset") ?? "0";

  const session = await authSession();

  const { accessToken } = await auth.api.getAccessToken({
    body: {
      providerId: "spotify",
      userId: session?.session.userId,
    },
  });

  const res = await spotifyApi.raw("/me/top/artists", {
    params: {
      limit: limit,
      offset: offset,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return Response.json({ ...res });
}
