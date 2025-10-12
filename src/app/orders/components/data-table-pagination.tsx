import { Table } from "@tanstack/react-table"
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const currentPage = table.getState().pagination.pageIndex + 1
  const totalPages = table.getPageCount()

  return (
    <div className="flex items-center justify-end px-2 py-4">
      <div className="flex items-center space-x-2">
        {/* Previous button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Page number buttons */}
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            variant={"ghost"}
            size="icon"
            className={cn(
              "h-8 w-8",
              currentPage === i + 1
                ? "text-primary hover:bg-muted/80"
                : "text-primary hover:bg-muted/50"
            )}
            onClick={() => table.setPageIndex(i)}
          >
            {i + 1}
          </Button>
        ))}

        {/* Next button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}