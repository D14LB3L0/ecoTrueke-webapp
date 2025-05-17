import { productsSchema } from "@/schemas/products.schema";
import { GetPaginatedProductsService } from "@/modules/product/service/getPaginatedProducts.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

interface IUseGetPaginatedProducts {
  myProducts?: boolean;
}

export const useGetPaginatedProductsDashboard = ({ myProducts = false }: IUseGetPaginatedProducts = {}) => {
  // product list
  const setProducts = useStore((state) => state.setProductsDashboard);

  // pagination data
  const page = useStore((state) => state.paginationPageProductDashboard);
  const amountPage = useStore(
    (state) => state.paginationAmountPageProductDashboard
  );
  const totalPages = useStore(
    (state) => state.setPagintaionTotalPagesProductDashboard
  );

  // tanstack
  const query = useQuery({
    queryKey: ["getListProductsDashboard", page],
    queryFn: async () => {
      const response = await GetPaginatedProductsService.getPaginatedProductsDashboard({
        page,
        amountPage,
        myProducts
      });

      return {
        product: z.array(productsSchema).parse(response.products),
        totalPages: response.totalPages,
      };
    },
    staleTime: 30000,
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
