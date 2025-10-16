import {authSession} from "@lib/auth-session";
import type {NextRequest} from "next/server";
import {spotifyApi} from "@/_utils/ofetch-spotify";
import {auth} from "@/auth";

export async function GET(
  request: NextRequest,
  ctx: RouteContext<"/api/artists/[id]/albums">,
) {
  const { id } = await ctx.params;
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

  if (!session || !accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const res = await spotifyApi.raw(`/artists/${id}/albums`, {
    params: {
      limit: limit,
      offset: offset,
      included_groups: "album",
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return Response.json({ ...res });
}
