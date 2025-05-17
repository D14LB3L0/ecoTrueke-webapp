import { useGetPaginatedProducts } from "@/modules/product/hooks/useGetPaginatedProducts";
import { useState } from "react";

export const useSearchBar = () => {
  const [query, setQuery] = useState<string>("");

  const { refetch } = useGetPaginatedProducts({ searchTerm: query });

  // search product
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") return;

    refetch();
  };

  return {
    query,
    setQuery,
    handleSearch,
  };
};
