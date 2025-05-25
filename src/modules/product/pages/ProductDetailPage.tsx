import { Button } from "@/components/ui/button";
import { useGetProduct } from "@/hooks/useGetProduct";
import { useStore } from "@/stores/useStore";
import {
  mapProductCategory,
  mapProductCondition,
  mapProductStatus,
  mapProductTransaction,
} from "@/utils/mapper/Product.mapper";
import { useState } from "react";
import { ChooseProductExchange } from "../components/popup/ChooseProductExchange";
import { useSearchParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const productId = useStore((state) => state.productId);
  const product = useStore((state) => state.product);

  const [searchParams] = useSearchParams();
  const isProposal = searchParams.get("proposal") === "true";

  useGetProduct({ productId });

  const [openChooseProduct, setOpenChooseProduct] = useState<boolean>(false);

  // proposal
  const proposals = useStore((state) => state.proposalsRequested);
  const hasRequest = proposals.some((p) => p.requestedProductId === product.id);

  // token
  const token = useStore((state) => state.user.token);

  // person
  const phone = useStore((state) => state.person.phone);

  return (
    <div className="p-4">
      <div className="max-w-[810px] mx-auto mb-4 md:flex md:gap-8 rounded-lg shadow-md p-6 bg-muted/50">
        <div className="w-full md:w-[400px] rounded-lg overflow-hidden border border-gray-200">
          <img
            src={
              product.productPicture
                ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
                    product.productPicture
                  }`
                : "/placeholder/placeholder.jpg"
            }
            alt={product.name}
            className="h-[500px] w-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col mt-6 md:mt-0 justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold capitalize text-primary">
              {product.name}
            </h2>
            {product.description && (
              <p className="text-gray-700 mt-2">{product.description}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <span className="font-semibold text-gray-700 block">
                Condición
              </span>
              <span className="text-gray-500">
                {mapProductCondition(product.condition)}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 block">Estado</span>
              <span className="text-gray-500">
                {mapProductStatus(product.status)}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 block">
                Cantidad
              </span>
              <span className="text-gray-500">{product.quantity}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 block">Tipo</span>
              <span className="text-gray-500">
                {mapProductTransaction(product.typeTranscription)}
              </span>
            </div>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-gray-700 block">
              Categorías
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              {product.category && product.category.length > 0 ? (
                product.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-primary px-3 py-1 rounded-full text-[10px] font-medium border border-primary/20 shadow-sm"
                  >
                    {mapProductCategory(cat)}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">Ninguna</span>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 ">
            <Button variant="link" className=" text-sm">
              Ver detalles del usuario
            </Button>

            {isProposal ? (
              <div className="w-full text-center py-2 rounded-md text-sm font-medium shadow-sm">
                Propuesta de intercambio
              </div>
            ) : hasRequest ? (
              <div className="w-full text-center py-2 rounded-md text-sm font-medium shadow-sm">
                Ya solicitaste este producto
              </div>
            ) : (
              <Button
                className="w-full"
                onClick={() => setOpenChooseProduct(true)}
                disabled={token && phone != null ? false : true}
              >
                Solicitar intercambio
              </Button>
            )}
          </div>
        </div>
      </div>

      <ChooseProductExchange
        open={openChooseProduct}
        setOpen={setOpenChooseProduct}
      />
    </div>
  );
};
