import {queryOptions} from "@tanstack/react-query";
import type {GetArtistsProps} from "@/_services/artists/get-artists/get-artists";
import {getArtists} from "@/_services/artists/get-artists/index";

export const getArtistsOptions = ({
  offset = 0,
  limit = 5,
}: GetArtistsProps) => {
  return queryOptions({
    queryKey: ["get-artists", { limit, offset }],
    queryFn: () => getArtists({ limit, offset }),
    retry: 1,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });
};
