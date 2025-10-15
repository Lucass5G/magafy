import {queryOptions} from "@tanstack/react-query";
import type {GetPlaylistsProps} from "@/_services/playlists/get-playlists/get-playlists";
import {getPlaylists} from "@/_services/playlists/get-playlists/index";

export const getPlaylistsOptions = ({
  offset = 0,
  limit = 5,
}: GetPlaylistsProps) => {
  return queryOptions({
    queryKey: ["get-playlists", { limit, offset }],
    queryFn: () => getPlaylists({ limit, offset }),
    retry: 1,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });
};
