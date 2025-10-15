import type {GetPlaylistsProps, GetPlaylistsResponseProps} from "@/_services/playlists/get-playlists/get-playlists";
import {apiFetch} from "@/_utils/ofetch-base";

export function getPlaylists({ limit = 5, offset = 0 }: GetPlaylistsProps) {
  return apiFetch<GetPlaylistsResponseProps>("/playlists", {
    query: {
      limit,
      offset,
    },
  });
}
