import {queryOptions} from "@tanstack/react-query";
import type {GetArtistsAlbumsRequestProps} from "@/_services/artists/albums/get-albums/get-albums";
import {getArtistsAlbums} from "@/_services/artists/albums/get-albums/index";

export const getArtistsAlbumsOptions = ({
  offset,
  limit,
  id,
}: GetArtistsAlbumsRequestProps) => {
  return queryOptions({
    queryKey: ["get-artists-albums", id, { offset, limit }],
    queryFn: () => getArtistsAlbums({ limit, offset, id }),
    retry: 1,
    refetchOnWindowFocus: false,
    retryOnMount: false,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
