import { productSchema } from "@/schemas/products.schema";
import { GetProductService } from "@/service/getProduct.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface IUseGetProduct {
  productId: string | undefined;
  dashboard?: boolean;
}

export const useGetProduct = ({
  productId,
  dashboard = false,
}: IUseGetProduct) => {
  // product
  const setProductDashboard = useStore((state) => state.setProductDashboard);
  const setProduct = useStore((state) => state.setProduct);

  // tanstack
  const query = useQuery({
    queryKey: ["getProduct", productId],
    queryFn: async () => {
      const response = await GetProductService.getProduct({
        productId,
      });
      return {
        product: productSchema.parse(response),
      };
    },
    enabled: !!productId,
    staleTime: 0,
    retry: false,
    gcTime: 0,
  });

  useEffect(() => {
    if (dashboard) {
      if (query.data) {
        setProductDashboard(query.data.product);
      } else if (query.isFetched) {
        setProductDashboard({
          userId: "",
          id: "",
          productPicture: "",
          name: "",
          description: null,
          typeTranscription: "",
          category: [],
          condition: "",
          status: "",
          quantity: 1,
        });
      }
    } else {
      if (query.data) setProduct(query.data?.product);
    }
  }, [query.data]);

  return { query };
};
