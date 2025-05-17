import { z } from "zod";

export const productsSchema = z.object({
  id: z.string(),
  productPicture: z.string().nullable(),
  name: z.string(),
  quantity: z.number(),
  typeTranscription: z.string(),
  condition: z.string(),
  status: z.string()
});

export type Products = z.infer<typeof productsSchema>;

export const productSchema = z.object({
  productPicture: z.string().nullable(),
  name: z.string(),
  description: z.string().nullable(),
  typeTranscription: z.string(),
  category: z.array(z.string()).optional(), 
  condition: z.string(),
  status: z.string(),
  quantity: z.number(),
});

export type product = z.infer<typeof productSchema>;
