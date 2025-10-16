import {create} from "zustand/react";
import type {PaginationProps} from "@/_layouts/(Artists)/Artist/artists.store";

type UsePlaylistStoreProps = {
  pagination: PaginationProps;
  setPagination: (val: Partial<PaginationProps>) => void;
};

export const usePlaylistStore = create<UsePlaylistStoreProps>((set) => ({
  pagination: {
    offset: 0,
    limit: 10,
  },
  setPagination: (val) =>
    set((state) => ({
      pagination: {
        ...state.pagination,
        ...val,
      },
    })),
}));
