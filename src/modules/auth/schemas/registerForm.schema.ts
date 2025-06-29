import { z } from "zod";

const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']+$/; 

export const registerFormSchema = z.object({
  email: z.string({
    required_error: "Este campo es obligatorio.",
  })
    .min(1, { message: "Este campo es obligatorio." })
    .email("El formato no es válido")
    .transform((email) => email.toLowerCase()),

  password: z.string({
    required_error: "Este campo es obligatorio.",
  }).min(1, { message: "Este campo es obligatorio." }),

  reEnterPassword: z.string({
    required_error: "Este campo es obligatorio.",
  }).min(1, { message: "Este campo es obligatorio." }),

  name: z.string({
    required_error: "Este campo es obligatorio.",
  })
    .min(1, { message: "Este campo es obligatorio." })
    .regex(nameRegex, {
      message: "Solo se permiten letras y caracteres básicos como guiones.",
    }),

  paternalSurname: z.string({
    required_error: "Este campo es obligatorio.",
  })
    .min(1, { message: "Este campo es obligatorio." })
    .regex(nameRegex, {
      message: "Solo se permiten letras y caracteres básicos como guiones.",
    }),

  maternalSurname: z.string({
    required_error: "Este campo es obligatorio.",
  })
    .min(1, { message: "Este campo es obligatorio." })
    .regex(nameRegex, {
      message: "Solo se permiten letras y caracteres básicos como guiones.",
    }),
}).refine((data) => data.password === data.reEnterPassword, {
  message: "Las contraseñas no coinciden.",
  path: ["reEnterPassword"],
});

export type registerFormValues = z.infer<typeof registerFormSchema>;
