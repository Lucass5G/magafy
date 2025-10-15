import {
  type CreatePlaylistFormProps,
  CreatePlaylistFormSchema,
} from "@components/(Playlists)/CreatePlaylistForm/create-playlist-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useQueryClient} from "@tanstack/react-query";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {toast} from "sonner";
import {useMutatePlaylist} from "@/_services/playlists/create-playlist/use-create-playlist";

export function useCreatePlaylistForm() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const createPlaylist = useMutatePlaylist();
  const form = useForm<CreatePlaylistFormProps>({
    resolver: zodResolver(CreatePlaylistFormSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(data: CreatePlaylistFormProps) {
    createPlaylist.mutate(data, {
      onSuccess: () => {
        queryClient.removeQueries({
          queryKey: ["get-playlists"],
        });
        toast.success("Playlist criada com sucesso!");
        form.reset();
        setOpen(false);
      },
    });
  }

  return {
    open,
    setOpen,
    form,
    onSubmit,
    createPlaylist,
  };
}
