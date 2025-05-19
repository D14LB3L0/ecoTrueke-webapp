import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useProductPageForm } from "../hooks/useProductPageForm";
import ImageUploader from "@/components/ImageUploader";
import { RequiredLabel } from "@/utils/requiredLabel";
import { InputWithErrorTooltip } from "@/utils/security/inputWithErrorTooltip";

import { SelectWithErrorTooltip } from "@/utils/security/SelectWithErrorTooltip";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TextareaWithCounter } from "@/components/ui/textarea";

interface IProductPageForm {
  productId?: string;
}

export const ProductPageForm = ({ productId }: IProductPageForm) => {
  const { form, handleSubmit, isLoading, previewUrl } = useProductPageForm({
    productId,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <h2 className="text-md m-0 mb-6 font-semibold text-muted-foreground">
          Información del producto
        </h2>

        <FormField
          control={form.control}
          name="productPicture"
          render={({ field }) => (
            <FormItem className="mb-2 md:mb-4">
              <FormLabel className="font-semibold">Foto de Producto</FormLabel>
              <ImageUploader
                onFileSelect={(file: File | null) => field.onChange(file)}
                previewUrl={previewUrl}
                placeholder={"Sube tu foto del producto"}
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="font-semibold">
                  <RequiredLabel>Nombre</RequiredLabel>
                </FormLabel>
                <InputWithErrorTooltip
                  field={{ ...field, formState: form.formState }}
                  name="name"
                  placeholder="Nombre"
                />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Descripción</FormLabel>
              <TextareaWithCounter
                maxLength={300}
                placeholder="Describe tu producto"
                {...field}
                value={field.value ?? ""}
              />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-8 md:gap-5 w-full">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="font-semibold">
                    <RequiredLabel>Cantidad</RequiredLabel>
                  </FormLabel>
                  <InputWithErrorTooltip
                    field={{
                      ...field,
                      onChange: (e: any) =>
                        field.onChange(Number(e.target.value)),
                      formState: form.formState,
                    }}
                    name="cantidad"
                    placeholder="cant."
                    type="number"
                  />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="typeTransaction"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormLabel className="font-semibold">
                    <RequiredLabel>Tipo de transacción</RequiredLabel>
                  </FormLabel>
                  <SelectWithErrorTooltip
                    disabled={productId ? true : false}
                    field={field}
                    formState={form.formState}
                    name="typeTransaction"
                    placeholder="Seleccionar Transacción"
                    options={[{ label: "Intercambio", value: "exchange" }]}
                  />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormLabel className="font-semibold">
                    <RequiredLabel>Tipo de Condición</RequiredLabel>
                  </FormLabel>
                  <SelectWithErrorTooltip
                    field={field}
                    formState={form.formState}
                    name="condition"
                    placeholder="Seleccionar Documento"
                    options={[
                      { label: "Nuevo", value: "new" },
                      { label: "Regular", value: "fair" },
                      { label: "Malo", value: "poor" },
                    ]}
                  />
                </FormItem>
              );
            }}
          />
        </div>

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => {
            const options = [
              { label: "Tecnología", value: "technology" },
              { label: "Ropa", value: "clothing" },
              { label: "Hogar", value: "home" },
              { label: "Juegos", value: "toys" },
              { label: "Deportes", value: "sports" },
              { label: "Libros", value: "books" },
              { label: "Vehículos", value: "vehicles" },
              { label: "Otros", value: "others" },
            ];

            const handleCheckboxChange = (value: string) => {
              const current = field.value || [];
              if (current.includes(value)) {
                field.onChange(current.filter((v: string) => v !== value));
              } else {
                field.onChange([...current, value]);
              }
            };

            return (
              <FormItem>
                <RequiredLabel>
                  <FormLabel>Categorías</FormLabel>
                </RequiredLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 flex-wrap ml-0.5">
                  {options.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        className="accent-muted-foreground"
                        checked={field.value?.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                      />

                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </FormItem>
            );
          }}
        />
        <div className="flex justify-end mt-8">
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Spinner size="sm" />} Subir Producto
          </Button>
        </div>
      </form>
    </Form>
  );
};
