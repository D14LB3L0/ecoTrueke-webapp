import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link, useLocation } from "react-router-dom";
import React from "react";

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
            <React.Fragment key={item.key}>
              {item.href ? (
                <Link to={item.href} className="w-full">
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
                <div onClick={item.onClick} className="w-full cursor-pointer">
                  {collapsed ? (
                    <Tooltip>
                      <TooltipTrigger asChild>{button}</TooltipTrigger>
                      <TooltipContent side="right">{item.name}</TooltipContent>
                    </Tooltip>
                  ) : (
                    button
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </TooltipProvider>
  );
};
