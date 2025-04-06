import { z } from "zod";

export const loginFormSchema = z.object({
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

export type loginFormValues = z.infer<typeof loginFormSchema>