import { PopupDelete } from "@/components/popupDelete";
import { Spinner } from "@/components/ui/spinner";
import {  Trash2 } from "lucide-react";
import { useState } from "react";

interface RowActionsProps {
  productId: string;
  productName: string;
}

export function RowActions({ productId, productName }: RowActionsProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);
  const [loadingPopUp, setLoadingPopUp] = useState<boolean>(false);

  const handleSubmitDeleteProduct = async () => {
    try {
      setLoadingProductId(productId);
      setLoadingPopUp(true);
    } catch (error: any) {
    } finally {
      setLoadingPopUp(false);
      setLoadingProductId(null);
    }
  };

  return (
    <div className="flex gap-4 items-center justify-start">
      {loadingProductId === productId ? (
        <div className="flex items-center justify-center w-5 h-5">
          <Spinner size="sm" />
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
