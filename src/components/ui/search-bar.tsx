
import React from "react"
import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
    placeholder: string
    handleSearch: (e: React.FormEvent) => void
    query: string
    setQuery: (query: string) => void
}

export function SearchBar({ placeholder, handleSearch, query, setQuery }: SearchBarProps) {

    const handleClear = () => {
        setQuery("")
    }

    return (
        <form onSubmit={handleSearch} className={`relative flex w-full max-w-md items-center`}>
            <Input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pr-16"
            />
            {query && (
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-8 h-8 w-8"
                    onClick={handleClear}
                    aria-label="Limpiar búsqueda"
                >
                    <X className="h-4 w-4" />
                </Button>
            )}
            <Button type="submit" variant="ghost" size="icon" className="absolute right-0 h-full" aria-label="Buscar">
                <Search className="h-4 w-4" />
            </Button>
        </form>
    )
}
