"use client"

import { useState, useEffect } from "react"
import type { IProducts } from "@/interfaces/product.interface"
import { Pagination } from "./Pagination"
import { ProductCard } from "./ProductCard"

interface PaginatedProductGridProps {
  products: IProducts[]
  productsPerPage?: number
  columns?: number
}

export const PaginatedProductGrid = ({ products, productsPerPage = 6, columns = 3 }: PaginatedProductGridProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(products.length / productsPerPage)

  // Reset to page 1 if products change
  useEffect(() => {
    setCurrentPage(1)
  }, [products])

  // Get current page products
  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    return products.slice(startIndex, endIndex)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of product grid
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="space-y-6">
      <ProductCard products={getCurrentPageProducts()} />

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </div>
  )
}
