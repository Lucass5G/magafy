import {z} from "zod";

export const CreatePlaylistFormSchema = z.object({
  name: z.string().min(1, {
    error: "O nome da playlist é obrigatório.",
  }),
});

export type CreatePlaylistFormProps = z.infer<typeof CreatePlaylistFormSchema>;
