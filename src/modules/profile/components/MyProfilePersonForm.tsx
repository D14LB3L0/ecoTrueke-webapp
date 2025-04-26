import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { RequiredLabel } from "@/utils/requiredLabel";
import { useMyProfilePersonForm } from "../hooks/useMyProfilePersonForm";
import { Spinner } from "@/components/ui/spinner";
import { InputWithErrorTooltip } from "@/utils/security/inputWithErrorTooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectWithErrorTooltip } from "@/utils/security/SelectWithErrorTooltip";
import 'react-international-phone/style.css';
import { Controller } from "react-hook-form";
import { PhoneInputWithErrorTooltip } from "@/utils/security/phoneInputWithErrorTooltip";

export const MyProfilePersonForm = () => {
  const { form, handleSubmit, isLoading } = useMyProfilePersonForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {/* Name */}
        <h2 className="text-md m-0 mb-6 font-semibold text-muted-foreground">Información Personal</h2>
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

        {/* LastName */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 w-full">
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

        {/* Gender */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => {
            return (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Género</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Género" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Masculino</SelectItem>
                    <SelectItem value="female">Femenino</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            );
          }}
        />

        {/* Document */}
        <h2 className="text-md m-0 mb-6 font-semibold text-muted-foreground">Documento de Identidad</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 w-full">
          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">
                  <RequiredLabel>Tipo de Documento</RequiredLabel>
                </FormLabel>
                <SelectWithErrorTooltip
                  field={field}
                  formState={form.formState}
                  name="documentType"
                  placeholder="Tipo de Documento"
                  options={[
                    { label: "DNI", value: "dni" },
                    { label: "Pasaporte", value: "PASSPORT" },
                    { label: "Carnet de extranjería", value: "CE" },
                  ]}
                />
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

        {/* Contact */}
        <h2 className="text-md m-0 mb-6 font-semibold text-muted-foreground">Información de Contacto</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 w-full">
          <FormItem className="w-full">
            <FormLabel className="font-semibold">
              <RequiredLabel>Número de Celular</RequiredLabel>
            </FormLabel>

            <Controller
              control={form.control}
              name="phone"
              render={({ field }) => (
                <PhoneInputWithErrorTooltip field={field} formState={form.formState} />
              )}
            />
          </FormItem>


          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Dirección</FormLabel>
                <InputWithErrorTooltip field={{ ...field, formState: form.formState }} name="address" placeholder="Dirección" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">{isLoading && <Spinner size="sm" />} Guardar Cambios</Button>
        </div>
      </form>
    </Form >
  );
};
