"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    // Always show first page
    pages.push(1)

    // Calculate range around current page
    let startPage = Math.max(2, currentPage - 1)
    let endPage = Math.min(totalPages - 1, currentPage + 1)

    // Adjust range if at the beginning or end
    if (currentPage <= 2) {
      endPage = Math.min(totalPages - 1, maxPagesToShow - 1)
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - maxPagesToShow + 2)
    }

    // Add ellipsis before range if needed
    if (startPage > 2) {
      pages.push("...")
    }

    // Add pages in range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    // Add ellipsis after range if needed
    if (endPage < totalPages - 1) {
      pages.push("...")
    }

    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div className="flex items-center justify-center mt-8 gap-1">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-9 w-9"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Página anterior</span>
      </Button>

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-3 py-2">
            ...
          </span>
        ) : (
          <Button
            key={`page-${page}`}
            variant={currentPage === page ? "default" : "outline"}
            className={`h-9 w-9 ${currentPage === page ? "bg-primary text-primary-foreground" : ""}`}
            onClick={() => onPageChange(Number(page))}
          >
            {page}
          </Button>
        ),
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-9 w-9"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Página siguiente</span>
      </Button>
    </div>
  )
}
