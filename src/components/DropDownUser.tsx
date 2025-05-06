import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface IDropdown {
    key: string;
    href?: string;
    name: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

export interface IDropdownItem {
    items: IDropdown[];
    children: (props: { open: boolean }) => React.ReactNode;
}

export function DropdownUser({ items, children }: IDropdownItem) {
    const [open, setOpen] = useState(false);

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                {children({ open })}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-2">
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
    );
}
