import { useStore } from "@/stores/useStore";
import { PaginatedProductGrid } from "../components/PaginatedProduct";

export const ProductsPage = () => {
  const products = useStore((state) => state.products);
  const paginationAmount = useStore((state) => state.paginationAmountPageProduct);

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[810px] flex justify-between items-start p-2">
        <div className="min-w-[210px]">filtros</div>
        <div className="min-w-[600px]">
          <PaginatedProductGrid
            products={products}
            productsPerPage={paginationAmount}
            columns={3}
          />
        </div>
      </div>
    </div>
  );
};
