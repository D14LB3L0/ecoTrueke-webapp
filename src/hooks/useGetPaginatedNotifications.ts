import { notificationSchema } from "@/schemas/notification.schema";
import { GetPaginatedNotificationsService } from "@/service/getPaginatedNotifications.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

export const useGetPaginatedNotifications = () => {
  // notification list
  const setNotifications = useStore((state) => state.setNotifications);

  // pagination data
  const page = useStore((state) => state.paginationPage);
  const amountPage = useStore((state) => state.paginationAmountPage);
  const totalPages = useStore((state) => state.setPagintaionTotalPages);

  // tanstack
  const query = useQuery({
    queryKey: ["getListNotification", page],
    queryFn: async () => {
      const response =
        await GetPaginatedNotificationsService.getPaginatedNotifications({
          page,
          amountPage,
        });

      return {
        notification: z
          .array(notificationSchema)
          .parse(response.notifications),
        totalPages: response.totalPages,
      };
    },
    staleTime: 30000,
    retry: false,
    gcTime: 30000,
  });

  useEffect(() => {
    if (query.data) {
      setNotifications(query.data.notification);
      totalPages(query.data.totalPages);
    } else if (query.isFetched) {
      setNotifications([]);
    }
  },[query.data, query.isFetched]);

  return query;
};
