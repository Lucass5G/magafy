"use client";
import {Skeleton} from "@components/Skeleton";
import {generateId} from "better-auth";
import {useArtistsStore} from "@/_layouts/(Artists)/Artist/artists.store";

export function ArtistsSkeleton() {
  const { pagination } = useArtistsStore();
  return (
    <div className={" flex flex-col gap-6 px-8"}>
      {Array.from({ length: pagination.limit }).map(() => (
        <div
          className={"flex flex-row gap-4"}
          key={`skeleton-artist-${generateId(5)}`}
        >
          <Skeleton className={"h-16 w-16 rounded-full"} />
          <Skeleton className={"w-1/2 h-16"} />
        </div>
      ))}
    </div>
  );
}
