import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useRegisterForm } from "../hooks/useRegisterForm"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RequiredLabel } from "@/utils/requiredLabel";
import { Spinner } from "@/components/ui/spinner";
import { InputWithErrorTooltip } from "@/utils/security/errorTooltip";

export const RegisterForm = () => {
  const { form, handleSubmit, isLoading } = useRegisterForm();

  return (
    <div className="space-y-2 flex flex-col justify-between gap-5">
      <div className="mb-0 md:hidden">
        <img src="/auth/logo-horizontal.webp" alt="Ecotrueke logo horizontal" className="w-[100px]" />
      </div>

      <div>
        <h1 className="text-2xl font-bold block">Creación de Cuenta</h1>
        <p className="text-xs block">Crea tu cuenta y explora nuevas formas de trueque sostenible.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col gap-6 md:min-w-[570px]">
            {/* Nombre */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold"><RequiredLabel>Nombre</RequiredLabel></FormLabel>
                  <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="name" placeholder="Nombre" />
                </FormItem>
              )}
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

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold"><RequiredLabel>Correo Electrónico</RequiredLabel></FormLabel>
                  <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="email" placeholder="Correo Electrónico" />
                </FormItem>
              )}
            />

            {/* Contraseña */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold"><RequiredLabel>Contraseña</RequiredLabel></FormLabel>
                  <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="password" password={true} placeholder="Contraseña" />
                </FormItem>
              )}
            />

            {/* Confirmar Contraseña */}
            <FormField
              control={form.control}
              name="reEnterPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold"><RequiredLabel>Confirmar Contraseña</RequiredLabel></FormLabel>
                  <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="reEnterPassword" password={true} placeholder="Confirmar Contraseña" />
                </FormItem>
              )}
            />

            <Separator className="my-2" />
            <Button type="submit">{isLoading && <Spinner size="sm" />} Enviar</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
