import { ColumnDef } from "@tanstack/react-table";
import { IProducts } from "@/interfaces/product.interface";
import { DataTableColumnHeader } from "@/components/Table/DataTableColumnHeader";
import { RowActions } from "./row-actions";
import {
  mapProductCondition,
  mapProductStatus,
  mapProductTransaction,
} from "@/utils/mapper/Product.mapper";

export const columns: ColumnDef<IProducts, unknown>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Nombre"
        className="text-left"
      ></DataTableColumnHeader>
    ),
    cell: ({ row }) => {
      const product = row.original as IProducts;
      return (
        <div className="flex items-center gap-2 max-w-[200px]">
          <img
            src={
              product.productPicture
                ? `${import.meta.env.VITE_API_ECOTRUEKE}EcoTrueke/${
                    product.productPicture
                  }`
                : "/placeholder/placeholder.jpg"
            }
            alt="Producto"
            className="w-12 h-12 rounded object-cover"
          />
          <span className="capitalize break-words whitespace-normal">
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
    cell: ({ row }) => {
      const readableTransaction = mapProductTransaction(
        row.getValue("typeTranscription")
      );
      return (
        <div className="">
          <span className="capitalize break-words whitespace-normal">
            {readableTransaction}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
       header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Estado"
        className="text-left w-[80px] md:w-[60px]"
      ></DataTableColumnHeader>
    ),
      cell: ({ row }) => {
      const readableStatus = mapProductStatus(row.getValue("status"));
      return (
        <div className="">
          <span className="capitalize break-words whitespace-normal">
            {readableStatus}
          </span>
        </div>
      );
    },
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
    cell: ({ row }) => {
      const readableCondition = mapProductCondition(row.getValue("condition"));
      return (
        <div className="">
          <span className="capitalize break-words whitespace-normal">
            {readableCondition}
          </span>
        </div>
      );
    },
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
