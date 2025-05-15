import { Card, CardContent } from "@/components/ui/card";
import { ProductPageForm } from "../components/ProductPageForm";
import { useStore } from "@/stores/useStore";

export const EditProductPage = () => {
  const productId = useStore((state) => state.editProductDashboardId);

  return (
    <div className="space-y-6 min-w-[308px]">
      <h1 className="text-2xl font-bold">Editar producto</h1>
      <Card className="max-w-[900px]">
        <CardContent>
          <ProductPageForm productId={productId} />
        </CardContent>
      </Card>
    </div>
  );
};
