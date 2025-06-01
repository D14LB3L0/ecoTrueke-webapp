import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/Table/DataTableColumnHeader";
import { IProposalProduct } from "@/interfaces/proposal.interface";
import { RequestedRowActions } from "./RequestedRowActions";
import { useStore } from "@/stores/useStore";
import { ProposalRowAction } from "./ProposalRowAction";

export const ProposalColumn: ColumnDef<IProposalProduct, unknown>[] = [
  {
    accessorKey: "proposerPerson.name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Solicitante"
        className="text-left"
      />
    ),
  },
  {
    accessorKey: "offeredProduct.name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Producto ofrecido"
        className="text-left"
      />
    ),
    cell: ({ row }) => {
      const proposedProduct = row.original as IProposalProduct;
      const setProductId = useStore((state) => state.setProductId);

      return (
        <div
          className="flex items-center gap-2 max-w-[200px]"
          onClick={() => {
            setProductId(proposedProduct.offeredProduct.id);
          }}
        >
          <img
            src={
              proposedProduct.offeredProduct
                ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
                    proposedProduct.offeredProduct.productPicture
                  }`
                : "/placeholder/placeholder.jpg"
            }
            alt="producto"
            className="w-12 h-12 rounded object-cover"
          />
          <span className="capitalize break-words whitespace-normal">
            {proposedProduct.offeredProduct.name ?? ""}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "requestedProduct.name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Producto solicitado"
        className="text-left"
      />
    ),
    cell: ({ row }) => {
      const requestedProduct = row.original as IProposalProduct;
      return (
        <div className="flex items-center gap-2 max-w-[200px]">
          <img
            src={
              requestedProduct.requestedProduct
                ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
                    requestedProduct.requestedProduct.productPicture
                  }`
                : "/placeholder/placeholder.jpg"
            }
            alt="producto"
            className="w-12 h-12 rounded object-cover"
          />
          <span className="capitalize break-words whitespace-normal">
            {requestedProduct.requestedProduct.name ?? ""}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Fecha de solicitud"
        className="text-left"
      />
    ),
    cell: ({ row }) => {
      const dateStr = row.original.createdAt;
      const date = new Date(dateStr);

      return (
        <span className="whitespace-nowrap">
          {date.toLocaleDateString("es-PE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      );
    },
  },
  {
    accessorKey: "id",
    header: ({}) => <div className="text-left w-[70px] md:w-[60px]"></div>,
    cell: ({ row }) => {
      const proposal = row.original as IProposalProduct;
      return proposal.status === "pending" ? (
        <RequestedRowActions proposalId={proposal.id} />
      ) : (
        <ProposalRowAction proposalId={proposal.id} />
      );
    },
  },
];
