import { INotification } from "@/interfaces/notification.interface";
import { useStore } from "@/stores/useStore";

export const useNotification = () => {
  // notifcations
  const notifications = useStore((state) => state.notifications);
  const setNotifications = useStore((state) => state.setNotifications);




  const unreadCount = notifications.filter(
    (n: INotification) => !n.isRead
  ).length;

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };


  
  return {
    unreadCount,
    notifications,
    markAllAsRead,
    markAsRead,
  };
};
