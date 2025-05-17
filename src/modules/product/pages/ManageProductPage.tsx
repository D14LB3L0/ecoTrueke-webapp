import { DataTable } from "@/components/Table/DataTable";
import { useStore } from "@/stores/useStore";
import { Card, CardContent } from "@/components/ui/card";
import { useGetPaginatedProductsDashboard } from "@/modules/product/hooks/useGetPaginatedProductsDashboard";
import { columns } from "../components/columns";

export const ManageProductPage = () => {
  // pagination
  const paginationAmountPage = useStore(
    (state) => state.paginationAmountPageProductDashboard
  );
  const paginationPage = useStore(
    (state) => state.paginationPageProductDashboard
  );
  const setPage = useStore((state) => state.setPaginationPageProductDashboard);
  const totalPages = useStore(
    (state) => state.paginationTotalPagesProductDashboard
  );

  // product
  const products = useStore((state) => state.productsDashboard);

  useGetPaginatedProductsDashboard({ myProducts: true });

  return (
    <div className="space-y-6 min-w-[308px]">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Tus productos</h1>
        <h2 className="text-sm text-muted-foreground">
          Selecciona un producto para ver más detalles.
        </h2>
      </div>
      <Card className="max-w-[900px]">
        <CardContent>
          <DataTable
            columns={columns}
            data={products}
            paginationAmountPage={paginationAmountPage}
            paginationPage={paginationPage}
            setPage={setPage}
            totalPages={totalPages}
            link={true}
          />
        </CardContent>
      </Card>
    </div>
  );
};
