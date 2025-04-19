import { Bell } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type Notification = {
    id: string
    title: string
    message: string
    time: string
    read: boolean
}

export interface INotificationBell {
    notifications: Notification[]
    unreadCount: number
    markAllAsRead: () => void
    markAsRead: (id: string) => void
}

export function NotificationBell({ notifications, unreadCount, markAllAsRead, markAsRead }: INotificationBell) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="relative cursor-pointer hover:text-green-800">
                    <Bell size={16} />
                    {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                    )}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0">
                <div className="sticky top-0 flex items-center justify-between p-3 bg-background z-10">
                    <p className="text-sm font-medium">Notificaciones</p>
                    {unreadCount > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs text-muted-foreground h-7 px-2"
                            onClick={markAllAsRead}
                        >
                            Marcar todas como leídas
                        </Button>
                    )}
                </div>
                <div className="max-h-[70vh] overflow-y-auto scrollbar-thin">
                    {notifications.length === 0 ? (
                        <div className="p-4 text-center text-sm text-muted-foreground">No tienes notificaciones</div>
                    ) : (
                        <div className="divide-y divide-border">
                            {notifications.map((notification) => (
                                <DropdownMenuItem
                                    key={notification.id}
                                    className={cn("flex flex-col items-start p-3 cursor-default", !notification.read && "bg-muted/50")}
                                    onClick={() => markAsRead(notification.id)}
                                >
                                    <div className="flex w-full justify-between">
                                        <p className="font-medium">{notification.title}</p>
                                        <span className="text-xs text-muted-foreground ml-2">{notification.time}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                                </DropdownMenuItem>
                            ))}
                        </div>
                    )}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
