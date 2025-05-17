import { PopupDelete } from "@/components/popupDelete";
import { Spinner } from "@/components/ui/spinner";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { DeleteProductService } from "../service/deleteProduct.service";
import { toast } from "sonner";
import { Success } from "@/utils/constants/Success";
import { useGetPaginatedProductsDashboard } from "@/modules/product/hooks/useGetPaginatedProductsDashboard";
import { useStore } from "@/stores/useStore";

interface RowActionsProps {
  productId: string;
  productName: string;
}

export function RowActions({ productId, productName }: RowActionsProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);
  const [loadingPopUp, setLoadingPopUp] = useState<boolean>(false);

  // refetch list products
  const { refetch } = useGetPaginatedProductsDashboard({ myProducts: true });

  // list
  const setPage = useStore((state) => state.setPaginationPageProductDashboard);
  const page = useStore((state) => state.paginationPageProductDashboard);

  const handleSubmitDeleteProduct = async () => {
    try {
      setLoadingPopUp(true);
      setLoadingProductId(productId);

      const response = await DeleteProductService.DeleteProduct(productId);
      if (response) {
        setPage(1);
        refetch();
        toast.dismiss();
        toast.success(response.message ?? Success.GENERIC);
      }
      setOpen(false);
    } catch (error: any) {
    } finally {
      setLoadingPopUp(false);
      setLoadingProductId(null);
    }
  };

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <div className="flex gap-4 items-center justify-start">
      {loadingProductId === productId ? (
        <div className="flex items-center justify-center w-5 h-5">
          <Spinner size="sm" className="text-destructive" />
        </div>
      ) : (
        <Trash2
          size={20}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="cursor-pointer text-muted-foreground hover:text-destructive"
        />
      )}

      <PopupDelete
        open={open}
        setOpen={setOpen}
        actionButton="Eliminar"
        description={`Esta acción no se puede deshacer. ¿Quieres eliminar el producto ${productName}?`}
        handleSubmit={handleSubmitDeleteProduct}
        isLoading={loadingPopUp}
        title="Eliminar Producto"
      />
    </div>
  );
}
