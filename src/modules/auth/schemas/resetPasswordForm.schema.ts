import { z } from "zod";

export const resetPasswordFormSchema = z.object({
    email: z.string({
        required_error: "Este campo es obligatorio."
    })
        .min(1, { message: "Este campo es obligatorio." })
        .email("El formato no es válido")
        .transform((email) => email.toLowerCase()),
})

export type resetPasswordFormValues = z.infer<typeof resetPasswordFormSchema>