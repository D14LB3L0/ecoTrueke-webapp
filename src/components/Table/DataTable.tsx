import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { DataTablePagination } from "./dataTablePagination";
import { useNavigate } from "react-router-dom";
import { IProducts } from "@/interfaces/product.interface";
import { useStore } from "@/stores/useStore";
import { IProposalProduct } from "@/interfaces/proposal.interface";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setPage: (page: number) => void;
  paginationPage: number;
  paginationAmountPage: number;
  totalPages: number;
  link?: boolean;
  details?: boolean;
  history?: boolean;
}

export function DataTable<TData, TValue>({
  data,
  columns,
  setPage,
  paginationPage,
  paginationAmountPage,
  totalPages,
  link,
  details,
  history,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const navigate = useNavigate();

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination: {
        pageIndex: paginationPage - 1,
        pageSize: paginationAmountPage,
      },
    },
    manualPagination: true,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  // product id
  const setProductId = useStore((state) => state.setEditProductDashboardId);
  const setProductIdView = useStore((state) => state.setProductId);

  const handleEdit = (productId: string) => {
    setProductId(productId);
    navigate(`/dashboard/my-products/manage/edit`);
  };

  const handleDetails = (productId: string) => {
    setProductIdView(productId);
    navigate(`/home/product/details?proposal=true`);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => {
                const product = row.original as IProducts;
                const proposal = row.original as IProposalProduct;

                return (
                  <TableRow
                    key={row.id}
                    onClick={() => {
                      if (history) {
                        return;
                      } else if (link && details) {
                        handleDetails(proposal.offeredProduct.id);
                      } else if (link && product.status === "active") {
                        handleEdit(product.id);
                      }
                    }}
                    className={`${
                      link &&
                      (product.status === "active" ||
                        product.status === "accepted")
                        ? "cursor-pointer"
                        : ""
                    }`}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No hay resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination
        table={table}
        totalPages={totalPages}
        setPage={setPage}
        paginationPage={paginationPage}
      />
    </div>
  );
}
