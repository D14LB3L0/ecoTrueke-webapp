import { z } from "zod";

export const myProfilePersonFormSchema = z.object({
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
    phoneNumber: z.string({
        required_error: "Este campo es obligatorio.",
    })
        .min(8, { message: "Debe tener al menos 8 caracteres." }),
    address: z.string().optional(),
});

export type myProfilePersonFormValues = z.infer<typeof myProfilePersonFormSchema>;
