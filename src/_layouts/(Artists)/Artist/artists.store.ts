import {create} from "zustand/react";
import type {ArtistItemProps} from "@/_services/artists/get-artists/get-artists";

export type PaginationProps = {
  offset: number;
  limit: number;
};

type UseArtistsStoreProps = {
  pagination: PaginationProps;
  currentArtist: ArtistItemProps | null;
  setPagination: (val: Partial<PaginationProps>) => void;
  setCurrentArtist: (artist: ArtistItemProps | null) => void;
};

export const useArtistsStore = create<UseArtistsStoreProps>((set) => ({
  pagination: {
    offset: 0,
    limit: 2,
  },
  currentArtist: null ,
  setPagination: (val) =>
    set((state) => ({
      pagination: {
        ...state.pagination,
        ...val,
      },
    })),
  setCurrentArtist: (artist) => set({ currentArtist: artist }),
}));
