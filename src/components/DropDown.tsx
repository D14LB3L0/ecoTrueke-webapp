import { ChevronDown } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";

export interface IDropdown {
    key: string;
    href?: string;
    name: string
    icon: React.ReactNode;
    onClick?: () => void;
}

export interface IDropdownItem {
    items: IDropdown[];
}

export function Dropdown({ items }: IDropdownItem) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center focus:outline-none">
                <ChevronDown className="h-8 w-4 cursor-pointer hover:text-green-800" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {items.map((item: IDropdown) => (
                    <DropdownMenuItem key={item.key} asChild>
                        {item.href ? (
                            <Link to={item.href} className="flex cursor-pointer items-center gap-2">
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        ) : (
                            <div onClick={item.onClick} className="flex cursor-pointer items-center gap-2">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
