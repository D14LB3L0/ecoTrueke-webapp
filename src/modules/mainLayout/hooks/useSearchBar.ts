import { useGetPaginatedProducts } from "@/modules/product/hooks/useGetPaginatedProducts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearchBar = () => {
  const [query, setQuery] = useState<string>("");

  const navigate = useNavigate();

  const { refetch } = useGetPaginatedProducts({ searchTerm: query });

  // search product
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") return;

    navigate("/home/products") 

    refetch();
  };

  return {
    query,
    setQuery,
    handleSearch,
  };
};
