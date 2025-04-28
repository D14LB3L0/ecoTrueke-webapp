import { z } from "zod";

export const myProfilePersonFormSchema = z.object({
    profilePicture: z
        .union([
            z.instanceof(File)
                .refine(file => file.size <= 5 * 1024 * 1024, {
                    message: "La imagen no debe pesar más de 5MB."
                })
                .refine(file => file.type.startsWith('image/'), {
                    message: "El archivo debe ser una imagen."
                }),
            z.null(),
            z.undefined()
        ]),
    name: z.string({
        required_error: "Este campo es obligatorio.",
    }).min(1, { message: "Este campo es obligatorio." }),
    paternalSurname: z.string({
        required_error: "Este campo es obligatorio."
    })
        .min(1, { message: "Este campo es obligatorio." }),
    maternalSurname: z.string({
        required_error: "Este campo es obligatorio."
    }),
    gender: z.string({
        required_error: "Este campo es obligatorio.",
    }).optional(),
    documentType: z
        .string({
            required_error: "Este campo es obligatorio.",
        })
        .refine((val) => val !== "", {
            message: "Seleccione un tipo de documento válido.",
        }),
    documentNumber: z.string({
        required_error: "Este campo es obligatorio.",
    })
        .min(8, { message: "Debe tener al menos 8 caracteres." }),
    phone: z.string().regex(/^\+\d{1,4}[\s-]?\d{6,}$/, {
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