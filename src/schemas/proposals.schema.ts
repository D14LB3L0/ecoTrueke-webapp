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