import { z } from "zod";

export const productPersonSchema = z.object({
  name: z.string(),
  paternalSurname: z.string(),
  maternalSurname: z.string(),
  address: z.string().nullable(),
  gender: z.string().nullable(),
  profilePicture: z.string().nullable(),
  createdAt: z.string(), 
});

export type ProductPerson = z.infer<typeof productPersonSchema>;
