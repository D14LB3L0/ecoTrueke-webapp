import { useState } from "react";

export const useSearchBar = () => {

    const [query, setQuery] = useState<string>("")

    // search product
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return {
        query,
        setQuery,
        handleSearch
    }
}
