import { notificationsSchema } from "@/schemas/notifications.schema";
import { GetPaginatedNotificationsService } from "@/service/getPaginatedNotifications.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

export const useGetPaginatedNotifications = () => {
  // notification list
  const setNotifications = useStore((state) => state.setNotifications);

  // pagination data
  const page = useStore((state) => state.paginationPageNotifications);
  const amountPage = useStore((state) => state.paginationAmountPageNotifications);
  const totalPages = useStore((state) => state.setPaginationPageNotifications);

  // tanstack
  const query = useQuery({
    queryKey: ["getListNotifications", page],
    queryFn: async () => {
      const response =
        await GetPaginatedNotificationsService.getPaginatedNotifications({
          page,
          amountPage,
        });

      return {
        notification: z
          .array(notificationsSchema)
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
