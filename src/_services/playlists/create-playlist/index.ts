import type {CreatePlaylistFormProps} from "@components/(Playlists)/CreatePlaylistForm/create-playlist-form";
import {apiFetch} from "@/_utils/ofetch-base";

export function mutatePlaylists(data: CreatePlaylistFormProps) {
  return apiFetch("/playlists", {
    method: "POST",
    body: data,
  });
}
