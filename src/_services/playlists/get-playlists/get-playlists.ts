import {z} from "zod";
import {ImageSchema} from "@/_services/artists/get-artists/get-artists";

export const PlaylistsItemSchema = z.object({
  id: z.string(),
  collaborative: z.boolean(),
  href: z.url(),
  images: ImageSchema.array(),
  name: z.string(),
  owner: z.object({
    id: z.string(),
    href: z.url(),
    type: z.string(),
    uri: z.string(),
    display_name: z.string().nullable(),
  }),
  public: z.string(),
  type: z.string(),
  uri: z.string(),
});

export const PlaylistsSchema = z.object({
  items: PlaylistsItemSchema.array(),
  limit: z.number(),
  offset: z.number(),
  total: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
});

export const GetPlaylistsResponseSchema = z.object({
  url: z.url(),
  _data: PlaylistsSchema,
});

export type GetPlaylistsResponseProps = z.infer<
  typeof GetPlaylistsResponseSchema
>;

export type GetPlaylistsProps = {
  limit?: number;
  offset?: number;
};
