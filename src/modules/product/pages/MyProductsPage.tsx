import LinkCard from "@/components/LinkCard";
import { Card, CardContent } from "@/components/ui/card";
import { Boxes, Upload } from "lucide-react";

export const MyProductsPage = () => {
  return (
    <div className="space-y-6 min-w-[308px]">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">
          Gestiona fácilmente tus productos
        </h1>
        <h2 className="text-sm text-muted-foreground">
          Elige una sección para comenzar.
        </h2>
      </div>
      <Card className="max-w-[900px]">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LinkCard
            to="/dashboard/my-products/upload"
            icon={<Upload size="40px" className="mx-auto" />}
            title="Subir producto"
            description="Agrega un nuevo producto para vender, intercambiar o donar."
          />

          <LinkCard
            to="/dashboard/products"
            icon={<Boxes size="40px" className="mx-auto" />}
            title="Ver productos"
            description="Revisa y gestiona todos los productos que has registrado."
          />
        </CardContent>
      </Card>
    </div>
  );
};
