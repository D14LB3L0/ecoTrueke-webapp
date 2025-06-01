"use client";

import type React from "react";

import { Bell, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import type { INotification } from "@/interfaces/notification.interface";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useStore } from "@/stores/useStore";
import { Spinner } from "@/components/ui/spinner";
import { useNavigate } from "react-router-dom";

export interface INotificationBell {
  notifications: INotification[];
  unreadCount: number;
  markAllAsRead: () => void;
  markAsRead: (id: string) => void;
  deleteNotification: (id: string) => void;
  markAllAsReadLoading: boolean;
  deleteLoading: string | null;
}

export function NotificationBell({
  notifications,
  unreadCount,
  markAllAsRead,
  markAsRead,
  deleteNotification,
  markAllAsReadLoading,
  deleteLoading,
}: INotificationBell) {
  // pagination
  const currentPage = useStore((state) => state.paginationPageNotifications);
  const totalPages = useStore(
    (state) => state.paginationTotalPagesNotifications
  );

  // change pagination
  const setCurrentPage = useStore(
    (state) => state.setPaginationPageNotifications
  );

  // open notification
  const [open, setOpen] = useState(false);

  const [swipedNotificationId, setSwipedNotificationId] = useState<
    string | null
  >(null);
  const startX = useRef<number | null>(null);
  const currentX = useRef<number | null>(null);
  const swipeThreshold = 45; // necessary pixels

  // restart displacement
  useEffect(() => {
    if (!open) {
      setSwipedNotificationId(null);
    }
  }, [open]);

  const handleTouchStart = (e: React.TouchEvent, _: string) => {
    if (deleteLoading !== null) return;

    startX.current = e.touches[0].clientX;
    currentX.current = startX.current;
    resetAllSwipesExcept(null);
  };

  const handleTouchMove = (e: React.TouchEvent, id: string) => {
    if (!startX.current) return;

    currentX.current = e.touches[0].clientX;
    const diff = startX.current - currentX.current;

    // only allow left swipe
    if (diff > 0) {
      const element = document.getElementById(`notification-${id}`);
      if (element) {
        element.style.transform = `translateX(${-Math.min(
          diff,
          swipeThreshold
        )}px)`;
      }
    }
  };

  const handleTouchEnd = (_: React.TouchEvent, id: string) => {
    if (!startX.current || !currentX.current) return;

    const diff = startX.current - currentX.current;
    const element = document.getElementById(`notification-${id}`);

    if (diff > swipeThreshold) {
      // active options
      setSwipedNotificationId(id);
      resetAllSwipesExcept(id);
      if (element) {
        element.style.transform = `translateX(-${swipeThreshold}px)`;
      }
    } else {
      // original position
      if (element) {
        element.style.transform = "translateX(0)";
      }
      setSwipedNotificationId(null);
    }

    startX.current = null;
    currentX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    if (deleteLoading !== null) return;

    startX.current = e.clientX;
    currentX.current = startX.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!startX.current) return;

      currentX.current = e.clientX;
      const diff = startX.current - currentX.current;

      // Solo permitir deslizamiento hacia la izquierda
      if (diff > 0) {
        const element = document.getElementById(`notification-${id}`);
        if (element) {
          element.style.transform = `translateX(${-Math.min(
            diff,
            swipeThreshold
          )}px)`;
        }
      }

      resetAllSwipesExcept(null);
    };

    const handleMouseUp = (_: MouseEvent) => {
      if (!startX.current || !currentX.current) return;

      const diff = startX.current - currentX.current;
      const element = document.getElementById(`notification-${id}`);

      if (diff > swipeThreshold) {
        // Activar el modo de opciones
        setSwipedNotificationId(id);
        if (element) {
          element.style.transform = `translateX(-${swipeThreshold}px)`;
        }
      } else {
        // Volver a la posición original
        if (element) {
          element.style.transform = "translateX(0)";
        }
        setSwipedNotificationId(null);
      }

      startX.current = null;
      currentX.current = null;

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const resetSwipe = (id: string) => {
    const element = document.getElementById(`notification-${id}`);
    if (element) {
      element.style.transform = "translateX(0)";
    }
    setSwipedNotificationId(null);
  };

  const formatTimeAgo = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: true, locale: es });
  };

  const resetAllSwipesExcept = (idToKeep: string | null) => {
    notifications.forEach((n) => {
      if (n.id !== idToKeep) {
        const el = document.getElementById(`notification-${n.id}`);
        if (el) el.style.transform = "translateX(0)";
      }
    });
  };

  useEffect(() => {
    // Solo cerrar el swipe si la notificación que se estaba deslizando ya terminó de cargar
    if (deleteLoading === null && swipedNotificationId !== null) {
      resetSwipe(swipedNotificationId);
      setSwipedNotificationId(null); // ← muy importante
    }
  }, [deleteLoading]);

  // navigate
  const navigate = useNavigate();

  // reload page
  useEffect(() => {
    if (totalPages == 1 || totalPages == 0) setCurrentPage(1);
  }, [totalPages]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer group">
          <Bell
            size={18}
            className={cn(
              "transition-colors",
              open
                ? "text-primary"
                : "text-muted-foreground group-hover:text-black"
            )}
          />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
          )}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80 p-0 mt-2">
        <div className="sticky top-0 flex items-center justify-between p-3 bg-background z-10">
          <p className="text-sm font-medium">Notificaciones</p>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground h-7 px-2"
              onClick={markAllAsRead}
              disabled={markAllAsReadLoading}
            >
              {markAllAsReadLoading && (
                <Spinner className="text-muted-foreground" size="sm" />
              )}{" "}
              Marcar todas como leídas
            </Button>
          )}
        </div>
        <div className="max-h-[70vh] overflow-y-auto scrollbar-thin">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No tienes notificaciones
            </div>
          ) : (
            <div className="divide-y divide-border">
              {notifications.map((notification) => (
                <div key={notification.id} className="relative overflow-hidden">
                  <div
                    id={`notification-${notification.id}`}
                    className={cn(
                      "flex flex-col items-start p-3  transition-transform duration-200 select-none cursor-pointer",
                      !notification.isRead && "bg-muted/50"
                    )}
                    onTouchStart={(e) => handleTouchStart(e, notification.id)}
                    onTouchMove={(e) => handleTouchMove(e, notification.id)}
                    onTouchEnd={(e) => handleTouchEnd(e, notification.id)}
                    onMouseDown={(e) => handleMouseDown(e, notification.id)}
                    onClick={() => {
                      if (swipedNotificationId !== notification.id) {
                        const notificationId = notification.isRead;
                        if (!notificationId) markAsRead(notification.id);

                        if (notification.link) {
                          navigate(notification.link); // redirect
                        }
                      }
                    }}
                  >
                    <div className="flex w-full justify-between gap-2">
                      <p className="font-medium text-sm">
                        {notification.title}
                      </p>
                      <span className="text-[10px]  w-[60px] text-muted-foreground">
                        {formatTimeAgo(new Date(notification.createdAt))}
                      </span>
                    </div>
                    <p className="text-[12px] text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                  </div>

                  {/* Acciones de deslizamiento */}
                  <div className="absolute top-0 right-0 h-full flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      disabled={deleteLoading === notification.id}
                      className={cn(
                        "h-8 w-8 text-destructive hover:text-destructive rounded-full ml-1 mr-2 transition-opacity duration-200 hover:bg-red-200",
                        swipedNotificationId === notification.id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                      onClick={() => {
                        if (deleteNotification) {
                          deleteNotification(notification.id);
                        }
                      }}
                    >
                      {deleteLoading ? (
                        <Spinner className="text-destructive" size="sm" />
                      ) : (
                        <Trash2 size={16} />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="p-2 border-t">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) {
                          setCurrentPage(currentPage - 1);
                        }
                      }}
                      className={
                        currentPage <= 1 ? "pointer-events-none opacity-50" : ""
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) {
                          setCurrentPage(currentPage + 1);
                        }
                      }}
                      className={
                        currentPage >= totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
