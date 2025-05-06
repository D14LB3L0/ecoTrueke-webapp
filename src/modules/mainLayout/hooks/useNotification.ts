import { useGetPaginatedNotifications } from "@/hooks/useGetPaginatedNotifications";
import { INotification } from "@/interfaces/notification.interface";
import { MarkAsReadNotificationService } from "@/service/markAsReadNotification.service";
import { useStore } from "@/stores/useStore";
import { Error } from "@/utils/constants/Error";
import { useState } from "react";
import { toast } from "sonner";

export const useNotification = () => {
  // notifcations
  const notifications = useStore((state) => state.notifications);
  const [markAllAsReadLoading, setMarkAllAsReadLoading] = useState<boolean>();

  // get notifications
  const { refetch } = useGetPaginatedNotifications();

  // count unread notifications
  const unreadCount = notifications.filter(
    (n: INotification) => !n.isRead
  ).length;

  // mark read all notification
  const markAllAsRead = async () => {
    try {
      setMarkAllAsReadLoading(true);

      const notificationIds: string[] = notifications
      .filter((n: INotification) => !n.isRead)
      .map((n: INotification) => n.id);
      
      if (notificationIds.length === 0) {
        return;
      }

      await MarkAsReadNotificationService.markAsReadNotification({
        notificationIds,
      });

      refetch();
    } catch (error: any) {
      toast.dismiss();
      toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR);
    } finally {
      setMarkAllAsReadLoading(false);
    }
  };

  // mark as read one notification
  const markAsRead = async (id: string) => {
    try {
      const notificationIds: string[] = [id];

      await MarkAsReadNotificationService.markAsReadNotification({
        notificationIds,
      });

      refetch();
    } catch (error: any) {
      toast.dismiss();
      toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR);
    }
  };

  return {
    unreadCount,
    notifications,
    markAllAsRead,
    markAllAsReadLoading,
    markAsRead,
  };
};
