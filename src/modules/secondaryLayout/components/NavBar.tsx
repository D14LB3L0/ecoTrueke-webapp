import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link, useLocation } from "react-router-dom";

export interface INavBarItem {
    key: string;
    name: string;
    icon: React.ReactNode;
    href: string;
}
interface INavBar {
    items: INavBarItem[];
    collapsed: boolean;
}

export const NavBar = ({ items, collapsed }: INavBar) => {
    const location = useLocation();

    return (
        <TooltipProvider>
            <nav className="flex flex-col gap-2 w-full">
                {items.map((item) => {
                    const isActive = item.href === location.pathname;

                    const button = (
                        <Button
                            size={collapsed ? "icon" : "sideBar"}
                            variant={collapsed ? "ghost" : "sideBar"}
                            data-active={isActive}
                            className={`
                                w-full transition-all
                                ${collapsed ? "justify-center" : "justify-start gap-2"}
                                ${isActive ? " text-primary bg-primary/10" : "text-muted-foreground hover:text-black"}
                                ${isActive && collapsed ? "bg-primary/10" : ""}
                            `}
                        >
                            {item.icon}
                            {!collapsed && <span>{item.name}</span>}
                        </Button>
                    );

                    return (
                        <Link key={item.key} to={item.href} className="w-full">
                            {collapsed ? (
                                <Tooltip>
                                    <TooltipTrigger asChild>{button}</TooltipTrigger>
                                    <TooltipContent side="right">{item.name}</TooltipContent>
                                </Tooltip>
                            ) : (
                                button
                            )}
                        </Link>
                    );
                })}
            </nav>
        </TooltipProvider>
    );
};
