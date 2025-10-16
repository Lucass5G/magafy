import {useSuspenseQuery} from "@tanstack/react-query";
import {useArtistsStore} from "@/_layouts/(Artists)/Artist/artists.store";
import {getArtistsAlbumsOptions} from "@/_services/artists/albums/get-albums/get-artists-albums-options";

export function useArtistsAlbums() {
  const { currentArtist } = useArtistsStore();

  const albums = useSuspenseQuery({
    ...getArtistsAlbumsOptions({
      offset: 0,
      limit: 5,
      id: currentArtist?.id,
    }),
  });
  return {
    albums,
  };
}
