import { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";


interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  totalPages: number;
  setPage: (page: number) => void; 
  paginationPage: number
}

export function DataTablePagination<TData>({
  table,
  totalPages,
  setPage,
  paginationPage
}: DataTablePaginationProps<TData>) {

  const [internalPage, setInternalPage] = useState(
    table.getState().pagination.pageIndex + 1
  );

const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    setInternalPage(paginationPage);
  }, [paginationPage]);

  const handlePageChange = (page: number, setTablePage: () => void) => {
    setTablePage(); // cambia en la tabla
    setInternalPage(page); // cambia visualmente en el número de página al instante

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setPage(page); // llamada externa después del delay
    }, 400);
  };



  return (
    <div className="flex items-center justify-end ">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Página {internalPage} de {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() =>
              handlePageChange(1, () => table.setPageIndex(0))
            }
            disabled={internalPage === 1}
          >
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() =>
              handlePageChange(internalPage - 1, () => table.previousPage())
            }
            disabled={internalPage === 1}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() =>
              handlePageChange(internalPage + 1, () => table.nextPage())
            }
            disabled={internalPage >= totalPages}
          >
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() =>
              handlePageChange(totalPages, () =>
                table.setPageIndex(totalPages - 1)
              )
            }
            disabled={internalPage >= totalPages}
          >
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
