"use client";
import {useCreatePlaylistForm} from "@components/(Playlists)/CreatePlaylistForm/use-create-playlist-form";
import {Button} from "@components/Button";
import {ConditionalRender} from "@components/ConditionalRender";
import {Dialog} from "@components/Dialog";
import {Field} from "@components/Field";
import {Input} from "@components/Input";
import {Spinner} from "@components/Spinner";
import {Controller, FormProvider} from "react-hook-form";

export function CreatePlaylistForm() {
  const { form, onSubmit, open, setOpen, createPlaylist } =
    useCreatePlaylistForm();
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>Criar playlist</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Criar playlist</Dialog.Title>
        </Dialog.Header>
        <FormProvider {...form}>
          <form
            className={"py-4 min-h-[100px]"}
            onSubmit={form.handleSubmit(onSubmit)}
            id={"create-playlist"}
          >
            <Controller
              name={"name"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field.Root data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Minha playlist #4"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <Field.Error errors={[fieldState.error]} />
                  )}
                </Field.Root>
              )}
            />
          </form>
        </FormProvider>

        <Dialog.Footer className={"flex sm:justify-center"}>
          <Button form={"create-playlist"} disabled={createPlaylist.isPending}>
            <ConditionalRender when={createPlaylist.isPending}>
              <Spinner />
            </ConditionalRender>
            Criar
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
