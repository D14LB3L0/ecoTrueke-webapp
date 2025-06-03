import { userRatingSchema } from "@/schemas/userRating.schema";
import { GetUserRatingService } from "@/service/getUserRating.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetUserRating = (userId: string) => {
  const setAverageStars = useStore((state) => state.setUserStars);

  const query = useQuery({
    queryKey: ["getUserRating", userId],
    queryFn: async () => {
      const response = await GetUserRatingService.getUserRating(userId);
      return {
        averageStars: userRatingSchema.parse(response),
      };
    },
    staleTime: 0,
    retry: false,
    gcTime: 0,
  });

  useEffect(() => {
    if (query.data?.averageStars) {
      setAverageStars(query.data.averageStars);
    }
  }, [query.data]);
  return { query };
};
