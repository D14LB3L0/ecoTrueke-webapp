import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IProducts } from "@/interfaces/product.interface";
import { useStore } from "@/stores/useStore";
import { mapProductTransaction } from "@/utils/mapper/Product.mapper";
import { useMemo } from "react";
import { Link } from "react-router-dom";

interface IProductCard {
  products: IProducts[];
}

export const ProductCard = ({ products }: IProductCard) => {
  const setProductId = useStore((state) => state.setProductId);

  const proposals = useStore((state) => state.proposalsRequested);

  const requestedProductIds = useMemo(() => {
    return new Set(proposals.map((p) => p.requestedProductId));
  }, [proposals]);

  return (
    <div className="space-y-4">
      <div className="font-semibold text-2xl flex justify-center md:justify-start">
        Resultados de búsqueda
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        {products.map((product: IProducts) => {
          const isRequested = requestedProductIds.has(product.id);

          return (
            <Card
              key={product.id}
              className="w-full rounded-lg shadow-md overflow-hidden p-0 relative"
            >
              <div className="flex flex-col gap-2">
                <div className="h-[100px] flex items-center justify-center mt-4">
                  <img
                    src={
                      product.productPicture
                        ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
                            product.productPicture
                          }`
                        : "/placeholder/placeholder.jpg"
                    }
                    alt={product.name}
                    className="h-full min-w-[150px] rounded-lg max-w-[160px] object-cover"
                  />
                  {isRequested && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full shadow">
                      Solicitud enviada
                    </div>
                  )}
                </div>

                <div className="p-4 space-y-2">
                  <div className="font-semibold text-sm text-gray-800  capitalize">
                    {product.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    Cantidad: {product.quantity}
                  </div>
                  <div className="text-xs text-gray-500">
                    Tipo: {mapProductTransaction(product.typeTranscription)}
                  </div>
                  <Link to={`/home/product/details`}>
                    <Button
                      className=" w-full flex items-center justify-center mt-4"
                      onClick={() => setProductId(product.id)}
                    >
                      <span>Ver Producto</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
