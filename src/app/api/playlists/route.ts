import {authSession} from "@lib/auth-session";
import {CreatePlaylistRequestSchema} from "@/_services/playlists/create-playlist/create-playlist";
import {spotifyApi} from "@/_utils/ofetch-spotify";
import {auth} from "@/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") ?? "5";
  const offset = searchParams.get("offset") ?? "0";

  const session = await authSession();

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { accessToken } = await auth.api.getAccessToken({
    body: {
      providerId: "spotify",
      userId: session?.session.userId,
    },
  });

  const res = await spotifyApi.raw("/me/playlists", {
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

export async function POST(request: Request) {
  const req = await request.json();
  const parsed = await CreatePlaylistRequestSchema.safeParseAsync(req);

  if (parsed.error) {
    return Response.json({ error: parsed.error });
  }

  const session = await authSession();

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { accessToken } = await auth.api.getAccessToken({
    body: {
      providerId: "spotify",
      userId: session?.session.userId,
    },
  });

  const res = await spotifyApi(`/users/${session?.user.name}/playlists`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: parsed.data,
    retry: false,
  });

  return Response.json({ res });
}
