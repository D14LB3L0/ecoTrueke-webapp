import { ColumnDef } from "@tanstack/react-table";
import { IProduct } from "@/interfaces/product.interface";
import { DataTableColumnHeader } from "@/components/Table/DataTableColumnHeader";
import { RowActions } from "./row-actions";

export const columns: ColumnDef<IProduct, unknown>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Nombre"
        className="text-left w-[200px]"
      ></DataTableColumnHeader>
    ),
    cell: ({ row }) => {
      const product = row.original as IProduct;

      return (
        <div className="flex items-center space-x-2 max-w-[180px]">
          <img
            src={product.productPicture ?? ""}
            alt="Producto"
            className="w-12 h-12 rounded object-cover"
          />
          <span className="capitalize break-words whitespace-normal w-full">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "typeTranscription",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="T.Transacción"
        className="text-left w-[110px] md:w-[80px]"
      ></DataTableColumnHeader>
    ),
  },
  {
    accessorKey: "condition",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Condición"
        className="text-left w-[80px] md:w-[60px]"
      ></DataTableColumnHeader>
    ),
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Cantidad"
        className="text-left w-[70px] md:w-[60px]"
      ></DataTableColumnHeader>
    ),
  },
  {
    accessorKey: "id",
    header: ({}) => <div className="text-left w-[70px] md:w-[60px]"></div>,
    cell: ({ row }) => {
      return (
        <RowActions
          productId={row.getValue("id")}
          productName={row.getValue("name")}
        />
      );
    },
  },
];
