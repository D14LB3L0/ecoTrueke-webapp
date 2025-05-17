import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IProducts } from "@/interfaces/product.interface";
import { mapProductTransaction } from "@/utils/mapper/Product.mapper";

interface IProductCard {
  products: IProducts[];
}

export const ProductCard = ({ products }: IProductCard) => {
  return (
    <div className="space-y-4">
      <div className="font-semibold text-2xl flex justify-center md:justify-start">Resultados de búsqueda</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        {products.map((product: IProducts) => {
          return (
            <Card
              key={product.id}
              className="w-full rounded-lg shadow-md overflow-hidden p-0"
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
                    className="h-full min-w-[140px] max-w-[140px] object-cover"
                  />
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

                  <Button className=" w-full flex items-center justify-center mt-4">
                    <span>Ver Producto</span>
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
