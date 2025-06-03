import { ColumnDef } from "@tanstack/react-table";
import { IProposalProduct } from "@/interfaces/proposal.interface";
import { DataTableColumnHeader } from "@/components/Table/DataTableColumnHeader";

export const HistoryColumn: ColumnDef<IProposalProduct, unknown>[] = [
  {
    accessorKey: "proposerPerson.name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Solicitante"
        className="text-left"
      />
    ),
    cell: ({ row }) => <span>{row.original.proposerPerson.name}</span>,
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
      const { offeredProduct } = row.original;
      return (
        <div className="flex items-center gap-2 max-w-[200px]">
          <img
            src={
              offeredProduct?.productPicture
                ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
                    offeredProduct.productPicture
                  }`
                : "/placeholder/placeholder.jpg"
            }
            alt="producto ofrecido"
            className="w-10 h-10 rounded object-cover"
          />
          <span className="capitalize break-words whitespace-normal">
            {offeredProduct.name}
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
      const { requestedProduct } = row.original;
      return (
        <div className="flex items-center gap-2 max-w-[200px]">
          <img
            src={
              requestedProduct?.productPicture
                ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
                    requestedProduct.productPicture
                  }`
                : "/placeholder/placeholder.jpg"
            }
            alt="producto solicitado"
            className="w-10 h-10 rounded object-cover"
          />
          <span className="capitalize break-words whitespace-normal">
            {requestedProduct.name}
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
      const date = new Date(row.original.createdAt);
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
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Estado"
        className="text-left"
      />
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      const statusMap: Record<
        string,
        {
          label: string;
        }
      > = {
        completed: { label: "Completado" },
        cancelled: { label: "Cancelado" },
        pending: { label: "Pendiente" },
        rejected: { label: "Rechazado" },
        accepted: { label: "Aceptado" },
      };

      const { label } = statusMap[status] ?? {
        label: status,
      };

      return <div>{label}</div>;
    },
  },
];
