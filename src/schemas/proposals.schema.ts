import { z } from "zod";

export const proposalSchema = z.object({
  id: z.string(),
  proposerId: z.string(),
  ownerId: z.string(),
  proposalType: z.string(),
  offeredProductId: z.string(),
  requestedProductId: z.string(),
  status: z.string(),
  createdAt: z.string(),
});

export type proposals = z.infer<typeof proposalSchema>

export const userDtoSchema = z.object({
  id: z.string(),
});

export const personDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const productDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  productPicture: z.string()
});

export const proposalProductSchema = z.object({
  id: z.string(),
  proposerId: z.string(),
  ownerId: z.string(),
  proposalType: z.string(),
  status: z.string(),
  createdAt: z.string(), 
  proposerUser: userDtoSchema,
  proposerPerson:personDtoSchema,
  offeredProduct: productDtoSchema,
  requestedProduct: productDtoSchema,
});

export type Proposal = z.infer<typeof proposalProductSchema>;