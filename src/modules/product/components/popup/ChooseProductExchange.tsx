import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useGetPaginatedProductsDashboard } from "../../hooks/useGetPaginatedProductsDashboard";
import { DataTable } from "@/components/Table/DataTable";
import { useStore } from "@/stores/useStore";
import { IProducts } from "@/interfaces/product.interface";
import { useEffect, useMemo, useState } from "react";
import { ChooseExchangeColumn } from "../ChooseExchangeColumn";

interface ChooseProductExchange {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ChooseProductExchange = ({
  open,
  setOpen,
}: ChooseProductExchange) => {
  const products = useStore((state) => state.productsDashboard);

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

  const filteredProducts = useMemo(() => {
    return products.filter((product: IProducts) => product.status === "active");
  }, [products]);

  useEffect(() => {
    setPage(1);
  }, []);

  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  useGetPaginatedProductsDashboard({ myProducts: true });

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        setSelectedProductId(null);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold text-primary">Selecciona un producto para ofrecer</DialogTitle>
        </DialogHeader>
        <DataTable
          columns={ChooseExchangeColumn(
            selectedProductId,
            setSelectedProductId
          )}
          data={filteredProducts}
          paginationAmountPage={paginationAmountPage}
          paginationPage={paginationPage}
          setPage={setPage}
          totalPages={totalPages}
          link={false}
        />
      </DialogContent>
    </Dialog>
  );
};
