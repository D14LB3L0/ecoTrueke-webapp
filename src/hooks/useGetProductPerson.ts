import { productPersonSchema } from "@/schemas/productPerson.schema";
import { GetProductPersonService } from "@/service/getProductPerson.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetProductPerson = (userId: string | undefined) => {
  const setProductPerson = useStore((state) => state.setProductPerson);

  // tanstack
  const query = useQuery({
    queryKey: ["getProductPerson", userId],
    queryFn: async () => {
      const response = await GetProductPersonService.getProductPerson(userId);
      return {
        person: productPersonSchema.parse(response.person),
      };
    },
    staleTime: 0,
    retry: false,
    gcTime: 0,
  });

  useEffect(() => {
    if (query.data?.person) {
      setProductPerson(query.data.person);
    }
  }, [query.data]);

  return { query };
};
