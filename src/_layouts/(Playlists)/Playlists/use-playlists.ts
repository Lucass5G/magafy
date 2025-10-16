import {useSuspenseQuery} from "@tanstack/react-query";
import {usePlaylistStore} from "@/_layouts/(Playlists)/Playlists/playlist.store";
import {getPlaylistsOptions} from "@/_services/playlists/get-playlists/get-playlists-options";

export function usePlaylists() {
  const { pagination, setPagination } = usePlaylistStore();
  const playlists = useSuspenseQuery({
    ...getPlaylistsOptions({
      offset: pagination.offset,
      limit: pagination.limit,
    }),
  });

  function nextPlaylists() {
    if (!playlists.data._data.next) return;
    setPagination({
      offset: playlists.data._data.offset + 1,
      limit: pagination.limit,
    });
  }

  function previousPlaylists() {
    if (pagination.offset === 0) return;
    setPagination({
      offset: playlists.data._data.offset - 1,
      limit: pagination.limit,
    });
  }

  return {
    playlists,
    nextPlaylists,
    previousPlaylists,
  };
}
