import { z } from "zod";

const nameRegex = /^[a-zA-ZÀ-ÿ0-9\s\-']+$/; // letras, números, espacios, tildes, guiones, apóstrofes
const descriptionRegex = /^[\wÀ-ÿ0-9\s.,;:()¡!¿?'"%\-]*$/; // más permisivo para descripciones

export const uploadProductFormSchema = z.object({
  productPicture: z.union([
    z
      .instanceof(File)
      .refine((file) => file.size <= 5 * 1024 * 1024, {})
      .refine((file) => file.type.startsWith("image/"), {
        message: "El archivo debe ser una imagen.",
      }),
    z.null(),
    z.undefined(),
  ]),
  name: z
    .string({ required_error: "Este campo es obligatorio." })
    .min(1, { message: "Este campo es obligatorio." })
    .regex(nameRegex, {
      message: "Solo se permiten letras, números y caracteres básicos.",
    }),
  quantity: z
    .number()
    .nonnegative({ message: "Debe ser 0 o mayor" })
    .gt(0, { message: "Debe ser mayor que 0" })
    .nullable(),
  description: z
    .string()
    .max(300)
    .optional()
    .nullable()
    .refine((val) => !val || descriptionRegex.test(val), {
      message: "Contiene caracteres no permitidos.",
    }),
  typeTransaction: z
    .string({ required_error: "Este campo es obligatorio." })
    .refine((val) => val !== "", {
      message: "Seleccione un tipo de transacción.",
    }),
  category: z
    .array(z.string(), {
      required_error: "Seleccione al menos una categoría.",
    })
    .min(1, { message: "Seleccione al menos una categoría." }),
  condition: z
    .string({ required_error: "Este campo es obligatorio." })
    .refine((val) => val !== "", {
      message: "Seleccione un tipo de condición.",
    }),
});

export type uploadProductFormValues = z.infer<typeof uploadProductFormSchema>;
