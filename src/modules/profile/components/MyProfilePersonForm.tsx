import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { RequiredLabel } from "@/utils/requiredLabel";
import { useMyProfilePersonForm } from "../hooks/useMyProfilePersonForm";
import { Spinner } from "@/components/ui/spinner";
import { InputWithErrorTooltip } from "@/utils/security/errorTooltip";


export const MyProfilePersonForm = () => {
  const { form, handleSubmit, isLoading } = useMyProfilePersonForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {/* Nombre */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="font-semibold"><RequiredLabel>Nombre</RequiredLabel></FormLabel>
                <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="name" placeholder="Nombre" />
              </FormItem>
            );
          }}
        />

        {/* Apellidos */}
        <div className="flex gap-5 w-full">
          <FormField
            control={form.control}
            name="paternalSurname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold"><RequiredLabel>Apellido Paterno</RequiredLabel></FormLabel>
                <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="paternalSurname" placeholder="Apellido Paterno" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maternalSurname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold"><RequiredLabel>Apellido Materno</RequiredLabel></FormLabel>
                <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="maternalSurname" placeholder="Apellido Materno" />
              </FormItem>
            )}
          />
        </div>

        {/* Género */}
        <div className="flex gap-5 max-w-[415px]">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold"><RequiredLabel>Género</RequiredLabel></FormLabel>
                <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="gender" placeholder="Género" />
              </FormItem>
            )}
          />
        </div>

        {/* Documento */}
        <div className="flex gap-5 w-full">
          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold"><RequiredLabel>Tipo de Documento</RequiredLabel></FormLabel>
                <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="documentType" placeholder="Tipo de Documento" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="documentNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold"><RequiredLabel>Número de Documento</RequiredLabel></FormLabel>
                <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="documentNumber" placeholder="Número de Documento" />
              </FormItem>
            )}
          />
        </div>

        {/* Contacto */}
        <div className="flex gap-5 w-full">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold"><RequiredLabel>Número de Celular</RequiredLabel></FormLabel>
                <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="phoneNumber" placeholder="Número de Celular" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold"><RequiredLabel>Dirección</RequiredLabel></FormLabel>
                <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="address" placeholder="Dirección" />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">{isLoading && <Spinner size="sm" />} Guardar Cambios</Button>
      </form>
    </Form>
  );
};
