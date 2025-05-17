import { useStore } from "@/stores/useStore";
import { ProductCard } from "../components/productCard";

export const ProductsPage = () => {
  const products = useStore((state) => state.products);

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[810px] flex justify-between items-start p-2">
        <div className="min-w-[210px]">filtros</div>
        <div className="min-w-[600px]">
          <ProductCard products={products} />
        </div>
      </div>
    </div>
  );
};
