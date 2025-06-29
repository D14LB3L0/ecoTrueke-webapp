import { z } from "zod";

const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']+$/;

export const myProfilePersonFormSchema = z.object({
  profilePicture: z.union([
    z
      .instanceof(File)
      .refine((file) => file.size <= 5 * 1024 * 1024, {
        message: "La imagen no debe pesar más de 5MB.",
      })
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
      message: "Solo se permiten letras, espacios y guiones.",
    }),
  paternalSurname: z
    .string({ required_error: "Este campo es obligatorio." })
    .min(1, { message: "Este campo es obligatorio." })
    .regex(nameRegex, {
      message: "Solo se permiten letras, espacios y guiones.",
    }),
  maternalSurname: z
    .string({ required_error: "Este campo es obligatorio." })
    .min(1, { message: "Este campo es obligatorio." })
    .regex(nameRegex, {
      message: "Solo se permiten letras, espacios y guiones.",
    }),
  gender: z.string().optional(),
  documentType: z
    .string({ required_error: "Este campo es obligatorio." })
    .refine((val) => val !== "", {
      message: "Seleccione un tipo de documento válido.",
    }),
  documentNumber: z
    .string({ required_error: "Este campo es obligatorio." })
    .min(8, { message: "Debe tener al menos 8 caracteres." })
    .regex(/^\d+$/, {
      message: "Solo se permiten números.",
    }),
  phone: z
    .string({ required_error: "Este campo es obligatorio." })
    .regex(/^\+?\d{1,4}[\s\-]?\d{6,}$/, {
      message: "Ingrese un número válido con código de país.",
    }),
  address: z.string().optional(),
});

export type myProfilePersonFormValues = z.infer<typeof myProfilePersonFormSchema>;




export const myProfileUserFormSchema = z.object({
    email: z.string({
        required_error: "Este campo es obligatorio."
    })
        .min(1, { message: "Este campo es obligatorio." })
        .email("El formato no es válido")
        .transform((email) => email.toLowerCase()),
    password: z.string({
        required_error: "Este campo es obligatorio."
    }).min(1, { message: "Este campo es obligatorio." })
});

export type myProfileUserFormValues = z.infer<typeof myProfileUserFormSchema>