import { useStore } from "@/stores/useStore";
import { PaginatedProductGrid } from "../components/PaginatedProduct";

export const ProductsPage = () => {
  const products = useStore((state) => state.products);
  const paginationAmount = useStore(
    (state) => state.paginationAmountPageProduct
  );

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[820px] flex flex-col lg:flex-row p-2">
        <div className="md:min-w-[210px]">filtros</div>
        <div className="md:min-w-[600px]">
          <PaginatedProductGrid
            products={products}
            productsPerPage={paginationAmount}
          />
        </div>
      </div>
    </div>
  );
};
