import type {
  GetArtistsAlbumsRequestProps,
  GetArtistsAlbumsResponseSchemaProps,
} from "@/_services/artists/albums/get-albums/get-albums";
import {apiFetch} from "@/_utils/ofetch-base";

export function getArtistsAlbums({
  limit = 5,
  offset = 0,
  id,
}: GetArtistsAlbumsRequestProps) {
  return apiFetch<GetArtistsAlbumsResponseSchemaProps>(
    `/artists/${id}/albums`,
    {
      query: {
        limit,
        offset,
      },
    },
  );
}
