import { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const currentPage = table.getState().pagination.pageIndex;
  const totalPages = table.getPageCount();

  // Generate array of page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3;

    let startPage = Math.max(0, currentPage - 1);
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages - 1);

    // Adjust start if we're near the end
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(0, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center mt-4 px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        {/* Rows per page dropdown and page numbers indicator */}
        {/* <div className="flex items-center space-x-2">
          <p className="text-sm font-medium text-white">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px] text-white">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
         */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="rounded-none bg-transparent text-white hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0 rounded-none bg-transparent text-white"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Numbered page buttons */}
          {getPageNumbers().map((pageIndex) => (
            <Button
              key={pageIndex}
              variant="outline"
              className={`h-8 w-8 p-0 rounded-none bg-transparent text-white ${
                currentPage === pageIndex
                  ? "border-custom-gold text-custom-gold"
                  : ""
              }`}
              onClick={() => table.setPageIndex(pageIndex)}
            >
              {pageIndex + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            className="h-8 w-8 p-0 bg-transparent rounded-none text-white"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex bg-transparent rounded-none text-white"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
