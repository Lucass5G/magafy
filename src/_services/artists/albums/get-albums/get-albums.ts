import {z} from "zod";
import {ArtistsItemSchema, ImageSchema,} from "@/_services/artists/get-artists/get-artists";

export const ItemArtistsAlbumsSchema = z.object({
  album_type: z.string(),
  href: z.string(),
  id: z.string(),
  images: ImageSchema.array(),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.string(),
  total_tracks: z.number(),
  type: z.string(),
  uri: z.string(),
  external_urls: z.object({
    spotify: z.string(),
  }),
  artists: z.array(
    ArtistsItemSchema.omit({
      images: true,
      popularity: true,
    }),
  ),
});

export const ArtistsAlbumsSchema = z.object({
  next: z.string().nullable(),
  previous: z.string().nullable(),
  limit: z.number(),
  offset: z.number(),
  total: z.number(),
  items: ItemArtistsAlbumsSchema.array(),
});

export const GetArtistsAlbumsResponseSchema = z.object({
  url: z.url(),
  _data: ArtistsAlbumsSchema,
});

export type GetArtistsAlbumsResponseSchemaProps = z.infer<
  typeof GetArtistsAlbumsResponseSchema
>;

export type GetArtistsAlbumsRequestProps = {
  limit?: number;
  offset?: number;
  id?: string;
};
