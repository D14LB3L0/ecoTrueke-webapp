import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useGetPaginatedProductsDashboard } from "../../hooks/useGetPaginatedProductsDashboard";
import { DataTable } from "@/components/Table/DataTable";
import { useStore } from "@/stores/useStore";
import { IProducts } from "@/interfaces/product.interface";
import { useEffect, useMemo, useState } from "react";
import { ChooseExchangeColumn } from "../ChooseExchangeColumn";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Error } from "@/utils/constants/Error";
import {
  ProposalExchangeRequest,
  ProposalExchangeService,
} from "../../service/proposalExchange.service";
import { Success } from "@/utils/constants/Success";
import { useGetProposalRequested } from "@/hooks/useGetProposalRequested";

interface ChooseProductExchange {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ChooseProductExchange = ({
  open,
  setOpen,
}: ChooseProductExchange) => {
  // products
  const products = useStore((state) => state.productsDashboard);
  const product = useStore((state) => state.product);

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

  // filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product: IProducts) => product.status === "active");
  }, [products]);

  // set page
  useEffect(() => {
    setPage(1);
  }, []);

  // product selected
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const { refetch } = useGetProposalRequested();

  // get products
  useGetPaginatedProductsDashboard({ myProducts: true });

  const handleExchange = async () => {
    if (selectedProductId === null) {
      toast.dismiss();
      toast.warning("No se selecciono ningún producto.");
    }

    const proposalExchangeRequest: ProposalExchangeRequest = {
      ownerId: product.userId,
      proposalType: product.typeTranscription,
      offeredProductId: selectedProductId,
      requestedProductId: product.id,
    };

    const response = await ProposalExchangeService.proposalExchangeService(
      proposalExchangeRequest
    );

    if (response) {
      toast.dismiss();
      toast.success(response.message ?? Success.GENERIC);
      setOpen(false);
      setSelectedProductId(null);
      refetch();
    }

    try {
    } catch (error: any) {
      toast.dismiss();
      toast.warning(error?.response.data.message ?? Error.UNEXPECTED_ERROR);
    }
  };

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
          <DialogTitle className="font-bold text-primary">
            Selecciona un producto para ofrecer
          </DialogTitle>
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

        <div className="flex justify-end">
          <Button onClick={handleExchange}>Enviar solicitud</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
