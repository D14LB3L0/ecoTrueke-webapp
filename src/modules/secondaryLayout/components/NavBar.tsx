import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link, useLocation } from "react-router-dom";

export interface INavBar {
    key: string;
    href?: string;
    name: string;
    icon: React.ReactNode;
    onClick?: () => void;
}
interface INavBarItem {
    items: INavBar[];
    collapsed: boolean;
}

export const NavBar = ({ items, collapsed }: INavBarItem) => {
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
                        <>{item.href ? (
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
                        ) : (
                            <button
                                key={item.key}
                                onClick={item.onClick}
                                className="w-full"
                            >
                                {collapsed ? (
                                    <Tooltip>
                                        <TooltipTrigger asChild>{button}</TooltipTrigger>
                                        <TooltipContent side="right">{item.name}</TooltipContent>
                                    </Tooltip>
                                ) : (
                                    button
                                )}
                            </button>
                        )}
                        </>
                    );
                })}
            </nav>
        </TooltipProvider>
    );
};
