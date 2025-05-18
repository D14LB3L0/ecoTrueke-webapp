import { ColumnDef } from "@tanstack/react-table";
import { IProducts } from "@/interfaces/product.interface";
import { DataTableColumnHeader } from "@/components/Table/DataTableColumnHeader";
import { mapProductCondition } from "@/utils/mapper/Product.mapper";

export const ChooseExchangeColumn = (
  selectedId: string | null,
  setSelectedId: (id: string) => void
): ColumnDef<IProducts, unknown>[] => [
  {
    accessorKey: "id",
    header: () => null,
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="flex justify-center">
          <input
            type="checkbox"
            className="accent-muted-foreground"
            value={product.id}
            checked={selectedId === product.id}
            onChange={() => setSelectedId(product.id)}
          />
        </div>
      );
    },
    size: 40,
  },
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
            alt="producto"
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
];
