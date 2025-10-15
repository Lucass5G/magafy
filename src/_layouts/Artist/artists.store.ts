import {create} from "zustand/react";

type PaginationProps = {
  offset: number;
  limit: number;
};

type UseArtistsStoreProps = {
  pagination: PaginationProps;
  setPagination: (val: Partial<PaginationProps>) => void;
};

export const useArtistsStore = create<UseArtistsStoreProps>((set) => ({
  pagination: {
    offset: 0,
    limit: 2,
  },
  setPagination: (val) =>
    set((state) => ({
      pagination: {
        ...state.pagination,
        ...val,
      },
    })),
}));
