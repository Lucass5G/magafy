import {CreatePlaylistFormSchema} from "@components/(Playlists)/CreatePlaylistForm/create-playlist-form";

export const CreatePlaylistRequestSchema = CreatePlaylistFormSchema.pick({
  name: true,
});
