import { z } from "zod";

export const notificationSchema = z.object({
  id: z.string(),
  title: z.string(),
  message: z.string(),
  type: z.string(),
  isRead: z.boolean(),
  link: z.string().nullable(),
  createdAt: z.string(),
});

export type Notification = z.infer<typeof notificationSchema>;
