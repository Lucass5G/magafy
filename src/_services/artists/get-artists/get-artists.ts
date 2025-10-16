import {z} from "zod";

export const ImageSchema = z.object({
  height: z.number().nullable(),
  width: z.number().nullable(),
  url: z.url().nullable(),
});

export const ArtistsItemSchema = z.object({
  id: z.string(),
  href: z.url(),
  images: ImageSchema.array(),
  name: z.string(),
  popularity: z.number(),
  type: z.string(),
});

export type ArtistItemProps = z.infer<typeof ArtistsItemSchema>;

export const ArtistsSchema = z.object({
  items: ArtistsItemSchema.array(),
  limit: z.number(),
  offset: z.number(),
  total: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
});

export const GetArtistsResponseSchema = z.object({
  url: z.url(),
  _data: ArtistsSchema,
});

export type GetArtistsResponseProps = z.infer<typeof GetArtistsResponseSchema>;

export type GetArtistsProps = {
  limit?: number;
  offset?: number;
};
