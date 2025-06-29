import { Card, CardContent } from "@/components/ui/card";
import { ProductPageForm } from "../components/ProductPageForm";

export const UploadProductPage = () => {
  return (
    <div className="space-y-6 min-w-[308px]">
      <h1 className="text-2xl font-bold">Subir producto</h1>
      <Card className="max-w-[900px]">
        <CardContent>
          <ProductPageForm />
        </CardContent>
      </Card>
    </div>
  );
};
