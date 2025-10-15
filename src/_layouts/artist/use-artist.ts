import {useSuspenseQuery} from "@tanstack/react-query";
import {useArtistsStore} from "@/_layouts/artist/artists.store";
import {getArtistsOptions} from "@/_services/artists/get-artists/get-artists-options";

export function useArtist() {
  const { pagination, setPagination } = useArtistsStore();
  const artists = useSuspenseQuery({
    ...getArtistsOptions({
      offset: pagination.offset,
      limit: pagination.limit,
    }),
  });

  function nextArtists() {
    if (!artists.data._data.next) return;
    setPagination({
      offset: artists.data._data.offset + 1,
      limit: pagination.limit,
    });
  }

  function previousArtists() {
    if (pagination.offset === 0) return;
    setPagination({
      offset: artists.data._data.offset - 1,
    });
  }

  return {
    artists,
    nextArtists,
    previousArtists,
    pagination,
  };
}
