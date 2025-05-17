import { productsSchema } from "@/schemas/products.schema";
import { GetPaginatedProductsService } from "@/modules/product/service/getPaginatedProducts.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

interface IUseGetPaginatedProducts {
  searchTerm: string;
}

export const useGetPaginatedProducts = ({
  searchTerm,
}: IUseGetPaginatedProducts) => {
  // product list
  const setProducts = useStore((state) => state.setProducts);

  // pagination data
  const page = useStore((state) => state.paginationPageProduct);
  const amountPage = useStore((state) => state.paginationAmountPageProduct);
  const totalPages = useStore((state) => state.setPagintaionTotalPagesProduct);

  // tanstack
  const query = useQuery({
    queryKey: ["getListProducts", page],
    queryFn: async () => {
      const response = await GetPaginatedProductsService.getPaginatedProducts({
        page,
        amountPage,
        myProducts: false,
        searchTerm,
      });

      return {
        product: z.array(productsSchema).parse(response.products),
        totalPages: response.totalPages,
      };
    },
    staleTime: 30000,
    enabled: false,
    retry: false,
    gcTime: 30000,
  });

  useEffect(() => {
    if (query.data) {
      setProducts(query.data.product);
      totalPages(query.data.totalPages);
    } else if (query.isFetched) {
      setProducts([]);
    }
  }, [query.data, query.isFetched]);

  return query;
};
