import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useMyProfileUserForm } from "../hooks/useMyProfileUserForm";
import { InputWithErrorTooltip } from "@/utils/security/inputWithErrorTooltip";
import { RequiredLabel } from "@/utils/requiredLabel";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { PopupDelete } from "@/components/popupDelete";

export const MyProfileUserForm = () => {
  const { form, handleSubmit, isLoading, openPopupDelete, setOpenPopupDelete, handleSubmitDeleteAccount, isLoadingDelete } = useMyProfileUserForm();

  return (
    <div className="w-full" >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <h2 className="text-md m-0 mb-6 font-semibold text-muted-foreground">Actualizar Contraseña</h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-5 w-full">
            <FormField
              control={form.control}
              name="email"
              disabled
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    <RequiredLabel>Correo Electrónico</RequiredLabel>
                  </FormLabel>
                  <InputWithErrorTooltip
                    field={{ ...field, formState: form.formState }}
                    name="email"
                    placeholder="Correo Electrónico"
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    <RequiredLabel>Contraseña</RequiredLabel>
                  </FormLabel>
                  <InputWithErrorTooltip
                    field={{ ...field, formState: form.formState }}
                    name="password"
                    placeholder="Contraseña"
                    password
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>{isLoading && <Spinner size="sm" />} Guardar Cambios </Button>
          </div>
        </form>
      </Form>

      <div className="border-t pt-8 mt-8 w-full">
        <div className="mb-6">
          <h2 className="text-md m-0 font-semibold text-muted-foreground">Eliminar Cuenta</h2>
          <p className="text-[12px] mb-4 ">Esta acción eliminará permanentemente tu cuenta.</p>
        </div>
        <div className="">
          <Button className="flex justify-end" onClick={() => setOpenPopupDelete(true)} variant="destructive" disabled={isLoading}>Eliminar Cuenta</Button>
        </div>
      </div>

      <PopupDelete
        title="Eliminar Cuenta"
        description="Esta acción no se puede deshacer. ¿Quieres eliminar tu cuenta?"
        actionButton="Eliminar"
        handleSubmit={handleSubmitDeleteAccount}
        open={openPopupDelete}
        setOpen={setOpenPopupDelete}
        isLoading={isLoadingDelete} />
    </div>
  );
}
