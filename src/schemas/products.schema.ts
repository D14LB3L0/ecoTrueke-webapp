import { z } from "zod";

export const productsSchema = z.object({
  id: z.string(),
  productPicture: z.string().nullable(),
  name: z.string(),
  quantity: z.number(),
  typeTranscription: z.string(),
  condition: z.string(),
});

export type Products = z.infer<typeof productsSchema>