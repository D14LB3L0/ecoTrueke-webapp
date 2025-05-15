import { productSchema } from "@/schemas/products.schema";
import { GetProductService } from "@/service/getProduct.service";
import { useStore } from "@/stores/useStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface IUseGetProduct {
  productId: string | undefined;
}

export const useGetProduct = ({ productId }: IUseGetProduct) => {
  // product
  const setProduct = useStore((state) => state.setProductDashboard);

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
    if (query.data) {
      setProduct(query.data.product);
    } else if (query.isFetched) {
      setProduct({
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
  }, [query.data]);

  return { query };
};
