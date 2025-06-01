import { z } from "zod";

export const userRatingSchema = z.object({
    stars: z.number()
})