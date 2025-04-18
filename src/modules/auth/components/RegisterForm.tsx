import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useRegisterForm } from "../hooks/useRegisterForm"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RequiredLabel } from "@/utils/requiredLabel";
import { Spinner } from "@/components/ui/spinner";

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

            <div className="">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold"><RequiredLabel>Nombre</RequiredLabel> </FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-5 w-full">
              <FormField
                control={form.control}
                name="paternalSurname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-semibold"><RequiredLabel>Apellido Paterno</RequiredLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Apellido Paterno" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maternalSurname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-semibold"><RequiredLabel>Apellido Materno</RequiredLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Apellido Materno" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>


            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold"><RequiredLabel>Correo Electrónico</RequiredLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Correo Electrónico" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold"><RequiredLabel>Contraseña</RequiredLabel></FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reEnterPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold"><RequiredLabel>Confirmar Contraseña</RequiredLabel></FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirmar Contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator className="my-2" />
            <Button type="submit">{isLoading && <Spinner size="sm" />} Enviar </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
