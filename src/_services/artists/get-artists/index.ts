import type {GetArtistsProps, GetArtistsResponseProps,} from "@/_services/artists/get-artists/get-artists";
import {apiFetch} from "@/_utils/ofetch-base";

export function getArtists({ limit = 5, offset = 0 }: GetArtistsProps) {
  return apiFetch<GetArtistsResponseProps>("/artists", {
    query: {
      limit,
      offset,
    },
  });
}
