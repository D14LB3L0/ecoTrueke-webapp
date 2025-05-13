import { z } from "zod";

export const notificationsSchema = z.object({
  id: z.string(),
  title: z.string(),
  message: z.string(),
  type: z.string(),
  isRead: z.boolean(),
  link: z.string().nullable(),
  createdAt: z.string(),
});

export type Notifications = z.infer<typeof notificationsSchema>;
