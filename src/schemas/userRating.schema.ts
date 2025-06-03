import { z } from "zod";

export const userRatingSchema = z.object({
    averageStars: z.number()
})