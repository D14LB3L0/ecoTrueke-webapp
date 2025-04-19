import { useState } from "react"
import { Notification } from "../components/Notification"

export const useNotification = () => {
    const [notifications, setNotifications] = useState<Notification[]>([])

    const unreadCount = notifications.filter((notification: Notification) => !notification.read).length

    const markAllAsRead = () => {
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                read: true,
            })),
        )
    }

    const markAsRead = (id: string) => {
        setNotifications(
            notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
        )
    }

    return {
        notifications,
        unreadCount,
        markAllAsRead,
        markAsRead
    }
}
