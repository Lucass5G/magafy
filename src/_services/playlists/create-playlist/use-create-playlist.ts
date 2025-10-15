import {useMutation} from "@tanstack/react-query";
import {mutatePlaylists} from "@/_services/playlists/create-playlist/index";

export function useMutatePlaylist() {
  return useMutation({
    mutationKey: ["create-playlist"],
    mutationFn: mutatePlaylists,
  });
}
