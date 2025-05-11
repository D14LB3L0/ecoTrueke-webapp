import { Card, CardContent } from "@/components/ui/card";
import { UploadProductPageForm } from "../components/UploadProductPageForm";

export const UploadProductPage = () => {
  return (
    <div className="space-y-6 min-w-[308px]">
      <h1 className="text-2xl font-bold">Subir producto</h1>
      <Card className="max-w-[900px]">
        <CardContent>
          <UploadProductPageForm />
        </CardContent>
      </Card>
    </div>
  );
};
